<template>
    <transition name = "route" mode = "out-in" appear>
        <section>
            <h3 class = "mb-5">تراکنش ها
                <!--                <router-link to = "/panel/new/product" class = "text-dark">-->
                <!--                    <span title = "ثبت محصول جدید" class = "px-3 d-inline-block align-middle"><i class = "bi bi-plus-circle-fill p-0 mt-2 m-0" style = "font-size: 15px"></i></span>-->
                <!--                </router-link>-->
            </h3>

            <div class = "row mt-3">
                <div class = "mb-3">
                    <div v-if = "allData.length" class = "card">
                        <div class = "card-body">
                            <table class = "table">
                                <thead>
                                <tr>
                                    <th class = "d-none d-md-table-cell" scope = "col"></th>
                                    <th scope = "col">کاربر</th>
                                    <th scope = "col">مبلغ</th>
                                    <th scope = "col">وضعیت</th>
                                    <th scope = "col">توضیحات</th>
                                    <th class = "d-none d-md-table-cell date_cell" scope = "col">تاریخ ثبت</th>
                                    <th scope = "col"></th>
                                </tr>
                                </thead>
                                <tbody>

                                <tr :id = "'row_'+data.id" v-for = "(data, index) in allData" :key = "data.id" :data-index = "index">
                                    <td class = "d-none d-md-table-cell" scope = "row">{{ index + 1 }}</td>
                                    <td>
                                        <router-link :to = "'/panel/user/'+data.order.user_id">{{ data.order.user.name }}
                                        </router-link>
                                    </td>
                                    <td>{{ data.amount }}</td>
                                    <td>
                                        {{ data.status }}
                                    </td>
                                    <td>
                                        {{ data.description }}
                                    </td>

                                    <td class = "d-none d-md-table-cell date_cell">{{ data.created_at }}</td>

                                    <td>

                                    </td>
                                </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div v-else><p class = "fw-bold">هیچ تراکنشی موجود نیست</p></div>
                </div>
            </div>
        </section>
    </transition>
</template>

<script>
    import App from '../App';

    export default {
        data: function () {
            return {
                allData: [],

            }
        },

        mounted() {
            this.loadProducts();
        },
        methods: {
            async loadProducts() {

                await axios.get('/api/panel/finance').then((response) => {
                    this.allData = response.data;
                    console.log(this.allData);
                }).catch();
            },
            async showDeleteModal(id) {

                document.getElementById('deleteId').value = id;
            },
            async deleteInfo() {
                await axios.post('/api/panel/delete/order/', {
                    id: document.getElementById('deleteId').value,
                })
                    .then((response) => {
                        console.log(response.data)
                    })
                    .catch((error) => {
                        console.error(error);
                    });
                await this.loadProducts();
            },
            async pActiveToggle(id) {

                await axios.get('/api/panel/active/order/' + id)
                    .then((response) => {
                        console.log(response.data)
                    })
                    .catch((error) => {
                        console.error(error);
                    });
                await this.loadProducts();
            }

        }
    }
</script>
<style>

    .date_cell {
        direction: ltr !important;
        text-align: right !important;
    }


    .text_cell {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 30ch;

    }

    .active_cell {
        width: 60px;
        text-align: center;
    }
</style>
