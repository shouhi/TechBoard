(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{544:function(t,e,n){"use strict";var r=n(546),o=n(547);t.exports=r("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},546:function(t,e,n){"use strict";var r=n(6),o=n(14),c=n(120),l=n(43),f=n(400),d=n(399),v=n(155),h=n(29),y=n(12),m=n(194),O=n(87),w=n(195);t.exports=function(t,e,n){var x=-1!==t.indexOf("Map"),j=-1!==t.indexOf("Weak"),k=x?"set":"add",S=o[t],P=S&&S.prototype,_=S,C={},E=function(t){var e=P[t];l(P,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(j&&!h(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return j&&!h(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(j&&!h(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(c(t,"function"!=typeof S||!(j||P.forEach&&!y((function(){(new S).entries().next()})))))_=n.getConstructor(e,t,x,k),f.REQUIRED=!0;else if(c(t,!0)){var $=new _,B=$[k](j?{}:-0,1)!=$,V=y((function(){$.has(1)})),D=m((function(t){new S(t)})),R=!j&&y((function(){for(var t=new S,e=5;e--;)t[k](e,e);return!t.has(-0)}));D||((_=e((function(e,n){v(e,_,t);var r=w(new S,e,_);return null!=n&&d(n,r[k],{that:r,AS_ENTRIES:x}),r}))).prototype=P,P.constructor=_),(V||R)&&(E("delete"),E("has"),x&&E("get")),(R||B)&&E(k),j&&P.clear&&delete P.clear}return C[t]=_,r({global:!0,forced:_!=S},C),O(_,t),j||n.setStrong(_,t,x),_}},547:function(t,e,n){"use strict";var r=n(40).f,o=n(98),c=n(192),l=n(86),f=n(155),d=n(399),v=n(191),h=n(193),y=n(37),m=n(400).fastKey,O=n(68),w=O.set,x=O.getterFor;t.exports={getConstructor:function(t,e,n,v){var h=t((function(t,r){f(t,h,e),w(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),y||(t.size=0),null!=r&&d(r,t[v],{that:t,AS_ENTRIES:n})})),O=x(e),j=function(t,e,n){var r,o,c=O(t),l=k(t,e);return l?l.value=n:(c.last=l={index:o=m(e,!0),key:e,value:n,previous:r=c.last,next:void 0,removed:!1},c.first||(c.first=l),r&&(r.next=l),y?c.size++:t.size++,"F"!==o&&(c.index[o]=l)),t},k=function(t,e){var n,r=O(t),o=m(e);if("F"!==o)return r.index[o];for(n=r.first;n;n=n.next)if(n.key==e)return n};return c(h.prototype,{clear:function(){for(var t=O(this),data=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete data[e.index],e=e.next;t.first=t.last=void 0,y?t.size=0:this.size=0},delete:function(t){var e=O(this),n=k(this,t);if(n){var r=n.next,o=n.previous;delete e.index[n.index],n.removed=!0,o&&(o.next=r),r&&(r.previous=o),e.first==n&&(e.first=r),e.last==n&&(e.last=o),y?e.size--:this.size--}return!!n},forEach:function(t){for(var e,n=O(this),r=l(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:n.first;)for(r(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!k(this,t)}}),c(h.prototype,n?{get:function(t){var e=k(this,t);return e&&e.value},set:function(t,e){return j(this,0===t?0:t,e)}}:{add:function(t){return j(this,t=0===t?0:t,t)}}),y&&r(h.prototype,"size",{get:function(){return O(this).size}}),h},setStrong:function(t,e,n){var r=e+" Iterator",o=x(e),c=x(r);v(t,e,(function(t,e){w(this,{type:r,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=c(this),e=t.kind,n=t.last;n&&n.removed;)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),h(e)}}},551:function(t,e,n){"use strict";n(66),n(33),n(156),n(79),n(544),n(19),n(77),n(22),n(28),n(78),n(55),n(67),n(84),n(96);var r=n(4),o=(n(545),n(3)),c=n(97),l=n(2);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],h=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),y=v.reduce((function(t,e){return t["offset"+Object(l.w)(e)]={type:[String,Number],default:null},t}),{}),m=v.reduce((function(t,e){return t["order"+Object(l.w)(e)]={type:[String,Number],default:null},t}),{}),O={col:Object.keys(h),offset:Object.keys(y),order:Object.keys(m)};function w(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var x=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},h),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},m),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var d=x.get(l);return d||function(){var t,e;for(e in d=[],O)O[e].forEach((function(t){var r=n[t],o=w(e,t,r);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),x.set(l,d)}(),t(n.tag,Object(c.a)(data,{class:d}),o)}})},553:function(t,e,n){"use strict";n(27),n(66),n(33),n(156),n(544),n(77),n(22),n(28),n(52),n(78),n(55),n(84),n(96);var r=n(4),o=(n(545),n(3)),c=n(97),l=n(2);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],h=["start","end","center"];function y(t,e){return v.reduce((function(n,r){return n[t+Object(l.w)(r)]=e(),n}),{})}var m=function(t){return[].concat(h,["baseline","stretch"]).includes(t)},O=y("align",(function(){return{type:String,default:null,validator:m}})),w=function(t){return[].concat(h,["space-between","space-around"]).includes(t)},x=y("justify",(function(){return{type:String,default:null,validator:w}})),j=function(t){return[].concat(h,["space-between","space-around","stretch"]).includes(t)},k=y("alignContent",(function(){return{type:String,default:null,validator:j}})),S={align:Object.keys(O),justify:Object.keys(x),alignContent:Object.keys(k)},P={align:"align",justify:"justify",alignContent:"align-content"};function _(t,e,n){var r=P[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var C=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:m}},O),{},{justify:{type:String,default:null,validator:w}},x),{},{alignContent:{type:String,default:null,validator:j}},k),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var f in n)l+=String(n[f]);var d=C.get(l);return d||function(){var t,e;for(e in d=[],S)S[e].forEach((function(t){var r=n[t],o=_(e,t,r);o&&d.push(o)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),C.set(l,d)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:d}),o)}})},560:function(t,e,n){t.exports=n.p+"img/btn_google_signin_dark_pressed_web@2x.bb5b0d6.png"},561:function(t,e,n){t.exports=n.p+"img/66389811_2420388444687325_4985302625051213824_n.2ce5a50.png"},671:function(t,e,n){"use strict";n(119),n(85),n(66),n(33),n(201),n(52),n(84),n(39);var r=n(4),o=n(9),c=n(123),l=n(199);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:d({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},743:function(t,e,n){"use strict";n.r(e);n(46);var r=n(8),o=n(92),c=n.n(o),l={name:"App",components:{},data:function(){return{showPassword:!1,usermail:"",userpass:"",nexturl:"",localDatas:void 0}},computed:{},mounted:function(){this.nexturl=this.$route.query.url},methods:{onGoogle:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new c.a.auth.GoogleAuthProvider,t.next=3,c.a.auth().signInWithPopup(e);case 3:case"end":return t.stop()}}),t)})))()},onFacebook:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new c.a.auth.FacebookAuthProvider,t.next=3,c.a.auth().signInWithPopup(e);case 3:case"end":return t.stop()}}),t)})))()},onEmail:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.auth().signInWithEmailAndPassword(t.usermail,t.userpass);case 2:case"end":return e.stop()}}),e)})))()},login:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e.$nuxt.$loading.start(),n.next=4,t();case 4:e.$nuxt.$loading.finish(),e.nexturl?e.$router.push(decodeURI(e.nexturl)):e.$router.push("dashboard"),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),e.$nuxt.$emit("openSnackbar",{color:"error",text:e.$utils.errorMessage(n.t0),timeout:1e4});case 11:e.$nuxt.$loading.finish();case 12:case"end":return n.stop()}}),n,null,[[0,8]])})))()},onSignup:function(t){this.$router.push("/signup")}}},f=n(32),d=n(26),v=n.n(d),h=n(537),y=n(186),m=n(551),O=n(736),w=n(671),x=n(553),j=n(577),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-container",[r("v-card",{staticClass:"mx-auto mt-5",attrs:{width:"400px"}},[r("v-row",[r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[r("h1",{staticClass:"display-1"},[t._v("ログイン")])]),r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[r("v-form",{staticStyle:{padding:"10px"}},[r("v-text-field",{attrs:{"prepend-icon":"mdi-account-circle",label:"e-mail"},model:{value:t.usermail,callback:function(e){t.usermail=e},expression:"usermail"}}),r("v-text-field",{attrs:{type:t.showPassword?"text":"password","prepend-icon":"mdi-lock","append-icon":t.showPassword?"mdi-eye":"mdi-eye-off",label:"パスワード"},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.userpass,callback:function(e){t.userpass=e},expression:"userpass"}})],1),r("v-btn",{staticClass:"info",on:{click:function(e){return t.login(t.onEmail)}}},[t._v("ログイン")])],1),r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[r("p",[t._v("または")])]),r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[r("a",{staticClass:"text-center",on:{click:function(e){return t.login(t.onGoogle)}}},[r("img",{staticStyle:{"max-width":"200px"},attrs:{src:n(560)}})])]),r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[r("a",{staticClass:"text-center",on:{click:function(e){return t.login(t.onFacebook)}}},[r("img",{staticStyle:{"max-width":"200px"},attrs:{src:n(561)}})])]),r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[r("p",{attrs:{"text-align":"center"}},[t._v("すでにアカウントをお持ちですか？")]),r("v-btn",{on:{click:t.onSignup}},[t._v("新規登録はこちら")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:h.a,VCard:y.a,VCol:m.a,VContainer:O.a,VForm:w.a,VRow:x.a,VTextField:j.a})}}]);