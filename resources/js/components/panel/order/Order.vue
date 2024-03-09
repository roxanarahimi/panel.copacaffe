<template>
    <transition name = "route" mode = "out-in" appear>
        <section v-if = "data.id" class = "" style = "text-align: justify">

            <div class = "d-inline-block">
                <p class = "mb-2 fw-bold d-block">جزییات سفارش</p>
                <p class = "mb-2 fw-bold d-block">{{data.code}}</p>
            </div>
            <!--            <router-link :to = "'/panel/edit/order/'+data.id" class = "text-dark">-->
            <!--                <span title = "ویرایش سفارش" class = "mx-3 p-2 d-inline-block align-middle bg-dark text-light rounded-circle">-->
            <!--                    <i class = "bi bi-pencil p-0 edit-pen"></i>-->
            <!--                </span>-->
            <!--            </router-link>-->


            <div class = "row mt-3">
                <div class = "col-xl-8  mb-3">
                    <div class = "card  h-100">
                        <div class = "card-body">
                            <div class = "row">
                                <div class = "col-lg-12 h-100">
                                    <div class = "table-responsive">
                                        <table class = "table mb-0 px-2  rounded" style = "vertical-align: middle">
                                            <thead>
                                            <tr class = "">
                                                <th>#</th>
                                                <th class = " d-none d-md-table-cell"></th>
                                                <th>عنوان</th>
                                                <th>سایز</th>
                                                <th>رنگ</th>
                                                <th>تعداد</th>
                                                <th>قیمت واحد</th>
                                                <th>تخفیف</th>
                                                <th>قیمت نهایی</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr v-for = "(item, index) in data.items"
                                                :key = "item.id"
                                                :data-index = "index">
                                                <th scope = "row">{{ index + 1 }}</th>
                                                <td class = " d-none d-md-table-cell text-end px-0" style = " vertical-align: bottom !important; width: 80px; filter: grayscale(100%);">
                                                    <img class = "img-fluid col-12 px-0 pb-1 pe-1" :src = "item.product.image"/>
                                                </td>
                                                <td style = "vertical-align: middle">
                                                    <small class = "m-0 d-block">{{ item.product.title }}</small>
                                                    <small class = "text-small text-muted m-0 fw-light d-block">{{
                                                        item.product.subTitle }}</small>
                                                    <!-- <small class="m-0  text-muted d-block">color</small> -->
                                                </td>
                                                <td><small class = "text-muted">{{ item.size.size}}</small></td>


                                                <td><small class = "text-muted">{{ item.size.color_name }}</small></td>
                                                <td class = "text-start ps-2" style = "vertical-align: middle !important">
                                                    <div class = "ms-4">{{ item.quantity }}</div>
                                                </td>
                                                <td>
                                                    <small class = "text-muted">{{ item.price }}</small>
                                                </td>
                                                <td>
                                                    <small class = "text-muted">{{ item.price * item.off/100 }}</small>
                                                </td>
                                                <td>
                                                    <small class = "text-muted ">{{ item.price * (1-
                                                        item.off/100)*item.quantity }}</small>
                                                </td>
                                            </tr>

                                            <tr class = "pb-2 m-0 p-0">
                                                <td colspan = "6" class = "m-0 p-0 d-md-none"></td>
                                                <td colspan = "7" class = " d-none d-md-table-cell m-0 p-0"></td>
                                                <td class = "text-muted">هزینه ارسال:</td>
                                                <td class = "text-muted">15000</td>
                                            </tr>
                                            <tr class = "pb-2 m-0 p-0">
                                                <td colspan = "6" class = "m-0 p-0 d-md-none"></td>
                                                <td colspan = "7" class = "m-0 p-0  d-none d-md-table-cell"></td>
                                                <td class = "fw-bold">مبلغ فاکتور:</td>
                                                <td class = "fw-bold" :v-model = "total">{{ parseInt(data.amount)}}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class = "col-lg-12 h-100">
                                    <div class = " p-3">
                                        <p class = "fw-bold mb-1">گیرنده:</p>
                                        <small class = "text-muted"> {{ data.user.name}} </small>
                                        <p class = "fw-bold mb-1">نشانی:</p>
                                        <small class = "text-muted">{{ data.address?.state}} , {{ data.address?.city}} -
                                            {{data.address?.address}} {{data.address?.postal_code}}</small>
                                        <p class = "fw-bold mb-1">تلفن:</p>
                                        <small class = "text-muted"> {{ data.user.mobile}} </small>
                                        <p class = "fw-bold mb-1 mt-3">وضعیت:</p>
                                        <small class = "text-muted">{{ data.payment }} - {{ data.status }}</small>
                                        <p class = "fw-bold mb-1 mt-3">کد رهگیری پست:</p>
                                        <small class = "text-muted">{{ data.post_track_id}}

                                            <a v-if = "data.post_track_id" class = "fw-bold" href = "https://tracking.post.ir/" target = "_blank" data-v-582f9d90 = "">پیگیری
                                                سفارش</a>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class = "col-xl-4  mb-3">
                    <div class = "card  h-100">
                        <div class = "card-body">
                            <div class = "col-lg-12 h-100">
                                <form>
                                    <p class = "fw-bold mb-3">تغییر وضعیت</p>
                                    <div class = "row">
                                        <div class = "col-md-4 col-lg-12 mb-3">
                                            <label for = "status" class = "form-label">وضعیت</label>
                                            <select class = "form-select" id = "status" aria-describedby = "statusHelp" aria-label = "status" required>
                                                <option :selected = "data2.status === 'cart' ? 'selected': false" value = "cart">
                                                    سبد خرید
                                                </option>
                                                <option :selected = "data2.status === 'progress' ? 'selected': false" value = "progress">
                                                    درحال پردازش
                                                </option>
                                                <option :selected = "data2.status === 'ready' ? 'selected': false" value = "ready">
                                                    آماده ارسال
                                                </option>
                                                <option :selected = "data2.status === 'sent' ? 'selected': false" value = "sent">
                                                    ارسال شده
                                                </option>
                                                <option :selected = "data2.status === 'delivered' ? 'selected': false" value = "delivered">
                                                    دریافت شده
                                                </option>
                                                <option :selected = "data2.status === 'canceled' ? 'selected': false" value = "canceled">
                                                    کنسل شده
                                                </option>

                                            </select>
                                            <div id = "statusHelp" class = "form-text error"></div>

                                        </div>
                                        <div class = "col-md-4 col-lg-12 mb-3">
                                            <label for = "payment" class = "form-label">پرداخت</label>
                                            <select class = "form-select" id = "payment" aria-describedby = "paymentHelp" aria-label = "payment" required>
                                                <option :selected = "data2.payment === 'not payed' ? 'selected': false" value = "not payed">
                                                    پرداخت نشده
                                                </option>
                                                <option :selected = "data2.payment === 'payed' ? 'selected': false" value = "payed">
                                                    پرداخت شده
                                                </option>
                                            </select>
                                            <div id = "paymentHelp" class = "form-text error"></div>
                                        </div>
                                        <div class = "col-md-4 col-lg-12 mb-3">
                                            <label for = "post_track_id" class = "form-label">کد رهگیری پست</label>
                                            <input type = "text" :class = "{hasError: false}" :value = "data.post_track_id" class = "form-control text-start" id = "post_track_id">
                                            <div id = "post_track_idHelp" class = "form-text error"></div>
                                            <!--                                            <p class = "form-text error m-0" v-for = "e in errors.post_track_id">{{ e }}</p>-->

                                        </div>
                                        <div class = "col-md-12 mb-3">
                                            <button class = "btn btn-primary" @click.prevent = "updateInfo" type = "submit">
                                                <!--                                        <button class = "btn btn-primary" type = "submit">-->
                                                ویرایش
                                            </button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
        <div v-else><p class = "fw-bold">این سفارش موجود نیست</p></div>

    </transition>


</template>

<script>
    import App from '../App';

    export default {
        data: function () {
            return {
                data: {},
                data2: {},
                id: this.$route.params.id,
                features: [],

            }
        },
        mounted() {
            this.loadData();
        },
        methods: {
            async loadData() {

                await axios.get('/api/panel/order/' + this.id)
                    .then((response) => {
                        this.data = response.data.data;
                        this.data2 = response.data.original;

                    })
                    .catch();

            },
            async updateInfo() {

                this.progress = 0;

                this.errors = [];
                let emptyFieldsCount = 0;
                let req = document.querySelectorAll('[required]');
                req.forEach((element) => {
                    if (element.value === "") {
                        element.classList.add('hasError');
                        element.nextSibling.innerHTML = "فیلد اجباری";
                        emptyFieldsCount++;
                    } else {
                        element.classList.remove('hasError');
                        element.nextSibling.innerHTML = "";
                    }
                });


                if (emptyFieldsCount === 0) {
                    await axios.post('/api/panel/order/' + this.id, {
                            status: document.getElementById('status').value,
                            payment: document.getElementById('payment').value,
                            post_track_id: document.getElementById('post_track_id').value,
                        }
                        , {
                            onUploadProgress: e => {
                                if (e.lengthComputable) {
                                    this.progress = (e.loaded / e.total) * 100;
                                    console.log(e.loaded, e.total);
                                }
                            }
                        })
                        .then((response) => {
                            console.log('order', response.data)
                            if (response.status === 200) {
                                console.log(response);
                               this.loadData();
                                console.log(response);
                                if (response.status === 200) {
                                    setTimeout(() => {
                                        window.location = '/panel/orders'
                                    })
                                }
                            }
                        })
                        .catch((error) => {
                            console.log('order', error);
                            if (error.status === 422) {

                                let errorList = Array(error.data);
                                for (var i = 0; i < errorList.length; i++) {
                                    this.errors = errorList[i];
                                }
                                console.log(this.errors.toString());
                            } else if (error.status === 500) {
                                if (error.response.data.message.includes("SQLSTATE")) {
                                    console.error('خطای پایگاه داده');

                                    async function showAlertSql() {
                                        setTimeout(() => {
                                            alert(error.response.data.message);
                                        }, 200);
                                    }

                                    showAlertSql();
                                } else {
                                    async function showAlert500() {
                                        setTimeout(() => {
                                            alert(error.message + ' '
                                                + error.response.data.message);
                                        }, 200);
                                    }

                                    showAlert500();
                                }
                            } else {

                                async function showAlert() {
                                    setTimeout(() => {
                                        alert(error.message);
                                    }, 200);
                                }

                                showAlert();
                            }


                        })


                }
            }
        }
    }
</script>
<style scoped>

    table {
        overflow-x: scroll !important;
        min-width: 380px !important;
    }

    #content p {
        text-align: justify !important;
        line-height: 30px !important;
        padding-left: 10px;
    }


    .index_image .label {
        display: block;
        font-size: 20px;
        margin: -50px 20px 50px 20px;
    }

    #content figure img {
        max-width: 100%;
    }

    /*.index_image span{*/
    /*    display: inline-block;*/
    /*    right:20px;*/
    /*    bottom: 20px;*/
    /*}*/
    .edit-pen {
        font-size: 12px;
        margin: 0 6px !important;
    }
</style>
