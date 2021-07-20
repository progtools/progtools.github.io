!function(){function n(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function t(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}function e(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkprog_tools=self.webpackChunkprog_tools||[]).push([[185],{2185:function(n,i,o){"use strict";o.r(i),o.d(i,{CountdownModule:function(){return $}});var r=o(1552),s=o(1095),c=o(8583),u=o(6983),a=o(7716),d=function n(t,i){e(this,n),this.id=t,this.activationTimer=i},l=o(9765),p=o(9112),m=o(4190),h=o(6782),f=o(8002),g=o(7519),v=o(8345),w=o(9761),y=function(){var n=function(){function n(){e(this,n)}return t(n,[{key:"ngOnInit",value:function(){}}]),n}();return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=a.Xpm({type:n,selectors:[["app-count-down-dial"]],inputs:{value:"value"},decls:7,vars:1,consts:[[1,"dial"],[1,"time"]],template:function(n,t){1&n&&(a.TgZ(0,"div",0),a.TgZ(1,"button"),a._uU(2,"+"),a.qZA(),a.TgZ(3,"div",1),a._uU(4),a.qZA(),a.TgZ(5,"button"),a._uU(6,"-"),a.qZA(),a.qZA()),2&n&&(a.xp6(4),a.Oqu(t.value))},styles:[".dial[_ngcontent-%COMP%]{display:flex;flex-direction:column}.time[_ngcontent-%COMP%]{text-align:center}"]}),n}(),T=function(){var n=function(){function n(t){e(this,n),this.cdr=t,this._onDestroy$=new l.xQ,this.deleteClicked=new a.vpe,this.completed=new a.vpe}return t(n,[{key:"ngOnInit",value:function(){}},{key:"ngOnChanges",value:function(n){var t=this;if(n.countDownData){var e=n.countDownData.currentValue;e&&this.setTimer(e.activationTimer)}if(n.passedSeconds$){this.subscription&&this.subscription.unsubscribe();var i=n.passedSeconds$.currentValue;i&&(this.subscription=i.pipe((0,h.R)(this._onDestroy$),(0,h.R)(this.completed)).subscribe(function(n){var e=t.countDownData.activationTimer-n;t.setTimer(e),t.cdr.markForCheck(),e<=0&&t.completed.emit()}))}}},{key:"ngOnDestroy",value:function(){m.l.onComponentDestroyed(this._onDestroy$)}},{key:"reset",value:function(){this.setTimer(this.countDownData.activationTimer)}},{key:"setTimer",value:function(n){n<0||(this.ss=n%60,this.mm=(n=n/60|0)%60,this.hh=n=n/60|0)}}]),n}();return n.\u0275fac=function(t){return new(t||n)(a.Y36(a.sBO))},n.\u0275cmp=a.Xpm({type:n,selectors:[["app-count-down-timer"]],inputs:{countDownData:"countDownData",passedSeconds$:"passedSeconds$"},outputs:{deleteClicked:"deleteClicked",completed:"completed"},features:[a.TTD],decls:8,vars:4,consts:[[1,"timer"],[3,"value"],[1,"controls-container"],["mat-flat-button","","color","warn","aria-label","Delete the countdown",1,"controls","delete",3,"click"],[3,"inline"]],template:function(n,t){1&n&&(a.TgZ(0,"div",0),a._UZ(1,"app-count-down-dial",1),a._UZ(2,"app-count-down-dial",1),a._UZ(3,"app-count-down-dial",1),a.TgZ(4,"div",2),a.TgZ(5,"button",3),a.NdJ("click",function(){return t.deleteClicked.emit()}),a.TgZ(6,"mat-icon",4),a._uU(7,"delete"),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&n&&(a.xp6(1),a.Q6J("value",t.hh),a.xp6(1),a.Q6J("value",t.mm),a.xp6(1),a.Q6J("value",t.ss),a.xp6(3),a.Q6J("inline",!0))},directives:[y,s.lW,r.Hw],styles:[".timer[_ngcontent-%COMP%]{display:flex;box-shadow:0 0 8px 2px #888;border-radius:9px;padding:2px}.timer[_ngcontent-%COMP%]   app-count-down-dial[_ngcontent-%COMP%]{flex:1 1 auto;margin:0}.controls-container[_ngcontent-%COMP%]{display:flex;margin-left:5px;flex-direction:column}.controls[_ngcontent-%COMP%]{min-width:20px}.controls.delete[_ngcontent-%COMP%]{padding:0 10px;line-height:20px}"]}),n}(),x=o(2541),k=o(2178);function Z(n,t){if(1&n){var e=a.EpF();a.TgZ(0,"app-count-down-timer",5),a.NdJ("deleteClicked",function(){var n=a.CHM(e).$implicit;return a.oxw().onDeleteClicked(n.id)})("completed",function(){var n=a.CHM(e),t=n.$implicit,i=n.index;return a.oxw().onTimerCompleted(t.id,i)}),a.qZA()}if(2&n){var i=t.$implicit,o=t.index,r=a.oxw();a.Q6J("countDownData",i)("passedSeconds$",r.runIndividually&&r.runningIndex!=o?null:r.passedSeconds$)}}var C,b,D=function(){var n=function(){function n(t,i){e(this,n),this.cdr=i,this.destroy$=new l.xQ,this.onReset$=new l.xQ,this.nextId=0,this.isPlaying=!1,this.passedTime=0,this.runIndividually=!0,this.sort=!1,this.replay=!0,this.countdownTimers=[],this.passedSecondsSubject=new l.xQ,this.runningIndex=0,this.tickPerSecond$=t.getSeconds$().pipe((0,h.R)(this.destroy$),(0,f.U)(function(n){return Math.ceil(n/1e3)}),(0,g.x)())}return t(n,[{key:"passedSeconds$",get:function(){return this.passedSecondsSubject.pipe((0,v.B)())}},{key:"ngOnInit",value:function(){this.countdownTimers=this.countdownTimers.concat(this.createNewTimerData()).concat(this.createNewTimerData()).concat(this.createNewTimerData())}},{key:"ngOnDestroy",value:function(){this.passedSecondsSubject.complete(),m.l.onComponentDestroyed(this.destroy$)}},{key:"onAddGroup",value:function(){this.countdownTimers=this.countdownTimers.concat(this.createNewTimerData()),this.sort&&(this.countdownTimers=this.countdownTimers.sort(function(n,t){return n.activationTimer-t.activationTimer}))}},{key:"onDeleteClicked",value:function(n){this.countdownTimers=this.countdownTimers.filter(function(t){return t.id!==n})}},{key:"trackTimerFn",value:function(n,t){return t.id}},{key:"togglePlay",value:function(){var n=this;if(this.isPlaying=!this.isPlaying,this.isPlaying){var t=this.onReset$.pipe((0,w.O)(void 0));this.subscription=(0,p.aj)([this.tickPerSecond$,t]).subscribe(function(){return n.passedSecondsSubject.next(n.passedTime++)})}else this.subscription&&this.subscription.unsubscribe()}},{key:"createNewTimerData",value:function(){return new d(this.nextId++,Math.round(10*Math.random())+1)}},{key:"onTimerCompleted",value:function(n,t){if(this.runIndividually){if(this.passedTime=1,this.runningIndex++,this.runningIndex>=this.countdownTimers.length){if(!this.replay)return;this.reset()}this.cdr.detectChanges(),this.onReset$.next()}}},{key:"reset",value:function(){this.passedTime=0,this.runningIndex=0,this.childTimerComponents.forEach(function(n){return n.reset()}),this.cdr.detectChanges(),this.onReset$.next()}}]),n}();return n.\u0275fac=function(t){return new(t||n)(a.Y36(x.u),a.Y36(a.sBO))},n.\u0275cmp=a.Xpm({type:n,selectors:[["app-count-down-group"]],viewQuery:function(n,t){var e;(1&n&&a.Gf(T,5),2&n)&&(a.iGM(e=a.CRH())&&(t.childTimerComponents=e))},inputs:{runIndividually:"runIndividually",sort:"sort",replay:"replay"},decls:13,vars:3,consts:[[1,"container"],["mode","determinate","value","40"],[1,"controls"],["mat-fab","","color","primary","aria-label","add new timer to the group",1,"group-item",3,"click"],["class","group-item",3,"countDownData","passedSeconds$","deleteClicked","completed",4,"ngFor","ngForOf","ngForTrackBy"],[1,"group-item",3,"countDownData","passedSeconds$","deleteClicked","completed"]],template:function(n,t){1&n&&(a.TgZ(0,"div",0),a._UZ(1,"mat-progress-bar",1),a.TgZ(2,"div",2),a.TgZ(3,"button",3),a.NdJ("click",function(){return t.onAddGroup()}),a.TgZ(4,"mat-icon"),a._uU(5,"add"),a.qZA(),a.qZA(),a.TgZ(6,"button",3),a.NdJ("click",function(){return t.togglePlay()}),a.TgZ(7,"mat-icon"),a._uU(8),a.qZA(),a.qZA(),a.TgZ(9,"button",3),a.NdJ("click",function(){return t.reset()}),a.TgZ(10,"mat-icon"),a._uU(11,"refresh"),a.qZA(),a.qZA(),a.qZA(),a.YNc(12,Z,1,2,"app-count-down-timer",4),a.qZA()),2&n&&(a.xp6(8),a.Oqu(t.isPlaying?"pause":"play_arrow"),a.xp6(4),a.Q6J("ngForOf",t.countdownTimers)("ngForTrackBy",t.trackTimerFn))},directives:[k.pW,s.lW,r.Hw,c.sg,T],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-wrap:wrap;padding:5px;border:1px solid rgba(39,35,35,.726)}.container[_ngcontent-%COMP%]   .group-item[_ngcontent-%COMP%]{flex:1 1 auto;margin:5px}"]}),n}(),_=[{path:"",component:(C=function(){function n(){e(this,n)}return t(n,[{key:"ngOnInit",value:function(){}}]),n}(),C.\u0275fac=function(n){return new(n||C)},C.\u0275cmp=a.Xpm({type:C,selectors:[["app-countdown"]],decls:4,vars:0,consts:[[1,"countdown"]],template:function(n,t){1&n&&(a.TgZ(0,"div"),a.TgZ(1,"div",0),a._UZ(2,"app-count-down-group"),a._UZ(3,"app-count-down-group"),a.qZA(),a.qZA())},directives:[D],styles:["app-count-down-group[_ngcontent-%COMP%]{flex:1 1 auto;margin:16px}.countdown[_ngcontent-%COMP%]{display:flex;flex-direction:row}"]}),C)}],O=function(){var n=function n(){e(this,n)};return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[[u.Bz.forChild(_)],u.Bz]}),n}(),$=((b=function n(){e(this,n)}).\u0275fac=function(n){return new(n||b)},b.\u0275mod=a.oAB({type:b}),b.\u0275inj=a.cJS({imports:[[c.ez,O,s.ot,r.Ps,k.Cv]]}),b)}}])}();