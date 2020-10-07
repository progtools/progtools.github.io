(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{S5Eb:function(e,t,i){"use strict";i.r(t),i.d(t,"QrModule",(function(){return F}));var n=i("ofXK"),r=i("tyNb"),s=i("HDdC"),a=i("LRne");class o{static hasCamera(){return navigator.mediaDevices?navigator.mediaDevices.enumerateDevices().then(e=>e.some(e=>"videoinput"===e.kind)).catch(()=>!1):Promise.resolve(!1)}constructor(e,t,i=this._onDecodeError.bind(this),n=o.DEFAULT_CANVAS_SIZE,r="environment"){this.$video=e,this.$canvas=document.createElement("canvas"),this._onDecode=t,this._preferredFacingMode=r,this._active=!1,this._paused=!1,this._flashOn=!1,"number"==typeof i?(n=i,console.warn("You're using a deprecated version of the QrScanner constructor which will be removed in the future")):this._onDecodeError=i,this.$canvas.width=n,this.$canvas.height=n,this._sourceRect={x:0,y:0,width:n,height:n},this._updateSourceRect=this._updateSourceRect.bind(this),this._onPlay=this._onPlay.bind(this),this._onVisibilityChange=this._onVisibilityChange.bind(this),this.$video.playsInline=!0,this.$video.muted=!0,this.$video.disablePictureInPicture=!0,this.$video.addEventListener("loadedmetadata",this._updateSourceRect),this.$video.addEventListener("play",this._onPlay),document.addEventListener("visibilitychange",this._onVisibilityChange),this._qrEnginePromise=o.createQrEngine()}hasFlash(){if(!("ImageCapture"in window))return Promise.resolve(!1);const e=this.$video.srcObject?this.$video.srcObject.getVideoTracks()[0]:null;return e?new ImageCapture(e).getPhotoCapabilities().then(e=>e.fillLightMode.includes("flash")).catch(e=>(console.warn(e),!1)):Promise.reject("Camera not started or not available")}isFlashOn(){return this._flashOn}toggleFlash(){return this._setFlash(!this._flashOn)}turnFlashOff(){return this._setFlash(!1)}turnFlashOn(){return this._setFlash(!0)}destroy(){this.$video.removeEventListener("loadedmetadata",this._updateSourceRect),this.$video.removeEventListener("play",this._onPlay),document.removeEventListener("visibilitychange",this._onVisibilityChange),this.stop(),o._postWorkerMessage(this._qrEnginePromise,"close")}start(){if(this._active&&!this._paused)return Promise.resolve();if("https:"!==window.location.protocol&&console.warn("The camera stream is only accessible if the page is transferred via https."),this._active=!0,this._paused=!1,document.hidden)return Promise.resolve();if(clearTimeout(this._offTimeout),this._offTimeout=null,this.$video.srcObject)return this.$video.play(),Promise.resolve();let e=this._preferredFacingMode;return this._getCameraStream(e,!0).catch(()=>(e="environment"===e?"user":"environment",this._getCameraStream())).then(t=>{e=this._getFacingMode(t)||e,this.$video.srcObject=t,this.$video.play(),this._setVideoMirror(e)}).catch(e=>{throw this._active=!1,e})}stop(){this.pause(),this._active=!1}pause(){this._paused=!0,this._active&&(this.$video.pause(),this._offTimeout||(this._offTimeout=setTimeout(()=>{const e=this.$video.srcObject?this.$video.srcObject.getTracks():[];for(const t of e)t.stop();this.$video.srcObject=null,this._offTimeout=null},300)))}static scanImage(e,t=null,i=null,n=null,r=!1,s=!1){const a=i instanceof Worker;let c=Promise.all([i||o.createQrEngine(),o._loadImage(e)]).then(([e,s])=>{let c;return i=e,[n,c]=this._drawToCanvas(s,t,n,r),i instanceof Worker?(a||i.postMessage({type:"inversionMode",data:"both"}),new Promise((e,t)=>{let r,s,a;s=n=>{"qrResult"===n.data.type&&(i.removeEventListener("message",s),i.removeEventListener("error",a),clearTimeout(r),null!==n.data.data?e(n.data.data):t(o.NO_QR_CODE_FOUND))},a=e=>{i.removeEventListener("message",s),i.removeEventListener("error",a),clearTimeout(r),t("Scanner error: "+(e?e.message||e:"Unknown Error"))},i.addEventListener("message",s),i.addEventListener("error",a),r=setTimeout(()=>a("timeout"),1e4);const h=c.getImageData(0,0,n.width,n.height);i.postMessage({type:"decode",data:h},[h.data.buffer])})):new Promise((e,t)=>{const r=setTimeout(()=>t("Scanner error: timeout"),1e4);i.detect(n).then(i=>{i.length?e(i[0].rawValue):t(o.NO_QR_CODE_FOUND)}).catch(e=>t("Scanner error: "+(e.message||e))).finally(()=>clearTimeout(r))})});return t&&s&&(c=c.catch(()=>o.scanImage(e,null,i,n,r))),c=c.finally(()=>{a||o._postWorkerMessage(i,"close")}),c}setGrayscaleWeights(e,t,i,n=!0){o._postWorkerMessage(this._qrEnginePromise,"grayscaleWeights",{red:e,green:t,blue:i,useIntegerApproximation:n})}setInversionMode(e){o._postWorkerMessage(this._qrEnginePromise,"inversionMode",e)}static createQrEngine(e=o.WORKER_PATH){return("BarcodeDetector"in window?BarcodeDetector.getSupportedFormats():Promise.resolve([])).then(t=>-1!==t.indexOf("qr_code")?new BarcodeDetector({formats:["qr_code"]}):new Worker(e))}_onPlay(){this._updateSourceRect(),this._scanFrame()}_onVisibilityChange(){document.hidden?this.pause():this._active&&this.start()}_updateSourceRect(){const e=Math.min(this.$video.videoWidth,this.$video.videoHeight),t=Math.round(2/3*e);this._sourceRect.width=this._sourceRect.height=t,this._sourceRect.x=(this.$video.videoWidth-t)/2,this._sourceRect.y=(this.$video.videoHeight-t)/2}_scanFrame(){if(!this._active||this.$video.paused||this.$video.ended)return!1;requestAnimationFrame(()=>{this.$video.readyState<=1?this._scanFrame():this._qrEnginePromise.then(e=>o.scanImage(this.$video,this._sourceRect,e,this.$canvas,!0)).then(this._onDecode,e=>{this._active&&(-1!==(e.message||e).indexOf("service unavailable")&&(this._qrEnginePromise=o.createQrEngine()),this._onDecodeError(e))}).then(()=>this._scanFrame())})}_onDecodeError(e){e!==o.NO_QR_CODE_FOUND&&console.log(e)}_getCameraStream(e,t=!1){const i=[{width:{min:1024}},{width:{min:768}},{}];return e&&(t&&(e={exact:e}),i.forEach(t=>t.facingMode=e)),this._getMatchingCameraStream(i)}_getMatchingCameraStream(e){return navigator.mediaDevices&&0!==e.length?navigator.mediaDevices.getUserMedia({video:e.shift()}).catch(()=>this._getMatchingCameraStream(e)):Promise.reject("Camera not found.")}_setFlash(e){return this.hasFlash().then(t=>t?this.$video.srcObject.getVideoTracks()[0].applyConstraints({advanced:[{torch:e}]}):Promise.reject("No flash available")).then(()=>this._flashOn=e)}_setVideoMirror(e){this.$video.style.transform="scaleX("+("user"===e?-1:1)+")"}_getFacingMode(e){const t=e.getVideoTracks()[0];return t?/rear|back|environment/i.test(t.label)?"environment":/front|user|face/i.test(t.label)?"user":null:null}static _drawToCanvas(e,t=null,i=null,n=!1){i=i||document.createElement("canvas");const r=t&&t.x?t.x:0,s=t&&t.y?t.y:0,a=t&&t.width?t.width:e.width||e.videoWidth,o=t&&t.height?t.height:e.height||e.videoHeight;n||i.width===a&&i.height===o||(i.width=a,i.height=o);const c=i.getContext("2d",{alpha:!1});return c.imageSmoothingEnabled=!1,c.drawImage(e,r,s,a,o,0,0,i.width,i.height),[i,c]}static _loadImage(e){if(e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement||window.ImageBitmap&&e instanceof window.ImageBitmap||window.OffscreenCanvas&&e instanceof window.OffscreenCanvas)return Promise.resolve(e);if(e instanceof Image)return o._awaitImageLoad(e).then(()=>e);if(e instanceof File||e instanceof Blob||e instanceof URL||"string"==typeof e){const t=new Image;return t.src=e instanceof File||e instanceof Blob?URL.createObjectURL(e):e,o._awaitImageLoad(t).then(()=>((e instanceof File||e instanceof Blob)&&URL.revokeObjectURL(t.src),t))}return Promise.reject("Unsupported image type.")}static _awaitImageLoad(e){return new Promise((t,i)=>{if(e.complete&&0!==e.naturalWidth)t();else{let n,r;n=()=>{e.removeEventListener("load",n),e.removeEventListener("error",r),t()},r=()=>{e.removeEventListener("load",n),e.removeEventListener("error",r),i("Image load error")},e.addEventListener("load",n),e.addEventListener("error",r)}})}static _postWorkerMessage(e,t,i){return Promise.resolve(e).then(e=>{e instanceof Worker&&e.postMessage({type:t,data:i})})}}o.DEFAULT_CANVAS_SIZE=400,o.NO_QR_CODE_FOUND="No QR code found",o.WORKER_PATH="qr-scanner-worker.min.js";var c=i("vkgz"),h=i("eIep"),l=i("JIr8"),g=i("fXoL"),d=i("XNiG"),u=i("7o/Q"),m=i("D0XW");i("l7GE"),i("ZUHj");const v={leading:!0,trailing:!1};class f{constructor(e,t,i,n){this.duration=e,this.scheduler=t,this.leading=i,this.trailing=n}call(e,t){return t.subscribe(new p(e,this.duration,this.scheduler,this.leading,this.trailing))}}class p extends u.a{constructor(e,t,i,n,r){super(e),this.duration=t,this.scheduler=i,this.leading=n,this.trailing=r,this._hasTrailingValue=!1,this._trailingValue=null}_next(e){this.throttled?this.trailing&&(this._trailingValue=e,this._hasTrailingValue=!0):(this.add(this.throttled=this.scheduler.schedule(b,this.duration,{subscriber:this})),this.leading?this.destination.next(e):this.trailing&&(this._trailingValue=e,this._hasTrailingValue=!0))}_complete(){this._hasTrailingValue?(this.destination.next(this._trailingValue),this.destination.complete()):this.destination.complete()}clearThrottle(){const e=this.throttled;e&&(this.trailing&&this._hasTrailingValue&&(this.destination.next(this._trailingValue),this._trailingValue=null,this._hasTrailingValue=!1),e.unsubscribe(),this.remove(e),this.throttled=null)}}function b(e){const{subscriber:t}=e;t.clearThrottle()}var _=i("1G5W"),O=i("bTqV");const w=["imageContainer"],C=["cropRect"],E=["image"],D=["canvas"],y=function(e,t,i,n){return{top:e,bottom:t,left:i,right:n}};let P=(()=>{class e{constructor(){this.croppedImage=new g.o,this.topOffset="10px",this.bottomOffset="10px",this.leftOffset="10px",this.rightOffset="10px",this.onDestroyed$=new d.a,this.mouseDragOverEvent$=new d.a}ngOnInit(){this.mouseDragOverEvent$.pipe(function(e,t=m.a,i=v){return n=>n.lift(new f(e,t,i.leading,i.trailing))}(100),Object(_.a)(this.onDestroyed$)).subscribe(({event:{viewPortX:e,viewPortY:t},border:i})=>{const n=this.imgContainerElement.nativeElement.getBoundingClientRect(),r=e-n.x,s=t-n.y;switch(i){case"left":this.leftOffset=r>=0?r+"px":this.leftOffset;break;case"right":const e=n.width-r;this.rightOffset=e>=0?e+"px":this.rightOffset;break;case"top":this.topOffset=s>=0?s+"px":this.topOffset;break;case"bottom":this.bottomOffset=n.height-s+"px"}})}ngOnChanges(e){this.leftOffset=this.topOffset=this.rightOffset=this.bottomOffset="10px"}ngOnDestroy(){this.onDestroyed$.next(),this.onDestroyed$.complete()}onDragStart(e,t){this.currentlyDragging=e;const i=new Image;i.src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=",t.dataTransfer.setDragImage(i,0,0)}onDragOver(e){this.mouseDragOverEvent$.next({event:{viewPortX:e.clientX,viewPortY:e.clientY},border:this.currentlyDragging})}onTouchDrag(e,t){t.preventDefault();const i=t.touches[0];this.mouseDragOverEvent$.next({event:{viewPortX:i.clientX,viewPortY:i.clientY},border:e})}cropImage(){const e=this.imageElement.nativeElement,t=this.cropRectElement.nativeElement.getBoundingClientRect(),i=this.imgContainerElement.nativeElement.getBoundingClientRect(),n=e.naturalWidth/i.width,r=e.naturalHeight/i.height,s=(t.left-i.left)*n,a=(t.top-i.top)*r,o=t.width*n,c=t.height*r,h=this.canvasElement.nativeElement;h.width=o,h.height=c,h.getContext("2d").drawImage(e,s,a,o,c,0,0,o,c),this.croppedImage.next(h.toDataURL())}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=g.Gb({type:e,selectors:[["app-image-crop"]],viewQuery:function(e,t){var i;1&e&&(g.vc(w,!0),g.vc(C,!0),g.vc(E,!0),g.vc(D,!0)),2&e&&(g.jc(i=g.bc())&&(t.imgContainerElement=i.first),g.jc(i=g.bc())&&(t.cropRectElement=i.first),g.jc(i=g.bc())&&(t.imageElement=i.first),g.jc(i=g.bc())&&(t.canvasElement=i.first))},inputs:{imageData:"imageData"},outputs:{croppedImage:"croppedImage"},features:[g.Ab],decls:15,vars:7,consts:[[1,"image-container",3,"dragover"],["imageContainer",""],[3,"src"],["image",""],[1,"crop-rect",3,"ngStyle"],["cropRect",""],["draggable","true",1,"crop-rect-left",3,"dragstart","touchmove"],["draggable","true",1,"crop-rect-right",3,"dragstart","touchmove"],["draggable","true",1,"crop-rect-top",3,"dragstart","touchmove"],["draggable","true",1,"crop-rect-bottom",3,"dragstart","touchmove"],["mat-raised-button","","mat-primary","",3,"click"],[2,"display","none"],["canvas",""]],template:function(e,t){1&e&&(g.Sb(0,"div"),g.Sb(1,"div",0,1),g.ac("dragover",(function(e){return t.onDragOver(e)})),g.Nb(3,"img",2,3),g.Sb(5,"div",4,5),g.Sb(7,"div",6),g.ac("dragstart",(function(e){return t.onDragStart("left",e)}))("touchmove",(function(e){return t.onTouchDrag("left",e)})),g.Rb(),g.Sb(8,"div",7),g.ac("dragstart",(function(e){return t.onDragStart("right",e)}))("touchmove",(function(e){return t.onTouchDrag("right",e)})),g.Rb(),g.Sb(9,"div",8),g.ac("dragstart",(function(e){return t.onDragStart("top",e)}))("touchmove",(function(e){return t.onTouchDrag("top",e)})),g.Rb(),g.Sb(10,"div",9),g.ac("dragstart",(function(e){return t.onDragStart("bottom",e)}))("touchmove",(function(e){return t.onTouchDrag("bottom",e)})),g.Rb(),g.Rb(),g.Rb(),g.Rb(),g.Sb(11,"button",10),g.ac("click",(function(){return t.cropImage()})),g.sc(12,"CROP"),g.Rb(),g.Nb(13,"canvas",11,12)),2&e&&(g.Cb(3),g.hc("src",t.imageData,g.mc),g.Cb(2),g.hc("ngStyle",g.ic(2,y,t.topOffset,t.bottomOffset,t.leftOffset,t.rightOffset)))},directives:[n.k,O.a],styles:[".image-container[_ngcontent-%COMP%]{margin:auto;display:inline-block;position:relative}.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;max-height:100%;-o-object-fit:scale-down;object-fit:scale-down}.image-container[_ngcontent-%COMP%]   .crop-rect[_ngcontent-%COMP%]{position:absolute}.image-container[_ngcontent-%COMP%]   .crop-rect-bottom[_ngcontent-%COMP%], .image-container[_ngcontent-%COMP%]   .crop-rect-left[_ngcontent-%COMP%], .image-container[_ngcontent-%COMP%]   .crop-rect-right[_ngcontent-%COMP%], .image-container[_ngcontent-%COMP%]   .crop-rect-top[_ngcontent-%COMP%]{position:absolute;background-color:red}.image-container[_ngcontent-%COMP%]   .crop-rect-left[_ngcontent-%COMP%]{left:0;height:100%;width:2px;cursor:ew-resize}.image-container[_ngcontent-%COMP%]   .crop-rect-right[_ngcontent-%COMP%]{right:0;height:100%;width:2px;cursor:ew-resize}.image-container[_ngcontent-%COMP%]   .crop-rect-top[_ngcontent-%COMP%]{top:0;width:100%;height:2px;cursor:ns-resize}.image-container[_ngcontent-%COMP%]   .crop-rect-bottom[_ngcontent-%COMP%]{bottom:0;width:100%;height:2px;cursor:ns-resize}"],changeDetection:0}),e})();function R(e,t){if(1&e&&(g.Sb(0,"div",4),g.sc(1),g.Rb()),2&e){const e=g.cc();g.Cb(1),g.tc(e.qrResult)}}function I(e,t){if(1&e&&(g.Sb(0,"div",5),g.sc(1),g.Rb()),2&e){const e=g.cc();g.Cb(1),g.uc(" ",e.qrError,". If you think the image contains qr code please crop the image to just contain the qr Code. Use the red box below over the image to select the qr portion and click on the crop button at the bottom of the image.\n")}}function M(e,t){1&e&&(g.Sb(0,"div"),g.sc(1," Please wait while we scan for a qr code in the image...\n"),g.Rb())}function S(e,t){if(1&e){const e=g.Tb();g.Sb(0,"div",5),g.Sb(1,"app-image-crop",6),g.ac("croppedImage",(function(t){return g.lc(e),g.cc().onImageCrop(t)})),g.Rb(),g.Rb()}if(2&e){const e=g.cc();g.Cb(1),g.hc("imageData",e.errImg.imageData)}}o.WORKER_PATH="/assets/service-workers/qr-scanner-worker.min.js";const j=[{path:"",component:(()=>{class e{constructor(e){this.cdr=e,this.isScanning=!1}static convertFileToImageBase64(e){return s.a.create(t=>{const i=new FileReader;i.onloadend=e=>{t.next({imageData:e.target.result}),t.complete()},i.onerror=()=>t.error(),i.readAsDataURL(e)})}ngOnInit(){}onError(t,i){return Object(a.a)(i).pipe(Object(c.a)(e=>{this.qrError="Unable to find qr code in the image",console.warn(e)}),Object(h.a)(()=>e.convertFileToImageBase64(t)),Object(c.a)(e=>this.errImg=e))}onErrorB64(e,t){return Object(a.a)(t).pipe(Object(c.a)(e=>{this.qrError="Unable to find qr code in the image",console.warn(e)}),Object(c.a)(()=>this.errImg={imageData:e}))}scanFile(e){Object(a.a)(1).pipe(Object(c.a)(()=>{this.qrError=this.qrResult="",this.isScanning=!0,this.cdr.markForCheck()}),Object(h.a)(()=>o.scanImage(e)),Object(c.a)(e=>this.qrResult=e),Object(l.a)(t=>this.onError(e,t)),Object(c.a)(()=>{this.isScanning=!1,this.cdr.markForCheck()})).subscribe()}scanFileB64(e){Object(a.a)(1).pipe(Object(c.a)(()=>{this.qrError=this.qrResult="",this.isScanning=!0,this.cdr.markForCheck()}),Object(h.a)(()=>{const t=document.createElement("img");return t.src=e,o.scanImage(t)}),Object(c.a)(e=>this.qrResult=e),Object(l.a)(t=>this.onErrorB64(e,t)),Object(c.a)(()=>{this.isScanning=!1,this.cdr.markForCheck()})).subscribe()}fileChanged(e){this.scanFile(e.target.files[0])}onImageCrop(e){this.scanFileB64(e)}}return e.\u0275fac=function(t){return new(t||e)(g.Mb(g.h))},e.\u0275cmp=g.Gb({type:e,selectors:[["app-qr"]],decls:6,vars:4,consts:[["class","success",4,"ngIf"],["class","error",4,"ngIf"],[4,"ngIf"],["type","file","accept","image/*",3,"change"],[1,"success"],[1,"error"],[3,"imageData","croppedImage"]],template:function(e,t){1&e&&(g.rc(0,R,2,1,"div",0),g.rc(1,I,2,1,"div",1),g.rc(2,M,2,0,"div",2),g.rc(3,S,2,1,"div",1),g.sc(4,"\nUpload image with QR code\n"),g.Sb(5,"input",3),g.ac("change",(function(e){return t.fileChanged(e)})),g.Rb()),2&e&&(g.hc("ngIf",t.qrResult),g.Cb(1),g.hc("ngIf",t.qrError),g.Cb(1),g.hc("ngIf",t.isScanning),g.Cb(1),g.hc("ngIf",t.errImg&&!t.isScanning))},directives:[n.j,P],styles:[".success[_ngcontent-%COMP%]{color:rgba(25,102,63,.582)}.error[_ngcontent-%COMP%]{color:red}"],changeDetection:0}),e})()}];let T=(()=>{class e{}return e.\u0275mod=g.Kb({type:e}),e.\u0275inj=g.Jb({factory:function(t){return new(t||e)},imports:[[r.e.forChild(j)],r.e]}),e})(),k=(()=>{class e{}return e.\u0275mod=g.Kb({type:e}),e.\u0275inj=g.Jb({factory:function(t){return new(t||e)},imports:[[n.c,O.b]]}),e})(),F=(()=>{class e{}return e.\u0275mod=g.Kb({type:e}),e.\u0275inj=g.Jb({factory:function(t){return new(t||e)},imports:[[n.c,k,T]]}),e})()}}]);