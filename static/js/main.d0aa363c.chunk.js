(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{18:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(10),i=c.n(n),r=(c(17),c(18),c(3)),l=c(0);var j=function(e){var t=e.contactSelected,c=e.setContactSelected,s=e.projectsSelected,a=e.setProjectsSelected,n=e.aboutSelected,i=e.setAboutSelected;return Object(l.jsx)("ul",{className:"flex-row",children:Object(l.jsxs)("nav",{className:"flex-row",children:[Object(l.jsx)("li",{className:"mx-2 ".concat(n&&"navActive"),children:Object(l.jsx)("span",{onClick:function(){i(!0),a(!1),c(!1)},children:"About Me"})}),Object(l.jsx)("li",{className:"mx-2 ".concat(s&&"navActive"),children:Object(l.jsx)("span",{onClick:function(){a(!0),c(!1),i(!1)},children:"Projects"})}),Object(l.jsx)("li",{className:"mx-2 ".concat(t&&"navActive"),children:Object(l.jsx)("span",{onClick:function(){c(!0),i(!1),a(!1)},children:"Contact"})})]})})},o=c(11);var h=function(){var e=Object(s.useState)({name:"",email:"",message:""}),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(""),i=Object(r.a)(n,2),j=i[0],h=i[1],d=c.name,b=c.email,m=c.message,p=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);h(t?"":"Your email is invalid.")}else e.target.value.length?h(""):h("".concat(e.target.name," is required."))};return Object(l.jsxs)("section",{children:[Object(l.jsx)("h1",{"data-testid":"h1tag",children:"Contact me"}),Object(l.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),j||(a(Object(o.a)({},e.target.name,e.target.value)),console.log("Form",c))},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(l.jsx)("input",{type:"text",name:"name",defaultValue:d,onBlur:p})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(l.jsx)("input",{type:"email",name:"email",defaultValue:b,onBlur:p})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(l.jsx)("textarea",{name:"message",rows:"5",defaultValue:m,onBlur:p})]}),j&&Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"error-text",children:j})}),Object(l.jsx)("button",{"data-testid":"button",type:"submit",children:"Submit"})]})]})};var d=function(){return Object(l.jsxs)("section",{children:[Object(l.jsx)("h1",{id:"about",children:"About Me"}),Object(l.jsxs)("div",{className:"my-2",children:[Object(l.jsx)("p",{children:"Hello, my name is Steven Baty. I'm an accomplished customer service representative who has recently completed the University of Utah's concentrated path for full stack web developer. I have passion for solving problems and searching for innovative solutions and applying this skill set through tech development. I bring a range of experience with HTML, CSS, Javascript, MySQL, PWA, React, MongoDB, Express, and Node."}),Object(l.jsx)("p",{children:"I'm looking for a position where I can use my excellent communication and people skills, while applying my new coding knowledge. I love fast-paced environments and want to contribute to a company's growth and customer happiness. Finding a role with a technology company where I can grow my skills and use my background of delivering impeccable service interactions is my goal."}),Object(l.jsx)("p",{children:"I'm a very dedicated worker; willing to dive in and learn new skills and turn those into actions that benefit the business. Let's chat if this sounds like the person you're looking for."}),Object(l.jsx)("p",{children:"Reach out to me at batysteven1@gmail.com"})]})]})},b=c(8),m=c(4),p=c(12),x=c.p+"static/media/work-1.35959101.jpg",u=c.p+"static/media/work-2.e3d0ee3f.png",O=c.p+"static/media/work-3.787e19a3.png",g=c.p+"static/media/work-4.84611ecf.png",v=c.p+"static/media/work-5.940d52ad.png",f=c.p+"static/media/work-6.cceab3b0.png",N=c.p+"static/media/github.22e65707.svg";var k=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(p.a,{fluid:!0,children:[Object(l.jsxs)(b.a,{className:"justify-content-md-center",children:[Object(l.jsxs)(m.a,{md:"auto",className:"project-container",children:[Object(l.jsx)("img",{src:x,alt:"pizza-hunt",className:"project-img"}),Object(l.jsxs)("div",{className:"project-innards",children:[Object(l.jsxs)("a",{href:"https://arcane-bastion-68718.herokuapp.com/",className:"text-innards",children:[Object(l.jsx)("h3",{children:"Pizza Hunt"}),Object(l.jsx)("h4",{children:"MongoDB/Node"})]}),Object(l.jsx)("a",{href:"https://github.com/batysteven/pizza-hunt",children:Object(l.jsx)("img",{src:N,alt:"github",className:"project-github"})})]})]}),Object(l.jsxs)(m.a,{md:"auto",className:"project-container",children:[Object(l.jsx)("img",{src:u,alt:"the-minimal-prepper",className:"project-img"}),Object(l.jsxs)("div",{className:"project-innards",children:[Object(l.jsxs)("a",{href:"https://minimal-prepper.herokuapp.com/",className:"text-innards",children:[Object(l.jsx)("h3",{children:"The Minimal Prepper"}),Object(l.jsx)("h4",{children:"MySql/Handlebars"})]}),Object(l.jsx)("a",{href:"https://github.com/daniwhitlock/the-minimal-prepper",children:Object(l.jsx)("img",{src:N,alt:"github",className:"project-github"})})]})]})]}),Object(l.jsxs)(b.a,{className:"justify-content-md-center",children:[Object(l.jsxs)(m.a,{md:"auto",className:"project-container",children:[Object(l.jsx)("img",{src:O,alt:"note-taker",className:"project-img"}),Object(l.jsxs)("div",{className:"project-innards",children:[Object(l.jsxs)("a",{href:"https://note-taker-steven.herokuapp.com/",className:"text-innards",children:[Object(l.jsx)("h3",{children:"Note Taker"}),Object(l.jsx)("h4",{children:"MySql/CSS"})]}),Object(l.jsx)("a",{href:"https://github.com/batysteven/note-taker",children:Object(l.jsx)("img",{src:N,alt:"github",className:"project-github"})})]})]}),Object(l.jsxs)(m.a,{md:"auto",className:"project-container",children:[Object(l.jsx)("img",{src:g,alt:"tech-blog",className:"project-img"}),Object(l.jsxs)("div",{className:"project-innards",children:[Object(l.jsxs)("a",{href:"https://tech-blog-steven.herokuapp.com/",className:"text-innards",children:[Object(l.jsx)("h3",{children:"The Tech Blog"}),Object(l.jsx)("h4",{children:"MySql/CSS"})]}),Object(l.jsx)("a",{href:"https://github.com/batysteven/tech-blog",children:Object(l.jsx)("img",{src:N,alt:"github",className:"project-github"})})]})]})]}),Object(l.jsxs)(b.a,{className:"justify-content-md-center",children:[Object(l.jsxs)(m.a,{md:"auto",className:"project-container",children:[Object(l.jsx)("img",{src:v,alt:"budget-tracker",className:"project-img"}),Object(l.jsxs)("div",{className:"project-innards",children:[Object(l.jsxs)("a",{href:"https://stormy-coast-00682.herokuapp.com/",className:"text-innards",children:[Object(l.jsx)("h3",{children:"Budget Tracker"}),Object(l.jsx)("h4",{children:"MongoDB/PWA"})]}),Object(l.jsx)("a",{href:"https://github.com/batysteven/budget-tracker",children:Object(l.jsx)("img",{src:N,alt:"github",className:"project-github"})})]})]}),Object(l.jsxs)(m.a,{md:"auto",className:"project-container",children:[Object(l.jsx)("img",{src:f,alt:"leftovers",className:"project-img"}),Object(l.jsxs)("div",{className:"project-innards",children:[Object(l.jsxs)("a",{href:"https://tonganknight.github.io/awesome-sauce/",className:"text-innards",children:[Object(l.jsx)("h3",{children:"Leftovers"}),Object(l.jsx)("h4",{children:"Javascript/CSS/Node"})]}),Object(l.jsx)("a",{href:"https://github.com/tonganknight/awesome-sauce",children:Object(l.jsx)("img",{src:N,alt:"github",className:"project-github"})})]})]})]})]})})};var y=function(){var e,t=Object(s.useState)(!0),c=Object(r.a)(t,2),a=c[0],n=c[1],i=Object(s.useState)(!1),o=Object(r.a)(i,2),b=o[0],m=o[1],p=Object(s.useState)(!1),x=Object(r.a)(p,2),u=x[0],O=x[1];return!0===a?e=Object(l.jsx)(d,{}):!0===b?e=Object(l.jsx)(h,{}):!0===u&&(e=Object(l.jsx)(k,{})),Object(l.jsxs)("div",{children:[Object(l.jsxs)("header",{className:"flex-row px-1",children:[Object(l.jsx)("h2",{children:Object(l.jsx)("a",{"data-testid":"link",href:"https://github.com/batysteven",className:"my-header",children:"Steven Baty"})}),Object(l.jsx)(j,{contactSelected:b,setContactSelected:m,projectsSelected:u,setProjectsSelected:O,aboutSelected:a,setAboutSelected:n})]}),Object(l.jsx)("main",{children:e})]})},w=c.p+"static/media/linkedin.2eda7bdd.svg";var S=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)("footer",{className:"flex-row",children:[Object(l.jsx)("a",{href:"https://github.com/batysteven",children:Object(l.jsx)("img",{src:N,alt:"github"})}),Object(l.jsx)("a",{href:"https://www.linkedin.com/in/steven-baty-098716a3",children:Object(l.jsx)("img",{src:w,alt:"linkedin"})})]})})};var M=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(y,{}),Object(l.jsx)(S,{})]})};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(M,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.d0aa363c.chunk.js.map