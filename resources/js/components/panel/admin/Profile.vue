<template>
    <div class = "row justify-content-center text-left">
        <div class = "col-10 row mt-5 pt-5 justify-content-center">
            <div class = "col-12 col-xl-12">
                <div class = "card" v-if = "data">
                    <div class = "card-body">
                        <p class = "h5 card-title text-center mb-5">ویرایش اطلاعات</p>
                        <p id = "updateMsg" class = "text-center h5 text-success d-none fw-bolder mt-2">
                            ویرایش با موفقیت انجام شد.
                        </p>

                        <form>
                            <div class = "row">
                                <input id = "user_id" type = "hidden" :value = "id" class = "form-control" name = "user_id" aria-describedby = "nameHelp">

                                <div class = "col-md-6 mb-3">
                                    <label for = "name" class = "form-label">نام</label>
                                    <input id = "name" type = "text" :class = "{hasError: errors.name}" :value = "data.name" class = "form-control" name = "name" aria-describedby = "nameHelp" required>
                                    <div id = "nameHelp" class = "form-text error"></div>
                                    <p class = "form-text error m-0" v-for = "e in errors.name">{{ e }}</p>
                                </div>
                                <div class = "col-md-6 mb-3">
                                    <label for = "email" class = "form-label">ایمیل</label>
                                    <input id = "email" type = "email" :class = "{hasError: errors.email}" :value = "data.email" class = "form-control" name = "email" aria-describedby = "emailHelp" required>
                                    <div id = "emailHelp" class = "form-text error"></div>
                                    <p class = "form-text error m-0" v-for = "e in errors.email">{{ e }}</p>
                                </div>

                                <div class = "col-lg-4 mb-3">
                                    <label for = "current_password" class = "form-label">کلمه عبور فعلی</label>
                                    <input type = "password" :class = "{hasError: errors.current_password}" class = "form-control" name = "current_password" id = "current_password" aria-describedby = "passwordHelp">
                                    <div class = "form-text error"></div>
                                    <p class = "form-text error m-0" v-for = "e in errors.current_password">{{ e }}</p>

                                </div>
                                <div class = "col-lg-4 mb-3">
                                    <label for = "new_password" class = "form-label">کلمه عبور جدید</label>
                                    <input type = "password" :class = "{hasError: errors.new_password}" class = "form-control" name = "new_password" id = "new_password" aria-describedby = "passwordHelp">
                                    <div class = "form-text error"></div>
                                    <p class = "form-text error m-0" v-for = "e in errors.new_password">{{ e }}</p>

                                </div>
                                <div class = "col-lg-4 mb-3">
                                    <label for = "new_password_repeat" class = "form-label">تکرار کلمه عبور جدید</label>
                                    <input type = "password" :class = "{hasError: errors.new_password_repeat}" class = "form-control" name = "new_password_repeat" id = "new_password_repeat" aria-describedby = "passwordHelp">
                                    <div class = "form-text error"></div>
                                    <p class = "form-text error m-0" v-for = "e in errors.new_password_repeat">{{e}}</p>
                                </div>
                            </div>

                            <button type = "submit" @click.prevent = "submit" class = "btn btn-primary">ویرایش</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>

<script>
import App from '../App';

export default {
    data() {
        return {
            errors: [],
            data: JSON.parse(localStorage.getItem('admin')),
            name: '',
            email: '',
            id: JSON.parse(localStorage.getItem('admin')).id,
        }
    },
    mounted() {
    },
    methods: {
        async getCurrentUser() {
            await App.methods.checkToken();
            await axios.create({
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('admin_access_token'),
                }
            }).get('/api/panel/user')
                .then((response) => {
                    this.data = response.data;
                    this.name = this.data.name;
                    this.id = this.data.id;

                })
                .catch((error) => {
                    if (error.status === 401) {
                        window.location = '/login'
                        App.methods.logout();
                    }
                });

        },

        async submit() {
            document.getElementById('updateMsg').classList.add('d-none');
            let emptyFieldsCount = 0;
            let req = document.querySelectorAll('[required]');
            await req.forEach((element) => {
                if (element.value == "") {
                    element.classList.add('hasError');
                    element.nextSibling.innerHTML = "فیلد اجباری";
                    emptyFieldsCount++;
                } else {
                    element.classList.remove('hasError');
                    element.nextSibling.innerHTML = "";
                }
            });
            if (emptyFieldsCount === 0) {
                this.errors = [];
                await axios.post('/api/panel/update/user', {
                    id: this.id,
                    name: document.querySelector('#name').value,
                    email: document.querySelector('#email').value,
                    current_password: document.querySelector('#current_password').value,
                    new_password: document.querySelector('#new_password').value,
                    new_password_repeat: document.querySelector('#new_password_repeat').value,
                })
                    .then((response) => {
                        console.log(response)
                        if (response.status === 200) {
                            localStorage.setItem('admin', JSON.stringify(response.data.user));
                            this.data = response.data.user;
                            document.querySelector('#current_password').value = '';
                            document.querySelector('#new_password').value = '';
                            document.querySelector('#new_password_repeat').value = '';
                            document.querySelector('#updateMsg').classList.remove('d-none');
                            document.querySelector('#admin_label').innerHTML = response.data.user.name;
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                        console.log(error.response);
                        if (error.status === 401) {
                            window.location = '/panel/login'
                            App.methods.logout();

                        } else if (error.status === 422) {
                            let errorList = Array(error.response.data);
                            console.log(error.response.data);
                            for (var i = 0; i < errorList.length; i++) {
                                console.log('i', errorList[i]);
                                this.errors = errorList[i];
                            }
                        } else {
                            console.log(error);
                        }
                        console.log('errs:', this.errors);
                    })
            }

        }
    }
}
</script>
<style scoped>
input {
    direction: ltr !important;
    text-align: left !important;
}

#name {
    direction: rtl !important;
    text-align: right !important;
}

</style>
