<template>
    <transition name="route" mode="out-in" appear>
        <section>
            <h3 class="mb-5">آیکون/ لوگوی سایت</h3>

            <div class="row mt-3">
                <div class="col-12 mb-3">
                    <div class="card">
                        <div class="card-body">
                            <form id="editForm">
                                <div class="row">
                                    <div class="col-12 mb-3">
                                        <label class="form-label">تصویر</label><br/>
                                        <image-cropper name="" caption="" :isPng="isPng" :hasCaption="hasCaption"
                                                       :isRequired="imgRequired" :aspect="aspect"/>
                                        <div id="imageHelp" class="form-text error"></div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 mb-3">
                                        <button class="btn btn-primary" @click.prevent="createInfo" type="submit">
                                            ثبت
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </transition>

</template>

<script>
import ImageCropper from '../../components/ImageCropper';
import App from '../App';

export default {
    components: {ImageCropper},
    data: function () {
        return {
            imgRequired: true,
            hasCaption: false,
            aspect: 1 / 1,
            isPng: true
        }
    },
    mounted() {

    },
    methods: {
        async createInfo() {

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
                let features = [];
                await axios.post('/api/panel/icon', {
                        image: document.getElementById('Image__code').value
                    })
                    .then((response) => {
                        if (response.status === 201 || response.status === 200) {
                            alert('ایکون با موفقیت ثبت شد');
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                        console.log(error.message);
                        console.log(error.data);
                    })
            }
        },
    }
}
</script>
<style>
span i {
    cursor: pointer;
}
</style>
