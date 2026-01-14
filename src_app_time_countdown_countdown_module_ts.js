"use strict";
(self["webpackChunkprog_tools"] = self["webpackChunkprog_tools"] || []).push([["src_app_time_countdown_countdown_module_ts"],{

/***/ 258:
/*!*******************************************************************************!*\
  !*** ./src/app/time/countdown/count-down-group/count-down-group.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CountDownGroupComponent: () => (/* binding */ CountDownGroupComponent)
/* harmony export */ });
/* harmony import */ var _model_countDownTimerData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/countDownTimerData */ 5298);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3119);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 6443);
/* harmony import */ var _common_utils_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/utils/components-utils */ 3030);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8690);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 7464);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 5443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 6109);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 9273);
/* harmony import */ var _count_down_timer_count_down_timer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../count-down-timer/count-down-timer.component */ 5930);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _clock_services_seconds_tick_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../clock/services/seconds-tick.service */ 4466);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-bar */ 6354);












function CountDownGroupComponent_app_count_down_timer_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-count-down-timer", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("deleteClicked", function CountDownGroupComponent_app_count_down_timer_12_Template_app_count_down_timer_deleteClicked_0_listener() {
      const aCountDownTimer_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.onDeleteClicked(aCountDownTimer_r2.id));
    })("completed", function CountDownGroupComponent_app_count_down_timer_12_Template_app_count_down_timer_completed_0_listener() {
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const aCountDownTimer_r2 = ctx_r3.$implicit;
      const i_r5 = ctx_r3.index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.onTimerCompleted(aCountDownTimer_r2.id, i_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const aCountDownTimer_r2 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("countDownData", aCountDownTimer_r2)("passedSeconds$", !ctx_r2.runIndividually || ctx_r2.runningIndex == i_r5 ? ctx_r2.passedSeconds$ : null);
  }
}
class CountDownGroupComponent {
  get passedSeconds$() {
    return this.passedSecondsSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.share)());
  }
  constructor(secondsService, cdr) {
    this.cdr = cdr;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.onReset$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.nextId = 0;
    this.isPlaying = false;
    this.passedTime = 0;
    this.runIndividually = true;
    this.sort = false;
    this.replay = true;
    this.countdownTimers = [];
    this.passedSecondsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.runningIndex = 0;
    this.tickPerSecond$ = secondsService.getSeconds$().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(curSecond => Math.ceil(curSecond / 1000)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)());
  }
  ngOnInit() {
    this.countdownTimers = this.countdownTimers.concat(this.createNewTimerData()).concat(this.createNewTimerData()).concat(this.createNewTimerData());
  }
  ngOnDestroy() {
    this.passedSecondsSubject.complete();
    _common_utils_components_utils__WEBPACK_IMPORTED_MODULE_1__.ComponentsUtils.onComponentDestroyed(this.destroy$);
  }
  onAddGroup() {
    this.countdownTimers = this.countdownTimers.concat(this.createNewTimerData());
    if (this.sort) {
      this.countdownTimers = this.countdownTimers.sort((a, b) => a.timerFullDuration - b.timerFullDuration);
    }
  }
  onDeleteClicked(id) {
    this.countdownTimers = this.countdownTimers.filter(timer => timer.id !== id);
  }
  trackTimerFn(index, countDownData) {
    return countDownData.id;
  }
  togglePlay() {
    this.isPlaying = !this.isPlaying;
    const startValue = void 0;
    if (this.isPlaying) {
      const observable = this.onReset$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.startWith)(startValue));
      this.subscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.combineLatest)([this.tickPerSecond$, observable]).subscribe(() => this.passedSecondsSubject.next(this.passedTime++));
    } else {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
  }
  createNewTimerData() {
    return new _model_countDownTimerData__WEBPACK_IMPORTED_MODULE_0__.CountDownTimerData(this.nextId++, Math.round(Math.random() * 10) + 1);
  }
  onTimerCompleted(id, index) {
    if (this.runIndividually) {
      this.passedTime = 1;
      this.runningIndex++;
      if (this.runningIndex >= this.countdownTimers.length) {
        if (this.replay) {
          this.reset();
        } else {
          return;
        }
      }
      this.cdr.detectChanges();
      this.onReset$.next();
    }
  }
  reset() {
    this.passedTime = 0;
    this.runningIndex = 0;
    this.childTimerComponents.forEach(child => child.reset());
    this.cdr.detectChanges();
    this.onReset$.next();
  }
  static {
    this.ɵfac = function CountDownGroupComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CountDownGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_clock_services_seconds_tick_service__WEBPACK_IMPORTED_MODULE_3__.SecondsTickService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: CountDownGroupComponent,
      selectors: [["app-count-down-group"]],
      viewQuery: function CountDownGroupComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_count_down_timer_count_down_timer_component__WEBPACK_IMPORTED_MODULE_2__.CountDownTimerComponent, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.childTimerComponents = _t);
        }
      },
      inputs: {
        runIndividually: "runIndividually",
        sort: "sort",
        replay: "replay"
      },
      standalone: false,
      decls: 13,
      vars: 3,
      consts: [[1, "container"], ["mode", "determinate", "value", "40"], [1, "controls"], ["mat-fab", "", "color", "primary", "aria-label", "add new timer to the group", 1, "group-item", 3, "click"], ["class", "group-item", 3, "countDownData", "passedSeconds$", "deleteClicked", "completed", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "group-item", 3, "deleteClicked", "completed", "countDownData", "passedSeconds$"]],
      template: function CountDownGroupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-progress-bar", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2)(3, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountDownGroupComponent_Template_button_click_3_listener() {
            return ctx.onAddGroup();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "add");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountDownGroupComponent_Template_button_click_6_listener() {
            return ctx.togglePlay();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountDownGroupComponent_Template_button_click_9_listener() {
            return ctx.reset();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "refresh");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, CountDownGroupComponent_app_count_down_timer_12_Template, 1, 2, "app-count-down-timer", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.isPlaying ? "pause" : "play_arrow");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.countdownTimers)("ngForTrackBy", ctx.trackTimerFn);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatFabButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__.MatProgressBar, _count_down_timer_count_down_timer_component__WEBPACK_IMPORTED_MODULE_2__.CountDownTimerComponent],
      styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  padding: 5px;\n  border: 1px solid rgba(39, 35, 35, 0.726);\n}\n.container[_ngcontent-%COMP%]   .group-item[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGltZS9jb3VudGRvd24vY291bnQtZG93bi1ncm91cC9jb3VudC1kb3duLWdyb3VwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtBQUNGO0FBQ0U7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgzOSwgMzUsIDM1LCAwLjcyNik7XHJcblxyXG4gIC5ncm91cC1pdGVtIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 362:
/*!************************************************************!*\
  !*** ./src/app/time/countdown/countdown-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CountdownRoutingModule: () => (/* binding */ CountdownRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 8431);
/* harmony import */ var _countdown_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countdown.component */ 932);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _countdown_component__WEBPACK_IMPORTED_MODULE_0__.CountdownComponent
}];
class CountdownRoutingModule {
  static {
    this.ɵfac = function CountdownRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CountdownRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: CountdownRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CountdownRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 932:
/*!*******************************************************!*\
  !*** ./src/app/time/countdown/countdown.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CountdownComponent: () => (/* binding */ CountdownComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _count_down_group_count_down_group_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./count-down-group/count-down-group.component */ 258);


class CountdownComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function CountdownComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CountdownComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CountdownComponent,
      selectors: [["app-countdown"]],
      standalone: false,
      decls: 4,
      vars: 0,
      consts: [[1, "countdown"]],
      template: function CountdownComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-count-down-group")(3, "app-count-down-group");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
      },
      dependencies: [_count_down_group_count_down_group_component__WEBPACK_IMPORTED_MODULE_0__.CountDownGroupComponent],
      styles: ["app-count-down-group[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  margin: 16px;\n}\n\n.countdown[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGltZS9jb3VudGRvd24vY291bnRkb3duLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9wYWdlLXN0eWxlcy9zcGFjaW5nLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxjQUFBO0VBQ0EsWUNEYTtBRENmOztBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQUYiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9wYWdlLXN0eWxlcy9zcGFjaW5nJztcclxuYXBwLWNvdW50LWRvd24tZ3JvdXAge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG4gIG1hcmdpbjogJHNwYWNpbmcta2lsbztcclxufVxyXG5cclxuLmNvdW50ZG93biB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcbiIsIiRzcGFjaW5nLW1pY3JvOiAycHg7XHJcbiRzcGFjaW5nLW1pbmk6IDRweDtcclxuJHNwYWNpbmcta2lsbzogMTZweDtcclxuXHJcbiRzaXplLWNvbnRlbnQtaGVpZ2h0OiAxMDB2aDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 2320:
/*!***************************************************************************************!*\
  !*** ./src/app/time/countdown/count-down-dial-view/count-down-dial-view.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CountDownDialViewComponent: () => (/* binding */ CountDownDialViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class CountDownDialViewComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function CountDownDialViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CountDownDialViewComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CountDownDialViewComponent,
      selectors: [["app-count-down-dial-view"]],
      inputs: {
        hh: "hh",
        mm: "mm",
        ss: "ss"
      },
      standalone: false,
      decls: 10,
      vars: 3,
      consts: [[1, "dial", "hour", "time"], [1, "dial"], [1, "dial", "min", "time"], [1, "dial", "se", "time"]],
      template: function CountDownDialViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.hh, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.mm, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ss);
        }
      },
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n}\n\n.dial[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGltZS9jb3VudGRvd24vY291bnQtZG93bi1kaWFsLXZpZXcvY291bnQtZG93bi1kaWFsLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5kaWFsIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 3124:
/*!*****************************************************************************!*\
  !*** ./src/app/time/countdown/count-down-dial/count-down-dial.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CountDownDialComponent: () => (/* binding */ CountDownDialComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class CountDownDialComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function CountDownDialComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CountDownDialComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CountDownDialComponent,
      selectors: [["app-count-down-dial"]],
      inputs: {
        value: "value"
      },
      standalone: false,
      decls: 7,
      vars: 1,
      consts: [[1, "dial"], [1, "time"]],
      template: function CountDownDialComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "button");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "+");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "-");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value);
        }
      },
      styles: [".dial[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.time[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGltZS9jb3VudGRvd24vY291bnQtZG93bi1kaWFsL2NvdW50LWRvd24tZGlhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGFBQUE7RUFDQSxzQkFBQTtBQUNEOztBQUNBO0VBQ0Usa0JBQUE7QUFFRiIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsIHtcclxuIGRpc3BsYXk6IGZsZXg7XHJcbiBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi50aW1lIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 5298:
/*!************************************************************!*\
  !*** ./src/app/time/countdown/model/countDownTimerData.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CountDownTimerData: () => (/* binding */ CountDownTimerData)
/* harmony export */ });
class CountDownTimerData {
  // timeStarted: number;
  constructor(id, timerFullDuration) {
    this.id = id;
    this.timerFullDuration = timerFullDuration;
  }
}

/***/ }),

/***/ 5930:
/*!*******************************************************************************!*\
  !*** ./src/app/time/countdown/count-down-timer/count-down-timer.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CountDownTimerComponent: () => (/* binding */ CountDownTimerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 3119);
/* harmony import */ var _common_utils_components_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/utils/components-utils */ 3030);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 7464);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _count_down_dial_view_count_down_dial_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../count-down-dial-view/count-down-dial-view.component */ 2320);
/* harmony import */ var _count_down_dial_edit_count_down_dial_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../count-down-dial-edit/count-down-dial-edit.component */ 7538);










function CountDownTimerComponent_app_count_down_dial_view_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-count-down-dial-view", 8);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hh", ctx_r0.hh)("mm", ctx_r0.mm)("ss", ctx_r0.ss);
  }
}
function CountDownTimerComponent_app_count_down_dial_edit_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-count-down-dial-edit", 8);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hh", ctx_r0.hh)("mm", ctx_r0.mm)("ss", ctx_r0.ss);
  }
}
function CountDownTimerComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CountDownTimerComponent_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.onEdit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("inline", true);
  }
}
function CountDownTimerComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CountDownTimerComponent_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.onEditComplete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("inline", true);
  }
}
class CountDownTimerComponent {
  constructor(cdr) {
    this.cdr = cdr;
    this._onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.deleteClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.completed = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
  }
  ngOnInit() {
    // this.subscription = this.passedSeconds$
    //     //   .pipe(
    //     //     takeUntil(this._onDestroy$),
    //     //   )
    //   .subscribe(passedSecond => {
    //     let pendingSeconds = this.countDownData.activationTimer - passedSecond;
    //     this.setTimer(pendingSeconds)
    //     this.cdr.markForCheck();
    //   });
  }
  ngOnChanges(changes) {
    if (changes.countDownData) {
      const timer = changes.countDownData.currentValue;
      if (timer) {
        this.setTimer(timer.timerFullDuration);
      }
    }
    if (changes.passedSeconds$) {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
      const passedSeconds$ = changes.passedSeconds$.currentValue;
      if (passedSeconds$) {
        this.subscription = passedSeconds$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._onDestroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.completed)).subscribe(passedSecond => {
          const pendingSeconds = this.countDownData.timerFullDuration - passedSecond;
          this.setTimer(pendingSeconds);
          this.cdr.markForCheck();
          if (pendingSeconds <= 0) {
            this.completed.emit();
            return;
          }
        });
      }
    }
  }
  ngOnDestroy() {
    _common_utils_components_utils__WEBPACK_IMPORTED_MODULE_0__.ComponentsUtils.onComponentDestroyed(this._onDestroy$);
  }
  reset() {
    this.setTimer(this.countDownData.timerFullDuration);
  }
  setTimer(pendingSeconds) {
    if (pendingSeconds < 0) {
      return;
    }
    this.ss = pendingSeconds % 60;
    pendingSeconds = Math.round(pendingSeconds / 60);
    this.mm = pendingSeconds % 60;
    pendingSeconds = Math.round(pendingSeconds / 60);
    this.hh = pendingSeconds;
  }
  onEdit() {
    this.isInEditMode = true;
  }
  onEditComplete() {
    this.isInEditMode = false;
  }
  static {
    this.ɵfac = function CountDownTimerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CountDownTimerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: CountDownTimerComponent,
      selectors: [["app-count-down-timer"]],
      inputs: {
        countDownData: "countDownData",
        passedSeconds$: "passedSeconds$"
      },
      outputs: {
        deleteClicked: "deleteClicked",
        completed: "completed"
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
      decls: 13,
      vars: 5,
      consts: [[1, "timer"], [3, "hh", "mm", "ss", 4, "ngIf"], [1, "controls-group"], [1, "button-container"], ["mat-flat-button", "", "color", "primary", "class", "controls", "aria-label", "Edit the time", 3, "click", 4, "ngIf"], ["mat-flat-button", "", "color", "accent", "class", "controls", "aria-label", "Finish editing the time", 3, "click", 4, "ngIf"], ["mat-flat-button", "", "color", "warn", "aria-label", "Delete the countdown", 1, "controls", 3, "click"], [3, "inline"], [3, "hh", "mm", "ss"], ["mat-flat-button", "", "color", "primary", "aria-label", "Edit the time", 1, "controls", 3, "click"], ["mat-flat-button", "", "color", "accent", "aria-label", "Finish editing the time", 1, "controls", 3, "click"]],
      template: function CountDownTimerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CountDownTimerComponent_app_count_down_dial_view_1_Template, 1, 3, "app-count-down-dial-view", 1)(2, CountDownTimerComponent_app_count_down_dial_edit_2_Template, 1, 3, "app-count-down-dial-edit", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2)(4, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CountDownTimerComponent_button_5_Template, 3, 1, "button", 4)(6, CountDownTimerComponent_button_6_Template, 3, 1, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CountDownTimerComponent_Template_button_click_7_listener() {
            return ctx.deleteClicked.emit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-icon", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "delete");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 3)(11, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "reorder");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isInEditMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isInEditMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isInEditMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isInEditMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("inline", true);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _count_down_dial_view_count_down_dial_view_component__WEBPACK_IMPORTED_MODULE_1__.CountDownDialViewComponent, _count_down_dial_edit_count_down_dial_edit_component__WEBPACK_IMPORTED_MODULE_2__.CountDownDialEditComponent],
      styles: [".timer[_ngcontent-%COMP%] {\n  display: flex;\n  box-shadow: 0 0 8px 2px #888888;\n  border-radius: 9px;\n  padding: 4px;\n}\n.timer[_ngcontent-%COMP%]   app-count-down-dial[_ngcontent-%COMP%], .timer[_ngcontent-%COMP%]   app-count-down-dial-edit[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  margin: 0;\n}\n\n.controls-group[_ngcontent-%COMP%] {\n  display: flex;\n  margin-left: 5px;\n}\n\n.button-container[_ngcontent-%COMP%] {\n  display: flex;\n  margin-left: 4px;\n  flex-direction: column;\n  justify-content: center;\n}\n.button-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%] {\n  margin: 2px;\n  flex: 1 1 auto;\n}\n\n.controls[_ngcontent-%COMP%] {\n  min-width: 20px;\n  padding: 0 10px;\n  line-height: 20px;\n}\n\napp-count-down-dial-view[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGltZS9jb3VudGRvd24vY291bnQtZG93bi10aW1lci9jb3VudC1kb3duLXRpbWVyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9wYWdlLXN0eWxlcy9zcGFjaW5nLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlDTGE7QURJZjtBQUVFO0VBQ0UsY0FBQTtFQUNBLFNBQUE7QUFBSjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLGdCQ25CYTtFRG9CYixzQkFBQTtFQUNBLHVCQUFBO0FBREY7QUFHRTtFQUNFLFdDekJZO0VEMEJaLGNBQUE7QUFESjs7QUFNQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7QUFIRiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3BhZ2Utc3R5bGVzL3NwYWNpbmcnO1xyXG5cclxuLnRpbWVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCA4cHggMnB4ICM4ODg4ODg7XHJcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gIHBhZGRpbmc6ICRzcGFjaW5nLW1pbmk7XHJcbiAgYXBwLWNvdW50LWRvd24tZGlhbCwgYXBwLWNvdW50LWRvd24tZGlhbC1lZGl0IHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgbWFyZ2luOiAwIDtcclxuICB9XHJcbn1cclxuXHJcbi5jb250cm9scy1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4uYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tbGVmdDogJHNwYWNpbmctbWluaTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAuY29udHJvbHN7XHJcbiAgICBtYXJnaW46ICRzcGFjaW5nLW1pY3JvO1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLmNvbnRyb2xzIHtcclxuICBtaW4td2lkdGg6IDIwcHg7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG5hcHAtY291bnQtZG93bi1kaWFsLXZpZXd7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbiIsIiRzcGFjaW5nLW1pY3JvOiAycHg7XHJcbiRzcGFjaW5nLW1pbmk6IDRweDtcclxuJHNwYWNpbmcta2lsbzogMTZweDtcclxuXHJcbiRzaXplLWNvbnRlbnQtaGVpZ2h0OiAxMDB2aDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6339:
/*!****************************************************!*\
  !*** ./src/app/time/countdown/countdown.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CountdownModule: () => (/* binding */ CountdownModule)
/* harmony export */ });
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _countdown_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countdown-routing.module */ 362);
/* harmony import */ var _countdown_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countdown.component */ 932);
/* harmony import */ var _count_down_timer_count_down_timer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./count-down-timer/count-down-timer.component */ 5930);
/* harmony import */ var _count_down_dial_count_down_dial_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./count-down-dial/count-down-dial.component */ 3124);
/* harmony import */ var _count_down_group_count_down_group_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./count-down-group/count-down-group.component */ 258);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-bar */ 6354);
/* harmony import */ var _count_down_dial_view_count_down_dial_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./count-down-dial-view/count-down-dial-view.component */ 2320);
/* harmony import */ var _count_down_dial_edit_count_down_dial_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./count-down-dial-edit/count-down-dial-edit.component */ 7538);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);












class CountdownModule {
  static {
    this.ɵfac = function CountdownModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CountdownModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
      type: CountdownModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _countdown_routing_module__WEBPACK_IMPORTED_MODULE_0__.CountdownRoutingModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__.MatProgressBarModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](CountdownModule, {
    declarations: [_countdown_component__WEBPACK_IMPORTED_MODULE_1__.CountdownComponent, _count_down_timer_count_down_timer_component__WEBPACK_IMPORTED_MODULE_2__.CountDownTimerComponent, _count_down_dial_count_down_dial_component__WEBPACK_IMPORTED_MODULE_3__.CountDownDialComponent, _count_down_group_count_down_group_component__WEBPACK_IMPORTED_MODULE_4__.CountDownGroupComponent, _count_down_dial_view_count_down_dial_view_component__WEBPACK_IMPORTED_MODULE_5__.CountDownDialViewComponent, _count_down_dial_edit_count_down_dial_edit_component__WEBPACK_IMPORTED_MODULE_6__.CountDownDialEditComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _countdown_routing_module__WEBPACK_IMPORTED_MODULE_0__.CountdownRoutingModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__.MatProgressBarModule]
  });
})();

/***/ }),

/***/ 7538:
/*!***************************************************************************************!*\
  !*** ./src/app/time/countdown/count-down-dial-edit/count-down-dial-edit.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CountDownDialEditComponent: () => (/* binding */ CountDownDialEditComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class CountDownDialEditComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function CountDownDialEditComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CountDownDialEditComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CountDownDialEditComponent,
      selectors: [["app-count-down-dial-edit"]],
      inputs: {
        hh: "hh",
        mm: "mm",
        ss: "ss"
      },
      standalone: false,
      decls: 25,
      vars: 3,
      consts: [[1, "dial", "hour", "time"], [1, "time"], [1, "dial"], [1, "dial", "min", "time"], [1, "dial", "se", "time"]],
      template: function CountDownDialEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "button");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "+");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "-");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3)(10, "button");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "+");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "-");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4)(19, "button");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "+");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "-");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hh);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.mm);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ss);
        }
      },
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n}\n\n.dial[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGltZS9jb3VudGRvd24vY291bnQtZG93bi1kaWFsLWVkaXQvY291bnQtZG93bi1kaWFsLWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5kaWFsIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_time_countdown_countdown_module_ts.js.map