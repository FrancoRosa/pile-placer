(this["webpackJsonppile-placer"]=this["webpackJsonppile-placer"]||[]).push([[0],{149:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(32),i=c.n(s),l=c(25),r=(c(77),c(78),c(5)),o=c(4),u=c(21),d=c(29),j={nextPiles:[{},{}],setNextPiles:Object(o.b)((function(e,t){e.nextPiles=Object(d.a)(t)})),clearPile:Object(o.b)((function(e,t){var c=Object(d.a)(e.nextPiles);c[t]={},e.nextPiles=c})),waypoints:[],setWaypoints:Object(o.b)((function(e,t){e.waypoints=Object(d.a)(t)})),placeWaypoint:Object(o.b)((function(e,t){e.waypoints=e.waypoints.map((function(e){return e.pile_id==t?Object(u.a)(Object(u.a)({},e),{},{placed:!0}):e}))})),unplaceWaypoint:Object(o.b)((function(e,t){e.waypoints=e.waypoints.map((function(e){return e.pile_id==t?Object(u.a)(Object(u.a)({},e),{},{placed:!1}):e}))}))},b=c(3),p=c(12),m=c(15),f=c(7),h=c.n(f),O=c(22),x=c(23),g=c.n(x),v=c(71),y="raspberrypi.local:9999",k=c.n(v).a.connect("http://".concat(y)),N=function(){var e=Object(O.a)(h.a.mark((function e(t){var c,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... setting lat lng"),c="http://".concat(y,"/api/location"),e.next=4,g.a.post(c,t);case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(O.a)(h.a.mark((function e(t){var c,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... setting heading"),c="http://".concat(y,"/api/heading"),e.next=4,g.a.post(c,t);case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(O.a)(h.a.mark((function e(t){var c,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... setting config"),c="http://".concat(y,"/api/config"),e.next=4,g.a.post(c,t);case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(O.a)(h.a.mark((function e(t){var c,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... setting reference bay"),c="http://".concat(y,"/api/bay"),e.next=4,g.a.post(c,t);case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(O.a)(h.a.mark((function e(t){var c,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... setting waypoint"),c="http://".concat(y,"/api/waypoint"),e.next=4,g.a.post(c,t);case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(O.a)(h.a.mark((function e(){var t,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... getting waypoints"),t="http://".concat(y,"/api/waypoints"),e.next=4,g.a.get(t);case 4:return c=e.sent,e.abrupt("return",c.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(O.a)(h.a.mark((function e(t,c){var n,a,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... uploading file"),n="http://".concat(y,"/api/file"),(a=new FormData).append("file",t),a.append("code",c),e.next=7,g.a.post(n,a,{headers:{"Content-Type":"multipart/form-data"}});case 7:return s=e.sent,e.abrupt("return",s.data);case 9:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),W=c(0),L=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)("Nothing selected yet"),i=Object(b.a)(s,2),l=i[0],o=i[1],u=Object(n.useState)({}),d=Object(b.a)(u,2),j=d[0],f=d[1],h=Object(r.g)();Object(n.useEffect)((function(){document.querySelector(".file-input").addEventListener("change",(function(e){var t=e.target.files[0],c=e.target.files[0].name;a(t),o(c)}),!1)}),[]);return Object(W.jsxs)("div",{className:"columns",children:[Object(W.jsx)("div",{className:"column file has-name",children:Object(W.jsxs)("label",{className:"file-label",children:[Object(W.jsx)("input",{className:"file-input",type:"file",accept:".csv, .xlsx"}),Object(W.jsxs)("span",{className:"file-cta",children:[Object(W.jsx)("span",{className:"file-icon",children:Object(W.jsx)(m.a,{icon:p.f})}),Object(W.jsx)("span",{className:"file-label",children:"Choose a file ..."})]}),Object(W.jsx)("span",{className:"file-name",children:l})]})}),Object(W.jsx)("div",{className:"column",children:c?Object(W.jsx)("div",{className:"is-flex is-justify-content-center",children:Object(W.jsx)("button",{className:"button is-outlined is-success",onClick:function(){P(c).then((function(e){f(e),setTimeout((function(){h.push("/map")}),1e3)})).catch((function(){return f({message:!1})}))},children:"Upload"})}):""}),Object(W.jsx)("div",{className:"column",children:j.message?Object(W.jsxs)("div",{className:"is-flex is-align-content-center is-flex-direction-column",children:[Object(W.jsx)("p",{className:j.message?"has-text-success":"has-text-fail",children:j.message?"Success":"Fail"}),Object(W.jsxs)("p",{children:["Waypoints: ",j.rows]})]}):""})]})},_=function(e){var t=e.label,c=e.value,n=e.placeholder,a=e.changeHandler;return Object(W.jsxs)("div",{className:"field column",children:[Object(W.jsx)("label",{className:"label",children:t}),Object(W.jsx)("p",{className:"control",children:Object(W.jsx)("input",{className:"input is-medium",type:"number",step:.1,placeholder:n,onChange:function(e){return a(e.target.value)},value:c})})]})},E=function(e,t){var c=Object(n.useState)((function(){try{var c=window.localStorage.getItem(e);return c?JSON.parse(c):t}catch(n){return console.log(n),t}})),a=Object(b.a)(c,2),s=a[0],i=a[1];return[s,function(t){try{var c=t instanceof Function?t(s):t;i(c),window.localStorage.setItem(e,JSON.stringify(c))}catch(n){console.log(n)}}]},B=function(e){var t={};return e.forEach((function(e){var c,n,a;t[null===(c=e.color)||void 0===c?void 0:c.trim()]?t[null===(n=e.color)||void 0===n?void 0:n.trim()]+=1:t[null===(a=e.color)||void 0===a?void 0:a.trim()]=1})),t},H=function(e){var t={};return e.forEach((function(e){var c,n,a;e.placed&&(t[null===(c=e.color)||void 0===c?void 0:c.trim()]?t[null===(n=e.color)||void 0===n?void 0:n.trim()]+=1:t[null===(a=e.color)||void 0===a?void 0:a.trim()]=1)})),t},T=c.p+"static/media/epsg_codes.c38b8103.pdf",I=c.p+"static/media/layout.1bb02a11.png",M=function(){var e=E("config",{}),t=Object(b.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(c.truckLen),i=Object(b.a)(s,2),l=i[0],r=i[1],o=Object(n.useState)(c.truckWid),u=Object(b.a)(o,2),d=u[0],j=u[1],f=Object(n.useState)(c.antennaX),h=Object(b.a)(f,2),O=h[0],x=h[1],g=Object(n.useState)(c.antennaY),v=Object(b.a)(g,2),y=v[0],k=v[1],N=Object(n.useState)(c.bay1),w=Object(b.a)(N,2),C=w[0],A=w[1],F=Object(n.useState)(c.bay2),P=Object(b.a)(F,2),B=P[0],H=P[1],M=Object(n.useState)(c.epsg),J=Object(b.a)(M,2),G=J[0],z=J[1],D=Object(n.useState)(""),q=Object(b.a)(D,2),X=q[0],Y=q[1];return Object(W.jsx)("div",{className:"container",children:Object(W.jsxs)("div",{className:"columns",children:[Object(W.jsxs)("div",{className:"column",children:[Object(W.jsxs)("div",{className:"columns",children:[Object(W.jsx)(_,{label:"Truck length",value:l,placeholder:"Truck with trailer in ft",changeHandler:r}),Object(W.jsx)(_,{label:"Truck width",value:d,placeholder:"Trailer width in ft",changeHandler:j})]}),Object(W.jsxs)("div",{className:"columns",children:[Object(W.jsx)(_,{label:"Antenna from left",value:O,placeholder:"Antenna location in ft",changeHandler:x}),Object(W.jsx)(_,{label:"Antenna from truck head",value:y,placeholder:"Antenna location in ft",changeHandler:k})]}),Object(W.jsxs)("div",{className:"columns",children:[Object(W.jsx)(_,{label:"Bay 1 from truck head",value:C,placeholder:"Bay 1 location in ft",changeHandler:A}),Object(W.jsx)(_,{label:"Bay 2 from truck head",value:B,placeholder:"Bay 2 location in ft",changeHandler:H})]}),Object(W.jsxs)("div",{className:"columns",children:[Object(W.jsx)(_,{label:"EPSG code",value:G,placeholder:"Projected coordinate reference",changeHandler:z}),Object(W.jsxs)("div",{className:"column is-flex-direction-column is-flex is-flex-centered",children:[Object(W.jsx)("p",{className:"heading has-text-link",children:"EPSG Reference"}),Object(W.jsx)("a",{href:T,target:"blank",className:"has-text-white title is-2",children:Object(W.jsx)(m.a,{icon:p.a})})]}),Object(W.jsxs)("div",{className:"column is-flex-direction-column is-flex is-flex-centered",children:[Object(W.jsx)("p",{className:"heading has-text-link",children:"EPSG Browser"}),Object(W.jsx)("a",{href:"https://epsg.io/",target:"blank",className:"has-text-white title is-2",children:Object(W.jsx)(m.a,{icon:p.d})})]}),Object(W.jsxs)("div",{className:"column is-flex is-justify-content-center is-align-content-center",children:[Object(W.jsx)("button",{className:"button ml-2",onClick:function(){a({truckLen:l,truckWid:d,antennaX:O,antennaY:y,bay1:C,bay2:B,epsg:G}),S({truckLen:l,truckWid:d,antennaX:O,antennaY:y,bay1:C,bay2:B,epsg:G}).then((function(){return Y("Success")})).catch((function(){return Y("Fail")}))},children:"Save"}),Object(W.jsx)("p",{className:"success ml-2 ".concat("Success"==X?"has-text-success":"has-text-danger"),children:X})]})]}),Object(W.jsx)("hr",{}),Object(W.jsx)(L,{})]}),Object(W.jsx)("div",{className:"column is-centered has-text-centered",children:Object(W.jsx)("img",{src:I})})]})})},J=c(13),G=function(){var e=Object(o.e)((function(e){return e.waypoints})),t=Object(n.useState)(B(e)),c=Object(b.a)(t,2),a=c[0],s=c[1],i=Object(n.useState)(H(e)),l=Object(b.a)(i,2),r=l[0],u=l[1];return Object(n.useEffect)((function(){s(B(e)),u(H(e))}),[e]),Object(W.jsx)(W.Fragment,{children:Object(W.jsxs)("div",{className:"columns",children:[Object(W.jsxs)("div",{className:"column is-flex is-flex-direction-column is-flex-centered",children:[Object(W.jsx)("p",{className:"heading has-text-centered has-text-link title is-5 m-0 p-0",children:"Placed"}),Object(W.jsxs)("p",{className:"heading has-text-centered has-text-success title is-3 m-0 p-0",children:[e.filter((function(e){return e.placed})).length," / ",e.length]})]}),Object.keys(a).map((function(e){return Object(W.jsxs)("div",{className:"column has-text-centered",children:[Object(W.jsxs)("p",{children:[r[e]?r[e]:0," / ",a[e]]}),Object(W.jsx)(m.a,{icon:p.b,color:e,style:{fontSize:"2.5em"}}),Object(W.jsxs)("p",{children:[(100*(r[e]?r[e]:0)/a[e]).toFixed()," %"]})]})}))]})})},z=c.p+"static/media/1.2999e734.mp3",D=c.p+"static/media/2.c90484f3.mp3",q=c.p+"static/media/3.451a053d.mp3",X=c.p+"static/media/4.3d33a969.mp3",Y=c.p+"static/media/5.0b9156e3.mp3",K=c.p+"static/media/6.52edbbb5.mp3",R=c.p+"static/media/7.b473eb3a.mp3",U=c.p+"static/media/8.55fb2017.mp3",Z=c.p+"static/media/9.308dc1bf.mp3",Q=c.p+"static/media/10.1fbcf1e7.mp3",V=c.p+"static/media/black.67345e6d.mp3",$=c.p+"static/media/blue.603a17d2.mp3",ee=c.p+"static/media/brown.aa74bbbb.mp3",te=c.p+"static/media/darkblue.587d78fd.mp3",ce=c.p+"static/media/lightblue.9a9ee83a.mp3",ne=c.p+"static/media/lightgreen.d7c408fe.mp3",ae=c.p+"static/media/orange.42e333b5.mp3",se=c.p+"static/media/pink.f914d206.mp3",ie=c.p+"static/media/purple.8e39b00d.mp3",le=c.p+"static/media/red.d598f0dc.mp3",re=c.p+"static/media/white.a09c2726.mp3",oe=c.p+"static/media/yellow.1d5be675.mp3",ue=c.p+"static/media/left_bay.ba74ee7d.mp3",de=c.p+"static/media/right_bay.0fce9298.mp3",je=c.p+"static/media/next_pile.aa5d59d6.mp3",be=(new Audio(z),new Audio(D),new Audio(q),new Audio(X),new Audio(Y),new Audio(K),new Audio(R),new Audio(U),new Audio(Z),new Audio(Q),{leftBay:new Audio(ue),rightBay:new Audio(de),nextPile:new Audio(je)}),pe={black:new Audio(V),blue:new Audio($),brown:new Audio(ee),darkblue:new Audio(te),lightblue:new Audio(ce),lightgreen:new Audio(ne),orange:new Audio(ae),pink:new Audio(se),purple:new Audio(ie),red:new Audio(le),white:new Audio(re),yellow:new Audio(oe)},me=function(e){be[e]&&be[e].play()},fe=function(e){pe[e]&&pe[e].play()},he=Object(J.GoogleApiWrapper)({apiKey:"AIzaSyBsgd5A9q-23gHy8tL6e5O0lct6JoD97xo",version:"beta"})((function(e){var t=e.google,c=Object(n.useState)({heading:0,lat:0,lng:0}),a=Object(b.a)(c,2),s=a[0],i=a[1],l=Object(n.useState)(!0),r=Object(b.a)(l,2),j=r[0],p=r[1],m=Object(n.useState)([]),f=Object(b.a)(m,2),h=f[0],O=f[1],x=Object(n.useState)([]),g=Object(b.a)(x,2),v=g[0],y=g[1],N=Object(n.useState)([]),w=Object(b.a)(N,2),S=w[0],P=w[1],L=Object(o.e)((function(e){return e.nextPiles})),_=Object(o.d)((function(e){return e.setNextPiles})),B=Object(o.e)((function(e){return e.waypoints})),H=Object(o.d)((function(e){return e.setWaypoints})),T=Object(o.d)((function(e){return e.placeWaypoint})),I=Object(o.d)((function(e){return e.unplaceWaypoint})),M=E("debugCenter",{lat:0,lng:0}),z=Object(b.a)(M,2),D=z[0];z[1];Object(n.useEffect)((function(){return F().then((function(e){H(e.waypoints),e.waypoints.length>0&&i(Object(u.a)(Object(u.a)({},s),e.waypoints[0]))})),k.on("message",(function(e){e=JSON.parse(e),console.log(e),i(e),O([{lat:e.truck[0][0],lng:e.truck[0][1]},{lat:e.truck[1][0],lng:e.truck[1][1]},{lat:e.truck[2][0],lng:e.truck[2][1]},{lat:e.truck[3][0],lng:e.truck[3][1]},{lat:e.truck[0][0],lng:e.truck[0][1]}]),y([{lat:e.truck[4][0],lng:e.truck[4][1]},{lat:e.truck[5][0],lng:e.truck[5][1]}]),P([{lat:e.bays[0][0],lng:e.bays[0][1]},{lat:e.bays[1][0],lng:e.bays[1][1]}])})),function(){k.off("message")}}),[]);var q=function(e,t){var c=function(e,t){var c,n,a,s,i=1e4,l=1e4;return e.forEach((function(e){e.placed||(c=Math.pow(e.lat-t[0].lat,2)+Math.pow(e.lng-t[0].lng,2),n=Math.pow(e.lat-t[1].lat,2)+Math.pow(e.lng-t[1].lng,2),c<i&&(i=c,a=e),n<l&&(l=n,s=e))})),[a,s]}(e,t);_(c),A(c),console.log("... getting colors");try{var n=e.filter((function(e){return e.pile_id==c[0].pile_id}))[0].color.trim(),a=e.filter((function(e){return e.pile_id==c[1].pile_id}))[0].color.trim();me("leftBay"),setTimeout((function(){return fe(n)}),1e3),setTimeout((function(){return me("rightBay")}),2e3),setTimeout((function(){return fe(a)}),3e3)}catch(s){console.log("error finfing colors")}};return Object(n.useEffect)((function(){if(Object.keys(s).includes("distance")){var e=Object(d.a)(L);e[0].distance=s.distance[0],e[1].distance=s.distance[1],_(e)}}),[s]),Object(n.useEffect)((function(){j?(k.off("message"),k.on("message",(function(e){e=JSON.parse(e),console.log(e),i(e),O([{lat:e.truck[0][0],lng:e.truck[0][1]},{lat:e.truck[1][0],lng:e.truck[1][1]},{lat:e.truck[2][0],lng:e.truck[2][1]},{lat:e.truck[3][0],lng:e.truck[3][1]},{lat:e.truck[0][0],lng:e.truck[0][1]}]),y([{lat:e.truck[4][0],lng:e.truck[4][1]},{lat:e.truck[5][0],lng:e.truck[5][1]}]),P([{lat:e.bays[0][0],lng:e.bays[0][1]},{lat:e.bays[1][0],lng:e.bays[1][1]}])}))):k.off("message")}),[j]),Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)("div",{className:"container map",children:Object(W.jsxs)(J.Map,{google:t,zoom:22,initialCenter:D,center:s,mapId:"2f571dc2d7296a3a",onCenterChanged:function(e,t){t.setHeading(parseInt(s.heading))},onClick:function(e,t,c){i(Object(u.a)(Object(u.a)({},s),{},{lat:c.latLng.lat().toFixed(5),lng:c.latLng.lng().toFixed(5)}))},onDblclick:function(){return console.log("doubleClick")},disableDoubleClickZoom:!0,children:[Object(W.jsx)(J.Circle,{center:s,radius:.1,strokeColor:"black",strokeOpacity:.8,strokeWeight:2,fillColor:"black"}),B.map((function(e){return Object(W.jsx)(J.Circle,{center:e,radius:e.placed?.3:.6,strokeColor:e.color,strokeOpacity:.8,strokeWeight:e.placed?0:2,fillColor:e.color,onClick:function(){return e.placed?I(e.pile_id):T(e.pile_id)}})})),S.map((function(e,t){return Object(W.jsx)(J.Circle,{center:e,radius:.5,strokeColor:"#FF0000",strokeOpacity:.8,strokeWeight:2,fillColor:"#FF0000",fillOpacity:.35,onClick:function(){C({bay:t})}})})),Object(W.jsx)(J.Polygon,{paths:h,strokeColor:"#FF0000",strokeOpacity:.8,strokeWeight:2,fillColor:"#FF0000",fillOpacity:.35}),Object(W.jsx)(J.Polyline,{path:v,strokeColor:"#FF0000",strokeOpacity:.8,strokeWeight:2,fillColor:"#FF0000",fillOpacity:.35})]})}),Object(W.jsxs)("div",{className:"columns mt-3 has-text-link ",children:[Object(W.jsx)("div",{className:"column is-flex is-flex-centered m-0 p-0",children:Object(W.jsxs)("p",{className:"heading has-text-centered m-0 p-0 f-3",children:["Lat: ",parseFloat(s.lat).toFixed(7)]})}),Object(W.jsx)("div",{className:"column is-flex is-flex-centered m-0 p-0",children:Object(W.jsxs)("p",{className:"heading has-text-centered m-0 p-0 f-3",children:["Lng: ",parseFloat(s.lng).toFixed(7)]})}),Object(W.jsx)("div",{className:"column is-flex is-flex-centered m-0 p-0",children:Object(W.jsxs)("p",{className:"heading has-text-centered m-0 p-0 f-3",children:["Hdg: ",parseFloat(s.heading).toFixed(1),"\u0970"]})}),Object(W.jsxs)("div",{className:"column is-flex is-flex-centered m-0 p-0",children:[Object(W.jsx)("button",{className:"button is-outlined ml-2 mr-2 ".concat(j?"is-success":"is-warning"),onClick:function(){return p(!j)},children:j?"Auto center enabled":"Auto center not enabled"}),Object(W.jsx)("button",{className:"button is-outlined is-success ml-2 mr-2",onClick:function(){return q(B,S)},children:"Get nearest piles"})]})]}),Object(W.jsx)("hr",{className:"m-1"}),Object(W.jsx)(G,{})]})})),Oe=function(e){var t,c,a,s=e.index,i=Object(o.e)((function(e){return e.nextPiles})),l=Object(o.d)((function(e){return e.placeWaypoint})),r=Object(o.d)((function(e){return e.clearPile})),u=Object(n.useState)(0),d=Object(b.a)(u,2),j=d[0],f=d[1],h=Object(n.useState)("red"),O=Object(b.a)(h,2),x=O[0],g=O[1],v=i[s];return Object(n.useEffect)((function(){v.distance>25&&(g("is-danger"),f(1)),v.distance<15&&(g("is-warning"),f(2)),v.distance<6&&(g("is-success"),f(3))}),[v.distance]),Object(W.jsx)("div",{className:"column",children:v.pile_id&&Object(W.jsxs)(W.Fragment,{children:[Object(W.jsxs)("div",{className:"is-flex has-text-centered is-flex-direction-column is-align-content-center mb-4",children:[Object(W.jsxs)("p",{className:"heading title is-5",children:["Id: ",v.pile_id]}),Object(W.jsxs)("p",{className:"heading f-4",children:["Lat ",null===(t=v.lat)||void 0===t?void 0:t.toFixed(8)]}),Object(W.jsxs)("p",{className:"heading f-4",children:["Lng ",null===(c=v.lng)||void 0===c?void 0:c.toFixed(8)]}),Object(W.jsxs)("p",{className:"heading f-4",children:["N ",v.x]}),Object(W.jsxs)("p",{className:"heading f-4",children:["E ",v.y]})]}),Object(W.jsx)("div",{className:"flag-icon color_red",onClick:function(){me(0==s?"leftBay":"rightBay"),setTimeout((function(){var e;fe(null===(e=v.color)||void 0===e?void 0:e.trim())}),1e3)},children:Object(W.jsx)(m.a,{icon:p.b,color:v.color})}),Object(W.jsx)("p",{className:"heading has-text-centered",children:v.color}),Object(W.jsxs)("p",{className:"title is-3 has-text-centered mt-3 mb-4",children:[" ",null===(a=v.distance)||void 0===a?void 0:a.toFixed(1)," ft "]}),Object(W.jsx)("progress",{class:"progress rotate ".concat(x),max:"3",value:j}),Object(W.jsx)("div",{className:"is-flex is-flex-centered",children:Object(W.jsx)("button",{onClick:function(){l(v.pile_id),r(s)},className:"button is-outlined is-success",children:"Place"})})]})})},xe=function(){return Object(W.jsx)("div",{className:"container is-fullwidth",children:Object(W.jsxs)("div",{className:"columns p-0 m-0",children:[Object(W.jsx)(Oe,{index:0}),Object(W.jsx)("div",{className:"column is-three-fifths p-0 m-0",children:Object(W.jsx)(he,{})}),Object(W.jsx)(Oe,{index:1})]})})},ge=function(e){var t=e.name,c=e.icon,n=Object(r.h)().pathname.includes(t.toLowerCase());return Object(W.jsx)("li",{className:n?"is-active":"",children:Object(W.jsxs)(l.b,{to:"/".concat(t.toLowerCase()),className:"mr-4 ml-4",children:[Object(W.jsx)("span",{className:"icon is-small",children:Object(W.jsx)(m.a,{icon:c})}),Object(W.jsx)("span",{children:t})]})})},ve=function(){return Object(W.jsx)("div",{className:"tabs is-centered m-0",children:Object(W.jsxs)("ul",{children:[Object(W.jsx)(ge,{name:"Map",icon:p.c}),Object(W.jsx)(ge,{name:"Config",icon:p.e})]})})},ye=Object(J.GoogleApiWrapper)({apiKey:"AIzaSyBsgd5A9q-23gHy8tL6e5O0lct6JoD97xo"})((function(e){var t=e.google,c=Object(n.useState)(0),a=Object(b.a)(c,2),s=a[0],i=a[1],l=E("debugCenter",{lat:0,lng:0}),r=Object(b.a)(l,2),o=r[0],u=r[1];return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)("div",{className:"container map",children:Object(W.jsx)(J.Map,{google:t,zoom:14,onClick:function(e,t,c){var n={lat:c.latLng.lat().toFixed(5),lng:c.latLng.lng().toFixed(5)};u(n),N(n),console.log(n)},initialCenter:o,children:Object(W.jsx)(J.Marker,{name:"target",position:o})})}),Object(W.jsx)("div",{className:"container mt-4 pt-4",children:Object(W.jsxs)("div",{className:"columns",children:[Object(W.jsxs)("div",{className:"column",children:[Object(W.jsxs)("p",{className:"ml-4",children:["Coordinates: ",o.lat,", ",o.lng]}),Object(W.jsxs)("p",{className:"ml-4",children:["Heading: ",s,"\xb0 "]})]}),Object(W.jsxs)("div",{className:"column",children:[Object(W.jsx)("p",{className:"ml-4",children:"Set heading:"}),Object(W.jsx)("input",{class:"slider m-4",step:1,min:0,max:360,value:s,type:"range",onInput:function(e){var t=parseFloat(e.target.value).toFixed(1);w({heading:t}),i(t)}})]})]})})]})})),ke=Object(o.c)(j),Ne=function(){return Object(W.jsxs)("div",{className:"container is-fullwidth",children:[Object(W.jsx)(ve,{}),Object(W.jsx)(o.a,{store:ke,children:Object(W.jsxs)(r.d,{children:[Object(W.jsx)(r.a,{exact:!0,from:"/",to:"/map"}),Object(W.jsx)(r.b,{path:"/config",component:M}),Object(W.jsx)(r.b,{path:"/map",component:xe}),Object(W.jsx)(r.b,{path:"/debug",component:ye})]})})]})};i.a.render(Object(W.jsx)(a.a.StrictMode,{children:Object(W.jsx)(l.a,{children:Object(W.jsx)(Ne,{})})}),document.getElementById("root"))},77:function(e,t,c){},78:function(e,t,c){}},[[149,1,2]]]);
//# sourceMappingURL=main.750888fd.chunk.js.map