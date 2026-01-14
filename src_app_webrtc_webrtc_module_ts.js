"use strict";
(self["webpackChunkprog_tools"] = self["webpackChunkprog_tools"] || []).push([["src_app_webrtc_webrtc_module_ts"],{

/***/ 3463:
/*!*****************************************!*\
  !*** ./src/app/webrtc/webrtc.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebrtcModule: () => (/* binding */ WebrtcModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _webrtc_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webrtc-routing.module */ 7950);
/* harmony import */ var _webrtc_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webrtc.component */ 5720);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);




class WebrtcModule {
  static {
    this.ɵfac = function WebrtcModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || WebrtcModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: WebrtcModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _webrtc_routing_module__WEBPACK_IMPORTED_MODULE_0__.WebrtcRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](WebrtcModule, {
    declarations: [_webrtc_component__WEBPACK_IMPORTED_MODULE_1__.WebrtcComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _webrtc_routing_module__WEBPACK_IMPORTED_MODULE_0__.WebrtcRoutingModule]
  });
})();

/***/ }),

/***/ 5720:
/*!********************************************!*\
  !*** ./src/app/webrtc/webrtc.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebrtcComponent: () => (/* binding */ WebrtcComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class WebrtcComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function WebrtcComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || WebrtcComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WebrtcComponent,
      selectors: [["app-webrtc"]],
      standalone: false,
      decls: 0,
      vars: 0,
      template: function WebrtcComponent_Template(rf, ctx) {},
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 7950:
/*!*************************************************!*\
  !*** ./src/app/webrtc/webrtc-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebrtcRoutingModule: () => (/* binding */ WebrtcRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 8431);
/* harmony import */ var _webrtc_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webrtc.component */ 5720);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _webrtc_component__WEBPACK_IMPORTED_MODULE_0__.WebrtcComponent
}, {
  path: 'p2pchat',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_webrtc_p2pchat_p2pchat_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./p2pchat/p2pchat.module */ 3387)).then(m => m.P2pchatModule)
}];
class WebrtcRoutingModule {
  static {
    this.ɵfac = function WebrtcRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || WebrtcRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: WebrtcRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](WebrtcRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_webrtc_webrtc_module_ts.js.map