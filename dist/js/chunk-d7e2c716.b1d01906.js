(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d7e2c716"],{"6f9f":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",[n("el-col",{style:t.privacyBox,attrs:{id:"privacyBox"}},[n("Header"),n("el-row",{attrs:{id:"textBox"}},[n("el-col",{attrs:{offset:4,span:16}},[n("div",{staticClass:"marginTop3rem",attrs:{id:"contentBox"}},[t._v(" "+t._s(t.privacyText)+" ")])])],1),n("Footer")],1)],1)},o=[],a=n("84ef"),c=n("6543"),r=n("221d"),s=n("615a");window.onresize=function(){console.log(s["a"]()),s["a"]()>document.getElementById("privacyBox").offsetHeight&&(document.getElementById("privacyBox").style.height=s["a"]()+"px")};var l={name:"Privacy",components:{Header:c["a"],Footer:a["a"]},data:function(){return{privacyText:"",privacyBox:{height:""}}},methods:{setClientHeight:function(){var t=this;this.$nextTick((function(){console.log(s["a"](),document.getElementById("privacyBox").offsetHeight),s["a"]()>document.getElementById("privacyBox").offsetHeight&&(t.privacyBox.height=s["a"]()+"px")}))},getPrivacy:function(){var t=this;this.$axios({url:"/api"+r["getPrivacy"]}).then((function(e){console.log(e),t.privacyText=e.data})).catch((function(t){console.log(t)}))},init:function(){this.getPrivacy()}},created:function(){this.init()},mounted:function(){this.setClientHeight()}},f=l,u=(n("82f2"),n("2877")),d=Object(u["a"])(f,i,o,!1,null,"685b9046",null);e["default"]=d.exports},"82f2":function(t,e,n){"use strict";var i=n("e158"),o=n.n(i);o.a},e158:function(t,e,n){}}]);
//# sourceMappingURL=chunk-d7e2c716.b1d01906.js.map