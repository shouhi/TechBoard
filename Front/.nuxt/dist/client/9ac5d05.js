(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{546:function(t,e,r){"use strict";var n=r(548),o=r(549);t.exports=n("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},548:function(t,e,r){"use strict";var n=r(6),o=r(14),c=r(120),l=r(43),f=r(401),d=r(400),h=r(155),v=r(29),w=r(12),m=r(194),x=r(87),y=r(195);t.exports=function(t,e,r){var O=-1!==t.indexOf("Map"),j=-1!==t.indexOf("Weak"),k=O?"set":"add",P=o[t],_=P&&P.prototype,S=P,E={},C=function(t){var e=_[t];l(_,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(j&&!v(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return j&&!v(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(j&&!v(t))&&e.call(this,0===t?0:t)}:function(t,r){return e.call(this,0===t?0:t,r),this})};if(c(t,"function"!=typeof P||!(j||_.forEach&&!w((function(){(new P).entries().next()})))))S=r.getConstructor(e,t,O,k),f.REQUIRED=!0;else if(c(t,!0)){var $=new S,V=$[k](j?{}:-0,1)!=$,z=w((function(){$.has(1)})),B=m((function(t){new P(t)})),R=!j&&w((function(){for(var t=new P,e=5;e--;)t[k](e,e);return!t.has(-0)}));B||((S=e((function(e,r){h(e,S,t);var n=y(new P,e,S);return null!=r&&d(r,n[k],{that:n,AS_ENTRIES:O}),n}))).prototype=_,_.constructor=S),(z||R)&&(C("delete"),C("has"),O&&C("get")),(R||V)&&C(k),j&&_.clear&&delete _.clear}return E[t]=S,n({global:!0,forced:S!=P},E),x(S,t),j||r.setStrong(S,t,O),S}},549:function(t,e,r){"use strict";var n=r(40).f,o=r(98),c=r(192),l=r(86),f=r(155),d=r(400),h=r(191),v=r(193),w=r(37),m=r(401).fastKey,x=r(68),y=x.set,O=x.getterFor;t.exports={getConstructor:function(t,e,r,h){var v=t((function(t,n){f(t,v,e),y(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),w||(t.size=0),null!=n&&d(n,t[h],{that:t,AS_ENTRIES:r})})),x=O(e),j=function(t,e,r){var n,o,c=x(t),l=k(t,e);return l?l.value=r:(c.last=l={index:o=m(e,!0),key:e,value:r,previous:n=c.last,next:void 0,removed:!1},c.first||(c.first=l),n&&(n.next=l),w?c.size++:t.size++,"F"!==o&&(c.index[o]=l)),t},k=function(t,e){var r,n=x(t),o=m(e);if("F"!==o)return n.index[o];for(r=n.first;r;r=r.next)if(r.key==e)return r};return c(v.prototype,{clear:function(){for(var t=x(this),data=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete data[e.index],e=e.next;t.first=t.last=void 0,w?t.size=0:this.size=0},delete:function(t){var e=x(this),r=k(this,t);if(r){var n=r.next,o=r.previous;delete e.index[r.index],r.removed=!0,o&&(o.next=n),n&&(n.previous=o),e.first==r&&(e.first=n),e.last==r&&(e.last=o),w?e.size--:this.size--}return!!r},forEach:function(t){for(var e,r=x(this),n=l(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:r.first;)for(n(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!k(this,t)}}),c(v.prototype,r?{get:function(t){var e=k(this,t);return e&&e.value},set:function(t,e){return j(this,0===t?0:t,e)}}:{add:function(t){return j(this,t=0===t?0:t,t)}}),w&&n(v.prototype,"size",{get:function(){return x(this).size}}),v},setStrong:function(t,e,r){var n=e+" Iterator",o=O(e),c=O(n);h(t,e,(function(t,e){y(this,{type:n,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=c(this),e=t.kind,r=t.last;r&&r.removed;)r=r.previous;return t.target&&(t.last=r=r?r.next:t.state.first)?"keys"==e?{value:r.key,done:!1}:"values"==e?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),v(e)}}},553:function(t,e,r){"use strict";r(66),r(33),r(156),r(79),r(546),r(19),r(77),r(22),r(28),r(78),r(56),r(67),r(84),r(96);var n=r(4),o=(r(547),r(3)),c=r(97),l=r(2);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],v=h.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),w=h.reduce((function(t,e){return t["offset"+Object(l.w)(e)]={type:[String,Number],default:null},t}),{}),m=h.reduce((function(t,e){return t["order"+Object(l.w)(e)]={type:[String,Number],default:null},t}),{}),x={col:Object.keys(v),offset:Object.keys(w),order:Object.keys(m)};function y(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var O=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},w),{},{order:{type:[String,Number],default:null}},m),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in r)l+=String(r[f]);var d=O.get(l);return d||function(){var t,e;for(e in d=[],x)x[e].forEach((function(t){var n=r[t],o=y(e,t,n);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),O.set(l,d)}(),t(r.tag,Object(c.a)(data,{class:d}),o)}})},560:function(t,e,r){t.exports=r.p+"img/btn_google_signin_dark_pressed_web@2x.bb5b0d6.png"},561:function(t,e,r){t.exports=r.p+"img/66389811_2420388444687325_4985302625051213824_n.2ce5a50.png"},586:function(t,e,r){"use strict";r(403);var n=r(556);e.a=Object(n.a)("layout")},656:function(t,e,r){"use strict";r(119),r(85),r(66),r(33),r(202),r(53),r(84),r(39);var n=r(4),o=r(9),c=r(123),l=r(199);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:d({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},742:function(t,e,r){"use strict";r.r(e);r(47);var n=r(8),o=r(92),c=r.n(o),l={name:"Signup",components:{},data:function(){return{showPassword:!1,usermail:"",password:"",againpassword:"",starturl:"",rules:{required:function(t){return!!t||"必須項目."},counter:function(t){return t.length<=20||"Max 20 characters"},email:function(t){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)||"不正なメール形式です"}}}},mounted:function(){this.starturl=this.$route.query.url},methods:{checkPassword:function(){return this.password===this.againpassword},onGoogle:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new c.a.auth.GoogleAuthProvider,t.next=3,c.a.auth().signInWithPopup(e);case 3:case"end":return t.stop()}}),t)})))()},onFacebook:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new c.a.auth.FacebookAuthProvider,t.next=3,c.a.auth().signInWithPopup(e);case 3:case"end":return t.stop()}}),t)})))()},onEmail:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.checkPassword()){e.next=5;break}return e.next=3,c.a.auth().createUserWithEmailAndPassword(t.usermail,t.password);case 3:e.next=6;break;case 5:throw new Error("パスワードが一致しません");case 6:case"end":return e.stop()}}),e)})))()},signup:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.$nuxt.$loading.start(),r.prev=1,r.next=4,t();case 4:e.$router.push("dashboard"),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(1),e.$nuxt.$emit("openSnackbar",{color:"error",text:e.$utils.errorMessage(r.t0),timeout:5e3});case 10:e.$nuxt.$loading.finish();case 11:case"end":return r.stop()}}),r,null,[[1,7]])})))()},onLogin:function(t){this.$router.push("/login")}}},f=r(32),d=r(26),h=r.n(d),v=r(539),w=r(186),m=r(76),x=r(553),y=r(734),O=r(656),j=r(586),k=r(577),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",[n("v-card",{staticClass:"mx-auto mt-5",attrs:{width:"400px"}},[n("v-card-title",{staticStyle:{"text-align":"center"}},[n("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[n("h1",{staticClass:"display-1"},[t._v("新規登録")])])],1),n("v-card-text",[n("v-form",[n("v-text-field",{attrs:{"prepend-icon":"mdi-email",label:"e-mail",rules:[t.rules.required,t.rules.email]},model:{value:t.usermail,callback:function(e){t.usermail=e},expression:"usermail"}}),n("v-text-field",{attrs:{type:t.showPassword?"text":"password","prepend-icon":"mdi-lock","append-icon":t.showPassword?"mdi-eye":"mdi-eye-off",label:"パスワード"},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),n("v-text-field",{attrs:{type:t.showPassword?"text":"password","prepend-icon":"lock-reset","append-icon":t.showPassword?"mdi-eye":"mdi-eye-off",label:"パスワード（確認用）"},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.againpassword,callback:function(e){t.againpassword=e},expression:"againpassword"}}),n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("p",[t._v("または")])]),n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("a",{staticClass:"text-center",on:{click:function(e){return t.signup(t.onGoogle)}}},[n("img",{staticStyle:{"max-width":"200px"},attrs:{src:r(560)}})])]),n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("a",{staticClass:"text-center",on:{click:function(e){return t.signup(t.onFacebook)}}},[n("img",{staticStyle:{"max-width":"200px"},attrs:{src:r(561)}})])])],1)],1),n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("v-btn",{staticClass:"info",attrs:{"max-width":""},on:{click:function(e){return t.signup(t.onEmail)}}},[t._v("登録")])],1),n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("p",{attrs:{"font-size":"10px"}},[t._v("すでにアカウントをお持ちですか？")]),n("v-btn",{on:{click:t.onLogin}},[t._v("ログインはこちら")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VBtn:v.a,VCard:w.a,VCardText:m.b,VCardTitle:m.c,VCol:x.a,VContainer:y.a,VForm:O.a,VLayout:j.a,VTextField:k.a})}}]);