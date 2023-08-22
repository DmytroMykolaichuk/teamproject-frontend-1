"use strict";(self.webpackChunkteamproject_frontend_1=self.webpackChunkteamproject_frontend_1||[]).push([[673],{41673:function(n,e,t){t.r(e),t.d(e,{default:function(){return A}});var i,r,o,a,d,s,c,p,l,x,h=t(30168),f=t(76487),u=t(11945),g=f.ZP.section(i||(i=(0,h.Z)(["\n  background-color: ",";\n  border-radius: 16px;\n  padding: 28px 14px 135px;\n\n  @media screen and (min-width: ","px) {\n    padding: 132px 32px 224px 32px;\n  }\n  @media screen and (min-width: ","px) {\n    padding: 134px 113px 136px;\n  }\n"])),(function(n){return n.theme.secondaryBgColor}),u.Uh.tablet,u.Uh.desktop),m=f.ZP.div(r||(r=(0,h.Z)(["\n  display: inline-flex;\n  flex-direction: column;\n  width: 100%;\n\n  margin-bottom: 40px;\n\n  @media screen and (min-width: ","px) {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: space-between;\n    align-items: baseline;\n\n    padding-left: 32px;\n    padding-right: 32px;\n    margin-bottom: -2px;\n  }\n  @media screen and (min-width: ","px) {\n    padding-left: 40px;\n    padding-right: 40px;\n    margin-bottom: 0px;\n  }\n"])),u.Uh.tablet,u.Uh.desktop),j=t(29439),b=t(72791),w=t(59434),v=t(57689),y=t(20601),k=t(21347),Z=t(82839),F=t(90466),P=t(12891),U=t(17684),z=t(83672),D=t(53336),C=t(87970),S=function(n){return n.date.currentDate},W=t(71670),T=t(62467),B=f.ZP.div(o||(o=(0,h.Z)(["\n  width: 100%;\n  height: 413px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 0.8px solid ",";\n  color: ",";\n  border-radius: 20px;\n\n  @media screen and (min-width: ","px) {\n    height: 424px;\n    border-radius: 29px;\n  }\n  @media screen and (min-width: ","px) {\n    height: 440px;\n  }\n"])),(function(n){return n.theme.chartBorderColor}),(function(n){return n.theme.secondaryTextColor}),u.Uh.tablet,u.Uh.desktop),E=f.ZP.div(a||(a=(0,h.Z)(["\n  width: calc(100% - 28px);\n  height: calc(100% - 80px);\n\n  @media screen and (min-width: ","px) {\n    width: calc(100% - 64px);\n    height: calc(100% - 64px);\n\n    @media screen and (min-width: ","px) {\n      width: calc(100% - 80px);\n      height: calc(100% - 80px);\n    }\n  }\n"])),u.Uh.tablet,u.Uh.desktop),K=t(80184),L=function(){var n=(0,w.v9)(S),e=(0,v.UO)().currentDate;e&&(n=e);var t,i,r,o,a,d,s,c,p,l=(0,w.v9)((function(n){return(0,W.Tq)(n,T.W.toDo)})),x=(0,w.v9)((function(n){return(0,W.Tq)(n,T.W.inProgress)})),h=(0,w.v9)((function(n){return(0,W.Tq)(n,T.W.done)})),f=l.filter((function(e){return e.date.includes(n)})),g=x.filter((function(e){return e.date.includes(n)})),m=h.filter((function(e){return e.date.includes(n)})),L=l.length||0,N=x.length||0,O=h.length||0,_=f.length||0,q=g.length||0,G=m.length||0,H=L+N+O,M=_+q+G,$=0===H?0:Number(L/H*100).toFixed(),I=0===H?0:Number(N/H*100).toFixed(),A=0===H?0:Number(O/H*100).toFixed(),J=0===M?0:Number(_/M*100).toFixed(),Q=0===M?0:Number(q/M*100).toFixed(),R=0===M?0:Number(G/M*100).toFixed(),V=(0,b.useMemo)((function(){return[{name:"To do",uv:J,pv:$},{name:"In Progress",uv:Q,pv:I},{name:"Done",uv:R,pv:A}]}),[$,I,A,J,Q,R]),X=(0,b.useState)(window.innerWidth),Y=(0,j.Z)(X,2),nn=Y[0],en=Y[1];switch(!0){case nn<=u.Uh.mobile:t=279,i=333,o=22,r=243,a=8,d=30,s=12,c=12,p=1.33;break;case nn<=u.Uh.tablet:t=576,i=360,o=27,r=522,a=14,d=127,s=16,c=14,p=1.13;break;case nn<=u.Uh.desktop:t=780,i=360,o=27,r=694,a=14,d=170,s=16,c=14,p=1.13;break;default:t=1087,i=752,o=22,r=694,a=14,d=170,s=16,c=14,p=1.13}var tn=function(){en(window.innerWidth)};return(0,b.useEffect)((function(){return window.addEventListener("resize",tn),function(){window.removeEventListener("resize",tn)}}),[]),(0,K.jsx)(B,{children:(0,K.jsx)(E,{children:(0,K.jsx)(y.h,{width:"100%",height:"100%",children:(0,K.jsxs)(k.v,{width:t,height:i,maxBarSize:r,barGap:a,barCategoryGap:d,data:V,margin:{top:40,right:0,left:-10,bottom:0},children:[(0,K.jsx)(Z.q,{horizontal:!0,vertical:!1,strokeDasharray:" ",stroke:"#E3F3FF"}),(0,K.jsx)(F.K,{axisLine:!1,tickLine:!1,dataKey:"name",fontSize:c,fontWeight:400,tickMargin:10}),(0,K.jsx)(P.B,{ticks:[0,20,40,60,80,100],position:"left",tickCount:6,tickMargin:20,fontSize:14,fontWeight:500,lineHeight:1.5,axisLine:!1,tickLine:!1,children:(0,K.jsx)(U._,{position:"top",dy:-24,dx:-2,fontSize:14,fontWeight:600,lineHeight:1.5,children:"Tasks"})}),(0,K.jsx)(z.D,{}),(0,K.jsxs)("defs",{children:[(0,K.jsxs)("linearGradient",{id:"colorUv",x1:"0",y1:"1",x2:"0",y2:"0",children:[(0,K.jsx)("stop",{offset:"5%",stopColor:"#FFD2DD",stopOpacity:.8}),(0,K.jsx)("stop",{offset:"100%",stopColor:"#FFD2DD",stopOpacity:0})]}),(0,K.jsxs)("linearGradient",{id:"colorPv",x1:"0",y1:"1",x2:"0",y2:"0",children:[(0,K.jsx)("stop",{offset:"5%",stopColor:"#3E85F3",stopOpacity:.8}),(0,K.jsx)("stop",{offset:"100%",stopColor:"#3E85F3",stopOpacity:0})]})]}),(0,K.jsx)(D.$,{dataKey:"uv",fill:"url(#colorUv)",legendType:"none",barSize:o,minPointSize:"3",children:(0,K.jsx)(C.e,{dataKey:"uv",position:"top",fontSize:s,fontWeight:500,lineHeight:p,formatter:function(n){return"".concat(n,"%")}})}),(0,K.jsx)(D.$,{dataKey:"pv",fill:"url(#colorPv)",legendType:"none",barSize:o,minPointSize:"3",children:(0,K.jsx)(C.e,{dataKey:"pv",position:"top",fontSize:s,fontWeight:500,lineHeight:p,formatter:function(n){return"".concat(n,"%")}})})]})})})})},N=t(89814),O=f.ZP.div(d||(d=(0,h.Z)(["\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 14px;\n  margin-top: -24px;\n\n  @media screen and (min-width: ","px) {\n    gap: 20px;\n    margin-bottom: 0;\n  }\n"])),u.Uh.tablet),_=f.ZP.div(s||(s=(0,h.Z)(["\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 8px;\n"]))),q=f.ZP.div(c||(c=(0,h.Z)(["\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n"]))),G=(0,f.ZP)(q)(p||(p=(0,h.Z)(["\n  background-color: #ffd2dd;\n"]))),H=(0,f.ZP)(q)(l||(l=(0,h.Z)(["\n  background-color: #3e85f3;\n"]))),M=f.ZP.p(x||(x=(0,h.Z)(["\n  color: ",";\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.28;\n\n  @media screen and (min-width: ","px) {\n    font-size: 16px;\n    line-height: 1.12;\n  }\n"])),(function(n){return n.theme.secondaryTextColor}),u.Uh.tablet),$=function(){return(0,K.jsx)(K.Fragment,{children:(0,K.jsxs)(O,{children:[(0,K.jsxs)(_,{children:[(0,K.jsx)(G,{}),(0,K.jsx)(M,{children:"By Day"})]}),(0,K.jsxs)(_,{children:[(0,K.jsx)(H,{}),(0,K.jsx)(M,{children:"By Month"})]})]})})},I=function(){return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(m,{children:[(0,K.jsx)(N.Z,{}),(0,K.jsx)($,{})]}),(0,K.jsx)(L,{})]})},A=function(){return(0,K.jsx)(g,{children:(0,K.jsx)(I,{})})}}}]);
//# sourceMappingURL=673.4530b4d7.chunk.js.map