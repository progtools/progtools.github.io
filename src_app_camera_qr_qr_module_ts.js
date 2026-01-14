"use strict";
(self["webpackChunkprog_tools"] = self["webpackChunkprog_tools"] || []).push([["src_app_camera_qr_qr_module_ts"],{

/***/ 3193:
/*!****************************************!*\
  !*** ./src/app/camera/qr/qr.module.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QrModule: () => (/* binding */ QrModule)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _qr_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qr-routing.module */ 4440);
/* harmony import */ var _qr_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qr.component */ 8166);
/* harmony import */ var src_app_common_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/components/components.module */ 5389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);






class QrModule {
  static {
    this.ɵfac = function QrModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || QrModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: QrModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, src_app_common_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, _qr_routing_module__WEBPACK_IMPORTED_MODULE_0__.QrRoutingModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](QrModule, {
    declarations: [_qr_component__WEBPACK_IMPORTED_MODULE_1__.QrComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, src_app_common_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, _qr_routing_module__WEBPACK_IMPORTED_MODULE_0__.QrRoutingModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule]
  });
})();

/***/ }),

/***/ 4440:
/*!************************************************!*\
  !*** ./src/app/camera/qr/qr-routing.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QrRoutingModule: () => (/* binding */ QrRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 8431);
/* harmony import */ var _qr_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qr.component */ 8166);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _qr_component__WEBPACK_IMPORTED_MODULE_0__.QrComponent,
  data: {
    title: 'QR Code Reader',
    description: 'Read the data in QR code'
  }
}];
class QrRoutingModule {
  static {
    this.ɵfac = function QrRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || QrRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: QrRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](QrRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 8166:
/*!*******************************************!*\
  !*** ./src/app/camera/qr/qr.component.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QrComponent: () => (/* binding */ QrComponent)
/* harmony export */ });
/* harmony import */ var _common_utils_ImageFileReader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../common/utils/ImageFileReader */ 6932);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1536);
/* harmony import */ var qr_scanner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qr-scanner */ 8279);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6000);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 1963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _common_components_image_crop_image_crop_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/components/image-crop/image-crop.component */ 8763);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4175);









const _c0 = ["cropComponent"];
function QrComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.qrResult);
  }
}
function QrComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please wait while we scan for a qr code in the image...\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function QrComponent_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "app-image-crop", 7, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("croppedImage", function QrComponent_div_2_div_2_Template_app_image_crop_croppedImage_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.onImageCrop($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function QrComponent_div_2_div_2_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.onCropClicked());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " CROP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("imageData", ctx_r0.errImg.imageData);
  }
}
function QrComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, QrComponent_div_2_div_2_Template, 5, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.qrError, ". If you think the image contains qr code please crop the image to just contain the qr Code. Use the red box below over the image to select the qr portion and click on the crop button at the bottom of the image. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.errImg);
  }
}
qr_scanner__WEBPACK_IMPORTED_MODULE_1__["default"].WORKER_PATH = '/assets/service-workers/qr-scanner-worker.min.js';
class QrComponent {
  constructor(cdr, titleService) {
    this.cdr = cdr;
    this.titleService = titleService;
    this.isScanning = false;
    titleService.setTitle('QR Code Reader');
  }
  set content(cropComponent) {
    this.cropComponent = cropComponent;
  }
  ngOnInit() {}
  onError(image, error) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(error).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(err => {
      this.qrError = 'Unable to find qr code in the image';
      console.warn(err);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(() => _common_utils_ImageFileReader__WEBPACK_IMPORTED_MODULE_0__.ImageFileReader.convertFileToImageBase64(image)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(img => this.errImg = img));
  }
  onErrorB64(imageB64, error) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(error).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(err => {
      this.qrError = 'Unable to find qr code in the image';
      console.warn(err);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this.errImg = {
      imageData: imageB64
    }));
  }
  scanFile(image) {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(1).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => {
      this.qrError = this.qrResult = '';
      this.isScanning = true;
      this.cdr.detectChanges();
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(() => qr_scanner__WEBPACK_IMPORTED_MODULE_1__["default"].scanImage(image)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(result => this.qrResult = result), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => this.onError(image, error)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => {
      this.isScanning = false;
      this.cdr.detectChanges();
    })).subscribe();
  }
  scanFileB64(imageB64) {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(1).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => {
      this.qrError = this.qrResult = '';
      this.isScanning = true;
      this.cdr.detectChanges();
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(() => {
      const imgEle = document.createElement('img');
      imgEle.src = imageB64;
      return qr_scanner__WEBPACK_IMPORTED_MODULE_1__["default"].scanImage(imgEle);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(result => this.qrResult = result), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => this.onErrorB64(imageB64, error)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => {
      this.isScanning = false;
      this.cdr.detectChanges();
    })).subscribe();
  }
  fileChanged(event) {
    const loadedFileElement = event.target;
    const file = loadedFileElement.files[0];
    this.scanFile(file);
  }
  onImageCrop(imgB64) {
    this.scanFileB64(imgB64);
  }
  onCropClicked() {
    if (!this.cropComponent) {
      return;
    }
    this.cropComponent.cropImage();
  }
  static {
    this.ɵfac = function QrComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || QrComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.Title));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: QrComponent,
      selectors: [["app-qr"]],
      viewQuery: function QrComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
        }
      },
      standalone: false,
      decls: 5,
      vars: 3,
      consts: [["cropComponent", ""], ["class", "success", 4, "ngIf"], [4, "ngIf"], ["class", "error", 4, "ngIf"], ["type", "file", "accept", "image/*", 3, "change"], [1, "success"], [1, "error"], [3, "croppedImage", "imageData"], ["mat-raised-button", "", "mat-primary", "", 3, "click"]],
      template: function QrComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, QrComponent_div_0_Template, 2, 1, "div", 1)(1, QrComponent_div_1_Template, 2, 0, "div", 2)(2, QrComponent_div_2_Template, 3, 2, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\nUpload image with QR code\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function QrComponent_Template_input_change_4_listener($event) {
            return ctx.fileChanged($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.qrResult);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isScanning);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.qrError && !ctx.isScanning);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _common_components_image_crop_image_crop_component__WEBPACK_IMPORTED_MODULE_2__.ImageCropComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton],
      styles: [".success[_ngcontent-%COMP%] {\n  color: rgba(25, 102, 63, 0.582);\n}\n\n.error[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2FtZXJhL3FyL3FyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7QUFDRjs7QUFDQTtFQUNFLFVBQUE7QUFFRiIsInNvdXJjZXNDb250ZW50IjpbIi5zdWNjZXNzIHtcclxuICBjb2xvcjogcmdiYSgyNSwgMTAyLCA2MywgMC41ODIpO1xyXG59XHJcbi5lcnJvciB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 8279:
/*!***************************************************!*\
  !*** ./node_modules/qr-scanner/qr-scanner.min.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var D_ideaprojects_prog_tool_prog_tools_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);

class e {
  constructor(a, b, c, d, f) {
    this._legacyCanvasSize = e.DEFAULT_CANVAS_SIZE;
    this._preferredCamera = "environment";
    this._maxScansPerSecond = 25;
    this._lastScanTimestamp = -1;
    this._destroyed = this._flashOn = this._paused = this._active = !1;
    this.$video = a;
    this.$canvas = document.createElement("canvas");
    c && "object" === typeof c ? this._onDecode = b : (c || d || f ? console.warn("You're using a deprecated version of the QrScanner constructor which will be removed in the future") : console.warn("Note that the type of the scan result passed to onDecode will change in the future. To already switch to the new api today, you can pass returnDetailedScanResult: true."), this._legacyOnDecode = b);
    b = "object" === typeof c ? c : {};
    this._onDecodeError = b.onDecodeError || ("function" === typeof c ? c : this._onDecodeError);
    this._calculateScanRegion = b.calculateScanRegion || ("function" === typeof d ? d : this._calculateScanRegion);
    this._preferredCamera = b.preferredCamera || f || this._preferredCamera;
    this._legacyCanvasSize = "number" === typeof c ? c : "number" === typeof d ? d : this._legacyCanvasSize;
    this._maxScansPerSecond = b.maxScansPerSecond || this._maxScansPerSecond;
    this._onPlay = this._onPlay.bind(this);
    this._onLoadedMetaData = this._onLoadedMetaData.bind(this);
    this._onVisibilityChange = this._onVisibilityChange.bind(this);
    this._updateOverlay = this._updateOverlay.bind(this);
    a.disablePictureInPicture = !0;
    a.playsInline = !0;
    a.muted = !0;
    let h = !1;
    a.hidden && (a.hidden = !1, h = !0);
    document.body.contains(a) || (document.body.appendChild(a), h = !0);
    c = a.parentElement;
    if (b.highlightScanRegion || b.highlightCodeOutline) {
      d = !!b.overlay;
      this.$overlay = b.overlay || document.createElement("div");
      f = this.$overlay.style;
      f.position = "absolute";
      f.display = "none";
      f.pointerEvents = "none";
      this.$overlay.classList.add("scan-region-highlight");
      if (!d && b.highlightScanRegion) {
        this.$overlay.innerHTML = '<svg class="scan-region-highlight-svg" viewBox="0 0 238 238" preserveAspectRatio="none" style="position:absolute;width:100%;height:100%;left:0;top:0;fill:none;stroke:#e9b213;stroke-width:4;stroke-linecap:round;stroke-linejoin:round"><path d="M31 2H10a8 8 0 0 0-8 8v21M207 2h21a8 8 0 0 1 8 8v21m0 176v21a8 8 0 0 1-8 8h-21m-176 0H10a8 8 0 0 1-8-8v-21"/></svg>';
        try {
          this.$overlay.firstElementChild.animate({
            transform: ["scale(.98)", "scale(1.01)"]
          }, {
            duration: 400,
            iterations: Infinity,
            direction: "alternate",
            easing: "ease-in-out"
          });
        } catch (m) {}
        c.insertBefore(this.$overlay, this.$video.nextSibling);
      }
      b.highlightCodeOutline && (this.$overlay.insertAdjacentHTML("beforeend", '<svg class="code-outline-highlight" preserveAspectRatio="none" style="display:none;width:100%;height:100%;fill:none;stroke:#e9b213;stroke-width:5;stroke-dasharray:25;stroke-linecap:round;stroke-linejoin:round"><polygon/></svg>'), this.$codeOutlineHighlight = this.$overlay.lastElementChild);
    }
    this._scanRegion = this._calculateScanRegion(a);
    requestAnimationFrame(() => {
      let m = window.getComputedStyle(a);
      "none" === m.display && (a.style.setProperty("display", "block", "important"), h = !0);
      "visible" !== m.visibility && (a.style.setProperty("visibility", "visible", "important"), h = !0);
      h && (console.warn("QrScanner has overwritten the video hiding style to avoid Safari stopping the playback."), a.style.opacity = "0", a.style.width = "0", a.style.height = "0", this.$overlay && this.$overlay.parentElement && this.$overlay.parentElement.removeChild(this.$overlay), delete this.$overlay, delete this.$codeOutlineHighlight);
      this.$overlay && this._updateOverlay();
    });
    a.addEventListener("play", this._onPlay);
    a.addEventListener("loadedmetadata", this._onLoadedMetaData);
    document.addEventListener("visibilitychange", this._onVisibilityChange);
    window.addEventListener("resize", this._updateOverlay);
    this._qrEnginePromise = e.createQrEngine();
  }
  static set WORKER_PATH(a) {
    console.warn("Setting QrScanner.WORKER_PATH is not required and not supported anymore. Have a look at the README for new setup instructions.");
  }
  static hasCamera() {
    return (0,D_ideaprojects_prog_tool_prog_tools_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        return !!(yield e.listCameras(!1)).length;
      } catch (a) {
        return !1;
      }
    })();
  }
  static listCameras() {
    return (0,D_ideaprojects_prog_tool_prog_tools_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (a = !1) {
      if (!navigator.mediaDevices) return [];
      let b = /*#__PURE__*/function () {
          var _ref = (0,D_ideaprojects_prog_tool_prog_tools_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            return (yield navigator.mediaDevices.enumerateDevices()).filter(d => "videoinput" === d.kind);
          });
          return function b() {
            return _ref.apply(this, arguments);
          };
        }(),
        c;
      try {
        a && (yield b()).every(d => !d.label) && (c = yield navigator.mediaDevices.getUserMedia({
          audio: !1,
          video: !0
        }));
      } catch (d) {}
      try {
        return (yield b()).map((d, f) => ({
          id: d.deviceId,
          label: d.label || (0 === f ? "Default Camera" : `Camera ${f + 1}`)
        }));
      } finally {
        c && (console.warn("Call listCameras after successfully starting a QR scanner to avoid creating a temporary video stream"), e._stopVideoStream(c));
      }
    }).apply(this, arguments);
  }
  hasFlash() {
    var _this = this;
    return (0,D_ideaprojects_prog_tool_prog_tools_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let a;
      try {
        if (_this.$video.srcObject) {
          if (!(_this.$video.srcObject instanceof MediaStream)) return !1;
          a = _this.$video.srcObject;
        } else a = (yield _this._getCameraStream()).stream;
        return "torch" in a.getVideoTracks()[0].getSettings();
      } catch (b) {
        return !1;
      } finally {
        a && a !== _this.$video.srcObject && (console.warn("Call hasFlash after successfully starting the scanner to avoid creating a temporary video stream"), e._stopVideoStream(a));
      }
    })();
  }
  isFlashOn() {
    return this._flashOn;
  }
  toggleFlash() {
    var _this2 = this;
    return (0,D_ideaprojects_prog_tool_prog_tools_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2._flashOn ? yield _this2.turnFlashOff() : yield _this2.turnFlashOn();
    })();
  }
  turnFlashOn() {
    var _this3 = this;
    return (0,D_ideaprojects_prog_tool_prog_tools_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this3._flashOn && !_this3._destroyed && (_this3._flashOn = !0, _this3._active && !_this3._paused)) try {
        if (!(yield _this3.hasFlash())) throw "No flash available";
        yield _this3.$video.srcObject.getVideoTracks()[0].applyConstraints({
          advanced: [{
            torch: !0
          }]
        });
      } catch (a) {
        throw _this3._flashOn = !1, a;
      }
    })();
  }
  turnFlashOff() {
    var _this4 = this;
    return (0,D_ideaprojects_prog_tool_prog_tools_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4._flashOn && (_this4._flashOn = !1, yield _this4._restartVideoStream());
    })();
  }
  destroy() {
    this.$video.removeEventListener("loadedmetadata", this._onLoadedMetaData);
    this.$video.removeEventListener("play", this._onPlay);
    document.removeEventListener("visibilitychange", this._onVisibilityChange);
    window.removeEventListener("resize", this._updateOverlay);
    this._destroyed = !0;
    this._flashOn = !1;
    this.stop();
    e._postWorkerMessage(this._qrEnginePromise, "close");
  }
  start() {
    var _this5 = this;
    return (0,D_ideaprojects_prog_tool_prog_tools_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this5._destroyed) throw Error("The QR scanner can not be started as it had been destroyed.");
      if (!_this5._active || _this5._paused) if ("https:" !== window.location.protocol && console.warn("The camera stream is only accessible if the page is transferred via https."), _this5._active = !0, !document.hidden) if (_this5._paused = !1, _this5.$video.srcObject) yield _this5.$video.play();else try {
        let {
          stream: a,
          facingMode: b
        } = yield _this5._getCameraStream();
        !_this5._active || _this5._paused ? e._stopVideoStream(a) : (_this5._setVideoMirror(b), _this5.$video.srcObject = a, yield _this5.$video.play(), _this5._flashOn && (_this5._flashOn = !1, _this5.turnFlashOn().catch(() => {})));
      } catch (a) {
        if (!_this5._paused) throw _this5._active = !1, a;
      }
    })();
  }
  stop() {
    this.pause();
    this._active = !1;
  }
  pause() {
    var _this6 = this;
    return (0,D_ideaprojects_prog_tool_prog_tools_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (a = !1) {
      _this6._paused = !0;
      if (!_this6._active) return !0;
      _this6.$video.pause();
      _this6.$overlay && (_this6.$overlay.style.display = "none");
      let b = () => {
        _this6.$video.srcObject instanceof MediaStream && (e._stopVideoStream(_this6.$video.srcObject), _this6.$video.srcObject = null);
      };
      if (a) return b(), !0;
      yield new Promise(c => setTimeout(c, 300));
      if (!_this6._paused) return !1;
      b();
      return !0;
    }).apply(this, arguments);
  }
  setCamera(a) {
    var _this7 = this;
    return (0,D_ideaprojects_prog_tool_prog_tools_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      a !== _this7._preferredCamera && (_this7._preferredCamera = a, yield _this7._restartVideoStream());
    })();
  }
  static scanImage(_x, _x2, _x3, _x4) {
    return (0,D_ideaprojects_prog_tool_prog_tools_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (a, b, c, d, f = !1, h = !1) {
      let m,
        n = !1;
      b && ("scanRegion" in b || "qrEngine" in b || "canvas" in b || "disallowCanvasResizing" in b || "alsoTryWithoutScanRegion" in b || "returnDetailedScanResult" in b) ? (m = b.scanRegion, c = b.qrEngine, d = b.canvas, f = b.disallowCanvasResizing || !1, h = b.alsoTryWithoutScanRegion || !1, n = !0) : b || c || d || f || h ? console.warn("You're using a deprecated api for scanImage which will be removed in the future.") : console.warn("Note that the return type of scanImage will change in the future. To already switch to the new api today, you can pass returnDetailedScanResult: true.");
      b = !!c;
      try {
        let p, k;
        [c, p] = yield Promise.all([c || e.createQrEngine(), e._loadImage(a)]);
        [d, k] = e._drawToCanvas(p, m, d, f);
        let q;
        if (c instanceof Worker) {
          let g = c;
          b || e._postWorkerMessageSync(g, "inversionMode", "both");
          q = yield new Promise((l, v) => {
            let w,
              u,
              r,
              y = -1;
            u = t => {
              t.data.id === y && (g.removeEventListener("message", u), g.removeEventListener("error", r), clearTimeout(w), null !== t.data.data ? l({
                data: t.data.data,
                cornerPoints: e._convertPoints(t.data.cornerPoints, m)
              }) : v(e.NO_QR_CODE_FOUND));
            };
            r = t => {
              g.removeEventListener("message", u);
              g.removeEventListener("error", r);
              clearTimeout(w);
              v("Scanner error: " + (t ? t.message || t : "Unknown Error"));
            };
            g.addEventListener("message", u);
            g.addEventListener("error", r);
            w = setTimeout(() => r("timeout"), 1E4);
            let x = k.getImageData(0, 0, d.width, d.height);
            y = e._postWorkerMessageSync(g, "decode", x, [x.data.buffer]);
          });
        } else q = yield Promise.race([new Promise((g, l) => window.setTimeout(() => l("Scanner error: timeout"), 1E4)), (0,D_ideaprojects_prog_tool_prog_tools_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          try {
            var [g] = yield c.detect(d);
            if (!g) throw e.NO_QR_CODE_FOUND;
            return {
              data: g.rawValue,
              cornerPoints: e._convertPoints(g.cornerPoints, m)
            };
          } catch (l) {
            g = l.message || l;
            if (/not implemented|service unavailable/.test(g)) return e._disableBarcodeDetector = !0, e.scanImage(a, {
              scanRegion: m,
              canvas: d,
              disallowCanvasResizing: f,
              alsoTryWithoutScanRegion: h
            });
            throw `Scanner error: ${g}`;
          }
        })()]);
        return n ? q : q.data;
      } catch (p) {
        if (!m || !h) throw p;
        let k = yield e.scanImage(a, {
          qrEngine: c,
          canvas: d,
          disallowCanvasResizing: f
        });
        return n ? k : k.data;
      } finally {
        b || e._postWorkerMessage(c, "close");
      }
    }).apply(this, arguments);
  }
  setGrayscaleWeights(a, b, c, d = !0) {
    e._postWorkerMessage(this._qrEnginePromise, "grayscaleWeights", {
      red: a,
      green: b,
      blue: c,
      useIntegerApproximation: d
    });
  }
  setInversionMode(a) {
    e._postWorkerMessage(this._qrEnginePromise, "inversionMode", a);
  }
  static createQrEngine(a) {
    return (0,D_ideaprojects_prog_tool_prog_tools_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      a && console.warn("Specifying a worker path is not required and not supported anymore.");
      a = () => __webpack_require__.e(/*! import() */ "node_modules_qr-scanner_qr-scanner-worker_min_js").then(__webpack_require__.bind(__webpack_require__, /*! ./qr-scanner-worker.min.js */ 5614)).then(c => c.createWorker());
      if (!(!e._disableBarcodeDetector && "BarcodeDetector" in window && BarcodeDetector.getSupportedFormats && (yield BarcodeDetector.getSupportedFormats()).includes("qr_code"))) return a();
      let b = navigator.userAgentData;
      return b && b.brands.some(({
        brand: c
      }) => /Chromium/i.test(c)) && /mac ?OS/i.test(b.platform) && (yield b.getHighEntropyValues(["architecture", "platformVersion"]).then(({
        architecture: c,
        platformVersion: d
      }) => /arm/i.test(c || "arm") && 13 <= parseInt(d || "13")).catch(() => !0)) ? a() : new BarcodeDetector({
        formats: ["qr_code"]
      });
    })();
  }
  _onPlay() {
    this._scanRegion = this._calculateScanRegion(this.$video);
    this._updateOverlay();
    this.$overlay && (this.$overlay.style.display = "");
    this._scanFrame();
  }
  _onLoadedMetaData() {
    this._scanRegion = this._calculateScanRegion(this.$video);
    this._updateOverlay();
  }
  _onVisibilityChange() {
    document.hidden ? this.pause() : this._active && this.start();
  }
  _calculateScanRegion(a) {
    let b = Math.round(2 / 3 * Math.min(a.videoWidth, a.videoHeight));
    return {
      x: Math.round((a.videoWidth - b) / 2),
      y: Math.round((a.videoHeight - b) / 2),
      width: b,
      height: b,
      downScaledWidth: this._legacyCanvasSize,
      downScaledHeight: this._legacyCanvasSize
    };
  }
  _updateOverlay() {
    requestAnimationFrame(() => {
      if (this.$overlay) {
        var a = this.$video,
          b = a.videoWidth,
          c = a.videoHeight,
          d = a.offsetWidth,
          f = a.offsetHeight,
          h = a.offsetLeft,
          m = a.offsetTop,
          n = window.getComputedStyle(a),
          p = n.objectFit,
          k = b / c,
          q = d / f;
        switch (p) {
          case "none":
            var g = b;
            var l = c;
            break;
          case "fill":
            g = d;
            l = f;
            break;
          default:
            ("cover" === p ? k > q : k < q) ? (l = f, g = l * k) : (g = d, l = g / k), "scale-down" === p && (g = Math.min(g, b), l = Math.min(l, c));
        }
        var [v, w] = n.objectPosition.split(" ").map((r, y) => {
          const x = parseFloat(r);
          return r.endsWith("%") ? (y ? f - l : d - g) * x / 100 : x;
        });
        n = this._scanRegion.width || b;
        q = this._scanRegion.height || c;
        p = this._scanRegion.x || 0;
        var u = this._scanRegion.y || 0;
        k = this.$overlay.style;
        k.width = `${n / b * g}px`;
        k.height = `${q / c * l}px`;
        k.top = `${m + w + u / c * l}px`;
        c = /scaleX\(-1\)/.test(a.style.transform);
        k.left = `${h + (c ? d - v - g : v) + (c ? b - p - n : p) / b * g}px`;
        k.transform = a.style.transform;
      }
    });
  }
  static _convertPoints(a, b) {
    if (!b) return a;
    let c = b.x || 0,
      d = b.y || 0,
      f = b.width && b.downScaledWidth ? b.width / b.downScaledWidth : 1;
    b = b.height && b.downScaledHeight ? b.height / b.downScaledHeight : 1;
    for (let h of a) h.x = h.x * f + c, h.y = h.y * b + d;
    return a;
  }
  _scanFrame() {
    var _this8 = this;
    !this._active || this.$video.paused || this.$video.ended || ("requestVideoFrameCallback" in this.$video ? this.$video.requestVideoFrameCallback.bind(this.$video) : requestAnimationFrame)(/*#__PURE__*/(0,D_ideaprojects_prog_tool_prog_tools_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!(1 >= _this8.$video.readyState)) {
        var a = Date.now() - _this8._lastScanTimestamp,
          b = 1E3 / _this8._maxScansPerSecond;
        a < b && (yield new Promise(d => setTimeout(d, b - a)));
        _this8._lastScanTimestamp = Date.now();
        try {
          var c = yield e.scanImage(_this8.$video, {
            scanRegion: _this8._scanRegion,
            qrEngine: _this8._qrEnginePromise,
            canvas: _this8.$canvas
          });
        } catch (d) {
          if (!_this8._active) return;
          _this8._onDecodeError(d);
        }
        !e._disableBarcodeDetector || (yield _this8._qrEnginePromise) instanceof Worker || (_this8._qrEnginePromise = e.createQrEngine());
        c ? (_this8._onDecode ? _this8._onDecode(c) : _this8._legacyOnDecode && _this8._legacyOnDecode(c.data), _this8.$codeOutlineHighlight && (clearTimeout(_this8._codeOutlineHighlightRemovalTimeout), _this8._codeOutlineHighlightRemovalTimeout = void 0, _this8.$codeOutlineHighlight.setAttribute("viewBox", `${_this8._scanRegion.x || 0} ` + `${_this8._scanRegion.y || 0} ` + `${_this8._scanRegion.width || _this8.$video.videoWidth} ` + `${_this8._scanRegion.height || _this8.$video.videoHeight}`), _this8.$codeOutlineHighlight.firstElementChild.setAttribute("points", c.cornerPoints.map(({
          x: d,
          y: f
        }) => `${d},${f}`).join(" ")), _this8.$codeOutlineHighlight.style.display = "")) : _this8.$codeOutlineHighlight && !_this8._codeOutlineHighlightRemovalTimeout && (_this8._codeOutlineHighlightRemovalTimeout = setTimeout(() => _this8.$codeOutlineHighlight.style.display = "none", 100));
      }
      _this8._scanFrame();
    }));
  }
  _onDecodeError(a) {
    a !== e.NO_QR_CODE_FOUND && console.log(a);
  }
  _getCameraStream() {
    var _this9 = this;
    return (0,D_ideaprojects_prog_tool_prog_tools_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!navigator.mediaDevices) throw "Camera not found.";
      let a = /^(environment|user)$/.test(_this9._preferredCamera) ? "facingMode" : "deviceId",
        b = [{
          width: {
            min: 1024
          }
        }, {
          width: {
            min: 768
          }
        }, {}],
        c = b.map(d => Object.assign({}, d, {
          [a]: {
            exact: _this9._preferredCamera
          }
        }));
      for (let d of [...c, ...b]) try {
        let f = yield navigator.mediaDevices.getUserMedia({
            video: d,
            audio: !1
          }),
          h = _this9._getFacingMode(f) || (d.facingMode ? _this9._preferredCamera : "environment" === _this9._preferredCamera ? "user" : "environment");
        return {
          stream: f,
          facingMode: h
        };
      } catch (f) {}
      throw "Camera not found.";
    })();
  }
  _restartVideoStream() {
    var _this0 = this;
    return (0,D_ideaprojects_prog_tool_prog_tools_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let a = _this0._paused;
      (yield _this0.pause(!0)) && !a && _this0._active && (yield _this0.start());
    })();
  }
  static _stopVideoStream(a) {
    for (let b of a.getTracks()) b.stop(), a.removeTrack(b);
  }
  _setVideoMirror(a) {
    this.$video.style.transform = "scaleX(" + ("user" === a ? -1 : 1) + ")";
  }
  _getFacingMode(a) {
    return (a = a.getVideoTracks()[0]) ? /rear|back|environment/i.test(a.label) ? "environment" : /front|user|face/i.test(a.label) ? "user" : null : null;
  }
  static _drawToCanvas(a, b, c, d = !1) {
    c = c || document.createElement("canvas");
    let f = b && b.x ? b.x : 0,
      h = b && b.y ? b.y : 0,
      m = b && b.width ? b.width : a.videoWidth || a.width,
      n = b && b.height ? b.height : a.videoHeight || a.height;
    d || (d = b && b.downScaledWidth ? b.downScaledWidth : m, b = b && b.downScaledHeight ? b.downScaledHeight : n, c.width !== d && (c.width = d), c.height !== b && (c.height = b));
    b = c.getContext("2d", {
      alpha: !1
    });
    b.imageSmoothingEnabled = !1;
    b.drawImage(a, f, h, m, n, 0, 0, c.width, c.height);
    return [c, b];
  }
  static _loadImage(a) {
    return (0,D_ideaprojects_prog_tool_prog_tools_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (a instanceof Image) return yield e._awaitImageLoad(a), a;
      if (a instanceof HTMLVideoElement || a instanceof HTMLCanvasElement || a instanceof SVGImageElement || "OffscreenCanvas" in window && a instanceof OffscreenCanvas || "ImageBitmap" in window && a instanceof ImageBitmap) return a;
      if (a instanceof File || a instanceof Blob || a instanceof URL || "string" === typeof a) {
        let b = new Image();
        b.src = a instanceof File || a instanceof Blob ? URL.createObjectURL(a) : a.toString();
        try {
          return yield e._awaitImageLoad(b), b;
        } finally {
          (a instanceof File || a instanceof Blob) && URL.revokeObjectURL(b.src);
        }
      } else throw "Unsupported image type.";
    })();
  }
  static _awaitImageLoad(a) {
    return (0,D_ideaprojects_prog_tool_prog_tools_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      a.complete && 0 !== a.naturalWidth || (yield new Promise((b, c) => {
        let d = f => {
          a.removeEventListener("load", d);
          a.removeEventListener("error", d);
          f instanceof ErrorEvent ? c("Image load error") : b();
        };
        a.addEventListener("load", d);
        a.addEventListener("error", d);
      }));
    })();
  }
  static _postWorkerMessage(a, b, c, d) {
    return (0,D_ideaprojects_prog_tool_prog_tools_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return e._postWorkerMessageSync(yield a, b, c, d);
    })();
  }
  static _postWorkerMessageSync(a, b, c, d) {
    if (!(a instanceof Worker)) return -1;
    let f = e._workerMessageId++;
    a.postMessage({
      id: f,
      type: b,
      data: c
    }, d);
    return f;
  }
}
e.DEFAULT_CANVAS_SIZE = 400;
e.NO_QR_CODE_FOUND = "No QR code found";
e._disableBarcodeDetector = !1;
e._workerMessageId = 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (e);

/***/ })

}]);
//# sourceMappingURL=src_app_camera_qr_qr_module_ts.js.map