(this["webpackJsonpreact-relojes"]=this["webpackJsonpreact-relojes"]||[]).push([[0],{171:function(e,t,c){},172:function(e,t,c){},173:function(e,t,c){},174:function(e,t,c){},175:function(e,t,c){},176:function(e,t,c){},177:function(e,t,c){},178:function(e,t,c){"use strict";c.r(t);var n=c(5),a=c.n(n),s=c(66),r=c.n(s),i=c(19),o=c(8),j=c(0),l=Object(n.createContext)(),d=function(e){var t=e.children,c=JSON.parse(localStorage.getItem("cartArrayTechnologyReact"))||[],a=Object(n.useState)(c),s=Object(o.a)(a,2),r=s[0],d=s[1],b=Object(n.useState)(0),u=Object(o.a)(b,2),O=u[0],m=u[1];return Object(n.useEffect)((function(){localStorage.setItem("cartArrayTechnologyReact",JSON.stringify(r));var e=0;r.forEach((function(t){e+=t.quantity})),m(e)}),[r]),Object(j.jsx)(l.Provider,{value:{cart:r,setCart:d,addProduct:function(e,t){if(r.some((function(t){return t.id===e}))){var c=r.filter((function(t){return t.id!==e}));d([].concat(Object(i.a)(c),[t]))}else d([].concat(Object(i.a)(r),[t]))},removeItem:function(e){var t=r.filter((function(t){return t.id!==e}));d(t)},clear:function(){d([])},totalProducts:O},children:t})},b=c(16),u=c(15),O=c(23),m=c(11),h=c(12),x=c(17),p=(c(80),function(e){var t=e.id,c=e.img,n=e.modelo,a=e.marca,s=e.descripcion.slice(0,35);return Object(j.jsxs)("div",{className:"main__productos",children:[Object(j.jsx)("div",{className:"hover--sombra"}),Object(j.jsx)("img",{src:c,alt:n}),Object(j.jsxs)("div",{className:"marca",children:[Object(j.jsx)("h3",{className:"marca__modelo",children:"".concat(n||a," ")}),Object(j.jsx)(b.b,{to:n?"/Item/".concat(t):"/category/".concat(a),className:"btn btn--marca",children:"Ver Producto"}),Object(j.jsxs)("p",{className:"empresa__info",children:[s,"..."]})]})]})}),f=function(e){var t=e.page,c=e.currentPage,n=e.setCurrentPage;return Object(j.jsx)("button",{className:"btn btn--add page ".concat(t===c&&"pageCurrent"),onClick:function(){n(t)},children:t})},v=c(39),g=c(1),N=c.n(g),C=c(4),y=c(22),k=c(69),S=c(70);Object(k.a)({apiKey:"AIzaSyCyT8ywSEGQeBUlEdDNt6r0f66B20wle48",authDomain:"react-tecnologia.firebaseapp.com",projectId:"react-tecnologia",storageBucket:"react-tecnologia.appspot.com",messagingSenderId:"531684875112",appId:"1:531684875112:web:27402326a7315f861ed4dd"});var I=Object(S.a)(),w=["items"],_=["descripcion","stock"],E=function(){var e=Object(C.a)(N.a.mark((function e(t){var c,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.f)(Object(y.c)(I,t));case 2:return c=e.sent,n=[],c.forEach((function(e){n.push(Object(h.a)({id:e.id},e.data()))})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(C.a)(N.a.mark((function e(t){var c,n,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(y.h)(Object(y.c)(I,"productos"),Object(y.i)("marca","==",t)),e.next=3,Object(y.f)(c);case 3:return n=e.sent,a=[],n.forEach((function(e){a.push(Object(h.a)({id:e.id},e.data()))})),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(C.a)(N.a.mark((function e(t,c){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.e)(Object(y.d)(I,c,t));case 2:return n=e.sent,e.abrupt("return",Object(h.a)(Object(h.a)({isExist:n.exists()},n.data()),{},{id:n.id}));case 4:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),F=function(){var e=Object(C.a)(N.a.mark((function e(t){var c,n,a,s;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.items,n=Object(v.a)(t,w),e.next=3,c.map((function(e){e.descripcion,e.stock;return Object(v.a)(e,_)}));case 3:return a=e.sent,e.next=6,Object(y.b)(Object(y.c)(I,"orders"),Object(h.a)({products:a,date:y.a.fromDate(new Date)},n));case 6:return s=e.sent,e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(C.a)(N.a.mark((function e(t){var c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(y.j)(I),t.forEach((function(e){c.update(Object(y.d)(I,"productos",e.id),{stock:Number(e.stock)-Number(e.quantity)})})),e.next=4,c.commit();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(e){var t=e.inputsValues,c=e.setLoading,a=Object(n.useRef)(6),s=Object(n.useState)([]),r=Object(o.a)(s,2),l=r[0],d=r[1],b=Object(n.useState)([]),u=Object(o.a)(b,2),O=u[0],m=u[1],x=Object(n.useState)([]),v=Object(o.a)(x,2),g=v[0],N=v[1],C=Object(n.useState)(1),y=Object(o.a)(C,2),k=y[0],S=y[1],I=Object(n.useState)(0),w=Object(o.a)(I,2)[1],_=Object(n.useState)([]),P=Object(o.a)(_,2),A=P[0],F=P[1];return Object(n.useEffect)((function(){c(!0),E("productos").then((function(e){d(Object(i.a)(e)),m(Object(i.a)(e))})).finally((function(){return c(!1)}))}),[]),Object(n.useEffect)((function(){S(1);var e=function(e,t){for(var c=Math.ceil(e.length/t.current),n=[],a=1;a<=c;a++)n.push(a);return{paginador:c,paginacionTotal:n}}(O,a),t=e.paginador,c=e.paginacionTotal;w(t),F(c)}),[O]),Object(n.useEffect)((function(){var e=function(e,t,c){return{filterResolve:e.filter((function(e,n){return n>=t.current*c-t.current&&n<t.current*c}))}}(O,a,k),t=e.filterResolve;N(Object(i.a)(t))}),[k,O]),Object(n.useEffect)((function(){var e=l.filter((function(e){return function(e,t,c){return""!==t?e.modelo.toLowerCase().includes(t.toLowerCase()):c}(e,t.search,l)})).filter((function(e){return function(e,t,c){return"0"!==t?Number(e.precio)>=Number(t):c}(e,t.min,l)})).filter((function(e){return function(e,t,c){return""!==t?Number(e.precio)<=Number(t):c}(e,t.max,l)})).filter((function(e){return function(e,t,c){return""!==t?e.marca.toLowerCase()===t.toLowerCase():c}(e,t.marca,l)}));m(Object(i.a)(e))}),[t]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"gridMain",children:g.map((function(e){return Object(j.jsx)(p,Object(h.a)({img:e.imgs[0]},e),e.id)}))}),Object(j.jsx)("div",{className:"paginacion",children:A.length>0&&A.map((function(e){return Object(j.jsx)(f,{page:e,currentPage:k,setCurrentPage:S},e)}))})]})},M=(c(87),function(){return Object(j.jsx)("div",{className:"spinner lds-circle",children:Object(j.jsx)("div",{})})}),L=c(18),D=function(e){var t=e.showInputs,c=e.handleInputsChange;return Object(j.jsxs)("div",{className:"inputsCheck ".concat(t&&"visible"),children:[Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"radio",value:"",name:"marca",onChange:c}),"  Todos"]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"radio",value:"LG",name:"marca",onChange:c}),"  LG"]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"radio",value:"Motorola",name:"marca",onChange:c}),"  Motorola"]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"radio",value:"Huawei",name:"marca",onChange:c}),"  Huawei"]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"radio",value:"Apple",name:"marca",onChange:c}),"  Apple"]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"radio",value:"Samsung",name:"marca",onChange:c}),"  Samsung"]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"radio",value:"Otros",name:"marca",onChange:c}),"  Otros"]})]})},B=function(e){var t=e.handleInputsChange;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("input",{className:"formulario__campo",placeholder:"Buscar Producto",type:"search",name:"search",onChange:t}),Object(j.jsxs)("div",{className:"formulario__minmax",children:[Object(j.jsx)("input",{type:"number",placeholder:"Min",name:"min",onChange:t}),Object(j.jsx)("input",{type:"number",placeholder:"Max",name:"max",onChange:t})]})]})},R=(c(88),function(e){e.history;var t=Object(n.useState)(!1),c=Object(o.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)({search:"",min:"0",max:"",marca:""}),i=Object(o.a)(r,2),l=i[0],d=i[1],b=Object(n.useState)(!0),u=Object(o.a)(b,2),O=u[0],p=u[1],f=function(e){d(Object(h.a)(Object(h.a)({},l),{},Object(m.a)({},e.target.name,e.target.value)))};return Object(j.jsx)("div",{className:"main",children:Object(j.jsxs)("div",{className:"container",children:[O&&Object(j.jsx)(M,{}),Object(j.jsxs)("div",{className:"search",children:[Object(j.jsx)("aside",{className:"busqueda",children:Object(j.jsxs)("form",{className:"formulario",children:[Object(j.jsx)(B,{handleInputsChange:f}),Object(j.jsxs)("div",{className:"showInputs",onClick:function(){s(!a)},children:[Object(j.jsx)("h2",{children:"Marcas"}),Object(j.jsx)(x.a,{className:"icon--hidden ".concat(a&&"icon--show"),icon:L.c})]}),Object(j.jsx)("div",{className:"formulario__inputs",children:Object(j.jsx)(D,{showInputs:a,handleInputsChange:f})})]})}),Object(j.jsx)("main",{children:Object(j.jsx)(T,{inputsValues:l,setLoading:p})})]})]})})}),H=c(45),z=c.n(H),U=(c(89),function(e){var t=e.stock,c=e.handleAddProduct,n=e.buttonAvailable,a=void 0!==n&&n,s=e.quantity,r=e.setQuantity;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"description-buttons",children:[Object(j.jsxs)("p",{className:"description-stock",children:[" Stock : ",t]}),Object(j.jsx)("button",{className:"btn btn--producto",onClick:function(){1!==s&&r(s-1)},children:" - "}),"0"===t?Object(j.jsx)("p",{children:"Sin Stock"}):Object(j.jsx)("p",{className:"description-quantity",children:s}),Object(j.jsx)("button",{className:"btn btn--producto",onClick:function(){s<t&&r(s+1)},children:" + "})]}),a&&Object(j.jsx)("button",{disabled:0===t&&!0,className:"btn btn--add ".concat(0===t&&"btn--disabled"),onClick:function(){return c(s)},children:"Agregar Producto"})]})}),G=["removeItem","cart","setCart"],V=function(e){var t=e.removeItem,c=e.cart,a=e.setCart,s=Object(v.a)(e,G),r=s.id,l=s.imgs,d=s.modelo,u=s.precio,O=s.descripcion,m=s.quantity,p=s.stock,f=O.slice(0,35),g=Object(n.useState)(m),N=Object(o.a)(g,2),C=N[0],y=N[1];return Object(n.useEffect)((function(){var e=c.filter((function(e){return e.id!==r}));a([].concat(Object(i.a)(e),[Object(h.a)(Object(h.a)({},s),{},{quantity:C})]))}),[C]),Object(j.jsxs)("div",{className:"cart__item",children:[Object(j.jsx)("img",{src:l,alt:d}),Object(j.jsxs)("div",{className:"item--info",children:[Object(j.jsx)(b.b,{className:"itemTitle",to:"/item/".concat(r),children:d}),Object(j.jsxs)("p",{className:"itemDesc",children:[" ",f,"... | ",Object(j.jsxs)("strong",{className:"itemPrice",children:[" $ ",(Number(u)*C).toFixed(2)," "]})]})]}),Object(j.jsx)("div",{className:"item--buttons",children:Object(j.jsx)(U,{stock:p,quantity:C,setQuantity:y})}),Object(j.jsx)("div",{className:"icon--remove",onClick:function(){return t(r)},children:Object(j.jsx)(x.a,{icon:L.l})})]})},Z=function(e){var t=e.handleChangeInputs;return Object(j.jsxs)("form",{className:"order__form",children:[Object(j.jsx)("input",{type:"text",placeholder:"Escribe tu Nombre",name:"nombre",onChange:t}),Object(j.jsx)("input",{type:"email",placeholder:"Escribe tu Correo",name:"email",onChange:t}),Object(j.jsx)("input",{type:"number",placeholder:"Escribe tu Tel\xe9fono",name:"telefono",onChange:t})]})},J=function(){return Object(j.jsx)("div",{className:"sending",children:Object(j.jsx)(M,{})})},Q=(c(90),function(e){var t=e.idUserOrder,c=e.setIdUserOrder,n=Object(u.g)().push;return Object(j.jsxs)("div",{className:"orderUser container",children:[Object(j.jsx)("p",{className:"orderUser__texto",children:"Muchas Gracias por tu compra!. Te damos el id para ver el estado de tu compra"}),Object(j.jsx)("p",{className:"orderUser__id",children:t}),Object(j.jsx)("button",{className:"btn btn--add",onClick:function(){c(""),n("/")},children:"Listo!"})]})}),$=function(){var e=Object(n.useContext)(l),t=e.cart,c=e.setCart,a=e.removeItem,s=e.clear,r=Object(n.useState)(!1),i=Object(o.a)(r,2),d=i[0],u=i[1],O=Object(n.useState)(0),p=Object(o.a)(O,2),f=p[0],v=p[1],g=Object(n.useState)({nombre:"",email:"",telefono:""}),y=Object(o.a)(g,2),k=y[0],S=y[1],I=Object(n.useState)(!1),w=Object(o.a)(I,2),_=w[0],E=w[1],P=Object(n.useState)(""),A=Object(o.a)(P,2),T=A[0],M=A[1];Object(n.useEffect)((function(){!function(){for(var e=0,c=0;c<t.length;c++)e+=Number(t[c].precio)*t[c].quantity;v(e)}()}),[t]);var D=function(){var e=Object(C.a)(N.a.mark((function e(){var c,n,a,r,i,j,l,d,b,O;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=k.nombre,n=k.email,a=k.telefono,r=z.a.isLength(c,{min:3}),i=z.a.isEmail(n),j=z.a.isNumeric(a,{no_symbols:!1}),r&&i&&j){e.next=8;break}return u(!0),setTimeout((function(){u(!1)}),2e3),e.abrupt("return");case 8:return E(!0),l={nombre:c,telefono:a,email:n,items:t,total:f},e.next=13,Promise.all([F(l),q(t)]);case 13:d=e.sent,b=Object(o.a)(d,1),O=b[0],M(O.id),s(),E(!1);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("main",{className:"main",children:[_&&Object(j.jsx)(J,{}),""!==T?Object(j.jsx)(Q,{idUserOrder:T,setIdUserOrder:M}):t.length>0?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"titleCart",children:"Productos en el carrito"}),Object(j.jsx)("section",{className:"cart",children:t.map((function(e){return Object(j.jsx)(V,Object(h.a)(Object(h.a)({},e),{},{cart:t,setCart:c,removeItem:a}),e.id)}))}),Object(j.jsxs)("div",{className:"divPrice",children:[Object(j.jsxs)("p",{className:"totalPrice",children:["Subtotal : $ ",f.toFixed(2)]}),Object(j.jsx)("button",{className:"btn btn--add",onClick:s,children:"Vaciar Carrito"})]}),Object(j.jsx)("section",{children:Object(j.jsxs)("div",{className:"order",children:[Object(j.jsx)("h2",{children:"Rellena los campos"}),Object(j.jsx)(Z,{handleChangeInputs:function(e){S(Object(h.a)(Object(h.a)({},k),{},Object(m.a)({},e.target.name,e.target.value)))}}),Object(j.jsx)("button",{className:"btn btn--add",onClick:D,children:"Comprar"}),d&&Object(j.jsx)("p",{className:"error",children:"Completa los campos correctamente"})]})})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"titleCart",children:"Oops.. No encontramos productos en el carrito"}),Object(j.jsxs)("div",{className:"icon",children:[Object(j.jsx)(x.a,{icon:L.f}),Object(j.jsx)("p",{children:"Vuelve a nuestro cat\xe1logo que hay muchos productos que te estan esperando"}),Object(j.jsx)(b.b,{to:"/busqueda",className:"btn btn--add",children:"Ver los productos"})]})]})]})},K=c.p+"static/media/slider-1.78d649ed.jpg",X=c.p+"static/media/slider-2.d129668f.jpg",W=c.p+"static/media/slider-3.de3aa7a4.jpg",Y=function(){return Object(j.jsxs)("div",{className:"carouselAbsolute",children:[Object(j.jsxs)("div",{id:"carouselExampleCaptions",className:"carousel slide coverHeader","data-bs-ride":"carousel",children:[Object(j.jsxs)("div",{className:"carousel-indicators",children:[Object(j.jsx)("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"0",className:"active","aria-current":"true","aria-label":"Slide 1"}),Object(j.jsx)("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"1","aria-label":"Slide 2"}),Object(j.jsx)("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"2","aria-label":"Slide 3"})]}),Object(j.jsxs)("div",{className:"carousel-inner",children:[Object(j.jsx)("div",{className:"carousel-item active",children:Object(j.jsx)("img",{src:K,className:"d-block w-100 coverHeader",alt:"tecnologia slider 1"})}),Object(j.jsx)("div",{className:"carousel-item",children:Object(j.jsx)("img",{src:X,className:"d-block w-100 coverHeader",alt:"tecnologia slider 1"})}),Object(j.jsx)("div",{className:"carousel-item",children:Object(j.jsx)("img",{src:W,className:"d-block w-100 coverHeader",alt:"tecnologia slider 1"})})]}),Object(j.jsxs)("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide":"prev",children:[Object(j.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(j.jsx)("span",{className:"visually-hidden",children:"Previous"})]}),Object(j.jsxs)("button",{className:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide":"next",children:[Object(j.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(j.jsx)("span",{className:"visually-hidden",children:"Next"})]})]}),Object(j.jsx)("div",{className:"carouselText",children:Object(j.jsx)("h3",{children:"Consigue los mejores productos en nuestra web"})})]})},ee=c.p+"static/media/smart-watch-821560_1920.995987aa.jpg",te=function(){return Object(j.jsxs)("div",{className:"coverHeader",children:[Object(j.jsx)("img",{src:ee,alt:"Portada imagen"}),Object(j.jsxs)("div",{className:"textAbsolute",children:[Object(j.jsx)("h3",{children:"Encuentra el producto que estas buscando"}),Object(j.jsx)("button",{className:"btn btn--ok",children:Object(j.jsx)(b.b,{to:"/busqueda",children:"Buscar"})})]})]})},ce=c.p+"static/media/recortadofinal (1).279d12ef.mp4",ne=function(){return Object(j.jsxs)("div",{className:"video",children:[Object(j.jsx)("video",{src:ce,autoPlay:!0,loop:!0,muted:!0}),Object(j.jsxs)("div",{className:"video__relative",children:[Object(j.jsx)("h3",{children:"Puedes ver el estado de tu entrega"}),Object(j.jsx)(b.b,{className:"btn btn--ok",to:"/order",children:"Aca!"})]})]})},ae=(c(171),function(){return Object(j.jsx)("section",{children:Object(j.jsxs)("div",{className:"header__img",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)(Y,{}),Object(j.jsx)(te,{})]}),Object(j.jsx)(ne,{})]})})}),se=function(){var e=Object(u.g)().goBack;return Object(j.jsxs)("div",{className:"icon--back",onClick:function(){return e()},children:[Object(j.jsx)(x.a,{icon:L.a}),Object(j.jsx)("p",{children:"Atr\xe1s"})]})},re=function(e){var t=e.arrayProducts;return Object(j.jsx)(j.Fragment,{children:t.map((function(e){return Object(j.jsx)(p,Object(h.a)({img:e.imgs[0]},e),e.id)}))})},ie=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!0),r=Object(o.a)(s,2),i=r[0],l=r[1],d=Object(u.h)().id;return Object(n.useEffect)((function(){l(!0),a([]),(d?P(d):E("tecnologias")).then((function(e){return a(e)})).catch((function(e){console.log(e)})).finally((function(){return l(!1)}))}),[d]),Object(j.jsxs)(j.Fragment,{children:[!d&&Object(j.jsx)(ae,{}),Object(j.jsx)("main",{className:"main",children:Object(j.jsxs)("div",{className:"container",children:[i&&Object(j.jsx)(M,{}),d&&Object(j.jsx)(se,{}),Object(j.jsx)("div",{className:"gridMain",children:Object(j.jsx)(re,{arrayProducts:c,setArrayProducts:a})})]})})]})},oe=function(e){var t=e.handleCloseMenu,c=Object(n.useContext)(l).totalProducts;return Object(j.jsxs)(b.b,{className:"navegacion__icono",to:"/cart",onClick:t,children:[Object(j.jsx)(x.a,{icon:L.i}),Object(j.jsx)("div",{className:"iconoCantidadProducto",children:Object(j.jsx)("p",{children:c})})]})},je=(c(172),function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),c=t[0],a=t[1],s=function(){a(!1)};return Object(j.jsx)("header",{children:Object(j.jsxs)("nav",{className:"navegacion",children:[Object(j.jsx)("div",{className:"navegacion__logo",children:Object(j.jsx)(b.b,{to:"/",onClick:s,children:"X Tecnol"})}),Object(j.jsxs)("div",{className:"navegacion__enlaces ".concat(c&&"menuActive"),children:[Object(j.jsx)(b.b,{to:"/",onClick:s,children:"Inicio"}),Object(j.jsx)("ul",{className:"",children:Object(j.jsxs)("li",{className:"relativeNav",children:[" ",Object(j.jsx)("p",{children:"Marcas"}),Object(j.jsx)("ul",{className:"enlaceOculto",children:Object(j.jsxs)("div",{className:"overflowBox",children:[Object(j.jsx)("li",{children:Object(j.jsx)(b.b,{to:"/category/LG",onClick:s,children:"LG"})}),Object(j.jsx)("li",{children:Object(j.jsx)(b.b,{to:"/category/Apple",onClick:s,children:"Apple"})}),Object(j.jsx)("li",{children:Object(j.jsx)(b.b,{to:"/category/Samsung",onClick:s,children:"Samsung"})}),Object(j.jsx)("li",{children:Object(j.jsx)(b.b,{to:"/category/Motorola",onClick:s,children:"Motorola"})}),Object(j.jsx)("li",{children:Object(j.jsx)(b.b,{to:"/category/Huawei",onClick:s,children:"Huawei"})}),Object(j.jsx)("li",{children:Object(j.jsx)(b.b,{to:"/category/Otros",onClick:s,children:"Otros"})})]})})]})}),Object(j.jsx)(b.b,{to:"/busqueda",onClick:s,children:"Buscar"})]}),Object(j.jsx)(oe,{handleCloseMenu:s}),Object(j.jsx)("div",{className:"navegacion__menu",onClick:function(){a(!c)},children:Object(j.jsx)(x.a,{icon:L.b})})]})})}),le=(c(173),function(e){var t=e.id,c=e.img,n=e.modelo,a=e.handleZoomImage;return Object(j.jsxs)("div",{className:"description-zoom",onClick:function(){return a(t)},children:[Object(j.jsx)("img",{src:c,alt:n}),Object(j.jsx)("div",{className:"hover--sombra",children:Object(j.jsx)(x.a,{className:"icon--search",icon:L.h})})]})}),de=function(e){var t=e.tipo,c=e.pantalla,n=e.dimensionesPeso,a=e.procesador,s=e.ram,r=e.almacenamiento,i=e.camaraFontral,o=e.camaraTrasera,l=e.bateria,d=e.sistemaOperativo,b=e.conectividad,u=e.otros;return Object(j.jsxs)("div",{className:"description--info",children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{children:"Pantalla: "}),c]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{children:"Dimensiones: "}),n]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{children:"Procesador: "}),a]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{children:"RAM: "}),s]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{children:"Almacenamiento: "}),r]}),"smartphone"===t&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{children:"Camara Frontal: "}),i]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{children:"Camara Trasera: "}),o]})]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{children:"Bater\xeda: "}),l]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{children:"Sistema Operativo: "}),d]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{children:"Conectividad: "}),b]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{children:"Otros: "}),u]})]})},be=(c(174),function(e){var t=e.imgShow,c=e.setImgShow,n=e.idxImg,a=e.setIdxImg;return Object(j.jsxs)("div",{className:"zoom",children:[Object(j.jsx)("div",{className:"zoom__icon icon--close",onClick:function(){c(Object(h.a)(Object(h.a)({},t),{},{imgZoom:"",show:!1}))},children:Object(j.jsx)(x.a,{icon:L.j})}),0!==n&&Object(j.jsx)("div",{className:"zoom__icon icon--previous",onClick:function(){0!==n&&a(n-1)},children:Object(j.jsx)(x.a,{icon:L.d})}),Object(j.jsx)("div",{className:"zoom__container",children:Object(j.jsx)("img",{src:"".concat(t.imgZoom),alt:""})}),n<t.lengthImg-1&&Object(j.jsx)("div",{className:"zoom__icon icon--next",onClick:function(){n>=t.lengthImg-1||a(n+1)},children:Object(j.jsx)(x.a,{icon:L.e})})]})}),ue=(c(175),function(e){var t=e.showAlert;return Object(j.jsx)("div",{className:"alert ".concat(t&&"visible"),children:Object(j.jsx)("p",{children:"Producto agregado al carrito, finalice la compra para ver todos los productos"})})}),Oe=function(e){var t=e.handleEdit,c=e.handleRemove;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{className:"description-quantity",children:"Agregado"}),Object(j.jsxs)("div",{className:"productModified",children:[Object(j.jsx)("button",{className:"edit btn btn--add",onClick:t,children:"Editar"}),Object(j.jsx)("button",{className:"icon icon--delete",onClick:c,title:"Eliminar Producto",children:Object(j.jsx)(x.a,{icon:L.k})})]}),Object(j.jsx)(b.b,{className:"btn btn--add",to:"/cart",children:"Finalizar Compra"})]})},me=function(e){var t=e.id,c=e.modelo,a=e.imgs,s=e.stock,r=e.descripcion,i=e.precio,d=e.especificaciones,b=Object(n.useContext)(l),u=b.cart,O=b.addProduct,m=b.removeItem,p=Object(n.useState)(0),f=Object(o.a)(p,2),v=f[0],g=f[1],N=Object(n.useState)(1),C=Object(o.a)(N,2),y=C[0],k=C[1],S=Object(n.useState)(!1),I=Object(o.a)(S,2),w=I[0],_=I[1],E=Object(n.useState)(!1),P=Object(o.a)(E,2),A=P[0],F=P[1],q=Object(n.useState)(!1),T=Object(o.a)(q,2),M=T[0],D=T[1],B=Object(n.useState)(!0),R=Object(o.a)(B,1)[0],H=Object(n.useState)({lengthImg:a.length,imgZoom:"",show:!1}),z=Object(o.a)(H,2),G=z[0],V=z[1],Z=function(e){g(parseInt(e)),V(Object(h.a)(Object(h.a)({},G),{},{show:!0}))},J=function(){var e=u.some((function(e){return e.id===t}));_(e)};Object(n.useEffect)((function(){return J(),function(){J()}}),[u]),Object(n.useEffect)((function(){if(G.show){var e=a.find((function(e,t){return t===v}));V(Object(h.a)(Object(h.a)({},G),{},{imgZoom:e}))}}),[v,G.show]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"itemDetail",children:[Object(j.jsx)("div",{className:"itemDetail__imgs",children:a.map((function(e,t){return Object(j.jsx)(le,{id:t,img:e,modelo:c,handleZoomImage:Z},t)}))}),Object(j.jsxs)("div",{className:"itemDetail__description",children:[Object(j.jsx)("h1",{children:c}),Object(j.jsxs)("p",{className:"description-price",children:[" $ ",Number(i).toFixed(2)," ARS"]}),Object(j.jsx)("p",{children:r}),0===s||s<0?Object(j.jsx)("p",{children:"Por el momento no tenemos Stock del producto."}):w?Object(j.jsx)(Oe,{handleEdit:function(){_(!1)},handleRemove:function(){m(t),_(!1)}}):Object(j.jsx)(U,{stock:s,handleAddProduct:function(e){var n={id:t,modelo:c,quantity:e,precio:i,descripcion:r,stock:s,imgs:a[0]};O(t,n),D(!0),setTimeout((function(){return D(!1)}),3e3)},buttonAvailable:R,quantity:y,setQuantity:k}),Object(j.jsxs)("div",{className:"description-button",onClick:function(){F(!A)},children:[Object(j.jsx)("p",{children:"Especificaciones"}),Object(j.jsx)(x.a,{className:"icon-rotate",icon:L.g})]}),Object(j.jsx)("div",{className:"description--info",children:Object(j.jsx)("div",{className:A?"description-true":"description-false",children:Object(j.jsx)(de,Object(h.a)({},d))})})]})]}),G.show&&Object(j.jsx)(be,{imgShow:G,setImgShow:V,idxImg:v,setIdxImg:g}),D&&Object(j.jsx)(ue,{showAlert:M})]})},he=function(){var e=Object(n.useState)({}),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!0),r=Object(o.a)(s,2),i=r[0],l=r[1],d=Object(u.h)().id;return Object(n.useEffect)((function(){A(d,"productos").then((function(e){return a(Object(h.a)({},e))})).catch((function(e){return console.log("No se pudo encontrar el producto",e)})).finally((function(){return l(!1)}))}),[]),Object(j.jsx)("main",{className:"main",children:Object(j.jsx)("div",{className:"container",children:i?Object(j.jsx)(M,{}):c.id&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(se,{}),Object(j.jsx)(me,Object(h.a)({},c))]})})})},xe=(c(176),function(){var e=Object(n.useState)({order:{},newOrder:!1,isExist:!1,errorInputId:!1,form:!0}),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),r=Object(o.a)(s,2),i=r[0],l=r[1];return Object(j.jsxs)("main",{className:"container",children:[!c.isExist&&Object(j.jsxs)("form",{className:"orden",children:[Object(j.jsx)("label",{children:"Escriba su ID del orden"}),Object(j.jsx)("input",{type:"text",name:"id",onChange:function(e){l(e.target.value)},placeholder:"Su ID"}),Object(j.jsx)("input",{type:"submit",onClick:function(e){e.preventDefault(),""!==i?A(i,"orders").then((function(e){e.isExist?a(Object(h.a)(Object(h.a)({},c),{},{order:Object(h.a)({},e),errorInputId:!1,isExist:!0,newOrder:!0})):a(Object(h.a)(Object(h.a)({},c),{},{isExist:!1,errorInputId:!1,newOrder:!0}))})):a(Object(h.a)(Object(h.a)({},c),{},{isExist:!1,errorInputId:!0,newOrder:!1}))},className:"btn btn--add",value:"Buscar Orden"}),c.errorInputId&&Object(j.jsx)("p",{className:"error",children:"Se requiere colocar un ID"}),!c.isExist&c.newOrder&&Object(j.jsx)("p",{className:"error",children:"No existe un orden con su ID"})]}),c.order.products&&Object(j.jsxs)("div",{className:"orderList",children:[Object(j.jsx)("h3",{children:"Su Pedido"}),Object(j.jsxs)("p",{children:[" Precio Total : $ ",c.order.total]}),Object(j.jsxs)("p",{children:[" Estado ",Object(j.jsx)("span",{className:"orderList__pending",children:"Pendiente"})]})]})]})}),pe=function(){var e=Object(O.a)();return Object(j.jsxs)(b.a,{history:e,children:[Object(j.jsx)(je,{}),Object(j.jsxs)(u.d,{children:[Object(j.jsx)(u.b,{exact:!0,path:"/busqueda",component:R}),Object(j.jsx)(u.b,{exact:!0,path:"/category/:id",component:ie}),Object(j.jsx)(u.b,{exact:!0,path:"/Item/:id",component:he}),Object(j.jsx)(u.b,{exact:!0,path:"/order",component:xe}),Object(j.jsx)(u.b,{exact:!0,path:"/cart",component:$}),Object(j.jsx)(u.b,{exact:!0,path:"/",component:ie}),Object(j.jsx)(u.a,{to:"/"})]})]})};c(177);var fe=function(){return Object(j.jsx)(d,{children:Object(j.jsx)(pe,{})})},ve=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,179)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(fe,{})}),document.getElementById("root")),ve()},80:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){}},[[178,1,2]]]);
//# sourceMappingURL=main.fe7e900c.chunk.js.map