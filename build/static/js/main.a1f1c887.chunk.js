(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(0),a=n.n(i),o=n(8),r=n.n(o),s=(n(14),n(6)),l=n(7),u=n(2),j=(n(15),[{name:"J\u0101nis",age:10,ocupation:"Str\u0101dnieks"},{name:"Aigars",age:20,ocupation:"Students"},{name:"Ivars",age:45,ocupation:"Darbinieks"},{name:"Sandris",age:33,ocupation:"Traktorists"},{name:"Aigars",age:27,ocupation:"Kaimbainists"},{name:"Anna",age:29,ocupation:"Skolot\u0101ja"}]),b=function(){var e=j,t=Object(i.useState)(0),n=Object(u.a)(t,2),a=n[0],o=n[1],r=Object(i.useState)([0,0]),b=Object(u.a)(r,2),d=b[0],f=b[1],h=Object(i.useState)([0,0]),g=Object(u.a)(h,2),O=g[0],m=g[1],p=Object(i.useState)(1),v=Object(u.a)(p,2),x=v[0],S=v[1],k=Object(i.useState)(e.length-1),w=Object(u.a)(k,2),T=w[0],C=w[1],E=Object(i.useState)(),N=Object(u.a)(E,2),y=N[0],A=N[1],D=Object(i.useState)({righ:!1,left:!1}),F=Object(u.a)(D,2),X=F[0],I=F[1],J=[e[T],e[a],e[x]],M=Object(i.useRef)(null);Object(i.useEffect)((function(){var t;C(0===a?e.length-1:a-1),S(a===e.length-1?0:a+1),A(null===(t=M.current)||void 0===t?void 0:t.offsetHeight)}),[X]);var B=function(){if(!X.righ&&!X.left){var t=Object(l.a)({},X);t.righ=!0,I(t),setTimeout((function(){o(a===e.length-1?0:a+1),t.righ=!1,I(t)}),300)}},L=function(){if(!X.left&&!X.righ){var t=Object(l.a)({},X);t.left=!0,I(t),setTimeout((function(){o(0===a?e.length-1:a-1),t.left=!1,I(t)}),300)}};Object(i.useEffect)((function(){d[0]<d[1]?L():d[0]>d[1]&&B()}),[d]),Object(i.useEffect)((function(){O[0]<O[1]?L():O[0]>O[1]&&B()}),[O]);var P={0:"slider slider--prev-content ".concat(X.left?"slider--left-animation":""),1:"slider ".concat(X.righ?"slider--center-move-right":X.left&&"slider--center-move-left"),2:"slider slider--next-content ".concat(X.righ?"slider--right-animation":"")};return Object(c.jsxs)("div",{onMouseDown:function(e){m([e.clientX])},onMouseUp:function(e){m([].concat(Object(s.a)(O),[e.clientX]))},onTouchStart:function(e){f([e.changedTouches[0].clientX])},onTouchEnd:function(e){f([].concat(Object(s.a)(d),[e.changedTouches[0].clientX]))},className:"slider-wrapper",children:[Object(c.jsx)("button",{onClick:L,className:"left-arrow"}),Object(c.jsx)("div",{style:{height:"".concat(y,"px")},className:"slider--visible-content-window",children:J.map((function(e,t){return Object(c.jsx)("div",{ref:M,className:P[t],children:Object(c.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"column",textAlign:"center",backgroundColor:"khaki",border:"1px solid red"},children:[Object(c.jsx)("h1",{children:e.name}),Object(c.jsx)("h1",{children:e.age}),Object(c.jsx)("h1",{children:e.ocupation})]})},"".concat(t))}))}),Object(c.jsx)("button",{onClick:B,className:"right-arrow"})]})},d=function(){return Object(c.jsx)("div",{children:Object(c.jsx)(b,{})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),a(e),o(e)}))};r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(d,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.a1f1c887.chunk.js.map