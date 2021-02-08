/*! For license information please see tt-canvas-poster-sprite.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.CanvasPosterSprite=t():e.CanvasPosterSprite=t()}(self,(function(){return(()=>{"use strict";var e={501:(e,t,n)=>{n.r(t),n.d(t,{default:()=>D});var r,o={TASK:{CODE:1001,MSG:"异步并行任务失败，获取图片资源失败！"},DRAW:{CODE:1002,MSG:"canvas海报绘制失败!"},SAVE:{CODE:1003,MSG:"海报保存为临时文件失败!"},GETIMG:{CODE:1004,MSG:"图片资源下载到本地失败!"},TOBASE64:{CODE:1005,MSG:"本地图片转换base64失败!"}},a={line:"line",rect:"rect",circle:"circle",triangle:"triangle",polygon:"polygon"},i={width:640,height:640,bgColor:"white",fileType:"jpeg",quality:1,version:n(306).version,pics:[],texts:[],paths:{},callback:function(e,t){}},l={self:"",canvasId:""},c=(r={},["String","Object","Number","Array","Undefined","Function","Null"].forEach((function(e){r["is"+e]=function(t){return Object.prototype.toString.call(t)=="[object "+e+"]"}})),r);function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const u=function(){function e(t){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.canvasApi=t||{},this}var t,n;return t=e,(n=[{key:"triangle",value:function(e,t){t.points&&0!=t.points.length?t.points.length=3:t.points=[{x:0,y:0},{x:8,y:8},{x:16,y:0}],this.polygon(e,t)}},{key:"circle",value:function(e,t){this.rect(e,{x:t.x,y:t.y,r:t.r,w:2*t.r,h:2*t.r,type:t.type,color:t.color,angle:t.angle,callback:t.callback})}},{key:"rect",value:function(e,t){var n=this.canvasApi||{};e.save();var r=t.x||0,o=t.y||0,a=t.w||0,i=t.h||0,l=t.r||0,c=t.callback||function(e){},s=t.type||"stroke",u=t.angle||null;n.setFillStyle&&n.setFillStyle(e,t.color||"white"),n.setStrokeStyle&&n.setStrokeStyle(e,t.color||"white");var f=/^\d+\.\d+$/;f.test(r)||(r+=.5),f.test(o)||(o+=.5),n.setLineWidth&&n.setLineWidth(e,t.lineWidth||1),u&&(e.translate(r+.5*a,o+.5*i),e.rotate(u*Math.PI/180),r=-.5*a,o=-.5*i),e.beginPath(),l>0?(e.moveTo(r+l,o),e.lineTo(r+a-l,o),e.arc(r+a-l,o+l,l,-.5*Math.PI,0,!1),e.lineTo(r+a,o+i-l),e.arc(r+a-l,o+i-l,l,0,.5*Math.PI,!1),e.lineTo(r+l,o+i),e.arc(r+l,o+i-l,l,.5*Math.PI,Math.PI,!1),e.lineTo(r,o+l),e.arc(r+l,o+l,l,Math.PI,1.5*Math.PI,!1)):(e.moveTo(r,o),e.lineTo(r+a,o),e.lineTo(r+a,o+i),e.lineTo(r,o+i),e.lineTo(r,o)),e.clip(),e.closePath(),"stroke"==s?e.stroke():e.fill(),e.save(),c({x:r,y:o,w:a,h:i}),e.restore(),e.restore()}},{key:"line",value:function(e,t){var n=this.canvasApi||{};e.save();var r=t.x1||0,o=t.y1||0,a=t.x2||0,i=t.y2||0,l=/^\d+\.\d+$/;l.test(r)||(r+=.5),l.test(o)||(o+=.5),n.setLineWidth&&n.setLineWidth(e,t.lineWidth||1),n.setStrokeStyle&&n.setStrokeStyle(e,t.color||"white"),e.beginPath(),e.moveTo(r,o),e.lineTo(a,i),e.closePath(),e.stroke(),e.restore()}},{key:"polygon",value:function(e,t){var n=this.canvasApi||{};e.save();var r=t.type||"stroke",o=t.points||[];0!=o.length&&(e.beginPath(),o.forEach((function(t,n){0==n&&e.moveTo(t.x,t.y),e.lineTo(t.x,t.y)})),e.closePath(),n.setLineWidth&&n.setLineWidth(e,t.lineWidth||1),n.setFillStyle&&n.setFillStyle(e,t.color||"white"),n.setStrokeStyle&&n.setStrokeStyle(e,t.color||"white"),"stroke"==r?e.stroke():e.fill(),e.restore())}}])&&s(t.prototype,n),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const p=function(){function e(t){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.canvasApi=t||{},this}var t,n;return t=e,(n=[{key:"textAlign",value:function(e,t){var n=this.canvasApi||{};e.save(),n.setFontSize&&n.setFontSize(e,t.font||14),n.setFillStyle&&n.setFillStyle(e,t.color||"black"),n.setTextBaseline&&n.setTextBaseline(e,t.baseline||"middle");var r=t.x||0,o=t.y||0,a=t.w||0,i=r,l=t.lineHeight||20,c=t.angle||null,s=t.align||"left",u=t.text?t.text:t||"",f=this.measureText(e,t.font,u);a>0&&"center"==s?i=r+.5*(a-f):a>0&&"right"==s&&(i=r+(a-f)),c?(e.translate(i+.5*f,o+.5*l),e.rotate(c*Math.PI/180),e.fillText(u,-.5*f,-.5*l)):e.fillText(u,i,o),e.restore()}},{key:"wordwrap",value:function(e,t){var n=this.canvasApi||{};e.save(),n.setFontSize&&n.setFontSize(e,t.font||14),n.setFillStyle&&n.setFillStyle(e,t.color||"black"),n.setTextBaseline&&n.setTextBaseline(e,t.baseline||"middle");for(var r=t.x||0,o=t.y||0,a=t.w||0,i=t.lineHeight||24,l=t.text.split("")||"",c=t.clamp||-1,s="",u=[],f=0;f<l.length;f++)this.measureText(e,t.font,s)<a&&this.measureText(e,t.font,s+l[f])<=a?s+=l[f]:(u.push(s),s=l[f]);u.push(s);var p=u.length;if(c>0&&c<p)for(var h=0;h<c;h++){var y=u[h];h==c-1&&(y=y.substring(0,y.length-1)+"..."),e.fillText(y,r,o+(h+1)*i)}else for(var b=0;b<p;b++)e.fillText(u[b],r,o+(b+1)*i);e.restore()}},{key:"measureText",value:function(e,t,n){var r=e.measureText(n).width;if(r>0)return r;var o=parseInt(t);return o=o>0?o:14,n.length*parseInt(o)}}])&&f(t.prototype,n),e}();function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const d=function(){function e(t){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c.isObject(t))return this.options=t||{},this.drawPath={},this.drawText={},this.canvasApi={},this.thenCallbacks=[],this;console.error("参数错误，参数必须是对象！")}var t,n;return t=e,(n=[{key:"then",value:function(e){return this.thenCallbacks.push(e),this}},{key:"drawImg",value:function(e,t){var n=this.drawPath||{};t.r||t.angle?n.rect&&n.rect(e,{x:t.x,y:t.y,w:t.w,h:t.h,r:t.r,angle:t.angle,callback:function(n){e.drawImage(t.img,n.x,n.y,n.w,n.h)}}):e.drawImage(t.img,t.x,t.y,t.w,t.h)}},{key:"canvas",value:function(){var e=this.options,t=this.drawImg.bind(this),n=this.drawPath||{},r=this.drawText||{},i=this.canvasApi||{},l=this.thenCallbacks||[],s=this.__platform__;e.preload=[];var u={};if(c.isArray(e.pics))for(var f=function(t){var n=Math.random().toString(16).substr(2),r=e.pics[t];u[n]=function(t){i.getImageInfos&&i.getImageInfos({opts:e,ERROR_TYPE:o,src:r.src,callback:function(n,o){if(n)e.callback(n,null);else{var a=r.preload||!1,i={img:o.path,x:r.x,y:r.y,w:r.w,h:r.h,r:r.r,preload:a,angle:r.angle};a&&e.preload.push(i),t(null,i)}}})}},p=0;p<e.pics.length;p++)f(p);!function(e,t){var n={},r={};if(0!=Object.getOwnPropertyNames(e).length){for(var o in e)n[o]=null,r[o]={complate:!1};var a=function(e,o,a){o?t(o,null):(r[e].complate=!0,n[e]=a,function(){var e=!0;for(var t in r)if(!r[t].complate){e=!1;break}return e}()&&t(null,n))};for(var o in e)(0,e[o])(a.bind(null,o))}else t(null,null)}(u,(function(u,f){if(u)e.callback({code:o.TASK.CODE,msg:o.TASK.MSG,err:JSON.stringify(u),src:""},null);else if(i.createCanvasContext){var p=i.createCanvasContext(e),h=p.ctx,b=p.canvas;if(h.__platform__=s,b.__platform__=s,h.rect(0,0,e.width,e.height),i.setFillStyle&&i.setFillStyle(h,e.bgColor||"white"),h.fill(),e.preload.length>0)for(var v in e.preload)t&&t(h,e.preload[v]);if(Object.getOwnPropertyNames(e.paths).length>0)for(var d in e.paths){var g=e.paths[d];for(var m in g){var w=g[m],_=a[d];n[_]&&n[_](h,w)}}if(f)for(var x in f){var O=f[x];O.preload||t&&t(h,O)}if(c.isArray(e.texts))for(var S in e.texts){var T=e.texts[S];T.multiple&&T.w?r.wordwrap&&r.wordwrap(h,T):r.textAlign&&r.textAlign(h,T)}i.canvasToTempFilePath&&i.canvasToTempFilePath({ctx:h,opts:e,canvas:b,ERROR_TYPE:o,callback:function(t,n){e.callback(t,y(y({},n),{},{canvas:b})),l.forEach((function(e){c.isFunction(e)&&e(t,y(y({},n),{},{canvas:b}))}))}})}}))}}])&&v(t.prototype,n),e}();var g={__getImageInfo__:function(){},__createCanvasContext__:function(){},__canvasToTempFilePath__:function(){}},m=g,w=!1,_={createCanvasContext:function(e){if(m.__createCanvasContext__){var t=e.self||{};return{ctx:m.__createCanvasContext__(e.canvasId,e.self),canvas:t}}},canvasToTempFilePath:function(e){var t=e.ctx,n=e.opts,r=e.ERROR_TYPE,o=e.callback;if(m.__canvasToTempFilePath__)try{t.draw(!0,(function(){m.__canvasToTempFilePath__({fileType:n.fileType||"jpg",quality:n.quality||1,canvasId:n.canvasId,success:function(e){o(null,e)},fail:function(e){o({desc:"海报保存失败.",err:JSON.stringify(e),code:r.SAVE.CODE,msg:r.SAVE.MSG,src:""},null)}},n.self)}))}catch(e){o({desc:"canva海报绘制失败.",err:JSON.stringify(e),code:r.DRAW.CODE,msg:r.DRAW.MSG,src:""},null)}},getImageInfos:function(e){var t=e.src,n=e.ERROR_TYPE,r=e.callback;m.__getImageInfo__&&m.__getImageInfo__({src:t,fail:function(e){r({desc:"图片下载失败.",err:JSON.stringify(e),code:n.GETIMG.CODE,msg:n.GETIMG.MSG,src:t},null)},success:function(e){r(null,e)}})}},x={},O=!1,S=!0;function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e,t){return!t||"object"!==T(t)&&"function"!=typeof t?C(e):t}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}x.setLineWidth=function(e,t){S?e.setLineWidth(t):e.lineWidth=t},x.setFillStyle=function(e,t){S?e.setFillStyle(t):e.fillStyle=t},x.setStrokeStyle=function(e,t){S?e.setStrokeStyle(t):e.strokeStyle=t},x.setFontSize=function(e,t){S?e.setFontSize(t):e.font=t},x.setTextBaseline=function(e,t){S?e.setTextBaseline(t):e.textBaseline=t};var F,M="tt-Miniprogram";O?console.error("You have already set __setByMethod__ and cannot change it."):(S=!0,O=!0),F={__getImageInfo__:tt.getImageInfo,__createCanvasContext__:tt.createCanvasContext,__canvasToTempFilePath__:tt.canvasToTempFilePath},w?console.error("You have already set ctx target and cannot change it."):(m=F||g,w=!0);const D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=A(t);if(n){var o=A(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return I(this,e)});function o(e){var t;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),!c.isObject(e))return console.error("参数错误，参数必须是对象！"),I(t);var n=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=[].concat(n);return 0==o.length||o.forEach((function(t,n){for(var r in t)e[r]=t[r]})),e}({},i,l,e);return(t=r.call(this,n)).options=n,t.__platform__=M,t.drawPath=new u(x),t.drawText=new p(x),t.canvasApi=j(j({},x),_),t.canvas(),I(t,C(t))}return o}(d)},306:e=>{e.exports=JSON.parse('{"name":"canvas-poster-sprite","version":"1.0.2","description":"A poster plugin that can draw texts, paths and pictures to canvas, and export picture data.","main":"dis/web-canvas-poster-sprite.js","directories":{"example":"examples"},"scripts":{"my-build":"node build/my-build.js","qq-build":"node build/qq-build.js","swan-build":"node build/swan-build.js","tt-build":"node build/tt-build.js","uni-build":"node build/uni-build.js","web-build":"node build/web-build.js","wx-build":"node build/wx-build.js","pack":"webpack --config webpack.config.js","build":"node --max_semi_space_size=64 build/build.js","test":"echo \\"Error: no test specified\\" && exit 1"},"keywords":["canvas","poster","sprite"],"author":"小小咖","email":"466102061@qq.com","license":"MIT","devDependencies":{"@babel/core":"^7.12.10","@babel/preset-env":"^7.12.11","babel-loader":"^8.2.2","chalk":"^4.1.0","ora":"^5.3.0","rimraf":"^3.0.2","webpack":"^5.17.0","webpack-cli":"^4.4.0"}}')}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(501)})()}));