<template>
    <transition name = "route" mode = "out-in" appear>
        <section>
            <h3 class = "mb-5">ویرایش محصول</h3>

            <div class = "row mt-3">
                <div class = "col-12 mb-3">
                    <div class = "card" v-if = "isDefined">
                        <div class = "card-body">
                            <form id = "editForm">
                                <div class = "row">
                                    <div class = "col-12 mb-3">
                                        <label class = "form-label">تصویر</label><br/>
                                        <image-cropper name = "index" :src = "data.image" caption = "" :hasCaption = "hasCaption" :isRequired = "imgRequired" :aspect = "aspect"/>
                                        <div id = "imageHelp" class = "form-text error"></div>
                                    </div>
                                </div>
                                <div class = "row">
                                    <div class = "col-md-4 col-lg-3 mb-3">
                                        <label for = "title" class = "form-label">عنوان</label>
                                        <input type = "text" :class = "{hasError: errors.title}" class = "form-control" id = "title" :value = "data.title" aria-describedby = "titleHelp" required>
                                        <div id = "titleHelp" class = "form-text error"></div>
                                        <p class = "form-text error m-0" v-for = "e in errors.title">{{ e }}</p>

                                    </div>
                                    <div class = "col-md-8 col-lg-4 mb-3">
                                        <label for = "subTitle" class = "form-label">زیرنویس</label>
                                        <input type = "text" :class = "{hasError: errors.subTitle}" class = "form-control text-start" :value = "data.subTitle" id = "subTitle" required>
                                        <div id = "subTitleHelp" class = "form-text error"></div>
                                        <p class = "form-text error m-0" v-for = "e in errors.subTitle">{{ e }}</p>
                                    </div>
                                    <div class = "col-md-4 col-lg-2 mb-3">
                                        <label for = "category" class = "form-label">دسته</label>
                                        <select class = "form-select" id = "category" aria-describedby = "categoryHelp" aria-label = "category" required>
                                            <option value = ""></option>
                                            <option :selected = "data.category.id == category.id" v-for = "category in categories" :key = "category.id" :value = "category.id">
                                                {{ category.title }}
                                            </option>
                                        </select>
                                        <div id = "categoryHelp" class = "form-text error"></div>
                                    </div>
                                    <div class = "col-md-4 col-lg-2 mb-3">
                                        <label for = "price" class = "form-label">قیمت (ریال)</label>
                                        <input type = "number" min = "1000" :class = "{hasError: errors.price}" class = "form-control text-start" id = "price" :value = "data.price" required>
                                        <div id = "priceHelp" class = "form-text error"></div>
                                        <p class = "form-text error m-0" v-for = "e in errors.price">{{ e }}</p>

                                    </div>
                                    <div class = "col-md-4 col-lg-1 mb-3">
                                        <label for = "off" class = "form-label">%تخفیف</label>
                                        <input type = "number" :class = "{hasError: errors.off}" class = "form-control text-start" id = "off" :value = "data.off">
                                        <div id = "offHelp" class = "form-text error"></div>
                                        <p class = "form-text error m-0" v-for = "e in errors.off">{{ e }}</p>

                                    </div>
                                    <div class = "col-md-12 mb-3">
                                        <label class = "form-label" for = "text">متن</label>
                                        <textarea @input = "watchTextAreas" :class = "{hasError: errors.text}" aria-describedby = "textHelp" class = "form-control text-start" id = "text">{{ data.text}}</textarea>
                                        <div id = "textHelp" class = "form-text error"></div>
                                        <p class = "form-text error m-0" v-for = "e in errors.text">{{ e }}</p>

                                    </div>
                                    <div class = "col-md-12 mb-3" id = "features">
                                        <div>
                                            <label class = "form-label mb-1 align-middle">مشخصات</label>
                                            <span @click = "addFeature" class = "px-3 d-inline-block align-middle"><i class = "bi bi-plus-circle-fill p-0 mt-2 m-0" style = "font-size: 15px"></i></span>
                                        </div>

                                        <div v-for = "(item, index) in features" :key = "index" class = "row tagElement">
                                            <div class = "col-5 col-md-3 mb-3">
                                                <input type = "text" name = "featureLabel" class = "form-control" @input = "updateFeatures" :value = "item.label" placeholder = "عنوان" required>
                                                <div class = "form-text error"></div>
                                            </div>
                                            <div class = "col-5 col-md-3 mb-3">
                                                <input type = "text" name = "featureValue" class = "form-control" @input = "updateFeatures" :value = "item.value" placeholder = "مقدار" required>
                                                <div class = "form-text error"></div>
                                            </div>
                                            <div class = "col-auto mb-3 pt-2">
                                                <span @click = "removeFeature(index)"><i class = "bi bi-x-circle-fill m-0 " style = "font-size: 15px"></i></span>
                                            </div>
                                        </div>

                                    </div>
                                    <div class = "col-md-12 mb-3" id = "sizes">
                                        <div>
                                            <label class = "form-label mb-1 align-middle">سایز و رنگ</label>
                                            <span @click = "addSize" class = "px-3 d-inline-block align-middle"><i class = "bi bi-plus-circle-fill p-0 mt-2 m-0" style = "font-size: 15px"></i></span>
                                        </div>

                                        <div v-for = "(item, index) in sizes" :key = "index" id = "sizeSection" class = "row sizeElement">
                                            <div class = "col-6 col-md-2 mb-3">
                                                <input type = "text" name = "size" class = "form-control" @input = "updateSizes" :value = "item.size" placeholder = "سایز" required>
                                                <div class = "form-text error"></div>
                                            </div>
                                            <div class = "col-6 col-md-4 mb-3">
                                                <input type = "text" name = "dimensions" class = "form-control" @input = "updateSizes" :value = "item.dimensions" placeholder = "ابعاد" required>
                                                <div class = "form-text error"></div>
                                            </div>
                                            <div class = "col-6 col-md-2 mb-3">
                                                <input type = "text" name = "color_name" class = "form-control" @input = "updateSizes" :value = "item.color_name" placeholder = "رنگ" required>
                                                <div class = "form-text error"></div>
                                            </div>
                                            <div class = "col-6 col-md-2 mb-3">
                                                <input type = "text" name = "color_code" class = "form-control" dir = "ltr" @input = "updateSizes" :value = "item.color_code" placeholder = "(#fffff) کد رنگ" required>
                                                <div class = "form-text error"></div>
                                            </div>
                                            <div class = "col-10 col-md-1 mb-3">
                                                <input type = "number" name = "stock" class = "form-control" min = "0" dir = "ltr" @input = "updateSizes" :value = "item.stock" placeholder = "موجودی" required>
                                                <div class = "form-text error"></div>
                                            </div>
                                            <div class = "col-1 mb-3 pt-2">
                                                <span @click = "removeSize(index)"><i class = "bi bi-x-circle-fill m-0 " style = "font-size: 15px"></i></span>
                                            </div>
                                        </div>

                                    </div>


                                    <div class = "col-md-12 mb-3">
                                        <button class = "btn btn-primary" @click.prevent = "updateInfo" type = "submit">
                                            ویرایش
                                        </button>
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
    import App from '../App';

    export default {
        components: {ImageCropper},
        data() {
            return {
                id: this.$route.params.id,
                data: {},
                categories: [],
                errors: [],
                image_codes: [],
                image_names: [],
                imgRequired: false,
                hasCaption: false,
                aspect: 13 / 10,
                isDefined: false,
                enableClick: true,

            }
        },

        mounted() {
            this.loadCategories();
            this.loadProduct();
        },

        methods: {
            loadProduct() {
                axios.post('/api/panel/check/user/token', {id: JSON.parse(localStorage.getItem('user')).id})
                    .then((response) => {
                        if (response.status === 200) {
                            localStorage.setItem('expire', response.data.expire);
                            console.log(localStorage);
                        }
                    })
                    .then(() => {
                        axios.get('/api/panel/product/' + this.id)
                            .then((response) => {
                                console.log(response.data);
                                this.data = response.data.product;
                                if (this.data.features) {
                                    for (let i = 0; i < JSON.parse(this.data.features).length; i++) {
                                        this.features.push(JSON.parse(this.data.features)[i]);
                                    }
                                }
                                if (this.data.sizes && this.data.sizes.length) {
                                    this.sizes = this.data.sizes;
                                }
                            })
                            .then(() => {
                                this.isDefined = true;
                            })
                            .then(() => {
                                this.watchTextAreas();
                            })
                            .catch();
                    })
                    .catch((error) => {
                        if (error.response.status === 401) {
                            window.location = '/panel/login'
                            App.methods.logout();
                        }
                    });
            },
            loadCategories() {
                axios.get('/api/panel/category/product')
                    .then((response) => {
                        this.categories = response.data;
                    })
                    .catch();
            },
            updateInfo() {
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
                    let features = [];
                    for (let i = 0; i < document.getElementsByName('featureLabel').length; i++) {
                        features.push('{"label": "' + document.getElementsByName('featureLabel')[i].value + '", "value": "' + document.getElementsByName('featureValue')[i].value + '"}');
                    }
                    if (document.getElementsByName('featureLabel').length === 0) {
                        features = '[]';
                    } else {
                        features = '[' + features.toString() + ']';
                    }
                    axios.post('/api/panel/product/' + this.$route.params.id,
                        {
                            // image: document.getElementById('Image_index_code').value,
                            title: document.getElementById('title').value,
                            subTitle: document.getElementById('subTitle').value,
                            product_category_id: document.getElementById('category').value,
                            text: document.getElementById('text').value,
                            features: features,
                            sizes: this.sizes,
                            off: document.getElementById('off').value,
                            price: document.getElementById('price').value,

                            // stock: document.getElementById('stock').value,

                            // image_codes: this.image_codes,
                            // image_names: this.image_names,

                        })
                        .then((response) => {
                            // console.log(response.data);
                            if (response.status === 200) {
                                setTimeout(() => {
                                    this.$router.push({path: '/panel/product/' + this.id});
                                }, 1000);
                            }
                        })
                        .catch((error) => {
                            // console.log(error);
                            // console.log(error.message);
                            // console.log(error.response);
                            // console.log(error.response.data);
                            // console.log(error.response.data.exception_code);
                            if (error.response.status === 422) {
                                let errorList = Array(error.response.data);
                                for (var i = 0; i < errorList.length; i++) {
                                    // console.log('i', errorList[i]);
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
            watchTextAreas() {
                let txt = document.querySelector("#text");
                txt.setAttribute("style", "height:" + (txt.scrollHeight + 20) + "px;overflow-y:hidden;");
                txt.addEventListener("input", changeHeight, false);

                function changeHeight() {
                    this.style.height = "auto";
                    this.style.height = (this.scrollHeight) + "px";
                }
            },
            addFeature() {
                this.features.push('{"label": "", "value": ""}');
            },
            removeFeature(index) {

                this.features.splice(index, 1)
            },
            updateFeatures() {

                axios.post('/api/panel/check/user/token', {id: JSON.parse(localStorage.getItem('user')).id})
                    .then((response) => {
                        if (response.status === 200) {
                            localStorage.setItem('expire', response.data.expire);
                            console.log(localStorage);
                        }
                    })
                    .then(() => {
                        this.features = [];
                        for (let i = 0; i < document.getElementsByName('featureLabel').length; i++) {
                            this.features.push({
                                "label": document.getElementsByName('featureLabel')[i].value.toString(),
                                "value": document.getElementsByName('featureValue')[i].value.toString()
                            });
                        }
                    })
                    .catch((error) => {
                        if (error.response.status === 401) {
                            window.location = '/panel/login'
                            App.methods.logout();
                        }
                    });


            },

            addSize() {

                this.sizes.push('{}');
            },
            removeSize(index) {

                this.sizes.splice(index, 1)
            },
            updateSizes() {
                App.methods.checkToken();
                let a = [];
                for (let i = 0; i < document.getElementsByName('size').length; i++) {
                    a.push({
                        "size": document.getElementsByName('size')[i].value.toString(),
                        "dimensions": document.getElementsByName('dimensions')[i].value.toString(),
                        "color_name": document.getElementsByName('color_name')[i].value.toString(),
                        "color_code": document.getElementsByName('color_code')[i].value.toString(),
                        "stock": document.getElementsByName('stock')[i].value,
                    });
                }
                this.sizes = a;
                console.log(this.sizes);

            },

        }
    }
</script>
<style>
    span i {
        cursor: pointer;
    }

</style>
