"use strict";(self["webpackChunkforest_resources_manage_application"]=self["webpackChunkforest_resources_manage_application"]||[]).push([[166],{2012:function(e,t,l){l.d(t,{bC:function(){return a},sE:function(){return n}});var o=l(7877);const a=e=>o.x1.get(`administrations/${e}/sub`),n=(e,t)=>o.x1.post(`administrations/${e}`,t)},2347:function(e,t,l){l.r(t),l.d(t,{default:function(){return V}});var o=l(3396),a=l(7139),n=l.p+"img/vietnam_map.9d96f589.png";const i=e=>((0,o.dD)("data-v-6acac832"),e=e(),(0,o.Cn)(),e),r={class:"m-5"},s={class:"custom-tree-node"},d=["onClick"],h=i((()=>(0,o._)("img",{class:"absolute top-0 bottom-0 right-0 left-[50rem] h-[38rem] w-[38%]",src:n},null,-1))),u={class:"grid grid-cols-6 gap-4"};function m(e,t,l,n,i,m){const c=(0,o.up)("font-awesome-icon"),f=(0,o.up)("el-input"),p=(0,o.up)("el-tree-v2"),g=(0,o.up)("el-card"),b=(0,o.up)("el-form-item"),v=(0,o.up)("el-option"),w=(0,o.up)("el-select"),V=(0,o.up)("el-form"),_=(0,o.up)("el-dialog"),C=(0,o.Q2)("loading");return(0,o.wg)(),(0,o.iD)("div",r,[(0,o._)("div",null,[(0,o.wy)(((0,o.wg)(),(0,o.j4)(g,{class:"administrations w-[50%] h-[35rem]"},{header:(0,o.w5)((()=>[(0,o.Wm)(c,{icon:["fas","magnifying-glass"],flip:"horizontal",size:"lg"}),(0,o.Wm)(f,{offset:2,modelValue:i.filterText,"onUpdate:modelValue":t[0]||(t[0]=e=>i.filterText=e),placeholder:"Tìm kiếm đơn vị hành chính theo tên hoặc mã",class:"form"},null,8,["modelValue"])])),default:(0,o.w5)((()=>[(0,o.Wm)(p,{"default-expand-all":"",ref:"treeRef",class:"el-tree",data:i.treeData,props:i.defaultProps,"item-size":50,"expand-on-click-node":!1,"filter-method":m.filterNode,height:500},{default:(0,o.w5)((({node:e,data:t})=>[(0,o._)("span",s,[(0,o._)("span",null,(0,a.zw)(`${e.label} (${t.code})`),1),(0,o._)("a",{class:"text-blue-500 ml-[80%] hover:text-blue-300",onClick:e=>m.showNode(t)},"Chi tiết",8,d)])])),_:1},8,["data","props","filter-method"])])),_:1})),[[C,i.loadingStatus]])]),h,(0,o.Wm)(_,{modelValue:i.dialogFormVisible,"onUpdate:modelValue":t[7]||(t[7]=e=>i.dialogFormVisible=e),title:"Thông tin đơn vị hành chính"},{footer:(0,o.w5)((()=>[(0,o._)("span",u,[(0,o._)("button",{class:"p-2 mr-3 col-start-5 font-sans font-bold text-white rounded-lg shadow-lg px-5 bg-[#839192] shadow-blue-100 hover:bg-opacity-90 hover:shadow-lg border transition hover:-translate-y-0.5 duration-150",onClick:t[5]||(t[5]=e=>i.dialogFormVisible=!1)}," Quay lại "),(0,o._)("button",{class:"p-2 col-start-6 font-sans font-bold text-white rounded-lg shadow-lg px-5 bg-blue-500 shadow-blue-100 hover:bg-opacity-90 hover:shadow-lg border transition hover:-translate-y-0.5 duration-150",onClick:t[6]||(t[6]=e=>m.updateBtn(this.$refs.ruleFormRef))}," Cập nhập ")])])),default:(0,o.w5)((()=>[(0,o.Wm)(V,{ref:"ruleFormRef",model:i.form,"status-icon":"",rules:i.rules},{default:(0,o.w5)((()=>[(0,o.Wm)(b,{label:"Mã",prop:"code"},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{modelValue:i.form.code,"onUpdate:modelValue":t[1]||(t[1]=e=>i.form.code=e),autocomplete:"off",disabled:""},null,8,["modelValue"])])),_:1}),(0,o.Wm)(b,{label:"Cấp Hành Chính",prop:"level"},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{modelValue:i.form.level,"onUpdate:modelValue":t[2]||(t[2]=e=>i.form.level=e),placeholder:"Chọn cấp hành chính"},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{label:"xã",value:"xã"}),(0,o.Wm)(v,{label:"thị trấn",value:"thị trấn"}),(0,o.Wm)(v,{label:"huyện",value:"huyện"}),(0,o.Wm)(v,{label:"thành phố",value:"thành phố"}),(0,o.Wm)(v,{label:"tỉnh",value:"tỉnh"})])),_:1},8,["modelValue"])])),_:1}),(0,o.Wm)(b,{label:"Tên",prop:"name"},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{modelValue:i.form.name,"onUpdate:modelValue":t[3]||(t[3]=e=>i.form.name=e),placeholder:""},null,8,["modelValue"])])),_:1}),(0,o.Wm)(b,{label:"Trực thuộc",prop:"sub"},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{modelValue:i.form.subCode,"onUpdate:modelValue":t[4]||(t[4]=e=>i.form.subCode=e),autocomplete:"off"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue"])])}var c=l(2012),f=l(1020),p=l(7322),g=l(1697),b={components:{Map:g.Z},data(){return{defaultProps:{value:"code",children:"children",label:"fullName"},filterText:"",treeData:[],dialogFormVisible:!1,form:{code:"",level:"",name:"",subCode:""},rules:{name:[{validator:this.checkAdministrationName,trigger:"change"},{validator:this.checkAdministrationSub,trigger:"change"}]},loadingStatus:!1}},watch:{filterText(e){this.$refs.treeRef.filter(e)}},computed:{...(0,f.Kc)(p.L)},methods:{filterNode(e,t){return console.log(t),!e||(t.fullName.includes(e)||t.code.includes(e))},showNode(e){this.form.code=e.code,this.form.name=e.name,this.form.level=e.levelName,this.form.subCode=e.subordinateCode,this.dialogFormVisible=!0},checkAdministrationName(e,t,l){if(!t)return l(new Error("Vui lòng nhập mã hành chính"));l()},checkAdministrationSub(e,t,l){if(!t)return l(new Error("Vui lòng trực thuộc"));l()},updateBtn(e){e&&e.validate((e=>{if(!e)return console.log("error submit!"),!1;this.$confirm("Cập nhập đơn vị hành chính này. Tiếp tục?","Xác nhận",{confirmButtonText:"OK",cancelButtonText:"Hủy",type:"warning"}).then((()=>{this.updateAdministration(),this.dialogFormVisible=!1})).catch((()=>{}))}))},deleteBtn(){this.$confirm("Xóa đơn vị hành chính này. Tiếp tục?","Cảnh báo",{confirmButtonText:"OK",cancelButtonText:"Hủy",type:"warning"}).then((()=>{this.dialogFormVisible=!1,this.$notify({title:"Thành công",message:"Xóa thành công",type:"success"})})).catch((()=>{}))},retrieveAdministrations(){this.loadingStatus=!0,(0,c.bC)(35).then((e=>{this.treeData=e.data,this.loadingStatus=!1})).catch((e=>console.log(e)))},updateAdministration(){this.loadingStatus=!0,(0,c.sE)(this.form.code,{name:this.form.name,subordinateCode:this.form.subCode,administrativeLevelName:this.form.level}).then((e=>{this.loadingStatus=!1,this.$notify({title:"Thành công",message:"Cập nhập thành công",type:"success"}),this.retrieveAdministrations()})).catch((e=>{this.loadingStatus=!1;let t="";try{t=e.response.data.messages,this.$notify({title:"Đã xảy ra lỗi",message:t,type:"error"})}catch(l){}console.log(e)}))}},created(){this.retrieveAdministrations()}},v=l(89);const w=(0,v.Z)(b,[["render",m],["__scopeId","data-v-6acac832"]]);var V=w}}]);
//# sourceMappingURL=166.7d12a1eb.js.map