(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{6429:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return r(6052)}])},8494:function(e,s,r){"use strict";r.d(s,{Z:function(){return u}});var t=r(5893),i=r(7294),l=r(5675),n=r.n(l),a=r(1664),c=r.n(a),o={src:"/_next/static/media/logo.e118074b.svg",height:190,width:556,blurWidth:0,blurHeight:0},d=r(8193),u=()=>{let[e,s]=(0,i.useState)(!1),r=()=>{s(!e)};return(0,t.jsxs)("nav",{className:"fixed w-full h-24 shadow-xl bg-black",children:[(0,t.jsxs)("div",{className:"flex justify-between items-center h-full w-full px-16 2xl:px-16",children:[(0,t.jsx)(c(),{href:"/",children:(0,t.jsx)(n(),{src:o,alt:"logo",width:205,height:75,className:"cursor-pointer",priority:!0})}),(0,t.jsx)("div",{className:"hidden sm:flex",children:(0,t.jsxs)("ul",{className:"hidden sm:flex",children:[(0,t.jsx)(c(),{href:"/login",children:(0,t.jsx)("li",{className:"ml-10 uppercase hover:border-b text-xl text-white",children:"Login"})}),(0,t.jsx)(c(),{href:"/profile",children:(0,t.jsx)("li",{className:"ml-10 uppercase hover:border-b text-xl text-white",children:"Profile"})}),(0,t.jsx)(c(),{href:"/signup",children:(0,t.jsx)("li",{className:"ml-10 uppercase hover:border-b text-xl text-white",children:"Signup"})})]})}),(0,t.jsx)("div",{children:(0,t.jsx)("div",{onClick:r,className:"sm:hidden cursor-pointer pl-24 text-white",children:(0,t.jsx)(d.qTj,{size:25})})})]}),(0,t.jsxs)("div",{className:e?"fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500":"fixed left-[-100%] top-0 p-10 ease-in duration-500",children:[(0,t.jsx)("div",{className:"flex w-full items-center justify-end",children:(0,t.jsx)("div",{onClick:r,className:"cursor-pointer",children:(0,t.jsx)(d.oHP,{size:25})})}),(0,t.jsx)("div",{className:"flex-col py-4",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)(c(),{href:"/",children:(0,t.jsx)("li",{onClick:()=>s(!1),className:"py-4 cursor-pointer",children:"Home"})}),(0,t.jsx)(c(),{href:"/login",children:(0,t.jsx)("li",{onClick:()=>s(!1),className:"py-4 cursor-pointer",children:"Login"})}),(0,t.jsx)(c(),{href:"/profile",children:(0,t.jsx)("li",{onClick:()=>s(!1),className:"py-4 cursor-pointer",children:"Profile"})}),(0,t.jsx)(c(),{href:"/signup",children:(0,t.jsx)("li",{onClick:()=>s(!1),className:"py-4 cursor-pointer",children:"Sign Up"})})]})}),(0,t.jsxs)("div",{className:"flex flex-row justify-around pt-10 items-center",children:[(0,t.jsx)(d.Bpw,{size:30,className:"cursor-pointer"}),(0,t.jsx)(d.Wjh,{size:30,className:"cursor-pointer"}),(0,t.jsx)(d.h3E,{size:30,className:"cursor-pointer"})]})]}),(0,t.jsx)(c(),{href:"/",children:(0,t.jsx)(n(),{src:o,alt:"logo",width:205,height:75,className:"cursor-pointer pt-6",priority:!0})})]})}},306:function(e,s,r){"use strict";r.d(s,{IU:function(){return l},PR:function(){return a},x4:function(){return n}});var t=r(8173);let i="https://api-dev.quicklyinc.com",l=async e=>{try{let s=await t.Z.post("".concat(i,"/auth/signup"),e);return s.data}catch(e){throw e.response.data}},n=async e=>{try{let s=await t.Z.post("".concat(i,"/auth/login"),e);return s.data}catch(e){throw e.response.data}},a=async e=>{try{let s=await t.Z.get("".concat(i,"/auth/user"),{headers:{Authorization:"Bearer ".concat(e)}});return s.data}catch(e){throw e.response.data}}},6052:function(e,s,r){"use strict";r.r(s);var t=r(5893),i=r(7294),l=r(1163),n=r(8494),a=r(306);s.default=function(){let[e,s]=(0,i.useState)(""),[r,c]=(0,i.useState)(""),[o,d]=(0,i.useState)(""),[u,h]=(0,i.useState)(!1),x=(0,l.useRouter)();async function f(s){if(s.preventDefault(),e&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)&&r&&!(r.length<6)){d(""),h(!0),console.log("email",e),console.log("password",r);try{let s={email:e,password:r};console.log(s);let t=await (0,a.x4)(s),{token:i}=t;localStorage.setItem("jwttoken",i),x.push("/profile")}catch(e){console.error("Login error:",e),d("Invalid email address or password")}h(!1)}else d("Invalid email address or password")}return(0,t.jsxs)("div",{children:[(0,t.jsx)(n.Z,{}),(0,t.jsx)("div",{className:"flex justify-center items-center h-screen",children:(0,t.jsxs)("form",{className:"max-w-lg w-3/4 p-8 bg-white rounded shadow-md",onSubmit:f,children:[o&&(0,t.jsx)("div",{className:"text-red-500 mb-6",children:o}),(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Email"}),(0,t.jsx)("input",{autoFocus:!0,type:"email",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2",value:e,onChange:e=>s(e.target.value)})]}),(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Password"}),(0,t.jsx)("input",{type:"password",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2",value:r,onChange:e=>c(e.target.value)})]}),(0,t.jsx)("button",{type:"submit",className:"w-full py-2 px-4 bg-[#ff6661] hover:bg-[#ff6661]/75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-white rounded-md",children:"Login"})]})})]})}}},function(e){e.O(0,[617,865,972,774,888,179],function(){return e(e.s=6429)}),_N_E=e.O()}]);