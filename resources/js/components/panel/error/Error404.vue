<template>
    <transition name = "route" mode = "out-in" appear>
        <div class = "d-flex justify-content-center" id = "box">

            <div>
                <div class = "mt-5 py-3 px-5 text-center bg-dark text-light rounded  mx-auto">
                    <h1 class = "text-center display-1  fw-bold">404</h1>
                    <h5 class = "text-center fw-bold">صفحه پیدا نشد
                    </h5>
                    <a class = "" @click = "this.$router.go(-1)"><h6 class = "btn btn-light py-1 px-5">بازگشت</h6></a>
                </div>
            </div>
        </div>
    </transition>
</template>


<script>
    export default {

        mounted() {
            document.querySelector('.navbar').classList.add('d-none');
            document.querySelector('#sidebar').classList.add('d-none');
            document.querySelector('#sidebar').setAttribute('style', 'width: 0');
            document.querySelector('#main').setAttribute('style', 'width: 100%');
        },
        unmounted() {
            document.querySelector('.navbar').classList.remove('d-none');
            document.querySelector('#sidebar').classList.remove('d-none');
            document.querySelector('#sidebar').removeAttribute('style');
            document.querySelector('#main').removeAttribute('style');
        }
    }

</script>


