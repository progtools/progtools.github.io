"use strict";
(self["webpackChunkprog_tools"] = self["webpackChunkprog_tools"] || []).push([["src_app_camera_scanner_module_ts"],{

/***/ 1243:
/*!*********************************************!*\
  !*** ./src/app/camera/scanner.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScannerComponent: () => (/* binding */ ScannerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class ScannerComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function ScannerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ScannerComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ScannerComponent,
      selectors: [["app-scanner"]],
      standalone: false,
      decls: 2,
      vars: 0,
      template: function ScannerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "scanner works!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 5483:
/*!**************************************************!*\
  !*** ./src/app/camera/scanner-routing.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScannerRoutingModule: () => (/* binding */ ScannerRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 8431);
/* harmony import */ var _scanner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scanner.component */ 1243);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _scanner_component__WEBPACK_IMPORTED_MODULE_0__.ScannerComponent
}, {
  path: 'qr',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_common_components_components_module_ts-src_app_common_utils_ImageFileReader_ts"), __webpack_require__.e("src_app_camera_qr_qr_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./qr/qr.module */ 3193)).then(m => m.QrModule)
}, {
  path: 'crop',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_icon_mjs"), __webpack_require__.e("default-src_app_common_components_components_module_ts-src_app_common_utils_ImageFileReader_ts"), __webpack_require__.e("src_app_camera_crop_crop_module_ts-node_modules_rxjs__esm2015_internal_observable_forkJoin_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./crop/crop.module */ 9379)).then(m => m.CropModule)
}];
class ScannerRoutingModule {
  static {
    this.ɵfac = function ScannerRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ScannerRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ScannerRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ScannerRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 8026:
/*!******************************************!*\
  !*** ./src/app/camera/scanner.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScannerModule: () => (/* binding */ ScannerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _scanner_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scanner-routing.module */ 5483);
/* harmony import */ var _scanner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scanner.component */ 1243);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);




class ScannerModule {
  static {
    this.ɵfac = function ScannerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ScannerModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: ScannerModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _scanner_routing_module__WEBPACK_IMPORTED_MODULE_0__.ScannerRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ScannerModule, {
    declarations: [_scanner_component__WEBPACK_IMPORTED_MODULE_1__.ScannerComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _scanner_routing_module__WEBPACK_IMPORTED_MODULE_0__.ScannerRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_camera_scanner_module_ts.js.map