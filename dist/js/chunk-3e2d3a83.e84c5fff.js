(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e2d3a83"],{"0418":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("el-col",{attrs:{span:8}},[n("div",{staticStyle:{display:"flex"}},[n("img",{staticClass:"pointer",staticStyle:{width:"2rem"},attrs:{src:this.$store.state.user.userImg,alt:""},on:{click:function(e){return t.newWindow()}}}),n("div",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","margin-left":".5rem"}},[n("span",[t._v("Hi, "),n("span",{staticClass:"pointer",staticStyle:{"font-weight":"bold"}},[t._v(t._s(this.$store.state.user.userName)+"!")])])])])]),n("el-col",{attrs:{span:8}},[n("div",[n("svg-icon",{staticClass:"pointer",attrs:{id:"svg_logo","icon-class":"logo_b"},on:{click:function(e){return t.toHome()}}})],1)]),n("el-col",{attrs:{span:8}},[n("div",[n("el-tooltip",{attrs:{effect:"dark",content:"Sign out",placement:"left"}},[n("svg-icon",{staticClass:"pointer",attrs:{id:"svg_loginOut","icon-class":"loginOut"},on:{click:function(e){return t.loginOut()}}})],1)],1)])],1)},a=[],i={name:"Header",computed:{},data:function(){return{}},created:function(){},methods:{toHome:function(){this.$router.push("/home")},loginOut:function(){this.$router.push("/")},newWindow:function(){window.open("https://github.com/ouchengle")}}},o=i,s=(n("a00b"),n("2877")),c=Object(s["a"])(o,r,a,!1,null,"2f1e68fc",null);e["a"]=c.exports},"057f":function(t,e,n){var r=n("fc6a"),a=n("241c").f,i={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return a(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==i.call(t)?s(t):a(r(t))}},1276:function(t,e,n){"use strict";var r=n("d784"),a=n("44e7"),i=n("825a"),o=n("1d80"),s=n("4840"),c=n("8aa5"),l=n("50c4"),u=n("14c3"),f=n("9263"),d=n("d039"),h=[].push,g=Math.min,p=4294967295,m=!d((function(){return!RegExp(p,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(o(this)),i=void 0===n?p:n>>>0;if(0===i)return[];if(void 0===t)return[r];if(!a(t))return e.call(r,t,i);var s,c,l,u=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,m=new RegExp(t.source,d+"g");while(s=f.call(m,r)){if(c=m.lastIndex,c>g&&(u.push(r.slice(g,s.index)),s.length>1&&s.index<r.length&&h.apply(u,s.slice(1)),l=s[0].length,g=c,u.length>=i))break;m.lastIndex===s.index&&m.lastIndex++}return g===r.length?!l&&m.test("")||u.push(""):u.push(r.slice(g)),u.length>i?u.slice(0,i):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var a=o(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,a,n):r.call(String(a),e,n)},function(t,a){var o=n(r,t,this,a,r!==e);if(o.done)return o.value;var f=i(t),d=String(this),h=s(f,RegExp),v=f.unicode,b=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(m?"y":"g"),y=new h(m?f:"^(?:"+f.source+")",b),x=void 0===a?p:a>>>0;if(0===x)return[];if(0===d.length)return null===u(y,d)?[d]:[];var C=0,k=0,w=[];while(k<d.length){y.lastIndex=m?k:0;var _,O=u(y,m?d:d.slice(k));if(null===O||(_=g(l(y.lastIndex+(m?0:k)),d.length))===C)k=c(d,k,v);else{if(w.push(d.slice(C,k)),w.length===x)return w;for(var E=1;E<=O.length-1;E++)if(w.push(O[E]),w.length===x)return w;k=C=_}}return w.push(d.slice(C)),w}]}),!m)},"14c3":function(t,e,n){var r=n("c6b6"),a=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},4248:function(t,e,n){},"44e7":function(t,e,n){var r=n("861d"),a=n("c6b6"),i=n("b622"),o=i("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==a(t))}},"4de4":function(t,e,n){"use strict";var r=n("23e7"),a=n("b727").filter,i=n("1dde"),o=n("ae40"),s=i("filter"),c=o("filter");r({target:"Array",proto:!0,forced:!s||!c},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"615a":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(){return window.innerHeight}},6547:function(t,e,n){var r=n("a691"),a=n("1d80"),i=function(t){return function(e,n){var i,o,s=String(a(e)),c=r(n),l=s.length;return c<0||c>=l?t?"":void 0:(i=s.charCodeAt(c),i<55296||i>56319||c+1===l||(o=s.charCodeAt(c+1))<56320||o>57343?t?s.charAt(c):i:t?s.slice(c,c+2):o-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},"746f":function(t,e,n){var r=n("428f"),a=n("5135"),i=n("e538"),o=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});a(e,t)||o(e,t,{value:i.f(t)})}},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("ad6d"),a=n("9f7f"),i=RegExp.prototype.exec,o=String.prototype.replace,s=i,c=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=a.UNSUPPORTED_Y||a.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],f=c||u||l;f&&(s=function(t){var e,n,a,s,f=this,d=l&&f.sticky,h=r.call(f),g=f.source,p=0,m=t;return d&&(h=h.replace("y",""),-1===h.indexOf("g")&&(h+="g"),m=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(g="(?: "+g+")",m=" "+m,p++),n=new RegExp("^(?:"+g+")",h)),u&&(n=new RegExp("^"+g+"$(?!\\s)",h)),c&&(e=f.lastIndex),a=i.call(d?n:f,m),d?a?(a.input=a.input.slice(p),a[0]=a[0].slice(p),a.index=f.lastIndex,f.lastIndex+=a[0].length):f.lastIndex=0:c&&a&&(f.lastIndex=f.global?a.index+a[0].length:e),u&&a&&a.length>1&&o.call(a[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(a[s]=void 0)})),a}),t.exports=s},"9f7f":function(t,e,n){"use strict";var r=n("d039");function a(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},"9f9d":function(t,e,n){},a00b:function(t,e,n){"use strict";var r=n("4248"),a=n.n(r);a.a},a4d3:function(t,e,n){"use strict";var r=n("23e7"),a=n("da84"),i=n("d066"),o=n("c430"),s=n("83ab"),c=n("4930"),l=n("fdbf"),u=n("d039"),f=n("5135"),d=n("e8b5"),h=n("861d"),g=n("825a"),p=n("7b0b"),m=n("fc6a"),v=n("c04e"),b=n("5c6c"),y=n("7c73"),x=n("df75"),C=n("241c"),k=n("057f"),w=n("7418"),_=n("06cf"),O=n("9bf2"),E=n("d1e7"),S=n("9112"),A=n("6eeb"),$=n("5692"),P=n("f772"),T=n("d012"),R=n("90e3"),j=n("b622"),I=n("e538"),D=n("746f"),F=n("d44e"),L=n("69f3"),M=n("b727").forEach,H=P("hidden"),N="Symbol",q="prototype",U=j("toPrimitive"),B=L.set,K=L.getterFor(N),z=Object[q],V=a.Symbol,W=i("JSON","stringify"),J=_.f,G=O.f,Z=k.f,Y=E.f,Q=$("symbols"),X=$("op-symbols"),tt=$("string-to-symbol-registry"),et=$("symbol-to-string-registry"),nt=$("wks"),rt=a.QObject,at=!rt||!rt[q]||!rt[q].findChild,it=s&&u((function(){return 7!=y(G({},"a",{get:function(){return G(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=J(z,e);r&&delete z[e],G(t,e,n),r&&t!==z&&G(z,e,r)}:G,ot=function(t,e){var n=Q[t]=y(V[q]);return B(n,{type:N,tag:t,description:e}),s||(n.description=e),n},st=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof V},ct=function(t,e,n){t===z&&ct(X,e,n),g(t);var r=v(e,!0);return g(n),f(Q,r)?(n.enumerable?(f(t,H)&&t[H][r]&&(t[H][r]=!1),n=y(n,{enumerable:b(0,!1)})):(f(t,H)||G(t,H,b(1,{})),t[H][r]=!0),it(t,r,n)):G(t,r,n)},lt=function(t,e){g(t);var n=m(e),r=x(n).concat(gt(n));return M(r,(function(e){s&&!ft.call(n,e)||ct(t,e,n[e])})),t},ut=function(t,e){return void 0===e?y(t):lt(y(t),e)},ft=function(t){var e=v(t,!0),n=Y.call(this,e);return!(this===z&&f(Q,e)&&!f(X,e))&&(!(n||!f(this,e)||!f(Q,e)||f(this,H)&&this[H][e])||n)},dt=function(t,e){var n=m(t),r=v(e,!0);if(n!==z||!f(Q,r)||f(X,r)){var a=J(n,r);return!a||!f(Q,r)||f(n,H)&&n[H][r]||(a.enumerable=!0),a}},ht=function(t){var e=Z(m(t)),n=[];return M(e,(function(t){f(Q,t)||f(T,t)||n.push(t)})),n},gt=function(t){var e=t===z,n=Z(e?X:m(t)),r=[];return M(n,(function(t){!f(Q,t)||e&&!f(z,t)||r.push(Q[t])})),r};if(c||(V=function(){if(this instanceof V)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=R(t),n=function(t){this===z&&n.call(X,t),f(this,H)&&f(this[H],e)&&(this[H][e]=!1),it(this,e,b(1,t))};return s&&at&&it(z,e,{configurable:!0,set:n}),ot(e,t)},A(V[q],"toString",(function(){return K(this).tag})),A(V,"withoutSetter",(function(t){return ot(R(t),t)})),E.f=ft,O.f=ct,_.f=dt,C.f=k.f=ht,w.f=gt,I.f=function(t){return ot(j(t),t)},s&&(G(V[q],"description",{configurable:!0,get:function(){return K(this).description}}),o||A(z,"propertyIsEnumerable",ft,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:V}),M(x(nt),(function(t){D(t)})),r({target:N,stat:!0,forced:!c},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var n=V(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){at=!0},useSimple:function(){at=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!s},{create:ut,defineProperty:ct,defineProperties:lt,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:ht,getOwnPropertySymbols:gt}),r({target:"Object",stat:!0,forced:u((function(){w.f(1)}))},{getOwnPropertySymbols:function(t){return w.f(p(t))}}),W){var pt=!c||u((function(){var t=V();return"[null]"!=W([t])||"{}"!=W({a:t})||"{}"!=W(Object(t))}));r({target:"JSON",stat:!0,forced:pt},{stringify:function(t,e,n){var r,a=[t],i=1;while(arguments.length>i)a.push(arguments[i++]);if(r=e,(h(e)||void 0!==t)&&!st(t))return d(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!st(e))return e}),a[1]=e,W.apply(null,a)}})}V[q][U]||S(V[q],U,V[q].valueOf),F(V,N),T[H]=!0},a7a7:function(t,e,n){"use strict";var r=n("9f9d"),a=n.n(r);a.a},ac1f:function(t,e,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b64b:function(t,e,n){var r=n("23e7"),a=n("7b0b"),i=n("df75"),o=n("d039"),s=o((function(){i(1)}));r({target:"Object",stat:!0,forced:s},{keys:function(t){return i(a(t))}})},d32f:function(t,e,n){"use strict";var r=n("e35a"),a=n.n(r);a.a},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),a=n("d039"),i=n("b622"),o=n("9263"),s=n("9112"),c=i("species"),l=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),f=i("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),h=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var g=i(t),p=!a((function(){var e={};return e[g]=function(){return 7},7!=""[t](e)})),m=p&&!a((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[g]=/./[g]),n.exec=function(){return e=!0,null},n[g](""),!e}));if(!p||!m||"replace"===t&&(!l||!u||d)||"split"===t&&!h){var v=/./[g],b=n(g,""[t],(function(t,e,n,r,a){return e.exec===o?p&&!a?{done:!0,value:v.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),y=b[0],x=b[1];r(String.prototype,t,y),r(RegExp.prototype,g,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)})}f&&s(RegExp.prototype[g],"sham",!0)}},dbb4:function(t,e,n){var r=n("23e7"),a=n("83ab"),i=n("56ef"),o=n("fc6a"),s=n("06cf"),c=n("8418");r({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var e,n,r=o(t),a=s.f,l=i(r),u={},f=0;while(l.length>f)n=a(r,e=l[f++]),void 0!==n&&c(u,e,n);return u}})},e35a:function(t,e,n){},e439:function(t,e,n){var r=n("23e7"),a=n("d039"),i=n("fc6a"),o=n("06cf").f,s=n("83ab"),c=a((function(){o(1)})),l=!s||c;r({target:"Object",stat:!0,forced:l,sham:!s},{getOwnPropertyDescriptor:function(t,e){return o(i(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r},ea3a:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:t.checkCLAClass,attrs:{id:"checkCLA"}},[n("div",{staticClass:"header"},[n("el-col",{attrs:{offset:8,span:8}},[n("div",[n("svg-icon",{staticClass:"pointer",attrs:{id:"svg_logo","icon-class":"logo_b"},on:{click:function(e){return t.toHome()}}})],1)])],1),n("div",{attrs:{id:"section"}},[t.isSendCode?t.isVerify?n("div",{staticClass:"content"},[n("el-col",{staticClass:"verifyClass",attrs:{offset:6,span:12}},[n("p",{staticStyle:{"text-align":"center"}},[t._v(" "+t._s(t.passContent)+" ")])])],1):n("div",{staticClass:"content "},[n("el-col",{staticClass:"verifyClass",attrs:{offset:6,span:12}},[n("p",[t._v("请输入6位数验证码完成验证")]),n("el-row",[n("el-col",{staticStyle:{"margin-right":"2rem"},attrs:{span:6}},[n("el-input",{attrs:{size:"medium"},model:{value:t.verifyCode,callback:function(e){t.verifyCode=e},expression:"verifyCode"}})],1),n("el-col",{attrs:{span:6}},[n("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(e){return t.verify()}}},[t._v("确定")])],1)],1)],1)],1):n("div",{staticClass:"content"},[n("el-col",{attrs:{offset:6,span:12}},[n("p",{staticClass:"contentTitle"},[t._v("Please sign the CLA for "),n("span",[t._v(t._s(t.repo))])]),n("el-row",[n("span",{staticClass:"size_s"},[t._v("Version: 2020-06-17")]),n("el-select",{staticStyle:{width:"6rem","margin-left":"2rem"},attrs:{size:"small",value:""},on:{change:t.changeLanguage},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.languageOptions,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),n("div",{staticClass:"marginTop1rem",staticStyle:{"white-space":"pre-wrap"},attrs:{id:"claBox"}}),n("el-divider"),n("el-row",{staticClass:"marginTop1rem"},[n("el-col",{attrs:{span:16}},[n("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm,rules:t.rules,"label-position":"left","label-width":"30%"}},[t._l(t.metadataArr,(function(e,r){return n("el-form-item",{attrs:{label:e.title,required:e.required,prop:e.githubKey}},[n("el-input",{attrs:{size:"small"},model:{value:t.ruleForm[e.githubKey],callback:function(n){t.$set(t.ruleForm,e.githubKey,n)},expression:"ruleForm[item.githubKey]"}})],1)})),n("p",{staticClass:"borderClass",staticStyle:{"font-size":".9rem"}},[t._v(t._s(t.desc.metadataDesc))]),n("div",{staticClass:"marginTop1rem"},[n("el-checkbox",{model:{value:t.isRead,callback:function(e){t.isRead=e},expression:"isRead"}},[t._v(t._s(t.metadata["category"].title))])],1),n("el-form-item",{staticClass:"marginTop1rem",attrs:{"label-width":"0"}},[n("el-button",{attrs:{disabled:!t.isRead,type:"primary"},on:{click:function(e){return t.submitForm("ruleForm")}}},[t._v(t._s(t.desc.sign)+" ")]),n("el-button",{on:{click:function(e){return t.resetForm("ruleForm")}}},[t._v(t._s(t.desc.reset))])],1)],2)],1)],1)],1)],1)]),n("Footer"),n("el-dialog",{attrs:{title:"",top:"5vh",visible:t.dialogVisible,width:"50%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("div",{staticStyle:{"margin-bottom":"2rem"}},[t._v(" 请在48小时内输入邮箱"+t._s(t.ruleForm.email)+"中的验证码进行验证 ")]),n("div",[n("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("确定")])],1)])],1)},a=[],i=(n("99af"),n("4160"),n("b0c0"),n("ac1f"),n("1276"),n("159b"),n("5530")),o=n("0418"),s=n("fd2d"),c=n("615a"),l=n("221d"),u=n("2f62"),f={name:"CheckCLA",components:{Header:o["a"],Footer:s["a"]},data:function(){var t=function(t,e,n){var r=e;console.log(r);var a=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;a.test(r)?n():n(new Error("邮箱格式有误"))},e=function(t,e,n){if(e){var r=/^1[3456789]\d{9}$/;r.test(e)?n():n(new Error("电话号码有误")),n()}else n()},n=function(t,e,n){e||n(new Error("请输入地址")),n()},r=function(t,e,n){e||n(new Error("请输入日期")),n()};return{desc:"",enDesc:{personalContributor:"Individual Contributor",comContributor:"Legal Entity Contributor",metadataDesc:"* require field. Please make sure the E-Mail is related with your gitee account.",sign:"SIGN",reset:"RESET"},cnDesc:{personalContributor:"个人贡献者",comContributor:"企业贡献者",metadataDesc:"*为必填项，请确保你的邮箱与gitee账号绑定",sign:"签署",reset:"重置"},passContent:"",isVerify:!1,isSendCode:!1,verifyCode:"",platform:this.$store.state.platform,dialogVisible:!1,repositoryOptions:[],repo:"",role:"0",ruleForm:{name:"",email:"",tel:"",date1:""},rules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"},{min:2,max:10,message:"长度在 2 到 10 个字符",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{validator:t,trigger:"blur"}],phone:[{validator:e,trigger:"blur"}],address:[{validator:n,trigger:"blur"}],date:[{validator:r,trigger:"blur"}]},isRead:!1,value:0,languageOptions:[{value:0,label:"english"},{value:1,label:"chinese"}],claText:"          通过签署贡献协议（“本协议”），签署的“贡献者”同意接受“本协议”并受“本协议”约束。“本协议”适用于“贡献者”提交给openEuler社区 （“社区”）的全部项目（后称“项目”）的“贡献”，无论“贡献”是在签署日期之前，签署时还是之后提供。\n\n       “贡献” 是指受版权法保护的，由“贡献者”有意“提交”以包含在“项目”所分发软件中任何作品。“提交”是指以电子，口头或书面交流的任何形式送给“社区”管理方或其代表，包括但不限于“社区”管理方为管理的为讨论和改进项目所提供的电子邮件列表上的交流，源代码控制系统以及由“社区”管理方或其代表管理的问题跟踪系统，但不包括由“我”明确标记或以书面形式指定为“非贡献”的交流。\n\n       “贡献者”或“我”是指下面签名栏中标明的个人或法人实体。对于法人实体，做出“贡献”的实体以及由该实体控制、受其控制或受其共同控制的所有其他实体均被视为“贡献者”。就本定义而言，“控制”是指有受控方或共同受控方至少50%直接或间接的投票权，资金或其他有价证券。\n\n       “贡献者”授予“社区”管理方和由“项目”所分发的软件的每个接收者一个永久性的、全球性的、免费的、非独占的、不可撤销的、有分许可权的版权许可，供其复制、使用、修改、分发其“贡献”，不论修改与否。",metaData:[{label:"姓名",prop:"name",required:!0},{label:"邮箱",prop:"email",required:!0},{label:"电话",prop:"tel",required:!1}],metadata:{name:{title:"Name",type:"string",githubKey:"name",required:!0},email:{title:"E-Mail",type:"string",githubKey:"email",required:!0},phone:{title:"Telephone",type:"string",required:!1},faxnumber:{title:"Fax",type:"string",required:!1},address:{title:"Address",type:"string",required:!0},date:{title:"Date",type:"string",required:!0},category:{title:"I have read the Privacy Policy and hereby consent to the processing of my data by openLooKeng in Hong Kong",type:"boolean",required:!0}},metadataArr:[],checkCLAClass:{height:""}}},methods:Object(i["a"])(Object(i["a"])({},Object(u["b"])(["setTokenAct","setRepoInfoAct"])),{},{getCookieData:function(){if(""!==document.cookie){var t,e=document.cookie.split("; "),n="";e.forEach((function(e,r){var a=e.split("=");"access_token"===a[0]?t=a[1]:n="refresh_token"===a[0]?a[1]:""}));var r={access_token:t,refresh_token:n};this.setTokenAct(r)}},changeLanguage:function(){var t=this;this.changeDesc(),this.$axios({url:"/api"+l["f"],params:{language:this.languageOptions[this.value].label},headers:{"Access-Token":this.$store.state.access_token,"Refresh-Token":this.$store.state.refresh_token,User:"".concat(this.$store.state.platform,"/").concat(this.$store.state.user.userName)}}).then((function(e){console.log(e),t.claText=e.data.cla,t.metaData=e.data.metadata})).catch((function(t){console.log(t)}))},changeDesc:function(){0===this.value?this.desc=this.enDesc:1===this.value&&(this.desc=this.cnDesc)},getSignPage:function(){var t=this;console.log("getSignPage"),this.changeDesc(),this.$axios({url:"/api"+l["m"],params:{platform:"gitee",org_id:"",apply_to:""}}).then((function(e){console.log(e),e.data.length&&e.data.forEach((function(t){})),t.claText=e.data.cla,t.metaData=e.data.metadata})).catch((function(t){console.log(t)}))},getCompanyMetaAndCla:function(){var t=this;this.$axios({url:"/api"+l["f"],headers:{"Access-Token":this.$store.state.access_token,"Refresh-Token":this.$store.state.refresh_token,User:"".concat(this.platform,"/").concat(this.$store.state.user.userName)}}).then((function(e){console.log(e),200===e.status&&(t.claText=e.data.cla,t.metaData=e.data.metadata)})).catch((function(t){console.log(t)}))},roleChange:function(){switch(console.log(this.role),this.role){case"0":break;case"1":this.getCompanyMetaAndCla();break}},toHome:function(){this.$router.push("/home")},verify:function(){var t=this;this.isVerify=!0;var e={code:this.verifyCode};this.$axios({url:"/api"+l["u"],method:"post",data:e,headers:{"Access-Token":this.$store.state.access_token,"Refresh-Token":this.$store.state.refresh_token,User:"".concat(this.platform,"/").concat(this.$store.state.user.userName)}}).then((function(e){console.log(e),200===e.data.code?t.isVerify=!0:t.$message.error("验证码错误")})).catch((function(t){console.log(t)}))},signCla:function(){var t=this;this.$router.push("/verifyPage?role=1"),this.dialogVisible=!0,this.isSendCode=!0,console.log(c["a"](),document.getElementById("checkCLA").offsetHeight),this.checkCLAClass.height=c["a"]()+"px";var e="".concat(Math.floor(10*Math.random())).concat(Math.floor(10*Math.random())).concat(Math.floor(10*Math.random())).concat(Math.floor(10*Math.random())).concat(Math.floor(10*Math.random())).concat(Math.floor(10*Math.random())),n={code:e,role:this.role,name:this.ruleForm.name,email:this.ruleForm.email,tel:this.ruleForm.tel};console.log(n),this.$axios({url:"/api"+l["q"],method:"post",data:n,headers:{"Access-Token":this.$store.state.access_token,"Refresh-Token":this.$store.state.refresh_token,User:"".concat(this.platform,"/").concat(this.$store.state.user.userName)}}).then((function(e){console.log(e),t.dialogVisible=!0,t.isSendCode=!0})).catch((function(t){console.log(t)}))},submitForm:function(t){var e=this;this.$refs[t].validate((function(t){if(!t)return console.log("error submit!!"),!1;e.signCla()}))},getRepositoriesOfOrg:function(t,e){var n=this,r={access_token:this.$store.state.access_token,org:t,page:1,per_page:10};console.log("getRepositoriesOfOrg",r),this.$axios({url:"https://gitee.com/api/v5/orgs/".concat(t,"/repos"),params:r,headers:{"Access-Token":this.$store.state.access_token,"Refresh-Token":this.$store.state.refresh_token,User:"".concat(this.platform,"/").concat(this.$store.state.user.userName)}}).then((function(r){console.log(r),200===r.status&&(n.repositoryOptions=[],r.data.forEach((function(r,a){n.repositoryOptions.push({value:a,org:t,org_id:e,repoName:r.name,label:"".concat(t,"/").concat(r.name),id:r.id})})))})).catch((function(t){console.log(t)}))},resetForm:function(t){this.$refs[t].resetFields()},setClientHeight:function(){var t=this;this.$nextTick((function(){c["a"]()>document.getElementById("checkCLA").offsetHeight?t.checkCLAClass.height=c["a"]()+"px":t.checkCLAClass.height=document.getElementById("checkCLA").offsetHeight})),console.log(document.getElementById("checkCLA").offsetHeight)},setClaContent:function(){document.getElementById("claBox").innerHTML=this.claText},loadMetadata:function(){for(var t in console.log(this.metadata),this.metadataArr=[],this.metadata)console.log(t),"category"!==t&&(Object.assign(this.metadata[t],{githubKey:t}),this.metadataArr.push(this.metadata[t]));console.log(this.metadataArr)}}),created:function(){this.getCookieData(),this.getSignPage(),this.loadMetadata()},mounted:function(){this.setClientHeight(),this.setClaContent()}};window.onresize=function(){c["a"]()>document.getElementById("checkCLA").offsetHeight&&(document.getElementById("checkCLA").style.height=c["a"]()+"px")};var d=f,h=(n("a7a7"),n("2877")),g=Object(h["a"])(d,r,a,!1,null,"6c09a5b4",null);e["default"]=g.exports},fd2d:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{staticClass:"footer"},[n("el-col",{staticClass:"left",attrs:{span:8}},[n("span",[t._v("© 2020 HUAWEI SE")])]),n("el-col",{staticClass:"center",attrs:{span:8}},[n("span",[t._v("Made with "),n("svg-icon",{attrs:{"icon-class":"heart"}}),t._v(" from the GitHub team at HUAWEI ")],1)]),n("el-col",{staticClass:"right",attrs:{span:8}},[n("div",[n("span",{staticClass:"pointer"},[t._v("Terms of Service & Privacy Policy")]),n("span",{staticClass:"pointer"},[n("svg-icon",{attrs:{id:"github_logo","icon-class":"github"}}),t._v("Open an issue")],1)])])],1)},a=[],i={name:"Footer"},o=i,s=(n("d32f"),n("2877")),c=Object(s["a"])(o,r,a,!1,null,"023530e2",null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-3e2d3a83.e84c5fff.js.map