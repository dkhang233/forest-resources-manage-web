(function(){"use strict";var e={7877:function(e,t,n){n.d(t,{Yo:function(){return i},v2:function(){return o},x1:function(){return a}});var r=n(1076);const o="https://forest-agys.onrender.com/api/v1/",a=r.Z.create({baseURL:"https://forest-agys.onrender.com/api/v1/",headers:{"ngrok-skip-browser-warning":"69420"},timeout:0}),i=r.Z.create({baseURL:"https://api.openstreetmap.org/api/0.6",timeout:0})},2900:function(e,t,n){n.d(t,{Bv:function(){return f},Cp:function(){return c},Mu:function(){return i},Nq:function(){return p},S2:function(){return s},bZ:function(){return u},c0:function(){return a},pj:function(){return d},r4:function(){return l},x4:function(){return o},yA:function(){return h}});var r=n(7877);const o=e=>r.x1.post("users/login",e),a=e=>r.x1.post("users/reset-password",e),i=e=>r.x1.post("users/verify-otp",e),c=e=>r.x1.put("users/change-password",e),u=(e,t)=>r.x1.put(`users/change-password/${e}`,t),s=()=>r.x1.get("users"),f=e=>r.x1.get(`users/${e}`),d=(e,t)=>r.x1.post(`users/admin/${e}`,t,{headers:{"Content-Type":"multipart/form-data"}}),p=(e,t)=>r.x1.post(`users/${e}`,t,{headers:{"Content-Type":"multipart/form-data"}}),l=e=>r.x1.post("users",e,{headers:{"Content-Type":"multipart/form-data"}}),h="https://forest-agys.onrender.com/api/v1/users/avatar/"},9706:function(e,t,n){var r=n(9242),o=n(3396);const a={id:"app"};function i(e,t,n,r,i,c){const u=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",a,[(0,o.Wm)(u)])}var c={name:"App"},u=n(89);const s=(0,u.Z)(c,[["render",i]]);var f=s,d=n(5269),p=n(1020),l=n(2483),h=n(7322);const m=[{path:"/main",component:()=>n.e(174).then(n.bind(n,7174)),children:[{path:"",component:()=>n.e(841).then(n.bind(n,1841))},{path:"profile",component:()=>n.e(899).then(n.bind(n,899))},{path:"access",component:()=>n.e(461).then(n.bind(n,3461))},{path:"account",component:()=>n.e(497).then(n.bind(n,9497))},{path:"administration",component:()=>Promise.all([n.e(697),n.e(166)]).then(n.bind(n,2347))},{path:"seedtype",component:()=>n.e(386).then(n.bind(n,6386))},{path:"seedfacility",component:()=>n.e(681).then(n.bind(n,5681))},{path:"woodtype",component:()=>n.e(523).then(n.bind(n,9523))},{path:"operation-form",component:()=>n.e(820).then(n.bind(n,820))},{path:"woodfacility",component:()=>Promise.all([n.e(765),n.e(884)]).then(n.bind(n,6884))},{path:"animaltype",component:()=>n.e(457).then(n.bind(n,8457))},{path:"animalfacility",component:()=>Promise.all([n.e(765),n.e(501)]).then(n.bind(n,1501))},{path:"map",component:()=>Promise.all([n.e(697),n.e(2)]).then(n.bind(n,6002))},{path:"change-pass",component:()=>n.e(414).then(n.bind(n,414))}]},{path:"/",component:()=>n.e(15).then(n.bind(n,15)),children:[{path:"",component:()=>n.e(555).then(n.bind(n,9555))},{path:"/register",component:()=>n.e(48).then(n.bind(n,9048))},{path:"forget-pass",component:()=>n.e(206).then(n.bind(n,9206))},{path:"authenticate-code",component:()=>n.e(691).then(n.bind(n,2104))},{path:"change-pass",component:()=>n.e(157).then(n.bind(n,9157))}]}],b=(0,l.p7)({history:(0,l.r5)(),routes:m});b.beforeEach((async(e,t)=>{(0,h.L)();if(!$cookies.get("username")&&"/"!==e.path&&"/forget-pass"!==e.path&&"/authenticate-code"!==e.path&&"/change-pass"!==e.path)return{path:"/"}})),b.beforeEach((async(e,t)=>"/main/access"!==e.path&&"/main/account"!==e.path||"admin"===$cookies.get("role")));var v=b,g=(n(4415),n(3056)),y=n(2748),w=n(3494),k=n(7749),O=n(8539),N=n(4551),j=n(8429),x=n(9772),C=n(2567);const _=(0,r.ri)(f);_.use(d.VueCookies);const P=(0,p.WB)();_.use(P),_.use(v),_.use(g.Z);for(const[E,A]of Object.entries(y))_.component(E,A);w.vI.add(O.mRB,N.vnX,j.NCV),_.component("l-map",x.iA),_.component("l-tile-layer",x.Hw),_.component("l-marker",x.$R),_.component("font-awesome-icon",k.GN),_.component("VueDatePicker",C.Z),_.mount("#app")},7322:function(e,t,n){n.d(t,{L:function(){return a}});var r=n(1020),o=n(2900);const a=(0,r.Q_)("user",{state:()=>({token:"a",username:"",firstName:"",lastName:"",email:"",avatar:"",address:"",birthDate:"",role:"",administration:null,active:!0}),getters:{administrativeName:e=>e.administration.code,administrativeLevelName:e=>e.administration.administrativeLevel.name},actions:{getInfor(){o.Bv($cookies.get("username")).then((e=>{this.username=e.data.username,this.firstName=e.data.firstName,this.lastName=e.data.lastName,this.email=e.data.email,this.avatar=e.data.avatar,this.address=e.data.address,this.birthDate=e.data.birthDate,this.role=e.data.role,this.administration=e.data.administrationCode,this.active=e.data.active,$cookies.set("role",this.role)})).catch((e=>console.log(e)))}}})}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],a=e[f][2];for(var c=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(c=!1,a<i&&(i=a));if(c){e.splice(f--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var f=e.length;f>0&&e[f-1][2]>a;f--)e[f]=e[f-1];e[f]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var a=Object.create(null);n.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var c=2&o&&r;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((function(e){i[e]=function(){return r[e]}}));return i["default"]=function(){return r},n.d(a,i),a}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{2:"23b2a813",15:"2cbd3003",48:"38ef53e0",93:"0784b995",153:"d19de3f6",157:"860788b6",166:"f0d9cb17",174:"ca4bfac3",206:"16485348",386:"fcade090",414:"da40bbe6",431:"2916b382",457:"35c99dc0",461:"7c533cb2",497:"99d3b738",501:"24d16b35",523:"c9bfa24f",555:"80ea8f59",681:"a008ea64",691:"b93871f6",697:"bfb0e00a",765:"b31d487f",820:"3558b3b7",841:"2e702b1f",858:"d1b7cb6e",884:"44392736",891:"26d44f1f",899:"eed178bb"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{166:"9c274738",174:"8a116983",386:"b4b9ccf5",501:"32faafb2",681:"b4b9ccf5",697:"6558efbc",820:"b4b9ccf5",884:"89612cdc"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="forest-resources-manage-application:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var c,u;if(void 0!==a)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var d=s[f];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){c=d;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+a),c.src=r),e[r]=[o];var p=function(t,n){c.onerror=c.onload=null,clearTimeout(l);var o=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(n)})),t)return t(n)},l=setTimeout(p.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=p.bind(null,c.onerror),c.onload=p.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(n){if(a.onerror=a.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=c,a.parentNode&&a.parentNode.removeChild(a),o(u)}};return a.onerror=a.onload=i,a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),c=n.p+i;if(t(i,c))return o();e(r,c,null,o,a)}))},o={143:0};n.f.miniCss=function(e,t){var n={166:1,174:1,386:1,501:1,681:1,697:1,820:1,884:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),c=new Error,u=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,o[1](c)}};n.l(i,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],c=r[1],u=r[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(u)var f=u(n)}for(t&&t(r);s<i.length;s++)a=i[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(f)},r=self["webpackChunkforest_resources_manage_application"]=self["webpackChunkforest_resources_manage_application"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(9706)}));r=n.O(r)})();
//# sourceMappingURL=app.8199b261.js.map