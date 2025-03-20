"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[902],{5573:(e,t,l)=>{l.d(t,{A:()=>i});var s=l(5155);l(2115);var a=l(3463);let i=e=>{let{visibleOn:t="all",backgroundImage:l,zIndex:i=-10,className:r}=e;return(0,s.jsx)("div",{className:(0,a.A)("w-full h-full absolute left-0 top-0 bg-overlay",{"mobile-only":"lg:hidden block","desktop-only":"hidden lg:block",all:"block"}[t],r),style:{backgroundImage:l?"url(".concat(l,")"):void 0,zIndex:i}})}},6911:(e,t,l)=>{l.d(t,{A:()=>n});var s=l(5155),a=l(2115),i=l(3463);let r=a.forwardRef((e,t)=>{let{label:l,children:a,startIcon:r,endIcon:n,icon:o,buttonType:d="solid",size:c="sm",variant:x="primary",radius:u="xs",isLoading:p=!1,loadingPosition:g="right",labelLoading:m="Loading...",className:f,disabled:h,visibleOn:b="all",...j}=e,v={primary:"bg-white",secondary:"bg-primaryGreen text-white",tertiary:"bg-secondaryGreen",quartiary:"bg-tertiaryGreen",danger:"bg-red-600",default:"bg-gray-200"},y={solid:"".concat(v[x]," text-black"),outline:"border border-current bg-transparent",subtle:"".concat(v[x]," bg-opacity-50"),ghost:"bg-transparent",link:"bg-transparent underline p-0",icon:"p-2 rounded-full",elevated:"".concat(v[x]," shadow-md hover:shadow-lg")};return(0,s.jsxs)("button",{ref:t,className:(0,i.A)("inline-flex items-center justify-center font-medium focus:outline-none transition-all",y[d],{xs:"px-2 py-1 text-xs",sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-base",lg:"px-5 py-3 text-lg",xl:"px-8 py-5 text-xl"}[c],{none:"rounded-none",xs:"rounded-sm",sm:"rounded",md:"rounded-md",xl:"rounded-xl",full:"rounded-full"}[u],{"mobile-only":"lg:hidden flex","desktop-only":"hidden lg:flex",all:"block"}[b],h&&"opacity-50 cursor-not-allowed",f),disabled:h||p,...j,children:[p&&"left"===g&&(0,s.jsx)("span",{className:"mr-2 animate-spin",children:"\uD83D\uDD04"}),r&&!o&&(0,s.jsx)("span",{className:"mr-2",children:r}),o||(p?m:null!=a?a:l),n&&!o&&(0,s.jsx)("span",{className:"ml-2",children:n}),p&&"right"===g&&(0,s.jsx)("span",{className:"ml-2 animate-spin",children:"\uD83D\uDD04"})]})});r.displayName="Button";let n=r},6358:(e,t,l)=>{l.d(t,{A:()=>u});var s=l(5155),a=l(5565),i=l(2115),r=l(804),n=l(9640),o=l(7459),d=l(3878),c=l(9861),x=function(e){return e.Mobile="mobile",e.Desktop="desktop",e}({});let u=()=>{let e=(0,d.c3)("footer"),t=function(){let[e,t]=(0,i.useState)(window.innerWidth<768?x.Mobile:x.Desktop);return(0,i.useEffect)(()=>{let e=()=>{t(window.innerWidth<768?x.Mobile:x.Desktop)};return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]),e}();return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"w-full lg:p-20 xs:p-5 flex flex-col lg:gap-10 xs:gap-2 justify-center items-center bg-green-4 text-center text-green-3",children:[(0,s.jsxs)("div",{className:"w-5/6 flex lg:flex-row xs:flex-col gap-10 justify-between items-center",children:[(0,s.jsx)(a.default,{className:" object-cover rounded-[39px]",src:"/arakia/images/LOGO_w_1.png",width:350,height:100,layout:"intrinsic",alt:""}),(0,s.jsxs)(c.A,{direction:"col",justify:"end",align:"end",children:[(0,s.jsx)(r.A,{variant:"2xl",weight:"800",color:"tertiary",children:e("ptName")}),(0,s.jsx)(r.A,{variant:"lg",color:"tertiary",children:e("ptAddress")}),(0,s.jsx)("div",{className:"w-full py-2 flex gap-5 lg:justify-end xs:justify-center items-center text-green-3",children:o.qr.map((e,l)=>(0,s.jsxs)("div",{className:"flex items-center gap-1",children:[(0,n.w)(t===x.Desktop?30:20)[e.socialMedia],(0,s.jsx)(r.A,{variant:"md",color:"tertiary",visibleOn:"desktop-only",children:e.socialMedia})]},l))})]})]}),(0,s.jsxs)("div",{className:"w-5/6 flex flex-col lg:gap-5 xs:gap-1 justify-start lg:items-start xs:items-center",children:[(0,s.jsx)("div",{className:"w-full border-b border-green-3"}),(0,s.jsx)(r.A,{variant:"lg",color:"tertiary",children:e("copyright")})]})]})})}},9861:(e,t,l)=>{l.d(t,{A:()=>o});var s=l(5155),a=l(2115),i=l(3463);let r={"mobile-only":"lg:hidden block","desktop-only":"hidden lg:block",all:"block"},n=a.forwardRef((e,t)=>{let{direction:l="row",wrap:a="nowrap",justify:n="start",align:o="start",gap:d,className:c,children:x,visibleOn:u="all",...p}=e,g=(0,i.A)("flex",l&&"flex-".concat(l),a&&"flex-".concat(a),n&&"justify-".concat(n),o&&"items-".concat(o),void 0!==d&&"gap-".concat(d),"w-full",c);return(0,s.jsx)("div",{ref:t,className:(0,i.A)(g,r[u]),...p,children:x})});n.displayName="Stack";let o=n},804:(e,t,l)=>{l.d(t,{A:()=>c});var s=l(5155),a=l(2115),i=l(3463);let r={"2xs":"lg:text-[10px] xs:text-[6px]",xs:"lg:text-[12px] xs:text-[8px]",sm:"lg:text-[14px] xs:text-[10px]",md:"lg:text-[16px] xs:text-[12px]",lg:"lg:text-[20px] xs:text-[16px]",xl:"lg:text-[24px] xs:text-[20px]","2xl":"lg:text-[30px] xs:text-[24px]","3xl":"lg:text-[34px] xs:text-[28px]","4xl":"lg:text-[40px] xs:text-[30px]"},n={primary:"text-[#141414]",secondary:"text-[#E0E0E0]",tertiary:"text-[#00502E]"},o={"mobile-only":"lg:hidden block","desktop-only":"hidden lg:block",all:"block"},d=(0,a.forwardRef)((e,t)=>{let{variant:l,className:a="",children:d,color:c="primary",weight:x,styles:u,id:p,visibleOn:g="all"}=e;return(0,s.jsx)("p",{id:p,ref:t,className:(0,i.A)(r[l],n[c],o[g],a),style:{color:c,fontWeight:x,...u},children:d})});d.displayName="Typography";let c=d},4087:(e,t,l)=>{l.d(t,{n:()=>g});var s=l(5155),a=l(6911),i=l(804),r=l(5565),n=l(7459),o=l(2115),d=l(8422),c=l(9640),x=l(1478),u=l(5415),p=l(5470);x.Ay.registerPlugin(u.u);let g=e=>{let{t}=e,l=n._Y,[x,u]=(0,o.useState)(1),g=l.length/2,m=2*x,f=l.slice(m-2,m),h=(0,o.useRef)(null),b=e=>{e<=1?u(1):e>=g?u(g):u(e)},j=e=>{h.current&&("left"===e?h.current.scrollBy({left:-270,behavior:"smooth"}):"right"===e&&h.current.scrollBy({left:270,behavior:"smooth"}))},v=(0,p.A)(),y=e=>t=>{v.current[e]=t};return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"lg:w-11/12 xs:w-full lg:p-20 xs:p-5 relative flex flex-col lg:gap-20 xs:gap-12 justify-center items-center overflow-hidden border lg:rounded-[55px] xs:rounded-none lg:border-green-3 xs:border-none",children:[(0,s.jsx)("div",{className:"lg:p-32 xs:p-16 absolute -z-10 -top-20 -left-16 lg:border-[20px] xs:border-[10px] border-white rounded-full bg-green-1"}),(0,s.jsx)("div",{className:"lg:p-20 xs:p-12 absolute -z-20 lg:top-40 xs:top-5 lg:-left-20 xs:-left-16 rounded-full bg-green-1"}),(0,s.jsxs)("div",{ref:y(0),className:"p-2 flex flex-col justify-center items-center",children:[(0,s.jsxs)("div",{className:"lg:w-11/12 xs:w-full lg:px-20 xs:px-0 flex flex-col gap-2 lg:text-center xs:text-justify",children:[(0,s.jsx)(i.A,{variant:"3xl",weight:"700",color:"primary",children:t("prologClient")}),(0,s.jsx)(i.A,{variant:"lg",color:"tertiary",children:t("clientDesc")})]}),(0,s.jsxs)("div",{className:"w-full lg:mt-5 xs:mt-2 flex justify-center items-center",children:[(0,s.jsx)(d.UZh,{className:"w-1/12 lg:block xs:hidden size-10 text-green cursor-pointer hover:scale-125 duration-300",onClick:()=>j("left")}),(0,s.jsx)("div",{className:"lg:w-10/12 xs:w-full py-5 client-scroll-wrapper flex-shrink-0 lg:gap-11 xs:gap-3 overflow-scroll ",ref:h,children:[...Array(6)].map((e,t)=>(0,s.jsx)("div",{className:"lg:basis-[22%] xs:basis-[38%] lg:py-5 xs:py-3 px-0 flex justify-center items-center flex-shrink-0 border lg:rounded-[20px] xs:rounded-[10px] border-green-3 box-shadow-3 ",children:(0,s.jsx)(r.default,{className:"rounded-[39px] lg:w-16 lg:h-16 xs:w-10 xs:h-10",src:"/arakia/images/notion.png",width:64,height:64,alt:"Notion logo"})},t))}),(0,s.jsx)(d.huF,{className:"w-1/12 lg:block xs:hidden size-10 text-green cursor-pointer hover:scale-125 duration-300",onClick:()=>j("right")})]})]}),(0,s.jsxs)("div",{className:"lg:w-11/12 xs:w-full relative flex flex-col lg:gap-5 xs:gap-0",children:[(0,s.jsxs)("div",{ref:y(1),className:"flex justify-center items-center",children:[(0,s.jsx)(a.A,{variant:"tertiary",radius:"full",label:"",icon:(0,s.jsx)(d.UZh,{size:25,onClick:()=>b(x-1),className:"text-black"})}),(0,s.jsxs)("div",{className:"lg:px-20 xs:px-5 text-center",children:[(0,s.jsx)(i.A,{variant:"lg",color:"tertiary",children:t("prologPortofolio")}),(0,s.jsx)(i.A,{variant:"3xl",weight:"700",color:"primary",children:t("portofolio")})]}),(0,s.jsx)(a.A,{variant:"tertiary",radius:"full",label:"",icon:(0,s.jsx)(d.huF,{size:25,onClick:()=>b(x+1),className:"text-black"})})]}),(0,s.jsx)("div",{ref:y(2),className:"w-full flex lg:flex-row xs:flex-col gap-12 justify-center",children:f.map((e,t)=>(0,s.jsxs)("div",{className:"lg:basis-[40%] xs:basis-0-[100%] flex-shrink-0 xs:w-full lg:p-10 xs:p-5 relative flex flex-col gap-3 lg:rounded-[46px] xs:rounded-[28px] box-shadow-4 bg-white",children:[(0,s.jsx)("div",{className:"lg:p-20 xs:p-12 text-white rounded-[23px] text-center overflow-hidden relative",children:(0,s.jsx)(r.default,{src:"/arakia/images/".concat(e.poster),alt:"image",fill:!0,style:{objectFit:"cover"},className:"rounded-[23px]"})}),(0,s.jsx)(i.A,{variant:"3xl",weight:"700",color:"primary",children:e.title}),(0,s.jsx)(i.A,{variant:"lg",color:"primary",children:e.desc}),(0,s.jsxs)("h1",{className:"absolute bottom-0 right-8 lg:text-[96px] xs:text-[64px] font-black text-green-3-half",children:["#",t+1]})]},t))})]}),(0,s.jsx)("div",{className:"absolute -z-50 top-1/2 lg:-right-72 xs:-right-32",children:(0,s.jsx)("div",{className:"lg:p-44 xs:p-16 border-[20px] border-white rounded-full bg-green-1",children:(0,s.jsx)("div",{className:"lg:p-20 xs:p-8 rounded-full border-[20px] border-white bg-green-1"})})}),(0,s.jsxs)("div",{ref:y(3),className:"lg:w-1/3 xs:w-full py-5 px-5 flex flex-col gap-4 justify-center items-center text-green-3 rounded-[14px] box-shadow-4 bg-white",children:[(0,s.jsx)("h1",{className:"w-3/4 text-[24px] font-black text-center text-black",children:t("contactUs")}),n.qr.map((e,l)=>(0,s.jsxs)("div",{className:"px-3 py-1 w-full flex justify-between items-center gap-1 text-[18px] font-medium border rounded-md border-green-3",children:[(0,s.jsxs)("div",{className:"flex gap-3 items-center",children:[(0,c.w)(30)[e.socialMedia],e.socialMedia]})," ",(0,s.jsx)(a.A,{variant:"secondary",radius:"sm",label:t("detail"),onClick:()=>window.open(e.link,"_blank","noopener,noreferrer")})]},l))]}),(0,s.jsx)("div",{className:"lg:p-40 xs:p-14 absolute -z-10 lg:-bottom-64 xs:-bottom-16 lg:-left-16 xs:-left-4 rounded-full bg-green-1"})]})})}},9640:(e,t,l)=>{l.d(t,{G:()=>c,w:()=>d});var s=l(5155),a=l(1536),i=l(1889),r=l(648),n=l(8100),o=l(2734);let d=e=>({Whatsapp:(0,s.jsx)(a.EcP,{size:e}),Google:(0,s.jsx)(a.DSS,{size:e}),LinkedIn:(0,s.jsx)(a.QEs,{size:e}),Instagram:(0,s.jsx)(a.ao$,{size:e})}),c={License:(0,s.jsx)(i.E0f,{size:30}),Approval:(0,s.jsx)(r.JpM,{size:30}),Consultation:(0,s.jsx)(n.wYY,{size:30}),Development:(0,s.jsx)(r.WFG,{size:30}),Architect:(0,s.jsx)(o.X1v,{size:30})}},5470:(e,t,l)=>{l.d(t,{A:()=>r});var s=l(2115),a=l(1478),i=l(5415);a.os.registerPlugin(i.u);let r=()=>{let e=(0,s.useRef)([]);return(0,s.useEffect)(()=>{if(0!==e.current.length)return e.current.forEach(e=>{e&&a.os.fromTo(e,{opacity:0,y:50},{opacity:1,y:0,duration:.6,ease:"power2.out",scrollTrigger:{trigger:e,start:"top 80%",toggleActions:"play none none none",end:"top 30%",once:!0}})}),()=>{i.u.getAll().forEach(e=>e.kill())}},[]),e}},7459:e=>{e.exports=JSON.parse('{"vF":["Kerja Cepat","Amanah","Berkelanjutan"],"hp":[{"title":"Perizinan Lingkungan","icon":"License","desc":"Lorem ipsum dolor sit amet consectetur. Molestie sit eget lacus ut. Sed faucibus at elit in vulputate vitae id malesuada."},{"title":"Persetujuan Bangunan Gedung","icon":"Approval","desc":"Lorem ipsum dolor sit amet consectetur. Molestie sit eget lacus ut. Sed faucibus at elit in vulputate vitae id malesuada."},{"title":"Konsultasi Jasa Kajian Transportasi","icon":"Consultation","desc":"Lorem ipsum dolor sit amet consectetur. Molestie sit eget lacus ut. Sed faucibus at elit in vulputate vitae id malesuada."},{"title":"Web Development dan Aplikasi","icon":"Development","desc":"Lorem ipsum dolor sit amet consectetur. Molestie sit eget lacus ut. Sed faucibus at elit in vulputate vitae id malesuada."},{"title":"Arsitek & Jasa Perancangan Bangunan","icon":"Architect","desc":"Lorem ipsum dolor sit amet consectetur. Molestie sit eget lacus ut. Sed faucibus at elit in vulputate vitae id malesuada."}],"Pd":[{"title":"Keilmuan, dan Riset","desc":"Konsultasi lingkungan, lalu lintas, bangunan, riset, dan telekomunikasi."},{"title":"Pertanian dan Peternakan","desc":"Menyediakan produk agribisnis unggulan dan layanan manajemen peternakan."},{"title":"Jasa Konstruksi","desc":"Berfokus pada perencanaan, desain, dan pembangunan infrastruktur berkualitas tinggi."},{"title":"Perdagangan Bebas","desc":"Memfasilitasi distribusi barang dan jasa secara lokal maupun internasional."}],"_Y":[{"title":"Andalalin","link":"none","poster":"img_portofolio_1.png","desc":"Analisis dampak lalu lintas pengembangan RUmah Sakit Maguan Husada di Jl. Pracimantoro - Giribelah KM.6"},{"title":"Design Interior","link":"none","poster":"img_portofolio_2.png","desc":"Desain interior rumah dengan tampiland tiga dimensi perumahan A untuk 300 unit tipe B."}],"qr":[{"socialMedia":"Whatsapp","link":"https://www.whatsapp.com/"},{"socialMedia":"Google","link":"https://www.google.com/"},{"socialMedia":"LinkedIn","link":"http://linkedin.com/"},{"socialMedia":"Instagram","link":"https://instagram.com"}]}')}}]);