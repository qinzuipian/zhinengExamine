webpackJsonp([13],{"0gYv":function(a,e){},DK7A:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_axios__=__webpack_require__("6sKG"),__WEBPACK_IMPORTED_MODULE_0_axios___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__),__WEBPACK_IMPORTED_MODULE_1_qs__=__webpack_require__("6iV/"),__WEBPACK_IMPORTED_MODULE_1_qs___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_qs__),echarts=__webpack_require__("P8yQ");__webpack_exports__.a={data:function(){return{foulData:[],ruleList:[],startTime:"",endTime:"",illegal:"",illegaloptions:[{value:"datazyzrenshu",label:"慢病总人次"},{value:"datazylfeiyong",label:"总医疗费用"},{value:"datarjfeiyong",label:"人均医疗费用"},{value:"dataypfeiyong",label:"药品费用"},{value:"datazffeiyong",label:"自费费用"},{value:"datakbjine",label:"可报金额"},{value:"databxjine",label:"报销金额"}],grade:"",gradeoptions:[{value:"##",label:"全部"},{value:"5",label:"省级"},{value:"4",label:"市级"},{value:"3",label:"县级"},{value:"2",label:"乡级"},{value:"1",label:"村级"},{value:"9",label:"其它"}],hospitalCode:"",hospitalCodes:[],typeName:"",alldataRemake:"",flag:"",areaCodeId:"",slow:!1,yiyuancode:""}},methods:{getname:function(){localStorage.setItem("hometext","【慢病补偿情况分析（地区 ）】"),1==localStorage.getItem("limited")?this.slow=!0:2==localStorage.getItem("limited")&&(this.slow=!1)},getSlow:function getSlow(){var _this2=this;this.flag=1;var _this=this,dom=document.getElementById("slowContainter"),Chart=echarts.init(dom);Chart.showLoading({text:"加载加载加载....."}),1==localStorage.getItem("limited")?this.yiyuancode=this.hospitalCode:2==localStorage.getItem("limited")&&(this.yiyuancode=localStorage.getItem("othercode")),__WEBPACK_IMPORTED_MODULE_0_axios___default()({method:"post",url:__WEBPACK_IMPORTED_MODULE_0_axios___default.a.PARK_API+"/xnhidc/backstage/loadPicData_manbing",data:__WEBPACK_IMPORTED_MODULE_1_qs___default.a.stringify({sdate:this.startTime,edate:this.endTime,yiyuandengji:this.grade,yiyuanCode:this.yiyuancode}),headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}}).then(function(res){if(res.data.success){Chart.hideLoading();var echarts_date=res.data.data;echarts.dispose(Chart),Chart=echarts.init(dom);for(var dataAxis=[],datazyzongtianshu=[],datarjzytianshu=[],datashoushurenci=[],datazyzrenshu=[],datazylfeiyong=[],datarjfeiyong=[],dataypfeiyong=[],datazffeiyong=[],datakbjine=[],databxjine=[],areaCode=[],i=0;i<echarts_date.length;i++)dataAxis[i]=echarts_date[i].DIQU,areaCode[i]=echarts_date[i].DIQUDAIMA,datazyzongtianshu[i]=echarts_date[i].住院总天数,datarjzytianshu[i]=echarts_date[i].人均住院天数,datashoushurenci[i]=echarts_date[i].手术人次,datazyzrenshu[i]=echarts_date[i].慢病总人数,datazylfeiyong[i]=echarts_date[i].总医疗费用,datarjfeiyong[i]=echarts_date[i].人均医疗费用,dataypfeiyong[i]=echarts_date[i].药品费用,datazffeiyong[i]=echarts_date[i].自费费用,datakbjine[i]=echarts_date[i].可报金额,databxjine[i]=echarts_date[i].报销金额;var dataRemake={};for(var name in echarts_date[0])dataRemake.dataAxis=dataAxis,dataRemake.datazyzongtianshu=datazyzongtianshu,dataRemake.datarjzytianshu=datarjzytianshu,dataRemake.datashoushurenci=datashoushurenci,dataRemake.datazyzrenshu=datazyzrenshu,dataRemake.datazylfeiyong=datazylfeiyong,dataRemake.datarjfeiyong=datarjfeiyong,dataRemake.dataypfeiyong=dataypfeiyong,dataRemake.datazffeiyong=datazffeiyong,dataRemake.datakbjine=datakbjine,dataRemake.databxjine=databxjine;_this2.alldataRemake=dataRemake;var option={color:["#2099aa"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:dataAxis,axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:_this2.typeName,type:"bar",stack:"住院天数",barWidth:"10%",data:eval(_this2.illegal)}]};Chart.setOption(option),Chart.on("click",function(a){_this.areaCodeId=areaCode[a.dataIndex],_this.areaLoading()})}else _this2.$message.error("请检查网络")})},areaLoading:function areaLoading(){var _this3=this;this.flag=2;var _this=this,dom=document.getElementById("slowContainter"),Chart=echarts.init(dom);Chart.showLoading({text:"加载加载加载....."}),__WEBPACK_IMPORTED_MODULE_0_axios___default()({method:"post",url:__WEBPACK_IMPORTED_MODULE_0_axios___default.a.PARK_API+"/xnhidc/backstage/loadPicData_manbing",data:__WEBPACK_IMPORTED_MODULE_1_qs___default.a.stringify({sdate:this.startTime,edate:this.endTime,yiyuandengji:this.grade,yiyuanCode:this.yiyuancode,areaCode:this.areaCodeId}),headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}}).then(function(res){if(res.data.success){Chart.hideLoading();var echarts_date=res.data.data;echarts.dispose(Chart),Chart=echarts.init(dom);for(var dataAxis=[],datazyzongtianshu=[],datarjzytianshu=[],datashoushurenci=[],datazyzrenshu=[],datazylfeiyong=[],datarjfeiyong=[],dataypfeiyong=[],datazffeiyong=[],datakbjine=[],databxjine=[],areaCode=[],i=0;i<echarts_date.length;i++)dataAxis[i]=echarts_date[i].DIQU,areaCode[i]=echarts_date[i].DIQUDAIMA,datazyzongtianshu[i]=echarts_date[i].住院总天数,datarjzytianshu[i]=echarts_date[i].人均住院天数,datashoushurenci[i]=echarts_date[i].手术人次,datazyzrenshu[i]=echarts_date[i].慢病总人数,datazylfeiyong[i]=echarts_date[i].总医疗费用,datarjfeiyong[i]=echarts_date[i].人均医疗费用,dataypfeiyong[i]=echarts_date[i].药品费用,datazffeiyong[i]=echarts_date[i].自费费用,datakbjine[i]=echarts_date[i].可报金额,databxjine[i]=echarts_date[i].报销金额;var dataRemake={};for(var name in echarts_date[0])dataRemake.dataAxis=dataAxis,dataRemake.datazyzongtianshu=datazyzongtianshu,dataRemake.datarjzytianshu=datarjzytianshu,dataRemake.datashoushurenci=datashoushurenci,dataRemake.datazyzrenshu=datazyzrenshu,dataRemake.datazylfeiyong=datazylfeiyong,dataRemake.datarjfeiyong=datarjfeiyong,dataRemake.dataypfeiyong=dataypfeiyong,dataRemake.datazffeiyong=datazffeiyong,dataRemake.datakbjine=datakbjine,dataRemake.databxjine=databxjine;_this3.alldataRemake=dataRemake;var option={color:["#83bff6"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:dataAxis,axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:_this3.typeName,type:"bar",barWidth:"10%",data:eval(_this3.illegal)}]};Chart.setOption(option),Chart.on("click",function(a){_this.townLoading(areaCode[a.dataIndex])})}else _this3.$message.error("请检查网络")})},townLoading:function townLoading(id){var _this4=this;console.log(id),this.flag=3;var dom=document.getElementById("slowContainter"),Chart=echarts.init(dom);Chart.showLoading({text:"加载加载加载....."});var _this=this;__WEBPACK_IMPORTED_MODULE_0_axios___default()({method:"post",url:__WEBPACK_IMPORTED_MODULE_0_axios___default.a.PARK_API+"/xnhidc/backstage/loadPicData_manbing",data:__WEBPACK_IMPORTED_MODULE_1_qs___default.a.stringify({sdate:this.startTime,edate:this.endTime,yiyuandengji:this.grade,yiyuanCode:this.yiyuancode,areaCode:id}),headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}}).then(function(res){if(res.data.success){Chart.hideLoading();var echarts_date=res.data.data;echarts.dispose(Chart),Chart=echarts.init(dom);for(var dataAxis=[],datazyzongtianshu=[],datarjzytianshu=[],datashoushurenci=[],datazyzrenshu=[],datazylfeiyong=[],datarjfeiyong=[],dataypfeiyong=[],datazffeiyong=[],datakbjine=[],databxjine=[],areaCode=[],i=0;i<echarts_date.length;i++)dataAxis[i]=echarts_date[i].DIQU,areaCode[i]=echarts_date[i].DIQUDAIMA,datazyzongtianshu[i]=echarts_date[i].住院总天数,datarjzytianshu[i]=echarts_date[i].人均住院天数,datashoushurenci[i]=echarts_date[i].手术人次,datazyzrenshu[i]=echarts_date[i].慢病总人数,datazylfeiyong[i]=echarts_date[i].总医疗费用,datarjfeiyong[i]=echarts_date[i].人均医疗费用,dataypfeiyong[i]=echarts_date[i].药品费用,datazffeiyong[i]=echarts_date[i].自费费用,datakbjine[i]=echarts_date[i].可报金额,databxjine[i]=echarts_date[i].报销金额;var dataRemake={};for(var name in echarts_date[0])dataRemake.dataAxis=dataAxis,dataRemake.datazyzongtianshu=datazyzongtianshu,dataRemake.datarjzytianshu=datarjzytianshu,dataRemake.datashoushurenci=datashoushurenci,dataRemake.datazyzrenshu=datazyzrenshu,dataRemake.datazylfeiyong=datazylfeiyong,dataRemake.datarjfeiyong=datarjfeiyong,dataRemake.dataypfeiyong=dataypfeiyong,dataRemake.datazffeiyong=datazffeiyong,dataRemake.datakbjine=datakbjine,dataRemake.databxjine=databxjine;_this4.alldataRemake=dataRemake;var option={color:["#83bff6"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:dataAxis,axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:_this4.typeName,type:"bar",data:eval(_this4.illegal)}]};Chart.setOption(option)}else _this4.$message.error("请检查网络")})},backto:function(){""==this.flag?this.$message.warning("亲！已经是首层了"):1==this.flag?this.$message.warning("已经是第一级了"):2==this.flag?(this.getSlow(),console.log(this.flag)):3==this.flag&&this.areaLoading()},Chartselect:function(a){console.log(a);var e;if(e=this.illegaloptions.find(function(e){return e.value===a}),this.typeName=e.label,void 0!==this.alldataRemake){var t=document.getElementById("slowContainter"),i=echarts.init(t);i.showLoading({text:"加载加载加载....."}),i.setOption({title:{text:this.typeName,x:"center"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:this.alldataRemake.dataAxis,axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:this.typeName,type:"bar",stack:"住院天数",data:this.alldataRemake[a]}]}),i.hideLoading()}},gradeSelect:function(){var a=this;__WEBPACK_IMPORTED_MODULE_0_axios___default()({method:"post",url:__WEBPACK_IMPORTED_MODULE_0_axios___default.a.PARK_API+"/xnhidc/tiaojian/getYiYuanlist",data:__WEBPACK_IMPORTED_MODULE_1_qs___default.a.stringify({xingzhengjibie:this.grade}),headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}}).then(function(e){console.log(e),e.data.success?a.hospitalCodes=e.data.data:a.$message.error("请检查网络！")})}},created:function(){this.getname()}}},y541:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t("DK7A"),d={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("div",{staticClass:"right-ctn-title"},[t("el-date-picker",{staticClass:"hosptDataSel",attrs:{size:"mini",type:"date","value-format":"yyyy-MM-dd",placeholder:"开始日期"},model:{value:a.startTime,callback:function(e){a.startTime=e},expression:"startTime"}}),a._v("-\n         "),t("el-date-picker",{staticClass:"hosptDataSel",attrs:{size:"mini",type:"date","value-format":"yyyy-MM-dd",placeholder:"结束日期"},model:{value:a.endTime,callback:function(e){a.endTime=e},expression:"endTime"}}),a._v(" "),t("el-select",{attrs:{size:"mini",placeholder:"请选择图表项目"},on:{change:a.Chartselect},model:{value:a.illegal,callback:function(e){a.illegal=e},expression:"illegal"}},a._l(a.illegaloptions,function(a){return t("el-option",{key:a.value,attrs:{label:a.label,value:a.value}})}),1),a._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:a.slow,expression:"slow"}]},[t("el-select",{attrs:{size:"mini",placeholder:"请选择医院行政级别"},on:{change:a.gradeSelect},model:{value:a.grade,callback:function(e){a.grade=e},expression:"grade"}},a._l(a.gradeoptions,function(a){return t("el-option",{key:a.value,attrs:{label:a.label,value:a.value}})}),1),a._v(" "),t("el-select",{attrs:{size:"mini",placeholder:"请选择医院"},model:{value:a.hospitalCode,callback:function(e){a.hospitalCode=e},expression:"hospitalCode"}},a._l(a.hospitalCodes,function(a){return t("el-option",{key:a.value,attrs:{label:a.TEXT,value:a.VALUE}})}),1)],1),a._v(" "),t("el-button",{staticStyle:{"margin-left":"5px"},attrs:{size:"mini",type:"warning"},on:{click:a.getSlow}},[t("i",{staticClass:"el-icon-search"}),a._v("\n             查询\n         ")])],1),a._v(" "),t("div",{staticClass:"chart"},[t("el-button",{staticStyle:{"margin-left":"5px"},attrs:{size:"mini",type:"warning"},on:{click:a.backto}},[t("i",{staticClass:"el-icon-back"})]),a._v(" "),t("div",{style:{width:"100%",height:"470px"},attrs:{id:"slowContainter"}})],1)])},staticRenderFns:[]};var s=function(a){t("0gYv")},n=t("C7Lr")(i.a,d,!1,s,"data-v-67a8f3d2",null);e.default=n.exports}});