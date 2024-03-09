(self["webpackChunk"] = self["webpackChunk"] || []).push([["FoodSlideCreate"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/components/BtnSubmit.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/components/BtnSubmit.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Loader_sm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Loader-sm */ "./resources/js/components/components/Loader-sm.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    LoaderSm: _components_Loader_sm__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  name: "BtnSubmit",
  setup: function setup() {
    var submitForm = function submitForm() {
      var emptyFieldsCount = 0;
      var req = document.querySelectorAll('[required]');
      req.forEach(function (element) {
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
        document.querySelector('#submit').setAttribute('disabled', 'disabled');
        document.querySelector('.loader-sm').classList.remove('d-none'); // setTimeout(()=>{
        //     document.querySelector('#submit')?.removeAttribute('disabled');
        //     document.querySelector('.loader-sm')?.classList.add('d-none');
        // },10000)
      } else {
        document.querySelector('#submit').classList.remove('btn-primary');
        document.querySelector('#submit').classList.add('btn-danger');
        setTimeout(function () {
          document.querySelector('#submit').classList.add('btn-primary');
          document.querySelector('#submit').classList.remove('btn-danger');
        }, 3000);
      }
    };

    return {
      submitForm: submitForm
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/components/Editor.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/components/Editor.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ImageCropper2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageCropper2 */ "./resources/js/components/components/ImageCropper2.vue");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
// import Vue from '';


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ImageCropper2: _ImageCropper2__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ['mode', 'content', 'id'],
  data: function data() {
    return {
      optionsFlag: 0,
      hasCaption: true,
      isRequired: false,
      aspect: null,
      isFirstInput: true,
      isFirstMove: true,
      draft: [],
      image_codes: [],
      image_names: []
    };
  },
  mounted: function mounted() {
    document.getElementById('editor').addEventListener("paste", function (e) {
      // cancel paste
      e.preventDefault(); // get text representation of clipboard

      var text = (e.originalEvent || e).clipboardData.getData('text/plain'); // insert text manually

      document.execCommand("insertHTML", false, text);
    });
    document.getElementById('editor').addEventListener('mouseup', function (e) {
      this.optionsFlag === 0 ? this.optionsToggle(true) : document.getElementById('add_content').classList.add('d-none');
      var text = '';

      if (window.getSelection) {
        text = window.getSelection().toString();
      } else if (document.selection) {
        text = document.selection.createRange().text;
      }

      if (text !== '') {
        var option = document.querySelector('#editor_options');
        option.style.position = 'absolute';
        option.style.left = 'calc(' + (window.innerWidth / 2).toString() + 'px - 250px)';
        option.style.top = 'calc( ' + e.clientY.toString() + 'px + ' + document.querySelector('.page_content').scrollTop.toString() + 'px - 230px - 35px)'; // option.style.right = '-3px';

        option.classList.remove('d-none');
      }
    });
    document.getElementById('editor').addEventListener('click', savePosition);
    document.querySelector('#editor_options').classList.add('d-none');
    var sel = document.getSelection();
    var saved; // document.getElementById('editor').onclick = inputChange;
    //
    // function inputChange(e) {

    var editor = document.getElementById("editor");
    var add_heading_btn = document.getElementById("add_heading_btn");
    var confirm_Image = document.getElementById("confirm_Image"); // editor.addEventListener('keypress', handleKeyPress);
    // editor.addEventListener('keydown', handleKeyDown);

    editor.addEventListener('click', savePosition);
    editor.addEventListener('keyup', savePosition);
    add_heading_btn.addEventListener('click', function () {
      var top = document.querySelector('.page_content').scrollTop;
      restorePosition();
      document.execCommand('formatBlock', false, 'H2');
      document.querySelector('.page_content').scrollTop = top;
      var o = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.toArray)(document.querySelector('#editor').children);

      for (var i = 0; i < o.length; i++) {
        if (o[i].tagName === 'DIV' && o[i].innerHTML === '<br>') {
          o[i].addEventListener('click', function (event) {
            document.getElementById('add_content').classList.remove('d-none');
            document.getElementById('add_content').style.top = 'calc( ' + event.clientY.toString() + 'px + ' + document.querySelector('.page_content').scrollTop.toString() + 'px - 220px)';
          });
        } else {
          o[i].addEventListener('click', function () {
            document.getElementById('add_content').classList.add('d-none');
          });
        }
      }
    }); // this.makeImageArrays();

    confirm_Image.addEventListener('click', function () {
      document.removeEventListener('click', _ImageCropper2__WEBPACK_IMPORTED_MODULE_0__["default"].methods.handleImageCropped); //*

      var top = document.querySelector('.page_content').scrollTop;
      restorePosition();
      var html = ''; // console.log('1',document.getElementById('Image_inner_code'))
      // console.log('2',document.getElementById('Image_inner_code').getAttribute('value'))

      if (document.getElementById('Image_inner_code').getAttribute('value')) {
        var path = '';
        axios.post('/api/panel/upload/editor/image', {
          code: document.getElementById('Image_inner_code').value,
          name: document.getElementById('Image_inner_name').value,
          path: 'images/editor/'
        }).then(function (response) {
          console.log(response);
          path = response.data;

          if (path) {
            document.getElementById('Image_inner_path').value = response.data; //TODO: //then close modal;
          }
        }).then(function () {
          var style = '';

          if (document.getElementById('Image_inner_max_width').value !== '') {
            style = 'style="max-width:' + document.getElementById('Image_inner_max_width').value.toString() + 'px"';
          } // html = '<figure ><img ' + style + ' src="' + document.getElementById('Image_inner_code').getAttribute('value') + '" alt="' + document.getElementById('Image_inner_alt').value + '">' +


          html = '<figure ><img ' + style + ' src="' + document.getElementById('Image_inner_path').value + '" alt="' + document.getElementById('Image_inner_alt').value + '">' + '<figcaption>' + document.getElementById('Image_inner_caption').value + '</figcaption>' + '</figure>';
          document.execCommand('insertHTML', false, '<br>');
          document.execCommand('insertHTML', false, html); // document.querySelectorAll('#editor > div').forEach((div) => {
          //     if (div.firstChild.tagName === 'FIGURE'){
          //         div.setAttribute('contenteditable', false);
          //     }
          //
          // });

          document.querySelector('.page_content').scrollTop = top;
        })["catch"](function (error) {
          console.log(error);
        });
      }

      var o = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.toArray)(document.querySelector('#editor').children);

      for (var i = 0; i < o.length; i++) {
        if (o[i].tagName === 'DIV' && o[i].innerHTML === '<br>') {
          o[i].addEventListener('click', function (event) {
            document.getElementById('add_content').classList.remove('d-none');
            document.getElementById('add_content').style.top = 'calc( ' + event.clientY.toString() + 'px + ' + document.querySelector('.page_content').scrollTop.toString() + 'px - 220px)';
          });
        } else {
          o[i].addEventListener('click', function () {
            document.getElementById('add_content').classList.add('d-none');
          });
        }
      }

      var images = document.querySelectorAll('#editor > div > figure > img');
      images.forEach(function (image) {
        document.querySelectorAll('figure').forEach(function (fig) {
          fig.removeAttribute('id');
        });

        if (image.parentElement.tagName === 'FIGURE') {
          image.parentElement.removeAttribute('id');
        }

        image.setAttribute('data-bs-toggle', 'modal');
        image.setAttribute('data-bs-target', '#imgModalDetails');
        image.addEventListener('click', function () {
          image.parentElement.setAttribute('id', 'editingImg');
          var src = image.getAttribute('src');
          var alt = image.getAttribute('alt');
          var caption = '';

          if (image.nextSibling && image.nextSibling.tagName === 'FIGCAPTION') {
            caption = image.nextSibling.innerHTML;
          }

          var maxWidth = image.style.maxWidth.toString().replace('px', '');
          document.querySelector('#img_edit_preview').setAttribute('src', src);
          document.querySelector('#img_edit_src').value = src;
          document.querySelector('#img_edit_alt').value = alt || '';
          document.querySelector('#img_edit_max_width').value = maxWidth || '';
          document.querySelector('#img_edit_caption').value = caption || '';
        });
      }); // make images arrays:
    }); // }

    function savePosition() {
      saved = [sel.focusNode, sel.focusOffset]; // console.log(saved);
    }

    function restorePosition() {
      editor.focus(); //sel.extend(saved[0], saved[1]);

      sel.collapse(saved[0], saved[1]);
    } // function log() {
    //     console.log(editor.childNodes);
    // }
    // function change() {
    //     var text = editor.childNodes;
    //
    //     for (var i = 0; i < text.length; i++) {
    //
    //         if (text[i].textContent === "base") {
    //             var bold = document.createElement("span");
    //             bold.classList.add("highlight");
    //             bold.appendChild(document.createTextNode(text[i].textContent));
    //             editor.replaceChild(bold, text[i]);
    //         }
    //     }
    // }
    // var lastCharSpace = false;
    // function handleKeyDown(e) {
    //     // if (e.which === 32) {
    //     //     lastCharSpace = true;
    //     //     e.preventDefault();
    //     //     var space = new Text('\u00A0');
    //     //
    //     //     editor.appendChild(space);
    //     //     sel.collapse(space, 1);
    //     //
    //     // }
    // }
    // function handleKeyPress(e) {
    //     // change();
    //     // if (lastCharSpace) {
    //     //     e.preventDefault();
    //     //     lastCharSpace = false;
    //     //     var newNode = new Text(String.fromCharCode(e.keyCode));
    //     //
    //     //     editor.appendChild(newNode);
    //     //
    //     //     sel.collapse(newNode, 1);
    //     // }
    // }


    document.querySelector('#editor').addEventListener('keydown', function (e) {
      var _saved$0$firstChild2;

      var editor = document.getElementById('editor'); // console.log(e.key)

      if (e.key === 'Backspace') {
        var _saved$0$firstChild, _saved$0$parentElemen, _saved$0$parentElemen2, _saved$0$parentElemen3;

        //  e.preventDefault();
        console.log('1', saved); //#text ==== figure

        console.log('1', saved[0].nodeName); //#text ==== figure

        console.log('2', saved[0].firstChild); //    img

        console.log('3', (_saved$0$firstChild = saved[0].firstChild) === null || _saved$0$firstChild === void 0 ? void 0 : _saved$0$firstChild.tagName);
        console.log('4', (_saved$0$parentElemen = saved[0].parentElement.nextSibling) === null || _saved$0$parentElemen === void 0 ? void 0 : _saved$0$parentElemen.tagName);
        console.log('5', (_saved$0$parentElemen2 = saved[0].parentElement.nextSibling) === null || _saved$0$parentElemen2 === void 0 ? void 0 : (_saved$0$parentElemen3 = _saved$0$parentElemen2.firstChild) === null || _saved$0$parentElemen3 === void 0 ? void 0 : _saved$0$parentElemen3.tagName);

        if (e.key === 'Backspace' && saved[0].tagName === 'FIGURE' && saved[0].firstChild && saved[0].firstChild.tagName === 'IMG' && saved[1] === 0) {
          e.preventDefault();
        } else if (e.key === 'Backspace' && saved[0].nodeName === 'H2') {
          e.preventDefault();
          console.log(saved[0].parentElement);

          if (saved[0].parentElement.tagName === 'DIV' && saved[0].parentElement.getAttribute('id') !== 'editor') {
            saved[0].parentElement.remove();
          } else {
            saved[0].remove();
          }
        } else if (saved[0].nodeName === '#text' && saved[1] === 0) {
          if (saved[0].parentElement.previousSibling) {
            var _saved$0$parentElemen4;

            if (saved[0].parentElement.previousSibling.nodeName === 'H2') {
              if (saved[0].parentElement.previousSibling.innerHTML === '<br>' || saved[0].parentElement.previousSibling.innerHTML === '') {
                e.preventDefault();
                saved[0].parentElement.previousSibling.remove();
              } else {
                e.preventDefault();
              }
            }

            if (saved[0].parentElement.previousSibling.nodeName === 'DIV' && ((_saved$0$parentElemen4 = saved[0].parentElement.previousSibling.firstChild) === null || _saved$0$parentElemen4 === void 0 ? void 0 : _saved$0$parentElemen4.nodeName) === 'H2') {
              var _saved$0$parentElemen5, _saved$0$parentElemen6;

              if (((_saved$0$parentElemen5 = saved[0].parentElement.previousSibling.firstChild) === null || _saved$0$parentElemen5 === void 0 ? void 0 : _saved$0$parentElemen5.innerHTML) === '<br>' || ((_saved$0$parentElemen6 = saved[0].parentElement.previousSibling.firstChild) === null || _saved$0$parentElemen6 === void 0 ? void 0 : _saved$0$parentElemen6.innerHTML) === '') {
                e.preventDefault();
                saved[0].parentElement.previousSibling.remove();
              } else {
                e.preventDefault();
              }
            }
          }
        }
      }

      if (e.key === 'Delete') {
        var _saved$0$parentElemen7, _saved$0$parentElemen8, _saved$0$parentElemen9;

        e.preventDefault(); // console.log('1', saved[0].nodeName); //#text ==== figure
        // console.log('2', saved[0].firstChild);      //    img
        // console.log('3', saved[0].firstChild?.tagName);
        // console.log('4', saved[0].parentElement.nextSibling?.tagName);
        // console.log('5', saved[0].parentElement.nextSibling?.firstChild?.tagName);

        if (e.key === 'Delete' && saved[0].tagName === 'FIGURE' && saved[0].firstChild && saved[0].firstChild.tagName === 'IMG') {
          saved[0].parentElement.remove();
        } else if (e.key === 'Delete' && saved[0].nodeName === '#text' && ((_saved$0$parentElemen7 = saved[0].parentElement.nextSibling) === null || _saved$0$parentElemen7 === void 0 ? void 0 : _saved$0$parentElemen7.tagName) === 'DIV' && ((_saved$0$parentElemen8 = saved[0].parentElement.nextSibling) === null || _saved$0$parentElemen8 === void 0 ? void 0 : (_saved$0$parentElemen9 = _saved$0$parentElemen8.firstChild) === null || _saved$0$parentElemen9 === void 0 ? void 0 : _saved$0$parentElemen9.tagName) === 'FIGURE') {
          saved[0].parentElement.nextSibling.remove();
        }
      }

      if (saved[0].tagName === 'LI' && saved[1] === 0 && e.key === 'Enter') {
        e.preventDefault();

        if (saved[0].parentElement.parentElement.nextSibling) {
          if (saved[0].parentElement.parentElement.nextSibling.innerHTML !== '<br>') {
            document.execCommand("insertHTML", false, '<div><br></div>');
          }

          saved = [saved[0].parentElement.parentElement.nextSibling, 0];
          restorePosition();
        } else {
          var div = document.createElement("div");
          div.innerHTML = '<br>';
          editor.appendChild(div);
          saved = [saved[0].parentElement.parentElement.nextSibling, 0];
          restorePosition();
        }

        saved[0].previousSibling.firstChild.lastChild.remove(); //remove empty li
      }

      if (saved[0].tagName === 'DIV' && ((_saved$0$firstChild2 = saved[0].firstChild) === null || _saved$0$firstChild2 === void 0 ? void 0 : _saved$0$firstChild2.tagName) === 'FIGURE' && e.key !== 'Backspace' && e.key !== 'Delete') {
        e.preventDefault();

        if (saved[0].nextSibling) {
          saved = [saved[0].nextSibling, 0];
          restorePosition();

          if (saved[0].innerHTML !== '<br>') {
            document.execCommand("insertHTML", false, '<div><br></div>');
          }
        } else {
          var _div = document.createElement("div");

          _div.innerHTML = '<br>';
          editor.appendChild(_div);
          saved = [saved[0].nextSibling, 0];
          restorePosition();
        }
      } else if (saved[0].parentElement.tagName === 'FIGCAPTION' && e.key === 'Enter') {
        e.preventDefault();

        if (saved[0].parentElement.parentElement.parentElement.nextSibling) {
          saved = [saved[0].parentElement.parentElement.parentElement.nextSibling, 0];
          restorePosition();

          if (saved[0].innerHTML !== '<br>') {
            document.execCommand("insertHTML", false, '<div><br></div>');
          }
        } else {
          var _div2 = document.createElement("div");

          _div2.innerHTML = '<br>';
          editor.appendChild(_div2);
          saved = [saved[0].parentElement.parentElement.parentElement.nextSibling, 0];
          restorePosition();
        }
      } else if (saved[0].tagName === 'FIGURE' && e.key !== 'Backspace' && e.key !== 'Delete') {
        // if(e.key === 'Enter'){
        e.preventDefault();

        if (saved[0].parentElement.nextSibling) {
          saved = [saved[0].parentElement.nextSibling, 0];
          restorePosition();

          if (saved[0].innerHTML !== '<br>') {
            document.execCommand("insertHTML", false, '<div><br></div>');
          }
        } else {
          var _div3 = document.createElement("div");

          _div3.innerHTML = '<br>';
          editor.appendChild(_div3);
          saved = [saved[0].parentElement.nextSibling, 0];
          restorePosition();
        } // }

      }
    });
    document.querySelector('#editor').addEventListener('keyup', function (e) {
      // console.log(e.key);
      var editor = document.querySelector('#editor');
      this.optionsFlag === 0 ? this.optionsToggle(true) : document.getElementById('add_content').classList.add('d-none');

      if (e.key === 'Backspace') {
        // console.log('1', saved[0].nodeName); //#text ==== figure
        // console.log('2', saved[0].firstChild);      //    img
        // console.log('3', saved[0].firstChild?.tagName);
        // console.log('4', saved[0].parentElement.nextSibling?.tagName);
        // console.log('5', saved[0].parentElement.nextSibling?.firstChild?.tagName);
        if (saved[0].tagName === 'FIGURE' && saved[0].firstChild && saved[0].firstChild.tagName !== 'IMG') {
          if (saved[0].parentElement.getAttribute('id') === 'editor') {
            saved[0].remove();
          } else {
            saved[0].parentElement.remove();
          }
        }

        if (editor.innerHTML === '<br>') {
          editor.firstChild.remove();
        }

        if (editor.childNodes.length === 0 || editor.innerHTML === '<br>') {
          var div = document.createElement('div');
          div.innerHTML = '<br>';
          document.querySelector('#editor').appendChild(div);
          document.getElementById('add_content').classList.remove('d-none'); //***

          document.getElementById('add_content').style.top = 'calc( ' + editor.firstChild.getBoundingClientRect().top.toString() + 'px + ' + document.querySelector('.page_content').scrollTop.toString() + 'px - 220px)';
        }
      }

      var o = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.toArray)(document.querySelector('#editor').children);

      for (var i = 0; i < o.length; i++) {
        if (o[i].tagName === 'DIV' && o[i].firstChild.tagName === 'FIGURE' && o[i].firstChild.innerHTML === '<br>') {
          o[i].innerHTML = '<br>';
        }

        if (o[i].tagName === 'DIV' && o[i].innerHTML === '<br>') {
          o[i].addEventListener('click', function (event) {
            document.getElementById('add_content').classList.remove('d-none');
            document.getElementById('add_content').style.top = 'calc( ' + event.clientY.toString() + 'px + ' + document.querySelector('.page_content').scrollTop.toString() + 'px - 220px)';
          });
        } else {
          o[i].addEventListener('click', function () {
            document.getElementById('add_content').classList.add('d-none');
          });
        }
      }

      if (e.key === 'Enter') {
        document.getElementById('add_content').classList.remove('d-none');
        document.getElementById('add_content').style.top = 'calc( ' + saved[0].getBoundingClientRect().top.toString() + 'px + ' + document.querySelector('.page_content').scrollTop.toString() + 'px - 220px)';
      }
    });
    var txt = '';

    if (this.mode === 'edit') {
      // console.log(this.content)
      document.getElementById('b_content').innerHTML = this.content;
    } else {
      document.getElementById('b_content').innerHTML = '<br>';
    }

    var children = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.toArray)(document.getElementById('b_content').children);

    for (var i = 0; i < children.length; i++) {
      switch (children[i].tagName) {
        case 'P':
          {
            // if (children[i].innerHTML === '<br>'){
            //     txt += '<br>';
            // }else{
            txt += '<div>' + children[i].innerHTML + '</div>'; // }

            break;
          }

        case 'H2':
          {
            txt += '<div><h2>' + children[i].innerHTML + '</h2></div>';
            break;
          }

        case 'FIGURE':
          {
            txt += '<div><figure>' + children[i].innerHTML + '</figure></div>';
            break;
          }

        case 'IMG':
          {
            txt += '<div><figure><img src="' + children[i].getAttribute('src') + '" alt="' + children[i].getAttribute('alt') + '"/><figcaption></figcaption></figure></div>';
            break;
          }

        case 'BR':
          {
            txt += '<div><br></div>';
            break;
          }

        case 'UL':
          {
            txt += '<div><ul>' + children[i].innerHTML + '</ul></div>';
            break;
          }

        default:
          {
            break;
          }
      }
    }

    document.getElementById('editor').innerHTML = txt;
    console.log(txt);
    this.isFirstInput = false;
    var o = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.toArray)(document.querySelector('#editor').children);

    for (var _i = 0; _i < o.length; _i++) {
      if (o[_i].tagName === 'Div' && o[_i].innerHTML === '<br>') {
        o[_i].addEventListener('click', function (event) {
          document.getElementById('add_content').classList.remove('d-none');
          document.getElementById('add_content').style.top = 'calc( ' + event.clientY.toString() + 'px + ' + document.querySelector('.page_content').scrollTop.toString() + 'px - 220px)';
        });
      } else {
        document.getElementById('add_content').classList.add('d-none');
      }
    }

    this.listenImgs();
  },
  methods: {
    makeImageArrays: function makeImageArrays() {
      // document.getElementById('confirm_Image').addEventListener('click', () => {
      //     if (document.getElementById('Image_inner_code').value !== '') {
      //         this.image_codes.push(document.getElementById('Image_inner_code').value);
      //         this.image_names.push(document.getElementById('Image_inner_name').value);
      // this.updatePreview();
      //         // Editor.methods.updatePreview();
      //         // localStorage.setItem('draft_new_img_codes', JSON.stringify(this.image_codes));
      //         // localStorage.setItem('draft_new_img_names', JSON.stringify(this.image_names));
      //         // console.log(localStorage);
      //         // console.log('11',JSON.stringify(this.image_codes));
      //         // console.log('22',JSON.parse(JSON.stringify(this.image_codes)));
      //
      //     }
      //     //   console.log(this.image_codes, this.image_names);
      //     document.getElementById('btn_clear_image_inner').click();
      //     document.getElementById('Image_inner_caption').value = '';
      // });
      // //    console.log('made');
      // this.enableClick = false;
      // this.$emit('arrays', [this.image_names, this.image_codes])
      //
      // .then(()=>{
      this.updatePreview(); // })
    },
    listenImgs: function listenImgs() {
      var images = document.querySelectorAll('#editor > div > figure > img');
      images.forEach(function (image) {
        document.querySelectorAll('figure').forEach(function (fig) {
          fig.removeAttribute('id');
        });

        if (image.parentElement.tagName === 'FIGURE') {
          image.parentElement.removeAttribute('id');
        }

        image.setAttribute('data-bs-toggle', 'modal');
        image.setAttribute('data-bs-target', '#imgModalDetails');
        image.addEventListener('click', function () {
          image.parentElement.setAttribute('id', 'editingImg');
          var src = image.getAttribute('src');
          var alt = image.getAttribute('alt');
          var caption = '';

          if (image.nextSibling && image.nextSibling.tagName === 'FIGCAPTION') {
            caption = image.nextSibling.innerHTML;
          }

          var maxWidth = image.style.maxWidth.toString().replace('px', '');
          document.querySelector('#img_edit_preview').setAttribute('src', src);
          document.querySelector('#img_edit_src').value = src;
          document.querySelector('#img_edit_alt').value = alt || '';
          document.querySelector('#img_edit_max_width').value = maxWidth || '';
          document.querySelector('#img_edit_caption').value = caption || '';
        });
      });
    },
    editImage: function editImage() {
      document.getElementById('editingImg').innerHTML = '';
      var src = document.querySelector('#img_edit_src').value;
      var newAlt = document.querySelector('#img_edit_alt').value ? 'alt="' + document.querySelector('#img_edit_alt').value + '"' : '';
      var newStyle = parseInt(document.querySelector('#img_edit_max_width').value) > 0 ? 'style="max-width:' + document.querySelector('#img_edit_max_width').value + 'px"' : '';
      document.getElementById('editingImg').innerHTML = '<img alt="" src="' + src + '" ' + newStyle + ' ' + newAlt + '>' + '<figcaption>' + document.querySelector('#img_edit_caption').value + '</figcaption>';
      document.querySelectorAll('figure').forEach(function (fig) {
        fig.removeAttribute('id');
      });
      this.listenImgs();
    },
    updatePreview: function updatePreview() {
      //   console.log(document.getElementById('editor').childNodes);
      var txt = document.getElementById('editor').innerHTML;
      document.querySelectorAll('#editor > div > span').forEach(function (span) {
        span.removeAttribute('style');
      });
      document.querySelectorAll('#editor > h2 > span').forEach(function (span) {
        span.removeAttribute('style');
      });
      document.querySelectorAll('#editor > p > span').forEach(function (span) {
        span.removeAttribute('style');
      });
      document.querySelectorAll('#editor > span > span').forEach(function (span) {
        span.removeAttribute('style');
      });
      document.querySelectorAll('#editor > span').forEach(function (span) {
        span.removeAttribute('style');
      });
      var children = document.getElementById('editor').childNodes; //

      var text = '';

      for (var i = 0; i < children.length; i++) {
        if (children[i].nodeName === '#text') {
          text += '<p>' + children[i].nodeValue + '</p>';
        } else if (children[i].tagName === 'DIV' && children[i].firstChild) {
          var tag = children[i].firstChild.tagName;

          if (tag === 'BR') {
            text += children[i].innerHTML;
          } else if (children[i].firstChild.tagName === 'FIGURE') {
            for (var z = 0; z < children[i].children.length; z++) {
              var _children$i$children$, _children$i$children$2;

              if (((_children$i$children$ = children[i].children[z].childNodes) === null || _children$i$children$ === void 0 ? void 0 : _children$i$children$.length) === 1 && children[i].children[z].childNodes[0].nodeName === '#text') {
                text += '<p>' + children[i].children[z].innerHTML + '</p>';
              } else if (((_children$i$children$2 = children[i].children[z].children) === null || _children$i$children$2 === void 0 ? void 0 : _children$i$children$2.length) === 2 && children[i].children[z].firstChild.tagName === 'IMG' && children[i].children[z].lastChild.tagName === 'FIGCAPTION') {
                text += children[i].innerHTML;
              } else {
                var t = children[i].children[z].childNodes;

                for (var j = 0; j < t.length; j++) {
                  if (t[j].nodeName === '#text') {
                    text += '<p>' + t[j].nodeValue + '</p>';
                  } else {
                    switch (t[j].tagName) {
                      case 'IMG':
                        {
                          if (t[j].nextSibling && t[j].nextSibling.tagName === 'FIGCAPTION') {
                            text += '<figure><img src="' + t[j].getAttribute('src') + '" alt="' + t[j].getAttribute('alt') + '"/>' + '<figcaption>' + t[j].nextSibling.innerHTML + '</figcaption></figure>';
                          } else {
                            text += '<figure><img src="' + t[j].getAttribute('src') + '" alt="' + t[j].getAttribute('alt') + '"/>' + '<figcaption></figcaption></figure>';
                          }

                          break;
                        }

                      case 'FIGCAPTION':
                        {
                          if (t[j].previousSibling && t[j].previousSibling.tagName === 'IMG') {
                            break;
                          } else {
                            text += '<p>' + t[j].innerHTML + '</p>';
                          }

                          break;
                        }

                      case 'SPAN':
                        {
                          if (t[j].innerHTML === '<br>') {
                            text += '<br>';
                          } else {
                            text += '<p>' + t[j].innerHTML + '</p>';
                          }

                          break;
                        }

                      default:
                        {
                          break;
                        }
                    }
                  }
                }
              }
            }
          } else if (tag === 'H2') {
            text += '<h2>' + children[i].firstChild.innerHTML + '</h2>';
          } else if (tag === 'UL') {
            text += '<ul>' + children[i].firstChild.innerHTML + '</ul>';
          } else if (tag === 'IMG') {
            txt += '<figure><img src="' + children[i].getAttribute('src') + '" alt="' + children[i].getAttribute('alt') + '"/><figcaption></figcaption></figure>';
          } else if (tag === 'SPAN') {
            text += '<p>' + children[i].firstChild.innerHTML + '</p>';
          } else {
            text += '<p>' + children[i].innerHTML + '</p>';
          }
        } else if (children[i].tagName === 'H2') {
          text += '<h2>' + children[i].innerHTML + '</h2>';
        } else if (children[i].tagName === 'B') {
          text += '<b>' + children[i].innerHTML + '</b>';
        } else if (children[i].tagName === 'I') {
          text += '<i>' + children[i].innerHTML + '</i>';
        } else if (children[i].tagName === 'A') {
          text += '<a href="' + children[i].getAttribute('href') + '">' + children[i].innerHTML + '</a>';
        } else if (children[i].tagName === 'SPAN') {
          text += '<p>' + children[i].firstChild.innerHTML + '</p>';
        } else if (children[i].tagName === 'IMG') {
          txt += '<figure><img src="' + children[i].getAttribute('src') + '" alt="' + children[i].getAttribute('alt') + '"/><figcaption></figcaption></figure>';
        }
      }

      document.getElementById('content_text_area').innerHTML = text;

      if (this.mode && this.mode === 'edit') {
        localStorage.setItem('draft_' + this.blog_id, text);
        console.log('draft', localStorage.getItem('draft_' + this.blog_id));
      } else if (this.mode && this.mode === 'new') {
        localStorage.setItem('draft_new', text);
        console.log('draft', localStorage.getItem('draft_new'));
      } //  console.log(text)

    },
    option: function option(type, arg) {
      switch (type) {
        case 'createLink':
          {
            document.execCommand(type, false, prompt('لینک را وارد کنید', 'http://'));
            break;
          }

        default:
          {
            document.execCommand(type, false, arg);
            break;
          }
      }

      this.closeOptions();
    },
    optionsToggle: function optionsToggle(hide) {
      var options = document.getElementsByClassName('content_btn');
      var add_btn = document.getElementById('add_content_btn');

      if (this.optionsFlag === 0) {
        add_btn.style = "transform: rotate(-45deg)";
        var right = 100; // for each extra btn, add 40 to this value

        for (var i = 0; i < options.length; i++) {
          options[i].style.opacity = 1;
          options[i].style.right = right + 'px';
          right -= 40;
        }

        this.optionsFlag++;
      } else {
        if (hide) {
          document.getElementById('add_content').classList.add('d-none');
          document.getElementById('Image_inner_caption').value = "";
          document.getElementById('Image_inner_alt').value = "";
          document.getElementById('Image_inner_max_width').value = "";
        }

        add_btn.style = "transform: rotate(0deg)";

        for (var _i2 = 0; _i2 < options.length; _i2++) {
          options[_i2].style.opacity = 0;
          options[_i2].style.right = 20 + 'px';
        }

        this.optionsFlag--; // setTimeout(()=>{
        //     document.getElementById('add_content').classList.add('d-none');
        // },450);
      }
    },
    watchTextAreas: function watchTextAreas() {
      this.blogTextElements = document.getElementsByTagName("textarea");

      for (var i = 0; i < this.blogTextElements.length; i++) {
        this.blogTextElements[i].setAttribute("style", "height:" + this.blogTextElements[i].scrollHeight + "px;overflow-y:hidden;");
        this.blogTextElements[i].addEventListener("input", changeHeight, false);
      }

      function changeHeight() {
        this.style.height = "auto";
        this.style.height = this.scrollHeight + "px";
      } // this.updatePreview();

    },
    deleteImage: function deleteImage(index) {
      this.components.splice(index, 1);
    },
    setContentAdderType: function setContentAdderType(type, index) {
      document.getElementById('add_content').setAttribute('data-before-type', type);

      if (index !== 'index') {
        document.getElementById('add_content').setAttribute('data-before-index', index);
      }
    },
    closeOptions: function closeOptions() {
      document.querySelector('#editor_options').classList.add('d-none');
    },
    fixFirstNode: function fixFirstNode() {
      var txt = document.getElementById('editor').innerText;
      document.getElementById('editor').innerHTML = '<div>' + txt + '</div>';
      this.isFirstInput = false;
    },
    openImageModal: function openImageModal() {
      this.optionsToggle(true); // document.getElementById('imageinner').value = '1';

      document.getElementById('btn_clear_image_inner').click();
    },
    closeModal: function closeModal() {
      document.removeEventListener('click', _ImageCropper2__WEBPACK_IMPORTED_MODULE_0__["default"].methods.handleImageCropped); //*

      console.log('removed');
      document.getElementById('btn_clear_image_inner').click();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/components/ImageCropper2.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/components/ImageCropper2.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _public_bootstrap_icons_1_8_3_font_index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../public/bootstrap-icons-1.8.3/font/index.html */ "./public/bootstrap-icons-1.8.3/font/index.html");
/* harmony import */ var _public_bootstrap_icons_1_8_3_font_index_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_bootstrap_icons_1_8_3_font_index_html__WEBPACK_IMPORTED_MODULE_2__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// import Cropper from 'cropperjs';


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ImageCropper2',
  components: {
    Index: (_public_bootstrap_icons_1_8_3_font_index_html__WEBPACK_IMPORTED_MODULE_2___default())
  },
  events: ['imageCropped'],
  // props: {name: String, isRequired: Boolean, hasCaption: Boolean, src: String, caption: String, aspect: Number},
  props: ['name', 'isRequired', 'hasCaption', 'aspect', 'src'],
  setup: function setup(_props, _ref) {
    var emit = _ref.emit;
    var imageInput = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
    var selectedFile = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
    var imageSrc = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
    var image = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
    var destination = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
    var cropper = null;
    var fileReader = new FileReader();

    fileReader.onload = function (event) {
      imageSrc.value = event.target.result;
    };

    var handleImageCropped = function handleImageCropped() {
      if (imageSrc.value) {
        var _cropper$getCroppedCa;

        // cropper.getCroppedCanvas().toDataURL((blob) => {
        //     // console.log('blob', blob);
        //     emit('imageCropped', blob);
        // }, 'image/jpeg');
        destination.value = (_cropper$getCroppedCa = cropper.getCroppedCanvas({
          fillColor: '#fff'
        })) === null || _cropper$getCroppedCa === void 0 ? void 0 : _cropper$getCroppedCa.toDataURL('image/jpeg');
        document.getElementById("preview_" + _props.name).setAttribute('src', destination.value);
        document.getElementById('Image_' + _props.name + '_code').setAttribute('value', destination.value); // document.getElementById('Image_'+ _props.name +'_code').innerText = destination.value;
      }
    };

    var check1 = function check1() {
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

    var fileChanged = function fileChanged(e) {
      document.removeEventListener('click', handleImageCropped);
      var files = e.target.files || e.dataTransfer.files;

      if (files.length) {
        selectedFile.value = files[0];
      } //console.log('file size:', files[0].size+' bytes');


      if (files[0]) {
        var reader = new FileReader();

        reader.onload = function (files) {
          var img = new Image();

          img.onload = function () {
            // console.log("The width of the image is " + img.width + "px.");
            if (img.width < 400) {
              selectedFile.value = null;
              document.getElementById("preview_" + _props.name).setAttribute('src', "");
              document.getElementById('Image_' + _props.name + '_code').setAttribute('value', "");
              destination.value = null; // document.getElementById('imageHelp').innerHTML = 'عرض تصویر باید بیش از 400 پیکسل باشد';

              alert('عرض تصویر باید بیش از 400 پیکسل باشد');
            }
          };

          img.src = reader.result;
        };

        reader.readAsDataURL(files[0]);
      }

      check1();
    };

    var clearFile = function clearFile() {
      selectedFile.value = null;
      document.getElementById("image" + _props.name).value = null;
      document.getElementById("preview_" + _props.name).setAttribute('src', "");
      document.getElementById('Image_' + _props.name + '_code').setAttribute('value', "");

      if (_props.name === 'inner') {
        document.getElementById('Image_' + _props.name + '_alt').value = "";
        document.getElementById('Image_' + _props.name + '_max_width').value = "";
      }

      destination.value = null; // thumb.value = null; // imageSrc.value = null;
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_1__.onMounted)(function () {
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
        scalable: false,
        aspectRatio: _props.aspect
      });
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_1__.onUnmounted)(function () {
      cropper.destroy();
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_1__.watchEffect)(function () {
      if (selectedFile.value) {
        fileReader.readAsDataURL(selectedFile.value);
      } else {
        imageSrc.value = null; // destination.value = null;
        // thumb.value = null;
      }
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_1__.watch)(imageSrc, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!imageSrc.value) {
                _context.next = 5;
                break;
              }

              _context.next = 3;
              return cropper.replace(imageSrc.value);

            case 3:
              _context.next = 5;
              return setTimeout(function () {
                handleImageCropped();
              }, 200);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })), {
      flush: 'post' //watch runs after component updates

    });
    return {
      imageInput: imageInput,
      selectedFile: selectedFile,
      imageSrc: imageSrc,
      image: image,
      fileChanged: fileChanged,
      clearFile: clearFile,
      handleImageCropped: handleImageCropped,
      check1: check1
    };
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/components/Loader-sm.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/components/Loader-sm.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Loader"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/panel/foodSlide/FoodSlideCreate.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/panel/foodSlide/FoodSlideCreate.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ImageCropper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ImageCropper */ "./resources/js/components/components/ImageCropper.vue");
/* harmony import */ var _components_BtnSubmit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/BtnSubmit */ "./resources/js/components/components/BtnSubmit.vue");
/* harmony import */ var _components_Editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Editor */ "./resources/js/components/components/Editor.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Editor: _components_Editor__WEBPACK_IMPORTED_MODULE_3__["default"],
    ImageCropper: _components_ImageCropper__WEBPACK_IMPORTED_MODULE_1__["default"],
    BtnSubmit: _components_BtnSubmit__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      id: '',
      blog: [],
      categories: [],
      productCategories: [],
      products: [],
      errors: [],
      imgRequired: true,
      hasCaption: false,
      aspect: 20 / 13,
      isPng: true,
      articles: [] // tags: [{"label": "", "uri": ""}],

    };
  },
  mounted: function mounted() {
    this.loadCategories();
  },
  methods: {
    loadCategories: function loadCategories() {
      var _this = this;

      axios.get('/api/panel/category/foodSlide?page=1&perPage=100000').then(function (response) {
        _this.categories = response.data.data;
      })["catch"]();
      axios.get('/api/panel/article?page=1&perPage=100000').then(function (response) {
        _this.articles = response.data.data;
      })["catch"]();
    },
    createInfo: function createInfo() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var emptyFieldsCount, req;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this2.errors = [];
                emptyFieldsCount = 0;
                req = document.querySelectorAll('[required]');
                req.forEach(function (element) {
                  if (element.value === "") {
                    element.classList.add('hasError');
                    element.nextSibling.innerHTML = "فیلد اجباری";
                    emptyFieldsCount++;
                  } else {
                    element.classList.remove('hasError');
                    element.nextSibling.innerHTML = "";
                  }
                });

                if (!(emptyFieldsCount === 0)) {
                  _context4.next = 7;
                  break;
                }

                _context4.next = 7;
                return axios.post('/api/panel/foodSlide', {
                  // image: document.getElementById('Image__code').value,
                  article_id: document.getElementById('article_id').value
                }).then(function (response) {
                  console.log(response.data);

                  if (response.status === 201 || response.status === 200) {
                    setTimeout(function () {
                      _this2.$router.push({
                        path: '/panel/food/slides'
                      });
                    }, 1000);
                  }
                })["catch"](function (error) {
                  if (error.status === 422) {
                    var errorList = Array(error.response.data);

                    for (var i = 0; i < errorList.length; i++) {
                      _this2.errors = errorList[i];
                    }

                    console.log(_this2.errors.toString());
                  } else if (error.status === 500) {
                    if (error.response.data.message.includes("SQLSTATE")) {
                      var showAlertSql = /*#__PURE__*/function () {
                        var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
                          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  setTimeout(function () {
                                    alert(error.data.message);
                                  }, 200);

                                case 1:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee);
                        }));

                        return function showAlertSql() {
                          return _ref.apply(this, arguments);
                        };
                      }();

                      console.error('خطای پایگاه داده');
                      showAlertSql();
                    } else {
                      var showAlert500 = /*#__PURE__*/function () {
                        var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
                          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  setTimeout(function () {
                                    alert(error.message + ' ' + error.response.data.message);
                                  }, 200);

                                case 1:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2);
                        }));

                        return function showAlert500() {
                          return _ref2.apply(this, arguments);
                        };
                      }();

                      showAlert500();
                    }
                  } else {
                    var showAlert = /*#__PURE__*/function () {
                      var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                setTimeout(function () {
                                  alert(error.message);
                                }, 200);

                              case 1:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3);
                      }));

                      return function showAlert() {
                        return _ref3.apply(this, arguments);
                      };
                    }();

                    showAlert();
                  }
                });

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    watchTextAreas: function watchTextAreas() {
      var txt = document.querySelector("#text");
      txt.setAttribute("style", "height:" + (txt.scrollHeight + 20) + "px;overflow-y:hidden;");
      txt.addEventListener("input", changeHeight, false);

      function changeHeight() {
        this.style.height = "auto";
        this.style.height = this.scrollHeight + "px";
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/components/BtnSubmit.vue?vue&type=template&id=62b67106":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/components/BtnSubmit.vue?vue&type=template&id=62b67106 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "col-md-12 mb-3"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_loader_sm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("loader-sm");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    id: "submit",
    "class": "btn btn-primary d-flex justify-content-between",
    onClick: _cache[0] || (_cache[0] = function () {
      return $setup.submitForm && $setup.submitForm.apply($setup, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_loader_sm, {
    "class": "loader-sm d-none"
  })])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/components/Editor.vue?vue&type=template&id=9484be2a":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/components/Editor.vue?vue&type=template&id=9484be2a ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "p-2 border rounded px-5 mx-0 container form-control"
};
var _hoisted_2 = {
  id: "editor_options",
  "class": "text-center editor_options d-none"
};
var _hoisted_3 = {
  "class": "bg-dark rounded p-1 d-inline-block"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-x"
}, null, -1
/* HOISTED */
);

var _hoisted_5 = [_hoisted_4];

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-type-h2"
}, null, -1
/* HOISTED */
);

var _hoisted_7 = [_hoisted_6];

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-type-bold"
}, null, -1
/* HOISTED */
);

var _hoisted_9 = [_hoisted_8];

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-type-italic"
}, null, -1
/* HOISTED */
);

var _hoisted_11 = [_hoisted_10];

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-type-underline"
}, null, -1
/* HOISTED */
);

var _hoisted_13 = [_hoisted_12];

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-list-ul"
}, null, -1
/* HOISTED */
);

var _hoisted_15 = [_hoisted_14];

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-link"
}, null, -1
/* HOISTED */
);

var _hoisted_17 = [_hoisted_16];

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  "class": "bi bi-slash",
  viewBox: "0 0 16 16"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"
})], -1
/* HOISTED */
);

var _hoisted_19 = [_hoisted_18];

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "b_content",
  "class": "d-none"
}, null, -1
/* HOISTED */
);

var _hoisted_21 = {
  id: "add_content",
  "class": "d-none"
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-camera"
}, null, -1
/* HOISTED */
);

var _hoisted_23 = [_hoisted_22];

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-type-h2"
}, null, -1
/* HOISTED */
);

var _hoisted_25 = [_hoisted_24];

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-plus"
}, null, -1
/* HOISTED */
);

var _hoisted_27 = [_hoisted_26];

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
  "class": "form-control mt-3 text-left d-none",
  dir: "ltr",
  id: "content_text_area",
  "aria-describedby": "contentHelp",
  required: ""
}, null, -1
/* HOISTED */
);

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "contentHelp",
  "class": "form-text error"
}, null, -1
/* HOISTED */
);

var _hoisted_30 = {
  "class": "modal fade",
  id: "imgModal",
  "data-bs-backdrop": "static",
  tabindex: "-1",
  "aria-labelledby": "imgModalLabel"
};
var _hoisted_31 = {
  "class": "modal-dialog modal-lg"
};
var _hoisted_32 = {
  "class": "modal-content"
};
var _hoisted_33 = {
  "class": "modal-header border-0"
};
var _hoisted_34 = {
  "class": "modal-body w-100"
};
var _hoisted_35 = {
  "class": "modal-footer border-0"
};
var _hoisted_36 = {
  "class": "modal fade",
  id: "imgModalDetails",
  "data-bs-backdrop": "static",
  tabindex: "-1",
  "aria-labelledby": "imgModalDetailsLabel"
};
var _hoisted_37 = {
  "class": "modal-dialog modal-lg"
};
var _hoisted_38 = {
  "class": "modal-content"
};

var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"modal-header border-0\"><button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button><h5 class=\"modal-title text-right\" id=\"imgModalDetailsLabel\">ویرایش جزییات تصویر</h5></div><div class=\"modal-body w-100\"><div class=\"mx-auto mb-3\"><img id=\"img_edit_preview\" src=\"\" width=\"300px\" alt=\"\"></div><input id=\"img_edit_src\" type=\"hidden\"><div class=\"row\"><div class=\"col-md-12\"><label for=\"img_edit_caption\">کپشن</label><input id=\"img_edit_caption\" type=\"text\" class=\"form-control mb-2\"></div><div class=\"col-md-6\"><label for=\"img_edit_alt\">alt</label><input id=\"img_edit_alt\" type=\"text\" class=\"form-control mb-2\"></div><div class=\"col-md-6\"><label for=\"img_edit_max_width\">حد اکثر عرض</label><input id=\"img_edit_max_width\" type=\"text\" class=\"form-control mb-2\"></div></div></div>", 2);

var _hoisted_41 = {
  "class": "modal-footer border-0"
};

var _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "hidden",
  id: "deleteId"
}, null, -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_image_cropper_2 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("image-cropper-2");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    id: "btnClose",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.closeOptions && $options.closeOptions.apply($options, arguments);
    }),
    "class": "btn btn-dark mx-1",
    title: "close"
  }, _hoisted_5), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    id: "btnH2",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.option('formatBlock', 'H2');
    }),
    "class": "btn btn-dark mx-1",
    title: "heading"
  }, _hoisted_7), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    id: "btnBold",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $options.option('bold', null);
    }),
    "class": "btn btn-dark mx-1",
    title: "bold"
  }, _hoisted_9), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    id: "btnItalic",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $options.option('italic', null);
    }),
    "class": "btn btn-dark mx-1",
    title: "italic"
  }, _hoisted_11), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    id: "btnUnderline",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $options.option('underLine', null);
    }),
    "class": "btn btn-dark mx-1",
    title: "underline"
  }, _hoisted_13), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    id: "btnList",
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $options.option('insertUnorderedList', null);
    }),
    "class": "btn btn-dark mx-1",
    title: "list"
  }, _hoisted_15), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    id: "btnLink",
    onClick: _cache[6] || (_cache[6] = function ($event) {
      return $options.option('createLink', null);
    }),
    "class": "btn btn-dark mx-1",
    title: "link"
  }, _hoisted_17), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    id: "btnUnLink",
    onClick: _cache[7] || (_cache[7] = function ($event) {
      return $options.option('unlink', null);
    }),
    "class": "btn btn-dark mx-1",
    title: "unlink"
  }, _hoisted_19)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onKeyup: _cache[8] || (_cache[8] = function () {
      return $options.updatePreview && $options.updatePreview.apply($options, arguments);
    }),
    onClick: _cache[9] || (_cache[9] = function (e) {
      return $data.optionsFlag && $options.optionsToggle(false);
    }),
    id: "editor",
    onInput: _cache[10] || (_cache[10] = function (e) {
      return $data.isFirstInput && $options.fixFirstNode();
    }),
    onMousedown: _cache[11] || (_cache[11] = function () {
      return $options.closeOptions && $options.closeOptions.apply($options, arguments);
    }),
    contenteditable: "true",
    spellcheck: "false",
    "class": "mb-2 text_element w-100",
    style: {
      "min-height": "50px"
    }
  }, null, 32
  /* HYDRATE_EVENTS */
  )]), _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("            <span  data-bs-toggle = \"tooltip\" data-bs-placement = \"bottom\" title = \"بــنـر\" class = \"content_btn m-2 bg-dark text-light\">"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                <i class = \" bi bi-card-heading \"></i>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("            </span>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    onClick: _cache[12] || (_cache[12] = function () {
      return $options.openImageModal && $options.openImageModal.apply($options, arguments);
    }),
    "data-bs-toggle": "modal",
    "data-bs-target": "#imgModal",
    title: "تصویر",
    "class": "content_btn m-2 bg-dark text-light"
  }, _hoisted_23), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    onClick: _cache[13] || (_cache[13] = function ($event) {
      return $options.optionsToggle(true);
    }),
    title: "تیتر",
    id: "add_heading_btn",
    "class": "content_btn m-2 bg-dark text-light"
  }, _hoisted_25), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    onClick: _cache[14] || (_cache[14] = function ($event) {
      return $options.optionsToggle(false);
    }),
    title: "افزودن آیتم",
    id: "add_content_btn",
    "class": "m-2 bg-dark text-light"
  }, _hoisted_27)])]), _hoisted_28, _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modal "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                    <h5 class=\"mupdaodal-title\" id=\"imgModalLabel\">Modal title</h5>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn-close",
    "data-bs-dismiss": "modal",
    onClick: _cache[15] || (_cache[15] = function () {
      return $options.closeModal && $options.closeModal.apply($options, arguments);
    }),
    "aria-label": "Close"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_image_cropper_2, {
    name: 'inner',
    hasCaption: $data.hasCaption,
    isRequired: $data.isRequired,
    aspect: $data.aspect
  }, null, 8
  /* PROPS */
  , ["hasCaption", "isRequired", "aspect"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    id: "confirm_Image",
    onClick: _cache[16] || (_cache[16] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.makeImageArrays && $options.makeImageArrays.apply($options, arguments);
    }, ["prevent"])),
    "class": "confirm_Image btn btn-dark",
    "data-bs-dismiss": "modal"
  }, " تایید "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-secondary",
    onClick: _cache[17] || (_cache[17] = function () {
      return $options.closeModal && $options.closeModal.apply($options, arguments);
    }),
    "data-bs-dismiss": "modal"
  }, " انصراف ")])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [_hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [_hoisted_42, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[18] || (_cache[18] = function () {
      return $options.editImage && $options.editImage.apply($options, arguments);
    }),
    id: "confirm_Image_Detail",
    type: "button",
    "class": "confirm_Image btn btn-dark",
    "data-bs-dismiss": "modal"
  }, " تایید "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    onClick: _cache[19] || (_cache[19] = function () {
      return $options.closeModal && $options.closeModal.apply($options, arguments);
    }),
    "class": "btn btn-secondary",
    "data-bs-dismiss": "modal"
  }, " انصراف ")])])])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/components/ImageCropper2.vue?vue&type=template&id=2699f032":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/components/ImageCropper2.vue?vue&type=template&id=2699f032 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["id"];
var _hoisted_2 = {
  key: 0,
  "class": "p-1 text-center m-2",
  style: {
    "max-width": "265px",
    "min-height": "180px"
  }
};
var _hoisted_3 = ["id", "src"];
var _hoisted_4 = {
  "class": "cropper-wrapper justify-content-center d-flex border rounded p-1 text-center m-md-2",
  style: {
    "max-width": "369px",
    "min-height": "190px"
  }
};
var _hoisted_5 = {
  "class": "image-container"
};
var _hoisted_6 = ["src"];
var _hoisted_7 = {
  key: 1,
  "class": "d-inline-block image-preview_wrapper p-1 text-center m-2",
  style: {
    "max-width": "265px",
    "min-height": "180px"
  }
};
var _hoisted_8 = ["id"];
var _hoisted_9 = {
  key: 2,
  "class": "content_image image-preview_wrapper p-1 text-center m-2",
  style: {
    "max-width": "265px",
    "height": "180px"
  }
};
var _hoisted_10 = ["id"];
var _hoisted_11 = {
  "class": "align-bottom"
};
var _hoisted_12 = ["id"];

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-upload px-2 fw-bold"
}, null, -1
/* HOISTED */
);

var _hoisted_14 = [_hoisted_13];
var _hoisted_15 = ["id"];

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-eraser px-2 fw-bold",
  "data-bs-toggle": "tooltip",
  "data-bs-placement": "bottom",
  title: "پاک کن"
}, null, -1
/* HOISTED */
);

var _hoisted_17 = [_hoisted_16];
var _hoisted_18 = {
  key: 3
};
var _hoisted_19 = ["id"];
var _hoisted_20 = ["id"];
var _hoisted_21 = ["id", "name"];
var _hoisted_22 = ["id"];
var _hoisted_23 = ["id"];
var _hoisted_24 = ["id", "value"];
var _hoisted_25 = ["id", "value"];
var _hoisted_26 = ["id"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": "image-cropper row",
    id: 'image-cropper row' + $props.name,
    style: {
      "min-height": "200px"
    }
  }, [$props.src ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    id: 'former_image_' + $props.name,
    src: $props.src,
    style: {
      "width": "100%",
      "height": "auto"
    }
  }, null, 8
  /* PROPS */
  , _hoisted_3), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("            <p v-if = \"hasCaption\" class = \"align-bottom\"> {{ caption }} </p>")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("        @mousemove = \"handleImageCropped\""), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "img-fluid",
    ref: "image",
    src: $setup.imageSrc,
    alt: ""
  }, null, 8
  /* PROPS */
  , _hoisted_6)], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.selectedFile]])]), !$props.hasCaption ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    id: 'preview_' + $props.name,
    "class": "image-preview",
    style: {
      "width": "100%",
      "height": "auto"
    },
    alt: ""
  }, null, 8
  /* PROPS */
  , _hoisted_8)], 512
  /* NEED_PATCH */
  )), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.selectedFile]]) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("figure", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    id: 'preview_' + $props.name,
    "class": "image-preview img-fluid",
    alt: ""
  }, null, 8
  /* PROPS */
  , _hoisted_10), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.selectedFile]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("figcaption", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: 'Image_' + $props.name + '_caption',
    type: "text",
    "class": "form-control mt-2",
    placeholder: "کپشن را وارد کنید (اختیاری)"
  }, null, 8
  /* PROPS */
  , _hoisted_12)], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.selectedFile]])])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.imageInput.click();
    }),
    "class": "btn btn-primary btn-sm m-1 mb-3",
    "data-bs-toggle": "tooltip",
    "data-bs-placement": "bottom",
    title: "انتخاب عکس"
  }, _hoisted_14), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    id: 'btn_clear_image_' + $props.name,
    onClick: _cache[1] || (_cache[1] = function () {
      return $setup.clearFile && $setup.clearFile.apply($setup, arguments);
    }),
    "class": "btn btn-primary btn-sm m-1 mb-3"
  }, _hoisted_17, 8
  /* PROPS */
  , _hoisted_15), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.selectedFile]])]), $props.hasCaption ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    id: 'Image_' + $props.name + '_alt',
    "class": "form-control mb-2",
    style: {
      "width": "260px"
    },
    placeholder: " alt (اختیاری) "
  }, null, 8
  /* PROPS */
  , _hoisted_19), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    id: 'Image_' + $props.name + '_max_width',
    "class": "form-control mb-2",
    style: {
      "width": "260px"
    },
    placeholder: "حد اکثر عرض مجاز (اختیاری)"
  }, null, 8
  /* PROPS */
  , _hoisted_20)], 512
  /* NEED_PATCH */
  )), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.selectedFile]]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: 'image' + $props.name,
    ref: "imageInput",
    accept: ".jpg, .jpeg, .png",
    onChange: _cache[2] || (_cache[2] = function () {
      return $setup.fileChanged && $setup.fileChanged.apply($setup, arguments);
    }),
    type: "file",
    name: 'content_image_file' + $props.name,
    "class": "form-control d-none"
  }, null, 40
  /* PROPS, HYDRATE_EVENTS */
  , _hoisted_21), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: 'Image_' + $props.name + '_path',
    name: "content_image_path",
    value: "",
    type: "text",
    "class": "form-control image_path d-none"
  }, null, 8
  /* PROPS */
  , _hoisted_22), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: 'Image_' + $props.name + '_code',
    name: "content_image_code",
    type: "text",
    "class": "form-control image_code_64 d-none"
  }, null, 8
  /* PROPS */
  , _hoisted_23), $setup.selectedFile ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
    key: 4,
    id: 'Image_' + $props.name + '_name',
    name: "content_image_name",
    value: $setup.selectedFile.name,
    type: "text",
    "class": "file_name form-control d-none"
  }, null, 8
  /* PROPS */
  , _hoisted_24)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.isRequired ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
    key: 5,
    id: 'Image_' + $props.name,
    type: "text",
    value: $setup.selectedFile,
    "class": "form-control d-none",
    required: ""
  }, null, 8
  /* PROPS */
  , _hoisted_25)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.isRequired ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 6,
    id: 'imageHelp' + $props.name,
    "class": "form-text error"
  }, null, 8
  /* PROPS */
  , _hoisted_26)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8
  /* PROPS */
  , _hoisted_1);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/components/Loader-sm.vue?vue&type=template&id=478ac5c6&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/components/Loader-sm.vue?vue&type=template&id=478ac5c6&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-478ac5c6"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  id: "loader-sm"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"w-100 text-center mx-1\" data-v-478ac5c6><!--          &lt;img src=&quot;loader.svg&quot; id=&quot;spin&quot; width=&quot;40&quot; height=&quot;40&quot;/&gt;--><svg id=\"spin\" width=\"20\" height=\"22\" data-name=\"spin\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 299.36 299.87\" data-v-478ac5c6><path class=\"cls-1\" d=\"M-5.26-107c0-8.87,0-17.74,0-26.6,0-6.45,4.33-10.76,10.72-10.77s10.87,4.39,10.88,10.73q0,26.79,0,53.57c0,6.49-4.32,10.66-10.83,10.62-6.72,0-10.76-4-10.78-10.58,0-9,0-18,0-27Z\" transform=\"translate(144.05 144.33)\" data-v-478ac5c6></path><path class=\"cls-2\" d=\"M-106.92,16.76q-13.29,0-26.57,0C-140.1,16.73-144,12.7-144,6s4-10.76,10.59-10.78q26.76-.06,53.52,0c6.48,0,10.72,4.4,10.66,10.86-.06,6.66-4,10.67-10.69,10.69-9,0-18,0-26.95,0Z\" transform=\"translate(144.05 144.33)\" data-v-478ac5c6></path><path class=\"cls-3\" d=\"M-65.82-124.94c4.84-.14,7.74,1.53,9.67,4.77q13.9,23.43,27.71,46.92a10.23,10.23,0,0,1-3.32,14.06c-5.65,3.51-11.62,2.57-14.94-2.93-9.45-15.66-18.8-31.38-27.89-47.25A10.35,10.35,0,0,1-65.82-124.94Z\" transform=\"translate(144.05 144.33)\" data-v-478ac5c6></path><path class=\"cls-4\" d=\"M-57-38.87c0,9.07-8.62,14.08-16.24,9.54q-23.07-13.76-46-27.72a10.28,10.28,0,0,1-3.53-14.59c3.19-5.31,9.11-7,14.47-3.85Q-85.24-61.77-62.28-47.8C-58.89-45.75-56.58-42.95-57-38.87Z\" transform=\"translate(144.05 144.33)\" data-v-478ac5c6></path><path class=\"cls-5\" d=\"M-57.75,49.3a10.17,10.17,0,0,1-5.31,8.17C-78.6,66.4-94.15,75.33-109.77,84.13c-4.87,2.75-9.19,2.11-12.7-1.34A10.85,10.85,0,0,1-125,70.17a10.15,10.15,0,0,1,4.33-4.53c15.68-9,31.33-18,47.07-26.81C-66.5,34.85-57.66,40.4-57.75,49.3Z\" transform=\"translate(144.05 144.33)\" data-v-478ac5c6></path><path class=\"cls-6\" d=\"M-62.95,136.79c-9.81,0-14.26-8.08-9.38-16.63,6.18-10.81,12.48-21.56,18.7-32.34,2.49-4.32,4.83-8.71,7.38-13,3.35-5.62,9.25-7.17,14.77-4s7,9.18,3.71,14.88c-8.71,15.24-17.51,30.42-26.18,45.67C-56.06,135.06-58.8,137.32-62.95,136.79Z\" transform=\"translate(144.05 144.33)\" data-v-478ac5c6></path><path class=\"cls-7\" d=\"M76.15,136.11c-3.79.4-6.64-1.48-8.54-4.68Q53.66,108,39.9,84.43c-2.73-4.7-.85-11.32,3.53-13.78,6.21-3.48,11.53-2.34,15.1,3.55,5.1,8.41,10,16.94,15,25.43,4,6.76,8,13.51,11.92,20.3C90,127.75,85.25,136.13,76.15,136.11Z\" transform=\"translate(144.05 144.33)\" data-v-478ac5c6></path><path class=\"cls-8\" d=\"M16,118.92c0,9.24.1,18.47,0,27.7-.08,5.1-4.55,8.88-10.07,8.91-6.28,0-11-3.65-11.09-9.13q-.18-28.09,0-56.19C-5.14,84.44-.6,81,6.15,81a9.76,9.76,0,0,1,10,9.82c.09,4.74,0,9.48,0,14.23v13.84Z\" transform=\"translate(144.05 144.33)\" data-v-478ac5c6></path><path class=\"cls-9\" d=\"M68.87,50.44c-.08-4.75,1.73-8,5.52-9.92a10.26,10.26,0,0,1,10.62.6c15,9.16,30.07,18.15,45.11,27.21,5.33,3.21,7.24,9.26,4.46,14.11C131.42,88,125.72,90,120.2,86.8c-14-8.14-27.78-16.62-41.65-25-1.82-1.09-3.7-2.09-5.42-3.32C70.24,56.45,68.27,53.82,68.87,50.44Z\" transform=\"translate(144.05 144.33)\" data-v-478ac5c6></path><path class=\"cls-10\" d=\"M118.16-4.3h26.23c4.46,0,8.72,2.68,10.18,6.31a10.94,10.94,0,0,1-3.11,12.21c-.81.72-1.92,1.65-2.85,1.61-5-.22-9.86,1.8-14.85.47a5.38,5.38,0,0,0-2.22-.18c-7.64,1.3-15.3-.34-23,.37-5.71.52-11.59-.23-17.44.1-5.15.29-10.2-5.78-10.09-11s4.94-9.86,10.56-9.89C100.43-4.33,109.29-4.3,118.16-4.3Z\" transform=\"translate(144.05 144.33)\" data-v-478ac5c6></path><path class=\"cls-11\" d=\"M70.49-37.4c-.5-4.22,2.43-6.45,5.32-8.15,15-8.88,30.22-17.52,45.34-26.26a10.59,10.59,0,0,1,11.89.72,10.76,10.76,0,0,1,3.47,10.62c-.81,2.84-3,4.6-5.33,5.95-11.32,6.63-22.73,13.1-34.14,19.6-3.74,2.13-7.66,4-11.28,6.3s-7.14,2.74-10.54.69A9.48,9.48,0,0,1,70.49-37.4Z\" transform=\"translate(144.05 144.33)\" data-v-478ac5c6></path><path class=\"cls-12\" d=\"M74.5-124.3c3.58.25,7.12,1.15,8.66,4.66a10.62,10.62,0,0,1-.47,10.24C77.2-100,71.22-91,66.4-81.18c-3.16,6.43-7.23,12.42-11,18.55C53.08-58.82,48.18-58.24,43.2-61a8.38,8.38,0,0,1-3.11-11.34q6.55-11.91,13.36-23.69c4.78-8.28,9.73-16.46,14.52-24.74A6.45,6.45,0,0,1,74.5-124.3Z\" transform=\"translate(144.05 144.33)\" data-v-478ac5c6></path></svg></div>", 1);

var _hoisted_3 = [_hoisted_2];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, _hoisted_3);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/panel/foodSlide/FoodSlideCreate.vue?vue&type=template&id=449a7266":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/panel/foodSlide/FoodSlideCreate.vue?vue&type=template&id=449a7266 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "mb-5"
}, "ثبت دستور پخت جدید", -1
/* HOISTED */
);

var _hoisted_2 = {
  "class": "row mt-3"
};
var _hoisted_3 = {
  "class": "col-12 mb-3"
};
var _hoisted_4 = {
  "class": "card"
};
var _hoisted_5 = {
  "class": "card-body"
};
var _hoisted_6 = {
  "class": "row"
};
var _hoisted_7 = {
  "class": "col-md-4 col-xl-4 mb-3"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "article_id",
  "class": "form-label"
}, "دستور پخت", -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "form-select",
  id: "article_id",
  "aria-describedby": "article_idHelp",
  "aria-label": "article_id",
  required: ""
};
var _hoisted_10 = ["value"];

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "article_tag_idHelp",
  "class": "form-text error"
}, null, -1
/* HOISTED */
);

var _hoisted_12 = {
  "class": "row"
};
var _hoisted_13 = {
  "class": "col-md-12 mb-3"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" ثبت ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_BtnSubmit = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BtnSubmit");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "route",
    mode: "out-in",
    appear: ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
        id: "editForm",
        onClick: _cache[0] || (_cache[0] = function (e) {
          return _ctx.enableClick;
        })
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                <div class=\"row\">"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                  <div class=\"col-12 mb-3\">"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                    <label class=\"form-label\">تصویر</label><br/>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                    <image-cropper :isPng=\"isPng\" name=\"\" caption=\"\" :hasCaption=\"hasCaption\""), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                                   :isRequired=\"imgRequired\" :aspect=\"aspect\"/>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                    <div id=\"imageHelp\" class=\"form-text error\"></div>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                  </div>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                </div>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                                          "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.articles, function (article) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
          key: article.id,
          value: article.id
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(article.title), 9
        /* TEXT, PROPS */
        , _hoisted_10);
      }), 128
      /* KEYED_FRAGMENT */
      ))]), _hoisted_11])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_BtnSubmit, {
        onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($options.createInfo, ["prevent"])
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_14];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["onClick"])])])])])])])])])];
    }),
    _: 1
    /* STABLE */

  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./public/bootstrap-icons-1.8.3/font/bootstrap-icons.css":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./public/bootstrap-icons-1.8.3/font/bootstrap-icons.css ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fonts_bootstrap_icons_woff2_08efbba7c53d8c5413793eecb19b20bb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fonts/bootstrap-icons.woff2?08efbba7c53d8c5413793eecb19b20bb */ "./public/bootstrap-icons-1.8.3/font/fonts/bootstrap-icons.woff2?08efbba7c53d8c5413793eecb19b20bb");
/* harmony import */ var _fonts_bootstrap_icons_woff_08efbba7c53d8c5413793eecb19b20bb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fonts/bootstrap-icons.woff?08efbba7c53d8c5413793eecb19b20bb */ "./public/bootstrap-icons-1.8.3/font/fonts/bootstrap-icons.woff?08efbba7c53d8c5413793eecb19b20bb");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_bootstrap_icons_woff2_08efbba7c53d8c5413793eecb19b20bb__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_bootstrap_icons_woff_08efbba7c53d8c5413793eecb19b20bb__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"bootstrap-icons\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"),\nurl(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n}\n\n.bi::before,\n[class^=\"bi-\"]::before,\n[class*=\" bi-\"]::before {\n  display: inline-block;\n  font-display: block;\n  font-family: bootstrap-icons !important;\n  font-style: normal;\n  font-weight: normal !important;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  vertical-align: -.125em;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.bi-123::before { content: \"\\f67f\"; }\n.bi-alarm-fill::before { content: \"\\f101\"; }\n.bi-alarm::before { content: \"\\f102\"; }\n.bi-align-bottom::before { content: \"\\f103\"; }\n.bi-align-center::before { content: \"\\f104\"; }\n.bi-align-end::before { content: \"\\f105\"; }\n.bi-align-middle::before { content: \"\\f106\"; }\n.bi-align-start::before { content: \"\\f107\"; }\n.bi-align-top::before { content: \"\\f108\"; }\n.bi-alt::before { content: \"\\f109\"; }\n.bi-app-indicator::before { content: \"\\f10a\"; }\n.bi-app::before { content: \"\\f10b\"; }\n.bi-archive-fill::before { content: \"\\f10c\"; }\n.bi-archive::before { content: \"\\f10d\"; }\n.bi-arrow-90deg-down::before { content: \"\\f10e\"; }\n.bi-arrow-90deg-left::before { content: \"\\f10f\"; }\n.bi-arrow-90deg-right::before { content: \"\\f110\"; }\n.bi-arrow-90deg-up::before { content: \"\\f111\"; }\n.bi-arrow-bar-down::before { content: \"\\f112\"; }\n.bi-arrow-bar-left::before { content: \"\\f113\"; }\n.bi-arrow-bar-right::before { content: \"\\f114\"; }\n.bi-arrow-bar-up::before { content: \"\\f115\"; }\n.bi-arrow-clockwise::before { content: \"\\f116\"; }\n.bi-arrow-counterclockwise::before { content: \"\\f117\"; }\n.bi-arrow-down-circle-fill::before { content: \"\\f118\"; }\n.bi-arrow-down-circle::before { content: \"\\f119\"; }\n.bi-arrow-down-left-circle-fill::before { content: \"\\f11a\"; }\n.bi-arrow-down-left-circle::before { content: \"\\f11b\"; }\n.bi-arrow-down-left-square-fill::before { content: \"\\f11c\"; }\n.bi-arrow-down-left-square::before { content: \"\\f11d\"; }\n.bi-arrow-down-left::before { content: \"\\f11e\"; }\n.bi-arrow-down-right-circle-fill::before { content: \"\\f11f\"; }\n.bi-arrow-down-right-circle::before { content: \"\\f120\"; }\n.bi-arrow-down-right-square-fill::before { content: \"\\f121\"; }\n.bi-arrow-down-right-square::before { content: \"\\f122\"; }\n.bi-arrow-down-right::before { content: \"\\f123\"; }\n.bi-arrow-down-short::before { content: \"\\f124\"; }\n.bi-arrow-down-square-fill::before { content: \"\\f125\"; }\n.bi-arrow-down-square::before { content: \"\\f126\"; }\n.bi-arrow-down-up::before { content: \"\\f127\"; }\n.bi-arrow-down::before { content: \"\\f128\"; }\n.bi-arrow-left-circle-fill::before { content: \"\\f129\"; }\n.bi-arrow-left-circle::before { content: \"\\f12a\"; }\n.bi-arrow-left-right::before { content: \"\\f12b\"; }\n.bi-arrow-left-short::before { content: \"\\f12c\"; }\n.bi-arrow-left-square-fill::before { content: \"\\f12d\"; }\n.bi-arrow-left-square::before { content: \"\\f12e\"; }\n.bi-arrow-left::before { content: \"\\f12f\"; }\n.bi-arrow-repeat::before { content: \"\\f130\"; }\n.bi-arrow-return-left::before { content: \"\\f131\"; }\n.bi-arrow-return-right::before { content: \"\\f132\"; }\n.bi-arrow-right-circle-fill::before { content: \"\\f133\"; }\n.bi-arrow-right-circle::before { content: \"\\f134\"; }\n.bi-arrow-right-short::before { content: \"\\f135\"; }\n.bi-arrow-right-square-fill::before { content: \"\\f136\"; }\n.bi-arrow-right-square::before { content: \"\\f137\"; }\n.bi-arrow-right::before { content: \"\\f138\"; }\n.bi-arrow-up-circle-fill::before { content: \"\\f139\"; }\n.bi-arrow-up-circle::before { content: \"\\f13a\"; }\n.bi-arrow-up-left-circle-fill::before { content: \"\\f13b\"; }\n.bi-arrow-up-left-circle::before { content: \"\\f13c\"; }\n.bi-arrow-up-left-square-fill::before { content: \"\\f13d\"; }\n.bi-arrow-up-left-square::before { content: \"\\f13e\"; }\n.bi-arrow-up-left::before { content: \"\\f13f\"; }\n.bi-arrow-up-right-circle-fill::before { content: \"\\f140\"; }\n.bi-arrow-up-right-circle::before { content: \"\\f141\"; }\n.bi-arrow-up-right-square-fill::before { content: \"\\f142\"; }\n.bi-arrow-up-right-square::before { content: \"\\f143\"; }\n.bi-arrow-up-right::before { content: \"\\f144\"; }\n.bi-arrow-up-short::before { content: \"\\f145\"; }\n.bi-arrow-up-square-fill::before { content: \"\\f146\"; }\n.bi-arrow-up-square::before { content: \"\\f147\"; }\n.bi-arrow-up::before { content: \"\\f148\"; }\n.bi-arrows-angle-contract::before { content: \"\\f149\"; }\n.bi-arrows-angle-expand::before { content: \"\\f14a\"; }\n.bi-arrows-collapse::before { content: \"\\f14b\"; }\n.bi-arrows-expand::before { content: \"\\f14c\"; }\n.bi-arrows-fullscreen::before { content: \"\\f14d\"; }\n.bi-arrows-move::before { content: \"\\f14e\"; }\n.bi-aspect-ratio-fill::before { content: \"\\f14f\"; }\n.bi-aspect-ratio::before { content: \"\\f150\"; }\n.bi-asterisk::before { content: \"\\f151\"; }\n.bi-at::before { content: \"\\f152\"; }\n.bi-award-fill::before { content: \"\\f153\"; }\n.bi-award::before { content: \"\\f154\"; }\n.bi-back::before { content: \"\\f155\"; }\n.bi-backspace-fill::before { content: \"\\f156\"; }\n.bi-backspace-reverse-fill::before { content: \"\\f157\"; }\n.bi-backspace-reverse::before { content: \"\\f158\"; }\n.bi-backspace::before { content: \"\\f159\"; }\n.bi-badge-3d-fill::before { content: \"\\f15a\"; }\n.bi-badge-3d::before { content: \"\\f15b\"; }\n.bi-badge-4k-fill::before { content: \"\\f15c\"; }\n.bi-badge-4k::before { content: \"\\f15d\"; }\n.bi-badge-8k-fill::before { content: \"\\f15e\"; }\n.bi-badge-8k::before { content: \"\\f15f\"; }\n.bi-badge-ad-fill::before { content: \"\\f160\"; }\n.bi-badge-ad::before { content: \"\\f161\"; }\n.bi-badge-ar-fill::before { content: \"\\f162\"; }\n.bi-badge-ar::before { content: \"\\f163\"; }\n.bi-badge-cc-fill::before { content: \"\\f164\"; }\n.bi-badge-cc::before { content: \"\\f165\"; }\n.bi-badge-hd-fill::before { content: \"\\f166\"; }\n.bi-badge-hd::before { content: \"\\f167\"; }\n.bi-badge-tm-fill::before { content: \"\\f168\"; }\n.bi-badge-tm::before { content: \"\\f169\"; }\n.bi-badge-vo-fill::before { content: \"\\f16a\"; }\n.bi-badge-vo::before { content: \"\\f16b\"; }\n.bi-badge-vr-fill::before { content: \"\\f16c\"; }\n.bi-badge-vr::before { content: \"\\f16d\"; }\n.bi-badge-wc-fill::before { content: \"\\f16e\"; }\n.bi-badge-wc::before { content: \"\\f16f\"; }\n.bi-bag-check-fill::before { content: \"\\f170\"; }\n.bi-bag-check::before { content: \"\\f171\"; }\n.bi-bag-dash-fill::before { content: \"\\f172\"; }\n.bi-bag-dash::before { content: \"\\f173\"; }\n.bi-bag-fill::before { content: \"\\f174\"; }\n.bi-bag-plus-fill::before { content: \"\\f175\"; }\n.bi-bag-plus::before { content: \"\\f176\"; }\n.bi-bag-x-fill::before { content: \"\\f177\"; }\n.bi-bag-x::before { content: \"\\f178\"; }\n.bi-bag::before { content: \"\\f179\"; }\n.bi-bar-chart-fill::before { content: \"\\f17a\"; }\n.bi-bar-chart-line-fill::before { content: \"\\f17b\"; }\n.bi-bar-chart-line::before { content: \"\\f17c\"; }\n.bi-bar-chart-steps::before { content: \"\\f17d\"; }\n.bi-bar-chart::before { content: \"\\f17e\"; }\n.bi-basket-fill::before { content: \"\\f17f\"; }\n.bi-basket::before { content: \"\\f180\"; }\n.bi-basket2-fill::before { content: \"\\f181\"; }\n.bi-basket2::before { content: \"\\f182\"; }\n.bi-basket3-fill::before { content: \"\\f183\"; }\n.bi-basket3::before { content: \"\\f184\"; }\n.bi-battery-charging::before { content: \"\\f185\"; }\n.bi-battery-full::before { content: \"\\f186\"; }\n.bi-battery-half::before { content: \"\\f187\"; }\n.bi-battery::before { content: \"\\f188\"; }\n.bi-bell-fill::before { content: \"\\f189\"; }\n.bi-bell::before { content: \"\\f18a\"; }\n.bi-bezier::before { content: \"\\f18b\"; }\n.bi-bezier2::before { content: \"\\f18c\"; }\n.bi-bicycle::before { content: \"\\f18d\"; }\n.bi-binoculars-fill::before { content: \"\\f18e\"; }\n.bi-binoculars::before { content: \"\\f18f\"; }\n.bi-blockquote-left::before { content: \"\\f190\"; }\n.bi-blockquote-right::before { content: \"\\f191\"; }\n.bi-book-fill::before { content: \"\\f192\"; }\n.bi-book-half::before { content: \"\\f193\"; }\n.bi-book::before { content: \"\\f194\"; }\n.bi-bookmark-check-fill::before { content: \"\\f195\"; }\n.bi-bookmark-check::before { content: \"\\f196\"; }\n.bi-bookmark-dash-fill::before { content: \"\\f197\"; }\n.bi-bookmark-dash::before { content: \"\\f198\"; }\n.bi-bookmark-fill::before { content: \"\\f199\"; }\n.bi-bookmark-heart-fill::before { content: \"\\f19a\"; }\n.bi-bookmark-heart::before { content: \"\\f19b\"; }\n.bi-bookmark-plus-fill::before { content: \"\\f19c\"; }\n.bi-bookmark-plus::before { content: \"\\f19d\"; }\n.bi-bookmark-star-fill::before { content: \"\\f19e\"; }\n.bi-bookmark-star::before { content: \"\\f19f\"; }\n.bi-bookmark-x-fill::before { content: \"\\f1a0\"; }\n.bi-bookmark-x::before { content: \"\\f1a1\"; }\n.bi-bookmark::before { content: \"\\f1a2\"; }\n.bi-bookmarks-fill::before { content: \"\\f1a3\"; }\n.bi-bookmarks::before { content: \"\\f1a4\"; }\n.bi-bookshelf::before { content: \"\\f1a5\"; }\n.bi-bootstrap-fill::before { content: \"\\f1a6\"; }\n.bi-bootstrap-reboot::before { content: \"\\f1a7\"; }\n.bi-bootstrap::before { content: \"\\f1a8\"; }\n.bi-border-all::before { content: \"\\f1a9\"; }\n.bi-border-bottom::before { content: \"\\f1aa\"; }\n.bi-border-center::before { content: \"\\f1ab\"; }\n.bi-border-inner::before { content: \"\\f1ac\"; }\n.bi-border-left::before { content: \"\\f1ad\"; }\n.bi-border-middle::before { content: \"\\f1ae\"; }\n.bi-border-outer::before { content: \"\\f1af\"; }\n.bi-border-right::before { content: \"\\f1b0\"; }\n.bi-border-style::before { content: \"\\f1b1\"; }\n.bi-border-top::before { content: \"\\f1b2\"; }\n.bi-border-width::before { content: \"\\f1b3\"; }\n.bi-border::before { content: \"\\f1b4\"; }\n.bi-bounding-box-circles::before { content: \"\\f1b5\"; }\n.bi-bounding-box::before { content: \"\\f1b6\"; }\n.bi-box-arrow-down-left::before { content: \"\\f1b7\"; }\n.bi-box-arrow-down-right::before { content: \"\\f1b8\"; }\n.bi-box-arrow-down::before { content: \"\\f1b9\"; }\n.bi-box-arrow-in-down-left::before { content: \"\\f1ba\"; }\n.bi-box-arrow-in-down-right::before { content: \"\\f1bb\"; }\n.bi-box-arrow-in-down::before { content: \"\\f1bc\"; }\n.bi-box-arrow-in-left::before { content: \"\\f1bd\"; }\n.bi-box-arrow-in-right::before { content: \"\\f1be\"; }\n.bi-box-arrow-in-up-left::before { content: \"\\f1bf\"; }\n.bi-box-arrow-in-up-right::before { content: \"\\f1c0\"; }\n.bi-box-arrow-in-up::before { content: \"\\f1c1\"; }\n.bi-box-arrow-left::before { content: \"\\f1c2\"; }\n.bi-box-arrow-right::before { content: \"\\f1c3\"; }\n.bi-box-arrow-up-left::before { content: \"\\f1c4\"; }\n.bi-box-arrow-up-right::before { content: \"\\f1c5\"; }\n.bi-box-arrow-up::before { content: \"\\f1c6\"; }\n.bi-box-seam::before { content: \"\\f1c7\"; }\n.bi-box::before { content: \"\\f1c8\"; }\n.bi-braces::before { content: \"\\f1c9\"; }\n.bi-bricks::before { content: \"\\f1ca\"; }\n.bi-briefcase-fill::before { content: \"\\f1cb\"; }\n.bi-briefcase::before { content: \"\\f1cc\"; }\n.bi-brightness-alt-high-fill::before { content: \"\\f1cd\"; }\n.bi-brightness-alt-high::before { content: \"\\f1ce\"; }\n.bi-brightness-alt-low-fill::before { content: \"\\f1cf\"; }\n.bi-brightness-alt-low::before { content: \"\\f1d0\"; }\n.bi-brightness-high-fill::before { content: \"\\f1d1\"; }\n.bi-brightness-high::before { content: \"\\f1d2\"; }\n.bi-brightness-low-fill::before { content: \"\\f1d3\"; }\n.bi-brightness-low::before { content: \"\\f1d4\"; }\n.bi-broadcast-pin::before { content: \"\\f1d5\"; }\n.bi-broadcast::before { content: \"\\f1d6\"; }\n.bi-brush-fill::before { content: \"\\f1d7\"; }\n.bi-brush::before { content: \"\\f1d8\"; }\n.bi-bucket-fill::before { content: \"\\f1d9\"; }\n.bi-bucket::before { content: \"\\f1da\"; }\n.bi-bug-fill::before { content: \"\\f1db\"; }\n.bi-bug::before { content: \"\\f1dc\"; }\n.bi-building::before { content: \"\\f1dd\"; }\n.bi-bullseye::before { content: \"\\f1de\"; }\n.bi-calculator-fill::before { content: \"\\f1df\"; }\n.bi-calculator::before { content: \"\\f1e0\"; }\n.bi-calendar-check-fill::before { content: \"\\f1e1\"; }\n.bi-calendar-check::before { content: \"\\f1e2\"; }\n.bi-calendar-date-fill::before { content: \"\\f1e3\"; }\n.bi-calendar-date::before { content: \"\\f1e4\"; }\n.bi-calendar-day-fill::before { content: \"\\f1e5\"; }\n.bi-calendar-day::before { content: \"\\f1e6\"; }\n.bi-calendar-event-fill::before { content: \"\\f1e7\"; }\n.bi-calendar-event::before { content: \"\\f1e8\"; }\n.bi-calendar-fill::before { content: \"\\f1e9\"; }\n.bi-calendar-minus-fill::before { content: \"\\f1ea\"; }\n.bi-calendar-minus::before { content: \"\\f1eb\"; }\n.bi-calendar-month-fill::before { content: \"\\f1ec\"; }\n.bi-calendar-month::before { content: \"\\f1ed\"; }\n.bi-calendar-plus-fill::before { content: \"\\f1ee\"; }\n.bi-calendar-plus::before { content: \"\\f1ef\"; }\n.bi-calendar-range-fill::before { content: \"\\f1f0\"; }\n.bi-calendar-range::before { content: \"\\f1f1\"; }\n.bi-calendar-week-fill::before { content: \"\\f1f2\"; }\n.bi-calendar-week::before { content: \"\\f1f3\"; }\n.bi-calendar-x-fill::before { content: \"\\f1f4\"; }\n.bi-calendar-x::before { content: \"\\f1f5\"; }\n.bi-calendar::before { content: \"\\f1f6\"; }\n.bi-calendar2-check-fill::before { content: \"\\f1f7\"; }\n.bi-calendar2-check::before { content: \"\\f1f8\"; }\n.bi-calendar2-date-fill::before { content: \"\\f1f9\"; }\n.bi-calendar2-date::before { content: \"\\f1fa\"; }\n.bi-calendar2-day-fill::before { content: \"\\f1fb\"; }\n.bi-calendar2-day::before { content: \"\\f1fc\"; }\n.bi-calendar2-event-fill::before { content: \"\\f1fd\"; }\n.bi-calendar2-event::before { content: \"\\f1fe\"; }\n.bi-calendar2-fill::before { content: \"\\f1ff\"; }\n.bi-calendar2-minus-fill::before { content: \"\\f200\"; }\n.bi-calendar2-minus::before { content: \"\\f201\"; }\n.bi-calendar2-month-fill::before { content: \"\\f202\"; }\n.bi-calendar2-month::before { content: \"\\f203\"; }\n.bi-calendar2-plus-fill::before { content: \"\\f204\"; }\n.bi-calendar2-plus::before { content: \"\\f205\"; }\n.bi-calendar2-range-fill::before { content: \"\\f206\"; }\n.bi-calendar2-range::before { content: \"\\f207\"; }\n.bi-calendar2-week-fill::before { content: \"\\f208\"; }\n.bi-calendar2-week::before { content: \"\\f209\"; }\n.bi-calendar2-x-fill::before { content: \"\\f20a\"; }\n.bi-calendar2-x::before { content: \"\\f20b\"; }\n.bi-calendar2::before { content: \"\\f20c\"; }\n.bi-calendar3-event-fill::before { content: \"\\f20d\"; }\n.bi-calendar3-event::before { content: \"\\f20e\"; }\n.bi-calendar3-fill::before { content: \"\\f20f\"; }\n.bi-calendar3-range-fill::before { content: \"\\f210\"; }\n.bi-calendar3-range::before { content: \"\\f211\"; }\n.bi-calendar3-week-fill::before { content: \"\\f212\"; }\n.bi-calendar3-week::before { content: \"\\f213\"; }\n.bi-calendar3::before { content: \"\\f214\"; }\n.bi-calendar4-event::before { content: \"\\f215\"; }\n.bi-calendar4-range::before { content: \"\\f216\"; }\n.bi-calendar4-week::before { content: \"\\f217\"; }\n.bi-calendar4::before { content: \"\\f218\"; }\n.bi-camera-fill::before { content: \"\\f219\"; }\n.bi-camera-reels-fill::before { content: \"\\f21a\"; }\n.bi-camera-reels::before { content: \"\\f21b\"; }\n.bi-camera-video-fill::before { content: \"\\f21c\"; }\n.bi-camera-video-off-fill::before { content: \"\\f21d\"; }\n.bi-camera-video-off::before { content: \"\\f21e\"; }\n.bi-camera-video::before { content: \"\\f21f\"; }\n.bi-camera::before { content: \"\\f220\"; }\n.bi-camera2::before { content: \"\\f221\"; }\n.bi-capslock-fill::before { content: \"\\f222\"; }\n.bi-capslock::before { content: \"\\f223\"; }\n.bi-card-checklist::before { content: \"\\f224\"; }\n.bi-card-heading::before { content: \"\\f225\"; }\n.bi-card-image::before { content: \"\\f226\"; }\n.bi-card-list::before { content: \"\\f227\"; }\n.bi-card-text::before { content: \"\\f228\"; }\n.bi-caret-down-fill::before { content: \"\\f229\"; }\n.bi-caret-down-square-fill::before { content: \"\\f22a\"; }\n.bi-caret-down-square::before { content: \"\\f22b\"; }\n.bi-caret-down::before { content: \"\\f22c\"; }\n.bi-caret-left-fill::before { content: \"\\f22d\"; }\n.bi-caret-left-square-fill::before { content: \"\\f22e\"; }\n.bi-caret-left-square::before { content: \"\\f22f\"; }\n.bi-caret-left::before { content: \"\\f230\"; }\n.bi-caret-right-fill::before { content: \"\\f231\"; }\n.bi-caret-right-square-fill::before { content: \"\\f232\"; }\n.bi-caret-right-square::before { content: \"\\f233\"; }\n.bi-caret-right::before { content: \"\\f234\"; }\n.bi-caret-up-fill::before { content: \"\\f235\"; }\n.bi-caret-up-square-fill::before { content: \"\\f236\"; }\n.bi-caret-up-square::before { content: \"\\f237\"; }\n.bi-caret-up::before { content: \"\\f238\"; }\n.bi-cart-check-fill::before { content: \"\\f239\"; }\n.bi-cart-check::before { content: \"\\f23a\"; }\n.bi-cart-dash-fill::before { content: \"\\f23b\"; }\n.bi-cart-dash::before { content: \"\\f23c\"; }\n.bi-cart-fill::before { content: \"\\f23d\"; }\n.bi-cart-plus-fill::before { content: \"\\f23e\"; }\n.bi-cart-plus::before { content: \"\\f23f\"; }\n.bi-cart-x-fill::before { content: \"\\f240\"; }\n.bi-cart-x::before { content: \"\\f241\"; }\n.bi-cart::before { content: \"\\f242\"; }\n.bi-cart2::before { content: \"\\f243\"; }\n.bi-cart3::before { content: \"\\f244\"; }\n.bi-cart4::before { content: \"\\f245\"; }\n.bi-cash-stack::before { content: \"\\f246\"; }\n.bi-cash::before { content: \"\\f247\"; }\n.bi-cast::before { content: \"\\f248\"; }\n.bi-chat-dots-fill::before { content: \"\\f249\"; }\n.bi-chat-dots::before { content: \"\\f24a\"; }\n.bi-chat-fill::before { content: \"\\f24b\"; }\n.bi-chat-left-dots-fill::before { content: \"\\f24c\"; }\n.bi-chat-left-dots::before { content: \"\\f24d\"; }\n.bi-chat-left-fill::before { content: \"\\f24e\"; }\n.bi-chat-left-quote-fill::before { content: \"\\f24f\"; }\n.bi-chat-left-quote::before { content: \"\\f250\"; }\n.bi-chat-left-text-fill::before { content: \"\\f251\"; }\n.bi-chat-left-text::before { content: \"\\f252\"; }\n.bi-chat-left::before { content: \"\\f253\"; }\n.bi-chat-quote-fill::before { content: \"\\f254\"; }\n.bi-chat-quote::before { content: \"\\f255\"; }\n.bi-chat-right-dots-fill::before { content: \"\\f256\"; }\n.bi-chat-right-dots::before { content: \"\\f257\"; }\n.bi-chat-right-fill::before { content: \"\\f258\"; }\n.bi-chat-right-quote-fill::before { content: \"\\f259\"; }\n.bi-chat-right-quote::before { content: \"\\f25a\"; }\n.bi-chat-right-text-fill::before { content: \"\\f25b\"; }\n.bi-chat-right-text::before { content: \"\\f25c\"; }\n.bi-chat-right::before { content: \"\\f25d\"; }\n.bi-chat-square-dots-fill::before { content: \"\\f25e\"; }\n.bi-chat-square-dots::before { content: \"\\f25f\"; }\n.bi-chat-square-fill::before { content: \"\\f260\"; }\n.bi-chat-square-quote-fill::before { content: \"\\f261\"; }\n.bi-chat-square-quote::before { content: \"\\f262\"; }\n.bi-chat-square-text-fill::before { content: \"\\f263\"; }\n.bi-chat-square-text::before { content: \"\\f264\"; }\n.bi-chat-square::before { content: \"\\f265\"; }\n.bi-chat-text-fill::before { content: \"\\f266\"; }\n.bi-chat-text::before { content: \"\\f267\"; }\n.bi-chat::before { content: \"\\f268\"; }\n.bi-check-all::before { content: \"\\f269\"; }\n.bi-check-circle-fill::before { content: \"\\f26a\"; }\n.bi-check-circle::before { content: \"\\f26b\"; }\n.bi-check-square-fill::before { content: \"\\f26c\"; }\n.bi-check-square::before { content: \"\\f26d\"; }\n.bi-check::before { content: \"\\f26e\"; }\n.bi-check2-all::before { content: \"\\f26f\"; }\n.bi-check2-circle::before { content: \"\\f270\"; }\n.bi-check2-square::before { content: \"\\f271\"; }\n.bi-check2::before { content: \"\\f272\"; }\n.bi-chevron-bar-contract::before { content: \"\\f273\"; }\n.bi-chevron-bar-down::before { content: \"\\f274\"; }\n.bi-chevron-bar-expand::before { content: \"\\f275\"; }\n.bi-chevron-bar-left::before { content: \"\\f276\"; }\n.bi-chevron-bar-right::before { content: \"\\f277\"; }\n.bi-chevron-bar-up::before { content: \"\\f278\"; }\n.bi-chevron-compact-down::before { content: \"\\f279\"; }\n.bi-chevron-compact-left::before { content: \"\\f27a\"; }\n.bi-chevron-compact-right::before { content: \"\\f27b\"; }\n.bi-chevron-compact-up::before { content: \"\\f27c\"; }\n.bi-chevron-contract::before { content: \"\\f27d\"; }\n.bi-chevron-double-down::before { content: \"\\f27e\"; }\n.bi-chevron-double-left::before { content: \"\\f27f\"; }\n.bi-chevron-double-right::before { content: \"\\f280\"; }\n.bi-chevron-double-up::before { content: \"\\f281\"; }\n.bi-chevron-down::before { content: \"\\f282\"; }\n.bi-chevron-expand::before { content: \"\\f283\"; }\n.bi-chevron-left::before { content: \"\\f284\"; }\n.bi-chevron-right::before { content: \"\\f285\"; }\n.bi-chevron-up::before { content: \"\\f286\"; }\n.bi-circle-fill::before { content: \"\\f287\"; }\n.bi-circle-half::before { content: \"\\f288\"; }\n.bi-circle-square::before { content: \"\\f289\"; }\n.bi-circle::before { content: \"\\f28a\"; }\n.bi-clipboard-check::before { content: \"\\f28b\"; }\n.bi-clipboard-data::before { content: \"\\f28c\"; }\n.bi-clipboard-minus::before { content: \"\\f28d\"; }\n.bi-clipboard-plus::before { content: \"\\f28e\"; }\n.bi-clipboard-x::before { content: \"\\f28f\"; }\n.bi-clipboard::before { content: \"\\f290\"; }\n.bi-clock-fill::before { content: \"\\f291\"; }\n.bi-clock-history::before { content: \"\\f292\"; }\n.bi-clock::before { content: \"\\f293\"; }\n.bi-cloud-arrow-down-fill::before { content: \"\\f294\"; }\n.bi-cloud-arrow-down::before { content: \"\\f295\"; }\n.bi-cloud-arrow-up-fill::before { content: \"\\f296\"; }\n.bi-cloud-arrow-up::before { content: \"\\f297\"; }\n.bi-cloud-check-fill::before { content: \"\\f298\"; }\n.bi-cloud-check::before { content: \"\\f299\"; }\n.bi-cloud-download-fill::before { content: \"\\f29a\"; }\n.bi-cloud-download::before { content: \"\\f29b\"; }\n.bi-cloud-drizzle-fill::before { content: \"\\f29c\"; }\n.bi-cloud-drizzle::before { content: \"\\f29d\"; }\n.bi-cloud-fill::before { content: \"\\f29e\"; }\n.bi-cloud-fog-fill::before { content: \"\\f29f\"; }\n.bi-cloud-fog::before { content: \"\\f2a0\"; }\n.bi-cloud-fog2-fill::before { content: \"\\f2a1\"; }\n.bi-cloud-fog2::before { content: \"\\f2a2\"; }\n.bi-cloud-hail-fill::before { content: \"\\f2a3\"; }\n.bi-cloud-hail::before { content: \"\\f2a4\"; }\n.bi-cloud-haze-1::before { content: \"\\f2a5\"; }\n.bi-cloud-haze-fill::before { content: \"\\f2a6\"; }\n.bi-cloud-haze::before { content: \"\\f2a7\"; }\n.bi-cloud-haze2-fill::before { content: \"\\f2a8\"; }\n.bi-cloud-lightning-fill::before { content: \"\\f2a9\"; }\n.bi-cloud-lightning-rain-fill::before { content: \"\\f2aa\"; }\n.bi-cloud-lightning-rain::before { content: \"\\f2ab\"; }\n.bi-cloud-lightning::before { content: \"\\f2ac\"; }\n.bi-cloud-minus-fill::before { content: \"\\f2ad\"; }\n.bi-cloud-minus::before { content: \"\\f2ae\"; }\n.bi-cloud-moon-fill::before { content: \"\\f2af\"; }\n.bi-cloud-moon::before { content: \"\\f2b0\"; }\n.bi-cloud-plus-fill::before { content: \"\\f2b1\"; }\n.bi-cloud-plus::before { content: \"\\f2b2\"; }\n.bi-cloud-rain-fill::before { content: \"\\f2b3\"; }\n.bi-cloud-rain-heavy-fill::before { content: \"\\f2b4\"; }\n.bi-cloud-rain-heavy::before { content: \"\\f2b5\"; }\n.bi-cloud-rain::before { content: \"\\f2b6\"; }\n.bi-cloud-slash-fill::before { content: \"\\f2b7\"; }\n.bi-cloud-slash::before { content: \"\\f2b8\"; }\n.bi-cloud-sleet-fill::before { content: \"\\f2b9\"; }\n.bi-cloud-sleet::before { content: \"\\f2ba\"; }\n.bi-cloud-snow-fill::before { content: \"\\f2bb\"; }\n.bi-cloud-snow::before { content: \"\\f2bc\"; }\n.bi-cloud-sun-fill::before { content: \"\\f2bd\"; }\n.bi-cloud-sun::before { content: \"\\f2be\"; }\n.bi-cloud-upload-fill::before { content: \"\\f2bf\"; }\n.bi-cloud-upload::before { content: \"\\f2c0\"; }\n.bi-cloud::before { content: \"\\f2c1\"; }\n.bi-clouds-fill::before { content: \"\\f2c2\"; }\n.bi-clouds::before { content: \"\\f2c3\"; }\n.bi-cloudy-fill::before { content: \"\\f2c4\"; }\n.bi-cloudy::before { content: \"\\f2c5\"; }\n.bi-code-slash::before { content: \"\\f2c6\"; }\n.bi-code-square::before { content: \"\\f2c7\"; }\n.bi-code::before { content: \"\\f2c8\"; }\n.bi-collection-fill::before { content: \"\\f2c9\"; }\n.bi-collection-play-fill::before { content: \"\\f2ca\"; }\n.bi-collection-play::before { content: \"\\f2cb\"; }\n.bi-collection::before { content: \"\\f2cc\"; }\n.bi-columns-gap::before { content: \"\\f2cd\"; }\n.bi-columns::before { content: \"\\f2ce\"; }\n.bi-command::before { content: \"\\f2cf\"; }\n.bi-compass-fill::before { content: \"\\f2d0\"; }\n.bi-compass::before { content: \"\\f2d1\"; }\n.bi-cone-striped::before { content: \"\\f2d2\"; }\n.bi-cone::before { content: \"\\f2d3\"; }\n.bi-controller::before { content: \"\\f2d4\"; }\n.bi-cpu-fill::before { content: \"\\f2d5\"; }\n.bi-cpu::before { content: \"\\f2d6\"; }\n.bi-credit-card-2-back-fill::before { content: \"\\f2d7\"; }\n.bi-credit-card-2-back::before { content: \"\\f2d8\"; }\n.bi-credit-card-2-front-fill::before { content: \"\\f2d9\"; }\n.bi-credit-card-2-front::before { content: \"\\f2da\"; }\n.bi-credit-card-fill::before { content: \"\\f2db\"; }\n.bi-credit-card::before { content: \"\\f2dc\"; }\n.bi-crop::before { content: \"\\f2dd\"; }\n.bi-cup-fill::before { content: \"\\f2de\"; }\n.bi-cup-straw::before { content: \"\\f2df\"; }\n.bi-cup::before { content: \"\\f2e0\"; }\n.bi-cursor-fill::before { content: \"\\f2e1\"; }\n.bi-cursor-text::before { content: \"\\f2e2\"; }\n.bi-cursor::before { content: \"\\f2e3\"; }\n.bi-dash-circle-dotted::before { content: \"\\f2e4\"; }\n.bi-dash-circle-fill::before { content: \"\\f2e5\"; }\n.bi-dash-circle::before { content: \"\\f2e6\"; }\n.bi-dash-square-dotted::before { content: \"\\f2e7\"; }\n.bi-dash-square-fill::before { content: \"\\f2e8\"; }\n.bi-dash-square::before { content: \"\\f2e9\"; }\n.bi-dash::before { content: \"\\f2ea\"; }\n.bi-diagram-2-fill::before { content: \"\\f2eb\"; }\n.bi-diagram-2::before { content: \"\\f2ec\"; }\n.bi-diagram-3-fill::before { content: \"\\f2ed\"; }\n.bi-diagram-3::before { content: \"\\f2ee\"; }\n.bi-diamond-fill::before { content: \"\\f2ef\"; }\n.bi-diamond-half::before { content: \"\\f2f0\"; }\n.bi-diamond::before { content: \"\\f2f1\"; }\n.bi-dice-1-fill::before { content: \"\\f2f2\"; }\n.bi-dice-1::before { content: \"\\f2f3\"; }\n.bi-dice-2-fill::before { content: \"\\f2f4\"; }\n.bi-dice-2::before { content: \"\\f2f5\"; }\n.bi-dice-3-fill::before { content: \"\\f2f6\"; }\n.bi-dice-3::before { content: \"\\f2f7\"; }\n.bi-dice-4-fill::before { content: \"\\f2f8\"; }\n.bi-dice-4::before { content: \"\\f2f9\"; }\n.bi-dice-5-fill::before { content: \"\\f2fa\"; }\n.bi-dice-5::before { content: \"\\f2fb\"; }\n.bi-dice-6-fill::before { content: \"\\f2fc\"; }\n.bi-dice-6::before { content: \"\\f2fd\"; }\n.bi-disc-fill::before { content: \"\\f2fe\"; }\n.bi-disc::before { content: \"\\f2ff\"; }\n.bi-discord::before { content: \"\\f300\"; }\n.bi-display-fill::before { content: \"\\f301\"; }\n.bi-display::before { content: \"\\f302\"; }\n.bi-distribute-horizontal::before { content: \"\\f303\"; }\n.bi-distribute-vertical::before { content: \"\\f304\"; }\n.bi-door-closed-fill::before { content: \"\\f305\"; }\n.bi-door-closed::before { content: \"\\f306\"; }\n.bi-door-open-fill::before { content: \"\\f307\"; }\n.bi-door-open::before { content: \"\\f308\"; }\n.bi-dot::before { content: \"\\f309\"; }\n.bi-download::before { content: \"\\f30a\"; }\n.bi-droplet-fill::before { content: \"\\f30b\"; }\n.bi-droplet-half::before { content: \"\\f30c\"; }\n.bi-droplet::before { content: \"\\f30d\"; }\n.bi-earbuds::before { content: \"\\f30e\"; }\n.bi-easel-fill::before { content: \"\\f30f\"; }\n.bi-easel::before { content: \"\\f310\"; }\n.bi-egg-fill::before { content: \"\\f311\"; }\n.bi-egg-fried::before { content: \"\\f312\"; }\n.bi-egg::before { content: \"\\f313\"; }\n.bi-eject-fill::before { content: \"\\f314\"; }\n.bi-eject::before { content: \"\\f315\"; }\n.bi-emoji-angry-fill::before { content: \"\\f316\"; }\n.bi-emoji-angry::before { content: \"\\f317\"; }\n.bi-emoji-dizzy-fill::before { content: \"\\f318\"; }\n.bi-emoji-dizzy::before { content: \"\\f319\"; }\n.bi-emoji-expressionless-fill::before { content: \"\\f31a\"; }\n.bi-emoji-expressionless::before { content: \"\\f31b\"; }\n.bi-emoji-frown-fill::before { content: \"\\f31c\"; }\n.bi-emoji-frown::before { content: \"\\f31d\"; }\n.bi-emoji-heart-eyes-fill::before { content: \"\\f31e\"; }\n.bi-emoji-heart-eyes::before { content: \"\\f31f\"; }\n.bi-emoji-laughing-fill::before { content: \"\\f320\"; }\n.bi-emoji-laughing::before { content: \"\\f321\"; }\n.bi-emoji-neutral-fill::before { content: \"\\f322\"; }\n.bi-emoji-neutral::before { content: \"\\f323\"; }\n.bi-emoji-smile-fill::before { content: \"\\f324\"; }\n.bi-emoji-smile-upside-down-fill::before { content: \"\\f325\"; }\n.bi-emoji-smile-upside-down::before { content: \"\\f326\"; }\n.bi-emoji-smile::before { content: \"\\f327\"; }\n.bi-emoji-sunglasses-fill::before { content: \"\\f328\"; }\n.bi-emoji-sunglasses::before { content: \"\\f329\"; }\n.bi-emoji-wink-fill::before { content: \"\\f32a\"; }\n.bi-emoji-wink::before { content: \"\\f32b\"; }\n.bi-envelope-fill::before { content: \"\\f32c\"; }\n.bi-envelope-open-fill::before { content: \"\\f32d\"; }\n.bi-envelope-open::before { content: \"\\f32e\"; }\n.bi-envelope::before { content: \"\\f32f\"; }\n.bi-eraser-fill::before { content: \"\\f330\"; }\n.bi-eraser::before { content: \"\\f331\"; }\n.bi-exclamation-circle-fill::before { content: \"\\f332\"; }\n.bi-exclamation-circle::before { content: \"\\f333\"; }\n.bi-exclamation-diamond-fill::before { content: \"\\f334\"; }\n.bi-exclamation-diamond::before { content: \"\\f335\"; }\n.bi-exclamation-octagon-fill::before { content: \"\\f336\"; }\n.bi-exclamation-octagon::before { content: \"\\f337\"; }\n.bi-exclamation-square-fill::before { content: \"\\f338\"; }\n.bi-exclamation-square::before { content: \"\\f339\"; }\n.bi-exclamation-triangle-fill::before { content: \"\\f33a\"; }\n.bi-exclamation-triangle::before { content: \"\\f33b\"; }\n.bi-exclamation::before { content: \"\\f33c\"; }\n.bi-exclude::before { content: \"\\f33d\"; }\n.bi-eye-fill::before { content: \"\\f33e\"; }\n.bi-eye-slash-fill::before { content: \"\\f33f\"; }\n.bi-eye-slash::before { content: \"\\f340\"; }\n.bi-eye::before { content: \"\\f341\"; }\n.bi-eyedropper::before { content: \"\\f342\"; }\n.bi-eyeglasses::before { content: \"\\f343\"; }\n.bi-facebook::before { content: \"\\f344\"; }\n.bi-file-arrow-down-fill::before { content: \"\\f345\"; }\n.bi-file-arrow-down::before { content: \"\\f346\"; }\n.bi-file-arrow-up-fill::before { content: \"\\f347\"; }\n.bi-file-arrow-up::before { content: \"\\f348\"; }\n.bi-file-bar-graph-fill::before { content: \"\\f349\"; }\n.bi-file-bar-graph::before { content: \"\\f34a\"; }\n.bi-file-binary-fill::before { content: \"\\f34b\"; }\n.bi-file-binary::before { content: \"\\f34c\"; }\n.bi-file-break-fill::before { content: \"\\f34d\"; }\n.bi-file-break::before { content: \"\\f34e\"; }\n.bi-file-check-fill::before { content: \"\\f34f\"; }\n.bi-file-check::before { content: \"\\f350\"; }\n.bi-file-code-fill::before { content: \"\\f351\"; }\n.bi-file-code::before { content: \"\\f352\"; }\n.bi-file-diff-fill::before { content: \"\\f353\"; }\n.bi-file-diff::before { content: \"\\f354\"; }\n.bi-file-earmark-arrow-down-fill::before { content: \"\\f355\"; }\n.bi-file-earmark-arrow-down::before { content: \"\\f356\"; }\n.bi-file-earmark-arrow-up-fill::before { content: \"\\f357\"; }\n.bi-file-earmark-arrow-up::before { content: \"\\f358\"; }\n.bi-file-earmark-bar-graph-fill::before { content: \"\\f359\"; }\n.bi-file-earmark-bar-graph::before { content: \"\\f35a\"; }\n.bi-file-earmark-binary-fill::before { content: \"\\f35b\"; }\n.bi-file-earmark-binary::before { content: \"\\f35c\"; }\n.bi-file-earmark-break-fill::before { content: \"\\f35d\"; }\n.bi-file-earmark-break::before { content: \"\\f35e\"; }\n.bi-file-earmark-check-fill::before { content: \"\\f35f\"; }\n.bi-file-earmark-check::before { content: \"\\f360\"; }\n.bi-file-earmark-code-fill::before { content: \"\\f361\"; }\n.bi-file-earmark-code::before { content: \"\\f362\"; }\n.bi-file-earmark-diff-fill::before { content: \"\\f363\"; }\n.bi-file-earmark-diff::before { content: \"\\f364\"; }\n.bi-file-earmark-easel-fill::before { content: \"\\f365\"; }\n.bi-file-earmark-easel::before { content: \"\\f366\"; }\n.bi-file-earmark-excel-fill::before { content: \"\\f367\"; }\n.bi-file-earmark-excel::before { content: \"\\f368\"; }\n.bi-file-earmark-fill::before { content: \"\\f369\"; }\n.bi-file-earmark-font-fill::before { content: \"\\f36a\"; }\n.bi-file-earmark-font::before { content: \"\\f36b\"; }\n.bi-file-earmark-image-fill::before { content: \"\\f36c\"; }\n.bi-file-earmark-image::before { content: \"\\f36d\"; }\n.bi-file-earmark-lock-fill::before { content: \"\\f36e\"; }\n.bi-file-earmark-lock::before { content: \"\\f36f\"; }\n.bi-file-earmark-lock2-fill::before { content: \"\\f370\"; }\n.bi-file-earmark-lock2::before { content: \"\\f371\"; }\n.bi-file-earmark-medical-fill::before { content: \"\\f372\"; }\n.bi-file-earmark-medical::before { content: \"\\f373\"; }\n.bi-file-earmark-minus-fill::before { content: \"\\f374\"; }\n.bi-file-earmark-minus::before { content: \"\\f375\"; }\n.bi-file-earmark-music-fill::before { content: \"\\f376\"; }\n.bi-file-earmark-music::before { content: \"\\f377\"; }\n.bi-file-earmark-person-fill::before { content: \"\\f378\"; }\n.bi-file-earmark-person::before { content: \"\\f379\"; }\n.bi-file-earmark-play-fill::before { content: \"\\f37a\"; }\n.bi-file-earmark-play::before { content: \"\\f37b\"; }\n.bi-file-earmark-plus-fill::before { content: \"\\f37c\"; }\n.bi-file-earmark-plus::before { content: \"\\f37d\"; }\n.bi-file-earmark-post-fill::before { content: \"\\f37e\"; }\n.bi-file-earmark-post::before { content: \"\\f37f\"; }\n.bi-file-earmark-ppt-fill::before { content: \"\\f380\"; }\n.bi-file-earmark-ppt::before { content: \"\\f381\"; }\n.bi-file-earmark-richtext-fill::before { content: \"\\f382\"; }\n.bi-file-earmark-richtext::before { content: \"\\f383\"; }\n.bi-file-earmark-ruled-fill::before { content: \"\\f384\"; }\n.bi-file-earmark-ruled::before { content: \"\\f385\"; }\n.bi-file-earmark-slides-fill::before { content: \"\\f386\"; }\n.bi-file-earmark-slides::before { content: \"\\f387\"; }\n.bi-file-earmark-spreadsheet-fill::before { content: \"\\f388\"; }\n.bi-file-earmark-spreadsheet::before { content: \"\\f389\"; }\n.bi-file-earmark-text-fill::before { content: \"\\f38a\"; }\n.bi-file-earmark-text::before { content: \"\\f38b\"; }\n.bi-file-earmark-word-fill::before { content: \"\\f38c\"; }\n.bi-file-earmark-word::before { content: \"\\f38d\"; }\n.bi-file-earmark-x-fill::before { content: \"\\f38e\"; }\n.bi-file-earmark-x::before { content: \"\\f38f\"; }\n.bi-file-earmark-zip-fill::before { content: \"\\f390\"; }\n.bi-file-earmark-zip::before { content: \"\\f391\"; }\n.bi-file-earmark::before { content: \"\\f392\"; }\n.bi-file-easel-fill::before { content: \"\\f393\"; }\n.bi-file-easel::before { content: \"\\f394\"; }\n.bi-file-excel-fill::before { content: \"\\f395\"; }\n.bi-file-excel::before { content: \"\\f396\"; }\n.bi-file-fill::before { content: \"\\f397\"; }\n.bi-file-font-fill::before { content: \"\\f398\"; }\n.bi-file-font::before { content: \"\\f399\"; }\n.bi-file-image-fill::before { content: \"\\f39a\"; }\n.bi-file-image::before { content: \"\\f39b\"; }\n.bi-file-lock-fill::before { content: \"\\f39c\"; }\n.bi-file-lock::before { content: \"\\f39d\"; }\n.bi-file-lock2-fill::before { content: \"\\f39e\"; }\n.bi-file-lock2::before { content: \"\\f39f\"; }\n.bi-file-medical-fill::before { content: \"\\f3a0\"; }\n.bi-file-medical::before { content: \"\\f3a1\"; }\n.bi-file-minus-fill::before { content: \"\\f3a2\"; }\n.bi-file-minus::before { content: \"\\f3a3\"; }\n.bi-file-music-fill::before { content: \"\\f3a4\"; }\n.bi-file-music::before { content: \"\\f3a5\"; }\n.bi-file-person-fill::before { content: \"\\f3a6\"; }\n.bi-file-person::before { content: \"\\f3a7\"; }\n.bi-file-play-fill::before { content: \"\\f3a8\"; }\n.bi-file-play::before { content: \"\\f3a9\"; }\n.bi-file-plus-fill::before { content: \"\\f3aa\"; }\n.bi-file-plus::before { content: \"\\f3ab\"; }\n.bi-file-post-fill::before { content: \"\\f3ac\"; }\n.bi-file-post::before { content: \"\\f3ad\"; }\n.bi-file-ppt-fill::before { content: \"\\f3ae\"; }\n.bi-file-ppt::before { content: \"\\f3af\"; }\n.bi-file-richtext-fill::before { content: \"\\f3b0\"; }\n.bi-file-richtext::before { content: \"\\f3b1\"; }\n.bi-file-ruled-fill::before { content: \"\\f3b2\"; }\n.bi-file-ruled::before { content: \"\\f3b3\"; }\n.bi-file-slides-fill::before { content: \"\\f3b4\"; }\n.bi-file-slides::before { content: \"\\f3b5\"; }\n.bi-file-spreadsheet-fill::before { content: \"\\f3b6\"; }\n.bi-file-spreadsheet::before { content: \"\\f3b7\"; }\n.bi-file-text-fill::before { content: \"\\f3b8\"; }\n.bi-file-text::before { content: \"\\f3b9\"; }\n.bi-file-word-fill::before { content: \"\\f3ba\"; }\n.bi-file-word::before { content: \"\\f3bb\"; }\n.bi-file-x-fill::before { content: \"\\f3bc\"; }\n.bi-file-x::before { content: \"\\f3bd\"; }\n.bi-file-zip-fill::before { content: \"\\f3be\"; }\n.bi-file-zip::before { content: \"\\f3bf\"; }\n.bi-file::before { content: \"\\f3c0\"; }\n.bi-files-alt::before { content: \"\\f3c1\"; }\n.bi-files::before { content: \"\\f3c2\"; }\n.bi-film::before { content: \"\\f3c3\"; }\n.bi-filter-circle-fill::before { content: \"\\f3c4\"; }\n.bi-filter-circle::before { content: \"\\f3c5\"; }\n.bi-filter-left::before { content: \"\\f3c6\"; }\n.bi-filter-right::before { content: \"\\f3c7\"; }\n.bi-filter-square-fill::before { content: \"\\f3c8\"; }\n.bi-filter-square::before { content: \"\\f3c9\"; }\n.bi-filter::before { content: \"\\f3ca\"; }\n.bi-flag-fill::before { content: \"\\f3cb\"; }\n.bi-flag::before { content: \"\\f3cc\"; }\n.bi-flower1::before { content: \"\\f3cd\"; }\n.bi-flower2::before { content: \"\\f3ce\"; }\n.bi-flower3::before { content: \"\\f3cf\"; }\n.bi-folder-check::before { content: \"\\f3d0\"; }\n.bi-folder-fill::before { content: \"\\f3d1\"; }\n.bi-folder-minus::before { content: \"\\f3d2\"; }\n.bi-folder-plus::before { content: \"\\f3d3\"; }\n.bi-folder-symlink-fill::before { content: \"\\f3d4\"; }\n.bi-folder-symlink::before { content: \"\\f3d5\"; }\n.bi-folder-x::before { content: \"\\f3d6\"; }\n.bi-folder::before { content: \"\\f3d7\"; }\n.bi-folder2-open::before { content: \"\\f3d8\"; }\n.bi-folder2::before { content: \"\\f3d9\"; }\n.bi-fonts::before { content: \"\\f3da\"; }\n.bi-forward-fill::before { content: \"\\f3db\"; }\n.bi-forward::before { content: \"\\f3dc\"; }\n.bi-front::before { content: \"\\f3dd\"; }\n.bi-fullscreen-exit::before { content: \"\\f3de\"; }\n.bi-fullscreen::before { content: \"\\f3df\"; }\n.bi-funnel-fill::before { content: \"\\f3e0\"; }\n.bi-funnel::before { content: \"\\f3e1\"; }\n.bi-gear-fill::before { content: \"\\f3e2\"; }\n.bi-gear-wide-connected::before { content: \"\\f3e3\"; }\n.bi-gear-wide::before { content: \"\\f3e4\"; }\n.bi-gear::before { content: \"\\f3e5\"; }\n.bi-gem::before { content: \"\\f3e6\"; }\n.bi-geo-alt-fill::before { content: \"\\f3e7\"; }\n.bi-geo-alt::before { content: \"\\f3e8\"; }\n.bi-geo-fill::before { content: \"\\f3e9\"; }\n.bi-geo::before { content: \"\\f3ea\"; }\n.bi-gift-fill::before { content: \"\\f3eb\"; }\n.bi-gift::before { content: \"\\f3ec\"; }\n.bi-github::before { content: \"\\f3ed\"; }\n.bi-globe::before { content: \"\\f3ee\"; }\n.bi-globe2::before { content: \"\\f3ef\"; }\n.bi-google::before { content: \"\\f3f0\"; }\n.bi-graph-down::before { content: \"\\f3f1\"; }\n.bi-graph-up::before { content: \"\\f3f2\"; }\n.bi-grid-1x2-fill::before { content: \"\\f3f3\"; }\n.bi-grid-1x2::before { content: \"\\f3f4\"; }\n.bi-grid-3x2-gap-fill::before { content: \"\\f3f5\"; }\n.bi-grid-3x2-gap::before { content: \"\\f3f6\"; }\n.bi-grid-3x2::before { content: \"\\f3f7\"; }\n.bi-grid-3x3-gap-fill::before { content: \"\\f3f8\"; }\n.bi-grid-3x3-gap::before { content: \"\\f3f9\"; }\n.bi-grid-3x3::before { content: \"\\f3fa\"; }\n.bi-grid-fill::before { content: \"\\f3fb\"; }\n.bi-grid::before { content: \"\\f3fc\"; }\n.bi-grip-horizontal::before { content: \"\\f3fd\"; }\n.bi-grip-vertical::before { content: \"\\f3fe\"; }\n.bi-hammer::before { content: \"\\f3ff\"; }\n.bi-hand-index-fill::before { content: \"\\f400\"; }\n.bi-hand-index-thumb-fill::before { content: \"\\f401\"; }\n.bi-hand-index-thumb::before { content: \"\\f402\"; }\n.bi-hand-index::before { content: \"\\f403\"; }\n.bi-hand-thumbs-down-fill::before { content: \"\\f404\"; }\n.bi-hand-thumbs-down::before { content: \"\\f405\"; }\n.bi-hand-thumbs-up-fill::before { content: \"\\f406\"; }\n.bi-hand-thumbs-up::before { content: \"\\f407\"; }\n.bi-handbag-fill::before { content: \"\\f408\"; }\n.bi-handbag::before { content: \"\\f409\"; }\n.bi-hash::before { content: \"\\f40a\"; }\n.bi-hdd-fill::before { content: \"\\f40b\"; }\n.bi-hdd-network-fill::before { content: \"\\f40c\"; }\n.bi-hdd-network::before { content: \"\\f40d\"; }\n.bi-hdd-rack-fill::before { content: \"\\f40e\"; }\n.bi-hdd-rack::before { content: \"\\f40f\"; }\n.bi-hdd-stack-fill::before { content: \"\\f410\"; }\n.bi-hdd-stack::before { content: \"\\f411\"; }\n.bi-hdd::before { content: \"\\f412\"; }\n.bi-headphones::before { content: \"\\f413\"; }\n.bi-headset::before { content: \"\\f414\"; }\n.bi-heart-fill::before { content: \"\\f415\"; }\n.bi-heart-half::before { content: \"\\f416\"; }\n.bi-heart::before { content: \"\\f417\"; }\n.bi-heptagon-fill::before { content: \"\\f418\"; }\n.bi-heptagon-half::before { content: \"\\f419\"; }\n.bi-heptagon::before { content: \"\\f41a\"; }\n.bi-hexagon-fill::before { content: \"\\f41b\"; }\n.bi-hexagon-half::before { content: \"\\f41c\"; }\n.bi-hexagon::before { content: \"\\f41d\"; }\n.bi-hourglass-bottom::before { content: \"\\f41e\"; }\n.bi-hourglass-split::before { content: \"\\f41f\"; }\n.bi-hourglass-top::before { content: \"\\f420\"; }\n.bi-hourglass::before { content: \"\\f421\"; }\n.bi-house-door-fill::before { content: \"\\f422\"; }\n.bi-house-door::before { content: \"\\f423\"; }\n.bi-house-fill::before { content: \"\\f424\"; }\n.bi-house::before { content: \"\\f425\"; }\n.bi-hr::before { content: \"\\f426\"; }\n.bi-hurricane::before { content: \"\\f427\"; }\n.bi-image-alt::before { content: \"\\f428\"; }\n.bi-image-fill::before { content: \"\\f429\"; }\n.bi-image::before { content: \"\\f42a\"; }\n.bi-images::before { content: \"\\f42b\"; }\n.bi-inbox-fill::before { content: \"\\f42c\"; }\n.bi-inbox::before { content: \"\\f42d\"; }\n.bi-inboxes-fill::before { content: \"\\f42e\"; }\n.bi-inboxes::before { content: \"\\f42f\"; }\n.bi-info-circle-fill::before { content: \"\\f430\"; }\n.bi-info-circle::before { content: \"\\f431\"; }\n.bi-info-square-fill::before { content: \"\\f432\"; }\n.bi-info-square::before { content: \"\\f433\"; }\n.bi-info::before { content: \"\\f434\"; }\n.bi-input-cursor-text::before { content: \"\\f435\"; }\n.bi-input-cursor::before { content: \"\\f436\"; }\n.bi-instagram::before { content: \"\\f437\"; }\n.bi-intersect::before { content: \"\\f438\"; }\n.bi-journal-album::before { content: \"\\f439\"; }\n.bi-journal-arrow-down::before { content: \"\\f43a\"; }\n.bi-journal-arrow-up::before { content: \"\\f43b\"; }\n.bi-journal-bookmark-fill::before { content: \"\\f43c\"; }\n.bi-journal-bookmark::before { content: \"\\f43d\"; }\n.bi-journal-check::before { content: \"\\f43e\"; }\n.bi-journal-code::before { content: \"\\f43f\"; }\n.bi-journal-medical::before { content: \"\\f440\"; }\n.bi-journal-minus::before { content: \"\\f441\"; }\n.bi-journal-plus::before { content: \"\\f442\"; }\n.bi-journal-richtext::before { content: \"\\f443\"; }\n.bi-journal-text::before { content: \"\\f444\"; }\n.bi-journal-x::before { content: \"\\f445\"; }\n.bi-journal::before { content: \"\\f446\"; }\n.bi-journals::before { content: \"\\f447\"; }\n.bi-joystick::before { content: \"\\f448\"; }\n.bi-justify-left::before { content: \"\\f449\"; }\n.bi-justify-right::before { content: \"\\f44a\"; }\n.bi-justify::before { content: \"\\f44b\"; }\n.bi-kanban-fill::before { content: \"\\f44c\"; }\n.bi-kanban::before { content: \"\\f44d\"; }\n.bi-key-fill::before { content: \"\\f44e\"; }\n.bi-key::before { content: \"\\f44f\"; }\n.bi-keyboard-fill::before { content: \"\\f450\"; }\n.bi-keyboard::before { content: \"\\f451\"; }\n.bi-ladder::before { content: \"\\f452\"; }\n.bi-lamp-fill::before { content: \"\\f453\"; }\n.bi-lamp::before { content: \"\\f454\"; }\n.bi-laptop-fill::before { content: \"\\f455\"; }\n.bi-laptop::before { content: \"\\f456\"; }\n.bi-layer-backward::before { content: \"\\f457\"; }\n.bi-layer-forward::before { content: \"\\f458\"; }\n.bi-layers-fill::before { content: \"\\f459\"; }\n.bi-layers-half::before { content: \"\\f45a\"; }\n.bi-layers::before { content: \"\\f45b\"; }\n.bi-layout-sidebar-inset-reverse::before { content: \"\\f45c\"; }\n.bi-layout-sidebar-inset::before { content: \"\\f45d\"; }\n.bi-layout-sidebar-reverse::before { content: \"\\f45e\"; }\n.bi-layout-sidebar::before { content: \"\\f45f\"; }\n.bi-layout-split::before { content: \"\\f460\"; }\n.bi-layout-text-sidebar-reverse::before { content: \"\\f461\"; }\n.bi-layout-text-sidebar::before { content: \"\\f462\"; }\n.bi-layout-text-window-reverse::before { content: \"\\f463\"; }\n.bi-layout-text-window::before { content: \"\\f464\"; }\n.bi-layout-three-columns::before { content: \"\\f465\"; }\n.bi-layout-wtf::before { content: \"\\f466\"; }\n.bi-life-preserver::before { content: \"\\f467\"; }\n.bi-lightbulb-fill::before { content: \"\\f468\"; }\n.bi-lightbulb-off-fill::before { content: \"\\f469\"; }\n.bi-lightbulb-off::before { content: \"\\f46a\"; }\n.bi-lightbulb::before { content: \"\\f46b\"; }\n.bi-lightning-charge-fill::before { content: \"\\f46c\"; }\n.bi-lightning-charge::before { content: \"\\f46d\"; }\n.bi-lightning-fill::before { content: \"\\f46e\"; }\n.bi-lightning::before { content: \"\\f46f\"; }\n.bi-link-45deg::before { content: \"\\f470\"; }\n.bi-link::before { content: \"\\f471\"; }\n.bi-linkedin::before { content: \"\\f472\"; }\n.bi-list-check::before { content: \"\\f473\"; }\n.bi-list-nested::before { content: \"\\f474\"; }\n.bi-list-ol::before { content: \"\\f475\"; }\n.bi-list-stars::before { content: \"\\f476\"; }\n.bi-list-task::before { content: \"\\f477\"; }\n.bi-list-ul::before { content: \"\\f478\"; }\n.bi-list::before { content: \"\\f479\"; }\n.bi-lock-fill::before { content: \"\\f47a\"; }\n.bi-lock::before { content: \"\\f47b\"; }\n.bi-mailbox::before { content: \"\\f47c\"; }\n.bi-mailbox2::before { content: \"\\f47d\"; }\n.bi-map-fill::before { content: \"\\f47e\"; }\n.bi-map::before { content: \"\\f47f\"; }\n.bi-markdown-fill::before { content: \"\\f480\"; }\n.bi-markdown::before { content: \"\\f481\"; }\n.bi-mask::before { content: \"\\f482\"; }\n.bi-megaphone-fill::before { content: \"\\f483\"; }\n.bi-megaphone::before { content: \"\\f484\"; }\n.bi-menu-app-fill::before { content: \"\\f485\"; }\n.bi-menu-app::before { content: \"\\f486\"; }\n.bi-menu-button-fill::before { content: \"\\f487\"; }\n.bi-menu-button-wide-fill::before { content: \"\\f488\"; }\n.bi-menu-button-wide::before { content: \"\\f489\"; }\n.bi-menu-button::before { content: \"\\f48a\"; }\n.bi-menu-down::before { content: \"\\f48b\"; }\n.bi-menu-up::before { content: \"\\f48c\"; }\n.bi-mic-fill::before { content: \"\\f48d\"; }\n.bi-mic-mute-fill::before { content: \"\\f48e\"; }\n.bi-mic-mute::before { content: \"\\f48f\"; }\n.bi-mic::before { content: \"\\f490\"; }\n.bi-minecart-loaded::before { content: \"\\f491\"; }\n.bi-minecart::before { content: \"\\f492\"; }\n.bi-moisture::before { content: \"\\f493\"; }\n.bi-moon-fill::before { content: \"\\f494\"; }\n.bi-moon-stars-fill::before { content: \"\\f495\"; }\n.bi-moon-stars::before { content: \"\\f496\"; }\n.bi-moon::before { content: \"\\f497\"; }\n.bi-mouse-fill::before { content: \"\\f498\"; }\n.bi-mouse::before { content: \"\\f499\"; }\n.bi-mouse2-fill::before { content: \"\\f49a\"; }\n.bi-mouse2::before { content: \"\\f49b\"; }\n.bi-mouse3-fill::before { content: \"\\f49c\"; }\n.bi-mouse3::before { content: \"\\f49d\"; }\n.bi-music-note-beamed::before { content: \"\\f49e\"; }\n.bi-music-note-list::before { content: \"\\f49f\"; }\n.bi-music-note::before { content: \"\\f4a0\"; }\n.bi-music-player-fill::before { content: \"\\f4a1\"; }\n.bi-music-player::before { content: \"\\f4a2\"; }\n.bi-newspaper::before { content: \"\\f4a3\"; }\n.bi-node-minus-fill::before { content: \"\\f4a4\"; }\n.bi-node-minus::before { content: \"\\f4a5\"; }\n.bi-node-plus-fill::before { content: \"\\f4a6\"; }\n.bi-node-plus::before { content: \"\\f4a7\"; }\n.bi-nut-fill::before { content: \"\\f4a8\"; }\n.bi-nut::before { content: \"\\f4a9\"; }\n.bi-octagon-fill::before { content: \"\\f4aa\"; }\n.bi-octagon-half::before { content: \"\\f4ab\"; }\n.bi-octagon::before { content: \"\\f4ac\"; }\n.bi-option::before { content: \"\\f4ad\"; }\n.bi-outlet::before { content: \"\\f4ae\"; }\n.bi-paint-bucket::before { content: \"\\f4af\"; }\n.bi-palette-fill::before { content: \"\\f4b0\"; }\n.bi-palette::before { content: \"\\f4b1\"; }\n.bi-palette2::before { content: \"\\f4b2\"; }\n.bi-paperclip::before { content: \"\\f4b3\"; }\n.bi-paragraph::before { content: \"\\f4b4\"; }\n.bi-patch-check-fill::before { content: \"\\f4b5\"; }\n.bi-patch-check::before { content: \"\\f4b6\"; }\n.bi-patch-exclamation-fill::before { content: \"\\f4b7\"; }\n.bi-patch-exclamation::before { content: \"\\f4b8\"; }\n.bi-patch-minus-fill::before { content: \"\\f4b9\"; }\n.bi-patch-minus::before { content: \"\\f4ba\"; }\n.bi-patch-plus-fill::before { content: \"\\f4bb\"; }\n.bi-patch-plus::before { content: \"\\f4bc\"; }\n.bi-patch-question-fill::before { content: \"\\f4bd\"; }\n.bi-patch-question::before { content: \"\\f4be\"; }\n.bi-pause-btn-fill::before { content: \"\\f4bf\"; }\n.bi-pause-btn::before { content: \"\\f4c0\"; }\n.bi-pause-circle-fill::before { content: \"\\f4c1\"; }\n.bi-pause-circle::before { content: \"\\f4c2\"; }\n.bi-pause-fill::before { content: \"\\f4c3\"; }\n.bi-pause::before { content: \"\\f4c4\"; }\n.bi-peace-fill::before { content: \"\\f4c5\"; }\n.bi-peace::before { content: \"\\f4c6\"; }\n.bi-pen-fill::before { content: \"\\f4c7\"; }\n.bi-pen::before { content: \"\\f4c8\"; }\n.bi-pencil-fill::before { content: \"\\f4c9\"; }\n.bi-pencil-square::before { content: \"\\f4ca\"; }\n.bi-pencil::before { content: \"\\f4cb\"; }\n.bi-pentagon-fill::before { content: \"\\f4cc\"; }\n.bi-pentagon-half::before { content: \"\\f4cd\"; }\n.bi-pentagon::before { content: \"\\f4ce\"; }\n.bi-people-fill::before { content: \"\\f4cf\"; }\n.bi-people::before { content: \"\\f4d0\"; }\n.bi-percent::before { content: \"\\f4d1\"; }\n.bi-person-badge-fill::before { content: \"\\f4d2\"; }\n.bi-person-badge::before { content: \"\\f4d3\"; }\n.bi-person-bounding-box::before { content: \"\\f4d4\"; }\n.bi-person-check-fill::before { content: \"\\f4d5\"; }\n.bi-person-check::before { content: \"\\f4d6\"; }\n.bi-person-circle::before { content: \"\\f4d7\"; }\n.bi-person-dash-fill::before { content: \"\\f4d8\"; }\n.bi-person-dash::before { content: \"\\f4d9\"; }\n.bi-person-fill::before { content: \"\\f4da\"; }\n.bi-person-lines-fill::before { content: \"\\f4db\"; }\n.bi-person-plus-fill::before { content: \"\\f4dc\"; }\n.bi-person-plus::before { content: \"\\f4dd\"; }\n.bi-person-square::before { content: \"\\f4de\"; }\n.bi-person-x-fill::before { content: \"\\f4df\"; }\n.bi-person-x::before { content: \"\\f4e0\"; }\n.bi-person::before { content: \"\\f4e1\"; }\n.bi-phone-fill::before { content: \"\\f4e2\"; }\n.bi-phone-landscape-fill::before { content: \"\\f4e3\"; }\n.bi-phone-landscape::before { content: \"\\f4e4\"; }\n.bi-phone-vibrate-fill::before { content: \"\\f4e5\"; }\n.bi-phone-vibrate::before { content: \"\\f4e6\"; }\n.bi-phone::before { content: \"\\f4e7\"; }\n.bi-pie-chart-fill::before { content: \"\\f4e8\"; }\n.bi-pie-chart::before { content: \"\\f4e9\"; }\n.bi-pin-angle-fill::before { content: \"\\f4ea\"; }\n.bi-pin-angle::before { content: \"\\f4eb\"; }\n.bi-pin-fill::before { content: \"\\f4ec\"; }\n.bi-pin::before { content: \"\\f4ed\"; }\n.bi-pip-fill::before { content: \"\\f4ee\"; }\n.bi-pip::before { content: \"\\f4ef\"; }\n.bi-play-btn-fill::before { content: \"\\f4f0\"; }\n.bi-play-btn::before { content: \"\\f4f1\"; }\n.bi-play-circle-fill::before { content: \"\\f4f2\"; }\n.bi-play-circle::before { content: \"\\f4f3\"; }\n.bi-play-fill::before { content: \"\\f4f4\"; }\n.bi-play::before { content: \"\\f4f5\"; }\n.bi-plug-fill::before { content: \"\\f4f6\"; }\n.bi-plug::before { content: \"\\f4f7\"; }\n.bi-plus-circle-dotted::before { content: \"\\f4f8\"; }\n.bi-plus-circle-fill::before { content: \"\\f4f9\"; }\n.bi-plus-circle::before { content: \"\\f4fa\"; }\n.bi-plus-square-dotted::before { content: \"\\f4fb\"; }\n.bi-plus-square-fill::before { content: \"\\f4fc\"; }\n.bi-plus-square::before { content: \"\\f4fd\"; }\n.bi-plus::before { content: \"\\f4fe\"; }\n.bi-power::before { content: \"\\f4ff\"; }\n.bi-printer-fill::before { content: \"\\f500\"; }\n.bi-printer::before { content: \"\\f501\"; }\n.bi-puzzle-fill::before { content: \"\\f502\"; }\n.bi-puzzle::before { content: \"\\f503\"; }\n.bi-question-circle-fill::before { content: \"\\f504\"; }\n.bi-question-circle::before { content: \"\\f505\"; }\n.bi-question-diamond-fill::before { content: \"\\f506\"; }\n.bi-question-diamond::before { content: \"\\f507\"; }\n.bi-question-octagon-fill::before { content: \"\\f508\"; }\n.bi-question-octagon::before { content: \"\\f509\"; }\n.bi-question-square-fill::before { content: \"\\f50a\"; }\n.bi-question-square::before { content: \"\\f50b\"; }\n.bi-question::before { content: \"\\f50c\"; }\n.bi-rainbow::before { content: \"\\f50d\"; }\n.bi-receipt-cutoff::before { content: \"\\f50e\"; }\n.bi-receipt::before { content: \"\\f50f\"; }\n.bi-reception-0::before { content: \"\\f510\"; }\n.bi-reception-1::before { content: \"\\f511\"; }\n.bi-reception-2::before { content: \"\\f512\"; }\n.bi-reception-3::before { content: \"\\f513\"; }\n.bi-reception-4::before { content: \"\\f514\"; }\n.bi-record-btn-fill::before { content: \"\\f515\"; }\n.bi-record-btn::before { content: \"\\f516\"; }\n.bi-record-circle-fill::before { content: \"\\f517\"; }\n.bi-record-circle::before { content: \"\\f518\"; }\n.bi-record-fill::before { content: \"\\f519\"; }\n.bi-record::before { content: \"\\f51a\"; }\n.bi-record2-fill::before { content: \"\\f51b\"; }\n.bi-record2::before { content: \"\\f51c\"; }\n.bi-reply-all-fill::before { content: \"\\f51d\"; }\n.bi-reply-all::before { content: \"\\f51e\"; }\n.bi-reply-fill::before { content: \"\\f51f\"; }\n.bi-reply::before { content: \"\\f520\"; }\n.bi-rss-fill::before { content: \"\\f521\"; }\n.bi-rss::before { content: \"\\f522\"; }\n.bi-rulers::before { content: \"\\f523\"; }\n.bi-save-fill::before { content: \"\\f524\"; }\n.bi-save::before { content: \"\\f525\"; }\n.bi-save2-fill::before { content: \"\\f526\"; }\n.bi-save2::before { content: \"\\f527\"; }\n.bi-scissors::before { content: \"\\f528\"; }\n.bi-screwdriver::before { content: \"\\f529\"; }\n.bi-search::before { content: \"\\f52a\"; }\n.bi-segmented-nav::before { content: \"\\f52b\"; }\n.bi-server::before { content: \"\\f52c\"; }\n.bi-share-fill::before { content: \"\\f52d\"; }\n.bi-share::before { content: \"\\f52e\"; }\n.bi-shield-check::before { content: \"\\f52f\"; }\n.bi-shield-exclamation::before { content: \"\\f530\"; }\n.bi-shield-fill-check::before { content: \"\\f531\"; }\n.bi-shield-fill-exclamation::before { content: \"\\f532\"; }\n.bi-shield-fill-minus::before { content: \"\\f533\"; }\n.bi-shield-fill-plus::before { content: \"\\f534\"; }\n.bi-shield-fill-x::before { content: \"\\f535\"; }\n.bi-shield-fill::before { content: \"\\f536\"; }\n.bi-shield-lock-fill::before { content: \"\\f537\"; }\n.bi-shield-lock::before { content: \"\\f538\"; }\n.bi-shield-minus::before { content: \"\\f539\"; }\n.bi-shield-plus::before { content: \"\\f53a\"; }\n.bi-shield-shaded::before { content: \"\\f53b\"; }\n.bi-shield-slash-fill::before { content: \"\\f53c\"; }\n.bi-shield-slash::before { content: \"\\f53d\"; }\n.bi-shield-x::before { content: \"\\f53e\"; }\n.bi-shield::before { content: \"\\f53f\"; }\n.bi-shift-fill::before { content: \"\\f540\"; }\n.bi-shift::before { content: \"\\f541\"; }\n.bi-shop-window::before { content: \"\\f542\"; }\n.bi-shop::before { content: \"\\f543\"; }\n.bi-shuffle::before { content: \"\\f544\"; }\n.bi-signpost-2-fill::before { content: \"\\f545\"; }\n.bi-signpost-2::before { content: \"\\f546\"; }\n.bi-signpost-fill::before { content: \"\\f547\"; }\n.bi-signpost-split-fill::before { content: \"\\f548\"; }\n.bi-signpost-split::before { content: \"\\f549\"; }\n.bi-signpost::before { content: \"\\f54a\"; }\n.bi-sim-fill::before { content: \"\\f54b\"; }\n.bi-sim::before { content: \"\\f54c\"; }\n.bi-skip-backward-btn-fill::before { content: \"\\f54d\"; }\n.bi-skip-backward-btn::before { content: \"\\f54e\"; }\n.bi-skip-backward-circle-fill::before { content: \"\\f54f\"; }\n.bi-skip-backward-circle::before { content: \"\\f550\"; }\n.bi-skip-backward-fill::before { content: \"\\f551\"; }\n.bi-skip-backward::before { content: \"\\f552\"; }\n.bi-skip-end-btn-fill::before { content: \"\\f553\"; }\n.bi-skip-end-btn::before { content: \"\\f554\"; }\n.bi-skip-end-circle-fill::before { content: \"\\f555\"; }\n.bi-skip-end-circle::before { content: \"\\f556\"; }\n.bi-skip-end-fill::before { content: \"\\f557\"; }\n.bi-skip-end::before { content: \"\\f558\"; }\n.bi-skip-forward-btn-fill::before { content: \"\\f559\"; }\n.bi-skip-forward-btn::before { content: \"\\f55a\"; }\n.bi-skip-forward-circle-fill::before { content: \"\\f55b\"; }\n.bi-skip-forward-circle::before { content: \"\\f55c\"; }\n.bi-skip-forward-fill::before { content: \"\\f55d\"; }\n.bi-skip-forward::before { content: \"\\f55e\"; }\n.bi-skip-start-btn-fill::before { content: \"\\f55f\"; }\n.bi-skip-start-btn::before { content: \"\\f560\"; }\n.bi-skip-start-circle-fill::before { content: \"\\f561\"; }\n.bi-skip-start-circle::before { content: \"\\f562\"; }\n.bi-skip-start-fill::before { content: \"\\f563\"; }\n.bi-skip-start::before { content: \"\\f564\"; }\n.bi-slack::before { content: \"\\f565\"; }\n.bi-slash-circle-fill::before { content: \"\\f566\"; }\n.bi-slash-circle::before { content: \"\\f567\"; }\n.bi-slash-square-fill::before { content: \"\\f568\"; }\n.bi-slash-square::before { content: \"\\f569\"; }\n.bi-slash::before { content: \"\\f56a\"; }\n.bi-sliders::before { content: \"\\f56b\"; }\n.bi-smartwatch::before { content: \"\\f56c\"; }\n.bi-snow::before { content: \"\\f56d\"; }\n.bi-snow2::before { content: \"\\f56e\"; }\n.bi-snow3::before { content: \"\\f56f\"; }\n.bi-sort-alpha-down-alt::before { content: \"\\f570\"; }\n.bi-sort-alpha-down::before { content: \"\\f571\"; }\n.bi-sort-alpha-up-alt::before { content: \"\\f572\"; }\n.bi-sort-alpha-up::before { content: \"\\f573\"; }\n.bi-sort-down-alt::before { content: \"\\f574\"; }\n.bi-sort-down::before { content: \"\\f575\"; }\n.bi-sort-numeric-down-alt::before { content: \"\\f576\"; }\n.bi-sort-numeric-down::before { content: \"\\f577\"; }\n.bi-sort-numeric-up-alt::before { content: \"\\f578\"; }\n.bi-sort-numeric-up::before { content: \"\\f579\"; }\n.bi-sort-up-alt::before { content: \"\\f57a\"; }\n.bi-sort-up::before { content: \"\\f57b\"; }\n.bi-soundwave::before { content: \"\\f57c\"; }\n.bi-speaker-fill::before { content: \"\\f57d\"; }\n.bi-speaker::before { content: \"\\f57e\"; }\n.bi-speedometer::before { content: \"\\f57f\"; }\n.bi-speedometer2::before { content: \"\\f580\"; }\n.bi-spellcheck::before { content: \"\\f581\"; }\n.bi-square-fill::before { content: \"\\f582\"; }\n.bi-square-half::before { content: \"\\f583\"; }\n.bi-square::before { content: \"\\f584\"; }\n.bi-stack::before { content: \"\\f585\"; }\n.bi-star-fill::before { content: \"\\f586\"; }\n.bi-star-half::before { content: \"\\f587\"; }\n.bi-star::before { content: \"\\f588\"; }\n.bi-stars::before { content: \"\\f589\"; }\n.bi-stickies-fill::before { content: \"\\f58a\"; }\n.bi-stickies::before { content: \"\\f58b\"; }\n.bi-sticky-fill::before { content: \"\\f58c\"; }\n.bi-sticky::before { content: \"\\f58d\"; }\n.bi-stop-btn-fill::before { content: \"\\f58e\"; }\n.bi-stop-btn::before { content: \"\\f58f\"; }\n.bi-stop-circle-fill::before { content: \"\\f590\"; }\n.bi-stop-circle::before { content: \"\\f591\"; }\n.bi-stop-fill::before { content: \"\\f592\"; }\n.bi-stop::before { content: \"\\f593\"; }\n.bi-stoplights-fill::before { content: \"\\f594\"; }\n.bi-stoplights::before { content: \"\\f595\"; }\n.bi-stopwatch-fill::before { content: \"\\f596\"; }\n.bi-stopwatch::before { content: \"\\f597\"; }\n.bi-subtract::before { content: \"\\f598\"; }\n.bi-suit-club-fill::before { content: \"\\f599\"; }\n.bi-suit-club::before { content: \"\\f59a\"; }\n.bi-suit-diamond-fill::before { content: \"\\f59b\"; }\n.bi-suit-diamond::before { content: \"\\f59c\"; }\n.bi-suit-heart-fill::before { content: \"\\f59d\"; }\n.bi-suit-heart::before { content: \"\\f59e\"; }\n.bi-suit-spade-fill::before { content: \"\\f59f\"; }\n.bi-suit-spade::before { content: \"\\f5a0\"; }\n.bi-sun-fill::before { content: \"\\f5a1\"; }\n.bi-sun::before { content: \"\\f5a2\"; }\n.bi-sunglasses::before { content: \"\\f5a3\"; }\n.bi-sunrise-fill::before { content: \"\\f5a4\"; }\n.bi-sunrise::before { content: \"\\f5a5\"; }\n.bi-sunset-fill::before { content: \"\\f5a6\"; }\n.bi-sunset::before { content: \"\\f5a7\"; }\n.bi-symmetry-horizontal::before { content: \"\\f5a8\"; }\n.bi-symmetry-vertical::before { content: \"\\f5a9\"; }\n.bi-table::before { content: \"\\f5aa\"; }\n.bi-tablet-fill::before { content: \"\\f5ab\"; }\n.bi-tablet-landscape-fill::before { content: \"\\f5ac\"; }\n.bi-tablet-landscape::before { content: \"\\f5ad\"; }\n.bi-tablet::before { content: \"\\f5ae\"; }\n.bi-tag-fill::before { content: \"\\f5af\"; }\n.bi-tag::before { content: \"\\f5b0\"; }\n.bi-tags-fill::before { content: \"\\f5b1\"; }\n.bi-tags::before { content: \"\\f5b2\"; }\n.bi-telegram::before { content: \"\\f5b3\"; }\n.bi-telephone-fill::before { content: \"\\f5b4\"; }\n.bi-telephone-forward-fill::before { content: \"\\f5b5\"; }\n.bi-telephone-forward::before { content: \"\\f5b6\"; }\n.bi-telephone-inbound-fill::before { content: \"\\f5b7\"; }\n.bi-telephone-inbound::before { content: \"\\f5b8\"; }\n.bi-telephone-minus-fill::before { content: \"\\f5b9\"; }\n.bi-telephone-minus::before { content: \"\\f5ba\"; }\n.bi-telephone-outbound-fill::before { content: \"\\f5bb\"; }\n.bi-telephone-outbound::before { content: \"\\f5bc\"; }\n.bi-telephone-plus-fill::before { content: \"\\f5bd\"; }\n.bi-telephone-plus::before { content: \"\\f5be\"; }\n.bi-telephone-x-fill::before { content: \"\\f5bf\"; }\n.bi-telephone-x::before { content: \"\\f5c0\"; }\n.bi-telephone::before { content: \"\\f5c1\"; }\n.bi-terminal-fill::before { content: \"\\f5c2\"; }\n.bi-terminal::before { content: \"\\f5c3\"; }\n.bi-text-center::before { content: \"\\f5c4\"; }\n.bi-text-indent-left::before { content: \"\\f5c5\"; }\n.bi-text-indent-right::before { content: \"\\f5c6\"; }\n.bi-text-left::before { content: \"\\f5c7\"; }\n.bi-text-paragraph::before { content: \"\\f5c8\"; }\n.bi-text-right::before { content: \"\\f5c9\"; }\n.bi-textarea-resize::before { content: \"\\f5ca\"; }\n.bi-textarea-t::before { content: \"\\f5cb\"; }\n.bi-textarea::before { content: \"\\f5cc\"; }\n.bi-thermometer-half::before { content: \"\\f5cd\"; }\n.bi-thermometer-high::before { content: \"\\f5ce\"; }\n.bi-thermometer-low::before { content: \"\\f5cf\"; }\n.bi-thermometer-snow::before { content: \"\\f5d0\"; }\n.bi-thermometer-sun::before { content: \"\\f5d1\"; }\n.bi-thermometer::before { content: \"\\f5d2\"; }\n.bi-three-dots-vertical::before { content: \"\\f5d3\"; }\n.bi-three-dots::before { content: \"\\f5d4\"; }\n.bi-toggle-off::before { content: \"\\f5d5\"; }\n.bi-toggle-on::before { content: \"\\f5d6\"; }\n.bi-toggle2-off::before { content: \"\\f5d7\"; }\n.bi-toggle2-on::before { content: \"\\f5d8\"; }\n.bi-toggles::before { content: \"\\f5d9\"; }\n.bi-toggles2::before { content: \"\\f5da\"; }\n.bi-tools::before { content: \"\\f5db\"; }\n.bi-tornado::before { content: \"\\f5dc\"; }\n.bi-trash-fill::before { content: \"\\f5dd\"; }\n.bi-trash::before { content: \"\\f5de\"; }\n.bi-trash2-fill::before { content: \"\\f5df\"; }\n.bi-trash2::before { content: \"\\f5e0\"; }\n.bi-tree-fill::before { content: \"\\f5e1\"; }\n.bi-tree::before { content: \"\\f5e2\"; }\n.bi-triangle-fill::before { content: \"\\f5e3\"; }\n.bi-triangle-half::before { content: \"\\f5e4\"; }\n.bi-triangle::before { content: \"\\f5e5\"; }\n.bi-trophy-fill::before { content: \"\\f5e6\"; }\n.bi-trophy::before { content: \"\\f5e7\"; }\n.bi-tropical-storm::before { content: \"\\f5e8\"; }\n.bi-truck-flatbed::before { content: \"\\f5e9\"; }\n.bi-truck::before { content: \"\\f5ea\"; }\n.bi-tsunami::before { content: \"\\f5eb\"; }\n.bi-tv-fill::before { content: \"\\f5ec\"; }\n.bi-tv::before { content: \"\\f5ed\"; }\n.bi-twitch::before { content: \"\\f5ee\"; }\n.bi-twitter::before { content: \"\\f5ef\"; }\n.bi-type-bold::before { content: \"\\f5f0\"; }\n.bi-type-h1::before { content: \"\\f5f1\"; }\n.bi-type-h2::before { content: \"\\f5f2\"; }\n.bi-type-h3::before { content: \"\\f5f3\"; }\n.bi-type-italic::before { content: \"\\f5f4\"; }\n.bi-type-strikethrough::before { content: \"\\f5f5\"; }\n.bi-type-underline::before { content: \"\\f5f6\"; }\n.bi-type::before { content: \"\\f5f7\"; }\n.bi-ui-checks-grid::before { content: \"\\f5f8\"; }\n.bi-ui-checks::before { content: \"\\f5f9\"; }\n.bi-ui-radios-grid::before { content: \"\\f5fa\"; }\n.bi-ui-radios::before { content: \"\\f5fb\"; }\n.bi-umbrella-fill::before { content: \"\\f5fc\"; }\n.bi-umbrella::before { content: \"\\f5fd\"; }\n.bi-union::before { content: \"\\f5fe\"; }\n.bi-unlock-fill::before { content: \"\\f5ff\"; }\n.bi-unlock::before { content: \"\\f600\"; }\n.bi-upc-scan::before { content: \"\\f601\"; }\n.bi-upc::before { content: \"\\f602\"; }\n.bi-upload::before { content: \"\\f603\"; }\n.bi-vector-pen::before { content: \"\\f604\"; }\n.bi-view-list::before { content: \"\\f605\"; }\n.bi-view-stacked::before { content: \"\\f606\"; }\n.bi-vinyl-fill::before { content: \"\\f607\"; }\n.bi-vinyl::before { content: \"\\f608\"; }\n.bi-voicemail::before { content: \"\\f609\"; }\n.bi-volume-down-fill::before { content: \"\\f60a\"; }\n.bi-volume-down::before { content: \"\\f60b\"; }\n.bi-volume-mute-fill::before { content: \"\\f60c\"; }\n.bi-volume-mute::before { content: \"\\f60d\"; }\n.bi-volume-off-fill::before { content: \"\\f60e\"; }\n.bi-volume-off::before { content: \"\\f60f\"; }\n.bi-volume-up-fill::before { content: \"\\f610\"; }\n.bi-volume-up::before { content: \"\\f611\"; }\n.bi-vr::before { content: \"\\f612\"; }\n.bi-wallet-fill::before { content: \"\\f613\"; }\n.bi-wallet::before { content: \"\\f614\"; }\n.bi-wallet2::before { content: \"\\f615\"; }\n.bi-watch::before { content: \"\\f616\"; }\n.bi-water::before { content: \"\\f617\"; }\n.bi-whatsapp::before { content: \"\\f618\"; }\n.bi-wifi-1::before { content: \"\\f619\"; }\n.bi-wifi-2::before { content: \"\\f61a\"; }\n.bi-wifi-off::before { content: \"\\f61b\"; }\n.bi-wifi::before { content: \"\\f61c\"; }\n.bi-wind::before { content: \"\\f61d\"; }\n.bi-window-dock::before { content: \"\\f61e\"; }\n.bi-window-sidebar::before { content: \"\\f61f\"; }\n.bi-window::before { content: \"\\f620\"; }\n.bi-wrench::before { content: \"\\f621\"; }\n.bi-x-circle-fill::before { content: \"\\f622\"; }\n.bi-x-circle::before { content: \"\\f623\"; }\n.bi-x-diamond-fill::before { content: \"\\f624\"; }\n.bi-x-diamond::before { content: \"\\f625\"; }\n.bi-x-octagon-fill::before { content: \"\\f626\"; }\n.bi-x-octagon::before { content: \"\\f627\"; }\n.bi-x-square-fill::before { content: \"\\f628\"; }\n.bi-x-square::before { content: \"\\f629\"; }\n.bi-x::before { content: \"\\f62a\"; }\n.bi-youtube::before { content: \"\\f62b\"; }\n.bi-zoom-in::before { content: \"\\f62c\"; }\n.bi-zoom-out::before { content: \"\\f62d\"; }\n.bi-bank::before { content: \"\\f62e\"; }\n.bi-bank2::before { content: \"\\f62f\"; }\n.bi-bell-slash-fill::before { content: \"\\f630\"; }\n.bi-bell-slash::before { content: \"\\f631\"; }\n.bi-cash-coin::before { content: \"\\f632\"; }\n.bi-check-lg::before { content: \"\\f633\"; }\n.bi-coin::before { content: \"\\f634\"; }\n.bi-currency-bitcoin::before { content: \"\\f635\"; }\n.bi-currency-dollar::before { content: \"\\f636\"; }\n.bi-currency-euro::before { content: \"\\f637\"; }\n.bi-currency-exchange::before { content: \"\\f638\"; }\n.bi-currency-pound::before { content: \"\\f639\"; }\n.bi-currency-yen::before { content: \"\\f63a\"; }\n.bi-dash-lg::before { content: \"\\f63b\"; }\n.bi-exclamation-lg::before { content: \"\\f63c\"; }\n.bi-file-earmark-pdf-fill::before { content: \"\\f63d\"; }\n.bi-file-earmark-pdf::before { content: \"\\f63e\"; }\n.bi-file-pdf-fill::before { content: \"\\f63f\"; }\n.bi-file-pdf::before { content: \"\\f640\"; }\n.bi-gender-ambiguous::before { content: \"\\f641\"; }\n.bi-gender-female::before { content: \"\\f642\"; }\n.bi-gender-male::before { content: \"\\f643\"; }\n.bi-gender-trans::before { content: \"\\f644\"; }\n.bi-headset-vr::before { content: \"\\f645\"; }\n.bi-info-lg::before { content: \"\\f646\"; }\n.bi-mastodon::before { content: \"\\f647\"; }\n.bi-messenger::before { content: \"\\f648\"; }\n.bi-piggy-bank-fill::before { content: \"\\f649\"; }\n.bi-piggy-bank::before { content: \"\\f64a\"; }\n.bi-pin-map-fill::before { content: \"\\f64b\"; }\n.bi-pin-map::before { content: \"\\f64c\"; }\n.bi-plus-lg::before { content: \"\\f64d\"; }\n.bi-question-lg::before { content: \"\\f64e\"; }\n.bi-recycle::before { content: \"\\f64f\"; }\n.bi-reddit::before { content: \"\\f650\"; }\n.bi-safe-fill::before { content: \"\\f651\"; }\n.bi-safe2-fill::before { content: \"\\f652\"; }\n.bi-safe2::before { content: \"\\f653\"; }\n.bi-sd-card-fill::before { content: \"\\f654\"; }\n.bi-sd-card::before { content: \"\\f655\"; }\n.bi-skype::before { content: \"\\f656\"; }\n.bi-slash-lg::before { content: \"\\f657\"; }\n.bi-translate::before { content: \"\\f658\"; }\n.bi-x-lg::before { content: \"\\f659\"; }\n.bi-safe::before { content: \"\\f65a\"; }\n.bi-apple::before { content: \"\\f65b\"; }\n.bi-microsoft::before { content: \"\\f65d\"; }\n.bi-windows::before { content: \"\\f65e\"; }\n.bi-behance::before { content: \"\\f65c\"; }\n.bi-dribbble::before { content: \"\\f65f\"; }\n.bi-line::before { content: \"\\f660\"; }\n.bi-medium::before { content: \"\\f661\"; }\n.bi-paypal::before { content: \"\\f662\"; }\n.bi-pinterest::before { content: \"\\f663\"; }\n.bi-signal::before { content: \"\\f664\"; }\n.bi-snapchat::before { content: \"\\f665\"; }\n.bi-spotify::before { content: \"\\f666\"; }\n.bi-stack-overflow::before { content: \"\\f667\"; }\n.bi-strava::before { content: \"\\f668\"; }\n.bi-wordpress::before { content: \"\\f669\"; }\n.bi-vimeo::before { content: \"\\f66a\"; }\n.bi-activity::before { content: \"\\f66b\"; }\n.bi-easel2-fill::before { content: \"\\f66c\"; }\n.bi-easel2::before { content: \"\\f66d\"; }\n.bi-easel3-fill::before { content: \"\\f66e\"; }\n.bi-easel3::before { content: \"\\f66f\"; }\n.bi-fan::before { content: \"\\f670\"; }\n.bi-fingerprint::before { content: \"\\f671\"; }\n.bi-graph-down-arrow::before { content: \"\\f672\"; }\n.bi-graph-up-arrow::before { content: \"\\f673\"; }\n.bi-hypnotize::before { content: \"\\f674\"; }\n.bi-magic::before { content: \"\\f675\"; }\n.bi-person-rolodex::before { content: \"\\f676\"; }\n.bi-person-video::before { content: \"\\f677\"; }\n.bi-person-video2::before { content: \"\\f678\"; }\n.bi-person-video3::before { content: \"\\f679\"; }\n.bi-person-workspace::before { content: \"\\f67a\"; }\n.bi-radioactive::before { content: \"\\f67b\"; }\n.bi-webcam-fill::before { content: \"\\f67c\"; }\n.bi-webcam::before { content: \"\\f67d\"; }\n.bi-yin-yang::before { content: \"\\f67e\"; }\n.bi-bandaid-fill::before { content: \"\\f680\"; }\n.bi-bandaid::before { content: \"\\f681\"; }\n.bi-bluetooth::before { content: \"\\f682\"; }\n.bi-body-text::before { content: \"\\f683\"; }\n.bi-boombox::before { content: \"\\f684\"; }\n.bi-boxes::before { content: \"\\f685\"; }\n.bi-dpad-fill::before { content: \"\\f686\"; }\n.bi-dpad::before { content: \"\\f687\"; }\n.bi-ear-fill::before { content: \"\\f688\"; }\n.bi-ear::before { content: \"\\f689\"; }\n.bi-envelope-check-1::before { content: \"\\f68a\"; }\n.bi-envelope-check-fill::before { content: \"\\f68b\"; }\n.bi-envelope-check::before { content: \"\\f68c\"; }\n.bi-envelope-dash-1::before { content: \"\\f68d\"; }\n.bi-envelope-dash-fill::before { content: \"\\f68e\"; }\n.bi-envelope-dash::before { content: \"\\f68f\"; }\n.bi-envelope-exclamation-1::before { content: \"\\f690\"; }\n.bi-envelope-exclamation-fill::before { content: \"\\f691\"; }\n.bi-envelope-exclamation::before { content: \"\\f692\"; }\n.bi-envelope-plus-fill::before { content: \"\\f693\"; }\n.bi-envelope-plus::before { content: \"\\f694\"; }\n.bi-envelope-slash-1::before { content: \"\\f695\"; }\n.bi-envelope-slash-fill::before { content: \"\\f696\"; }\n.bi-envelope-slash::before { content: \"\\f697\"; }\n.bi-envelope-x-1::before { content: \"\\f698\"; }\n.bi-envelope-x-fill::before { content: \"\\f699\"; }\n.bi-envelope-x::before { content: \"\\f69a\"; }\n.bi-explicit-fill::before { content: \"\\f69b\"; }\n.bi-explicit::before { content: \"\\f69c\"; }\n.bi-git::before { content: \"\\f69d\"; }\n.bi-infinity::before { content: \"\\f69e\"; }\n.bi-list-columns-reverse::before { content: \"\\f69f\"; }\n.bi-list-columns::before { content: \"\\f6a0\"; }\n.bi-meta::before { content: \"\\f6a1\"; }\n.bi-mortorboard-fill::before { content: \"\\f6a2\"; }\n.bi-mortorboard::before { content: \"\\f6a3\"; }\n.bi-nintendo-switch::before { content: \"\\f6a4\"; }\n.bi-pc-display-horizontal::before { content: \"\\f6a5\"; }\n.bi-pc-display::before { content: \"\\f6a6\"; }\n.bi-pc-horizontal::before { content: \"\\f6a7\"; }\n.bi-pc::before { content: \"\\f6a8\"; }\n.bi-playstation::before { content: \"\\f6a9\"; }\n.bi-plus-slash-minus::before { content: \"\\f6aa\"; }\n.bi-projector-fill::before { content: \"\\f6ab\"; }\n.bi-projector::before { content: \"\\f6ac\"; }\n.bi-qr-code-scan::before { content: \"\\f6ad\"; }\n.bi-qr-code::before { content: \"\\f6ae\"; }\n.bi-quora::before { content: \"\\f6af\"; }\n.bi-quote::before { content: \"\\f6b0\"; }\n.bi-robot::before { content: \"\\f6b1\"; }\n.bi-send-check-fill::before { content: \"\\f6b2\"; }\n.bi-send-check::before { content: \"\\f6b3\"; }\n.bi-send-dash-fill::before { content: \"\\f6b4\"; }\n.bi-send-dash::before { content: \"\\f6b5\"; }\n.bi-send-exclamation-1::before { content: \"\\f6b6\"; }\n.bi-send-exclamation-fill::before { content: \"\\f6b7\"; }\n.bi-send-exclamation::before { content: \"\\f6b8\"; }\n.bi-send-fill::before { content: \"\\f6b9\"; }\n.bi-send-plus-fill::before { content: \"\\f6ba\"; }\n.bi-send-plus::before { content: \"\\f6bb\"; }\n.bi-send-slash-fill::before { content: \"\\f6bc\"; }\n.bi-send-slash::before { content: \"\\f6bd\"; }\n.bi-send-x-fill::before { content: \"\\f6be\"; }\n.bi-send-x::before { content: \"\\f6bf\"; }\n.bi-send::before { content: \"\\f6c0\"; }\n.bi-steam::before { content: \"\\f6c1\"; }\n.bi-terminal-dash-1::before { content: \"\\f6c2\"; }\n.bi-terminal-dash::before { content: \"\\f6c3\"; }\n.bi-terminal-plus::before { content: \"\\f6c4\"; }\n.bi-terminal-split::before { content: \"\\f6c5\"; }\n.bi-ticket-detailed-fill::before { content: \"\\f6c6\"; }\n.bi-ticket-detailed::before { content: \"\\f6c7\"; }\n.bi-ticket-fill::before { content: \"\\f6c8\"; }\n.bi-ticket-perforated-fill::before { content: \"\\f6c9\"; }\n.bi-ticket-perforated::before { content: \"\\f6ca\"; }\n.bi-ticket::before { content: \"\\f6cb\"; }\n.bi-tiktok::before { content: \"\\f6cc\"; }\n.bi-window-dash::before { content: \"\\f6cd\"; }\n.bi-window-desktop::before { content: \"\\f6ce\"; }\n.bi-window-fullscreen::before { content: \"\\f6cf\"; }\n.bi-window-plus::before { content: \"\\f6d0\"; }\n.bi-window-split::before { content: \"\\f6d1\"; }\n.bi-window-stack::before { content: \"\\f6d2\"; }\n.bi-window-x::before { content: \"\\f6d3\"; }\n.bi-xbox::before { content: \"\\f6d4\"; }\n.bi-ethernet::before { content: \"\\f6d5\"; }\n.bi-hdmi-fill::before { content: \"\\f6d6\"; }\n.bi-hdmi::before { content: \"\\f6d7\"; }\n.bi-usb-c-fill::before { content: \"\\f6d8\"; }\n.bi-usb-c::before { content: \"\\f6d9\"; }\n.bi-usb-fill::before { content: \"\\f6da\"; }\n.bi-usb-plug-fill::before { content: \"\\f6db\"; }\n.bi-usb-plug::before { content: \"\\f6dc\"; }\n.bi-usb-symbol::before { content: \"\\f6dd\"; }\n.bi-usb::before { content: \"\\f6de\"; }\n.bi-boombox-fill::before { content: \"\\f6df\"; }\n.bi-displayport-1::before { content: \"\\f6e0\"; }\n.bi-displayport::before { content: \"\\f6e1\"; }\n.bi-gpu-card::before { content: \"\\f6e2\"; }\n.bi-memory::before { content: \"\\f6e3\"; }\n.bi-modem-fill::before { content: \"\\f6e4\"; }\n.bi-modem::before { content: \"\\f6e5\"; }\n.bi-motherboard-fill::before { content: \"\\f6e6\"; }\n.bi-motherboard::before { content: \"\\f6e7\"; }\n.bi-optical-audio-fill::before { content: \"\\f6e8\"; }\n.bi-optical-audio::before { content: \"\\f6e9\"; }\n.bi-pci-card::before { content: \"\\f6ea\"; }\n.bi-router-fill::before { content: \"\\f6eb\"; }\n.bi-router::before { content: \"\\f6ec\"; }\n.bi-ssd-fill::before { content: \"\\f6ed\"; }\n.bi-ssd::before { content: \"\\f6ee\"; }\n.bi-thunderbolt-fill::before { content: \"\\f6ef\"; }\n.bi-thunderbolt::before { content: \"\\f6f0\"; }\n.bi-usb-drive-fill::before { content: \"\\f6f1\"; }\n.bi-usb-drive::before { content: \"\\f6f2\"; }\n.bi-usb-micro-fill::before { content: \"\\f6f3\"; }\n.bi-usb-micro::before { content: \"\\f6f4\"; }\n.bi-usb-mini-fill::before { content: \"\\f6f5\"; }\n.bi-usb-mini::before { content: \"\\f6f6\"; }\n.bi-cloud-haze2::before { content: \"\\f6f7\"; }\n.bi-device-hdd-fill::before { content: \"\\f6f8\"; }\n.bi-device-hdd::before { content: \"\\f6f9\"; }\n.bi-device-ssd-fill::before { content: \"\\f6fa\"; }\n.bi-device-ssd::before { content: \"\\f6fb\"; }\n.bi-displayport-fill::before { content: \"\\f6fc\"; }\n.bi-mortarboard-fill::before { content: \"\\f6fd\"; }\n.bi-mortarboard::before { content: \"\\f6fe\"; }\n.bi-terminal-x::before { content: \"\\f6ff\"; }\n.bi-arrow-through-heart-fill::before { content: \"\\f700\"; }\n.bi-arrow-through-heart::before { content: \"\\f701\"; }\n.bi-badge-sd-fill::before { content: \"\\f702\"; }\n.bi-badge-sd::before { content: \"\\f703\"; }\n.bi-bag-heart-fill::before { content: \"\\f704\"; }\n.bi-bag-heart::before { content: \"\\f705\"; }\n.bi-balloon-fill::before { content: \"\\f706\"; }\n.bi-balloon-heart-fill::before { content: \"\\f707\"; }\n.bi-balloon-heart::before { content: \"\\f708\"; }\n.bi-balloon::before { content: \"\\f709\"; }\n.bi-box2-fill::before { content: \"\\f70a\"; }\n.bi-box2-heart-fill::before { content: \"\\f70b\"; }\n.bi-box2-heart::before { content: \"\\f70c\"; }\n.bi-box2::before { content: \"\\f70d\"; }\n.bi-braces-asterisk::before { content: \"\\f70e\"; }\n.bi-calendar-heart-fill::before { content: \"\\f70f\"; }\n.bi-calendar-heart::before { content: \"\\f710\"; }\n.bi-calendar2-heart-fill::before { content: \"\\f711\"; }\n.bi-calendar2-heart::before { content: \"\\f712\"; }\n.bi-chat-heart-fill::before { content: \"\\f713\"; }\n.bi-chat-heart::before { content: \"\\f714\"; }\n.bi-chat-left-heart-fill::before { content: \"\\f715\"; }\n.bi-chat-left-heart::before { content: \"\\f716\"; }\n.bi-chat-right-heart-fill::before { content: \"\\f717\"; }\n.bi-chat-right-heart::before { content: \"\\f718\"; }\n.bi-chat-square-heart-fill::before { content: \"\\f719\"; }\n.bi-chat-square-heart::before { content: \"\\f71a\"; }\n.bi-clipboard-check-fill::before { content: \"\\f71b\"; }\n.bi-clipboard-data-fill::before { content: \"\\f71c\"; }\n.bi-clipboard-fill::before { content: \"\\f71d\"; }\n.bi-clipboard-heart-fill::before { content: \"\\f71e\"; }\n.bi-clipboard-heart::before { content: \"\\f71f\"; }\n.bi-clipboard-minus-fill::before { content: \"\\f720\"; }\n.bi-clipboard-plus-fill::before { content: \"\\f721\"; }\n.bi-clipboard-pulse::before { content: \"\\f722\"; }\n.bi-clipboard-x-fill::before { content: \"\\f723\"; }\n.bi-clipboard2-check-fill::before { content: \"\\f724\"; }\n.bi-clipboard2-check::before { content: \"\\f725\"; }\n.bi-clipboard2-data-fill::before { content: \"\\f726\"; }\n.bi-clipboard2-data::before { content: \"\\f727\"; }\n.bi-clipboard2-fill::before { content: \"\\f728\"; }\n.bi-clipboard2-heart-fill::before { content: \"\\f729\"; }\n.bi-clipboard2-heart::before { content: \"\\f72a\"; }\n.bi-clipboard2-minus-fill::before { content: \"\\f72b\"; }\n.bi-clipboard2-minus::before { content: \"\\f72c\"; }\n.bi-clipboard2-plus-fill::before { content: \"\\f72d\"; }\n.bi-clipboard2-plus::before { content: \"\\f72e\"; }\n.bi-clipboard2-pulse-fill::before { content: \"\\f72f\"; }\n.bi-clipboard2-pulse::before { content: \"\\f730\"; }\n.bi-clipboard2-x-fill::before { content: \"\\f731\"; }\n.bi-clipboard2-x::before { content: \"\\f732\"; }\n.bi-clipboard2::before { content: \"\\f733\"; }\n.bi-emoji-kiss-fill::before { content: \"\\f734\"; }\n.bi-emoji-kiss::before { content: \"\\f735\"; }\n.bi-envelope-heart-fill::before { content: \"\\f736\"; }\n.bi-envelope-heart::before { content: \"\\f737\"; }\n.bi-envelope-open-heart-fill::before { content: \"\\f738\"; }\n.bi-envelope-open-heart::before { content: \"\\f739\"; }\n.bi-envelope-paper-fill::before { content: \"\\f73a\"; }\n.bi-envelope-paper-heart-fill::before { content: \"\\f73b\"; }\n.bi-envelope-paper-heart::before { content: \"\\f73c\"; }\n.bi-envelope-paper::before { content: \"\\f73d\"; }\n.bi-filetype-aac::before { content: \"\\f73e\"; }\n.bi-filetype-ai::before { content: \"\\f73f\"; }\n.bi-filetype-bmp::before { content: \"\\f740\"; }\n.bi-filetype-cs::before { content: \"\\f741\"; }\n.bi-filetype-css::before { content: \"\\f742\"; }\n.bi-filetype-csv::before { content: \"\\f743\"; }\n.bi-filetype-doc::before { content: \"\\f744\"; }\n.bi-filetype-docx::before { content: \"\\f745\"; }\n.bi-filetype-exe::before { content: \"\\f746\"; }\n.bi-filetype-gif::before { content: \"\\f747\"; }\n.bi-filetype-heic::before { content: \"\\f748\"; }\n.bi-filetype-html::before { content: \"\\f749\"; }\n.bi-filetype-java::before { content: \"\\f74a\"; }\n.bi-filetype-jpg::before { content: \"\\f74b\"; }\n.bi-filetype-js::before { content: \"\\f74c\"; }\n.bi-filetype-jsx::before { content: \"\\f74d\"; }\n.bi-filetype-key::before { content: \"\\f74e\"; }\n.bi-filetype-m4p::before { content: \"\\f74f\"; }\n.bi-filetype-md::before { content: \"\\f750\"; }\n.bi-filetype-mdx::before { content: \"\\f751\"; }\n.bi-filetype-mov::before { content: \"\\f752\"; }\n.bi-filetype-mp3::before { content: \"\\f753\"; }\n.bi-filetype-mp4::before { content: \"\\f754\"; }\n.bi-filetype-otf::before { content: \"\\f755\"; }\n.bi-filetype-pdf::before { content: \"\\f756\"; }\n.bi-filetype-php::before { content: \"\\f757\"; }\n.bi-filetype-png::before { content: \"\\f758\"; }\n.bi-filetype-ppt-1::before { content: \"\\f759\"; }\n.bi-filetype-ppt::before { content: \"\\f75a\"; }\n.bi-filetype-psd::before { content: \"\\f75b\"; }\n.bi-filetype-py::before { content: \"\\f75c\"; }\n.bi-filetype-raw::before { content: \"\\f75d\"; }\n.bi-filetype-rb::before { content: \"\\f75e\"; }\n.bi-filetype-sass::before { content: \"\\f75f\"; }\n.bi-filetype-scss::before { content: \"\\f760\"; }\n.bi-filetype-sh::before { content: \"\\f761\"; }\n.bi-filetype-svg::before { content: \"\\f762\"; }\n.bi-filetype-tiff::before { content: \"\\f763\"; }\n.bi-filetype-tsx::before { content: \"\\f764\"; }\n.bi-filetype-ttf::before { content: \"\\f765\"; }\n.bi-filetype-txt::before { content: \"\\f766\"; }\n.bi-filetype-wav::before { content: \"\\f767\"; }\n.bi-filetype-woff::before { content: \"\\f768\"; }\n.bi-filetype-xls-1::before { content: \"\\f769\"; }\n.bi-filetype-xls::before { content: \"\\f76a\"; }\n.bi-filetype-xml::before { content: \"\\f76b\"; }\n.bi-filetype-yml::before { content: \"\\f76c\"; }\n.bi-heart-arrow::before { content: \"\\f76d\"; }\n.bi-heart-pulse-fill::before { content: \"\\f76e\"; }\n.bi-heart-pulse::before { content: \"\\f76f\"; }\n.bi-heartbreak-fill::before { content: \"\\f770\"; }\n.bi-heartbreak::before { content: \"\\f771\"; }\n.bi-hearts::before { content: \"\\f772\"; }\n.bi-hospital-fill::before { content: \"\\f773\"; }\n.bi-hospital::before { content: \"\\f774\"; }\n.bi-house-heart-fill::before { content: \"\\f775\"; }\n.bi-house-heart::before { content: \"\\f776\"; }\n.bi-incognito::before { content: \"\\f777\"; }\n.bi-magnet-fill::before { content: \"\\f778\"; }\n.bi-magnet::before { content: \"\\f779\"; }\n.bi-person-heart::before { content: \"\\f77a\"; }\n.bi-person-hearts::before { content: \"\\f77b\"; }\n.bi-phone-flip::before { content: \"\\f77c\"; }\n.bi-plugin::before { content: \"\\f77d\"; }\n.bi-postage-fill::before { content: \"\\f77e\"; }\n.bi-postage-heart-fill::before { content: \"\\f77f\"; }\n.bi-postage-heart::before { content: \"\\f780\"; }\n.bi-postage::before { content: \"\\f781\"; }\n.bi-postcard-fill::before { content: \"\\f782\"; }\n.bi-postcard-heart-fill::before { content: \"\\f783\"; }\n.bi-postcard-heart::before { content: \"\\f784\"; }\n.bi-postcard::before { content: \"\\f785\"; }\n.bi-search-heart-fill::before { content: \"\\f786\"; }\n.bi-search-heart::before { content: \"\\f787\"; }\n.bi-sliders2-vertical::before { content: \"\\f788\"; }\n.bi-sliders2::before { content: \"\\f789\"; }\n.bi-trash3-fill::before { content: \"\\f78a\"; }\n.bi-trash3::before { content: \"\\f78b\"; }\n.bi-valentine::before { content: \"\\f78c\"; }\n.bi-valentine2::before { content: \"\\f78d\"; }\n.bi-wrench-adjustable-circle-fill::before { content: \"\\f78e\"; }\n.bi-wrench-adjustable-circle::before { content: \"\\f78f\"; }\n.bi-wrench-adjustable::before { content: \"\\f790\"; }\n.bi-filetype-json::before { content: \"\\f791\"; }\n.bi-filetype-pptx::before { content: \"\\f792\"; }\n.bi-filetype-xlsx::before { content: \"\\f793\"; }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/components/Editor.vue?vue&type=style&index=0&id=9484be2a&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/components/Editor.vue?vue&type=style&index=0&id=9484be2a&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n#editor {\r\n    outline: none;\n}\n.modal-lg {\r\n    /*max-width:1200px !important;*/\r\n    height: auto;\n}\n#imgModal {\r\n    /*width: 100% !important;*/\n}\n#editor figure img {\r\n    width: 70%;\n}\n#add_content {\r\n    height: 60px;\r\n    position: absolute;\r\n    top: 450px;\r\n    right: -3px;\r\n    transition: 0.5s ease;\n}\n#add_content span {\r\n    display: inline-block;\r\n    text-align: center !important;\r\n    width: 35px !important;\r\n    height: 35px !important;\r\n    border-radius: 50%;\r\n    vertical-align: middle !important;\r\n    position: absolute;\r\n    right: 20px;\r\n\r\n    transition: 0.5s ease;\n}\n#add_content span:hover {\r\n    opacity: 0.7 !important;\n}\n.content_btn {\r\n    opacity: 0;\n}\n#add_content span i {\r\n    display: inline-block;\r\n    text-align: center !important;\r\n    font-size: 20px;\r\n    vertical-align: middle !important;\r\n    margin-top: 5px;\n}\n.editor_options {\r\n    /*position: fixed;*/\r\n    /*top: 50vh;*/\r\n    /*right: calc(100% - 203px);*/\n}\n#editor img {\r\n    cursor: pointer !important;\n}\n.modal-header .modal-title {\r\n    padding: 0.5rem 0.5rem;\r\n    margin: -0.5rem -0.5rem -0.5rem auto;\n}\n#img_edit_max_width {\r\n    text-align: left !important;\r\n    direction: ltr !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/components/ImageCropper2.vue?vue&type=style&index=0&id=2699f032&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/components/ImageCropper2.vue?vue&type=style&index=0&id=2699f032&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n    /*.cropper-wrapper {*/\r\n    /*    width: 360px;*/\r\n    /*    height: 150px;*/\r\n    /*}*/\n.image-container {\r\n        width: inherit;\r\n        height: inherit;\n}\r\n\r\n\r\n    /*.image-preview {*/\r\n    /*    width: 276px;*/\r\n    /*    height: 150px;*/\r\n    /*}*/\r\n    /*.cropper-view-box,*/\r\n    /*.cropper-face{*/\r\n    /*    border-radius: 50%;*/\r\n    /*}*/\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/components/Loader-sm.vue?vue&type=style&index=0&id=478ac5c6&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/components/Loader-sm.vue?vue&type=style&index=0&id=478ac5c6&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\ndiv[data-v-478ac5c6]{\r\n       z-index: 1000 !important;\n}\n#spin[data-v-478ac5c6]{\r\n        opacity: 0.65;\r\n        /*margin: 20px;*/\r\n        /*width: 100px;*/\r\n        /*height: 100px;*/\r\n        /*background: #f00;*/\r\n        -webkit-animation-name: spin;\r\n        -webkit-animation-duration: 1000ms;\r\n        -webkit-animation-iteration-count: infinite;\r\n        -webkit-animation-timing-function: linear;\r\n        -moz-animation-name: spin;\r\n        -moz-animation-duration:1000ms;\r\n        -moz-animation-iteration-count: infinite;\r\n        -moz-animation-timing-function: linear;\r\n        -ms-animation-name: spin;\r\n        -ms-animation-duration: 1000ms;\r\n        -ms-animation-iteration-count: infinite;\r\n        -ms-animation-timing-function: linear;\r\n        animation-name: spin;\r\n        animation-duration: 1000ms;\r\n        animation-iteration-count: infinite;\r\n        animation-timing-function: linear;\n}\n.cls-1[data-v-478ac5c6], .cls-2[data-v-478ac5c6],.cls-3[data-v-478ac5c6], .cls-4[data-v-478ac5c6], .cls-5[data-v-478ac5c6], .cls-6[data-v-478ac5c6], .cls-7[data-v-478ac5c6],\r\n   .cls-8[data-v-478ac5c6], .cls-9[data-v-478ac5c6], .cls-10[data-v-478ac5c6],.cls-11[data-v-478ac5c6],.cls-12[data-v-478ac5c6]{fill: rgb(255, 255, 255);}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/panel/foodSlide/FoodSlideCreate.vue?vue&type=style&index=0&id=449a7266&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/panel/foodSlide/FoodSlideCreate.vue?vue&type=style&index=0&id=449a7266&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nspan i {\r\n    cursor: pointer;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./public/bootstrap-icons-1.8.3/font/fonts/bootstrap-icons.woff2?08efbba7c53d8c5413793eecb19b20bb":
/*!********************************************************************************************************!*\
  !*** ./public/bootstrap-icons-1.8.3/font/fonts/bootstrap-icons.woff2?08efbba7c53d8c5413793eecb19b20bb ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/bootstrap-icons.woff2?f2539a501be3a673de05437f73913ca3");

/***/ }),

/***/ "./public/bootstrap-icons-1.8.3/font/fonts/bootstrap-icons.woff?08efbba7c53d8c5413793eecb19b20bb":
/*!*******************************************************************************************************!*\
  !*** ./public/bootstrap-icons-1.8.3/font/fonts/bootstrap-icons.woff?08efbba7c53d8c5413793eecb19b20bb ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/bootstrap-icons.woff?7ff3ca6fa798de3f8ac2251c7ed9c581");

/***/ }),

/***/ "./public/bootstrap-icons-1.8.3/font/index.html":
/*!******************************************************!*\
  !*** ./public/bootstrap-icons-1.8.3/font/index.html ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(/*! ../../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(/*! ./bootstrap-icons.css */ "./public/bootstrap-icons-1.8.3/font/bootstrap-icons.css");
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);
var code = "<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>bootstrap-icons</title>\n\n  <style>\n    .icons {\n      display: grid;\n      max-width: 100%;\n      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr) );\n      gap: 1.25rem;\n    }\n    .icon {\n      background-color: var(--bs-light);\n      border-radius: .25rem;\n    }\n    .bi {\n      margin: .25rem;\n      font-size: 2.5rem;\n    }\n    .label {\n      font-family: var(--bs-font-monospace);\n    }\n    .label {\n      display: inline-block;\n      width: 100%;\n      overflow: hidden;\n      padding: .25rem;\n      font-size: .625rem;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n  </style>\n\n  <link rel=\"stylesheet\" href=\"/assets/css/bootstrap.min.css\">\n  <link rel=\"stylesheet\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\">\n</head>\n<body class=\"text-center\">\n\n  <h1>bootstrap-icons</h1>\n\n  <div class=\"icons\">\n    <div class=\"icon\">\n      <i class=\"bi bi-123\"></i>\n      <div class=\"label\">123</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-activity\"></i>\n      <div class=\"label\">activity</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-alarm-fill\"></i>\n      <div class=\"label\">alarm-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-alarm\"></i>\n      <div class=\"label\">alarm</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-align-bottom\"></i>\n      <div class=\"label\">align-bottom</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-align-center\"></i>\n      <div class=\"label\">align-center</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-align-end\"></i>\n      <div class=\"label\">align-end</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-align-middle\"></i>\n      <div class=\"label\">align-middle</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-align-start\"></i>\n      <div class=\"label\">align-start</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-align-top\"></i>\n      <div class=\"label\">align-top</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-alt\"></i>\n      <div class=\"label\">alt</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-app-indicator\"></i>\n      <div class=\"label\">app-indicator</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-app\"></i>\n      <div class=\"label\">app</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-apple\"></i>\n      <div class=\"label\">apple</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-archive-fill\"></i>\n      <div class=\"label\">archive-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-archive\"></i>\n      <div class=\"label\">archive</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-90deg-down\"></i>\n      <div class=\"label\">arrow-90deg-down</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-90deg-left\"></i>\n      <div class=\"label\">arrow-90deg-left</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-90deg-right\"></i>\n      <div class=\"label\">arrow-90deg-right</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-90deg-up\"></i>\n      <div class=\"label\">arrow-90deg-up</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-bar-down\"></i>\n      <div class=\"label\">arrow-bar-down</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-bar-left\"></i>\n      <div class=\"label\">arrow-bar-left</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-bar-right\"></i>\n      <div class=\"label\">arrow-bar-right</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-bar-up\"></i>\n      <div class=\"label\">arrow-bar-up</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-clockwise\"></i>\n      <div class=\"label\">arrow-clockwise</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-counterclockwise\"></i>\n      <div class=\"label\">arrow-counterclockwise</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-down-circle-fill\"></i>\n      <div class=\"label\">arrow-down-circle-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-down-circle\"></i>\n      <div class=\"label\">arrow-down-circle</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-down-left-circle-fill\"></i>\n      <div class=\"label\">arrow-down-left-circle-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-down-left-circle\"></i>\n      <div class=\"label\">arrow-down-left-circle</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-down-left-square-fill\"></i>\n      <div class=\"label\">arrow-down-left-square-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-down-left-square\"></i>\n      <div class=\"label\">arrow-down-left-square</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-down-left\"></i>\n      <div class=\"label\">arrow-down-left</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-down-right-circle-fill\"></i>\n      <div class=\"label\">arrow-down-right-circle-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-down-right-circle\"></i>\n      <div class=\"label\">arrow-down-right-circle</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-down-right-square-fill\"></i>\n      <div class=\"label\">arrow-down-right-square-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-down-right-square\"></i>\n      <div class=\"label\">arrow-down-right-square</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-down-right\"></i>\n      <div class=\"label\">arrow-down-right</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-down-short\"></i>\n      <div class=\"label\">arrow-down-short</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-down-square-fill\"></i>\n      <div class=\"label\">arrow-down-square-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-down-square\"></i>\n      <div class=\"label\">arrow-down-square</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-down-up\"></i>\n      <div class=\"label\">arrow-down-up</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-down\"></i>\n      <div class=\"label\">arrow-down</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-left-circle-fill\"></i>\n      <div class=\"label\">arrow-left-circle-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-left-circle\"></i>\n      <div class=\"label\">arrow-left-circle</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-left-right\"></i>\n      <div class=\"label\">arrow-left-right</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-left-short\"></i>\n      <div class=\"label\">arrow-left-short</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-left-square-fill\"></i>\n      <div class=\"label\">arrow-left-square-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-left-square\"></i>\n      <div class=\"label\">arrow-left-square</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-left\"></i>\n      <div class=\"label\">arrow-left</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-repeat\"></i>\n      <div class=\"label\">arrow-repeat</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-return-left\"></i>\n      <div class=\"label\">arrow-return-left</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-return-right\"></i>\n      <div class=\"label\">arrow-return-right</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-right-circle-fill\"></i>\n      <div class=\"label\">arrow-right-circle-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-right-circle\"></i>\n      <div class=\"label\">arrow-right-circle</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-right-short\"></i>\n      <div class=\"label\">arrow-right-short</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-right-square-fill\"></i>\n      <div class=\"label\">arrow-right-square-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-right-square\"></i>\n      <div class=\"label\">arrow-right-square</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-right\"></i>\n      <div class=\"label\">arrow-right</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-through-heart-fill\"></i>\n      <div class=\"label\">arrow-through-heart-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-through-heart\"></i>\n      <div class=\"label\">arrow-through-heart</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-up-circle-fill\"></i>\n      <div class=\"label\">arrow-up-circle-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-up-circle\"></i>\n      <div class=\"label\">arrow-up-circle</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-up-left-circle-fill\"></i>\n      <div class=\"label\">arrow-up-left-circle-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-up-left-circle\"></i>\n      <div class=\"label\">arrow-up-left-circle</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-up-left-square-fill\"></i>\n      <div class=\"label\">arrow-up-left-square-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-up-left-square\"></i>\n      <div class=\"label\">arrow-up-left-square</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-up-left\"></i>\n      <div class=\"label\">arrow-up-left</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-up-right-circle-fill\"></i>\n      <div class=\"label\">arrow-up-right-circle-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-up-right-circle\"></i>\n      <div class=\"label\">arrow-up-right-circle</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-up-right-square-fill\"></i>\n      <div class=\"label\">arrow-up-right-square-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-up-right-square\"></i>\n      <div class=\"label\">arrow-up-right-square</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-up-right\"></i>\n      <div class=\"label\">arrow-up-right</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-up-short\"></i>\n      <div class=\"label\">arrow-up-short</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-up-square-fill\"></i>\n      <div class=\"label\">arrow-up-square-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-up-square\"></i>\n      <div class=\"label\">arrow-up-square</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrow-up\"></i>\n      <div class=\"label\">arrow-up</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrows-angle-contract\"></i>\n      <div class=\"label\">arrows-angle-contract</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrows-angle-expand\"></i>\n      <div class=\"label\">arrows-angle-expand</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrows-collapse\"></i>\n      <div class=\"label\">arrows-collapse</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrows-expand\"></i>\n      <div class=\"label\">arrows-expand</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrows-fullscreen\"></i>\n      <div class=\"label\">arrows-fullscreen</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-arrows-move\"></i>\n      <div class=\"label\">arrows-move</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-aspect-ratio-fill\"></i>\n      <div class=\"label\">aspect-ratio-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-aspect-ratio\"></i>\n      <div class=\"label\">aspect-ratio</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-asterisk\"></i>\n      <div class=\"label\">asterisk</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-at\"></i>\n      <div class=\"label\">at</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-award-fill\"></i>\n      <div class=\"label\">award-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-award\"></i>\n      <div class=\"label\">award</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-back\"></i>\n      <div class=\"label\">back</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-backspace-fill\"></i>\n      <div class=\"label\">backspace-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-backspace-reverse-fill\"></i>\n      <div class=\"label\">backspace-reverse-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-backspace-reverse\"></i>\n      <div class=\"label\">backspace-reverse</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-backspace\"></i>\n      <div class=\"label\">backspace</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-badge-3d-fill\"></i>\n      <div class=\"label\">badge-3d-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-badge-3d\"></i>\n      <div class=\"label\">badge-3d</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-badge-4k-fill\"></i>\n      <div class=\"label\">badge-4k-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-badge-4k\"></i>\n      <div class=\"label\">badge-4k</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-badge-8k-fill\"></i>\n      <div class=\"label\">badge-8k-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-badge-8k\"></i>\n      <div class=\"label\">badge-8k</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-badge-ad-fill\"></i>\n      <div class=\"label\">badge-ad-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-badge-ad\"></i>\n      <div class=\"label\">badge-ad</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-badge-ar-fill\"></i>\n      <div class=\"label\">badge-ar-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-badge-ar\"></i>\n      <div class=\"label\">badge-ar</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-badge-cc-fill\"></i>\n      <div class=\"label\">badge-cc-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-badge-cc\"></i>\n      <div class=\"label\">badge-cc</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-badge-hd-fill\"></i>\n      <div class=\"label\">badge-hd-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-badge-hd\"></i>\n      <div class=\"label\">badge-hd</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-badge-sd-fill\"></i>\n      <div class=\"label\">badge-sd-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-badge-sd\"></i>\n      <div class=\"label\">badge-sd</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-badge-tm-fill\"></i>\n      <div class=\"label\">badge-tm-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-badge-tm\"></i>\n      <div class=\"label\">badge-tm</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-badge-vo-fill\"></i>\n      <div class=\"label\">badge-vo-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-badge-vo\"></i>\n      <div class=\"label\">badge-vo</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-badge-vr-fill\"></i>\n      <div class=\"label\">badge-vr-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-badge-vr\"></i>\n      <div class=\"label\">badge-vr</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-badge-wc-fill\"></i>\n      <div class=\"label\">badge-wc-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-badge-wc\"></i>\n      <div class=\"label\">badge-wc</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bag-check-fill\"></i>\n      <div class=\"label\">bag-check-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bag-check\"></i>\n      <div class=\"label\">bag-check</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bag-dash-fill\"></i>\n      <div class=\"label\">bag-dash-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bag-dash\"></i>\n      <div class=\"label\">bag-dash</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bag-fill\"></i>\n      <div class=\"label\">bag-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bag-heart-fill\"></i>\n      <div class=\"label\">bag-heart-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bag-heart\"></i>\n      <div class=\"label\">bag-heart</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bag-plus-fill\"></i>\n      <div class=\"label\">bag-plus-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bag-plus\"></i>\n      <div class=\"label\">bag-plus</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bag-x-fill\"></i>\n      <div class=\"label\">bag-x-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bag-x\"></i>\n      <div class=\"label\">bag-x</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bag\"></i>\n      <div class=\"label\">bag</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-balloon-fill\"></i>\n      <div class=\"label\">balloon-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-balloon-heart-fill\"></i>\n      <div class=\"label\">balloon-heart-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-balloon-heart\"></i>\n      <div class=\"label\">balloon-heart</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-balloon\"></i>\n      <div class=\"label\">balloon</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bandaid-fill\"></i>\n      <div class=\"label\">bandaid-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bandaid\"></i>\n      <div class=\"label\">bandaid</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bank\"></i>\n      <div class=\"label\">bank</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bank2\"></i>\n      <div class=\"label\">bank2</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bar-chart-fill\"></i>\n      <div class=\"label\">bar-chart-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bar-chart-line-fill\"></i>\n      <div class=\"label\">bar-chart-line-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bar-chart-line\"></i>\n      <div class=\"label\">bar-chart-line</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bar-chart-steps\"></i>\n      <div class=\"label\">bar-chart-steps</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bar-chart\"></i>\n      <div class=\"label\">bar-chart</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-basket-fill\"></i>\n      <div class=\"label\">basket-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-basket\"></i>\n      <div class=\"label\">basket</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-basket2-fill\"></i>\n      <div class=\"label\">basket2-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-basket2\"></i>\n      <div class=\"label\">basket2</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-basket3-fill\"></i>\n      <div class=\"label\">basket3-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-basket3\"></i>\n      <div class=\"label\">basket3</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-battery-charging\"></i>\n      <div class=\"label\">battery-charging</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-battery-full\"></i>\n      <div class=\"label\">battery-full</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-battery-half\"></i>\n      <div class=\"label\">battery-half</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-battery\"></i>\n      <div class=\"label\">battery</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-behance\"></i>\n      <div class=\"label\">behance</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bell-fill\"></i>\n      <div class=\"label\">bell-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bell-slash-fill\"></i>\n      <div class=\"label\">bell-slash-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bell-slash\"></i>\n      <div class=\"label\">bell-slash</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bell\"></i>\n      <div class=\"label\">bell</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bezier\"></i>\n      <div class=\"label\">bezier</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bezier2\"></i>\n      <div class=\"label\">bezier2</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bicycle\"></i>\n      <div class=\"label\">bicycle</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-binoculars-fill\"></i>\n      <div class=\"label\">binoculars-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-binoculars\"></i>\n      <div class=\"label\">binoculars</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-blockquote-left\"></i>\n      <div class=\"label\">blockquote-left</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-blockquote-right\"></i>\n      <div class=\"label\">blockquote-right</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bluetooth\"></i>\n      <div class=\"label\">bluetooth</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-body-text\"></i>\n      <div class=\"label\">body-text</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-book-fill\"></i>\n      <div class=\"label\">book-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-book-half\"></i>\n      <div class=\"label\">book-half</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-book\"></i>\n      <div class=\"label\">book</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bookmark-check-fill\"></i>\n      <div class=\"label\">bookmark-check-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bookmark-check\"></i>\n      <div class=\"label\">bookmark-check</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bookmark-dash-fill\"></i>\n      <div class=\"label\">bookmark-dash-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bookmark-dash\"></i>\n      <div class=\"label\">bookmark-dash</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bookmark-fill\"></i>\n      <div class=\"label\">bookmark-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bookmark-heart-fill\"></i>\n      <div class=\"label\">bookmark-heart-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bookmark-heart\"></i>\n      <div class=\"label\">bookmark-heart</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bookmark-plus-fill\"></i>\n      <div class=\"label\">bookmark-plus-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bookmark-plus\"></i>\n      <div class=\"label\">bookmark-plus</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bookmark-star-fill\"></i>\n      <div class=\"label\">bookmark-star-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bookmark-star\"></i>\n      <div class=\"label\">bookmark-star</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bookmark-x-fill\"></i>\n      <div class=\"label\">bookmark-x-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bookmark-x\"></i>\n      <div class=\"label\">bookmark-x</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bookmark\"></i>\n      <div class=\"label\">bookmark</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bookmarks-fill\"></i>\n      <div class=\"label\">bookmarks-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bookmarks\"></i>\n      <div class=\"label\">bookmarks</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bookshelf\"></i>\n      <div class=\"label\">bookshelf</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-boombox-fill\"></i>\n      <div class=\"label\">boombox-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-boombox\"></i>\n      <div class=\"label\">boombox</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bootstrap-fill\"></i>\n      <div class=\"label\">bootstrap-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bootstrap-reboot\"></i>\n      <div class=\"label\">bootstrap-reboot</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bootstrap\"></i>\n      <div class=\"label\">bootstrap</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-border-all\"></i>\n      <div class=\"label\">border-all</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-border-bottom\"></i>\n      <div class=\"label\">border-bottom</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-border-center\"></i>\n      <div class=\"label\">border-center</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-border-inner\"></i>\n      <div class=\"label\">border-inner</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-border-left\"></i>\n      <div class=\"label\">border-left</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-border-middle\"></i>\n      <div class=\"label\">border-middle</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-border-outer\"></i>\n      <div class=\"label\">border-outer</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-border-right\"></i>\n      <div class=\"label\">border-right</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-border-style\"></i>\n      <div class=\"label\">border-style</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-border-top\"></i>\n      <div class=\"label\">border-top</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-border-width\"></i>\n      <div class=\"label\">border-width</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-border\"></i>\n      <div class=\"label\">border</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bounding-box-circles\"></i>\n      <div class=\"label\">bounding-box-circles</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bounding-box\"></i>\n      <div class=\"label\">bounding-box</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-box-arrow-down-left\"></i>\n      <div class=\"label\">box-arrow-down-left</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-box-arrow-down-right\"></i>\n      <div class=\"label\">box-arrow-down-right</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-box-arrow-down\"></i>\n      <div class=\"label\">box-arrow-down</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-box-arrow-in-down-left\"></i>\n      <div class=\"label\">box-arrow-in-down-left</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-box-arrow-in-down-right\"></i>\n      <div class=\"label\">box-arrow-in-down-right</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-box-arrow-in-down\"></i>\n      <div class=\"label\">box-arrow-in-down</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-box-arrow-in-left\"></i>\n      <div class=\"label\">box-arrow-in-left</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-box-arrow-in-right\"></i>\n      <div class=\"label\">box-arrow-in-right</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-box-arrow-in-up-left\"></i>\n      <div class=\"label\">box-arrow-in-up-left</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-box-arrow-in-up-right\"></i>\n      <div class=\"label\">box-arrow-in-up-right</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-box-arrow-in-up\"></i>\n      <div class=\"label\">box-arrow-in-up</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-box-arrow-left\"></i>\n      <div class=\"label\">box-arrow-left</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-box-arrow-right\"></i>\n      <div class=\"label\">box-arrow-right</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-box-arrow-up-left\"></i>\n      <div class=\"label\">box-arrow-up-left</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-box-arrow-up-right\"></i>\n      <div class=\"label\">box-arrow-up-right</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-box-arrow-up\"></i>\n      <div class=\"label\">box-arrow-up</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-box-seam\"></i>\n      <div class=\"label\">box-seam</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-box\"></i>\n      <div class=\"label\">box</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-box2-fill\"></i>\n      <div class=\"label\">box2-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-box2-heart-fill\"></i>\n      <div class=\"label\">box2-heart-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-box2-heart\"></i>\n      <div class=\"label\">box2-heart</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-box2\"></i>\n      <div class=\"label\">box2</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-boxes\"></i>\n      <div class=\"label\">boxes</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-braces-asterisk\"></i>\n      <div class=\"label\">braces-asterisk</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-braces\"></i>\n      <div class=\"label\">braces</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bricks\"></i>\n      <div class=\"label\">bricks</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-briefcase-fill\"></i>\n      <div class=\"label\">briefcase-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-briefcase\"></i>\n      <div class=\"label\">briefcase</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-brightness-alt-high-fill\"></i>\n      <div class=\"label\">brightness-alt-high-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-brightness-alt-high\"></i>\n      <div class=\"label\">brightness-alt-high</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-brightness-alt-low-fill\"></i>\n      <div class=\"label\">brightness-alt-low-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-brightness-alt-low\"></i>\n      <div class=\"label\">brightness-alt-low</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-brightness-high-fill\"></i>\n      <div class=\"label\">brightness-high-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-brightness-high\"></i>\n      <div class=\"label\">brightness-high</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-brightness-low-fill\"></i>\n      <div class=\"label\">brightness-low-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-brightness-low\"></i>\n      <div class=\"label\">brightness-low</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-broadcast-pin\"></i>\n      <div class=\"label\">broadcast-pin</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-broadcast\"></i>\n      <div class=\"label\">broadcast</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-brush-fill\"></i>\n      <div class=\"label\">brush-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-brush\"></i>\n      <div class=\"label\">brush</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bucket-fill\"></i>\n      <div class=\"label\">bucket-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bucket\"></i>\n      <div class=\"label\">bucket</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bug-fill\"></i>\n      <div class=\"label\">bug-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bug\"></i>\n      <div class=\"label\">bug</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-building\"></i>\n      <div class=\"label\">building</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-bullseye\"></i>\n      <div class=\"label\">bullseye</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calculator-fill\"></i>\n      <div class=\"label\">calculator-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calculator\"></i>\n      <div class=\"label\">calculator</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar-check-fill\"></i>\n      <div class=\"label\">calendar-check-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar-check\"></i>\n      <div class=\"label\">calendar-check</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar-date-fill\"></i>\n      <div class=\"label\">calendar-date-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar-date\"></i>\n      <div class=\"label\">calendar-date</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar-day-fill\"></i>\n      <div class=\"label\">calendar-day-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar-day\"></i>\n      <div class=\"label\">calendar-day</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar-event-fill\"></i>\n      <div class=\"label\">calendar-event-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar-event\"></i>\n      <div class=\"label\">calendar-event</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar-fill\"></i>\n      <div class=\"label\">calendar-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar-heart-fill\"></i>\n      <div class=\"label\">calendar-heart-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar-heart\"></i>\n      <div class=\"label\">calendar-heart</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar-minus-fill\"></i>\n      <div class=\"label\">calendar-minus-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar-minus\"></i>\n      <div class=\"label\">calendar-minus</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar-month-fill\"></i>\n      <div class=\"label\">calendar-month-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar-month\"></i>\n      <div class=\"label\">calendar-month</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar-plus-fill\"></i>\n      <div class=\"label\">calendar-plus-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar-plus\"></i>\n      <div class=\"label\">calendar-plus</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar-range-fill\"></i>\n      <div class=\"label\">calendar-range-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar-range\"></i>\n      <div class=\"label\">calendar-range</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar-week-fill\"></i>\n      <div class=\"label\">calendar-week-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar-week\"></i>\n      <div class=\"label\">calendar-week</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar-x-fill\"></i>\n      <div class=\"label\">calendar-x-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar-x\"></i>\n      <div class=\"label\">calendar-x</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar\"></i>\n      <div class=\"label\">calendar</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar2-check-fill\"></i>\n      <div class=\"label\">calendar2-check-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar2-check\"></i>\n      <div class=\"label\">calendar2-check</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar2-date-fill\"></i>\n      <div class=\"label\">calendar2-date-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar2-date\"></i>\n      <div class=\"label\">calendar2-date</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar2-day-fill\"></i>\n      <div class=\"label\">calendar2-day-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar2-day\"></i>\n      <div class=\"label\">calendar2-day</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar2-event-fill\"></i>\n      <div class=\"label\">calendar2-event-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar2-event\"></i>\n      <div class=\"label\">calendar2-event</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar2-fill\"></i>\n      <div class=\"label\">calendar2-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar2-heart-fill\"></i>\n      <div class=\"label\">calendar2-heart-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar2-heart\"></i>\n      <div class=\"label\">calendar2-heart</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar2-minus-fill\"></i>\n      <div class=\"label\">calendar2-minus-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar2-minus\"></i>\n      <div class=\"label\">calendar2-minus</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar2-month-fill\"></i>\n      <div class=\"label\">calendar2-month-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar2-month\"></i>\n      <div class=\"label\">calendar2-month</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar2-plus-fill\"></i>\n      <div class=\"label\">calendar2-plus-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar2-plus\"></i>\n      <div class=\"label\">calendar2-plus</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar2-range-fill\"></i>\n      <div class=\"label\">calendar2-range-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar2-range\"></i>\n      <div class=\"label\">calendar2-range</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar2-week-fill\"></i>\n      <div class=\"label\">calendar2-week-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar2-week\"></i>\n      <div class=\"label\">calendar2-week</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar2-x-fill\"></i>\n      <div class=\"label\">calendar2-x-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar2-x\"></i>\n      <div class=\"label\">calendar2-x</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar2\"></i>\n      <div class=\"label\">calendar2</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar3-event-fill\"></i>\n      <div class=\"label\">calendar3-event-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar3-event\"></i>\n      <div class=\"label\">calendar3-event</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar3-fill\"></i>\n      <div class=\"label\">calendar3-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar3-range-fill\"></i>\n      <div class=\"label\">calendar3-range-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar3-range\"></i>\n      <div class=\"label\">calendar3-range</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar3-week-fill\"></i>\n      <div class=\"label\">calendar3-week-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar3-week\"></i>\n      <div class=\"label\">calendar3-week</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar3\"></i>\n      <div class=\"label\">calendar3</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar4-event\"></i>\n      <div class=\"label\">calendar4-event</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar4-range\"></i>\n      <div class=\"label\">calendar4-range</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar4-week\"></i>\n      <div class=\"label\">calendar4-week</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-calendar4\"></i>\n      <div class=\"label\">calendar4</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-camera-fill\"></i>\n      <div class=\"label\">camera-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-camera-reels-fill\"></i>\n      <div class=\"label\">camera-reels-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-camera-reels\"></i>\n      <div class=\"label\">camera-reels</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-camera-video-fill\"></i>\n      <div class=\"label\">camera-video-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-camera-video-off-fill\"></i>\n      <div class=\"label\">camera-video-off-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-camera-video-off\"></i>\n      <div class=\"label\">camera-video-off</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-camera-video\"></i>\n      <div class=\"label\">camera-video</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-camera\"></i>\n      <div class=\"label\">camera</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-camera2\"></i>\n      <div class=\"label\">camera2</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-capslock-fill\"></i>\n      <div class=\"label\">capslock-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-capslock\"></i>\n      <div class=\"label\">capslock</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-card-checklist\"></i>\n      <div class=\"label\">card-checklist</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-card-heading\"></i>\n      <div class=\"label\">card-heading</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-card-image\"></i>\n      <div class=\"label\">card-image</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-card-list\"></i>\n      <div class=\"label\">card-list</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-card-text\"></i>\n      <div class=\"label\">card-text</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-caret-down-fill\"></i>\n      <div class=\"label\">caret-down-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-caret-down-square-fill\"></i>\n      <div class=\"label\">caret-down-square-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-caret-down-square\"></i>\n      <div class=\"label\">caret-down-square</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-caret-down\"></i>\n      <div class=\"label\">caret-down</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-caret-left-fill\"></i>\n      <div class=\"label\">caret-left-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-caret-left-square-fill\"></i>\n      <div class=\"label\">caret-left-square-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-caret-left-square\"></i>\n      <div class=\"label\">caret-left-square</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-caret-left\"></i>\n      <div class=\"label\">caret-left</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-caret-right-fill\"></i>\n      <div class=\"label\">caret-right-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-caret-right-square-fill\"></i>\n      <div class=\"label\">caret-right-square-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-caret-right-square\"></i>\n      <div class=\"label\">caret-right-square</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-caret-right\"></i>\n      <div class=\"label\">caret-right</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-caret-up-fill\"></i>\n      <div class=\"label\">caret-up-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-caret-up-square-fill\"></i>\n      <div class=\"label\">caret-up-square-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-caret-up-square\"></i>\n      <div class=\"label\">caret-up-square</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-caret-up\"></i>\n      <div class=\"label\">caret-up</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cart-check-fill\"></i>\n      <div class=\"label\">cart-check-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cart-check\"></i>\n      <div class=\"label\">cart-check</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cart-dash-fill\"></i>\n      <div class=\"label\">cart-dash-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cart-dash\"></i>\n      <div class=\"label\">cart-dash</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cart-fill\"></i>\n      <div class=\"label\">cart-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cart-plus-fill\"></i>\n      <div class=\"label\">cart-plus-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cart-plus\"></i>\n      <div class=\"label\">cart-plus</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cart-x-fill\"></i>\n      <div class=\"label\">cart-x-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cart-x\"></i>\n      <div class=\"label\">cart-x</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cart\"></i>\n      <div class=\"label\">cart</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cart2\"></i>\n      <div class=\"label\">cart2</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cart3\"></i>\n      <div class=\"label\">cart3</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cart4\"></i>\n      <div class=\"label\">cart4</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cash-coin\"></i>\n      <div class=\"label\">cash-coin</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cash-stack\"></i>\n      <div class=\"label\">cash-stack</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cash\"></i>\n      <div class=\"label\">cash</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cast\"></i>\n      <div class=\"label\">cast</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chat-dots-fill\"></i>\n      <div class=\"label\">chat-dots-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chat-dots\"></i>\n      <div class=\"label\">chat-dots</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chat-fill\"></i>\n      <div class=\"label\">chat-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chat-heart-fill\"></i>\n      <div class=\"label\">chat-heart-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chat-heart\"></i>\n      <div class=\"label\">chat-heart</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chat-left-dots-fill\"></i>\n      <div class=\"label\">chat-left-dots-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chat-left-dots\"></i>\n      <div class=\"label\">chat-left-dots</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chat-left-fill\"></i>\n      <div class=\"label\">chat-left-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chat-left-heart-fill\"></i>\n      <div class=\"label\">chat-left-heart-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chat-left-heart\"></i>\n      <div class=\"label\">chat-left-heart</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chat-left-quote-fill\"></i>\n      <div class=\"label\">chat-left-quote-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chat-left-quote\"></i>\n      <div class=\"label\">chat-left-quote</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chat-left-text-fill\"></i>\n      <div class=\"label\">chat-left-text-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chat-left-text\"></i>\n      <div class=\"label\">chat-left-text</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chat-left\"></i>\n      <div class=\"label\">chat-left</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chat-quote-fill\"></i>\n      <div class=\"label\">chat-quote-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chat-quote\"></i>\n      <div class=\"label\">chat-quote</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chat-right-dots-fill\"></i>\n      <div class=\"label\">chat-right-dots-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chat-right-dots\"></i>\n      <div class=\"label\">chat-right-dots</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chat-right-fill\"></i>\n      <div class=\"label\">chat-right-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chat-right-heart-fill\"></i>\n      <div class=\"label\">chat-right-heart-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chat-right-heart\"></i>\n      <div class=\"label\">chat-right-heart</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chat-right-quote-fill\"></i>\n      <div class=\"label\">chat-right-quote-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chat-right-quote\"></i>\n      <div class=\"label\">chat-right-quote</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chat-right-text-fill\"></i>\n      <div class=\"label\">chat-right-text-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chat-right-text\"></i>\n      <div class=\"label\">chat-right-text</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chat-right\"></i>\n      <div class=\"label\">chat-right</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chat-square-dots-fill\"></i>\n      <div class=\"label\">chat-square-dots-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chat-square-dots\"></i>\n      <div class=\"label\">chat-square-dots</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chat-square-fill\"></i>\n      <div class=\"label\">chat-square-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chat-square-heart-fill\"></i>\n      <div class=\"label\">chat-square-heart-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chat-square-heart\"></i>\n      <div class=\"label\">chat-square-heart</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chat-square-quote-fill\"></i>\n      <div class=\"label\">chat-square-quote-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chat-square-quote\"></i>\n      <div class=\"label\">chat-square-quote</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chat-square-text-fill\"></i>\n      <div class=\"label\">chat-square-text-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chat-square-text\"></i>\n      <div class=\"label\">chat-square-text</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chat-square\"></i>\n      <div class=\"label\">chat-square</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chat-text-fill\"></i>\n      <div class=\"label\">chat-text-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chat-text\"></i>\n      <div class=\"label\">chat-text</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chat\"></i>\n      <div class=\"label\">chat</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-check-all\"></i>\n      <div class=\"label\">check-all</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-check-circle-fill\"></i>\n      <div class=\"label\">check-circle-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-check-circle\"></i>\n      <div class=\"label\">check-circle</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-check-lg\"></i>\n      <div class=\"label\">check-lg</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-check-square-fill\"></i>\n      <div class=\"label\">check-square-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-check-square\"></i>\n      <div class=\"label\">check-square</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-check\"></i>\n      <div class=\"label\">check</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-check2-all\"></i>\n      <div class=\"label\">check2-all</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-check2-circle\"></i>\n      <div class=\"label\">check2-circle</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-check2-square\"></i>\n      <div class=\"label\">check2-square</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-check2\"></i>\n      <div class=\"label\">check2</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chevron-bar-contract\"></i>\n      <div class=\"label\">chevron-bar-contract</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chevron-bar-down\"></i>\n      <div class=\"label\">chevron-bar-down</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chevron-bar-expand\"></i>\n      <div class=\"label\">chevron-bar-expand</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chevron-bar-left\"></i>\n      <div class=\"label\">chevron-bar-left</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chevron-bar-right\"></i>\n      <div class=\"label\">chevron-bar-right</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chevron-bar-up\"></i>\n      <div class=\"label\">chevron-bar-up</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chevron-compact-down\"></i>\n      <div class=\"label\">chevron-compact-down</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chevron-compact-left\"></i>\n      <div class=\"label\">chevron-compact-left</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chevron-compact-right\"></i>\n      <div class=\"label\">chevron-compact-right</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chevron-compact-up\"></i>\n      <div class=\"label\">chevron-compact-up</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chevron-contract\"></i>\n      <div class=\"label\">chevron-contract</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chevron-double-down\"></i>\n      <div class=\"label\">chevron-double-down</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chevron-double-left\"></i>\n      <div class=\"label\">chevron-double-left</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chevron-double-right\"></i>\n      <div class=\"label\">chevron-double-right</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chevron-double-up\"></i>\n      <div class=\"label\">chevron-double-up</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chevron-down\"></i>\n      <div class=\"label\">chevron-down</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chevron-expand\"></i>\n      <div class=\"label\">chevron-expand</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chevron-left\"></i>\n      <div class=\"label\">chevron-left</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chevron-right\"></i>\n      <div class=\"label\">chevron-right</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-chevron-up\"></i>\n      <div class=\"label\">chevron-up</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-circle-fill\"></i>\n      <div class=\"label\">circle-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-circle-half\"></i>\n      <div class=\"label\">circle-half</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-circle-square\"></i>\n      <div class=\"label\">circle-square</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-circle\"></i>\n      <div class=\"label\">circle</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-clipboard-check-fill\"></i>\n      <div class=\"label\">clipboard-check-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-clipboard-check\"></i>\n      <div class=\"label\">clipboard-check</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-clipboard-data-fill\"></i>\n      <div class=\"label\">clipboard-data-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-clipboard-data\"></i>\n      <div class=\"label\">clipboard-data</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-clipboard-fill\"></i>\n      <div class=\"label\">clipboard-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-clipboard-heart-fill\"></i>\n      <div class=\"label\">clipboard-heart-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-clipboard-heart\"></i>\n      <div class=\"label\">clipboard-heart</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-clipboard-minus-fill\"></i>\n      <div class=\"label\">clipboard-minus-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-clipboard-minus\"></i>\n      <div class=\"label\">clipboard-minus</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-clipboard-plus-fill\"></i>\n      <div class=\"label\">clipboard-plus-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-clipboard-plus\"></i>\n      <div class=\"label\">clipboard-plus</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-clipboard-pulse\"></i>\n      <div class=\"label\">clipboard-pulse</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-clipboard-x-fill\"></i>\n      <div class=\"label\">clipboard-x-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-clipboard-x\"></i>\n      <div class=\"label\">clipboard-x</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-clipboard\"></i>\n      <div class=\"label\">clipboard</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-clipboard2-check-fill\"></i>\n      <div class=\"label\">clipboard2-check-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-clipboard2-check\"></i>\n      <div class=\"label\">clipboard2-check</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-clipboard2-data-fill\"></i>\n      <div class=\"label\">clipboard2-data-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-clipboard2-data\"></i>\n      <div class=\"label\">clipboard2-data</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-clipboard2-fill\"></i>\n      <div class=\"label\">clipboard2-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-clipboard2-heart-fill\"></i>\n      <div class=\"label\">clipboard2-heart-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-clipboard2-heart\"></i>\n      <div class=\"label\">clipboard2-heart</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-clipboard2-minus-fill\"></i>\n      <div class=\"label\">clipboard2-minus-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-clipboard2-minus\"></i>\n      <div class=\"label\">clipboard2-minus</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-clipboard2-plus-fill\"></i>\n      <div class=\"label\">clipboard2-plus-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-clipboard2-plus\"></i>\n      <div class=\"label\">clipboard2-plus</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-clipboard2-pulse-fill\"></i>\n      <div class=\"label\">clipboard2-pulse-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-clipboard2-pulse\"></i>\n      <div class=\"label\">clipboard2-pulse</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-clipboard2-x-fill\"></i>\n      <div class=\"label\">clipboard2-x-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-clipboard2-x\"></i>\n      <div class=\"label\">clipboard2-x</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-clipboard2\"></i>\n      <div class=\"label\">clipboard2</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-clock-fill\"></i>\n      <div class=\"label\">clock-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-clock-history\"></i>\n      <div class=\"label\">clock-history</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-clock\"></i>\n      <div class=\"label\">clock</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloud-arrow-down-fill\"></i>\n      <div class=\"label\">cloud-arrow-down-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloud-arrow-down\"></i>\n      <div class=\"label\">cloud-arrow-down</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloud-arrow-up-fill\"></i>\n      <div class=\"label\">cloud-arrow-up-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloud-arrow-up\"></i>\n      <div class=\"label\">cloud-arrow-up</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloud-check-fill\"></i>\n      <div class=\"label\">cloud-check-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloud-check\"></i>\n      <div class=\"label\">cloud-check</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloud-download-fill\"></i>\n      <div class=\"label\">cloud-download-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloud-download\"></i>\n      <div class=\"label\">cloud-download</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloud-drizzle-fill\"></i>\n      <div class=\"label\">cloud-drizzle-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloud-drizzle\"></i>\n      <div class=\"label\">cloud-drizzle</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloud-fill\"></i>\n      <div class=\"label\">cloud-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloud-fog-fill\"></i>\n      <div class=\"label\">cloud-fog-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloud-fog\"></i>\n      <div class=\"label\">cloud-fog</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloud-fog2-fill\"></i>\n      <div class=\"label\">cloud-fog2-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloud-fog2\"></i>\n      <div class=\"label\">cloud-fog2</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloud-hail-fill\"></i>\n      <div class=\"label\">cloud-hail-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloud-hail\"></i>\n      <div class=\"label\">cloud-hail</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloud-haze-fill\"></i>\n      <div class=\"label\">cloud-haze-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloud-haze\"></i>\n      <div class=\"label\">cloud-haze</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloud-haze2-fill\"></i>\n      <div class=\"label\">cloud-haze2-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloud-haze2\"></i>\n      <div class=\"label\">cloud-haze2</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloud-lightning-fill\"></i>\n      <div class=\"label\">cloud-lightning-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloud-lightning-rain-fill\"></i>\n      <div class=\"label\">cloud-lightning-rain-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloud-lightning-rain\"></i>\n      <div class=\"label\">cloud-lightning-rain</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloud-lightning\"></i>\n      <div class=\"label\">cloud-lightning</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloud-minus-fill\"></i>\n      <div class=\"label\">cloud-minus-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloud-minus\"></i>\n      <div class=\"label\">cloud-minus</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloud-moon-fill\"></i>\n      <div class=\"label\">cloud-moon-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloud-moon\"></i>\n      <div class=\"label\">cloud-moon</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloud-plus-fill\"></i>\n      <div class=\"label\">cloud-plus-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloud-plus\"></i>\n      <div class=\"label\">cloud-plus</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloud-rain-fill\"></i>\n      <div class=\"label\">cloud-rain-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloud-rain-heavy-fill\"></i>\n      <div class=\"label\">cloud-rain-heavy-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloud-rain-heavy\"></i>\n      <div class=\"label\">cloud-rain-heavy</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloud-rain\"></i>\n      <div class=\"label\">cloud-rain</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloud-slash-fill\"></i>\n      <div class=\"label\">cloud-slash-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloud-slash\"></i>\n      <div class=\"label\">cloud-slash</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloud-sleet-fill\"></i>\n      <div class=\"label\">cloud-sleet-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloud-sleet\"></i>\n      <div class=\"label\">cloud-sleet</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloud-snow-fill\"></i>\n      <div class=\"label\">cloud-snow-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloud-snow\"></i>\n      <div class=\"label\">cloud-snow</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloud-sun-fill\"></i>\n      <div class=\"label\">cloud-sun-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloud-sun\"></i>\n      <div class=\"label\">cloud-sun</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloud-upload-fill\"></i>\n      <div class=\"label\">cloud-upload-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloud-upload\"></i>\n      <div class=\"label\">cloud-upload</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloud\"></i>\n      <div class=\"label\">cloud</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-clouds-fill\"></i>\n      <div class=\"label\">clouds-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-clouds\"></i>\n      <div class=\"label\">clouds</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloudy-fill\"></i>\n      <div class=\"label\">cloudy-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cloudy\"></i>\n      <div class=\"label\">cloudy</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-code-slash\"></i>\n      <div class=\"label\">code-slash</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-code-square\"></i>\n      <div class=\"label\">code-square</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-code\"></i>\n      <div class=\"label\">code</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-coin\"></i>\n      <div class=\"label\">coin</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-collection-fill\"></i>\n      <div class=\"label\">collection-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-collection-play-fill\"></i>\n      <div class=\"label\">collection-play-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-collection-play\"></i>\n      <div class=\"label\">collection-play</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-collection\"></i>\n      <div class=\"label\">collection</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-columns-gap\"></i>\n      <div class=\"label\">columns-gap</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-columns\"></i>\n      <div class=\"label\">columns</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-command\"></i>\n      <div class=\"label\">command</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-compass-fill\"></i>\n      <div class=\"label\">compass-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-compass\"></i>\n      <div class=\"label\">compass</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cone-striped\"></i>\n      <div class=\"label\">cone-striped</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cone\"></i>\n      <div class=\"label\">cone</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-controller\"></i>\n      <div class=\"label\">controller</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cpu-fill\"></i>\n      <div class=\"label\">cpu-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cpu\"></i>\n      <div class=\"label\">cpu</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-credit-card-2-back-fill\"></i>\n      <div class=\"label\">credit-card-2-back-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-credit-card-2-back\"></i>\n      <div class=\"label\">credit-card-2-back</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-credit-card-2-front-fill\"></i>\n      <div class=\"label\">credit-card-2-front-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-credit-card-2-front\"></i>\n      <div class=\"label\">credit-card-2-front</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-credit-card-fill\"></i>\n      <div class=\"label\">credit-card-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-credit-card\"></i>\n      <div class=\"label\">credit-card</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-crop\"></i>\n      <div class=\"label\">crop</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cup-fill\"></i>\n      <div class=\"label\">cup-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cup-straw\"></i>\n      <div class=\"label\">cup-straw</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cup\"></i>\n      <div class=\"label\">cup</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-currency-bitcoin\"></i>\n      <div class=\"label\">currency-bitcoin</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-currency-dollar\"></i>\n      <div class=\"label\">currency-dollar</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-currency-euro\"></i>\n      <div class=\"label\">currency-euro</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-currency-exchange\"></i>\n      <div class=\"label\">currency-exchange</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-currency-pound\"></i>\n      <div class=\"label\">currency-pound</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-currency-yen\"></i>\n      <div class=\"label\">currency-yen</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cursor-fill\"></i>\n      <div class=\"label\">cursor-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cursor-text\"></i>\n      <div class=\"label\">cursor-text</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-cursor\"></i>\n      <div class=\"label\">cursor</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-dash-circle-dotted\"></i>\n      <div class=\"label\">dash-circle-dotted</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-dash-circle-fill\"></i>\n      <div class=\"label\">dash-circle-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-dash-circle\"></i>\n      <div class=\"label\">dash-circle</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-dash-lg\"></i>\n      <div class=\"label\">dash-lg</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-dash-square-dotted\"></i>\n      <div class=\"label\">dash-square-dotted</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-dash-square-fill\"></i>\n      <div class=\"label\">dash-square-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-dash-square\"></i>\n      <div class=\"label\">dash-square</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-dash\"></i>\n      <div class=\"label\">dash</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-device-hdd-fill\"></i>\n      <div class=\"label\">device-hdd-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-device-hdd\"></i>\n      <div class=\"label\">device-hdd</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-device-ssd-fill\"></i>\n      <div class=\"label\">device-ssd-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-device-ssd\"></i>\n      <div class=\"label\">device-ssd</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-diagram-2-fill\"></i>\n      <div class=\"label\">diagram-2-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-diagram-2\"></i>\n      <div class=\"label\">diagram-2</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-diagram-3-fill\"></i>\n      <div class=\"label\">diagram-3-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-diagram-3\"></i>\n      <div class=\"label\">diagram-3</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-diamond-fill\"></i>\n      <div class=\"label\">diamond-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-diamond-half\"></i>\n      <div class=\"label\">diamond-half</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-diamond\"></i>\n      <div class=\"label\">diamond</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-dice-1-fill\"></i>\n      <div class=\"label\">dice-1-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-dice-1\"></i>\n      <div class=\"label\">dice-1</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-dice-2-fill\"></i>\n      <div class=\"label\">dice-2-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-dice-2\"></i>\n      <div class=\"label\">dice-2</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-dice-3-fill\"></i>\n      <div class=\"label\">dice-3-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-dice-3\"></i>\n      <div class=\"label\">dice-3</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-dice-4-fill\"></i>\n      <div class=\"label\">dice-4-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-dice-4\"></i>\n      <div class=\"label\">dice-4</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-dice-5-fill\"></i>\n      <div class=\"label\">dice-5-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-dice-5\"></i>\n      <div class=\"label\">dice-5</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-dice-6-fill\"></i>\n      <div class=\"label\">dice-6-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-dice-6\"></i>\n      <div class=\"label\">dice-6</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-disc-fill\"></i>\n      <div class=\"label\">disc-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-disc\"></i>\n      <div class=\"label\">disc</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-discord\"></i>\n      <div class=\"label\">discord</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-display-fill\"></i>\n      <div class=\"label\">display-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-display\"></i>\n      <div class=\"label\">display</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-displayport-fill\"></i>\n      <div class=\"label\">displayport-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-displayport\"></i>\n      <div class=\"label\">displayport</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-distribute-horizontal\"></i>\n      <div class=\"label\">distribute-horizontal</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-distribute-vertical\"></i>\n      <div class=\"label\">distribute-vertical</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-door-closed-fill\"></i>\n      <div class=\"label\">door-closed-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-door-closed\"></i>\n      <div class=\"label\">door-closed</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-door-open-fill\"></i>\n      <div class=\"label\">door-open-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-door-open\"></i>\n      <div class=\"label\">door-open</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-dot\"></i>\n      <div class=\"label\">dot</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-download\"></i>\n      <div class=\"label\">download</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-dpad-fill\"></i>\n      <div class=\"label\">dpad-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-dpad\"></i>\n      <div class=\"label\">dpad</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-dribbble\"></i>\n      <div class=\"label\">dribbble</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-droplet-fill\"></i>\n      <div class=\"label\">droplet-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-droplet-half\"></i>\n      <div class=\"label\">droplet-half</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-droplet\"></i>\n      <div class=\"label\">droplet</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-ear-fill\"></i>\n      <div class=\"label\">ear-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-ear\"></i>\n      <div class=\"label\">ear</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-earbuds\"></i>\n      <div class=\"label\">earbuds</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-easel-fill\"></i>\n      <div class=\"label\">easel-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-easel\"></i>\n      <div class=\"label\">easel</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-easel2-fill\"></i>\n      <div class=\"label\">easel2-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-easel2\"></i>\n      <div class=\"label\">easel2</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-easel3-fill\"></i>\n      <div class=\"label\">easel3-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-easel3\"></i>\n      <div class=\"label\">easel3</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-egg-fill\"></i>\n      <div class=\"label\">egg-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-egg-fried\"></i>\n      <div class=\"label\">egg-fried</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-egg\"></i>\n      <div class=\"label\">egg</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-eject-fill\"></i>\n      <div class=\"label\">eject-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-eject\"></i>\n      <div class=\"label\">eject</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-emoji-angry-fill\"></i>\n      <div class=\"label\">emoji-angry-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-emoji-angry\"></i>\n      <div class=\"label\">emoji-angry</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-emoji-dizzy-fill\"></i>\n      <div class=\"label\">emoji-dizzy-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-emoji-dizzy\"></i>\n      <div class=\"label\">emoji-dizzy</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-emoji-expressionless-fill\"></i>\n      <div class=\"label\">emoji-expressionless-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-emoji-expressionless\"></i>\n      <div class=\"label\">emoji-expressionless</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-emoji-frown-fill\"></i>\n      <div class=\"label\">emoji-frown-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-emoji-frown\"></i>\n      <div class=\"label\">emoji-frown</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-emoji-heart-eyes-fill\"></i>\n      <div class=\"label\">emoji-heart-eyes-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-emoji-heart-eyes\"></i>\n      <div class=\"label\">emoji-heart-eyes</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-emoji-kiss-fill\"></i>\n      <div class=\"label\">emoji-kiss-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-emoji-kiss\"></i>\n      <div class=\"label\">emoji-kiss</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-emoji-laughing-fill\"></i>\n      <div class=\"label\">emoji-laughing-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-emoji-laughing\"></i>\n      <div class=\"label\">emoji-laughing</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-emoji-neutral-fill\"></i>\n      <div class=\"label\">emoji-neutral-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-emoji-neutral\"></i>\n      <div class=\"label\">emoji-neutral</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-emoji-smile-fill\"></i>\n      <div class=\"label\">emoji-smile-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-emoji-smile-upside-down-fill\"></i>\n      <div class=\"label\">emoji-smile-upside-down-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-emoji-smile-upside-down\"></i>\n      <div class=\"label\">emoji-smile-upside-down</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-emoji-smile\"></i>\n      <div class=\"label\">emoji-smile</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-emoji-sunglasses-fill\"></i>\n      <div class=\"label\">emoji-sunglasses-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-emoji-sunglasses\"></i>\n      <div class=\"label\">emoji-sunglasses</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-emoji-wink-fill\"></i>\n      <div class=\"label\">emoji-wink-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-emoji-wink\"></i>\n      <div class=\"label\">emoji-wink</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-envelope-check-fill\"></i>\n      <div class=\"label\">envelope-check-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-envelope-check\"></i>\n      <div class=\"label\">envelope-check</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-envelope-dash-fill\"></i>\n      <div class=\"label\">envelope-dash-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-envelope-dash\"></i>\n      <div class=\"label\">envelope-dash</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-envelope-exclamation-fill\"></i>\n      <div class=\"label\">envelope-exclamation-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-envelope-exclamation\"></i>\n      <div class=\"label\">envelope-exclamation</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-envelope-fill\"></i>\n      <div class=\"label\">envelope-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-envelope-heart-fill\"></i>\n      <div class=\"label\">envelope-heart-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-envelope-heart\"></i>\n      <div class=\"label\">envelope-heart</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-envelope-open-fill\"></i>\n      <div class=\"label\">envelope-open-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-envelope-open-heart-fill\"></i>\n      <div class=\"label\">envelope-open-heart-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-envelope-open-heart\"></i>\n      <div class=\"label\">envelope-open-heart</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-envelope-open\"></i>\n      <div class=\"label\">envelope-open</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-envelope-paper-fill\"></i>\n      <div class=\"label\">envelope-paper-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-envelope-paper-heart-fill\"></i>\n      <div class=\"label\">envelope-paper-heart-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-envelope-paper-heart\"></i>\n      <div class=\"label\">envelope-paper-heart</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-envelope-paper\"></i>\n      <div class=\"label\">envelope-paper</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-envelope-plus-fill\"></i>\n      <div class=\"label\">envelope-plus-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-envelope-plus\"></i>\n      <div class=\"label\">envelope-plus</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-envelope-slash-fill\"></i>\n      <div class=\"label\">envelope-slash-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-envelope-slash\"></i>\n      <div class=\"label\">envelope-slash</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-envelope-x-fill\"></i>\n      <div class=\"label\">envelope-x-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-envelope-x\"></i>\n      <div class=\"label\">envelope-x</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-envelope\"></i>\n      <div class=\"label\">envelope</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-eraser-fill\"></i>\n      <div class=\"label\">eraser-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-eraser\"></i>\n      <div class=\"label\">eraser</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-ethernet\"></i>\n      <div class=\"label\">ethernet</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-exclamation-circle-fill\"></i>\n      <div class=\"label\">exclamation-circle-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-exclamation-circle\"></i>\n      <div class=\"label\">exclamation-circle</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-exclamation-diamond-fill\"></i>\n      <div class=\"label\">exclamation-diamond-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-exclamation-diamond\"></i>\n      <div class=\"label\">exclamation-diamond</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-exclamation-lg\"></i>\n      <div class=\"label\">exclamation-lg</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-exclamation-octagon-fill\"></i>\n      <div class=\"label\">exclamation-octagon-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-exclamation-octagon\"></i>\n      <div class=\"label\">exclamation-octagon</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-exclamation-square-fill\"></i>\n      <div class=\"label\">exclamation-square-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-exclamation-square\"></i>\n      <div class=\"label\">exclamation-square</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-exclamation-triangle-fill\"></i>\n      <div class=\"label\">exclamation-triangle-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-exclamation-triangle\"></i>\n      <div class=\"label\">exclamation-triangle</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-exclamation\"></i>\n      <div class=\"label\">exclamation</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-exclude\"></i>\n      <div class=\"label\">exclude</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-explicit-fill\"></i>\n      <div class=\"label\">explicit-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-explicit\"></i>\n      <div class=\"label\">explicit</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-eye-fill\"></i>\n      <div class=\"label\">eye-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-eye-slash-fill\"></i>\n      <div class=\"label\">eye-slash-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-eye-slash\"></i>\n      <div class=\"label\">eye-slash</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-eye\"></i>\n      <div class=\"label\">eye</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-eyedropper\"></i>\n      <div class=\"label\">eyedropper</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-eyeglasses\"></i>\n      <div class=\"label\">eyeglasses</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-facebook\"></i>\n      <div class=\"label\">facebook</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-fan\"></i>\n      <div class=\"label\">fan</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-arrow-down-fill\"></i>\n      <div class=\"label\">file-arrow-down-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-arrow-down\"></i>\n      <div class=\"label\">file-arrow-down</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-arrow-up-fill\"></i>\n      <div class=\"label\">file-arrow-up-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-arrow-up\"></i>\n      <div class=\"label\">file-arrow-up</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-bar-graph-fill\"></i>\n      <div class=\"label\">file-bar-graph-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-bar-graph\"></i>\n      <div class=\"label\">file-bar-graph</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-binary-fill\"></i>\n      <div class=\"label\">file-binary-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-binary\"></i>\n      <div class=\"label\">file-binary</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-break-fill\"></i>\n      <div class=\"label\">file-break-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-break\"></i>\n      <div class=\"label\">file-break</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-check-fill\"></i>\n      <div class=\"label\">file-check-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-check\"></i>\n      <div class=\"label\">file-check</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-code-fill\"></i>\n      <div class=\"label\">file-code-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-code\"></i>\n      <div class=\"label\">file-code</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-diff-fill\"></i>\n      <div class=\"label\">file-diff-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-diff\"></i>\n      <div class=\"label\">file-diff</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-arrow-down-fill\"></i>\n      <div class=\"label\">file-earmark-arrow-down-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-arrow-down\"></i>\n      <div class=\"label\">file-earmark-arrow-down</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-arrow-up-fill\"></i>\n      <div class=\"label\">file-earmark-arrow-up-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-arrow-up\"></i>\n      <div class=\"label\">file-earmark-arrow-up</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-bar-graph-fill\"></i>\n      <div class=\"label\">file-earmark-bar-graph-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-bar-graph\"></i>\n      <div class=\"label\">file-earmark-bar-graph</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-binary-fill\"></i>\n      <div class=\"label\">file-earmark-binary-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-binary\"></i>\n      <div class=\"label\">file-earmark-binary</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-break-fill\"></i>\n      <div class=\"label\">file-earmark-break-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-break\"></i>\n      <div class=\"label\">file-earmark-break</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-check-fill\"></i>\n      <div class=\"label\">file-earmark-check-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-check\"></i>\n      <div class=\"label\">file-earmark-check</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-code-fill\"></i>\n      <div class=\"label\">file-earmark-code-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-code\"></i>\n      <div class=\"label\">file-earmark-code</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-diff-fill\"></i>\n      <div class=\"label\">file-earmark-diff-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-diff\"></i>\n      <div class=\"label\">file-earmark-diff</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-easel-fill\"></i>\n      <div class=\"label\">file-earmark-easel-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-easel\"></i>\n      <div class=\"label\">file-earmark-easel</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-excel-fill\"></i>\n      <div class=\"label\">file-earmark-excel-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-excel\"></i>\n      <div class=\"label\">file-earmark-excel</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-fill\"></i>\n      <div class=\"label\">file-earmark-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-font-fill\"></i>\n      <div class=\"label\">file-earmark-font-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-font\"></i>\n      <div class=\"label\">file-earmark-font</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-image-fill\"></i>\n      <div class=\"label\">file-earmark-image-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-image\"></i>\n      <div class=\"label\">file-earmark-image</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-lock-fill\"></i>\n      <div class=\"label\">file-earmark-lock-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-lock\"></i>\n      <div class=\"label\">file-earmark-lock</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-lock2-fill\"></i>\n      <div class=\"label\">file-earmark-lock2-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-lock2\"></i>\n      <div class=\"label\">file-earmark-lock2</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-medical-fill\"></i>\n      <div class=\"label\">file-earmark-medical-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-medical\"></i>\n      <div class=\"label\">file-earmark-medical</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-minus-fill\"></i>\n      <div class=\"label\">file-earmark-minus-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-minus\"></i>\n      <div class=\"label\">file-earmark-minus</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-music-fill\"></i>\n      <div class=\"label\">file-earmark-music-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-music\"></i>\n      <div class=\"label\">file-earmark-music</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-pdf-fill\"></i>\n      <div class=\"label\">file-earmark-pdf-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-pdf\"></i>\n      <div class=\"label\">file-earmark-pdf</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-person-fill\"></i>\n      <div class=\"label\">file-earmark-person-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-person\"></i>\n      <div class=\"label\">file-earmark-person</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-play-fill\"></i>\n      <div class=\"label\">file-earmark-play-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-play\"></i>\n      <div class=\"label\">file-earmark-play</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-plus-fill\"></i>\n      <div class=\"label\">file-earmark-plus-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-plus\"></i>\n      <div class=\"label\">file-earmark-plus</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-post-fill\"></i>\n      <div class=\"label\">file-earmark-post-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-post\"></i>\n      <div class=\"label\">file-earmark-post</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-ppt-fill\"></i>\n      <div class=\"label\">file-earmark-ppt-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-ppt\"></i>\n      <div class=\"label\">file-earmark-ppt</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-richtext-fill\"></i>\n      <div class=\"label\">file-earmark-richtext-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-richtext\"></i>\n      <div class=\"label\">file-earmark-richtext</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-ruled-fill\"></i>\n      <div class=\"label\">file-earmark-ruled-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-ruled\"></i>\n      <div class=\"label\">file-earmark-ruled</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-slides-fill\"></i>\n      <div class=\"label\">file-earmark-slides-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-slides\"></i>\n      <div class=\"label\">file-earmark-slides</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-spreadsheet-fill\"></i>\n      <div class=\"label\">file-earmark-spreadsheet-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-spreadsheet\"></i>\n      <div class=\"label\">file-earmark-spreadsheet</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-text-fill\"></i>\n      <div class=\"label\">file-earmark-text-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-text\"></i>\n      <div class=\"label\">file-earmark-text</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-word-fill\"></i>\n      <div class=\"label\">file-earmark-word-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-word\"></i>\n      <div class=\"label\">file-earmark-word</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-x-fill\"></i>\n      <div class=\"label\">file-earmark-x-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-x\"></i>\n      <div class=\"label\">file-earmark-x</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-zip-fill\"></i>\n      <div class=\"label\">file-earmark-zip-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark-zip\"></i>\n      <div class=\"label\">file-earmark-zip</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-earmark\"></i>\n      <div class=\"label\">file-earmark</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-easel-fill\"></i>\n      <div class=\"label\">file-easel-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-easel\"></i>\n      <div class=\"label\">file-easel</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-excel-fill\"></i>\n      <div class=\"label\">file-excel-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-excel\"></i>\n      <div class=\"label\">file-excel</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-fill\"></i>\n      <div class=\"label\">file-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-font-fill\"></i>\n      <div class=\"label\">file-font-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-font\"></i>\n      <div class=\"label\">file-font</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-image-fill\"></i>\n      <div class=\"label\">file-image-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-image\"></i>\n      <div class=\"label\">file-image</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-lock-fill\"></i>\n      <div class=\"label\">file-lock-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-lock\"></i>\n      <div class=\"label\">file-lock</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-lock2-fill\"></i>\n      <div class=\"label\">file-lock2-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-lock2\"></i>\n      <div class=\"label\">file-lock2</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-medical-fill\"></i>\n      <div class=\"label\">file-medical-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-medical\"></i>\n      <div class=\"label\">file-medical</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-minus-fill\"></i>\n      <div class=\"label\">file-minus-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-minus\"></i>\n      <div class=\"label\">file-minus</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-music-fill\"></i>\n      <div class=\"label\">file-music-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-music\"></i>\n      <div class=\"label\">file-music</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-pdf-fill\"></i>\n      <div class=\"label\">file-pdf-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-pdf\"></i>\n      <div class=\"label\">file-pdf</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-person-fill\"></i>\n      <div class=\"label\">file-person-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-person\"></i>\n      <div class=\"label\">file-person</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-play-fill\"></i>\n      <div class=\"label\">file-play-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-play\"></i>\n      <div class=\"label\">file-play</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-plus-fill\"></i>\n      <div class=\"label\">file-plus-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-plus\"></i>\n      <div class=\"label\">file-plus</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-post-fill\"></i>\n      <div class=\"label\">file-post-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-post\"></i>\n      <div class=\"label\">file-post</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-ppt-fill\"></i>\n      <div class=\"label\">file-ppt-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-ppt\"></i>\n      <div class=\"label\">file-ppt</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-richtext-fill\"></i>\n      <div class=\"label\">file-richtext-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-richtext\"></i>\n      <div class=\"label\">file-richtext</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-ruled-fill\"></i>\n      <div class=\"label\">file-ruled-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-ruled\"></i>\n      <div class=\"label\">file-ruled</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-slides-fill\"></i>\n      <div class=\"label\">file-slides-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-slides\"></i>\n      <div class=\"label\">file-slides</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-spreadsheet-fill\"></i>\n      <div class=\"label\">file-spreadsheet-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-spreadsheet\"></i>\n      <div class=\"label\">file-spreadsheet</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-text-fill\"></i>\n      <div class=\"label\">file-text-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-text\"></i>\n      <div class=\"label\">file-text</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-word-fill\"></i>\n      <div class=\"label\">file-word-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-word\"></i>\n      <div class=\"label\">file-word</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-x-fill\"></i>\n      <div class=\"label\">file-x-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-x\"></i>\n      <div class=\"label\">file-x</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-zip-fill\"></i>\n      <div class=\"label\">file-zip-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file-zip\"></i>\n      <div class=\"label\">file-zip</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-file\"></i>\n      <div class=\"label\">file</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-files-alt\"></i>\n      <div class=\"label\">files-alt</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-files\"></i>\n      <div class=\"label\">files</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-aac\"></i>\n      <div class=\"label\">filetype-aac</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-ai\"></i>\n      <div class=\"label\">filetype-ai</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-bmp\"></i>\n      <div class=\"label\">filetype-bmp</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-cs\"></i>\n      <div class=\"label\">filetype-cs</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-css\"></i>\n      <div class=\"label\">filetype-css</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-csv\"></i>\n      <div class=\"label\">filetype-csv</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-doc\"></i>\n      <div class=\"label\">filetype-doc</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-docx\"></i>\n      <div class=\"label\">filetype-docx</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-exe\"></i>\n      <div class=\"label\">filetype-exe</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-gif\"></i>\n      <div class=\"label\">filetype-gif</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-heic\"></i>\n      <div class=\"label\">filetype-heic</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-html\"></i>\n      <div class=\"label\">filetype-html</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-java\"></i>\n      <div class=\"label\">filetype-java</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-jpg\"></i>\n      <div class=\"label\">filetype-jpg</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-js\"></i>\n      <div class=\"label\">filetype-js</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-json\"></i>\n      <div class=\"label\">filetype-json</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-jsx\"></i>\n      <div class=\"label\">filetype-jsx</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-key\"></i>\n      <div class=\"label\">filetype-key</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-m4p\"></i>\n      <div class=\"label\">filetype-m4p</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-md\"></i>\n      <div class=\"label\">filetype-md</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-mdx\"></i>\n      <div class=\"label\">filetype-mdx</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-mov\"></i>\n      <div class=\"label\">filetype-mov</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-mp3\"></i>\n      <div class=\"label\">filetype-mp3</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-mp4\"></i>\n      <div class=\"label\">filetype-mp4</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-otf\"></i>\n      <div class=\"label\">filetype-otf</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-pdf\"></i>\n      <div class=\"label\">filetype-pdf</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-php\"></i>\n      <div class=\"label\">filetype-php</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-png\"></i>\n      <div class=\"label\">filetype-png</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-ppt\"></i>\n      <div class=\"label\">filetype-ppt</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-pptx\"></i>\n      <div class=\"label\">filetype-pptx</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-psd\"></i>\n      <div class=\"label\">filetype-psd</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-py\"></i>\n      <div class=\"label\">filetype-py</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-raw\"></i>\n      <div class=\"label\">filetype-raw</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-rb\"></i>\n      <div class=\"label\">filetype-rb</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-sass\"></i>\n      <div class=\"label\">filetype-sass</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-scss\"></i>\n      <div class=\"label\">filetype-scss</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-sh\"></i>\n      <div class=\"label\">filetype-sh</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-svg\"></i>\n      <div class=\"label\">filetype-svg</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-tiff\"></i>\n      <div class=\"label\">filetype-tiff</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-tsx\"></i>\n      <div class=\"label\">filetype-tsx</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-ttf\"></i>\n      <div class=\"label\">filetype-ttf</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-txt\"></i>\n      <div class=\"label\">filetype-txt</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-wav\"></i>\n      <div class=\"label\">filetype-wav</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-woff\"></i>\n      <div class=\"label\">filetype-woff</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-xls\"></i>\n      <div class=\"label\">filetype-xls</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-xlsx\"></i>\n      <div class=\"label\">filetype-xlsx</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-xml\"></i>\n      <div class=\"label\">filetype-xml</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filetype-yml\"></i>\n      <div class=\"label\">filetype-yml</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-film\"></i>\n      <div class=\"label\">film</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filter-circle-fill\"></i>\n      <div class=\"label\">filter-circle-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filter-circle\"></i>\n      <div class=\"label\">filter-circle</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filter-left\"></i>\n      <div class=\"label\">filter-left</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filter-right\"></i>\n      <div class=\"label\">filter-right</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filter-square-fill\"></i>\n      <div class=\"label\">filter-square-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filter-square\"></i>\n      <div class=\"label\">filter-square</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-filter\"></i>\n      <div class=\"label\">filter</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-fingerprint\"></i>\n      <div class=\"label\">fingerprint</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-flag-fill\"></i>\n      <div class=\"label\">flag-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-flag\"></i>\n      <div class=\"label\">flag</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-flower1\"></i>\n      <div class=\"label\">flower1</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-flower2\"></i>\n      <div class=\"label\">flower2</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-flower3\"></i>\n      <div class=\"label\">flower3</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-folder-check\"></i>\n      <div class=\"label\">folder-check</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-folder-fill\"></i>\n      <div class=\"label\">folder-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-folder-minus\"></i>\n      <div class=\"label\">folder-minus</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-folder-plus\"></i>\n      <div class=\"label\">folder-plus</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-folder-symlink-fill\"></i>\n      <div class=\"label\">folder-symlink-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-folder-symlink\"></i>\n      <div class=\"label\">folder-symlink</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-folder-x\"></i>\n      <div class=\"label\">folder-x</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-folder\"></i>\n      <div class=\"label\">folder</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-folder2-open\"></i>\n      <div class=\"label\">folder2-open</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-folder2\"></i>\n      <div class=\"label\">folder2</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-fonts\"></i>\n      <div class=\"label\">fonts</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-forward-fill\"></i>\n      <div class=\"label\">forward-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-forward\"></i>\n      <div class=\"label\">forward</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-front\"></i>\n      <div class=\"label\">front</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-fullscreen-exit\"></i>\n      <div class=\"label\">fullscreen-exit</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-fullscreen\"></i>\n      <div class=\"label\">fullscreen</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-funnel-fill\"></i>\n      <div class=\"label\">funnel-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-funnel\"></i>\n      <div class=\"label\">funnel</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-gear-fill\"></i>\n      <div class=\"label\">gear-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-gear-wide-connected\"></i>\n      <div class=\"label\">gear-wide-connected</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-gear-wide\"></i>\n      <div class=\"label\">gear-wide</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-gear\"></i>\n      <div class=\"label\">gear</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-gem\"></i>\n      <div class=\"label\">gem</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-gender-ambiguous\"></i>\n      <div class=\"label\">gender-ambiguous</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-gender-female\"></i>\n      <div class=\"label\">gender-female</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-gender-male\"></i>\n      <div class=\"label\">gender-male</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-gender-trans\"></i>\n      <div class=\"label\">gender-trans</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-geo-alt-fill\"></i>\n      <div class=\"label\">geo-alt-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-geo-alt\"></i>\n      <div class=\"label\">geo-alt</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-geo-fill\"></i>\n      <div class=\"label\">geo-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-geo\"></i>\n      <div class=\"label\">geo</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-gift-fill\"></i>\n      <div class=\"label\">gift-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-gift\"></i>\n      <div class=\"label\">gift</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-git\"></i>\n      <div class=\"label\">git</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-github\"></i>\n      <div class=\"label\">github</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-globe\"></i>\n      <div class=\"label\">globe</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-globe2\"></i>\n      <div class=\"label\">globe2</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-google\"></i>\n      <div class=\"label\">google</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-gpu-card\"></i>\n      <div class=\"label\">gpu-card</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-graph-down-arrow\"></i>\n      <div class=\"label\">graph-down-arrow</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-graph-down\"></i>\n      <div class=\"label\">graph-down</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-graph-up-arrow\"></i>\n      <div class=\"label\">graph-up-arrow</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-graph-up\"></i>\n      <div class=\"label\">graph-up</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-grid-1x2-fill\"></i>\n      <div class=\"label\">grid-1x2-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-grid-1x2\"></i>\n      <div class=\"label\">grid-1x2</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-grid-3x2-gap-fill\"></i>\n      <div class=\"label\">grid-3x2-gap-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-grid-3x2-gap\"></i>\n      <div class=\"label\">grid-3x2-gap</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-grid-3x2\"></i>\n      <div class=\"label\">grid-3x2</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-grid-3x3-gap-fill\"></i>\n      <div class=\"label\">grid-3x3-gap-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-grid-3x3-gap\"></i>\n      <div class=\"label\">grid-3x3-gap</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-grid-3x3\"></i>\n      <div class=\"label\">grid-3x3</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-grid-fill\"></i>\n      <div class=\"label\">grid-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-grid\"></i>\n      <div class=\"label\">grid</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-grip-horizontal\"></i>\n      <div class=\"label\">grip-horizontal</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-grip-vertical\"></i>\n      <div class=\"label\">grip-vertical</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-hammer\"></i>\n      <div class=\"label\">hammer</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-hand-index-fill\"></i>\n      <div class=\"label\">hand-index-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-hand-index-thumb-fill\"></i>\n      <div class=\"label\">hand-index-thumb-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-hand-index-thumb\"></i>\n      <div class=\"label\">hand-index-thumb</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-hand-index\"></i>\n      <div class=\"label\">hand-index</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-hand-thumbs-down-fill\"></i>\n      <div class=\"label\">hand-thumbs-down-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-hand-thumbs-down\"></i>\n      <div class=\"label\">hand-thumbs-down</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-hand-thumbs-up-fill\"></i>\n      <div class=\"label\">hand-thumbs-up-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-hand-thumbs-up\"></i>\n      <div class=\"label\">hand-thumbs-up</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-handbag-fill\"></i>\n      <div class=\"label\">handbag-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-handbag\"></i>\n      <div class=\"label\">handbag</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-hash\"></i>\n      <div class=\"label\">hash</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-hdd-fill\"></i>\n      <div class=\"label\">hdd-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-hdd-network-fill\"></i>\n      <div class=\"label\">hdd-network-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-hdd-network\"></i>\n      <div class=\"label\">hdd-network</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-hdd-rack-fill\"></i>\n      <div class=\"label\">hdd-rack-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-hdd-rack\"></i>\n      <div class=\"label\">hdd-rack</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-hdd-stack-fill\"></i>\n      <div class=\"label\">hdd-stack-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-hdd-stack\"></i>\n      <div class=\"label\">hdd-stack</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-hdd\"></i>\n      <div class=\"label\">hdd</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-hdmi-fill\"></i>\n      <div class=\"label\">hdmi-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-hdmi\"></i>\n      <div class=\"label\">hdmi</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-headphones\"></i>\n      <div class=\"label\">headphones</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-headset-vr\"></i>\n      <div class=\"label\">headset-vr</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-headset\"></i>\n      <div class=\"label\">headset</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-heart-arrow\"></i>\n      <div class=\"label\">heart-arrow</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-heart-fill\"></i>\n      <div class=\"label\">heart-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-heart-half\"></i>\n      <div class=\"label\">heart-half</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-heart-pulse-fill\"></i>\n      <div class=\"label\">heart-pulse-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-heart-pulse\"></i>\n      <div class=\"label\">heart-pulse</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-heart\"></i>\n      <div class=\"label\">heart</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-heartbreak-fill\"></i>\n      <div class=\"label\">heartbreak-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-heartbreak\"></i>\n      <div class=\"label\">heartbreak</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-hearts\"></i>\n      <div class=\"label\">hearts</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-heptagon-fill\"></i>\n      <div class=\"label\">heptagon-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-heptagon-half\"></i>\n      <div class=\"label\">heptagon-half</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-heptagon\"></i>\n      <div class=\"label\">heptagon</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-hexagon-fill\"></i>\n      <div class=\"label\">hexagon-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-hexagon-half\"></i>\n      <div class=\"label\">hexagon-half</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-hexagon\"></i>\n      <div class=\"label\">hexagon</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-hospital-fill\"></i>\n      <div class=\"label\">hospital-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-hospital\"></i>\n      <div class=\"label\">hospital</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-hourglass-bottom\"></i>\n      <div class=\"label\">hourglass-bottom</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-hourglass-split\"></i>\n      <div class=\"label\">hourglass-split</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-hourglass-top\"></i>\n      <div class=\"label\">hourglass-top</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-hourglass\"></i>\n      <div class=\"label\">hourglass</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-house-door-fill\"></i>\n      <div class=\"label\">house-door-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-house-door\"></i>\n      <div class=\"label\">house-door</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-house-fill\"></i>\n      <div class=\"label\">house-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-house-heart-fill\"></i>\n      <div class=\"label\">house-heart-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-house-heart\"></i>\n      <div class=\"label\">house-heart</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-house\"></i>\n      <div class=\"label\">house</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-hr\"></i>\n      <div class=\"label\">hr</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-hurricane\"></i>\n      <div class=\"label\">hurricane</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-hypnotize\"></i>\n      <div class=\"label\">hypnotize</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-image-alt\"></i>\n      <div class=\"label\">image-alt</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-image-fill\"></i>\n      <div class=\"label\">image-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-image\"></i>\n      <div class=\"label\">image</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-images\"></i>\n      <div class=\"label\">images</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-inbox-fill\"></i>\n      <div class=\"label\">inbox-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-inbox\"></i>\n      <div class=\"label\">inbox</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-inboxes-fill\"></i>\n      <div class=\"label\">inboxes-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-inboxes\"></i>\n      <div class=\"label\">inboxes</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-incognito\"></i>\n      <div class=\"label\">incognito</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-infinity\"></i>\n      <div class=\"label\">infinity</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-info-circle-fill\"></i>\n      <div class=\"label\">info-circle-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-info-circle\"></i>\n      <div class=\"label\">info-circle</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-info-lg\"></i>\n      <div class=\"label\">info-lg</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-info-square-fill\"></i>\n      <div class=\"label\">info-square-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-info-square\"></i>\n      <div class=\"label\">info-square</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-info\"></i>\n      <div class=\"label\">info</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-input-cursor-text\"></i>\n      <div class=\"label\">input-cursor-text</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-input-cursor\"></i>\n      <div class=\"label\">input-cursor</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-instagram\"></i>\n      <div class=\"label\">instagram</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-intersect\"></i>\n      <div class=\"label\">intersect</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-journal-album\"></i>\n      <div class=\"label\">journal-album</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-journal-arrow-down\"></i>\n      <div class=\"label\">journal-arrow-down</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-journal-arrow-up\"></i>\n      <div class=\"label\">journal-arrow-up</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-journal-bookmark-fill\"></i>\n      <div class=\"label\">journal-bookmark-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-journal-bookmark\"></i>\n      <div class=\"label\">journal-bookmark</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-journal-check\"></i>\n      <div class=\"label\">journal-check</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-journal-code\"></i>\n      <div class=\"label\">journal-code</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-journal-medical\"></i>\n      <div class=\"label\">journal-medical</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-journal-minus\"></i>\n      <div class=\"label\">journal-minus</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-journal-plus\"></i>\n      <div class=\"label\">journal-plus</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-journal-richtext\"></i>\n      <div class=\"label\">journal-richtext</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-journal-text\"></i>\n      <div class=\"label\">journal-text</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-journal-x\"></i>\n      <div class=\"label\">journal-x</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-journal\"></i>\n      <div class=\"label\">journal</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-journals\"></i>\n      <div class=\"label\">journals</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-joystick\"></i>\n      <div class=\"label\">joystick</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-justify-left\"></i>\n      <div class=\"label\">justify-left</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-justify-right\"></i>\n      <div class=\"label\">justify-right</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-justify\"></i>\n      <div class=\"label\">justify</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-kanban-fill\"></i>\n      <div class=\"label\">kanban-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-kanban\"></i>\n      <div class=\"label\">kanban</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-key-fill\"></i>\n      <div class=\"label\">key-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-key\"></i>\n      <div class=\"label\">key</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-keyboard-fill\"></i>\n      <div class=\"label\">keyboard-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-keyboard\"></i>\n      <div class=\"label\">keyboard</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-ladder\"></i>\n      <div class=\"label\">ladder</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-lamp-fill\"></i>\n      <div class=\"label\">lamp-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-lamp\"></i>\n      <div class=\"label\">lamp</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-laptop-fill\"></i>\n      <div class=\"label\">laptop-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-laptop\"></i>\n      <div class=\"label\">laptop</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-layer-backward\"></i>\n      <div class=\"label\">layer-backward</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-layer-forward\"></i>\n      <div class=\"label\">layer-forward</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-layers-fill\"></i>\n      <div class=\"label\">layers-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-layers-half\"></i>\n      <div class=\"label\">layers-half</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-layers\"></i>\n      <div class=\"label\">layers</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-layout-sidebar-inset-reverse\"></i>\n      <div class=\"label\">layout-sidebar-inset-reverse</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-layout-sidebar-inset\"></i>\n      <div class=\"label\">layout-sidebar-inset</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-layout-sidebar-reverse\"></i>\n      <div class=\"label\">layout-sidebar-reverse</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-layout-sidebar\"></i>\n      <div class=\"label\">layout-sidebar</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-layout-split\"></i>\n      <div class=\"label\">layout-split</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-layout-text-sidebar-reverse\"></i>\n      <div class=\"label\">layout-text-sidebar-reverse</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-layout-text-sidebar\"></i>\n      <div class=\"label\">layout-text-sidebar</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-layout-text-window-reverse\"></i>\n      <div class=\"label\">layout-text-window-reverse</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-layout-text-window\"></i>\n      <div class=\"label\">layout-text-window</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-layout-three-columns\"></i>\n      <div class=\"label\">layout-three-columns</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-layout-wtf\"></i>\n      <div class=\"label\">layout-wtf</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-life-preserver\"></i>\n      <div class=\"label\">life-preserver</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-lightbulb-fill\"></i>\n      <div class=\"label\">lightbulb-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-lightbulb-off-fill\"></i>\n      <div class=\"label\">lightbulb-off-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-lightbulb-off\"></i>\n      <div class=\"label\">lightbulb-off</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-lightbulb\"></i>\n      <div class=\"label\">lightbulb</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-lightning-charge-fill\"></i>\n      <div class=\"label\">lightning-charge-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-lightning-charge\"></i>\n      <div class=\"label\">lightning-charge</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-lightning-fill\"></i>\n      <div class=\"label\">lightning-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-lightning\"></i>\n      <div class=\"label\">lightning</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-line\"></i>\n      <div class=\"label\">line</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-link-45deg\"></i>\n      <div class=\"label\">link-45deg</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-link\"></i>\n      <div class=\"label\">link</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-linkedin\"></i>\n      <div class=\"label\">linkedin</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-list-check\"></i>\n      <div class=\"label\">list-check</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-list-columns-reverse\"></i>\n      <div class=\"label\">list-columns-reverse</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-list-columns\"></i>\n      <div class=\"label\">list-columns</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-list-nested\"></i>\n      <div class=\"label\">list-nested</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-list-ol\"></i>\n      <div class=\"label\">list-ol</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-list-stars\"></i>\n      <div class=\"label\">list-stars</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-list-task\"></i>\n      <div class=\"label\">list-task</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-list-ul\"></i>\n      <div class=\"label\">list-ul</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-list\"></i>\n      <div class=\"label\">list</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-lock-fill\"></i>\n      <div class=\"label\">lock-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-lock\"></i>\n      <div class=\"label\">lock</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-magic\"></i>\n      <div class=\"label\">magic</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-magnet-fill\"></i>\n      <div class=\"label\">magnet-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-magnet\"></i>\n      <div class=\"label\">magnet</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-mailbox\"></i>\n      <div class=\"label\">mailbox</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-mailbox2\"></i>\n      <div class=\"label\">mailbox2</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-map-fill\"></i>\n      <div class=\"label\">map-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-map\"></i>\n      <div class=\"label\">map</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-markdown-fill\"></i>\n      <div class=\"label\">markdown-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-markdown\"></i>\n      <div class=\"label\">markdown</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-mask\"></i>\n      <div class=\"label\">mask</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-mastodon\"></i>\n      <div class=\"label\">mastodon</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-medium\"></i>\n      <div class=\"label\">medium</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-megaphone-fill\"></i>\n      <div class=\"label\">megaphone-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-megaphone\"></i>\n      <div class=\"label\">megaphone</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-memory\"></i>\n      <div class=\"label\">memory</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-menu-app-fill\"></i>\n      <div class=\"label\">menu-app-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-menu-app\"></i>\n      <div class=\"label\">menu-app</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-menu-button-fill\"></i>\n      <div class=\"label\">menu-button-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-menu-button-wide-fill\"></i>\n      <div class=\"label\">menu-button-wide-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-menu-button-wide\"></i>\n      <div class=\"label\">menu-button-wide</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-menu-button\"></i>\n      <div class=\"label\">menu-button</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-menu-down\"></i>\n      <div class=\"label\">menu-down</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-menu-up\"></i>\n      <div class=\"label\">menu-up</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-messenger\"></i>\n      <div class=\"label\">messenger</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-meta\"></i>\n      <div class=\"label\">meta</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-mic-fill\"></i>\n      <div class=\"label\">mic-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-mic-mute-fill\"></i>\n      <div class=\"label\">mic-mute-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-mic-mute\"></i>\n      <div class=\"label\">mic-mute</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-mic\"></i>\n      <div class=\"label\">mic</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-microsoft\"></i>\n      <div class=\"label\">microsoft</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-minecart-loaded\"></i>\n      <div class=\"label\">minecart-loaded</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-minecart\"></i>\n      <div class=\"label\">minecart</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-modem-fill\"></i>\n      <div class=\"label\">modem-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-modem\"></i>\n      <div class=\"label\">modem</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-moisture\"></i>\n      <div class=\"label\">moisture</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-moon-fill\"></i>\n      <div class=\"label\">moon-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-moon-stars-fill\"></i>\n      <div class=\"label\">moon-stars-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-moon-stars\"></i>\n      <div class=\"label\">moon-stars</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-moon\"></i>\n      <div class=\"label\">moon</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-mortarboard-fill\"></i>\n      <div class=\"label\">mortarboard-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-mortarboard\"></i>\n      <div class=\"label\">mortarboard</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-motherboard-fill\"></i>\n      <div class=\"label\">motherboard-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-motherboard\"></i>\n      <div class=\"label\">motherboard</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-mouse-fill\"></i>\n      <div class=\"label\">mouse-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-mouse\"></i>\n      <div class=\"label\">mouse</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-mouse2-fill\"></i>\n      <div class=\"label\">mouse2-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-mouse2\"></i>\n      <div class=\"label\">mouse2</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-mouse3-fill\"></i>\n      <div class=\"label\">mouse3-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-mouse3\"></i>\n      <div class=\"label\">mouse3</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-music-note-beamed\"></i>\n      <div class=\"label\">music-note-beamed</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-music-note-list\"></i>\n      <div class=\"label\">music-note-list</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-music-note\"></i>\n      <div class=\"label\">music-note</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-music-player-fill\"></i>\n      <div class=\"label\">music-player-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-music-player\"></i>\n      <div class=\"label\">music-player</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-newspaper\"></i>\n      <div class=\"label\">newspaper</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-nintendo-switch\"></i>\n      <div class=\"label\">nintendo-switch</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-node-minus-fill\"></i>\n      <div class=\"label\">node-minus-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-node-minus\"></i>\n      <div class=\"label\">node-minus</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-node-plus-fill\"></i>\n      <div class=\"label\">node-plus-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-node-plus\"></i>\n      <div class=\"label\">node-plus</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-nut-fill\"></i>\n      <div class=\"label\">nut-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-nut\"></i>\n      <div class=\"label\">nut</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-octagon-fill\"></i>\n      <div class=\"label\">octagon-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-octagon-half\"></i>\n      <div class=\"label\">octagon-half</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-octagon\"></i>\n      <div class=\"label\">octagon</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-optical-audio-fill\"></i>\n      <div class=\"label\">optical-audio-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-optical-audio\"></i>\n      <div class=\"label\">optical-audio</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-option\"></i>\n      <div class=\"label\">option</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-outlet\"></i>\n      <div class=\"label\">outlet</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-paint-bucket\"></i>\n      <div class=\"label\">paint-bucket</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-palette-fill\"></i>\n      <div class=\"label\">palette-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-palette\"></i>\n      <div class=\"label\">palette</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-palette2\"></i>\n      <div class=\"label\">palette2</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-paperclip\"></i>\n      <div class=\"label\">paperclip</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-paragraph\"></i>\n      <div class=\"label\">paragraph</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-patch-check-fill\"></i>\n      <div class=\"label\">patch-check-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-patch-check\"></i>\n      <div class=\"label\">patch-check</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-patch-exclamation-fill\"></i>\n      <div class=\"label\">patch-exclamation-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-patch-exclamation\"></i>\n      <div class=\"label\">patch-exclamation</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-patch-minus-fill\"></i>\n      <div class=\"label\">patch-minus-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-patch-minus\"></i>\n      <div class=\"label\">patch-minus</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-patch-plus-fill\"></i>\n      <div class=\"label\">patch-plus-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-patch-plus\"></i>\n      <div class=\"label\">patch-plus</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-patch-question-fill\"></i>\n      <div class=\"label\">patch-question-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-patch-question\"></i>\n      <div class=\"label\">patch-question</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-pause-btn-fill\"></i>\n      <div class=\"label\">pause-btn-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-pause-btn\"></i>\n      <div class=\"label\">pause-btn</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-pause-circle-fill\"></i>\n      <div class=\"label\">pause-circle-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-pause-circle\"></i>\n      <div class=\"label\">pause-circle</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-pause-fill\"></i>\n      <div class=\"label\">pause-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-pause\"></i>\n      <div class=\"label\">pause</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-paypal\"></i>\n      <div class=\"label\">paypal</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-pc-display-horizontal\"></i>\n      <div class=\"label\">pc-display-horizontal</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-pc-display\"></i>\n      <div class=\"label\">pc-display</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-pc-horizontal\"></i>\n      <div class=\"label\">pc-horizontal</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-pc\"></i>\n      <div class=\"label\">pc</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-pci-card\"></i>\n      <div class=\"label\">pci-card</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-peace-fill\"></i>\n      <div class=\"label\">peace-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-peace\"></i>\n      <div class=\"label\">peace</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-pen-fill\"></i>\n      <div class=\"label\">pen-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-pen\"></i>\n      <div class=\"label\">pen</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-pencil-fill\"></i>\n      <div class=\"label\">pencil-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-pencil-square\"></i>\n      <div class=\"label\">pencil-square</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-pencil\"></i>\n      <div class=\"label\">pencil</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-pentagon-fill\"></i>\n      <div class=\"label\">pentagon-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-pentagon-half\"></i>\n      <div class=\"label\">pentagon-half</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-pentagon\"></i>\n      <div class=\"label\">pentagon</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-people-fill\"></i>\n      <div class=\"label\">people-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-people\"></i>\n      <div class=\"label\">people</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-percent\"></i>\n      <div class=\"label\">percent</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-person-badge-fill\"></i>\n      <div class=\"label\">person-badge-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-person-badge\"></i>\n      <div class=\"label\">person-badge</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-person-bounding-box\"></i>\n      <div class=\"label\">person-bounding-box</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-person-check-fill\"></i>\n      <div class=\"label\">person-check-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-person-check\"></i>\n      <div class=\"label\">person-check</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-person-circle\"></i>\n      <div class=\"label\">person-circle</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-person-dash-fill\"></i>\n      <div class=\"label\">person-dash-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-person-dash\"></i>\n      <div class=\"label\">person-dash</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-person-fill\"></i>\n      <div class=\"label\">person-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-person-heart\"></i>\n      <div class=\"label\">person-heart</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-person-hearts\"></i>\n      <div class=\"label\">person-hearts</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-person-lines-fill\"></i>\n      <div class=\"label\">person-lines-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-person-plus-fill\"></i>\n      <div class=\"label\">person-plus-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-person-plus\"></i>\n      <div class=\"label\">person-plus</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-person-rolodex\"></i>\n      <div class=\"label\">person-rolodex</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-person-square\"></i>\n      <div class=\"label\">person-square</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-person-video\"></i>\n      <div class=\"label\">person-video</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-person-video2\"></i>\n      <div class=\"label\">person-video2</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-person-video3\"></i>\n      <div class=\"label\">person-video3</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-person-workspace\"></i>\n      <div class=\"label\">person-workspace</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-person-x-fill\"></i>\n      <div class=\"label\">person-x-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-person-x\"></i>\n      <div class=\"label\">person-x</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-person\"></i>\n      <div class=\"label\">person</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-phone-fill\"></i>\n      <div class=\"label\">phone-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-phone-flip\"></i>\n      <div class=\"label\">phone-flip</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-phone-landscape-fill\"></i>\n      <div class=\"label\">phone-landscape-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-phone-landscape\"></i>\n      <div class=\"label\">phone-landscape</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-phone-vibrate-fill\"></i>\n      <div class=\"label\">phone-vibrate-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-phone-vibrate\"></i>\n      <div class=\"label\">phone-vibrate</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-phone\"></i>\n      <div class=\"label\">phone</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-pie-chart-fill\"></i>\n      <div class=\"label\">pie-chart-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-pie-chart\"></i>\n      <div class=\"label\">pie-chart</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-piggy-bank-fill\"></i>\n      <div class=\"label\">piggy-bank-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-piggy-bank\"></i>\n      <div class=\"label\">piggy-bank</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-pin-angle-fill\"></i>\n      <div class=\"label\">pin-angle-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-pin-angle\"></i>\n      <div class=\"label\">pin-angle</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-pin-fill\"></i>\n      <div class=\"label\">pin-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-pin-map-fill\"></i>\n      <div class=\"label\">pin-map-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-pin-map\"></i>\n      <div class=\"label\">pin-map</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-pin\"></i>\n      <div class=\"label\">pin</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-pinterest\"></i>\n      <div class=\"label\">pinterest</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-pip-fill\"></i>\n      <div class=\"label\">pip-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-pip\"></i>\n      <div class=\"label\">pip</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-play-btn-fill\"></i>\n      <div class=\"label\">play-btn-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-play-btn\"></i>\n      <div class=\"label\">play-btn</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-play-circle-fill\"></i>\n      <div class=\"label\">play-circle-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-play-circle\"></i>\n      <div class=\"label\">play-circle</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-play-fill\"></i>\n      <div class=\"label\">play-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-play\"></i>\n      <div class=\"label\">play</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-playstation\"></i>\n      <div class=\"label\">playstation</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-plug-fill\"></i>\n      <div class=\"label\">plug-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-plug\"></i>\n      <div class=\"label\">plug</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-plugin\"></i>\n      <div class=\"label\">plugin</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-plus-circle-dotted\"></i>\n      <div class=\"label\">plus-circle-dotted</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-plus-circle-fill\"></i>\n      <div class=\"label\">plus-circle-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-plus-circle\"></i>\n      <div class=\"label\">plus-circle</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-plus-lg\"></i>\n      <div class=\"label\">plus-lg</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-plus-slash-minus\"></i>\n      <div class=\"label\">plus-slash-minus</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-plus-square-dotted\"></i>\n      <div class=\"label\">plus-square-dotted</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-plus-square-fill\"></i>\n      <div class=\"label\">plus-square-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-plus-square\"></i>\n      <div class=\"label\">plus-square</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-plus\"></i>\n      <div class=\"label\">plus</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-postage-fill\"></i>\n      <div class=\"label\">postage-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-postage-heart-fill\"></i>\n      <div class=\"label\">postage-heart-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-postage-heart\"></i>\n      <div class=\"label\">postage-heart</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-postage\"></i>\n      <div class=\"label\">postage</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-postcard-fill\"></i>\n      <div class=\"label\">postcard-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-postcard-heart-fill\"></i>\n      <div class=\"label\">postcard-heart-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-postcard-heart\"></i>\n      <div class=\"label\">postcard-heart</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-postcard\"></i>\n      <div class=\"label\">postcard</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-power\"></i>\n      <div class=\"label\">power</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-printer-fill\"></i>\n      <div class=\"label\">printer-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-printer\"></i>\n      <div class=\"label\">printer</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-projector-fill\"></i>\n      <div class=\"label\">projector-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-projector\"></i>\n      <div class=\"label\">projector</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-puzzle-fill\"></i>\n      <div class=\"label\">puzzle-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-puzzle\"></i>\n      <div class=\"label\">puzzle</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-qr-code-scan\"></i>\n      <div class=\"label\">qr-code-scan</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-qr-code\"></i>\n      <div class=\"label\">qr-code</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-question-circle-fill\"></i>\n      <div class=\"label\">question-circle-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-question-circle\"></i>\n      <div class=\"label\">question-circle</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-question-diamond-fill\"></i>\n      <div class=\"label\">question-diamond-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-question-diamond\"></i>\n      <div class=\"label\">question-diamond</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-question-lg\"></i>\n      <div class=\"label\">question-lg</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-question-octagon-fill\"></i>\n      <div class=\"label\">question-octagon-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-question-octagon\"></i>\n      <div class=\"label\">question-octagon</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-question-square-fill\"></i>\n      <div class=\"label\">question-square-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-question-square\"></i>\n      <div class=\"label\">question-square</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-question\"></i>\n      <div class=\"label\">question</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-quora\"></i>\n      <div class=\"label\">quora</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-quote\"></i>\n      <div class=\"label\">quote</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-radioactive\"></i>\n      <div class=\"label\">radioactive</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-rainbow\"></i>\n      <div class=\"label\">rainbow</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-receipt-cutoff\"></i>\n      <div class=\"label\">receipt-cutoff</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-receipt\"></i>\n      <div class=\"label\">receipt</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-reception-0\"></i>\n      <div class=\"label\">reception-0</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-reception-1\"></i>\n      <div class=\"label\">reception-1</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-reception-2\"></i>\n      <div class=\"label\">reception-2</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-reception-3\"></i>\n      <div class=\"label\">reception-3</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-reception-4\"></i>\n      <div class=\"label\">reception-4</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-record-btn-fill\"></i>\n      <div class=\"label\">record-btn-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-record-btn\"></i>\n      <div class=\"label\">record-btn</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-record-circle-fill\"></i>\n      <div class=\"label\">record-circle-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-record-circle\"></i>\n      <div class=\"label\">record-circle</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-record-fill\"></i>\n      <div class=\"label\">record-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-record\"></i>\n      <div class=\"label\">record</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-record2-fill\"></i>\n      <div class=\"label\">record2-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-record2\"></i>\n      <div class=\"label\">record2</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-recycle\"></i>\n      <div class=\"label\">recycle</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-reddit\"></i>\n      <div class=\"label\">reddit</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-reply-all-fill\"></i>\n      <div class=\"label\">reply-all-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-reply-all\"></i>\n      <div class=\"label\">reply-all</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-reply-fill\"></i>\n      <div class=\"label\">reply-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-reply\"></i>\n      <div class=\"label\">reply</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-robot\"></i>\n      <div class=\"label\">robot</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-router-fill\"></i>\n      <div class=\"label\">router-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-router\"></i>\n      <div class=\"label\">router</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-rss-fill\"></i>\n      <div class=\"label\">rss-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-rss\"></i>\n      <div class=\"label\">rss</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-rulers\"></i>\n      <div class=\"label\">rulers</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-safe-fill\"></i>\n      <div class=\"label\">safe-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-safe\"></i>\n      <div class=\"label\">safe</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-safe2-fill\"></i>\n      <div class=\"label\">safe2-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-safe2\"></i>\n      <div class=\"label\">safe2</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-save-fill\"></i>\n      <div class=\"label\">save-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-save\"></i>\n      <div class=\"label\">save</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-save2-fill\"></i>\n      <div class=\"label\">save2-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-save2\"></i>\n      <div class=\"label\">save2</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-scissors\"></i>\n      <div class=\"label\">scissors</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-screwdriver\"></i>\n      <div class=\"label\">screwdriver</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-sd-card-fill\"></i>\n      <div class=\"label\">sd-card-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-sd-card\"></i>\n      <div class=\"label\">sd-card</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-search-heart-fill\"></i>\n      <div class=\"label\">search-heart-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-search-heart\"></i>\n      <div class=\"label\">search-heart</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-search\"></i>\n      <div class=\"label\">search</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-segmented-nav\"></i>\n      <div class=\"label\">segmented-nav</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-send-check-fill\"></i>\n      <div class=\"label\">send-check-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-send-check\"></i>\n      <div class=\"label\">send-check</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-send-dash-fill\"></i>\n      <div class=\"label\">send-dash-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-send-dash\"></i>\n      <div class=\"label\">send-dash</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-send-exclamation-fill\"></i>\n      <div class=\"label\">send-exclamation-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-send-exclamation\"></i>\n      <div class=\"label\">send-exclamation</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-send-fill\"></i>\n      <div class=\"label\">send-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-send-plus-fill\"></i>\n      <div class=\"label\">send-plus-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-send-plus\"></i>\n      <div class=\"label\">send-plus</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-send-slash-fill\"></i>\n      <div class=\"label\">send-slash-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-send-slash\"></i>\n      <div class=\"label\">send-slash</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-send-x-fill\"></i>\n      <div class=\"label\">send-x-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-send-x\"></i>\n      <div class=\"label\">send-x</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-send\"></i>\n      <div class=\"label\">send</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-server\"></i>\n      <div class=\"label\">server</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-share-fill\"></i>\n      <div class=\"label\">share-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-share\"></i>\n      <div class=\"label\">share</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-shield-check\"></i>\n      <div class=\"label\">shield-check</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-shield-exclamation\"></i>\n      <div class=\"label\">shield-exclamation</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-shield-fill-check\"></i>\n      <div class=\"label\">shield-fill-check</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-shield-fill-exclamation\"></i>\n      <div class=\"label\">shield-fill-exclamation</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-shield-fill-minus\"></i>\n      <div class=\"label\">shield-fill-minus</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-shield-fill-plus\"></i>\n      <div class=\"label\">shield-fill-plus</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-shield-fill-x\"></i>\n      <div class=\"label\">shield-fill-x</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-shield-fill\"></i>\n      <div class=\"label\">shield-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-shield-lock-fill\"></i>\n      <div class=\"label\">shield-lock-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-shield-lock\"></i>\n      <div class=\"label\">shield-lock</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-shield-minus\"></i>\n      <div class=\"label\">shield-minus</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-shield-plus\"></i>\n      <div class=\"label\">shield-plus</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-shield-shaded\"></i>\n      <div class=\"label\">shield-shaded</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-shield-slash-fill\"></i>\n      <div class=\"label\">shield-slash-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-shield-slash\"></i>\n      <div class=\"label\">shield-slash</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-shield-x\"></i>\n      <div class=\"label\">shield-x</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-shield\"></i>\n      <div class=\"label\">shield</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-shift-fill\"></i>\n      <div class=\"label\">shift-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-shift\"></i>\n      <div class=\"label\">shift</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-shop-window\"></i>\n      <div class=\"label\">shop-window</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-shop\"></i>\n      <div class=\"label\">shop</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-shuffle\"></i>\n      <div class=\"label\">shuffle</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-signal\"></i>\n      <div class=\"label\">signal</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-signpost-2-fill\"></i>\n      <div class=\"label\">signpost-2-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-signpost-2\"></i>\n      <div class=\"label\">signpost-2</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-signpost-fill\"></i>\n      <div class=\"label\">signpost-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-signpost-split-fill\"></i>\n      <div class=\"label\">signpost-split-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-signpost-split\"></i>\n      <div class=\"label\">signpost-split</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-signpost\"></i>\n      <div class=\"label\">signpost</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-sim-fill\"></i>\n      <div class=\"label\">sim-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-sim\"></i>\n      <div class=\"label\">sim</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-skip-backward-btn-fill\"></i>\n      <div class=\"label\">skip-backward-btn-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-skip-backward-btn\"></i>\n      <div class=\"label\">skip-backward-btn</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-skip-backward-circle-fill\"></i>\n      <div class=\"label\">skip-backward-circle-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-skip-backward-circle\"></i>\n      <div class=\"label\">skip-backward-circle</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-skip-backward-fill\"></i>\n      <div class=\"label\">skip-backward-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-skip-backward\"></i>\n      <div class=\"label\">skip-backward</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-skip-end-btn-fill\"></i>\n      <div class=\"label\">skip-end-btn-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-skip-end-btn\"></i>\n      <div class=\"label\">skip-end-btn</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-skip-end-circle-fill\"></i>\n      <div class=\"label\">skip-end-circle-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-skip-end-circle\"></i>\n      <div class=\"label\">skip-end-circle</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-skip-end-fill\"></i>\n      <div class=\"label\">skip-end-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-skip-end\"></i>\n      <div class=\"label\">skip-end</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-skip-forward-btn-fill\"></i>\n      <div class=\"label\">skip-forward-btn-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-skip-forward-btn\"></i>\n      <div class=\"label\">skip-forward-btn</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-skip-forward-circle-fill\"></i>\n      <div class=\"label\">skip-forward-circle-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-skip-forward-circle\"></i>\n      <div class=\"label\">skip-forward-circle</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-skip-forward-fill\"></i>\n      <div class=\"label\">skip-forward-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-skip-forward\"></i>\n      <div class=\"label\">skip-forward</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-skip-start-btn-fill\"></i>\n      <div class=\"label\">skip-start-btn-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-skip-start-btn\"></i>\n      <div class=\"label\">skip-start-btn</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-skip-start-circle-fill\"></i>\n      <div class=\"label\">skip-start-circle-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-skip-start-circle\"></i>\n      <div class=\"label\">skip-start-circle</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-skip-start-fill\"></i>\n      <div class=\"label\">skip-start-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-skip-start\"></i>\n      <div class=\"label\">skip-start</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-skype\"></i>\n      <div class=\"label\">skype</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-slack\"></i>\n      <div class=\"label\">slack</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-slash-circle-fill\"></i>\n      <div class=\"label\">slash-circle-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-slash-circle\"></i>\n      <div class=\"label\">slash-circle</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-slash-lg\"></i>\n      <div class=\"label\">slash-lg</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-slash-square-fill\"></i>\n      <div class=\"label\">slash-square-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-slash-square\"></i>\n      <div class=\"label\">slash-square</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-slash\"></i>\n      <div class=\"label\">slash</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-sliders\"></i>\n      <div class=\"label\">sliders</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-sliders2-vertical\"></i>\n      <div class=\"label\">sliders2-vertical</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-sliders2\"></i>\n      <div class=\"label\">sliders2</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-smartwatch\"></i>\n      <div class=\"label\">smartwatch</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-snapchat\"></i>\n      <div class=\"label\">snapchat</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-snow\"></i>\n      <div class=\"label\">snow</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-snow2\"></i>\n      <div class=\"label\">snow2</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-snow3\"></i>\n      <div class=\"label\">snow3</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-sort-alpha-down-alt\"></i>\n      <div class=\"label\">sort-alpha-down-alt</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-sort-alpha-down\"></i>\n      <div class=\"label\">sort-alpha-down</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-sort-alpha-up-alt\"></i>\n      <div class=\"label\">sort-alpha-up-alt</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-sort-alpha-up\"></i>\n      <div class=\"label\">sort-alpha-up</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-sort-down-alt\"></i>\n      <div class=\"label\">sort-down-alt</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-sort-down\"></i>\n      <div class=\"label\">sort-down</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-sort-numeric-down-alt\"></i>\n      <div class=\"label\">sort-numeric-down-alt</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-sort-numeric-down\"></i>\n      <div class=\"label\">sort-numeric-down</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-sort-numeric-up-alt\"></i>\n      <div class=\"label\">sort-numeric-up-alt</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-sort-numeric-up\"></i>\n      <div class=\"label\">sort-numeric-up</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-sort-up-alt\"></i>\n      <div class=\"label\">sort-up-alt</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-sort-up\"></i>\n      <div class=\"label\">sort-up</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-soundwave\"></i>\n      <div class=\"label\">soundwave</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-speaker-fill\"></i>\n      <div class=\"label\">speaker-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-speaker\"></i>\n      <div class=\"label\">speaker</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-speedometer\"></i>\n      <div class=\"label\">speedometer</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-speedometer2\"></i>\n      <div class=\"label\">speedometer2</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-spellcheck\"></i>\n      <div class=\"label\">spellcheck</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-spotify\"></i>\n      <div class=\"label\">spotify</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-square-fill\"></i>\n      <div class=\"label\">square-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-square-half\"></i>\n      <div class=\"label\">square-half</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-square\"></i>\n      <div class=\"label\">square</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-stack-overflow\"></i>\n      <div class=\"label\">stack-overflow</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-stack\"></i>\n      <div class=\"label\">stack</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-star-fill\"></i>\n      <div class=\"label\">star-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-star-half\"></i>\n      <div class=\"label\">star-half</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-star\"></i>\n      <div class=\"label\">star</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-stars\"></i>\n      <div class=\"label\">stars</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-steam\"></i>\n      <div class=\"label\">steam</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-stickies-fill\"></i>\n      <div class=\"label\">stickies-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-stickies\"></i>\n      <div class=\"label\">stickies</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-sticky-fill\"></i>\n      <div class=\"label\">sticky-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-sticky\"></i>\n      <div class=\"label\">sticky</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-stop-btn-fill\"></i>\n      <div class=\"label\">stop-btn-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-stop-btn\"></i>\n      <div class=\"label\">stop-btn</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-stop-circle-fill\"></i>\n      <div class=\"label\">stop-circle-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-stop-circle\"></i>\n      <div class=\"label\">stop-circle</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-stop-fill\"></i>\n      <div class=\"label\">stop-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-stop\"></i>\n      <div class=\"label\">stop</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-stoplights-fill\"></i>\n      <div class=\"label\">stoplights-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-stoplights\"></i>\n      <div class=\"label\">stoplights</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-stopwatch-fill\"></i>\n      <div class=\"label\">stopwatch-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-stopwatch\"></i>\n      <div class=\"label\">stopwatch</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-strava\"></i>\n      <div class=\"label\">strava</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-subtract\"></i>\n      <div class=\"label\">subtract</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-suit-club-fill\"></i>\n      <div class=\"label\">suit-club-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-suit-club\"></i>\n      <div class=\"label\">suit-club</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-suit-diamond-fill\"></i>\n      <div class=\"label\">suit-diamond-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-suit-diamond\"></i>\n      <div class=\"label\">suit-diamond</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-suit-heart-fill\"></i>\n      <div class=\"label\">suit-heart-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-suit-heart\"></i>\n      <div class=\"label\">suit-heart</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-suit-spade-fill\"></i>\n      <div class=\"label\">suit-spade-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-suit-spade\"></i>\n      <div class=\"label\">suit-spade</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-sun-fill\"></i>\n      <div class=\"label\">sun-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-sun\"></i>\n      <div class=\"label\">sun</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-sunglasses\"></i>\n      <div class=\"label\">sunglasses</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-sunrise-fill\"></i>\n      <div class=\"label\">sunrise-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-sunrise\"></i>\n      <div class=\"label\">sunrise</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-sunset-fill\"></i>\n      <div class=\"label\">sunset-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-sunset\"></i>\n      <div class=\"label\">sunset</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-symmetry-horizontal\"></i>\n      <div class=\"label\">symmetry-horizontal</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-symmetry-vertical\"></i>\n      <div class=\"label\">symmetry-vertical</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-table\"></i>\n      <div class=\"label\">table</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-tablet-fill\"></i>\n      <div class=\"label\">tablet-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-tablet-landscape-fill\"></i>\n      <div class=\"label\">tablet-landscape-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-tablet-landscape\"></i>\n      <div class=\"label\">tablet-landscape</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-tablet\"></i>\n      <div class=\"label\">tablet</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-tag-fill\"></i>\n      <div class=\"label\">tag-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-tag\"></i>\n      <div class=\"label\">tag</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-tags-fill\"></i>\n      <div class=\"label\">tags-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-tags\"></i>\n      <div class=\"label\">tags</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-telegram\"></i>\n      <div class=\"label\">telegram</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-telephone-fill\"></i>\n      <div class=\"label\">telephone-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-telephone-forward-fill\"></i>\n      <div class=\"label\">telephone-forward-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-telephone-forward\"></i>\n      <div class=\"label\">telephone-forward</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-telephone-inbound-fill\"></i>\n      <div class=\"label\">telephone-inbound-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-telephone-inbound\"></i>\n      <div class=\"label\">telephone-inbound</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-telephone-minus-fill\"></i>\n      <div class=\"label\">telephone-minus-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-telephone-minus\"></i>\n      <div class=\"label\">telephone-minus</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-telephone-outbound-fill\"></i>\n      <div class=\"label\">telephone-outbound-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-telephone-outbound\"></i>\n      <div class=\"label\">telephone-outbound</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-telephone-plus-fill\"></i>\n      <div class=\"label\">telephone-plus-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-telephone-plus\"></i>\n      <div class=\"label\">telephone-plus</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-telephone-x-fill\"></i>\n      <div class=\"label\">telephone-x-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-telephone-x\"></i>\n      <div class=\"label\">telephone-x</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-telephone\"></i>\n      <div class=\"label\">telephone</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-terminal-dash\"></i>\n      <div class=\"label\">terminal-dash</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-terminal-fill\"></i>\n      <div class=\"label\">terminal-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-terminal-plus\"></i>\n      <div class=\"label\">terminal-plus</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-terminal-split\"></i>\n      <div class=\"label\">terminal-split</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-terminal-x\"></i>\n      <div class=\"label\">terminal-x</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-terminal\"></i>\n      <div class=\"label\">terminal</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-text-center\"></i>\n      <div class=\"label\">text-center</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-text-indent-left\"></i>\n      <div class=\"label\">text-indent-left</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-text-indent-right\"></i>\n      <div class=\"label\">text-indent-right</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-text-left\"></i>\n      <div class=\"label\">text-left</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-text-paragraph\"></i>\n      <div class=\"label\">text-paragraph</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-text-right\"></i>\n      <div class=\"label\">text-right</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-textarea-resize\"></i>\n      <div class=\"label\">textarea-resize</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-textarea-t\"></i>\n      <div class=\"label\">textarea-t</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-textarea\"></i>\n      <div class=\"label\">textarea</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-thermometer-half\"></i>\n      <div class=\"label\">thermometer-half</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-thermometer-high\"></i>\n      <div class=\"label\">thermometer-high</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-thermometer-low\"></i>\n      <div class=\"label\">thermometer-low</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-thermometer-snow\"></i>\n      <div class=\"label\">thermometer-snow</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-thermometer-sun\"></i>\n      <div class=\"label\">thermometer-sun</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-thermometer\"></i>\n      <div class=\"label\">thermometer</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-three-dots-vertical\"></i>\n      <div class=\"label\">three-dots-vertical</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-three-dots\"></i>\n      <div class=\"label\">three-dots</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-thunderbolt-fill\"></i>\n      <div class=\"label\">thunderbolt-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-thunderbolt\"></i>\n      <div class=\"label\">thunderbolt</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-ticket-detailed-fill\"></i>\n      <div class=\"label\">ticket-detailed-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-ticket-detailed\"></i>\n      <div class=\"label\">ticket-detailed</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-ticket-fill\"></i>\n      <div class=\"label\">ticket-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-ticket-perforated-fill\"></i>\n      <div class=\"label\">ticket-perforated-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-ticket-perforated\"></i>\n      <div class=\"label\">ticket-perforated</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-ticket\"></i>\n      <div class=\"label\">ticket</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-tiktok\"></i>\n      <div class=\"label\">tiktok</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-toggle-off\"></i>\n      <div class=\"label\">toggle-off</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-toggle-on\"></i>\n      <div class=\"label\">toggle-on</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-toggle2-off\"></i>\n      <div class=\"label\">toggle2-off</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-toggle2-on\"></i>\n      <div class=\"label\">toggle2-on</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-toggles\"></i>\n      <div class=\"label\">toggles</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-toggles2\"></i>\n      <div class=\"label\">toggles2</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-tools\"></i>\n      <div class=\"label\">tools</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-tornado\"></i>\n      <div class=\"label\">tornado</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-translate\"></i>\n      <div class=\"label\">translate</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-trash-fill\"></i>\n      <div class=\"label\">trash-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-trash\"></i>\n      <div class=\"label\">trash</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-trash2-fill\"></i>\n      <div class=\"label\">trash2-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-trash2\"></i>\n      <div class=\"label\">trash2</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-trash3-fill\"></i>\n      <div class=\"label\">trash3-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-trash3\"></i>\n      <div class=\"label\">trash3</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-tree-fill\"></i>\n      <div class=\"label\">tree-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-tree\"></i>\n      <div class=\"label\">tree</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-triangle-fill\"></i>\n      <div class=\"label\">triangle-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-triangle-half\"></i>\n      <div class=\"label\">triangle-half</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-triangle\"></i>\n      <div class=\"label\">triangle</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-trophy-fill\"></i>\n      <div class=\"label\">trophy-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-trophy\"></i>\n      <div class=\"label\">trophy</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-tropical-storm\"></i>\n      <div class=\"label\">tropical-storm</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-truck-flatbed\"></i>\n      <div class=\"label\">truck-flatbed</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-truck\"></i>\n      <div class=\"label\">truck</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-tsunami\"></i>\n      <div class=\"label\">tsunami</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-tv-fill\"></i>\n      <div class=\"label\">tv-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-tv\"></i>\n      <div class=\"label\">tv</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-twitch\"></i>\n      <div class=\"label\">twitch</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-twitter\"></i>\n      <div class=\"label\">twitter</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-type-bold\"></i>\n      <div class=\"label\">type-bold</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-type-h1\"></i>\n      <div class=\"label\">type-h1</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-type-h2\"></i>\n      <div class=\"label\">type-h2</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-type-h3\"></i>\n      <div class=\"label\">type-h3</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-type-italic\"></i>\n      <div class=\"label\">type-italic</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-type-strikethrough\"></i>\n      <div class=\"label\">type-strikethrough</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-type-underline\"></i>\n      <div class=\"label\">type-underline</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-type\"></i>\n      <div class=\"label\">type</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-ui-checks-grid\"></i>\n      <div class=\"label\">ui-checks-grid</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-ui-checks\"></i>\n      <div class=\"label\">ui-checks</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-ui-radios-grid\"></i>\n      <div class=\"label\">ui-radios-grid</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-ui-radios\"></i>\n      <div class=\"label\">ui-radios</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-umbrella-fill\"></i>\n      <div class=\"label\">umbrella-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-umbrella\"></i>\n      <div class=\"label\">umbrella</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-union\"></i>\n      <div class=\"label\">union</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-unlock-fill\"></i>\n      <div class=\"label\">unlock-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-unlock\"></i>\n      <div class=\"label\">unlock</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-upc-scan\"></i>\n      <div class=\"label\">upc-scan</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-upc\"></i>\n      <div class=\"label\">upc</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-upload\"></i>\n      <div class=\"label\">upload</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-usb-c-fill\"></i>\n      <div class=\"label\">usb-c-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-usb-c\"></i>\n      <div class=\"label\">usb-c</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-usb-drive-fill\"></i>\n      <div class=\"label\">usb-drive-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-usb-drive\"></i>\n      <div class=\"label\">usb-drive</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-usb-fill\"></i>\n      <div class=\"label\">usb-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-usb-micro-fill\"></i>\n      <div class=\"label\">usb-micro-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-usb-micro\"></i>\n      <div class=\"label\">usb-micro</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-usb-mini-fill\"></i>\n      <div class=\"label\">usb-mini-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-usb-mini\"></i>\n      <div class=\"label\">usb-mini</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-usb-plug-fill\"></i>\n      <div class=\"label\">usb-plug-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-usb-plug\"></i>\n      <div class=\"label\">usb-plug</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-usb-symbol\"></i>\n      <div class=\"label\">usb-symbol</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-usb\"></i>\n      <div class=\"label\">usb</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-valentine\"></i>\n      <div class=\"label\">valentine</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-valentine2\"></i>\n      <div class=\"label\">valentine2</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-vector-pen\"></i>\n      <div class=\"label\">vector-pen</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-view-list\"></i>\n      <div class=\"label\">view-list</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-view-stacked\"></i>\n      <div class=\"label\">view-stacked</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-vimeo\"></i>\n      <div class=\"label\">vimeo</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-vinyl-fill\"></i>\n      <div class=\"label\">vinyl-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-vinyl\"></i>\n      <div class=\"label\">vinyl</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-voicemail\"></i>\n      <div class=\"label\">voicemail</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-volume-down-fill\"></i>\n      <div class=\"label\">volume-down-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-volume-down\"></i>\n      <div class=\"label\">volume-down</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-volume-mute-fill\"></i>\n      <div class=\"label\">volume-mute-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-volume-mute\"></i>\n      <div class=\"label\">volume-mute</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-volume-off-fill\"></i>\n      <div class=\"label\">volume-off-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-volume-off\"></i>\n      <div class=\"label\">volume-off</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-volume-up-fill\"></i>\n      <div class=\"label\">volume-up-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-volume-up\"></i>\n      <div class=\"label\">volume-up</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-vr\"></i>\n      <div class=\"label\">vr</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-wallet-fill\"></i>\n      <div class=\"label\">wallet-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-wallet\"></i>\n      <div class=\"label\">wallet</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-wallet2\"></i>\n      <div class=\"label\">wallet2</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-watch\"></i>\n      <div class=\"label\">watch</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-water\"></i>\n      <div class=\"label\">water</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-webcam-fill\"></i>\n      <div class=\"label\">webcam-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-webcam\"></i>\n      <div class=\"label\">webcam</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-whatsapp\"></i>\n      <div class=\"label\">whatsapp</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-wifi-1\"></i>\n      <div class=\"label\">wifi-1</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-wifi-2\"></i>\n      <div class=\"label\">wifi-2</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-wifi-off\"></i>\n      <div class=\"label\">wifi-off</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-wifi\"></i>\n      <div class=\"label\">wifi</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-wind\"></i>\n      <div class=\"label\">wind</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-window-dash\"></i>\n      <div class=\"label\">window-dash</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-window-desktop\"></i>\n      <div class=\"label\">window-desktop</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-window-dock\"></i>\n      <div class=\"label\">window-dock</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-window-fullscreen\"></i>\n      <div class=\"label\">window-fullscreen</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-window-plus\"></i>\n      <div class=\"label\">window-plus</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-window-sidebar\"></i>\n      <div class=\"label\">window-sidebar</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-window-split\"></i>\n      <div class=\"label\">window-split</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-window-stack\"></i>\n      <div class=\"label\">window-stack</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-window-x\"></i>\n      <div class=\"label\">window-x</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-window\"></i>\n      <div class=\"label\">window</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-windows\"></i>\n      <div class=\"label\">windows</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-wordpress\"></i>\n      <div class=\"label\">wordpress</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-wrench-adjustable-circle-fill\"></i>\n      <div class=\"label\">wrench-adjustable-circle-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-wrench-adjustable-circle\"></i>\n      <div class=\"label\">wrench-adjustable-circle</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-wrench-adjustable\"></i>\n      <div class=\"label\">wrench-adjustable</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-wrench\"></i>\n      <div class=\"label\">wrench</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-x-circle-fill\"></i>\n      <div class=\"label\">x-circle-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-x-circle\"></i>\n      <div class=\"label\">x-circle</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-x-diamond-fill\"></i>\n      <div class=\"label\">x-diamond-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-x-diamond\"></i>\n      <div class=\"label\">x-diamond</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-x-lg\"></i>\n      <div class=\"label\">x-lg</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-x-octagon-fill\"></i>\n      <div class=\"label\">x-octagon-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-x-octagon\"></i>\n      <div class=\"label\">x-octagon</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-x-square-fill\"></i>\n      <div class=\"label\">x-square-fill</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-x-square\"></i>\n      <div class=\"label\">x-square</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-x\"></i>\n      <div class=\"label\">x</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-xbox\"></i>\n      <div class=\"label\">xbox</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-yin-yang\"></i>\n      <div class=\"label\">yin-yang</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-youtube\"></i>\n      <div class=\"label\">youtube</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-zoom-in\"></i>\n      <div class=\"label\">zoom-in</div>\n    </div>\n    <div class=\"icon\">\n      <i class=\"bi bi-zoom-out\"></i>\n      <div class=\"label\">zoom-out</div>\n    </div>\n  </div>\n\n</body>\n</html>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./public/bootstrap-icons-1.8.3/font/bootstrap-icons.css":
/*!***************************************************************!*\
  !*** ./public/bootstrap-icons-1.8.3/font/bootstrap-icons.css ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./bootstrap-icons.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./public/bootstrap-icons-1.8.3/font/bootstrap-icons.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/components/Editor.vue?vue&type=style&index=0&id=9484be2a&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/components/Editor.vue?vue&type=style&index=0&id=9484be2a&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Editor_vue_vue_type_style_index_0_id_9484be2a_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Editor.vue?vue&type=style&index=0&id=9484be2a&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/components/Editor.vue?vue&type=style&index=0&id=9484be2a&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Editor_vue_vue_type_style_index_0_id_9484be2a_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Editor_vue_vue_type_style_index_0_id_9484be2a_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/components/ImageCropper2.vue?vue&type=style&index=0&id=2699f032&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/components/ImageCropper2.vue?vue&type=style&index=0&id=2699f032&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImageCropper2_vue_vue_type_style_index_0_id_2699f032_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ImageCropper2.vue?vue&type=style&index=0&id=2699f032&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/components/ImageCropper2.vue?vue&type=style&index=0&id=2699f032&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImageCropper2_vue_vue_type_style_index_0_id_2699f032_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImageCropper2_vue_vue_type_style_index_0_id_2699f032_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/components/Loader-sm.vue?vue&type=style&index=0&id=478ac5c6&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/components/Loader-sm.vue?vue&type=style&index=0&id=478ac5c6&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Loader_sm_vue_vue_type_style_index_0_id_478ac5c6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Loader-sm.vue?vue&type=style&index=0&id=478ac5c6&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/components/Loader-sm.vue?vue&type=style&index=0&id=478ac5c6&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Loader_sm_vue_vue_type_style_index_0_id_478ac5c6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Loader_sm_vue_vue_type_style_index_0_id_478ac5c6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/panel/foodSlide/FoodSlideCreate.vue?vue&type=style&index=0&id=449a7266&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/panel/foodSlide/FoodSlideCreate.vue?vue&type=style&index=0&id=449a7266&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FoodSlideCreate_vue_vue_type_style_index_0_id_449a7266_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FoodSlideCreate.vue?vue&type=style&index=0&id=449a7266&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/panel/foodSlide/FoodSlideCreate.vue?vue&type=style&index=0&id=449a7266&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FoodSlideCreate_vue_vue_type_style_index_0_id_449a7266_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FoodSlideCreate_vue_vue_type_style_index_0_id_449a7266_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/components/BtnSubmit.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/components/BtnSubmit.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BtnSubmit_vue_vue_type_template_id_62b67106__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BtnSubmit.vue?vue&type=template&id=62b67106 */ "./resources/js/components/components/BtnSubmit.vue?vue&type=template&id=62b67106");
/* harmony import */ var _BtnSubmit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BtnSubmit.vue?vue&type=script&lang=js */ "./resources/js/components/components/BtnSubmit.vue?vue&type=script&lang=js");
/* harmony import */ var F_PROJECTS_2023_asal_panel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,F_PROJECTS_2023_asal_panel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_BtnSubmit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BtnSubmit_vue_vue_type_template_id_62b67106__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/components/BtnSubmit.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/components/Editor.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/components/Editor.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Editor_vue_vue_type_template_id_9484be2a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Editor.vue?vue&type=template&id=9484be2a */ "./resources/js/components/components/Editor.vue?vue&type=template&id=9484be2a");
/* harmony import */ var _Editor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Editor.vue?vue&type=script&lang=js */ "./resources/js/components/components/Editor.vue?vue&type=script&lang=js");
/* harmony import */ var _Editor_vue_vue_type_style_index_0_id_9484be2a_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Editor.vue?vue&type=style&index=0&id=9484be2a&lang=css */ "./resources/js/components/components/Editor.vue?vue&type=style&index=0&id=9484be2a&lang=css");
/* harmony import */ var F_PROJECTS_2023_asal_panel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,F_PROJECTS_2023_asal_panel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Editor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Editor_vue_vue_type_template_id_9484be2a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/components/Editor.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/components/ImageCropper2.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/components/ImageCropper2.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ImageCropper2_vue_vue_type_template_id_2699f032__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageCropper2.vue?vue&type=template&id=2699f032 */ "./resources/js/components/components/ImageCropper2.vue?vue&type=template&id=2699f032");
/* harmony import */ var _ImageCropper2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageCropper2.vue?vue&type=script&lang=js */ "./resources/js/components/components/ImageCropper2.vue?vue&type=script&lang=js");
/* harmony import */ var _ImageCropper2_vue_vue_type_style_index_0_id_2699f032_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageCropper2.vue?vue&type=style&index=0&id=2699f032&lang=css */ "./resources/js/components/components/ImageCropper2.vue?vue&type=style&index=0&id=2699f032&lang=css");
/* harmony import */ var F_PROJECTS_2023_asal_panel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,F_PROJECTS_2023_asal_panel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ImageCropper2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ImageCropper2_vue_vue_type_template_id_2699f032__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/components/ImageCropper2.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/components/Loader-sm.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/components/Loader-sm.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Loader_sm_vue_vue_type_template_id_478ac5c6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loader-sm.vue?vue&type=template&id=478ac5c6&scoped=true */ "./resources/js/components/components/Loader-sm.vue?vue&type=template&id=478ac5c6&scoped=true");
/* harmony import */ var _Loader_sm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loader-sm.vue?vue&type=script&lang=js */ "./resources/js/components/components/Loader-sm.vue?vue&type=script&lang=js");
/* harmony import */ var _Loader_sm_vue_vue_type_style_index_0_id_478ac5c6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loader-sm.vue?vue&type=style&index=0&id=478ac5c6&scoped=true&lang=css */ "./resources/js/components/components/Loader-sm.vue?vue&type=style&index=0&id=478ac5c6&scoped=true&lang=css");
/* harmony import */ var F_PROJECTS_2023_asal_panel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,F_PROJECTS_2023_asal_panel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Loader_sm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Loader_sm_vue_vue_type_template_id_478ac5c6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-478ac5c6"],['__file',"resources/js/components/components/Loader-sm.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/panel/foodSlide/FoodSlideCreate.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/panel/foodSlide/FoodSlideCreate.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FoodSlideCreate_vue_vue_type_template_id_449a7266__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FoodSlideCreate.vue?vue&type=template&id=449a7266 */ "./resources/js/components/panel/foodSlide/FoodSlideCreate.vue?vue&type=template&id=449a7266");
/* harmony import */ var _FoodSlideCreate_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FoodSlideCreate.vue?vue&type=script&lang=js */ "./resources/js/components/panel/foodSlide/FoodSlideCreate.vue?vue&type=script&lang=js");
/* harmony import */ var _FoodSlideCreate_vue_vue_type_style_index_0_id_449a7266_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FoodSlideCreate.vue?vue&type=style&index=0&id=449a7266&lang=css */ "./resources/js/components/panel/foodSlide/FoodSlideCreate.vue?vue&type=style&index=0&id=449a7266&lang=css");
/* harmony import */ var F_PROJECTS_2023_asal_panel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,F_PROJECTS_2023_asal_panel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_FoodSlideCreate_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_FoodSlideCreate_vue_vue_type_template_id_449a7266__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/panel/foodSlide/FoodSlideCreate.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/components/BtnSubmit.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/components/BtnSubmit.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BtnSubmit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BtnSubmit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BtnSubmit.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/components/BtnSubmit.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/components/Editor.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/components/Editor.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Editor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Editor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Editor.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/components/Editor.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/components/ImageCropper2.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/components/ImageCropper2.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImageCropper2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImageCropper2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ImageCropper2.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/components/ImageCropper2.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/components/Loader-sm.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/components/Loader-sm.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Loader_sm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Loader_sm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Loader-sm.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/components/Loader-sm.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/panel/foodSlide/FoodSlideCreate.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/panel/foodSlide/FoodSlideCreate.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FoodSlideCreate_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FoodSlideCreate_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FoodSlideCreate.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/panel/foodSlide/FoodSlideCreate.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/components/BtnSubmit.vue?vue&type=template&id=62b67106":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/components/BtnSubmit.vue?vue&type=template&id=62b67106 ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BtnSubmit_vue_vue_type_template_id_62b67106__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BtnSubmit_vue_vue_type_template_id_62b67106__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BtnSubmit.vue?vue&type=template&id=62b67106 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/components/BtnSubmit.vue?vue&type=template&id=62b67106");


/***/ }),

/***/ "./resources/js/components/components/Editor.vue?vue&type=template&id=9484be2a":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/components/Editor.vue?vue&type=template&id=9484be2a ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Editor_vue_vue_type_template_id_9484be2a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Editor_vue_vue_type_template_id_9484be2a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Editor.vue?vue&type=template&id=9484be2a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/components/Editor.vue?vue&type=template&id=9484be2a");


/***/ }),

/***/ "./resources/js/components/components/ImageCropper2.vue?vue&type=template&id=2699f032":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/components/ImageCropper2.vue?vue&type=template&id=2699f032 ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImageCropper2_vue_vue_type_template_id_2699f032__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImageCropper2_vue_vue_type_template_id_2699f032__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ImageCropper2.vue?vue&type=template&id=2699f032 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/components/ImageCropper2.vue?vue&type=template&id=2699f032");


/***/ }),

/***/ "./resources/js/components/components/Loader-sm.vue?vue&type=template&id=478ac5c6&scoped=true":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/components/Loader-sm.vue?vue&type=template&id=478ac5c6&scoped=true ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Loader_sm_vue_vue_type_template_id_478ac5c6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Loader_sm_vue_vue_type_template_id_478ac5c6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Loader-sm.vue?vue&type=template&id=478ac5c6&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/components/Loader-sm.vue?vue&type=template&id=478ac5c6&scoped=true");


/***/ }),

/***/ "./resources/js/components/panel/foodSlide/FoodSlideCreate.vue?vue&type=template&id=449a7266":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/panel/foodSlide/FoodSlideCreate.vue?vue&type=template&id=449a7266 ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FoodSlideCreate_vue_vue_type_template_id_449a7266__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FoodSlideCreate_vue_vue_type_template_id_449a7266__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FoodSlideCreate.vue?vue&type=template&id=449a7266 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/panel/foodSlide/FoodSlideCreate.vue?vue&type=template&id=449a7266");


/***/ }),

/***/ "./resources/js/components/components/Editor.vue?vue&type=style&index=0&id=9484be2a&lang=css":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/components/Editor.vue?vue&type=style&index=0&id=9484be2a&lang=css ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Editor_vue_vue_type_style_index_0_id_9484be2a_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Editor.vue?vue&type=style&index=0&id=9484be2a&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/components/Editor.vue?vue&type=style&index=0&id=9484be2a&lang=css");


/***/ }),

/***/ "./resources/js/components/components/ImageCropper2.vue?vue&type=style&index=0&id=2699f032&lang=css":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/components/ImageCropper2.vue?vue&type=style&index=0&id=2699f032&lang=css ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImageCropper2_vue_vue_type_style_index_0_id_2699f032_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ImageCropper2.vue?vue&type=style&index=0&id=2699f032&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/components/ImageCropper2.vue?vue&type=style&index=0&id=2699f032&lang=css");


/***/ }),

/***/ "./resources/js/components/components/Loader-sm.vue?vue&type=style&index=0&id=478ac5c6&scoped=true&lang=css":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/components/Loader-sm.vue?vue&type=style&index=0&id=478ac5c6&scoped=true&lang=css ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Loader_sm_vue_vue_type_style_index_0_id_478ac5c6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Loader-sm.vue?vue&type=style&index=0&id=478ac5c6&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/components/Loader-sm.vue?vue&type=style&index=0&id=478ac5c6&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/panel/foodSlide/FoodSlideCreate.vue?vue&type=style&index=0&id=449a7266&lang=css":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/panel/foodSlide/FoodSlideCreate.vue?vue&type=style&index=0&id=449a7266&lang=css ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FoodSlideCreate_vue_vue_type_style_index_0_id_449a7266_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FoodSlideCreate.vue?vue&type=style&index=0&id=449a7266&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/panel/foodSlide/FoodSlideCreate.vue?vue&type=style&index=0&id=449a7266&lang=css");


/***/ })

}]);