(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a0076cc"],{"14aa":function(e,t,r){},"3b64":function(e,t,r){"use strict";var i=r("14aa"),a=r.n(i);a.a},"3f72":function(e,t,r){"use strict";var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header"},[r("el-col",{attrs:{offset:8,span:8}},[r("div",[r("svg-icon",{staticClass:"pointer",attrs:{id:"svg_logo","icon-class":"logo_b"},on:{click:function(t){return e.toHome()}}})],1)])],1)},a=[],s={name:"HeaderPure",methods:{toHome:function(){this.$router.push("/home")}}},l=s,n=(r("3b64"),r("2877")),o=Object(n["a"])(l,i,a,!1,null,"795cb378",null);t["a"]=o.exports},"615a":function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var i=function(){return window.innerHeight}},"6e52":function(e,t,r){"use strict";var i=r("c39a"),a=r.n(i);a.a},"9edf":function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{style:e.section,attrs:{id:"section"}},[r("HeaderPure"),r("el-row",{staticStyle:{"margin-top":"2rem"}},[r("el-col",{attrs:{offset:4,span:16}},[r("el-tabs",{model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[r("el-tab-pane",{staticStyle:{"margin-top":"1rem"},attrs:{label:"User Management",name:"first"}})],1),r("el-row",[r("el-col",{attrs:{align:"left"}},[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.clickAddUser()}}},[e._v(" create user ")])],1)],1),r("el-row",{staticClass:"marginTop1rem tableStyle"},[r("el-table",{attrs:{data:e.tableData}},[r("el-table-column",{attrs:{prop:"userName",label:"用户名"}}),r("el-table-column",{attrs:{prop:"pwd",label:"密码"}}),r("el-table-column",{attrs:{prop:"email",label:"邮箱"}}),r("el-table-column",{attrs:{prop:"class",label:"部门"}}),r("el-table-column",{attrs:{width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(r){return e.deleteUser(t.row.id)}}},[e._v("删除")])]}}])})],1)],1)],1)],1),r("Footer"),r("el-dialog",{attrs:{width:"50%",title:"新增管理员",align:"center",visible:e.addUserVisible},on:{"update:visible":function(t){e.addUserVisible=t}}},[r("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"10rem"}},[r("el-form-item",{attrs:{label:"用户名",prop:"userName"}},[r("el-input",{attrs:{size:"medium"},model:{value:e.ruleForm.userName,callback:function(t){e.$set(e.ruleForm,"userName",t)},expression:"ruleForm.userName"}})],1),r("el-form-item",{attrs:{label:"密码",prop:"pwd"}},[r("el-input",{attrs:{"show-password":"",size:"medium"},model:{value:e.ruleForm.pwd,callback:function(t){e.$set(e.ruleForm,"pwd",t)},expression:"ruleForm.pwd"}})],1),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{attrs:{size:"medium"},model:{value:e.ruleForm.email,callback:function(t){e.$set(e.ruleForm,"email",t)},expression:"ruleForm.email"}})],1),r("el-form-item",{attrs:{"label-width":"0"}},[r("el-row",{attrs:{align:"center"}},[r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){return e.submit("ruleForm")}}},[e._v("确定")]),r("el-button",{attrs:{size:"medium"},on:{click:function(t){return e.reset("ruleForm")}}},[e._v("重置")])],1)],1)],1)],1),r("el-dialog",{attrs:{width:"20%",title:"",align:"center",visible:e.deleteUserVisible},on:{"update:visible":function(t){e.deleteUserVisible=t}}},[r("el-row",{attrs:{align:"center"}},[e._v(" 确定删除？ ")]),r("el-row",{staticClass:"marginTop1rem contentTitle",attrs:{align:"center"}},[r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){return e.submit()}}},[e._v("确定")]),r("el-button",{attrs:{size:"medium"},on:{click:function(t){e.deleteUserVisible=!1}}},[e._v("取消")])],1)],1)],1)},a=[],s=r("221d"),l=r("3f72"),n=r("fd2d"),o=r("615a");window.onresize=function(){o["a"]()>document.getElementById("section").offsetHeight&&(document.getElementById("section").style.height=o["a"]()+"px")};var c={name:"rootManager",components:{HeaderPure:l["a"],Footer:n["a"]},data:function(){var e=function(e,t,r){""===t&&r(new Error("请输入账号")),r()},t=function(e,t,r){""===t&&r(new Error("请输入密码")),r()},r=function(e,t,r){if(""===t)r(new Error("请输入邮箱"));else{var i=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;i.test(t)?r():r(new Error("邮箱格式有误")),r()}r()};return{section:{height:""},active:"first",maxUser:2,deleteUserVisible:!1,rules:{userName:[{require:!0,validator:e,trigger:"blur"}],pwd:[{require:!0,validator:t,trigger:"blur"}],email:[{require:!0,validator:r,trigger:"blur"}]},ruleForm:{userName:"",pwd:"",email:""},addUserVisible:!1,tableData:[{id:0,userName:"001",pwd:"001",email:"969707751@qq.com",class:"法务"},{id:1,userName:"002",pwd:"002",email:"1057750732@qq.com",class:"开发部"}]}},created:function(){this.setClientHeight()},methods:{setClientHeight:function(){var e=this;this.$nextTick((function(){o["a"]()>document.getElementById("section").offsetHeight?e.section.height=o["a"]()+"px":e.section.height=document.getElementById("section").offsetHeight}))},addUser:function(){var e={};this.$axios({url:"/api"+s["b"],method:"post",data:e}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},submit:function(e){this.$refs[e].validate((function(e){if(!e)return console.log("error submit"),!1;alert("submit!")}))},reset:function(e){this.$refs[e].resetFields()},deleteUser:function(e){console.log(e),this.deleteUserVisible=!0},clickAddUser:function(){this.tableData.length===this.maxUser?(this.$message.closeAll(),this.$message("最多新增".concat(this.maxUser,"个管理账号"))):this.addUserVisible=!0}}},u=c,m=(r("6e52"),r("2877")),d=Object(m["a"])(u,i,a,!1,null,"4001444b",null);t["default"]=d.exports},c39a:function(e,t,r){},d32f:function(e,t,r){"use strict";var i=r("e35a"),a=r.n(i);a.a},e35a:function(e,t,r){},fd2d:function(e,t,r){"use strict";var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-row",{staticClass:"footer"},[r("el-col",{staticClass:"left",attrs:{span:8}},[r("span",[e._v("© 2020 HUAWEI SE")])]),r("el-col",{staticClass:"center",attrs:{span:8}},[r("span",[e._v("Made with "),r("svg-icon",{attrs:{"icon-class":"heart"}}),e._v(" from the GitHub team at HUAWEI ")],1)]),r("el-col",{staticClass:"right",attrs:{span:8}},[r("div",[r("span",{staticClass:"pointer"},[e._v("Terms of Service & Privacy Policy")]),r("span",{staticClass:"pointer"},[r("svg-icon",{attrs:{id:"github_logo","icon-class":"github"}}),e._v("Open an issue")],1)])])],1)},a=[],s={name:"Footer"},l=s,n=(r("d32f"),r("2877")),o=Object(n["a"])(l,i,a,!1,null,"023530e2",null);t["a"]=o.exports}}]);
//# sourceMappingURL=chunk-2a0076cc.fcaee5b4.js.map