(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{544:function(t,e,n){"use strict";var r=n(546),o=n(547);t.exports=r("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},546:function(t,e,n){"use strict";var r=n(6),o=n(14),c=n(120),l=n(43),f=n(400),d=n(399),v=n(155),h=n(29),y=n(12),j=n(194),O=n(87),m=n(195);t.exports=function(t,e,n){var x=-1!==t.indexOf("Map"),w=-1!==t.indexOf("Weak"),S=x?"set":"add",k=o[t],C=k&&k.prototype,D=k,E={},P=function(t){var e=C[t];l(C,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(w&&!h(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return w&&!h(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(w&&!h(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(c(t,"function"!=typeof k||!(w||C.forEach&&!y((function(){(new k).entries().next()})))))D=n.getConstructor(e,t,x,S),f.REQUIRED=!0;else if(c(t,!0)){var L=new D,V=L[S](w?{}:-0,1)!=L,B=y((function(){L.has(1)})),_=j((function(t){new k(t)})),z=!w&&y((function(){for(var t=new k,e=5;e--;)t[S](e,e);return!t.has(-0)}));_||((D=e((function(e,n){v(e,D,t);var r=m(new k,e,D);return null!=n&&d(n,r[S],{that:r,AS_ENTRIES:x}),r}))).prototype=C,C.constructor=D),(B||z)&&(P("delete"),P("has"),x&&P("get")),(z||V)&&P(S),w&&C.clear&&delete C.clear}return E[t]=D,r({global:!0,forced:D!=k},E),O(D,t),w||n.setStrong(D,t,x),D}},547:function(t,e,n){"use strict";var r=n(40).f,o=n(98),c=n(192),l=n(86),f=n(155),d=n(399),v=n(191),h=n(193),y=n(37),j=n(400).fastKey,O=n(68),m=O.set,x=O.getterFor;t.exports={getConstructor:function(t,e,n,v){var h=t((function(t,r){f(t,h,e),m(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),y||(t.size=0),null!=r&&d(r,t[v],{that:t,AS_ENTRIES:n})})),O=x(e),w=function(t,e,n){var r,o,c=O(t),l=S(t,e);return l?l.value=n:(c.last=l={index:o=j(e,!0),key:e,value:n,previous:r=c.last,next:void 0,removed:!1},c.first||(c.first=l),r&&(r.next=l),y?c.size++:t.size++,"F"!==o&&(c.index[o]=l)),t},S=function(t,e){var n,r=O(t),o=j(e);if("F"!==o)return r.index[o];for(n=r.first;n;n=n.next)if(n.key==e)return n};return c(h.prototype,{clear:function(){for(var t=O(this),data=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete data[e.index],e=e.next;t.first=t.last=void 0,y?t.size=0:this.size=0},delete:function(t){var e=O(this),n=S(this,t);if(n){var r=n.next,o=n.previous;delete e.index[n.index],n.removed=!0,o&&(o.next=r),r&&(r.previous=o),e.first==n&&(e.first=r),e.last==n&&(e.last=o),y?e.size--:this.size--}return!!n},forEach:function(t){for(var e,n=O(this),r=l(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:n.first;)for(r(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!S(this,t)}}),c(h.prototype,n?{get:function(t){var e=S(this,t);return e&&e.value},set:function(t,e){return w(this,0===t?0:t,e)}}:{add:function(t){return w(this,t=0===t?0:t,t)}}),y&&r(h.prototype,"size",{get:function(){return O(this).size}}),h},setStrong:function(t,e,n){var r=e+" Iterator",o=x(e),c=x(r);v(t,e,(function(t,e){m(this,{type:r,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=c(this),e=t.kind,n=t.last;n&&n.removed;)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),h(e)}}},551:function(t,e,n){"use strict";n(66),n(33),n(156),n(79),n(544),n(19),n(77),n(22),n(28),n(78),n(55),n(67),n(84),n(96);var r=n(4),o=(n(545),n(3)),c=n(97),l=n(2);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],h=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),y=v.reduce((function(t,e){return t["offset"+Object(l.w)(e)]={type:[String,Number],default:null},t}),{}),j=v.reduce((function(t,e){return t["order"+Object(l.w)(e)]={type:[String,Number],default:null},t}),{}),O={col:Object.keys(h),offset:Object.keys(y),order:Object.keys(j)};function m(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var x=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},h),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},j),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var d=x.get(l);return d||function(){var t,e;for(e in d=[],O)O[e].forEach((function(t){var r=n[t],o=m(e,t,r);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),x.set(l,d)}(),t(n.tag,Object(c.a)(data,{class:d}),o)}})},553:function(t,e,n){"use strict";n(27),n(66),n(33),n(156),n(544),n(77),n(22),n(28),n(52),n(78),n(55),n(84),n(96);var r=n(4),o=(n(545),n(3)),c=n(97),l=n(2);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],h=["start","end","center"];function y(t,e){return v.reduce((function(n,r){return n[t+Object(l.w)(r)]=e(),n}),{})}var j=function(t){return[].concat(h,["baseline","stretch"]).includes(t)},O=y("align",(function(){return{type:String,default:null,validator:j}})),m=function(t){return[].concat(h,["space-between","space-around"]).includes(t)},x=y("justify",(function(){return{type:String,default:null,validator:m}})),w=function(t){return[].concat(h,["space-between","space-around","stretch"]).includes(t)},S=y("alignContent",(function(){return{type:String,default:null,validator:w}})),k={align:Object.keys(O),justify:Object.keys(x),alignContent:Object.keys(S)},C={align:"align",justify:"justify",alignContent:"align-content"};function D(t,e,n){var r=C[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var E=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:j}},O),{},{justify:{type:String,default:null,validator:m}},x),{},{alignContent:{type:String,default:null,validator:w}},S),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var f in n)l+=String(n[f]);var d=E.get(l);return d||function(){var t,e;for(e in d=[],k)k[e].forEach((function(t){var r=n[t],o=D(e,t,r);o&&d.push(o)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),E.set(l,d)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:d}),o)}})},559:function(t,e,n){t.exports=n.p+"img/TechUni-menu-logo.6127f11.png"},617:function(t,e,n){"use strict";n.r(e);n(51);var r={props:{value:{type:Boolean,default:!1}},data:function(){return{name:void 0}},computed:{dialog:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},methods:{joinTheBoard:function(){this.$emit("join-the-board",this.name)}}},o=n(32),c=n(26),l=n.n(c),f=n(537),d=n(186),v=n(76),h=n(540),y=n(538),j=n(577),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"max-width":"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[t._v("名前を入力")]),n("v-text-field",{staticClass:"pa-10",attrs:{label:"名前"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),n("v-card-actions",[n("v-spacer"),n("v-btn",{staticClass:"white--text font-weight-bold",attrs:{disabled:!t.name,color:"blue darken-1"},on:{click:t.joinTheBoard}},[t._v("参加")]),n("v-btn",{staticClass:"font-weight-bold",attrs:{text:"",color:"blue darken-1"},on:{click:function(e){t.dialog=!1}}},[t._v("キャンセル")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:f.a,VCard:d.a,VCardActions:v.a,VCardTitle:v.c,VDialog:h.a,VSpacer:y.a,VTextField:j.a})},742:function(t,e,n){"use strict";n.r(e);n(46);var r=n(8),o=n(202),c=n(617),l=n(197),f=n(110),d={components:{InstantLoginDialog:c.default},mixins:[l.a],data:function(){return{instantLoginDialog:!1,nexturl:""}},mounted:function(){this.nexturl=this.$route.query.url},methods:{joinTheBoard:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.actionWithLoadingSnackbar(Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.auth().signInAnonymously();case 2:return n.next=4,f.a.getUser();case 4:if(!(r=n.sent)){n.next=10;break}return f.a.setupUser(r,e.$axios,e.$store),n.next=9,e.$store.dispatch("user/updateMe",{name:t});case 9:e.$router.push("".concat(e.nexturl));case 10:case"end":return n.stop()}}),n)}))));case 2:case"end":return n.stop()}}),n)})))()},onLogin:function(t){this.$router.push("/login")}}},v=n(32),h=n(26),y=n.n(h),j=n(537),O=n(186),m=n(551),x=n(736),w=n(553),S=n(538),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-container",[r("v-card",{staticClass:"mx-auto mt-5",attrs:{height:"400",width:"600px"}},[r("v-row",[r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[r("img",{attrs:{src:n(559),height:"80",width:"160"}}),r("v-spacer"),r("v-btn",{staticClass:"white--text font-weight-bold",attrs:{color:"primary",width:"230"},on:{click:function(e){t.instantLoginDialog=!0}}},[t._v("ボードに参加する")]),r("v-spacer"),r("v-btn",{attrs:{width:"230"},on:{click:t.onLogin}},[t._v("サインイン")])],1)],1),r("instant-login-dialog",{on:{"join-the-board":t.joinTheBoard},model:{value:t.instantLoginDialog,callback:function(e){t.instantLoginDialog=e},expression:"instantLoginDialog"}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;y()(component,{InstantLoginDialog:n(617).default}),y()(component,{VBtn:j.a,VCard:O.a,VCol:m.a,VContainer:x.a,VRow:w.a,VSpacer:S.a})}}]);