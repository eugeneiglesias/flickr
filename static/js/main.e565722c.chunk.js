(this.webpackJsonpflickr=this.webpackJsonpflickr||[]).push([[0],{14:function(t,e,c){},36:function(t,e,c){},61:function(t,e,c){"use strict";c.r(e);var n=c(0),i=c.n(n),r=c(29),o=c.n(r),a=(c(36),c(8)),s=c(9),j=c(11),h=c(10),l=(c(14),c(13)),b=c(2),u=c(1),d={color:"black"},O=function(t){Object(j.a)(c,t);var e=Object(h.a)(c);function c(){return Object(a.a)(this,c),e.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){return Object(u.jsxs)("div",{style:d,children:[Object(u.jsx)("h2",{children:"About Page"}),Object(u.jsx)("main",{children:Object(u.jsx)("p",{children:"This section contains information about..."})})]})}}]),c}(i.a.Component),p={color:"black"},x=function(t){Object(j.a)(c,t);var e=Object(h.a)(c);function c(){return Object(a.a)(this,c),e.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){return Object(u.jsxs)("div",{style:p,children:[Object(u.jsx)("h2",{children:"Home Page"}),Object(u.jsx)("main",{children:Object(u.jsx)("p",{children:"This is the homepage for now"})})]})}}]),c}(i.a.Component),f=c(30),v=c.n(f),m={color:"black"},g=function(t){Object(j.a)(c,t);var e=Object(h.a)(c);function c(t){var n;return Object(a.a)(this,c),(n=e.call(this,t)).state={photos:[]},n}return Object(s.a)(c,[{key:"componentDidMount",value:function(){var t=this;v.a.get("https://api.flickr.com/services/rest?method=flickr.photos.search&user_id=8588867@N03&format=json&nojsoncallback=1&api_key=e2a8cdf1a07cb3632a92f022e1db5a77&extras=url_sq,url_q,url_m,url_l,url_h&tags=eugenioiglesiasdotcom").then((function(e){t.setState({photos:e.data.photos.photo})})).catch((function(t){console.log("ERROR ",t)}))}},{key:"render",value:function(){var t=this.state.photos.map((function(t,e){return Object(u.jsx)("img",{src:t.url_q,alt:t.title,width:t.width_q,height:t.height_q},t.id)}));return Object(u.jsxs)("div",{style:m,children:[Object(u.jsx)("h2",{children:"My Photos"}),t]})}}]),c}(i.a.Component),k={color:"black"},y=function(t){Object(j.a)(c,t);var e=Object(h.a)(c);function c(){return Object(a.a)(this,c),e.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){return Object(u.jsxs)("div",{style:k,children:[Object(u.jsx)("h2",{children:"Contact Page"}),Object(u.jsx)("main",{children:Object(u.jsx)("p",{children:"This section contains contact information..."})})]})}}]),c}(i.a.Component),C=function(t){Object(j.a)(c,t);var e=Object(h.a)(c);function c(){return Object(a.a)(this,c),e.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){return Object(u.jsx)(l.a,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("div",{children:Object(u.jsx)("nav",{children:Object(u.jsxs)("ul",{id:"navigation",children:[Object(u.jsx)("li",{children:Object(u.jsx)(l.b,{to:"/",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)(l.b,{to:"/about",children:"About"})}),Object(u.jsx)("li",{children:Object(u.jsx)(l.b,{to:"/contact",children:"Contact"})}),Object(u.jsx)("li",{children:Object(u.jsx)(l.b,{to:"/photos",children:"Photos"})})]})})}),Object(u.jsxs)(b.c,{children:[Object(u.jsx)(b.a,{exact:!0,path:"/",children:Object(u.jsx)(x,{})}),Object(u.jsx)(b.a,{path:"/about",children:Object(u.jsx)(O,{})}),Object(u.jsx)(b.a,{path:"/contact",children:Object(u.jsx)(y,{})}),Object(u.jsx)(b.a,{path:"/photos",children:Object(u.jsx)(g,{})})]})]})})}}]),c}(i.a.Component),_=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,62)).then((function(e){var c=e.getCLS,n=e.getFID,i=e.getFCP,r=e.getLCP,o=e.getTTFB;c(t),n(t),i(t),r(t),o(t)}))};o.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(C,{})}),document.getElementById("root")),_()}},[[61,1,2]]]);
//# sourceMappingURL=main.e565722c.chunk.js.map