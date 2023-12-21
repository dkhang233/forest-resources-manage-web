"use strict";(self["webpackChunkforest_resources_manage_application"]=self["webpackChunkforest_resources_manage_application"]||[]).push([[747],{4747:function(a,t,e){e.r(t),e.d(t,{default:function(){return S}});var i=e(3396);const l={class:"grid grid-cols-10 container bg-[url('@/assets/image/animal-facilities-bg.jpg')] bg-cover"},n={class:"col-start-2 col-span-8 grid grid-cols-10 rounded-[25px] bg-white mt-4 p-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"},o=(0,i._)("span",{class:"col-start-3 col-span-7 font-bold text-lg"},"Biểu đồ thống kê tổng số lượng động vật lưu trữ tại các cơ sở",-1),s={key:1,class:"mt-6 col-start-4 col-span-4 grid grid-cols-2 gap-3"},r=(0,i._)("span",null,"Bắt đầu",-1),h={class:""},m=(0,i._)("span",null,"Kết thúc",-1),c={key:2,class:"mt-6 col-start-4 col-span-4 grid grid-cols-2 gap-3"},d=(0,i._)("span",null,"Bắt đầu",-1),u={class:""},p=(0,i._)("span",null,"Kết thúc",-1),g={key:3,class:"mt-6 col-start-4 col-span-4 grid grid-cols-2 gap-3"},y=(0,i._)("span",null,"Bắt đầu",-1),f={class:""},b=(0,i._)("span",null,"Kết thúc",-1),w={class:"col-start-2 col-span-8 pt-[8rem] pb-[4rem]"},D={class:"col-start-1 col-span-4"},F={class:"col-start-5 col-span-6"},k=(0,i._)("span",{class:"text-[16px]"},"Số lượng động vật hiện tại của cơ sở",-1),x={class:"grid grid-cols-6"},C={class:"grid grid-cols-6"},_=["onClick"],T={class:"col-start-1 col-span-9"},V={class:"grid grid-cols-16 gap-4"},Q={class:"grid grid-cols-16 gap-4"},v=(0,i._)("span",null,"Tạo mới",-1);function B(a,t,e,B,A,U){const M=(0,i.up)("stacked-area-chart"),N=(0,i.up)("el-option"),q=(0,i.up)("el-select"),L=(0,i.up)("VueDatePicker"),W=(0,i.up)("el-table-column"),S=(0,i.up)("el-input"),Y=(0,i.up)("el-button"),$=(0,i.up)("el-table"),E=(0,i.up)("el-card"),H=(0,i.up)("el-form-item"),K=(0,i.up)("el-date-picker"),j=(0,i.up)("font-awesome-icon"),z=(0,i.up)("el-form"),O=(0,i.up)("el-dialog"),X=(0,i.up)("el-col"),I=(0,i.up)("el-row"),Z=(0,i.Q2)("loading");return(0,i.wy)(((0,i.wg)(),(0,i.iD)("div",l,[(0,i._)("div",n,[o,0!=A.chartData.size?((0,i.wg)(),(0,i.j4)(M,{key:0,class:"col-start-3 col-span-7 h-[500px] mt-5","chart-label":A.chartLabel,"chart-data":A.chartData},null,8,["chart-label","chart-data"])):(0,i.kq)("",!0),(0,i.Wm)(q,{modelValue:A.dataType,"onUpdate:modelValue":t[0]||(t[0]=a=>A.dataType=a),class:"mt-[3rem] mr-3 col-start-3 col-span-1",placeholder:"Select",size:"large"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(A.dataTypes,(a=>((0,i.wg)(),(0,i.j4)(N,{key:a.label,label:a.label,value:a.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),"month"==A.dataType?((0,i.wg)(),(0,i.iD)("div",s,[(0,i._)("div",null,[r,(0,i.Wm)(L,{modelValue:A.beginMonth,"onUpdate:modelValue":t[1]||(t[1]=a=>A.beginMonth=a),"month-picker":"",locale:"vi",cancelText:"Hủy",selectText:"Chọn"},null,8,["modelValue"])]),(0,i._)("div",h,[m,(0,i.Wm)(L,{modelValue:A.endMonth,"onUpdate:modelValue":t[2]||(t[2]=a=>A.endMonth=a),"month-picker":"",locale:"vi",cancelText:"Hủy",selectText:"Chọn"},null,8,["modelValue"])])])):(0,i.kq)("",!0),"quarter"==A.dataType?((0,i.wg)(),(0,i.iD)("div",c,[(0,i._)("div",null,[d,(0,i.Wm)(L,{modelValue:A.beginQuarter,"onUpdate:modelValue":t[3]||(t[3]=a=>A.beginQuarter=a),"quarter-picker":""},null,8,["modelValue"])]),(0,i._)("div",u,[p,(0,i.Wm)(L,{modelValue:A.endQuarter,"onUpdate:modelValue":t[4]||(t[4]=a=>A.endQuarter=a),"quarter-picker":"",locale:"vi",cancelText:"Hủy",selectText:"Chọn"},null,8,["modelValue"])])])):(0,i.kq)("",!0),"year"==A.dataType?((0,i.wg)(),(0,i.iD)("div",g,[(0,i._)("div",null,[y,(0,i.Wm)(L,{modelValue:A.beginYear,"onUpdate:modelValue":t[5]||(t[5]=a=>A.beginYear=a),"year-picker":"",locale:"vi",cancelText:"Hủy",selectText:"Chọn"},null,8,["modelValue"])]),(0,i._)("div",f,[b,(0,i.Wm)(L,{modelValue:A.endYear,"onUpdate:modelValue":t[6]||(t[6]=a=>A.endYear=a),"year-picker":"",locale:"vi",cancelText:"Hủy",selectText:"Chọn"},null,8,["modelValue"])])])):(0,i.kq)("",!0)]),(0,i._)("div",w,[(0,i.wy)(((0,i.wg)(),(0,i.j4)(I,null,{default:(0,i.w5)((()=>[(0,i.Wm)(X,{span:24,offset:0},{default:(0,i.w5)((()=>[(0,i.Wm)(E,{class:"h-[530px] rounded-[50px] mb-2",shadow:"always"},{default:(0,i.w5)((()=>[(0,i.Wm)($,{data:A.filterFacilitiesTable,class:"h-[530px] w-[93rem]",fit:""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(A.tableColumns,((a,t)=>((0,i.wg)(),(0,i.j4)(W,{key:t,label:a.title,prop:a.value,align:"center"},null,8,["label","prop"])))),128)),(0,i.Wm)(W,{"min-width":120,align:"center"},{header:(0,i.w5)((()=>[(0,i.Wm)(S,{modelValue:A.search,"onUpdate:modelValue":t[7]||(t[7]=a=>A.search=a),size:"large",placeholder:"Tìm kiếm theo tên"},null,8,["modelValue"])])),default:(0,i.w5)((a=>[(0,i.Wm)(Y,{onClick:t=>U.handleEdit(a.$index,a.row)},{default:(0,i.w5)((()=>[(0,i.Uk)("Chi tiết")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])])),_:1}),(0,i.Wm)(O,{class:"block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700",top:"8vh",modelValue:A.dialogFormVisible,"onUpdate:modelValue":t[22]||(t[22]=a=>A.dialogFormVisible=a),title:U.formTitle,"before-close":U.handleCancel},{footer:(0,i.w5)((()=>[(0,i._)("span",Q,["update"==A.formType?((0,i.wg)(),(0,i.iD)("button",{key:0,class:"p-2 mr-3 font-sans font-bold text-sm text-white rounded-lg shadow-lg px-5 bg-red-500 shadow-blue-100 hover:bg-opacity-90 hover:shadow-lg border transition hover:-translate-y-0.5 duration-150",onClick:t[19]||(t[19]=a=>A.dialogFormVisible=!1)}," Xóa ")):(0,i.kq)("",!0),"update"==A.formType?((0,i.wg)(),(0,i.iD)("button",{key:1,class:"p-2 col-start-12 font-sans font-bold text-sm text-white rounded-lg shadow-lg px-5 bg-blue-500 shadow-blue-100 hover:bg-opacity-90 hover:shadow-lg border transition hover:-translate-y-0.5 duration-150",onClick:t[20]||(t[20]=a=>U.handleUpdate(this.$refs.facilitiesForm))}," Cập nhập ")):(0,i.kq)("",!0),"create"==A.formType?((0,i.wg)(),(0,i.iD)("button",{key:2,class:"p-2 col-start-12 font-sans font-bold text-sm text-white rounded-lg shadow-lg px-5 bg-blue-500 shadow-blue-100 hover:bg-opacity-90 hover:shadow-lg border transition hover:-translate-y-0.5 duration-150",onClick:t[21]||(t[21]=a=>U.handleCreateAnimalFacility(this.$refs.facilitiesForm))}," Tạo mới ")):(0,i.kq)("",!0)])])),default:(0,i.w5)((()=>[(0,i.Wm)(z,{class:"grid grid-cols-10 gap-10",ref:"facilitiesForm",model:A.form,"status-icon":"",rules:A.rules,size:"default","label-position":"top"},{default:(0,i.w5)((()=>[(0,i._)("div",D,[(0,i.Wm)(H,{label:"Mã",prop:"code"},{default:(0,i.w5)((()=>[(0,i.Wm)(S,{modelValue:A.form.code,"onUpdate:modelValue":t[8]||(t[8]=a=>A.form.code=a)},null,8,["modelValue"])])),_:1}),(0,i.Wm)(H,{label:"Tên cơ sở",prop:"name"},{default:(0,i.w5)((()=>[(0,i.Wm)(S,{modelValue:A.form.name,"onUpdate:modelValue":t[9]||(t[9]=a=>A.form.name=a)},null,8,["modelValue"])])),_:1}),(0,i.Wm)(H,{label:"Sức chứa",prop:"capacity"},{default:(0,i.w5)((()=>[(0,i.Wm)(S,{modelValue:A.form.capacity,"onUpdate:modelValue":t[10]||(t[10]=a=>A.form.capacity=a)},null,8,["modelValue"])])),_:1}),(0,i.Wm)(H,{label:"Ngày thành lập",prop:"date"},{default:(0,i.w5)((()=>[(0,i.Wm)(K,{modelValue:A.form.date,"onUpdate:modelValue":t[11]||(t[11]=a=>A.form.date=a),type:"date",placeholder:"Chọn ngày thành lập",size:"default"},null,8,["modelValue"])])),_:1}),(0,i.Wm)(H,{label:"Trực thuộc",prop:"administrationName"},{default:(0,i.w5)((()=>[(0,i.Wm)(S,{modelValue:A.form.administrationName,"onUpdate:modelValue":t[12]||(t[12]=a=>A.form.administrationName=a)},null,8,["modelValue"])])),_:1})]),(0,i._)("div",F,[k,(0,i.Wm)($,{class:"mt-2",data:U.animalQuantityTable,height:"300",border:""},{default:(0,i.w5)((()=>[(0,i.Wm)(W,{prop:"animalName",label:"Tên động vật",align:"center"}),(0,i.Wm)(W,{prop:"quantity",label:"Số lượng",align:"center"}),(0,i.Wm)(W,{"min-width":90,align:"center"},{header:(0,i.w5)((()=>[(0,i._)("div",x,[(0,i._)("button",{class:"px-3 py-2 col-span-6 col-start-1 font-sans font-bold text-sm text-white rounded-lg shadow-lg bg-blue-500 shadow-blue-100 hover:bg-opacity-90 hover:shadow-lg border transition hover:-translate-y-0.5 duration-150",onClick:t[13]||(t[13]=(...a)=>U.handleClickCreateAnimalQuantity&&U.handleClickCreateAnimalQuantity(...a))},[(0,i.Wm)(j,{class:"pr-1",icon:["fas","plus"]}),(0,i.Uk)(" Thêm mới ")])])])),default:(0,i.w5)((a=>[(0,i._)("div",C,[(0,i._)("button",{class:"border-2 px-2 py-1 col-span-4 col-start-2 hover:text-blue-400 hover:border-blue-400",onClick:t=>U.handleEditAnimalQuantity(a.$index,a.row)},"Chi tiết",8,_)])])),_:1})])),_:1},8,["data"])])])),_:1},8,["model","rules"]),(0,i.Wm)(O,{class:"w-[25rem] rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700",modelValue:A.dialogAnimalFormVisible,"onUpdate:modelValue":t[18]||(t[18]=a=>A.dialogAnimalFormVisible=a),title:"Số lượng động vật","before-close":U.handleCancelInAnimalTable},{footer:(0,i.w5)((()=>[(0,i._)("span",V,["update"==A.animalFormType?((0,i.wg)(),(0,i.iD)("button",{key:0,class:"p-2 col-start-12 font-sans font-bold text-sm text-white rounded-lg shadow-lg px-5 bg-blue-500 shadow-blue-100 hover:bg-opacity-90 hover:shadow-lg border transition hover:-translate-y-0.5 duration-150",onClick:t[16]||(t[16]=a=>U.handleUpdateInAnimalTable(this.$refs.animalQuantityForm))}," Cập nhập ")):(0,i.kq)("",!0),"create"==A.animalFormType?((0,i.wg)(),(0,i.iD)("button",{key:1,class:"p-2 col-start-12 font-sans font-bold text-sm text-white rounded-lg shadow-lg px-5 bg-blue-500 shadow-blue-100 hover:bg-opacity-90 hover:shadow-lg border transition hover:-translate-y-0.5 duration-150",onClick:t[17]||(t[17]=a=>U.handleCreateAnimalQuantity(this.$refs.animalQuantityForm))}," Tạo mới ")):(0,i.kq)("",!0)])])),default:(0,i.w5)((()=>[(0,i.Wm)(z,{class:"grid grid-cols-10 gap-10",ref:"animalQuantityForm",model:A.animalForm,"status-icon":"",rules:A.rules,size:"default","label-position":"top"},{default:(0,i.w5)((()=>[(0,i._)("div",T,[(0,i.Wm)(H,{label:"Tên động vật",prop:"animalName"},{default:(0,i.w5)((()=>[(0,i.Wm)(S,{modelValue:A.animalForm.animalName,"onUpdate:modelValue":t[14]||(t[14]=a=>A.animalForm.animalName=a)},null,8,["modelValue"])])),_:1}),(0,i.Wm)(H,{label:"Số lượng",prop:"quantity"},{default:(0,i.w5)((()=>[(0,i.Wm)(S,{modelValue:A.animalForm.quantity,"onUpdate:modelValue":t[15]||(t[15]=a=>A.animalForm.quantity=a)},null,8,["modelValue"])])),_:1})])])),_:1},8,["model","rules"])])),_:1},8,["modelValue","before-close"])])),_:1},8,["modelValue","title","before-close"])])),_:1})])),_:1})),[[Z,A.loadingStatus]]),(0,i.Wm)(I,null,{default:(0,i.w5)((()=>[(0,i.Wm)(X,{offset:2},{default:(0,i.w5)((()=>[(0,i._)("button",{class:"w-full md:w-auto flex justify-center items-center p-3 mt-3 ml-4 space-x-4 font-sans font-bold text-white rounded-[10px] shadow-lg px-9 bg-blue-500 shadow-blue-100 hover:bg-opacity-90 hover:shadow-lg border transition hover:-translate-y-0.5 duration-150",onClick:t[23]||(t[23]=(...a)=>U.handleClickCreateAnimalFacility&&U.handleClickCreateAnimalFacility(...a))},[(0,i.Wm)(j,{icon:["fas","plus"],size:"lg"}),v])])),_:1})])),_:1})])])),[[Z,A.loadingStatus]])}e(560);var A=e(9343),U=e(5039),M=e(3881),N=e(7514),q={name:"animalFacility",components:{StackedAreaChart:A.Z},data(){return{loadingStatus:!1,quarter:(0,M.Z)(new Date),beginMonth:{month:(new Date).getMonth()-6,year:(new Date).getFullYear()},endMonth:{month:(new Date).getMonth()-1,year:(new Date).getFullYear()},beginQuarter:new Date("2023-01-01"),endQuarter:new Date,beginYear:(new Date).getFullYear()-1,endYear:(new Date).getFullYear(),chartLabel:[],chartData:new Map,chartLabelCopy:[],chartDataCopy:new Map,dataTypes:[{value:"month",label:"Tháng"},{value:"quarter",label:"Quý"},{value:"year",label:"Năm"}],dataType:"month",search:"",tableColumns:[{title:"Tên cơ sở",value:"name"},{title:"Ngày thành lập",value:"date"},{title:"Sức chứa",value:"capacity"},{title:"Trực thuộc",value:"administration[name]"}],facilitiesTable:[],filterFacilitiesTable:[],animalQuantityData:null,dialogFormVisible:!1,dialogAnimalFormVisible:!1,form:{code:"",name:"",date:"",capacity:"",administrationName:""},formBackUp:null,formType:"update",animalForm:{animalName:"",quantity:""},animalFormBackUp:null,animalFormType:"update",rules:{}}},computed:{formatBeginMonth(){if(null!=this.beginMonth){let a=this.beginMonth.month<9?"0"+(this.beginMonth.month+1):this.beginMonth.month+1,t=this.beginMonth.year+"-"+a+"-01";return t}},formatEndMonth(){if(null!=this.endMonth){let a=this.endMonth.month<9?"0"+(this.endMonth.month+1):this.endMonth.month+1,t=this.endMonth.year+"-"+a+"-01";return t}},formatBeginQuarter(){if(null!=this.beginQuarter){let a=this.beginQuarter.getMonth()<9?"0"+(this.beginQuarter.getMonth()+1):this.beginQuarter.getMonth()+1,t=this.beginQuarter.getFullYear()+"-"+a+"-01";return t}},formatEndQuarter(){if(null!=this.endQuarter){let a=this.endQuarter.getMonth()<9?"0"+(this.endQuarter.getMonth()+1):this.endQuarter.getMonth()+1,t=this.endQuarter.getFullYear()+"-"+a+"-01";return t}},formTitle(){return"update"==this.formType?"Cập nhập":"Tạo mới"},animalQuantityTable(){if(null!=this.animalQuantityData&&""!=this.form.code)return this.animalQuantityData.get(this.form.code)}},watch:{dataType(a){"month"==a?this.formatBeginMonth&&null!=this.formatEndMonth&&(this.chartLabelCopy=this.chartLabel,this.chartLabel=[],this.chartDataCopy=this.chartData,this.chartData.clear(),this.setupAnimalQuantityDataByMonth(this.formatBeginMonth,this.formatEndMonth)):"quarter"==a?this.formatBeginQuarter&&null!=this.formatEndQuarter&&(this.chartLabelCopy=this.chartLabel,this.chartLabel=[],this.chartDataCopy=this.chartData,this.chartData.clear(),this.setupAnimalQuantityDataByQuarter(this.formatBeginQuarter,this.formatEndQuarter)):this.beginYear&&null!=this.endYear&&(this.chartLabelCopy=this.chartLabel,this.chartLabel=[],this.chartDataCopy=this.chartData,this.chartData.clear(),this.setupAnimalQuantityDataByYear(this.beginYear,this.endYear))},formatBeginMonth(a){null!=a&&(this.chartLabelCopy=this.chartLabel,this.chartLabel=[],this.chartDataCopy=this.chartData,this.chartData.clear(),this.setupAnimalQuantityDataByMonth(a,this.formatEndMonth))},formatEndMonth(a){null!=a&&(this.chartLabelCopy=this.chartLabel,this.chartLabel=[],this.chartDataCopy=this.chartData,this.chartData.clear(),this.setupAnimalQuantityDataByMonth(this.formatBeginMonth,a))},formatBeginQuarter(a){null!=a&&(this.chartLabelCopy=this.chartLabel,this.chartLabel=[],this.chartDataCopy=this.chartData,this.chartData.clear(),this.setupAnimalQuantityDataByQuarter(a,this.formatEndQuarter))},formatEndQuarter(a){null!=a&&(this.chartLabelCopy=this.chartLabel,this.chartLabel=[],this.chartDataCopy=this.chartData,this.chartData.clear(),this.setupAnimalQuantityDataByQuarter(this.formatBeginQuarter,a))},beginYear(a){null!=a&&(this.chartLabelCopy=this.chartLabel,this.chartLabel=[],this.chartDataCopy=this.chartData,this.chartData.clear(),this.setupAnimalQuantityDataByYear(a,this.endYear)),console.log(a)},endYear(a){null!=a&&(this.chartLabelCopy=this.chartLabel,this.chartLabel=[],this.chartDataCopy=this.chartData,this.chartData.clear(),this.setupAnimalQuantityDataByYear(this.beginYear,a)),console.log(a)}},methods:{setupAnimalQuantityDataByMonth(a,t){this.loadingStatus=!0,U.LJ(a,t).then((a=>{for(let t=0;t<=a.data.length-1;t++){let e=a.data[t].date.slice(0,7);this.chartLabel.push(e);for(let i=0;i<a.data[t].data.length;i++)if(this.chartData.has(a.data[t].data[i].facilitiesName)){let e=this.chartData.get(a.data[t].data[i].facilitiesName);e.push(a.data[t].data[i].quantity),this.chartData.set(a.data[t].data[i].facilitiesName,e)}else this.chartData.set(a.data[t].data[i].facilitiesName,[a.data[t].data[i].quantity])}this.loadingStatus=!1})).catch((a=>{this.loadingStatus=!1,this.chartData=this.chartDataCopy,this.chartLabel=this.chartLabelCopy;let t="";try{t=a.response.data.messages}catch(a){console.log(a)}this.$notify({title:"Đã xảy ra lỗi",message:t,type:"error"})}))},setupAnimalQuantityDataByQuarter(a,t){this.loadingStatus=!0,U.TC(a,t).then((a=>{for(let t=0;t<=a.data.length-1;t++){let e=a.data[t].quarter;this.chartLabel.push(e);for(let i=0;i<a.data[t].data.length;i++)if(this.chartData.has(a.data[t].data[i].facilitiesName)){let e=this.chartData.get(a.data[t].data[i].facilitiesName);e.push(a.data[t].data[i].quantity),this.chartData.set(a.data[t].data[i].facilitiesName,e)}else this.chartData.set(a.data[t].data[i].facilitiesName,[a.data[t].data[i].quantity])}this.loadingStatus=!1})).catch((a=>{this.loadingStatus=!1,this.chartData=this.chartDataCopy,this.chartLabel=this.chartLabelCopy;let t="";try{t=a.response.data.messages}catch(a){console.log(a)}this.$notify({title:"Đã xảy ra lỗi",message:t,type:"error"})}))},setupAnimalQuantityDataByYear(a,t){this.loadingStatus=!0,U.Hw(a,t).then((a=>{for(let t=0;t<=a.data.length-1;t++){let e=a.data[t].year;this.chartLabel.push(e);for(let i=0;i<a.data[t].data.length;i++)if(this.chartData.has(a.data[t].data[i].facilitiesName)){let e=this.chartData.get(a.data[t].data[i].facilitiesName);e.push(a.data[t].data[i].quantity),this.chartData.set(a.data[t].data[i].facilitiesName,e)}else this.chartData.set(a.data[t].data[i].facilitiesName,[a.data[t].data[i].quantity])}this.loadingStatus=!1})).catch((a=>{this.loadingStatus=!1,this.chartData=this.chartDataCopy,this.chartLabel=this.chartLabelCopy;let t="";try{t=a.response.data.messages}catch(a){console.log(a)}this.$notify({title:"Đã xảy ra lỗi",message:t,type:"error"})}))},formatQuarter(a){return console.log(a),(0,N.Z)(a,"QQQ")},setupAnimalFacilities(){this.loadingStatus=!0,U.Jz().then((a=>{this.facilitiesTable=a.data,this.filterFacilitiesTable=this.facilitiesTable,this.loadingStatus=!1})).catch((a=>{console.log(a)}))},setupAnimalQuantity(){this.loadingStatus=!0,U.$y().then((a=>{this.animalQuantityData=new Map(Object.entries(a.data)),console.log(this.animalQuantityTable),this.loadingStatus=!1})).catch((a=>{}))},handleEdit(a,t){null!=this.$refs.facilitiesForm&&this.$refs.facilitiesForm.clearValidate(),this.formType="update",this.form=t,this.form.administrationName=t.administration.name,this.formBackUp={code:this.form.code,name:this.form.name,date:this.form.date,capacity:this.form.capacity,administrationName:this.form.administrationName},this.dialogFormVisible=!0},handleEditAnimalQuantity(a,t){null!=this.$refs.animalQuantityForm&&this.$refs.animalQuantityForm.clearValidate(),this.animalForm=t,this.animalFormBackUp={animalName:this.animalForm.animalName,quantity:this.animalForm.quantity},this.dialogAnimalFormVisible=!0},handleUpdate(){},handleUpdateInAnimalTable(a){a&&a.validate((a=>{if(!a)return!1;this.$confirm("Cập nhập thông tin này. Tiếp tục?","Xác nhận",{confirmButtonText:"OK",cancelButtonText:"Hủy",type:"warning"}).then((()=>{this.loadingStatus=!0;let a={facilitiesName:this.form.name,animalName:this.animalForm.animalName,quantity:this.animalForm.quantity};U.qq(a).then((a=>{this.loadingStatus=!1,this.$notify({title:"Thành công",message:"Cập nhập thành công",type:"success"}),this.setupAnimalQuantity()})).catch((a=>{this.loadingStatus=!1;try{this.$notify({title:"Đã xảy ra lỗi",message:a.response.data.messages,type:"error"}),console.log(a.message)}catch(t){console.log(t)}})),this.dialogAnimalFormVisible=!1})).catch((a=>{console.log(a)}))}))},handleCancel(){null!=this.form&&null!=this.formBackUp&&(this.form.code==this.formBackUp.code&&this.form.name==this.formBackUp.name&&this.form.date==this.formBackUp.date&&this.form.capacity==this.formBackUp.capacity&&this.form.administrationName==this.formBackUp.administrationName?this.dialogFormVisible=!1:this.$confirm("Hủy bỏ thay đổi. Tiếp tục?","Xác nhận",{confirmButtonText:"OK",cancelButtonText:"Hủy",type:"warning"}).then((()=>{null!=this.formBackUp&&(this.form.code=this.formBackUp.code,this.form.name=this.formBackUp.name,this.form.date=this.formBackUp.date,this.form.capacity=this.formBackUp.capacity,this.form.administrationName=this.formBackUp.administrationName),this.dialogFormVisible=!1})).catch((()=>{}))),this.dialogFormVisible=!1},handleCancelInAnimalTable(){null!=this.animalFormBackUp&&null!=this.animalForm&&(this.animalForm.animalName==this.animalFormBackUp.animalName&&this.animalForm.quantity==this.animalFormBackUp.quantity?this.dialogAnimalFormVisible=!1:this.$confirm("Hủy bỏ thay đổi. Tiếp tục?","Xác nhận",{confirmButtonText:"OK",cancelButtonText:"Hủy",type:"warning"}).then((()=>{null!=this.animalFormBackUp&&(this.animalForm.animalName=this.animalFormBackUp.animalName,this.animalForm.quantity=this.animalFormBackUp.quantity),this.dialogAnimalFormVisible=!1})).catch((()=>{}))),this.dialogAnimalFormVisible=!1},handleClickCreateAnimalFacility(){this.formType="create",this.resetFormData(),this.formBackUp=this.forthí,this.dialogFormVisible=!0},handleCreateAnimalFacility(a){a&&a.validate((a=>{a&&this.$confirm("Cập nhập thông tin này. Tiếp tục?","Xác nhận",{confirmButtonText:"OK",cancelButtonText:"Hủy",type:"warning"}).then((()=>{this.loadingStatus=!0;let a={code:this.form.code,name:this.form.name,date:Date.now(),capacity:this.form.capacity,adminstrationCode:this.form.administrationName,detail:""};U.hI(a).then((a=>{this.dialogFormVisible=!1,this.$notify({title:"Thành công",type:"success",message:"Tạo mới thành công"}),this.setupAnimalFacilities()})).catch((a=>{this.loadingStatus=!1;try{let t="";t=a.response.data.messages,this.$notify({title:"Đã xảy ra lỗi",type:"error",message:t})}catch(t){}}))})).catch((()=>{}))}))},handleClickCreateAnimalQuantity(){this.animalFormType="create",this.resetAnimalFormData(),this.formBackUp=this.form,this.dialogAnimalFormVisible=!0},handleCreateAnimalQuantity(a){a&&a.validate((a=>{if(!a)return!1;this.$confirm("Cập nhập thông tin này. Tiếp tục?","Xác nhận",{confirmButtonText:"OK",cancelButtonText:"Hủy",type:"warning"}).then((()=>{this.loadingStatus=!0;let a={codeASF:this.form.code,nameAS:this.animalForm.animalName,quantity:this.animalForm.quantity,date:Date.now()};U.jD(a).then((a=>{this.setupAnimalQuantity()})).catch((a=>{this.loadingStatus=!1;let t="";try{t=a.response.data.messages}catch(a){console.log(a)}this.$notify({title:"Đã xảy ra lỗi",message:t,type:"error"})}))})).catch((a=>{console.log(a)}))}))},resetFormData(){this.form.administrationName="",this.form.capacity=0,this.form.code="",this.form.date="",this.form.name=""},resetAnimalFormData(){this.animalForm.animalName="",this.animalForm.quantity=1}},created(){this.setupAnimalQuantityDataByMonth(this.formatBeginMonth,this.formatEndMonth),this.setupAnimalFacilities(),this.setupAnimalQuantity()}},L=e(89);const W=(0,L.Z)(q,[["render",B]]);var S=W}}]);
//# sourceMappingURL=747.ceb8018f.js.map