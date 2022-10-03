(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{28:function(t,e,n){},29:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),s=n(7),d=n.n(s),o=n(4),a=n(10),i=n(11),l=Object(a.b)({name:"words",initialState:{words:[],isCheckingWords:!1,results:[]},reducers:{addDefaultWords:function(t,e){var n;(n=t.words).push.apply(n,Object(i.a)(e.payload))},addWord:function(t,e){t.words.push({engWord:e.payload.engWord,translateWord:e.payload.translateWord})},checkingTenWords:function(t){t.isCheckingWords=!t.isCheckingWords},addTestResults:function(t,e){t.results.push(e.payload)}}}),j=l.actions,u=j.addDefaultWords,b=j.addWord,h=j.checkingTenWords,O=j.addTestResults,x=l.reducer,W=Object(a.a)({reducer:{words:x}}),f=(n(28),n(29),n(3)),g=[{engWord:"one",translateWord:"\u043e\u0434\u0438\u043d"},{engWord:"two",translateWord:"\u0434\u0432\u0430"},{engWord:"three",translateWord:"\u0442\u0440\u0438"},{engWord:"four",translateWord:"\u0447\u043e\u0442\u0438\u0440\u0438"},{engWord:"five",translateWord:"\u043f'\u044f\u0442\u044c"},{engWord:"six",translateWord:"\u0448\u0456\u0441\u0442\u044c"},{engWord:"seven",translateWord:"\u0441\u0456\u043c"},{engWord:"eight",translateWord:"\u0432\u0456\u0441\u0456\u043c"},{engWord:"nine",translateWord:"\u0434\u0435\u0432'\u044f\u0442\u044c"},{engWord:"ten",translateWord:"\u0434\u0435\u0441\u044f\u0442\u044c"},{engWord:"eleven",translateWord:"\u043e\u0434\u0438\u043d\u0430\u0434\u0446\u044f\u0442\u044c"}],p=n(1),v=function(){var t=Object(o.b)(),e=Object(r.useState)(!0),n=Object(f.a)(e,2),c=n[0],s=n[1];return Object(p.jsxs)("div",{children:[c?Object(p.jsx)("p",{children:"Use Default words?"}):Object(p.jsx)("p",{children:"Default words were used"}),c&&Object(p.jsx)("button",{type:"button",onClick:function(){t(u(g)),s(!1)},children:"Default words"})]})},w=function(){var t=Object(r.useState)(""),e=Object(f.a)(t,2),n=e[0],c=e[1],s=Object(r.useState)(""),d=Object(f.a)(s,2),a=d[0],i=d[1],l=Object(o.b)();return Object(p.jsxs)("div",{children:[Object(p.jsx)(v,{}),Object(p.jsxs)("form",{children:[Object(p.jsx)("div",{children:Object(p.jsxs)("label",{htmlFor:"engWordInput",children:["Enter word in English",Object(p.jsx)("input",{type:"text",id:"engWordInput",value:n,onChange:function(t){return c(t.target.value)}})]})}),Object(p.jsx)("div",{children:Object(p.jsxs)("label",{htmlFor:"engTranslateInput",children:["Enter the translation",Object(p.jsx)("input",{type:"text",id:"engTranslateInput",value:a,onChange:function(t){return i(t.target.value)}})]})}),Object(p.jsx)("button",{type:"button",disabled:""===n||""===a,onClick:function(){l(b({engWord:n,translateWord:a})),c(""),i("")},children:"add word"}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{type:"button",onClick:function(){l(h())},children:"check words"})})]})]})},k=o.c,y=function(){return Object(p.jsx)("div",{children:"hello"})},C=function(){var t=Object(o.b)(),e=k((function(t){return t.words.words})),n=Object(r.useState)(0),c=Object(f.a)(n,2),s=c[0],d=c[1],a=Object(r.useState)(0),i=Object(f.a)(a,2),l=i[0],j=i[1],u=Object(r.useState)([]),b=Object(f.a)(u,2),x=b[0],W=b[1],g=function(){return Math.floor(Math.random()*e.length)};return Object(r.useEffect)((function(){var t=[];!function(){for(var n=0;n<10;n+=1){console.log(t);for(var r=g();t.includes(e[r]);)r=g();t[n]=e[r]}}(),W(t)}),[]),s>9&&(t(O(l)),t(h())),Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{type:"button",onClick:function(){return t(h())},children:"Exit"}),Object(p.jsx)("div",{children:e.length>=10?"Let's start the checking!":"Words to check is less then 10. Add ".concat(10-e.length," words or use default words")}),x.length>=10&&Object(p.jsxs)("div",{children:["".concat(x[s].engWord," is:"),Object(p.jsx)("button",{type:"button",onClick:function(){d((function(t){return t+1})),j((function(t){return t+1}))},children:"".concat(x[s].translateWord)})]}),Object(p.jsx)(y,{})]})},m=function(){var t=k((function(t){return t.words.words}));return Object(p.jsx)("div",{children:0===t.length?"Add words to your vocabulary":Object(p.jsxs)("table",{children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"#"}),Object(p.jsx)("td",{children:"English"}),Object(p.jsx)("td",{children:"Translate"})]})}),Object(p.jsx)("tbody",{children:t.map((function(t,e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e+1}),Object(p.jsx)("td",{children:t.engWord}),Object(p.jsx)("td",{children:t.translateWord})]},"".concat(t.engWord).concat(t.translateWord))}))})]})})},S=function(){var t=k((function(t){return t.words.isCheckingWords}));return Object(p.jsxs)("div",{className:"starter",children:[!t&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(w,{}),Object(p.jsx)(m,{})]}),t&&Object(p.jsx)(C,{})]})};d.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(o.a,{store:W,children:Object(p.jsx)(S,{})})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.5d35fc6e.chunk.js.map