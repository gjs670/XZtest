webpackJsonp([1],[,,,,,,,,,,,function(t,s,e){e(88);var a=e(1)(e(51),e(103),null,null);t.exports=a.exports},function(t,s,e){var a=e(1)(e(55),e(105),null,null);t.exports=a.exports},,,,,,,,,,,,,,function(t,s,e){"use strict";var a=e(3),i=e(111),n=e(96),c=e.n(n),o=e(100),r=e.n(o),l=e(101),v=e.n(l);a.a.use(i.a),s.a=new i.a({routes:[{path:"/",redirect:"/goods"},{path:"/goods",name:"goods",component:c.a},{path:"/ratings",name:"ratings",component:r.a},{path:"/seller",name:"seller",component:v.a}]})},function(t,s,e){"use strict";var a=e(3),i=e(2),n=e(48),c=e(47);a.a.use(i.a),s.a=new i.a.Store({state:n.a,mutations:c.a})},function(t,s,e){e(89);var a=e(1)(e(49),e(104),"data-v-46d5ec2c",null);t.exports=a.exports},,,,,,,,,,,,,,,,,,function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(3),i=e(28),n=e.n(i),c=e(26),o=e(27);a.a.config.productionTip=!1,new a.a({el:"#app",router:c.a,store:o.a,render:function(t){return t(n.a)}})},function(t,s,e){"use strict";s.a={vxaddCart:function(t,s){t.vxselectFoods.push(s)},vxdecreaseCart:function(t,s){t.vxselectFoods.forEach(function(e,a){e.name===s.name&&t.vxselectFoods.splice(a,1)})},vxempty:function(t,s){t.vxselectFoods.splice(0,t.vxselectFoods.length)}}},function(t,s,e){"use strict";s.a={vxselectFoods:[]}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(98),i=e.n(a),n=e(13),c=e.n(n);s.default={name:"app",data:function(){return{d:{seller:{},goods:[],ratings:[]}}},mounted:function(){var t=this;c.a.get("/static/data.json").then(function(s){t.d.seller=s.data.seller,t.d.goods=s.data.goods,t.d.ratings=s.data.ratings})},methods:{},computed:{},components:{"v-header":i.a}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(4),i=e.n(a),n=e(5),c=e.n(n),o=e(99),r=e.n(o),l=e(11),v=e.n(l),d=e(97),u=e.n(d),_=e(2);s.default={props:["seller","goods"],data:function(){return{iconClassMap:["decrease","discount","special","invoice","guarantee"],selectedFood:"",foods:[]}},mounted:function(){var t=this;this.$nextTick(function(){new c.a(t.$refs["menu-wrapper"],{click:!0}),new c.a(t.$refs["foods-wrapper"],{click:!0})})},methods:{goDetail:function(t){this.selectedFood=t,this.$refs.myFood.show()}},updated:function(){},computed:i()({},e.i(_.b)(["vxselectFoods"]),{selectFoods:function(){var t=this;return this.foods=[],this.goods.forEach(function(s){s.foods.forEach(function(s){s.count&&t.foods.push(s)})}),this.foods}}),components:{shopcart:r.a,cartcontrol:v.a,foodDetail:u.a}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(4),i=e.n(a),n=e(3),c=e(2);s.default={props:["food"],data:function(){return{ok:!0}},methods:i()({},e.i(c.c)(["vxaddCart","vxdecreaseCart"]),{addCart:function(){void 0===this.food.count&&(n.a.set(this.food,"count",0),n.a.set(this.food,"active",!0)),this.food.count++,this.food.active&&(this.vxaddCart(this.food),this.food.active=!1)},decreaseCart:function(){0===--this.food.count&&(this.vxdecreaseCart(this.food),this.food.active=!0)}}),computed:i()({},e.i(c.b)(["vxselectFoods"]))}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(4),i=e.n(a),n=e(5),c=e.n(n),o=e(11),r=e.n(o),l=e(2);s.default={props:["food"],data:function(){return{showDetail:!1}},mounted:function(){var t=this;this.$nextTick(function(){t.a||(t.a=new c.a(t.$refs.detailWrapper,{click:!0}))})},methods:i()({},e.i(l.c)(["vxaddCart"]),{show:function(){this.showDetail=!this.showDetail},addCart:function(){this.$refs.cartcontrol.addCart()}}),components:{cartcontrol:r.a}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(12),i=e.n(a);s.default={props:["seller"],data:function(){return{detailshow:!1,iconClassMap:["decrease","discount","special","invoice","guarantee"]}},components:{star:i.a}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(4),i=e.n(a),n=e(2),c=e(11),o=e.n(c);s.default={props:["deliveryPrice","minPrice","selectFoods"],data:function(){return{show:!1}},mounted:function(){this.$nextTick(function(){})},computed:{totalPrice:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.price*s.count}),t},totalCount:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.count}),t},payDesc:function(){return 0===this.totalPrice?"￥"+this.minPrice+"起送":this.totalPrice<this.minPrice?"还差￥"+(this.minPrice-this.totalPrice)+"起送":"去结算"}},methods:i()({},e.i(n.c)(["vxempty"]),{empty:function(){this.show=!1,this.selectFoods.forEach(function(t){t.count=0,t.active=!0}),this.vxempty()}}),components:{cartcontrol:o.a}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={props:["score","size"],methods:{itemClasses:function(){for(var t=[],s=Math.floor(this.score),e=this.score-s>=.5,a=0;a<s;a++)t.push("on");for(e&&t.push("half");t.length<5;)t.push("off");return t}},computed:{starType:function(){return"star-"+this.size}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(5),i=e.n(a),n=e(13),c=e.n(n),o=e(12),r=e.n(o);s.default={props:["seller"],data:function(){return{ratings:"",classifyArr:[{name:"全部",count:0,active:!0,comment:[]},{name:"推荐",count:0,active:!1,comment:[]},{name:"吐槽",count:0,active:!1,comment:[]}],evelflag:!0,comment:[]}},mounted:function(){var t=this;this.$nextTick(function(){c.a.get("/api/ratings").then(function(s){t.ratings=s.data,t.ratings.forEach(function(s){t.classifyArr[0].count++,t.classifyArr[0].comment.push(s),s.score>3&&(t.classifyArr[1].count++,t.classifyArr[1].comment.push(s)),s.score<=3&&(t.classifyArr[2].count++,t.classifyArr[2].comment.push(s))}),t.comment=t.ratings,new i.a(t.$refs.ratingsWrapper,{click:!0})})})},computed:{comments:function(){if(this.evelflag){var t=[];return this.comment.forEach(function(s){s.text.length>0&&t.push(s)}),t}return this.comment}},methods:{filterEvel:function(t){this.classifyArr.forEach(function(t){t.active=!1}),t.active=!0,this.comment=t.comment}},components:{star:r.a},filters:{time:function(t){return t||0}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(12),i=e.n(a),n=e(5),c=e.n(n);s.default={props:["seller"],data:function(){return{collectflag:!1,iconClassMap:["decrease","discount","special","invoice","guarantee"]}},mounted:function(){var t=this;this.$nextTick(function(){new c.a(t.$refs.sellerWrapper,{click:!0})})},components:{star:i.a}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},,,,function(t,s,e){e(92);var a=e(1)(e(50),e(108),null,null);t.exports=a.exports},function(t,s,e){var a=e(1)(e(52),e(110),null,null);t.exports=a.exports},function(t,s,e){e(91);var a=e(1)(e(53),e(107),null,null);t.exports=a.exports},function(t,s,e){e(87);var a=e(1)(e(54),e(102),null,null);t.exports=a.exports},function(t,s,e){e(90);var a=e(1)(e(56),e(106),null,null);t.exports=a.exports},function(t,s,e){var a=e(1)(e(57),e(109),null,null);t.exports=a.exports},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"shopCart"},[e("div",{staticClass:"content"},[e("div",{staticClass:"content-left",on:{click:function(s){t.show=!t.show}}},[e("div",{staticClass:"logo-wrapper"},[e("div",{staticClass:"badge",staticStyle:{display:"none"}}),t._v(" "),e("div",{staticClass:"logo",class:{active:t.deliveryPrice>0}},[e("i",{staticClass:"icon-shopping_cart"})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount>0,expression:"totalCount>0"}],staticClass:"badge"},[t._v(t._s(t.totalCount))])]),t._v(" "),e("div",{staticClass:"price",class:{active:t.totalPrice}},[t._v("￥"+t._s(t.totalPrice))]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.totalPrice<100,expression:"totalPrice < 100"}],staticClass:"desc"},[t._v("另需要配送费￥"+t._s(t.deliveryPrice)+"元")])]),t._v(" "),e("div",{staticClass:"content-right",class:{enough:t.totalPrice>=t.minPrice}},[e("div",{staticClass:"pay"},[t._v(t._s(t.payDesc))])])]),t._v(" "),e("transition",{attrs:{name:"transHeight"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.totalPrice>0&&t.show,expression:"totalPrice > 0 && show"}],staticClass:"shopcart-list"},[e("div",{staticClass:"list-header"},[e("h1",{staticClass:"title"},[t._v("购物车")]),t._v(" "),e("span",{staticClass:"empty",on:{click:function(s){t.empty()}}},[t._v("清空")])]),t._v(" "),e("div",{ref:"foodlist",staticClass:"list-content"},[e("ul",t._l(t.selectFoods,function(s){return e("li",{staticClass:"food"},[e("span",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"price"},[e("span",[t._v("￥"+t._s(s.price*s.count))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s}})],1)])}))]),t._v(" "),e("div")])])],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cartcontrol"},[e("transition",{attrs:{name:"fadeRotate"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-decrease",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.decreaseCart()}}},[e("span",{staticClass:"icon-remove_circle_outline inner"})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-count"},[t._v("\n    "+t._s(t.food.count)+"\n  ")]),t._v(" "),e("div",{staticClass:"cart-add",attrs:{id:"add"},on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.addCart()}}},[e("i",{staticClass:"icon-add_circle"})])],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("v-header",{attrs:{seller:t.d.seller}}),t._v(" "),e("div",{staticClass:"tab"},[e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/goods"}},[t._v("商品")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/ratings"}},[t._v("评论")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/seller"}},[t._v("商家")])],1)]),t._v(" "),e("router-view",{attrs:{seller:t.d.seller,goods:t.d.goods}})],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"star",class:t.starType},t._l(t.itemClasses(),function(t){return e("span",{staticClass:"star-item",class:t})}))},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"ratingsWrapper",staticClass:"ratingsWrapper"},[e("div",{staticClass:"ratings-content"},[e("div",{staticClass:"info"},[e("div",{staticClass:"mark"},[e("div",{staticClass:"num"},[t._v(t._s(t.seller.score))]),t._v(" "),e("div",{staticClass:"text"},[t._v("综合评分")]),t._v(" "),e("div",{staticClass:"contrast"},[t._v("高于周边商家"+t._s(t.seller.rankRate)+"%")])]),t._v(" "),e("div",{staticClass:"stars"},[e("div",{staticClass:"serviceScore"},[e("span",{staticClass:"text"},[t._v("服务态度")]),t._v(" "),e("star",{attrs:{size:36,score:t.seller.foodScore}}),t._v(" "),e("span",{staticClass:"num"},[t._v(t._s(t.seller.foodScore))])],1),t._v(" "),e("div",{staticClass:"foodScore"},[e("span",{staticClass:"text"},[t._v("服务态度")]),t._v(" "),e("star",{attrs:{size:36,score:t.seller.foodScore}}),t._v(" "),e("span",{staticClass:"num"},[t._v(t._s(t.seller.foodScore))])],1),t._v(" "),t._m(0)])]),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("div",{staticClass:"evaluation"},[e("div",{staticClass:"classify"},t._l(t.classifyArr,function(s,a){return e("span",{staticClass:"item",class:{active:s.active,bad:2==a,badActive:s.active&&2==a},on:{click:function(e){t.filterEvel(s)}}},[t._v("\n          "+t._s(s.name)),e("span",{staticClass:"count"},[t._v(t._s(s.count))])])})),t._v(" "),e("div",{staticClass:"switch",on:{click:function(s){t.evelflag=!t.evelflag}}},[e("span",{staticClass:"icon-check_circle",class:{on:t.evelflag}}),t._v(" "),e("span",{staticClass:"text"},[t._v("只看有内容的评价")])]),t._v(" "),e("div",{staticClass:"evel-list"},[e("ul",t._l(t.comments,function(s){return e("li",{staticClass:"evel"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:s.avatar,width:"28",height:"28"}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"user"},[e("span",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("span",{staticClass:"rateTime"},[t._v(t._s(s.rateTime))])]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:24,score:s.score}}),t._v(" "),e("span",{staticClass:"deliveryTime"},[t._v(t._s(t._f("time")(s.deliveryTime))+"分钟送达")])],1),t._v(" "),e("div",{staticClass:"text"},[t._v("\n                "+t._s(s.text)+"\n              ")]),t._v(" "),e("div",{staticClass:"recommend"},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.recommend.length,expression:"evel.recommend.length"}],staticClass:"icon icon-thumb_up"}),t._v(" "),t._l(s.recommend,function(s){return e("span",{staticClass:"dish"},[t._v(t._s(s))])})],2)])])}))])])])])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"deliveryTime"},[e("span",{staticClass:"text"},[t._v("送达时间")]),t._v(" "),e("span",{staticClass:"time"},[t._v("38分钟")])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{width:"64",height:"64",src:t.seller.avatar}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),t._v(" "),e("div",{staticClass:"description"},[t._v(t._s(t.seller.description)+" / "+t._s(t.seller.deliveryTime)+"分钟送达")]),t._v(" "),t.seller.supports?e("div",{staticClass:"supports"},[e("div",{staticClass:"supports_desc"},[e("span",{staticClass:"icon decrease"}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[0].description))])])]):t._e()]),t._v(" "),t.seller.supports?e("div",{staticClass:"support-count",on:{click:function(s){t.detailshow=!t.detailshow}}},[e("span",{staticClass:"count"},[t._v(t._s(t.seller.supports.length+"个"))]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]):t._e()]),t._v(" "),e("div",{staticClass:"bulletin-wrapper",on:{click:function(s){t.detailshow=!t.detailshow}}},[e("span",{staticClass:"bulletin-title"}),t._v(" "),e("span",{staticClass:"bulletin-text"},[t._v(t._s(t.seller.bulletin))]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]),t._v(" "),e("div",{staticClass:"background"},[e("img",{attrs:{width:"100%",height:"100%",src:t.seller.avatar}})]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.detailshow,expression:"detailshow"}],staticClass:"detail"},[e("div",{staticClass:"detail-wrapper clearfix"},[e("div",{staticClass:"detail-main"},[e("h1",{staticClass:"name"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:48,score:t.seller.score}})],1),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("优惠信息")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s){return e("li",{staticClass:"support-item"},[e("span",{staticClass:"icon",class:[s.type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.description))])])})),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("商家公告")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),e("div",{staticClass:"bulletin"},[t._v(t._s(t.seller.bulletin))])])]),t._v(" "),e("div",{staticClass:"detail-close",on:{click:function(s){t.detailshow=!t.detailshow}}},[e("i",{staticClass:"icon-close"})])])])],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods"},[e("div",{ref:"menu-wrapper",staticClass:"menu-wrapper"},[e("ul",t._l(t.goods,function(s){return e("li",{staticClass:"menu-item"},[e("span",{staticClass:"text"},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.type>0,expression:"item.type>0"}],staticClass:"iconMap",class:t.iconClassMap[s.type]}),t._v("\n          "+t._s(s.name)+"\n        ")])])}))]),t._v(" "),e("div",{ref:"foods-wrapper",staticClass:"foods-wrapper"},[e("ul",t._l(t.goods,function(s){return e("li",{staticClass:"food-list food-list-hook"},[e("h1",{staticClass:"title"},[t._v(t._s(s.name))]),t._v(" "),e("ul",t._l(s.foods,function(s){return e("li",{staticClass:"food-item",on:{click:function(e){t.goDetail(s)}}},[e("div",{staticClass:"icon"},[e("img",{attrs:{width:"57",height:"57",src:s.icon}})]),t._v(" "),e("div",{staticClass:"content"},[e("h2",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("p",{staticClass:"description"},[t._v(t._s(s.description))]),t._v(" "),e("div",{staticClass:"sell-info"},[e("span",{staticClass:"sellCount"},[t._v("月售"+t._s(s.sellCount)+"份")]),t._v(" "),e("span",{staticClass:"rating"},[t._v("好评率"+t._s(s.rating)+"%")]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"newPrice"},[e("span",{staticClass:"unit"},[t._v("$")]),t._v(t._s(s.price))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"food.oldPrice"}]},[e("span",{staticClass:"unit"},[t._v("$")]),t._v(t._s(s.oldPrice))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s}})],1)])])])}))])}))]),t._v(" "),e("shopcart",{attrs:{deliveryPrice:t.seller.deliveryPrice,minPrice:t.seller.minPrice,selectFoods:t.selectFoods}}),t._v(" "),e("foodDetail",{ref:"myFood",attrs:{food:t.selectedFood}})],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"sellerWrapper",staticClass:"seller-wrapper"},[e("div",{staticClass:"seller-content"},[e("div",{staticClass:"info"},[e("div",{staticClass:"title"},[e("div",{staticClass:"text"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:36,score:t.seller.score}}),t._v(" "),e("span",{staticClass:"rate-count"},[t._v("("+t._s(t.seller.ratingCount)+")")]),t._v(" "),e("span",{staticClass:"sell-count"},[t._v("月售"+t._s(t.seller.sellCount)+"单")])],1),t._v(" "),e("div",{staticClass:"collect",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.collectflag=!t.collectflag}}},[e("span",{staticClass:"icon-favorite",class:{active:t.collectflag}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.collectflag?"已收藏":"收藏"))])])]),t._v(" "),e("div",{staticClass:"remark"},[e("div",{staticClass:"block"},[e("h2",[t._v("起送价")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"num"},[t._v(t._s(t.seller.minPrice))]),t._v("元\n          ")])]),t._v(" "),e("div",{staticClass:"block"},[e("h2",[t._v("商家配送")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"num"},[t._v(t._s(t.seller.deliveryPrice))]),t._v("元\n          ")])]),t._v(" "),e("div",{staticClass:"block"},[e("h2",[t._v("平均配送时间")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"num"},[t._v(t._s(t.seller.deliveryTime))]),t._v("分钟\n          ")])])])]),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("div",{staticClass:"activities"},[e("div",{staticClass:"bulletin"},[e("h1",[t._v("公告与活动")]),t._v(" "),e("div",{staticClass:"content"},[t._v("\n          "+t._s(t.seller.bulletin)+"\n        ")])])]),t._v(" "),e("div",{staticClass:"supports"},[e("ul",t._l(t.seller.supports,function(s){return e("li",{staticClass:"item"},[e("span",{staticClass:"iconMap",class:t.iconClassMap[s.type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.description))])])}))]),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("div",{staticClass:"seller-imgs"},[e("h1",[t._v("商家实景")]),t._v(" "),e("div",{ref:"picsWrapper",staticClass:"img-wrapper"},[e("div",{ref:"picList"},t._l(t.seller.pics,function(t){return e("img",{attrs:{src:t,width:"120",height:"90"}})}))])]),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("div",{staticClass:"seller-info"},[e("h1",[t._v("商家信息")]),t._v(" "),e("ul",{staticClass:"info-list"},t._l(t.seller.infos,function(s){return e("li",{staticClass:"info"},[t._v(t._s(s))])}))])])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showDetail,expression:"showDetail"}],ref:"detailWrapper",staticClass:"detailWrapper"},[e("div",{staticClass:"foodDetail"},[e("div",{staticClass:"back",on:{click:function(s){t.show()}}},[e("i",{staticClass:"icon-arrow_lift"})]),t._v(" "),e("img",{attrs:{src:t.food.image,height:"425",width:"100%"}}),t._v(" "),e("div",{staticClass:"info"},[e("div",{staticClass:"title"},[t._v(t._s(t.food.name))]),t._v(" "),e("div",{staticClass:"desc"},[e("span",[t._v("月售"+t._s(t.food.sellCount))]),t._v(" "),e("span",[t._v("好评率"+t._s(t.food.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"unit"},[t._v("￥")]),t._v(t._s(t.food.price)+"\n          "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.food.oldPrice,expression:"food.oldPrice"}],staticClass:"oldPrice"},[t._v("￥"+t._s(t.food.oldPrice))])]),t._v(" "),e("transition",{attrs:{name:"fade"}},[t.food.count<=0||void 0===t.food.count?e("div",{staticClass:"shopCart"},[e("div",{staticClass:"text",on:{click:function(s){t.addCart()}}},[t._v("加入购物车")])]):t._e()]),t._v(" "),e("cartcontrol",{ref:"cartcontrol",attrs:{food:t.food}})],1),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("div",{staticClass:"desc"},[e("div",{staticClass:"title"},[t._v("商品介绍")]),t._v(" "),e("div",{staticClass:"content"},[t._v(t._s(t.food.info))])]),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("div",{staticClass:"evaluation"},[e("div",{staticClass:"title"},[t._v("\n          商品评价\n        ")]),t._v(" "),e("div",{staticClass:"classify"})])])])])},staticRenderFns:[]}}],[46]);
//# sourceMappingURL=app.c39d922260617440fdd5.js.map