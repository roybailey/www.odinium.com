"use strict";(self.webpackChunkwww_roybailey_biz=self.webpackChunkwww_roybailey_biz||[]).push([[617],{6932:(e,i,n)=>{n.r(i),n.d(i,{default:()=>F});n(6540),n(5848);const s={menu_margin:"menu_margin_VNn5",footer:"footer_wDdC",footer__content:"footer__content_InK7"};var a=n(4848);const t=e=>{let i=e.namespace||e.id||"unknown";return console.log("Rendering Section "+i),(0,a.jsx)("section",{id:e.id,className:e.className,children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"row",children:e.children})})})};n(1552);var o=n(6025);const l="social_n36a",r=e=>{const{social:i}=e;console.log("Rendering SocialMediaList "+JSON.stringify(i));const n="true"===e.vert?"flex":"inline-flex",s=i=>{let{link:s,icon:t}=i;return s?(0,a.jsx)("a",{href:s,target:"_blank",children:(0,a.jsxs)("li",{style:{display:n},children:[(0,a.jsx)("i",{className:"fb fa "+t}),"true"===e.showText?(0,a.jsx)("small",{children:s}):""]})}):""};return(0,a.jsxs)("ul",{className:e.className||l,children:[(0,a.jsx)(s,{link:i.facebook,icon:"fa-facebook-square"}),(0,a.jsx)(s,{link:i.linkedin,icon:"fa-linkedin-square"}),(0,a.jsx)(s,{link:i.rss,icon:"fa-rss-square"}),(0,a.jsx)(s,{link:i.google,icon:"fa-goggle-plus-square"}),(0,a.jsx)(s,{link:i.twitter,icon:"fa-twitter-square"}),(0,a.jsx)(s,{link:i.github,icon:"fa-github-square"})]})};var c=n(5112);const d={overlay:"overlay_kD1G",image:"image_du_4",hero:"hero_X5Zx",hero__button:"hero__button_xD9r"},m=e=>{const{slideshow:i}=e;return console.log("Rendering CarouselContainer "+i.images.length),(0,a.jsx)(c.A,{className:d.carousel,children:i.images.map(((e,i)=>(0,a.jsxs)(c.A.Item,{className:d.item,children:[(0,a.jsx)("img",{className:d.image,src:(0,o.A)(e.image),alt:e.title}),(0,a.jsxs)(c.A.Caption,{className:d.hero,children:[(0,a.jsxs)("hgroup",{children:[(0,a.jsx)("h1",{dangerouslySetInnerHTML:{__html:e.title}}),(0,a.jsx)("h3",{children:e.subtitle})]}),[e.button].map(((e,i)=>(0,a.jsx)("a",{href:e.href,children:(0,a.jsx)("button",{className:d.hero__button,role:"button",children:e.title})},"carousel-link-"+i)))]})]},"carousel-indicator-"+i)))})},h="contact_section_il5I",_="contact_form_uTtv",g="submit_btn_E7y1",p="contact_text_Q5yM",u="contact_info_QORT",x=e=>{const{contact:i}=e;return console.log("Rendering ContactContainer"),(0,a.jsxs)("div",{className:"row "+h,children:[(0,a.jsx)("h1",{children:i.title}),(0,a.jsx)("p",{children:i.description}),(0,a.jsx)("div",{className:"col col--6",children:(0,a.jsx)("div",{className:_,children:(0,a.jsxs)("fieldset",{id:"contact_form",children:[(0,a.jsx)("div",{id:"result"}),(0,a.jsx)("label",{htmlFor:"name",children:(0,a.jsx)("input",{type:"text",name:"name",id:"name",placeholder:"Enter Your Name"})}),(0,a.jsx)("label",{htmlFor:"email",children:(0,a.jsx)("input",{type:"email",name:"email",id:"email",placeholder:"Enter Your Email"})}),(0,a.jsx)("label",{htmlFor:"phone",children:(0,a.jsx)("input",{type:"text",name:"phone",id:"phone",placeholder:"Phone Number"})}),(0,a.jsx)("label",{htmlFor:"message",children:(0,a.jsx)("textarea",{name:"message",id:"message",placeholder:"Enter Your Message"})}),(0,a.jsx)("button",{className:"button button--primary "+g,id:"submit_btn",children:"Submit"})]})})}),(0,a.jsx)("div",{className:"col col--6",children:(0,a.jsxs)("div",{className:p,children:[(0,a.jsx)("p",{children:i.footnote}),(0,a.jsx)("h3",{children:"contact info"}),(0,a.jsx)("ul",{className:u,children:i.address.map(((e,i)=>(0,a.jsx)("li",{children:e},"contact.detail."+i)))}),(0,a.jsx)("h3",{children:i.follow}),(0,a.jsx)(r,{social:i.social})]})})]})},j={mainlogo:"mainlogo_RaCg",mainlogo__image:"mainlogo__image_hGX8",mainlogo__description:"mainlogo__description_duui",mainlogo__description__title:"mainlogo__description__title_PPll",mainlogo__description__description:"mainlogo__description__description_T6Dd",mainlogo__social:"mainlogo__social__Dfy",social:"social_Yz0W"},b=e=>(0,a.jsxs)("div",{className:j.mainlogo,children:[(0,a.jsx)("div",{className:j.mainlogo__image,children:(0,a.jsx)("img",{src:(0,o.A)(e.profile.image),alt:e.profile.title})}),(0,a.jsxs)("div",{className:j.mainlogo__description,children:[(0,a.jsx)("a",{href:"/",children:(0,a.jsx)("h1",{className:j.mainlogo__description__title,style:{margin:0},children:e.profile.title})}),(0,a.jsx)("h2",{className:j.mainlogo__description__description,children:e.profile.description}),e.profile.social?(0,a.jsx)("div",{className:[j.mainlogo__social,j.social].join(" "),children:(0,a.jsx)(r,{social:e.profile.social,className:j.social})}):""]})]}),f={main_header:"main_header_V_UZ",main_header__spacer:"main_header__spacer_js7u",sticky:"sticky_uZZg",main_header__row:"main_header__row_wfa1",main_header__content:"main_header__content_Fsz2",nav:"nav_I2oy",mobile_toggle:"mobile_toggle_AiM_","open-nav":"open-nav_sTtE","mobile-toggle":"mobile-toggle_ttwE",mainmenu:"mainmenu_PKBI"},v=e=>{console.log("Rendering MainHeader "+JSON.stringify(e));const i=e=>(0,a.jsx)("ul",{className:f.mainmenu,children:e.menu.map(((e,i)=>(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:e.href,children:e.title})},"menuitem."+i)))});return(0,a.jsx)("header",{className:[f.main_header,"true"===e.sticky?f.sticky:""].join(" "),children:(0,a.jsx)("div",{className:f.main_header__row,children:(0,a.jsxs)("div",{className:f.main_header__content,children:[(0,a.jsx)(b,{profile:e.profile}),(0,a.jsxs)("div",{className:f.mobile_toggle,children:[" ",(0,a.jsx)("span",{})," ",(0,a.jsx)("span",{})," ",(0,a.jsx)("span",{})]}),e.menu?(0,a.jsx)("nav",{className:f.nav,children:(0,a.jsx)(i,{menu:e.menu})}):""]})})})},y="service_bar__qwp",N="service_box_yfOG",w="service_point_G9Bh",k="ico_bwOs",S=e=>(console.log("Rendering ServiceModule"),(0,a.jsx)("div",{className:y,children:e.services.map(((e,i)=>(0,a.jsx)("div",{className:N,children:(0,a.jsxs)("div",{className:w,children:[(0,a.jsx)("div",{className:k,children:(0,a.jsx)("i",{className:e.icon})}),(0,a.jsx)("h2",{children:e.title}),(0,a.jsx)("p",{children:e.description})]})},"service."+i)))})),C={tab_bar:"tab_bar_CnnA",tab__title:"tab__title_F9dV",nav_tabs:"nav_tabs_FibA",tab_pane:"tab_pane_I63a"};var A=n(2014),T=n(7867),E=n(8470);const O=e=>(console.log("Rendering TabPanel "+e.tabs.length),(0,a.jsx)("div",{className:C.tab_bar,children:(0,a.jsx)(E.A,{defaultActiveKey:"tab0",id:"tabbar",className:[C.nav_tabs].join(" "),children:e.tabs.map(((e,i)=>(0,a.jsx)(A.A,{eventKey:"tab"+i,className:C.tab_pane,title:(0,a.jsx)("div",{"data-toggle":"tab",className:C.tab__title,children:(0,a.jsx)("i",{className:e.icon})}),children:(0,a.jsxs)(T.A,{idx:"tab"+i,children:[(0,a.jsx)("h3",{dangerouslySetInnerHTML:{__html:e.title}}),(0,a.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]},"tab-content-"+i)},"tab-pane-"+i)))})}));function F(){const e={twitter:"http://twitter.com/roybaileybiz",linkedin:"https://www.linkedin.com/in/roybailey",github:"https://github.com/roybailey"},i={image:"img/gear.png",title:"Odinium Ltd",description:"Software Consultancy"},n=e=>(0,a.jsx)(v,{menu:[{href:"#ABOUT",title:"About"},{href:"#SERVICES",title:"Services"},{href:"#CONTACT",title:"Contact"}],profile:i,sticky:"true"}),o=e=>(0,a.jsx)(m,{slideshow:{images:[{title:"Our <span>Skills</span>",image:"/img/backdrops/hands-coding.jpg",subtitle:"Management & Software Engineering",button:{href:"#SERVICES",title:"Find out more..."}},{title:"Our <span>Technologies</span>",image:"/img/backdrops/desktop-charts.jpg",subtitle:"Fit For Purpose",button:{href:"#ABOUT",title:"Find out more..."}},{title:"Contact <span>US</span>",image:"/img/backdrops/coding-screen.jpg",subtitle:"Good talent is hard to find",button:{href:"#CONTACT",title:"Get in touch..."}}]}}),l=i=>(0,a.jsx)(x,{contact:{title:"Contact US",footnote:"How may we help you?",follow:"Follow The Founder",address:["London, UK","+44 7710 379914"],social:e}}),r=e=>(0,a.jsx)(S,{services:[{title:"User Centric",icon:"fa fa-user",description:"Very client focused and prefer talking directly with customers.\n         Always delivering pragmatic commercial solutions based on constraints."},{title:"Quality Coding",icon:"fa fa-code",description:"Lead by example, hands on coding, working alongside existing\n         teams to ensure knowledge sharing, coaching, and best outcome."},{title:"Simple Solutions",icon:"fa fa-thumbs-up",description:"Over two decades of experience designing solutions.\n         Good software should reduce complexity."},{title:"Responsive",icon:"fa fa-comments",description:"Agile delivery with a responsive collaborative approach to\n         technical and delivery challenges."}]}),c=e=>(0,a.jsx)(O,{title:"See the <span>Services</span> we offer",tabs:[{id:"sectionA",title:"Strategy",icon:"fa fa-lightbulb-o",description:"Looking into your existing IT systems and products to help your\n         define a strategy to get where you need to be."},{id:"sectionB",title:"Planning",icon:"fa fa-compass",description:"Working alongside your programme and project managers to ensure\n         realistic and approriate planning."},{id:"sectionC",title:"Engineering",icon:"fa fa-cogs",description:"Directly contributing to the code with emphasis on creating\n         a structure for all developers to gain productivity."},{id:"sectionD",title:"Trajectory",icon:"fa fa-paper-plane",description:"Building momentum through understanding and creating the\n         foundations for long term success."}].map((e=>(e.href="#"+e.id,e)))}),d=e=>(0,a.jsx)("div",{id:"footer",className:s.footer,children:(0,a.jsxs)("div",{className:s.footer__content,children:[(0,a.jsx)(b,{profile:i}),(0,a.jsxs)("p",{children:["Copyright (c) ",(new Date).getFullYear()," ",(0,a.jsx)("a",{href:"http://www.odinium.com",children:"Odinium Ltd"}),", a private UK company providing consultancy on Software projects.",(0,a.jsx)("br",{}),"Get in touch if you need to hire an experienced Management and Software Engineering team."]})]})}),h=e=>(0,a.jsxs)("div",{children:[(0,a.jsx)(n,{}),(0,a.jsx)("div",{className:s.menu_margin}),(0,a.jsx)(o,{}),(0,a.jsx)(t,{id:"ABOUT",children:(0,a.jsx)(r,{})}),(0,a.jsx)(t,{id:"SERVICES",children:(0,a.jsx)(c,{})}),(0,a.jsx)(t,{id:"CONTACT",children:(0,a.jsx)(l,{})}),(0,a.jsx)(d,{})]});return(0,a.jsx)(h,{})}}}]);