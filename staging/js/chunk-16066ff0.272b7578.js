(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16066ff0"],{"07e6":function(t,e,n){t.exports=n.p+"img/info.c9b975f7.svg"},"0c96":function(t,e,n){},1149:function(t,e,n){},"1e36":function(t,e,n){"use strict";var i=n("b9c4"),o=n("325c"),r=n("a9b5"),s=n("d9d8"),c=n("aaa0");e["a"]=Object(s["a"])(i["a"],o["a"]).extend({name:"VLazy",directives:{intersect:r["a"]},props:{options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},tag:{type:String,default:"div"},transition:{type:String,default:"fade-transition"}},computed:{styles(){return{...this.measurableStyles}}},methods:{genContent(){const t=Object(c["r"])(this);if(!this.transition)return t;const e=[];return this.isActive&&e.push(t),this.$createElement("transition",{props:{name:this.transition}},e)},onObserve(t,e,n){this.isActive||(this.isActive=n)}},render(t){return t(this.tag,{staticClass:"v-lazy",attrs:this.$attrs,directives:[{name:"intersect",value:{handler:this.onObserve,options:this.options}}],on:this.$listeners,style:this.styles},[this.genContent()])}})},"1ffc":function(t,e,n){t.exports=n.p+"img/state.ff4426c1.svg"},2886:function(t,e,n){t.exports=n.p+"img/sent_transfer.087bd404.svg"},"2d14":function(t,e,n){t.exports=n.p+"img/down_arrow.d7fcc637.svg"},"2e1f":function(t,e,n){t.exports=n.p+"img/done.51f3a970.svg"},"2ee5":function(t,e,n){t.exports=n.p+"img/error.f52d5069.svg"},"31e8":function(t,e,n){var i={"./back_arrow.svg":"73da","./bug.svg":"c0e3","./deposit.svg":"d989","./done.svg":"2e1f","./down_arrow.svg":"2d14","./error.svg":"2ee5","./eth.svg":"b872","./eth_transfer_arrow.svg":"e2f5","./gear.svg":"5cc9","./generic.svg":"ec79","./info.svg":"07e6","./input_invalid.svg":"c2ff","./input_valid.svg":"b376","./logo.svg":"9b19","./metamask.svg":"d6c5","./notification_block.svg":"756c","./notification_channels.svg":"b517","./notification_settle.svg":"e326","./notification_trash.svg":"d6b2","./notifications.svg":"4170","./received_transfer.svg":"5b9b","./sent_transfer.svg":"2886","./state.svg":"1ffc","./udc.svg":"8fe8","./warning.svg":"afb7","./withdrawal.svg":"45f0"};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}o.keys=function(){return Object.keys(i)},o.resolve=r,t.exports=o,o.id="31e8"},"45f0":function(t,e,n){t.exports=n.p+"img/withdrawal.c80c3337.svg"},"5b58":function(t,e,n){"use strict";n("0c96");var i=n("8c81"),o=n("b9c4"),r=n("2fa2"),s=n("aaa0"),c=n("d9d8");e["a"]=Object(c["a"])(i["a"],o["a"],r["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes(){return{"v-avatar--left":this.left,"v-avatar--right":this.right,...this.roundedClasses}},styles(){return{height:Object(s["g"])(this.size),minWidth:Object(s["g"])(this.size),width:Object(s["g"])(this.size),...this.measurableStyles}}},render(t){const e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}})},"5b9b":function(t,e,n){t.exports=n.p+"img/received_transfer.ef6596cc.svg"},"5cc9":function(t,e,n){t.exports=n.p+"img/gear.263a7ddf.svg"},"78ed":function(t,e,n){},"8fe8":function(t,e,n){t.exports=n.p+"img/udc.a4ddd71a.svg"},"9cdf":function(t,e,n){"use strict";n("c7d4");var i=n("1495");e["a"]=i["a"].extend().extend({name:"v-list",provide(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:()=>({groups:[]}),computed:{classes(){return{...i["a"].options.computed.classes.call(this),"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine}}},methods:{register(t){this.groups.push(t)},unregister(t){const e=this.groups.findIndex(e=>e._uid===t._uid);e>-1&&this.groups.splice(e,1)},listClick(t){if(!this.expand)for(const e of this.groups)e.toggle(t)}},render(t){const e={staticClass:"v-list",class:this.classes,style:this.styles,attrs:{role:this.isInNav||this.isInMenu?void 0:"list",...this.attrs$}};return t(this.tag,this.setBackgroundColor(this.color,e),[this.$slots.default])}})},a4ad:function(t,e,n){"use strict";var i=n("1149"),o=n.n(i);o.a},afb7:function(t,e,n){t.exports=n.p+"img/warning.49bc56a9.svg"},b376:function(t,e,n){t.exports=n.p+"img/input_valid.762cb0ae.svg"},b517:function(t,e,n){t.exports=n.p+"img/notification_channels.e8a0318a.svg"},b872:function(t,e,n){t.exports=n.p+"img/eth.640d53f2.svg"},c099:function(t,e,n){},c0e3:function(t,e,n){t.exports=n.p+"img/bug.4e8b8f1b.svg"},c284:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"notification-panel"}},[n("div",{staticClass:"notification-panel-content"},[n("div",{staticClass:"notification-panel-content__close"},[n("v-btn",{attrs:{text:""},on:{click:function(e){return t.clear()}}},[t._v(" "+t._s(t.$t("notifications.clear"))+" ")]),n("v-spacer"),n("v-icon",{attrs:{icon:""},on:{click:function(e){return t.onModalBackClicked()}}},[t._v("mdi-close")])],1),0===t.notifications.length?n("v-row",{staticClass:"notification-panel-content__no-notifications full-height",attrs:{"no-gutters":"",justify:"center",align:"center"}},[t._v(" "+t._s(t.$t("notifications.no-notifications"))+" ")]):n("v-container",{staticClass:"notification-panel-content__notifications",attrs:{fluid:""}},[n("div",{staticClass:"notification-panel-content__notifications__notification-wrapper"},[n("v-list",{attrs:{color:"transparent"}},t._l(t.notifications,(function(t){return n("div",{key:t.id},[n("v-lazy",{attrs:{transition:"fade-transition",options:{threshold:.7},"min-height":"110"}},[n("notification-card",{staticClass:"notification-panel-content__notifications__notification-wrapper__notification",attrs:{notification:t}})],1)],1)})),0)],1)])],1)])},o=[],r=n("e921"),s=n("8509"),c=n("2b7f"),a=n("152b"),f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticClass:"notification-card",attrs:{flat:""}},[i("v-row",{staticClass:"notification-card__content",attrs:{"no-gutters":""}},[i("v-avatar",{staticClass:"notification-card__content__icon",attrs:{size:"44",rounded:""}},[i("img",{attrs:{src:n("31e8")("./"+t.notification.icon+".svg")}})]),i("div",{staticClass:"notification-card__content__details"},[i("span",{staticClass:"notification-card__content__details__title"},[t._v(" "+t._s(t.notification.title)+" ")]),i("notification-description-display",{staticClass:"notification-card__content__details__description",attrs:{description:t.notification.description}}),t.notification.txConfirmationBlock?i("div",{staticClass:"notification-card__content__details__block-count"},[t.blockCountInProgress?i("span",[t._v(" "+t._s(t.$t("notifications.block-count-progress"))+" "+t._s(t.notification.txConfirmationBlock-t.blockNumber)+" ")]):i("span",[t._v(" "+t._s(t.$t("notifications.channel-open.success.block-count-success"))+" ")])]):t._e(),i("span",{staticClass:"notification-card__content__details__received"},[t._v(" "+t._s(t._f("formatDate")(t.notification.received))+" ")])],1),i("v-btn",{attrs:{"x-small":"",icon:""},on:{click:function(e){return t.notificationDelete(t.notification.id)}}},[i("img",{attrs:{src:n("d6b2")}})])],1)],1)},u=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"notification-description"},t._l(t.splitDescription,(function(e,i){return n("p",{key:i},[t.isAddress(e)?[n("address-display",{staticClass:"notification-description__address",attrs:{address:e}})]:[t._v(" "+t._s(e)+" ")]],2)})),0)},p=[],d=n("9302");function b(t){return b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function g(t,e,n){return e&&h(t.prototype,e),n&&h(t,n),t}function y(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_(t,e)}function _(t,e){return _=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},_(t,e)}function m(t){var e=w();return function(){var n,i=x(t);if(e){var o=x(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return O(this,n)}}function O(t,e){return!e||"object"!==b(e)&&"function"!==typeof e?j(t):e}function j(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function w(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function x(t){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},x(t)}var C=function(t){y(n,t);var e=m(n);function n(){var t;return v(this,n),t=e.apply(this,arguments),t.addressRegEx=/(0x.[a-fA-F0-9]{1,40})/g,t.splitDescription=[],t}return g(n,[{key:"isAddress",value:function(t){return this.addressRegEx.test(t)}},{key:"mounted",value:function(){this.splitDescription=this.description.split(this.addressRegEx)}}]),n}(s["e"]);Object(r["a"])([Object(s["d"])({required:!0})],C.prototype,"description",void 0),C=Object(r["a"])([Object(s["a"])({components:{AddressDisplay:d["a"]}})],C);var k=C,P=k,S=(n("a4ad"),n("3c13")),D=Object(S["a"])(P,l,p,!1,null,"649cf25c",null),R=D.exports;function E(t){return E="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function B(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function $(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?B(Object(n),!0).forEach((function(e){V(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function V(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function N(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function z(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function I(t,e,n){return e&&z(t.prototype,e),n&&z(t,n),t}function L(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&A(t,e)}function A(t,e){return A=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},A(t,e)}function T(t){var e=F();return function(){var n,i=J(t);if(e){var o=J(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return M(this,n)}}function M(t,e){return!e||"object"!==E(e)&&"function"!==typeof e?q(t):e}function q(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function F(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function J(t){return J=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},J(t)}var U=Object(c["a"])("notifications"),W=U.mapMutations,G=function(t){L(n,t);var e=T(n);function n(){return N(this,n),e.apply(this,arguments)}return I(n,[{key:"blockCountInProgress",get:function(){return!!this.notification.txConfirmationBlock&&(!this.notification.txConfirmed&&this.notification.txConfirmationBlock>this.blockNumber)}}]),n}(s["e"]);Object(r["a"])([Object(s["d"])({required:!0})],G.prototype,"notification",void 0),G=Object(r["a"])([Object(s["a"])({components:{NotificationDescriptionDisplay:R},computed:Object(c["e"])(["blockNumber"]),methods:$({},W(["notificationDelete"]))})],G);var H=G,K=H,Q=(n("fa2b"),n("5961")),X=n.n(Q),Y=n("5b58"),Z=n("b2b2"),tt=n("2567"),et=n("e3a9"),nt=Object(S["a"])(K,f,u,!1,null,"6a3e5df0",null),it=nt.exports;function ot(t){return ot="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ot(t)}function rt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function st(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?rt(Object(n),!0).forEach((function(e){ct(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):rt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function ct(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function at(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ft(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ut(t,e)}function ut(t,e){return ut=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},ut(t,e)}function lt(t){var e=bt();return function(){var n,i=vt(t);if(e){var o=vt(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return pt(this,n)}}function pt(t,e){return!e||"object"!==ot(e)&&"function"!==typeof e?dt(t):e}function dt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function bt(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function vt(t){return vt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},vt(t)}X()(nt,{VAvatar:Y["a"],VBtn:Z["a"],VCard:tt["a"],VRow:et["a"]});var ht=function(t){ft(n,t);var e=lt(n);function n(){return at(this,n),e.apply(this,arguments)}return n}(Object(s["c"])(a["a"]));ht=Object(r["a"])([Object(s["a"])({components:{NotificationCard:it},computed:st({},Object(c["c"])("notifications",["notifications"])),methods:st({},Object(c["d"])("notifications",["clear"]))})],ht);var gt=ht,yt=gt,_t=(n("cec8"),n("5c28")),mt=n("8b2c"),Ot=n("1e36"),jt=n("9cdf"),wt=(n("4a40"),n("aaa0")),xt=Object(wt["h"])("spacer","div","v-spacer"),Ct=Object(S["a"])(yt,i,o,!1,null,"847d5494",null);e["default"]=Ct.exports;X()(Ct,{VBtn:Z["a"],VContainer:_t["a"],VIcon:mt["a"],VLazy:Ot["a"],VList:jt["a"],VRow:et["a"],VSpacer:xt})},c2ff:function(t,e,n){t.exports=n.p+"img/input_invalid.4e8b2468.svg"},c7d4:function(t,e,n){},cec8:function(t,e,n){"use strict";var i=n("c099"),o=n.n(i);o.a},d6b2:function(t,e,n){t.exports=n.p+"img/notification_trash.b24d544c.svg"},d6c5:function(t,e,n){t.exports=n.p+"img/metamask.c879a582.svg"},d989:function(t,e,n){t.exports=n.p+"img/deposit.d1f000b7.svg"},e2f5:function(t,e,n){t.exports=n.p+"img/eth_transfer_arrow.cdc92be6.svg"},e326:function(t,e,n){t.exports=n.p+"img/notification_settle.d0da77d6.svg"},ec79:function(t,e,n){t.exports=n.p+"img/generic.55c56a33.svg"},fa2b:function(t,e,n){"use strict";var i=n("78ed"),o=n.n(i);o.a}}]);