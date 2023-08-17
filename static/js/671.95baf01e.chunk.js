"use strict";(self.webpackChunkteamproject_frontend_1=self.webpackChunkteamproject_frontend_1||[]).push([[671],{9671:function(n,t,e){e.r(t),e.d(t,{default:function(){return dt}});var i,r,d,a,o,p,x,s,c,h,l,m,u,f,g,w,b,y,j,v,k,Z,z,C,M,_,D,A,F,$,P,B,E,I,O,T,N,S,U=e(9439),W=e(2791),H=e(7689),Y=e(168),G=e(6487),J=G.ZP.div(i||(i=(0,Y.Z)(["\n  margin-bottom: 24px;\n\n  @media (min-width: 376px) and (max-width: 768px) {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 24px;\n  }\n\n  @media (min-width: 769px) and (max-width: 1440px) {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 32px;\n  }\n"]))),K=G.ZP.div(r||(r=(0,Y.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 18px;\n\n  @media (min-width: 376px) and (max-width: 768px) {\n  }\n"]))),L=(e(8639),e(184)),Q=function(){var n=(0,W.useState)(new Date),t=(0,U.Z)(n,2),e=t[0],i=t[1],r=(0,W.useState)(!1),d=(0,U.Z)(r,2),a=d[0],o=d[1],p=(0,H.TH)();return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(J,{children:[(0,L.jsx)(K,{children:(0,L.jsx)(pn,{date:e,getTasks:function(n){var t=new Date(e);"/calendar/day"===p.pathname?(n.currentTarget.className.includes("decrease")?(console.log("yes"),t.setDate(t.getDate()-1)):t.setDate(t.getDate()+1),i(t)):(n.currentTarget.className.includes("decrease")?t.setMonth(t.getMonth()-1):t.setMonth(t.getMonth()+1),i(t))},isOpen:a,setIsOpen:o,setDate:i})}),(0,L.jsx)("div",{children:(0,L.jsx)(hn,{})})]}),(0,L.jsxs)(H.Z5,{children:[(0,L.jsx)(H.AW,{path:"/calendar/month",element:(0,L.jsx)("div",{children:"day"})}),(0,L.jsx)(H.AW,{path:"/calendar/day",element:(0,L.jsx)("div",{children:"month"})})]})]})},R=G.ZP.div(d||(d=(0,Y.Z)(["\n  display: flex;\n"]))),q=G.ZP.div(a||(a=(0,Y.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  margin-right: ;\n"]))),V=(G.ZP.div(o||(o=(0,Y.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),G.ZP.button(p||(p=(0,Y.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 109px;\n  height: 30px;\n  padding: 6px 12px 6px 12px;\n  border-radius: 8px;\n  background-color: #3e85f3;\n  color: #ffffff;\n  border: 0;\n\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 1.3;\n  text-transform: uppercase;\n\n  @media (min-width: 376px) and (max-width: 768px) {\n    padding: 8px 12px 8px 12px;\n    margin-right: 8px;\n    width: 121px;\n    height: 34px;\n\n    font-size: 16px;\n    line-height: 1.1;\n  }\n\n  @media (min-width: 769px) and (max-width: 1440px) {\n    padding: 8px 12px 8px 12px;\n    margin-right: 8px;\n    width: 125px;\n    height: 34px;\n\n    font-size: 16px;\n    line-height: 1.1;\n  }\n"])))),X=G.ZP.button(x||(x=(0,Y.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 30px;\n  border-radius: 8px 0px 0px 8px;\n\n  padding: 8px 12px 8px 12px;\n  border: ",";\n  background-color: ",";\n\n  @media (min-width: 376px) and (max-width: 768px) {\n    width: 38px;\n    height: 34px;\n  }\n\n  @media (min-width: 769px) and (max-width: 1440px) {\n    width: 38px;\n    height: 34px;\n  }\n"])),(function(n){return n.theme.buttonInDecBorder}),(function(n){return n.theme.secondaryBgColor})),nn=G.ZP.button(s||(s=(0,Y.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 30px;\n  border-radius: 0px 8px 8px 0px;\n\n  padding: 8px 12px 8px 12px;\n  border: ",";\n  background-color: ",";\n\n  @media (min-width: 376px) and (max-width: 768px) {\n    width: 38px;\n    height: 34px;\n  }\n\n  @media (min-width: 769px) and (max-width: 1440px) {\n    width: 38px;\n    height: 34px;\n  }\n"])),(function(n){return n.theme.buttonInDecBorder}),(function(n){return n.theme.secondaryBgColor})),tn=G.ZP.svg(c||(c=(0,Y.Z)([""]))),en=(0,G.vJ)(h||(h=(0,Y.Z)(["\n.react-datepicker{ \n  position: absolute !important;\n\n  top: 735% !important; \n  left: 150% !important;\n  transform: translate(-50%, -50%) !important;\n  z-index: 2 !important; \n\n  @media (min-width: 376px) and (max-width: 768px) {\n\n  top: 735% !important; \n  left: 150% !important;\n  transform: translate(-50%, -50%) !important;\n  z-index: 2 !important; \n  }\n\n}\n\n.react-datepicker {\n  border: none !important;\n   border-radius: 16px !important;\n}\n\n  .react-datepicker__header {\n    border-radius: 16px !important;\n    background-color: #3E85F3 !important;\n    border-bottom: none !important;\n  }\n\n  .react-datepicker__day--selected {\n    background-color: white !important;\n    color:  #3E85F3 !important;\n    border-radius: 50% !important;\n  }\n\n  .react-datepicker__day {\n    color: white !important;\n     border-radius: 50% !important;\n  }\n\n   .react-datepicker__day.react-datepicker__day--selected {\n color:  #3E85F3 !important;\n   }\n\n .react-datepicker__day-name {\n    color: white !important;\n  }\n\n  .react-datepicker__month-container{\n    width: 327px;\n    height: 354px;\n    padding: 9px 18px;\n\n    @media (min-width: 376px) and (max-width: 768px) {   width:374px;\n    heigh:354px;\n   }\n    @media (min-width: 769px) and (max-width: 1440px) { width:374px;\n    height:354px;\n   }\n  background-color: #3E85F3 !important;\n  border: none  !important;\n  border-radius: 16px !important;\npadding: 9px 19px 19px 19px;\n  }\n\n  .react-datepicker__navigation{margin-top:9px;}\n  .react-datepicker__day{font-family: Inter;\nfont-size: 14px;\nfont-style: normal;\nfont-weight: 400;\nline-height: 18px;}\n\n   .react-datepicker__current-month{ \n    color: white !important;\n  }\n"]))),rn=e(9513),dn=e.n(rn),an=e(4885),on=e(6386),pn=function(n){var t=n.date,e=n.getTasks,i=n.isOpen,r=n.setIsOpen,d=n.setDate,a=(0,H.TH)();return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(q,{children:[" ",(0,L.jsx)(V,{className:"example-custom-input",onClick:function(n){n.preventDefault(),r(!i)},children:"/calendar/day"===a.pathname?(0,on.default)(t,"dd MMM yyyy"):(0,on.default)(t,"MMMM yyyy")}),i&&(0,L.jsx)(dn(),{selected:t,onChange:function(n){r(!i),d(n)},inline:!0})]}),(0,L.jsxs)(R,{children:[" ",(0,L.jsx)(X,{className:"decrease",onClick:e,children:(0,L.jsx)(tn,{width:"18",height:"18",children:(0,L.jsx)("use",{href:an.Z+"#icon-chevron-left"})})}),(0,L.jsx)(nn,{className:"increase",onClick:e,children:(0,L.jsx)("svg",{width:"18",height:"18",children:(0,L.jsx)("use",{href:an.Z+"#icon-chevron-right"})})})]}),(0,L.jsx)(en,{})]})},xn=G.ZP.div(l||(l=(0,Y.Z)(["\n  display: inline-block;\n"]))),sn=G.ZP.button(m||(m=(0,Y.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 76px;\n  height: 34px;\n  border: none;\n  border-right: ",";\n  border-radius: 8px 0px 0px 8px;\n  padding: 8px 16px 8px 16px;\n  display: inline-flex;\n  background-color: ",";\n\n  color: ",";\n\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 1.3;\n\n  @media (min-width: 376px) and (max-width: 768px) {\n    width: 82px;\n    height: 34px;\n\n    font-size: 16px;\n    line-height: 1.1;\n  }\n\n  @media (min-width: 769px) and (max-width: 1440px) {\n    width: 82px;\n    height: 34px;\n\n    font-size: 16px;\n    line-height: 1.1;\n  }\n"])),(function(n){return n.theme.monthBorder}),(function(n){return n.isActive?function(n){return n.theme.activeButtonDayMonth}:function(n){return n.theme.inactiveButtonDayMonth}}),(function(n){return n.isActive?"#3E85F3":function(n){return n.theme.sidebarMainActiveColor}})),cn=G.ZP.button(u||(u=(0,Y.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 76px;\n  height: 34px;\n  border-radius: 0px 8px 8px 0px;\n  padding: 8px 16px 8px 16px;\n  display: inline-flex;\n  border: none;\n  background-color: ",";\n  color: ",";\n\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 1.3;\n\n  @media (min-width: 376px) and (max-width: 768px) {\n    width: 82px;\n    height: 34px;\n\n    font-size: 16px;\n    line-height: 1.1;\n  }\n\n  @media (min-width: 769px) and (max-width: 1440px) {\n    width: 82px;\n    height: 34px;\n\n    font-size: 16px;\n    line-height: 1.1;\n  }\n"])),(function(n){return n.isActive?function(n){return n.theme.activeButtonDayMonth}:function(n){return n.theme.inactiveButtonDayMonth}}),(function(n){return n.isActive?"#3E85F3":function(n){return n.theme.sidebarMainActiveColor}})),hn=function(){var n=(0,H.s0)(),t=(0,H.TH)();return(0,L.jsxs)(xn,{children:[(0,L.jsx)(sn,{isActive:t.pathname.includes("day"),onClick:function(){n("/calendar/month")},children:"Month"}),(0,L.jsx)(cn,{isActive:t.pathname.includes("month"),onClick:function(){n("/calendar/day")},children:"Day"})]})},ln=G.zo.button(f||(f=(0,Y.Z)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px 20px;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.28;\n  color: ",";\n  background-color: ",";\n  border-radius: 16px;\n  border-radius: 8px;\n  border: 1px dashed ",";\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n\n  &:hover {\n    background-color: #CAE8FF;\n  }\n"])),(function(n){return n.theme.mainTextColor}),(function(n){return n.theme.secondaryAccentColorActive}),(function(n){return n.theme.sidebarMainActiveColor})),mn=G.zo.svg(g||(g=(0,Y.Z)(["\n  stroke: currentColor;\n"]))),un=function(){return(0,L.jsxs)(ln,{children:[(0,L.jsx)(mn,{width:"24",height:"24",children:(0,L.jsx)("use",{href:an.Z+"#icon-plus"})}),(0,L.jsx)("span",{children:"Add task"})]})},fn=G.zo.div(w||(w=(0,Y.Z)(["\n  padding: 14px 18px;\n  border-radius: 8px;\n  border: 1px solid rgba(220, 227, 229, 0.50);\n  background-color: ",";\n"])),(function(n){return n.theme.secondaryBgColor})),gn=function(){return(0,L.jsx)(fn,{children:"DayCalendarHead"})},wn=e(1410),bn=G.zo.div(b||(b=(0,Y.Z)(["\n  display: flex;\n  gap: 16px;\n  overflow-y: scroll;\n\n  @media screen and (min-width: ","px) {\n    gap: 27px;\n  }\n"])),wn.Uh.desktop),yn=G.zo.div(y||(y=(0,Y.Z)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),jn=G.zo.h3(j||(j=(0,Y.Z)(["\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 1.11;\n  color: #111;\n\n  @media screen and (min-width: ","px) {\n    font-size: 20px;\n    line-height: 1.2;\n  }\n"])),wn.Uh.tablet),vn=G.zo.button(v||(v=(0,Y.Z)(["\n  display: inline-flex;\n  background-color: transparent;\n  border: none;\n\n  &:hover svg {\n    stroke: ",";\n  };\n"])),(function(n){return n.theme.mainAccentColorActive})),kn=G.zo.svg(k||(k=(0,Y.Z)(["\n  fill: none;\n  stroke: currentColor;\n  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);\n"]))),Zn=function(n){var t=n.title;n.category;return(0,L.jsxs)(yn,{children:[(0,L.jsx)(jn,{children:t}),(0,L.jsx)(vn,{"aria-label":"Add new task",children:(0,L.jsx)(kn,{width:"22",height:"22",children:(0,L.jsx)("use",{href:an.Z+"#icon-plus-in-a-circle"})})})]})},zn=e(9434),Cn=G.zo.div(Z||(Z=(0,Y.Z)(["\n  display: flex;\n  gap: 10px;\n  align-items: end;\n"]))),Mn=G.zo.button(z||(z=(0,Y.Z)(["\n  padding: 0;\n  background-color: transparent;\n  border: none;\n\n  &:hover svg {\n    stroke: ",";\n  }\n"])),(function(n){return n.theme.mainAccentColorActive})),_n=G.zo.svg(C||(C=(0,Y.Z)(["\n  fill: none;\n  stroke: currentColor;\n  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);\n"]))),Dn=function(){return(0,L.jsxs)(Cn,{children:[(0,L.jsx)(Mn,{children:(0,L.jsx)(_n,{width:"14",height:"14",children:(0,L.jsx)("use",{href:an.Z+"#icon-arrow-circle-broken-right"})})}),(0,L.jsx)(Mn,{children:(0,L.jsx)(_n,{width:"14",height:"14",children:(0,L.jsx)("use",{href:an.Z+"#icon-pencil-01"})})}),(0,L.jsx)(Mn,{children:(0,L.jsx)(_n,{width:"14",height:"14",children:(0,L.jsx)("use",{href:an.Z+"#icon-trash-04"})})})]})},An=e(9552),Fn=e(6916),$n=function(n){return n.tasks.avatarURL},Pn=(0,Fn.P1)((function(n){return n.tasks.tasks}),(function(n,t){return t}),(function(n,t){return n.filter((function(n){return n.category===t}))})),Bn=G.zo.div(M||(M=(0,Y.Z)(["\n  padding-top: 14px;\n  padding-right: 14px;\n  padding-bottom: 18px;\n  padding-left: 14px;\n  border-radius: 8px;\n  background-color: ",";\n"])),(function(n){return n.theme.mainBGColor})),En=G.zo.p(_||(_=(0,Y.Z)(["\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.28;\n"]))),In=G.zo.div(D||(D=(0,Y.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 28px;\n\n  @media screen and (min-width: ","px) {\n    margin-top: 32px;\n  }\n"])),wn.Uh.tablet),On=G.zo.div(A||(A=(0,Y.Z)(["\n  display: flex;\n  align-items: end;\n  gap: 8px;\n"]))),Tn=G.zo.img(F||(F=(0,Y.Z)(["\n  border-radius: 32px;\n  border: 1.8px solid ",";\n"])),(function(n){return n.theme.mainAccentColor})),Nn=G.zo.span($||($=(0,Y.Z)(["\n  padding: 4px 12px;\n  font-size: 10px;\n  font-weight: 600;\n  line-height: 1.2;\n  color:  ",";\n  background-color: #72C2F8;\n  border-radius: 4px;\n"])),(function(n){return n.theme.mainBGColor})),Sn=function(n){var t=n.task,e=(0,zn.v9)($n);return(0,L.jsxs)(Bn,{children:[(0,L.jsx)(En,{children:t.title}),(0,L.jsxs)(In,{children:[(0,L.jsxs)(On,{children:[(0,L.jsx)(Tn,{src:e,width:"32",height:"32",alt:"User Avatar"}),(0,L.jsx)(Nn,{children:t.priority})]}),(0,L.jsx)(Dn,{})]}),(0,L.jsx)(An.K9,{})]})},Un=G.zo.div(P||(P=(0,Y.Z)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 14px;\n  padding-top: 24px;\n  padding-bottom: 24px;\n\n  @media screen and (min-width: ","px) {\n    row-gap: 18px;\n    padding-top: 28px;\n    padding-bottom: 32px;\n  }\n"])),wn.Uh.desktop),Wn=function(n){var t=n.tasks;return(0,L.jsx)(Un,{children:t.map((function(n){return(0,L.jsx)(Sn,{task:n},n._id)}))})},Hn=G.zo.div(B||(B=(0,Y.Z)(["\n  width: 100%;\n  padding: 14px 18px;\n  border-radius: 8px;\n  border: 1px solid rgba(220, 227, 229, 0.50);\n  background-color: ",";\n"])),(function(n){return n.theme.secondaryBgColor})),Yn=function(n){var t=n.title,e=n.tasks;return(0,L.jsxs)(Hn,{children:[(0,L.jsx)(Zn,{title:t}),e&&(0,L.jsx)(Wn,{tasks:e}),(0,L.jsx)(un,{})]})},Gn=function(){var n=(0,zn.v9)((function(n){return Pn(n,wn.W3.toDo)})),t=(0,zn.v9)((function(n){return Pn(n,wn.W3.inProgress)})),e=(0,zn.v9)((function(n){return Pn(n,wn.W3.done)}));return(0,L.jsxs)(bn,{children:[(0,L.jsx)(Yn,{title:"To do",tasks:n}),(0,L.jsx)(Yn,{title:"In progress",tasks:t}),(0,L.jsx)(Yn,{title:"Done",tasks:e})]})},Jn=function(){return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(gn,{}),(0,L.jsx)(Gn,{})]})},Kn=e(2426),Ln=e.n(Kn),Qn=G.zo.div(E||(E=(0,Y.Z)(["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  grid-template-rows: repeat(5, 1fr);\n  border: 1px solid rgba(220, 227, 229, 0.5);\n  border-radius: 8px;\n  background-color: white;\n\n  @media (max-width: 375px) {\n    grid-template-columns: repeat(7, minmax(0, 1fr));\n    max-width: 335px;\n    height: 470px;\n  }\n\n  @media (min-width: 376px) and (max-width: 768px) {\n    max-width: 704px;\n    height: 720px;\n  }\n\n  @media (min-width: 769px) and (max-width: 1440px) {\n    max-width: 1087px;\n    height: 625px;\n  }\n\n  @media (min-width: 1441px) {\n    width: 100%;\n    height: auto;\n  }\n"]))),Rn=G.zo.div(I||(I=(0,Y.Z)(["\n  border: 1px solid rgba(220, 227, 229, 0.5);\n  padding: 8px 4px;\n\n  @media (max-width: 375px) {\n    padding: 8px 4px;\n  }\n  @media (min-width: 376px) and (max-width: 768px) {\n    padding: 14px 4px;\n  }\n\n  @media (min-width: 769px) and (max-width: 1440px) {\n    padding: 14px;\n  }\n\n  &:after {\n    content: '';\n    display: block;\n    padding-top: 100%;\n  }\n"]))),qn=G.zo.div(O||(O=(0,Y.Z)(["\n  display: flex;\n  justify-content: ",";\n  align-items: center;\n\n  @media (max-width: 375px) {\n  }\n\n  @media (min-width: 376px) and (max-width: 768px) {\n  }\n\n  @media (min-width: 769px) and (max-width: 1440px) {\n  }\n"])),(function(n){return n.justifyContent?n.justifyContent:"flex-end"})),Vn=G.zo.div(T||(T=(0,Y.Z)(["\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 116.667%;\n  letter-spacing: 0em;\n  text-align: center;\n  padding: 4px 6px;\n\n  color: ",";\n  background-color: ",";\n  border-radius: ",";\n\n  @media (max-width: 375px) {\n    font-size: 12px;\n    text-transform: uppercase;\n    padding: 4px 6px;\n  }\n\n  @media (min-width: 376px) and (max-width: 768px) {\n    padding: 4px 8px;\n    font-size: 16px;\n    border-radius: ",";\n  }\n\n  @media (min-width: 769px) and (max-width: 1440px) {\n    padding: 4px 8px;\n    font-size: 16px;\n    text-transform: uppercase;\n    border-radius: ",";\n  }\n\n  @media (min-width: 1441px) {\n    padding: 4px 8px;\n    font-size: 18px;\n    text-transform: uppercase;\n    border-radius: ",";\n  }\n"])),(function(n){return n.$today?"#FFFFFF":"#343434"}),(function(n){return n.$today?"#3E85F3":"transparent"}),(function(n){return n.$today?"6px":"0"}),(function(n){return n.$today?"8px":"0"}),(function(n){return n.$today?"8px":"0"}),(function(n){return n.$today?"8px":"0"})),Xn=function(n){var t=n.startDay,e=Ln()(),i=e.clone().startOf("month"),r=e.clone().endOf("month"),d=[],a=t.clone();0===a.day()&&a.add(1,"day");for(var o=!1,p=0;p<35&&(a.isSame(i,"day")&&(o=!0),o&&!a.isSameOrBefore(r,"day")||d.push({day:o?a.clone():null,isCurrentMonth:o}),!o||!a.isSame(r,"day"));p++)a.add(1,"day");for(;d.length<35;)d.push({day:null,isCurrentMonth:!1});return(0,L.jsx)("div",{children:(0,L.jsx)(Qn,{children:d.map((function(n,t){var i=n.day,r=n.isCurrentMonth;return(0,L.jsx)(Rn,{children:(0,L.jsx)(qn,{children:(0,L.jsx)(Vn,{className:r?"current-month":"",$today:i&&i.isSame(e,"day"),children:i?i.format("D"):""})})},i?i.format("DDMMYYYY"):"empty-".concat(t))}))})})},nt=G.ZP.div(N||(N=(0,Y.Z)(["\n  color: ",";\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 112.5%;\n  text-transform: uppercase;\n\n  @media (min-width: 769px) {\n    font-size: 18px;\n  }\n"])),(function(n){return n.$weekend?"#3E85F3":"#343434"})),tt=G.ZP.div(S||(S=(0,Y.Z)(["\n  display: flex;\n  justify-content: space-around;\n  border: 1px solid rgba(220, 227, 229, 0.5);\n  border-radius: 8px;\n  background-color: white;\n  padding-top: 14px;\n  padding-bottom: 14px;\n  margin-bottom: 14px;\n\n  @media (max-width: 375px) {\n    max-width: 335px;\n    padding: 16px;\n  }\n\n  @media (min-width: 376px) and (max-width: 768px) {\n    max-width: 704px;\n    padding-left: 40px;\n    padding-right: 40px;\n    margin-bottom: 18px;\n  }\n\n  @media (min-width: 769px) and (max-width: 1440px) {\n    max-width: 1087px;\n    padding-left: 60px;\n    padding-right: 60px;\n  }\n\n  @media (min-width: 1441px) {\n    margin-bottom: 15px;\n  }\n"]))),et=e(4805),it=function(){var n=(0,et.useMediaQuery)({minWidth:376});return(0,L.jsxs)(tt,{children:[(0,L.jsx)(nt,{$weekend:!1,children:n?"mon":"m"}),(0,L.jsx)(nt,{$weekend:!1,children:n?"tue":"t"}),(0,L.jsx)(nt,{$weekend:!1,children:n?"wed":"w"}),(0,L.jsx)(nt,{$weekend:!1,children:n?"thu":"t"}),(0,L.jsx)(nt,{$weekend:!1,children:n?"fri":"f"}),(0,L.jsx)(nt,{$weekend:!0,children:n?"sat":"s"}),(0,L.jsx)(nt,{$weekend:!0,children:n?"sun":"s"})]})},rt=Ln()().startOf("month").startOf("week"),dt=function(){return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(Q,{}),(0,L.jsxs)(An.$0,{children:[(0,L.jsxs)(An.$0,{children:[(0,L.jsx)(it,{}),(0,L.jsx)(Xn,{startDay:rt})]}),(0,L.jsx)(Jn,{})]})]})}}}]);
//# sourceMappingURL=671.95baf01e.chunk.js.map