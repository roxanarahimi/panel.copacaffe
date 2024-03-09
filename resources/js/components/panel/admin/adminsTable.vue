<template>
    <div v-if="allData" class="card  col-md-8">
        <div class="card-body">
            <table class="table">
                <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">نام</th>
                    <th scope="col">ایمیل</th>
                    <th class="d-none d-md-table-cell" scope="col">تاریخ ثبت</th>
<!--                    <th scope="col"></th>-->
                </tr>
                </thead>
                <tbody>
                <tr :id="'row_'+data.id" v-for="(data, index) in allData" :key="data.id" :data-index="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ data.name }}</td>
                    <td class="ellipsis pe-md-5 en" :title="data.email">{{ data.email }}</td>

                    <td class="d-none d-md-table-cell ">{{ data.created_at }}</td>
<!--                    <td>-->
<!--                        <span role="button" data-bs-toggle="dropdown" aria-expanded="false">-->
<!--                            <i class="bi bi-three-dots-vertical"></i>-->
<!--                        </span>-->
<!--                    </td>-->
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
    props: ['allData', 'page', 'model', 'loadData'],
    name: "adminsTable",
    async setup(props) {
        const showDeleteModal = async (id) => {
            await AllDataContainer.setup().showDeleteModal(id);
        }
        const deleteInfo = async (model, id) => {
            await AllDataContainer.setup().deleteInfo(model, id);
            props.loadData(props.page);
        };
        // const activeToggle = async (model,id) => {
        //     await AllDataContainer.setup().activeToggle(model,id);
        //     props.loadData(props.page);
        //
        // };

        return {
            showDeleteModal, deleteInfo,
            // activeToggle
        }
    }
}
</script>

<style scoped>

</style>
