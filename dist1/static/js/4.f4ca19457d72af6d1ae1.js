webpackJsonp([4],{"3cXf":function(t,e,a){t.exports={default:a("NomL"),__esModule:!0}},NomL:function(t,e,a){var i=a("ZQXR"),s=i.JSON||(i.JSON={stringify:JSON.stringify});t.exports=function(t){return s.stringify.apply(s,arguments)}},Q6Dt:function(t,e){},opyw:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("3cXf"),s=a.n(i),l=a("NV+G"),o=a("45V4"),r=a("3eWk"),n=a("6sKG"),c=a.n(n),p=a("VD+p"),d={name:"inquiry",data:function(){return{mes:!1,screenOpen:!0,leftBck:0,total:null,inquirylist:[],inquirydata:[],iqrn:1,remark:"",piliangRadio:"1",name:"",presId:"",statusMsg:{},copyStatusMsg:"",dialogFormVisible:!1,childMsg:[],childMsgData:{},leftStatus:1,viewLeftList:[],drugVisible:!1,fileName:[],filePath:[],viewTopList:[],viewbotList:[],dateList:[],isdateList:[],isData:[],moneyDataList:[],itemtype:"",typeOption:[{value:1,label:"药品"},{value:2,label:"服务"},{value:3,label:"材料"}],itemList:[],itemListAll:[],plusDataList:[],itemSearch:"",plustotal:0,upShow:!1,btnshow:!0,cancel:!1,tableShow:!0,hebingShow:!1,code:"",dragtotal:0,dragPage:1,pageSize:10,user:1,hospitalName:"",hasMsg:!1,tdshow:!1,isClear:!1,isSearch:!1,piliangIdList:[],usercode:"",username:""}},watch:{itemSearch:function(){if(""!=this.itemSearch)for(var t=[],e=new RegExp(this.itemSearch,"g"),a=0;a<=this.itemList.length;a++)null!=this.itemList[a].match(e)&&(t.push(this.itemList[a]),this.itemListAll=t)}},filters:{rounding:function(t){return isNaN(t)?0:t.toFixed(2)},formatDate:function(t){if(void 0!=t){var e=new Date(t);return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()}return""}},methods:{hiddenScreen:function(){this.screenOpen=!this.screenOpen},getUEContent:function(t){this.submit(2,t),this.hiddenReply()},hiddenReply:function(){this.dialogFormVisible=!1},handleSelectionChange:function(t){this.multipleSelection=t},toggleSelection:function(t){var e=this;t?t.forEach(function(t){e.$refs.multipleTable.toggleRowSelection(t)}):this.$refs.multipleTable.clearSelection()},indexMethod:function(t){return 1*t},getInquiry:function(t){var e=this;localStorage.setItem("hometext","【门诊-质询】"),1==localStorage.getItem("limited")?this.user=1:2==localStorage.getItem("limited")&&(this.user=2,this.hospitalName=localStorage.getItem("othercode"));var a={};1==this.isClear?(a.rn=t,a.rowNum=10,a.auditFlagArray=[0,3],a.regionId=localStorage.getItem("regionId"),a.hospitalId=this.hospitalName,a.statusArray=[1,2]):(a.rn=t,a.rowNum=10,a.auditFlagArray=[0,3],a.regionId=localStorage.getItem("regionId"),a.hospitalId=this.hospitalName,a.startbaldate=localStorage.getItem("inDateTime"),a.endbaldate=localStorage.getItem("inDateEnd"),a.statusArray=[1,2]),c()({method:"post",url:c.a.PARK_API+"/outpatient/biz/bizdatpres/list",data:a,headers:{"Content-Type":"application/json;charset=UTF-8"}}).then(function(t){if(0==t.data.code){e.inquirylist=t.data.page.list,e.total=10*t.data.page.totalPage;for(var a=0;a<e.inquirylist.length;a++){switch(e.inquirylist[a].reply="查看回复",e.inquirylist[a].sysFlag){case 1:e.inquirylist[a].sysFlag="通过";break;case 2:e.inquirylist[a].sysFlag="不通过";break;case 3:e.inquirylist[a].sysFlag="待确定";break;default:e.inquirylist[a].sysFlag="数据错误"}switch(e.inquirylist[a].auditFlag){case 0:e.inquirylist[a].auditFlag="待审核";break;case 3:e.inquirylist[a].auditFlag="质询";break;default:e.inquirylist[a].auditFlag="数据错误"}switch(e.inquirylist[a].status){case 0:e.inquirylist[a].status="待审核";break;case 1:case 2:e.inquirylist[a].status="质询中";break;case 3:e.inquirylist[a].status="复审中";break;default:e.inquirylist[a].status="锁定"}}}else e.$message.error(t.data.msg)}).catch(function(t){e.$message.error("请检查网络")})},selectThisItem:function(t){console.log(t),this.piliangIdList=[];for(var e=0;e<t.length;e++){var a={};a.presId=t[e].presId,this.piliangIdList.push(a)}},piliangSubmit:function(){var t=this;""==this.piliangIdList?this.$message.warning("提交数据不能为空！"):0==this.piliangRadio?this.dangqianzhuangtai="0":1!=this.piliangRadio&&2!=this.piliangRadio||(this.dangqianzhuangtai="3",c()({method:"post",url:c.a.PARK_API+"/outpatient/biz/rstdatpres/batchUpdate",data:{list:this.piliangIdList,auditFlag:parseInt(this.piliangRadio),auditUser:123,status:parseInt(this.dangqianzhuangtai)},headers:{"Content-Type":"application/json;charset=UTF-8"}}).then(function(e){0==e.data.code?t.$message({message:"提交成功",type:"success"}):t.$message.error("提交数据失败！")}).catch(function(e){t.$message.error("请检查网络")}))},rowClick:function(t){this.presId=t.presId,this.getTable(),this.viewLeft(),this.clinicViewtop(),this.clinicViewlist(),this.clinicMoneylist(),this.name=t.name,this.hasMsg=!0,this.tdshow=!0},clinicViewtop:function(){var t=this;c()({method:"post",url:c.a.PARK_API+"/outpatient/biz/bizdatpres/diagonseinfo",data:{presId:this.presId,presnolist:[1]},headers:{"Content-Type":"application/json;charset=UTF-8"}}).then(function(e){0==e.data.code?t.viewTopList=e.data.bizDatOrder[0]:t.$message.error(e.data.msg)}).catch(function(t){})},clinicViewlist:function(){var t=this;this.isData=[],c()({method:"post",url:c.a.PARK_API+"/outpatient/biz/rstdatpresmsg/listMsgTimeView",params:{presId:this.presId}}).then(function(e){if(0==e.data.code){t.dateList=e.data.data.datelist,t.viewbotList=e.data.data.listvo;for(var a=0;a<t.viewbotList.length;a++)t.isData=t.viewbotList[a].list,console.log(t.isData)}else t.$message.error(e.data.msg)}).catch(function(t){})},clinicMoneylist:function(){var t=this;c()({method:"post",url:c.a.PARK_API+"/outpatient/biz/bizdatpresitem/queryInfoById",data:{presId:this.presId,code:1},headers:{"Content-Type":"application/json;charset=UTF-8"}}).then(function(e){if(0==e.data.code){t.moneyDataList=e.data.data,t.dragtotal=t.moneyDataList.length;for(var a=0;a<t.moneyDataList.length;a++)switch(t.moneyDataList[a].itemType){case 1:t.moneyDataList[a].itemType="药品";break;case 2:t.moneyDataList[a].itemType="服务";break;case 3:t.moneyDataList[a].itemType="材料";break;default:t.hostpitalList[a].sysFlag="数据错误"}}else t.$message.error(e.data.msg)}).catch(function(t){})},itemFocus:function(){var t=this;c()({method:"post",url:c.a.PARK_API+"/outpatient/biz/bizdatpresitem/queryItemName",params:{presId:this.presId}}).then(function(e){0==e.data.code?(t.itemListAll=e.data.data,t.itemList=t.itemListAll,t.upShow=!0,console.log(t.itemList)):t.$message.error(e.data.msg)}).catch(function(t){})},itemBlur:function(){this.upShow=!1},Liactive:function(t){console.log(t.path[0].innerHTML),this.itemSearch=t.path[0].innerHTML,this.upShow=!1},searchTable:function(){var t=this;1==this.hebingShow?this.code=2:this.code=1,c()({method:"post",url:c.a.PARK_API+"/outpatient/biz/bizdatpresitem/queryInfoById",data:{presId:this.presId,code:this.code,itemtype:this.itemtype,itemname:this.itemSearch},headers:{"Content-Type":"application/json;charset=UTF-8"}}).then(function(e){if(0==e.data.code){t.moneyDataList=e.data.data,t.dragtotal=t.moneyDataList.length,t.plusDataList=e.data.data,t.plustotal=t.plusDataList.length;for(var a=0;a<t.moneyDataList.length;a++)switch(t.moneyDataList[a].itemType){case 1:t.moneyDataList[a].itemType="药品";break;case 2:t.moneyDataList[a].itemType="服务";break;case 3:t.moneyDataList[a].itemType="材料";break;default:t.hostpitalList[a].sysFlag="数据错误"}}else t.$message.error(e.data.msg)}).catch(function(t){})},plusTable:function(){var t=this;this.cancel=!0,this.btnshow=!1,c()({method:"post",url:c.a.PARK_API+"/outpatient/biz/bizdatpresitem/queryInfoById",data:{presId:this.presId,code:2,itemtype:this.itemtype,itemname:this.itemSearch},headers:{"Content-Type":"application/json;charset=UTF-8"}}).then(function(e){if(0==e.data.code){t.tableShow=!1,t.hebingShow=!0,t.plusDataList=e.data.data,t.plustotal=t.plusDataList.length;for(var a=0;a<t.plusDataList.length;a++)switch(t.plusDataList[a].itemType){case 1:t.plusDataList[a].itemType="药品";break;case 2:t.plusDataList[a].itemType="服务";break;case 3:t.plusDataList[a].itemType="材料";break;default:t.plusDataList[a].sysFlag="数据错误"}}else t.$message.error(e.data.msg)}).catch(function(t){})},cancelTable:function(){this.cancel=!1,this.btnshow=!0,this.tableShow=!0,this.hebingShow=!1,this.searchTable()},dragCurrentChange:function(t){this.dragPage=t},dragSizeChange:function(t){this.pageSize=t},dateFormat:function(t,e){var a=t[e.property];return void 0==a?"":p(a).format("YYYY-MM-DD")},viewLeft:function(){var t=this;c()({method:"post",url:c.a.PARK_API+"/outpatient/biz/bizdatpres/info",params:{presId:this.presId}}).then(function(e){0==e.data.code?(t.viewLeftList=e.data.bizDatPres,console.log(t.viewLeftList)):t.$message.error(e.data.msg)}).catch(function(t){})},getTable:function(){var t=this;c()({method:"post",url:c.a.PARK_API+"/outpatient/biz/rstdatpresmsg/list",params:{presId:this.presId}}).then(function(e){0==e.data.code?t.inquirydata=e.data.page.list:t.$message.error(e.data.msg)}).catch(function(t){})},showReply:function(t,e){var a=this;"reply"==e.property&&c()({method:"post",url:c.a.PARK_API+"/outpatient/biz/rstdatreply/selectmessage",params:{presId:t.presId}}).then(function(e){if(0==e.data.code){a.childMsg=a.inquirydata,a.childMsgData.status=t.status,a.childMsgData.attlist=e.data.map.attlist;for(var i=0;i<e.data.map.attlist.length;i++)a.childMsgData.attlist[i].downloadUrl=c.a.PARK_API+"/outpatient/biz/rstdatreply/download?presId="+t.presId+"&fileName="+a.childMsgData.attlist[i].filename;a.childMsgData.rstDatReplyEntity=e.data.map.rstDatReplyEntityList,a.dialogFormVisible=!0}else a.$message.error(e.data.msg)}).catch(function(t){})},handleCurrentChange:function(t){this.iqrn=t,console.log(t),localStorage.setItem("rn",t),1==this.isSearch?this.serchList(this.serchData,t):this.getInquiry(t)},rowClass:function(t){t.row,t.rowIndex;return"border-bottom:2px solid #ccc;border-top:2px solid #ccc"},cellStyle:function(t){var e=t.row,a=(t.column,t.rowIndex,t.columnIndex);return"通过"==e.sysFlag&&5===a?"background:rgba(0,255,0,0.3);":"不通过"==e.sysFlag&&5===a?"background:rgba(255,0,0,0.3);":"待确定"==e.sysFlag&&5===a?"background:rgba(255,165,0,0.3)":0==e.replyStatus&&2===a?"color:blue; font-size: 12px; cursor:pointer;":1==e.replyStatus&&2===a?"color:red; font-size: 12px; cursor:pointer; background-image:url(./static/img/score.jpg); background-repeat:no-repeat;background-size:12%; background-position:70% 29%;":void 0},showStyle:function(t){var e=t.row,a=(t.column,t.rowIndex,t.columnIndex);return void 0!=e.drugId&&0!=e.drugId&&1===a?"color:blue; font-size: 12px; cursor:pointer;":""},showDrug:function(t,e){var a=this;void 0==t.drugId||0==t.drugId?this.drugVisible=!1:"itemName"==e.property&&void 0!=t.itemName&&c()({method:"post",url:c.a.PARK_API+"/outpatient/biz/drug/querydrug",params:{drugId:t.drugId}}).then(function(t){0==t.data.code?(console.log(t.data.data),a.dragMsg=t.data.data,a.drugVisible=!0):a.$message.error(t.data.msg)}).catch(function(t){})},fileSubmit:function(t,e){this.fileName=t.fileName,this.filePath=t.filePath,this.submit(2,e)},submit:function(t,e){var a,i=this;console.log(e),1==localStorage.getItem("limited")?(this.usercode=localStorage.getItem("mainUser"),this.username="经办单位"):2==localStorage.getItem("limited")&&(this.usercode=localStorage.getItem("hosuser"),this.username=localStorage.getItem("hosName")),this.fileName.length>0&&this.filePath.length>0?a=s()({presId:this.presId,description:e,usercode:this.usercode,username:this.username,userType:"1",fileName:this.fileName,filePath:this.filePath,auditFlag:0,status:2}):2==t&&""!=this.content?a=s()({presId:this.presId,description:e,usercode:this.usercode,username:this.username,userType:"1",fileName:this.fileName,filePath:this.filePath,auditFlag:0,status:2}):2==t&&""==this.content?a=s()({presId:this.presId,usercode:this.usercode,username:this.username,userType:"1",fileName:this.fileName,filePath:this.filePath,auditFlag:0,status:2}):1==t&&""!=this.remark?a=s()({presId:this.presId,description:this.remark,usercode:this.usercode,username:this.username,userType:"1",fileName:[],filePath:[],auditFlag:0,status:2}):1==t&&""==this.remark&&(a=s()({presId:this.presId,usercode:this.usercode,username:this.username,userType:"1",fileName:[],filePath:[],auditFlag:0,status:2})),c()({method:"post",url:c.a.PARK_API+"/outpatient/biz/rstdatreply/savemessage",data:a,headers:{"Content-Type":"application/json;charset=UTF-8"}}).then(function(t){0==t.data.code?(i.$message({message:"提交成功",type:"success"}),i.dialogFormVisible=!1,i.remark="",i.hasMsg=!1,i.tdshow=!1):i.$message.error(t.data.msg)}).catch(function(t){})},reset:function(){this.statusMsg.sysFlag=this.copyStatusMsg,this.remark=""},serchList:function(t,e){var a=this;this.isSearch=!0,this.serchData=t,t.auditFlagArray=[0,3],t.regionId=localStorage.getItem("regionId"),t.statusArray=[1,2],this.serchData.rn=e||1,c()({method:"post",url:c.a.PARK_API+"/outpatient/biz/bizdatpres/list",data:this.serchData,headers:{"Content-Type":"application/json;charset=UTF-8"}}).then(function(t){if(0==t.data.code){a.total=10*t.data.page.totalPage,a.inquirylist=t.data.page.list;for(var e=0;e<a.inquirylist.length;e++){switch(a.inquirylist[e].reply="查看回复",a.inquirylist[e].paixuId=e,a.inquirylist[e].sysFlag){case 1:a.inquirylist[e].sysFlag="通过";break;case 2:a.inquirylist[e].sysFlag="不通过";break;case 3:a.inquirylist[e].sysFlag="待确定";break;default:a.inquirylist[e].sysFlag="数据错误"}switch(a.inquirylist[e].auditFlag){case 0:a.inquirylist[e].auditFlag="待审核";break;case 3:a.inquirylist[e].auditFlag="质询";break;default:a.inquirylist[e].auditFlag="数据错误"}switch(a.inquirylist[e].status){case 0:a.inquirylist[e].status="待审核";break;case 1:case 2:a.inquirylist[e].status="质询中";break;case 3:a.inquirylist[e].status="复审中";break;default:a.inquirylist[e].status="锁定"}}}else a.$message.error(t.data.msg)}).catch(function(t){a.$message.error("请检查网络")})},clear:function(){this.isClear=!0,this.getInquiry(1)}},created:function(){this.getInquiry(1)},components:{clinicScreen:l.a,drugshow:r.a,clinicReply:o.a}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("div",{staticClass:"leftContent",class:{"content-left-fold":!t.screenOpen}},[a("clinicScreen",{on:{hiddenScreen:t.hiddenScreen,serchList:t.serchList,clear:t.clear}})],1),t._v(" "),a("div",{staticClass:"rightContent",class:{"content-right-fold":!t.screenOpen}},[a("div",{staticClass:"top"},[a("div",{staticClass:"left-bck"},[a("ul",[a("li",{class:{active:0==t.leftBck},on:{click:function(e){t.leftBck=0}}},[t._v("住院信息")]),t._v(" "),a("li",{class:{active:1==t.leftBck},on:{click:function(e){t.leftBck=1}}},[t._v("明细视图")]),t._v(" "),a("li",{class:{active:2==t.leftBck},on:{click:function(e){t.leftBck=2}}},[t._v("费用明细")])])]),t._v(" "),a("div",{staticClass:"right-ctn"},[a("div",{directives:[{name:"show",rawName:"v-show",value:0==t.leftBck,expression:"leftBck == 0"}]},[a("div",{staticClass:"right-ctn-title"},[a("el-radio",{attrs:{label:"1"},model:{value:t.piliangRadio,callback:function(e){t.piliangRadio=e},expression:"piliangRadio"}},[t._v("通过")]),t._v(" "),a("el-radio",{attrs:{label:"2"},model:{value:t.piliangRadio,callback:function(e){t.piliangRadio=e},expression:"piliangRadio"}},[t._v("不通过")]),t._v(" "),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"mini",type:"primary"},on:{click:t.piliangSubmit}},[t._v("保存")])],1),t._v(" "),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.inquirylist,"highlight-current-row":"",height:"460",border:"","tooltip-effect":"dark","cell-style":t.cellStyle},on:{"row-click":t.rowClick,"cell-click":t.showReply,"selection-change":t.selectThisItem}},[a("el-table-column",{attrs:{type:"index",width:"50"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.$index+10*(t.iqrn-1)+1)+" ")])]}}])}),t._v(" "),a("el-table-column",{ref:"quanxuan",attrs:{type:"selection",width:"55"}}),t._v(" "),a("el-table-column",{attrs:{prop:"reply",label:"查看回复",width:"90","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t.mes?a("i",{staticClass:"el-icon-bell red"}):t._e(),t._v(" "),a("span",[t._v("查看回复")])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"age",label:"年龄",width:"50px","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"sysFlag",label:"机审结果","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"当前状态","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"diagnose",label:"诊断",width:"160px","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"patientNo",label:"患者号",width:"160px","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"presId",label:"就诊号",width:"160px","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"insuNo",label:"医保号",width:"160px","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"hospitalName",label:"医院名称",width:"160px","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"hospitalGrade",label:"医院等级","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"deptName",label:"门诊科室",width:"120px","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"icd10",label:"诊断编码","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"presDateTime",label:"处方日期",width:"100px",formatter:t.dateFormat,"show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"balDate",label:"结算日期",width:"100px",formatter:t.dateFormat,"show-overflow-tooltip":""}})],1),t._v(" "),a("div",{staticClass:"block",attrs:{id:"fenye"}},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:1==t.leftBck,expression:"leftBck == 1"}]},[a("div",{staticClass:"topView"},[a("div",{staticClass:"dataView"},[a("span",[t._v("患者："+t._s(t.viewTopList.name))]),t._v(" "),a("span",[t._v("性别："+t._s(t.viewTopList.gender))]),t._v(" "),a("span",[t._v("年龄："+t._s(t.viewTopList.age))]),t._v(" "),a("span",[t._v(" 诊断："+t._s(t.viewTopList.diagonseName))]),t._v(" "),a("span",[t._v("总费用："+t._s(t.viewTopList.totalFee))]),t._v(" "),a("span",[t._v("处方日期："+t._s(t._f("formatDate")(t.viewTopList.presDateTime)))]),t._v(" "),a("span",[t._v("结算日期："+t._s(t._f("formatDate")(t.viewTopList.balDate)))])]),t._v(" "),t._m(0)]),t._v(" "),a("div",{staticClass:"database"},[a("table",{attrs:{border:"1"}},[a("tr",[a("th",[t._v("项目名称")]),t._v(" "),a("th",[t._v("小计(元)")]),t._v(" "),t._l(t.dateList,function(e,i){return a("th",{key:i},[t._v(t._s(e))])})],2),t._v(" "),t._l(t.viewbotList,function(e,i){return a("tr",{key:i},[a("td",[t._v(t._s(e.itemname))]),t._v(" "),a("td",[t._v(t._s(e.amount))]),t._v(" "),t._l(e.map,function(e,i){return a("td",{key:i,staticClass:"tdclass"},[t._v(t._s(e))])})],2)})],2),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:0==t.viewbotList.length,expression:"viewbotList.length == 0"}],staticClass:"noMsg"},[t._v("暂无数据")])])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:2==t.leftBck,expression:"leftBck == 2"}]},[a("div",{staticClass:"right-ctn-title"},[a("span",[t._v("项目类型:")]),t._v(" "),a("el-select",{attrs:{size:"mini",placeholder:"请选择"},model:{value:t.itemtype,callback:function(e){t.itemtype=e},expression:"itemtype"}},t._l(t.typeOption,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),t._v(" "),a("span",{staticStyle:{"margin-left":"40px"}},[t._v("项目名称:")]),t._v(" "),a("el-input",{staticStyle:{width:"190px",height:"30px"},attrs:{size:"mini",placeholder:"请输入内容"},on:{focus:t.itemFocus,blur:t.itemBlur},model:{value:t.itemSearch,callback:function(e){t.itemSearch=e},expression:"itemSearch"}}),t._v(" "),a("ul",{directives:[{name:"show",rawName:"v-show",value:t.upShow,expression:"upShow"}],staticClass:"upText"},t._l(t.itemListAll,function(e,i){return a("li",{key:i,staticClass:"Liactive",on:{mousedown:t.Liactive}},[t._v(t._s(e))])}),0),t._v(" "),a("el-button",{staticStyle:{"margin-left":"40px"},attrs:{size:"mini"},on:{click:t.searchTable}},[t._v("查询")]),t._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:t.btnshow,expression:"btnshow"}],attrs:{size:"mini",type:"primary"},on:{click:t.plusTable}},[t._v("合并列表")]),t._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:t.cancel,expression:"cancel"}],attrs:{size:"mini",type:"primary"},on:{click:t.cancelTable}},[t._v("取消合并")])],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.tableShow,expression:"tableShow"}]},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.moneyDataList.slice((t.dragPage-1)*t.pageSize,t.dragPage*t.pageSize),height:"460","header-cell-style":t.rowClass,border:"","tooltip-effect":"dark"}},[a("el-table-column",{attrs:{prop:"thirdName",label:"项目名称",width:"140px","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"thirdForm",label:"项目剂型","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"itemType",label:"项目类型","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"type",label:"医嘱类型","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"price",label:"单价",width:"50px","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"quantity",label:"数量",width:"50px","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"amount",label:"金额",width:"60px;","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("rounding")(e.row.amount-0)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"spec",label:"规格",width:"80px;","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"selfProportion",label:"自费比例","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"pack",label:"包装含量值",width:"100px","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("rounding")(e.row.pack-0)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"startDate",label:"开始日期",formatter:t.dateFormat,"show-overflow-tooltip":""}})],1),t._v(" "),a("div",{staticClass:"block",attrs:{id:"fenye"}},[a("el-pagination",{attrs:{background:"",layout:"total,prev, pager, next","current-page":t.dragPage,"page-sizes":[10,20,30],"page-size":t.pageSize,total:t.dragtotal},on:{"size-change":t.dragSizeChange,"current-change":t.dragCurrentChange}})],1)],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.hebingShow,expression:"hebingShow"}]},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"header-cell-style":t.rowClass,data:t.plusDataList.slice((t.dragPage-1)*t.pageSize,t.dragPage*t.pageSize),height:"460",border:"","tooltip-effect":"dark"}},[a("el-table-column",{attrs:{prop:"itemName",label:"项目名称","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"itemType",label:"项目类型","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"price",label:"单价","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"quantity",label:"数量","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"amount",label:"金额","show-overflow-tooltip":""}})],1),t._v(" "),a("div",{staticClass:"block",attrs:{id:"fenye"}},[a("el-pagination",{attrs:{background:"",layout:"total,prev, pager, next","current-page":t.dragPage,"page-sizes":[10,20,30],"page-size":t.pageSize,total:t.plustotal},on:{"size-change":t.dragSizeChange,"current-change":t.dragCurrentChange}})],1)],1)])])]),t._v(" "),a("div",{staticClass:"bottom"},[a("div",{staticClass:"bottom-left"},[a("div",{staticClass:"bom-left-title"},[a("div",[t._v("审核情况")]),t._v(" "),a("div",{class:{"bom-left-title-div-active":0==t.leftStatus}},[t._v("审核")]),t._v(" "),a("div",{class:{"bom-left-title-div-active":1==t.leftStatus}},[t._v("质询")]),t._v(" "),a("div",{class:{"bom-left-title-div-active":2==t.leftStatus}},[t._v("复审")]),t._v(" "),a("img",{staticStyle:{right:"122px"},attrs:{src:"./static/img/next.png",alt:""}}),t._v(" "),a("img",{staticStyle:{right:"51px"},attrs:{src:"./static/img/next.png",alt:""}})]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:0==t.inquirydata.length,expression:"inquirydata.length == 0"}],staticClass:"noMsg"},[t._v("暂无数据")]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.hasMsg,expression:"hasMsg"}],staticClass:"bom-content"},[a("div",{staticClass:"exAmount"},[a("div",{staticClass:"exOther"},[a("span",[t._v("姓名: "+t._s(t.viewLeftList.name))]),a("br"),t._v(" "),a("span",[t._v("西药费: "+t._s(t._f("rounding")(t.viewLeftList.medicineFee-0)))]),a("br"),t._v(" "),a("span",[t._v("中成药: "+t._s(t._f("rounding")(t.viewLeftList.tcmFee-0)))]),a("br"),t._v(" "),a("span",[t._v("中草药: "+t._s(t._f("rounding")(t.viewLeftList.herbFee-0)))]),a("br"),t._v(" "),a("span",[t._v("病例总金额: "+t._s(t._f("rounding")(t.viewLeftList.totalFee-0)))]),a("br"),t._v(" "),a("span",[t._v("统筹支付费: "+t._s(t._f("rounding")(t.viewLeftList.effectFee-0)))]),a("br")]),t._v(" "),a("div",{staticClass:"exOther"},[a("span",[t._v("检查费: "+t._s(t._f("rounding")(t.viewLeftList.inspectionFee-0)))]),a("br"),t._v(" "),a("span",[t._v("治疗费: "+t._s(t._f("rounding")(t.viewLeftList.treatmentFee-0)))]),a("br"),t._v(" "),a("span",[t._v("护理费: "+t._s(t._f("rounding")(t.viewLeftList.nursingFee-0)))]),a("br"),t._v(" "),a("span",[t._v("医疗服务: "+t._s(t._f("rounding")(t.viewLeftList.servicefee-0)))]),a("br"),t._v(" "),a("span",[t._v("存疑金额: "+t._s(t._f("rounding")(t.viewLeftList.exAmount-0)))]),a("br")]),t._v(" "),a("div",{staticClass:"exOther"},[a("span",[t._v("化验费: "+t._s(t._f("rounding")(t.viewLeftList.laboratoryFee-0)))]),a("br"),t._v(" "),a("span",[t._v("床位费: "+t._s(t._f("rounding")(t.viewLeftList.bedFee-0)))]),a("br"),t._v(" "),a("span",[t._v("材料费: "+t._s(t._f("rounding")(t.viewLeftList.materialFee-0)))]),a("br"),t._v(" "),a("span",[t._v("手术费: "+t._s(t._f("rounding")(t.viewLeftList.operatefee-0)))]),a("br"),t._v(" "),a("span",[t._v("大额费用: "+t._s(t._f("rounding")(t.viewLeftList.largeFee-0)))])])]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"beizhu"},[a("p",{},[t._v("备注:")]),t._v(" "),a("el-input",{staticStyle:{width:"80%","margin-right":"5%"},attrs:{type:"textarea",autosize:"",placeholder:"请输入备注内容"},model:{value:t.remark,callback:function(e){t.remark=e},expression:"remark"}})],1),t._v(" "),a("el-button",{staticStyle:{"margin-top":"20px"},attrs:{type:"success",size:"mini"},on:{click:function(e){t.submit(1)}}},[t._v("确认")]),t._v(" "),a("el-button",{staticStyle:{"margin-top":"20px","margin-left":"80px"},attrs:{type:"danger",size:"mini"},on:{click:t.reset}},[t._v("\n                        重置\n                    ")])],1)]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.tdshow,expression:"tdshow"}],staticClass:"bottom-right"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.inquirydata,"cell-style":t.showStyle,height:"250",border:""},on:{"cell-click":t.showDrug}},[a("el-table-column",{attrs:{type:"index",height:"100","show-overflow-tooltip":"",index:t.indexMethod}}),t._v(" "),a("el-table-column",{attrs:{prop:"itemName",height:"100","show-overflow-tooltip":"",label:"项目名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"source",height:"100","show-overflow-tooltip":"",label:"来源"}}),t._v(" "),a("el-table-column",{attrs:{prop:"message","show-overflow-tooltip":"",height:"100",label:"异常信息"}}),t._v(" "),a("el-table-column",{attrs:{prop:"severity","show-overflow-tooltip":"",height:"100",label:"异常等级"}}),t._v(" "),a("el-table-column",{attrs:{prop:"type","show-overflow-tooltip":"",height:"100",label:"审核类型"}})],1)],1),t._v(" "),t.dialogFormVisible?a("el-dialog",{attrs:{title:"疑问回复",visible:t.dialogFormVisible,width:"80%",top:"10px"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("clinicReply",{attrs:{copystatusmsg:t.inquirydata,childMsgData:t.childMsgData,presId:t.presId,userType:t.user},on:{hiddenReply:t.hiddenReply,getUEContent:t.getUEContent,getInquiry:t.getInquiry,fileSubmit:t.fileSubmit}})],1):t._e(),t._v(" "),t.drugVisible?a("el-dialog",{attrs:{title:"",visible:t.drugVisible,width:"80%",top:"10px"},on:{"update:visible":function(e){t.drugVisible=e}}},[a("drugshow",{attrs:{dragText:t.dragMsg}})],1):t._e()],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"special"},[this._v("异常信息："),e("i",[this._v("■")])])}]};var h=a("C7Lr")(d,u,!1,function(t){a("Q6Dt")},"data-v-1eba9f1b",null);e.default=h.exports}});