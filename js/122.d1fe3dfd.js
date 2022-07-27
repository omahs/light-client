(globalThis["webpackChunkraiden_dapp"]=globalThis["webpackChunkraiden_dapp"]||[]).push([[122],{15165:(t,c,e)=>{"use strict";e.r(c),e.d(c,{default:()=>O});var n=e(53892),s=function(){var t=this,c=t.$createElement,e=t._self._c||c;return e("div",{staticClass:"account-root",attrs:{"data-cy":"account_root"}},[e(n.Z,{staticClass:"account-root__identicon",attrs:{"no-gutters":""}},[e("header-identicon")],1),e("account-content")],1)},a=[],o=e(59312),i=e(57102),u=e(28508),_=e(97660),l=e(55429),r=e(50948),d=e(19021),m=e(3950),h=function(){var t=this,c=t.$createElement,s=t._self._c||c;return s("div",{staticClass:"account-content"},[t.isConnected?s("div",[s(n.Z,{staticClass:"account-content__account-details",attrs:{dense:""}},[s(u.Z,{attrs:{cols:"3"}},[s("span",{staticClass:"account-content__account-details__address"},[t._v(" "+t._s(t.$t("account-content.address"))+" ")])]),s(u.Z,{attrs:{cols:"9"}},[s("span",{staticClass:"account-content__account-details__address"},[s("address-display",{staticClass:"account-content__account-details__address__desktop",attrs:{address:t.defaultAccount,"full-address":""}}),s("address-display",{staticClass:"account-content__account-details__address__mobile",attrs:{address:t.defaultAccount}})],1)])],1),s(n.Z,{staticClass:"account-content__account-details__eth",attrs:{dense:""}},[s(u.Z,{attrs:{cols:"3"}},[s("span",{staticClass:"account-content__account-details__eth__account"},[t._v(" "+t._s(t.$t("account-content.account.main"))+" ")])]),s(u.Z,{attrs:{cols:"9"}},[s("span",{staticClass:"account-content__account-details__eth__balance"},[t._v(" "+t._s(t._f("decimals")(t.accountBalance))+" ")])])],1),t.useRaidenAccount?s(n.Z,{staticClass:"account-content__account-details__eth",attrs:{dense:""}},[s(u.Z,{attrs:{cols:"3"}},[s("span",{staticClass:"account-content__account-details__eth__account"},[t._v(" "+t._s(t.$t("account-content.account.raiden"))+" ")])]),s(u.Z,{attrs:{cols:"9"}},[s("span",{staticClass:"account-content__account-details__eth__balance"},[t._v(" "+t._s(t._f("decimals")(t.raidenAccountBalance))+" ")])])],1):t._e()],1):t._e(),s(r.Z,{staticClass:"account-content__menu",attrs:{"two-line":""}},t._l(t.menuItems,(function(c,n){return s(d.Z,{key:n,staticClass:"account-content__menu__list-items",attrs:{"data-cy":"account_content_menu_list_items",ripple:!1},on:{click:c.route}},[s("div",{staticClass:"account-content__menu__list-items__icon"},[s(l.Z,{attrs:{src:e(21279)("./"+c.icon),"max-width":"40px",height:"36px",contain:""}})],1),s(m.km,[s(m.V9,{staticClass:"account-content__menu__list-items__title"},[t._v(" "+t._s(c.title)+" ")]),s(m.oZ,[t._v(t._s(c.subtitle))])],1),s(_.Z,{staticClass:"account-content__menu__list-items__arrow"},[t._v(" mdi-chevron-right mdi-36px ")])],1)})),1),t.isConnected?s("div",{staticClass:"account-content__disconnect"},[s("span",{staticClass:"account-content__disconnect__button",on:{click:function(c){return t.disconnect()}}},[t._v(" "+t._s(t.$t("account-content.disconnect-button"))+" ")])]):t._e()],1)},p=[],g=e(77382),v=e(1560),b=e(55093),C=e(48473);const{mapState:f}=(0,g._p)("userSettings");let w=class extends((0,i.Wr)(b.Z)){constructor(){super(...arguments),this.menuItems=[]}async disconnect(){await this.$raiden.disconnect(),localStorage.removeItem("walletconnect"),this.$store.commit("setDisconnected"),this.$store.commit("reset")}mounted(){if(this.menuItems=[{icon:"account_state.svg",title:this.$t("account-content.menu-items.backup-state.title"),subtitle:this.$t("account-content.menu-items.backup-state.subtitle"),route:()=>{this.navigateToBackupState()}},{icon:"account_bug.svg",title:this.$t("account-content.menu-items.report-bugs.title"),subtitle:this.$t("account-content.menu-items.report-bugs.subtitle"),route:()=>{this.downloadLogs()}}],this.isConnected&&(this.menuItems.unshift({icon:"account_udc.svg",title:this.$t("account-content.menu-items.udc.title"),subtitle:this.$t("account-content.menu-items.udc.subtitle"),route:()=>{this.navigateToUDC()}}),this.useRaidenAccount)){const t={icon:"account_eth.svg",title:this.$t("account-content.menu-items.raiden-account.title"),subtitle:this.$t("account-content.menu-items.raiden-account.subtitle"),route:()=>{this.navigateToRaidenAccountTransfer()}},c={icon:"account_withdrawal.svg",title:this.$t("account-content.menu-items.withdrawal.title"),subtitle:this.$t("account-content.menu-items.withdrawal.subtitle"),route:()=>{this.navigateToWithdrawal()}};this.menuItems.unshift(c),this.menuItems.unshift(t)}this.isConnected||this.menuItems.unshift({icon:"gear.svg",title:this.$t("account-content.menu-items.settings.title"),subtitle:this.$t("account-content.menu-items.settings.subtitle"),route:()=>{this.navigateToSettings()}})}async downloadLogs(){const[t,c]=await(0,C.u)();let e="";try{e=`${this.$raiden.getAccount()}_`}catch(i){}const n=`raiden_${e}${new Date(t).toISOString()}.log`,s=new File([c],n,{type:"text/plain"}),a=URL.createObjectURL(s),o=document.createElement("a");o.href=a,o.download=n,o.style.display="none",document.body.appendChild(o),o.click(),setTimeout((()=>{URL.revokeObjectURL(a),document.body.removeChild(o)}),0)}};w=(0,o.__decorate)([(0,i.wA)({components:{AddressDisplay:v.Z},computed:{...(0,g.rn)(["isConnected","defaultAccount","accountBalance","raidenAccountBalance"]),...f(["useRaidenAccount"])}})],w);const $=w,Z=$;var k=e(79917),x=(0,k.Z)(Z,h,p,!1,null,"095b85b4",null);const y=x.exports;var A=e(55532);let I=class extends i.w3{};I=(0,o.__decorate)([(0,i.wA)({components:{AccountContent:y,HeaderIdenticon:A.Z}})],I);const T=I,R=T;var L=(0,k.Z)(R,s,a,!1,null,"047c50de",null);const O=L.exports},21279:(t,c,e)=>{var n={"./account_bug.svg":27113,"./account_eth.svg":27771,"./account_state.svg":77526,"./account_udc.svg":11037,"./account_withdrawal.svg":74588,"./gear.svg":90496};function s(t){var c=a(t);return e(c)}function a(t){if(!e.o(n,t)){var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=a,t.exports=s,s.id=21279},27113:(t,c,e)=>{"use strict";t.exports=e.p+"img/account_bug.40413cf7.svg"},27771:(t,c,e)=>{"use strict";t.exports=e.p+"img/account_eth.b3b0235f.svg"},77526:(t,c,e)=>{"use strict";t.exports=e.p+"img/account_state.81db7db8.svg"},11037:(t,c,e)=>{"use strict";t.exports=e.p+"img/account_udc.dddd4bf4.svg"},74588:(t,c,e)=>{"use strict";t.exports=e.p+"img/account_withdrawal.ccf85635.svg"},90496:(t,c,e)=>{"use strict";t.exports=e.p+"img/gear.622bcbe1.svg"}}]);