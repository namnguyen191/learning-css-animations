(this["webpackJsonpreact-css-animation"]=this["webpackJsonpreact-css-animation"]||[]).push([[0],{15:function(e,t,a){e.exports={appleNav:"AppleNavbar_appleNav__1YYHA",navItems:"AppleNavbar_navItems__3XVyE"}},18:function(e,t,a){e.exports={homePageContainer:"HomePage_homePageContainer__mNomb"}},30:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(17),i=a.n(r),s=a(4),l=a(2),o=a(9),j=a.n(o),b=a(0),d=function(e){var t=Object(n.useRef)(null),a=Object(n.useRef)(null),c=Object(n.useRef)(null),r=e.title,i=e.text,s=e.width,l=void 0===s?240:s,o=e.height,d=void 0===o?320:o,x=e.imageUrl;return Object(b.jsx)("div",{className:j.a.parallaxCardContainer,onMouseMove:function(e){if(!(a&&a.current&&t&&t.current&&c&&c.current))return new Error("Element ref is not setting up correctly");var n=(e.pageX-t.current.offsetLeft-l/2)/l,r=30*n,i=(e.pageY-t.current.offsetTop-d/2)/d,s=-30*i;a.current.style.transform="rotateY(".concat(r,"deg) rotateX(").concat(s,"deg)");var o=-40*n,j=-40*i;c.current.style.transform="translateX(".concat(o,"px) translateY(").concat(j,"px)")},onMouseLeave:function(){a&&a.current&&t&&t.current&&c&&c.current&&(a.current.style.transform="rotateY(0deg) rotateX(0deg)",c.current.style.transform="translateX(0px) translateY(0px)")},ref:t,children:Object(b.jsxs)("div",{className:j.a.card,ref:a,style:{width:l+"px",height:d+"px"},children:[Object(b.jsx)("div",{className:j.a.cardBg,ref:c,style:{backgroundImage:"url(".concat(x,")")}}),Object(b.jsxs)("div",{className:j.a.cardInfo,children:[Object(b.jsx)("h1",{className:j.a.title,children:r}),Object(b.jsx)("p",{className:j.a.text,children:i})]})]})})},x=a(18),u=a.n(x),h=a.p+"static/media/animated-icons-bg.01e5cb11.gif",f=a.p+"static/media/face-cursor-tracer.8b8e8eee.gif",O=a.p+"static/media/hot-cup-of-tea.85f3f8b7.gif",p=a.p+"static/media/neon-buttons.d0b17da1.gif",m=a.p+"static/media/neon-loading.037b85ce.gif",g=a.p+"static/media/neon-text.71641342.gif",y=a.p+"static/media/revert-tetric.603f6fbe.gif",v=a.p+"static/media/wavy-three-d.05a2bd0b.gif",_=function(){return Object(b.jsxs)("div",{className:u.a.homePageContainer,children:[Object(b.jsx)(s.b,{to:"/animated-icon-background",children:Object(b.jsx)(d,{title:"Animated Icons Background",text:"Icons, icons everywhere, RIP fps",imageUrl:h})}),Object(b.jsx)(s.b,{to:"/background-revert-tetric",children:Object(b.jsx)(d,{title:"Revert Tetric",text:"When ur bad at tetric, just let css play the game for you",imageUrl:y})}),Object(b.jsx)(s.b,{to:"/three-d-wavy-circle",children:Object(b.jsx)(d,{title:"3D Wavy Circle",text:"Don't know what this is, but it's so satisfying",imageUrl:v})}),Object(b.jsx)(s.b,{to:"/hot-cup-of-tea",children:Object(b.jsx)(d,{title:"Hot Cup of Tea",text:"Cause coffee sucks!",imageUrl:O})}),Object(b.jsx)(s.b,{to:"/neon-loading",children:Object(b.jsx)(d,{title:"Neon Loading",text:"Trippy AF",imageUrl:m})}),Object(b.jsx)(s.b,{to:"/neon-text",children:Object(b.jsx)(d,{title:"Neon Text",text:"Hello darkness my old friend",imageUrl:g})}),Object(b.jsx)(s.b,{to:"/neon-button",children:Object(b.jsx)(d,{title:"Neon Button",text:"Oooh So Shiny!",imageUrl:p})}),Object(b.jsx)(s.b,{to:"/face-cursor-tracer",children:Object(b.jsx)(d,{title:"Eye Tracker",text:"No touchy my facy",imageUrl:f})})]})},N=a(15),C=a.n(N),k=function(e){var t=e.children;return Object(b.jsx)("nav",{className:C.a.appleNav,role:"navigation",children:Object(b.jsx)("ul",{className:C.a.navItems,children:t})})},w=Object(n.lazy)((function(){return a.e(5).then(a.bind(null,40))})),I=Object(n.lazy)((function(){return a.e(7).then(a.bind(null,41))})),P=Object(n.lazy)((function(){return a.e(3).then(a.bind(null,42))})),z=Object(n.lazy)((function(){return a.e(4).then(a.bind(null,43))})),U=Object(n.lazy)((function(){return a.e(9).then(a.bind(null,44))})),A=Object(n.lazy)((function(){return a.e(10).then(a.bind(null,45))})),B=Object(n.lazy)((function(){return a.e(8).then(a.bind(null,46))})),X=Object(n.lazy)((function(){return a.e(6).then(a.bind(null,47))})),Y=function(){return Object(b.jsxs)("div",{children:[Object(b.jsxs)(k,{children:[Object(b.jsx)(s.b,{to:"/",style:{color:"#fff"},children:"Home"}),Object(b.jsx)(s.b,{to:"/",style:{color:"#fff"},children:Object(b.jsx)("i",{style:{fontSize:"27px"},className:"fab fa-github"})})]}),Object(b.jsx)(n.Suspense,{fallback:Object(b.jsx)("p",{children:"Loading"}),children:Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{exact:!0,path:"/",children:Object(b.jsx)(_,{})}),Object(b.jsx)(l.a,{exact:!0,path:"/face-cursor-tracer",children:Object(b.jsx)(X,{})}),Object(b.jsx)(l.a,{exact:!0,path:"/neon-button",children:Object(b.jsx)(B,{})}),Object(b.jsx)(l.a,{exact:!0,path:"/neon-text",children:Object(b.jsx)(A,{})}),Object(b.jsx)(l.a,{exact:!0,path:"/neon-loading",children:Object(b.jsx)(U,{})}),Object(b.jsx)(l.a,{path:"/animated-icon-background",children:Object(b.jsx)(z,{})}),Object(b.jsx)(l.a,{path:"/background-revert-tetric",children:Object(b.jsx)(w,{})}),Object(b.jsx)(l.a,{path:"/three-d-wavy-circle",children:Object(b.jsx)(P,{})}),Object(b.jsx)(l.a,{path:"/hot-cup-of-tea",children:Object(b.jsx)(I,{})})]})})]})};a(30);i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(s.a,{basename:"/learning-css-animations",children:Object(b.jsx)(Y,{})})}),document.getElementById("root"))},9:function(e,t,a){e.exports={parallaxCardContainer:"ParallaxCard_parallaxCardContainer__B5339",card:"ParallaxCard_card__jnAg4",cardBg:"ParallaxCard_cardBg__cb2Qp",cardInfo:"ParallaxCard_cardInfo__2pMrr",text:"ParallaxCard_text__QriAa",title:"ParallaxCard_title__2HelX"}}},[[31,1,2]]]);
//# sourceMappingURL=main.b342d2d5.chunk.js.map