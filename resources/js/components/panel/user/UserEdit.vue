<template>
    <transition name = "route" mode = "out-in" appear>
        <section>
            <h3 class = "mb-5">ویرایش کاربر</h3>

            <div class = "row mt-3">
                <div class = "col-12 mb-3">
                    <div v-if = "isDefined" class = "card">
                        <div class = "card-body">
                            <form id = "editForm">
                                <div class = "row">
                                    <div class = "col-12 mb-3">
                                        <label class = "form-label">آواتار</label><br/>
                                        <image-cropper name = "index" :src = "data.image" caption = "" :hasCaption = "hasCaption" :isRequired = "imgRequired" :aspect = "aspect"/>
                                        <div id = "imageHelp" class = "form-text error"></div>
                                    </div>
                                </div>
                                <div class = "row">
                                    <div class = "col-md-3 mb-3">
                                        <label for = "name" class = "form-label">نام</label>
                                        <input id = "name" type = "text" :class = "{hasError: errors.name}" :value = "data.name" class = "form-control" aria-describedby = "nameHelp" required>
                                        <div id = "nameHelp" class = "form-text error"></div>
                                        <p class = "form-text error m-0" v-for = "e in errors.name">{{ e }}</p>
                                    </div>
                                    <div class = "col-md-3 mb-3">
                                        <label for = "email" class = "form-label">ایمیل</label>
                                        <input id = "email" type = "email" :class = "{hasError: errors.email}" :value = "data.email" class = "form-control" name = "user_email_" aria-describedby = "emailHelp" required>
                                        <div id = "emailHelp" class = "form-text error"></div>
                                        <p class = "form-text error m-0" v-for = "e in errors.email">{{ e }}</p>
                                    </div>
                                    <div class = "col-md-3 mb-3">
                                        <label for = "mobile" class = "form-label">موبایل</label>
                                        <input id = "mobile" type = "email" :class = "{hasError: errors.mobile}" :value = "data.mobile" class = "form-control" aria-describedby = "mobileHelp" required>
                                        <div id = "mobileHelp" class = "form-text error"></div>
                                        <p class = "form-text error m-0" v-for = "e in errors.mobile">{{ e }}</p>
                                    </div>
                                    <div class = "col-md-3 mb-3">
                                        <label for = "gender" class = "form-label">جنسیت</label>
                                        <select class = "form-select" id = "gender" aria-describedby = "genderHelp" aria-label = "gender" required = "">
                                            <option value = ""></option>
                                            <option :selected = "data.gender === 'خانم'" value = "female">خانم</option>
                                            <option :selected = "data.gender === 'آقا'" value = "male">آقا</option>
                                        </select>
                                        <div id = "genderHelp" class = "form-text error"></div>
                                    </div>
                                    <div class = "col-lg-4 mb-3">
                                        <label for = "current_password" class = "form-label">کلمه عبور فعلی</label>
                                        <input type = "password" :class = "{hasError: errors.current_password}" class = "form-control" name = "_user_pass_" value = " " id = "current_password" aria-describedby = "passwordHelp">
                                        <div class = "form-text error"></div>
                                        <p class = "form-text error m-0" v-for = "e in errors.current_password">{{ e
                                            }}</p>

                                    </div>
                                    <div class = "col-lg-4 mb-3">
                                        <label for = "new_password" class = "form-label">کلمه عبور جدید</label>
                                        <input type = "password" :class = "{hasError: errors.new_password}" class = "form-control" id = "new_password" aria-describedby = "passwordHelp">
                                        <div class = "form-text error"></div>
                                        <p class = "form-text error m-0" v-for = "e in errors.new_password">{{ e }}</p>

                                    </div>
                                    <div class = "col-lg-4 mb-3">
                                        <label for = "new_password_repeat" class = "form-label">تکرار کلمه عبور
                                            جدید</label>
                                        <input type = "password" :class = "{hasError: errors.new_password_repeat}" class = "form-control" id = "new_password_repeat" aria-describedby = "passwordHelp">
                                        <div class = "form-text error"></div>
                                        <p class = "form-text error m-0" v-for = "e in errors.new_password_repeat">{{ e
                                            }}</p>
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
             </section>

    </transition>


</template>

<script>
    import ImageCropper from '../../components/ImageCropper';
    import App from '../App';

    export default {
        components: {ImageCropper},
        data() {
            return {
                id: this.$route.params.id,
                data: {},
                categories: [],
                errors: [],
                image_codes: [],
                image_names: [],
                imgRequired: false,
                hasCaption: false,
                aspect: 16 / 9,
                isDefined: false,
                enableClick: true,
                features: [],
                progress: 0,
            }
        },

        mounted() {


            this.loadData();

        },

        methods: {
            async loadData() {
                await App.methods.checkToken();
                await axios.get('/api/panel/user/' + this.id)
                    .then((response) => {
                        this.data = response.data;
                        if (this.data.features) {
                            for (let i = 0; i < JSON.parse(this.data.features).length; i++) {
                                this.features.push(JSON.parse(this.data.features)[i]);
                            }
                        }
                    })
                    .then(() => {
                        this.isDefined = true;
                    })
                    .catch();


            },
            async updateInfo() {
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
                    await axios.post('/api/panel/user/' + this.$route.params.id,
                        {
                            // image: document.getElementById('Image_index_code').value,
                            name: document.getElementById('name').value,
                            email: document.getElementById('email').value,
                            mobile: document.getElementById('mobile').value,
                            gender: document.getElementById('gender').value,
                            current_password: document.getElementById('current_password').value,
                            new_password: document.getElementById('new_password').value,
                            new_password_repeat: document.getElementById('new_password_repeat').value,
                        })
                        .then((response) => {
                            if (response.status === 200) {
                                setTimeout(() => {
                                    this.$router.push({path: '/panel/user/' + this.id});
                                    // this.$router.push({path: '/panel/users' });
                                }, 1000);
                            }
                        })
                        .catch((error) => {
                            // console.log(error);
                            // console.log(error.message);
                            // console.log(error.response);
                            // console.log(error.response.data);
                            // console.log(error.response.data.exception_code);
                            if (error.status === 422) {
                                let errorList = Array(error.response.data);
                                for (var i = 0; i < errorList.length; i++) {
                                    // console.log('i', errorList[i]);
                                    this.errors = errorList[i];
                                }
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
                                    await document.querySelector('.progress-bar').classList.add('bg-danger');
                                    setTimeout(() => {
                                        alert(error.message);
                                    }, 200);
                                }

                                showAlert();

                            }
                        });
                }

            },

        }
    }
</script>
<style scoped>
    span i {
        cursor: pointer;
    }


</style>
