<template>


    <div v-if="allData" class="card">
        <div class="card-body table-responsive">
            <table class="table">
                <thead>
                <tr>
                    <th scope="col"></th>
<!--                    <th scope="col">تصویر</th>-->
                    <th scope="col">عنوان</th>
                    <th scope="col">زیر مجموعه</th>
                    <th scope="col">تاریخ ثبت</th>
                    <th scope="col" class="active_cell">وضعیت</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                <tr :id="'row_'+data.id" v-for="(data, index) in allData" :key="data.id" :data-index="index">
                    <td class="">{{ index + 1 }}</td>
<!--                    <td class=""><img :src="data.thumb" width="80" alt=""></td>-->
                    <td class="">{{ data.title }}</td>
                    <td class="">{{ data.subsets.length }}</td>
                    <td class="">{{ data.created_at }}</td>
                    <td class="active_cell tdx">
                                <span @click="activeToggle(data.id)" v-if="data.active"
                                      class="badge bg-success text-light"><i class="bi bi-eye-fill"></i></span>
                        <span @click="activeToggle(data.id)" v-else class="badge bg-danger text-light"><i
                            class="bi bi-eye-slash-fill"></i></span>
                    </td>
                    <td :id="'form_'+data.id" class="d-none px-3 py-3 edit" colspan="7">
                        <form action="" class="">
                            <div class="row">
<!--                                <div class="col-xl-12 py-2">-->
<!--                                    <div class = "col-12 mb-3">-->
<!--                                        <label class = "form-label">تصویر</label><br/>-->
<!--                                        <image-cropper   :isPng="isPng"  :name = "data.id" caption = "" :hasCaption = "hasCaption" :isRequired = "imgRequired" :aspect = "aspect" :src="data.image"/>-->
<!--                                        <div id = "imageHelp" class = "form-text error"></div>-->
<!--                                    </div>-->
<!--                                </div>-->
                                <div class="col-xl-1 py-2">
                                    <label :for="'title_'+data.id">عنوان</label>
                                </div>
                                <div class="col-xl-6 col-xxl-7 mb-2">
                                    <input type="text" class="form-control border-0 col-auto" required
                                           :id="'title_'+data.id" :value="data.title">
                                </div>
                                <div class="col-xl-4  ">
                                    <button type="submit" class="btn btn-dark ms-auto mb-2"
                                            @click.prevent="updateInfo(data.id)" id="update">
                                        ویرایش
                                    </button>
                                    <button class="btn btn-secondary ms-1 mb-2"
                                            @click.prevent="hideUpdateForm(data.id)" id="cancelUpdate">
                                        انصراف
                                    </button>
                                </div>

                            </div>
                        </form>
                    </td>

                    <td class="">
                        <span role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="bi bi-three-dots-vertical"></i>
                                        </span>
                        <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                            <li>
                                <a class="dropdown-item" style="text-align: right !important"
                                   @click="showUpdateForm(data.id)" href="#">ویرایش</a>
                            </li>
                            <li>
                                <a class="dropdown-item" style="text-align: right !important"
                                   @click="showDeleteModal(data.id)" data-bs-toggle="modal"
                                   data-bs-target="#exampleModal">حذف</a>
                            </li>
                        </ul>
                    </td>

                </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>

<script>
import App from './App';
import imageCropper from "../components/ImageCropper";
import {onMounted, ref} from "vue";

export default {
    props: ['model', 'allData', 'page', 'pages', 'load'],
    name: "categoriesTable",
    components: { imageCropper},
    setup(props) {
        const errors = ref([]);
        const imgRequired = true;
        const hasCaption = false;
      const aspect = false;
        const isPng = true;

        const loadData = async (p) => {
            props.load(p);
        }
        const showDeleteModal = (id) => {
            document.getElementById('deleteId').value = id;
        };
        // const deleteInfo = async (id) => {
        //     // await App.methods.checkToken();
        //     await axios.post('/api/panel/delete/category/' + props.model, {
        //         id: id,
        //     })
        //         .then((response) => {
        //             console.log(response.data)
        //         })
        //         .catch((error) => {
        //             console.log(error);
        //         });
        //     await loadData();
        // };
        const activeToggle = async (id) => {
            // await App.methods.checkToken();
            await axios.get('/api/panel/active/category/' + props.model + '/' + id)
                .then((response) => {
                    console.log(response.data)
                })
                .catch((error) => {
                    console.error(error);
                });
            await loadData();

        };

        const showUpdateForm = async (id) => {
            await document.querySelectorAll('#row_' + id + ' > td').forEach((element) => {
                element.classList.add('d-none');
            });
            await document.getElementById('form_' + id).classList.remove('d-none');
        };
        const hideUpdateForm = async (id) => {
            await loadData(props.page);
            await document.querySelectorAll('#row_' + id + ' > td').forEach((element) => {
                element.classList.remove('d-none');
            });
            await document.getElementById('form_' + id).classList.add('d-none');
            // await document.getElementById('btn_clear_image_'+id).click();

        };
        const updateInfo = async (id) => {
            // await App.methods.checkToken();
            await axios.post('/api/panel/category/' + props.model + '/' + id,
                {
                    title: document.getElementById('title_' + id).value,
                    // image: document.getElementById('Image_'+id+'_code').value,

                })
                .then((response) => {
                    console.log(response.data);
                    loadData();
                     // document.getElementById('btn_clear_image_'+id).click();

                })
                .catch((error) => {
                    if (error.status === 422) {
                        let errorList = Array(error.response.data);
                        for (var i = 0; i < errorList.length; i++) {
                            for (var j = 0; j < Array(errorList[i]).length; j++) {
                                let err = Object.values(Array(errorList[i])[j]);
                                err.forEach((element) => {
                                    element.forEach((m) => {
                                        // errors.value.push(m)
                                        alert(m)
                                    })
                                });
                            }
                        }
                    } else if (error.status === 500) {
                        if (error.response.data.message.includes("SQLSTATE")) {
                            console.error('خطای پایگاه داده');
                        }
                        alert('در ذخیره اطلاعات مشکلی بوجود امده.');

                    } else {
                        console.error(error);
                    }
                });
            await hideUpdateForm(id);
        };

        return {
            loadData, updateInfo, showUpdateForm, hideUpdateForm, activeToggle,
            showDeleteModal, errors, imgRequired, hasCaption, aspect, isPng
        }

    },


}

</script>
<style>
.edit {
    background: #d7d7d7 !important;
}
</style>
a
