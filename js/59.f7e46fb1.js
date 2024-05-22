"use strict";(self["webpackChunksl_device_vue"]=self["webpackChunksl_device_vue"]||[]).push([[59],{6059:function(t,e,i){i.r(e),i.d(e,{default:function(){return c}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-container"},[e("van-form",{on:{submit:t.onSubmit}},[e("van-field",{attrs:{label:"工单步骤",readonly:""},model:{value:t.step.name,callback:function(e){t.$set(t.step,"name",e)},expression:"step.name"}}),e("van-field",{attrs:{type:"digit",required:"",label:"本次得分",readonly:t.isReadonly},model:{value:t.point,callback:function(e){t.point=e},expression:"point"}}),t.isReadonly?t._e():e("van-field",{attrs:{readonly:"",clickable:"",label:"保洁质量",value:t.value,placeholder:"请选择"},on:{click:function(e){t.showPicker=!0}}}),e("van-popup",{attrs:{round:"",position:"bottom"},model:{value:t.showPicker,callback:function(e){t.showPicker=e},expression:"showPicker"}},[e("van-picker",{attrs:{"show-toolbar":"",columns:t.columns},on:{cancel:function(e){t.showPicker=!1},confirm:t.onConfirm}})],1),e("van-field",{attrs:{rows:"5",autosize:"",required:"1"===t.report_flag,label:"质控报告",type:"textarea",maxlength:"200",placeholder:"请填写质控报告","show-word-limit":"",readonly:t.isReadonly},model:{value:t.note,callback:function(e){t.note=e},expression:"note"}}),e("van-cell",{attrs:{title:t.isReadonly?"图片列表":"上传图片",value:""}}),e("van-uploader",{staticStyle:{float:"left"},attrs:{multiple:"","max-count":5,"after-read":t.afterRead,"max-size":1048576,deletable:!t.isReadonly,"show-upload":!1},on:{oversize:t.onOversize},model:{value:t.fileList,callback:function(e){t.fileList=e},expression:"fileList"}}),t.isReadonly?t._e():e("div",{staticClass:"van-uploader__upload van-uploader__upload--readonly",staticStyle:{float:"left"},on:{click:function(e){return t.chooseImage({val:0})}}},[e("i",{staticClass:"van-icon van-icon-photograph van-uploader__upload-icon"})]),t.isReadonly?t._e():e("div",{staticStyle:{margin:"30px"}},[e("van-button",{attrs:{round:"",block:"",type:"info",icon:"checked","native-type":"submit"}},[t._v("保存")])],1),t.isReadonly&&0===t.fileList.length?e("van-empty",{attrs:{description:"暂无图片"}}):t._e()],1)],1)},o=[],a=(i(4114),{name:"QcStepInfo",data(){return{step_id:"",report_flag:null,step:[],point:"",value:"",showPicker:!1,columns:["地面有灰尘","地面有积水","被褥床单不整洁","垃圾未清理","符合标准","合格"],note:"",isReadonly:!1,fileList:[],show:!1}},async mounted(){if(this.step_id=this.$route.query.step_id,this.report_flag=this.$route.query.report_flag,this.step=await this.$http.post("/work-ticket/qc_step/get",{step_id:this.step_id}),1===this.step.state&&(this.isReadonly=!0,this.point=this.step.point,this.note=this.step.note,this.note||(this.note="暂无"),this.step.imagelist&&this.step.imagelist.length>0)){const t=[];this.step.imagelist.forEach((e=>{t.push({url:e,isImage:!0})})),this.fileList=t}},methods:{onConfirm(t){this.value=t,this.note?this.note=this.note+","+t:this.note=t,this.showPicker=!1},afterRead(t){},onOversize(t){this.$toast("文件大小不能超过 1024kb")},chooseImage(t){this.show=!1,this.$bridge.CollectPhoto(t.val).then((t=>{if(t){const e="data:image/png;base64,"+t;this.fileList.push({content:e,url:e,isImage:!0})}else this.$toast("未选择图片")}))},async onSubmit(){if(!(this.point+""))return void this.$toast("分数不能为空");if("1"===this.report_flag&&!this.note)return void this.$toast("质控报告不能为空");const t=await this.$dialog.confirm({title:"标题",message:"是否确认保存？"}).catch((()=>{}));if(!t)return;const e=[];this.fileList&&this.fileList.length>0&&this.fileList.map((t=>{t&&t.content&&e.push(t.content.substring(t.content.indexOf(",")+1))})),await this.$http.post("/work-ticket/qc_step/sign-in",{step_id:this.step_id,point:this.point,note:this.note,file_list:e}),await this.$toast.success("操作成功！"),await this.$router.back()}}}),n=a,l=i(845),r=(0,l.A)(n,s,o,!1,null,"1fc51cce",null),c=r.exports}}]);
//# sourceMappingURL=59.f7e46fb1.js.map