<template>
    <transition name = "route" mode = "out-in" appear>
        <section>
            <h3 class = "mb-5">اولویت محصولات
                <p style = "font-size: 14px">برای عوض کردن ترتیب محصولات، drag & drop کنید</p>
            </h3>

            <loader class="xxload d-none" />
            <div class = "row mt-3">
                <div v-if="allData" class = "col-12 mb-3">
                    <div v-if = "allData.length">
                        <!--                        <div class = "card-body ">-->
                        <draggable ghost-class = "moving-card" :animation = "500" v-model = "allData" @start = "drag=true" @end = "drag=false"
                                   @drop = "updateSlidesOrder" item-key = "id" id = "slides_wrapper" class = "row px-4">
                            <template #item = "{element , index}" :key="index">
                                <div :data-id = "element.id" :data-index="element.index" :data-row-index="index" class = "element-cards card  mb-2 me-2 col-md-8 px-0" style = "cursor: pointer">
                                    <div class = "card-body p-2">
                                        <img v-if = "element.thumb" class = "rounded d-inline-block my-1" width = "80" :src = "element.thumb">
                                        <div v-else class = "rounded d-inline-block my-1" style = "width: 80px; height: 20px;"></div>
                                        <div class = "d-inline-block " style = "vertical-align: bottom">
                                            <small class = "d-block fw-lighter ms-2 mb-0" style = "vertical-align: bottom; font-size:13px">
                                                {{ element.title }}</small>
<!--                                            <small class = "d-block fw-lighter ms-2 mb-1" style = "vertical-align: bottom; font-size:13px">{{-->
<!--                                                element.subTitle }}</small>-->
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </draggable>
                    </div>

                    <div v-else><p class = "fw-bold">هیچ محصولی موجود نیست</p></div>

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
    import Draggable from 'vuedraggable';
    import loader from "../../components/Loader";
    export default {
        components: {
            Draggable, loader
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
                await axios.get('/api/panel/product?page=1&perPage=1000&search=').then((response) => {
                    this.allData = response.data.data;
                }).catch();
            },
            async updateSlidesOrder() {
                document.querySelector('.xxload').classList.remove('d-none');
                let children = document.querySelector('#slides_wrapper').children;
                let index = 0;


                await children.forEach((item) => {
                    if (item.getAttribute('data-index') != index){
                        axios.post('/api/panel/sort/product/' + item.getAttribute('data-id'), {
                            index: index,
                        })
                            .then((response) => {
                                console.log(response);
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                    }
                    index++;

                });
                await this.loadAllData();
                await document.querySelector('.xxload').classList.add('d-none');

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
