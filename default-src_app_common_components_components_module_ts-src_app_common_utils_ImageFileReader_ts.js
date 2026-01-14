"use strict";
(self["webpackChunkprog_tools"] = self["webpackChunkprog_tools"] || []).push([["default-src_app_common_components_components_module_ts-src_app_common_utils_ImageFileReader_ts"],{

/***/ 3377:
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/throttle.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultThrottleConfig: () => (/* binding */ defaultThrottleConfig),
/* harmony export */   throttle: () => (/* binding */ throttle)
/* harmony export */ });
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../innerSubscribe */ 3879);

const defaultThrottleConfig = {
  leading: true,
  trailing: false
};
function throttle(durationSelector, config = defaultThrottleConfig) {
  return source => source.lift(new ThrottleOperator(durationSelector, !!config.leading, !!config.trailing));
}
class ThrottleOperator {
  constructor(durationSelector, leading, trailing) {
    this.durationSelector = durationSelector;
    this.leading = leading;
    this.trailing = trailing;
  }
  call(subscriber, source) {
    return source.subscribe(new ThrottleSubscriber(subscriber, this.durationSelector, this.leading, this.trailing));
  }
}
class ThrottleSubscriber extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleOuterSubscriber {
  constructor(destination, durationSelector, _leading, _trailing) {
    super(destination);
    this.destination = destination;
    this.durationSelector = durationSelector;
    this._leading = _leading;
    this._trailing = _trailing;
    this._hasValue = false;
  }
  _next(value) {
    this._hasValue = true;
    this._sendValue = value;
    if (!this._throttled) {
      if (this._leading) {
        this.send();
      } else {
        this.throttle(value);
      }
    }
  }
  send() {
    const {
      _hasValue,
      _sendValue
    } = this;
    if (_hasValue) {
      this.destination.next(_sendValue);
      this.throttle(_sendValue);
    }
    this._hasValue = false;
    this._sendValue = undefined;
  }
  throttle(value) {
    const duration = this.tryDurationSelector(value);
    if (!!duration) {
      this.add(this._throttled = (0,_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.innerSubscribe)(duration, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleInnerSubscriber(this)));
    }
  }
  tryDurationSelector(value) {
    try {
      return this.durationSelector(value);
    } catch (err) {
      this.destination.error(err);
      return null;
    }
  }
  throttlingDone() {
    const {
      _throttled,
      _trailing
    } = this;
    if (_throttled) {
      _throttled.unsubscribe();
    }
    this._throttled = undefined;
    if (_trailing) {
      this.send();
    }
  }
  notifyNext() {
    this.throttlingDone();
  }
  notifyComplete() {
    this.throttlingDone();
  }
}

/***/ }),

/***/ 3700:
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/throttleTime.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   throttleTime: () => (/* binding */ throttleTime)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Subscriber */ 8097);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 9573);
/* harmony import */ var _throttle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./throttle */ 3377);



function throttleTime(duration, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async, config = _throttle__WEBPACK_IMPORTED_MODULE_1__.defaultThrottleConfig) {
  return source => source.lift(new ThrottleTimeOperator(duration, scheduler, config.leading, config.trailing));
}
class ThrottleTimeOperator {
  constructor(duration, scheduler, leading, trailing) {
    this.duration = duration;
    this.scheduler = scheduler;
    this.leading = leading;
    this.trailing = trailing;
  }
  call(subscriber, source) {
    return source.subscribe(new ThrottleTimeSubscriber(subscriber, this.duration, this.scheduler, this.leading, this.trailing));
  }
}
class ThrottleTimeSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_2__.Subscriber {
  constructor(destination, duration, scheduler, leading, trailing) {
    super(destination);
    this.duration = duration;
    this.scheduler = scheduler;
    this.leading = leading;
    this.trailing = trailing;
    this._hasTrailingValue = false;
    this._trailingValue = null;
  }
  _next(value) {
    if (this.throttled) {
      if (this.trailing) {
        this._trailingValue = value;
        this._hasTrailingValue = true;
      }
    } else {
      this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.duration, {
        subscriber: this
      }));
      if (this.leading) {
        this.destination.next(value);
      } else if (this.trailing) {
        this._trailingValue = value;
        this._hasTrailingValue = true;
      }
    }
  }
  _complete() {
    if (this._hasTrailingValue) {
      this.destination.next(this._trailingValue);
      this.destination.complete();
    } else {
      this.destination.complete();
    }
  }
  clearThrottle() {
    const throttled = this.throttled;
    if (throttled) {
      if (this.trailing && this._hasTrailingValue) {
        this.destination.next(this._trailingValue);
        this._trailingValue = null;
        this._hasTrailingValue = false;
      }
      throttled.unsubscribe();
      this.remove(throttled);
      this.throttled = null;
    }
  }
}
function dispatchNext(arg) {
  const {
    subscriber
  } = arg;
  subscriber.clearThrottle();
}

/***/ }),

/***/ 5389:
/*!********************************************************!*\
  !*** ./src/app/common/components/components.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComponentsModule: () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var _image_crop_image_crop_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-crop/image-crop.component */ 8763);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




class ComponentsModule {
  static {
    this.ɵfac = function ComponentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ComponentsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ComponentsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ComponentsModule, {
    declarations: [_image_crop_image_crop_component__WEBPACK_IMPORTED_MODULE_0__.ImageCropComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule],
    exports: [_image_crop_image_crop_component__WEBPACK_IMPORTED_MODULE_0__.ImageCropComponent]
  });
})();

/***/ }),

/***/ 6932:
/*!*************************************************!*\
  !*** ./src/app/common/utils/ImageFileReader.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageFileReader: () => (/* binding */ ImageFileReader)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 7498);

class ImageFileReader {
  static convertFileToImageBase64(imgFile) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(observer => {
      const reader = new FileReader();
      reader.onloadend = evt => {
        observer.next({
          imageData: evt.target.result
        });
        observer.complete();
      };
      reader.onerror = () => observer.error();
      reader.readAsDataURL(imgFile);
    });
  }
}

/***/ }),

/***/ 8763:
/*!**********************************************************************!*\
  !*** ./src/app/common/components/image-crop/image-crop.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageCropComponent: () => (/* binding */ ImageCropComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3700);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 7464);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4460);





const _c0 = ["imageContainer"];
const _c1 = ["cropRect"];
const _c2 = ["image"];
const _c3 = ["canvas"];
const _c4 = (a0, a1, a2, a3) => ({
  "top": a0,
  "bottom": a1,
  "left": a2,
  "right": a3
});
class ImageCropComponent {
  constructor(cdr) {
    this.cdr = cdr;
    this.croppedImage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.isCropping = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.topOffset = '10px';
    this.bottomOffset = '10px';
    this.leftOffset = '10px';
    this.rightOffset = '10px';
    this.onDestroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.borderDragged$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  }
  ngOnInit() {
    this.borderDragged$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.throttleTime)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.onDestroyed$)).subscribe(({
      event: {
        viewPortX: clientX,
        viewPortY: clientY
      },
      border
    }) => {
      const imgCtrRect = this.imgContainerElement.nativeElement.getBoundingClientRect();
      const left = clientX - imgCtrRect.x;
      const top = clientY - imgCtrRect.y;
      switch (border) {
        case 'left':
          this.leftOffset = left >= 0 ? left + 'px' : this.leftOffset;
          break;
        case 'right':
          const newRight = imgCtrRect.width - left;
          this.rightOffset = newRight >= 0 ? newRight + 'px' : this.rightOffset;
          break;
        case 'top':
          this.topOffset = top >= 0 ? top + 'px' : this.topOffset;
          break;
        case 'bottom':
          const newBottom = imgCtrRect.height - top;
          this.bottomOffset = newBottom >= 0 ? newBottom + 'px' : this.bottomOffset;
          break;
      }
      this.cdr.detectChanges();
    });
  }
  ngOnChanges(changes) {
    this.leftOffset = this.topOffset = this.rightOffset = this.bottomOffset = '10px';
  }
  ngOnDestroy() {
    this.onDestroyed$.next();
    this.onDestroyed$.complete();
  }
  onDragStart(border, event) {
    this.currentlyDragging = border;
    const img = new Image();
    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
    event.dataTransfer.setDragImage(img, 0, 0);
  }
  onDragOver(event) {
    this.borderDragged$.next({
      event: {
        viewPortX: event.clientX,
        viewPortY: event.clientY
      },
      border: this.currentlyDragging
    });
  }
  onTouchDrag(border, event) {
    event.preventDefault();
    const touchedPoint = event.touches[0];
    this.borderDragged$.next({
      event: {
        viewPortX: touchedPoint.clientX,
        viewPortY: touchedPoint.clientY
      },
      border
    });
  }
  cropImage() {
    const img = this.imageElement.nativeElement;
    const cropBoxBoundingRect = this.cropRectElement.nativeElement.getBoundingClientRect();
    const containerBoundingRect = this.imgContainerElement.nativeElement.getBoundingClientRect();
    const scalingX = img.naturalWidth / containerBoundingRect.width;
    const scalingY = img.naturalHeight / containerBoundingRect.height;
    const offsetX = (cropBoxBoundingRect.left - containerBoundingRect.left) * scalingX;
    const offsetY = (cropBoxBoundingRect.top - containerBoundingRect.top) * scalingY;
    const cropedImgWidth = cropBoxBoundingRect.width * scalingX;
    const cropedImgHeight = cropBoxBoundingRect.height * scalingY;
    this.isCropping.emit(true);
    const canvas = this.canvasElement.nativeElement;
    canvas.width = cropedImgWidth;
    canvas.height = cropedImgHeight;
    const context = canvas.getContext('2d');
    context.drawImage(img, offsetX, offsetY, cropedImgWidth, cropedImgHeight, 0, 0, cropedImgWidth, cropedImgHeight);
    canvas.toBlob(blob => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const base64data = reader.result;
        this.croppedImage.emit(base64data);
        this.isCropping.emit(false);
      };
    });
  }
  static {
    this.ɵfac = function ImageCropComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ImageCropComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ImageCropComponent,
      selectors: [["app-image-crop"]],
      viewQuery: function ImageCropComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.imgContainerElement = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cropRectElement = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.imageElement = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvasElement = _t.first);
        }
      },
      inputs: {
        imageData: "imageData"
      },
      outputs: {
        croppedImage: "croppedImage",
        isCropping: "isCropping"
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 18,
      vars: 7,
      consts: [["imageContainer", ""], ["image", ""], ["cropRect", ""], ["canvas", ""], [1, "crop-container"], [1, "image-container", 3, "dragover"], [3, "src"], [1, "crop-rect", 3, "ngStyle"], ["draggable", "true", 1, "crop-rect-right", 3, "dragstart", "touchmove"], [1, "circle"], ["draggable", "true", 1, "crop-rect-left", 3, "dragstart", "touchmove"], ["draggable", "true", 1, "crop-rect-bottom", 3, "dragstart", "touchmove"], ["draggable", "true", 1, "crop-rect-top", 3, "dragstart", "touchmove"], [2, "display", "none"]],
      template: function ImageCropComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 4)(2, "div", 5, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragover", function ImageCropComponent_Template_div_dragover_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onDragOver($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 6, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7, 2)(8, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragstart", function ImageCropComponent_Template_div_dragstart_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onDragStart("right", $event));
          })("touchmove", function ImageCropComponent_Template_div_touchmove_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onTouchDrag("right", $event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragstart", function ImageCropComponent_Template_div_dragstart_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onDragStart("left", $event));
          })("touchmove", function ImageCropComponent_Template_div_touchmove_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onTouchDrag("left", $event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragstart", function ImageCropComponent_Template_div_dragstart_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onDragStart("bottom", $event));
          })("touchmove", function ImageCropComponent_Template_div_touchmove_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onTouchDrag("bottom", $event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragstart", function ImageCropComponent_Template_div_dragstart_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onDragStart("top", $event));
          })("touchmove", function ImageCropComponent_Template_div_touchmove_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onTouchDrag("top", $event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "canvas", 13, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imageData, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](2, _c4, ctx.topOffset, ctx.bottomOffset, ctx.leftOffset, ctx.rightOffset));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle],
      styles: [".crop-container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.image-container[_ngcontent-%COMP%] {\n  margin: auto;\n  display: inline-block;\n  position: relative;\n}\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: calc(100vh - 30px);\n  object-fit: scale-down;\n}\n.image-container[_ngcontent-%COMP%]   .crop-rect[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.image-container[_ngcontent-%COMP%]   .crop-rect-left[_ngcontent-%COMP%], .image-container[_ngcontent-%COMP%]   .crop-rect-right[_ngcontent-%COMP%], .image-container[_ngcontent-%COMP%]   .crop-rect-top[_ngcontent-%COMP%], .image-container[_ngcontent-%COMP%]   .crop-rect-bottom[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: red;\n}\n.image-container[_ngcontent-%COMP%]   .crop-rect-left[_ngcontent-%COMP%] {\n  left: 0;\n  height: 100%;\n  width: 2px;\n  cursor: ew-resize;\n}\n.image-container[_ngcontent-%COMP%]   .crop-rect-right[_ngcontent-%COMP%] {\n  right: 0;\n  height: 100%;\n  width: 2px;\n  cursor: ew-resize;\n}\n.image-container[_ngcontent-%COMP%]   .crop-rect-top[_ngcontent-%COMP%] {\n  top: 0;\n  width: 100%;\n  height: 2px;\n  cursor: ns-resize;\n}\n.image-container[_ngcontent-%COMP%]   .crop-rect-bottom[_ngcontent-%COMP%] {\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  cursor: ns-resize;\n}\n.image-container[_ngcontent-%COMP%]   .crop-rect[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background-color: red;\n  width: 20px;\n  height: 20px;\n  position: absolute;\n}\n.image-container[_ngcontent-%COMP%]   .crop-rect-left[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%], .image-container[_ngcontent-%COMP%]   .crop-rect-right[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  top: calc(50% - 10px);\n  left: -10px;\n}\n.image-container[_ngcontent-%COMP%]   .crop-rect-top[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%], .image-container[_ngcontent-%COMP%]   .crop-rect-bottom[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  left: calc(50% - 10px);\n  top: -10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tbW9uL2NvbXBvbmVudHMvaW1hZ2UtY3JvcC9pbWFnZS1jcm9wLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFDQTtFQUVFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLFdBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0FBQ0o7QUFHRTtFQUdFLGtCQUFBO0FBSEo7QUFJSTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUFGTjtBQUlJO0VBQ0UsT0FBQTtFQUNBLFlBQUE7RUFDQSxVQVpVO0VBYVYsaUJBQUE7QUFGTjtBQUlJO0VBQ0UsUUFBQTtFQUNBLFlBQUE7RUFDQSxVQWxCVTtFQW1CVixpQkFBQTtBQUZOO0FBSUk7RUFDRSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFdBeEJVO0VBeUJWLGlCQUFBO0FBRk47QUFJSTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0E5QlU7RUErQlYsaUJBQUE7QUFGTjtBQU1JO0VBQ0UsbUJBRmM7RUFHZCxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFKTjtBQU9JO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0FBTE47QUFRSTtFQUNFLHNCQUFBO0VBQ0EsVUFBQTtBQU5OIiwic291cmNlc0NvbnRlbnQiOlsiLmNyb3AtY29udGFpbmVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmltYWdlLWNvbnRhaW5lciB7XHJcblxyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzBweCk7XHJcbiAgICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xyXG4gIH1cclxuXHJcbiAgJGJvcmRlcl9zaXplOiAycHg7XHJcbiAgLmNyb3AtcmVjdCB7XHJcbiAgICAkY3JvcF9yZWN0OiAmO1xyXG5cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICYtbGVmdCwgJi1yaWdodCwgJi10b3AsICYtYm90dG9te1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIH1cclxuICAgICYtbGVmdCB7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6ICRib3JkZXJfc2l6ZTtcclxuICAgICAgY3Vyc29yOiBldy1yZXNpemU7XHJcbiAgICB9XHJcbiAgICAmLXJpZ2h0IHtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6ICRib3JkZXJfc2l6ZTtcclxuICAgICAgY3Vyc29yOiBldy1yZXNpemU7XHJcbiAgICB9XHJcbiAgICAmLXRvcCB7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogJGJvcmRlcl9zaXplO1xyXG4gICAgICBjdXJzb3I6IG5zLXJlc2l6ZTtcclxuICAgIH1cclxuICAgICYtYm90dG9tIHtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAkYm9yZGVyX3NpemU7XHJcbiAgICAgIGN1cnNvcjogbnMtcmVzaXplO1xyXG4gICAgfVxyXG5cclxuICAgICRjaXJjbGVfcmFkaXVzOiAxMHB4O1xyXG4gICAgLmNpcmNsZSB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRjaXJjbGVfcmFkaXVzO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgIHdpZHRoOiAjeyRjaXJjbGVfcmFkaXVzKjJ9O1xyXG4gICAgICBoZWlnaHQ6ICN7JGNpcmNsZV9yYWRpdXMqMn07XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIH1cclxuXHJcbiAgICAmLWxlZnQgLmNpcmNsZSwgJi1yaWdodCAuY2lyY2xle1xyXG4gICAgICB0b3A6IGNhbGMoNTAlIC0gI3skY2lyY2xlX3JhZGl1c30pO1xyXG4gICAgICBsZWZ0OiAtJGNpcmNsZV9yYWRpdXM7XHJcbiAgICB9XHJcblxyXG4gICAgJi10b3AgLmNpcmNsZSwgJi1ib3R0b20gLmNpcmNsZXtcclxuICAgICAgbGVmdDogY2FsYyg1MCUgLSAjeyRjaXJjbGVfcmFkaXVzfSk7XHJcbiAgICAgIHRvcDogLSRjaXJjbGVfcmFkaXVzO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_common_components_components_module_ts-src_app_common_utils_ImageFileReader_ts.js.map