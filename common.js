"use strict";
(self["webpackChunkprog_tools"] = self["webpackChunkprog_tools"] || []).push([["common"],{

/***/ 1722:
/*!*************************************************************!*\
  !*** ./src/app/singapore-nric/generator/generator-logic.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateNric: () => (/* binding */ generateNric),
/* harmony export */   validateNric: () => (/* binding */ validateNric)
/* harmony export */ });
const st = ['J', 'Z', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];
const fg = ['X', 'W', 'U', 'T', 'R', 'Q', 'P', 'N', 'M', 'L', 'K'];
var YobType;
(function (YobType) {
  YobType[YobType["before1968"] = 0] = "before1968";
  YobType[YobType["between1968_1999"] = 1] = "between1968_1999";
  YobType[YobType["after2000"] = 2] = "after2000";
})(YobType || (YobType = {}));
const weights = [2, 7, 6, 5, 4, 3, 2];
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getCheckChar(startChar, nricNumber) {
  let checkSum = 0;
  for (let i = 0; i < 7; i++) {
    checkSum += nricNumber[i] * weights[i];
  }
  switch (startChar) {
    case 'T':
      checkSum += 4;
      break;
    case 'G':
      checkSum += 4;
      break;
  }
  const checkMod = Math.floor(checkSum % 11);
  switch (startChar) {
    case 'S':
    case 'T':
      return st[checkMod];
    case 'F':
    case 'G':
      return fg[checkMod];
  }
  return ' ';
}
function getDobType(yob) {
  if (yob < 1968) {
    return YobType.before1968;
  } else if (yob <= 1999) {
    return YobType.between1968_1999;
  } else {
    return YobType.after2000;
  }
}
function generateNric(first, yob) {
  const type = getDobType(yob);
  let startChar;
  const nricNumber = [];
  switch (first) {
    case 'S':
    case 'T':
      switch (type) {
        case YobType.before1968:
          // first digit 0 or 1.
          startChar = 'S';
          nricNumber.push(getRandomInt(0, 1));
          break;
        case YobType.between1968_1999:
          startChar = 'S';
          nricNumber.push(getRandomInt(6, 9));
          switch (nricNumber[0]) {
            case 6:
              nricNumber.push(getRandomInt(8, 9));
              break;
            default:
              nricNumber.push(getRandomInt(0, 9));
              break;
          }
          break;
        case YobType.after2000:
          startChar = 'T';
          const currentLast2Digit = yob % 100;
          const randomDigits = getRandomInt(0, currentLast2Digit);
          // eg 25 25mod10 =5 and 25/10=2
          nricNumber.push(Math.floor(randomDigits / 10));
          nricNumber.push(randomDigits % 10);
          break;
      }
      break;
    case 'F':
    case 'G':
      switch (type) {
        case YobType.before1968:
          // first digit 0 or 1.
          startChar = 'F';
          nricNumber.push(getRandomInt(0, 1));
          break;
        case YobType.between1968_1999:
          startChar = 'F';
          nricNumber.push(getRandomInt(6, 9));
          switch (nricNumber[0]) {
            case 6:
              nricNumber.push(getRandomInt(8, 9));
              break;
            default:
              nricNumber.push(getRandomInt(0, 9));
              break;
          }
          break;
        case YobType.after2000:
          startChar = 'G';
          const currentLast2Digit = yob % 100;
          const randomDigits = getRandomInt(0, currentLast2Digit);
          // eg 25 25mod10 =5 and 25/10=2
          nricNumber.push(Math.floor(randomDigits / 10));
          nricNumber.push(randomDigits % 10);
          break;
      }
      break;
  }
  for (let i = nricNumber.length; i < 7; i++) {
    nricNumber.push(getRandomInt(0, 9));
  }
  const checkChar = getCheckChar(startChar, nricNumber);
  return [startChar, ...nricNumber, checkChar].join('');
}
function validateNric(nric) {
  nric = nric.toUpperCase();
  if (nric.charAt(0) !== 'S' && nric.charAt(0) !== 'T' && nric.charAt(0) !== 'F' && nric.charAt(0) !== 'G') {
    return false;
  }
  if (!nric.match('[S,T,F,G](\\d){7}\\w')) {
    return false;
  }
  const icArray = nric.substr(1, 7).split('').map(value => +value);
  const checkChar = getCheckChar(nric.charAt(0), icArray);
  return nric.charAt(8) === checkChar;
}


/***/ }),

/***/ 2352:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/clipboard.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CDK_COPY_TO_CLIPBOARD_CONFIG: () => (/* binding */ CDK_COPY_TO_CLIPBOARD_CONFIG),
/* harmony export */   CdkCopyToClipboard: () => (/* binding */ CdkCopyToClipboard),
/* harmony export */   Clipboard: () => (/* binding */ Clipboard),
/* harmony export */   ClipboardModule: () => (/* binding */ ClipboardModule),
/* harmony export */   PendingCopy: () => (/* binding */ PendingCopy)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 9770);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);




/**
 * A pending copy-to-clipboard operation.
 *
 * The implementation of copying text to the clipboard modifies the DOM and
 * forces a re-layout. This re-layout can take too long if the string is large,
 * causing the execCommand('copy') to happen too long after the user clicked.
 * This results in the browser refusing to copy. This object lets the
 * re-layout happen in a separate tick from copying by providing a copy function
 * that can be called later.
 *
 * Destroy must be called when no longer in use, regardless of whether `copy` is
 * called.
 */
class PendingCopy {
  _document;
  _textarea;
  constructor(text, _document) {
    this._document = _document;
    const textarea = this._textarea = this._document.createElement('textarea');
    const styles = textarea.style;
    // Hide the element for display and accessibility. Set a fixed position so the page layout
    // isn't affected. We use `fixed` with `top: 0`, because focus is moved into the textarea
    // for a split second and if it's off-screen, some browsers will attempt to scroll it into view.
    styles.position = 'fixed';
    styles.top = styles.opacity = '0';
    styles.left = '-999em';
    textarea.setAttribute('aria-hidden', 'true');
    textarea.value = text;
    // Making the textarea `readonly` prevents the screen from jumping on iOS Safari (see #25169).
    textarea.readOnly = true;
    // The element needs to be inserted into the fullscreen container, if the page
    // is in fullscreen mode, otherwise the browser won't execute the copy command.
    (this._document.fullscreenElement || this._document.body).appendChild(textarea);
  }
  /** Finishes copying the text. */
  copy() {
    const textarea = this._textarea;
    let successful = false;
    try {
      // Older browsers could throw if copy is not supported.
      if (textarea) {
        const currentFocus = this._document.activeElement;
        textarea.select();
        textarea.setSelectionRange(0, textarea.value.length);
        successful = this._document.execCommand('copy');
        if (currentFocus) {
          currentFocus.focus();
        }
      }
    } catch {
      // Discard error.
      // Initial setting of {@code successful} will represent failure here.
    }
    return successful;
  }
  /** Cleans up DOM changes used to perform the copy operation. */
  destroy() {
    const textarea = this._textarea;
    if (textarea) {
      textarea.remove();
      this._textarea = undefined;
    }
  }
}

/**
 * A service for copying text to the clipboard.
 */
class Clipboard {
  _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT);
  constructor() {}
  /**
   * Copies the provided text into the user's clipboard.
   *
   * @param text The string to copy.
   * @returns Whether the operation was successful.
   */
  copy(text) {
    const pendingCopy = this.beginCopy(text);
    const successful = pendingCopy.copy();
    pendingCopy.destroy();
    return successful;
  }
  /**
   * Prepares a string to be copied later. This is useful for large strings
   * which take too long to successfully render and be copied in the same tick.
   *
   * The caller must call `destroy` on the returned `PendingCopy`.
   *
   * @param text The string to copy.
   * @returns the pending copy operation.
   */
  beginCopy(text) {
    return new PendingCopy(text, this._document);
  }
  static ɵfac = function Clipboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || Clipboard)();
  };
  static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: Clipboard,
    factory: Clipboard.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Clipboard, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [], null);
})();

/** Injection token that can be used to provide the default options to `CdkCopyToClipboard`. */
const CDK_COPY_TO_CLIPBOARD_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('CDK_COPY_TO_CLIPBOARD_CONFIG');
/**
 * Provides behavior for a button that when clicked copies content into user's
 * clipboard.
 */
class CdkCopyToClipboard {
  _clipboard = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(Clipboard);
  _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
  /** Content to be copied. */
  text = '';
  /**
   * How many times to attempt to copy the text. This may be necessary for longer text, because
   * the browser needs time to fill an intermediate textarea element and copy the content.
   */
  attempts = 1;
  /**
   * Emits when some text is copied to the clipboard. The
   * emitted value indicates whether copying was successful.
   */
  copied = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /** Copies that are currently being attempted. */
  _pending = new Set();
  /** Whether the directive has been destroyed. */
  _destroyed;
  /** Timeout for the current copy attempt. */
  _currentTimeout;
  constructor() {
    const config = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(CDK_COPY_TO_CLIPBOARD_CONFIG, {
      optional: true
    });
    if (config && config.attempts != null) {
      this.attempts = config.attempts;
    }
  }
  /** Copies the current text to the clipboard. */
  copy(attempts = this.attempts) {
    if (attempts > 1) {
      let remainingAttempts = attempts;
      const pending = this._clipboard.beginCopy(this.text);
      this._pending.add(pending);
      const attempt = () => {
        const successful = pending.copy();
        if (!successful && --remainingAttempts && !this._destroyed) {
          // We use 1 for the timeout since it's more predictable when flushing in unit tests.
          this._currentTimeout = this._ngZone.runOutsideAngular(() => setTimeout(attempt, 1));
        } else {
          this._currentTimeout = null;
          this._pending.delete(pending);
          pending.destroy();
          this.copied.emit(successful);
        }
      };
      attempt();
    } else {
      this.copied.emit(this._clipboard.copy(this.text));
    }
  }
  ngOnDestroy() {
    if (this._currentTimeout) {
      clearTimeout(this._currentTimeout);
    }
    this._pending.forEach(copy => copy.destroy());
    this._pending.clear();
    this._destroyed = true;
  }
  static ɵfac = function CdkCopyToClipboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CdkCopyToClipboard)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: CdkCopyToClipboard,
    selectors: [["", "cdkCopyToClipboard", ""]],
    hostBindings: function CdkCopyToClipboard_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CdkCopyToClipboard_click_HostBindingHandler() {
          return ctx.copy();
        });
      }
    },
    inputs: {
      text: [0, "cdkCopyToClipboard", "text"],
      attempts: [0, "cdkCopyToClipboardAttempts", "attempts"]
    },
    outputs: {
      copied: "cdkCopyToClipboardCopied"
    }
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkCopyToClipboard, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[cdkCopyToClipboard]',
      host: {
        '(click)': 'copy()'
      }
    }]
  }], () => [], {
    text: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['cdkCopyToClipboard']
    }],
    attempts: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['cdkCopyToClipboardAttempts']
    }],
    copied: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['cdkCopyToClipboardCopied']
    }]
  });
})();
class ClipboardModule {
  static ɵfac = function ClipboardModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ClipboardModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: ClipboardModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClipboardModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [CdkCopyToClipboard],
      exports: [CdkCopyToClipboard]
    }]
  }], null, null);
})();


/***/ }),

/***/ 3709:
/*!***************************************************************************************************************!*\
  !*** ./src/app/common/components/ux/prog-input-type-one/prog-input-type-one/prog-input-type-one.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProgInputTypeOneComponent: () => (/* binding */ ProgInputTypeOneComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 9902);





class ProgInputTypeOneComponent {
  get value() {
    return this._value;
  }
  set value(value) {
    this.propagateChange(value);
    this._value = value;
  }
  writeValue(value) {
    this.value = value;
  }
  registerOnChange(fn) {
    this.propagateChange = fn;
  }
  registerOnTouched(fn) {}
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  constructor() {
    this.type = 'input';
    this.disabled = false;
    this.propagateChange = _ => {};
  }
  ngOnInit() {}
  onValueChange(value) {
    this.value = value;
  }
  static {
    this.ɵfac = function ProgInputTypeOneComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProgInputTypeOneComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProgInputTypeOneComponent,
      selectors: [["app-prog-input-type-one"]],
      inputs: {
        label: "label",
        type: "type"
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => ProgInputTypeOneComponent),
        multi: true
      }])],
      decls: 4,
      vars: 5,
      consts: [["appearance", "outline"], ["matInput", "", 3, "ngModelChange", "placeholder", "type", "ngModel", "disabled"]],
      template: function ProgInputTypeOneComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0)(1, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function ProgInputTypeOneComponent_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.value, $event) || (ctx.value = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProgInputTypeOneComponent_Template_input_ngModelChange_3_listener($event) {
            return ctx.onValueChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.label)("type", ctx.type);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.value);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_material_input__WEBPACK_IMPORTED_MODULE_2__.MatInput, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.j, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.M],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 4466:
/*!*************************************************************!*\
  !*** ./src/app/time/clock/services/seconds-tick.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SecondsTickService: () => (/* binding */ SecondsTickService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6109);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5219);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3261);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6320);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 8742);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);



class SecondsTickService {
  constructor() {
    this.secondsTickers$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.timer)(0, 150).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(() => Date.now()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)((old, current) => {
      return Math.trunc(current / 1000) === Math.trunc(old / 1000);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.multicast)(() => new rxjs__WEBPACK_IMPORTED_MODULE_4__.ReplaySubject(1)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.refCount)());
  }
  getSeconds$() {
    return this.secondsTickers$;
  }
  static {
    this.ɵfac = function SecondsTickService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SecondsTickService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: SecondsTickService,
      factory: SecondsTickService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 7746:
/*!****************************************************************************************!*\
  !*** ./src/app/common/components/ux/prog-input-type-one/prog-input-type-one.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProgInputTypeOneModule: () => (/* binding */ ProgInputTypeOneModule)
/* harmony export */ });
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _prog_input_type_one_prog_input_type_one_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prog-input-type-one/prog-input-type-one.component */ 3709);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);





class ProgInputTypeOneModule {
  static {
    this.ɵfac = function ProgInputTypeOneModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProgInputTypeOneModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ProgInputTypeOneModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProgInputTypeOneModule, {
    declarations: [_prog_input_type_one_prog_input_type_one_component__WEBPACK_IMPORTED_MODULE_0__.ProgInputTypeOneComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule],
    exports: [_prog_input_type_one_prog_input_type_one_component__WEBPACK_IMPORTED_MODULE_0__.ProgInputTypeOneComponent]
  });
})();

/***/ }),

/***/ 8811:
/*!*******************************************!*\
  !*** ./node_modules/js-base64/base64.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Base64: () => (/* binding */ gBase64),
/* harmony export */   VERSION: () => (/* binding */ VERSION),
/* harmony export */   atob: () => (/* binding */ _atob),
/* harmony export */   atobPolyfill: () => (/* binding */ atobPolyfill),
/* harmony export */   btoa: () => (/* binding */ _btoa),
/* harmony export */   btoaPolyfill: () => (/* binding */ btoaPolyfill),
/* harmony export */   btou: () => (/* binding */ btou),
/* harmony export */   decode: () => (/* binding */ decode),
/* harmony export */   encode: () => (/* binding */ encode),
/* harmony export */   encodeURI: () => (/* binding */ encodeURI),
/* harmony export */   encodeURL: () => (/* binding */ encodeURI),
/* harmony export */   extendBuiltins: () => (/* binding */ extendBuiltins),
/* harmony export */   extendString: () => (/* binding */ extendString),
/* harmony export */   extendUint8Array: () => (/* binding */ extendUint8Array),
/* harmony export */   fromBase64: () => (/* binding */ decode),
/* harmony export */   fromUint8Array: () => (/* binding */ fromUint8Array),
/* harmony export */   isValid: () => (/* binding */ isValid),
/* harmony export */   toBase64: () => (/* binding */ encode),
/* harmony export */   toUint8Array: () => (/* binding */ toUint8Array),
/* harmony export */   utob: () => (/* binding */ utob),
/* harmony export */   version: () => (/* binding */ version)
/* harmony export */ });
/**
 *  base64.ts
 *
 *  Licensed under the BSD 3-Clause License.
 *    http://opensource.org/licenses/BSD-3-Clause
 *
 *  References:
 *    http://en.wikipedia.org/wiki/Base64
 *
 * @author Dan Kogai (https://github.com/dankogai)
 */
const version = '3.7.5';
/**
 * @deprecated use lowercase `version`.
 */
const VERSION = version;
const _hasatob = typeof atob === 'function';
const _hasbtoa = typeof btoa === 'function';
const _hasBuffer = typeof Buffer === 'function';
const _TD = typeof TextDecoder === 'function' ? new TextDecoder() : undefined;
const _TE = typeof TextEncoder === 'function' ? new TextEncoder() : undefined;
const b64ch = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
const b64chs = Array.prototype.slice.call(b64ch);
const b64tab = (a => {
  let tab = {};
  a.forEach((c, i) => tab[c] = i);
  return tab;
})(b64chs);
const b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
const _fromCC = String.fromCharCode.bind(String);
const _U8Afrom = typeof Uint8Array.from === 'function' ? Uint8Array.from.bind(Uint8Array) : it => new Uint8Array(Array.prototype.slice.call(it, 0));
const _mkUriSafe = src => src.replace(/=/g, '').replace(/[+\/]/g, m0 => m0 == '+' ? '-' : '_');
const _tidyB64 = s => s.replace(/[^A-Za-z0-9\+\/]/g, '');
/**
 * polyfill version of `btoa`
 */
const btoaPolyfill = bin => {
  // console.log('polyfilled');
  let u32,
    c0,
    c1,
    c2,
    asc = '';
  const pad = bin.length % 3;
  for (let i = 0; i < bin.length;) {
    if ((c0 = bin.charCodeAt(i++)) > 255 || (c1 = bin.charCodeAt(i++)) > 255 || (c2 = bin.charCodeAt(i++)) > 255) throw new TypeError('invalid character found');
    u32 = c0 << 16 | c1 << 8 | c2;
    asc += b64chs[u32 >> 18 & 63] + b64chs[u32 >> 12 & 63] + b64chs[u32 >> 6 & 63] + b64chs[u32 & 63];
  }
  return pad ? asc.slice(0, pad - 3) + "===".substring(pad) : asc;
};
/**
 * does what `window.btoa` of web browsers do.
 * @param {String} bin binary string
 * @returns {string} Base64-encoded string
 */
const _btoa = _hasbtoa ? bin => btoa(bin) : _hasBuffer ? bin => Buffer.from(bin, 'binary').toString('base64') : btoaPolyfill;
const _fromUint8Array = _hasBuffer ? u8a => Buffer.from(u8a).toString('base64') : u8a => {
  // cf. https://stackoverflow.com/questions/12710001/how-to-convert-uint8-array-to-base64-encoded-string/12713326#12713326
  const maxargs = 0x1000;
  let strs = [];
  for (let i = 0, l = u8a.length; i < l; i += maxargs) {
    strs.push(_fromCC.apply(null, u8a.subarray(i, i + maxargs)));
  }
  return _btoa(strs.join(''));
};
/**
 * converts a Uint8Array to a Base64 string.
 * @param {boolean} [urlsafe] URL-and-filename-safe a la RFC4648 §5
 * @returns {string} Base64 string
 */
const fromUint8Array = (u8a, urlsafe = false) => urlsafe ? _mkUriSafe(_fromUint8Array(u8a)) : _fromUint8Array(u8a);
// This trick is found broken https://github.com/dankogai/js-base64/issues/130
// const utob = (src: string) => unescape(encodeURIComponent(src));
// reverting good old fationed regexp
const cb_utob = c => {
  if (c.length < 2) {
    var cc = c.charCodeAt(0);
    return cc < 0x80 ? c : cc < 0x800 ? _fromCC(0xc0 | cc >>> 6) + _fromCC(0x80 | cc & 0x3f) : _fromCC(0xe0 | cc >>> 12 & 0x0f) + _fromCC(0x80 | cc >>> 6 & 0x3f) + _fromCC(0x80 | cc & 0x3f);
  } else {
    var cc = 0x10000 + (c.charCodeAt(0) - 0xD800) * 0x400 + (c.charCodeAt(1) - 0xDC00);
    return _fromCC(0xf0 | cc >>> 18 & 0x07) + _fromCC(0x80 | cc >>> 12 & 0x3f) + _fromCC(0x80 | cc >>> 6 & 0x3f) + _fromCC(0x80 | cc & 0x3f);
  }
};
const re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
/**
 * @deprecated should have been internal use only.
 * @param {string} src UTF-8 string
 * @returns {string} UTF-16 string
 */
const utob = u => u.replace(re_utob, cb_utob);
//
const _encode = _hasBuffer ? s => Buffer.from(s, 'utf8').toString('base64') : _TE ? s => _fromUint8Array(_TE.encode(s)) : s => _btoa(utob(s));
/**
 * converts a UTF-8-encoded string to a Base64 string.
 * @param {boolean} [urlsafe] if `true` make the result URL-safe
 * @returns {string} Base64 string
 */
const encode = (src, urlsafe = false) => urlsafe ? _mkUriSafe(_encode(src)) : _encode(src);
/**
 * converts a UTF-8-encoded string to URL-safe Base64 RFC4648 §5.
 * @returns {string} Base64 string
 */
const encodeURI = src => encode(src, true);
// This trick is found broken https://github.com/dankogai/js-base64/issues/130
// const btou = (src: string) => decodeURIComponent(escape(src));
// reverting good old fationed regexp
const re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
const cb_btou = cccc => {
  switch (cccc.length) {
    case 4:
      var cp = (0x07 & cccc.charCodeAt(0)) << 18 | (0x3f & cccc.charCodeAt(1)) << 12 | (0x3f & cccc.charCodeAt(2)) << 6 | 0x3f & cccc.charCodeAt(3),
        offset = cp - 0x10000;
      return _fromCC((offset >>> 10) + 0xD800) + _fromCC((offset & 0x3FF) + 0xDC00);
    case 3:
      return _fromCC((0x0f & cccc.charCodeAt(0)) << 12 | (0x3f & cccc.charCodeAt(1)) << 6 | 0x3f & cccc.charCodeAt(2));
    default:
      return _fromCC((0x1f & cccc.charCodeAt(0)) << 6 | 0x3f & cccc.charCodeAt(1));
  }
};
/**
 * @deprecated should have been internal use only.
 * @param {string} src UTF-16 string
 * @returns {string} UTF-8 string
 */
const btou = b => b.replace(re_btou, cb_btou);
/**
 * polyfill version of `atob`
 */
const atobPolyfill = asc => {
  // console.log('polyfilled');
  asc = asc.replace(/\s+/g, '');
  if (!b64re.test(asc)) throw new TypeError('malformed base64.');
  asc += '=='.slice(2 - (asc.length & 3));
  let u24,
    bin = '',
    r1,
    r2;
  for (let i = 0; i < asc.length;) {
    u24 = b64tab[asc.charAt(i++)] << 18 | b64tab[asc.charAt(i++)] << 12 | (r1 = b64tab[asc.charAt(i++)]) << 6 | (r2 = b64tab[asc.charAt(i++)]);
    bin += r1 === 64 ? _fromCC(u24 >> 16 & 255) : r2 === 64 ? _fromCC(u24 >> 16 & 255, u24 >> 8 & 255) : _fromCC(u24 >> 16 & 255, u24 >> 8 & 255, u24 & 255);
  }
  return bin;
};
/**
 * does what `window.atob` of web browsers do.
 * @param {String} asc Base64-encoded string
 * @returns {string} binary string
 */
const _atob = _hasatob ? asc => atob(_tidyB64(asc)) : _hasBuffer ? asc => Buffer.from(asc, 'base64').toString('binary') : atobPolyfill;
//
const _toUint8Array = _hasBuffer ? a => _U8Afrom(Buffer.from(a, 'base64')) : a => _U8Afrom(_atob(a).split('').map(c => c.charCodeAt(0)));
/**
 * converts a Base64 string to a Uint8Array.
 */
const toUint8Array = a => _toUint8Array(_unURI(a));
//
const _decode = _hasBuffer ? a => Buffer.from(a, 'base64').toString('utf8') : _TD ? a => _TD.decode(_toUint8Array(a)) : a => btou(_atob(a));
const _unURI = a => _tidyB64(a.replace(/[-_]/g, m0 => m0 == '-' ? '+' : '/'));
/**
 * converts a Base64 string to a UTF-8 string.
 * @param {String} src Base64 string.  Both normal and URL-safe are supported
 * @returns {string} UTF-8 string
 */
const decode = src => _decode(_unURI(src));
/**
 * check if a value is a valid Base64 string
 * @param {String} src a value to check
  */
const isValid = src => {
  if (typeof src !== 'string') return false;
  const s = src.replace(/\s+/g, '').replace(/={0,2}$/, '');
  return !/[^\s0-9a-zA-Z\+/]/.test(s) || !/[^\s0-9a-zA-Z\-_]/.test(s);
};
//
const _noEnum = v => {
  return {
    value: v,
    enumerable: false,
    writable: true,
    configurable: true
  };
};
/**
 * extend String.prototype with relevant methods
 */
const extendString = function () {
  const _add = (name, body) => Object.defineProperty(String.prototype, name, _noEnum(body));
  _add('fromBase64', function () {
    return decode(this);
  });
  _add('toBase64', function (urlsafe) {
    return encode(this, urlsafe);
  });
  _add('toBase64URI', function () {
    return encode(this, true);
  });
  _add('toBase64URL', function () {
    return encode(this, true);
  });
  _add('toUint8Array', function () {
    return toUint8Array(this);
  });
};
/**
 * extend Uint8Array.prototype with relevant methods
 */
const extendUint8Array = function () {
  const _add = (name, body) => Object.defineProperty(Uint8Array.prototype, name, _noEnum(body));
  _add('toBase64', function (urlsafe) {
    return fromUint8Array(this, urlsafe);
  });
  _add('toBase64URI', function () {
    return fromUint8Array(this, true);
  });
  _add('toBase64URL', function () {
    return fromUint8Array(this, true);
  });
};
/**
 * extend Builtin prototypes with relevant methods
 */
const extendBuiltins = () => {
  extendString();
  extendUint8Array();
};
const gBase64 = {
  version: version,
  VERSION: VERSION,
  atob: _atob,
  atobPolyfill: atobPolyfill,
  btoa: _btoa,
  btoaPolyfill: btoaPolyfill,
  fromBase64: decode,
  toBase64: encode,
  encode: encode,
  encodeURI: encodeURI,
  encodeURL: encodeURI,
  utob: utob,
  btou: btou,
  decode: decode,
  isValid: isValid,
  fromUint8Array: fromUint8Array,
  toUint8Array: toUint8Array,
  extendString: extendString,
  extendUint8Array: extendUint8Array,
  extendBuiltins: extendBuiltins
};
// makecjs:CUT //




















// and finally,


/***/ })

}]);
//# sourceMappingURL=common.js.map