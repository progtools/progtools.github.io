(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{h7wf:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("HDdC");class r{static convertFileToImageBase64(t){return new i.a(e=>{const n=new FileReader;n.onloadend=t=>{e.next({imageData:t.target.result}),e.complete()},n.onerror=()=>e.error(),n.readAsDataURL(t)})}}},oTug:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n("ofXK"),r=n("bTqV"),o=n("fXoL");let c=(()=>{class t{}return t.\u0275mod=o.Ib({type:t}),t.\u0275inj=o.Hb({factory:function(e){return new(e||t)},imports:[[i.c,r.b]]}),t})()},vEUj:function(t,e,n){"use strict";n.d(e,"a",(function(){return O}));var i=n("XNiG"),r=n("fXoL"),o=n("7o/Q"),c=n("D0XW");n("zx2A");const a={leading:!0,trailing:!1};class s{constructor(t,e,n,i){this.duration=t,this.scheduler=e,this.leading=n,this.trailing=i}call(t,e){return e.subscribe(new g(t,this.duration,this.scheduler,this.leading,this.trailing))}}class g extends o.a{constructor(t,e,n,i,r){super(t),this.duration=e,this.scheduler=n,this.leading=i,this.trailing=r,this._hasTrailingValue=!1,this._trailingValue=null}_next(t){this.throttled?this.trailing&&(this._trailingValue=t,this._hasTrailingValue=!0):(this.add(this.throttled=this.scheduler.schedule(h,this.duration,{subscriber:this})),this.leading?this.destination.next(t):this.trailing&&(this._trailingValue=t,this._hasTrailingValue=!0))}_complete(){this._hasTrailingValue?(this.destination.next(this._trailingValue),this.destination.complete()):this.destination.complete()}clearThrottle(){const t=this.throttled;t&&(this.trailing&&this._hasTrailingValue&&(this.destination.next(this._trailingValue),this._trailingValue=null,this._hasTrailingValue=!1),t.unsubscribe(),this.remove(t),this.throttled=null)}}function h(t){const{subscriber:e}=t;e.clearThrottle()}var l=n("1G5W"),u=n("ofXK");const d=["imageContainer"],p=["cropRect"],f=["image"],m=["canvas"],b=function(t,e,n,i){return{top:t,bottom:e,left:n,right:i}};let O=(()=>{class t{constructor(t){this.cdr=t,this.croppedImage=new r.o,this.isCropping=new r.o,this.topOffset="10px",this.bottomOffset="10px",this.leftOffset="10px",this.rightOffset="10px",this.onDestroyed$=new i.a,this.borderDragged$=new i.a}ngOnInit(){this.borderDragged$.pipe(function(t,e=c.a,n=a){return i=>i.lift(new s(t,e,n.leading,n.trailing))}(100),Object(l.a)(this.onDestroyed$)).subscribe(({event:{viewPortX:t,viewPortY:e},border:n})=>{const i=this.imgContainerElement.nativeElement.getBoundingClientRect(),r=t-i.x,o=e-i.y;switch(n){case"left":this.leftOffset=r>=0?r+"px":this.leftOffset;break;case"right":const t=i.width-r;this.rightOffset=t>=0?t+"px":this.rightOffset;break;case"top":this.topOffset=o>=0?o+"px":this.topOffset;break;case"bottom":const e=i.height-o;this.bottomOffset=e>=0?e+"px":this.bottomOffset}this.cdr.detectChanges()})}ngOnChanges(t){this.leftOffset=this.topOffset=this.rightOffset=this.bottomOffset="10px"}ngOnDestroy(){this.onDestroyed$.next(),this.onDestroyed$.complete()}onDragStart(t,e){this.currentlyDragging=t;const n=new Image;n.src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=",e.dataTransfer.setDragImage(n,0,0)}onDragOver(t){this.borderDragged$.next({event:{viewPortX:t.clientX,viewPortY:t.clientY},border:this.currentlyDragging})}onTouchDrag(t,e){e.preventDefault();const n=e.touches[0];this.borderDragged$.next({event:{viewPortX:n.clientX,viewPortY:n.clientY},border:t})}cropImage(){const t=this.imageElement.nativeElement,e=this.cropRectElement.nativeElement.getBoundingClientRect(),n=this.imgContainerElement.nativeElement.getBoundingClientRect(),i=t.naturalWidth/n.width,r=t.naturalHeight/n.height,o=(e.left-n.left)*i,c=(e.top-n.top)*r,a=e.width*i,s=e.height*r;this.isCropping.emit(!0);const g=this.canvasElement.nativeElement;g.width=a,g.height=s,g.getContext("2d").drawImage(t,o,c,a,s,0,0,a,s),g.toBlob(t=>{const e=new FileReader;e.readAsDataURL(t),e.onloadend=()=>{this.croppedImage.emit(e.result),this.isCropping.emit(!1)}})}}return t.\u0275fac=function(e){return new(e||t)(r.Kb(r.h))},t.\u0275cmp=r.Eb({type:t,selectors:[["app-image-crop"]],viewQuery:function(t,e){var n;1&t&&(r.wc(d,!0),r.wc(p,!0),r.wc(f,!0),r.wc(m,!0)),2&t&&(r.ic(n=r.Yb())&&(e.imgContainerElement=n.first),r.ic(n=r.Yb())&&(e.cropRectElement=n.first),r.ic(n=r.Yb())&&(e.imageElement=n.first),r.ic(n=r.Yb())&&(e.canvasElement=n.first))},inputs:{imageData:"imageData"},outputs:{croppedImage:"croppedImage",isCropping:"isCropping"},features:[r.yb],decls:18,vars:7,consts:[[1,"crop-container"],[1,"image-container",3,"dragover"],["imageContainer",""],[3,"src"],["image",""],[1,"crop-rect",3,"ngStyle"],["cropRect",""],["draggable","true",1,"crop-rect-right",3,"dragstart","touchmove"],[1,"circle"],["draggable","true",1,"crop-rect-left",3,"dragstart","touchmove"],["draggable","true",1,"crop-rect-bottom",3,"dragstart","touchmove"],["draggable","true",1,"crop-rect-top",3,"dragstart","touchmove"],[2,"display","none"],["canvas",""]],template:function(t,e){1&t&&(r.Qb(0,"div"),r.Qb(1,"div",0),r.Qb(2,"div",1,2),r.Xb("dragover",(function(t){return e.onDragOver(t)})),r.Lb(4,"img",3,4),r.Qb(6,"div",5,6),r.Qb(8,"div",7),r.Xb("dragstart",(function(t){return e.onDragStart("right",t)}))("touchmove",(function(t){return e.onTouchDrag("right",t)})),r.Lb(9,"div",8),r.Pb(),r.Qb(10,"div",9),r.Xb("dragstart",(function(t){return e.onDragStart("left",t)}))("touchmove",(function(t){return e.onTouchDrag("left",t)})),r.Lb(11,"div",8),r.Pb(),r.Qb(12,"div",10),r.Xb("dragstart",(function(t){return e.onDragStart("bottom",t)}))("touchmove",(function(t){return e.onTouchDrag("bottom",t)})),r.Lb(13,"div",8),r.Pb(),r.Qb(14,"div",11),r.Xb("dragstart",(function(t){return e.onDragStart("top",t)}))("touchmove",(function(t){return e.onTouchDrag("top",t)})),r.Lb(15,"div",8),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Lb(16,"canvas",12,13),r.Pb()),2&t&&(r.Ab(4),r.gc("src",e.imageData,r.lc),r.Ab(2),r.gc("ngStyle",r.hc(2,b,e.topOffset,e.bottomOffset,e.leftOffset,e.rightOffset)))},directives:[u.k],styles:[".crop-container[_ngcontent-%COMP%]{text-align:center}.image-container[_ngcontent-%COMP%]{margin:auto;display:inline-block;position:relative}.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-height:calc(100vh - 30px);-o-object-fit:scale-down;object-fit:scale-down}.image-container[_ngcontent-%COMP%]   .crop-rect[_ngcontent-%COMP%]{position:absolute}.image-container[_ngcontent-%COMP%]   .crop-rect-bottom[_ngcontent-%COMP%], .image-container[_ngcontent-%COMP%]   .crop-rect-left[_ngcontent-%COMP%], .image-container[_ngcontent-%COMP%]   .crop-rect-right[_ngcontent-%COMP%], .image-container[_ngcontent-%COMP%]   .crop-rect-top[_ngcontent-%COMP%]{position:absolute;background-color:red}.image-container[_ngcontent-%COMP%]   .crop-rect-left[_ngcontent-%COMP%]{left:0;height:100%;width:2px;cursor:ew-resize}.image-container[_ngcontent-%COMP%]   .crop-rect-right[_ngcontent-%COMP%]{right:0;height:100%;width:2px;cursor:ew-resize}.image-container[_ngcontent-%COMP%]   .crop-rect-top[_ngcontent-%COMP%]{top:0;width:100%;height:2px;cursor:ns-resize}.image-container[_ngcontent-%COMP%]   .crop-rect-bottom[_ngcontent-%COMP%]{bottom:0;width:100%;height:2px;cursor:ns-resize}.image-container[_ngcontent-%COMP%]   .crop-rect[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]{border-radius:10px;background-color:red;width:20px;height:20px;position:absolute}.image-container[_ngcontent-%COMP%]   .crop-rect-left[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%], .image-container[_ngcontent-%COMP%]   .crop-rect-right[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]{top:calc(50% - 10px);left:-10px}.image-container[_ngcontent-%COMP%]   .crop-rect-bottom[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%], .image-container[_ngcontent-%COMP%]   .crop-rect-top[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]{left:calc(50% - 10px);top:-10px}"],changeDetection:0}),t})()}}]);