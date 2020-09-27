!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(s){i=!0,o=s}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(e,n)||t(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{jtF9:function(n,i,a){"use strict";a.r(i),a.d(i,"QrModule",(function(){return I}));var c=a("ofXK"),s=a("tyNb"),u=a("HDdC"),l=a("LRne"),h=function(){function n(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this._onDecodeError.bind(this),o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n.DEFAULT_CANVAS_SIZE,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"environment";r(this,n),this.$video=e,this.$canvas=document.createElement("canvas"),this._onDecode=t,this._preferredFacingMode=a,this._active=!1,this._paused=!1,this._flashOn=!1,"number"==typeof i?(o=i,console.warn("You're using a deprecated version of the QrScanner constructor which will be removed in the future")):this._onDecodeError=i,this.$canvas.width=o,this.$canvas.height=o,this._sourceRect={x:0,y:0,width:o,height:o},this._updateSourceRect=this._updateSourceRect.bind(this),this._onPlay=this._onPlay.bind(this),this._onVisibilityChange=this._onVisibilityChange.bind(this),this.$video.playsInline=!0,this.$video.muted=!0,this.$video.disablePictureInPicture=!0,this.$video.addEventListener("loadedmetadata",this._updateSourceRect),this.$video.addEventListener("play",this._onPlay),document.addEventListener("visibilitychange",this._onVisibilityChange),this._qrEnginePromise=n.createQrEngine()}return o(n,null,[{key:"hasCamera",value:function(){return navigator.mediaDevices?navigator.mediaDevices.enumerateDevices().then((function(e){return e.some((function(e){return"videoinput"===e.kind}))})).catch((function(){return!1})):Promise.resolve(!1)}}]),o(n,[{key:"hasFlash",value:function(){if(!("ImageCapture"in window))return Promise.resolve(!1);var e=this.$video.srcObject?this.$video.srcObject.getVideoTracks()[0]:null;return e?new ImageCapture(e).getPhotoCapabilities().then((function(e){return e.fillLightMode.includes("flash")})).catch((function(e){return console.warn(e),!1})):Promise.reject("Camera not started or not available")}},{key:"isFlashOn",value:function(){return this._flashOn}},{key:"toggleFlash",value:function(){return this._setFlash(!this._flashOn)}},{key:"turnFlashOff",value:function(){return this._setFlash(!1)}},{key:"turnFlashOn",value:function(){return this._setFlash(!0)}},{key:"destroy",value:function(){this.$video.removeEventListener("loadedmetadata",this._updateSourceRect),this.$video.removeEventListener("play",this._onPlay),document.removeEventListener("visibilitychange",this._onVisibilityChange),this.stop(),n._postWorkerMessage(this._qrEnginePromise,"close")}},{key:"start",value:function(){var e=this;if(this._active&&!this._paused)return Promise.resolve();if("https:"!==window.location.protocol&&console.warn("The camera stream is only accessible if the page is transferred via https."),this._active=!0,this._paused=!1,document.hidden)return Promise.resolve();if(clearTimeout(this._offTimeout),this._offTimeout=null,this.$video.srcObject)return this.$video.play(),Promise.resolve();var t=this._preferredFacingMode;return this._getCameraStream(t,!0).catch((function(){return t="environment"===t?"user":"environment",e._getCameraStream()})).then((function(n){t=e._getFacingMode(n)||t,e.$video.srcObject=n,e.$video.play(),e._setVideoMirror(t)})).catch((function(t){throw e._active=!1,t}))}},{key:"stop",value:function(){this.pause(),this._active=!1}},{key:"pause",value:function(){var e=this;this._paused=!0,this._active&&(this.$video.pause(),this._offTimeout||(this._offTimeout=setTimeout((function(){var n,r=function(e,n){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=t(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){s=!0,a=e},f:function(){try{c||null==r.return||r.return()}finally{if(s)throw a}}}}(e.$video.srcObject?e.$video.srcObject.getTracks():[]);try{for(r.s();!(n=r.n()).done;){n.value.stop()}}catch(i){r.e(i)}finally{r.f()}e.$video.srcObject=null,e._offTimeout=null}),300)))}},{key:"setGrayscaleWeights",value:function(e,t,r){var i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];n._postWorkerMessage(this._qrEnginePromise,"grayscaleWeights",{red:e,green:t,blue:r,useIntegerApproximation:i})}},{key:"setInversionMode",value:function(e){n._postWorkerMessage(this._qrEnginePromise,"inversionMode",e)}},{key:"_onPlay",value:function(){this._updateSourceRect(),this._scanFrame()}},{key:"_onVisibilityChange",value:function(){document.hidden?this.pause():this._active&&this.start()}},{key:"_updateSourceRect",value:function(){var e=Math.min(this.$video.videoWidth,this.$video.videoHeight),t=Math.round(2/3*e);this._sourceRect.width=this._sourceRect.height=t,this._sourceRect.x=(this.$video.videoWidth-t)/2,this._sourceRect.y=(this.$video.videoHeight-t)/2}},{key:"_scanFrame",value:function(){var e=this;if(!this._active||this.$video.paused||this.$video.ended)return!1;requestAnimationFrame((function(){e.$video.readyState<=1?e._scanFrame():e._qrEnginePromise.then((function(t){return n.scanImage(e.$video,e._sourceRect,t,e.$canvas,!0)})).then(e._onDecode,(function(t){e._active&&(-1!==(t.message||t).indexOf("service unavailable")&&(e._qrEnginePromise=n.createQrEngine()),e._onDecodeError(t))})).then((function(){return e._scanFrame()}))}))}},{key:"_onDecodeError",value:function(e){e!==n.NO_QR_CODE_FOUND&&console.log(e)}},{key:"_getCameraStream",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[{width:{min:1024}},{width:{min:768}},{}];return e&&(t&&(e={exact:e}),n.forEach((function(t){return t.facingMode=e}))),this._getMatchingCameraStream(n)}},{key:"_getMatchingCameraStream",value:function(e){var t=this;return navigator.mediaDevices&&0!==e.length?navigator.mediaDevices.getUserMedia({video:e.shift()}).catch((function(){return t._getMatchingCameraStream(e)})):Promise.reject("Camera not found.")}},{key:"_setFlash",value:function(e){var t=this;return this.hasFlash().then((function(n){return n?t.$video.srcObject.getVideoTracks()[0].applyConstraints({advanced:[{torch:e}]}):Promise.reject("No flash available")})).then((function(){return t._flashOn=e}))}},{key:"_setVideoMirror",value:function(e){this.$video.style.transform="scaleX("+("user"===e?-1:1)+")"}},{key:"_getFacingMode",value:function(e){var t=e.getVideoTracks()[0];return t?/rear|back|environment/i.test(t.label)?"environment":/front|user|face/i.test(t.label)?"user":null:null}}],[{key:"scanImage",value:function(t){var r=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,c=arguments.length>4&&void 0!==arguments[4]&&arguments[4],s=arguments.length>5&&void 0!==arguments[5]&&arguments[5],u=o instanceof Worker,l=Promise.all([o||n.createQrEngine(),n._loadImage(t)]).then((function(t){var s,l,h=e(t,2),d=h[0],v=h[1];return o=d,s=e(r._drawToCanvas(v,i,a,c),2),a=s[0],l=s[1],o instanceof Worker?(u||o.postMessage({type:"inversionMode",data:"both"}),new Promise((function(e,t){var r,i,c;i=function(a){"qrResult"===a.data.type&&(o.removeEventListener("message",i),o.removeEventListener("error",c),clearTimeout(r),null!==a.data.data?e(a.data.data):t(n.NO_QR_CODE_FOUND))},c=function(e){o.removeEventListener("message",i),o.removeEventListener("error",c),clearTimeout(r),t("Scanner error: "+(e?e.message||e:"Unknown Error"))},o.addEventListener("message",i),o.addEventListener("error",c),r=setTimeout((function(){return c("timeout")}),1e4);var s=l.getImageData(0,0,a.width,a.height);o.postMessage({type:"decode",data:s},[s.data.buffer])}))):new Promise((function(e,t){var r=setTimeout((function(){return t("Scanner error: timeout")}),1e4);o.detect(a).then((function(r){r.length?e(r[0].rawValue):t(n.NO_QR_CODE_FOUND)})).catch((function(e){return t("Scanner error: "+(e.message||e))})).finally((function(){return clearTimeout(r)}))}))}));return i&&s&&(l=l.catch((function(){return n.scanImage(t,null,o,a,c)}))),l=l.finally((function(){u||n._postWorkerMessage(o,"close")}))}},{key:"createQrEngine",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.WORKER_PATH;return("BarcodeDetector"in window?BarcodeDetector.getSupportedFormats():Promise.resolve([])).then((function(t){return-1!==t.indexOf("qr_code")?new BarcodeDetector({formats:["qr_code"]}):new Worker(e)}))}},{key:"_drawToCanvas",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];n=n||document.createElement("canvas");var i=t&&t.x?t.x:0,o=t&&t.y?t.y:0,a=t&&t.width?t.width:e.width||e.videoWidth,c=t&&t.height?t.height:e.height||e.videoHeight;r||n.width===a&&n.height===c||(n.width=a,n.height=c);var s=n.getContext("2d",{alpha:!1});return s.imageSmoothingEnabled=!1,s.drawImage(e,i,o,a,c,0,0,n.width,n.height),[n,s]}},{key:"_loadImage",value:function(e){if(e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement||window.ImageBitmap&&e instanceof window.ImageBitmap||window.OffscreenCanvas&&e instanceof window.OffscreenCanvas)return Promise.resolve(e);if(e instanceof Image)return n._awaitImageLoad(e).then((function(){return e}));if(e instanceof File||e instanceof Blob||e instanceof URL||"string"==typeof e){var t=new Image;return t.src=e instanceof File||e instanceof Blob?URL.createObjectURL(e):e,n._awaitImageLoad(t).then((function(){return(e instanceof File||e instanceof Blob)&&URL.revokeObjectURL(t.src),t}))}return Promise.reject("Unsupported image type.")}},{key:"_awaitImageLoad",value:function(e){return new Promise((function(t,n){var r,i;e.complete&&0!==e.naturalWidth?t():(r=function(){e.removeEventListener("load",r),e.removeEventListener("error",i),t()},i=function(){e.removeEventListener("load",r),e.removeEventListener("error",i),n("Image load error")},e.addEventListener("load",r),e.addEventListener("error",i))}))}},{key:"_postWorkerMessage",value:function(e,t,n){return Promise.resolve(e).then((function(e){e instanceof Worker&&e.postMessage({type:t,data:n})}))}}]),n}();h.DEFAULT_CANVAS_SIZE=400,h.NO_QR_CODE_FOUND="No QR code found",h.WORKER_PATH="qr-scanner-worker.min.js";var d,v=a("vkgz"),f=a("eIep"),m=a("JIr8"),g=a("fXoL"),p=((d=function(){function e(){r(this,e)}return o(e,[{key:"ngOnInit",value:function(){console.log(this.imageData)}}]),e}()).\u0275fac=function(e){return new(e||d)},d.\u0275cmp=g.Gb({type:d,selectors:[["app-image-crop"]],inputs:{imageData:"imageData"},decls:7,vars:1,consts:[[1,"image-container"],[3,"src"],[1,"crop-rect"],[1,"crop-rect-left"],[1,"crop-rect-right"],[1,"crop-rect-top"],[1,"crop-rect-bottom"]],template:function(e,t){1&e&&(g.Sb(0,"div",0),g.Nb(1,"img",1),g.Sb(2,"div",2),g.Nb(3,"div",3),g.Nb(4,"div",4),g.Nb(5,"div",5),g.Nb(6,"div",6),g.Rb(),g.Rb()),2&e&&(g.Cb(1),g.hc("src",t.imageData,g.lc))},styles:[".image-container[_ngcontent-%COMP%]{width:calc(100vw - 30px);height:calc(100vh - 30px);margin:auto}"]}),d);function y(e,t){if(1&e&&(g.Sb(0,"div",3),g.rc(1),g.Rb()),2&e){var n=g.cc();g.Cb(1),g.sc(n.qrResult)}}function b(e,t){if(1&e&&(g.Sb(0,"div",4),g.rc(1),g.Nb(2,"app-image-crop",5),g.Rb()),2&e){var n=g.cc();g.Cb(1),g.tc(" ",n.qrError," "),g.Cb(1),g.hc("imageData",n.errImg.imageData)}}h.WORKER_PATH="/assets/service-workers/qr-scanner-worker.min.js";var _,w,k,E,O=[{path:"",component:(_=function(){function e(t){r(this,e),this.cdr=t}return o(e,[{key:"ngOnInit",value:function(){}},{key:"onError",value:function(t,n){var r=this;return Object(l.a)(n).pipe(Object(v.a)((function(e){r.qrError="Unable to find qr code in the image",console.warn(e)})),Object(f.a)((function(){return e.convertToImage(t)})),Object(v.a)((function(e){return r.errImg=e})))}},{key:"scan",value:function(e){var t=this;Object(l.a)(1).pipe(Object(v.a)((function(){return t.qrError=t.qrResult=""})),Object(f.a)((function(){return h.scanImage(e)})),Object(v.a)((function(e){return t.qrResult=e})),Object(m.a)((function(n){return t.onError(e,n)})),Object(v.a)((function(){return t.cdr.markForCheck()}))).subscribe()}},{key:"fileChanged",value:function(e){this.scan(e.target.files[0])}}],[{key:"convertToImage",value:function(e){return u.a.create((function(t){var n=new FileReader;n.onloadend=function(e){t.next({imageData:e.target.result}),t.complete()},n.onerror=function(){return t.error()},n.readAsDataURL(e)}))}}]),e}(),_.\u0275fac=function(e){return new(e||_)(g.Mb(g.h))},_.\u0275cmp=g.Gb({type:_,selectors:[["app-qr"]],decls:4,vars:2,consts:[["class","success",4,"ngIf"],["class","error",4,"ngIf"],["type","file","capture","environment","accept","image/*",3,"change"],[1,"success"],[1,"error"],[3,"imageData"]],template:function(e,t){1&e&&(g.qc(0,y,2,1,"div",0),g.qc(1,b,3,2,"div",1),g.rc(2,"\nUpload image with QR code\n"),g.Sb(3,"input",2),g.ac("change",(function(e){return t.fileChanged(e)})),g.Rb()),2&e&&(g.hc("ngIf",t.qrResult),g.Cb(1),g.hc("ngIf",t.qrError))},directives:[c.j,p],styles:[".success[_ngcontent-%COMP%]{color:rgba(25,102,63,.582)}.error[_ngcontent-%COMP%]{color:red}"],changeDetection:0}),_)}],C=((E=function e(){r(this,e)}).\u0275mod=g.Kb({type:E}),E.\u0275inj=g.Jb({factory:function(e){return new(e||E)},imports:[[s.e.forChild(O)],s.e]}),E),R=((k=function e(){r(this,e)}).\u0275mod=g.Kb({type:k}),k.\u0275inj=g.Jb({factory:function(e){return new(e||k)},imports:[[c.c]]}),k),I=((w=function e(){r(this,e)}).\u0275mod=g.Kb({type:w}),w.\u0275inj=g.Jb({factory:function(e){return new(e||w)},imports:[[c.c,R,C]]}),w)}}])}();