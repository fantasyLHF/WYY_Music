(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ad888f8"],{"159b":function(t,e,r){var n=r("da84"),i=r("fdbc"),a=r("17c2"),c=r("9112");for(var o in i){var s=n[o],u=s&&s.prototype;if(u&&u.forEach!==a)try{c(u,"forEach",a)}catch(f){u.forEach=a}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,i=r("a640"),a=r("ae40"),c=i("forEach"),o=a("forEach");t.exports=c&&o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"2d3b":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"box"},[r("div",{staticClass:"search"},[r("div",{staticClass:"input"},[r("i"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.myinput,expression:"myinput"}],attrs:{type:"text",placeholder:"搜索歌曲、歌手、专辑"},domProps:{value:t.myinput},on:{input:[function(e){e.target.composing||(t.myinput=e.target.value)},t.changeSearchPage],keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.kdown(e)}}})])]),r("keep-alive",[r("router-view",{attrs:{changedata:t.changedata,mysearch:t.mysearch,tip:t.tip,myinput:t.myinput}})],1)],1)},i=[],a=(r("4160"),r("b0c0"),r("8a79"),r("159b"),{data:function(){return{myinput:"",changedata:[],mysearch:["四季予你","海阔天空"],tip:[],timer:null,flag:!0}},watch:{myinput:function(t){var e=this;t&&this.flag?(this.flag=!1,this.timer=null,this.timer=setTimeout((function(){e.axios("/search/suggest?keywords= ".concat(t,"&type=mobile")).then((function(t){if(e.flag=!0,t.data.result.allMatch)e.tip=t.data.result.allMatch;else if(t.data.result){var r=[];t.data.result.order.forEach((function(e){t.data.result[e].forEach((function(t){var e={};e.keyword=t.name,r.push(e)}))})),e.tip=r}else e.tip=[]})).catch((function(t){console.log("请求错误",t)}))}),300)):this.tip=[]}},methods:{changeSearchPage:function(){window.location.href.endsWith("/search/tips")||this.$router.push("/search/tips").catch((function(){}))},kdown:function(){this.myinput&&(this.mysearch.push(this.myinput),this.$router.push("/search/list/"+this.myinput).catch((function(){})))}}}),c=a,o=(r("7b62"),r("2877")),s=Object(o["a"])(c,n,i,!1,null,"b64be5d8",null);e["default"]=s.exports},"33c4":function(t,e,r){},4160:function(t,e,r){"use strict";var n=r("23e7"),i=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"44e7":function(t,e,r){var n=r("861d"),i=r("c6b6"),a=r("b622"),c=a("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[c])?!!e:"RegExp"==i(t))}},"5a34":function(t,e,r){var n=r("44e7");t.exports=function(t){if(n(t))throw TypeError("The method doesn't accept regular expressions");return t}},"65f0":function(t,e,r){var n=r("861d"),i=r("e8b5"),a=r("b622"),c=a("species");t.exports=function(t,e){var r;return i(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?n(r)&&(r=r[c],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"7b62":function(t,e,r){"use strict";r("33c4")},"8a79":function(t,e,r){"use strict";var n=r("23e7"),i=r("06cf").f,a=r("50c4"),c=r("5a34"),o=r("1d80"),s=r("ab13"),u=r("c430"),f="".endsWith,l=Math.min,h=s("endsWith"),p=!u&&!h&&!!function(){var t=i(String.prototype,"endsWith");return t&&!t.writable}();n({target:"String",proto:!0,forced:!p&&!h},{endsWith:function(t){var e=String(o(this));c(t);var r=arguments.length>1?arguments[1]:void 0,n=a(e.length),i=void 0===r?n:l(a(r),n),s=String(t);return f?f.call(e,s,i):e.slice(i-s.length,i)===s}})},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},ab13:function(t,e,r){var n=r("b622"),i=n("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[i]=!1,"/./"[t](e)}catch(n){}}return!1}},ae40:function(t,e,r){var n=r("83ab"),i=r("d039"),a=r("5135"),c=Object.defineProperty,o={},s=function(t){throw t};t.exports=function(t,e){if(a(o,t))return o[t];e||(e={});var r=[][t],u=!!a(e,"ACCESSORS")&&e.ACCESSORS,f=a(e,0)?e[0]:s,l=a(e,1)?e[1]:void 0;return o[t]=!!r&&!i((function(){if(u&&!n)return!0;var t={length:-1};u?c(t,1,{enumerable:!0,get:s}):t[1]=1,r.call(t,f,l)}))}},b727:function(t,e,r){var n=r("0366"),i=r("44ad"),a=r("7b0b"),c=r("50c4"),o=r("65f0"),s=[].push,u=function(t){var e=1==t,r=2==t,u=3==t,f=4==t,l=6==t,h=7==t,p=5==t||l;return function(d,v,y,m){for(var g,b,S=a(d),L=i(S),w=n(v,y,3),x=c(L.length),E=0,k=m||o,T=e?k(d,x):r||h?k(d,0):void 0;x>E;E++)if((p||E in L)&&(g=L[E],b=w(g,E,S),t))if(e)T[E]=b;else if(b)switch(t){case 3:return!0;case 5:return g;case 6:return E;case 2:s.call(T,g)}else switch(t){case 4:return!1;case 7:s.call(T,g)}return l?-1:u||f?f:T}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-0ad888f8.33aefb0d.js.map