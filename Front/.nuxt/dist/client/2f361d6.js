(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{611:function(t,e,o){var content=o(723);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("52ebddc2",content,!0,{sourceMap:!1})},721:function(t,e,o){t.exports=o.p+"img/device.495a29d.png"},722:function(t,e,o){"use strict";o(611)},723:function(t,e,o){(e=o(17)(!1)).push([t.i,".catchcopy[data-v-51b28aba]{color:#000;font-size:3vw;font-weight:700}.catchcopy-sp[data-v-51b28aba]{color:#fff;font-size:7vw;font-weight:700}.compare-services th[data-v-51b28aba],h2[data-v-51b28aba],td[data-v-51b28aba],tr[data-v-51b28aba]{text-align:center}h2[data-v-51b28aba]{margin:3rem 0}",""]),t.exports=e},745:function(t,e,o){"use strict";o.r(e);var r={layout:"simple-layout",data:function(){return{message:"",scrollY:""}},computed:{appBarColor:function(){return this.scrollY,"#F09010 "}},mounted:function(){window.addEventListener("scroll",this.onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{handleResize:function(){this.$refs.sharedboard&&(this.$set(this.boardSize,"width",this.$refs.sharedboard.clientWidth),this.$set(this.boardSize,"height",this.$refs.sharedboard.clientHeight))},onScroll:function(t){this.scrollY=window.scrollY},toDashboard:function(){this.$router.push("/dashboard")}}},n=(o(722),o(32)),c=o(26),l=o.n(c),d=o(543),h=o(545),f=o(539),v=o(553),m=o(389),w=o(544),x=o(555),y=o(540),V=o(200),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{style:"z-index:"+t.$const.zIndex.mainMenuBar,attrs:{app:"","clipped-left":"",flat:"",color:t.appBarColor}},[r("v-toolbar-title",[r("a",{on:{click:function(e){return t.onMenu("/")}}})]),r("v-spacer")],1),r("v-main",[r("v-row",{staticStyle:{background:"linear-gradient(#F09010, #f4f6b4)",padding:"3rem 0px"},attrs:{align:"center",justify:"center"}},[r("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"8"}},[r("v-col",{staticClass:"text-center",class:t.$vuetify.breakpoint.mdAndUp?"catchcopy":"catchcopy-sp"},[r("p",[t._v("『アイディアをカタチに』")]),r("v-img",{attrs:{src:o(405),contain:"",height:"200"}}),r("h4",{staticClass:"subtitle-1 black--text"},[t._v("リモート会議サポートツール")])],1),r("v-col",{staticClass:"text-center"},[r("v-btn",{staticClass:"font-weight-bold",attrs:{dark:"",color:"orange",rounded:"","x-large":""},on:{click:t.toDashboard}},[t._v("無料で始める")])],1)],1),r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-img",{staticStyle:{margin:"1rem"},attrs:{src:o(721),height:"300"}})],1)],1)],1)],1)}),[],!1,null,"51b28aba",null);e.default=component.exports;l()(component,{VApp:d.a,VAppBar:h.a,VBtn:f.a,VCol:v.a,VImg:m.a,VMain:w.a,VRow:x.a,VSpacer:y.a,VToolbarTitle:V.a})}}]);