(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a90cadc"],{"057f":function(e,t,a){var i=a("fc6a"),n=a("241c").f,r={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],l=function(e){try{return n(e)}catch(t){return s.slice()}};e.exports.f=function(e){return s&&"[object Window]"==r.call(e)?l(e):n(i(e))}},4443:function(e,t,a){"use strict";var i=a("add4"),n=a.n(i);n.a},"746f":function(e,t,a){var i=a("428f"),n=a("5135"),r=a("e538"),s=a("9bf2").f;e.exports=function(e){var t=i.Symbol||(i.Symbol={});n(t,e)||s(t,e,{value:r.f(e)})}},a4d3:function(e,t,a){"use strict";var i=a("23e7"),n=a("da84"),r=a("d066"),s=a("c430"),l=a("83ab"),o=a("4930"),c=a("fdbf"),u=a("d039"),d=a("5135"),f=a("e8b5"),p=a("861d"),h=a("825a"),m=a("7b0b"),g=a("fc6a"),y=a("c04e"),v=a("5c6c"),b=a("7c73"),w=a("df75"),x=a("241c"),C=a("057f"),k=a("7418"),T=a("06cf"),N=a("9bf2"),A=a("d1e7"),S=a("9112"),O=a("6eeb"),_=a("5692"),$=a("f772"),E=a("d012"),L=a("90e3"),F=a("b622"),M=a("e538"),q=a("746f"),j=a("d44e"),z=a("69f3"),I=a("b727").forEach,D=$("hidden"),P="Symbol",R="prototype",H=F("toPrimitive"),B=z.set,J=z.getterFor(P),U=Object[R],Q=n.Symbol,W=r("JSON","stringify"),G=T.f,K=N.f,V=C.f,X=A.f,Y=_("symbols"),Z=_("op-symbols"),ee=_("string-to-symbol-registry"),te=_("symbol-to-string-registry"),ae=_("wks"),ie=n.QObject,ne=!ie||!ie[R]||!ie[R].findChild,re=l&&u((function(){return 7!=b(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(e,t,a){var i=G(U,t);i&&delete U[t],K(e,t,a),i&&e!==U&&K(U,t,i)}:K,se=function(e,t){var a=Y[e]=b(Q[R]);return B(a,{type:P,tag:e,description:t}),l||(a.description=t),a},le=c?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof Q},oe=function(e,t,a){e===U&&oe(Z,t,a),h(e);var i=y(t,!0);return h(a),d(Y,i)?(a.enumerable?(d(e,D)&&e[D][i]&&(e[D][i]=!1),a=b(a,{enumerable:v(0,!1)})):(d(e,D)||K(e,D,v(1,{})),e[D][i]=!0),re(e,i,a)):K(e,i,a)},ce=function(e,t){h(e);var a=g(t),i=w(a).concat(he(a));return I(i,(function(t){l&&!de.call(a,t)||oe(e,t,a[t])})),e},ue=function(e,t){return void 0===t?b(e):ce(b(e),t)},de=function(e){var t=y(e,!0),a=X.call(this,t);return!(this===U&&d(Y,t)&&!d(Z,t))&&(!(a||!d(this,t)||!d(Y,t)||d(this,D)&&this[D][t])||a)},fe=function(e,t){var a=g(e),i=y(t,!0);if(a!==U||!d(Y,i)||d(Z,i)){var n=G(a,i);return!n||!d(Y,i)||d(a,D)&&a[D][i]||(n.enumerable=!0),n}},pe=function(e){var t=V(g(e)),a=[];return I(t,(function(e){d(Y,e)||d(E,e)||a.push(e)})),a},he=function(e){var t=e===U,a=V(t?Z:g(e)),i=[];return I(a,(function(e){!d(Y,e)||t&&!d(U,e)||i.push(Y[e])})),i};if(o||(Q=function(){if(this instanceof Q)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=L(e),a=function(e){this===U&&a.call(Z,e),d(this,D)&&d(this[D],t)&&(this[D][t]=!1),re(this,t,v(1,e))};return l&&ne&&re(U,t,{configurable:!0,set:a}),se(t,e)},O(Q[R],"toString",(function(){return J(this).tag})),O(Q,"withoutSetter",(function(e){return se(L(e),e)})),A.f=de,N.f=oe,T.f=fe,x.f=C.f=pe,k.f=he,M.f=function(e){return se(F(e),e)},l&&(K(Q[R],"description",{configurable:!0,get:function(){return J(this).description}}),s||O(U,"propertyIsEnumerable",de,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!o,sham:!o},{Symbol:Q}),I(w(ae),(function(e){q(e)})),i({target:P,stat:!0,forced:!o},{for:function(e){var t=String(e);if(d(ee,t))return ee[t];var a=Q(t);return ee[t]=a,te[a]=t,a},keyFor:function(e){if(!le(e))throw TypeError(e+" is not a symbol");if(d(te,e))return te[e]},useSetter:function(){ne=!0},useSimple:function(){ne=!1}}),i({target:"Object",stat:!0,forced:!o,sham:!l},{create:ue,defineProperty:oe,defineProperties:ce,getOwnPropertyDescriptor:fe}),i({target:"Object",stat:!0,forced:!o},{getOwnPropertyNames:pe,getOwnPropertySymbols:he}),i({target:"Object",stat:!0,forced:u((function(){k.f(1)}))},{getOwnPropertySymbols:function(e){return k.f(m(e))}}),W){var me=!o||u((function(){var e=Q();return"[null]"!=W([e])||"{}"!=W({a:e})||"{}"!=W(Object(e))}));i({target:"JSON",stat:!0,forced:me},{stringify:function(e,t,a){var i,n=[e],r=1;while(arguments.length>r)n.push(arguments[r++]);if(i=t,(p(t)||void 0!==e)&&!le(e))return f(t)||(t=function(e,t){if("function"==typeof i&&(t=i.call(this,e,t)),!le(t))return t}),n[1]=t,W.apply(null,n)}})}Q[R][H]||S(Q[R],H,Q[R].valueOf),j(Q,P),E[D]=!0},add4:function(e,t,a){},c819:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{style:e.createCLAClass,attrs:{id:"createCLA"}},[a("v-header"),a("div",{attrs:{id:"section"}},[a("el-col",{attrs:{offset:6,span:12}},[a("div",{staticStyle:{display:"flex","justify-content":"space-between",padding:"1rem 0"}},[a("span",[e._v("Edit your CLA")])]),a("div",e._l(e.claTags,(function(t,i){return a("el-tag",{key:t,staticClass:"pointer",attrs:{closable:"","disable-transitions":!1},on:{click:function(t){return e.chooseCla(i)},close:function(a){return e.handleClose(t,i)}}},[e._v(" "+e._s(t)+" ")])})),1),e.addNewFile?a("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[a("el-col",{staticStyle:{"padding-right":"2rem"},attrs:{span:20}},[a("el-input",{staticStyle:{"margin-bottom":"0.5rem"},attrs:{size:"small",placeholder:"please input file name"},model:{value:e.newClaFileName,callback:function(t){e.newClaFileName=t},expression:"newClaFileName"}})],1),a("el-col",{attrs:{span:4,align:"right"}},[a("el-select",{staticStyle:{width:"8rem"},attrs:{size:"small",value:""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.languageOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1):a("div",[a("el-button",{staticClass:"pointer",attrs:{size:"mini"},on:{click:function(t){return e.clickAddNewClaFile()}}},[e._v("+ add new file")])],1),a("div",[a("el-input",{staticClass:"textAreaClass",attrs:{rows:"15",readonly:!e.isEdit,type:"textarea"},on:{change:e.claTextChange},model:{value:e.claText,callback:function(t){e.claText=t},expression:"claText"}})],1),a("p",[e._v("Edit your metaData "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"The information you want contributors to fill in when they sign the cla",placement:"right"}},[a("svg-icon",{attrs:{"icon-class":"bangzhu"}})],1)],1),a("el-row",{staticStyle:{margin:"0 -10px"}},[a("el-col",{staticClass:"typeCol",attrs:{span:5}},[a("el-radio",{attrs:{label:"individual"},model:{value:e.metadataType,callback:function(t){e.metadataType=t},expression:"metadataType"}},[e._v("Individual Contributor")])],1),a("el-col",{staticClass:"typeCol",attrs:{span:5}},[a("el-radio",{attrs:{label:"corporation"},model:{value:e.metadataType,callback:function(t){e.metadataType=t},expression:"metadataType"}},[e._v("Legal Entity Contributor")])],1)],1),a("div",[a("div",e._l(e.metadataArr,(function(t,i){return a("el-row",{staticStyle:{padding:"0.5rem 0"},attrs:{type:"flex",align:"middle",gutter:20}},[a("el-col",{attrs:{span:5}},[a("el-input",{attrs:{size:"medium",readonly:""},model:{value:t.title,callback:function(a){e.$set(t,"title",a)},expression:"item.title"}})],1),a("el-col",{attrs:{span:5}},[a("el-input",{attrs:{size:"medium",readonly:""},model:{value:t.type,callback:function(a){e.$set(t,"type",a)},expression:"item.type"}})],1),a("el-col",{attrs:{span:5}},[a("el-input",{attrs:{size:"medium",readonly:""},model:{value:t.description,callback:function(a){e.$set(t,"description",a)},expression:"item.description"}})],1),a("el-col",{staticStyle:{height:"100%"},attrs:{span:5}},[a("el-checkbox",{attrs:{disabled:""},model:{value:t.required,callback:function(a){e.$set(t,"required",a)},expression:"item.required"}},[e._v("required")])],1)],1)})),1),a("div",e._l(e.customMetadataArr,(function(t,i){return a("el-row",{staticStyle:{padding:"0.5rem 0"},attrs:{type:"flex",align:"middle",gutter:20}},[a("el-col",{attrs:{span:5}},[a("el-input",{attrs:{size:"medium",placeholder:"please input title"},model:{value:t.title,callback:function(a){e.$set(t,"title",a)},expression:"item.title"}})],1),a("el-col",{attrs:{span:5}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"select dataType",size:"medium"},model:{value:t.type,callback:function(a){e.$set(t,"type",a)},expression:"item.type"}},e._l(e.dataTypeOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-col",{staticStyle:{height:"100%"},attrs:{span:5}},[a("el-input",{attrs:{size:"medium",placeholder:"description"},model:{value:t.description,callback:function(a){e.$set(t,"description",a)},expression:"item.description"}})],1),a("el-col",{staticStyle:{height:"100%"},attrs:{span:5}},[a("el-checkbox",{model:{value:t.required,callback:function(a){e.$set(t,"required",a)},expression:"item.required"}},[e._v("required")])],1),a("el-col",{attrs:{span:4}},[a("el-button",{attrs:{size:"medium"},on:{click:function(t){return e.addRow(i)}}},[e._v("+")]),a("el-button",{attrs:{size:"medium"},on:{click:function(t){return e.myDeleteRow(i)}}},[e._v("-")])],1)],1)})),1)]),a("div",{staticStyle:{"margin-top":"1rem",display:"flex","justify-content":"space-between"}},[a("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{size:"medium",disabled:!e.verifyNotNull(),type:"primary"},on:{click:function(t){return e.uploadCla()}}},[e._v("create CLA ")])],1)],1)],1),a("v-footer")],1)},n=[],r=(a("a4d3"),a("e01a"),a("99af"),a("4160"),a("c975"),a("a434"),a("b0c0"),a("ac1f"),a("5319"),a("498a"),a("159b"),a("0418")),s=a("fd2d"),l=a("615a"),o=a("221d"),c={name:"CreateCLA",components:{"v-header":r["a"],"v-footer":s["a"]},data:function(){return{metadataArr:[{title:"Name",type:"string",description:"your name",required:!0},{title:"E-Mail",type:"email",description:"your email",required:!0},{title:"Date",type:"date",description:"the date of today",required:!0}],metadataType:"individual",customMetadataArr:[{title:"",type:"",description:"",required:!0}],dataTypeOptions:[{label:"name",value:"name"},{label:"date",value:"date"},{label:"telephone",value:"telephone"},{label:"address",value:"address"},{label:"email",value:"email"},{label:"fax",value:"fax"}],access_token:this.$store.state.access_token,refresh_token:this.$store.state.refresh_token,isAddNewMetaFile:!1,isEditMeta:!1,metaText:"",currentIndex:"",newMetaFileName:"",newClaFileName:"",addNewFile:!1,isEdit:!1,claTags:[],claOptions:[],metaOptions:[{value:0,text:"{userName:{type:string,require:true},email:{type:string,require:true},}"}],fullscreenLoading:!1,claName:"",value:0,languageOptions:[{value:0,label:"english"},{value:1,label:"chinese"},{value:2,label:"japanese"}],claText:"",metaData:"",createCLAClass:{height:""},platform:this.$store.state.platform,user:{userName:this.$store.state.user.userName,userId:this.$store.state.user.userId}}},methods:{addRow:function(e){this.customMetadataArr.splice(e+1,0,{title:"",type:"",description:"",required:!0})},myDeleteRow:function(e){this.customMetadataArr.splice(e,1)},clickAddNewClaFile:function(){this.addNewFile=!0,this.claText="",this.isEdit=!0,this.newClaFileName=""},clickAddNewMetaFile:function(){this.isAddNewMetaFile=!0,this.metaData="",this.isEditMeta=!0},chooseMeta:function(e){console.log("chooseMeta",e),this.metaData=this.metaOptions[0].text,this.isEditMeta=!1,this.isAddNewMetaFile=!1,this.newMetaFileName=""},chooseCla:function(e){console.log("chooseCla",e),this.claText=this.claOptions[e].text,this.isEdit=!1,this.currentIndex=e,this.addNewFile=!1,this.newClaFileName=this.claTags[e]},handleClose:function(e,t){var a=this;this.$axios({url:"/api".concat(o["c"],"/").concat(this.claOptions[t].id),method:"delete",headers:{"Access-Token":this.access_token,"Refresh-Token":this.refresh_token,User:"".concat(this.platform,"/").concat(this.user.userName)}}).then((function(i){console.log(i),a.claTags.splice(a.claTags.indexOf(e),1),a.currentIndex===t&&(a.claText="",a.currentIndex=""),a.getCLA()})).catch((function(e){console.log(e),a.$message.error("已有绑定关系，无法删除")}))},getCLA:function(){var e=this;console.log("getCLA"),this.$axios({url:"/api"+o["f"],headers:{"Access-Token":this.access_token,"Refresh-Token":this.refresh_token,User:"".concat(this.platform,"/").concat(this.user.userName)}}).then((function(t){console.log(t),t.data.length&&(e.claOptions=[],e.claTags=[],t.data.forEach((function(t,a){e.claTags.push(t.name),e.claOptions.push({value:a,label:t.name,id:t.id,text:t.text,language:t.language})})))})).catch((function(e){console.log(e)}))},claTextChange:function(e){console.log(e)},verifyNotNull:function(){return this.addNewFile?""!==this.newClaFileName.trim()&&""!==this.claText.trim():""!==this.claText.trim()},checkMetadata:function(){for(var e=this.customMetadataArr.concat(this.metadataArr),t=0;t<e.length;t++)for(var a=t+1;a<e.length;a++)if(e[t].title===e[a].title)return!1;return!0},uploadCla:function(){var e=this;if(this.checkMetadata()){var t=[];this.metadataArr.forEach((function(e,a){t.push({id:a+"",title:e.title,type:e.type,description:e.description,required:e.required})})),this.customMetadataArr.forEach((function(a,i){t.push({id:e.metadataArr.length+i+"",title:a.title,type:a.type,description:a.description,required:a.required})})),this.fullscreenLoading=!0;var a={name:this.newClaFileName,text:this.claText,language:this.languageOptions[this.value].label,submitter:"".concat(this.platform,"/").concat(this.user.userName),apply_to:this.metadataType,fields:t};console.log(a),this.$axios({url:"/api"+o["s"],method:"post",data:a,headers:{"Access-Token":this.access_token,"Refresh-Token":this.refresh_token,User:"".concat(this.platform,"/").concat(this.user.userName)}}).then((function(t){console.log(t),e.fullscreenLoading=!1,e.$message.success("succeed"),setTimeout((function(){e.$router.replace("/home")}),2e3)})).catch((function(t){console.log(t),e.fullscreenLoading=!1,e.$message.error("failed")}))}else this.$message.closeAll(),this.$message.error("The title is repeated")},setClientHeight:function(){var e=this;this.$nextTick((function(){console.log(l["a"]()),console.log(document.getElementById("createCLA").offsetHeight),l["a"]()>document.getElementById("createCLA").offsetHeight?e.createCLAClass.height=l["a"]()+"px":e.createCLAClass.height=document.getElementById("createCLA").offsetHeight}))},copy:function(){console.log(this.claText),this.init()},init:function(){var e=this.claText.replace(/\r\n/g,"<br/>").replace(/\n/g,"<br/>").replace(/\s/g," ");console.log(e),this.metaData=e}},created:function(){this.getCLA()},mounted:function(){this.setClientHeight()}};window.onresize=function(){l["a"]()>document.getElementById("createCLA").offsetHeight&&(document.getElementById("createCLA").style.height=l["a"]()+"px")};var u=c,d=(a("4443"),a("2877")),f=Object(d["a"])(u,i,n,!1,null,null,null);t["default"]=f.exports},e01a:function(e,t,a){"use strict";var i=a("23e7"),n=a("83ab"),r=a("da84"),s=a("5135"),l=a("861d"),o=a("9bf2").f,c=a("e893"),u=r.Symbol;if(n&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},f=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof f?new u(e):void 0===e?u():u(e);return""===e&&(d[t]=!0),t};c(f,u);var p=f.prototype=u.prototype;p.constructor=f;var h=p.toString,m="Symbol(test)"==String(u("test")),g=/^Symbol\((.*)\)[^)]+$/;o(p,"description",{configurable:!0,get:function(){var e=l(this)?this.valueOf():this,t=h.call(e);if(s(d,e))return"";var a=m?t.slice(7,-1):t.replace(g,"$1");return""===a?void 0:a}}),i({global:!0,forced:!0},{Symbol:f})}},e538:function(e,t,a){var i=a("b622");t.f=i}}]);
//# sourceMappingURL=chunk-2a90cadc.4a817b94.js.map