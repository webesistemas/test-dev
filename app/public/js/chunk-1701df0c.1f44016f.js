(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1701df0c"],{"0280":function(a,t,r){"use strict";r("1a39")},"1a39":function(a,t,r){},"52ba":function(a,t,r){},a9b6:function(a,t,r){"use strict";r.r(t);var e=function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("CarList",{attrs:{cars:"cars"}})},n=[],c=function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("b-container",{staticClass:"mt-5"},[a.car?r("b-row",[r("CarDetail",{attrs:{car:a.car},on:{backList:a.backList}})],1):r("b-row",a._l(a.cars,(function(t,e){return r("CarItem",{key:e,attrs:{car:t},on:{viewCar:a.viewCar}})})),1)],1)},s=[],i=r("5530"),o=(r("96cf"),r("1da1")),l=r("e443"),u=r("2f62"),m=function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("b-col",{attrs:{col:"",lg:"4",md:"6",sm:"12"}},[r("b-card",{staticClass:"m-2 p-1",staticStyle:{"max-width":"20rem"},attrs:{title:a.car.model,"img-src":""+(a.imageCar+a.car.image),"img-alt":"Image","img-top":"",tag:"article"}},[r("b-card-text",[r("p",{staticClass:"p2"},[a._v("R$"+a._s(a.car.amount))]),r("p",{staticClass:"p2"},[a._v("Ano: "+a._s(a.car.year))]),r("p",{staticClass:"p2"},[a._v("Modelo: "+a._s(a.car.model))]),r("p",{staticClass:"p2"},[a._v("Marca: "+a._s(a.car.brand.name))])]),r("b-button",{attrs:{variant:"primary"},on:{click:function(t){return a.$emit("viewCar",a.car)}}},[a._v("Ver detalhes")])],1)],1)},p=[],d=r("a078"),b=r.n(d),f={name:"CarItem",data:function(){return{imageCar:b.a.imageCar}},props:{car:{}}},C=f,v=(r("ba5f"),r("2877")),_=Object(v["a"])(C,m,p,!1,null,"6e4e13ec",null),g=_.exports,h=function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("b-col",{attrs:{col:"12"}},[r("b-card",{staticClass:"m-2 p-1",staticStyle:{"max-width":"50rem"},attrs:{title:a.car.model,"img-src":""+(a.imageCar+a.car.image),"img-alt":"Image","img-top":"",tag:"article"}},[r("b-card-text",[r("p",{staticClass:"p2"},[a._v("R$"+a._s(a.car.amount))]),r("p",{staticClass:"p2"},[a._v("Ano: "+a._s(a.car.year))]),r("p",{staticClass:"p2"},[a._v("Modelo: "+a._s(a.car.model))]),r("p",{staticClass:"p2"},[a._v("Marca: "+a._s(a.car.brand.name))]),r("hr"),a._v(" "+a._s(a.car.description)+" ")]),r("b-button",{attrs:{variant:"danger"},on:{click:function(t){return a.$emit("backList")}}},[a._v("Voltar")])],1)],1)},w=[],k={name:"CarItem",data:function(){return{imageCar:b.a.imageCar}},props:{car:{}}},x=k,L=(r("0280"),Object(v["a"])(x,h,w,!1,null,"9bb4d88a",null)),j=L.exports,O={name:"CarList",components:{CarItem:g,CarDetail:j},data:function(){return{cars:[],car:null}},created:function(){var a=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a.readCars();case 1:case"end":return t.stop()}}),t)})))()},methods:Object(i["a"])(Object(i["a"])({},Object(u["b"])(["setLoad","setToast"])),{},{readCars:function(){var a=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,a.setLoad({load:!0}),t.next=4,l["a"].get("cars").then((function(t){a.cars=t.data.data}));case 4:t.next=10;break;case 6:t.prev=6,t.t0=t["catch"](0),console.log(t.t0),a.setToast({toast:{show:!0,variant:"danger",message:"Erro ao buscar Carros.",title:"Erro!"}});case 10:return t.prev=10,a.setLoad({load:!1}),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,6,10,13]])})))()},viewCar:function(a){this.car=a},backList:function(){this.car=null}})},$=O,y=Object(v["a"])($,c,s,!1,null,null,null),E=y.exports,I={name:"Home",components:{CarList:E}},R=I,M=Object(v["a"])(R,e,n,!1,null,null,null);t["default"]=M.exports},ba5f:function(a,t,r){"use strict";r("52ba")}}]);
//# sourceMappingURL=chunk-1701df0c.1f44016f.js.map