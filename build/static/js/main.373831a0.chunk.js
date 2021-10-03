(this["webpackJsonppile-placer"]=this["webpackJsonppile-placer"]||[]).push([[0],{117:function(e,t){},218:function(e,t,c){},219:function(e,t,c){},276:function(e,t){},294:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(108),s=c.n(i),l=c(89),r=(c(218),c(219),c(36)),o=c(27),u=c(2),d=c(16),j={nextPiles:[{distance:null,pile_id:null},{distance:null,pile_id:null}],setNextPiles:Object(o.b)((function(e,t){e.nextPiles=Object(d.a)(t)})),clearPile:Object(o.b)((function(e,t){var c=Object(d.a)(e.nextPiles);c[t]={},e.nextPiles=c})),waypoints:[],setWaypoints:Object(o.b)((function(e,t){e.waypoints=Object(d.a)(t)})),placeWaypoint:Object(o.b)((function(e,t){e.waypoints=e.waypoints.map((function(e){return e.pile_id==t?Object(u.a)(Object(u.a)({},e),{},{placed:!0}):e}))})),unplaceWaypoint:Object(o.b)((function(e,t){e.waypoints=e.waypoints.map((function(e){return e.pile_id==t?Object(u.a)(Object(u.a)({},e),{},{placed:!1}):e}))})),selectedColor:"",setSelectedColor:Object(o.b)((function(e,t){e.selectedColor=t})),center:{heading:0,lat:0,lng:0,truck:[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]},setCenter:Object(o.b)((function(e,t){e.center=t}))},b=c(9),p=c(46),m=c(54),h=c(11),f=c.n(h),O=c(17),g=c(83),x=c.n(g),v=c(195),k="raspberrypi.local:9999",w=c.n(v).a.connect("http://".concat(k)),N=function(){var e=Object(O.a)(f.a.mark((function e(t){var c,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... setting lat lng"),c="http://".concat(k,"/api/location"),e.next=4,x.a.post(c,t);case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(O.a)(f.a.mark((function e(t){var c,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... setting heading"),c="http://".concat(k,"/api/heading"),e.next=4,x.a.post(c,t);case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(O.a)(f.a.mark((function e(t){var c,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... setting config"),c="http://".concat(k,"/api/config"),e.next=4,x.a.post(c,t);case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(O.a)(f.a.mark((function e(t){var c,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... setting waypoint"),c="http://".concat(k,"/api/waypoint"),e.next=4,x.a.post(c,t);case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(O.a)(f.a.mark((function e(){var t,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... getting waypoints"),t="http://".concat(k,"/api/waypoints"),e.next=4,x.a.get(t);case 4:return c=e.sent,e.abrupt("return",c.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(O.a)(f.a.mark((function e(t,c){var n,a,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... uploading file"),n="http://".concat(k,"/api/file"),(a=new FormData).append("file",t),a.append("code",c),e.next=7,x.a.post(n,a,{headers:{"Content-Type":"multipart/form-data"}});case 7:return i=e.sent,e.abrupt("return",i.data);case 9:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),E=c(6),P=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)("Nothing selected yet"),s=Object(b.a)(i,2),l=s[0],o=s[1],u=Object(n.useState)({}),d=Object(b.a)(u,2),j=d[0],h=d[1],f=Object(r.g)();Object(n.useEffect)((function(){document.querySelector(".file-input").addEventListener("change",(function(e){var t=e.target.files[0],c=e.target.files[0].name;a(t),o(c)}),!1)}),[]);return Object(E.jsxs)("div",{className:"columns",children:[Object(E.jsx)("div",{className:"column file has-name",children:Object(E.jsxs)("label",{className:"file-label",children:[Object(E.jsx)("input",{className:"file-input",type:"file",accept:".csv, .xlsx"}),Object(E.jsxs)("span",{className:"file-cta",children:[Object(E.jsx)("span",{className:"file-icon",children:Object(E.jsx)(m.a,{icon:p.i})}),Object(E.jsx)("span",{className:"file-label",children:"Choose a file ..."})]}),Object(E.jsx)("span",{className:"file-name",children:l})]})}),Object(E.jsx)("div",{className:"column",children:c?Object(E.jsx)("div",{className:"is-flex is-justify-content-center",children:Object(E.jsx)("button",{className:"button is-outlined is-success",onClick:function(){F(c).then((function(e){h(e),setTimeout((function(){f.push("/map")}),1e3)})).catch((function(){return h({message:!1})}))},children:"Upload"})}):""}),Object(E.jsx)("div",{className:"column",children:j.message?Object(E.jsxs)("div",{className:"is-flex is-align-content-center is-flex-direction-column",children:[Object(E.jsx)("p",{className:j.message?"has-text-success":"has-text-fail",children:j.message?"Success":"Fail"}),Object(E.jsxs)("p",{children:["Waypoints: ",j.rows]})]}):""})]})},W=function(e){var t=e.label,c=e.value,n=e.placeholder,a=e.changeHandler;return Object(E.jsxs)("div",{className:"field column",children:[Object(E.jsx)("label",{className:"label",children:t}),Object(E.jsx)("p",{className:"control",children:Object(E.jsx)("input",{className:"input is-medium",type:"number",step:.1,placeholder:n,onChange:function(e){return a(e.target.value)},value:c})})]})},L=function(e,t){var c=Object(n.useState)((function(){try{var c=window.localStorage.getItem(e);return c?JSON.parse(c):t}catch(n){return console.log(n),t}})),a=Object(b.a)(c,2),i=a[0],s=a[1];return[i,function(t){try{var c=t instanceof Function?t(i):t;s(c),window.localStorage.setItem(e,JSON.stringify(c))}catch(n){console.log(n)}}]},_=function(e){var t={};return e.forEach((function(e){var c,n,a;t[null===(c=e.color)||void 0===c?void 0:c.trim()]?t[null===(n=e.color)||void 0===n?void 0:n.trim()]+=1:t[null===(a=e.color)||void 0===a?void 0:a.trim()]=1})),t},H=function(e){var t={};return e.forEach((function(e){var c,n,a;e.placed&&(t[null===(c=e.color)||void 0===c?void 0:c.trim()]?t[null===(n=e.color)||void 0===n?void 0:n.trim()]+=1:t[null===(a=e.color)||void 0===a?void 0:a.trim()]=1)})),t},M={black:[0,0,0],brown:[165,42,42],darkblue:[0,0,139],green:[0,255,0],lightblue:[135,206,235],lightgreen:[144,238,144],orange:[255,165,0],pink:[255,105,180],purple:[128,0,128],red:[255,0,0],white:[255,255,255],yellow:[255,255,0]},B={black:[0,0,0,128],brown:[165,42,42,128],darkblue:[0,0,139,128],green:[0,255,0,128],lightblue:[135,206,235,128],lightgreen:[144,238,144,128],orange:[255,165,0,128],pink:[255,105,180,128],purple:[128,0,128,128],red:[255,0,0,128],white:[255,255,255,128],yellow:[255,255,0,128]},T=c.p+"static/media/epsg_codes.c38b8103.pdf",z=c.p+"static/media/marooka-size.51b49781.png",I=c.p+"static/media/marooka-side.6ce15895.png",J=function(){var e=L("config",{}),t=Object(b.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(c.truckLen),s=Object(b.a)(i,2),l=s[0],r=s[1],o=Object(n.useState)(c.truckWid),u=Object(b.a)(o,2),d=u[0],j=u[1],h=Object(n.useState)(c.truckHei),f=Object(b.a)(h,2),O=f[0],g=f[1],x=Object(n.useState)(c.antennaX),v=Object(b.a)(x,2),k=v[0],w=v[1],N=Object(n.useState)(c.antennaY),y=Object(b.a)(N,2),C=y[0],A=y[1],F=Object(n.useState)(c.bay1),_=Object(b.a)(F,2),H=_[0],M=_[1],B=Object(n.useState)(c.bay2),J=Object(b.a)(B,2),G=J[0],Y=J[1],X=Object(n.useState)(c.epsg),D=Object(b.a)(X,2),R=D[0],V=D[1],q=Object(n.useState)(""),Q=Object(b.a)(q,2),U=Q[0],K=Q[1];return Object(E.jsx)("div",{className:"container",children:Object(E.jsxs)("div",{className:"columns",children:[Object(E.jsxs)("div",{className:"column",children:[Object(E.jsxs)("div",{className:"columns",children:[Object(E.jsx)(W,{label:"Truck length",value:l,placeholder:"E.g: 5",changeHandler:r}),Object(E.jsx)(W,{label:"Truck width",value:d,placeholder:"E.g: 5",changeHandler:j}),Object(E.jsx)(W,{label:"Truck height",value:O,placeholder:"E.g: 5",changeHandler:g})]}),Object(E.jsxs)("div",{className:"columns",children:[Object(E.jsx)(W,{label:"Antenna from left",value:k,placeholder:"E.g: 5",changeHandler:w}),Object(E.jsx)(W,{label:"Antenna from truck head",value:C,placeholder:"E.g: 5",changeHandler:A})]}),Object(E.jsxs)("div",{className:"columns",children:[Object(E.jsx)(W,{label:"Bay 1 from truck head",value:H,placeholder:"E.g: 5",changeHandler:M}),Object(E.jsx)(W,{label:"Bay 2 from truck head",value:G,placeholder:"E.g: 5",changeHandler:Y})]}),Object(E.jsxs)("div",{className:"columns",children:[Object(E.jsx)(W,{label:"EPSG code",value:R,placeholder:"E.g: 6588",changeHandler:V}),Object(E.jsxs)("div",{className:"column is-flex-direction-column is-flex is-flex-centered",children:[Object(E.jsx)("p",{className:"heading has-text-link",children:"EPSG Reference"}),Object(E.jsx)("a",{href:T,target:"blank",className:"has-text-white title is-2",children:Object(E.jsx)(m.a,{icon:p.b})})]}),Object(E.jsxs)("div",{className:"column is-flex-direction-column is-flex is-flex-centered",children:[Object(E.jsx)("p",{className:"heading has-text-link",children:"EPSG Browser"}),Object(E.jsx)("a",{href:"https://epsg.io/",target:"blank",className:"has-text-white title is-2",children:Object(E.jsx)(m.a,{icon:p.g})})]}),Object(E.jsxs)("div",{className:"column is-flex is-justify-content-center is-align-content-center",children:[Object(E.jsx)("button",{className:"button ml-2",onClick:function(){a({truckLen:l,truckWid:d,truckHei:O,antennaX:k,antennaY:C,bay1:H,bay2:G,epsg:R}),S({truckLen:l,truckWid:d,truckHei:O,antennaX:k,antennaY:C,bay1:H,bay2:G,epsg:R}).then((function(){return K("Success")})).catch((function(){return K("Fail")}))},children:"Save"}),Object(E.jsx)("p",{className:"success ml-2 ".concat("Success"==U?"has-text-success":"has-text-danger"),children:U})]})]}),Object(E.jsx)("hr",{}),Object(E.jsx)(P,{})]}),Object(E.jsxs)("div",{className:"column is-centered has-text-centered",children:[Object(E.jsx)("img",{src:z}),Object(E.jsx)("img",{src:I})]})]})})},G=c(306),Y=c(312),X=c(310),D=c(308),R=c(202),V=c.p+"static/media/1.2999e734.mp3",q=c.p+"static/media/2.c90484f3.mp3",Q=c.p+"static/media/3.451a053d.mp3",U=c.p+"static/media/4.3d33a969.mp3",K=c.p+"static/media/5.0b9156e3.mp3",Z=c.p+"static/media/6.52edbbb5.mp3",$=c.p+"static/media/7.b473eb3a.mp3",ee=c.p+"static/media/8.55fb2017.mp3",te=c.p+"static/media/9.308dc1bf.mp3",ce=c.p+"static/media/10.1fbcf1e7.mp3",ne=c.p+"static/media/black.67345e6d.mp3",ae=c.p+"static/media/blue.603a17d2.mp3",ie=c.p+"static/media/brown.aa74bbbb.mp3",se=c.p+"static/media/darkblue.587d78fd.mp3",le=c.p+"static/media/lightblue.9a9ee83a.mp3",re=c.p+"static/media/lightgreen.d7c408fe.mp3",oe=c.p+"static/media/orange.42e333b5.mp3",ue=c.p+"static/media/pink.f914d206.mp3",de=c.p+"static/media/purple.8e39b00d.mp3",je=c.p+"static/media/red.d598f0dc.mp3",be=c.p+"static/media/white.a09c2726.mp3",pe=c.p+"static/media/yellow.1d5be675.mp3",me=c.p+"static/media/green.8c2c03a6.mp3",he=c.p+"static/media/purplewhite.08127fb1.mp3",fe=c.p+"static/media/brownwhite.f5c411c7.mp3",Oe=c.p+"static/media/left_bay.ba74ee7d.mp3",ge=c.p+"static/media/right_bay.0fce9298.mp3",xe=c.p+"static/media/next_pile.aa5d59d6.mp3",ve=(new Audio(V),new Audio(q),new Audio(Q),new Audio(U),new Audio(K),new Audio(Z),new Audio($),new Audio(ee),new Audio(te),new Audio(ce),{leftBay:new Audio(Oe),rightBay:new Audio(ge),nextPile:new Audio(xe)}),ke={black:new Audio(ne),blue:new Audio(ae),brown:new Audio(ie),darkblue:new Audio(se),lightblue:new Audio(le),lightgreen:new Audio(re),orange:new Audio(oe),pink:new Audio(ue),purple:new Audio(de),red:new Audio(je),white:new Audio(be),yellow:new Audio(pe),green:new Audio(me),purplewhite:new Audio(he),brownwhite:new Audio(fe)},we=function(e){ve[e]&&ve[e].play()},Ne=function(e){ke[e]&&ke[e].play()},ye=c(124),Se=c.n(ye),Ce=c.p+"static/media/marooka-top.0316a837.bmp";Se.a.workerClass=c(275).default;var Ae={longitude:-122.123801,latitude:37.893394,zoom:21,maxZoom:21,pitch:60,bearing:0},Fe=function(){var e=Object(o.e)((function(e){return e.center})),t=Object(o.d)((function(e){return e.setCenter})),c=Object(n.useState)(Ae),a=Object(b.a)(c,2),i=a[0],s=a[1],l=Object(n.useState)(!0),r=Object(b.a)(l,2),j=r[0],p=r[1],m=Object(n.useState)([{lat:0,lng:0},{lat:0,lng:0},{lat:0,lng:0},{lat:0,lng:0}]),h=Object(b.a)(m,2),f=h[0],O=h[1],g=Object(n.useState)([]),x=Object(b.a)(g,2),v=(x[0],x[1]),k=Object(n.useState)([]),N=Object(b.a)(k,2),y=(N[0],N[1]),S=Object(n.useState)([]),F=Object(b.a)(S,2),P=(F[0],F[1]),W=Object(n.useState)([]),_=Object(b.a)(W,2),H=(_[0],_[1]),T=Object(n.useState)([{lat:0,lng:0},{lat:0,lng:0}]),z=Object(b.a)(T,2),I=z[0],J=z[1],V=Object(o.e)((function(e){return e.nextPiles})),q=Object(o.d)((function(e){return e.setNextPiles})),Q=Object(o.e)((function(e){return e.waypoints})),U=Object(o.d)((function(e){return e.setWaypoints})),K=Object(o.d)((function(e){return e.placeWaypoint})),Z=Object(o.d)((function(e){return e.unplaceWaypoint})),$=L("debugCenter",{lat:0,lng:0}),ee=Object(b.a)($,2),te=(ee[0],ee[1],Object(o.e)((function(e){return e.selectedColor}))),ce=function(){w.on("message",(function(e){var c=JSON.parse(e);console.log(c),t(c),s(Object(u.a)(Object(u.a)({},i),{},{longitude:parseFloat(c.lng),latitude:parseFloat(c.lat),bearing:parseFloat(c.heading)})),O([{lat:c.truck[0][0],lng:c.truck[0][1]},{lat:c.truck[1][0],lng:c.truck[1][1]},{lat:c.truck[2][0],lng:c.truck[2][1]},{lat:c.truck[3][0],lng:c.truck[3][1]},{lat:c.truck[0][0],lng:c.truck[0][1]}]),J([{lat:c.bays[0][0],lng:c.bays[0][1]},{lat:c.bays[1][0],lng:c.bays[1][1]}]),P([{lat:c.truck[4][0],lng:c.truck[4][1]},{lat:c.truck[5][0],lng:c.truck[5][1]}]),H([{lat:c.truck[10][0],lng:c.truck[10][1]},{lat:c.truck[11][0],lng:c.truck[11][1]}]),y([{lat:c.truck[6][0],lng:c.truck[6][1]},{lat:c.truck[7][0],lng:c.truck[7][1]},{lat:c.truck[8][0],lng:c.truck[8][1]},{lat:c.truck[9][0],lng:c.truck[9][1]},{lat:c.truck[6][0],lng:c.truck[6][1]}]),v([{lat:c.truck[12][0],lng:c.truck[12][1]},{lat:c.truck[13][0],lng:c.truck[13][1]}])}))};Object(n.useEffect)((function(){return A().then((function(c){U(c.waypoints.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{selected:!0})}))),c.waypoints.length>0&&(t(Object(u.a)(Object(u.a)({},e),c.waypoints[0])),s(Object(u.a)(Object(u.a)({},i),{},{latitude:c.waypoints[0].lat,longitude:c.waypoints[0].lng})))})),ce(),function(){w.off("message")}}),[]);var ne=function(e,t){if(e.length>0){var c=function(e,t){var c,n,a,i,s=1e4,l=1e4;return e.forEach((function(e){e.placed||te!=e.color&&""!=te||(c=Math.pow(e.lat-t[0].lat,2)+Math.pow(e.lng-t[0].lng,2),n=Math.pow(e.lat-t[1].lat,2)+Math.pow(e.lng-t[1].lng,2),c<s&&(s=c,a=e),n<l&&(l=n,i=e))})),a==i&&(s<l?i={lat:0,lng:0}:a={lat:0,lng:0}),[a,i]}(e,t);q(c),C(c),console.log("... getting colors");var n=0;try{var a=e.filter((function(e){return e.pile_id==c[0].pile_id}))[0].color.trim();we("leftBay"),setTimeout((function(){return Ne(a)}),1e3),n=2e3}catch(s){console.log("error left color")}try{var i=e.filter((function(e){return e.pile_id==c[1].pile_id}))[0].color.trim();setTimeout((function(){return we("rightBay")}),0+n),setTimeout((function(){return Ne(i)}),1e3+n)}catch(l){console.log("error right color")}}};Object(n.useEffect)((function(){if(Object.keys(e).includes("distance")){var t=Object(d.a)(V);t[0].distance=e.distance[0],t[1].distance=e.distance[1],q(t)}}),[e]),Object(n.useEffect)((function(){j?(w.off("message"),ce()):w.off("message")}),[j]),Object(n.useEffect)((function(){U(Q.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{selected:e.color==te||""==te})})))}),[te]);return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("div",{className:"container map",children:Object(E.jsxs)(G.a,{initialViewState:i,controller:!0,getTooltip:function(e){var t=e.object;return t&&"Code: ".concat(t.pile_id,"\nColor: ").concat(t.color,"\n").concat(t.placed?"Placed":"Not Placed")},children:[Object(E.jsx)(R.a,{mapboxApiAccessToken:"pk.eyJ1Ijoia20xMTVmcmFuY28iLCJhIjoiY2t0eXQ3cHBhMGI3aTMxcG14dnN0OHJveSJ9.LWxkBiVPF9UfGWMI4sWakQ"}),Object(E.jsx)(Y.a,{lineWidthMaxPixels:3,lineWidthMinPixels:1,getRadius:function(e){return e.selected?e.placed?.3:1:.01},data:Q,getPosition:function(e){return[e.lng,e.lat]},getColor:function(e){return M[e.color]},getFillColor:function(e){return B[e.color]},getLineColor:function(e){return M[e.color]},filled:!0,stroked:!0,pickable:!0,opacity:.8,onClick:function(e){var t=e.object.pile_id;e.object.placed?Z(t):K(t)}}),Object(E.jsx)(X.a,{bounds:[[f[3].lng,f[3].lat,1.1],[f[0].lng,f[0].lat,1.1],[f[1].lng,f[1].lat,1.1],[f[2].lng,f[2].lat,1.1]],image:Ce}),Object(E.jsx)(Y.a,{lineWidthMaxPixels:2,lineWidthMinPixels:1,getRadius:.3,data:[{coordinates:[parseFloat(e.lng),parseFloat(e.lat)],color:M.black,height:1},{coordinates:[e.truck[12][1],e.truck[12][0]],color:M.green,height:1},{coordinates:[e.truck[13][1],e.truck[13][0]],color:M.green,height:1},{coordinates:[I[0].lng,I[0].lat],color:M.red,height:0},{coordinates:[I[1].lng,I[1].lat],color:M.red,height:0}],getPosition:function(e){return e.coordinates},getColor:function(e){return e.color},getElevation:function(e){return e.height},filled:!1,stroked:!0}),Object(E.jsx)(D.a,{data:[{contour:[[f[0].lng,f[0].lat],[f[1].lng,f[1].lat],[f[2].lng,f[2].lat],[f[3].lng,f[3].lat]]}],pickable:!0,stroked:!0,filled:!0,wireframe:!0,extruded:!0,lineWidthMinPixels:1,getPolygon:function(e){return e.contour},getElevation:1,getFillColor:B.lightgreen,getLineColor:M.lightgreen,getLineWidth:.1})]})}),Object(E.jsxs)("div",{className:"columns mt-3 has-text-link ",children:[Object(E.jsx)("div",{className:"column is-flex is-flex-centered m-0 p-0",children:Object(E.jsxs)("p",{className:"heading has-text-centered m-0 p-0 f-3",children:["Lat: ",parseFloat(e.lat).toFixed(7)]})}),Object(E.jsx)("div",{className:"column is-flex is-flex-centered m-0 p-0",children:Object(E.jsxs)("p",{className:"heading has-text-centered m-0 p-0 f-3",children:["Lng: ",parseFloat(e.lng).toFixed(7)]})}),Object(E.jsx)("div",{className:"column is-flex is-flex-centered m-0 p-0",children:Object(E.jsxs)("p",{className:"heading has-text-centered m-0 p-0 f-3",children:["Hdg: ",parseFloat(e.heading).toFixed(1),"\u0970"]})}),Object(E.jsxs)("div",{className:"column is-flex is-flex-centered m-0 p-0",children:[Object(E.jsx)("button",{className:"button is-outlined ml-2 mr-2 ".concat(j?"is-success":"is-warning"),onClick:function(){return p(!j)},children:j?"Auto center enabled":"Auto center not enabled"}),Object(E.jsx)("button",{className:"button is-outlined is-success ml-2 mr-2",onClick:function(){return ne(Q,I)},disabled:I[0].lat==I[1].lat&&I[0].lng==I[1].lng,children:"Get nearest piles"})]})]})]})},Ee=function(e){var t,c,a,i=e.index,s=Object(o.e)((function(e){return e.nextPiles})),l=Object(o.d)((function(e){return e.placeWaypoint})),r=Object(o.d)((function(e){return e.clearPile})),u=Object(n.useState)(0),d=Object(b.a)(u,2),j=d[0],h=d[1],f=Object(n.useState)("red"),O=Object(b.a)(f,2),g=O[0],x=O[1],v=s[i];return Object(n.useEffect)((function(){v.distance>25&&(x("is-danger"),h(1)),v.distance<15&&(x("is-warning"),h(2)),v.distance<6&&(x("is-success"),h(3))}),[v.distance]),Object(E.jsx)("div",{className:"column",children:v.pile_id&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)("div",{className:"is-flex has-text-centered is-flex-direction-column is-align-content-center mb-4",children:[Object(E.jsxs)("p",{className:"heading title is-5",children:["Id: ",v.pile_id]}),Object(E.jsxs)("p",{className:"heading f-4",children:["Lat ",null===(t=v.lat)||void 0===t?void 0:t.toFixed(8)]}),Object(E.jsxs)("p",{className:"heading f-4",children:["Lng ",null===(c=v.lng)||void 0===c?void 0:c.toFixed(8)]}),Object(E.jsxs)("p",{className:"heading f-4",children:["N ",v.x]}),Object(E.jsxs)("p",{className:"heading f-4",children:["E ",v.y]})]}),Object(E.jsx)("div",{className:"flag-icon color_red",onClick:function(){we(0==i?"leftBay":"rightBay"),setTimeout((function(){var e;Ne(null===(e=v.color)||void 0===e?void 0:e.trim())}),1e3)},children:Object(E.jsx)(m.a,{icon:p.c,color:v.color})}),Object(E.jsx)("p",{className:"heading has-text-centered",children:v.color}),Object(E.jsxs)("p",{className:"title is-3 has-text-centered mt-3 mb-4",children:[" ",null===(a=v.distance)||void 0===a?void 0:a.toFixed(1)," ft "]}),Object(E.jsx)("progress",{class:"progress rotate ".concat(g),max:"3",value:j}),Object(E.jsx)("div",{className:"is-flex is-flex-centered",children:Object(E.jsx)("button",{onClick:function(){l(v.pile_id),r(i)},className:"button is-outlined is-success",children:"Place"})})]})})},Pe=function(){var e=Object(o.e)((function(e){return e.waypoints})),t=Object(o.e)((function(e){return e.center})),c=Object(o.e)((function(e){return e.selectedColor})),a=Object(o.d)((function(e){return e.setSelectedColor})),i=Object(n.useState)(_(e)),s=Object(b.a)(i,2),l=s[0],r=s[1],u=Object(n.useState)(H(e)),d=Object(b.a)(u,2),j=d[0],h=d[1];return Object(n.useEffect)((function(){r(_(e)),h(H(e))}),[e]),Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("hr",{className:"m-0 p-0 mb-4"}),Object(E.jsxs)("div",{className:"columns",children:[Object(E.jsxs)("div",{className:"column is-flex is-flex-direction-column is-flex-centered",children:[Object(E.jsx)(m.a,{onClick:function(){return a("")},icon:p.d,className:"is-size-3",color:c}),Object(E.jsx)("p",{className:"heading has-text-centered has-text-link is-size-5 m-0 p-0",children:"Placed"}),Object(E.jsxs)("p",{className:"heading has-text-centered has-text-success is-size-5 m-0 p-0",children:[e.filter((function(e){return e.placed})).length," / ",e.length]})]}),Object(E.jsxs)("div",{className:"column is-four-fifths",children:[Object(E.jsx)("div",{className:"columns",children:Object.keys(l).map((function(e){return Object(E.jsxs)("div",{className:"column has-text-centered m-0 p-0","aria-label":e,children:[Object(E.jsxs)("p",{className:"is-size-7 m-0 p-0",children:[j[e]?j[e]:0," / ",l[e]]}),Object(E.jsx)(m.a,{icon:p.c,onClick:function(){return a(e)},color:e,className:"is-size-3"}),Object(E.jsxs)("p",{children:[(100*(j[e]?j[e]:0)/l[e]).toFixed()," %"]})]})}))}),Object(E.jsx)("hr",{className:"m-0 p-0"}),Object(E.jsx)("p",{className:"has-text-centered",style:{color:c},children:""==c?"No layer selected":c})]}),Object(E.jsxs)("div",{className:"column is-centered has-text-centered",children:[Object(E.jsx)(m.a,{icon:p.e,transform:{rotate:t.heading-45},className:"has-text-white is-size-1"}),Object(E.jsx)("p",{className:"is-size-4",children:t.heading})]})]})]})},We=function(){return Object(E.jsxs)("div",{className:"container is-fullwidth",children:[Object(E.jsxs)("div",{className:"columns p-0 m-0",children:[Object(E.jsx)(Ee,{index:0}),Object(E.jsx)("div",{className:"column is-three-fifths p-0 m-0",children:Object(E.jsx)(Fe,{})}),Object(E.jsx)(Ee,{index:1})]}),Object(E.jsx)(Pe,{})]})},Le=function(e){var t=e.name,c=e.icon,n=Object(r.h)().pathname.includes(t.toLowerCase());return Object(E.jsx)("li",{className:n?"is-active":"",children:Object(E.jsxs)(l.b,{to:"/".concat(t.toLowerCase()),className:"mr-4 ml-4",children:[Object(E.jsx)("span",{className:"icon is-small",children:Object(E.jsx)(m.a,{icon:c})}),Object(E.jsx)("span",{children:t})]})})},_e=function(){return Object(E.jsx)("div",{className:"tabs is-centered m-0",children:Object(E.jsxs)("ul",{children:[Object(E.jsx)(Le,{name:"Map",icon:p.f}),Object(E.jsx)(Le,{name:"Config",icon:p.h}),Object(E.jsx)(Le,{name:"Debug",icon:p.a})]})})},He=c(118),Me=Object(He.GoogleApiWrapper)({apiKey:"AIzaSyBsgd5A9q-23gHy8tL6e5O0lct6JoD97xo"})((function(e){var t=e.google,c=Object(n.useState)(0),a=Object(b.a)(c,2),i=a[0],s=a[1],l=L("debugCenter",{lat:0,lng:0}),r=Object(b.a)(l,2),o=r[0],d=r[1],j=Object(n.useState)([]),p=Object(b.a)(j,2),m=p[0],h=p[1];Object(n.useEffect)((function(){A().then((function(e){h(e.waypoints),e.waypoints.length>0&&d(Object(u.a)({},e.waypoints[0]))}))}),[]);return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("div",{className:"container map",children:Object(E.jsxs)(He.Map,{google:t,zoom:14,onClick:function(e,t,c){var n={lat:c.latLng.lat().toFixed(5),lng:c.latLng.lng().toFixed(5)};d(n),N(n),console.log(n)},initialCenter:o,children:[Object(E.jsx)(He.Marker,{name:"target",position:o}),m.map((function(e){return Object(E.jsx)(He.Circle,{center:e,radius:.5,strokeColor:e.color,strokeOpacity:.5,strokeWeight:2,fillColor:e.color,fillOpacity:.5})}))]})}),Object(E.jsx)("div",{className:"container mt-4 pt-4",children:Object(E.jsxs)("div",{className:"columns",children:[Object(E.jsxs)("div",{className:"column",children:[Object(E.jsxs)("p",{className:"ml-4",children:["Coordinates: ",o.lat,", ",o.lng]}),Object(E.jsxs)("p",{className:"ml-4",children:["Heading: ",i,"\xb0 "]})]}),Object(E.jsxs)("div",{className:"column",children:[Object(E.jsx)("p",{className:"ml-4",children:"Set heading:"}),Object(E.jsx)("input",{class:"slider m-4",step:1,min:0,max:360,value:i,type:"range",onInput:function(e){var t=parseFloat(e.target.value).toFixed(1);y({heading:t}),s(t)}})]})]})})]})})),Be=Object(o.c)(j),Te=function(){return Object(E.jsxs)("div",{className:"container is-fullwidth",children:[Object(E.jsx)(_e,{}),Object(E.jsx)(o.a,{store:Be,children:Object(E.jsxs)(r.d,{children:[Object(E.jsx)(r.a,{exact:!0,from:"/",to:"/map"}),Object(E.jsx)(r.b,{path:"/config",component:J}),Object(E.jsx)(r.b,{path:"/map",component:We}),Object(E.jsx)(r.b,{path:"/debug",component:Me})]})})]})};s.a.render(Object(E.jsx)(a.a.StrictMode,{children:Object(E.jsx)(l.a,{children:Object(E.jsx)(Te,{})})}),document.getElementById("root"))}},[[294,1,2]]]);
//# sourceMappingURL=main.373831a0.chunk.js.map