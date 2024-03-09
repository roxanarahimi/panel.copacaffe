<template>
    <div class="col-md-12 mb-3">
        <button id="submit" class="btn btn-primary d-flex justify-content-between" @click="submitForm">
            <slot/>
            <loader-sm class="loader-sm d-none"/>
        </button>
    </div>
</template>

<script>
import LoaderSm from '../components/Loader-sm'

export default {
    components: {LoaderSm},
    name: "BtnSubmit",
    setup() {
        const submitForm = () => {
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
            if (emptyFieldsCount === 0){
                document.querySelector('#submit').setAttribute('disabled', 'disabled');
                document.querySelector('.loader-sm').classList.remove('d-none');
                // setTimeout(()=>{
                //     document.querySelector('#submit')?.removeAttribute('disabled');
                //     document.querySelector('.loader-sm')?.classList.add('d-none');
                // },10000)
            }else {
                document.querySelector('#submit').classList.remove('btn-primary');
                document.querySelector('#submit').classList.add('btn-danger');
                setTimeout(()=>{
                    document.querySelector('#submit').classList.add('btn-primary');
                    document.querySelector('#submit').classList.remove('btn-danger');
                },3000)
            }

        }
        return {
            submitForm,
        }

    }
}
</script>

<style scoped>

</style>
