webpackJsonp([2],{MpTN:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=new(i("+VlJ").default),s=i("6sKG"),l=i.n(s),o={data:function(){return{collapse:!1,fullscreen:!1,name:"管理员",message:2,limit:localStorage.getItem("limited")}},computed:{username:function(){var t=localStorage.getItem("hosName");return"2"==this.limit?t:this.name}},methods:{loginOut:function(){var t=this;l()({method:"post",url:l.a.PARK_API+"/sys-mgr/sys/logout",headers:{"Content-Type":"application/json;charset=UTF-8",token:localStorage.getItem("token")}}).then(function(e){0==e.data.code?(localStorage.removeItem("token"),localStorage.removeItem("navList"),localStorage.removeItem("limited"),"1"==t.limit?t.$router.push({path:"/login"}):"2"==t.limit&&t.$router.push({path:"/hoslogin"})):t.$message.error(e.data.msg)}).catch(function(t){})},password:function(){this.$router.push({path:"/password"})},collapseChage:function(){this.collapse=!this.collapse,n.$emit("collapse",this.collapse)},handleFullScreen:function(){var t=document.documentElement;this.fullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullScreen?t.webkitRequestFullScreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen(),this.fullscreen=!this.fullscreen}},mounted:function(){document.body.clientWidth<1500&&this.collapseChage()}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[i("div",{staticClass:"collapse-btn",on:{click:t.collapseChage}},[i("i",{staticClass:"el-icon-menu"})]),t._v(" "),i("div",{staticClass:"logo"},[t._v("城乡居民医保智能审核系统")]),t._v(" "),i("div",{staticClass:"header-right"},[i("div",{staticClass:"header-user-con"},[i("div",{staticClass:"btn-fullscreen",on:{click:t.handleFullScreen}},[i("el-tooltip",{attrs:{effect:"dark",content:t.fullscreen?"取消全屏":"全屏",placement:"bottom"}},[i("i",{staticClass:"el-icon-rank"})])],1),t._v(" "),t._m(0),t._v(" "),i("el-dropdown",{staticClass:"user-name",attrs:{trigger:"click"}},[i("span",{staticClass:"el-dropdown-link"},[t._v("\n                    "+t._s(t.username)+" "),i("i",{staticClass:"el-icon-caret-bottom"})]),t._v(" "),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",{nativeOn:{click:function(e){return t.password(e)}}},[t._v("修改密码")]),t._v(" "),i("el-dropdown-item",{nativeOn:{click:function(e){return t.loginOut(e)}}},[t._v("退出登录")])],1)],1)],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"user-avator"},[e("img",{attrs:{src:"static/img/img.jpg"}})])}]};var c={data:function(){return{collapse:!1,limit:"",items:[{icon:"el-icon-lx-home",index:"home",title:"首页"},{icon:"el-icon-share",index:"3",title:"住院系统",subs:[{index:"HospitalizationExamine",title:"住院审核"},{index:"HospitalizationInquiry",title:"住院质询"},{index:"HospitalizationReexamine",title:"住院复审"},{index:"hosRecord",title:"历史记录"},{index:"medicalBook",title:"药品说明书"}]},{icon:"el-icon-document",index:"icon",title:"住院报表",subs:[{index:"inquiryEnd",title:"住院结果分析"},{index:"foultrend",title:"违规趋势分析"},{index:"foul",title:"违规统计"},{index:"Comprehen",title:"综合分析"},{index:"payment",title:"扣款通知单"},{index:"medicDos",title:"药品用量情况分析"}]},{icon:"el-icon-edit-outline",index:"6",title:"数据统计",subs:[{index:"datacount",title:"诊断方案统计分析"}]},{icon:"el-icon-lx-service",index:"4",title:"门诊系统",subs:[{index:"clinicExamine",title:"门诊审核"},{index:"clinicInquiry",title:"门诊质询"},{index:"clinicReexamine",title:"门诊复审"},{index:"hisRecord",title:"历史记录"}]},{icon:"el-icon-tickets",index:"5",title:"门诊报表",subs:[{index:"cliInquiryEnd",title:"门诊结果分析"},{index:"cliFoultrend",title:"违规趋势分析"},{index:"cliFoul",title:"违规统计"},{index:"cliComprehen",title:"综合分析"}]},{icon:"el-icon-lx-profile",index:"7",title:"参合信息",subs:[{index:"person",title:"参合人员基本信息"},{index:"parSituation",title:"参合情况分析"}]},{icon:"el-icon-lx-redpacket",index:"8",title:"基金筹资",subs:[{index:"fundUse",title:"基金使用情况分析"}]},{icon:"el-icon-location-outline",index:"9",title:"地区补偿情况",subs:[{index:"hosCompensation",title:"住院补偿情况"},{index:"cliCompensation",title:"门诊补偿情况"},{index:"slowCompensation",title:"慢病补偿情况"}]},{icon:"el-icon-edit",index:"10",title:"病种统计",subs:[{index:"diseaseStatic",title:"病种统计分析"}]},{icon:"el-icon-star-off",index:"11",title:"医院补偿情况",subs:[{index:"hosStaitc",title:"住院补偿情况"},{index:"cliStatic",title:"门诊补偿情况"},{index:"slowStatic",title:"慢病补偿情况"}]},{icon:"el-icon-date",index:"12",title:"年度补偿情况",subs:[{index:"hospitalYear",title:"住院补偿情况"},{index:"clinicYear",title:"门诊补偿情况"},{index:"slowYear",title:"慢病补偿情况"}]},{icon:"el-icon-view",index:"13",title:"项目补偿情况",subs:[{index:"hospitalItem",title:"住院补偿情况"},{index:"clinicItem",title:"门诊补偿情况"},{index:"slowItem",title:"慢病补偿情况"}]}],menuShow:0,hositems:[{icon:"el-icon-share",index:"3",title:"住院结算",subs:[{index:"HospitalizationInquiry",title:"质询回复"},{index:"medical",title:"病案科室"}]},{icon:"el-icon-search",index:"2",title:"医学知识库",subs:[{index:"medicalBook",title:"药品说明书"}]},{icon:"el-icon-edit-outline",index:"6",title:"基础数据分析",subs:[{index:"datacount",title:"诊疗项目对码分析"}]},{icon:"el-icon-lx-service",index:"4",title:"门诊结算",subs:[{index:"clinicInquiry",title:"质询回复"}]},{icon:"el-icon-location-outline",index:"9",title:"地区补偿情况",subs:[{index:"hosCompensation",title:"住院补偿情况"},{index:"cliCompensation",title:"门诊补偿情况"},{index:"slowCompensation",title:"慢病补偿情况"}]},{icon:"el-icon-edit",index:"10",title:"病种统计",subs:[{index:"diseaseStatic",title:"病种统计分析"}]},{icon:"el-icon-star-off",index:"11",title:"医院补偿情况",subs:[{index:"hosStaitc",title:"住院补偿情况"},{index:"cliStatic",title:"门诊补偿情况"},{index:"slowStatic",title:"慢病补偿情况"}]},{icon:"el-icon-date",index:"12",title:"年度补偿情况",subs:[{index:"hospitalYear",title:"住院补偿情况"},{index:"clinicYear",title:"门诊补偿情况"},{index:"slowYear",title:"慢病补偿情况"}]},{icon:"el-icon-view",index:"13",title:"项目补偿情况",subs:[{index:"hospitalItem",title:"住院补偿情况"},{index:"clinicItem",title:"门诊补偿情况"},{index:"slowItem",title:"慢病补偿情况"}]}]}},computed:{onRoutes:function(){return this.$route.path.replace("/","")}},methods:{getSlide:function(){this.limit=localStorage.getItem("limited"),"1"==this.limit?this.menuShow=0:"2"==this.limit&&(this.menuShow=1)}},created:function(){var t=this;n.$on("collapse",function(e){t.collapse=e}),this.getSlide()}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sidebar"},[0==t.menuShow?i("el-menu",{staticClass:"sidebar-el-menu",attrs:{"default-active":t.onRoutes,collapse:t.collapse,"background-color":"#324157","text-color":"#bfcbd9","active-text-color":"#20a0ff","unique-opened":"",router:""}},[t._l(t.items,function(e){return[e.subs?[i("el-submenu",{key:e.index,attrs:{index:e.index}},[i("template",{slot:"title"},[i("i",{class:e.icon}),i("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])]),t._v(" "),t._l(e.subs,function(e){return[e.subs?i("el-submenu",{key:e.index,attrs:{index:e.index}},[i("template",{slot:"title"},[t._v(t._s(e.title))]),t._v(" "),t._l(e.subs,function(e,n){return i("el-menu-item",{key:n,attrs:{index:e.index}},[t._v("\n                                "+t._s(e.title)+"\n                            ")])})],2):i("el-menu-item",{key:e.index,attrs:{index:e.index}},[t._v("\n                            "+t._s(e.title)+"\n                        ")])]})],2)]:[i("el-menu-item",{key:e.index,attrs:{index:e.index}},[i("i",{class:e.icon}),i("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])])]]})],2):t._e(),t._v(" "),1==t.menuShow?i("el-menu",{staticClass:"sidebar-el-menu",attrs:{"default-active":t.onRoutes,collapse:t.collapse,"background-color":"#324157","text-color":"#bfcbd9","active-text-color":"#20a0ff","unique-opened":"",router:""}},[t._l(t.hositems,function(e){return[e.subs?[i("el-submenu",{key:e.index,attrs:{index:e.index}},[i("template",{slot:"title"},[i("i",{class:e.icon}),i("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])]),t._v(" "),t._l(e.subs,function(e){return[e.subs?i("el-submenu",{key:e.index,attrs:{index:e.index}},[i("template",{slot:"title"},[t._v(t._s(e.title))]),t._v(" "),t._l(e.subs,function(e,n){return i("el-menu-item",{key:n,attrs:{index:e.index}},[t._v("\n                                "+t._s(e.title)+"\n                            ")])})],2):i("el-menu-item",{key:e.index,attrs:{index:e.index}},[t._v("\n                            "+t._s(e.title)+"\n                        ")])]})],2)]:[i("el-menu-item",{key:e.index,attrs:{index:e.index}},[i("i",{class:e.icon}),i("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])])]]})],2):t._e()],1)},staticRenderFns:[]};var u={data:function(){return{tagsList:[],limit:localStorage.getItem("limited")}},methods:{isActive:function(t){return t===this.$route.fullPath},closeTags:function(t){var e=this.tagsList.splice(t,1)[0],i=this.tagsList[t]?this.tagsList[t]:this.tagsList[t-1];i?(console.log(i),e.path===this.$route.fullPath&&this.$router.push(i.path)):"1"==this.limit?this.$router.push("/home"):"2"==this.limit&&this.$router.push("/HospitalizationInquiry")},closeAll:function(){this.tagsList=[],"1"==this.limit?this.$router.push("/home"):"2"==this.limit&&this.$router.push("/HospitalizationInquiry")},closeOther:function(){var t=this,e=this.tagsList.filter(function(e){return e.path===t.$route.fullPath});this.tagsList=e},setTags:function(t){console.log(t),this.tagsList.some(function(e){return e.path===t.fullPath})||(this.tagsList.length>=8&&this.tagsList.shift(),this.tagsList.push({title:t.meta.title,path:t.fullPath,name:t.matched[1].components.default.name}),console.log(this.tagsList)),n.$emit("tags",this.tagsList)},handleTags:function(t){"other"===t?this.closeOther():this.closeAll()}},computed:{showTags:function(){return this.tagsList.length>0}},watch:{$route:function(t,e){this.setTags(t)}},created:function(){this.setTags(this.$route)}},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.showTags?i("div",{staticClass:"tags"},[i("ul",t._l(t.tagsList,function(e,n){return i("li",{key:n,staticClass:"tags-li",class:{active:t.isActive(e.path)}},[i("router-link",{staticClass:"tags-li-title",attrs:{to:e.path}},[t._v("\n                "+t._s(e.title)+"\n            ")]),t._v(" "),i("span",{staticClass:"tags-li-icon",on:{click:function(e){t.closeTags(n)}}},[i("i",{staticClass:"el-icon-close"})])],1)}),0),t._v(" "),i("div",{staticClass:"tags-close-box"},[i("el-dropdown",{on:{command:t.handleTags}},[i("el-button",{attrs:{size:"mini",type:"primary"}},[t._v("\n                标签选项"),i("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),i("el-dropdown-menu",{attrs:{slot:"dropdown",size:"small"},slot:"dropdown"},[i("el-dropdown-item",{attrs:{command:"other"}},[t._v("关闭其他")]),t._v(" "),i("el-dropdown-item",{attrs:{command:"all"}},[t._v("关闭所有")])],1)],1)],1)]):t._e()},staticRenderFns:[]};var m={data:function(){return{tagsList:[],collapse:!1}},components:{vHead:i("C7Lr")(o,a,!1,function(t){i("Uvhu")},"data-v-375495f6",null).exports,vSidebar:i("C7Lr")(c,r,!1,function(t){i("rMe2")},"data-v-bd990cfe",null).exports,vTags:i("C7Lr")(u,d,!1,function(t){i("cOfE")},null,null).exports},methods:{getInfor:function(){""!=localStorage.getItem("token")&&void 0!=localStorage.getItem("token")||this.$router.push({path:"/login"})}},created:function(){var t=this;n.$on("collapse",function(e){t.collapse=e}),n.$on("tags",function(e){for(var i=[],n=0,s=e.length;n<s;n++)e[n].name&&i.push(e[n].name);t.tagsList=i,console.log(t.tagsList)}),this.getInfor()}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[e("v-head"),this._v(" "),e("v-sidebar"),this._v(" "),e("div",{staticClass:"content-box",class:{"content-collapse":this.collapse}},[e("v-tags"),this._v(" "),e("div",{staticClass:"content"},[e("transition",{attrs:{name:"move",mode:"out-in"}},[e("keep-alive",{attrs:{include:this.tagsList}},[e("router-view")],1)],1)],1)],1)],1)},staticRenderFns:[]},x=i("C7Lr")(m,h,!1,null,null,null);e.default=x.exports},Uvhu:function(t,e){},cOfE:function(t,e){},rMe2:function(t,e){}});