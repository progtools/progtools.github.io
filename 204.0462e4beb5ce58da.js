"use strict";(self.webpackChunkprog_tools=self.webpackChunkprog_tools||[]).push([[204],{2204:(Re,B,o)=>{o.r(B),o.d(B,{GeneratorModule:()=>De});var f=o(9808),F=o(3221),Q=o(9156),t=o(5e3),H=o(9287),X=o(7261),C=o(7322),y=o(3075),j=o(1612),b=o(1314),d=o(508),L=o(5510),G=o(5664),S=o(3191),$=o(449),g=o(1159),w=o(8929),q=o(8514),I=o(6787),Y=o(1059),N=o(7545),A=o(2986),V=o(2198),Z=o(4850),ee=o(5778),_=o(7625),p=o(1777),te=o(226);const ie=["trigger"],ne=["panel"];function se(s,l){if(1&s&&(t.TgZ(0,"span",8),t._uU(1),t.qZA()),2&s){const e=t.oxw();t.xp6(1),t.Oqu(e.placeholder)}}function ae(s,l){if(1&s&&(t.TgZ(0,"span",12),t._uU(1),t.qZA()),2&s){const e=t.oxw(2);t.xp6(1),t.Oqu(e.triggerValue)}}function oe(s,l){1&s&&t.Hsn(0,0,["*ngSwitchCase","true"])}function le(s,l){if(1&s&&(t.TgZ(0,"span",9),t.YNc(1,ae,2,1,"span",10),t.YNc(2,oe,1,0,"ng-content",11),t.qZA()),2&s){const e=t.oxw();t.Q6J("ngSwitch",!!e.customTrigger),t.xp6(2),t.Q6J("ngSwitchCase",!0)}}function re(s,l){if(1&s){const e=t.EpF();t.TgZ(0,"div",13)(1,"div",14,15),t.NdJ("@transformPanel.done",function(n){t.CHM(e);const a=t.oxw();return t.KtG(a._panelDoneAnimatingStream.next(n.toState))})("keydown",function(n){t.CHM(e);const a=t.oxw();return t.KtG(a._handleKeydown(n))}),t.Hsn(3,1),t.qZA()()}if(2&s){const e=t.oxw();t.Q6J("@transformPanelWrap",void 0),t.xp6(1),t.Gre("mat-select-panel ",e._getPanelTheme(),""),t.Udp("transform-origin",e._transformOrigin)("font-size",e._triggerFontSize,"px"),t.Q6J("ngClass",e.panelClass)("@transformPanel",e.multiple?"showing-multiple":"showing"),t.uIk("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}const ce=[[["mat-select-trigger"]],"*"],he=["mat-select-trigger","*"],z={transformPanelWrap:(0,p.X$)("transformPanelWrap",[(0,p.eR)("* => void",(0,p.IO)("@transformPanel",[(0,p.pV)()],{optional:!0}))]),transformPanel:(0,p.X$)("transformPanel",[(0,p.SB)("void",(0,p.oB)({transform:"scaleY(0.8)",minWidth:"100%",opacity:0})),(0,p.SB)("showing",(0,p.oB)({opacity:1,minWidth:"calc(100% + 32px)",transform:"scaleY(1)"})),(0,p.SB)("showing-multiple",(0,p.oB)({opacity:1,minWidth:"calc(100% + 64px)",transform:"scaleY(1)"})),(0,p.eR)("void => *",(0,p.jt)("120ms cubic-bezier(0, 0, 0.2, 1)")),(0,p.eR)("* => void",(0,p.jt)("100ms 25ms linear",(0,p.oB)({opacity:0})))])};let K=0;const M=256,U=new t.OlP("mat-select-scroll-strategy"),ue=new t.OlP("MAT_SELECT_CONFIG"),me={provide:U,deps:[b.aV],useFactory:function ge(s){return()=>s.scrollStrategies.reposition()}};class fe{constructor(l,e){this.source=l,this.value=e}}const _e=(0,d.Kr)((0,d.sb)((0,d.Id)((0,d.FD)(class{constructor(s,l,e,i,n){this._elementRef=s,this._defaultErrorStateMatcher=l,this._parentForm=e,this._parentFormGroup=i,this.ngControl=n,this.stateChanges=new w.xQ}})))),ye=new t.OlP("MatSelectTrigger");let ve=(()=>{class s extends _e{constructor(e,i,n,a,r,h,c,m,D,x,xe,ke,Ee,O){var k,E,R;super(r,a,c,m,x),this._viewportRuler=e,this._changeDetectorRef=i,this._ngZone=n,this._dir=h,this._parentFormField=D,this._liveAnnouncer=Ee,this._defaultOptions=O,this._panelOpen=!1,this._compareWith=(u,P)=>u===P,this._uid="mat-select-"+K++,this._triggerAriaLabelledBy=null,this._destroy=new w.xQ,this._onChange=()=>{},this._onTouched=()=>{},this._valueId="mat-select-value-"+K++,this._panelDoneAnimatingStream=new w.xQ,this._overlayPanelClass=(null===(k=this._defaultOptions)||void 0===k?void 0:k.overlayPanelClass)||"",this._focused=!1,this.controlType="mat-select",this._multiple=!1,this._disableOptionCentering=null!==(R=null===(E=this._defaultOptions)||void 0===E?void 0:E.disableOptionCentering)&&void 0!==R&&R,this.ariaLabel="",this.optionSelectionChanges=(0,q.P)(()=>{const u=this.options;return u?u.changes.pipe((0,Y.O)(u),(0,N.w)(()=>(0,I.T)(...u.map(P=>P.onSelectionChange)))):this._ngZone.onStable.pipe((0,A.q)(1),(0,N.w)(()=>this.optionSelectionChanges))}),this.openedChange=new t.vpe,this._openedStream=this.openedChange.pipe((0,V.h)(u=>u),(0,Z.U)(()=>{})),this._closedStream=this.openedChange.pipe((0,V.h)(u=>!u),(0,Z.U)(()=>{})),this.selectionChange=new t.vpe,this.valueChange=new t.vpe,this.ngControl&&(this.ngControl.valueAccessor=this),null!=(null==O?void 0:O.typeaheadDebounceInterval)&&(this._typeaheadDebounceInterval=O.typeaheadDebounceInterval),this._scrollStrategyFactory=ke,this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=parseInt(xe)||0,this.id=this.id}get focused(){return this._focused||this._panelOpen}get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}get required(){var e,i,n,a;return null!==(a=null!==(e=this._required)&&void 0!==e?e:null===(n=null===(i=this.ngControl)||void 0===i?void 0:i.control)||void 0===n?void 0:n.hasValidator(y.kI.required))&&void 0!==a&&a}set required(e){this._required=(0,S.Ig)(e),this.stateChanges.next()}get multiple(){return this._multiple}set multiple(e){this._multiple=(0,S.Ig)(e)}get disableOptionCentering(){return this._disableOptionCentering}set disableOptionCentering(e){this._disableOptionCentering=(0,S.Ig)(e)}get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}get typeaheadDebounceInterval(){return this._typeaheadDebounceInterval}set typeaheadDebounceInterval(e){this._typeaheadDebounceInterval=(0,S.su)(e)}get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}ngOnInit(){this._selectionModel=new $.Ov(this.multiple),this.stateChanges.next(),this._panelDoneAnimatingStream.pipe((0,ee.x)(),(0,_.R)(this._destroy)).subscribe(()=>this._panelDoneAnimating(this.panelOpen))}ngAfterContentInit(){this._initKeyManager(),this._selectionModel.changed.pipe((0,_.R)(this._destroy)).subscribe(e=>{e.added.forEach(i=>i.select()),e.removed.forEach(i=>i.deselect())}),this.options.changes.pipe((0,Y.O)(null),(0,_.R)(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){const e=this._getTriggerAriaLabelledby(),i=this.ngControl;if(e!==this._triggerAriaLabelledBy){const n=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?n.setAttribute("aria-labelledby",e):n.removeAttribute("aria-labelledby")}i&&(this._previousControl!==i.control&&(void 0!==this._previousControl&&null!==i.disabled&&i.disabled!==this.disabled&&(this.disabled=i.disabled),this._previousControl=i.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this._typeaheadDebounceInterval)}ngOnDestroy(){this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._panelOpen=!0,this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck())}close(){this._panelOpen&&(this._panelOpen=!1,this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched())}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){var e,i;return this.multiple?(null===(e=this._selectionModel)||void 0===e?void 0:e.selected)||[]:null===(i=this._selectionModel)||void 0===i?void 0:i.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){const e=this._selectionModel.selected.map(i=>i.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}_isRtl(){return!!this._dir&&"rtl"===this._dir.value}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){const i=e.keyCode,n=i===g.JH||i===g.LH||i===g.oh||i===g.SV,a=i===g.K5||i===g.L_,r=this._keyManager;if(!r.isTyping()&&a&&!(0,g.Vb)(e)||(this.multiple||e.altKey)&&n)e.preventDefault(),this.open();else if(!this.multiple){const h=this.selected;r.onKeydown(e);const c=this.selected;c&&h!==c&&this._liveAnnouncer.announce(c.viewValue,1e4)}}_handleOpenKeydown(e){const i=this._keyManager,n=e.keyCode,a=n===g.JH||n===g.LH,r=i.isTyping();if(a&&e.altKey)e.preventDefault(),this.close();else if(r||n!==g.K5&&n!==g.L_||!i.activeItem||(0,g.Vb)(e))if(!r&&this._multiple&&n===g.A&&e.ctrlKey){e.preventDefault();const h=this.options.some(c=>!c.disabled&&!c.selected);this.options.forEach(c=>{c.disabled||(h?c.select():c.deselect())})}else{const h=i.activeItemIndex;i.onKeydown(e),this._multiple&&a&&e.shiftKey&&i.activeItem&&i.activeItemIndex!==h&&i.activeItem._selectViaInteraction()}else e.preventDefault(),i.activeItem._selectViaInteraction()}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}_onAttached(){this._overlayDir.positionChange.pipe((0,A.q)(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()})}_getPanelTheme(){return this._parentFormField?`mat-${this._parentFormField.color}`:""}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this._selectionModel.selected.forEach(i=>i.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(i=>this._selectOptionByValue(i)),this._sortValues();else{const i=this._selectOptionByValue(e);i?this._keyManager.updateActiveItem(i):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){const i=this.options.find(n=>{if(this._selectionModel.isSelected(n))return!1;try{return null!=n.value&&this._compareWith(n.value,e)}catch(a){return!1}});return i&&this._selectionModel.select(i),i}_assignValue(e){return!!(e!==this._value||this._multiple&&Array.isArray(e))&&(this.options&&this._setSelectionByValue(e),this._value=e,!0)}_initKeyManager(){this._keyManager=new G.s1(this.options).withTypeAhead(this._typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withAllowedModifierKeys(["shiftKey"]),this._keyManager.tabOut.pipe((0,_.R)(this._destroy)).subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.pipe((0,_.R)(this._destroy)).subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){const e=(0,I.T)(this.options.changes,this._destroy);this.optionSelectionChanges.pipe((0,_.R)(e)).subscribe(i=>{this._onSelect(i.source,i.isUserInput),i.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),(0,I.T)(...this.options.map(i=>i._stateChanges)).pipe((0,_.R)(e)).subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}_onSelect(e,i){const n=this._selectionModel.isSelected(e);null!=e.value||this._multiple?(n!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),i&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),i&&this.focus())):(e.deselect(),this._selectionModel.clear(),null!=this.value&&this._propagateChanges(e.value)),n!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){const e=this.options.toArray();this._selectionModel.sort((i,n)=>this.sortComparator?this.sortComparator(i,n,e):e.indexOf(i)-e.indexOf(n)),this.stateChanges.next()}}_propagateChanges(e){let i=null;i=this.multiple?this.selected.map(n=>n.value):this.selected?this.selected.value:e,this._value=i,this.valueChange.emit(i),this._onChange(i),this.selectionChange.emit(this._getChangeEvent(i)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){this._keyManager&&(this.empty?this._keyManager.setFirstItemActive():this._keyManager.setActiveItem(this._selectionModel.selected[0]))}_canOpen(){var e;return!this._panelOpen&&!this.disabled&&(null===(e=this.options)||void 0===e?void 0:e.length)>0}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){var e;if(this.ariaLabel)return null;const i=null===(e=this._parentFormField)||void 0===e?void 0:e.getLabelId();return this.ariaLabelledby?(i?i+" ":"")+this.ariaLabelledby:i}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){var e;if(this.ariaLabel)return null;const i=null===(e=this._parentFormField)||void 0===e?void 0:e.getLabelId();let n=(i?i+" ":"")+this._valueId;return this.ariaLabelledby&&(n+=" "+this.ariaLabelledby),n}_panelDoneAnimating(e){this.openedChange.emit(e)}setDescribedByIds(e){e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focus(),this.open()}get shouldLabelFloat(){return this._panelOpen||!this.empty||this._focused&&!!this._placeholder}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(L.rL),t.Y36(t.sBO),t.Y36(t.R0b),t.Y36(d.rD),t.Y36(t.SBq),t.Y36(te.Is,8),t.Y36(y.F,8),t.Y36(y.sg,8),t.Y36(C.G_,8),t.Y36(y.a5,10),t.$8M("tabindex"),t.Y36(U),t.Y36(G.Kd),t.Y36(ue,8))},s.\u0275dir=t.lG2({type:s,viewQuery:function(e,i){if(1&e&&(t.Gf(ie,5),t.Gf(ne,5),t.Gf(b.pI,5)),2&e){let n;t.iGM(n=t.CRH())&&(i.trigger=n.first),t.iGM(n=t.CRH())&&(i.panel=n.first),t.iGM(n=t.CRH())&&(i._overlayDir=n.first)}},inputs:{userAriaDescribedBy:["aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",placeholder:"placeholder",required:"required",multiple:"multiple",disableOptionCentering:"disableOptionCentering",compareWith:"compareWith",value:"value",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:"typeaheadDebounceInterval",sortComparator:"sortComparator",id:"id"},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},features:[t.qOj,t.TTD]}),s})(),Ce=(()=>{class s extends ve{constructor(){super(...arguments),this._scrollTop=0,this._triggerFontSize=0,this._transformOrigin="top",this._offsetY=0,this._positions=[{originX:"start",originY:"top",overlayX:"start",overlayY:"top"},{originX:"start",originY:"bottom",overlayX:"start",overlayY:"bottom"}]}_calculateOverlayScroll(e,i,n){const a=this._getItemHeight();return Math.min(Math.max(0,a*e-i+a/2),n)}ngOnInit(){super.ngOnInit(),this._viewportRuler.change().pipe((0,_.R)(this._destroy)).subscribe(()=>{this.panelOpen&&(this._triggerRect=this.trigger.nativeElement.getBoundingClientRect(),this._changeDetectorRef.markForCheck())})}open(){super._canOpen()&&(super.open(),this._triggerRect=this.trigger.nativeElement.getBoundingClientRect(),this._triggerFontSize=parseInt(getComputedStyle(this.trigger.nativeElement).fontSize||"0"),this._calculateOverlayPosition(),this._ngZone.onStable.pipe((0,A.q)(1)).subscribe(()=>{this._triggerFontSize&&this._overlayDir.overlayRef&&this._overlayDir.overlayRef.overlayElement&&(this._overlayDir.overlayRef.overlayElement.style.fontSize=`${this._triggerFontSize}px`)}))}_scrollOptionIntoView(e){const i=(0,d.CB)(e,this.options,this.optionGroups),n=this._getItemHeight();this.panel.nativeElement.scrollTop=0===e&&1===i?0:(0,d.jH)((e+i)*n,n,this.panel.nativeElement.scrollTop,M)}_positioningSettled(){this._calculateOverlayOffsetX(),this.panel.nativeElement.scrollTop=this._scrollTop}_panelDoneAnimating(e){this.panelOpen?this._scrollTop=0:(this._overlayDir.offsetX=0,this._changeDetectorRef.markForCheck()),super._panelDoneAnimating(e)}_getChangeEvent(e){return new fe(this,e)}_calculateOverlayOffsetX(){const e=this._overlayDir.overlayRef.overlayElement.getBoundingClientRect(),i=this._viewportRuler.getViewportSize(),n=this._isRtl(),a=this.multiple?56:32;let r;if(this.multiple)r=40;else if(this.disableOptionCentering)r=16;else{let m=this._selectionModel.selected[0]||this.options.first;r=m&&m.group?32:16}n||(r*=-1);const h=0-(e.left+r-(n?a:0)),c=e.right+r-i.width+(n?0:a);h>0?r+=h+8:c>0&&(r-=c+8),this._overlayDir.offsetX=Math.round(r),this._overlayDir.overlayRef.updatePosition()}_calculateOverlayOffsetY(e,i,n){const a=this._getItemHeight(),r=(a-this._triggerRect.height)/2,h=Math.floor(M/a);let c;return this.disableOptionCentering?0:(c=0===this._scrollTop?e*a:this._scrollTop===n?(e-(this._getItemCount()-h))*a+(a-(this._getItemCount()*a-M)%a):i-a/2,Math.round(-1*c-r))}_checkOverlayWithinViewport(e){const i=this._getItemHeight(),n=this._viewportRuler.getViewportSize(),a=this._triggerRect.top-8,r=n.height-this._triggerRect.bottom-8,h=Math.abs(this._offsetY),m=Math.min(this._getItemCount()*i,M)-h-this._triggerRect.height;m>r?this._adjustPanelUp(m,r):h>a?this._adjustPanelDown(h,a,e):this._transformOrigin=this._getOriginBasedOnOption()}_adjustPanelUp(e,i){const n=Math.round(e-i);this._scrollTop-=n,this._offsetY-=n,this._transformOrigin=this._getOriginBasedOnOption(),this._scrollTop<=0&&(this._scrollTop=0,this._offsetY=0,this._transformOrigin="50% bottom 0px")}_adjustPanelDown(e,i,n){const a=Math.round(e-i);if(this._scrollTop+=a,this._offsetY+=a,this._transformOrigin=this._getOriginBasedOnOption(),this._scrollTop>=n)return this._scrollTop=n,this._offsetY=0,void(this._transformOrigin="50% top 0px")}_calculateOverlayPosition(){const e=this._getItemHeight(),i=this._getItemCount(),n=Math.min(i*e,M),r=i*e-n;let h;h=this.empty?0:Math.max(this.options.toArray().indexOf(this._selectionModel.selected[0]),0),h+=(0,d.CB)(h,this.options,this.optionGroups);const c=n/2;this._scrollTop=this._calculateOverlayScroll(h,c,r),this._offsetY=this._calculateOverlayOffsetY(h,c,r),this._checkOverlayWithinViewport(r)}_getOriginBasedOnOption(){const e=this._getItemHeight(),i=(e-this._triggerRect.height)/2;return`50% ${Math.abs(this._offsetY)-i+e/2}px 0px`}_getItemHeight(){return 3*this._triggerFontSize}_getItemCount(){return this.options.length+this.optionGroups.length}}return s.\u0275fac=function(){let l;return function(i){return(l||(l=t.n5z(s)))(i||s)}}(),s.\u0275cmp=t.Xpm({type:s,selectors:[["mat-select"]],contentQueries:function(e,i,n){if(1&e&&(t.Suo(n,ye,5),t.Suo(n,d.ey,5),t.Suo(n,d.K7,5)),2&e){let a;t.iGM(a=t.CRH())&&(i.customTrigger=a.first),t.iGM(a=t.CRH())&&(i.options=a),t.iGM(a=t.CRH())&&(i.optionGroups=a)}},hostAttrs:["role","combobox","aria-autocomplete","none","aria-haspopup","true",1,"mat-select"],hostVars:19,hostBindings:function(e,i){1&e&&t.NdJ("keydown",function(a){return i._handleKeydown(a)})("focus",function(){return i._onFocus()})("blur",function(){return i._onBlur()}),2&e&&(t.uIk("id",i.id)("tabindex",i.tabIndex)("aria-controls",i.panelOpen?i.id+"-panel":null)("aria-expanded",i.panelOpen)("aria-label",i.ariaLabel||null)("aria-required",i.required.toString())("aria-disabled",i.disabled.toString())("aria-invalid",i.errorState)("aria-activedescendant",i._getAriaActiveDescendant()),t.ekj("mat-select-disabled",i.disabled)("mat-select-invalid",i.errorState)("mat-select-required",i.required)("mat-select-empty",i.empty)("mat-select-multiple",i.multiple))},inputs:{disabled:"disabled",disableRipple:"disableRipple",tabIndex:"tabIndex"},exportAs:["matSelect"],features:[t._Bn([{provide:C.Eo,useExisting:s},{provide:d.HF,useExisting:s}]),t.qOj],ngContentSelectors:he,decls:9,vars:12,consts:[["cdk-overlay-origin","",1,"mat-select-trigger",3,"click"],["origin","cdkOverlayOrigin","trigger",""],[1,"mat-select-value",3,"ngSwitch"],["class","mat-select-placeholder mat-select-min-line",4,"ngSwitchCase"],["class","mat-select-value-text",3,"ngSwitch",4,"ngSwitchCase"],[1,"mat-select-arrow-wrapper"],[1,"mat-select-arrow"],["cdk-connected-overlay","","cdkConnectedOverlayLockPosition","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayOpen","cdkConnectedOverlayPositions","cdkConnectedOverlayMinWidth","cdkConnectedOverlayOffsetY","backdropClick","attach","detach"],[1,"mat-select-placeholder","mat-select-min-line"],[1,"mat-select-value-text",3,"ngSwitch"],["class","mat-select-min-line",4,"ngSwitchDefault"],[4,"ngSwitchCase"],[1,"mat-select-min-line"],[1,"mat-select-panel-wrap"],["role","listbox","tabindex","-1",3,"ngClass","keydown"],["panel",""]],template:function(e,i){if(1&e&&(t.F$t(ce),t.TgZ(0,"div",0,1),t.NdJ("click",function(){return i.toggle()}),t.TgZ(3,"div",2),t.YNc(4,se,2,1,"span",3),t.YNc(5,le,3,2,"span",4),t.qZA(),t.TgZ(6,"div",5),t._UZ(7,"div",6),t.qZA()(),t.YNc(8,re,4,14,"ng-template",7),t.NdJ("backdropClick",function(){return i.close()})("attach",function(){return i._onAttached()})("detach",function(){return i.close()})),2&e){const n=t.MAs(1);t.uIk("aria-owns",i.panelOpen?i.id+"-panel":null),t.xp6(3),t.Q6J("ngSwitch",i.empty),t.uIk("id",i._valueId),t.xp6(1),t.Q6J("ngSwitchCase",!0),t.xp6(1),t.Q6J("ngSwitchCase",!1),t.xp6(3),t.Q6J("cdkConnectedOverlayPanelClass",i._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",i._scrollStrategy)("cdkConnectedOverlayOrigin",n)("cdkConnectedOverlayOpen",i.panelOpen)("cdkConnectedOverlayPositions",i._positions)("cdkConnectedOverlayMinWidth",null==i._triggerRect?null:i._triggerRect.width)("cdkConnectedOverlayOffsetY",i._offsetY)}},dependencies:[f.mk,f.RF,f.n9,f.ED,b.pI,b.xu],styles:['.mat-select{display:inline-block;width:100%;outline:none}.mat-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{height:16px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid rgba(0,0,0,0);border-right:5px solid rgba(0,0,0,0);border-top:5px solid;margin:0 4px}.mat-form-field.mat-focused .mat-select-arrow{transform:translateX(0)}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px;outline:0}.cdk-high-contrast-active .mat-select-panel{outline:solid 1px}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:rgba(0,0,0,0);-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}.mat-select-min-line:empty::before{content:" ";white-space:pre;width:1px;display:inline-block;visibility:hidden}'],encapsulation:2,data:{animation:[z.transformPanelWrap,z.transformPanel]},changeDetection:0}),s})(),be=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({providers:[me],imports:[f.ez,b.U8,d.Ng,d.BQ,L.ZD,C.lN,d.Ng,d.BQ]}),s})();var W=o(7423);function Me(s,l){if(1&s){const e=t.EpF();t.TgZ(0,"code",11),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.onNricNumberClick())}),t._uU(1),t.qZA()}if(2&s){const e=t.oxw();t.xp6(1),t.Oqu(e.nric)}}const Oe=[{path:"",component:(()=>{class s{constructor(e,i){this.clipBoard=e,this.snackBar=i,this.yob=1995,this.prefix="S"}ngOnInit(){}generateNew(){this.nric=(0,Q.s)(this.prefix,this.yob),this.copyNricToClipBoard()}onNricNumberClick(){this.copyNricToClipBoard()}copyNricToClipBoard(){this.nric&&(this.clipBoard.copy(this.nric),this.snackBar.open("Copied to clipboard",null,{duration:1e3}))}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(H.TU),t.Y36(X.ux))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-generator"]],decls:18,vars:3,consts:[[1,"grid"],[1,"inputs"],["appearance","outline",1,"prefix"],[3,"ngModel","ngModelChange"],["value","S"],["value","T"],["value","F"],["value","G"],["label","Year of Birth","type","number",1,"year",3,"ngModel","ngModelChange"],["mat-raised-button","","color","primary",1,"submit",3,"click"],["class","result",3,"click",4,"ngIf"],[1,"result",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"mat-form-field",2)(3,"mat-label"),t._uU(4,"Prefix"),t.qZA(),t.TgZ(5,"mat-select",3),t.NdJ("ngModelChange",function(a){return i.prefix=a}),t.TgZ(6,"mat-option",4),t._uU(7,"S (year of birth till 1999)"),t.qZA(),t.TgZ(8,"mat-option",5),t._uU(9,"T (year of birth from 2000)"),t.qZA(),t.TgZ(10,"mat-option",6),t._uU(11,"F (year of birth till 1999)"),t.qZA(),t.TgZ(12,"mat-option",7),t._uU(13,"G (year of birth from 2000)"),t.qZA()()(),t.TgZ(14,"app-prog-input-type-one",8),t.NdJ("ngModelChange",function(a){return i.yob=a}),t.qZA()(),t.TgZ(15,"button",9),t.NdJ("click",function(){return i.generateNew()}),t._uU(16,"Generate"),t.qZA(),t.YNc(17,Me,2,1,"code",10),t.qZA()),2&e&&(t.xp6(5),t.Q6J("ngModel",i.prefix),t.xp6(9),t.Q6J("ngModel",i.yob),t.xp6(3),t.Q6J("ngIf",!!i.nric))},dependencies:[f.O5,C.KE,C.hX,y.JJ,y.On,j.X,Ce,d.ey,W.lW],styles:["[_nghost-%COMP%]{display:flex}.grid[_ngcontent-%COMP%]{display:grid;grid-column-gap:50px;grid-template-rows:minmax(50px,1fr) minmax(50px,1fr)}.grid[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]{display:grid;grid-column-gap:50px}.grid[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   .prefix[_ngcontent-%COMP%]{grid-row:1;grid-column:1}.grid[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   .year[_ngcontent-%COMP%]{grid-row:1;grid-column:2}.grid[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%]{grid-row:2;grid-column:1/span 2}.grid[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:darkgoldenrod;padding:4px;margin-top:16px;grid-row:3;grid-column:1/span 2;text-align:center}"]}),s})()}];let Se=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[F.Bz.forChild(Oe),F.Bz]}),s})();var Te=o(8099),we=o(7531),Ie=o(661);let Ae=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[f.ez,Ie.H]}),s})(),De=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[f.ez,Se,Te.Ps,we.c,y.u5,Ae,be,W.ot,H.Iq]}),s})()}}]);