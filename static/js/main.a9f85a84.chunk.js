(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r=n(6),c=n.n(r),a=n(3),s=n(4),u=n(1),o=n.n(u),i=n(2),p=n.n(i),l=(n(12),n(13),n(14),n(0)),j=function(t){var e=t.posts,n=t.postId,r=t.setPostId;return Object(l.jsxs)("div",{className:"PostsList",children:[Object(l.jsx)("h2",{children:"Posts:"}),0===e.length?Object(l.jsx)("p",{children:"Posts not found"}):Object(l.jsx)("ul",{className:"PostsList__list",children:e.map((function(t){return Object(l.jsxs)("li",{className:"PostsList__item",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("b",{children:"[User #".concat(t.userId,"]: ")}),t.title]}),n===t.id?Object(l.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){return r(0)},children:"Close"}):Object(l.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){return r(t.id)},children:"Open"})]},t.id)}))})]})},b=(n(16),n(17),function(){return Object(l.jsx)("div",{className:"Loader",children:Object(l.jsx)("div",{className:"Loader__content"})})}),f="https://mate.academy/students-api",d=function(){var t=Object(a.a)(o.a.mark((function t(e){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(f).concat(e));case 3:return n=t.sent,t.next=6,n.json();case 6:return t.abrupt("return",t.sent);case 9:throw t.prev=9,t.t0=t.catch(0),new Error("".concat(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(o.a.mark((function t(e){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(f).concat(e),{method:"DELETE"});case 3:return n=t.sent,t.next=6,n.json();case 6:return t.abrupt("return",t.sent);case 9:throw t.prev=9,t.t0=t.catch(0),new Error("".concat(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(a.a)(o.a.mark((function t(e,n){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(f).concat(e),{headers:{"Content-type":"application/json; charset=UTF-8"},method:"POST",body:JSON.stringify(n)});case 3:return r=t.sent,t.next=6,r.json();case 6:return t.abrupt("return",t.sent);case 9:throw t.prev=9,t.t0=t.catch(0),new Error("".concat(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n){return t.apply(this,arguments)}}(),O=function(){var t=Object(a.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d("/comments?postId=".concat(e)));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=Object(a.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",m("/comments/".concat(e)));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(a.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",h("/comments",e));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),w=(n(18),p.a.memo((function(t){var e=t.postId,n=t.fetchComments,r=Object(i.useState)(""),c=Object(s.a)(r,2),u=c[0],p=c[1],j=Object(i.useState)(""),f=Object(s.a)(j,2),d=f[0],m=f[1],h=Object(i.useState)(""),O=Object(s.a)(h,2),x=O[0],w=O[1],_=Object(i.useState)(!1),N=Object(s.a)(_,2),y=N[0],k=N[1],S=Object(i.useState)(!1),P=Object(s.a)(S,2),C=P[0],g=P[1],I=function(){y&&k(!1)},E=function(){var t=Object(a.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(e);case 2:return t.next=4,n();case 4:g(!1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(l.jsxs)("form",{className:"NewCommentForm",onSubmit:function(t){(t.preventDefault(),u&&d&&x)?(g(!0),E({postId:e,name:u,email:d,body:x}),p(""),m(""),w("")):k(!0)},children:[Object(l.jsx)("div",{className:"form-field",children:Object(l.jsx)("input",{value:u,type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",onChange:function(t){p(t.target.value),I()}})}),Object(l.jsx)("div",{className:"form-field",children:Object(l.jsx)("input",{value:d,type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input",onChange:function(t){m(t.target.value),I()}})}),Object(l.jsx)("div",{className:"form-field",children:Object(l.jsx)("textarea",{value:x,name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",onChange:function(t){w(t.target.value),I()}})}),Object(l.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",children:"Add a comment"}),C&&Object(l.jsx)(b,{}),y&&Object(l.jsx)("h3",{children:"Fill all fields"})]})}))),_=function(){var t=Object(a.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d("/posts"));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),N=function(){var t=Object(a.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d("/posts?userId=".concat(e)));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=Object(a.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d("/posts/".concat(e)));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),k=function(t){var e=t.postId,n=Object(i.useState)(),r=Object(s.a)(n,2),c=r[0],u=r[1],p=Object(i.useState)([]),j=Object(s.a)(p,2),f=j[0],d=j[1],m=Object(i.useState)(!0),h=Object(s.a)(m,2),v=h[0],_=h[1],N=Object(i.useState)(!0),k=Object(s.a)(N,2),S=k[0],P=k[1],C=function(){var t=Object(a.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(e);case 2:n=t.sent,d(n),_(!1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),g=function(){var t=Object(a.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return _(!0),t.t0=u,t.next=4,y(e);case 4:t.t1=t.sent,(0,t.t0)(t.t1),C();case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(i.useEffect)((function(){0!==e&&g()}),[e]),Object(l.jsxs)("div",{className:"PostDetails",children:[Object(l.jsx)("h2",{children:"Post details:"}),v?Object(l.jsx)(b,{}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("section",{className:"PostDetails__post",children:Object(l.jsx)("p",{children:null===c||void 0===c?void 0:c.title})}),Object(l.jsx)("section",{className:"PostDetails__comments",children:0===f.length?Object(l.jsx)("p",{children:"No comments"}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{type:"button",className:"button",onClick:function(){return P(!S)},children:"".concat(S?"Hide":"Show"," ").concat(f.length," comments")}),S&&Object(l.jsx)("ul",{className:"PostDetails__list",children:f.map((function(t){return Object(l.jsxs)("li",{className:"PostDetails__list-item",children:[Object(l.jsx)("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){x(t.id),d(f.filter((function(e){return e.id!==t.id})))},children:"X"}),Object(l.jsx)("p",{children:t.body})]},t.id)}))})]})}),Object(l.jsx)("section",{children:Object(l.jsx)("div",{className:"PostDetails__form-wrapper",children:Object(l.jsx)(w,{postId:e,fetchComments:C})})})]})]})},S=function(){var t=Object(a.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d("/users"));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),P=function(){var t=Object(i.useState)([]),e=Object(s.a)(t,2),n=e[0],r=e[1],c=Object(i.useState)([]),u=Object(s.a)(c,2),p=u[0],f=u[1],d=Object(i.useState)(!0),m=Object(s.a)(d,2),h=m[0],O=m[1],x=Object(i.useState)(0),v=Object(s.a)(x,2),w=v[0],y=v[1],P=Object(i.useState)(0),C=Object(s.a)(P,2),g=C[0],I=C[1],E=function(){var t=Object(a.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return O(!0),t.next=3,S();case 3:e=t.sent,r(e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),F=function(){var t=Object(a.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_();case 2:e=t.sent,f(e),O(!1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),D=function(){var t=Object(a.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return O(!0),t.next=3,N(g);case 3:e=t.sent,f(e),O(!1);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(i.useEffect)((function(){E()}),[]),Object(i.useEffect)((function(){0===g?F():D()}),[g]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("header",{className:"App__header",children:Object(l.jsxs)("label",{htmlFor:"user-selector",children:["Select a user: \xa0",Object(l.jsxs)("select",{className:"App__user-selector",id:"user-selector",value:g,onChange:function(t){return I(+t.target.value)},children:[Object(l.jsx)("option",{value:"0",children:"All users"}),n.map((function(t){return Object(l.jsx)("option",{value:t.id,children:t.name})}))]})]})}),Object(l.jsxs)("main",{className:"App__main",children:[Object(l.jsx)("div",{className:"App__sidebar",children:h?Object(l.jsx)(b,{}):Object(l.jsx)(j,{posts:p,postId:w,setPostId:y})}),Object(l.jsx)("div",{className:"App__content",children:0!==w&&Object(l.jsx)(k,{postId:w})})]})]})};c.a.render(Object(l.jsx)(P,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.a9f85a84.chunk.js.map