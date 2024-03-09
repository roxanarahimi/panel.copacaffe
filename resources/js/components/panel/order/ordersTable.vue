<template>
    <div v-if="allData" class = "card">
        <div class="card-body table-responsive">
            <table class = "table">
                <thead>
                <tr>
                    <th class = "d-none d-md-table-cell" scope = "col"></th>
                    <th scope = "col">کد سفارش</th>
                    <th scope = "col">کاربر</th>
                    <th scope = "col">مبلغ</th>
                    <th scope = "col">پرداخت</th>
                    <th scope = "col" class = "status_cell">وضعیت</th>
                    <th class = "d-none d-md-table-cell date_cell" scope = "col">تاریخ ثبت</th>
                    <th scope = "col"></th>
                </tr>
                </thead>
                <tbody>

                <tr :id = "'row_'+data.id" v-for = "(data, index) in allData" :key = "data.id" :data-index = "index">
                    <td class = "d-none d-md-table-cell">{{ index + 1 }}</td>

                    <td>
                        <router-link :to = "'/panel/order/'+data.id">{{ data.code }}</router-link>
                    </td>
                    <td>
                        <router-link :to = "'/panel/user/'+data.user.id">{{ data.user.name }}
                        </router-link>
                    </td>

                    <td>{{ data.amount }}</td>
                    <td>
                        {{ data.payment }}
                    </td>

                    <td class = "pt-0 status_cell">
                        <p class = "m-0 mb-1">{{ data.status}}</p>
                        <div class = "progress w-100 order_status " style = "height: 5px; ">
                            <div
                                :class = "'progress-bar order_status rounded ' + data.color"
                                role = "progressbar"
                                :style = "'width: '+ data.percent+'%'"
                                :aria-valuenow = "data.percent"
                                aria-valuemin = "0"
                                aria-valuemax = "100"></div>
                        </div>
                    </td>
                    <td class = "d-none d-md-table-cell date_cell">{{ data.created_at }}</td>

                    <td>
                        <span role = "button" data-bs-toggle = "dropdown" aria-expanded = "false"><i class = "bi bi-three-dots-vertical"></i></span>
                        <ul class = "dropdown-menu" aria-labelledby = "navbarScrollingDropdown">
                            <!--                                            <li>-->
                            <!--                                                <a class = "dropdown-item" style = "text-align: right !important" href = "#">مشاهده</a>-->
                            <!--                                            </li>-->
                            <!--                                             <li>-->
                            <!--                                                <a class = "dropdown-item" style = "text-align: right !important" href = "#">ویرایش</a>-->
                            <!--                                            </li>-->
                            <li>
                                <router-link :to = "'/panel/order/'+data.id" class = "dropdown-item" style = "text-align: right !important">
                                    مشاهده
                                </router-link>
                                <!--                                                <router-link :to = "'/panel/edit/order/'+data.id" class = "dropdown-item" style = "text-align: right !important">-->
                                <!--                                                    ویرایش-->
                                <!--                                                </router-link>-->
                                <!--                                                <a class = "dropdown-item" @click = "showDeleteModal(data.id)" style = "text-align: right !important" data-bs-toggle = "modal" data-bs-target = "#exampleModal">حذف</a>-->
                            </li>
                            <!--                                <li><hr class="dropdown-divider"></li>-->
                            <!--                                <li><a class="dropdown-item" href="#">Something else here</a></li>-->
                        </ul>
                    </td>
                </tr>

                </tbody>
            </table>
        </div>
    </div>

</template>

<script>

import AllDataContainer from "../AllDataContainer";
// import AllDataInner from "../AllData";

export default {
    props: ['allData', 'page','model','loadData'],
    name: "OrdersTable",
    async setup(props){
        const showDeleteModal = async (id) => {
            await AllDataContainer.setup().showDeleteModal(id);
        }
        const deleteInfo = async (model,id) => {
            await AllDataContainer.setup().deleteInfo(model,id);
            props.loadData(props.page);
        };
        const activeToggle = async (model,id) => {
            await AllDataContainer.setup().activeToggle(model,id);
            props.loadData(props.page);

        };

        return {showDeleteModal, deleteInfo, activeToggle}
    }
}
</script>

<style scoped>

</style>
