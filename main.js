"use strict";
(self["webpackChunkprog_tools"] = self["webpackChunkprog_tools"] || []).push([["main"],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2596);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _common_page_common_page_layout_common_page_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/page/common-page-layout/common-page-layout.component */ 5627);




class AppComponent {
  constructor(router) {
    this.router = router;
    this.title = 'prog-tools';
    this.router.events.subscribe(item => {
      if (item instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd && window.analytics) {
        window.analytics.page();
      }
    });
  }
  static {
    this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      standalone: false,
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-common-page-layout");
        }
      },
      dependencies: [_common_page_common_page_layout_common_page_layout_component__WEBPACK_IMPORTED_MODULE_0__.CommonPageLayoutComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 314:
/*!*********************************************************************************!*\
  !*** ./src/app/common/site-map/components/bread-crubs/bread-crubs.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BreadCrubsComponent: () => (/* binding */ BreadCrubsComponent)
/* harmony export */ });
/* harmony import */ var _utils_components_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../utils/components-utils */ 3030);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 3119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_matched_route_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/matched-route.service */ 7161);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 8431);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4175);







function BreadCrubsComponent_button_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const matchedRoute_r1 = ctx.$implicit;
    const isLast_r2 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", matchedRoute_r1.url)("color", isLast_r2 ? "primary" : "basic");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", matchedRoute_r1.siteMap.label, " ");
  }
}
class BreadCrubsComponent {
  constructor(matchedRouteService) {
    this.matchedRouteService = matchedRouteService;
    this.onDestroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }
  ngOnInit() {
    this.matchedRoute$ = this.matchedRouteService.matchedRoute$;
  }
  ngOnDestroy() {
    _utils_components_utils__WEBPACK_IMPORTED_MODULE_0__.ComponentsUtils.onComponentDestroyed(this.onDestroyed$);
  }
  static {
    this.ɵfac = function BreadCrubsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BreadCrubsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_matched_route_service__WEBPACK_IMPORTED_MODULE_1__.MatchedRouteService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: BreadCrubsComponent,
      selectors: [["app-bread-crubs"]],
      standalone: false,
      decls: 3,
      vars: 3,
      consts: [["mat-raised-button", "", "class", "breadcrumb-item", 3, "routerLink", "color", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 1, "breadcrumb-item", 3, "routerLink", "color"]],
      template: function BreadCrubsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BreadCrubsComponent_button_1_Template, 2, 3, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx.matchedRoute$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
      styles: [".breadcrumb-item[_ngcontent-%COMP%] {\n  margin-left: 2px;\n}\n.breadcrumb-item[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:first {\n  margin-left: unset;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tbW9uL3NpdGUtbWFwL2NvbXBvbmVudHMvYnJlYWQtY3J1YnMvYnJlYWQtY3J1YnMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxnQkFBQTtBQURGO0FBQUE7RUFJSSxrQkFBQTtBQURKIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vcGFnZS1zdHlsZXMvc3R5bGVzJztcblxuLmJyZWFkY3J1bWItaXRlbSB7XG4gIG1hcmdpbi1sZWZ0OiBAc3BhY2luZy1taWNybztcblxuICA6Zmlyc3R7XG4gICAgbWFyZ2luLWxlZnQ6IHVuc2V0O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _common_page_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/page/page.module */ 4091);
/* harmony import */ var _common_app_commons_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/app-commons.module */ 6270);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 9736);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/service-worker */ 6140);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ 5312);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @scullyio/ng-lib */ 3161);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);














class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _common_app_commons_module__WEBPACK_IMPORTED_MODULE_1__.AppCommonsModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBarModule, _common_page_page_module__WEBPACK_IMPORTED_MODULE_0__.PageModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__.ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.production
      }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_10__.StoreModule.forRoot({}, {}), _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_11__.ScullyLibModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _common_app_commons_module__WEBPACK_IMPORTED_MODULE_1__.AppCommonsModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBarModule, _common_page_page_module__WEBPACK_IMPORTED_MODULE_0__.PageModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__.ServiceWorkerModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_10__.StoreRootModule, _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_11__.ScullyLibModule]
  });
})();

/***/ }),

/***/ 3030:
/*!**************************************************!*\
  !*** ./src/app/common/utils/components-utils.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComponentsUtils: () => (/* binding */ ComponentsUtils)
/* harmony export */ });
class ComponentsUtils {
  static onComponentDestroyed(onDestroyed$) {
    onDestroyed$.next();
    onDestroyed$.complete();
  }
  static destroyBloc(bloc) {
    bloc.destroy();
  }
}

/***/ }),

/***/ 3093:
/*!*****************************************************!*\
  !*** ./src/app/common/site-map/dto/site-map-dto.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SiteMapDto: () => (/* binding */ SiteMapDto)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 5312);

class SiteMapDto {
  constructor(label, url, child, devOnly) {
    this.label = label;
    this.url = url;
    this.child = child;
    this.devOnly = devOnly;
  }
  static isEnabled(value) {
    return !value.devOnly || !_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production || window.devMode;
  }
}

/***/ }),

/***/ 3390:
/*!*************************************************************************************!*\
  !*** ./src/app/common/site-map/components/site-map-list/site-map-list.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SiteMapListComponent: () => (/* binding */ SiteMapListComponent)
/* harmony export */ });
/* harmony import */ var _dto_site_map_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dto/site-map-dto */ 3093);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2596);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 8431);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 3777);





function SiteMapListComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 2)(2, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const childRoute_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx_r1.matchedRoute.url.concat(childRoute_r1.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](childRoute_r1.label);
  }
}
class SiteMapListComponent {
  constructor(router, route) {
    this.router = router;
    this.route = route;
  }
  ngOnInit() {}
  get childRoutes() {
    return this.matchedRoute.siteMap.child.filter(value => _dto_site_map_dto__WEBPACK_IMPORTED_MODULE_0__.SiteMapDto.isEnabled(value));
  }
  navigate(url) {
    this.router.navigate([url], {
      relativeTo: this.route
    });
  }
  static {
    this.ɵfac = function SiteMapListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SiteMapListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SiteMapListComponent,
      selectors: [["app-site-map-list"]],
      inputs: {
        matchedRoute: "matchedRoute"
      },
      standalone: false,
      decls: 2,
      vars: 1,
      consts: [[1, "site-map-list_container"], [4, "ngFor", "ngForOf"], [3, "routerLink"]],
      template: function SiteMapListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SiteMapListComponent_ng_container_1_Template, 4, 2, "ng-container", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.childRoutes);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent],
      styles: [".site-map-list_container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  row-gap: 16px;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  margin-right: 16px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tbW9uL3NpdGUtbWFwL2NvbXBvbmVudHMvc2l0ZS1tYXAtbGlzdC9zaXRlLW1hcC1saXN0LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9wYWdlLXN0eWxlcy9zcGFjaW5nLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGFDSGE7QURFZjs7QUFHQTtFQUNFLGtCQ05hO0VET2IsZUFBQTtBQUFGIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi9zcmMvYXBwL3BhZ2Utc3R5bGVzL3N0eWxlJztcclxuXHJcbi5zaXRlLW1hcC1saXN0X2NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgcm93LWdhcDogJHNwYWNpbmcta2lsbztcclxufVxyXG5tYXQtY2FyZCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAkc3BhY2luZy1raWxvO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iLCIkc3BhY2luZy1taWNybzogMnB4O1xyXG4kc3BhY2luZy1taW5pOiA0cHg7XHJcbiRzcGFjaW5nLWtpbG86IDE2cHg7XHJcblxyXG4kc2l6ZS1jb250ZW50LWhlaWdodDogMTAwdmg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 4091:
/*!********************************************!*\
  !*** ./src/app/common/page/page.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageModule: () => (/* binding */ PageModule)
/* harmony export */ });
/* harmony import */ var _site_map_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../site-map/components/components.module */ 6926);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 8431);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-bar */ 6354);
/* harmony import */ var _common_page_layout_common_page_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-page-layout/common-page-layout.component */ 5627);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);






class PageModule {
  static {
    this.ɵfac = function PageModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PageModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: PageModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__.MatProgressBarModule, _site_map_components_components_module__WEBPACK_IMPORTED_MODULE_0__.SiteMapComponentsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PageModule, {
    declarations: [_common_page_layout_common_page_layout_component__WEBPACK_IMPORTED_MODULE_1__.CommonPageLayoutComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__.MatProgressBarModule, _site_map_components_components_module__WEBPACK_IMPORTED_MODULE_0__.SiteMapComponentsModule],
    exports: [_common_page_layout_common_page_layout_component__WEBPACK_IMPORTED_MODULE_1__.CommonPageLayoutComponent]
  });
})();

/***/ }),

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 8431);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



const routes = [{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}, {
  path: 'finance',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_finance_finance_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./finance/finance.module */ 7287)).then(m => m.FinanceModule)
}, {
  path: 'home',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 5055)).then(m => m.HomeModule)
}, {
  path: 'webrtc',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_webrtc_webrtc_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./webrtc/webrtc.module */ 3463)).then(m => m.WebrtcModule)
}, {
  path: 'camera',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_camera_scanner_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./camera/scanner.module */ 8026)).then(m => m.ScannerModule)
}, {
  path: 'time',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_icon_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_index-DOxJc1m4_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_time_time_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./time/time.module */ 6871)).then(m => m.WorldTimeModule)
}, {
  path: 'singaporeNric',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_singapore-nric_singapore-nric_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./singapore-nric/singapore-nric.module */ 1231)).then(m => m.SingaporeNricModule)
}, {
  path: 'encoding',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_encoding_encoding_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/encoding/encoding.module */ 317)).then(m => m.EncodingModule)
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5312);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 5627:
/*!********************************************************************************!*\
  !*** ./src/app/common/page/common-page-layout/common-page-layout.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommonPageLayoutComponent: () => (/* binding */ CommonPageLayoutComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 7464);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 5443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 1963);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 3119);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2596);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-bar */ 6354);
/* harmony import */ var _site_map_components_bread_crubs_bread_crubs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../site-map/components/bread-crubs/bread-crubs.component */ 314);
/* harmony import */ var _site_map_components_site_map_router_site_map_router_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../site-map/components/site-map-router/site-map-router.component */ 9334);










function CommonPageLayoutComponent_mat_progress_bar_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-progress-bar", 4);
  }
}
class CommonPageLayoutComponent {
  constructor(router, activatedRoute, titleService, metaService) {
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.titleService = titleService;
    this.metaService = metaService;
    this.onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.isLoadingRoute = true;
  }
  ngOnInit() {
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.onDestroy$)).subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouteConfigLoadStart) {
        this.isLoadingRoute = true;
      } else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouteConfigLoadEnd) {
        this.isLoadingRoute = false;
      }
    });
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.onDestroy$)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(() => this.activatedRoute), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(route => {
      while (route.firstChild) {
        route = route.firstChild;
      }
      return route;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(route => route.data)).subscribe(data => {
      const {
        title = 'ProgTools',
        description = ''
      } = data;
      this.titleService.setTitle(title);
      this.metaService.updateTag({
        name: 'description',
        content: description
      });
    });
  }
  ngOnDestroy() {
    this.isLoadingRoute = false;
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
  static {
    this.ɵfac = function CommonPageLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CommonPageLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.Meta));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: CommonPageLayoutComponent,
      selectors: [["app-common-page-layout"]],
      standalone: false,
      decls: 4,
      vars: 1,
      consts: [["mode", "indeterminate", "style", "position: absolute;", 4, "ngIf"], [1, "mdc-layout-grid", "page-layout"], [1, "mdc-layout-grid__cell--span-12"], [1, "content"], ["mode", "indeterminate", 2, "position", "absolute"]],
      template: function CommonPageLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CommonPageLayoutComponent_mat_progress_bar_0_Template, 1, 0, "mat-progress-bar", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-bread-crubs", 2)(3, "app-site-map-router", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoadingRoute);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__.MatProgressBar, _site_map_components_bread_crubs_bread_crubs_component__WEBPACK_IMPORTED_MODULE_0__.BreadCrubsComponent, _site_map_components_site_map_router_site_map_router_component__WEBPACK_IMPORTED_MODULE_1__.SiteMapRouterComponent],
      styles: ["[_ngcontent-%COMP%]:root {\n  --mdc-layout-grid-margin-desktop: 24px;\n  --mdc-layout-grid-gutter-desktop: 24px;\n  --mdc-layout-grid-column-width-desktop: 72px;\n  --mdc-layout-grid-margin-tablet: 16px;\n  --mdc-layout-grid-gutter-tablet: 16px;\n  --mdc-layout-grid-column-width-tablet: 72px;\n  --mdc-layout-grid-margin-phone: 16px;\n  --mdc-layout-grid-gutter-phone: 16px;\n  --mdc-layout-grid-column-width-phone: 72px;\n}\n\n@media (min-width: 840px) {\n  .mdc-layout-grid[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n    margin: 0 auto;\n    padding: 24px;\n    padding: var(--mdc-layout-grid-margin-desktop, 24px);\n  }\n}\n@media (min-width: 600px) and (max-width: 839px) {\n  .mdc-layout-grid[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n    margin: 0 auto;\n    padding: 16px;\n    padding: var(--mdc-layout-grid-margin-tablet, 16px);\n  }\n}\n@media (max-width: 599px) {\n  .mdc-layout-grid[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n    margin: 0 auto;\n    padding: 16px;\n    padding: var(--mdc-layout-grid-margin-phone, 16px);\n  }\n}\n@media (min-width: 840px) {\n  .mdc-layout-grid__inner[_ngcontent-%COMP%] {\n    display: flex;\n    flex-flow: row wrap;\n    align-items: stretch;\n    margin: -12px;\n    margin: calc(var(--mdc-layout-grid-gutter-desktop, 24px) / 2 * -1);\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__inner[_ngcontent-%COMP%] {\n      display: grid;\n      margin: 0;\n      grid-gap: 24px;\n      grid-gap: var(--mdc-layout-grid-gutter-desktop, 24px);\n      grid-template-columns: repeat(12, minmax(0, 1fr));\n    }\n  }\n}\n@media (min-width: 600px) and (max-width: 839px) {\n  .mdc-layout-grid__inner[_ngcontent-%COMP%] {\n    display: flex;\n    flex-flow: row wrap;\n    align-items: stretch;\n    margin: -8px;\n    margin: calc(var(--mdc-layout-grid-gutter-tablet, 16px) / 2 * -1);\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__inner[_ngcontent-%COMP%] {\n      display: grid;\n      margin: 0;\n      grid-gap: 16px;\n      grid-gap: var(--mdc-layout-grid-gutter-tablet, 16px);\n      grid-template-columns: repeat(8, minmax(0, 1fr));\n    }\n  }\n}\n@media (max-width: 599px) {\n  .mdc-layout-grid__inner[_ngcontent-%COMP%] {\n    display: flex;\n    flex-flow: row wrap;\n    align-items: stretch;\n    margin: -8px;\n    margin: calc(var(--mdc-layout-grid-gutter-phone, 16px) / 2 * -1);\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__inner[_ngcontent-%COMP%] {\n      display: grid;\n      margin: 0;\n      grid-gap: 16px;\n      grid-gap: var(--mdc-layout-grid-gutter-phone, 16px);\n      grid-template-columns: repeat(4, minmax(0, 1fr));\n    }\n  }\n}\n@media (min-width: 840px) {\n  .mdc-layout-grid__cell[_ngcontent-%COMP%] {\n    width: calc(33.3333333333% - 24px);\n    width: calc(33.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));\n    box-sizing: border-box;\n    margin: 12px;\n    margin: calc(var(--mdc-layout-grid-gutter-desktop, 24px) / 2);\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell[_ngcontent-%COMP%] {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell[_ngcontent-%COMP%] {\n      margin: 0;\n    }\n  }\n  .mdc-layout-grid__cell--span-1[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-1-desktop[_ngcontent-%COMP%] {\n    width: calc(8.3333333333% - 24px);\n    width: calc(8.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-1[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-1-desktop[_ngcontent-%COMP%] {\n      width: auto;\n      grid-column-end: span 1;\n    }\n  }\n  .mdc-layout-grid__cell--span-2[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-2-desktop[_ngcontent-%COMP%] {\n    width: calc(16.6666666667% - 24px);\n    width: calc(16.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-2[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-2-desktop[_ngcontent-%COMP%] {\n      width: auto;\n      grid-column-end: span 2;\n    }\n  }\n  .mdc-layout-grid__cell--span-3[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-3-desktop[_ngcontent-%COMP%] {\n    width: calc(25% - 24px);\n    width: calc(25% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-3[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-3-desktop[_ngcontent-%COMP%] {\n      width: auto;\n      grid-column-end: span 3;\n    }\n  }\n  .mdc-layout-grid__cell--span-4[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-4-desktop[_ngcontent-%COMP%] {\n    width: calc(33.3333333333% - 24px);\n    width: calc(33.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-4[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-4-desktop[_ngcontent-%COMP%] {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-5[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-5-desktop[_ngcontent-%COMP%] {\n    width: calc(41.6666666667% - 24px);\n    width: calc(41.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-5[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-5-desktop[_ngcontent-%COMP%] {\n      width: auto;\n      grid-column-end: span 5;\n    }\n  }\n  .mdc-layout-grid__cell--span-6[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-6-desktop[_ngcontent-%COMP%] {\n    width: calc(50% - 24px);\n    width: calc(50% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-6[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-6-desktop[_ngcontent-%COMP%] {\n      width: auto;\n      grid-column-end: span 6;\n    }\n  }\n  .mdc-layout-grid__cell--span-7[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-7-desktop[_ngcontent-%COMP%] {\n    width: calc(58.3333333333% - 24px);\n    width: calc(58.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-7[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-7-desktop[_ngcontent-%COMP%] {\n      width: auto;\n      grid-column-end: span 7;\n    }\n  }\n  .mdc-layout-grid__cell--span-8[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-8-desktop[_ngcontent-%COMP%] {\n    width: calc(66.6666666667% - 24px);\n    width: calc(66.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-8[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-8-desktop[_ngcontent-%COMP%] {\n      width: auto;\n      grid-column-end: span 8;\n    }\n  }\n  .mdc-layout-grid__cell--span-9[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-9-desktop[_ngcontent-%COMP%] {\n    width: calc(75% - 24px);\n    width: calc(75% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-9[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-9-desktop[_ngcontent-%COMP%] {\n      width: auto;\n      grid-column-end: span 9;\n    }\n  }\n  .mdc-layout-grid__cell--span-10[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-10-desktop[_ngcontent-%COMP%] {\n    width: calc(83.3333333333% - 24px);\n    width: calc(83.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-10[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-10-desktop[_ngcontent-%COMP%] {\n      width: auto;\n      grid-column-end: span 10;\n    }\n  }\n  .mdc-layout-grid__cell--span-11[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-11-desktop[_ngcontent-%COMP%] {\n    width: calc(91.6666666667% - 24px);\n    width: calc(91.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-11[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-11-desktop[_ngcontent-%COMP%] {\n      width: auto;\n      grid-column-end: span 11;\n    }\n  }\n  .mdc-layout-grid__cell--span-12[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-12-desktop[_ngcontent-%COMP%] {\n    width: calc(100% - 24px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-12[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-12-desktop[_ngcontent-%COMP%] {\n      width: auto;\n      grid-column-end: span 12;\n    }\n  }\n}\n@media (min-width: 600px) and (max-width: 839px) {\n  .mdc-layout-grid__cell[_ngcontent-%COMP%] {\n    width: calc(50% - 16px);\n    width: calc(50% - var(--mdc-layout-grid-gutter-tablet, 16px));\n    box-sizing: border-box;\n    margin: 8px;\n    margin: calc(var(--mdc-layout-grid-gutter-tablet, 16px) / 2);\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell[_ngcontent-%COMP%] {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell[_ngcontent-%COMP%] {\n      margin: 0;\n    }\n  }\n  .mdc-layout-grid__cell--span-1[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-1-tablet[_ngcontent-%COMP%] {\n    width: calc(12.5% - 16px);\n    width: calc(12.5% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-1[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-1-tablet[_ngcontent-%COMP%] {\n      width: auto;\n      grid-column-end: span 1;\n    }\n  }\n  .mdc-layout-grid__cell--span-2[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-2-tablet[_ngcontent-%COMP%] {\n    width: calc(25% - 16px);\n    width: calc(25% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-2[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-2-tablet[_ngcontent-%COMP%] {\n      width: auto;\n      grid-column-end: span 2;\n    }\n  }\n  .mdc-layout-grid__cell--span-3[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-3-tablet[_ngcontent-%COMP%] {\n    width: calc(37.5% - 16px);\n    width: calc(37.5% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-3[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-3-tablet[_ngcontent-%COMP%] {\n      width: auto;\n      grid-column-end: span 3;\n    }\n  }\n  .mdc-layout-grid__cell--span-4[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-4-tablet[_ngcontent-%COMP%] {\n    width: calc(50% - 16px);\n    width: calc(50% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-4[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-4-tablet[_ngcontent-%COMP%] {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-5[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-5-tablet[_ngcontent-%COMP%] {\n    width: calc(62.5% - 16px);\n    width: calc(62.5% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-5[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-5-tablet[_ngcontent-%COMP%] {\n      width: auto;\n      grid-column-end: span 5;\n    }\n  }\n  .mdc-layout-grid__cell--span-6[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-6-tablet[_ngcontent-%COMP%] {\n    width: calc(75% - 16px);\n    width: calc(75% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-6[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-6-tablet[_ngcontent-%COMP%] {\n      width: auto;\n      grid-column-end: span 6;\n    }\n  }\n  .mdc-layout-grid__cell--span-7[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-7-tablet[_ngcontent-%COMP%] {\n    width: calc(87.5% - 16px);\n    width: calc(87.5% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-7[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-7-tablet[_ngcontent-%COMP%] {\n      width: auto;\n      grid-column-end: span 7;\n    }\n  }\n  .mdc-layout-grid__cell--span-8[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-8-tablet[_ngcontent-%COMP%] {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-8[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-8-tablet[_ngcontent-%COMP%] {\n      width: auto;\n      grid-column-end: span 8;\n    }\n  }\n  .mdc-layout-grid__cell--span-9[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-9-tablet[_ngcontent-%COMP%] {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-9[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-9-tablet[_ngcontent-%COMP%] {\n      width: auto;\n      grid-column-end: span 8;\n    }\n  }\n  .mdc-layout-grid__cell--span-10[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-10-tablet[_ngcontent-%COMP%] {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-10[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-10-tablet[_ngcontent-%COMP%] {\n      width: auto;\n      grid-column-end: span 8;\n    }\n  }\n  .mdc-layout-grid__cell--span-11[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-11-tablet[_ngcontent-%COMP%] {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-11[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-11-tablet[_ngcontent-%COMP%] {\n      width: auto;\n      grid-column-end: span 8;\n    }\n  }\n  .mdc-layout-grid__cell--span-12[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-12-tablet[_ngcontent-%COMP%] {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-12[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-12-tablet[_ngcontent-%COMP%] {\n      width: auto;\n      grid-column-end: span 8;\n    }\n  }\n}\n@media (max-width: 599px) {\n  .mdc-layout-grid__cell[_ngcontent-%COMP%] {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n    box-sizing: border-box;\n    margin: 8px;\n    margin: calc(var(--mdc-layout-grid-gutter-phone, 16px) / 2);\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell[_ngcontent-%COMP%] {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell[_ngcontent-%COMP%] {\n      margin: 0;\n    }\n  }\n  .mdc-layout-grid__cell--span-1[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-1-phone[_ngcontent-%COMP%] {\n    width: calc(25% - 16px);\n    width: calc(25% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-1[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-1-phone[_ngcontent-%COMP%] {\n      width: auto;\n      grid-column-end: span 1;\n    }\n  }\n  .mdc-layout-grid__cell--span-2[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-2-phone[_ngcontent-%COMP%] {\n    width: calc(50% - 16px);\n    width: calc(50% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-2[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-2-phone[_ngcontent-%COMP%] {\n      width: auto;\n      grid-column-end: span 2;\n    }\n  }\n  .mdc-layout-grid__cell--span-3[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-3-phone[_ngcontent-%COMP%] {\n    width: calc(75% - 16px);\n    width: calc(75% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-3[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-3-phone[_ngcontent-%COMP%] {\n      width: auto;\n      grid-column-end: span 3;\n    }\n  }\n  .mdc-layout-grid__cell--span-4[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-4-phone[_ngcontent-%COMP%] {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-4[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-4-phone[_ngcontent-%COMP%] {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-5[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-5-phone[_ngcontent-%COMP%] {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-5[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-5-phone[_ngcontent-%COMP%] {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-6[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-6-phone[_ngcontent-%COMP%] {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-6[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-6-phone[_ngcontent-%COMP%] {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-7[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-7-phone[_ngcontent-%COMP%] {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-7[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-7-phone[_ngcontent-%COMP%] {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-8[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-8-phone[_ngcontent-%COMP%] {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-8[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-8-phone[_ngcontent-%COMP%] {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-9[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-9-phone[_ngcontent-%COMP%] {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-9[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-9-phone[_ngcontent-%COMP%] {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-10[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-10-phone[_ngcontent-%COMP%] {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-10[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-10-phone[_ngcontent-%COMP%] {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-11[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-11-phone[_ngcontent-%COMP%] {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-11[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-11-phone[_ngcontent-%COMP%] {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-12[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-12-phone[_ngcontent-%COMP%] {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-12[_ngcontent-%COMP%], \n   .mdc-layout-grid__cell--span-12-phone[_ngcontent-%COMP%] {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n}\n.mdc-layout-grid__cell--order-1[_ngcontent-%COMP%] {\n  order: 1;\n}\n\n.mdc-layout-grid__cell--order-2[_ngcontent-%COMP%] {\n  order: 2;\n}\n\n.mdc-layout-grid__cell--order-3[_ngcontent-%COMP%] {\n  order: 3;\n}\n\n.mdc-layout-grid__cell--order-4[_ngcontent-%COMP%] {\n  order: 4;\n}\n\n.mdc-layout-grid__cell--order-5[_ngcontent-%COMP%] {\n  order: 5;\n}\n\n.mdc-layout-grid__cell--order-6[_ngcontent-%COMP%] {\n  order: 6;\n}\n\n.mdc-layout-grid__cell--order-7[_ngcontent-%COMP%] {\n  order: 7;\n}\n\n.mdc-layout-grid__cell--order-8[_ngcontent-%COMP%] {\n  order: 8;\n}\n\n.mdc-layout-grid__cell--order-9[_ngcontent-%COMP%] {\n  order: 9;\n}\n\n.mdc-layout-grid__cell--order-10[_ngcontent-%COMP%] {\n  order: 10;\n}\n\n.mdc-layout-grid__cell--order-11[_ngcontent-%COMP%] {\n  order: 11;\n}\n\n.mdc-layout-grid__cell--order-12[_ngcontent-%COMP%] {\n  order: 12;\n}\n\n.mdc-layout-grid__cell--align-top[_ngcontent-%COMP%] {\n  align-self: flex-start;\n}\n\n@supports (display: grid) {\n  .mdc-layout-grid__cell--align-top[_ngcontent-%COMP%] {\n    align-self: start;\n  }\n}\n.mdc-layout-grid__cell--align-middle[_ngcontent-%COMP%] {\n  align-self: center;\n}\n\n.mdc-layout-grid__cell--align-bottom[_ngcontent-%COMP%] {\n  align-self: flex-end;\n}\n\n@supports (display: grid) {\n  .mdc-layout-grid__cell--align-bottom[_ngcontent-%COMP%] {\n    align-self: end;\n  }\n}\n@media (min-width: 840px) {\n  .mdc-layout-grid--fixed-column-width[_ngcontent-%COMP%] {\n    width: 1176px;\n    width: calc(var(--mdc-layout-grid-column-width-desktop, 72px) * 12 + var(--mdc-layout-grid-gutter-desktop, 24px) * 11 + var(--mdc-layout-grid-margin-desktop, 24px) * 2);\n  }\n}\n@media (min-width: 600px) and (max-width: 839px) {\n  .mdc-layout-grid--fixed-column-width[_ngcontent-%COMP%] {\n    width: 720px;\n    width: calc(var(--mdc-layout-grid-column-width-tablet, 72px) * 8 + var(--mdc-layout-grid-gutter-tablet, 16px) * 7 + var(--mdc-layout-grid-margin-tablet, 16px) * 2);\n  }\n}\n@media (max-width: 599px) {\n  .mdc-layout-grid--fixed-column-width[_ngcontent-%COMP%] {\n    width: 368px;\n    width: calc(var(--mdc-layout-grid-column-width-phone, 72px) * 4 + var(--mdc-layout-grid-gutter-phone, 16px) * 3 + var(--mdc-layout-grid-margin-phone, 16px) * 2);\n  }\n}\n.mdc-layout-grid--align-left[_ngcontent-%COMP%] {\n  margin-right: auto;\n  margin-left: 0;\n}\n\n.mdc-layout-grid--align-right[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: auto;\n}\n\napp-site-map-router[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  display: inline-block;\n  min-height: 100vh;\n}\n\n.page-layout[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n}\n\n.content[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 16px 4px 0px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbGF5b3V0LWdyaWQvbWRjLWxheW91dC1ncmlkLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL2NvbW1vbi9wYWdlL2NvbW1vbi1wYWdlLWxheW91dC9jb21tb24tcGFnZS1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2xheW91dC1ncmlkL19taXhpbnMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZS1zdHlsZXMvc3BhY2luZy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCQTtFQUVJLHNDQUFBO0VBSUEsc0NBQUE7RUFJQSw0Q0FBQTtFQVJBLHFDQUFBO0VBSUEscUNBQUE7RUFJQSwyQ0FBQTtFQVJBLG9DQUFBO0VBSUEsb0NBQUE7RUFJQSwwQ0FBQTtBQ3pCSjs7QUMwREk7RUZ6Qko7SUU2REUsc0JBQUE7SUFDQSxjQUFBO0lBQ0EsYUY1RGE7SUU4RGIsb0RBQUE7RUQxRkE7QUFDRjtBQzRDSTtFRnBCSjtJRTZERSxzQkFBQTtJQUNBLGNBQUE7SUFDQSxhRjVEYTtJRThEYixtREFBQTtFRGxGQTtBQUNGO0FDK0JJO0VGZko7SUU2REUsc0JBQUE7SUFDQSxjQUFBO0lBQ0EsYUY1RGE7SUU4RGIsa0RBQUE7RUQxRUE7QUFDRjtBQ2lDSTtFRmZKO0lFbUVFLGFBQUE7SUFDQSxtQkFBQTtJQUNBLG9CQUFBO0lBQ0EsYUFBQTtJQUVBLGtFQUFBO0VEbEZBO0VDb0ZBO0lGMUVGO01FMkVJLGFBQUE7TUFDQSxTQUFBO01BQ0EsY0Z6RVc7TUUyRVgscURBQUE7TUFDQSxpREFBQTtJRGxGQTtFQUNGO0FBQ0Y7QUNVSTtFRlZKO0lFbUVFLGFBQUE7SUFDQSxtQkFBQTtJQUNBLG9CQUFBO0lBQ0EsWUFBQTtJQUVBLGlFQUFBO0VEaEVBO0VDa0VBO0lGMUVGO01FMkVJLGFBQUE7TUFDQSxTQUFBO01BQ0EsY0Z6RVc7TUUyRVgsb0RBQUE7TUFDQSxnREFBQTtJRGhFQTtFQUNGO0FBQ0Y7QUNiSTtFRkxKO0lFbUVFLGFBQUE7SUFDQSxtQkFBQTtJQUNBLG9CQUFBO0lBQ0EsWUFBQTtJQUVBLGdFQUFBO0VEOUNBO0VDZ0RBO0lGMUVGO01FMkVJLGFBQUE7TUFDQSxTQUFBO01BQ0EsY0Z6RVc7TUUyRVgsbURBQUE7TUFDQSxnREFBQTtJRDlDQTtFQUNGO0FBQ0Y7QUNyQkk7RUZKSjtJRXdCRSxrQ0FBQTtJQUVBLHlFQUFBO0lBeURBLHNCQUFBO0lBQ0EsWUFBQTtJQUVBLDZEQUFBO0VEckRBO0VDTEE7SUY1QkY7TUU2QkksV0FBQTtNQUNBLHVCQUFBO0lEUUE7RUFDRjtFQ2lEQTtJRnhGRjtNRXlGSSxTQUFBO0lEOUNBO0VBQ0Y7RUQvQmU7O0lFV2YsaUNBQUE7SUFFQSx3RUFBQTtFRHVCQTtFQ3JCQTtJRmZlOztNRWdCYixXQUFBO01BQ0EsdUJBQUE7SUR5QkE7RUFDRjtFRDNDZTs7SUVXZixrQ0FBQTtJQUVBLHlFQUFBO0VEbUNBO0VDakNBO0lGZmU7O01FZ0JiLFdBQUE7TUFDQSx1QkFBQTtJRHFDQTtFQUNGO0VEdkRlOztJRVdmLHVCQUFBO0lBRUEsOERBQUE7RUQrQ0E7RUM3Q0E7SUZmZTs7TUVnQmIsV0FBQTtNQUNBLHVCQUFBO0lEaURBO0VBQ0Y7RURuRWU7O0lFV2Ysa0NBQUE7SUFFQSx5RUFBQTtFRDJEQTtFQ3pEQTtJRmZlOztNRWdCYixXQUFBO01BQ0EsdUJBQUE7SUQ2REE7RUFDRjtFRC9FZTs7SUVXZixrQ0FBQTtJQUVBLHlFQUFBO0VEdUVBO0VDckVBO0lGZmU7O01FZ0JiLFdBQUE7TUFDQSx1QkFBQTtJRHlFQTtFQUNGO0VEM0ZlOztJRVdmLHVCQUFBO0lBRUEsOERBQUE7RURtRkE7RUNqRkE7SUZmZTs7TUVnQmIsV0FBQTtNQUNBLHVCQUFBO0lEcUZBO0VBQ0Y7RUR2R2U7O0lFV2Ysa0NBQUE7SUFFQSx5RUFBQTtFRCtGQTtFQzdGQTtJRmZlOztNRWdCYixXQUFBO01BQ0EsdUJBQUE7SURpR0E7RUFDRjtFRG5IZTs7SUVXZixrQ0FBQTtJQUVBLHlFQUFBO0VEMkdBO0VDekdBO0lGZmU7O01FZ0JiLFdBQUE7TUFDQSx1QkFBQTtJRDZHQTtFQUNGO0VEL0hlOztJRVdmLHVCQUFBO0lBRUEsOERBQUE7RUR1SEE7RUNySEE7SUZmZTs7TUVnQmIsV0FBQTtNQUNBLHVCQUFBO0lEeUhBO0VBQ0Y7RUQzSWU7O0lFV2Ysa0NBQUE7SUFFQSx5RUFBQTtFRG1JQTtFQ2pJQTtJRmZlOztNRWdCYixXQUFBO01BQ0Esd0JBQUE7SURxSUE7RUFDRjtFRHZKZTs7SUVXZixrQ0FBQTtJQUVBLHlFQUFBO0VEK0lBO0VDN0lBO0lGZmU7O01FZ0JiLFdBQUE7TUFDQSx3QkFBQTtJRGlKQTtFQUNGO0VEbktlOztJRVdmLHdCQUFBO0lBRUEsK0RBQUE7RUQySkE7RUN6SkE7SUZmZTs7TUVnQmIsV0FBQTtNQUNBLHdCQUFBO0lENkpBO0VBQ0Y7QUFDRjtBQzlMSTtFRkNKO0lFd0JFLHVCQUFBO0lBRUEsNkRBQUE7SUF5REEsc0JBQUE7SUFDQSxXQUFBO0lBRUEsNERBQUE7RUQrR0E7RUN6S0E7SUY1QkY7TUU2QkksV0FBQTtNQUNBLHVCQUFBO0lENEtBO0VBQ0Y7RUNuSEE7SUZ4RkY7TUV5RkksU0FBQTtJRHNIQTtFQUNGO0VEbk1lOztJRVdmLHlCQUFBO0lBRUEsK0RBQUE7RUQyTEE7RUN6TEE7SUZmZTs7TUVnQmIsV0FBQTtNQUNBLHVCQUFBO0lENkxBO0VBQ0Y7RUQvTWU7O0lFV2YsdUJBQUE7SUFFQSw2REFBQTtFRHVNQTtFQ3JNQTtJRmZlOztNRWdCYixXQUFBO01BQ0EsdUJBQUE7SUR5TUE7RUFDRjtFRDNOZTs7SUVXZix5QkFBQTtJQUVBLCtEQUFBO0VEbU5BO0VDak5BO0lGZmU7O01FZ0JiLFdBQUE7TUFDQSx1QkFBQTtJRHFOQTtFQUNGO0VEdk9lOztJRVdmLHVCQUFBO0lBRUEsNkRBQUE7RUQrTkE7RUM3TkE7SUZmZTs7TUVnQmIsV0FBQTtNQUNBLHVCQUFBO0lEaU9BO0VBQ0Y7RURuUGU7O0lFV2YseUJBQUE7SUFFQSwrREFBQTtFRDJPQTtFQ3pPQTtJRmZlOztNRWdCYixXQUFBO01BQ0EsdUJBQUE7SUQ2T0E7RUFDRjtFRC9QZTs7SUVXZix1QkFBQTtJQUVBLDZEQUFBO0VEdVBBO0VDclBBO0lGZmU7O01FZ0JiLFdBQUE7TUFDQSx1QkFBQTtJRHlQQTtFQUNGO0VEM1FlOztJRVdmLHlCQUFBO0lBRUEsK0RBQUE7RURtUUE7RUNqUUE7SUZmZTs7TUVnQmIsV0FBQTtNQUNBLHVCQUFBO0lEcVFBO0VBQ0Y7RUR2UmU7O0lFV2Ysd0JBQUE7SUFFQSw4REFBQTtFRCtRQTtFQzdRQTtJRmZlOztNRWdCYixXQUFBO01BQ0EsdUJBQUE7SURpUkE7RUFDRjtFRG5TZTs7SUVXZix3QkFBQTtJQUVBLDhEQUFBO0VEMlJBO0VDelJBO0lGZmU7O01FZ0JiLFdBQUE7TUFDQSx1QkFBQTtJRDZSQTtFQUNGO0VEL1NlOztJRVdmLHdCQUFBO0lBRUEsOERBQUE7RUR1U0E7RUNyU0E7SUZmZTs7TUVnQmIsV0FBQTtNQUNBLHVCQUFBO0lEeVNBO0VBQ0Y7RUQzVGU7O0lFV2Ysd0JBQUE7SUFFQSw4REFBQTtFRG1UQTtFQ2pUQTtJRmZlOztNRWdCYixXQUFBO01BQ0EsdUJBQUE7SURxVEE7RUFDRjtFRHZVZTs7SUVXZix3QkFBQTtJQUVBLDhEQUFBO0VEK1RBO0VDN1RBO0lGZmU7O01FZ0JiLFdBQUE7TUFDQSx1QkFBQTtJRGlVQTtFQUNGO0FBQ0Y7QUN2V0k7RUZNSjtJRXdCRSx3QkFBQTtJQUVBLDZEQUFBO0lBeURBLHNCQUFBO0lBQ0EsV0FBQTtJQUVBLDJEQUFBO0VEbVJBO0VDN1VBO0lGNUJGO01FNkJJLFdBQUE7TUFDQSx1QkFBQTtJRGdWQTtFQUNGO0VDdlJBO0lGeEZGO01FeUZJLFNBQUE7SUQwUkE7RUFDRjtFRHZXZTs7SUVXZix1QkFBQTtJQUVBLDREQUFBO0VEK1ZBO0VDN1ZBO0lGZmU7O01FZ0JiLFdBQUE7TUFDQSx1QkFBQTtJRGlXQTtFQUNGO0VEblhlOztJRVdmLHVCQUFBO0lBRUEsNERBQUE7RUQyV0E7RUN6V0E7SUZmZTs7TUVnQmIsV0FBQTtNQUNBLHVCQUFBO0lENldBO0VBQ0Y7RUQvWGU7O0lFV2YsdUJBQUE7SUFFQSw0REFBQTtFRHVYQTtFQ3JYQTtJRmZlOztNRWdCYixXQUFBO01BQ0EsdUJBQUE7SUR5WEE7RUFDRjtFRDNZZTs7SUVXZix3QkFBQTtJQUVBLDZEQUFBO0VEbVlBO0VDallBO0lGZmU7O01FZ0JiLFdBQUE7TUFDQSx1QkFBQTtJRHFZQTtFQUNGO0VEdlplOztJRVdmLHdCQUFBO0lBRUEsNkRBQUE7RUQrWUE7RUM3WUE7SUZmZTs7TUVnQmIsV0FBQTtNQUNBLHVCQUFBO0lEaVpBO0VBQ0Y7RURuYWU7O0lFV2Ysd0JBQUE7SUFFQSw2REFBQTtFRDJaQTtFQ3paQTtJRmZlOztNRWdCYixXQUFBO01BQ0EsdUJBQUE7SUQ2WkE7RUFDRjtFRC9hZTs7SUVXZix3QkFBQTtJQUVBLDZEQUFBO0VEdWFBO0VDcmFBO0lGZmU7O01FZ0JiLFdBQUE7TUFDQSx1QkFBQTtJRHlhQTtFQUNGO0VEM2JlOztJRVdmLHdCQUFBO0lBRUEsNkRBQUE7RURtYkE7RUNqYkE7SUZmZTs7TUVnQmIsV0FBQTtNQUNBLHVCQUFBO0lEcWJBO0VBQ0Y7RUR2Y2U7O0lFV2Ysd0JBQUE7SUFFQSw2REFBQTtFRCtiQTtFQzdiQTtJRmZlOztNRWdCYixXQUFBO01BQ0EsdUJBQUE7SURpY0E7RUFDRjtFRG5kZTs7SUVXZix3QkFBQTtJQUVBLDZEQUFBO0VEMmNBO0VDemNBO0lGZmU7O01FZ0JiLFdBQUE7TUFDQSx1QkFBQTtJRDZjQTtFQUNGO0VEL2RlOztJRVdmLHdCQUFBO0lBRUEsNkRBQUE7RUR1ZEE7RUNyZEE7SUZmZTs7TUVnQmIsV0FBQTtNQUNBLHVCQUFBO0lEeWRBO0VBQ0Y7RUQzZWU7O0lFV2Ysd0JBQUE7SUFFQSw2REFBQTtFRG1lQTtFQ2plQTtJRmZlOztNRWdCYixXQUFBO01BQ0EsdUJBQUE7SURxZUE7RUFDRjtBQUNGO0FEN2VJO0VFc0VGLFFGdkVhO0FDaWZmOztBRGhmSTtFRXNFRixRRnZFYTtBQ3FmZjs7QURwZkk7RUVzRUYsUUZ2RWE7QUN5ZmY7O0FEeGZJO0VFc0VGLFFGdkVhO0FDNmZmOztBRDVmSTtFRXNFRixRRnZFYTtBQ2lnQmY7O0FEaGdCSTtFRXNFRixRRnZFYTtBQ3FnQmY7O0FEcGdCSTtFRXNFRixRRnZFYTtBQ3lnQmY7O0FEeGdCSTtFRXNFRixRRnZFYTtBQzZnQmY7O0FENWdCSTtFRXNFRixRRnZFYTtBQ2loQmY7O0FEaGhCSTtFRXNFRixTRnZFYTtBQ3FoQmY7O0FEcGhCSTtFRXNFRixTRnZFYTtBQ3loQmY7O0FEeGhCSTtFRXNFRixTRnZFYTtBQzZoQmY7O0FEdGhCRTtFRXFFRSxzQkFBQTtBRHFkSjs7QUNuZEk7RUZ2RUY7SUV3RUksaUJBQUE7RUR1ZEo7QUFDRjtBRDVoQkU7RUV5RUUsa0JBQUE7QURzZEo7O0FEM2hCRTtFRXlFRSxvQkFBQTtBRHNkSjs7QUNwZEk7RUYzRUY7SUU0RUksZUFBQTtFRHdkSjtBQUNGO0FDdmtCSTtFRnVDSjtJRXlGRSxhQUFBO0lBR0Esd0tBQUE7RUR5Y0E7QUFDRjtBQ2xsQkk7RUY0Q0o7SUV5RkUsWUFBQTtJQUdBLG1LQUFBO0VEK2NBO0FBQ0Y7QUM3bEJJO0VGaURKO0lFeUZFLFlBQUE7SUFHQSxnS0FBQTtFRHFkQTtBQUNGO0FEamlCQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQ21pQkY7O0FEaGlCQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ21pQkY7O0FBbnFCQTtFQUNFLGdCRUZhO0VGR2IscUJBQUE7RUFDQSxpQkFBQTtBQXNxQkY7O0FBbnFCQTtFQUNFLGlCQUFBO0FBc3FCRjs7QUFucUJBO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0FBc3FCRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuQHVzZSBcInNhc3M6bGlzdFwiO1xuQHVzZSBcInNhc3M6bWFwXCI7XG5AdXNlIFwiLi92YXJpYWJsZXNcIjtcbkB1c2UgXCIuL21peGluc1wiO1xuXG46cm9vdCB7XG4gIEBlYWNoICRzaXplIGluIG1hcC5rZXlzKHZhcmlhYmxlcy4kY29sdW1ucykge1xuICAgIC0tbWRjLWxheW91dC1ncmlkLW1hcmdpbi0jeyRzaXplfTogI3ttYXAuZ2V0KFxuICAgICAgICB2YXJpYWJsZXMuJGRlZmF1bHQtbWFyZ2luLFxuICAgICAgICAkc2l6ZVxuICAgICAgKX07XG4gICAgLS1tZGMtbGF5b3V0LWdyaWQtZ3V0dGVyLSN7JHNpemV9OiAje21hcC5nZXQoXG4gICAgICAgIHZhcmlhYmxlcy4kZGVmYXVsdC1ndXR0ZXIsXG4gICAgICAgICRzaXplXG4gICAgICApfTtcbiAgICAtLW1kYy1sYXlvdXQtZ3JpZC1jb2x1bW4td2lkdGgtI3skc2l6ZX06ICN7bWFwLmdldChcbiAgICAgICAgdmFyaWFibGVzLiRjb2x1bW4td2lkdGgsXG4gICAgICAgICRzaXplXG4gICAgICApfTtcbiAgfVxufVxuXG4vLyBwb3N0Y3NzLWJlbS1saW50ZXI6IGRlZmluZSBsYXlvdXQtZ3JpZFxuLm1kYy1sYXlvdXQtZ3JpZCB7XG4gIEBlYWNoICRzaXplIGluIG1hcC5rZXlzKHZhcmlhYmxlcy4kY29sdW1ucykge1xuICAgIEBpbmNsdWRlIG1peGlucy5tZWRpYS1xdWVyeV8oJHNpemUpIHtcbiAgICAgICRtYXJnaW46IG1hcC5nZXQodmFyaWFibGVzLiRkZWZhdWx0LW1hcmdpbiwgJHNpemUpO1xuXG4gICAgICBAaW5jbHVkZSBtaXhpbnMubGF5b3V0LWdyaWQoJHNpemUsICRtYXJnaW4sIHZhcmlhYmxlcy4kbWF4LXdpZHRoKTtcbiAgICB9XG4gIH1cbn1cblxuLm1kYy1sYXlvdXQtZ3JpZF9faW5uZXIge1xuICBAZWFjaCAkc2l6ZSBpbiBtYXAua2V5cyh2YXJpYWJsZXMuJGNvbHVtbnMpIHtcbiAgICBAaW5jbHVkZSBtaXhpbnMubWVkaWEtcXVlcnlfKCRzaXplKSB7XG4gICAgICAkbWFyZ2luOiBtYXAuZ2V0KHZhcmlhYmxlcy4kZGVmYXVsdC1tYXJnaW4sICRzaXplKTtcbiAgICAgICRndXR0ZXI6IG1hcC5nZXQodmFyaWFibGVzLiRkZWZhdWx0LWd1dHRlciwgJHNpemUpO1xuXG4gICAgICBAaW5jbHVkZSBtaXhpbnMuaW5uZXIoJHNpemUsICRtYXJnaW4sICRndXR0ZXIpO1xuICAgIH1cbiAgfVxufVxuXG4ubWRjLWxheW91dC1ncmlkX19jZWxsIHtcbiAgLy8gc2VsZWN0IHRoZSB1cHBlciBicmVha3BvaW50XG4gICR1cHBlci1icmVha3BvaW50OiBsaXN0Lm50aChtYXAua2V5cyh2YXJpYWJsZXMuJGNvbHVtbnMpLCAxKTtcblxuICBAZWFjaCAkc2l6ZSBpbiBtYXAua2V5cyh2YXJpYWJsZXMuJGNvbHVtbnMpIHtcbiAgICBAaW5jbHVkZSBtaXhpbnMubWVkaWEtcXVlcnlfKCRzaXplKSB7XG4gICAgICAkZ3V0dGVyOiBtYXAuZ2V0KHZhcmlhYmxlcy4kZGVmYXVsdC1ndXR0ZXIsICRzaXplKTtcblxuICAgICAgQGluY2x1ZGUgbWl4aW5zLmNlbGwoJHNpemUsIHZhcmlhYmxlcy4kZGVmYXVsdC1jb2x1bW4tc3BhbiwgJGd1dHRlcik7XG5cbiAgICAgIEBmb3IgJHNwYW4gZnJvbSAxIHRocm91Z2ggbWFwLmdldCh2YXJpYWJsZXMuJGNvbHVtbnMsICR1cHBlci1icmVha3BvaW50KSB7XG4gICAgICAgIC8vIFNwYW4gY2xhc3Nlcy5cbiAgICAgICAgLy8gc3R5bGVsaW50LWRpc2FibGUgbWF4LW5lc3RpbmctZGVwdGhcbiAgICAgICAgQGF0LXJvb3QgLm1kYy1sYXlvdXQtZ3JpZF9fY2VsbC0tc3Bhbi0jeyRzcGFufSxcbiAgICAgICAgICAubWRjLWxheW91dC1ncmlkX19jZWxsLS1zcGFuLSN7JHNwYW59LSN7JHNpemV9IHtcbiAgICAgICAgICBAaW5jbHVkZSBtaXhpbnMuY2VsbC1zcGFuXygkc2l6ZSwgJHNwYW4sICRndXR0ZXIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHN0eWxlbGludC1lbmFibGUgbWF4LW5lc3RpbmctZGVwdGhcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBPcmRlciBvdmVycmlkZSBjbGFzc2VzLlxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIG1hcC5nZXQodmFyaWFibGVzLiRjb2x1bW5zLCAkdXBwZXItYnJlYWtwb2ludCkge1xuICAgICYtLW9yZGVyLSN7JGl9IHtcbiAgICAgIEBpbmNsdWRlIG1peGlucy5jZWxsLW9yZGVyKCRpKTtcbiAgICB9XG4gIH1cblxuICAvLyBBbGlnbm1lbnQgY2xhc3Nlcy5cbiAgJi0tYWxpZ24tdG9wIHtcbiAgICBAaW5jbHVkZSBtaXhpbnMuY2VsbC1hbGlnbih0b3ApO1xuICB9XG5cbiAgJi0tYWxpZ24tbWlkZGxlIHtcbiAgICBAaW5jbHVkZSBtaXhpbnMuY2VsbC1hbGlnbihtaWRkbGUpO1xuICB9XG5cbiAgJi0tYWxpZ24tYm90dG9tIHtcbiAgICBAaW5jbHVkZSBtaXhpbnMuY2VsbC1hbGlnbihib3R0b20pO1xuICB9XG59XG5cbi5tZGMtbGF5b3V0LWdyaWQtLWZpeGVkLWNvbHVtbi13aWR0aCB7XG4gIEBlYWNoICRzaXplIGluIG1hcC5rZXlzKHZhcmlhYmxlcy4kY29sdW1ucykge1xuICAgIEBpbmNsdWRlIG1peGlucy5tZWRpYS1xdWVyeV8oJHNpemUpIHtcbiAgICAgICRtYXJnaW46IG1hcC5nZXQodmFyaWFibGVzLiRkZWZhdWx0LW1hcmdpbiwgJHNpemUpO1xuICAgICAgJGd1dHRlcjogbWFwLmdldCh2YXJpYWJsZXMuJGRlZmF1bHQtZ3V0dGVyLCAkc2l6ZSk7XG4gICAgICAkY29sdW1uLXdpZHRoOiBtYXAuZ2V0KHZhcmlhYmxlcy4kY29sdW1uLXdpZHRoLCAkc2l6ZSk7XG5cbiAgICAgIEBpbmNsdWRlIG1peGlucy5maXhlZC1jb2x1bW4td2lkdGgoXG4gICAgICAgICRzaXplLFxuICAgICAgICAkbWFyZ2luLFxuICAgICAgICAkZ3V0dGVyLFxuICAgICAgICAkY29sdW1uLXdpZHRoXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG4ubWRjLWxheW91dC1ncmlkLS1hbGlnbi1sZWZ0IHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLm1kYy1sYXlvdXQtZ3JpZC0tYWxpZ24tcmlnaHQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuLy8gcG9zdGNzcy1iZW0tbGludGVyOiBlbmRcbiIsIkBpbXBvcnQgXCJAbWF0ZXJpYWwvbGF5b3V0LWdyaWQvbWRjLWxheW91dC1ncmlkXCI7XHJcbkBpbXBvcnQgJy4uLy4uLy4uL3BhZ2Utc3R5bGVzL3NwYWNpbmcnO1xyXG5cclxuYXBwLXNpdGUtbWFwLXJvdXRlciB7XHJcbiAgbWFyZ2luLXRvcDogJHNwYWNpbmcta2lsbztcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5wYWdlLWxheW91dCB7XHJcbiAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46ICRzcGFjaW5nLWtpbG8gJHNwYWNpbmctbWluaSAwcHg7XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5AdXNlIFwic2FzczpsaXN0XCI7XG5AdXNlIFwic2FzczptYXBcIjtcbkB1c2UgXCJzYXNzOm1hdGhcIjtcbkB1c2UgXCIuL3ZhcmlhYmxlc1wiO1xuXG4vLyByZXR1cm5zIHRoZSBsb3dlciBncmlkIGJvdW5kYXJ5IG9yIG51bGwgaWYgdGhlIHNtYWxsZXN0IGdyaWQgaXMgc2VsZWN0ZWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkc2l6ZSkge1xuICBAaWYgbm90IG1hcC5oYXMta2V5KHZhcmlhYmxlcy4kY29sdW1ucywgJHNpemUpIHtcbiAgICBAZXJyb3IgXCJJbnZhbGlkIHN0eWxlIHNwZWNpZmllZCEgQ2hvb3NlIG9uZSBvZiAje21hcC5rZXlzKHZhcmlhYmxlcy4kY29sdW1ucyl9XCI7XG4gIH1cbiAgJG1pbjogbWFwLmdldCh2YXJpYWJsZXMuJGJyZWFrcG9pbnRzLCAkc2l6ZSk7XG5cbiAgQHJldHVybiBpZigkbWluID4gMCwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIHJldHVybnMgdGhlIHVwcGVyIGdyaWQgYm91bmRhcnkgb3IgbnVsbCBpZiB0aGUgbGFyZ2VzdCBncmlkIGlzIHNlbGVjdGVkXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJHNpemUpIHtcbiAgQGlmIG5vdCBtYXAuaGFzLWtleSh2YXJpYWJsZXMuJGNvbHVtbnMsICRzaXplKSB7XG4gICAgQGVycm9yIFwiSW52YWxpZCBzdHlsZSBzcGVjaWZpZWQhIENob29zZSBvbmUgb2YgI3ttYXAua2V5cyh2YXJpYWJsZXMuJGNvbHVtbnMpfVwiO1xuICB9XG4gICRuYW1lczogbWFwLmtleXModmFyaWFibGVzLiRjb2x1bW5zKTtcbiAgJG46IGxpc3QuaW5kZXgoJG5hbWVzLCAkc2l6ZSk7XG4gICRwcmV2OiBpZigkbiA+IDEsIGxpc3QubnRoKCRuYW1lcywgJG4gLSAxKSwgbnVsbCk7XG5cbiAgQHJldHVybiBpZigkcHJldiwgKGJyZWFrcG9pbnQtbWluKCRwcmV2KSAtIDFweCksIG51bGwpO1xufVxuXG4vLyBQcml2YXRlIG1peGlucywgbWVhbnQgZm9yIGludGVybmFsIHVzZS5cbkBtaXhpbiBtZWRpYS1xdWVyeV8oJHNpemUpIHtcbiAgQGlmIG5vdCBtYXAuaGFzLWtleSh2YXJpYWJsZXMuJGNvbHVtbnMsICRzaXplKSB7XG4gICAgQGVycm9yIFwiSW52YWxpZCBzdHlsZSBzcGVjaWZpZWQhIENob29zZSBvbmUgb2YgI3ttYXAua2V5cyh2YXJpYWJsZXMuJGNvbHVtbnMpfVwiO1xuICB9XG5cbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJHNpemUpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkc2l6ZSk7XG5cbiAgQGlmICRtaW4gPT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICAvLyBQaG9uZVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIC8vIFRhYmxldFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCA9PSBudWxsIHtcbiAgICAvLyBEZXNrdG9wXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgLy8gRmFsbGJhY2sgLSBubyBicmVha3BvaW50cyBkZWZpbmVkXG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGNlbGwtc3Bhbl8oJHNpemUsICRzcGFuLCAkZ3V0dGVyKSB7XG4gIEBpZiBub3QgbWFwLmhhcy1rZXkodmFyaWFibGVzLiRjb2x1bW5zLCAkc2l6ZSkge1xuICAgIEBlcnJvciBcIkludmFsaWQgc3R5bGUgc3BlY2lmaWVkISBDaG9vc2Ugb25lIG9mICN7bWFwLmtleXModmFyaWFibGVzLiRjb2x1bW5zKX1cIjtcbiAgfVxuXG4gICRwZXJjZW50OiBtYXRoLnBlcmNlbnRhZ2UoJHNwYW4gLyBtYXAuZ2V0KHZhcmlhYmxlcy4kY29sdW1ucywgJHNpemUpKTtcblxuICBAaWYgJHBlcmNlbnQgPiAxMDAlIHtcbiAgICAkcGVyY2VudDogMTAwJTtcbiAgfVxuXG4gIHdpZHRoOiBjYWxjKCN7JHBlcmNlbnR9IC0gI3skZ3V0dGVyfSk7XG4gIC8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1ibG9jay1uby1kdXBsaWNhdGUtcHJvcGVydGllc1xuICB3aWR0aDogY2FsYygjeyRwZXJjZW50fSAtIHZhcigtLW1kYy1sYXlvdXQtZ3JpZC1ndXR0ZXItI3skc2l6ZX0sICN7JGd1dHRlcn0pKTtcblxuICBAc3VwcG9ydHMgKGRpc3BsYXk6IGdyaWQpIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBncmlkLWNvbHVtbi1lbmQ6IHNwYW4gbWF0aC5taW4oJHNwYW4sIG1hcC5nZXQodmFyaWFibGVzLiRjb2x1bW5zLCAkc2l6ZSkpO1xuICB9XG59XG5cbi8vIFB1YmxpYyBtaXhpbnMsIG1lYW50IGZvciBkZXZlbG9wZXIgdXNhZ2UuXG5AbWl4aW4gbGF5b3V0LWdyaWQoJHNpemUsICRtYXJnaW4sICRtYXgtd2lkdGg6IG51bGwpIHtcbiAgQGlmIG5vdCBtYXAuaGFzLWtleSh2YXJpYWJsZXMuJGNvbHVtbnMsICRzaXplKSB7XG4gICAgQGVycm9yIFwiSW52YWxpZCBzdHlsZSBzcGVjaWZpZWQhIENob29zZSBvbmUgb2YgI3ttYXAua2V5cyh2YXJpYWJsZXMuJGNvbHVtbnMpfVwiO1xuICB9XG5cbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6ICRtYXJnaW47XG4gIC8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1ibG9jay1uby1kdXBsaWNhdGUtcHJvcGVydGllc1xuICBwYWRkaW5nOiB2YXIoLS1tZGMtbGF5b3V0LWdyaWQtbWFyZ2luLSN7JHNpemV9LCAjeyRtYXJnaW59KTtcblxuICBAaWYgJG1heC13aWR0aCB7XG4gICAgbWF4LXdpZHRoOiAkbWF4LXdpZHRoO1xuICB9XG59XG5cbkBtaXhpbiBpbm5lcigkc2l6ZSwgJG1hcmdpbiwgJGd1dHRlcikge1xuICBAaWYgbm90IG1hcC5oYXMta2V5KHZhcmlhYmxlcy4kY29sdW1ucywgJHNpemUpIHtcbiAgICBAZXJyb3IgXCJJbnZhbGlkIHN0eWxlIHNwZWNpZmllZCEgQ2hvb3NlIG9uZSBvZiAje21hcC5rZXlzKHZhcmlhYmxlcy4kY29sdW1ucyl9XCI7XG4gIH1cblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgbWFyZ2luOiAtJGd1dHRlciAvIDI7XG4gIC8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1ibG9jay1uby1kdXBsaWNhdGUtcHJvcGVydGllc1xuICBtYXJnaW46IGNhbGModmFyKC0tbWRjLWxheW91dC1ncmlkLWd1dHRlci0jeyRzaXplfSwgI3skZ3V0dGVyfSkgLyAyICogLTEpO1xuXG4gIEBzdXBwb3J0cyAoZGlzcGxheTogZ3JpZCkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgbWFyZ2luOiAwO1xuICAgIGdyaWQtZ2FwOiAkZ3V0dGVyO1xuICAgIC8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1ibG9jay1uby1kdXBsaWNhdGUtcHJvcGVydGllc1xuICAgIGdyaWQtZ2FwOiB2YXIoLS1tZGMtbGF5b3V0LWdyaWQtZ3V0dGVyLSN7JHNpemV9LCAkZ3V0dGVyKTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChcbiAgICAgIG1hcC5nZXQodmFyaWFibGVzLiRjb2x1bW5zLCAkc2l6ZSksXG4gICAgICBtaW5tYXgoMCwgMWZyKVxuICAgICk7XG4gIH1cbn1cblxuQG1peGluIGNlbGwoJHNpemUsICRkZWZhdWx0LXNwYW4sICRndXR0ZXIpIHtcbiAgQGlmIG5vdCBtYXAuaGFzLWtleSh2YXJpYWJsZXMuJGNvbHVtbnMsICRzaXplKSB7XG4gICAgQGVycm9yIFwiSW52YWxpZCBzdHlsZSBzcGVjaWZpZWQhIENob29zZSBvbmUgb2YgI3ttYXAua2V5cyh2YXJpYWJsZXMuJGNvbHVtbnMpfVwiO1xuICB9XG5cbiAgQGluY2x1ZGUgY2VsbC1zcGFuXygkc2l6ZSwgJGRlZmF1bHQtc3BhbiwgJGd1dHRlcik7XG5cbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAkZ3V0dGVyIC8gMjtcbiAgLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLWJsb2NrLW5vLWR1cGxpY2F0ZS1wcm9wZXJ0aWVzXG4gIG1hcmdpbjogY2FsYyh2YXIoLS1tZGMtbGF5b3V0LWdyaWQtZ3V0dGVyLSN7JHNpemV9LCAjeyRndXR0ZXJ9KSAvIDIpO1xuXG4gIEBzdXBwb3J0cyAoZGlzcGxheTogZ3JpZCkge1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG5AbWl4aW4gY2VsbC1vcmRlcigkb3JkZXIpIHtcbiAgb3JkZXI6ICRvcmRlcjtcbn1cblxuQG1peGluIGNlbGwtYWxpZ24oJHBvc2l0aW9uKSB7XG4gIEBpZiAkcG9zaXRpb24gPT0gJ3RvcCcge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG5cbiAgICBAc3VwcG9ydHMgKGRpc3BsYXk6IGdyaWQpIHtcbiAgICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xuICAgIH1cbiAgfVxuXG4gIEBpZiAkcG9zaXRpb24gPT0gJ21pZGRsZScge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgfVxuXG4gIEBpZiAkcG9zaXRpb24gPT0gJ2JvdHRvbScge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuXG4gICAgQHN1cHBvcnRzIChkaXNwbGF5OiBncmlkKSB7XG4gICAgICBhbGlnbi1zZWxmOiBlbmQ7XG4gICAgfVxuICB9XG5cbiAgQGlmICRwb3NpdGlvbiA9PSAnc3RyZXRjaCcge1xuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gIH1cbn1cblxuQG1peGluIGZpeGVkLWNvbHVtbi13aWR0aCgkc2l6ZSwgJG1hcmdpbiwgJGd1dHRlciwgJGNvbHVtbi13aWR0aCkge1xuICBAaWYgbm90IG1hcC5oYXMta2V5KHZhcmlhYmxlcy4kY29sdW1ucywgJHNpemUpIHtcbiAgICBAZXJyb3IgXCJJbnZhbGlkIHN0eWxlIHNwZWNpZmllZCEgQ2hvb3NlIG9uZSBvZiAje21hcC5rZXlzKHZhcmlhYmxlcy4kY29sdW1ucyl9XCI7XG4gIH1cblxuICAkY29sdW1uQ291bnQ6IG1hcC5nZXQodmFyaWFibGVzLiRjb2x1bW5zLCAkc2l6ZSk7XG4gICRndXR0ZXItbnVtYmVyOiAkY29sdW1uQ291bnQgLSAxO1xuICAkbWFyZ2luLW51bWJlcjogMjtcblxuICB3aWR0aDogJGNvbHVtbi13aWR0aCAqICRjb2x1bW5Db3VudCArICRndXR0ZXIgKiAkZ3V0dGVyLW51bWJlciArICRtYXJnaW4gKlxuICAgICRtYXJnaW4tbnVtYmVyO1xuICAvLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tYmxvY2stbm8tZHVwbGljYXRlLXByb3BlcnRpZXNcbiAgd2lkdGg6IGNhbGMoXG4gICAgdmFyKC0tbWRjLWxheW91dC1ncmlkLWNvbHVtbi13aWR0aC0jeyRzaXplfSwgI3skY29sdW1uLXdpZHRofSkgKiAjeyRjb2x1bW5Db3VudH0gK1xuICAgICAgdmFyKC0tbWRjLWxheW91dC1ncmlkLWd1dHRlci0jeyRzaXplfSwgI3skZ3V0dGVyfSkgKiAjeyRndXR0ZXItbnVtYmVyfSArXG4gICAgICB2YXIoLS1tZGMtbGF5b3V0LWdyaWQtbWFyZ2luLSN7JHNpemV9LCAjeyRtYXJnaW59KSAqICN7JG1hcmdpbi1udW1iZXJ9XG4gICk7XG59XG4iLCIkc3BhY2luZy1taWNybzogMnB4O1xyXG4kc3BhY2luZy1taW5pOiA0cHg7XHJcbiRzcGFjaW5nLWtpbG86IDE2cHg7XHJcblxyXG4kc2l6ZS1jb250ZW50LWhlaWdodDogMTAwdmg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 6270:
/*!**********************************************!*\
  !*** ./src/app/common/app-commons.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppCommonsModule: () => (/* binding */ AppCommonsModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 8431);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _directives_if_visible_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directives/if-visible.directive */ 9078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




class AppCommonsModule {
  static {
    this.ɵfac = function AppCommonsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppCommonsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppCommonsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppCommonsModule, {
    declarations: [_directives_if_visible_directive__WEBPACK_IMPORTED_MODULE_0__.IfVisibleDirective],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_directives_if_visible_directive__WEBPACK_IMPORTED_MODULE_0__.IfVisibleDirective]
  });
})();

/***/ }),

/***/ 6926:
/*!*****************************************************************!*\
  !*** ./src/app/common/site-map/components/components.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SiteMapComponentsModule: () => (/* binding */ SiteMapComponentsModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 9736);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/grid-list */ 4107);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 8431);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _bread_crubs_bread_crubs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bread-crubs/bread-crubs.component */ 314);
/* harmony import */ var _site_map_router_site_map_router_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./site-map-router/site-map-router.component */ 9334);
/* harmony import */ var _site_map_list_site_map_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./site-map-list/site-map-list.component */ 3390);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);











class SiteMapComponentsModule {
  static {
    this.ɵfac = function SiteMapComponentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SiteMapComponentsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: SiteMapComponentsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__.MatGridListModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SiteMapComponentsModule, {
    declarations: [_bread_crubs_bread_crubs_component__WEBPACK_IMPORTED_MODULE_0__.BreadCrubsComponent, _site_map_router_site_map_router_component__WEBPACK_IMPORTED_MODULE_1__.SiteMapRouterComponent, _site_map_list_site_map_list_component__WEBPACK_IMPORTED_MODULE_2__.SiteMapListComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__.MatGridListModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule],
    exports: [_bread_crubs_bread_crubs_component__WEBPACK_IMPORTED_MODULE_0__.BreadCrubsComponent, _site_map_router_site_map_router_component__WEBPACK_IMPORTED_MODULE_1__.SiteMapRouterComponent]
  });
})();

/***/ }),

/***/ 6947:
/*!***************************!*\
  !*** ./CurrentSiteMap.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   currentSiteMap: () => (/* binding */ currentSiteMap)
/* harmony export */ });
const financeModule = {
  label: 'Finance',
  url: '/finance',
  child: [{
    label: 'Compound Interest',
    url: '/compound-interest',
    child: undefined
  }, {
    label: 'Retirement Calculator',
    url: '/retirement-calculator',
    child: undefined,
    devOnly: true
  }]
};
const time = {
  label: 'Time',
  url: '/time',
  child: [{
    label: 'World Time',
    url: '/worldTime',
    child: undefined
  }, {
    label: 'Count down',
    url: '/countDown',
    child: undefined,
    devOnly: true
  }, {
    label: 'Thai Calendar',
    url: '/thaiCalendar',
    child: undefined
  }]
};
// const webrtc = {
//   label: 'Webrtc',
//   url: '/webrtc',
//   child: [{
//     label: 'P2P Chat',
//     url: '/p2pchat',
//     child: undefined,
//   },
//   ],
// };
const camera = {
  label: 'Camera',
  url: '/camera',
  child: [{
    label: 'QR Code reader',
    url: '/qr',
    child: undefined
  }, {
    label: 'Crop Images',
    url: '/crop',
    child: undefined
  }]
};
const singaporeNric = {
  label: 'Singapore NRIC',
  url: '/singaporeNric',
  child: [{
    label: 'Generator',
    url: '/generator',
    child: undefined
  }, {
    label: 'Validator',
    url: '/validator',
    child: undefined
  }]
};
const encoding = {
  label: 'Encoding',
  url: '/encoding',
  child: [{
    label: 'Base 64',
    url: '/base64',
    child: undefined
  }, {
    label: 'Universal Encoder',
    url: '/universal',
    child: undefined,
    devOnly: true
  }]
};
const currentSiteMap = {
  label: 'Home',
  url: '',
  child: [financeModule,
  // webrtc,
  camera, time, singaporeNric, encoding]
};

/***/ }),

/***/ 7161:
/*!*******************************************************************!*\
  !*** ./src/app/common/site-map/services/matched-route.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatchedRoute: () => (/* binding */ MatchedRoute),
/* harmony export */   MatchedRouteService: () => (/* binding */ MatchedRouteService),
/* harmony export */   SiteMapServiceBLOC: () => (/* binding */ SiteMapServiceBLOC)
/* harmony export */ });
/* harmony import */ var _utils_components_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/components-utils */ 3030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2596);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 3119);
/* harmony import */ var _dto_site_map_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dto/site-map-dto */ 3093);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 7464);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9803);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 7841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 5443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _current_site_map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./current-site-map.service */ 9671);








class MatchedRouteService {
  constructor(currentSiteMap, router) {
    this.router = router;
    this.onDestroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    const siteMapServiceBLOC = new SiteMapServiceBLOC(currentSiteMap.getCurrentSiteMap(), this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.onDestroyed$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(100)));
    this.matchedRoute$ = siteMapServiceBLOC.getCurrentSiteMap().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.shareReplay)(1));
  }
  ngOnDestroy() {
    _utils_components_utils__WEBPACK_IMPORTED_MODULE_0__.ComponentsUtils.onComponentDestroyed(this.onDestroyed$);
  }
  static {
    this.ɵfac = function MatchedRouteService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatchedRouteService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_current_site_map_service__WEBPACK_IMPORTED_MODULE_2__.CurrentSiteMapService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
      token: MatchedRouteService,
      factory: MatchedRouteService.ɵfac,
      providedIn: 'root'
    });
  }
}
class MatchedRoute {
  constructor(siteMap, url) {
    this.siteMap = siteMap;
    this.url = url;
  }
}
class SiteMapServiceBLOC {
  constructor(sitemap, navigationEndEvents) {
    this.sitemap = sitemap;
    this.navigationEndEvents = navigationEndEvents;
  }
  /**
   * getCurrentSiteMap
   */
  getCurrentSiteMap() {
    return this.navigationEndEvents.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(navigationEndEvent => navigationEndEvent.urlAfterRedirects), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(currentUrl => {
      return this.findSiteMap(currentUrl, [new MatchedRoute(this.sitemap, '')]);
    }));
  }
  findSiteMap(url, acc) {
    const last = acc[acc.length - 1];
    const {
      siteMap,
      url: matchedUrl
    } = last;
    const children = (siteMap.child || []).filter(child => _dto_site_map_dto__WEBPACK_IMPORTED_MODULE_1__.SiteMapDto.isEnabled(child));
    if (!children || children.length === 0) {
      return acc;
    }
    const unmatchedUrl = url.replace(matchedUrl, '');
    const matchedChild = children.find(eachChild => unmatchedUrl.startsWith(eachChild.url));
    if (!matchedChild) {
      return acc;
    }
    const newAcc = [...acc, new MatchedRoute(matchedChild, matchedUrl + matchedChild.url)];
    return this.findSiteMap(url, newAcc);
  }
}

/***/ }),

/***/ 9078:
/*!***********************************************************!*\
  !*** ./src/app/common/directives/if-visible.directive.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IfVisibleDirective: () => (/* binding */ IfVisibleDirective),
/* harmony export */   IfVisibleDirectiveContext: () => (/* binding */ IfVisibleDirectiveContext)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class IfVisibleDirectiveContext {
  constructor(isVisible) {
    this.isVisible = isVisible;
  }
}
class IfVisibleDirective {
  constructor(templateRef, viewContainerRef) {
    this.templateRef = templateRef;
    this.viewContainerRef = viewContainerRef;
  }
  ngOnInit() {
    this.embeddedViewRef = this.viewContainerRef.createEmbeddedView(this.templateRef, new IfVisibleDirectiveContext(false));
    const callBack = (entries, t) => {
      entries.forEach(entry => {
        if (this.embeddedViewRef.context.isVisible !== entry.isIntersecting) {
          this.embeddedViewRef.context.isVisible = entry.isIntersecting;
          this.embeddedViewRef.markForCheck();
        }
      });
    };
    const observer = new IntersectionObserver(callBack, {
      rootMargin: '0px',
      threshold: 0
    });
    const target = this.embeddedViewRef.rootNodes[0];
    observer.observe(target);
  }
  static {
    this.ɵfac = function IfVisibleDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IfVisibleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef));
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: IfVisibleDirective,
      selectors: [["", "appIfVisible", ""]],
      standalone: false
    });
  }
}

/***/ }),

/***/ 9334:
/*!*****************************************************************************************!*\
  !*** ./src/app/common/site-map/components/site-map-router/site-map-router.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SiteMapRouterComponent: () => (/* binding */ SiteMapRouterComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5443);
/* harmony import */ var _utils_components_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../utils/components-utils */ 3030);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 3119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_matched_route_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/matched-route.service */ 7161);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2596);
/* harmony import */ var _site_map_list_site_map_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../site-map-list/site-map-list.component */ 3390);








function SiteMapRouterComponent_ng_container_0_router_outlet_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "router-outlet");
  }
}
function SiteMapRouterComponent_ng_container_0_app_site_map_list_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-site-map-list", 2);
  }
  if (rf & 2) {
    const matchedRoute_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matchedRoute", matchedRoute_r1);
  }
}
function SiteMapRouterComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SiteMapRouterComponent_ng_container_0_router_outlet_1_Template, 1, 0, "router-outlet", 0)(2, SiteMapRouterComponent_ng_container_0_app_site_map_list_2_Template, 1, 1, "app-site-map-list", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const matchedRoute_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !matchedRoute_r1.siteMap.child);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", matchedRoute_r1.siteMap.child);
  }
}
class SiteMapRouterComponent {
  constructor(matchedRouteService) {
    this.matchedRouteService = matchedRouteService;
    this.onDestroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
  }
  ngOnInit() {
    this.matchedRoute$ = this.matchedRouteService.matchedRoute$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(matchedRoutes => {
      if (matchedRoutes.length === 0) {
        return null;
      } else {
        return matchedRoutes[matchedRoutes.length - 1];
      }
    }));
  }
  ngOnDestroy() {
    _utils_components_utils__WEBPACK_IMPORTED_MODULE_0__.ComponentsUtils.onComponentDestroyed(this.onDestroyed$);
  }
  static {
    this.ɵfac = function SiteMapRouterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SiteMapRouterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_matched_route_service__WEBPACK_IMPORTED_MODULE_1__.MatchedRouteService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: SiteMapRouterComponent,
      selectors: [["app-site-map-router"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], [3, "matchedRoute", 4, "ngIf"], [3, "matchedRoute"]],
      template: function SiteMapRouterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, SiteMapRouterComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx.matchedRoute$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _site_map_list_site_map_list_component__WEBPACK_IMPORTED_MODULE_2__.SiteMapListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 9671:
/*!**********************************************************************!*\
  !*** ./src/app/common/site-map/services/current-site-map.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentSiteMapService: () => (/* binding */ CurrentSiteMapService)
/* harmony export */ });
/* harmony import */ var _CurrentSiteMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../CurrentSiteMap */ 6947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class CurrentSiteMapService {
  constructor() {}
  getCurrentSiteMap() {
    return _CurrentSiteMap__WEBPACK_IMPORTED_MODULE_0__.currentSiteMap;
  }
  static {
    this.ɵfac = function CurrentSiteMapService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CurrentSiteMapService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CurrentSiteMapService,
      factory: CurrentSiteMapService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map