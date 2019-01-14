webpackJsonp([1],{Z9gg:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("HzJ8"),n=a.n(i),l=a("6sKG"),s=a.n(l),o={name:"Medical",props:["medicalText","dayTime"],data:function(){return{issueData:[],tdshow:!1}},methods:{getMedical:function(){var t=this;s()({method:"post",url:s.a.PARK_API+"/hospitalization/biz/rstdatorderchargeback/queryChargeback",data:{hospitalId:this.medicalText.hospitalId},headers:{"Content-Type":"application/json;charset=UTF-8"}}).then(function(e){0==e.data.code?(t.issueData=e.data.data.RstDatOrderChargebackEntity,0==t.issueData.length?t.tdshow=!0:t.tdshow=!1,console.log(t.issueData)):t.$message.error(e.data.msg)}).catch(function(t){})},printBtn:function(){var t=document.getElementById("print").innerHTML,e=document.body.innerHTML;return document.body.innerHTML=t,window.print(),window.location.reload(),document.body.innerHTML=e,!1}},created:function(){this.getMedical()}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){t.printBtn()}}},[t._v("打印")]),t._v(" "),a("div",{attrs:{id:"print"}},[a("span",[t._v("结算月份："+t._s(t.dayTime))]),t._v(" "),a("table",{staticClass:"ta",staticStyle:{margin:"auto"},attrs:{border:"1",cellspacing:"0",cellpadding:"1"}},[t._m(0),t._v(" "),a("tr",[a("td",{attrs:{align:"center"}},[t._v("住院名称")]),t._v(" "),a("td",{attrs:{align:"center"}},[t._v(t._s(t.medicalText.hospitalName))]),t._v(" "),a("td",{attrs:{align:"center"}},[t._v("住院人次")]),t._v(" "),a("td",{attrs:{align:"center"}},[t._v(t._s(t.medicalText.num))]),t._v(" "),a("td",{attrs:{align:"center"}},[t._v("总费用(元)")]),t._v(" "),a("td",{attrs:{align:"center"}},[t._v(t._s(t.medicalText.totalFee))]),t._v(" "),a("td",{attrs:{align:"center"}},[t._v("补偿金额")]),t._v(" "),a("td",{attrs:{align:"center"}},[t._v(t._s(t.medicalText.effectFee))])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("tr",{directives:[{name:"show",rawName:"v-show",value:t.tdshow,expression:"tdshow"}]},[a("td",{attrs:{colspan:"8",align:"center"}},[t._v("暂无数据")])]),t._v(" "),t._l(t.issueData,function(e,i){return a("tr",{key:i,attrs:{align:"center"}},[a("td",{staticStyle:{width:"50px"}},[t._v(t._s(i+1))]),t._v(" "),a("td",{attrs:{colspan:"3",align:"center"}},[t._v(t._s(e.message))]),t._v(" "),a("td",{attrs:{colspan:"2",align:"center"}},[t._v(t._s(e.type))]),t._v(" "),a("td",{attrs:{align:"center"}},[t._v(t._s(e.num))]),t._v(" "),a("td",{attrs:{align:"center"}},[t._v(t._s(e.amount))])])})],2),t._v(" "),a("p",[t._v("        根据《县新型农村合作医疗实施办法》、《县新型农村合作医疗定点医疗机构管理暂行办法》的有关规定以及双方签")]),t._v(" "),a("p",[t._v("订的年度定点医院服务协议有关条款，决定对以上违规金额进行扣减。")]),t._v(" "),t._m(3)])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{staticStyle:{"text-align":"center"}},[e("td",{attrs:{colspan:"8"}},[this._v("住院病历审核违规费用扣减通知单")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{attrs:{colspan:"8"}},[this._v("    经中心审核，本月住院病历存在以下违规问题：")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{attrs:{align:"center"}},[t._v("序号")]),t._v(" "),a("td",{attrs:{colspan:"3",align:"center"}},[t._v("违规问题")]),t._v(" "),a("td",{attrs:{colspan:"2",align:"center"}},[t._v("审核规则")]),t._v(" "),a("td",{attrs:{align:"center"}},[t._v("病例数")]),t._v(" "),a("td",{attrs:{align:"center"}},[t._v("违规金额（元）")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"write"},[e("p",[this._v("县新型农村合作医疗经办中心")]),this._v(" "),e("p",[this._v("            年        月        日")])])}]};var c=a("C7Lr")(o,r,!1,function(t){a("hdgb")},"data-v-4ad68017",null).exports,d={name:"Medical",props:["medicalText"],data:function(){return{issueData:[]}},methods:{getMedical:function(){var t=this;s()({method:"post",url:s.a.PARK_API+"/hospitalization/biz/rstdatorderchargeback/queryChargebackByHospitalName",params:{hospitalName:this.medicalText.hospitalName}}).then(function(e){0==e.data.code?(t.issueData=e.data.data,console.log(t.issueData)):t.$message.error(e.data.msg)}).catch(function(t){})},indexMethod:function(t){return 1*t+1},printBtn:function(){var t=document.getElementById("print").innerHTML,e=document.body.innerHTML;return document.body.innerHTML=t,window.print(),window.location.reload(),document.body.innerHTML=e,!1}},created:function(){this.getMedical()}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-button",{staticClass:"btn",attrs:{type:"primary",size:"mini"},on:{click:function(e){t.printBtn()}}},[t._v("打印")]),t._v(" "),a("div",{attrs:{id:"print"}},[a("div",{staticClass:"top",staticStyle:{border:"1px solid #c3d3ed"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.issueData,center:""}},[a("el-table-column",{attrs:{type:"index",height:"100","show-overflow-tooltip":"",index:t.indexMethod}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",height:"100","show-overflow-tooltip":"",width:"80",label:"姓名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"itemName","show-overflow-tooltip":"",height:"100",width:"120",label:"项目名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"type","show-overflow-tooltip":"",height:"100",width:"180",label:"审核类型"}}),t._v(" "),a("el-table-column",{attrs:{prop:"message","show-overflow-tooltip":"",height:"100",width:"240",label:"异常信息"}}),t._v(" "),a("el-table-column",{attrs:{prop:"price","show-overflow-tooltip":"",height:"100",width:"60",label:"单价"}}),t._v(" "),a("el-table-column",{attrs:{prop:"quantity","show-overflow-tooltip":"",height:"100",width:"50",label:"数量"}}),t._v(" "),a("el-table-column",{attrs:{prop:"amount","show-overflow-tooltip":"",height:"100",width:"80",label:"扣款金额"}}),t._v(" "),a("el-table-column",{attrs:{prop:"description","show-overflow-tooltip":"",height:"100",width:"176",label:"扣费原因"}})],1)],1)])],1)},staticRenderFns:[]};var u=a("C7Lr")(d,h,!1,function(t){a("qpvE")},"data-v-5ee31ff9",null).exports,m=(a("VD+p"),{data:function(){return{medicalHome:"",medicalHomes:[],closingDates:[{value:"1",label:"结算日期"}],closingDate:"1",startTime:"",endTime:"",medicalData:[],otherData:[],detailData:[],total:0,currentPage:1,pageSize:12,medicalVisible:!1,detailVisible:!1,hospitalText:"",dayTime:"",hospitalId:""}},methods:{handleCurrentChange:function(t){this.currentPage=t},medicalChange:function(t){this.pageSize=t},getMedical:function(){var t=this;localStorage.setItem("hometext","【住院-扣款通知单】"),s()({method:"post",url:s.a.PARK_API+"/hospitalization/biz/rstdatorderchargeback/queryChargeback",data:{regionId:localStorage.getItem("regionId"),hospitalId:null,startbaldate:this.startTime,endbaldate:this.endTime},headers:{"Content-Type":"application/json;charset=UTF-8"}}).then(function(e){0==e.data.code?(t.medicalData=e.data.data.BizDatOrderEntity,console.log(t.medicalData),t.total=t.medicalData.length,console.log(t.total),t.medicalHomes=e.data.departlist):t.$message.error(e.data.msg)}).catch(function(t){})},queryHosSearch:function(t,e){var a=this,i=[{}];s()({method:"post",url:s.a.PARK_API+"/hospitalization/biz/d101/list",params:{param:t.toUpperCase()}}).then(function(t){if(0==t.data.code&&""!=t.data.list){var l=!0,s=!1,o=void 0;try{for(var r,c=n()(t.data.list);!(l=(r=c.next()).done);l=!0){var d=r.value;"1"==a.queryend?d.value=d.d10101:d.value=d.d10102}}catch(t){s=!0,o=t}finally{try{!l&&c.return&&c.return()}finally{if(s)throw o}}i=t.data.list,e(i)}else a.$message("无此医院")}).catch(function(t){})},handleSelect:function(t){console.log(t),this.hospitalId=t.d10101},search:function(){var t=this,e=new Date(this.startTime),a=e.getFullYear()+"-"+(e.getMonth()+1);this.dayTime=a,console.log(this.dayTime),s()({method:"post",url:s.a.PARK_API+"/hospitalization/biz/rstdatorderchargeback/queryChargeback",data:{startbaldate:this.startTime,endbaldate:this.endTime,regionId:localStorage.getItem("regionId"),hospitalId:this.hospitalId},headers:{"Content-Type":"application/json;charset=UTF-8"}}).then(function(e){0==e.data.code?(t.medicalData=e.data.data.BizDatOrderEntity,t.total=t.medicalData.length):t.$message.error(e.data.msg)}).catch(function(t){})},clear:function(){this.startTime="",this.endTime="",this.hospitalText="",this.getMedical()},handleClick:function(t){console.log(t),this.otherData=t,this.medicalVisible=!0},detailClick:function(t){console.log(t),this.detailData=t,this.detailVisible=!0},getTime:function(){var t=new Date,e=t.getFullYear(),a=t.getMonth(),i=t.getMonth()+1,n=localStorage.getItem("userTime")?localStorage.getItem("userTime"):21,l=t.getDate(),s=t.getHours(),o=t.getMinutes(),r=t.getSeconds();if(console.log(n),1==i){var c=e-1+"-12-"+n+" "+s+":"+o+":"+r,d=e+"-12",h=e+"-"+i+"-"+l+" "+s+":"+o+":"+r;this.startTime=c,this.dayTime=d,this.endTime=h}else{var u=e+"-"+a+"-"+n+" "+s+":"+o+":"+r,m=e+"-"+a,p=e+"-"+i+"-"+l+" "+s+":"+o+":"+r;this.startTime=u,this.dayTime=m,this.endTime=p}}},components:{Payment:c,detail:u},created:function(){this.getTime(),this.getMedical()}}),p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"right-ctn-title"},[a("span",[t._v("医院名称：")]),t._v(" "),a("el-autocomplete",{attrs:{"fetch-suggestions":t.queryHosSearch,placeholder:"请输入内容"},on:{select:t.handleSelect},model:{value:t.hospitalText,callback:function(e){t.hospitalText=e},expression:"hospitalText"}}),t._v(" "),a("el-select",{attrs:{size:"mini",placeholder:"结算日期"},model:{value:t.closingDate,callback:function(e){t.closingDate=e},expression:"closingDate"}},t._l(t.closingDates,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),t._v("：\n            "),a("el-date-picker",{staticClass:"hosptDataSel",attrs:{size:"mini",type:"date","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"选择日期"},model:{value:t.startTime,callback:function(e){t.startTime=e},expression:"startTime"}}),t._v("-\n            "),a("el-date-picker",{staticClass:"hosptDataSel",attrs:{size:"mini",type:"date","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"选择日期"},model:{value:t.endTime,callback:function(e){t.endTime=e},expression:"endTime"}}),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.search}},[t._v("查询")]),t._v(" "),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:t.clear}},[t._v("重置")]),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.medicalData.slice((t.currentPage-1)*t.pageSize,t.currentPage*t.pageSize),border:"",height:"500"}},[a("el-table-column",{attrs:{prop:"hospitalName",label:"医院名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"num",label:"住院人次"}}),t._v(" "),a("el-table-column",{attrs:{prop:"totalFee",label:"总费用"}}),t._v(" "),a("el-table-column",{attrs:{prop:"effectFee",label:"补偿金额"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"cutmoney",attrs:{type:"text",size:"small"},on:{click:function(a){t.handleClick(e.row)}}},[t._v("扣款通知单")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.detailClick(e.row)}}},[t._v("详细信息")])]}}])})],1),t._v(" "),a("div",{staticClass:"block",attrs:{id:"fenye"}},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-sizes":[10,20,30],"page-size":t.pageSize,"current-page":t.currentPage,total:t.total},on:{"current-change":t.handleCurrentChange,"size-change":t.medicalChange}})],1),t._v(" "),t.medicalVisible?a("el-dialog",{attrs:{title:"",visible:t.medicalVisible,width:"80%",top:"20px"},on:{"update:visible":function(e){t.medicalVisible=e}}},[a("Payment",{attrs:{medicalText:t.otherData,dayTime:t.dayTime}})],1):t._e(),t._v(" "),t.detailVisible?a("el-dialog",{attrs:{title:"",visible:t.detailVisible,width:"80%",top:"20px"},on:{"update:visible":function(e){t.detailVisible=e}}},[a("detail",{attrs:{medicalText:t.detailData}})],1):t._e()],1)])},staticRenderFns:[]};var v=a("C7Lr")(m,p,!1,function(t){a("ZcS5")},"data-v-78d1db8b",null);e.default=v.exports},ZcS5:function(t,e){},hdgb:function(t,e){},qpvE:function(t,e){}});