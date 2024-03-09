<template>
    <div class = "row justify-content-center text-left">
        <div class = "col-md-10 col-lg-8 row mt-5 pt-5 justify-content-center">
            <div class = "col-12 col-md-10 col-xl-6">
                <div class = "card">
                    <div class = "card-body">
                        <p class = "h5 card-title text-center">وارد شوید</p>
                        <form>
                            <div class = "mb-3">
                                <label for = "username" class = "form-label">ایمیل</label>
                                <input id = "username" type = "email" :class = "{hasError: errors.email}" class = "form-control" name = "email" aria-describedby = "emailHelp" required>
                                <div id = "emailHelp" class = "form-text error"></div>
                                <p class = "form-text error m-0" v-for = "e in errors.email">{{ e }}</p>
                            </div>
                            <div class = "mb-3">
                                <label for = "password" class = "form-label">کلمه عبور</label>
                                <input type = "password" :class = "{hasError: errors.password}" class = "form-control" name = "password" id = "password" aria-describedby = "passwordHelp" required>
                                <div id = "passwordHelp" class = "form-text error"></div>
                                <p class = "form-text error m-0" v-for = "e in errors.password">{{ e }}</p>
                            </div>
                            <button type = "submit" @click.prevent = "submit" class = "btn btn-primary">ورود</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                errors: [],
            }
        },
        mounted() {
            localStorage.removeItem('admin');
            localStorage.removeItem('admin_expire');
            localStorage.removeItem('admin_access_token');

        },
        methods: {
            submit() {
                let emptyFieldsCount = 0;
                let req = document.querySelectorAll('[required]');
                req.forEach((element) => {
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
                    axios.post('/api/panel/admin/login', {
                        username: document.querySelector('#username').value,
                        password: document.querySelector('#password').value,
                    })
                        .then((response) => {
                            if (response.status === 200) {
                                if (response.status === 200 && response.data.user?.scope === 'admin') {
                                    // localStorage.removeItem('admin')
                                    // localStorage.removeItem('admin access_token')
                                    localStorage.setItem('admin_access_token', response.data.access_token);
                                    localStorage.setItem('admin', JSON.stringify(response.data.user));
                                    localStorage.setItem('admin_expire', response.data.expire);
                                    setTimeout(() => {
                                        window.location= '/panel';
                                    }, 200);
                                }else if(response.data.user?.scope === 'user'){
                                    document.getElementById('emailHelp').innerText = 'شما اجازه ورود ندارید';
                                }
                            }
                        })
                        .catch((error) => {
                            console.error(error);

                            if (error.status === 422) {
                                let errorList = Array(error.response.data);
                                console.log(error.response.data);
                                for (let i = 0; i < errorList.length; i++) {
                                    console.log('i', errorList[i]);
                                    this.errors = errorList[i];
                                }
                            } else {
                                console.log(error);
                                console.log(error.message);
                            }
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
</style>
