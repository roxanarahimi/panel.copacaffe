<!-- this is main --->


<!doctype html>
<html lang="fa" dir="rtl">
<head>

</head>
<body>
@if(strpos($_SERVER['REQUEST_URI'], 'panel'))
{{--    panel--}}
{{--    @yield('panel')--}}
<!DOCTYPE html>
<html lang="fa" dir="rtl">
{{--<html lang="en" dir="ltr">--}}
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>مدیریت | panel</title>
    <link rel="icon" href="/images/favicon.png">
    {{--    <link rel="stylesheet" href="{{ asset('/css/bootstrap.min.css', true) }}"/>--}}
    {{--    <link rel="stylesheet" href="{{ asset('/css/bootstrap-icons.css', true) }}"/>--}}
    {{--    <link rel="stylesheet" href="{{ asset('/css/cropper.css', true) }}"/>--}}
    {{--    <script src="{{ asset('js/cropper.js', true) }}"></script>--}}
    {{--  <link href = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel = "stylesheet" integrity = "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin = "anonymous">--}}
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.rtl.min.css"
          integrity="sha384-gXt9imSW0VcJVHezoNQsP+TNrjYXoGcrqBZJpry9zJt8PCQjobwmhMGaDHTASo9N" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.5.12/cropper.css" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.5.12/cropper.js"></script>
    <link rel="stylesheet" href="{{ asset('css/panel.css') }}">
    <link rel="stylesheet" href="{{ asset('css/fonts.css') }}">
    <style>


    </style>
</head>
<body class="bg-light">

<div id="app">
    <panel/>
</div>
{{--<script src="{{ asset('js/app.js?v=1', true) }}"></script>--}}
{{--<script src="{{ asset('js/bootstrap.bundle.min.js', true) }}"></script>--}}
<script src="{{ asset('js/app.js') }}"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>

{{--<script src="https://cdn.ckeditor.com/ckeditor5/33.0.0/classic/ckeditor.js"></script>--}}

{{--<script src="{{ asset('ckeditor5/build/ckeditor.js') }}"></script>--}}
{{--<script>--}}
{{--    ClassicEditor.create(--}}
{{--        document.querySelector('#editor'),--}}
{{--        {--}}
{{--            placeholder: 'متن را وارد کنید...',--}}
{{--        }--}}
{{--    )--}}
{{--        .catch(error => {--}}
{{--            console.log(error);--}}
{{--        });--}}
{{--</script>--}}


</body>
</html>

@else
{{--    site--}}
{{--    @yield('site')--}}
<!DOCTYPE html>
<html lang = "fa" dir = "rtl">
<head>
    <meta charset = "utf-8">
    <meta name = "viewport" content = "width=device-width, initial-scale=1">
    <title>فروشگاه | shop</title>
    {{--    <link rel="stylesheet" href="{{ asset('/css/bootstrap.min.css', true) }}"/>--}}
    {{--    <link rel="stylesheet" href="{{ asset('/css/bootstrap-icons.css', true) }}"/>--}}
    {{--    <link rel="stylesheet" href="{{ asset('/css/cropper.css', true) }}"/>--}}
    {{--    <script src="{{ asset('js/cropper.js', true) }}"></script>--}}
    {{--  <link href = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel = "stylesheet" integrity = "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin = "anonymous">--}}
    <link rel = "stylesheet" href = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.rtl.min.css" integrity = "sha384-gXt9imSW0VcJVHezoNQsP+TNrjYXoGcrqBZJpry9zJt8PCQjobwmhMGaDHTASo9N" crossorigin = "anonymous">
    <link rel = "stylesheet" href = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <link href = "https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.5.12/cropper.css" rel = "stylesheet">
    <script src = "https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.5.12/cropper.js"></script>
    <link rel = "stylesheet" href = "{{ asset('css/site.css') }}">
    <link rel = "stylesheet" href = "{{ asset('css/fonts.css') }}">
    <link rel="icon" href="/images/shop.png">
    <style>
        body, html {
            font-family: 'IranSans'; /*direction: rtl !important;*/
        }
        .en {
            /*font-family: "Montserrat SemiBold" !important;*/
            direction: ltr;
            text-align: left;
        }

    </style>
</head>
<body class = "">

<div id = "site">
    <site/>
</div>
{{--<script src="{{ asset('js/app.js?v=1', true) }}"></script>--}}
{{--<script src="{{ asset('js/bootstrap.bundle.min.js', true) }}"></script>--}}
<script src = "{{ asset('js/app.js') }}"></script>
<script src = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity = "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin = "anonymous"></script>

</body>
</html>

@endif
</body>
</html>
