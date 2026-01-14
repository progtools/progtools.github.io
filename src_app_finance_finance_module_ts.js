"use strict";
(self["webpackChunkprog_tools"] = self["webpackChunkprog_tools"] || []).push([["src_app_finance_finance_module_ts"],{

/***/ 2280:
/*!**********************************************!*\
  !*** ./src/app/finance/finance.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FinanceComponent: () => (/* binding */ FinanceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class FinanceComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function FinanceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FinanceComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FinanceComponent,
      selectors: [["app-finance"]],
      standalone: false,
      decls: 0,
      vars: 0,
      template: function FinanceComponent_Template(rf, ctx) {},
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3278:
/*!***************************************************!*\
  !*** ./src/app/finance/finance-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FinanceRoutingModule: () => (/* binding */ FinanceRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 8431);
/* harmony import */ var _finance_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./finance.component */ 2280);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _finance_component__WEBPACK_IMPORTED_MODULE_0__.FinanceComponent
}, {
  path: 'compound-interest',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_icon_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_input_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_finance_compound-interest_compound-interest_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./compound-interest/compound-interest.module */ 2600)).then(m => m.CompoundInterestModule)
}, {
  path: 'retirement-calculator',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_input_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_finance_retirement-calculator_retirement-calculator_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./retirement-calculator/retirement-calculator.module */ 924)).then(m => m.RetirementCalculatorModule)
}];
class FinanceRoutingModule {
  static {
    this.ɵfac = function FinanceRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FinanceRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: FinanceRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FinanceRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 7287:
/*!*******************************************!*\
  !*** ./src/app/finance/finance.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FinanceModule: () => (/* binding */ FinanceModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _finance_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./finance-routing.module */ 3278);
/* harmony import */ var _finance_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./finance.component */ 2280);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);




class FinanceModule {
  static {
    this.ɵfac = function FinanceModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FinanceModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: FinanceModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _finance_routing_module__WEBPACK_IMPORTED_MODULE_0__.FinanceRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FinanceModule, {
    declarations: [_finance_component__WEBPACK_IMPORTED_MODULE_1__.FinanceComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _finance_routing_module__WEBPACK_IMPORTED_MODULE_0__.FinanceRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_finance_finance_module_ts.js.map