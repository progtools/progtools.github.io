"use strict";
(self["webpackChunkprog_tools"] = self["webpackChunkprog_tools"] || []).push([["src_app_webrtc_p2pchat_p2pchat_module_ts"],{

/***/ 2588:
/*!*****************************************************!*\
  !*** ./src/app/webrtc/p2pchat/p2pchat.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P2pchatComponent: () => (/* binding */ P2pchatComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class P2pchatComponent {
  constructor() {}
  ngOnInit() {
    navigator.mediaDevices.getUserMedia();
  }
  static {
    this.ɵfac = function P2pchatComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || P2pchatComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: P2pchatComponent,
      selectors: [["app-p2pchat"]],
      standalone: false,
      decls: 0,
      vars: 0,
      template: function P2pchatComponent_Template(rf, ctx) {},
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3387:
/*!**************************************************!*\
  !*** ./src/app/webrtc/p2pchat/p2pchat.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P2pchatModule: () => (/* binding */ P2pchatModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _p2pchat_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./p2pchat-routing.module */ 6610);
/* harmony import */ var _p2pchat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./p2pchat.component */ 2588);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);




class P2pchatModule {
  static {
    this.ɵfac = function P2pchatModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || P2pchatModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: P2pchatModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _p2pchat_routing_module__WEBPACK_IMPORTED_MODULE_0__.P2pchatRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](P2pchatModule, {
    declarations: [_p2pchat_component__WEBPACK_IMPORTED_MODULE_1__.P2pchatComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _p2pchat_routing_module__WEBPACK_IMPORTED_MODULE_0__.P2pchatRoutingModule]
  });
})();

/***/ }),

/***/ 6610:
/*!**********************************************************!*\
  !*** ./src/app/webrtc/p2pchat/p2pchat-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P2pchatRoutingModule: () => (/* binding */ P2pchatRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 8431);
/* harmony import */ var _p2pchat_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./p2pchat.component */ 2588);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _p2pchat_component__WEBPACK_IMPORTED_MODULE_0__.P2pchatComponent
}];
class P2pchatRoutingModule {
  static {
    this.ɵfac = function P2pchatRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || P2pchatRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: P2pchatRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](P2pchatRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_webrtc_p2pchat_p2pchat_module_ts.js.map