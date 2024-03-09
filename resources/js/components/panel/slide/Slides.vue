<template>
    <transition name = "route" mode = "out-in" appear>
        <section>
            <h3 class = "mb-5">اسلاید ها
                <router-link to = "/panel/new/slide" class = "text-dark">
                    <span title = "ثبت محصول جدید" class = "px-3 d-inline-block align-middle"><i class = "bi bi-plus-circle-fill p-0 mt-2 m-0" style = "font-size: 15px"></i></span>
                </router-link>
                <p style = "font-size: 14px">برای عوض کردن ترتیب اسلاید ها، drag & drop کنید</p>
            </h3>

            <div class = "row mt-3">
                <div class = "col-12 mb-3">
                    <div v-if = "allData.length">
                        <!--                        <div class = "card-body ">-->
                        <draggable ghost-class = "moving-card" :animation = "500" v-model = "allData" @start = "drag=true" @end = "drag=false"
                                   @drop = "updateSlidesOrder" item-key = "id" id = "slides_wrapper" class = "row px-4">
                            <template #item = "{element}">
                                <div :data-id = "element.id" class = "element-cards card  mb-2 me-2 col-md-8 px-0" style = "cursor: pointer">
                                    <div class = "card-body p-2">
                                        <img v-if = "element.image" class = "rounded d-inline-block my-1" width = "80" :src = "element.image">
                                        <div v-else class = "rounded d-inline-block my-1" style = "width: 80px; height: 20px;"></div>
                                        <div class = "d-inline-block " style = "vertical-align: bottom">
                                            <small class = "d-block fw-lighter ms-2 mb-0" style = "vertical-align: bottom; font-size:13px">
                                                {{ element.title }}</small>
                                            <small class = "d-block fw-lighter ms-2 mb-1" style = "vertical-align: bottom; font-size:13px">{{
                                                element.subTitle }}</small>
                                        </div>
                                        <div class = "float-end">
                                            <span class = "me-3">
                                                <span @click = "pActiveToggle(element.id)" v-if = "element.active" class = "badge bg-success text-light"><i class = "bi bi-eye-fill"></i></span>
                                                <span @click = "pActiveToggle(element.id)" v-else class = "badge bg-danger text-light"><i class = "bi bi-eye-slash-fill"></i></span>
                                            </span>
                                            <span role = "button" data-bs-toggle = "dropdown" aria-expanded = "false">
                                        <i class = "bi bi-three-dots-vertical"></i></span>
                                            <ul class = "dropdown-menu" aria-labelledby = "navbarScrollingDropdown">

                                                <li>
                                                    <!--                                            <router-link :to = "'/slide/'+data.id" class = "dropdown-item" style = "text-align: right !important">-->
                                                    <!--                                                مشاهده-->
                                                    <!--                                            </router-link>-->
                                                    <router-link :to = "'/panel/edit/slide/'+element.id" class = "dropdown-item" style = "text-align: right !important">
                                                        ویرایش
                                                    </router-link>
                                                    <a class = "dropdown-item" @click = "showDeleteModal(element.id)" style = "text-align: right !important" data-bs-toggle = "modal" data-bs-target = "#exampleModal">حذف</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </draggable>
                    </div>

                    <div v-else><p class = "fw-bold">هیچ اسلایدی موجود نیست</p></div>

                </div>
            </div>
        </section>
    </transition>
    <!-- Modal -->
    <div class = "modal fade" id = "exampleModal" tabindex = "-1" aria-labelledby = "exampleModalLabel" aria-hidden = "true">
        <div class = "modal-dialog md">
            <div class = "modal-content">
                <div class = "modal-header border-0">
                    <button type = "button" class = "btn-close" data-bs-dismiss = "modal" aria-label = "Close"></button>
                </div>
                <div class = "modal-body">
                    آیا اسلاید مورد نظر حذف شود؟

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
    import Draggable from 'vuedraggable';

    export default {
        components: {
            Draggable, App
        },
        data: function () {
            return {
                allData: [],

            }
        },

        mounted() {
            this.loadAllData();
        },
        methods: {
            async loadAllData() {

                await axios.get('/api/panel/slide').then((response) => {
                    this.allData = response.data;
                }).catch();
            },
            showDeleteModal(id) {
                document.getElementById('deleteId').value = id;

            },
            async deleteInfo() {

                axios.post('/api/panel/delete/slide/', {
                    id: document.getElementById('deleteId').value,
                })
                    .then((response) => {
                        console.log(response.data)
                    })
                    .catch((error) => {
                        console.error(error);
                    });
                await this.loadAllData();
            },
            async pActiveToggle(id) {

                await axios.get('/api/panel/active/slide/' + id)
                    .then((response) => {
                        console.log(response.data)
                    })
                    .catch((error) => {
                        console.error(error);
                    });
                await this.loadAllData();
            },
            async updateSlidesOrder() {
                let children = document.querySelector('#slides_wrapper').children;
                let index = 0;

                await children.forEach((item) => {
                    axios.post('/api/panel/slide/' + item.getAttribute('data-id'), {
                        index: index,
                    })
                        .then((response) => {
                            // console.log(response);
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                    index++;

                });
                await this.loadAllData();
            }

        }
    }
</script>
<style>
    .element-cards {
        /*box-shadow: none;*/
        /*background-color: transparent;*/
    }

    .moving-card {
        opacity: 1 !important;
        background-color: whitesmoke;
        border: dotted dimgray !important;
        box-shadow: none;

    }
</style>
