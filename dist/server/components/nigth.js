exports.ids = [2];
exports.modules = {

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("b3f5c89c", content, true, context)
};

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nigth_vue_vue_type_style_index_0_id_3b8d360a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nigth_vue_vue_type_style_index_0_id_3b8d360a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nigth_vue_vue_type_style_index_0_id_3b8d360a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nigth_vue_vue_type_style_index_0_id_3b8d360a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nigth_vue_vue_type_style_index_0_id_3b8d360a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".background[data-v-3b8d360a]{background:linear-gradient(0deg,#383d95,#040d30 90%) no-repeat #383d95;margin:0;height:215vh;position:absolute;width:200%}#layers[data-v-3b8d360a]{overflow:hidden;width:100vw}#layers[data-v-3b8d360a],#layers .layer[data-v-3b8d360a]{height:200px;left:0;position:absolute;top:0}#layers .layer[data-v-3b8d360a]{background-size:auto 100%;background-position:50% 0;background-repeat:repeat-x;transform:translateZ(0);width:200vw}@-webkit-keyframes twinkle-data-v-3b8d360a{0%{opacity:.3}to{opacity:1}}@keyframes twinkle-data-v-3b8d360a{0%{opacity:.3}to{opacity:1}}@-webkit-keyframes layer-1-data-v-3b8d360a{0%{transform:translateZ(0)}to{transform:translate3d(-689px,0,0)}}@keyframes layer-1-data-v-3b8d360a{0%{transform:translateZ(0)}to{transform:translate3d(-689px,0,0)}}#layers .layer[data-v-3b8d360a]:first-child{-webkit-animation:twinkle-data-v-3b8d360a 10s ease-in -5s infinite alternate,layer-1-data-v-3b8d360a 344s linear infinite;animation:twinkle-data-v-3b8d360a 10s ease-in -5s infinite alternate,layer-1-data-v-3b8d360a 344s linear infinite;background-image:url(http://imgur.com/9beLKl9.png)}@-webkit-keyframes layer-2-data-v-3b8d360a{0%{transform:translateZ(0)}to{transform:translate3d(-699px,0,0)}}@keyframes layer-2-data-v-3b8d360a{0%{transform:translateZ(0)}to{transform:translate3d(-699px,0,0)}}#layers .layer[data-v-3b8d360a]:nth-child(2){-webkit-animation:twinkle-data-v-3b8d360a 3s ease-in -3s infinite alternate,layer-2-data-v-3b8d360a 349s linear infinite;animation:twinkle-data-v-3b8d360a 3s ease-in -3s infinite alternate,layer-2-data-v-3b8d360a 349s linear infinite;background-image:url(http://imgur.com/46MRYFa.png)}@-webkit-keyframes layer-3-data-v-3b8d360a{0%{transform:translateZ(0)}to{transform:translate3d(-699px,0,0)}}@keyframes layer-3-data-v-3b8d360a{0%{transform:translateZ(0)}to{transform:translate3d(-699px,0,0)}}#layers .layer[data-v-3b8d360a]:nth-child(3){-webkit-animation:twinkle-data-v-3b8d360a 3.5s ease-in infinite alternate,layer-3-data-v-3b8d360a 349s linear infinite;animation:twinkle-data-v-3b8d360a 3.5s ease-in infinite alternate,layer-3-data-v-3b8d360a 349s linear infinite;background-image:url(http://imgur.com/46MRYFa.png)}@-webkit-keyframes layer-4-data-v-3b8d360a{0%{transform:translateZ(0)}to{transform:translate3d(-480px,0,0)}}@keyframes layer-4-data-v-3b8d360a{0%{transform:translateZ(0)}to{transform:translate3d(-480px,0,0)}}#layers .layer[data-v-3b8d360a]:nth-child(4){-webkit-animation:twinkle-data-v-3b8d360a 4s ease-in -2s infinite alternate,layer-4-data-v-3b8d360a 240s linear infinite;animation:twinkle-data-v-3b8d360a 4s ease-in -2s infinite alternate,layer-4-data-v-3b8d360a 240s linear infinite;background-image:url(http://imgur.com/BqkETyl.png)}@-webkit-keyframes layer-5-data-v-3b8d360a{0%{transform:translateZ(0)}to{transform:translate3d(-486px,0,0)}}@keyframes layer-5-data-v-3b8d360a{0%{transform:translateZ(0)}to{transform:translate3d(-486px,0,0)}}#layers .layer[data-v-3b8d360a]:nth-child(5){-webkit-animation:twinkle-data-v-3b8d360a 5.5s ease-in infinite alternate,layer-5-data-v-3b8d360a 243s linear infinite;animation:twinkle-data-v-3b8d360a 5.5s ease-in infinite alternate,layer-5-data-v-3b8d360a 243s linear infinite;background-image:url(http://imgur.com/x1GB77K.png)}@-webkit-keyframes shooting-star-data-v-3b8d360a{0%{opacity:1;transform:translateZ(0)}25%{opacity:1}to{opacity:0;transform:translate3d(-270px,180px,0)}}@keyframes shooting-star-data-v-3b8d360a{0%{opacity:1;transform:translateZ(0)}25%{opacity:1}to{opacity:0;transform:translate3d(-270px,180px,0)}}#layers[data-v-3b8d360a]:before{-webkit-animation:shooting-star-data-v-3b8d360a .5s linear 3s;animation:shooting-star-data-v-3b8d360a .5s linear 3s;background-image:url(http://imgur.com/ilhrli3.png);background-size:72px 50px;content:\" \";height:50px;left:80%;position:absolute;top:-50px;width:72px;z-index:100}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/nigth.vue?vue&type=template&id=3b8d360a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"background"},[_vm._ssrNode("<div id=\"layers\" data-v-3b8d360a><div class=\"layer\" data-v-3b8d360a></div> <div class=\"layer\" data-v-3b8d360a></div> <div class=\"layer\" data-v-3b8d360a></div> <div class=\"layer\" data-v-3b8d360a></div> <div class=\"layer\" data-v-3b8d360a></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/nigth.vue?vue&type=template&id=3b8d360a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/nigth.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var nigthvue_type_script_lang_js_ = ({
  name: 'NigthComponent'
});
// CONCATENATED MODULE: ./components/nigth.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nigthvue_type_script_lang_js_ = (nigthvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/nigth.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(28)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_nigthvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3b8d360a",
  "3fd342a0"
  
)

/* harmony default export */ var nigth = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=nigth.js.map