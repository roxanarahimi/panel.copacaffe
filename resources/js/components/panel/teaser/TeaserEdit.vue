<template>
    <transition name="route" mode="out-in" appear>
        <section>
            <h3 class="mb-5">ویرایش تیزر</h3>

            <div class="row mt-3">
                <div class="col-12 mb-3">
                    <!--                    <div class = "card" v-if = "isDefined" @click = "e => enableClick && makeImageArrays()">-->
                    <div class="card" v-if="isDefined" @click="e => enableClick">
                        <div class="card-body">
                            <form id="editForm">
                                <div class="row">
                                    <div class="col-12 col-md-6">
                                        <video class="w-100 mb-2" :src="data.video" controls></video>
                                    </div>
                                </div>
                                <div class="row">

                                    <div class="col-md-12 col-xl-6 mb-3">

                                        <label class="form-label">ویدیو</label><br/>
                                        <input id="video" type="file" @change="fileChanged($event)" class="form-control"
                                               accept="video/mp4">
                                        <textarea style="opacity: 0;" rows="1" id="code"></textarea>
                                        <div id="codeHelp" class="form-text error"></div>
                                        <p class="videoLoading d-none text-danger">لطفا منتظر بمانید. ویدیو در حال لود
                                            شدن است...</p>

                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 col-xl-6 mb-3">
                                        <label for="title" class="form-label">عنوان</label>
                                        <input type="text" :class="{hasError: errors.title}" class="form-control"
                                               id="title"
                                               :value="data.title" aria-describedby="titleHelp" required>
                                        <div id="titleHelp" class="form-text error"></div>
                                        <p class="form-text error m-0" v-for="e in errors.title">{{ e }}</p>

                                    </div>
                                </div>
                                <div class="row">


                                    <div class="col-md-12 mb-3">
                                        <BtnSubmit @click.prevent="updateInfo">
                                            ویرایش
                                        </BtnSubmit>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </transition>


</template>

<script>
import ImageCropper from '../../components/ImageCropper';
import Editor from "../../components/Editor";
import BtnSubmit from "../../components/BtnSubmit";

export default {
    components: {Editor, ImageCropper, BtnSubmit},
    data() {
        return {
            id: this.$route.params.id,
            data: {},
            errors: [],
            isDefined: false,
            enableClick: true,
            teasers: [],

        }
    },

    mounted() {
        this.loadTeaser();
    },
    methods: {
        async loadTeaser() {
            await axios.get('/api/panel/teaser/' + this.id)
                .then((response) => {

                    this.data = response.data;
                })
                .then(() => {
                    this.isDefined = true;
                })
                .catch();
        },
        async updateInfo() {
            this.errors = [];
            let emptyFieldsCount = 0;
            let req = document.querySelectorAll('[required]');
            req.forEach((element) => {
                if (element.value === "") {
                    element.classList.add('hasError');
                    element.nextSibling.innerHTML = "فیلد اجباری";
                    emptyFieldsCount++;
                } else {
                    element.classList.remove('hasError');
                    element.nextSibling.innerHTML = "";
                }
            });

            if (emptyFieldsCount === 0) {

                await axios.post('/api/panel/teaser/' + this.$route.params.id,
                    {
                        video: document.getElementById('code').value,
                        title: document.getElementById('title').value,
                    })
                    .then((response) => {
                        console.log(response)
                        if (response.status === 200) {
                            setTimeout(() => {
                                this.$router.push({path: '/panel/teaser/' + this.id});
                            }, 1000);
                        }
                    })
                    .catch((error) => {
                        if (error.response && error.response.status === 422) {
                            let errorList = Array(error.response.data);
                            for (var i = 0; i < errorList.length; i++) {
                                this.errors = errorList[i];
                            }
                        } else if (error.response.status === 500) {
                            if (error.response.data.message.includes("SQLSTATE")) {
                                console.error('خطای پایگاه داده');

                                async function showAlertSql() {
                                    setTimeout(() => {
                                        alert(error.response.data.message);
                                    }, 200);
                                }

                                showAlertSql();
                            } else {
                                async function showAlert500() {
                                    setTimeout(() => {
                                        alert(error.message + ' '
                                            + error.response.data.message);
                                    }, 200);
                                }

                                showAlert500();
                            }

                        } else {
                            async function showAlert() {
                                setTimeout(() => {
                                    alert(error.message);
                                }, 200);
                            }

                            showAlert();

                        }
                    });
            }
        },
        fileChanged(e) {
            let files = e.target.files || e.dataTransfer.files;
            if (files.length) {
                document.querySelector('.videoLoading').classList.remove('d-none');
            }
            if (files[0].type == 'video/mp4') {
                if (files[0].size > 20000000) {
                    document.querySelector('#video').value = null;
                    document.querySelector('#code').value = null;
                    alert('حداکثر سایز مجاز 20 مگابایت میباشد');
                    document.querySelector('.videoLoading').classList.add('d-none');
                } else {
                    let reader = new FileReader();
                    reader.readAsDataURL(files[0]);
                    reader.onloadend = function () {
                        document.querySelector('#code').value = reader.result;
                        document.querySelector('.videoLoading').classList.add('d-none');

                    };
                }

            } else {
                document.querySelector('#video').value = null;
                document.querySelector('#code').value = null;
                alert('فرمت باید mp4 باشد');
                document.querySelector('.videoLoading').classList.add('d-none');
            }
        },

    }
}
</script>
<style>
span i {
    cursor: pointer;
}

.tagElement .uri {
    text-align: left !important;
    font-weight: lighter !important;

}


</style>
