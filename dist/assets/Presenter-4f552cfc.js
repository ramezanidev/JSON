import{o as d,e as k,f as e,d as B,b as w,y,q as p,z as P,_ as T,A as C,B as D,C as M,c as b,a as H,D as R,E as N,G as j,I as A,J as I,K as U,L as E,M as L,N as q,O as F,P as O,s as W,Q as Z,R as G,g as o,l as c,t as J,n as g,i as $,S as V,T as z,m as K,U as Q,j as X,V as x,W as Y,X as ee,F as se,Y as te,Z as oe,$ as le,a0 as ae,a1 as ne,a2 as re,a3 as ie}from"./index-83581f63.js";import{N as ce}from"./NoteDisplay-2bdf681f.js";import ue from"./DrawingControls-e53bb029.js";const de={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_e=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),pe=[_e];function ve(r,u){return d(),k("svg",de,[...pe])}const me={name:"carbon-renew",render:ve},he={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},fe=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),ge=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),xe=[fe,ge];function we(r,u){return d(),k("svg",he,[...xe])}const ye={name:"carbon-time",render:we},ke="/assets/logo-title-horizontal-96c3c915.png",Se=B({__name:"NoteStatic",props:{class:{type:String,required:!1}},setup(r){const u=r,m=w(()=>{var l,a,s;return(s=(a=(l=y.value)==null?void 0:l.meta)==null?void 0:a.slide)==null?void 0:s.note}),h=w(()=>{var l,a,s;return(s=(a=(l=y.value)==null?void 0:l.meta)==null?void 0:a.slide)==null?void 0:s.noteHTML});return(l,a)=>(d(),p(ce,{class:P(u.class),note:m.value,"note-html":h.value},null,8,["class","note","note-html"]))}}),Ce=T(Se,[["__file","C:/Users/reza/Desktop/projects/json/node_modules/@slidev/client/internals/NoteStatic.vue"]]),v=r=>(re("data-v-574fd206"),r=r(),ie(),r),be={class:"bg-main h-full slidev-presenter"},Ne={class:"grid-container"},$e={class:"grid-section top flex"},Ve=v(()=>e("img",{src:ke,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2",style:{height:"3.5rem"},alt:"Slidev logo"},null,-1)),ze=v(()=>e("div",{class:"flex-auto"},null,-1)),Be={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},Pe=v(()=>e("div",{class:"context"}," current ",-1)),Te=v(()=>e("div",{class:"context"}," next ",-1)),De={class:"grid-section note overflow-auto"},Me={class:"grid-section bottom"},He={class:"progress-bar"},Re=B({__name:"Presenter",setup(r){const u=C();D(),M(u);const m=b.titleTemplate.replace("%s",b.title||"Slidev");H({title:`Presenter - ${m}`});const{timer:h,resetTimer:l}=R(),a=C([]),s=w(()=>N.value<j.value?{route:y.value,clicks:N.value+1}:A.value?{route:I.value,clicks:0}:null);return U(),E(()=>{const S=u.value.querySelector("#slide-content"),n=L(q()),f=F();O(()=>{if(!f.value||Z.value||!G.value)return;const i=S.getBoundingClientRect(),t=(n.x-i.left)/i.width*100,_=(n.y-i.top)/i.height*100;if(!(t<0||t>100||_<0||_>100))return{x:t,y:_}},i=>{W.cursor=i})}),(S,n)=>{const f=ye,i=me;return d(),k(se,null,[e("div",be,[e("div",Ne,[e("div",$e,[Ve,ze,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:n[0]||(n[0]=(...t)=>o(l)&&o(l)(...t))},[c(f,{class:"absolute"}),c(i,{class:"absolute opacity-0"})]),e("div",Be,J(o(h)),1)]),e("div",{ref_key:"main",ref:u,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:g(o($))},[c(z,{key:"main",class:"h-full w-full"},{default:V(()=>[c(te,{"render-context":"presenter"})]),_:1}),Pe],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:g(o($))},[s.value?(d(),p(z,{key:"next",class:"h-full w-full"},{default:V(()=>{var t;return[c(o(le),{is:(t=s.value.route)==null?void 0:t.component,"clicks-elements":a.value,"onUpdate:clicksElements":n[1]||(n[1]=_=>a.value=_),clicks:s.value.clicks,"clicks-disabled":!1,class:P(o(oe)(s.value.route)),route:s.value.route,"render-context":"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):K("v-if",!0),Te],4),e("div",De,[(d(),p(Ce,{key:2,class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4"}))]),e("div",Me,[c(ae,{persist:!0})]),(d(),p(ue,{key:0}))]),e("div",He,[e("div",{class:"progress h-2px bg-primary transition-all",style:g({width:`${(o(Q)-1)/(o(X)-1)*100}%`})},null,4)])]),c(ne),c(ee,{modelValue:o(x),"onUpdate:modelValue":n[2]||(n[2]=t=>Y(x)?x.value=t:null)},null,8,["modelValue"])],64)}}});const Ue=T(Re,[["__scopeId","data-v-574fd206"],["__file","C:/Users/reza/Desktop/projects/json/node_modules/@slidev/client/internals/Presenter.vue"]]);export{Ue as default};