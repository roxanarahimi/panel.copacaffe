<template>
    <p class="h4 mb-5">جدیدترین محصولات</p>
    <div class="row p-0 m-0 justify-content-between mt-3" v-if="allData !== null">
        <router-link  class="col-12 col-md-6 col-lg-3 col-xl-3 justify-content-center  pb-2 mb-3  a"
                      v-for="dataP in allData" :key="dataP.id" :to="'/panel/product/'+ dataP.id">
            <div class="card h-100">
                <div class="img rounded-top ">
                    <transition  name="zoom" mode="in-out" appear>
                        <img v-if="dataP.images.length" :src="dataP.images[0]"  class="card-img-top" alt="">
                    </transition>
                </div>

                <!--                        d-flex align-self-end-->
                <div class="card-body ">
                    <h5 class="card-title mt-4 mb-2 "> {{ dataP.title }} </h5>
                    <p class="card-text mb-4 d-inline-block align-bottom"><i class="bi bi-tag-fill"></i>
                        {{ dataP.category.title }} </p>
                    <p class="card-text mb-4 d-inline-block float-start align-bottom"> {{ dataP.added }} </p>
                </div>
            </div>
        </router-link>
    </div>

</template>

<script>
import {ref} from "vue";

export default {
    name: "ProductsLatest",
    async setup() {
        const allData = ref(null)
        await axios.get('/api/panel/latest/product')
            .then((response) => {
                // setTimeout(()=>{
                allData.value = response.data;
                // },2000)
            })
            .catch((error) => {
                console.log(error)
            });
        return {
            allData,
        }
    }
}

</script>

<style scoped>
.img {
    /*min-height: 200px;*/
    /*background: whitesmoke;*/
}

.a, .a:hover {
    color: black;
    text-decoration: none;
}

</style>
