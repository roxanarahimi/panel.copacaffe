<template>
    <transition name = "route" mode = "out-in" appear>
        <section>
            <h3 class = "mb-5">دسته محصولات</h3>
            <div class = "row flex-row-reverse  mt-3">
                <div class = "col-xl-4 mb-4">
                    <div class = "card">
                        <div class = "card-body">
                            <p class = "fw-bold">ثبت دسته جدید</p>
                            <form>
                                <div class = "row">
                                    <div class = "col-12 mb-3">
                                        <label for = "title" class = "form-label">عنوان</label>
                                        <input type = "text" class = "form-control" id = "title" aria-describedby = "titleHelp">
                                        <div style = "min-height: 10px">
                                            <div id = "titleHelp" class = "form-text error py-0 my-0">
                                                <small class = "d-block" v-for = "error in errors">{{ error }}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type = "submit" @click.prevent = "createInfo" class = "btn btn-primary float-start">
                                    ثبت
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class = "col-xl-8 mb-3">
                    <div v-if = "allData.length" class = "card">
                        <div class = "card-body">
                            <table class = "table">
                                <thead>
                                <tr>
                                    <th scope = "col"></th>
                                    <th scope = "col">عنوان</th>
                                    <th scope = "col">مطالب</th>
                                    <th scope = "col">تاریخ ثبت</th>
                                    <th scope = "col" class = "active_cell">وضعیت</th>
                                    <th scope = "col"></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr :id = "'row_'+data.id" v-for = "(data, index) in allData" :key = "data.id" :data-index = "index">
                                    <td class = "">{{ index + 1 }}</td>
                                    <td class = "">{{ data.title }}</td>
                                    <td class = "">{{ data.products.length }}</td>
                                    <td>{{ data.created_at }}</td>
                                    <td class = "active_cell">
                                        <span @click = "ActiveToggle(data.id)" v-if = "data.active" class = "badge bg-success text-light"><i class = "bi bi-eye-fill"></i></span>
                                        <span @click = "ActiveToggle(data.id)" v-else class = "badge bg-danger text-light"><i class = "bi bi-eye-slash-fill"></i></span>
                                    </td>
                                    <td :id = "'form_'+data.id" class = "d-none px-3 py-3 edit" colspan = "5">
                                        <form action = "" class = "">
                                            <div class = "row">
                                                <div class = "col-xl-1 py-2">
                                                    <label :for = "'title_'+data.id">عنوان</label>
                                                </div>
                                                <div class = "col-xl-7 col-xxl-8 mb-2">
                                                    <input type = "text" class = "form-control border-0 col-auto" required :id = "'title_'+data.id" :value = "data.title">
                                                </div>
                                                <div class = "col-xl-4 col-xxl-3  ">
                                                    <button type = "submit" class = "btn btn-dark ms-auto mb-2" @click.prevent = "updateInfo(data.id)" id = "update">
                                                        ویرایش
                                                    </button>
                                                    <button class = "btn btn-secondary ms-1 mb-2" @click.prevent = "hideUpdateForm(data.id)" id = "cancelUpdate">
                                                        انصراف
                                                    </button>
                                                </div>

                                            </div>
                                        </form>
                                    </td>

                                    <td class = "">
                                        <span role = "button" data-bs-toggle = "dropdown" aria-expanded = "false">
                                            <i class = "bi bi-three-dots-vertical"></i>
                                        </span>

                                        <ul class = "dropdown-menu" aria-labelledby = "navbarScrollingDropdown">
                                            <li>
                                                <a class = "dropdown-item" style = "text-align: right !important" @click = "showUpdateForm(data.id)" href = "#">ویرایش</a>
                                            </li>
                                            <li>
                                                <a class = "dropdown-item" style = "text-align: right !important" @click = "showDeleteModal(data.id)" data-bs-toggle = "modal" data-bs-target = "#exampleModal">حذف</a>
                                            </li>
                                        </ul>
                                    </td>

                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div v-else><p class = "fw-bold">هیچ دسته ای موجود نیست</p></div>
                </div>


            </div>
        </section>
    </transition>
    <!-- Modal -->
    <div class = "modal fade" id = "exampleModal" tabindex = "-1" aria-labelledby = "exampleModalLabel" aria-hidden = "true">
        <div class = "modal-dialog modal-md">
            <div class = "modal-content">
                <div class = "modal-header border-0">
                    <!--                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>-->
                    <button type = "button" class = "btn-close" data-bs-dismiss = "modal" aria-label = "Close"></button>
                </div>
                <div class = "modal-body">
                    آیا دسته مورد نظر حذف شود؟
                    <small class = "d-block fw-bold mt-2 text-danger">
                        <i class = "bi bi-exclamation-triangle-fill"></i>
                        با حذف این دسته همه محصولات مربوط به آن حذف خواهند شد!!!</small>
                </div>
                <div class = "modal-footer border-0">
                    <input type = "hidden" id = "deleteId">
                    <button type = "button" class = "btn btn-dark" data-bs-dismiss = "modal" @click = "deleteInfo">بله
                    </button>
                    <button type = "button" class = "btn btn-secondary" data-bs-dismiss = "modal">نه !</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import App from '../App';

    export default {
        data: function () {
            return {
                i: 0,
                allData: [],
                errors: []

            }
        },
        mounted() {
            this.loadCategories();
        },
        methods: {
            async loadCategories() {

                await axios.get('/api/panel/category/product').then((response) => {
                    this.allData = response.data;
                }).catch();
            },
            async createInfo() {
                this.errors = [];

                await axios.post('/api/panel/category/product',
                    {
                        title: document.getElementById('title').value,
                    })
                    .then((response) => {
                        this.loadCategories();
                        setTimeout(() => {
                            document.getElementById('title').value = "";
                        }, 200);

                    })
                    .catch((error) => {
                        if (error.status === 422) {
                            let errorList = Array(error.response.data);
                            document.getElementById('title').classList.add('hasError');
                            for (var i = 0; i < errorList.length; i++) {
                                for (var j = 0; j < Array(errorList[i]).length; j++) {
                                    let err = Object.values(Array(errorList[i])[j]);
                                    err.forEach((element) => {
                                        element.forEach((m) => {
                                            this.errors.push(m)
                                        })
                                    });
                                }
                            }
                        } else if (error.status === 500) {
                            if (error.response.data.message.includes("SQLSTATE")) {
                                console.error('خطای پایگاه داده');
                            }
                            alert('در ذخیره اطلاعات مشکلی بوجود امده.');

                        } else {
                            console.error(error);
                        }


                    })
            },
            async updateInfo(id) {

                await axios.post('/api/panel/category/product/' + id,
                    {
                        title: document.getElementById('title_' + id).value,
                    })
                    .then((response) => {
                        console.log(response.data);
                        this.loadCategories();

                    })
                    .catch((error) => {
                        if (error.status === 422) {
                            let errorList = Array(error.response.data);
                            for (var i = 0; i < errorList.length; i++) {
                                for (var j = 0; j < Array(errorList[i]).length; j++) {
                                    let err = Object.values(Array(errorList[i])[j]);
                                    err.forEach((element) => {
                                        element.forEach((m) => {
                                            //  this.errors.push(m)
                                            alert(m)
                                        })
                                    });
                                }
                            }
                        } else if (error.status === 500) {
                            if (error.response.data.message.includes("SQLSTATE")) {
                                console.error('خطای پایگاه داده');
                            }
                            alert('در ذخیره اطلاعات مشکلی بوجود امده.');

                        } else {
                            console.error(error);
                        }
                    });
                await this.hideUpdateForm(id);
            },
            showUpdateForm(id) {

                let row = document.getElementById('row_' + id);
                row.childNodes.forEach((element) => {
                    element.classList.add('d-none');
                });
                document.getElementById('form_' + id).classList.remove('d-none');

            },
            hideUpdateForm(id) {
                this.loadCategories();
                let row = document.getElementById('row_' + id);
                row.childNodes.forEach((element) => {
                    element.classList.remove('d-none');

                });
                document.getElementById('form_' + id).classList.add('d-none');
            },
            showDeleteModal(id) {
                document.getElementById('deleteId').value = id;
            },
            async deleteInfo() {

                await axios.post('/api/panel/delete/category/product', {
                    id: document.getElementById('deleteId').value,
                })
                    .then((response) => {
                        console.log(response.data)
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                await this.loadCategories();
            },
            async ActiveToggle(id) {

                await axios.get('/api/panel/active/category/product/' + id)
                    .then((response) => {
                        console.log(response.data)
                    })
                    .catch((error) => {
                        console.error(error);
                    });
                await this.loadCategories();

            }
        }

    }

</script>
<style>
    .edit {
        background: #d7d7d7 !important;
    }
</style>
a
