(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{YMRR:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a("zLVn"),r=a("q1tI"),l=a("zCiS"),o=a("Jg8R"),c=a("LIPB"),i=a("vRHa"),m=function(e){var t=e.posts;return t.length?r.createElement(l.Grid,{col:"1|2",gap:"10|14"},t&&t.map((function(e,t){return r.createElement(l.Div,{key:t,mb:"8"},r.createElement(u,e))}))):null},u=function(e){var t=e.title,a=e.excerpt,m=e.slug,u=e.image,s=e.date,d=e.datetime,p=e.author,E=e.timeToRead,f=Object(n.a)(e,["title","excerpt","slug","image","date","datetime","author","timeToRead"]);return r.createElement(l.Article,f,r.createElement(l.Grid,null,u&&r.createElement(o.d,{href:m,d:"block"},r.createElement(c.a,{src:u,title:t,alt:t})),t&&r.createElement(o.d,{href:m},r.createElement(l.H2,{my:"4",fontSize:"3xl",hoverColor:"primary"},t)),a&&r.createElement(l.P,{mt:"1"},a),r.createElement(i.a,{author:p,timeToRead:E,date:s,datetime:d,fontSize:"md"})))}},hEsK:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return m}));var n=a("zLVn"),r=a("q1tI"),l=a("Jg8R"),o=a("eXLw"),c=a("zCiS"),i=a("YMRR"),m="3584444568";t.default=function(e){var t=e.data,a=Object(n.a)(e,["data"]),m=a.pageContext,u=m.previousPagePath,s=m.nextPagePath;return r.createElement(l.c,{pathname:a.location.pathname},r.createElement(o.a,{src:"posts-header",posts:t.allPost.posts}),t.allPost?r.createElement(c.Section,{py:"8|12|14"},r.createElement(c.Container,null,r.createElement(i.a,Object.assign({},t.allPost,a)),r.createElement(l.g,{previousPagePath:u,nextPagePath:s}))):null,r.createElement(o.a,{src:"posts-footer",videos:t.allPost.posts}))}},vRHa:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("zLVn"),r=a("q1tI"),l=a("zCiS"),o=a("LIPB"),c=function(e){var t=e.author,a=e.datetime,c=e.date,i=e.timeToRead,m=Object(n.a)(e,["author","datetime","date","timeToRead"]);return r.createElement(l.Flexbox,m,t&&r.createElement(l.Flexbox,{alignItems:"center",mr:"2"},r.createElement(o.a,{src:t.picture,d:"inline-block",m:"0",mr:"2",size:"10",rounded:"full",overflow:"hidden"}),r.createElement(l.Span,{fontWeight:"semibold"},t.name)),c&&r.createElement("time",{dateTime:a}," - ",c),i&&r.createElement(l.Span,{ml:"2"}," - ",i," min read"))}}}]);
//# sourceMappingURL=component---node-modules-reflexjs-gatsby-theme-post-src-posts-template-js-fb059aef487848c97080.js.map