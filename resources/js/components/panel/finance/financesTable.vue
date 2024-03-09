<template>
    <div v-if="allData" class="card">
        <div class="card-body table-responsive">
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
</template>

<script>

import AllDataContainer from "../AllDataContainer";
// import AllDataInner from "../AllData";

export default {
    props: ['allData', 'page','model','loadData'],
    name: "productsTable",
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
