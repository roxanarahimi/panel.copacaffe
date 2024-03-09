<template>
    <transition name="route" mode="out-in" appear>
        <section>


            <div class="row mt-3">
<!--                <suspense>-->
<!--                    <template #default> </template>-->
<!--                    <template #fallback><loader /></template>-->
<!--                </suspense>-->
                <slot/>
                <div id="msg"></div>
            </div>
        </section>
    </transition>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog md">
            <div class="modal-content">
                <div class="modal-header border-0">
                    <!--                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>-->
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    آیا محصول مورد نظر حذف شود؟
                </div>
                <div class="modal-footer border-0">
                    <input type="hidden" id="deleteId">
                    <button type="button" class="btn btn-dark" data-bs-dismiss="modal" @click="deleteInfo">بله
                    </button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">نه !</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import App from './App';
import {ref, onMounted, onUpdated} from 'vue';
import Loader from "../components/Loader";

export default {
    components: {Loader, App},
    props: ['model', 'title', 'tooltip_new'],
    setup(props) {
        const all = ref([]);
        // const model = ref();

        const showDeleteModal = (id) => {
            // App.methods.checkToken();
            document.getElementById('deleteId').value = id;
        };
        const deleteInfo = (model,id) => {
            //App.methods.checkToken();
            model= props.model;
             id = document.getElementById('deleteId').value;
             console.log('/api/panel/delete/'+model+'/' + id);
            axios.get('/api/panel/delete/'+model+'/' + id)
                .then((response) => {
                    console.log(response.data)
                    document.getElementById('row_' + document.getElementById('deleteId').value).remove();
                })
                .catch((error) => {
                    console.error(error);
                });
        };
        const activeToggle = (model,id) => {
            // await App.methods.checkToken();
            axios.get('/api/panel/active/'+model+'/' + id)
                .then((response) => {
                    console.log(response.data)
                })
                .catch((error) => {
                    console.error(error);
                });
        };
        // const loadData = async () => {
        //     all.value = [];
        //     await axios.get('/api/panel/'+model.value)
        //         .then((response) => {
        //             all.value = response.data;
        //         }).catch();
        //
        // };
        // // await loadData();

        onUpdated(()=>{
            document.querySelector('#msg').innerHTML = '';
        })
        onMounted(() => {
            // loadData();
        });
        return {
            all,
            // loadData,
            showDeleteModal, deleteInfo, activeToggle
        };
    }

}
</script>
