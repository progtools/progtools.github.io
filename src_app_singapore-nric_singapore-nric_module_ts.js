"use strict";
(self["webpackChunkprog_tools"] = self["webpackChunkprog_tools"] || []).push([["src_app_singapore-nric_singapore-nric_module_ts"],{

/***/ 1231:
/*!*********************************************************!*\
  !*** ./src/app/singapore-nric/singapore-nric.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SingaporeNricModule: () => (/* binding */ SingaporeNricModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _singapore_nric_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./singapore-nric-routing.module */ 6886);
/* harmony import */ var _singapore_nric_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./singapore-nric.component */ 5696);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);




class SingaporeNricModule {
  static {
    this.ɵfac = function SingaporeNricModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SingaporeNricModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: SingaporeNricModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _singapore_nric_routing_module__WEBPACK_IMPORTED_MODULE_0__.SingaporeNricRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SingaporeNricModule, {
    declarations: [_singapore_nric_component__WEBPACK_IMPORTED_MODULE_1__.SingaporeNricComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _singapore_nric_routing_module__WEBPACK_IMPORTED_MODULE_0__.SingaporeNricRoutingModule]
  });
})();

/***/ }),

/***/ 5696:
/*!************************************************************!*\
  !*** ./src/app/singapore-nric/singapore-nric.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SingaporeNricComponent: () => (/* binding */ SingaporeNricComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class SingaporeNricComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function SingaporeNricComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SingaporeNricComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SingaporeNricComponent,
      selectors: [["app-singapore-nric"]],
      standalone: false,
      decls: 2,
      vars: 0,
      template: function SingaporeNricComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "singapore-nric works!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6886:
/*!*****************************************************************!*\
  !*** ./src/app/singapore-nric/singapore-nric-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SingaporeNricRoutingModule: () => (/* binding */ SingaporeNricRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 8431);
/* harmony import */ var _singapore_nric_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./singapore-nric.component */ 5696);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _singapore_nric_component__WEBPACK_IMPORTED_MODULE_0__.SingaporeNricComponent
}, {
  path: 'generator',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_icon_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_index-DOxJc1m4_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_a11y_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_singapore-nric_generator_generator_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./generator/generator.module */ 6967)).then(m => m.GeneratorModule)
}, {
  path: 'validator',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_icon_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_singapore-nric_validator_validator_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./validator/validator.module */ 2803)).then(m => m.ValidatorModule)
}];
class SingaporeNricRoutingModule {
  static {
    this.ɵfac = function SingaporeNricRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SingaporeNricRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: SingaporeNricRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SingaporeNricRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_singapore-nric_singapore-nric_module_ts.js.map