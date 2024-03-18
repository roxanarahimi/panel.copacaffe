<template>
    <transition name="route" mode="out-in" appear>
        <section>
            <h3 class="mb-5">ثبت اسلاید جدید</h3>

            <div class="row mt-3">
                <div class="col-12 mb-3">
                    <div class="card">
                        <div class="card-body">
                            <form id="editForm">
                                <div class="row">
                                    <div class="col-12 mb-3">
                                        <label class="form-label">تصویر</label><br/>
                                        <image-cropper name="" caption="" :hasCaption="hasCaption"
                                                       :isRequired="imgRequired" :aspect="aspect"/>
                                        <div id="imageHelp" class="form-text error"></div>
                                    </div>
                                </div>
                                <div class="row">
<!--                                    <div class="col-md-3 mb-3">-->
<!--                                        <label for="title" class="form-label">عنوان</label>-->
<!--                                        <input type="text" :class="{hasError: errors.title}" class="form-control"-->
<!--                                               id="title" aria-describedby="titleHelp" required>-->
<!--                                        <div id="titleHelp" class="form-text error"></div>-->
<!--                                        <p class="form-text error m-0" v-for="e in errors.title">{{ e }}</p>-->
<!--                                    </div>-->
<!--                                    <div class="col-md-6 mb-3">-->
<!--                                        <label for="subTitle" class="form-label">زیرنویس</label>-->
<!--                                        <input type="text" :class="{hasError: errors.subTitle}"-->
<!--                                               class="form-control text-start" id="subTitle" required>-->
<!--                                        <div id="subTitleHelp" class="form-text error"></div>-->
<!--                                        <p class="form-text error m-0" v-for="e in errors.subTitle">{{ e }}</p>-->

<!--                                    </div>-->
<!--                                    <div class="col-md-3 mb-3">-->
<!--                                        <label for="link" class="form-label">لینک</label>-->
<!--                                        <input type="text" :class="{hasError: errors.link}" class="form-control"-->
<!--                                               id="link" aria-describedby="linkHelp" required>-->
<!--                                        <div id="linkHelp" class="form-text error"></div>-->
<!--                                        <p class="form-text error m-0" v-for="e in errors.link">{{ e }}</p>-->

<!--                                    </div>-->

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
            id: '',
            blog: [],
            errors: [],
            image_codes: [],
            image_names: [],
            imgRequired: true,
            hasCaption: false,
            aspect: 1536 / 636,
        }
    },
    mounted() {

    },
    methods: {
        async createInfo() {
            await App.methods.checkToken();
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
                for (let i = 0; i < document.getElementsByName('featureLabel').length; i++) {
                    features.push('{"label": "' + document.getElementsByName('featureLabel')[i].value + '", "value": "' + document.getElementsByName('featureValue')[i].value + '"}');
                }
                if (document.getElementsByName('featureLabel').length === 0) {
                    features = '[]';
                } else {
                    features = '[' + features.toString() + ']';
                }
                await axios.post('/api/panel/slide', {
                        image: document.getElementById('Image__code').value,
                        // title: document.getElementById('title').value,
                        // subTitle: document.getElementById('subTitle').value,
                        // link: document.getElementById('link').value,

                    })
                    .then((response) => {
                        if (response.status === 201 || response.status === 200) {
                            setTimeout(() => {
                                this.$router.push({path: '/panel/slides'});
                            }, 1000);

                        }
                    })
                    .catch((error) => {
                        console.log(error);
                        console.log(error.message);
                        console.log(error.data);

                        if (error.status === 422) {
                            let errorList = Array(error.data);
                            for (var i = 0; i < errorList.length; i++) {
                                this.errors = errorList[i];
                            }
                            setTimeout(() => {
                            }, 1000);
                        } else if (error.status === 500) {
                            if (error.data.message.includes("SQLSTATE")) {
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
        },

    }
}
</script>
<style>
span i {
    cursor: pointer;
}
</style>
