(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30b241ba"],{"0b70":function(t,a,s){"use strict";s.r(a);var n=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"box"},[n("div",{staticClass:"logo"},[n("img",{attrs:{src:s("9659"),alt:""}}),n("div",{staticClass:"mybox"},[n("div",{staticClass:"top"}),n("div",{staticClass:"bot"},[t._v(t._s(t.date))])])])])},i=[],e={data:function(){return{data:[]}},computed:{date:function(){var t=new Date,a=t.getMonth()+1;a<10&&(a="0"+a);var s=t.getDate();return s<10&&(s="0"+s),"更新日期:"+a+"月"+s+"日"}},created:function(){this.axios("/top/list?idx=1").then((function(t){var a=t.data.playlist.trackIds;console.log(a)}))}},o=e,c=(s("a967"),s("2877")),r=Object(c["a"])(o,n,i,!1,null,"f98de6b2",null);a["default"]=r.exports},1254:function(t,a,s){},9659:function(t,a,s){t.exports=s.p+"img/hot_music_bg_2x.f01a2523.jpg"},a967:function(t,a,s){"use strict";s("1254")}}]);
//# sourceMappingURL=chunk-30b241ba.60cc8ffe.js.map