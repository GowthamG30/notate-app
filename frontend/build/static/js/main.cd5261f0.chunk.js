(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{42:function(t,e,n){"use strict";n.r(e);var c=n(2),r=n(17),o=n.n(r),a=n(5),i=n(0);var l=function(){return Object(i.jsx)("header",{children:Object(i.jsx)("h1",{children:"Keeper"})})};var u=function(){var t=new Date;return Object(i.jsx)("footer",{children:Object(i.jsxs)("p",{children:["Copyright \xa9 ",t.getFullYear()]})})};var s=function(t){return Object(i.jsxs)("div",{className:"note",children:[Object(i.jsx)("h1",{children:t.title}),Object(i.jsx)("p",{children:t.content}),Object(i.jsx)("button",{onClick:function(){t.onDelete(t.id)},children:"DELETE"})]})},j=n(4),d=n(8);var h=function(t){var e=Object(c.useState)({title:"",content:""}),n=Object(a.a)(e,2),r=n[0],o=n[1];function l(t){var e=t.target,n=e.name,c=e.value;o((function(t){return Object(d.a)(Object(d.a)({},t),{},Object(j.a)({},n,c))}))}return Object(i.jsx)("div",{children:Object(i.jsxs)("form",{children:[Object(i.jsx)("input",{name:"title",onChange:l,value:r.title,placeholder:"Title"}),Object(i.jsx)("textarea",{name:"content",onChange:l,value:r.content,placeholder:"Take a note...",rows:"3"}),Object(i.jsx)("button",{onClick:function(e){t.onAdd(r),o({title:"",content:""}),e.preventDefault()},children:"Add"})]})})},f=n(3),b=n.n(f);var O=function(){var t=Object(c.useState)([]),e=Object(a.a)(t,2),n=e[0],r=e[1];function o(t){b.a.delete("/api/del/"+t).then((function(t){return console.log(t)})).catch((function(t){return console.error(t)})),b.a.get("/api/all").then((function(t){return r(t.data)})).catch((function(t){return console.error(t)}))}return Object(c.useEffect)((function(){b.a.get("/api/all").then((function(t){return r(t.data)})).catch((function(t){return console.error(t)}))})),console.log(n),Object(i.jsxs)("div",{children:[Object(i.jsx)(l,{}),Object(i.jsx)(h,{onAdd:function(t){var e=JSON.stringify({title:t.title,content:t.content});b.a.post("/api/add",e,{headers:{"content-type":"application/json"}}).then((function(t){return console.log(t)})).catch((function(t){return console.error(t)})),b.a.get("/api/all").then((function(t){return r(t.data)})).catch((function(t){return console.error(t)}))}}),n.map((function(t){return Object(i.jsx)(s,{id:t._id,title:t.title,content:t.content,onDelete:o},t._id)})),Object(i.jsx)(u,{})]})};o.a.render(Object(i.jsx)(O,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.cd5261f0.chunk.js.map