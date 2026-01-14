"use strict";
(self["webpackChunkprog_tools"] = self["webpackChunkprog_tools"] || []).push([["src_app_singapore-nric_validator_validator_module_ts"],{

/***/ 1204:
/*!*****************************************************************!*\
  !*** ./src/app/singapore-nric/validator/validator.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValidatorComponent: () => (/* binding */ ValidatorComponent)
/* harmony export */ });
/* harmony import */ var _generator_generator_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generator/generator-logic */ 1722);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 3840);




function ValidatorComponent_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "check_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ValidatorComponent_mat_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "error_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class ValidatorComponent {
  constructor() {
    this.enteredNric = '';
  }
  ngOnInit() {}
  nricChanged($event) {
    this.enteredNric = $event.target.value;
    this.valid = (0,_generator_generator_logic__WEBPACK_IMPORTED_MODULE_0__.validateNric)(this.enteredNric);
  }
  static {
    this.ɵfac = function ValidatorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ValidatorComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ValidatorComponent,
      selectors: [["app-validator"]],
      standalone: false,
      decls: 5,
      vars: 3,
      consts: [[1, "container"], ["type", "text", 3, "input", "value"], [1, "status_icon"], ["color", "primary", 4, "ngIf"], ["color", "warn", 4, "ngIf"], ["color", "primary"], ["color", "warn"]],
      template: function ValidatorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "input", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function ValidatorComponent_Template_input_input_1_listener($event) {
            return ctx.nricChanged($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ValidatorComponent_mat_icon_3_Template, 2, 0, "mat-icon", 3)(4, ValidatorComponent_mat_icon_4_Template, 2, 0, "mat-icon", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.enteredNric);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.valid);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.valid);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon],
      styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.status_icon[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2luZ2Fwb3JlLW5yaWMvdmFsaWRhdG9yL3ZhbGlkYXRvci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZS1zdHlsZXMvc3BhY2luZy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JDTGE7QURLZiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3BhZ2Utc3R5bGVzL3NwYWNpbmcnO1xyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uc3RhdHVzX2ljb257XHJcbiAgbWFyZ2luLWxlZnQ6ICRzcGFjaW5nLW1pbmk7XHJcbn1cclxuIiwiJHNwYWNpbmctbWljcm86IDJweDtcclxuJHNwYWNpbmctbWluaTogNHB4O1xyXG4kc3BhY2luZy1raWxvOiAxNnB4O1xyXG5cclxuJHNpemUtY29udGVudC1oZWlnaHQ6IDEwMHZoO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 2803:
/*!**************************************************************!*\
  !*** ./src/app/singapore-nric/validator/validator.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValidatorModule: () => (/* binding */ ValidatorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _validator_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validator-routing.module */ 7002);
/* harmony import */ var _validator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validator.component */ 1204);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);






class ValidatorModule {
  static {
    this.ɵfac = function ValidatorModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ValidatorModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: ValidatorModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _validator_routing_module__WEBPACK_IMPORTED_MODULE_0__.ValidatorRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ValidatorModule, {
    declarations: [_validator_component__WEBPACK_IMPORTED_MODULE_1__.ValidatorComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _validator_routing_module__WEBPACK_IMPORTED_MODULE_0__.ValidatorRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule]
  });
})();

/***/ }),

/***/ 7002:
/*!**********************************************************************!*\
  !*** ./src/app/singapore-nric/validator/validator-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValidatorRoutingModule: () => (/* binding */ ValidatorRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 8431);
/* harmony import */ var _validator_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validator.component */ 1204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _validator_component__WEBPACK_IMPORTED_MODULE_0__.ValidatorComponent
}];
class ValidatorRoutingModule {
  static {
    this.ɵfac = function ValidatorRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ValidatorRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ValidatorRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ValidatorRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_singapore-nric_validator_validator_module_ts.js.map