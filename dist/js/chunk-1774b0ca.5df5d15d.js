(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1774b0ca"],{"2d51":function(e,t,i){"use strict";i("40cf")},"40cf":function(e,t,i){},"60f8":function(e,t,i){},"7c4b":function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("FamilyPreviewList",{attrs:{recipes:e.family}})],1)},n=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"title"},[t("h1",[e._v(" Family recipes Page ")])])}],s=(i("96cf"),i("1da1")),c=function(){var e=this,t=e._self._c;return t("b-container",[t("b-row",e._l(e.recipes,(function(e){return t("b-col",{key:e.id},[t("FamilyPreview",{staticClass:"familyPreview",attrs:{recipe:e}})],1)})),1)],1)},a=[],o=i("2909"),l=function(){var e=this,t=e._self._c;return t("router-link",{staticClass:"family-recipe-preview",attrs:{to:{name:"Internalfamily",params:{recipeId:e.recipe[0]}}}},[t("div",{staticClass:"recipe-body"},[t("div",{staticClass:"recipe-title",attrs:{title:e.recipe[0].owner}},[e._v(e._s(e.recipe[0].owner))]),e.recipe[0].image?t("img",{staticClass:"recipe-image",attrs:{src:e.recipe[0].image}}):e._e(),t("div",{staticClass:"recipe-details"},[t("ul",{staticClass:"recipe-info"},[t("li",[e._v(e._s(e.recipe[0].cookingTime)+" cookingTime")]),t("li",[e._v(e._s(e.recipe[0].ingridients)+" ingridients")]),t("li",[e._v(e._s(e.recipe[0].instructions)+" instructions")])])])])])},u=[],p={props:{recipe:{type:Object,required:!0}},created:function(){console.log(this.recipe.owner)}},m=p,f=(i("a076"),i("0c7c")),d=Object(f["a"])(m,l,u,!1,null,"55eeb6e9",null),v=d.exports,y={data:function(){return{recipes_array:[]}},mounted:function(){},name:"FamilyPreviewList",components:{FamilyPreview:v},props:{title:{type:String,required:!0},recipes:{type:Array,required:!0}},methods:{updateRecipes:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var i,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,console.log(e.$root.store.server_domain+"/users/MyFamilyRecipes"),t.next=4,e.axios.get(e.$root.store.server_domain+"/users/MyFamilyRecipes");case 4:r=t.sent,n=r.data.recipes,e.recipes=[],(i=e.recipes).push.apply(i,Object(o["a"])(n)),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()}}},w=y,_=(i("c84c"),Object(f["a"])(w,c,a,!1,null,"be8481d6",null)),g=_.exports,b={data:function(){return{family:[]}},mounted:function(){this.getFamily()},components:{FamilyPreviewList:g},methods:{getFamily:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get(e.$root.store.server_domain+"/users/MyFamilyRecipes",{withCredentials:!0});case 3:i=t.sent,e.family=i.data,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}}},h=b,k=(i("2d51"),Object(f["a"])(h,r,n,!1,null,"1d729bba",null));t["default"]=k.exports},a076:function(e,t,i){"use strict";i("ac72")},ac72:function(e,t,i){},c84c:function(e,t,i){"use strict";i("60f8")}}]);
//# sourceMappingURL=chunk-1774b0ca.5df5d15d.js.map