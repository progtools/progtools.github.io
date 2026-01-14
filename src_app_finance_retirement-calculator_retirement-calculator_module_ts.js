"use strict";
(self["webpackChunkprog_tools"] = self["webpackChunkprog_tools"] || []).push([["src_app_finance_retirement-calculator_retirement-calculator_module_ts"],{

/***/ 924:
/*!*******************************************************************************!*\
  !*** ./src/app/finance/retirement-calculator/retirement-calculator.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RetirementCalculatorModule: () => (/* binding */ RetirementCalculatorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _retirement_calculator_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./retirement-calculator-routing.module */ 8517);
/* harmony import */ var _retirement_calculator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./retirement-calculator.component */ 5609);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var src_app_common_app_commons_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/app-commons.module */ 6270);
/* harmony import */ var src_app_common_components_ux_prog_input_type_one_prog_input_type_one_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/components/ux/prog-input-type-one/prog-input-type-one.module */ 7746);
/* harmony import */ var _cashflow_input_cashflow_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cashflow-input/cashflow-input.component */ 4010);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);








class RetirementCalculatorModule {
  static {
    this.ɵfac = function RetirementCalculatorModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || RetirementCalculatorModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: RetirementCalculatorModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _retirement_calculator_routing_module__WEBPACK_IMPORTED_MODULE_0__.RetirementCalculatorRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, src_app_common_app_commons_module__WEBPACK_IMPORTED_MODULE_2__.AppCommonsModule, src_app_common_components_ux_prog_input_type_one_prog_input_type_one_module__WEBPACK_IMPORTED_MODULE_3__.ProgInputTypeOneModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](RetirementCalculatorModule, {
    declarations: [_retirement_calculator_component__WEBPACK_IMPORTED_MODULE_1__.RetirementCalculatorComponent, _cashflow_input_cashflow_input_component__WEBPACK_IMPORTED_MODULE_4__.CashflowInputComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _retirement_calculator_routing_module__WEBPACK_IMPORTED_MODULE_0__.RetirementCalculatorRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, src_app_common_app_commons_module__WEBPACK_IMPORTED_MODULE_2__.AppCommonsModule, src_app_common_components_ux_prog_input_type_one_prog_input_type_one_module__WEBPACK_IMPORTED_MODULE_3__.ProgInputTypeOneModule]
  });
})();

/***/ }),

/***/ 4010:
/*!******************************************************************************************!*\
  !*** ./src/app/finance/retirement-calculator/cashflow-input/cashflow-input.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CashflowInputComponent: () => (/* binding */ CashflowInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);



class CashflowInputComponent {
  constructor(formBuilder) {
    this.formBuilder = formBuilder;
    this.initailAmount = 1000;
    this.interestRatePercent = 4;
    this.compoundedPerPeriod = 1;
    this.period = 10;
    this.contributionPerPeriod = 0;
    this.inputComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.DEFAULTS = {
      initailAmount: 1000,
      interestRatePercent: 4,
      period: 5,
      compoundedPerPeriod: 1,
      contributionPerPeriod: 0
    };
    this.checkoutForm = this.formBuilder.group({
      initailAmount: 1000,
      interestRatePercent: 4,
      period: 5,
      compoundedPerPeriod: 1,
      contributionPerPeriod: 1
    });
  }
  ngOnInit() {
    const {
      initailAmount,
      interestRatePercent,
      period,
      compoundedPerPeriod,
      contributionPerPeriod
    } = {
      ...this.DEFAULTS,
      ...this.inputValue
    };
    this.initailAmount = initailAmount;
    this.interestRatePercent = interestRatePercent;
    this.period = period;
    this.compoundedPerPeriod = compoundedPerPeriod;
    this.contributionPerPeriod = contributionPerPeriod;
  }
  calculate(formValue) {
    const {
      compoundedPerPeriod,
      initailAmount,
      interestRatePercent,
      period,
      contributionPerPeriod
    } = formValue;
    this.inputComplete.emit({
      compoundedPerPeriod,
      initailAmount,
      interestRatePercent,
      period,
      contributionPerPeriod
    });
  }
  static {
    this.ɵfac = function CashflowInputComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CashflowInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CashflowInputComponent,
      selectors: [["app-cashflow-input"]],
      inputs: {
        inputValue: "inputValue"
      },
      outputs: {
        inputComplete: "inputComplete"
      },
      standalone: false,
      decls: 24,
      vars: 1,
      consts: [[1, "the-dense-zone"], [1, "container", 3, "formGroup"], [1, "cashflow-input"], ["type", "number", "formControlName", "initailAmount"], ["type", "number", "formControlName", "contributionPerPeriod"], ["type", "number", "formControlName", "interestRatePercent"], ["type", "number", "formControlName", "compoundedPerPeriod"], ["type", "number", "formControlName", "period"], ["type", "submit", "mat-raised-button", ""]],
      template: function CashflowInputComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "form", 1)(2, "label", 2)(3, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "initailAmount:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 2)(7, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Contribution per period:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 2)(11, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Rate % per time period");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 2)(15, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Applied per time period");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 2)(19, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Time periods");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Calculate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.checkoutForm);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
      styles: ["form[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.cashflow-input[_ngcontent-%COMP%] {\n  flex: 1 1 0px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmluYW5jZS9yZXRpcmVtZW50LWNhbGN1bGF0b3IvY2FzaGZsb3ctaW5wdXQvY2FzaGZsb3ctaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JBO0VBQ0ksYUFBQTtBQWpCSjs7QUFtQkU7RUFDRixhQUFBO0FBaEJBIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnQGFuZ3VsYXIvbWF0ZXJpYWwnIGFzIG1hdDtcclxuLy8gZm9ybXtcclxuLy8gICBkaXNwbGF5OiBncmlkO1xyXG4vLyB9XHJcbi8vIC5jYXNoZmxvdy1pbnB1dCB7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuLy8gfVxyXG4vLyAuY29udGFpbmVyIHtcclxuLy8gICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxuLy8gfVxyXG4vLyAuY29udGFpbmVyIHtcclxuLy8gICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IFtjb2xdIDQwcHggW2NvbF0gNTBweCBbZW5kXTtcclxuLy8gICBncmlkLXRlbXBsYXRlLXJvd3M6IFtyb3ddIDI1JSBbcm93XSAxMDBweCBbZW5kXTtcclxuLy8gfVxyXG5cclxuXHJcblxyXG5mb3Jte1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgLmNhc2hmbG93LWlucHV0IHtcclxuZmxleDogMSAxIDBweDsgICBcclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 5609:
/*!**********************************************************************************!*\
  !*** ./src/app/finance/retirement-calculator/retirement-calculator.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RetirementCalculatorComponent: () => (/* binding */ RetirementCalculatorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _cashflow_input_cashflow_input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cashflow-input/cashflow-input.component */ 4010);


class RetirementCalculatorComponent {
  constructor() {
    this.initailAmount = 1000;
    this.interestRatePercent = 4;
    this.compoundedPerPeriod = 1;
    this.period = 10;
    this.contributionPerPeriod = 0;
  }
  ngOnInit() {}
  calculate(formValue) {
    const {
      compoundedPerPeriod,
      initailAmount,
      interestRatePercent,
      period,
      contributionPerPeriod
    } = formValue;
  }
  static {
    this.ɵfac = function RetirementCalculatorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || RetirementCalculatorComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: RetirementCalculatorComponent,
      selectors: [["app-retirement-calculator"]],
      standalone: false,
      decls: 5,
      vars: 0,
      template: function RetirementCalculatorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-cashflow-input")(1, "app-cashflow-input")(2, "app-cashflow-input")(3, "app-cashflow-input")(4, "app-cashflow-input");
        }
      },
      dependencies: [_cashflow_input_cashflow_input_component__WEBPACK_IMPORTED_MODULE_0__.CashflowInputComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 8517:
/*!***************************************************************************************!*\
  !*** ./src/app/finance/retirement-calculator/retirement-calculator-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RetirementCalculatorRoutingModule: () => (/* binding */ RetirementCalculatorRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 8431);
/* harmony import */ var _retirement_calculator_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./retirement-calculator.component */ 5609);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _retirement_calculator_component__WEBPACK_IMPORTED_MODULE_0__.RetirementCalculatorComponent
}];
class RetirementCalculatorRoutingModule {
  static {
    this.ɵfac = function RetirementCalculatorRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || RetirementCalculatorRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: RetirementCalculatorRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RetirementCalculatorRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_finance_retirement-calculator_retirement-calculator_module_ts.js.map