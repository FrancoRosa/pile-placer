(this["webpackJsonppile-placer"]=this["webpackJsonppile-placer"]||[]).push([[0],{143:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(29),i=c.n(s),l=c(26),r=(c(72),c(73),c(3)),o=c(4),u=Object(a.createContext)(null),d=c(10),j=c(12),b=c(6),p=c.n(b),m=c(20),h=c(19),O=c.n(h),f=c(66),x=c.n(f),g="192.168.1.5:9999";["raspberrypi.local:9999","localhost:9999","10.84.9.68:9999","192.168.1.5:9999"].forEach((function(e){console.log("looking for hosts"),O.a.get("http://".concat(e),{timeout:1e3}).then((function(){g=e,console.log("New host:",e),v(e)})).catch((function(){console.log("...",e,"unreachable")}))}));var v=function(e){},y=x.a.connect("http://".concat(g)),N=function(){var e=Object(m.a)(p.a.mark((function e(t){var c,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... setting lat lng"),c="http://".concat(g,"/api/location"),e.next=4,O.a.post(c,t);case 4:return a=e.sent,e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(m.a)(p.a.mark((function e(t){var c,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... setting heading"),c="http://".concat(g,"/api/heading"),e.next=4,O.a.post(c,t);case 4:return a=e.sent,e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(m.a)(p.a.mark((function e(t){var c,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... setting config"),c="http://".concat(g,"/api/config"),e.next=4,O.a.post(c,t);case 4:return a=e.sent,e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(m.a)(p.a.mark((function e(t){var c,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... setting reference bay"),c="http://".concat(g,"/api/bay"),e.next=4,O.a.post(c,t);case 4:return a=e.sent,e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(m.a)(p.a.mark((function e(t){var c,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... setting waypoint"),c="http://".concat(g,"/api/waypoint"),e.next=4,O.a.post(c,t);case 4:return a=e.sent,e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(m.a)(p.a.mark((function e(){var t,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... getting waypoints"),t="http://".concat(g,"/api/waypoints"),e.next=4,O.a.get(t);case 4:return c=e.sent,e.abrupt("return",c.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(m.a)(p.a.mark((function e(t,c){var a,n,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... uploading file"),a="http://".concat(g,"/api/file"),(n=new FormData).append("file",t),n.append("code",c),e.next=7,O.a.post(a,n,{headers:{"Content-Type":"multipart/form-data"}});case 7:return s=e.sent,e.abrupt("return",s.data);case 9:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),A=c(0),H=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)("Nothing selected yet"),i=Object(r.a)(s,2),l=i[0],o=i[1],u=Object(a.useState)({}),b=Object(r.a)(u,2),p=b[0],m=b[1];Object(a.useEffect)((function(){document.querySelector(".file-input").addEventListener("change",(function(e){var t=e.target.files[0],c=e.target.files[0].name;n(t),o(c)}),!1)}),[]);return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("div",{className:"file has-name",children:Object(A.jsxs)("label",{className:"file-label",children:[Object(A.jsx)("input",{className:"file-input",type:"file",accept:".csv, .xlsx"}),Object(A.jsxs)("span",{className:"file-cta",children:[Object(A.jsx)("span",{className:"file-icon",children:Object(A.jsx)(j.a,{icon:d.f})}),Object(A.jsx)("span",{className:"file-label",children:"Choose a file ..."})]}),Object(A.jsx)("span",{className:"file-name",children:l})]})}),Object(A.jsx)("div",{className:"columns",children:Object(A.jsxs)("div",{className:"column mt-4",children:[c?Object(A.jsx)("div",{className:"is-flex is-justify-content-center m-4",children:Object(A.jsx)("button",{className:"button is-outlined is-success",onClick:function(){L(c).then((function(e){m(e)})).catch((function(){return m({message:!1})}))},children:"Upload"})}):"",p.message?Object(A.jsxs)("div",{className:"is-flex is-align-content-center m-1 is-flex-direction-column",children:[Object(A.jsx)("p",{className:p.message?"has-text-success":"has-text-fail",children:p.message?"Success":"Fail"}),Object(A.jsxs)("p",{children:["Waypoints found: ",p.rows]})]}):""]})})]})},B=function(e){var t=e.label,c=e.value,a=e.placeholder,n=e.changeHandler;return Object(A.jsxs)("div",{className:"field column",children:[Object(A.jsx)("label",{className:"label",children:t}),Object(A.jsx)("p",{className:"control",children:Object(A.jsx)("input",{className:"input is-medium",type:"number",step:.1,placeholder:a,onChange:function(e){return n(e.target.value)},value:c})})]})},E=c.p+"static/media/epsg_codes.c38b8103.pdf",W=function(){var e=function(e,t){var c=Object(a.useState)((function(){try{var c=window.localStorage.getItem(e);return c?JSON.parse(c):t}catch(a){return console.log(a),t}})),n=Object(r.a)(c,2),s=n[0],i=n[1];return[s,function(t){try{var c=t instanceof Function?t(s):t;i(c),window.localStorage.setItem(e,JSON.stringify(c))}catch(a){console.log(a)}}]}("config",{}),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(c.truckLen),i=Object(r.a)(s,2),l=i[0],o=i[1],u=Object(a.useState)(c.truckWid),b=Object(r.a)(u,2),p=b[0],m=b[1],h=Object(a.useState)(c.antennaX),O=Object(r.a)(h,2),f=O[0],x=O[1],g=Object(a.useState)(c.antennaY),v=Object(r.a)(g,2),y=v[0],N=v[1],k=Object(a.useState)(c.bay1),S=Object(r.a)(k,2),C=S[0],F=S[1],L=Object(a.useState)(c.bay2),W=Object(r.a)(L,2),I=W[0],J=W[1],P=Object(a.useState)(c.epsg),D=Object(r.a)(P,2),T=D[0],G=D[1],M=Object(a.useState)(""),_=Object(r.a)(M,2),z=_[0],q=_[1];return Object(A.jsx)("div",{className:"container",children:Object(A.jsxs)("div",{className:"columns",children:[Object(A.jsxs)("div",{className:"column",children:[Object(A.jsxs)("div",{className:"columns",children:[Object(A.jsx)(B,{label:"Truck length",value:l,placeholder:"Truck with trailer in ft",changeHandler:o}),Object(A.jsx)(B,{label:"Truck width",value:p,placeholder:"Trailer width in ft",changeHandler:m})]}),Object(A.jsxs)("div",{className:"columns",children:[Object(A.jsx)(B,{label:"Antenna from left",value:f,placeholder:"Antenna location in ft",changeHandler:x}),Object(A.jsx)(B,{label:"Antenna from truck head",value:y,placeholder:"Antenna location in ft",changeHandler:N})]}),Object(A.jsxs)("div",{className:"columns",children:[Object(A.jsx)(B,{label:"Bay 1 from truck head",value:C,placeholder:"Bay 1 location in ft",changeHandler:F}),Object(A.jsx)(B,{label:"Bay 2 from truck head",value:I,placeholder:"Bay 2 location in ft",changeHandler:J})]}),Object(A.jsxs)("div",{className:"columns",children:[Object(A.jsx)(B,{label:"EPSG code",value:T,placeholder:"Projected coordinate reference",changeHandler:G}),Object(A.jsxs)("div",{className:"column is-flex-direction-column is-flex is-flex-centered",children:[Object(A.jsx)("p",{className:"heading has-text-link",children:"EPSG Reference"}),Object(A.jsx)("a",{href:E,target:"blank",className:"has-text-white title is-2",children:Object(A.jsx)(j.a,{icon:d.a})})]}),Object(A.jsxs)("div",{className:"column is-flex-direction-column is-flex is-flex-centered",children:[Object(A.jsx)("p",{className:"heading has-text-link",children:"EPSG Browser"}),Object(A.jsx)("a",{href:"https://epsg.io/",target:"blank",className:"has-text-white title is-2",children:Object(A.jsx)(j.a,{icon:d.d})})]})]}),Object(A.jsxs)("div",{className:"is-flex is-justify-content-center is-align-content-center",children:[Object(A.jsx)("button",{className:"button ml-2",onClick:function(){n({truckLen:l,truckWid:p,antennaX:f,antennaY:y,bay1:C,bay2:I,epsg:T}),w({truckLen:l,truckWid:p,antennaX:f,antennaY:y,bay1:C,bay2:I,epsg:T}).then((function(){return q("Success")})).catch((function(){return q("Fail")}))},children:"Save parameters"}),Object(A.jsx)("p",{className:"success ml-2 ".concat("Success"==z?"has-text-success":"has-text-danger"),children:z})]}),Object(A.jsx)("hr",{}),Object(A.jsx)(H,{})]}),Object(A.jsx)("div",{className:"column",children:Object(A.jsx)("h1",{className:"title is-4 has-text-centered",children:"Layout"})})]})})},I=c(23),J=c(18),P=c.p+"static/media/1.2999e734.mp3",D=c.p+"static/media/2.c90484f3.mp3",T=c.p+"static/media/3.451a053d.mp3",G=c.p+"static/media/4.3d33a969.mp3",M=c.p+"static/media/5.0b9156e3.mp3",_=c.p+"static/media/6.52edbbb5.mp3",z=c.p+"static/media/7.b473eb3a.mp3",q=c.p+"static/media/8.55fb2017.mp3",X=c.p+"static/media/9.308dc1bf.mp3",Y=c.p+"static/media/10.1fbcf1e7.mp3",K=c.p+"static/media/black.67345e6d.mp3",R=c.p+"static/media/blue.603a17d2.mp3",U=c.p+"static/media/brown.aa74bbbb.mp3",Z=c.p+"static/media/darkblue.587d78fd.mp3",Q=c.p+"static/media/lightblue.9a9ee83a.mp3",V=c.p+"static/media/lightgreen.d7c408fe.mp3",$=c.p+"static/media/orange.42e333b5.mp3",ee=c.p+"static/media/pink.f914d206.mp3",te=c.p+"static/media/purple.8e39b00d.mp3",ce=c.p+"static/media/red.d598f0dc.mp3",ae=c.p+"static/media/white.a09c2726.mp3",ne=c.p+"static/media/yellow.1d5be675.mp3",se=c.p+"static/media/left_bay.ba74ee7d.mp3",ie=c.p+"static/media/right_bay.0fce9298.mp3",le=c.p+"static/media/next_pile.aa5d59d6.mp3",re={black:K,blue:R,brown:U,darkblue:Z,lightblue:Q,lightgreen:V,orange:$,pink:ee,purple:te,red:ce,white:ae,yellow:ne},oe=[P,D,T,G,M,_,z,q,X,Y],ue={leftBay:se,rightBay:ie,nextPile:le},de=function(e){re[e]&&new Audio(re[e]).play()},je=function(e){ue[e]&&new Audio(ue[e]).play()},be=function(e){var t=e.colors;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("hr",{className:"m-1"}),t&&Object(A.jsxs)("p",{className:"heading has-text-centered has-text-link",children:[Object.entries(t).reduce((function(e,t){return e+t[1]}),0)," piles found"]}),Object(A.jsx)("div",{className:"columns mt-3",children:Object.entries(t).map((function(e){return Object(A.jsxs)("div",{className:"column",children:[Object(A.jsx)(j.a,{icon:d.b,color:e[0]}),Object(A.jsx)("p",{children:e[1]})]})}))})]})},pe=Object(J.GoogleApiWrapper)({apiKey:"AIzaSyBsgd5A9q-23gHy8tL6e5O0lct6JoD97xo",version:"beta"})((function(e){var t=e.google,c=Object(a.useState)({heading:0,lat:0,lng:0}),n=Object(r.a)(c,2),s=n[0],i=n[1],l=Object(a.useState)(!0),o=Object(r.a)(l,2),d=o[0],j=o[1],b=Object(a.useState)([]),p=Object(r.a)(b,2),m=p[0],h=p[1],O=Object(a.useState)({}),f=Object(r.a)(O,2),x=f[0],g=f[1],v=Object(a.useState)([]),N=Object(r.a)(v,2),k=N[0],w=N[1],L=Object(a.useState)([]),H=Object(r.a)(L,2),B=H[0],E=H[1],W=Object(a.useContext)(u),P=W.waypoint,D=W.setWaypoint;return Object(a.useEffect)((function(){return F().then((function(e){h(e.waypoints),e.waypoints.length>0&&(i(Object(I.a)(Object(I.a)({},s),e.waypoints[0])),g(function(e){var t={};return e.forEach((function(e){t[e.color]?t[e.color]+=1:t[e.color]=1})),t}(e.waypoints)))})),y.on("message",(function(e){e=JSON.parse(e),i(e),w([{lat:e.truck[0][0],lng:e.truck[0][1]},{lat:e.truck[1][0],lng:e.truck[1][1]},{lat:e.truck[2][0],lng:e.truck[2][1]},{lat:e.truck[3][0],lng:e.truck[3][1]},{lat:e.truck[0][0],lng:e.truck[0][1]}]),E([{lat:e.bays[0][0],lng:e.bays[0][1]},{lat:e.bays[1][0],lng:e.bays[1][1]}])})),function(){y.off("message")}}),[]),Object(a.useEffect)((function(){D(Object(I.a)(Object(I.a)({},P),{},{distance:s.distance}))}),[s]),Object(a.useEffect)((function(){d?(y.off("message"),y.on("message",(function(e){e=JSON.parse(e),i(e),w([{lat:e.truck[0][0],lng:e.truck[0][1]},{lat:e.truck[1][0],lng:e.truck[1][1]},{lat:e.truck[2][0],lng:e.truck[2][1]},{lat:e.truck[3][0],lng:e.truck[3][1]},{lat:e.truck[0][0],lng:e.truck[0][1]}]),E([{lat:e.bays[0][0],lng:e.bays[0][1]},{lat:e.bays[1][0],lng:e.bays[1][1]}])}))):y.off("message")}),[d]),Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("div",{className:"container map",children:Object(A.jsxs)(J.Map,{google:t,zoom:22,initialCenter:s,center:s,mapId:"2f571dc2d7296a3a",onCenterChanged:function(e,t){t.setHeading(parseInt(s.heading))},onClick:function(e,t,c){i(Object(I.a)(Object(I.a)({},s),{},{lat:c.latLng.lat().toFixed(5),lng:c.latLng.lng().toFixed(5)}))},onDblclick:function(){return console.log("doubleClick")},disableDoubleClickZoom:!0,children:[m.map((function(e){return Object(A.jsx)(J.Circle,{center:e,radius:.5,strokeColor:e.color,strokeOpacity:.8,strokeWeight:2,fillColor:e.color,onClick:function(){D(e),C(e),de(e.color)},onDblclick:function(){return console.log("Toogle status")}})})),B.map((function(e,t){return Object(A.jsx)(J.Circle,{center:e,radius:.5,strokeColor:"#FF0000",strokeOpacity:.8,strokeWeight:2,fillColor:"#FF0000",fillOpacity:.35,onClick:function(){S({bay:t}),je(0==t?"leftBay":"rightBay")}})})),Object(A.jsx)(J.Polygon,{paths:k,strokeColor:"#FF0000",strokeOpacity:.8,strokeWeight:2,fillColor:"#FF0000",fillOpacity:.35})]})}),Object(A.jsxs)("div",{className:"columns mt-3 has-text-link ",children:[Object(A.jsx)("div",{className:"column is-flex is-flex-centered",children:Object(A.jsxs)("p",{className:"heading has-text-centered",children:["Lat: ",parseFloat(s.lat).toFixed(8)]})}),Object(A.jsx)("div",{className:"column is-flex is-flex-centered",children:Object(A.jsxs)("p",{className:"heading has-text-centered",children:["Lng: ",parseFloat(s.lng).toFixed(8)]})}),Object(A.jsx)("div",{className:"column is-flex is-flex-centered",children:Object(A.jsxs)("p",{className:"heading has-text-centered",children:["Heading: ",s.heading.toFixed(1),"\u0970"]})}),Object(A.jsx)("div",{className:"column is-flex is-flex-centered",children:Object(A.jsx)("button",{className:"button is-outlined is-small ".concat(d?"is-success":"is-warning"),onClick:function(){return j(!d)},children:d?"Auto center enabled":"Auto center not enabled"})})]}),Object(A.jsx)(be,{colors:x})]})})),me=function(){var e,t,c,n=Object(a.useContext)(u);return Object(a.useEffect)((function(){!function(e){var t=parseInt(e);console.log("... play distance",t),t<10&&oe[t]&&new Audio(oe[t]).play()}(n.waypoint.distance)}),[n]),Object(A.jsx)("div",{className:"container",children:Object(A.jsxs)("div",{className:"columns",children:[Object(A.jsx)("div",{className:"column",children:Object(A.jsx)(pe,{})}),Object(A.jsxs)("div",{className:"column is-one-fifth",children:[Object(A.jsx)("p",{className:"title is-5 has-text-centered mt-4",children:" Next pile: "}),Object(A.jsxs)("div",{className:"is-flex is-flex-direction-column is-align-content-center mb-4",children:[Object(A.jsxs)("p",{children:["Lat: ",null===(e=n.waypoint.lat)||void 0===e?void 0:e.toFixed(8)]}),Object(A.jsxs)("p",{children:["Lng: ",null===(t=n.waypoint.lng)||void 0===t?void 0:t.toFixed(8)]}),Object(A.jsxs)("p",{children:["x: ",n.waypoint.x]}),Object(A.jsxs)("p",{children:["y: ",n.waypoint.y]}),Object(A.jsxs)("p",{children:["Color: ",n.waypoint.color]})]}),Object(A.jsx)("div",{className:"flag-icon color_red",onClick:function(){return de(n.waypoint.color)},children:Object(A.jsx)(j.a,{icon:d.b,color:n.waypoint.color})}),Object(A.jsxs)("p",{className:"title is-3 has-text-centered mt-3 mb-4",children:[" ",null===(c=n.waypoint.distance)||void 0===c?void 0:c.toFixed(1)," ft "]}),Object(A.jsx)("hr",{}),Object(A.jsx)("p",{className:"title is-5 has-text-centered",children:" Landed "}),Object(A.jsx)("p",{className:"title is-3 has-text-centered",children:" 50 "})]})]})})},he=function(e){var t=e.name,c=e.icon,a=Object(o.g)().pathname.includes(t.toLowerCase());return Object(A.jsx)("li",{className:a?"is-active":"",children:Object(A.jsxs)(l.b,{to:"/".concat(t.toLowerCase()),className:"mr-4 ml-4 mt-2",children:[Object(A.jsx)("span",{className:"icon is-small",children:Object(A.jsx)(j.a,{icon:c})}),Object(A.jsx)("span",{children:t})]})})},Oe=function(){return Object(A.jsx)("div",{className:"tabs is-centered is-medium",children:Object(A.jsxs)("ul",{children:[Object(A.jsx)(he,{name:"Map",icon:d.c}),Object(A.jsx)(he,{name:"Config",icon:d.e})]})})},fe=Object(J.GoogleApiWrapper)({apiKey:"AIzaSyBsgd5A9q-23gHy8tL6e5O0lct6JoD97xo"})((function(e){var t=e.google,c=Object(a.useState)(0),n=Object(r.a)(c,2),s=n[0],i=n[1],l=Object(a.useState)({lat:0,lng:0}),o=Object(r.a)(l,2),u=o[0],d=o[1];return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("div",{className:"container map",children:Object(A.jsx)(J.Map,{google:t,zoom:14,onClick:function(e,t,c){var a={lat:c.latLng.lat().toFixed(5),lng:c.latLng.lng().toFixed(5)};d(a),N(a),console.log(a)},initialCenter:{lat:35.0263495,lng:-118.13624929},children:Object(A.jsx)(J.Marker,{name:"target",position:u})})}),Object(A.jsx)("div",{className:"container mt-4 pt-4",children:Object(A.jsxs)("div",{className:"columns",children:[Object(A.jsxs)("div",{className:"column",children:[Object(A.jsxs)("p",{className:"ml-4",children:["Coordinates: ",u.lat,", ",u.lng]}),Object(A.jsxs)("p",{className:"ml-4",children:["Heading: ",s,"\xb0 "]})]}),Object(A.jsxs)("div",{className:"column",children:[Object(A.jsx)("p",{className:"ml-4",children:"Set heading:"}),Object(A.jsx)("input",{class:"slider m-4",step:1,min:0,max:360,value:s,type:"range",onInput:function(e){var t=parseFloat(e.target.value).toFixed(1);k({heading:t}),i(t)}})]})]})})]})})),xe=function(){var e=Object(a.useState)({}),t=Object(r.a)(e,2),c=t[0],n=t[1];return Object(A.jsxs)("div",{className:"container",children:[Object(A.jsx)(Oe,{}),Object(A.jsx)(u.Provider,{value:{waypoint:c,setWaypoint:n},children:Object(A.jsxs)(o.d,{children:[Object(A.jsx)(o.a,{exact:!0,from:"/",to:"/map"}),Object(A.jsx)(o.b,{path:"/config",component:W}),Object(A.jsx)(o.b,{path:"/map",component:me}),Object(A.jsx)(o.b,{path:"/debug",component:fe})]})})]})};i.a.render(Object(A.jsx)(n.a.StrictMode,{children:Object(A.jsx)(l.a,{children:Object(A.jsx)(xe,{})})}),document.getElementById("root"))},72:function(e,t,c){},73:function(e,t,c){}},[[143,1,2]]]);
//# sourceMappingURL=main.c01958d7.chunk.js.map