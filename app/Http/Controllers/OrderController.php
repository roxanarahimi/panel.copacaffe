<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrderResource;
use App\Models\Finance;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use phpDocumentor\Reflection\Element;
use Zarinpal\Drivers\SoapDriver;

//use Zarinpal\Laravel\Facade\Zarinpal;
//use Zarinpal\Zarinpal;

class OrderController extends Controller
{
    public function index(Request $request)
    {
        try {

//            $data = Order::all()->where('status', '!=', 'cart')->sortByDesc('id');
//            return response(OrderResource::collection($data), 200);
            $perPage = $request['perPage'];
            $data = Order::latest()->where('status', '!=', 'cart')->paginate($perPage);
            $pages_count = ceil($data->total()/$perPage);
            $labels = [];
            for ($i=1; $i <= $pages_count; $i++){
                (array_push($labels,$i));
            }
            return response([
                "data"=>OrderResource::collection($data),
                "pages"=>$pages_count,
                "total"=> $data->total(),
                "labels"=> $labels,
                "title"=> 'سفارش ها',
                "tooltip_new"=> '',

            ], 200);

        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function store(Request $request)
    {

        //if there is cart for user, update items
        //else make new order
        try {
            $cart = Order::where('user_id', $request['user_id'])->where('status', 'cart')->first();
//            dd($cart);
            if (!$cart) {
//                dd('ok');
                $cart = Order::create($request->all('user_id'));
//                dd($cart);
            }

            $item = OrderItem::where('product_id', $request['product_id'])->where('order_id', $cart['id'])->first();
            if ($item) {
                $q = $item['quantity'] + 1;
                $item->update(['quantity' => $q]);
            } else {
                $item = OrderItem::create($request->all(['product_id', 'product_size_id', 'quantity', 'price', 'off']));
                $item->update(['order_id' => $cart['id']]);
            }

            $total = 15000;
            foreach ($cart->items as $item) {
                $total += $item['price'] * (1 - $item['off'] / 100) * $item['quantity'];
            }
            $cart->update(['amount' => $total]);


            return response(new OrderResource($cart), 201);

        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function show(Order $order)
    {
        try {
            return response(new OrderResource($order), 200);

        } catch (\Exception $exception) {
            return response($exception);

        }
    }

    public function showPanel(Order $order)
    {
        try {
            return response(['data' => new OrderResource($order), 'original' => $order], 200);

        } catch (\Exception $exception) {
            return response($exception);

        }
    }

    public function update(Request $request, Order $order)
    {
//        return $request;
        try {
            $order->update($request->all(['status', 'payment', 'post_track_id']));

            return response(new OrderResource($order), 200);

        } catch (\Exception $exception) {
            return response($exception);
        }

    }

    public function userToGateway(Request $request, Order $order)
    {
        $order->update(['user_address_id' => $request['user_address_id']]);
        $CallbackURL = env('APP_URL') . '/api/verify/order/' . $order['id'];
        try {
            $client = new \SoapClient('https://www.zarinpal.com/pg/services/WebGate/wsdl', ['encoding' => 'UTF-8']);
        } catch (\SoapFault $e) {
            echo $e;
        }
        $amount = 1100;// $amount = $order['amount'];
        $result = $client->PaymentRequest([
            'MerchantID' => env('ZARINPAL_MERCHANT_ID'), // $MerchantID,
            'Amount' => $amount, // $Amount,
            'Description' => 'one online shop test', // $Description,
            'Email' => $order->user['email'], // $Email,
            'Mobile' => $order->user['mobile'], // $Mobile,
            'CallbackURL' => $CallbackURL,
        ]);

        if ($result->Status == 100) {
            return response(['url' => 'https://www.zarinpal.com/pg/StartPay/' . $result->Authority]);
        } else {
            return response($result->Status, 400);
        }


    }

    public function verify(Request $request, Order $order)
    {
//    return $request;
        $Authority = $request['Authority'];
        $Amount = 1100; //$Amount = $order->amount;
        $callBack = env('APP_URL') . '/profile';
        if ($request['Status'] === 'OK') {
            $client = new \SoapClient('https://www.zarinpal.com/pg/services/WebGate/wsdl', ['encoding' => 'UTF-8']);
            $result = $client->PaymentVerification(
                [
                    'MerchantID' => env('ZARINPAL_MERCHANT_ID'), // $MerchantID,
                    'Authority' => $Authority,
                    'Amount' => $Amount,
                ]);


            $this->confirm($order);
            return redirect($callBack);

        }
    }

    public function confirm(Order $order)
    {
        try {
            $characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            $charactersLength = strlen($characters);
            $randomString = '';
            for ($i = 0; $i < 5; $i++) {
                $randomString .= $characters[rand(0, $charactersLength - 1)];
            }

            $code = $order['id'] . $randomString;
            $order->update([
                'code' => $code,
                'status' => 'progress',
                'payment' => 'payed'
            ]);

            foreach ($order->items() as $item) {
                $newStock = $item->product->stock - $item['quantity'];
                if ($newStock < 0) {
                    $newStock = 0;
                }
                $item->product->update(['stock' => $newStock]);
            }

            Order::create([
                'user_id' => $order['user_id'],
                'status' => 'cart',
            ]);

            Finance::create([
                "order_id" => $order['id'],
                "amount" => $order['amount'],
                "status" => 'ok', // read from pay
                "track_id" => '1234',
            ]);
            return response($order, 200);

        } catch (\Exception $exception) {
            return response($exception);
        }

    }


    public function destroy(Order $order)
    {

        try {
            $order->items->each->delete();
            $order->delete();
            return response('product deleted', 200);

        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public
    function cancel(Order $order)
    {
        try {
            $order->update(['status', 'canceled']);
            return response(new OrderResource($order), 200);

        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public
    function cart(User $user)
    {

//        return $user;
//        return 'ok';
        try {
//            $cart = Order::where('status', 'cart')->where('user_id',  $userId)->first();
            $cart = $user->cart;
            return response(new OrderResource($cart), 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function removeItem(Request $request)
    {
        try {
            $orderItem = OrderItem::find($request['order_item_id']);
            $order = Order::find($orderItem['order_id']);
            $orderItem->delete();


            $total = 0;
            if (count($order->items)) {
                $total += 15000;
                foreach ($order->items as $item) {
                    $total += $item['price'] * (1 - $item['off'] / 100) * $item['quantity'];
                }
                $order->update(['amount' => $total]);
            } else {
                $order->update(['amount' => 0]);
            }
            return response(new OrderResource($order), 200);

        } catch (\Exception $exception) {

            return response($exception);
        }
    }

    public
    function updateItemQuantity(Request $request)
    {

        try {
            $item = OrderItem::where('id', $request['item_id'])->first();
            if ($item->size['stock'] - $request['quantity'] >= 0) {
                $item->update(['quantity' => $request['quantity']]);
            } else {
                return response('درخواست شما بیش از موجودی محصول است', 400);
            }
            $total = 15000;
            foreach ($item->order->items as $ordeItem) {
                $total += $ordeItem->product['price'] * (1 - $ordeItem->product['off'] / 100) * $ordeItem['quantity'];
            }
            $item->order->update(['amount' => $total]);

            return response(new OrderResource($item->order), 200);
        } catch (\Exception $exception) {
            return response($exception);
        }

    }

    public function payOrder(Request $request, Order $order) // online payment should be here
    {
        try {
            $result = false;
//.............
            $result = true;
            if ($result) {
                $order->update([
                    'status' => 'progress',
                    'payment' => 'payed'
                ]);
            }
            return response(new OrderResource($order), 200);
        } catch (\Exception $exception) {
            return response($exception);
        }

    }

    public
    function cancelByUser(Request $request)
    {
        try {
            $order = Order::find($request['id']);
            $order->update([
                'status' => 'canceled',
                'description' => $request['description'],
            ]);
            foreach ($order->items as $item) {
                $size = $item->size;
                $size->update(['stock' => $item['quantity'] + $size['stock']]);
            }
            return response($order, 200);
        } catch (\Exception $exception) {
            return $exception;
        }

    }

    public
    function userOrders(User $user)
    {

        try {
            $orders = Order::where('user_id', $user['id'])->where('status', '!=', 'cart')->get()->sortByDesc('id');
            return response(OrderResource::collection($orders), 200);

        } catch (\Exception $exception) {
            return response($exception);
        }
    }


}
