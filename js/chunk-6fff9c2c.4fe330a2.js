(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fff9c2c"],{8766:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-editor__layout-item"},[i("transition",{attrs:{name:"slide-fade"}},[t.isActive?i("div",{staticClass:"app-editor__layout-tools"},[i("div",{staticClass:"app-editor__layout-tools-block"},[i("button",{staticClass:"app-editor__layout-tools-btn",on:{click:function(e){return t.$emit("up")}}},[i("img",{attrs:{src:a("a3f8"),alt:"up"}})]),i("button",{staticClass:"app-editor__layout-tools-btn",on:{click:function(e){return t.$emit("down")}}},[i("img",{attrs:{src:a("c874"),alt:"down"}})])]),i("div",{staticClass:"app-editor__layout-tools-block"},[i("button",{staticClass:"app-editor__layout-tools-btn",on:{click:function(e){return t.$emit("remove")}}},[i("img",{attrs:{src:a("af22"),alt:"trash"}})]),i("button",{staticClass:"app-editor__layout-tools-btn",on:{click:function(e){return t.$emit("copy")}}},[i("img",{attrs:{src:a("8aac"),alt:"copy"}})])])]):t._e()]),i("div",{staticClass:"app-editor__layout-item-inner",class:{"app-editor__layout-item--active":t.isActive},on:{click:function(e){return t.$emit("select",t.isActive?{}:t.item)}}},[i("div",{staticClass:"app-editor__layout-item-icon"},[i("img",{attrs:{src:t.item.icon}})]),i("div",{staticClass:"app-editor__layout-item-type"},[t._v(" "+t._s(t.item.type)+" ")]),t.isActive?i("div",{staticClass:"app-editor__layout-item-edit",on:{click:function(t){t.stopPropagation()}}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.item.value,expression:"item.value"}],staticClass:"form-control",attrs:{type:"text",placeholder:t.item.content.placeholder},domProps:{value:t.item.value},on:{paste:t.pasteHandler,input:function(e){e.target.composing||t.$set(t.item,"value",e.target.value)}}})]):t._e()])],1)},o=[],s={props:{item:{type:Object,default:function(){return{}}},active:{type:Object,default:function(){return{}}}},computed:{isActive:function(){return this.item.id===this.active.id}},methods:{pasteHandler:function(t){var e=this;if(t.clipboardData){var a=t.clipboardData.items,i=a[0].getAsFile(),o=new FileReader;o.onload=function(t){t.target.result&&e.$set(e.item,"value",t.target.result)},o.readAsDataURL(i)}}}},n=s,c=(a("fa76"),a("2877")),r=Object(c["a"])(n,i,o,!1,null,null,null);e["default"]=r.exports},"8aac":function(t,e,a){t.exports=a.p+"img/copy.abb02267.svg"},a3f8:function(t,e,a){t.exports=a.p+"img/arrow-up.eaa4ff5a.svg"},af22:function(t,e,a){t.exports=a.p+"img/trash.4c13e355.svg"},c874:function(t,e,a){t.exports=a.p+"img/arrow-down.7ba2e48c.svg"},d0b4:function(t,e,a){},fa76:function(t,e,a){"use strict";a("d0b4")}}]);
//# sourceMappingURL=chunk-6fff9c2c.4fe330a2.js.map