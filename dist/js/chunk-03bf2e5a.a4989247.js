(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03bf2e5a"],{3752:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"tableStyle"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,align:"center"}},[a("el-table-column",{attrs:{prop:"corporation_name",label:"CorporationName"}}),a("el-table-column",{attrs:{prop:"admin_name",label:"AdminName"}}),a("el-table-column",{attrs:{prop:"admin_email",label:"Email"}}),a("el-table-column",{attrs:{label:"PDF",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("el-tooltip",{attrs:{slot:"reference",effect:"dark",content:"pdf",placement:"bottom"},slot:"reference"},[a("svg-icon",{staticClass:"pointer",attrs:{"icon-class":"pdf"},on:{click:function(t){}}})],1)]}}])}),a("el-table-column",{attrs:{align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{attrs:{slot:"reference",effect:"dark",content:"activation",placement:"bottom"},slot:"reference"},[a("div",{staticClass:"mySwitch",staticStyle:{display:"inline-block"}},[a("el-switch",{staticClass:"mySwitch",attrs:{disabled:e.row.enabled,width:"3rem","active-color":"#409EFF","active-text":"active","inactive-text":"inactive","inactive-color":"#EBEEF5"},on:{change:function(a){return t.changeActive(e.row.cla_org_id,e.row.corporation_name,e.row.admin_email,!0)}},model:{value:e.row.enabled,callback:function(a){t.$set(e.row,"enabled",a)},expression:"scope.row.enabled"}})],1)]),a("el-button",{staticStyle:{"margin-left":"1rem"},attrs:{type:"primary",size:"mini"},on:{click:function(a){return t.createRoot(e.row.cla_org_id,e.row.admin_email)}}},[t._v("Create Root")])]}}])})],1)],1),a("div",{staticClass:"paginationClass"},[a("el-pagination",{attrs:{background:"","page-size":5,"pager-count":5,"hide-on-single-page":!0,"current-page":t.currentPage,layout:"prev, pager, next",total:t.tableTotal},on:{"current-change":t.changePage}})],1)])},n=[],c=a("221d"),l={name:"CorporationList",data:function(){return{tableData:[{corporation_name:"ooo",admin_name:"ocl",admin_email:"666@qq.com",date:"2020-08-18"},{corporation_name:"oco",admin_name:"oll",email:"555@qq.com",date:"2020-08-19"}],currentPage:1,tableTotal:0}},created:function(){console.log(this.$route.query.corporationInfo,"created"),this.tableData=this.$route.query.corporationInfo},methods:{createRoot:function(t,e){var a={cla_org_id:t,email:e};this.$axios({url:"/api".concat(c["d"]),method:"post",data:a}).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))},changeActive:function(t,e,a,o){console.log("changeActive",t,a);var n={cla_org_id:t,corporation_name:e,admin_email:a,enabled:o};this.$axios({url:"/api".concat(c["a"]),method:"put",data:n}).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))}}},i=l,r=(a("ac17"),a("2877")),s=Object(r["a"])(i,o,n,!1,null,null,null);e["default"]=s.exports},"6c9f":function(t,e,a){},ac17:function(t,e,a){"use strict";var o=a("6c9f"),n=a.n(o);n.a}}]);
//# sourceMappingURL=chunk-03bf2e5a.a4989247.js.map