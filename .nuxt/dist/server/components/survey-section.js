exports.ids = [3,1,2];
exports.modules = {

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dropdown.vue?vue&type=template&id=6b8a0890&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dropdown"},[_vm._ssrNode("<ul class=\"dropdown__list\">"+(_vm._ssrList((_vm.data),function(item,index){return ("<li"+(_vm._ssrClass(null,['dropdown__item', _vm.classHandler(index)]))+">"+_vm._ssrEscape("\n      "+_vm._s(item.title)+"\n    ")+"</li>")}))+"</ul>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/dropdown.vue?vue&type=template&id=6b8a0890&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dropdown.vue?vue&type=script&lang=js&
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
//
//
//
/* harmony default export */ var dropdownvue_type_script_lang_js_ = ({
  name: "Dropdown",

  data() {
    return {
      selectedItem: 0
    };
  },

  props: {
    data: {
      type: Array
    },
    id: {
      type: Number
    },
    activeItem: {
      type: String
    },
    onClick: {
      type: Function
    },
    field_id: {
      type: Number
    },
    field_type: {
      type: String
    }
  },
  methods: {
    classHandler(id) {
      return id === this.selectedItem ? "active" : "";
    },

    clickHandler(item, index, id, field_id) {
      this.selectedItem = index;
      this.onClick({
        title: item.title,
        type: item.type,
        fieldType: item.fieldType,
        id: id,
        field_id: field_id
      });
    }

  }
});
// CONCATENATED MODULE: ./components/dropdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_dropdownvue_type_script_lang_js_ = (dropdownvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/dropdown.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(31)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_dropdownvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "1e2c1be3"
  
)

/* harmony default export */ var dropdown = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(32);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("c704bc40", content, true, context)
};

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(35);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("191a25e6", content, true, context)
};

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dropdown_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dropdown_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dropdown_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dropdown_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dropdown_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".dropdown{position:relative;display:flex;flex-direction:column;height:40px;margin:0;padding:0;z-index:0}.dropdown__list{position:absolute;left:0;top:0;margin:0;padding:0 10px;width:100%;background-color:#fff;border:1px solid grey;border-radius:5px}.dropdown__item{color:#888;cursor:pointer;display:none;margin:10px 0;border-radius:5px}.dropdown:hover .dropdown__list{height:unset}.dropdown:hover{z-index:10}.dropdown__item:hover{opacity:1;color:#151515}.dropdown__item.active{color:#000;order:-1;display:block}.dropdown:hover .dropdown__item{display:block}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/field.vue?vue&type=template&id=41c62b7c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card__fields-item"},[_vm._ssrNode(((_vm.field_type == 'Диапазон' && _vm.field_id > 0)?("<span class=\"card__logic\">Или</span>"):"<!---->")+" <span class=\"card__title\">"+_vm._ssrEscape(_vm._s((_vm.field_type + " " + (_vm.field_id + 1))))+"</span> "),(_vm.data.parameters)?_c('Dropdown',{attrs:{"data":_vm.data.parameters,"onClick":_vm.changeCardFieldActive,"id":_vm.id,"field_id":_vm.field_id,"field_type":_vm.field_type}}):_c('div',{staticClass:"card__range"},[_c('span',{staticClass:"card__title"},[_vm._v(" от ")]),_vm._v(" "),_c('input',{domProps:{"value":_vm.data.from},on:{"keyup":_vm.changeFrom}}),_vm._v(" "),_c('span',{staticClass:"card__title"},[_vm._v(" до ")]),_vm._v(" "),_c('input',{domProps:{"value":_vm.data.to},on:{"keyup":_vm.changeTo}})])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/field.vue?vue&type=template&id=41c62b7c&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./components/dropdown.vue + 4 modules
var dropdown = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/field.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
//


/* harmony default export */ var fieldvue_type_script_lang_js_ = ({
  name: "Field",
  props: {
    data: {
      type: Object
    },
    id: {
      type: Number
    },
    field_id: {
      type: Number
    },
    field_type: {
      type: String
    }
  },
  components: {
    Dropdown: dropdown["default"]
  },
  methods: { ...Object(external_vuex_["mapActions"])(["changeCardFieldActive", "updateFieldRange"]),

    changeFrom(event) {
      console.log("to");
      this.updateFieldRange({
        from: event.target.value,
        id: this.id,
        field_id: this.field_id
      });
    },

    changeTo(event) {
      console.log("from");
      this.updateFieldRange({
        to: event.target.value,
        id: this.id,
        field_id: this.field_id
      });
    }

  }
});
// CONCATENATED MODULE: ./components/field.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_fieldvue_type_script_lang_js_ = (fieldvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/field.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(34)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_fieldvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2227c9d0"
  
)

/* harmony default export */ var field = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Dropdown: __webpack_require__(28).default})


/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_field_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_field_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_field_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_field_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_field_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".card__fields-item{display:flex;justify-content:flex-start;align-items:center;flex-direction:row}.card__fields-item>.dropdown{width:200px}.card__logic{display:flex;justify-content:center;align-items:center;padding:10px;opacity:.7;margin:0 5px 0 0;background-color:#fff;border-radius:5px}.card__range{margin-left:10px}.card__range input{background-color:#fff;border-radius:5px;box-shadow:none;border:1px solid grey;margin-right:10px;padding:10px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("c5a3cf00", content, true, context)
};

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_survey_section_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_survey_section_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_survey_section_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_survey_section_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_survey_section_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".card{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;position:relative;width:800px;background-color:#fff2b9;border:1px solid grey;border-radius:5px;padding-bottom:50px;margin:10px 0}.card:first-of-type:before{display:none}.card:before{content:\"И\";position:absolute;top:-25px;left:20px;justify-content:center;width:30px;height:30px;color:#67b460;border:1px solid #67b460;background-color:#fff;border-radius:5px}.card:before,.card__line{display:flex;align-items:center}.card__line{justify-content:flex-start;flex-direction:row;width:600px;margin:20px 10px}.card__line>.dropdown{width:500px}.card__title{font-weight:700;margin-right:10px;opacity:.6}.card__add{box-shadow:none;outline:none;position:absolute;background-color:#fff;color:#67b460;border:1px solid #67b460;border-radius:5px;bottom:10px;padding:10px 5px;left:200px}.card__fields{width:500px;list-style:none;margin:0;padding:0}.delete{position:absolute;background-color:#fff;color:red;border:1px solid red;border-radius:5px;bottom:10px;padding:10px 5px;right:5px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/survey-section.vue?vue&type=template&id=25cfc6b2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"card__line\">","</div>",[_vm._ssrNode("<span class=\"card__title\">"+_vm._ssrEscape(_vm._s(_vm.data.name))+"</span> "),_c('Dropdown',{attrs:{"data":_vm.cardTypes,"id":_vm.index,"activeItem":_vm.data.type,"onClick":_vm.changeCardType}})],2),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"card__fields\">","</ul>",_vm._l((_vm.data.fields),function(field,field_id){return _vm._ssrNode("<li class=\"card__line\">","</li>",[_c('Field',{attrs:{"data":field,"id":_vm.index,"field_id":field_id,"field_type":_vm.data.type}})],1)}),0),_vm._ssrNode(" "+((_vm.data.fieldType)?("<button class=\"card__add\">"+_vm._ssrEscape("\n    + Добавить "+_vm._s(_vm.data.type.toLowerCase())+"\n  ")+"</button>"):"<!---->")+" <button class=\"delete\">Удалить условие</button>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/survey-section.vue?vue&type=template&id=25cfc6b2&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./components/dropdown.vue + 4 modules
var dropdown = __webpack_require__(28);

// EXTERNAL MODULE: ./components/field.vue + 4 modules
var field = __webpack_require__(33);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/survey-section.vue?vue&type=script&lang=js&
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




/* harmony default export */ var survey_sectionvue_type_script_lang_js_ = ({
  name: "Survey-section",
  props: {
    data: {
      type: Object
    },
    index: {
      type: Number
    }
  },
  components: {
    Dropdown: dropdown["default"],
    Field: field["default"]
  },
  computed: { ...Object(external_vuex_["mapState"])(["cardTypes"])
  },
  methods: { ...Object(external_vuex_["mapActions"])(["changeCardType", "addField", "deleteCard"])
  }
});
// CONCATENATED MODULE: ./components/survey-section.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_survey_sectionvue_type_script_lang_js_ = (survey_sectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/survey-section.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(37)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_survey_sectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7fecc978"
  
)

/* harmony default export */ var survey_section = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Dropdown: __webpack_require__(28).default,Field: __webpack_require__(33).default})


/***/ })

};;
//# sourceMappingURL=survey-section.js.map