<template>

    <div>
        <div class="p-2  border rounded px-5 mx-0 container form-control" >
            <div id="editor_options" class="text-center  editor_options  d-none">
                <div class="bg-dark rounded p-1 d-inline-block">
                    <span id="btnClose" @click="closeOptions" class="btn btn-dark mx-1" title="close">
                        <i class="bi bi-x"></i></span>
                    <span id="btnH2" @click="option('formatBlock','H2')" class="btn btn-dark mx-1" title="heading">
                        <i class="bi bi-type-h2"></i></span>
                    <span id="btnBold" @click="option('bold',null)" class="btn btn-dark mx-1" title="bold">
                        <i class="bi bi-type-bold"></i></span>
                    <span id="btnItalic" @click="option('italic',null)" class="btn btn-dark mx-1" title="italic"><i
                        class="bi bi-type-italic"></i></span>
                    <span id="btnUnderline" @click="option('underLine',null)" class="btn btn-dark mx-1"
                          title="underline"><i class="bi bi-type-underline"></i></span>
                    <span id="btnList" @click="option('insertUnorderedList',null)" class="btn btn-dark mx-1"
                          title="list"><i class="bi bi-list-ul"></i></span>
                    <span id="btnLink" @click="option('createLink',null)" class="btn btn-dark mx-1" title="link"><i
                        class="bi bi-link"></i></span>
                    <span id="btnUnLink" @click="option('unlink',null)" class="btn btn-dark mx-1" title="unlink">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         class="bi bi-slash" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                              d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                        <path
                            d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
                        <path
                            d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
                    </svg>
                </span>
                </div>
            </div>
            <div @keyup="updatePreview" @click="e=>optionsFlag && optionsToggle(false)"
                 id="editor"
                 @input="e=>isFirstInput &&  fixFirstNode()" @mousedown="closeOptions" contenteditable="true"
                 spellcheck="false" class="mb-2 text_element  w-100" style="min-height: 50px">
            </div>
        </div>
        <div id="b_content" class="d-none"></div>
        <div id="add_content" class="d-none">
            <!--            <span  data-bs-toggle = "tooltip" data-bs-placement = "bottom" title = "بــنـر" class = "content_btn m-2 bg-dark text-light">-->
            <!--                <i class = " bi bi-card-heading "></i>-->
            <!--            </span>-->
            <span @click="openImageModal" data-bs-toggle="modal" data-bs-target="#imgModal"
                  title="تصویر" class="content_btn m-2 bg-dark text-light">
                <i class="bi bi-camera"></i>
            </span>
            <span @click="optionsToggle(true)" title="تیتر"
                  id="add_heading_btn" class="content_btn m-2 bg-dark text-light ">
            <i class="bi bi-type-h2"></i>
            </span>
            <span @click="optionsToggle(false)" title="افزودن آیتم"
                  id="add_content_btn" class="m-2 bg-dark text-light">
            <i class=" bi bi-plus"></i>
            </span>
        </div>

    </div>

    <textarea class="form-control mt-3 text-left d-none" dir="ltr" id="content_text_area" aria-describedby="contentHelp"
              required></textarea>
    <div id="contentHelp" class="form-text error"></div>
    <!-- Modal -->
    <div class="modal fade" id="imgModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="imgModalLabel">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header border-0">
                    <!--                    <h5 class="mupdaodal-title" id="imgModalLabel">Modal title</h5>-->
                    <button type="button" class="btn-close" data-bs-dismiss="modal" @click="closeModal"
                            aria-label="Close"></button>
                </div>
                <div class="modal-body w-100">
                    <image-cropper-2 :name="'inner'" :hasCaption="hasCaption" :isRequired="isRequired" :aspect="aspect"/>
                </div>
                <div class="modal-footer border-0">
                    <a id="confirm_Image" @click.prevent="makeImageArrays"   class="confirm_Image btn btn-dark" data-bs-dismiss="modal">
                        تایید
                    </a>
                    <button type="button" class="btn btn-secondary" @click="closeModal" data-bs-dismiss="modal">
                        انصراف
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="imgModalDetails" data-bs-backdrop="static" tabindex="-1"
         aria-labelledby="imgModalDetailsLabel">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header border-0">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    <h5 class="modal-title text-right" id="imgModalDetailsLabel">ویرایش جزییات تصویر</h5>

                </div>
                <div class="modal-body w-100">

                    <div class="mx-auto mb-3">
                        <img id="img_edit_preview" src="" width="300px" alt="">
                    </div>
                    <input id="img_edit_src" type="hidden">
                    <div class="row">
                        <div class="col-md-12">
                            <label for="img_edit_caption">کپشن</label>
                            <input id="img_edit_caption" type="text" class="form-control mb-2">
                        </div>
                        <div class="col-md-6">
                            <label for="img_edit_alt">alt</label>
                            <input id="img_edit_alt" type="text" class="form-control  mb-2">
                        </div>
                        <div class="col-md-6">
                            <label for="img_edit_max_width">حد اکثر عرض</label>
                            <input id="img_edit_max_width" type="text" class="form-control mb-2">
                        </div>
                    </div>


                </div>
                <div class="modal-footer border-0">
                    <input type="hidden" id="deleteId">
                    <button @click="editImage" id="confirm_Image_Detail" type="button"
                            class="confirm_Image btn btn-dark" data-bs-dismiss="modal">
                        تایید
                    </button>
                    <button type="button" @click="closeModal" class="btn btn-secondary" data-bs-dismiss="modal">
                        انصراف
                    </button>
                </div>
            </div>
        </div>
    </div>


</template>
<script>
// import Vue from '';

import ImageCropper2 from "./ImageCropper2";
import {toArray} from "lodash";

export default {

    components: {ImageCropper2},
    props: ['mode', 'content', 'id'],

    data() {
        return {
            optionsFlag: 0,
            hasCaption: true,
            isRequired: false,
            aspect: null,
            isFirstInput: true,
            isFirstMove: true,
            draft: [],
            image_codes: [],
            image_names: [],
        }
    },
    mounted() {


        document.getElementById('editor').addEventListener("paste", function (e) {
            // cancel paste
            e.preventDefault();

            // get text representation of clipboard
            let text = (e.originalEvent || e).clipboardData.getData('text/plain');

            // insert text manually
            document.execCommand("insertHTML", false, text);
        });

        document.getElementById('editor').addEventListener('mouseup', function (e) {
            this.optionsFlag === 0 ? this.optionsToggle(true) : document.getElementById('add_content').classList.add('d-none');


            let text = '';
            if (window.getSelection) {
                text = window.getSelection().toString();
            } else if (document.selection) {
                text = document.selection.createRange().text;
            }
            if (text !== '') {
                let option = document.querySelector('#editor_options')

                option.style.position = 'absolute';
                option.style.left = 'calc(' + (window.innerWidth / 2).toString() + 'px - 250px)';

                option.style.top = 'calc( ' + e.clientY.toString() + 'px + ' + document.querySelector('.page_content').scrollTop.toString() + 'px - 230px - 35px)';
                // option.style.right = '-3px';

                option.classList.remove('d-none');
            }

        });
        document.getElementById('editor').addEventListener('click', savePosition);
        document.querySelector('#editor_options').classList.add('d-none');

        let sel = document.getSelection();
        let saved;
        // document.getElementById('editor').onclick = inputChange;
        //
        // function inputChange(e) {
        let editor = document.getElementById("editor");
        let add_heading_btn = document.getElementById("add_heading_btn");
        let confirm_Image = document.getElementById("confirm_Image");


        // editor.addEventListener('keypress', handleKeyPress);
        // editor.addEventListener('keydown', handleKeyDown);
        editor.addEventListener('click', savePosition);
        editor.addEventListener('keyup', savePosition);
        add_heading_btn.addEventListener('click', function () {
            let top = document.querySelector('.page_content').scrollTop;
            restorePosition();
            document.execCommand('formatBlock', false, 'H2');
            document.querySelector('.page_content').scrollTop = top;

            let o = toArray(document.querySelector('#editor').children);
            for (let i = 0; i < o.length; i++) {
                if (o[i].tagName === 'DIV' && o[i].innerHTML === '<br>') {
                    o[i].addEventListener('click', function (event) {
                        document.getElementById('add_content').classList.remove('d-none');
                        document.getElementById('add_content').style.top = 'calc( ' + event.clientY.toString() + 'px + ' + document.querySelector('.page_content').scrollTop.toString() + 'px - 220px)';
                    })
                } else {
                    o[i].addEventListener('click', function () {
                        document.getElementById('add_content').classList.add('d-none');
                    })
                }
            }
        });
        // this.makeImageArrays();
        confirm_Image.addEventListener('click', function () {
            document.removeEventListener('click', ImageCropper2.methods.handleImageCropped); //*
            let top = document.querySelector('.page_content').scrollTop;
            restorePosition();
            let html = '';
            // console.log('1',document.getElementById('Image_inner_code'))
            // console.log('2',document.getElementById('Image_inner_code').getAttribute('value'))
            if (document.getElementById('Image_inner_code').getAttribute('value')) {
                let path = '';
                axios.post('/api/panel/upload/editor/image',{
                    code: document.getElementById('Image_inner_code').value,
                    name: document.getElementById('Image_inner_name').value,
                    path: 'images/editor/'
                })
                    .then((response)=>{
                        console.log(response)
                        path = response.data;
                        if(path){
                            document.getElementById('Image_inner_path').value = response.data;
                            //TODO: //then close modal;
                        }
                    })
                    .then(()=>{
                        let style = '';
                        if (document.getElementById('Image_inner_max_width').value !== '') {
                            style = 'style="max-width:' + document.getElementById('Image_inner_max_width').value.toString() + 'px"';
                        }
                        // html = '<figure ><img ' + style + ' src="' + document.getElementById('Image_inner_code').getAttribute('value') + '" alt="' + document.getElementById('Image_inner_alt').value + '">' +
                        html = '<figure ><img ' + style + ' src="' + document.getElementById('Image_inner_path').value + '" alt="' + document.getElementById('Image_inner_alt').value + '">' +
                            '<figcaption>' + document.getElementById('Image_inner_caption').value + '</figcaption>' +
                            '</figure>';
                        document.execCommand('insertHTML', false, '<br>');
                        document.execCommand('insertHTML', false, html);
                        // document.querySelectorAll('#editor > div').forEach((div) => {
                        //     if (div.firstChild.tagName === 'FIGURE'){
                        //         div.setAttribute('contenteditable', false);
                        //     }
                        //
                        // });
                        document.querySelector('.page_content').scrollTop = top;
                    })
                    .catch((error)=>{
                        console.log(error);
                    });

            }
            let o = toArray(document.querySelector('#editor').children);
            for (let i = 0; i < o.length; i++) {
                if (o[i].tagName === 'DIV' && o[i].innerHTML === '<br>') {
                    o[i].addEventListener('click', function (event) {
                        document.getElementById('add_content').classList.remove('d-none');
                        document.getElementById('add_content').style.top = 'calc( ' + event.clientY.toString() + 'px + ' + document.querySelector('.page_content').scrollTop.toString() + 'px - 220px)';
                    })
                } else {
                    o[i].addEventListener('click', function () {
                        document.getElementById('add_content').classList.add('d-none');
                    })
                }
            }

            let images = document.querySelectorAll('#editor > div > figure > img');
            images.forEach((image) => {
                document.querySelectorAll('figure').forEach((fig) => {
                    fig.removeAttribute('id');
                });
                if (image.parentElement.tagName === 'FIGURE') {
                    image.parentElement.removeAttribute('id');
                }
                image.setAttribute('data-bs-toggle', 'modal');
                image.setAttribute('data-bs-target', '#imgModalDetails');

                image.addEventListener('click', function () {
                    image.parentElement.setAttribute('id', 'editingImg');
                    let src = image.getAttribute('src');
                    let alt = image.getAttribute('alt');
                    let caption = '';
                    if (image.nextSibling && image.nextSibling.tagName === 'FIGCAPTION') {
                        caption = image.nextSibling.innerHTML;
                    }
                    let maxWidth = image.style.maxWidth.toString().replace('px', '');

                    document.querySelector('#img_edit_preview').setAttribute('src', src);
                    document.querySelector('#img_edit_src').value = src;
                    document.querySelector('#img_edit_alt').value = alt || '';
                    document.querySelector('#img_edit_max_width').value = maxWidth || '';
                    document.querySelector('#img_edit_caption').value = caption || '';


                });
            });


            // make images arrays:


        });



        // }
        function savePosition() {
            saved = [sel.focusNode, sel.focusOffset];
            // console.log(saved);
        }

        function restorePosition() {
            editor.focus();
            //sel.extend(saved[0], saved[1]);
            sel.collapse(saved[0], saved[1]);

        }

        // function log() {
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

                let editor = document.getElementById('editor');
                // console.log(e.key)

                if (e.key === 'Backspace') {
                    //  e.preventDefault();
                    console.log('1', saved); //#text ==== figure
                    console.log('1', saved[0].nodeName); //#text ==== figure
                    console.log('2', saved[0].firstChild);      //    img
                    console.log('3', saved[0].firstChild?.tagName);
                    console.log('4', saved[0].parentElement.nextSibling?.tagName);
                    console.log('5', saved[0].parentElement.nextSibling?.firstChild?.tagName);

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
                            if (saved[0].parentElement.previousSibling.nodeName === 'H2') {

                                if (saved[0].parentElement.previousSibling.innerHTML === '<br>' || saved[0].parentElement.previousSibling.innerHTML === '') {
                                    e.preventDefault();
                                    saved[0].parentElement.previousSibling.remove();
                                } else {
                                    e.preventDefault();
                                }
                            }

                            if (saved[0].parentElement.previousSibling.nodeName === 'DIV' && saved[0].parentElement.previousSibling.firstChild?.nodeName === 'H2') {
                                if (saved[0].parentElement.previousSibling.firstChild?.innerHTML === '<br>' || saved[0].parentElement.previousSibling.firstChild?.innerHTML === '') {
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
                    e.preventDefault();
                    // console.log('1', saved[0].nodeName); //#text ==== figure
                    // console.log('2', saved[0].firstChild);      //    img
                    // console.log('3', saved[0].firstChild?.tagName);
                    // console.log('4', saved[0].parentElement.nextSibling?.tagName);
                    // console.log('5', saved[0].parentElement.nextSibling?.firstChild?.tagName);

                    if (e.key === 'Delete' && saved[0].tagName === 'FIGURE' && saved[0].firstChild && saved[0].firstChild.tagName === 'IMG') {
                        saved[0].parentElement.remove();
                    } else if (e.key === 'Delete' && saved[0].nodeName === '#text' && saved[0].parentElement.nextSibling?.tagName === 'DIV' && saved[0].parentElement.nextSibling?.firstChild?.tagName === 'FIGURE') {
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
                        let div = document.createElement("div");
                        div.innerHTML = '<br>'
                        editor.appendChild(div);
                        saved = [saved[0].parentElement.parentElement.nextSibling, 0];
                        restorePosition();
                    }
                    saved[0].previousSibling.firstChild.lastChild.remove(); //remove empty li
                }
                if (saved[0].tagName === 'DIV' && saved[0].firstChild?.tagName === 'FIGURE' && e.key !== 'Backspace' && e.key !== 'Delete') {
                    e.preventDefault();
                    if (saved[0].nextSibling) {
                        saved = [saved[0].nextSibling, 0];
                        restorePosition();
                        if (saved[0].innerHTML !== '<br>') {
                            document.execCommand("insertHTML", false, '<div><br></div>');
                        }
                    } else {
                        let div = document.createElement("div");
                        div.innerHTML = '<br>'
                        editor.appendChild(div);
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
                        let div = document.createElement("div");
                        div.innerHTML = '<br>'
                        editor.appendChild(div);
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
                        let div = document.createElement("div");
                        div.innerHTML = '<br>'
                        editor.appendChild(div);
                        saved = [saved[0].parentElement.nextSibling, 0];
                        restorePosition();
                    }
                    // }
                }
            }
        );
        document.querySelector('#editor').addEventListener('keyup', function (e) {
            // console.log(e.key);
            let editor = document.querySelector('#editor');


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
                    let div = document.createElement('div');
                    div.innerHTML = '<br>';
                    document.querySelector('#editor').appendChild(div);
                    document.getElementById('add_content').classList.remove('d-none'); //***
                    document.getElementById('add_content').style.top = 'calc( ' + editor.firstChild.getBoundingClientRect().top.toString() + 'px + ' + document.querySelector('.page_content').scrollTop.toString() + 'px - 220px)';

                }
            }
            let o = toArray(document.querySelector('#editor').children);
            for (let i = 0; i < o.length; i++) {
                if (o[i].tagName === 'DIV' && o[i].firstChild.tagName === 'FIGURE' && o[i].firstChild.innerHTML === '<br>') {
                    o[i].innerHTML = '<br>';
                }
                if (o[i].tagName === 'DIV' && o[i].innerHTML === '<br>') {
                    o[i].addEventListener('click', function (event) {

                        document.getElementById('add_content').classList.remove('d-none');
                        document.getElementById('add_content').style.top = 'calc( ' + event.clientY.toString() + 'px + ' + document.querySelector('.page_content').scrollTop.toString() + 'px - 220px)';
                    })
                } else {
                    o[i].addEventListener('click', function () {
                        document.getElementById('add_content').classList.add('d-none');
                    })
                }
            }
            if (e.key === 'Enter') {
                document.getElementById('add_content').classList.remove('d-none');
                document.getElementById('add_content').style.top = 'calc( ' + saved[0].getBoundingClientRect().top.toString() + 'px + ' + document.querySelector('.page_content').scrollTop.toString() + 'px - 220px)';
            }
        });
        let txt = '';
        if (this.mode === 'edit') {
            // console.log(this.content)
            document.getElementById('b_content').innerHTML = this.content;
        } else {
            document.getElementById('b_content').innerHTML = '<br>';
        }
        let children = toArray(document.getElementById('b_content').children);

        for (let i = 0; i < children.length; i++) {

            switch (children[i].tagName) {
                case 'P' : {
                    // if (children[i].innerHTML === '<br>'){
                    //     txt += '<br>';
                    // }else{
                    txt += '<div>' + children[i].innerHTML + '</div>';
                    // }
                    break;
                }
                case 'H2' : {
                    txt += '<div><h2>' + children[i].innerHTML + '</h2></div>';
                    break;
                }
                case 'FIGURE' : {
                    txt += '<div><figure>' + children[i].innerHTML + '</figure></div>';
                    break;
                }
                case 'IMG' : {
                    txt += '<div><figure><img src="' + children[i].getAttribute('src') + '" alt="' + children[i].getAttribute('alt') + '"/><figcaption></figcaption></figure></div>';
                    break;
                }
                case 'BR' : {
                    txt += '<div><br></div>';
                    break;
                }
                case 'UL' : {
                    txt += '<div><ul>' + children[i].innerHTML + '</ul></div>';
                    break;
                }
                default : {
                    break;
                }
            }


        }

        document.getElementById('editor').innerHTML = txt;
        console.log(txt)

        this.isFirstInput = false;

        let o = toArray(document.querySelector('#editor').children);
        for (let i = 0; i < o.length; i++) {
            if (o[i].tagName === 'Div' && o[i].innerHTML === '<br>') {
                o[i].addEventListener('click', function (event) {
                    document.getElementById('add_content').classList.remove('d-none');
                    document.getElementById('add_content').style.top = 'calc( ' + event.clientY.toString() + 'px + ' + document.querySelector('.page_content').scrollTop.toString() + 'px - 220px)';
                })
            } else {
                document.getElementById('add_content').classList.add('d-none');
            }
        }
        this.listenImgs();
    },


    methods: {
        makeImageArrays() {
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
                this.updatePreview();

            // })
        },

        listenImgs() {
            let images = document.querySelectorAll('#editor > div > figure > img');
            images.forEach((image) => {
                document.querySelectorAll('figure').forEach((fig) => {
                    fig.removeAttribute('id');
                });
                if (image.parentElement.tagName === 'FIGURE') {
                    image.parentElement.removeAttribute('id');
                }
                image.setAttribute('data-bs-toggle', 'modal');
                image.setAttribute('data-bs-target', '#imgModalDetails');

                image.addEventListener('click', function () {
                    image.parentElement.setAttribute('id', 'editingImg');
                    let src = image.getAttribute('src');
                    let alt = image.getAttribute('alt');
                    let caption = '';
                    if (image.nextSibling && image.nextSibling.tagName === 'FIGCAPTION') {
                        caption = image.nextSibling.innerHTML;
                    }
                    let maxWidth = image.style.maxWidth.toString().replace('px', '');

                    document.querySelector('#img_edit_preview').setAttribute('src', src);
                    document.querySelector('#img_edit_src').value = src;
                    document.querySelector('#img_edit_alt').value = alt || '';
                    document.querySelector('#img_edit_max_width').value = maxWidth || '';
                    document.querySelector('#img_edit_caption').value = caption || '';

                });
            });
        },

        editImage() {
            document.getElementById('editingImg').innerHTML = '';
            let src = document.querySelector('#img_edit_src').value;
            let newAlt = document.querySelector('#img_edit_alt').value ? 'alt="' + document.querySelector('#img_edit_alt').value + '"' : '';
            let newStyle = parseInt(document.querySelector('#img_edit_max_width').value) > 0 ? 'style="max-width:' + document.querySelector('#img_edit_max_width').value + 'px"' : '';
            document.getElementById('editingImg').innerHTML = '<img alt="" src="' + src + '" ' + newStyle + ' ' + newAlt + '>' +
                '<figcaption>' + document.querySelector('#img_edit_caption').value + '</figcaption>';
            document.querySelectorAll('figure').forEach((fig) => {
                fig.removeAttribute('id');
            });
            this.listenImgs();
        },

        updatePreview() {
            //   console.log(document.getElementById('editor').childNodes);
            let txt = document.getElementById('editor').innerHTML;
            document.querySelectorAll('#editor > div > span').forEach((span) => {
                span.removeAttribute('style');
            });
            document.querySelectorAll('#editor > h2 > span').forEach((span) => {
                span.removeAttribute('style');
            });
            document.querySelectorAll('#editor > p > span').forEach((span) => {
                span.removeAttribute('style');
            });
            document.querySelectorAll('#editor > span > span').forEach((span) => {
                span.removeAttribute('style');
            });
            document.querySelectorAll('#editor > span').forEach((span) => {
                span.removeAttribute('style');
            });


            let children = document.getElementById('editor').childNodes; //
            let text = '';
            for (let i = 0; i < children.length; i++) {
                if (children[i].nodeName === '#text') {
                    text += '<p>' + children[i].nodeValue + '</p>';
                } else if (children[i].tagName === 'DIV' && children[i].firstChild) {
                    let tag = children[i].firstChild.tagName;
                    if (tag === 'BR') {
                        text += children[i].innerHTML;
                    } else if (children[i].firstChild.tagName === 'FIGURE') {
                        for (let z = 0; z < children[i].children.length; z++) {
                            if (children[i].children[z].childNodes?.length === 1 && children[i].children[z].childNodes[0].nodeName === '#text') {
                                text += '<p>' + children[i].children[z].innerHTML + '</p>';
                            } else if (children[i].children[z].children?.length === 2 && children[i].children[z].firstChild.tagName === 'IMG' && children[i].children[z].lastChild.tagName === 'FIGCAPTION') {
                                text += children[i].innerHTML;
                            } else {
                                let t = children[i].children[z].childNodes;
                                for (let j = 0; j < t.length; j++) {
                                    if (t[j].nodeName === '#text') {
                                        text += '<p>' + t[j].nodeValue + '</p>';
                                    } else {
                                        switch (t[j].tagName) {
                                            case 'IMG': {
                                                if (t[j].nextSibling && t[j].nextSibling.tagName === 'FIGCAPTION') {
                                                    text += '<figure><img src="' + t[j].getAttribute('src') + '" alt="' + t[j].getAttribute('alt') + '"/>' +
                                                        '<figcaption>' + t[j].nextSibling.innerHTML + '</figcaption></figure>';
                                                } else {
                                                    text += '<figure><img src="' + t[j].getAttribute('src') + '" alt="' + t[j].getAttribute('alt') + '"/>' +
                                                        '<figcaption></figcaption></figure>';
                                                }
                                                break;
                                            }
                                            case 'FIGCAPTION': {
                                                if (t[j].previousSibling && t[j].previousSibling.tagName === 'IMG') {
                                                    break;
                                                } else {
                                                    text += '<p>' + t[j].innerHTML + '</p>';
                                                }

                                                break;
                                            }
                                            case 'SPAN': {
                                                if (t[j].innerHTML === '<br>') {
                                                    text += '<br>';
                                                } else {
                                                    text += '<p>' + t[j].innerHTML + '</p>';
                                                }
                                                break;
                                            }
                                            default: {
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
            }
            //  console.log(text)
        },
        option(type, arg) {
            switch (type) {
                case 'createLink': {
                    document.execCommand(type, false, prompt('لینک را وارد کنید', 'http://'));
                    break;
                }
                default: {
                    document.execCommand(type, false, arg);
                    break;
                }
            }
            this.closeOptions();
        },
        optionsToggle(hide) {
            let options = document.getElementsByClassName('content_btn');
            let add_btn = document.getElementById('add_content_btn');
            if (this.optionsFlag === 0) {
                add_btn.style = "transform: rotate(-45deg)";
                let right = 100; // for each extra btn, add 40 to this value
                for (let i = 0; i < options.length; i++) {
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
                for (let i = 0; i < options.length; i++) {
                    options[i].style.opacity = 0;
                    options[i].style.right = 20 + 'px';
                }
                this.optionsFlag--;
                // setTimeout(()=>{
                //     document.getElementById('add_content').classList.add('d-none');
                // },450);
            }
        },
        watchTextAreas() {
            this.blogTextElements = document.getElementsByTagName("textarea");
            for (let i = 0; i < this.blogTextElements.length; i++) {
                this.blogTextElements[i].setAttribute("style", "height:" + (this.blogTextElements[i].scrollHeight) + "px;overflow-y:hidden;");
                this.blogTextElements[i].addEventListener("input", changeHeight, false);
            }

            function changeHeight() {
                this.style.height = "auto";
                this.style.height = (this.scrollHeight) + "px";
            }

            // this.updatePreview();
        },
        deleteImage(index) {
            this.components.splice(index, 1);
        },
        setContentAdderType(type, index) {
            document.getElementById('add_content').setAttribute('data-before-type', type);
            if (index !== 'index') {
                document.getElementById('add_content').setAttribute('data-before-index', index);
            }

        },
        closeOptions() {
            document.querySelector('#editor_options').classList.add('d-none');
        },
        fixFirstNode() {
            let txt = document.getElementById('editor').innerText;
            document.getElementById('editor').innerHTML = '<div>' + txt + '</div>';
            this.isFirstInput = false;
        },
        openImageModal() {
            this.optionsToggle(true);

            // document.getElementById('imageinner').value = '1';
            document.getElementById('btn_clear_image_inner').click();


        },
        closeModal() {
            document.removeEventListener('click', ImageCropper2.methods.handleImageCropped); //*
            console.log('removed')
            document.getElementById('btn_clear_image_inner').click();
        },

    }
}
</script>
<style>
#editor {
    outline: none;
}

.modal-lg {
    /*max-width:1200px !important;*/
    height: auto;
}

#imgModal {
    /*width: 100% !important;*/
}

#editor figure img {
    width: 70%;
}

#add_content {
    height: 60px;
    position: absolute;
    top: 450px;
    right: -3px;
    transition: 0.5s ease;

}

#add_content span {
    display: inline-block;
    text-align: center !important;
    width: 35px !important;
    height: 35px !important;
    border-radius: 50%;
    vertical-align: middle !important;
    position: absolute;
    right: 20px;

    transition: 0.5s ease;
}

#add_content span:hover {
    opacity: 0.7 !important;
}

.content_btn {
    opacity: 0;
}

#add_content span i {
    display: inline-block;
    text-align: center !important;
    font-size: 20px;
    vertical-align: middle !important;
    margin-top: 5px;

}

.editor_options {
    /*position: fixed;*/
    /*top: 50vh;*/
    /*right: calc(100% - 203px);*/
}


#editor img {
    cursor: pointer !important;
}

.modal-header .modal-title {
    padding: 0.5rem 0.5rem;
    margin: -0.5rem -0.5rem -0.5rem auto;
}

#img_edit_max_width {
    text-align: left !important;
    direction: ltr !important;
}
</style>
