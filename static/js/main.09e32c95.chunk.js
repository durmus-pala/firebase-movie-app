(this["webpackJsonpfirebase-movie-app"]=this["webpackJsonpfirebase-movie-app"]||[]).push([[0],{34:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(27),s=a.n(c),i=(a(34),a(23)),o=a(5),l=a(29),u=a(9),j=a(1),b=function(e){var t,a=e.title,n=e.poster_path,r=e.overview,c=e.vote_average;return Object(j.jsxs)("div",{className:"movie",children:[Object(j.jsx)("img",{src:"https://image.tmdb.org/t/p/w1280"+n,alt:"movie_poster"}),Object(j.jsxs)("div",{className:"movie-info",children:[Object(j.jsx)("h3",{children:a}),Object(j.jsx)("span",{className:"tag ".concat((t=c,t>=8?"green":t>=6?"orange":"red")),children:c})]}),Object(j.jsxs)("div",{className:"movie-over",children:[Object(j.jsx)("h2",{children:"Overview:"}),Object(j.jsx)("p",{children:r})]})]})},m=a(17),p=a.n(m),d=a(20),h=a(14),f=(a(37),a(45),h.a.initializeApp({apiKey:"AIzaSyCoTtHjihMCwjjyJkVyax_Hy617UQv0gvs",authDomain:"fir-movie-app-a2cb1.firebaseapp.com",projectId:"fir-movie-app-a2cb1",storageBucket:"fir-movie-app-a2cb1.appspot.com",messagingSenderId:"58149787566",appId:"1:58149787566:web:e0c00c5f2a0736b2cc1a3f"}),function(){var e=Object(d.a)(p.a.mark((function e(t,a,n,r){var c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.auth().createUserWithEmailAndPassword(t,a).then((function(e){var t=e.user;console.log("Regiter User",t),r.push("/")})).catch((function(e){e.code;var t=e.message;alert("Errormessage",t)}));case 3:return c=h.a.auth().currentUser,e.next=6,c.updateProfile({displayName:n});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert("The email adress is already in use by another account!");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a,n,r){return e.apply(this,arguments)}}()),O=function(){var e=Object(d.a)(p.a.mark((function e(t,a,n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.auth().signInWithEmailAndPassword(t,a).then((function(e){n.push("/")})).catch((function(e){var t=e.message;alert(t)}));case 2:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),v=function(){var e=Object(d.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.auth().onAuthStateChanged((function(e){t(e||null)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=new h.a.auth.GoogleAuthProvider;e.setCustomParameters({promt:"select_account"}),h.a.auth().signInWithPopup(e)},g=Object(n.createContext)(),y=function(e){var t=Object(n.useState)(),a=Object(u.a)(t,2),r=a[0],c=a[1];return console.log("currentuser",r),Object(n.useEffect)((function(){v(c)}),[]),Object(j.jsx)(g.Provider,{value:{currentUser:r},children:e.children})},N=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),s=Object(u.a)(c,2),i=s[0],o=s[1],m=Object(n.useContext)(g).currentUser;Object(n.useEffect)((function(){p("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1")}),[]);var p=function(e){fetch(e).then((function(e){return e.json()})).then((function(e){return r(e.results)}))};return Object(j.jsxs)("div",{children:[Object(j.jsx)("form",{className:"search",onSubmit:function(e){e.preventDefault(),i&&m?(p("https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="+i),o("")):alert("Please login to seacrh a movie!")},children:Object(j.jsx)("input",{type:"search",className:"search-input",placeholder:"search a movie...",onChange:function(e){return o(e.target.value)}})}),Object(j.jsx)("div",{className:"movie-container",children:a.map((function(e){return Object(j.jsx)(b,Object(l.a)({},e),e.id)}))})]})},w=function(){var e=Object(o.f)(),t=Object(n.useState)(""),a=Object(u.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(""),i=Object(u.a)(s,2),l=i[0],b=i[1];return Object(j.jsxs)("div",{className:"register",children:[Object(j.jsxs)("div",{className:"register-form",children:[Object(j.jsx)("h1",{className:"form-title display-3",children:"Login"}),Object(j.jsxs)("form",{id:"login",children:[Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{for:"email",className:"form-label display-4",children:"Email"}),Object(j.jsx)("input",{type:"email",id:"email",className:"form-control",placeholder:"Enter your email addresss...",onChange:function(e){return c(e.target.value)}}),Object(j.jsx)("label",{for:"password",className:"form-label display-4",children:"Password"}),Object(j.jsx)("input",{type:"password",id:"password",className:"form-control",placeholder:"Enter your password...",onChange:function(e){return b(e.target.value)}})]}),Object(j.jsx)("input",{type:"button",className:"btn btn-primary form-control",value:"login",onClick:function(){O(r,l,e)}})]}),Object(j.jsx)("button",{className:"btn btn-primary form-control",onClick:function(){x(),e.push("/")},children:"Continue With Google"})]}),Object(j.jsx)("div",{className:"form-image",children:Object(j.jsx)("img",{src:"https://picsum.photos/1200/900",alt:"sample"})})]})},C=function(){var e=Object(o.f)(),t=Object(n.useState)(""),a=Object(u.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(""),i=Object(u.a)(s,2),l=i[0],b=i[1],m=Object(n.useState)(""),p=Object(u.a)(m,2),d=p[0],h=p[1],O=Object(n.useState)(""),v=Object(u.a)(O,2),g=v[0],y=v[1];return Object(j.jsxs)("div",{className:"register",children:[Object(j.jsx)("div",{className:"form-image",children:Object(j.jsx)("img",{src:"https://picsum.photos/1200/900",alt:"sample"})}),Object(j.jsxs)("div",{className:"register-form",children:[Object(j.jsx)("h1",{className:"form-title display-3",children:"Register"}),Object(j.jsx)("form",{id:"register",children:Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{for:"first-name",className:"form-label display-4",children:"Firstname"}),Object(j.jsx)("input",{type:"first-name",id:"first-name",className:"form-control",placeholder:"Enter your first name...",onChange:function(e){return c(e.target.value)}}),Object(j.jsx)("div",{}),Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{for:"last-name",className:"form-label display-4",children:"Email"}),Object(j.jsx)("input",{type:"last-name",id:"last-name",className:"form-control",placeholder:"Enter your last name...",onChange:function(e){return b(e.target.value)}})]}),Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{for:"email",className:"form-label display-4",children:"Email"}),Object(j.jsx)("input",{type:"email",id:"email",className:"form-control",placeholder:"Enter your email addresss...",onChange:function(e){return h(e.target.value)}}),Object(j.jsx)("label",{for:"password",className:"form-label display-4",children:"Password"}),Object(j.jsx)("input",{type:"password",id:"password",className:"form-control",placeholder:"Enter your password...",onChange:function(e){return y(e.target.value)}})]}),Object(j.jsx)("input",{type:"button",className:"btn btn-primary form-control",value:"Register",onClick:function(){var t="".concat(r," ").concat(l);f(d,g,t,e)}})]})}),Object(j.jsx)("button",{className:"btn btn-primary form-control",onClick:function(){x(),e.push("/")},children:"Continue With Google"})]})]})},k=function(){var e=Object(o.f)(),t=Object(n.useContext)(g).currentUser;return Object(j.jsx)("div",{children:Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)("a",{className:"navbar-brand",href:"/",style:{color:"white"},children:"React Movie App"}),Object(j.jsxs)("div",{className:"buttons",children:[t?Object(j.jsx)("h3",{children:t.displayName}):Object(j.jsx)("button",{type:"button",class:"ms-2 btn btn-outline-light",onClick:function(){return e.push("/login")},children:"Login"}),t?Object(j.jsx)("button",{type:"button",class:"ms-2 btn btn-outline-light",onClick:function(){h.a.auth().signOut()},children:"Logout"}):Object(j.jsx)("button",{type:"button",class:"ms-2 btn btn-outline-light",onClick:function(){return e.push("/register")},children:"Register"})]})]})})})},E=function(){return Object(j.jsxs)(i.a,{children:[Object(j.jsx)(k,{}),Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/register",component:C}),Object(j.jsx)(o.a,{path:"/login",component:w}),Object(j.jsx)(o.a,{path:"/",component:N})]})]})};var S=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(y,{children:Object(j.jsx)(E,{})})})},P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,46)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root")),P()}},[[44,1,2]]]);
//# sourceMappingURL=main.09e32c95.chunk.js.map