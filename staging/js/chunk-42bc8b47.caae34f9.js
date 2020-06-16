(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42bc8b47"],{"1b2c":function(t,e,s){},"33aa":function(t,e,s){},"38cb":function(t,e,s){"use strict";var i=s("a9ad"),n=s("7560"),a=s("3206"),r=s("80d2"),o=s("d9bd"),l=s("58df");e["a"]=Object(l["a"])(i["a"],Object(a["a"])("form"),n["a"]).extend({name:"validatable",props:{disabled:Boolean,error:Boolean,errorCount:{type:[Number,String],default:1},errorMessages:{type:[String,Array],default:()=>[]},messages:{type:[String,Array],default:()=>[]},readonly:Boolean,rules:{type:Array,default:()=>[]},success:Boolean,successMessages:{type:[String,Array],default:()=>[]},validateOnBlur:Boolean,value:{required:!1}},data(){return{errorBucket:[],hasColor:!1,hasFocused:!1,hasInput:!1,isFocused:!1,isResetting:!1,lazyValue:this.value,valid:!1}},computed:{computedColor(){if(!this.disabled)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},hasError(){return this.internalErrorMessages.length>0||this.errorBucket.length>0||this.error},hasSuccess(){return this.internalSuccessMessages.length>0||this.success},externalError(){return this.internalErrorMessages.length>0||this.error},hasMessages(){return this.validationTarget.length>0},hasState(){return!this.disabled&&(this.hasSuccess||this.shouldValidate&&this.hasError)},internalErrorMessages(){return this.genInternalMessages(this.errorMessages)},internalMessages(){return this.genInternalMessages(this.messages)},internalSuccessMessages(){return this.genInternalMessages(this.successMessages)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("input",t)}},shouldValidate(){return!!this.externalError||!this.isResetting&&(this.validateOnBlur?this.hasFocused&&!this.isFocused:this.hasInput||this.hasFocused)},validations(){return this.validationTarget.slice(0,Number(this.errorCount))},validationState(){if(!this.disabled)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.computedColor:void 0},validationTarget(){return this.internalErrorMessages.length>0?this.internalErrorMessages:this.successMessages.length>0?this.internalSuccessMessages:this.messages.length>0?this.internalMessages:this.shouldValidate?this.errorBucket:[]}},watch:{rules:{handler(t,e){Object(r["i"])(t,e)||this.validate()},deep:!0},internalValue(){this.hasInput=!0,this.validateOnBlur||this.$nextTick(this.validate)},isFocused(t){t||this.disabled||(this.hasFocused=!0,this.validateOnBlur&&this.$nextTick(this.validate))},isResetting(){setTimeout(()=>{this.hasInput=!1,this.hasFocused=!1,this.isResetting=!1,this.validate()},0)},hasError(t){this.shouldValidate&&this.$emit("update:error",t)},value(t){this.lazyValue=t}},beforeMount(){this.validate()},created(){this.form&&this.form.register(this)},beforeDestroy(){this.form&&this.form.unregister(this)},methods:{genInternalMessages(t){return t?Array.isArray(t)?t:[t]:[]},reset(){this.isResetting=!0,this.internalValue=Array.isArray(this.internalValue)?[]:void 0},resetValidation(){this.isResetting=!0},validate(t=!1,e){const s=[];e=e||this.internalValue,t&&(this.hasInput=this.hasFocused=!0);for(let i=0;i<this.rules.length;i++){const t=this.rules[i],n="function"===typeof t?t(e):t;!1===n||"string"===typeof n?s.push(n||""):"boolean"!==typeof n&&Object(o["b"])(`Rules should return a string or boolean, received '${typeof n}' instead`,this)}return this.errorBucket=s,this.valid=0===s.length,this.valid}}})},"458a":function(t,e,s){"use strict";var i=s("33aa"),n=s.n(i);n.a},"5d16":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"settings"},[s("v-list",{attrs:{"two-line":"",subheader:""}},[s("v-list-item",[s("v-list-item-content",[s("v-list-item-title",[t._v(" "+t._s(t.$t("settings.raiden-account.title"))+" ")]),s("v-list-item-subtitle",[t._v(" "+t._s(t.$t("settings.raiden-account.description"))+" ")])],1),s("v-list-item-action",[s("v-switch",{on:{change:t.toggleMainAccount},model:{value:t.settings.useRaidenAccount,callback:function(e){t.$set(t.settings,"useRaidenAccount",e)},expression:"settings.useRaidenAccount"}})],1)],1)],1)],1)},n=[],a=s("9ab4"),r=s("60a3"),o=s("2f62");function l(t){return l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function h(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function u(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?h(Object(s),!0).forEach((function(e){c(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):h(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function c(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){for(var s=0;s<e.length;s++){var i=e[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function g(t,e,s){return e&&p(t.prototype,e),s&&p(t,s),t}function f(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}function v(t,e){return v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},v(t,e)}function b(t){var e=S();return function(){var s,i=w(t);if(e){var n=w(this).constructor;s=Reflect.construct(i,arguments,n)}else s=i.apply(this,arguments);return m(this,s)}}function m(t,e){return!e||"object"!==l(e)&&"function"!==typeof e?y(t):e}function y(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function S(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function w(t){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},w(t)}var C=function(t){f(s,t);var e=b(s);function s(){return d(this,s),e.apply(this,arguments)}return g(s,[{key:"toggleMainAccount",value:function(){this.$store.commit("updateSettings",this.settings)}}]),s}(r["e"]);C=Object(a["b"])([Object(r["a"])({computed:u({},Object(o["c"])(["settings"]))})],C);var O=C,V=O,j=(s("458a"),s("2877")),$=s("6544"),_=s.n($),k=s("88605"),M=s("da13"),D=s("1800"),E=s("5d23"),A=(s("ec29"),s("9d01"),s("c37a")),I=s("5607"),B=s("2b0e"),x=B["a"].extend({name:"rippleable",directives:{ripple:I["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),t.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",t)):null},onChange(){}}}),P=s("8547"),T=s("58df"),R=Object(T["a"])(A["a"],x,P["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some(e=>this.valueComparator(e,t)):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.disabled||this.validationState?this.validationState:void 0}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=A["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:t=>{t.preventDefault(),this.onChange()}},t):t},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur(){this.isFocused=!1},onChange(){if(this.isDisabled)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const s=e.length;e=e.filter(e=>!this.valueComparator(e,t)),e.length===s&&e.push(t)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(e,t)?null:t:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(){this.isFocused=!0},onKeydown(t){}}}),L=s("80d2");const F=t=>{const{touchstartX:e,touchendX:s,touchstartY:i,touchendY:n}=t,a=.5,r=16;t.offsetX=s-e,t.offsetY=n-i,Math.abs(t.offsetY)<a*Math.abs(t.offsetX)&&(t.left&&s<e-r&&t.left(t),t.right&&s>e+r&&t.right(t)),Math.abs(t.offsetX)<a*Math.abs(t.offsetY)&&(t.up&&n<i-r&&t.up(t),t.down&&n>i+r&&t.down(t))};function X(t,e){const s=t.changedTouches[0];e.touchstartX=s.clientX,e.touchstartY=s.clientY,e.start&&e.start(Object.assign(t,e))}function Y(t,e){const s=t.changedTouches[0];e.touchendX=s.clientX,e.touchendY=s.clientY,e.end&&e.end(Object.assign(t,e)),F(e)}function z(t,e){const s=t.changedTouches[0];e.touchmoveX=s.clientX,e.touchmoveY=s.clientY,e.move&&e.move(Object.assign(t,e))}function H(t){const e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:t=>X(t,e),touchend:t=>Y(t,e),touchmove:t=>z(t,e)}}function N(t,e,s){const i=e.value,n=i.parent?t.parentElement:t,a=i.options||{passive:!0};if(!n)return;const r=H(e.value);n._touchHandlers=Object(n._touchHandlers),n._touchHandlers[s.context._uid]=r,Object(L["w"])(r).forEach(t=>{n.addEventListener(t,r[t],a)})}function q(t,e,s){const i=e.value.parent?t.parentElement:t;if(!i||!i._touchHandlers)return;const n=i._touchHandlers[s.context._uid];Object(L["w"])(n).forEach(t=>{i.removeEventListener(t,n[t])}),delete i._touchHandlers[s.context._uid]}const K={inserted:N,unbind:q};var J=K,U=s("0789"),G=s("490a"),Q=R.extend({name:"v-switch",directives:{Touch:J},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes(){return{...A["a"].options.computed.classes.call(this),"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset}},attrs(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.disabled),role:"switch"}},validationState(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot(){return[this.genSwitch(),this.genLabel()]},genSwitch(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",{...this.attrs,...this.attrs$}),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",{staticClass:"v-input--switch__track",...this.switchData}),this.$createElement("div",{staticClass:"v-input--switch__thumb",...this.switchData},[this.genProgress()])])},genProgress(){return this.$createElement(U["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(G["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft(){this.isActive&&this.onChange()},onSwipeRight(){this.isActive||this.onChange()},onKeydown(t){(t.keyCode===L["v"].left&&this.isActive||t.keyCode===L["v"].right&&!this.isActive)&&this.onChange()}}}),W=Object(j["a"])(V,i,n,!1,null,"a3fb0cce",null);e["default"]=W.exports;_()(W,{VList:k["a"],VListItem:M["a"],VListItemAction:D["a"],VListItemContent:E["b"],VListItemSubtitle:E["c"],VListItemTitle:E["d"],VSwitch:Q})},8547:function(t,e,s){"use strict";var i=s("2b0e"),n=s("80d2");e["a"]=i["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:n["i"]}}})},"8ff2":function(t,e,s){},"9d01":function(t,e,s){},ba87:function(t,e,s){"use strict";s("1b2c");var i=s("a9ad"),n=s("7560"),a=s("58df"),r=s("80d2"),o=Object(a["a"])(n["a"]).extend({name:"v-label",functional:!0,props:{absolute:Boolean,color:{type:String,default:"primary"},disabled:Boolean,focused:Boolean,for:String,left:{type:[Number,String],default:0},right:{type:[Number,String],default:"auto"},value:Boolean},render(t,e){const{children:s,listeners:a,props:o}=e,l={staticClass:"v-label",class:{"v-label--active":o.value,"v-label--is-disabled":o.disabled,...Object(n["b"])(e)},attrs:{for:o.for,"aria-hidden":!o.for},on:a,style:{left:Object(r["g"])(o.left),right:Object(r["g"])(o.right),position:o.absolute?"absolute":"relative"},ref:"label"};return t("label",i["a"].options.methods.setTextColor(o.focused&&o.color,l),s)}});e["a"]=o},c37a:function(t,e,s){"use strict";s("d191");var i=s("9d26"),n=s("ba87"),a=(s("8ff2"),s("a9ad")),r=s("7560"),o=s("58df"),l=s("80d2"),h=Object(o["a"])(a["a"],r["a"]).extend({name:"v-messages",props:{value:{type:Array,default:()=>[]}},methods:{genChildren(){return this.$createElement("transition-group",{staticClass:"v-messages__wrapper",attrs:{name:"message-transition",tag:"div"}},this.value.map(this.genMessage))},genMessage(t,e){return this.$createElement("div",{staticClass:"v-messages__message",key:e},Object(l["q"])(this,"default",{message:t,key:e})||[t])}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-messages",class:this.themeClasses}),[this.genChildren()])}}),u=h,c=s("7e2b"),d=s("38cb"),p=s("d9f7");const g=Object(o["a"])(c["a"],d["a"]);var f=g.extend().extend({name:"v-input",inheritAttrs:!1,props:{appendIcon:String,backgroundColor:{type:String,default:""},dense:Boolean,height:[Number,String],hideDetails:[Boolean,String],hint:String,id:String,label:String,loading:Boolean,persistentHint:Boolean,prependIcon:String,value:null},data(){return{lazyValue:this.value,hasMouseDown:!1}},computed:{classes(){return{"v-input--has-state":this.hasState,"v-input--hide-details":!this.showDetails,"v-input--is-label-active":this.isLabelActive,"v-input--is-dirty":this.isDirty,"v-input--is-disabled":this.disabled,"v-input--is-focused":this.isFocused,"v-input--is-loading":!1!==this.loading&&null!=this.loading,"v-input--is-readonly":this.readonly,"v-input--dense":this.dense,...this.themeClasses}},computedId(){return this.id||"input-"+this._uid},hasDetails(){return this.messagesToDisplay.length>0},hasHint(){return!this.hasMessages&&!!this.hint&&(this.persistentHint||this.isFocused)},hasLabel(){return!(!this.$slots.label&&!this.label)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit(this.$_modelEvent,t)}},isDirty(){return!!this.lazyValue},isDisabled(){return this.disabled||this.readonly},isLabelActive(){return this.isDirty},messagesToDisplay(){return this.hasHint?[this.hint]:this.hasMessages?this.validations.map(t=>{if("string"===typeof t)return t;const e=t(this.internalValue);return"string"===typeof e?e:""}).filter(t=>""!==t):[]},showDetails(){return!1===this.hideDetails||"auto"===this.hideDetails&&this.hasDetails}},watch:{value(t){this.lazyValue=t}},beforeCreate(){this.$_modelEvent=this.$options.model&&this.$options.model.event||"input"},methods:{genContent(){return[this.genPrependSlot(),this.genControl(),this.genAppendSlot()]},genControl(){return this.$createElement("div",{staticClass:"v-input__control"},[this.genInputSlot(),this.genMessages()])},genDefaultSlot(){return[this.genLabel(),this.$slots.default]},genIcon(t,e,s={}){const n=this[t+"Icon"],a="click:"+Object(l["u"])(t),r=!(!this.listeners$[a]&&!e),o=Object(p["a"])({attrs:{"aria-label":r?Object(l["u"])(t).split("-")[0]+" icon":void 0,color:this.validationState,dark:this.dark,disabled:this.disabled,light:this.light},on:r?{click:t=>{t.preventDefault(),t.stopPropagation(),this.$emit(a,t),e&&e(t)},mouseup:t=>{t.preventDefault(),t.stopPropagation()}}:void 0},s);return this.$createElement("div",{staticClass:"v-input__icon",class:t?"v-input__icon--"+Object(l["u"])(t):void 0},[this.$createElement(i["a"],o,n)])},genInputSlot(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor,{staticClass:"v-input__slot",style:{height:Object(l["g"])(this.height)},on:{click:this.onClick,mousedown:this.onMouseDown,mouseup:this.onMouseUp},ref:"input-slot"}),[this.genDefaultSlot()])},genLabel(){return this.hasLabel?this.$createElement(n["a"],{props:{color:this.validationState,dark:this.dark,disabled:this.disabled,focused:this.hasState,for:this.computedId,light:this.light}},this.$slots.label||this.label):null},genMessages(){return this.showDetails?this.$createElement(u,{props:{color:this.hasHint?"":this.validationState,dark:this.dark,light:this.light,value:this.messagesToDisplay},attrs:{role:this.hasMessages?"alert":null},scopedSlots:{default:t=>Object(l["q"])(this,"message",t)}}):null},genSlot(t,e,s){if(!s.length)return null;const i=`${t}-${e}`;return this.$createElement("div",{staticClass:"v-input__"+i,ref:i},s)},genPrependSlot(){const t=[];return this.$slots.prepend?t.push(this.$slots.prepend):this.prependIcon&&t.push(this.genIcon("prepend")),this.genSlot("prepend","outer",t)},genAppendSlot(){const t=[];return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","outer",t)},onClick(t){this.$emit("click",t)},onMouseDown(t){this.hasMouseDown=!0,this.$emit("mousedown",t)},onMouseUp(t){this.hasMouseDown=!1,this.$emit("mouseup",t)}},render(t){return t("div",this.setTextColor(this.validationState,{staticClass:"v-input",class:this.classes}),this.genContent())}});e["a"]=f},d191:function(t,e,s){},ec29:function(t,e,s){}}]);