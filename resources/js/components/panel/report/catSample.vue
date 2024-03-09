<template>
    <div class="bg-white w-100 h-100 p-5 row">
       <div class="col-3">
           <div  class=" py-2  d-flex  justify-content-center bg-light  text-center" style="border-radius: 10px; color: #7007fa">
               <i  class="bi bi-grid d-inline-block mt-2 mb-1 me-2" style="font-size: 20px;"></i> <b class="mt-2 mb-1 d-inline-block" > دسته بندی محصولات</b>
           </div>
           <div class="d-flex text-black-50 pt-3">
               <i class="bi bi-arrow-right-short d-inline-block me-3 " style=" width: 21px; overflow-x: hidden;font-size: 40px"></i> <b class="" style="margin-top: 11px"> همه دسته بندی ها</b>
           </div>
           <div>
               <img width="25px" class="me-3" src="origin.png">
               <b class="">اورجین</b>
           </div>
           <div class="mt-3">
               <div class="ms-5 border-bottom" style="height: 212px; overflow-y: scroll ;direction: ltr!important ; text-align: right !important">
                   <div class="ps-3">
                       <p class="fw-bold">csgo</p>
                       <p class="fw-bold">Sea of Thieves</p>
                       <p class="fw-bold">بتل فیلد 2</p>
                       <p class="fw-bold">اپکس لجندز</p>
                       <p class="fw-bold">فی فا 22</p>
                       <p class="fw-bold">فی فا 22</p>
                       <p class="fw-bold">فی فا 22</p>
                       <p class="fw-bold">فی فا 22</p>
                       <p class="fw-bold">فی فا 22</p>
                       <p class="fw-bold">فی فا 22</p>
                       <p class="fw-bold">فی فا 22</p>
                       <p class="fw-bold">فی فا 22</p>
                       <p class="fw-bold">فی فا 22</p>
                       <p class="fw-bold">فی فا 22</p>
                       <p class="fw-bold">فی فا 22</p>
                       <p class="fw-bold">فی فا 22</p>
                       <p class="fw-bold">فی فا 22</p>
                       <p class="fw-bold">فی فا 22</p>
                       <p class="fw-bold">فی فا 22</p>
                       <p class="fw-bold">فی فا 22</p>
                       <p class="fw-bold">فی فا 22</p>
                       <p class="fw-bold">فی فا 22</p>
                       <p class="fw-bold">فی فا 22</p>
                       <p class="fw-bold">فی فا 22</p>
                       <p class="fw-bold">فی فا 22</p>
                       <p class="fw-bold">فی فا 22</p>
                       <p class="fw-bold">فی فا 22</p>
                       <p class="fw-bold">فی فا 22</p>
                       <p class="fw-bold">فی فا 22</p>
                       <p class="fw-bold">فی فا 22</p>
                       <p class="fw-bold">فی فا 22</p>

                   </div>
               </div>
           </div>
       </div>

    </div>


<!--    <div class="w-25">-->
<!--        <Bar :chart-data="chartData" />-->
<!--    </div>-->
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import Stylesheet from "../../../../../public/bootstrap-icons-1.8.3/docs/layouts/partials/stylesheet.html";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'catSample',
    components: {Stylesheet, Bar },
    data() {
        return {
            chartData: {
                labels: [ 'January', 'February', 'March'],
                datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: '#f87979',
                        data: [40, 20, 12]
                    }
                ]
            }
        }
    }
}
</script>
<style scoped>
::-webkit-scrollbar {
    width: 5px;
    cursor: pointer !important;
    /*background-color: transparent;*/
    background-color: #eeeeee;
}

/* Track */
::-webkit-scrollbar-track {
    /*box-shadow: inset 0 0 5px grery;*/
    /*border-radius: 10px;*/
    cursor: pointer !important;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #7007fa;
    border-radius: 10px;
    cursor: pointer !important;

}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: darkgray;
    cursor: pointer !important;

}
</style>
