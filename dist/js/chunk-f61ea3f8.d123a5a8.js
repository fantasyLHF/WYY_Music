(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f61ea3f8"],{"038e":function(t,e,n){"use strict";n("4ad5")},1276:function(t,e,n){"use strict";var r=n("d784"),i=n("44e7"),a=n("825a"),c=n("1d80"),s=n("4840"),o=n("8aa5"),u=n("50c4"),l=n("14c3"),f=n("9263"),d=n("d039"),p=[].push,g=Math.min,v=4294967295,h=!d((function(){return!RegExp(v,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(c(this)),a=void 0===n?v:n>>>0;if(0===a)return[];if(void 0===t)return[r];if(!i(t))return e.call(r,t,a);var s,o,u,l=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,h=new RegExp(t.source,d+"g");while(s=f.call(h,r)){if(o=h.lastIndex,o>g&&(l.push(r.slice(g,s.index)),s.length>1&&s.index<r.length&&p.apply(l,s.slice(1)),u=s[0].length,g=o,l.length>=a))break;h.lastIndex===s.index&&h.lastIndex++}return g===r.length?!u&&h.test("")||l.push(""):l.push(r.slice(g)),l.length>a?l.slice(0,a):l}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=c(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,i,n):r.call(String(i),e,n)},function(t,i){var c=n(r,t,this,i,r!==e);if(c.done)return c.value;var f=a(t),d=String(this),p=s(f,RegExp),x=f.unicode,m=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(h?"y":"g"),b=new p(h?f:"^(?:"+f.source+")",m),y=void 0===i?v:i>>>0;if(0===y)return[];if(0===d.length)return null===l(b,d)?[d]:[];var E=0,R=0,_=[];while(R<d.length){b.lastIndex=h?R:0;var C,A=l(b,h?d:d.slice(R));if(null===A||(C=g(u(b.lastIndex+(h?0:R)),d.length))===E)R=o(d,R,x);else{if(_.push(d.slice(E,R)),_.length===y)return _;for(var I=1;I<=A.length-1;I++)if(_.push(A[I]),_.length===y)return _;R=E=C}}return _.push(d.slice(E)),_}]}),!h)},"14c3":function(t,e,n){var r=n("c6b6"),i=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"1dde":function(t,e,n){var r=n("d039"),i=n("b622"),a=n("2d00"),c=i("species");t.exports=function(t){return a>=51||!r((function(){var e=[],n=e.constructor={};return n[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"25f0":function(t,e,n){"use strict";var r=n("6eeb"),i=n("825a"),a=n("d039"),c=n("ad6d"),s="toString",o=RegExp.prototype,u=o[s],l=a((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),f=u.name!=s;(l||f)&&r(RegExp.prototype,s,(function(){var t=i(this),e=String(t.source),n=t.flags,r=String(void 0===n&&t instanceof RegExp&&!("flags"in o)?c.call(t):n);return"/"+e+"/"+r}),{unsafe:!0})},"44e7":function(t,e,n){var r=n("861d"),i=n("c6b6"),a=n("b622"),c=a("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[c])?!!e:"RegExp"==i(t))}},"4ad5":function(t,e,n){},"4d63":function(t,e,n){var r=n("83ab"),i=n("da84"),a=n("94ca"),c=n("7156"),s=n("9bf2").f,o=n("241c").f,u=n("44e7"),l=n("ad6d"),f=n("9f7f"),d=n("6eeb"),p=n("d039"),g=n("69f3").set,v=n("2626"),h=n("b622"),x=h("match"),m=i.RegExp,b=m.prototype,y=/a/g,E=/a/g,R=new m(y)!==y,_=f.UNSUPPORTED_Y,C=r&&a("RegExp",!R||_||p((function(){return E[x]=!1,m(y)!=y||m(E)==E||"/a/i"!=m(y,"i")})));if(C){var A=function(t,e){var n,r=this instanceof A,i=u(t),a=void 0===e;if(!r&&i&&t.constructor===A&&a)return t;R?i&&!a&&(t=t.source):t instanceof A&&(a&&(e=l.call(t)),t=t.source),_&&(n=!!e&&e.indexOf("y")>-1,n&&(e=e.replace(/y/g,"")));var s=c(R?new m(t,e):m(t,e),r?this:b,A);return _&&n&&g(s,{sticky:n}),s},I=function(t){t in A||s(A,t,{configurable:!0,get:function(){return m[t]},set:function(e){m[t]=e}})},S=o(m),w=0;while(S.length>w)I(S[w++]);b.constructor=A,A.prototype=b,d(i,"RegExp",A)}v("RegExp")},6547:function(t,e,n){var r=n("a691"),i=n("1d80"),a=function(t){return function(e,n){var a,c,s=String(i(e)),o=r(n),u=s.length;return o<0||o>=u?t?"":void 0:(a=s.charCodeAt(o),a<55296||a>56319||o+1===u||(c=s.charCodeAt(o+1))<56320||c>57343?t?s.charAt(o):a:t?s.slice(o,o+2):c-56320+(a-55296<<10)+65536)}};t.exports={codeAt:a(!1),charAt:a(!0)}},"65f0":function(t,e,n){var r=n("861d"),i=n("e8b5"),a=n("b622"),c=a("species");t.exports=function(t,e){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?r(n)&&(n=n[c],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},7156:function(t,e,n){var r=n("861d"),i=n("d2bb");t.exports=function(t,e,n){var a,c;return i&&"function"==typeof(a=e.constructor)&&a!==n&&r(c=a.prototype)&&c!==n.prototype&&i(t,c),t}},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("ad6d"),i=n("9f7f"),a=RegExp.prototype.exec,c=String.prototype.replace,s=a,o=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=i.UNSUPPORTED_Y||i.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],f=o||l||u;f&&(s=function(t){var e,n,i,s,f=this,d=u&&f.sticky,p=r.call(f),g=f.source,v=0,h=t;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),h=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(g="(?: "+g+")",h=" "+h,v++),n=new RegExp("^(?:"+g+")",p)),l&&(n=new RegExp("^"+g+"$(?!\\s)",p)),o&&(e=f.lastIndex),i=a.call(d?n:f,h),d?i?(i.input=i.input.slice(v),i[0]=i[0].slice(v),i.index=f.lastIndex,f.lastIndex+=i[0].length):f.lastIndex=0:o&&i&&(f.lastIndex=f.global?i.index+i[0].length:e),l&&i&&i.length>1&&c.call(i[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(i[s]=void 0)})),i}),t.exports=s},"9d8f":function(t,e,n){t.exports=n.p+"img/needle-plus.994aa910.png"},"9f7f":function(t,e,n){"use strict";var r=n("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ae40:function(t,e,n){var r=n("83ab"),i=n("d039"),a=n("5135"),c=Object.defineProperty,s={},o=function(t){throw t};t.exports=function(t,e){if(a(s,t))return s[t];e||(e={});var n=[][t],u=!!a(e,"ACCESSORS")&&e.ACCESSORS,l=a(e,0)?e[0]:o,f=a(e,1)?e[1]:void 0;return s[t]=!!n&&!i((function(){if(u&&!r)return!0;var t={length:-1};u?c(t,1,{enumerable:!0,get:o}):t[1]=1,n.call(t,l,f)}))}},b727:function(t,e,n){var r=n("0366"),i=n("44ad"),a=n("7b0b"),c=n("50c4"),s=n("65f0"),o=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,l=4==t,f=6==t,d=7==t,p=5==t||f;return function(g,v,h,x){for(var m,b,y=a(g),E=i(y),R=r(v,h,3),_=c(E.length),C=0,A=x||s,I=e?A(g,_):n||d?A(g,0):void 0;_>C;C++)if((p||C in E)&&(m=E[C],b=R(m,C,y),t))if(e)I[C]=b;else if(b)switch(t){case 3:return!0;case 5:return m;case 6:return C;case 2:o.call(I,m)}else switch(t){case 4:return!1;case 7:o.call(I,m)}return f?-1:u||l?l:I}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},d215:function(t,e,n){t.exports=n.p+"img/circle.4392c8c9.png"},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("d039"),a=n("b622"),c=n("9263"),s=n("9112"),o=a("species"),u=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),f=a("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),p=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var g=a(t),v=!i((function(){var e={};return e[g]=function(){return 7},7!=""[t](e)})),h=v&&!i((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[o]=function(){return n},n.flags="",n[g]=/./[g]),n.exec=function(){return e=!0,null},n[g](""),!e}));if(!v||!h||"replace"===t&&(!u||!l||d)||"split"===t&&!p){var x=/./[g],m=n(g,""[t],(function(t,e,n,r,i){return e.exec===c?v&&!i?{done:!0,value:x.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),b=m[0],y=m[1];r(String.prototype,t,b),r(RegExp.prototype,g,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)})}f&&s(RegExp.prototype[g],"sham",!0)}},d81d:function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").map,a=n("1dde"),c=n("ae40"),s=a("map"),o=c("map");r({target:"Array",proto:!0,forced:!s||!o},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},e90e:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"box",on:{click:t.toggle}},[r("div",{staticClass:"bg",style:"background:url('"+t.urli+"') 50% 50% no-repeat; background-size: cover; filter:blur(20px)"}),t._m(0),r("div",{staticClass:"tips"},[t._v("tips : dblclick")]),r("img",{staticClass:"middle",attrs:{src:n("9d8f"),alt:""}}),r("div",{staticClass:"container"},[r("div",{staticClass:"page",class:t.trun},[r("img",{attrs:{src:t.urli,alt:""}}),t._m(1)])]),r("div",{staticClass:"t"},[r("span",[t._v(t._s(t.data.name)+" ")]),t._v(" - "),r("span",[t._v(" "+t._s(t._f("name")(t.data)))])]),r("div",{staticClass:"content"},[r("ul",{ref:"pos"},t._l(t.lrcArr,(function(e,n){return r("li",{key:n,class:e.class,on:{click:function(n){return t.change(e.time)}}},[t._v(" "+t._s(e.lyric)+" ")])})),0)]),r("div",{staticClass:"slider"},[r("div",{staticClass:"time"},[t._v(t._s(t._f("ctt")(t.ct))+"/"+t._s(t._f("dtt")(t.dt)))]),r("div",{staticClass:"cover",on:{click:function(e){return e.stopPropagation(),t.move(e)}}}),r("div",{ref:"ball",staticClass:"ball"})]),r("audio",{ref:"audio",attrs:{src:t.url,autoplay:"autoplay",controls:"controls"},on:{timeupdate:t.timeupdate}})])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"title"},[r("img",{attrs:{src:n("a171"),alt:""}}),t._v(" Hokv Music ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"circle"},[r("img",{attrs:{src:n("d215"),alt:""}})])}],a=(n("d81d"),n("b0c0"),n("d3b7"),n("4d63"),n("ac1f"),n("25f0"),n("1276"),{computed:{},filters:{ctt:function(t){var e=parseInt(t/60),n=parseInt(t%60);return e<10&&(e="0"+e),n<10&&(n="0"+n),e+":"+n},dtt:function(t){t||(t=0);var e=parseInt(t/60),n=parseInt(t%60);return e<10&&(e="0"+e),n<10&&(n="0"+n),e+":"+n},name:function(t){return t.name?t.ar[0].name:t}},methods:{move:function(t){var e=this.$refs.audio;this.$refs.audio.currentTime=t.offsetX/parseInt(getComputedStyle(t.target).width)*e.duration,this.ct=this.$refs.audio.currentTime},change:function(t){var e=this.$refs.audio;e.currentTime=t},timeupdate:function(t){var e=t.target,n=e.currentTime,r=e.duration;for(var i in this.dt=r,this.ct=n,this.$refs.ball.style.left=parseInt(getComputedStyle(this.$refs.ball.parentNode).width)*n/r-20+"px",this.lrcArr){var a=this.lrcArr[i].time;if(this.lrcArr[i].class="",n<a){this.lrcArr[i-1].class="active",this.$refs.pos.style.top=-24*(i-4)+"px";break}}n==r&&(this.$refs.ball.style.left="-20px",this.$refs.pos.style.top=0,this.trun="",this.flag=!1)},toggle:function(){var t=(new Date).getTime();if(t-this.time>280)this.time=t;else{this.time=t;var e=this.$refs.audio;this.flag?(this.flag=!1,this.trun="",e.pause()):(this.flag=!0,this.trun="trun",e.play())}}},data:function(){return{trun:"trun",flag:!0,data:[],al:[],url:"",urli:"",time:0,lrcArr:[],dt:0,ct:0}},props:["id"],beforeRouteEnter:function(t,e,n){n((function(t){t.axios("/song/detail?ids="+t.id).then((function(e){return t.data=e.data.songs[0],t.al=t.data.al,t.urli=t.al.picUrl,t.url=" https://music.163.com/song/media/outer/url?id=".concat(t.id,".mp3"),fetch("/lyric?id="+t.id)})).then((function(t){return t.json()})).then((function(e){var n=e.lrc.lyric,r=n.split(/\n/),i=/\[(\d+):(\d+\.\d+)\](.+)/,a=r.map((function(t){return i.test(t),{time:parseInt(60*RegExp.$1)+parseFloat(RegExp.$2),lyric:RegExp.$3,class:""}}));t.lrcArr=a})).catch((function(t){console.log("请求错误",t)}))}))}}),c=a,s=(n("038e"),n("2877")),o=Object(s["a"])(c,r,i,!1,null,"38d3d1d4",null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-f61ea3f8.d123a5a8.js.map