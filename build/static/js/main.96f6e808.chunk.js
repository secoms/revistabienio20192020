(this.webpackJsonprevistabienio20192020=this.webpackJsonprevistabienio20192020||[]).push([[0],{28:function(t,e,n){},33:function(t,e,n){t.exports=n(45)},38:function(t,e,n){},39:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),c=n(13),a=n.n(c),i=(n(38),n(39),n(10)),u=n(14),l=n(15),s=n(18),f=n(16),b=n(19),d=n(28),m=n.n(d),p=function(t){function e(){return Object(u.a)(this,e),Object(s.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(b.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("main",{className:m.a.content},this.props.children))}}]),e}(r.Component),v=function(t){return function(e){function n(){var t,e;Object(u.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=Object(s.a)(this,(t=Object(f.a)(n)).call.apply(t,[this].concat(o)))).state={component:null},e}return Object(b.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;t().then((function(t){e.setState({component:t.default})}))}},{key:"render",value:function(){var t=this.state.component;return t?o.a.createElement(t,this.props):null}}]),n}(r.Component)}((function(){return Promise.all([n.e(2),n.e(4)]).then(n.bind(null,105))}));var h=Object(i.g)((function(){return o.a.createElement("div",{className:"app"},o.a.createElement(p,null,o.a.createElement(i.d,null,o.a.createElement(i.b,{path:"/",exact:!0,component:v}),o.a.createElement(i.a,{to:"/"}))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=n(21),O=n(30),T=n(27),j=n(11),g=n(6),w=n(7),A={materias:null,activeMateria:null,errror:null},I=function(t,e){return Object(w.b)(t,{materias:e.materias.materias})},C=function(t,e){return Object(w.b)(t,{error:e.error})},S=function(t,e){return Object(w.b)(t,{activeMateria:e.activeMateria})},_=function(t,e){return Object(w.b)(t,{activeMateria:null})},y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case g.g:return I(t,e);case g.a:return C(t,e);case g.e:return S(t,e);case g.c:return _(t);default:return t}},M={topicos:null,activeTopico:null,error:null},R=function(t,e){return Object(w.b)(t,{topicos:e.topicos})},k=function(t,e){return Object(w.b)(t,{error:e.error})},F=function(t,e){return Object(w.b)(t,{activeTopico:e.activeTopico})},P=function(t,e){return Object(w.b)(t,{activeTopico:null})},B=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case g.h:return R(t,e);case g.b:return k(t,e);case g.f:return F(t,e);case g.d:return P(t);default:return t}},V=j.d,q=Object(j.c)({materias:y,topicos:B}),D=Object(j.e)(q,V(Object(j.a)(O.a))),x=o.a.createElement(T.a,{store:D},o.a.createElement(E.a,{basename:"/"},o.a.createElement(h,null)));a.a.render(x,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},6:function(t,e,n){"use strict";n.d(e,"h",(function(){return r})),n.d(e,"g",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return a})),n.d(e,"f",(function(){return i})),n.d(e,"e",(function(){return u})),n.d(e,"d",(function(){return l})),n.d(e,"c",(function(){return s}));var r="SET_TOPICOS",o="SET_MATERIAS",c="FETCH_TOPICOS_FAILED",a="FETCH_MATERIAS_FAILED",i="SET_ACTIVE_TOPICO",u="SET_ACTIVE_MATERIA",l="RESET_ACTIVE_TOPICO",s="RESET_ACTIVE_MATERIA"},7:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return c}));var r=n(32),o=function(t,e){return Object(r.a)({},t,{},e)},c=function(t,e){if(console.log("smothScroll -> target: ",t),t=document.querySelector(t),console.log("smothScroll -> target: ",t),null!==t){var n=function(t,e,n,r){return n*(t/=r)*t+e};console.log(t.getBoundingClientRect().top);var r=t.getBoundingClientRect().top+window.scrollY+500,o=window.pageYOffset,c=r-o,a=null;requestAnimationFrame((function t(r){null===a&&(a=r);var i=r-a,u=n(i,o,c,e);window.scrollTo(0,u),i<e&&requestAnimationFrame(t)}))}}}},[[33,1,3]]]);
//# sourceMappingURL=main.96f6e808.chunk.js.map