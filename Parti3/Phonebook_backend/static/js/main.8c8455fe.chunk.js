(this.webpackJsonpexo=this.webpackJsonpexo||[]).push([[0],{39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t(1),u=t.n(c),i=t(15),a=t.n(i),o=t(6),l=t(3),s=t(4),j=t.n(s),d=function(e){var n=e.recupFilter;return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{children:["Filtrer: ",Object(r.jsx)("input",{onChange:n})]})})},b=function(e){var n=e.message;return null===n?null:Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"sucess",children:n})})},f=function(e){var n=e.error;return null===n?null:Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"error",children:n})})},h=function(e){var n=e.fctSend,t=e.recupName,c=e.recupNumber,u=e.vaName,i=e.valNum;e.myFunction;return Object(r.jsx)("div",{children:Object(r.jsxs)("form",{onSubmit:n,children:[Object(r.jsxs)("div",{children:["name: ",Object(r.jsx)("input",{onChange:t,value:u})]}),Object(r.jsxs)("div",{children:["number: ",Object(r.jsx)("input",{onChange:c,value:i})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",children:"add"})})]})})},O=function(e){var n=e.valeur,t=e.deleteClick;return Object(r.jsxs)("div",{children:[n.name," ",n.number,Object(r.jsx)("button",{onClick:t,children:"Delete"})]})},v="/api/persons",m=function(){return j.a.get(v).then((function(e){return e.data}))},x=function(e){return j.a.post(v,e).then((function(e){return e.data}))},p=function(e,n){return j.a.put(v+"/"+e,n).then((function(e){return e.data}))},g=function(e){return j.a.delete(v+"/"+e).then((function(e){return e.data}))},N=(t(39),function(){var e=Object(c.useState)(""),n=Object(l.a)(e,2),t=n[0],u=n[1],i=Object(c.useState)(""),a=Object(l.a)(i,2),s=a[0],j=a[1],v=Object(c.useState)([]),N=Object(l.a)(v,2),S=N[0],w=N[1],C=Object(c.useState)(null),k=Object(l.a)(C,2),y=k[0],F=k[1],I=Object(c.useState)(null),E=Object(l.a)(I,2),A=E[0],D=E[1],J=function(){m().then((function(e){w(e)}))};Object(c.useEffect)(J,[]);var B=Object(c.useState)(""),M=Object(l.a)(B,2),P=M[0],q=M[1],z=0===P.length?S:S.filter((function(e){return e.name.includes(P)}));return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Phonebook"}),Object(r.jsx)(f,{error:A}),Object(r.jsx)(d,{recupFilter:function(e){q(e.target.value)}}),Object(r.jsx)(b,{message:y,error:A}),Object(r.jsx)("h3",{children:"Add a new"}),Object(r.jsx)(h,{fctSend:function(e){e.preventDefault();var n={name:t,number:s};if(""===t||""===s)alert("Champs vide");else if(""==z.filter((function(e){return e.name==t})))x(n).then((function(e){w(S.concat(e)),j(""),u(""),F("Added "+t),setInterval((function(){F(null)}),5e3)}));else{var r=window.confirm("the name "+t+" Existing of the bd  do you went  Change the Number ???");console.log("r",r);var c=z.filter((function(e){return e.name===t}))[0].id;if(!0===r){var i=S.find((function(e){return e.id===c})),a=Object(o.a)(Object(o.a)({},i),{},{number:s});p(c,a).then((function(e){w(S.map((function(n){return n.id!==c?n:e}))),u(""),j(""),console.log("result",e)})).catch((function(e){D("Information of "+t+" has alrealy been removed from server"),w(S.filter((function(e){return e.id!==c}))),u(""),j(""),setInterval((function(){D(null)}),5e3)}))}}},recupName:function(e){u(e.target.value)},recupNumber:function(e){j(e.target.value)},vaName:t,valNum:s}),Object(r.jsx)("h3",{children:"Numbers"}),z.map((function(e){return Object(r.jsx)(O,{valeur:e,deleteClick:function(){var n;n=e.id,window.confirm("do you went deleted "+t)&&g(n).then((function(e){return J()}))}},e.name)}))]})});a.a.render(Object(r.jsx)(u.a.StrictMode,{children:Object(r.jsx)(N,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.8c8455fe.chunk.js.map