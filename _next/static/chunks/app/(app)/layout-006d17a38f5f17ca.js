(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[944],{5359:(e,t,r)=>{Promise.resolve().then(r.bind(r,7631))},7631:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(5155),l=r(6911),s=r(804),a=r(4664);r(2115);var o=r(1536);function i(e){let{children:t}=e;return(0,n.jsxs)(n.Fragment,{children:[t,(0,n.jsxs)(l.A,{radius:"md",size:"lg",buttonType:"elevated",className:"gap-5 fixed right-10 bottom-10 text-green",onClick:()=>window.open(a.V,"_blank"),visibleOn:"desktop-only",children:[(0,n.jsx)(s.A,{variant:"xl",children:"Contact Us"}),(0,n.jsx)(o.EcP,{size:30})]})]})}},6911:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var n=r(5155),l=r(2115),s=r(3463);let a=l.forwardRef((e,t)=>{let{label:r,children:l,startIcon:a,endIcon:o,icon:i,buttonType:c="solid",size:x="sm",variant:p="primary",radius:u="xs",isLoading:d=!1,loadingPosition:f="right",labelLoading:m="Loading...",className:y,disabled:g,visibleOn:b="all",...h}=e,v={primary:"bg-white",secondary:"bg-primaryGreen text-white",tertiary:"bg-secondaryGreen",quartiary:"bg-tertiaryGreen",danger:"bg-red-600",default:"bg-gray-200"},O={solid:"".concat(v[p]," text-black"),outline:"border border-current bg-transparent",subtle:"".concat(v[p]," bg-opacity-50"),ghost:"bg-transparent",link:"bg-transparent underline p-0",icon:"p-2 rounded-full",elevated:"".concat(v[p]," lg:shadow-md hover:shadow-lg")};return(0,n.jsxs)("button",{ref:t,className:(0,s.A)("inline-flex items-center justify-center font-medium focus:outline-none transition-all",O[c],{xs:"px-2 py-1 text-xs",sm:"px-3 py-1.5 lg:text-sm xs:text-lg",md:"px-4 py-2 lg:text-base xs:text-sm",lg:"lg:px-5 lg:py-3 xs:px-1 xs:py-1 lg:text-lg xs:text-base",xl:"px-8 py-5 lg:text-xl xs:text-lg"}[x],{none:"rounded-none",xs:"rounded-sm",sm:"rounded",md:"rounded-md",xl:"rounded-xl",full:"rounded-full"}[u],{"mobile-only":"md:hidden flex","desktop-only":"hidden md:flex",all:"block"}[b],g&&"opacity-50 cursor-not-allowed",y),disabled:g||d,...h,children:[d&&"left"===f&&(0,n.jsx)("span",{className:"mr-2 animate-spin",children:"\uD83D\uDD04"}),a&&!i&&(0,n.jsx)("span",{className:"mr-2",children:a}),i||(d?m:null!=l?l:r),o&&!i&&(0,n.jsx)("span",{className:"ml-2",children:o}),d&&"right"===f&&(0,n.jsx)("span",{className:"ml-2 animate-spin",children:"\uD83D\uDD04"})]})});a.displayName="Button";let o=a},804:(e,t,r)=>{"use strict";r.d(t,{A:()=>x});var n=r(5155),l=r(2115),s=r(3463);let a={"2xs":"lg:text-[10px] xs:text-[6px]",xs:"lg:text-[12px] xs:text-[8px]",sm:"lg:text-[14px] xs:text-[10px]",md:"lg:text-[16px] xs:text-[12px]",lg:"lg:text-[20px] xs:text-[16px]",xl:"lg:text-[24px] xs:text-[20px]","2xl":"lg:text-[30px] xs:text-[24px]","3xl":"lg:text-[34px] xs:text-[24px]","4xl":"lg:text-[40px] xs:text-[34px]"},o={primary:"text-[#141414]",secondary:"text-[#E0E0E0]",tertiary:"text-[#00502E]"},i={"mobile-only":"md:hidden flex","desktop-only":"hidden md:flex",all:"flex"},c=(0,l.forwardRef)((e,t)=>{let{variant:r,className:l="",children:c,color:x="primary",weight:p,styles:u,id:d,visibleOn:f="all"}=e;return(0,n.jsx)("p",{id:d,ref:t,className:(0,s.A)(a[r],o[x],i[f],l),style:{color:x,fontWeight:p,...u},children:c})});c.displayName="Typography";let x=c},4664:(e,t,r)=>{"use strict";r.d(t,{V:()=>n});let n="http://wa.me/6289527010203"},3463:(e,t,r)=>{"use strict";function n(){for(var e,t,r=0,n="",l=arguments.length;r<l;r++)(e=arguments[r])&&(t=function e(t){var r,n,l="";if("string"==typeof t||"number"==typeof t)l+=t;else if("object"==typeof t){if(Array.isArray(t)){var s=t.length;for(r=0;r<s;r++)t[r]&&(n=e(t[r]))&&(l&&(l+=" "),l+=n)}else for(n in t)t[n]&&(l&&(l+=" "),l+=n)}return l}(e))&&(n&&(n+=" "),n+=t);return n}r.d(t,{$:()=>n,A:()=>l});let l=n},3435:(e,t,r)=>{"use strict";r.d(t,{k5:()=>x});var n=r(2115),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=n.createContext&&n.createContext(l),a=["attr","size","title"];function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){var n,l;n=t,l=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function x(e){return t=>n.createElement(p,o({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function p(e){var t=t=>{var r,{attr:l,size:s,title:i}=e,x=function(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}(e,a),p=s||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,x,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==s?n.createElement(s.Consumer,null,e=>t(e)):t(l)}}},e=>{var t=t=>e(e.s=t);e.O(0,[711,441,517,358],()=>t(5359)),_N_E=e.O()}]);