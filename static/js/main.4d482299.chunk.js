(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{42:function(e,t,n){},44:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n.n(s),c=n(22),a=n.n(c),d=n(9),i=n(10),l=n(24),o=n(8),j=Object(l.b)({name:"words",initialState:{words:[],results:[]},reducers:{addDefaultWords:function(e,t){var n;(n=e.words).push.apply(n,Object(o.a)(t.payload))},addWord:function(e,t){e.words.push({engWord:t.payload.engWord,translateWord:t.payload.translateWord})},addTestResults:function(e,t){e.results.push(t.payload)}}}),b=j.actions,u=b.addDefaultWords,h=b.addWord,O=b.addTestResults,x=j.reducer,m=Object(l.a)({reducer:{words:x}}),f=(n(42),n(3)),g=(n(43),n(44),n(1)),p=function(){return Object(g.jsx)("div",{children:"Page not found"})},v=n(4),W=function(){var e=Object(s.useState)(""),t=Object(v.a)(e,2),n=t[0],r=t[1],c=Object(s.useState)(""),a=Object(v.a)(c,2),l=a[0],o=a[1],j=Object(i.b)();return Object(g.jsxs)("div",{children:[Object(g.jsxs)("form",{children:[Object(g.jsx)("div",{children:Object(g.jsxs)("label",{htmlFor:"engWordInput",children:["Enter word in English",Object(g.jsx)("input",{type:"text",id:"engWordInput",value:n,className:"input",onChange:function(e){return r(e.target.value)}})]})}),Object(g.jsx)("div",{children:Object(g.jsxs)("label",{htmlFor:"engTranslateInput",children:["Enter the translation",Object(g.jsx)("input",{type:"text",id:"engTranslateInput",className:"input",value:l,onChange:function(e){return o(e.target.value)}})]})}),Object(g.jsx)("button",{type:"button",className:"button is-primary mt-2",disabled:""===n||""===l,onClick:function(){j(h({engWord:n,translateWord:l})),r(""),o("")},children:"add word"})]}),Object(g.jsxs)("div",{className:"buttons mt-3",children:[Object(g.jsx)("div",{children:Object(g.jsx)(d.b,{to:"/checking",className:"button is-success",children:"check words"})}),Object(g.jsx)("div",{children:Object(g.jsx)(d.b,{to:"/",className:"button is-link",children:"Return to Home Page"})})]})]})},w=n(21),N=n.n(w),y=i.c,k=function(){var e=Object(i.b)(),t=y((function(e){return e.words.words})),n=Object(s.useState)([]),r=Object(v.a)(n,2),c=r[0],a=r[1],l=Object(s.useState)(0),j=Object(v.a)(l,2),b=j[0],u=j[1],h=Object(s.useState)(0),x=Object(v.a)(h,2),m=x[0],p=x[1];Object(s.useEffect)((function(){var e=N.a.sampleSize(t,10);return a(e),function(){return a([])}}),[]);var W=c.length>0&&b<10?function(){var e=N.a.filter(t,(function(e){return e.engWord!==c[b].engWord})),n=N.a.shuffle(e).slice(0,3);return N.a.shuffle([c[b]].concat(Object(o.a)(n)))}():[],w=Object(f.m)();return Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{children:Object(g.jsx)(d.b,{to:"/",className:"button is-danger is-outlined mg-small",children:"Exit"})}),Object(g.jsx)("div",{className:"subtitle is-3",children:t.length>=10?"Let's start the checking!":"Words to check is less then 10. Add ".concat(10-t.length," words or use default words")}),10===c.length&&b<10&&Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{className:"title is-3",children:'"'.concat(c[b].engWord,'" is:')}),Object(g.jsx)("div",{className:"buttons",children:W.map((function(t){return Object(g.jsx)("button",{className:"button is-info is-rounded",type:"button",onClick:function(){c[b].translateWord===t.translateWord&&p((function(e){return e+1})),9===b&&(c[b].translateWord===t.translateWord?e(O(m+1)):e(O(m)),w("/results")),u((function(e){return e+1}))},children:"".concat(t.translateWord)},t.engWord)}))})]})]})},S=[{engWord:"one",translateWord:"\u043e\u0434\u0438\u043d"},{engWord:"two",translateWord:"\u0434\u0432\u0430"},{engWord:"three",translateWord:"\u0442\u0440\u0438"},{engWord:"four",translateWord:"\u0447\u043e\u0442\u0438\u0440\u0438"},{engWord:"five",translateWord:"\u043f'\u044f\u0442\u044c"},{engWord:"six",translateWord:"\u0448\u0456\u0441\u0442\u044c"},{engWord:"seven",translateWord:"\u0441\u0456\u043c"},{engWord:"eight",translateWord:"\u0432\u0456\u0441\u0456\u043c"},{engWord:"nine",translateWord:"\u0434\u0435\u0432'\u044f\u0442\u044c"},{engWord:"ten",translateWord:"\u0434\u0435\u0441\u044f\u0442\u044c"},{engWord:"eleven",translateWord:"\u043e\u0434\u0438\u043d\u0430\u0434\u0446\u044f\u0442\u044c"}],E=function(){var e=Object(i.b)(),t=y((function(e){return e.words.words}));return Object(g.jsx)("div",{children:t.length<10&&Object(g.jsx)("button",{type:"button",className:"button is-warning",onClick:function(){e(u(S))},children:"Use Default words"})})},T=function(){var e=y((function(e){return e.words.words}));return Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"buttons",children:[Object(g.jsx)(E,{}),Object(g.jsx)("div",{children:Object(g.jsx)(d.b,{to:"/input",className:"button is-primary",children:"add word"})}),Object(g.jsx)("div",{children:Object(g.jsx)(d.b,{to:"/checking",className:"button is-link",children:"check words"})})]}),0===e.length?Object(g.jsx)("p",{className:"title is-3",children:"Add words to your vocabulary or use default words"}):Object(g.jsxs)("table",{className:"table is-hoverable is-bordered is-striped",children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:"#"}),Object(g.jsx)("td",{children:"English"}),Object(g.jsx)("td",{children:"Translate"})]})}),Object(g.jsx)("tbody",{children:e.map((function(e,t){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:t+1}),Object(g.jsx)("td",{children:e.engWord}),Object(g.jsx)("td",{children:e.translateWord})]},"".concat(e.engWord).concat(e.translateWord))}))})]})]})},C=function(){var e=y((function(e){return e.words.results})),t=e[e.length-1];return Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:"subtitle is-3",children:"Total ammount of correct answer is - ".concat(t," words")}),Object(g.jsxs)("h1",{className:"title is-1",children:["The result is"," ".concat(t/10*100," %")]}),Object(g.jsxs)("div",{className:"buttons",children:[Object(g.jsx)("div",{children:Object(g.jsx)(d.b,{to:"/",className:"button is-link m-1",children:"Return to Home Page"})}),Object(g.jsx)("div",{children:Object(g.jsx)(d.b,{to:"/history",className:"button is-info m-1",children:"Previous results"})})]})]})},I=function(){var e=y((function(e){return e.words.results})),t=e.reduce((function(e,t){return e+t}),0),n=Math.floor(t/e.length*100)/100/10*100||0;return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{className:"subtitle is-1",children:"All your previous results:"}),Object(g.jsx)("ul",{children:e.map((function(e,t){return Object(g.jsx)("li",{children:"".concat(e/10*100," %")},t)}))}),Object(g.jsx)("h3",{className:"title is-3",children:"Avarage result of all words checking is:"}),Object(g.jsx)("h2",{className:"title is-2",children:"".concat(n," %")}),Object(g.jsx)("div",{children:Object(g.jsx)(d.b,{to:"/",className:"button is-link mg-small",children:"Return to Home Page"})})]})},P=function(){return Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)(f.d,{children:[Object(g.jsx)(f.b,{path:"/",element:Object(g.jsx)(T,{})}),Object(g.jsx)(f.b,{path:"home",element:Object(g.jsx)(f.a,{to:"/",replace:!0})}),Object(g.jsx)(f.b,{path:"input",element:Object(g.jsx)(W,{})}),Object(g.jsx)(f.b,{path:"checking",element:Object(g.jsx)(k,{})}),Object(g.jsx)(f.b,{path:"results",element:Object(g.jsx)(C,{})}),Object(g.jsx)(f.b,{path:"history",element:Object(g.jsx)(I,{})}),Object(g.jsx)(f.b,{path:"*",element:Object(g.jsx)(p,{})})]})})};a.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(i.a,{store:m,children:Object(g.jsx)(d.a,{children:Object(g.jsx)(P,{})})})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.4d482299.chunk.js.map