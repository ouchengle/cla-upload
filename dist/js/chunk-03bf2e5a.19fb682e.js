(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03bf2e5a"],{3752:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"tableStyle"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,align:"center"}},[a("el-table-column",{attrs:{prop:"corporation_name",label:"CorporationName"}}),a("el-table-column",{attrs:{prop:"admin_name",label:"AdminName"}}),a("el-table-column",{attrs:{prop:"admin_email",label:"Email"}}),a("el-table-column",{attrs:{label:"PDF",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("el-tooltip",{attrs:{slot:"reference",effect:"dark",content:"pdf",placement:"bottom"},slot:"reference"},[a("svg-icon",{staticClass:"pointer",attrs:{"icon-class":"pdf"},on:{click:function(e){}}})],1)]}}])}),a("el-table-column",{attrs:{align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"mySwitch",staticStyle:{display:"inline-block"}},[a("el-switch",{staticClass:"mySwitch",attrs:{disabled:t.row.enabled,width:"3rem","active-color":"#409EFF","active-text":"active","inactive-text":"inactive","inactive-color":"#EBEEF5"},on:{change:function(a){return e.changeActive(t.row.cla_org_id,t.row.corporation_name,t.row.admin_email,!0)}},model:{value:t.row.enabled,callback:function(a){e.$set(t.row,"enabled",a)},expression:"scope.row.enabled"}})],1),a("el-button",{staticStyle:{"margin-left":"1rem"},attrs:{type:"primary",size:"mini"},on:{click:function(a){return e.createRoot(t.row.cla_org_id,t.row.admin_email)}}},[e._v("Create Root ")])]}}])})],1)],1),a("div",{staticClass:"paginationClass"},[a("el-pagination",{attrs:{background:"","page-size":5,"pager-count":5,"hide-on-single-page":!0,"current-page":e.currentPage,layout:"prev, pager, next",total:e.tableTotal},on:{"current-change":e.changePage}})],1)])},n=[],i=a("221d"),l={name:"CorporationList",data:function(){return{item:"",tableData:[{corporation_name:"ooo",admin_name:"ocl",admin_email:"666@qq.com",date:"2020-08-18"},{corporation_name:"oco",admin_name:"oll",email:"555@qq.com",date:"2020-08-19"}],currentPage:1,tableTotal:0}},beforeRouteEnter:function(e,t,a){console.log(t.path,e.path,this),"/"!==t.path&&sessionStorage.removeItem("item"),a()},created:function(){console.log(this.$route.query.item,"created",sessionStorage.getItem("item"),JSON.parse(sessionStorage.getItem("item"))),JSON.parse(sessionStorage.getItem("item"))?(console.log("if"),this.item=JSON.parse(sessionStorage.getItem("item")),this.getCorporationInfo()):(console.log("else"),this.tableData=this.$route.query.item.corporationInfo,this.item=this.$route.query.item,sessionStorage.setItem("item",JSON.stringify(this.$route.query.item)))},methods:{getCorporationInfo:function(){var e=this;this.$axios({url:"/api".concat(i["e"]),params:{platform:this.item.platform,org_id:this.item.org_id,repo_id:this.item.repo_id,cla_language:this.item.cla_language}}).then((function(t){console.log(t),e.tableData=t.data})).catch((function(e){console.log(e)}))},createRoot:function(e,t){var a=this,o={cla_org_id:e,email:t};this.$axios({url:"/api".concat(i["d"]),method:"post",data:o}).then((function(e){console.log(e),a.$message.closeAll(),a.$message.success("success"),a.getCorporationInfo()})).catch((function(e){console.log(e),a.$message.closeAll(),a.$message.error("failed")}))},changeActive:function(e,t,a,o){var n=this;console.log("changeActive",e,a);var l={cla_org_id:e,corporation_name:t,admin_email:a,enabled:o};this.$axios({url:"/api".concat(i["a"]),method:"put",data:l}).then((function(e){console.log(e),n.getCorporationInfo()})).catch((function(e){console.log(e)}))}}},c=l,r=(a("ac17"),a("2877")),s=Object(r["a"])(c,o,n,!1,null,null,null);t["default"]=s.exports},"6c9f":function(e,t,a){},ac17:function(e,t,a){"use strict";var o=a("6c9f"),n=a.n(o);n.a}}]);
//# sourceMappingURL=chunk-03bf2e5a.19fb682e.js.map