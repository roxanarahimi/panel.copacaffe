<template>
  <div class="image-cropper row" :id="'image-cropper row'+name" style="min-height: 200px">
    <div v-if="src" class="p-1 text-center m-2" style="max-width: 265px;min-height:100px">
      <img :id="'former_image_'+ name" :src="src" style="width: 100%; height:auto">
      <!--            <p v-if = "hasCaption" class = "align-bottom"> {{ caption }} </p>-->
    </div>
    <!--        @mousemove = "handleImageCropped"-->
    <div class="cropper-wrapper justify-content-center d-flex border rounded p-1 text-center m-md-2"
         style="max-width: 369px;min-height:190px">
      <div v-show="selectedFile" class="image-container">
        <img class="img-fluid" style="width: 360px !important; height: auto !important" ref="image" :src="imageSrc"
             alt="">
      </div>
        <div v-if="!selectedFile" class="d-grid">
            <ul class="error text-start align-self-center small px-0">
                <li class="error">فرمت مجاز: png</li>
                <li class="error">حجم مجاز: حد اکثر 600KB</li>
                <li class="error">طول و عرض پیشنهادی: 300 تا 600 px</li>
            </ul>
        </div>
    </div>

    <div v-if="!hasCaption && selectedFile" class="d-inline-block image-preview_wrapper p-1 text-center m-2"
         style="max-width: 265px;min-height: 180px">
      <img :id="'preview_'+ name" class="image-preview" style="width: 100%; height:auto" alt="">
    </div>
    <!--        <figure v-else class = "content_image image-preview_wrapper p-1 text-center m-2" style = "max-width: 265px;height:180px">-->
    <!--            <img v-show = "selectedFile" :id = "'preview_'+ name" class = "image-preview img-fluid" alt = "">-->
    <!--            <figcaption v-show = "selectedFile" class = "align-bottom">-->
    <!--                <input :id = "'Image_'+name+'_caption'" type = "text" class = "form-control mt-2" placeholder = "کپشن را وارد کنید (اختیاری)">-->
    <!--            </figcaption>-->
    <!--        </figure>-->
    <div>
            <span @click="imageInput.click()" class="btn btn-primary btn-sm m-1 mb-3" data-bs-toggle="tooltip"
                  data-bs-placement="bottom" title="انتخاب عکس"><i class="bi bi-upload px-2 fw-bold"></i></span>
      <span :id="'btn_clear_image_'+name" v-show="selectedFile" @click="clearFile"
            class="btn btn-primary btn-sm m-1 mb-3"><i class="bi bi-eraser px-2 fw-bold" data-bs-toggle="tooltip"
                                                       data-bs-placement="bottom" title="پاک کن"></i></span>
    </div>
    <!--        <div v-show = "selectedFile" v-if = "hasCaption">-->
    <!--            <input type = "text" :id = "'Image_'+name+'_alt'" class = "form-control mb-2" style = "width: 260px" placeholder = " alt (اختیاری) ">-->
    <!--            <input type = "text" :id = "'Image_'+name+'_max_width'" class = "form-control mb-2" style = "width: 260px" placeholder = "حد اکثر عرض مجاز (اختیاری)">-->
    <!--        </div>-->

    <input :id="'image'+ name" ref="imageInput" accept=".png" @change="fileChanged" type="file"
           :name="'content_image_file'+name" class="form-control d-none">

    <input :id="'Image_'+name+'_code'" name="content_image_code" type="text"
           class="form-control image_code_64  d-none">
    <input :id="'Image_'+name+'_name'" name="content_image_name" v-if="selectedFile" :value="selectedFile.name"
           type="text" class="file_name form-control d-none">
    <input v-if="isRequired" :id="'Image_'+name" type="text" :value="selectedFile" class="form-control d-none"
           required>
    <div v-if="isRequired" :id="'imageHelp'+name" class="form-text error"></div>

  </div>
</template>
<script>
// import Cropper from 'cropperjs';
import {ref, watchEffect, onMounted, onUnmounted, watch} from 'vue';

export default {
  name: 'ImageCropper',
  events: ['imageCropped'],
  // props: {name: String, isRequired: Boolean, hasCaption: Boolean, src: String, caption: String, aspect: Number},
  props: ['name', 'isRequired', 'hasCaption', 'aspect', 'src', 'isPng'],
  setup(_props, {emit}) {

    const imageInput = ref(null);
    const selectedFile = ref(null);
    const imageSrc = ref(null);
    const image = ref(null);
    const destination = ref(null);
    let cropper = null;
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      imageSrc.value = event.target.result;
    };

    const handleImageCropped = () => {
      if (imageSrc.value) {
        // cropper.getCroppedCanvas().toDataURL((blob) => {
        //     // console.log('blob', blob);
        //     emit('imageCropped', blob);
        // }, 'image/jpeg');
        _props.isPng === true ?
            (destination.value = cropper.getCroppedCanvas({fillColor: 'transparent'})?.toDataURL('image/png'))
            :
            (destination.value = cropper.getCroppedCanvas({fillColor: '#fff'})?.toDataURL('image/jpeg'))
        document.getElementById("preview_" + _props.name)?.setAttribute('src', destination.value);
        document.getElementById('Image_' + _props.name + '_code').setAttribute('value', destination.value);
        // document.getElementById('Image_'+ _props.name +'_code').innerText = destination.value;
      }

    };
    const check1 = () => {
      // alert('1')
      if (imageSrc) {
        document.addEventListener('click', handleImageCropped);
        console.log('added');
        handleImageCropped();
      } else {
        document.removeEventListener('click', handleImageCropped);
        console.log('removed');
      }
    };
    const fileChanged = (e) => {
      document.removeEventListener('click', handleImageCropped);

      let files = e.target.files || e.dataTransfer.files;
      if (files.length) {
        selectedFile.value = files[0];
      }

        if(files[0].type != 'image/png'){

            selectedFile.value = null;
            // document.getElementById("preview_" + _props.name).setAttribute('src', "");
            // document.getElementById('Image_' + _props.name + '_code').setAttribute('value', "");
            // destination.value = null;
            alert('فرمت باید png باشد');
        }
        if(files[0].size >600000 ){
            selectedFile.value = null;
            alert('حجم تصویر نباید بیش از 600 کیلوبایت باشد');
        }
      if (files[0], files[0].type == 'image/png') {

        let reader = new FileReader();
        reader.onload = function (files) {
          let img = new Image;
          img.onload = function () {
            // console.log("The width of the image is " + img.width + "px.");
            if (img.width < 200) {
              selectedFile.value = null;
              document.getElementById("preview_" + _props.name).setAttribute('src', "");
              document.getElementById('Image_' + _props.name + '_code').setAttribute('value', "");
              destination.value = null;
              // document.getElementById('imageHelp').innerHTML = 'عرض تصویر باید بیش از 200 پیکسل باشد';
              alert('عرض تصویر باید بیش از 200 پیکسل باشد');
            }
          };
          img.src = reader.result;
        };
        reader.readAsDataURL(files[0]);
      }

      check1();

    };
    const clearFile = () => {
      selectedFile.value = null;
      document.getElementById("image" + _props.name).value = null;
      document.getElementById("preview_" + _props.name).setAttribute('src', "");
      document.getElementById('Image_' + _props.name + '_code').setAttribute('value', "");
      if (_props.name === 'inner') {
        document.getElementById('Image_' + _props.name + '_alt').value = "";
        document.getElementById('Image_' + _props.name + '_max_width').value = "";
      }
      destination.value = null;

      // thumb.value = null; // imageSrc.value = null;

    };
    onMounted(() => {
      cropper = new Cropper(image.value, {
        // aspectRatio:1,
        // minCropBoxWidth: 256,
        // minCropBoxHeight: 256,
        viewMode: 3,
        // dragMode: 'move',
        background: false,
        // cropBoxMovable: false,
        // cropBoxResizable: false,
        zoomable: false,
        // zoomOnTouch: true,
        // zoomOnWheel: true,
        scalable: false,
        aspectRatio: _props.aspect,

      });
    });

    onUnmounted(() => {
      cropper.destroy();
    });
    watchEffect(() => {
      if (selectedFile.value) {
        fileReader.readAsDataURL(selectedFile.value);
      } else {
        imageSrc.value = null;
        // destination.value = null;
        // thumb.value = null;
      }
    });
    watch(imageSrc, async () => {
      if (imageSrc.value) {
        await cropper.replace(imageSrc.value);
        setTimeout(await function () {
          handleImageCropped();
        }, 200);
      }
    }, {
      flush: 'post', //watch runs after component updates
    });

    return {
      imageInput,
      selectedFile,
      imageSrc,
      image,
      fileChanged,
      clearFile,
      handleImageCropped,
      check1,
    };
  },

}
</script>

<style>
.image-container {
  width: inherit;
  height: inherit;
}

</style>
