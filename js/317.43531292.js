"use strict";(self["webpackChunksl_device_vue"]=self["webpackChunksl_device_vue"]||[]).push([[317],{2317:function(t,i,e){e.r(i),e.d(i,{default:function(){return p}});var s=function(){var t=this,i=t._self._c;return i("div",{staticClass:"app-container"},[i("van-steps",{attrs:{direction:"vertical",active:t.active}},t._l(t.list,(function(e,s){return i("van-step",{key:s},[i("h3",[t._v(t._s(e.name))]),i("p",{staticClass:"row"},[i("span",[t._v("计划 "+t._s(e.plan_start_show)+" "),"1"==e.state?void 0:t._e(),t._v(" 签到 "+t._s(e.sign_time_show))],2),0==e.state&&"2"===t.plan_type?i("van-button",{staticStyle:{width:"70px"},attrs:{round:"",type:"primary",size:"small",icon:"edit"},on:{click:function(i){return t.toSign(e,s)}}},[t._v("签字")]):0==e.state&&"1"===t.plan_type?i("van-button",{staticStyle:{width:"70px"},attrs:{round:"",type:"primary",size:"small",icon:"scan"},on:{click:function(i){return t.toSign(e,s)}}},[t._v("签到")]):i("van-button",{staticStyle:{width:"70px"},attrs:{round:"",type:"primary",size:"small",icon:"eye-o"},on:{click:function(i){return t.toViewReport(e)}}},[t._v("查看")])],1)])})),1)],1)},a=[],n=(e(4114),{name:"QcStepList",data(){return{active:0,plan_type:"",ticket_id:"",report_flag:null,scan_flag:null,sign_mode:null,list:[]}},async mounted(){this.plan_type=this.$route.query.plan_type,this.ticket_id=this.$route.query.ticket_id,this.report_flag=this.$route.query.report_flag,this.scan_flag=this.$route.query.scan_flag,this.sign_mode=this.$route.query.sign_mode,await this.getList()},methods:{async getList(){const t=await this.$http.post("/work-ticket/qc_step/list",{ticket_id:this.ticket_id});let i=!1;for(let e=0;e<t.length;e++)if(0===t[e].state){i=!0,this.active=e;break}this.list=t,i||(this.active=-1)},async toSign(t,i){if("1"===this.sign_mode&&i>0&&0===this.list[i-1].state)this.$toast("只能顺序签到");else if("2"!==this.plan_type){if("1"===this.scan_flag){const i=await this.$bridge.Scan();await this.$http.post("/work-ticket/qc_step/check-qrcode",{step_id:t.id,qrcode:i})}await this.$router.push({path:"/qc/step-info",query:{step_id:t.id,report_flag:this.report_flag}})}else await this.$router.push({path:"/transport-qc/sign",query:{step_id:t.id,report_flag:this.report_flag}})},toViewReport(t){this.$router.push({path:"/qc/step-info",query:{step_id:t.id}})}}}),r=n,o=e(845),c=(0,o.A)(r,s,a,!1,null,"58b5c6c0",null),p=c.exports}}]);
//# sourceMappingURL=317.43531292.js.map