webpackJsonp([25],{fWi6:function(e,t){},usG9:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("HzJ8"),n=a.n(l),r=a("6sKG"),o=a.n(r),i={data:function(){return{endoptions:[{value:"1",label:"医院编码"},{value:"2",label:"医疗机构"}],hospitalText:"",queryend:"2",queryData:[],endtotal:0,currentPage:1,pageSize:12,hospitalId:""}},methods:{handleCurrentChange:function(e){this.currentPage=e},dragSizeChange:function(e){this.pageSize=e},rowClass:function(e){e.row,e.rowIndex;return"border-bottom:2px solid #ccc;border-top:2px solid #ccc"},getQuery:function(){var e=this;localStorage.setItem("hometext","【门诊-审核结果分析】"),o()({method:"post",url:o.a.PARK_API+"/outpatient/biz/analy/queryresultanaly",params:{regionId:localStorage.getItem("regionId")}}).then(function(t){0==t.data.code?(e.queryData=t.data.data,e.endtotal=e.queryData.length):e.$message.error(t.data.msg)}).catch(function(e){})},queryHosSearch:function(e,t){var a=this,l=[{}];o()({method:"post",url:o.a.PARK_API+"/outpatient/biz/d101/list",params:{param:e.toUpperCase()}}).then(function(e){if(0==e.data.code&&""!=e.data.list){var r=!0,o=!1,i=void 0;try{for(var s,u=n()(e.data.list);!(r=(s=u.next()).done);r=!0){var c=s.value;"1"==a.queryend?c.value=c.d10101:c.value=c.d10102}}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}l=e.data.list,t(l)}else a.$message("无此医院")}).catch(function(e){})},handleSelect:function(e){console.log(e),this.hospitalId=e.d10101},querySearch:function(){var e=this,t={};"1"==this.queryend?(t.hospitalId=this.hospitalText,t.regionId=localStorage.getItem("regionId")):"2"==this.queryend&&(t.hospitalId=this.hospitalId,t.regionId=localStorage.getItem("regionId")),o()({method:"post",url:o.a.PARK_API+"/outpatient/biz/analy/queryresultanaly",params:t}).then(function(t){0==t.data.code?(console.log(t.data.data),e.queryData=t.data.data,e.endtotal=e.queryData.length):e.$message.error(t.data.msg)}).catch(function(e){})},queryClear:function(){this.hospitalText="",this.getQuery()},Download:function(){"1"==this.queryend&&""!=this.hospitalText?location=o.a.PARK_API+"/outpatient/biz/analy/queryresultanalyExcel?hospitalId="+this.hospitalText:"2"==this.queryend&&""!=this.hospitalText?location=o.a.PARK_API+"/outpatient/biz/analy/queryresultanalyExcel?hospitalId="+this.hospitalId:location=o.a.PARK_API+"/outpatient/biz/analy/queryresultanalyExcel?regionId="+localStorage.getItem("regionId")}},created:function(){this.getQuery()}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"right-ctn-title"},[a("el-select",{attrs:{size:"mini",placeholder:"请选择"},model:{value:e.queryend,callback:function(t){e.queryend=t},expression:"queryend"}},e._l(e.endoptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),e._v("：\n        "),e._v(" "),a("el-autocomplete",{attrs:{"fetch-suggestions":e.queryHosSearch,placeholder:"请输入内容"},on:{select:e.handleSelect},model:{value:e.hospitalText,callback:function(t){e.hospitalText=t},expression:"hospitalText"}}),e._v(" "),a("el-button",{staticStyle:{"margin-left":"20px"},attrs:{size:"mini",type:"primary"},on:{click:e.querySearch}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.queryClear}},[e._v("重置")]),e._v(" "),a("el-button",{staticStyle:{"margin-left":"5px"},attrs:{size:"mini"},on:{click:e.Download}},[e._v("导出")]),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.queryData.slice((e.currentPage-1)*e.pageSize,e.currentPage*e.pageSize),"header-cell-style":e.rowClass,border:"",height:"580"}},[a("el-table-column",{attrs:{prop:"hospitalName",label:"医疗机构",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"totalnum",label:"总人数"}}),e._v(" "),a("el-table-column",{attrs:{prop:"doubnum",label:"疑似问题人数"}}),e._v(" "),a("el-table-column",{attrs:{prop:"totalfee",label:"总费用(元)",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"doubfee",label:"疑似违规金额(元)",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"doubper",label:"疑似问题人占比",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"avgfee",label:"次均费用(元)",width:"180"}})],1),e._v(" "),a("div",{staticClass:"block",attrs:{id:"fenye"}},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-sizes":[10,20,30],"page-size":e.pageSize,"current-page":e.currentPage,total:e.endtotal},on:{"current-change":e.handleCurrentChange,"size-change":e.dragSizeChange}})],1)],1)])},staticRenderFns:[]};var u=a("C7Lr")(i,s,!1,function(e){a("fWi6")},"data-v-7f2dc2d7",null);t.default=u.exports}});