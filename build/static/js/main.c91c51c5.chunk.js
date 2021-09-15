(this["webpackJsonppile-placer"]=this["webpackJsonppile-placer"]||[]).push([[0],{149:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(32),i=c.n(s),l=c(25),r=(c(77),c(78),c(5)),o=c(4),u=c(21),d=c(29),j={nextPiles:[{distance:null,pile_id:null},{distance:null,pile_id:null}],setNextPiles:Object(o.b)((function(e,t){e.nextPiles=Object(d.a)(t)})),clearPile:Object(o.b)((function(e,t){var c=Object(d.a)(e.nextPiles);c[t]={},e.nextPiles=c})),waypoints:[],setWaypoints:Object(o.b)((function(e,t){e.waypoints=Object(d.a)(t)})),placeWaypoint:Object(o.b)((function(e,t){e.waypoints=e.waypoints.map((function(e){return e.pile_id==t?Object(u.a)(Object(u.a)({},e),{},{placed:!0}):e}))})),unplaceWaypoint:Object(o.b)((function(e,t){e.waypoints=e.waypoints.map((function(e){return e.pile_id==t?Object(u.a)(Object(u.a)({},e),{},{placed:!1}):e}))})),selectedColor:"",setSelectedColor:Object(o.b)((function(e,t){e.selectedColor=t})),center:{heading:0,lat:0,lng:0},setCenter:Object(o.b)((function(e,t){e.center=t}))},b=c(3),p=c(9),m=c(11),O=c(7),f=c.n(O),h=c(22),x=c(23),g=c.n(x),v=c(71),k="raspberrypi.local:9999",y=c.n(v).a.connect("http://".concat(k)),N=function(){var e=Object(h.a)(f.a.mark((function e(t){var c,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... setting lat lng"),c="http://".concat(k,"/api/location"),e.next=4,g.a.post(c,t);case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(h.a)(f.a.mark((function e(t){var c,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... setting heading"),c="http://".concat(k,"/api/heading"),e.next=4,g.a.post(c,t);case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(h.a)(f.a.mark((function e(t){var c,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... setting config"),c="http://".concat(k,"/api/config"),e.next=4,g.a.post(c,t);case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(h.a)(f.a.mark((function e(t){var c,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... setting reference bay"),c="http://".concat(k,"/api/bay"),e.next=4,g.a.post(c,t);case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(h.a)(f.a.mark((function e(t){var c,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... setting waypoint"),c="http://".concat(k,"/api/waypoint"),e.next=4,g.a.post(c,t);case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(h.a)(f.a.mark((function e(){var t,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... getting waypoints"),t="http://".concat(k,"/api/waypoints"),e.next=4,g.a.get(t);case 4:return c=e.sent,e.abrupt("return",c.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(h.a)(f.a.mark((function e(t,c){var n,a,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... uploading file"),n="http://".concat(k,"/api/file"),(a=new FormData).append("file",t),a.append("code",c),e.next=7,g.a.post(n,a,{headers:{"Content-Type":"multipart/form-data"}});case 7:return s=e.sent,e.abrupt("return",s.data);case 9:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),E=c(0),W=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)("Nothing selected yet"),i=Object(b.a)(s,2),l=i[0],o=i[1],u=Object(n.useState)({}),d=Object(b.a)(u,2),j=d[0],O=d[1],f=Object(r.g)();Object(n.useEffect)((function(){document.querySelector(".file-input").addEventListener("change",(function(e){var t=e.target.files[0],c=e.target.files[0].name;a(t),o(c)}),!1)}),[]);return Object(E.jsxs)("div",{className:"columns",children:[Object(E.jsx)("div",{className:"column file has-name",children:Object(E.jsxs)("label",{className:"file-label",children:[Object(E.jsx)("input",{className:"file-input",type:"file",accept:".csv, .xlsx"}),Object(E.jsxs)("span",{className:"file-cta",children:[Object(E.jsx)("span",{className:"file-icon",children:Object(E.jsx)(m.a,{icon:p.h})}),Object(E.jsx)("span",{className:"file-label",children:"Choose a file ..."})]}),Object(E.jsx)("span",{className:"file-name",children:l})]})}),Object(E.jsx)("div",{className:"column",children:c?Object(E.jsx)("div",{className:"is-flex is-justify-content-center",children:Object(E.jsx)("button",{className:"button is-outlined is-success",onClick:function(){_(c).then((function(e){O(e),setTimeout((function(){f.push("/map")}),1e3)})).catch((function(){return O({message:!1})}))},children:"Upload"})}):""}),Object(E.jsx)("div",{className:"column",children:j.message?Object(E.jsxs)("div",{className:"is-flex is-align-content-center is-flex-direction-column",children:[Object(E.jsx)("p",{className:j.message?"has-text-success":"has-text-fail",children:j.message?"Success":"Fail"}),Object(E.jsxs)("p",{children:["Waypoints: ",j.rows]})]}):""})]})},P=function(e){var t=e.label,c=e.value,n=e.placeholder,a=e.changeHandler;return Object(E.jsxs)("div",{className:"field column",children:[Object(E.jsx)("label",{className:"label",children:t}),Object(E.jsx)("p",{className:"control",children:Object(E.jsx)("input",{className:"input is-medium",type:"number",step:.1,placeholder:n,onChange:function(e){return a(e.target.value)},value:c})})]})},H=function(e,t){var c=Object(n.useState)((function(){try{var c=window.localStorage.getItem(e);return c?JSON.parse(c):t}catch(n){return console.log(n),t}})),a=Object(b.a)(c,2),s=a[0],i=a[1];return[s,function(t){try{var c=t instanceof Function?t(s):t;i(c),window.localStorage.setItem(e,JSON.stringify(c))}catch(n){console.log(n)}}]},L=function(e){var t={};return e.forEach((function(e){var c,n,a;t[null===(c=e.color)||void 0===c?void 0:c.trim()]?t[null===(n=e.color)||void 0===n?void 0:n.trim()]+=1:t[null===(a=e.color)||void 0===a?void 0:a.trim()]=1})),t},B=function(e){var t={};return e.forEach((function(e){var c,n,a;e.placed&&(t[null===(c=e.color)||void 0===c?void 0:c.trim()]?t[null===(n=e.color)||void 0===n?void 0:n.trim()]+=1:t[null===(a=e.color)||void 0===a?void 0:a.trim()]=1)})),t},z=c.p+"static/media/epsg_codes.c38b8103.pdf",I=c.p+"static/media/layout.1bb02a11.png",M=function(){var e=H("config",{}),t=Object(b.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(c.truckLen),i=Object(b.a)(s,2),l=i[0],r=i[1],o=Object(n.useState)(c.truckWid),u=Object(b.a)(o,2),d=u[0],j=u[1],O=Object(n.useState)(c.truckHei),f=Object(b.a)(O,2),h=f[0],x=f[1],g=Object(n.useState)(c.antennaX),v=Object(b.a)(g,2),k=v[0],y=v[1],N=Object(n.useState)(c.antennaY),w=Object(b.a)(N,2),F=w[0],S=w[1],A=Object(n.useState)(c.bay1),_=Object(b.a)(A,2),L=_[0],B=_[1],M=Object(n.useState)(c.bay2),T=Object(b.a)(M,2),J=T[0],G=T[1],D=Object(n.useState)(c.epsg),q=Object(b.a)(D,2),X=q[0],Y=q[1],K=Object(n.useState)(""),Z=Object(b.a)(K,2),R=Z[0],U=Z[1];return Object(E.jsx)("div",{className:"container",children:Object(E.jsxs)("div",{className:"columns",children:[Object(E.jsxs)("div",{className:"column",children:[Object(E.jsxs)("div",{className:"columns",children:[Object(E.jsx)(P,{label:"Truck length",value:l,placeholder:"E.g: 5",changeHandler:r}),Object(E.jsx)(P,{label:"Truck width",value:d,placeholder:"E.g: 5",changeHandler:j}),Object(E.jsx)(P,{label:"Truck height",value:h,placeholder:"E.g: 5",changeHandler:x})]}),Object(E.jsxs)("div",{className:"columns",children:[Object(E.jsx)(P,{label:"Antenna from left",value:k,placeholder:"E.g: 5",changeHandler:y}),Object(E.jsx)(P,{label:"Antenna from truck head",value:F,placeholder:"E.g: 5",changeHandler:S})]}),Object(E.jsxs)("div",{className:"columns",children:[Object(E.jsx)(P,{label:"Bay 1 from truck head",value:L,placeholder:"E.g: 5",changeHandler:B}),Object(E.jsx)(P,{label:"Bay 2 from truck head",value:J,placeholder:"E.g: 5",changeHandler:G})]}),Object(E.jsxs)("div",{className:"columns",children:[Object(E.jsx)(P,{label:"EPSG code",value:X,placeholder:"E.g: 6588",changeHandler:Y}),Object(E.jsxs)("div",{className:"column is-flex-direction-column is-flex is-flex-centered",children:[Object(E.jsx)("p",{className:"heading has-text-link",children:"EPSG Reference"}),Object(E.jsx)("a",{href:z,target:"blank",className:"has-text-white title is-2",children:Object(E.jsx)(m.a,{icon:p.a})})]}),Object(E.jsxs)("div",{className:"column is-flex-direction-column is-flex is-flex-centered",children:[Object(E.jsx)("p",{className:"heading has-text-link",children:"EPSG Browser"}),Object(E.jsx)("a",{href:"https://epsg.io/",target:"blank",className:"has-text-white title is-2",children:Object(E.jsx)(m.a,{icon:p.f})})]}),Object(E.jsxs)("div",{className:"column is-flex is-justify-content-center is-align-content-center",children:[Object(E.jsx)("button",{className:"button ml-2",onClick:function(){a({truckLen:l,truckWid:d,truckHei:h,antennaX:k,antennaY:F,bay1:L,bay2:J,epsg:X}),C({truckLen:l,truckWid:d,truckHei:h,antennaX:k,antennaY:F,bay1:L,bay2:J,epsg:X}).then((function(){return U("Success")})).catch((function(){return U("Fail")}))},children:"Save"}),Object(E.jsx)("p",{className:"success ml-2 ".concat("Success"==R?"has-text-success":"has-text-danger"),children:R})]})]}),Object(E.jsx)("hr",{}),Object(E.jsx)(W,{})]}),Object(E.jsx)("div",{className:"column is-centered has-text-centered",children:Object(E.jsx)("img",{src:I})})]})})},T=c(8),J=c.p+"static/media/1.2999e734.mp3",G=c.p+"static/media/2.c90484f3.mp3",D=c.p+"static/media/3.451a053d.mp3",q=c.p+"static/media/4.3d33a969.mp3",X=c.p+"static/media/5.0b9156e3.mp3",Y=c.p+"static/media/6.52edbbb5.mp3",K=c.p+"static/media/7.b473eb3a.mp3",Z=c.p+"static/media/8.55fb2017.mp3",R=c.p+"static/media/9.308dc1bf.mp3",U=c.p+"static/media/10.1fbcf1e7.mp3",Q=c.p+"static/media/black.67345e6d.mp3",V=c.p+"static/media/blue.603a17d2.mp3",$=c.p+"static/media/brown.aa74bbbb.mp3",ee=c.p+"static/media/darkblue.587d78fd.mp3",te=c.p+"static/media/lightblue.9a9ee83a.mp3",ce=c.p+"static/media/lightgreen.d7c408fe.mp3",ne=c.p+"static/media/orange.42e333b5.mp3",ae=c.p+"static/media/pink.f914d206.mp3",se=c.p+"static/media/purple.8e39b00d.mp3",ie=c.p+"static/media/red.d598f0dc.mp3",le=c.p+"static/media/white.a09c2726.mp3",re=c.p+"static/media/yellow.1d5be675.mp3",oe=c.p+"static/media/left_bay.ba74ee7d.mp3",ue=c.p+"static/media/right_bay.0fce9298.mp3",de=c.p+"static/media/next_pile.aa5d59d6.mp3",je=(new Audio(J),new Audio(G),new Audio(D),new Audio(q),new Audio(X),new Audio(Y),new Audio(K),new Audio(Z),new Audio(R),new Audio(U),{leftBay:new Audio(oe),rightBay:new Audio(ue),nextPile:new Audio(de)}),be={black:new Audio(Q),blue:new Audio(V),brown:new Audio($),darkblue:new Audio(ee),lightblue:new Audio(te),lightgreen:new Audio(ce),orange:new Audio(ne),pink:new Audio(ae),purple:new Audio(se),red:new Audio(ie),white:new Audio(le),yellow:new Audio(re)},pe=function(e){je[e]&&je[e].play()},me=function(e){be[e]&&be[e].play()},Oe=Object(T.GoogleApiWrapper)({apiKey:"AIzaSyBsgd5A9q-23gHy8tL6e5O0lct6JoD97xo",version:"beta"})((function(e){var t=e.google,c=Object(o.e)((function(e){return e.center})),a=Object(o.d)((function(e){return e.setCenter})),s=Object(n.useState)(!0),i=Object(b.a)(s,2),l=i[0],r=i[1],j=Object(n.useState)([]),p=Object(b.a)(j,2),m=p[0],O=p[1],f=Object(n.useState)([]),h=Object(b.a)(f,2),x=h[0],g=h[1],v=Object(n.useState)([]),k=Object(b.a)(v,2),N=k[0],w=k[1],C=Object(n.useState)([]),_=Object(b.a)(C,2),W=_[0],P=_[1],L=Object(n.useState)([]),B=Object(b.a)(L,2),z=B[0],I=B[1],M=Object(n.useState)([]),J=Object(b.a)(M,2),G=J[0],D=J[1],q=Object(o.e)((function(e){return e.nextPiles})),X=Object(o.d)((function(e){return e.setNextPiles})),Y=Object(o.e)((function(e){return e.waypoints})),K=Object(o.d)((function(e){return e.setWaypoints})),Z=Object(o.d)((function(e){return e.placeWaypoint})),R=Object(o.d)((function(e){return e.unplaceWaypoint})),U=H("debugCenter",{lat:0,lng:0}),Q=Object(b.a)(U,2),V=Q[0],$=(Q[1],Object(o.e)((function(e){return e.selectedColor}))),ee=function(){y.on("message",(function(e){e=JSON.parse(e),console.log(e),a(e),O([{lat:e.truck[0][0],lng:e.truck[0][1]},{lat:e.truck[1][0],lng:e.truck[1][1]},{lat:e.truck[2][0],lng:e.truck[2][1]},{lat:e.truck[3][0],lng:e.truck[3][1]},{lat:e.truck[0][0],lng:e.truck[0][1]}]),D([{lat:e.bays[0][0],lng:e.bays[0][1]},{lat:e.bays[1][0],lng:e.bays[1][1]}]),P([{lat:e.truck[4][0],lng:e.truck[4][1]},{lat:e.truck[5][0],lng:e.truck[5][1]}]),I([{lat:e.truck[10][0],lng:e.truck[10][1]},{lat:e.truck[11][0],lng:e.truck[11][1]}]),w([{lat:e.truck[6][0],lng:e.truck[6][1]},{lat:e.truck[7][0],lng:e.truck[7][1]},{lat:e.truck[8][0],lng:e.truck[8][1]},{lat:e.truck[9][0],lng:e.truck[9][1]},{lat:e.truck[6][0],lng:e.truck[6][1]}]),g([{lat:e.truck[12][0],lng:e.truck[12][1]},{lat:e.truck[13][0],lng:e.truck[13][1]}])}))};Object(n.useEffect)((function(){return A().then((function(e){K(e.waypoints),e.waypoints.length>0&&a(Object(u.a)(Object(u.a)({},c),e.waypoints[0]))})),ee(),function(){y.off("message")}}),[]);var te=function(e,t){if(e.length>0){var c=function(e,t){var c,n,a,s,i=1e4,l=1e4;return e.forEach((function(e){e.placed||$!=e.color&&""!=$||(c=Math.pow(e.lat-t[0].lat,2)+Math.pow(e.lng-t[0].lng,2),n=Math.pow(e.lat-t[1].lat,2)+Math.pow(e.lng-t[1].lng,2),c<i&&(i=c,a=e),n<l&&(l=n,s=e))})),a==s&&(i<l?s={lat:0,lng:0}:a={lat:0,lng:0}),[a,s]}(e,t);X(c),S(c),console.log("... getting colors");var n=0;try{var a=e.filter((function(e){return e.pile_id==c[0].pile_id}))[0].color.trim();pe("leftBay"),setTimeout((function(){return me(a)}),1e3),n=2e3}catch(i){console.log("error left color")}try{var s=e.filter((function(e){return e.pile_id==c[1].pile_id}))[0].color.trim();setTimeout((function(){return pe("rightBay")}),0+n),setTimeout((function(){return me(s)}),1e3+n)}catch(l){console.log("error right color")}}};return Object(n.useEffect)((function(){if(Object.keys(c).includes("distance")){var e=Object(d.a)(q);e[0].distance=c.distance[0],e[1].distance=c.distance[1],X(e)}}),[c]),Object(n.useEffect)((function(){l?(y.off("message"),ee()):y.off("message")}),[l]),Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("div",{className:"container map",children:Object(E.jsxs)(T.Map,{google:t,zoom:22,maxZoom:23,initialCenter:V,center:c,mapId:"2f571dc2d7296a3a",onCenterChanged:function(e,t){t.setHeading(parseInt(c.heading))},onClick:function(e,t,n){a(Object(u.a)(Object(u.a)({},c),{},{lat:n.latLng.lat().toFixed(5),lng:n.latLng.lng().toFixed(5)}))},onDblclick:function(){return console.log("doubleClick")},disableDoubleClickZoom:!0,children:[Object(E.jsx)(T.Circle,{center:{lat:parseFloat(c.lat),lng:parseFloat(c.lng)},radius:.1,strokeColor:"black",strokeOpacity:.8,strokeWeight:2,fillColor:"black"}),x.map((function(e){return Object(E.jsx)(T.Circle,{center:{lat:e.lat,lng:e.lng},radius:.1,strokeColor:"green",strokeOpacity:.8,strokeWeight:2,fillColor:"green"})})),Y.map((function(e){return Object(E.jsx)(T.Circle,{center:e,radius:e.placed?.3:e.pile_id==q[0].pile_id||e.pile_id==q[1].pile_id?.7:.5,strokeColor:""==$||$==e.color?e.color:"transparent",strokeOpacity:e.pile_id==q[0].pile_id||e.pile_id==q[1].pile_id?1:.5,strokeWeight:e.placed?0:2,fillColor:""==$||$==e.color?e.color:"transparent",fillOpacity:e.pile_id==q[0].pile_id||e.pile_id==q[1].pile_id?1:.5,onClick:function(){return e.placed?R(e.pile_id):Z(e.pile_id)}})})),G.map((function(e,t){return Object(E.jsx)(T.Circle,{center:e,radius:.5,strokeColor:"#FF0000",strokeOpacity:.8,strokeWeight:2,fillColor:"#FF0000",fillOpacity:.35,onClick:function(){F({bay:t})}})})),Object(E.jsx)(T.Polygon,{paths:m,strokeColor:"#FF0000",strokeOpacity:.8,strokeWeight:2,fillColor:"#FF0000",fillOpacity:.35}),Object(E.jsx)(T.Polygon,{paths:N,strokeColor:"#FF0000",strokeOpacity:.8,strokeWeight:2,fillColor:"#FF0000",fillOpacity:.35}),Object(E.jsx)(T.Polyline,{path:W,strokeColor:"#FF0000",strokeOpacity:.8,strokeWeight:2,fillColor:"#FF0000",fillOpacity:.35}),Object(E.jsx)(T.Polyline,{path:z,strokeColor:"#FF0000",strokeOpacity:.8,strokeWeight:2,fillColor:"#FF0000",fillOpacity:.35})]})}),Object(E.jsxs)("div",{className:"columns mt-3 has-text-link ",children:[Object(E.jsx)("div",{className:"column is-flex is-flex-centered m-0 p-0",children:Object(E.jsxs)("p",{className:"heading has-text-centered m-0 p-0 f-3",children:["Lat: ",parseFloat(c.lat).toFixed(7)]})}),Object(E.jsx)("div",{className:"column is-flex is-flex-centered m-0 p-0",children:Object(E.jsxs)("p",{className:"heading has-text-centered m-0 p-0 f-3",children:["Lng: ",parseFloat(c.lng).toFixed(7)]})}),Object(E.jsx)("div",{className:"column is-flex is-flex-centered m-0 p-0",children:Object(E.jsxs)("p",{className:"heading has-text-centered m-0 p-0 f-3",children:["Hdg: ",parseFloat(c.heading).toFixed(1),"\u0970"]})}),Object(E.jsxs)("div",{className:"column is-flex is-flex-centered m-0 p-0",children:[Object(E.jsx)("button",{className:"button is-outlined ml-2 mr-2 ".concat(l?"is-success":"is-warning"),onClick:function(){return r(!l)},children:l?"Auto center enabled":"Auto center not enabled"}),Object(E.jsx)("button",{className:"button is-outlined is-success ml-2 mr-2",onClick:function(){return te(Y,G)},children:"Get nearest piles"})]})]})]})})),fe=function(e){var t,c,a,s=e.index,i=Object(o.e)((function(e){return e.nextPiles})),l=Object(o.d)((function(e){return e.placeWaypoint})),r=Object(o.d)((function(e){return e.clearPile})),u=Object(n.useState)(0),d=Object(b.a)(u,2),j=d[0],O=d[1],f=Object(n.useState)("red"),h=Object(b.a)(f,2),x=h[0],g=h[1],v=i[s];return Object(n.useEffect)((function(){v.distance>25&&(g("is-danger"),O(1)),v.distance<15&&(g("is-warning"),O(2)),v.distance<6&&(g("is-success"),O(3))}),[v.distance]),Object(E.jsx)("div",{className:"column",children:v.pile_id&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)("div",{className:"is-flex has-text-centered is-flex-direction-column is-align-content-center mb-4",children:[Object(E.jsxs)("p",{className:"heading title is-5",children:["Id: ",v.pile_id]}),Object(E.jsxs)("p",{className:"heading f-4",children:["Lat ",null===(t=v.lat)||void 0===t?void 0:t.toFixed(8)]}),Object(E.jsxs)("p",{className:"heading f-4",children:["Lng ",null===(c=v.lng)||void 0===c?void 0:c.toFixed(8)]}),Object(E.jsxs)("p",{className:"heading f-4",children:["N ",v.x]}),Object(E.jsxs)("p",{className:"heading f-4",children:["E ",v.y]})]}),Object(E.jsx)("div",{className:"flag-icon color_red",onClick:function(){pe(0==s?"leftBay":"rightBay"),setTimeout((function(){var e;me(null===(e=v.color)||void 0===e?void 0:e.trim())}),1e3)},children:Object(E.jsx)(m.a,{icon:p.b,color:v.color})}),Object(E.jsx)("p",{className:"heading has-text-centered",children:v.color}),Object(E.jsxs)("p",{className:"title is-3 has-text-centered mt-3 mb-4",children:[" ",null===(a=v.distance)||void 0===a?void 0:a.toFixed(1)," ft "]}),Object(E.jsx)("progress",{class:"progress rotate ".concat(x),max:"3",value:j}),Object(E.jsx)("div",{className:"is-flex is-flex-centered",children:Object(E.jsx)("button",{onClick:function(){l(v.pile_id),r(s)},className:"button is-outlined is-success",children:"Place"})})]})})},he=function(){var e=Object(o.e)((function(e){return e.waypoints})),t=Object(o.e)((function(e){return e.center})),c=Object(o.e)((function(e){return e.selectedColor})),a=Object(o.d)((function(e){return e.setSelectedColor})),s=Object(n.useState)(L(e)),i=Object(b.a)(s,2),l=i[0],r=i[1],u=Object(n.useState)(B(e)),d=Object(b.a)(u,2),j=d[0],O=d[1];return Object(n.useEffect)((function(){r(L(e)),O(B(e))}),[e]),Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("hr",{className:"m-0 p-0 mb-4"}),Object(E.jsxs)("div",{className:"columns",children:[Object(E.jsxs)("div",{className:"column is-flex is-flex-direction-column is-flex-centered",children:[Object(E.jsx)(m.a,{onClick:function(){return a("")},icon:p.c,className:"is-size-3",color:c}),Object(E.jsx)("p",{className:"heading has-text-centered has-text-link is-size-5 m-0 p-0",children:"Placed"}),Object(E.jsxs)("p",{className:"heading has-text-centered has-text-success is-size-5 m-0 p-0",children:[e.filter((function(e){return e.placed})).length," / ",e.length]})]}),Object(E.jsxs)("div",{className:"column is-four-fifths",children:[Object(E.jsx)("div",{className:"columns",children:Object.keys(l).map((function(e){return Object(E.jsxs)("div",{className:"column has-text-centered m-0 p-0","aria-label":e,children:[Object(E.jsxs)("p",{className:"is-size-7 m-0 p-0",children:[j[e]?j[e]:0," / ",l[e]]}),Object(E.jsx)(m.a,{icon:p.b,onClick:function(){return a(e)},color:e,className:"is-size-3"}),Object(E.jsxs)("p",{children:[(100*(j[e]?j[e]:0)/l[e]).toFixed()," %"]})]})}))}),Object(E.jsx)("hr",{className:"m-0 p-0"}),Object(E.jsx)("p",{className:"has-text-centered",style:{color:c},children:""==c?"No layer selected":c})]}),Object(E.jsxs)("div",{className:"column is-centered has-text-centered",children:[Object(E.jsx)(m.a,{icon:p.d,transform:{rotate:t.heading-45},className:"has-text-white is-size-1"}),Object(E.jsx)("p",{className:"is-size-4",children:t.heading})]})]})]})},xe=function(){return Object(E.jsxs)("div",{className:"container is-fullwidth",children:[Object(E.jsxs)("div",{className:"columns p-0 m-0",children:[Object(E.jsx)(fe,{index:0}),Object(E.jsx)("div",{className:"column is-three-fifths p-0 m-0",children:Object(E.jsx)(Oe,{})}),Object(E.jsx)(fe,{index:1})]}),Object(E.jsx)(he,{})]})},ge=function(e){var t=e.name,c=e.icon,n=Object(r.h)().pathname.includes(t.toLowerCase());return Object(E.jsx)("li",{className:n?"is-active":"",children:Object(E.jsxs)(l.b,{to:"/".concat(t.toLowerCase()),className:"mr-4 ml-4",children:[Object(E.jsx)("span",{className:"icon is-small",children:Object(E.jsx)(m.a,{icon:c})}),Object(E.jsx)("span",{children:t})]})})},ve=function(){return Object(E.jsx)("div",{className:"tabs is-centered m-0",children:Object(E.jsxs)("ul",{children:[Object(E.jsx)(ge,{name:"Map",icon:p.e}),Object(E.jsx)(ge,{name:"Config",icon:p.g})]})})},ke=Object(T.GoogleApiWrapper)({apiKey:"AIzaSyBsgd5A9q-23gHy8tL6e5O0lct6JoD97xo"})((function(e){var t=e.google,c=Object(n.useState)(0),a=Object(b.a)(c,2),s=a[0],i=a[1],l=H("debugCenter",{lat:0,lng:0}),r=Object(b.a)(l,2),o=r[0],u=r[1];return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("div",{className:"container map",children:Object(E.jsx)(T.Map,{google:t,zoom:14,onClick:function(e,t,c){var n={lat:c.latLng.lat().toFixed(5),lng:c.latLng.lng().toFixed(5)};u(n),N(n),console.log(n)},initialCenter:o,children:Object(E.jsx)(T.Marker,{name:"target",position:o})})}),Object(E.jsx)("div",{className:"container mt-4 pt-4",children:Object(E.jsxs)("div",{className:"columns",children:[Object(E.jsxs)("div",{className:"column",children:[Object(E.jsxs)("p",{className:"ml-4",children:["Coordinates: ",o.lat,", ",o.lng]}),Object(E.jsxs)("p",{className:"ml-4",children:["Heading: ",s,"\xb0 "]})]}),Object(E.jsxs)("div",{className:"column",children:[Object(E.jsx)("p",{className:"ml-4",children:"Set heading:"}),Object(E.jsx)("input",{class:"slider m-4",step:1,min:0,max:360,value:s,type:"range",onInput:function(e){var t=parseFloat(e.target.value).toFixed(1);w({heading:t}),i(t)}})]})]})})]})})),ye=Object(o.c)(j),Ne=function(){return Object(E.jsxs)("div",{className:"container is-fullwidth",children:[Object(E.jsx)(ve,{}),Object(E.jsx)(o.a,{store:ye,children:Object(E.jsxs)(r.d,{children:[Object(E.jsx)(r.a,{exact:!0,from:"/",to:"/map"}),Object(E.jsx)(r.b,{path:"/config",component:M}),Object(E.jsx)(r.b,{path:"/map",component:xe}),Object(E.jsx)(r.b,{path:"/debug",component:ke})]})})]})};i.a.render(Object(E.jsx)(a.a.StrictMode,{children:Object(E.jsx)(l.a,{children:Object(E.jsx)(Ne,{})})}),document.getElementById("root"))},77:function(e,t,c){},78:function(e,t,c){}},[[149,1,2]]]);
//# sourceMappingURL=main.c91c51c5.chunk.js.map