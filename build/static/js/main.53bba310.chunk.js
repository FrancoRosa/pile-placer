(this["webpackJsonppile-placer"]=this["webpackJsonppile-placer"]||[]).push([[0],{143:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(29),r=c.n(s),l=c(26),i=(c(72),c(73),c(3)),o=c(4),j=Object(n.createContext)(null),u=c(11),d=c(17),b=c(6),p=c.n(b),h=c(19),O=c(20),x=c.n(O),m=c(66),f="10.84.9.68:9999",g=c.n(m).a.connect("http://".concat(f)),v=function(){var e=Object(h.a)(p.a.mark((function e(t){var c,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... setting lat lng"),c="http://".concat(f,"/api/location"),e.next=4,x.a.post(c,t);case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(h.a)(p.a.mark((function e(t){var c,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... setting heading"),c="http://".concat(f,"/api/heading"),e.next=4,x.a.post(c,t);case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(h.a)(p.a.mark((function e(t){var c,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... setting config"),c="http://".concat(f,"/api/config"),e.next=4,x.a.post(c,t);case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(h.a)(p.a.mark((function e(t){var c,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... setting reference bay"),c="http://".concat(f,"/api/bay"),e.next=4,x.a.post(c,t);case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(h.a)(p.a.mark((function e(t){var c,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... setting waypoint"),c="http://".concat(f,"/api/waypoint"),e.next=4,x.a.post(c,t);case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(h.a)(p.a.mark((function e(){var t,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... getting waypoints"),t="http://".concat(f,"/api/waypoints"),e.next=4,x.a.get(t);case 4:return c=e.sent,e.abrupt("return",c.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(h.a)(p.a.mark((function e(t,c){var n,a,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... uploading file"),n="http://".concat(f,"/api/file"),(a=new FormData).append("file",t),a.append("code",c),e.next=7,x.a.post(n,a,{headers:{"Content-Type":"multipart/form-data"}});case 7:return s=e.sent,e.abrupt("return",s.data);case 9:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),F=c(0),L=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)("Nothing selected yet"),r=Object(i.a)(s,2),l=r[0],o=r[1],j=Object(n.useState)({}),b=Object(i.a)(j,2),p=b[0],h=b[1];Object(n.useEffect)((function(){document.querySelector(".file-input").addEventListener("change",(function(e){var t=e.target.files[0],c=e.target.files[0].name;a(t),o(c)}),!1)}),[]);return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("div",{className:"file has-name",children:Object(F.jsxs)("label",{className:"file-label",children:[Object(F.jsx)("input",{className:"file-input",type:"file",accept:".csv, .xlsx"}),Object(F.jsxs)("span",{className:"file-cta",children:[Object(F.jsx)("span",{className:"file-icon",children:Object(F.jsx)(d.a,{icon:u.e})}),Object(F.jsx)("span",{className:"file-label",children:"Choose a file ..."})]}),Object(F.jsx)("span",{className:"file-name",children:l})]})}),Object(F.jsx)("div",{className:"columns",children:Object(F.jsxs)("div",{className:"column mt-4",children:[c?Object(F.jsx)("div",{className:"is-flex is-justify-content-center m-4",children:Object(F.jsx)("button",{className:"button is-outlined is-success",onClick:function(){C(c).then((function(e){h(e)})).catch((function(){return h({message:!1})}))},children:"Upload"})}):"",p.message?Object(F.jsxs)("div",{className:"is-flex is-align-content-center m-1 is-flex-direction-column",children:[Object(F.jsx)("p",{className:p.message?"has-text-success":"has-text-fail",children:p.message?"Success":"Fail"}),Object(F.jsxs)("p",{children:["Waypoints found: ",p.rows]})]}):""]})})]})},H=function(e){var t=e.label,c=e.value,n=e.placeholder,a=e.changeHandler;return Object(F.jsxs)("div",{className:"field column",children:[Object(F.jsx)("label",{className:"label",children:t}),Object(F.jsx)("p",{className:"control",children:Object(F.jsx)("input",{className:"input is-medium",type:"number",step:.1,placeholder:n,onChange:function(e){return a(e.target.value)},value:c})})]})},W=c.p+"static/media/epsg_codes.c38b8103.pdf",A=function(){var e=function(e,t){var c=Object(n.useState)((function(){try{var c=window.localStorage.getItem(e);return c?JSON.parse(c):t}catch(n){return console.log(n),t}})),a=Object(i.a)(c,2),s=a[0],r=a[1];return[s,function(t){try{var c=t instanceof Function?t(s):t;r(c),window.localStorage.setItem(e,JSON.stringify(c))}catch(n){console.log(n)}}]}("config",{}),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(c.truckLen),r=Object(i.a)(s,2),l=r[0],o=r[1],j=Object(n.useState)(c.truckWid),b=Object(i.a)(j,2),p=b[0],h=b[1],O=Object(n.useState)(c.antennaX),x=Object(i.a)(O,2),m=x[0],f=x[1],g=Object(n.useState)(c.antennaY),v=Object(i.a)(g,2),N=v[0],k=v[1],w=Object(n.useState)(c.bay1),S=Object(i.a)(w,2),C=S[0],A=S[1],E=Object(n.useState)(c.bay2),I=Object(i.a)(E,2),B=I[0],J=I[1],D=Object(n.useState)(c.epsg),T=Object(i.a)(D,2),M=T[0],P=T[1],z=Object(n.useState)(""),G=Object(i.a)(z,2),q=G[0],X=G[1];return Object(F.jsx)("div",{className:"container",children:Object(F.jsxs)("div",{className:"columns",children:[Object(F.jsxs)("div",{className:"column",children:[Object(F.jsxs)("div",{className:"columns",children:[Object(F.jsx)(H,{label:"Truck length",value:l,placeholder:"Truck with trailer in ft",changeHandler:o}),Object(F.jsx)(H,{label:"Truck width",value:p,placeholder:"Trailer width in ft",changeHandler:h})]}),Object(F.jsxs)("div",{className:"columns",children:[Object(F.jsx)(H,{label:"Antenna from left",value:m,placeholder:"Antenna location in ft",changeHandler:f}),Object(F.jsx)(H,{label:"Antenna from truck head",value:N,placeholder:"Antenna location in ft",changeHandler:k})]}),Object(F.jsxs)("div",{className:"columns",children:[Object(F.jsx)(H,{label:"Bay 1 from truck head",value:C,placeholder:"Bay 1 location in ft",changeHandler:A}),Object(F.jsx)(H,{label:"Bay 2 from truck head",value:B,placeholder:"Bay 2 location in ft",changeHandler:J})]}),Object(F.jsxs)("div",{className:"columns",children:[Object(F.jsx)(H,{label:"EPSG code",value:M,placeholder:"Projected coordinate reference",changeHandler:P}),Object(F.jsxs)("div",{className:"column is-flex-direction-column is-flex is-flex-centered",children:[Object(F.jsx)("p",{className:"heading has-text-link",children:"EPSG Reference"}),Object(F.jsx)("a",{href:W,target:"blank",className:"has-text-white title is-2",children:Object(F.jsx)(d.a,{icon:u.a})})]})]}),Object(F.jsxs)("div",{className:"is-flex is-justify-content-center is-align-content-center",children:[Object(F.jsx)("button",{className:"button ml-2",onClick:function(){a({truckLen:l,truckWid:p,antennaX:m,antennaY:N,bay1:C,bay2:B,epsg:M}),y({truckLen:l,truckWid:p,antennaX:m,antennaY:N,bay1:C,bay2:B,epsg:M}).then((function(){return X("Success")})).catch((function(){return X("Fail")}))},children:"Save parameters"}),Object(F.jsx)("p",{className:"success ml-2 ".concat("Success"==q?"has-text-success":"has-text-danger"),children:q})]}),Object(F.jsx)("hr",{}),Object(F.jsx)(L,{})]}),Object(F.jsx)("div",{className:"column",children:Object(F.jsx)("h1",{className:"title is-4 has-text-centered",children:"Layout"})})]})})},E=c(23),I=c(18),B=function(e){var t=e.colors;return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("hr",{className:"m-1"}),t&&Object(F.jsxs)("p",{className:"heading has-text-centered has-text-link",children:[Object.entries(t).reduce((function(e,t){return e+t[1]}),0)," piles found"]}),Object(F.jsx)("div",{className:"columns mt-3",children:Object.entries(t).map((function(e){return Object(F.jsxs)("div",{className:"column",children:[Object(F.jsx)(d.a,{icon:u.b,color:e[0]}),Object(F.jsx)("p",{children:e[1]})]})}))})]})},J=Object(I.GoogleApiWrapper)({apiKey:"AIzaSyBsgd5A9q-23gHy8tL6e5O0lct6JoD97xo",version:"beta"})((function(e){var t=e.google,c=Object(n.useState)({heading:0,lat:0,lng:0}),a=Object(i.a)(c,2),s=a[0],r=a[1],l=Object(n.useState)([]),o=Object(i.a)(l,2),u=o[0],d=o[1],b=Object(n.useState)({}),p=Object(i.a)(b,2),h=p[0],O=p[1],x=Object(n.useState)([]),m=Object(i.a)(x,2),f=m[0],v=m[1],N=Object(n.useState)([]),y=Object(i.a)(N,2),C=y[0],L=y[1],H=Object(n.useContext)(j),W=H.waypoint,A=H.setWaypoint;return Object(n.useEffect)((function(){return S().then((function(e){d(e.waypoints),e.waypoints.length>0&&(r(Object(E.a)(Object(E.a)({},s),e.waypoints[0])),O(function(e){var t={};return e.forEach((function(e){t[e.color]?t[e.color]+=1:t[e.color]=1})),t}(e.waypoints)))})),g.on("message",(function(e){e=JSON.parse(e),r(e),v([{lat:e.truck[0][0],lng:e.truck[0][1]},{lat:e.truck[1][0],lng:e.truck[1][1]},{lat:e.truck[2][0],lng:e.truck[2][1]},{lat:e.truck[3][0],lng:e.truck[3][1]},{lat:e.truck[0][0],lng:e.truck[0][1]}]),L([{lat:e.bays[0][0],lng:e.bays[0][1]},{lat:e.bays[1][0],lng:e.bays[1][1]}])})),function(){g.off("message")}}),[]),Object(n.useEffect)((function(){A(Object(E.a)(Object(E.a)({},W),{},{distance:s.distance}))}),[s]),Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("div",{className:"container map",children:Object(F.jsxs)(I.Map,{google:t,zoom:22,initialCenter:s,center:s,mapId:"2f571dc2d7296a3a",onCenterChanged:function(e,t){t.setHeading(parseInt(s.heading))},onClick:function(e,t,c){r(Object(E.a)(Object(E.a)({},s),{},{lat:c.latLng.lat().toFixed(5),lng:c.latLng.lng().toFixed(5)}))},onDblclick:function(){return console.log("doubleClick")},disableDoubleClickZoom:!0,children:[u.map((function(e){return Object(F.jsx)(I.Circle,{center:e,radius:.5,strokeColor:e.color,strokeOpacity:.8,strokeWeight:2,fillColor:e.color,onClick:function(){A(e),w(e)},onDblclick:function(){return console.log("Toogle status")}})})),C.map((function(e,t){return Object(F.jsx)(I.Circle,{center:e,radius:.5,strokeColor:"#FF0000",strokeOpacity:.8,strokeWeight:2,fillColor:"#FF0000",fillOpacity:.35,onClick:function(){return k({bay:t})}})})),Object(F.jsx)(I.Polygon,{paths:f,strokeColor:"#FF0000",strokeOpacity:.8,strokeWeight:2,fillColor:"#FF0000",fillOpacity:.35})]})}),Object(F.jsxs)("div",{className:"columns mt-3 has-text-link",children:[Object(F.jsx)("div",{className:"column",children:Object(F.jsxs)("p",{className:"heading has-text-centered",children:["Lat: ",s.lat.toFixed(8)]})}),Object(F.jsx)("div",{className:"column",children:Object(F.jsxs)("p",{className:"heading has-text-centered",children:["Lng: ",s.lng.toFixed(8)]})}),Object(F.jsx)("div",{className:"column",children:Object(F.jsxs)("p",{className:"heading has-text-centered",children:["Heading: ",s.heading.toFixed(1),"\u0970"]})})]}),Object(F.jsx)(B,{colors:h})]})})),D=function(){var e,t=Object(n.useContext)(j);return Object(F.jsx)("div",{className:"container",children:Object(F.jsxs)("div",{className:"columns",children:[Object(F.jsx)("div",{className:"column",children:Object(F.jsx)(J,{})}),Object(F.jsxs)("div",{className:"column is-one-fifth",children:[Object(F.jsx)("p",{className:"title is-5 has-text-centered mt-4",children:" Next pile: "}),Object(F.jsxs)("div",{className:"is-flex is-flex-direction-column is-align-content-center mb-4",children:[Object(F.jsxs)("p",{children:["Lat: ",t.waypoint.lat]}),Object(F.jsxs)("p",{children:["Lng: ",t.waypoint.lng]}),Object(F.jsxs)("p",{children:["x: ",t.waypoint.x]}),Object(F.jsxs)("p",{children:["y: ",t.waypoint.y]}),Object(F.jsxs)("p",{children:["Color: ",t.waypoint.color]})]}),Object(F.jsx)("div",{className:"flag-icon color_red",children:Object(F.jsx)(d.a,{icon:u.b,color:t.waypoint.color})}),Object(F.jsxs)("p",{className:"title is-3 has-text-centered mt-3 mb-4",children:[" ",null===(e=t.waypoint.distance)||void 0===e?void 0:e.toFixed(1)," ft "]}),Object(F.jsx)("hr",{}),Object(F.jsx)("p",{className:"title is-5 has-text-centered",children:" Landed "}),Object(F.jsx)("p",{className:"title is-3 has-text-centered",children:" 50 "})]})]})})},T=function(e){var t=e.name,c=e.icon,n=Object(o.g)().pathname.includes(t.toLowerCase());return Object(F.jsx)("li",{className:n?"is-active":"",children:Object(F.jsxs)(l.b,{to:"/".concat(t.toLowerCase()),className:"mr-4 ml-4 mt-2",children:[Object(F.jsx)("span",{className:"icon is-small",children:Object(F.jsx)(d.a,{icon:c})}),Object(F.jsx)("span",{children:t})]})})},M=function(){return Object(F.jsx)("div",{className:"tabs is-centered is-medium",children:Object(F.jsxs)("ul",{children:[Object(F.jsx)(T,{name:"Map",icon:u.c}),Object(F.jsx)(T,{name:"Config",icon:u.d})]})})},P=Object(I.GoogleApiWrapper)({apiKey:"AIzaSyBsgd5A9q-23gHy8tL6e5O0lct6JoD97xo"})((function(e){var t=e.google,c=Object(n.useState)(0),a=Object(i.a)(c,2),s=a[0],r=a[1],l=Object(n.useState)({lat:0,lng:0}),o=Object(i.a)(l,2),j=o[0],u=o[1];return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("div",{className:"container map",children:Object(F.jsx)(I.Map,{google:t,zoom:14,onClick:function(e,t,c){var n={lat:c.latLng.lat().toFixed(5),lng:c.latLng.lng().toFixed(5)};u(n),v(n),console.log(n)},initialCenter:{lat:35.0263495,lng:-118.13624929},children:Object(F.jsx)(I.Marker,{name:"target",position:j})})}),Object(F.jsx)("div",{className:"container mt-4 pt-4",children:Object(F.jsxs)("div",{className:"columns",children:[Object(F.jsxs)("div",{className:"column",children:[Object(F.jsxs)("p",{className:"ml-4",children:["Coordinates: ",j.lat,", ",j.lng]}),Object(F.jsxs)("p",{className:"ml-4",children:["Heading: ",s,"\xb0 "]})]}),Object(F.jsxs)("div",{className:"column",children:[Object(F.jsx)("p",{className:"ml-4",children:"Set heading:"}),Object(F.jsx)("input",{class:"slider m-4",step:1,min:0,max:360,value:s,type:"range",onInput:function(e){var t=parseFloat(e.target.value).toFixed(1);N({heading:t}),r(t)}})]})]})})]})})),z=function(){var e=Object(n.useState)({}),t=Object(i.a)(e,2),c=t[0],a=t[1];return Object(F.jsxs)("div",{className:"container",children:[Object(F.jsx)(M,{}),Object(F.jsx)(j.Provider,{value:{waypoint:c,setWaypoint:a},children:Object(F.jsxs)(o.d,{children:[Object(F.jsx)(o.a,{exact:!0,from:"/",to:"/map"}),Object(F.jsx)(o.b,{path:"/config",component:A}),Object(F.jsx)(o.b,{path:"/map",component:D}),Object(F.jsx)(o.b,{path:"/debug",component:P})]})})]})};r.a.render(Object(F.jsx)(a.a.StrictMode,{children:Object(F.jsx)(l.a,{children:Object(F.jsx)(z,{})})}),document.getElementById("root"))},72:function(e,t,c){},73:function(e,t,c){}},[[143,1,2]]]);
//# sourceMappingURL=main.53bba310.chunk.js.map