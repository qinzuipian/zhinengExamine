webpackJsonp([17],{IgEt:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_axios__=__webpack_require__("6sKG"),__WEBPACK_IMPORTED_MODULE_0_axios___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);__webpack_exports__.a={data:function(){return{drugoptions:[{value:0,label:"未匹配药品信息"},{value:1,label:"已匹配药品信息"}],drugname:1,detailShow:!1,tableData:[],total:0,currentPage:1,drug:"",flag:!1,drugData:[],otherShow:0,nodrug:"",otherData:[],tinyShow:!1,descId:"",loading:!1,tinyLoading:!1}},methods:{hiddenScreen:function(e){var t=this;if(1==e){var a=this;setTimeout(function(){a.detailShow=!t.detailShow},100)}else{var o=this;setTimeout(function(){o.detailShow=!t.detailShow},100)}},getMedicalbook:function(e){var t=this;console.log(e),e=0==e?1:e,localStorage.setItem("hometext","【药品说明书】"),__WEBPACK_IMPORTED_MODULE_0_axios___default()({method:"post",url:__WEBPACK_IMPORTED_MODULE_0_axios___default.a.PARK_API+"/outpatient/biz/drug/queryMedDrugListInfo",params:{isExist:this.drugname,page:e,row:10}}).then(function(e){0==e.data.code?(t.tableData=e.data.data,t.total=e.data.rowNum):t.$message.error("请检查网络！")})},handleCurrentChange:function(e){1==this.flag?this.getDisease(e):this.getMedicalbook(e)},getDisease:function(e){var t,a=this;this.flag=!0,console.log(e),t=isNaN(e)?1:e,console.log(t),__WEBPACK_IMPORTED_MODULE_0_axios___default()({method:"post",url:__WEBPACK_IMPORTED_MODULE_0_axios___default.a.PARK_API+"/outpatient/biz/drug/queryMedDrugListInfo",params:{isExist:this.drugname,page:t,row:10,name:this.drug}}).then(function(e){0==e.data.code?(a.tableData=e.data.data,a.total=e.data.rowNum):a.$message.error("请检查网络！")})},rowClick:function rowClick(row){var _this6=this;__WEBPACK_IMPORTED_MODULE_0_axios___default()({method:"post",url:__WEBPACK_IMPORTED_MODULE_0_axios___default.a.PARK_API+"/outpatient/biz/drug/queryMongoDrugInfo",params:{descId:row.descId}}).then(function(res){if(0==res.data.code)if(""!=res.data.data){_this6.drugData=res.data.data[0];var nJson=delete eval(res.data.data[0])._id,nJson=delete eval(res.data.data[0])._class;console.log(nJson),_this6.detailShow=!0,_this6.otherShow=0}else _this6.detailShow=!0,_this6.otherShow=1;else _this6.$message.error(res.data.msg)})},getnodrug:function(){var e=this;this.loading=!0,__WEBPACK_IMPORTED_MODULE_0_axios___default()({method:"post",url:__WEBPACK_IMPORTED_MODULE_0_axios___default.a.PARK_API+"/outpatient/biz/drug/queryMongoDrugInfoByName",params:{name:this.nodrug}}).then(function(t){0==t.data.code?(e.loading=!1,e.otherData=t.data.data):e.$message.error("请检查网络！")})},cellStyle:function(e){e.row,e.column,e.rowIndex;if(0===e.columnIndex)return"color:blue; font-size: 12px; text-align:center; cursor:pointer;"},NodrugClick:function NodrugClick(row){var _this8=this;this.tinyLoading=!0,this.descId=row._id,__WEBPACK_IMPORTED_MODULE_0_axios___default()({method:"post",url:__WEBPACK_IMPORTED_MODULE_0_axios___default.a.PARK_API+"/outpatient/biz/drug/queryMongoDrugInfo",params:{descId:row._id}}).then(function(res){if(0==res.data.code){_this8.tinyShow=!0,_this8.tinyLoading=!1,_this8.drugData=res.data.data[0];var nJson=delete eval(res.data.data[0])._id,nJson=delete eval(res.data.data[0])._class}else _this8.$message.error("请检查网络！")})},matchDrug:function(){var e=this;this.$confirm("确认该药品说明书与所查的药品匹配","提示",{confirmButtonText:"确定匹配",cancelButtonText:"取消",type:"warning"}).then(function(){__WEBPACK_IMPORTED_MODULE_0_axios___default()({method:"post",url:__WEBPACK_IMPORTED_MODULE_0_axios___default.a.PARK_API+"/outpatient/biz/drug/matchMongoDrugInfo",params:{descId:e.descId,name:e.nodrug}}).then(function(t){0==t.data.code?e.$message.success("匹配成功！"):e.$message.error("请检查网络！")})}).catch(function(){})}},created:function(){this.getMedicalbook(1)}}},fOAG:function(e,t){},jy3U:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("IgEt"),i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"main"},[a("div",{staticClass:"tableData",class:{"content-right-fold":!e.detailShow}},[a("div",{staticClass:"right-ctn-title"},[a("el-select",{staticStyle:{width:"180px"},attrs:{placeholder:"请选择"},on:{change:e.getMedicalbook},model:{value:e.drugname,callback:function(t){e.drugname=t},expression:"drugname"}},e._l(e.drugoptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),e._v(" "),a("span",[e._v("关键字：")]),e._v(" "),a("el-input",{staticStyle:{width:"180px",height:"30px"},attrs:{size:"mini",placeholder:"请输入药品名"},model:{value:e.drug,callback:function(t){e.drug=t},expression:"drug"}}),e._v(" "),a("el-button",{staticStyle:{"margin-left":"5px"},attrs:{size:"mini",type:"primary"},on:{click:e.getDisease}},[e._v("\n                    搜索\n                ")])],1),e._v(" "),a("el-table",{ref:"multipleTable",attrs:{data:e.tableData,"highlight-current-row":"",height:"490",border:"","tooltip-effect":"dark"},on:{"row-click":e.rowClick}},[a("el-table-column",{attrs:{prop:"name",label:"药品名","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"tradeName",label:"商品名","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"form",label:"剂型","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"spec",label:"规格","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"mfr",label:"厂商","show-overflow-tooltip":""}})],1),e._v(" "),a("div",{staticClass:"block",attrs:{id:"fenye"}},[a("el-pagination",{attrs:{background:"",layout:"total,prev, pager, next","current-page":e.currentPage,total:e.total},on:{"current-change":e.handleCurrentChange}})],1)],1),e._v(" "),a("div",{staticClass:"detail",class:{"content-left-fold":!e.detailShow}},[a("div",{directives:[{name:"show",rawName:"v-show",value:0==e.otherShow,expression:"otherShow == 0"}]},[a("p",{directives:[{name:"show",rawName:"v-show",value:e.detailShow,expression:"detailShow"}],staticClass:"screenButton el-icon-menu",on:{click:function(t){e.hiddenScreen(1)}}}),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:!e.detailShow,expression:"!detailShow"}],staticClass:"screenButton el-icon-menu",on:{click:function(t){e.hiddenScreen(2)}}}),e._v(" "),a("p",{staticClass:"title"},[e._v(e._s(e.drugData.标题))]),e._v(" "),a("ul",{staticStyle:{"text-align":"left"}},e._l(e.drugData,function(t,o){return a("li",{key:o},[e._v(e._s(o)+"："+e._s(t))])}),0)]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:1==e.otherShow,expression:"otherShow == 1"}]},[a("p",{directives:[{name:"show",rawName:"v-show",value:e.detailShow,expression:"detailShow"}],staticClass:"screenButton el-icon-menu",on:{click:function(t){e.hiddenScreen(1)}}}),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:!e.detailShow,expression:"!detailShow"}],staticClass:"screenButton el-icon-menu",on:{click:function(t){e.hiddenScreen(2)}}}),e._v(" "),a("p",[e._v("抱歉！没有搜索到关于此药品的信息，请输入药品名查询")]),e._v(" "),a("span",[e._v("关键字：")]),e._v(" "),a("el-input",{staticStyle:{width:"180px",height:"30px"},attrs:{size:"mini",placeholder:"请输入药品名"},model:{value:e.nodrug,callback:function(t){e.nodrug=t},expression:"nodrug"}}),e._v(" "),a("el-button",{staticStyle:{"margin-left":"5px"},attrs:{size:"mini",type:"primary"},on:{click:e.getnodrug}},[e._v("\n                  搜索\n              ")]),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.otherData,"cell-style":e.cellStyle,height:"200"},on:{"row-click":e.NodrugClick}},[a("el-table-column",{attrs:{prop:"标题",label:""}})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.tinyShow,expression:"tinyShow"},{name:"loading",rawName:"v-loading",value:e.tinyLoading,expression:"tinyLoading"}]},[a("el-button",{staticStyle:{"margin-top":"5px"},attrs:{size:"mini",type:"success"},on:{click:e.matchDrug}},[e._v("\n                      匹配药品信息\n                  ")]),e._v(" "),a("p",{staticClass:"title tinyTitle"},[e._v(e._s(e.drugData.标题))]),e._v(" "),a("ul",{staticStyle:{"text-align":"left"}},e._l(e.drugData,function(t,o){return a("li",{key:o},[e._v(e._s(o)+"："+e._s(t))])}),0)],1)],1)])])])},staticRenderFns:[]};var n=function(e){a("fOAG")},s=a("C7Lr")(o.a,i,!1,n,"data-v-206453ed",null);t.default=s.exports}});