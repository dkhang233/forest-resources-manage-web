"use strict";(self["webpackChunkforest_resources_manage_application"]=self["webpackChunkforest_resources_manage_application"]||[]).push([[69],{1069:function(e,t,o){o.r(t),o.d(t,{default:function(){return m}});var n=o(3396),s=o(9242);const l=(0,n._)("h2",{class:"font-mono mb-5 text-4xl font-bold"},"Nhập mã xác nhận",-1),a=(0,n._)("p",{class:"max-w-sm mb-12 font-sans font-light text-gray-600"},"Vui lòng nhập mã xác nhận để đặt lại mật khẩu",-1),r={class:"flex flex-col justify-end mt-6 space-y-6 md:flex-row md:space-y-0"},i=(0,n.uE)('<span>Tiếp tục</span><svg xmlns="http://www.w3.org/2000/svg" class="w-7" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="5" y1="12" x2="19" y2="12"></line><line x1="13" y1="18" x2="19" y2="12"></line><line x1="13" y1="6" x2="19" y2="12"></line></svg>',2),d=[i];function c(e,t,o,i,c,p){const f=(0,n.up)("el-form-item"),u=(0,n.up)("el-form");return(0,n.wg)(),(0,n.iD)(n.HY,null,[l,a,(0,n.Wm)(u,{model:c.form},{default:(0,n.w5)((()=>[(0,n.Wm)(f,null,{default:(0,n.w5)((()=>[(0,n.wy)((0,n._)("input",{type:"text",class:"w-full p-6 mb-3 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light",placeholder:"Mã xác nhận","onUpdate:modelValue":t[0]||(t[0]=e=>c.form.otp=e)},null,512),[[s.nr,c.form.otp]])])),_:1})])),_:1},8,["model"]),(0,n._)("div",r,[(0,n._)("button",{class:"md:w-auto flex items-center p-6 space-x-4 font-sans font-bold text-white rounded-md shadow-lg px-9 bg-blue-500 shadow-blue-100 hover:bg-opacity-90 hover:shadow-lg border transition hover:-translate-y-0.5 duration-150",onClick:t[1]||(t[1]=(...e)=>p.send&&p.send(...e))},d)])],64)}o(560);var p=o(2900),f={data(){return{form:{otp:""}}},methods:{send(){p.Mu(this.form).then((e=>{$cookies.set("otp",e.data),this.$router.push({path:"/change-pass"})})).catch((e=>{let t="";try{t=e.response.data.messages}catch(o){console.log(o)}this.$message({message:t,type:"error",title:"Đã xảy ra lỗi"})}))}}},u=o(89);const h=(0,u.Z)(f,[["render",c]]);var m=h}}]);
//# sourceMappingURL=69.1d5ca06f.js.map