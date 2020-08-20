(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01872d34"],{"0306":function(t,e,n){"use strict";var r=n("5788"),a=n.n(r);a.a},"0b7e":function(t,e,n){"use strict";var r=n("4522"),a=n("36d1"),i=n("ff2d");e["a"]=Object(r["a"])(a["a"],Object(i["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),n={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",r=>{r&&(this.errorBag.hasOwnProperty(t._uid)||(n.valid=e(t)))}):n.valid=e(t),n},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const n=this.watchers.find(t=>t._uid===e._uid);n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},5788:function(t,e,n){},9114:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{justify:"center"}},[t.loading||t.error?t.error?r("v-row",{staticClass:"raiden-account__error",attrs:{"no-gutters":"",justify:"center",align:"center"}},[r("error-message",{attrs:{error:t.error}})],1):r("v-row",{staticClass:"raiden-account__progress-wrapper",attrs:{"no-gutters":"",justify:"center",align:"center"}},[r("spinner"),r("p",{staticClass:"raiden-account__progress-hint"},[t._v(" "+t._s(t.$t("raiden-account.in-progress"))+" ")])],1):r("v-form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.transfer(e)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-row",{staticClass:"raiden-account__title",attrs:{"no-gutters":"",justify:"center"}},[t.isFromMainToRaidenAccount?r("span",[t._v(" "+t._s(t.$t("raiden-account.transfer-from-main-account"))+" ")]):r("span",[t._v(" "+t._s(t.$t("raiden-account.transfer-from-raiden-account"))+" ")])]),r("v-row",{attrs:{"no-gutters":"",justify:"center"}},[r("v-col",{staticClass:"raiden-account__column",attrs:{cols:"3"}},[r("div",{staticClass:"raiden-account__column__card"},[t.isFromMainToRaidenAccount?r("span",{staticClass:"raiden-account__column__card__title"},[t._v(" "+t._s(t.$t("general.main-account"))+" ")]):r("span",{staticClass:"raiden-account__column__card__title"},[t._v(" "+t._s(t.$t("general.raiden-account"))+" ")]),r("div",{staticClass:"raiden-account__column__card__image"},[t.isFromMainToRaidenAccount?r("v-img",{attrs:{src:n("b872"),width:"30px",height:"53px"}}):r("v-img",{staticClass:"raiden-account__column__card__image__raiden-logo",attrs:{src:n("9b19")}})],1)])]),r("v-col",{staticClass:"raiden-account__column",attrs:{cols:"3"},on:{click:t.toggleDirection}},[r("v-btn",{attrs:{icon:""}},[r("v-img",{attrs:{width:"90px",height:"84px",src:n("e2f5")}})],1)],1),r("v-col",{staticClass:"raiden-account__column",attrs:{cols:"3"}},[r("div",{staticClass:"raiden-account__column__card"},[t.isFromMainToRaidenAccount?r("span",{staticClass:"raiden-account__column__card__title"},[t._v(" "+t._s(t.$t("general.raiden-account"))+" ")]):r("span",{staticClass:"raiden-account__column__card__title"},[t._v(" "+t._s(t.$t("general.main-account"))+" ")]),r("div",{staticClass:"raiden-account__column__card__image"},[t.isFromMainToRaidenAccount?r("v-img",{staticClass:"raiden-account__column__card__image__raiden-logo",attrs:{src:n("9b19")}}):r("v-img",{attrs:{src:n("b872"),width:"30px",height:"53px"}})],1)])])],1),r("v-row",{staticClass:"raiden-account__amount-input",attrs:{"no-gutters":"",justify:"center"}},[r("amount-input",{attrs:{token:t.token,max:t.maximumAmount,limit:""},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}}),r("v-btn",{staticClass:"raiden-account__amount-input__toggle",attrs:{icon:"",large:""},on:{click:t.toggleDirection}},[r("v-icon",{attrs:{large:"",color:"primary"}},[t._v("mdi-autorenew")])],1)],1),r("v-row",{staticClass:"raiden-account__transfer-button",attrs:{"no-gutters":"",justify:"center"}},[r("action-button",{attrs:{"full-width":"",enabled:t.valid,text:t.$t("general.buttons.transfer")}})],1)],1)],1)},a=[],i=n("4bf2"),o=n.n(i),c=n("e921"),s=n("66ba"),u=n("2b7f"),l=n("dbe0"),d=n("750b"),f=n("8e27"),_=n("0527"),h=n("38dd");function p(t){return p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){b(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function g(t,e,n,r,a,i,o){try{var c=t[i](o),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(r,a)}function y(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function o(t){g(i,r,a,o,c,"next",t)}function c(t){g(i,r,a,o,c,"throw",t)}o(void 0)}))}}function w(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function j(t,e,n){return e&&O(t.prototype,e),n&&O(t,n),t}function x(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&A(t,e)}function A(t,e){return A=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},A(t,e)}function B(t){var e=$();return function(){var n,r=P(t);if(e){var a=P(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return C(this,n)}}function C(t,e){return!e||"object"!==p(e)&&"function"!==typeof e?k(t):e}function k(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function $(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function P(t){return P=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},P(t)}var R=function(t){x(n,t);var e=B(n);function n(){var t;return w(this,n),t=e.apply(this,arguments),t.isFromMainToRaidenAccount=!0,t.amount="0.0",t.loading=!1,t.valid=!1,t.error=null,t.token={address:"0x1",decimals:18,symbol:"ETH",name:"Ether",balance:0},t}return j(n,[{key:"mounted",value:function(){this.amount=this.currentAccountBalance()}},{key:"currentAccountBalance",value:function(){return this.isFromMainToRaidenAccount?this.accountBalance:this.raidenAccountBalance}},{key:"toggleDirection",value:function(){this.$refs.form.reset(),this.isFromMainToRaidenAccount=!this.isFromMainToRaidenAccount,this.amount=this.currentAccountBalance()}},{key:"transfer",value:function(){var t=y(o.a.mark((function t(){return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.loading=!0,t.prev=1,!this.isFromMainToRaidenAccount){t.next=7;break}return t.next=5,this.$raiden.transferToRaidenAccount(this.amount);case 5:t.next=9;break;case 7:return t.next=9,this.$raiden.transferToMainAccount(this.amount);case 9:t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](1),this.error=t.t0;case 14:this.loading=!1,this.amount=this.currentAccountBalance();case 16:case"end":return t.stop()}}),t,this,[[1,11]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"maximumAmount",get:function(){return Object(h["bigNumberify"])(Object(h["parseEther"])(this.currentAccountBalance()))}}]),n}(s["e"]);R=Object(c["a"])([Object(s["a"])({components:{AmountInput:l["a"],ActionButton:d["a"],ErrorMessage:f["a"],Spinner:_["a"]},computed:v(v({},Object(u["f"])(["raidenAccountBalance","accountBalance"])),Object(u["d"])(["isConnected"]))})],R);var E=R,T=E,V=(n("0306"),n("3c13")),M=n("0c90"),F=n.n(M),D=n("f710"),S=n("6c75"),I=n("0b7e"),z=n("cf2c"),J=n("d27f"),H=n("609e"),N=Object(V["a"])(T,r,a,!1,null,"e8db51be",null);e["default"]=N.exports;F()(N,{VBtn:D["a"],VCol:S["a"],VForm:I["a"],VIcon:z["a"],VImg:J["a"],VRow:H["a"]})}}]);