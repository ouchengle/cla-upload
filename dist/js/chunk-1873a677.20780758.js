(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1873a677"],{7401:function(e,r,t){"use strict";t.r(r);var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{attrs:{id:"section"}},[t("el-row",[t("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.addUser()}}},[e._v(" create user ")])],1),t("el-row",{staticClass:"marginTop1rem tableStyle"},[t("el-table",{attrs:{data:e.tableData}},[t("el-table-column",{attrs:{prop:"userName",label:"用户名"}}),t("el-table-column",{attrs:{prop:"pwd",label:"密码"}}),t("el-table-column",{attrs:{prop:"email",label:"邮箱"}}),t("el-table-column",{attrs:{prop:"class",label:"部门"}}),t("el-table-column",{attrs:{width:"100"},scopedSlots:e._u([{key:"default",fn:function(r){return[t("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(t){return e.deleteUser(r.row.id)}}},[e._v("删除")])]}}])})],1)],1)],1)},l=[],n=(t("221d"),{name:"rootManager",data:function(){var e=function(e,r,t){""===r&&t(new Error("请输入账号")),t()},r=function(e,r,t){""===r&&t(new Error("请输入密码")),t()},t=function(e,r,t){if(""===r)t(new Error("请输入邮箱"));else{var a=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;a.test(r)?t():t(new Error("邮箱格式有误")),t()}t()};return{rules:{userName:[{require:!0,validator:e,trigger:"blur"}],pwd:[{require:!0,validator:r,trigger:"blur"}],email:[{require:!0,validator:t,trigger:"blur"}]},ruleForm:{userName:"",pwd:"",email:""},addUserVisible:!1,tableData:[{id:0,userName:"001",pwd:"001",email:"969707751@qq.com",class:"法务"},{id:1,userName:"002",pwd:"002",email:"1057750732@qq.com",class:"开发部"}]}},methods:{submit:function(){},reset:function(){},deleteUser:function(e){console.log(e)},addUser:function(){this.addUserVisible=!0}}}),i=n,o=(t("cf50"),t("2877")),s=Object(o["a"])(i,a,l,!1,null,"207b0176",null);r["default"]=s.exports},"879d":function(e,r,t){},cf50:function(e,r,t){"use strict";var a=t("879d"),l=t.n(a);l.a}}]);
//# sourceMappingURL=chunk-1873a677.20780758.js.map