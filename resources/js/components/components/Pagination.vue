<template>
   <div class="my-3 px-3">
       <div v-if="pages>1" class="paginate text-center">
           <nav class="d-flex justify-content-center ">
            <span class="paginate-btn" @click="prevPage()"
                  :class="{'text-muted': (currentPage <= 1 ),  'fw-bold pointer': currentPage > 1}">قبلی</span>
               <br class="d-md-none">
               <span  :class="{'text-primary': item == currentPage}" :id="'page_'+item "
                     v-for="item in labels" :key="item" @click="goToPage(item)"
                     class="paginate-btn pointer fs-6 fw-bold page_number mx-3 ">{{ item }}</span>
               <br class="d-md-none">
               <span class="paginate-btn" @click="nextPage()"
                     :class="{'text-muted': currentPage >= pages, 'fw-bold pointer': currentPage < pages}">بعدی</span>
           </nav>
           <!--        <p class="text-black-50 mt-2">{{ 'page ' + currentPage+'of' + pages}}</p>-->

       </div>
       <div class="d-flex justify-content-between">
           <div v-if="total != undefined" class="w-50 d-flex justify-content-start">
               <span class="float-lg-start text-black-50 mt-2">{{ 'نمایش ' }}</span>
               <select @change="load" id="perPage" style="width: 60px" class="form-select-sm mt-1 mx-2">
<!--                   <option value="5">5</option>-->
                   <option value="10">10</option>
                   <option value="20">20</option>
                   <option value="50">50</option>
                   <option selected value="100">100</option>
               </select>
               <span class="text-black-50 mt-2">        {{ 'مورد از ' + total }}</span>
           </div>
           <div v-if="pages> 1" class="w-50 d-flex justify-content-end">
               <span class="text-black-50 mt-2">{{ 'صفحه ' + currentPage + ' از ' + pages }}</span>
           </div>
       </div>
   </div>
</template>

<script>
import {onUpdated, ref} from "vue";

export default {
    props: ['page', 'pages', 'total', 'labels', 'load'],
    name: "Pagination",
    setup(props) {
        const currentPage = ref(1);
        const total_pages = ref(1);


        const goToPage = (i) => {
            if (0 < i <= total_pages.value) {
                currentPage.value = i;
                props.load(currentPage.value);
            }
        };
        const prevPage = () => {
            if (currentPage.value > 1) {
                currentPage.value -= 1;
                props.load(currentPage.value);


            }
        };
        const nextPage = () => {
            // console.log('props',props.pages);
            if (currentPage.value < props.pages) {
                currentPage.value += 1;
                props.load(currentPage.value);


            }
        };
        return {
            currentPage, total_pages, goToPage, prevPage, nextPage,
        }
    }
}
</script>

<style scoped>
.pointer{
    cursor: pointer !important;
}
</style>
