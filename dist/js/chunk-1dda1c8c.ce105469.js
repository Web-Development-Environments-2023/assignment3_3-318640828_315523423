(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1dda1c8c"],{"13d5":function(e,t,r){"use strict";var n=r("23e7"),i=r("d58f").left,a=r("a640"),c=r("ae40"),s=a("reduce"),o=c("reduce",{1:0});n({target:"Array",proto:!0,forced:!s||!o},{reduce:function(e){return i(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"14c3":function(e,t,r){var n=r("c6b6"),i=r("9263");e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var a=r.call(e,t);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==n(e))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},5319:function(e,t,r){"use strict";var n=r("d784"),i=r("825a"),a=r("7b0b"),c=r("50c4"),s=r("a691"),o=r("1d80"),u=r("8aa5"),l=r("14c3"),d=Math.max,p=Math.min,f=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,g=/\$([$&'`]|\d\d?)/g,h=function(e){return void 0===e?e:String(e)};n("replace",2,(function(e,t,r,n){var x=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=n.REPLACE_KEEPS_$0,m=x?"$":"$0";return[function(r,n){var i=o(this),a=void 0==r?void 0:r[e];return void 0!==a?a.call(r,i,n):t.call(String(i),r,n)},function(e,n){if(!x&&b||"string"===typeof n&&-1===n.indexOf(m)){var a=r(t,e,this,n);if(a.done)return a.value}var o=i(e),f=String(this),v="function"===typeof n;v||(n=String(n));var g=o.global;if(g){var _=o.unicode;o.lastIndex=0}var w=[];while(1){var R=l(o,f);if(null===R)break;if(w.push(R),!g)break;var y=String(R[0]);""===y&&(o.lastIndex=u(f,c(o.lastIndex),_))}for(var I="",k=0,C=0;C<w.length;C++){R=w[C];for(var T=String(R[0]),$=d(p(s(R.index),f.length),0),S=[],F=1;F<R.length;F++)S.push(h(R[F]));var A=R.groups;if(v){var O=[T].concat(S,$,f);void 0!==A&&O.push(A);var P=String(n.apply(void 0,O))}else P=E(T,f,$,S,A,n);$>=k&&(I+=f.slice(k,$)+P,k=$+T.length)}return I+f.slice(k)}];function E(e,r,n,i,c,s){var o=n+e.length,u=i.length,l=g;return void 0!==c&&(c=a(c),l=v),t.call(s,l,(function(t,a){var s;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return r.slice(0,n);case"'":return r.slice(o);case"<":s=c[a.slice(1,-1)];break;default:var l=+a;if(0===l)return t;if(l>u){var d=f(l/10);return 0===d?t:d<=u?void 0===i[d-1]?a.charAt(1):i[d-1]+a.charAt(1):t}s=i[l-1]}return void 0===s?"":s}))}}))},6619:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[e._v(" "+e._s(this.recipe.id)+" "),e.recipe?t("div",[t("button",{staticClass:"addToFavorites",on:{click:e.addToFavorites}},[e._v(" "+e._s(e.isFavorite?"marked as favorites":"Add to favorites")+" ")]),t("div",{staticClass:"recipe-header mt-3 mb-4"},[t("h1",[e._v(e._s(this.recipe.title))]),t("img",{staticClass:"center",attrs:{src:this.recipe.image}})]),t("div",{staticClass:"recipe-body"},[t("div",{staticClass:"mb-3"},[t("div",[e._v("Ready in "+e._s(this.recipe.readyInMinutes)+" minutes")]),t("div",[e._v("Likes: "+e._s(this.recipe.aggregateLikes)+" likes")])])]),t("div",{staticClass:"instructions-wrapper"},[t("div",{staticClass:"ingredients"},[t("h2",[e._v("Ingredients:")]),t("ul",e._l(e.recipe.extendedIngredients,(function(r,n){return t("li",{key:n+"_"+r.id},[e._v(" "+e._s(r.original)+" ")])})),0)]),t("div",{staticClass:"instructions"},[t("h2",[e._v("Instructions:")]),t("p",[e._v(e._s(e.recipe.instructions))])])])]):e._e()])},i=[],a=(r("99af"),r("d81d"),r("13d5"),r("b0c0"),r("ac1f"),r("5319"),r("2909")),c=(r("96cf"),r("1da1")),s={data:function(){return{recipe:[],isFavorite:!1}},mounted:function(){},methods:{addToFavorites:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.post(e.$root.store.server_domain+"/users/favorites",{recipeId:e.recipe.id},{withCredentials:!0});case 3:t.sent,e.isFavorite=!0,t.next=11;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0.response),e.form.submitError=t.t0.response.data.message;case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))()},addToLastReviewed:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.post(e.$root.store.server_domain+"/users/lastViewed",{recipeId:e.recipe.id},{withCredentials:!0});case 3:t.sent,t.next=10;break;case 6:t.prev=6,t.t0=t["catch"](0),console.log(t.t0.response),e.form.submitError=t.t0.response.data.message;case 10:case"end":return t.stop()}}),t,null,[[0,6]])})))()},checkFavorite:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("checkFavorite-here"),t.next=3,e.axios.post(e.$root.store.server_domain+"/users/isfavorites",{recipeId:e.recipe.id},{withCredentials:!0});case 3:r=t.sent,console.log("checkFavorite",r),e.isFavorite=r.data,console.log("isFavorite",e.isFavorite);case 7:case"end":return t.stop()}}),t)})))()}},created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r,n,i,c,s,o,u,l,d,p,f,v,g,h;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.prev=1,r="".concat(e.$root.store.server_domain,"/recipes/fullData/:recipe_id"),n=r.replace(":recipe_id",e.$route.params.recipeId.id),t.next=6,e.axios.get(n,{withCredentials:!0});case 6:i=t.sent,200!==i.status&&e.$router.replace("/NotFound"),e.recipe=i.data[0],t.next=15;break;case 11:return t.prev=11,t.t0=t["catch"](1),e.$router.replace("/NotFound"),t.abrupt("return");case 15:c=e.recipe,s=c.analyzedInstructions,o=c.instructions,u=c.extendedIngredients,l=c.aggregateLikes,d=c.readyInMinutes,p=c.image,f=c.title,v=c.id,g=s.map((function(e){return e.steps[0].step=e.name+e.steps[0].step,e.steps})).reduce((function(e,t){return[].concat(Object(a["a"])(e),Object(a["a"])(t))}),[]),h={instructions:o,_instructions:g,analyzedInstructions:s,extendedIngredients:u,aggregateLikes:l,readyInMinutes:d,image:p,title:f,id:v},e.recipe=h,e.checkFavorite(),e.addToLastReviewed(),t.next=26;break;case 23:t.prev=23,t.t1=t["catch"](0),console.log(t.t1);case 26:case"end":return t.stop()}}),t,null,[[0,23],[1,11]])})))()}},o=s,u=(r("7cf8"),r("0c7c")),l=Object(u["a"])(o,n,i,!1,null,"0104a9c0",null);t["default"]=l.exports},"7cf8":function(e,t,r){"use strict";r("bb64")},"8aa5":function(e,t,r){"use strict";var n=r("6547").charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},9263:function(e,t,r){"use strict";var n=r("ad6d"),i=r("9f7f"),a=RegExp.prototype.exec,c=String.prototype.replace,s=a,o=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),u=i.UNSUPPORTED_Y||i.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],d=o||l||u;d&&(s=function(e){var t,r,i,s,d=this,p=u&&d.sticky,f=n.call(d),v=d.source,g=0,h=e;return p&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),h=String(e).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==e[d.lastIndex-1])&&(v="(?: "+v+")",h=" "+h,g++),r=new RegExp("^(?:"+v+")",f)),l&&(r=new RegExp("^"+v+"$(?!\\s)",f)),o&&(t=d.lastIndex),i=a.call(p?r:d,h),p?i?(i.input=i.input.slice(g),i[0]=i[0].slice(g),i.index=d.lastIndex,d.lastIndex+=i[0].length):d.lastIndex=0:o&&i&&(d.lastIndex=d.global?i.index+i[0].length:t),l&&i&&i.length>1&&c.call(i[0],r,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(i[s]=void 0)})),i}),e.exports=s},"99af":function(e,t,r){"use strict";var n=r("23e7"),i=r("d039"),a=r("e8b5"),c=r("861d"),s=r("7b0b"),o=r("50c4"),u=r("8418"),l=r("65f0"),d=r("1dde"),p=r("b622"),f=r("2d00"),v=p("isConcatSpreadable"),g=9007199254740991,h="Maximum allowed index exceeded",x=f>=51||!i((function(){var e=[];return e[v]=!1,e.concat()[0]!==e})),b=d("concat"),m=function(e){if(!c(e))return!1;var t=e[v];return void 0!==t?!!t:a(e)},E=!x||!b;n({target:"Array",proto:!0,forced:E},{concat:function(e){var t,r,n,i,a,c=s(this),d=l(c,0),p=0;for(t=-1,n=arguments.length;t<n;t++)if(a=-1===t?c:arguments[t],m(a)){if(i=o(a.length),p+i>g)throw TypeError(h);for(r=0;r<i;r++,p++)r in a&&u(d,p,a[r])}else{if(p>=g)throw TypeError(h);u(d,p++,a)}return d.length=p,d}})},"9f7f":function(e,t,r){"use strict";var n=r("d039");function i(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=n((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,r){"use strict";var n=r("23e7"),i=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},bb64:function(e,t,r){},d58f:function(e,t,r){var n=r("1c0b"),i=r("7b0b"),a=r("44ad"),c=r("50c4"),s=function(e){return function(t,r,s,o){n(r);var u=i(t),l=a(u),d=c(u.length),p=e?d-1:0,f=e?-1:1;if(s<2)while(1){if(p in l){o=l[p],p+=f;break}if(p+=f,e?p<0:d<=p)throw TypeError("Reduce of empty array with no initial value")}for(;e?p>=0:d>p;p+=f)p in l&&(o=r(o,l[p],p,u));return o}};e.exports={left:s(!1),right:s(!0)}},d784:function(e,t,r){"use strict";r("ac1f");var n=r("6eeb"),i=r("d039"),a=r("b622"),c=r("9263"),s=r("9112"),o=a("species"),u=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),d=a("replace"),p=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),f=!i((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));e.exports=function(e,t,r,d){var v=a(e),g=!i((function(){var t={};return t[v]=function(){return 7},7!=""[e](t)})),h=g&&!i((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[o]=function(){return r},r.flags="",r[v]=/./[v]),r.exec=function(){return t=!0,null},r[v](""),!t}));if(!g||!h||"replace"===e&&(!u||!l||p)||"split"===e&&!f){var x=/./[v],b=r(v,""[e],(function(e,t,r,n,i){return t.exec===c?g&&!i?{done:!0,value:x.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),m=b[0],E=b[1];n(String.prototype,e,m),n(RegExp.prototype,v,2==t?function(e,t){return E.call(e,this,t)}:function(e){return E.call(e,this)})}d&&s(RegExp.prototype[v],"sham",!0)}},d81d:function(e,t,r){"use strict";var n=r("23e7"),i=r("b727").map,a=r("1dde"),c=r("ae40"),s=a("map"),o=c("map");n({target:"Array",proto:!0,forced:!s||!o},{map:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-1dda1c8c.ce105469.js.map