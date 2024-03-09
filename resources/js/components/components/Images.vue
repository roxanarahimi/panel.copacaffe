<template>
    <div class="w-100">
        <div class="col-12 row m-0">
            <img @click="open(0)" v-if="images && images[0]" width="100%" class="mb-2 col-12 p-0 pe-1" :src="images[0]">
            <img @click="open(1)" v-if="images && images[1]" width="100%" class="col-3 p-0 pe-1" :src="images[1]"/>
            <img @click="open(2)" v-if="images && images[2]" width="100%" class="col-3 p-0 pe-1" :src="images[2]"/>
            <img @click="open(3)" v-if="images && images[3]" width="100%" class="col-3 p-0 pe-1" :src="images[3]"/>
            <img @click="open(4)" v-if="images && images[4]" width="100%" class="col-3 p-0 pe-1" :src="images[4]"/>
            <div id="frame-wrapper" class="d-none ">
                <div id="frame" class="d-flex justify-content-between">
                    <span id="images-close" @click="close" class="text-light"><i class="bi bi-x-square-fill"></i></span>

                    <span id="images-prev-btn" @click="prevImage" class="text-light span"><i
                        class="bi bi-caret-right-square-fill"></i></span>
                    <img id="maximized-img" class="rounded" :src="images[i]">
                    <span id="images-next-btn" @click="nextImage" class="text-light span"><i
                        class="bi bi-caret-left-square-fill"></i></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'images'
    ],
    name: "Images",
    data() {
        return {
            i: 0,
            navigate: (event) => {

            },
        }
    },
    mounted() {

        function Y(event) {
            if (event.keyCode === 37) {
                document.querySelector('#images-prev-btn').click();
            } else if (event.keyCode === 39) {
                document.querySelector('#images-next-btn').click();
            }
            console.log('rr');
        }

        document.addEventListener('keydown', Y);
        document.querySelector('#images-close').addEventListener('click', function () {
            document.removeEventListener('keydown', Y);
        });


        // this.start();

    },
    methods:
        {
            start() {

                document.addEventListener('keydown', function (e) {
                    if (e.keyCode === 37) {
                        document.querySelector('#images-prev-btn').click();
                    } else if (e.keyCode === 39) {
                        document.querySelector('#images-next-btn').click();
                    }
                    console.log('rr');
                })
            },

            // navigate(event){
            //     if (event.keyCode === 37) {
            //         document.querySelector('#images-prev-btn').click();
            //     } else if (event.keyCode === 39) {
            //         document.querySelector('#images-next-btn').click();
            //     }
            //     console.log('rr');
            // },
            nextImage() {

                let image = document.getElementById('maximized-img');
                image.style.opacity = '0';
                this.i += 1;
                if (!this.images[this.i]) {
                    this.i = 0;
                }
                image.style.opacity = '1';

            },
            prevImage() {
                let image = document.getElementById('maximized-img');

                image.style.opacity = '0';
                this.i -= 1;
                if (!this.images[this.i]) {
                    this.i = this.images.length - 1;
                }
                image.style.opacity = '1';
            },
            open(index) {
                this.i = index;
                document.getElementById('frame-wrapper').classList.remove('d-none');
            },
            close() {
                document.getElementById('frame-wrapper').classList.add('d-none');
                // let navigate= ()=>{this.nav()};
                document.keydown = null;
                console.log('done')
            },
        }
}
</script>

<style scoped>
img {
    cursor: pointer;
}

body {
    height: 2000px;
}

#frame-wrapper {
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.75);
    text-align: center;
    justify-content: center !important;
    vertical-align: middle;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 100;
    padding-top: 100px;
}

#frame {
    font-size: 30px !important;
    vertical-align: middle !important;
    width: 100%;
    /*min-height: 300px;*/
    margin: 0 auto;
    padding: 40px;

    /*background-color: rgba(0, 0, 0, 0.5);*/
}

#frame .span {
    margin-top: 20%;
}

#maximized-img {
    width: 70%;
    transition: 1s ease;
}

#images-close {
    position: absolute;
    top: 133px;
    right: 20.5%;
    z-index: 100;

}

#images-close i {
    color: black !important;
    /*background-color: white !important;*/
    padding: 0;
    margin: 0;
}

@media (min-width: 720px) {
    #frame {
        width: 70%;
    }

    #images-close {
        right: 27%;
    }
}

</style>
