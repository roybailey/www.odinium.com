"use strict";(self.webpackChunkwww_roybailey_biz=self.webpackChunkwww_roybailey_biz||[]).push([[617],{6932:(e,i,n)=>{n.r(i),n.d(i,{default:()=>R});var t=n(6540);n(5848);const a={menu_margin:"menu_margin_VNn5",footer:"footer_wDdC",footer__content:"footer__content_InK7"};var s=n(4848);const o=e=>{let i=e.namespace||e.id||"unknown";return console.log("Rendering Section "+i),(0,s.jsx)("section",{id:e.id,className:e.className,children:(0,s.jsx)("div",{className:"container",children:(0,s.jsx)("div",{className:"row",children:e.children})})})};n(1552);var l=n(6025);const r="social_n36a",c=e=>{const{social:i}=e;console.log("Rendering SocialMediaList "+JSON.stringify(i));const n="true"===e.vert?"flex":"inline-flex",t=i=>{let{link:t,icon:a}=i;return t?(0,s.jsx)("a",{href:t,target:"_blank",children:(0,s.jsxs)("li",{style:{display:n},children:[(0,s.jsx)("i",{className:"fb fa "+a}),"true"===e.showText?(0,s.jsx)("small",{children:t}):""]})}):""};return(0,s.jsxs)("ul",{className:e.className||r,children:[(0,s.jsx)(t,{link:i.facebook,icon:"fa-facebook-square"}),(0,s.jsx)(t,{link:i.linkedin,icon:"fa-linkedin-square"}),(0,s.jsx)(t,{link:i.rss,icon:"fa-rss-square"}),(0,s.jsx)(t,{link:i.google,icon:"fa-goggle-plus-square"}),(0,s.jsx)(t,{link:i.twitter,icon:"fa-twitter-square"}),(0,s.jsx)(t,{link:i.github,icon:"fa-github-square"})]})};var d=n(5112);const m={overlay:"overlay_kD1G",image:"image_du_4",hero:"hero_X5Zx",hero__button:"hero__button_xD9r"},h=e=>{const{slideshow:i}=e;return console.log("Rendering CarouselContainer "+i.images.length),(0,s.jsx)(d.A,{className:m.carousel,children:i.images.map(((e,i)=>(0,s.jsxs)(d.A.Item,{className:m.item,children:[(0,s.jsx)("img",{className:m.image,src:(0,l.A)(e.image),alt:e.title}),(0,s.jsxs)(d.A.Caption,{className:m.hero,children:[(0,s.jsxs)("hgroup",{children:[(0,s.jsx)("h1",{dangerouslySetInnerHTML:{__html:e.title}}),(0,s.jsx)("h3",{children:e.subtitle})]}),[e.button].map(((e,i)=>(0,s.jsx)("a",{href:e.href,children:(0,s.jsx)("button",{className:m.hero__button,role:"button",children:e.title})},"carousel-link-"+i)))]})]},"carousel-indicator-"+i)))})},_="contact_section_il5I",g="contact_form_uTtv",u="submit_btn_E7y1",p="success_YAGp",x="error_Gnpv",j="contact_text_Q5yM",f="contact_info_QORT",b=e=>{const{contact:i,action:n,method:a,apiUrl:o}=e;console.log("Rendering ContactContainer for "+o);const[l,r]=(0,t.useState)({to:e.to,name:"",email:"",number:"",message:""}),d=e=>{const{name:i,value:n}=e.target;r({...l,[i]:n})},m=()=>{console.log("Form submitted:",l),fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}).then((e=>{if(!e.ok)throw new Error("We are unable to send contact information at this time "+e.statusText);return e.json()})).then((e=>{if(!1===e.sent)throw console.error("There was a problem with the email operation:",response),new Error("We are unable to send contact information at this time "+response.statusText);console.log("Success:",e),document.getElementById("contact_form").style.display="none",document.getElementById("contact_form_message").textContent="Thanks!  Your details have been sent to us : "+e.message,document.getElementById("contact_form_message").classList.add(p)})).catch((e=>{console.error("There was a problem with the fetch operation:",e),console.error("There was a problem with the fetch operation:",e.message),document.getElementById("contact_form").style.display="none",document.getElementById("contact_form_message").textContent=e,document.getElementById("contact_form_message").classList.add(x)}))};return(0,s.jsxs)("div",{className:"row "+_,children:[(0,s.jsx)("h1",{children:i.title}),(0,s.jsx)("h3",{id:"contact_form_message",children:i.description}),(0,s.jsx)("div",{className:"col col--6",children:(0,s.jsx)("div",{className:g,children:(0,s.jsx)("form",{onSubmit:e=>{e.preventDefault(),m()},children:(0,s.jsxs)("fieldset",{id:"contact_form",children:[(0,s.jsx)("div",{id:"result"}),(0,s.jsx)("label",{htmlFor:"to",children:(0,s.jsx)("input",{id:"to",type:"text",name:"to",defaultValue:l.to,hidden:!0})}),(0,s.jsx)("label",{htmlFor:"name",children:(0,s.jsx)("input",{id:"name",type:"text",name:"name",placeholder:"Enter Your Name",value:l.name,onChange:d})}),(0,s.jsx)("label",{htmlFor:"email",children:(0,s.jsx)("input",{id:"email",type:"email",name:"email",placeholder:"Enter Your Email",value:l.email,onChange:d})}),(0,s.jsx)("label",{htmlFor:"number",children:(0,s.jsx)("input",{id:"number",type:"text",name:"number",placeholder:"Phone Number",value:l.number,onChange:d})}),(0,s.jsx)("label",{htmlFor:"message",children:(0,s.jsx)("textarea",{name:"message",id:"message",placeholder:"Enter Your Message",value:l.message,onChange:d})}),(0,s.jsx)("button",{className:"button button--primary "+u,id:"submit_btn",children:"Submit"})]})})})}),(0,s.jsx)("div",{className:"col col--6",children:(0,s.jsxs)("div",{className:j,children:[(0,s.jsx)("p",{children:i.footnote}),(0,s.jsx)("h3",{children:"contact info"}),(0,s.jsx)("ul",{className:f,children:i.address.map(((e,i)=>(0,s.jsx)("li",{children:e},"contact.detail."+i)))}),(0,s.jsx)("h3",{children:i.follow}),(0,s.jsx)(c,{social:i.social})]})})]})},y={mainlogo:"mainlogo_RaCg",mainlogo__image:"mainlogo__image_hGX8",mainlogo__description:"mainlogo__description_duui",mainlogo__description__title:"mainlogo__description__title_PPll",mainlogo__description__description:"mainlogo__description__description_T6Dd",mainlogo__social:"mainlogo__social__Dfy",social:"social_Yz0W"},v=e=>(0,s.jsxs)("div",{className:y.mainlogo,children:[(0,s.jsx)("div",{className:y.mainlogo__image,children:(0,s.jsx)("img",{src:(0,l.A)(e.profile.image),alt:e.profile.title})}),(0,s.jsxs)("div",{className:y.mainlogo__description,children:[(0,s.jsx)("a",{href:"/",children:(0,s.jsx)("h1",{className:y.mainlogo__description__title,style:{margin:0},children:e.profile.title})}),(0,s.jsx)("h2",{className:y.mainlogo__description__description,children:e.profile.description}),e.profile.social?(0,s.jsx)("div",{className:[y.mainlogo__social,y.social].join(" "),children:(0,s.jsx)(c,{social:e.profile.social,className:y.social})}):""]})]}),w={main_header:"main_header_V_UZ",main_header__spacer:"main_header__spacer_js7u",sticky:"sticky_uZZg",main_header__row:"main_header__row_wfa1",main_header__content:"main_header__content_Fsz2",nav:"nav_I2oy",mobile_toggle:"mobile_toggle_AiM_","open-nav":"open-nav_sTtE","mobile-toggle":"mobile-toggle_ttwE",mainmenu:"mainmenu_PKBI"},N=e=>{console.log("Rendering MainHeader "+JSON.stringify(e));const i=e=>(0,s.jsx)("ul",{className:w.mainmenu,children:e.menu.map(((e,i)=>(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:e.href,children:e.title})},"menuitem."+i)))});return(0,s.jsx)("header",{className:[w.main_header,"true"===e.sticky?w.sticky:""].join(" "),children:(0,s.jsx)("div",{className:w.main_header__row,children:(0,s.jsxs)("div",{className:w.main_header__content,children:[(0,s.jsx)(v,{profile:e.profile}),(0,s.jsxs)("div",{className:w.mobile_toggle,children:[" ",(0,s.jsx)("span",{})," ",(0,s.jsx)("span",{})," ",(0,s.jsx)("span",{})]}),e.menu?(0,s.jsx)("nav",{className:w.nav,children:(0,s.jsx)(i,{menu:e.menu})}):""]})})})},k="service_bar__qwp",C="service_box_yfOG",S="service_point_G9Bh",T="ico_bwOs",E=e=>(console.log("Rendering ServiceModule"),(0,s.jsx)("div",{className:k,children:e.services.map(((e,i)=>(0,s.jsx)("div",{className:C,children:(0,s.jsxs)("div",{className:S,children:[(0,s.jsx)("div",{className:T,children:(0,s.jsx)("i",{className:e.icon})}),(0,s.jsx)("h2",{children:e.title}),(0,s.jsx)("p",{children:e.description})]})},"service."+i)))})),A={tab_bar:"tab_bar_CnnA",tab__title:"tab__title_F9dV",nav_tabs:"nav_tabs_FibA",tab_pane:"tab_pane_I63a"};var I=n(2014),O=n(7867),F=n(8470);const B=e=>(console.log("Rendering TabPanel "+e.tabs.length),(0,s.jsx)("div",{className:A.tab_bar,children:(0,s.jsx)(F.A,{defaultActiveKey:"tab0",id:"tabbar",className:[A.nav_tabs].join(" "),children:e.tabs.map(((e,i)=>(0,s.jsx)(I.A,{eventKey:"tab"+i,className:A.tab_pane,title:(0,s.jsx)("div",{"data-toggle":"tab",className:A.tab__title,children:(0,s.jsx)("i",{className:e.icon})}),children:(0,s.jsxs)(O.A,{idx:"tab"+i,children:[(0,s.jsx)("h3",{dangerouslySetInnerHTML:{__html:e.title}}),(0,s.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]},"tab-content-"+i)},"tab-pane-"+i)))})}));function R(){const e={twitter:"http://twitter.com/roybaileybiz",linkedin:"https://www.linkedin.com/in/roybailey",github:"https://github.com/roybailey"},i={image:"img/gear.png",title:"Odinium Ltd",description:"Software Consultancy"},n=e=>(0,s.jsx)(N,{menu:[{href:"#ABOUT",title:"About"},{href:"#SERVICES",title:"Services"},{href:"#CONTACT",title:"Contact"}],profile:i,sticky:"true"}),t=e=>(0,s.jsx)(h,{slideshow:{images:[{title:"Our <span>Skills</span>",image:"/img/backdrops/hands-coding.jpg",subtitle:"Management & Software Engineering",button:{href:"#SERVICES",title:"Find out more..."}},{title:"Our <span>Technologies</span>",image:"/img/backdrops/desktop-charts.jpg",subtitle:"Fit For Purpose",button:{href:"#ABOUT",title:"Find out more..."}},{title:"Contact <span>US</span>",image:"/img/backdrops/coding-screen.jpg",subtitle:"Good talent is hard to find",button:{href:"#CONTACT",title:"Get in touch..."}}]}}),l=i=>(0,s.jsx)(b,{to:i.to,apiUrl:i.apiUrl,action:i.action,method:i.method,contact:{title:"Contact US",footnote:"How may we help you?",follow:"Follow The Founder",address:["London, UK","+44 7710 379914"],social:e}}),r=e=>(0,s.jsx)(E,{services:[{title:"User Centric",icon:"fa fa-user",description:"Very client focused and prefer talking directly with customers.\n         Always delivering pragmatic commercial solutions based on constraints."},{title:"Quality Coding",icon:"fa fa-code",description:"Lead by example, hands on coding, working alongside existing\n         teams to ensure knowledge sharing, coaching, and best outcome."},{title:"Simple Solutions",icon:"fa fa-thumbs-up",description:"Over two decades of experience designing solutions.\n         Good software should reduce complexity."},{title:"Responsive",icon:"fa fa-comments",description:"Agile delivery with a responsive collaborative approach to\n         technical and delivery challenges."}]}),c=e=>(0,s.jsx)(B,{title:"See the <span>Services</span> we offer",tabs:[{id:"sectionA",title:"Strategy",icon:"fa fa-lightbulb-o",description:"Looking into your existing IT systems and products to help your\n         define a strategy to get where you need to be."},{id:"sectionB",title:"Planning",icon:"fa fa-compass",description:"Working alongside your programme and project managers to ensure\n         realistic and approriate planning."},{id:"sectionC",title:"Engineering",icon:"fa fa-cogs",description:"Directly contributing to the code with emphasis on creating\n         a structure for all developers to gain productivity."},{id:"sectionD",title:"Trajectory",icon:"fa fa-paper-plane",description:"Building momentum through understanding and creating the\n         foundations for long term success."}].map((e=>(e.href="#"+e.id,e)))}),d=e=>(0,s.jsx)("div",{id:"footer",className:a.footer,children:(0,s.jsxs)("div",{className:a.footer__content,children:[(0,s.jsx)(v,{profile:i}),(0,s.jsxs)("p",{children:["Copyright (c) ",(new Date).getFullYear()," ",(0,s.jsx)("a",{href:"http://www.odinium.com",children:"Odinium Ltd"}),", a private UK company providing consultancy on Software projects.",(0,s.jsx)("br",{}),"Get in touch if you need to hire an experienced Management and Software Engineering team."]})]})}),m=e=>(0,s.jsxs)("div",{children:[(0,s.jsx)(n,{}),(0,s.jsx)("div",{className:a.menu_margin}),(0,s.jsx)(t,{}),(0,s.jsx)(o,{id:"ABOUT",children:(0,s.jsx)(r,{})}),(0,s.jsx)(o,{id:"SERVICES",children:(0,s.jsx)(c,{})}),(0,s.jsx)(o,{id:"CONTACT",children:(0,s.jsx)(l,{to:"odinium.com",apiUrl:"https://api.odinium.com/email/v1/contact"})}),(0,s.jsx)(d,{})]});return(0,s.jsx)(m,{})}}}]);