<template>
    <transition name="route" mode="out-in" appear>
        <section v-if="data" class="" style="text-align: justify">
            <div class="d-inline-block">
                <p class="mb-2 fw-bold d-block">جزییات رزومه</p>
                <!--                <p class = "mb-2 fw-bold d-block">{{data.name}}</p>-->
                <div class="row ">

                    <div class="col-xl-8 mb-3  ">
                        <div class="row ">
                            <div class="col-12 mx-auto mb-3 py-3 px-4"
                            >
                                <div class="card border-0 shadow-sm">
                                    <div class="card-body pb-5">

                                        <div class="text-center">
                                            <h1>رکسانا رحیمی</h1>
                                            <div class="d-flex justify-content-center">
                                                <p class="mb-0 mx-2"><small>توسعه دهنده وب</small></p>
                                                <p class="mb-0 mx-2"><small>09128222725</small></p>

                                                <!--  <p class="mb-0 mx-2"><small>ms.roxanarahimi@gmail.com</small></p>-->
                                            </div>


                                        </div>
                                        <div class="row">
                                            <div class="col-md-3 pe-4">
                                                <p class="mb-0"><small>خانم، مجرد، توسعه دهنده وب</small></p>
                                                <p class="mb-0"><small>متولد 70/10/26 تهران، تهران</small></p>
                                                <p class="mb-0"><small>09128222725</small></p>
                                                <p class="mb-0"><small>ms.roxanarahimi@gmail.com</small></p>
                                                <p class="mb-0"><small>حقوق درخواستی 15-20</small></p>


                                                <p class="text-center fw-bold mt-3">مهارت ها</p>
                                                <p class="mb-0"><small class="fw-bold">html</small></p>
                                                <hr class="my-2" style="border: 2px black solid; width: 100%">
                                                <p class="mb-0"><small class="fw-bold">css</small></p>
                                                <hr class="my-2" style="border: 2px black solid; width: 100%">
                                                <p class="mb-0"><small class="fw-bold">javascript</small></p>
                                                <hr class="my-2" style="border: 2px black solid; width: 75%">
                                                <p class="mb-0"><small class="fw-bold">vue js</small></p>
                                                <hr class="my-2" style="border: 2px black solid; width: 50%">
                                                <p class="mb-0"><small class="fw-bold">nuxt js</small></p>
                                                <hr class="my-2" style="border: 2px black solid; width: 100%">
                                                <p class="mb-0"><b>linux</b></p>
                                                <hr class="my-2" style="border: 2px black solid; width: 25%">


                                                <p class="text-center fw-bold mt-3">زبان ها</p>
                                                <p class="mb-0"><b>English</b></p>
                                                <hr class="my-2" style="border: 2px black solid; width: 100%">

                                                <p class="text-center fw-bold mt-3">لینک ها</p>
                                                <p class="text-end">Linkedin</p>
                                                <p class="text-end">website</p>



                                                <p class="text-center fw-bold mt-3">سرگرمی ها</p>

                                                <p>کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد</p>


                                            </div>
                                            <div class="col-md-9">


                                                <p class="mt-3"><i class="bi bi-person-fill me-2 "></i><b>درباره من</b></p>
                                                <div>
                                                    <div CLASS="d-flex" style="margin-top: -17px">
                                                        <div style="margin-right: 1px; width: 8px;height: 8px; border-color: black"
                                                             class="border border-2 border-dark rounded mt-3 rounded-circle"></div>

                                                        <p style="margin-top: 20px" class="my-1 ms-2 section-title">&nbsp</p>

                                                    </div>
                                                    <div class="border-dark border-2 ms-1 ps-3 pb-3 border-start pt-3" style="margin-top: -11px">
                                                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد.</p>
                                                    </div>


                                                </div>


                                                <p class="mt-3"><i class="bi bi-mortarboard-fill me-2 "></i><b>تحصیلات</b></p>
                                                <div>
                                                    <div CLASS="d-flex" style="margin-top: -17px">
                                                        <div style="margin-right: 1px; width: 8px;height: 8px; border-color: black"
                                                             class="border border-2 border-dark rounded mt-3 rounded-circle"></div>
                                                        <p style="margin-top: 20px" class="my-1 ms-2 section-title">درباره من</p>
                                                    </div>
                                                    <div class="border-dark border-2 ms-1 ps-3 pb-3 border-start pt-3" style="margin-top: -11px">
                                                        <p>سوابق شغلی</p>
                                                        <p>سوابق شغلی</p>
                                                    </div>


                                                </div>
                                                <div>
                                                    <div CLASS="d-flex" style="margin-top: -17px">
                                                        <div style="margin-right: 1px; width: 8px;height: 8px; border-color: black"
                                                             class="border border-2 border-dark rounded mt-3 rounded-circle"></div>
                                                        <p style="margin-top: 20px" class="my-1 ms-2 section-title">درباره من</p>
                                                    </div>
                                                    <div class="border-dark border-2 ms-1 ps-3 pb-3 border-start pt-3" style="margin-top: -11px">
                                                        <p>سوابق شغلی</p>
                                                        <p>سوابق شغلی</p>
                                                    </div>


                                                </div>
                                                <p class="mt-3"><i class="bi bi-star-fill me-2 "></i><b>نمونه کار</b></p>
                                                <div>
                                                    <div CLASS="d-flex" style="margin-top: -17px">
                                                        <div style="margin-right: 1px; width: 8px;height: 8px; border-color: black"
                                                             class="border border-2 border-dark rounded mt-3 rounded-circle"></div>
                                                        <p style="margin-top: 20px" class="my-1 ms-2 section-title">درباره من</p>
                                                    </div>
                                                    <div class="border-dark border-2 ms-1 ps-3 pb-3 border-start pt-3" style="margin-top: -11px">
                                                        <p>سوابق شغلی</p>
                                                        <p>سوابق شغلی</p>
                                                    </div>


                                                </div>
                                                <p class="mt-3"><i class="bi bi-briefcase-fill me-2 "></i><b>سوابق شغلی</b></p>
                                                <div>
                                                    <div CLASS="d-flex" style="margin-top: -17px">
                                                        <div style="margin-right: 1px; width: 8px;height: 8px; border-color: black"
                                                             class="border border-2 border-dark rounded mt-3 rounded-circle"></div>
                                                        <p style="margin-top: 20px" class="my-1 ms-2 section-title">درباره من</p>
                                                    </div>
                                                    <div class="border-dark border-2 ms-1 ps-3 pb-3 border-start pt-3" style="margin-top: -11px">
                                                        <p>سوابق شغلی</p>
                                                        <p>سوابق شغلی</p>
                                                    </div>


                                                </div>
                                                <div>
                                                    <div CLASS="d-flex" style="margin-top: -17px">
                                                        <div style="margin-right: 1px; width: 8px;height: 8px; border-color: black"
                                                             class="border border-2 border-dark rounded mt-3 rounded-circle"></div>
                                                        <p style="margin-top: 20px" class="my-1 ms-2 section-title">درباره من</p>
                                                    </div>
                                                    <div class="border-dark border-2 ms-1 ps-3 pb-3 border-start pt-3" style="margin-top: -11px">
                                                        <p>سوابق شغلی</p>
                                                        <p>سوابق شغلی</p>
                                                    </div>


                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div class="col-4 mb-3 mt-3">
                        <div class="card">
                            <div class="card-body">
                                <form>
                                    <p class="fw-bold mb-3">تغییر وضعیت</p>
                                    <div class="row">
                                        <div class="col-md-4 col-lg-12 mb-3">
                                            <label for="status" class="form-label">وضعیت</label>
                                            <select class="form-select" id="status" aria-describedby="statusHelp"
                                                    aria-label="status" required>
                                                <option value=""></option>
                                                <option :selected="data.status === 'در انتظار' ? 'selected': false" value="در انتظار">در انتظار</option>
                                                <option :selected="data.status === 'بایگانی' ? 'selected': false" value="بایگانی">بایگانی</option>
                                                <option :selected="data.status === 'تایید برای مصاحبه' ? 'selected': false" value="تایید برای مصاحبه">تایید برای مصاحبه</option>
                                                <option :selected="data.status === 'قبول شده' ? 'selected': false" value="قبول شده">قبول شده</option>
                                                <option :selected="data.status === 'رد شده' ? 'selected': false" value="رد شده">رد شده</option>
                                            </select>
                                            <div id="statusHelp" class="form-text error"></div>

                                        </div>
                                        <div class="col-md-12 mb-3">
                                            <button class="btn btn-primary" @click.prevent="updateInfo" type="submit">
                                                ویرایش
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
        <div v-else><p class="fw-bold">این سفارش موجود نیست</p></div>

    </transition>


</template>

<script>
import App from '../App';

export default {
    data: function () {
        return {
            data: {},
            id: this.$route.params.id,
            skill: [],
            history: [],

        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        async loadData() {

            await axios.get('/api/panel/resume/' + this.id)
                .then((response) => {
                    this.data = response.data;
                    if (this.data.skill) {
                        this.skill = JSON.parse(this.data.skill);
                    }
                    if (this.data.history) {
                        this.history = JSON.parse(this.data.history);
                    }
                })
                .catch();

        },
        async updateInfo() {

            this.progress = 0;

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
                await axios.post('/api/panel/resume/' + this.id, {
                        status: document.getElementById('status').value,
                        payment: document.getElementById('payment').value,
                        post_track_id: document.getElementById('post_track_id').value,
                    }
                    , {
                        onUploadProgress: e => {
                            if (e.lengthComputable) {
                                this.progress = (e.loaded / e.total) * 100;
                                console.log(e.loaded, e.total);
                            }
                        }
                    })
                    .then((response) => {
                        console.log('order', response.data)
                        if (response.status === 200) {
                            console.log(response);
                            this.loadData();
                            console.log(response);
                            if (response.status === 200) {
                                setTimeout(() => {
                                    window.location = '/panel/orders'
                                })
                            }
                        }
                    })
                    .catch((error) => {
                        console.log('order', error);
                        if (error.status === 422) {

                            let errorList = Array(error.data);
                            for (var i = 0; i < errorList.length; i++) {
                                this.errors = errorList[i];
                            }
                            console.log(this.errors.toString());
                        } else if (error.status === 500) {
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


                    })


            }
        }
    }
}
</script>
<style scoped>

table {
    overflow-x: scroll !important;
    min-width: 380px !important;
}

th, td {
    padding: 10px;
}

#content p {
    text-align: justify !important;
    line-height: 30px !important;
    padding-left: 10px;

}

p {
    display: inline-block;
    margin-left: 10px;
    margin-right: 10px;
}

.index_image .label {
    display: block;
    font-size: 20px;
    margin: -50px 20px 50px 20px;
}

#content figure img {
    max-width: 100%;
}

/*.index_image span{*/
/*    display: inline-block;*/
/*    right:20px;*/
/*    bottom: 20px;*/
/*}*/
.edit-pen {
    font-size: 12px;
    margin: 0 6px !important;
}
</style>
