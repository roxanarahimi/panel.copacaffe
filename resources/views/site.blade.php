<!DOCTYPE html>
<html lang = "fa" dir = "rtl">
<head>
    <meta charset = "utf-8">
    <meta name = "viewport" content = "width=device-width, initial-scale=1">
    <title>سایت | one</title>
    {{--    <link rel="stylesheet" href="{{ asset('/css/bootstrap.min.css', true) }}"/>--}}
    {{--    <link rel="stylesheet" href="{{ asset('/css/bootstrap-icons.css', true) }}"/>--}}
    {{--    <link rel="stylesheet" href="{{ asset('/css/cropper.css', true) }}"/>--}}
    {{--    <script src="{{ asset('js/cropper.js', true) }}"></script>--}}
    {{--  <link href = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel = "stylesheet" integrity = "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin = "anonymous">--}}

    {{--    <link rel = "stylesheet" href = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.rtl.min.css" integrity = "sha384-gXt9imSW0VcJVHezoNQsP+TNrjYXoGcrqBZJpry9zJt8PCQjobwmhMGaDHTASo9N" crossorigin = "anonymous">--}}
{{--    <link rel = "stylesheet" href = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">--}}
{{--    <link href = "https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.5.12/cropper.css" rel = "stylesheet">--}}
{{--    <script src = "https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.5.12/cropper.js"></script>--}}
{{--    <link rel = "stylesheet" href = "{{ asset('css/site.css') }}">--}}
{{--    <link rel = "stylesheet" href = "{{ asset('css/fonts.css') }}">--}}

    <link rel="stylesheet" href="{{ asset('bootstrap-5.2.0-beta1-dist/css/bootstrap.rtl.css') }}"/>
    <link rel="stylesheet" href="{{ asset('bootstrap-icons-1.8.3/font/bootstrap-icons.css') }}">
    <link rel="stylesheet" href="{{ asset('cropperjs-1.5.12/cropperjs-1.5.12/dist/cropper.css') }}">
    <script  src="{{ asset('cropperjs-1.5.12/cropperjs-1.5.12/dist/cropper.js') }}"></script>
    <link rel="stylesheet" href="{{ asset('css/site.css') }}">
    <link rel="stylesheet" href="{{ asset('css/fonts.css') }}">
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

<script src="{{ asset('js/app.js') }}"></script>
<script src="{{ asset('bootstrap-5.2.0-beta1-dist/js/bootstrap.bundle.js') }}"></script>

{{--<script src="{{ asset('js/app.js?v=1', true) }}"></script>--}}
{{--<script src="{{ asset('js/bootstrap.bundle.min.js', true) }}"></script>--}}
{{--<script src = "{{ asset('js/app.js') }}"></script>--}}
{{--<script src = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity = "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin = "anonymous"></script>--}}

</body>
</html>
