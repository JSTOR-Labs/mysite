(window.webpackJsonp=window.webpackJsonp||[]).push([[3,4],{396:function(e,t,n){var _=n(43);e.exports=function(e,t){if(!_(e)||e._t!==t)throw TypeError("Incompatible receiver, "+t+" required!");return e}},397:function(e,t,n){"use strict";var strong=n(398),_=n(396);e.exports=n(399)("Set",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(e){return strong.def(_(this,"Set"),e=0===e?0:e,e)}},strong)},398:function(e,t,n){"use strict";var _=n(44).f,r=n(144),o=n(235),c=n(65),d=n(233),l=n(234),f=n(170),h=n(236),E=n(171),v=n(33),m=n(168).fastKey,w=n(396),y=v?"_s":"size",M=function(e,t){var n,_=m(t);if("F"!==_)return e._i[_];for(n=e._f;n;n=n.n)if(n.k==t)return n};e.exports={getConstructor:function(e,t,n,f){var h=e((function(e,_){d(e,h,t,"_i"),e._t=t,e._i=r(null),e._f=void 0,e._l=void 0,e[y]=0,null!=_&&l(_,n,e[f],e)}));return o(h.prototype,{clear:function(){for(var e=w(this,t),data=e._i,n=e._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete data[n.i];e._f=e._l=void 0,e[y]=0},delete:function(e){var n=w(this,t),_=M(n,e);if(_){var r=_.n,o=_.p;delete n._i[_.i],_.r=!0,o&&(o.n=r),r&&(r.p=o),n._f==_&&(n._f=r),n._l==_&&(n._l=o),n[y]--}return!!_},forEach:function(e){w(this,t);for(var n,_=c(e,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(_(n.v,n.k,this);n&&n.r;)n=n.p},has:function(e){return!!M(w(this,t),e)}}),v&&_(h.prototype,"size",{get:function(){return w(this,t)[y]}}),h},def:function(e,t,n){var _,r,o=M(e,t);return o?o.v=n:(e._l=o={i:r=m(t,!0),k:t,v:n,p:_=e._l,n:void 0,r:!1},e._f||(e._f=o),_&&(_.n=o),e[y]++,"F"!==r&&(e._i[r]=o)),e},getEntry:M,setStrong:function(e,t,n){f(e,t,(function(e,n){this._t=w(e,t),this._k=n,this._l=void 0}),(function(){for(var e=this._k,t=this._l;t&&t.r;)t=t.p;return this._t&&(this._l=t=t?t.n:this._t._f)?h(0,"keys"==e?t.k:"values"==e?t.v:[t.k,t.v]):(this._t=void 0,h(1))}),n?"entries":"values",!n,!0),E(t)}}},399:function(e,t,n){"use strict";var _=n(25),r=n(24),o=n(46),c=n(235),meta=n(168),d=n(234),l=n(233),f=n(43),h=n(39),E=n(172),v=n(110),m=n(173);e.exports=function(e,t,n,w,y,M){var P=_[e],O=P,D=y?"set":"add",L=O&&O.prototype,A={},T=function(e){var t=L[e];o(L,e,"delete"==e?function(a){return!(M&&!f(a))&&t.call(this,0===a?0:a)}:"has"==e?function(a){return!(M&&!f(a))&&t.call(this,0===a?0:a)}:"get"==e?function(a){return M&&!f(a)?void 0:t.call(this,0===a?0:a)}:"add"==e?function(a){return t.call(this,0===a?0:a),this}:function(a,b){return t.call(this,0===a?0:a,b),this})};if("function"==typeof O&&(M||L.forEach&&!h((function(){(new O).entries().next()})))){var k=new O,U=k[D](M?{}:-0,1)!=k,C=h((function(){k.has(1)})),x=E((function(e){new O(e)})),j=!M&&h((function(){for(var e=new O,t=5;t--;)e[D](t,t);return!e.has(-0)}));x||((O=t((function(t,n){l(t,O,e);var _=m(new P,t,O);return null!=n&&d(n,y,_[D],_),_}))).prototype=L,L.constructor=O),(C||j)&&(T("delete"),T("has"),y&&T("get")),(j||U)&&T(D),M&&L.clear&&delete L.clear}else O=w.getConstructor(t,e,y,D),c(O.prototype,n),meta.NEED=!0;return v(O,e),A[e]=O,r(r.G+r.W+r.F*(O!=P),A),M||w.setStrong(O,e,y),O}},400:function(e,t,n){var _,a;a=this,void 0===(_=function(){return a.returnExportsGlobal=function(){"use strict";function a(){var a,b;this.q=[],this.add=function(a){this.q.push(a)},this.call=function(){for(a=0,b=this.q.length;b>a;a++)this.q[a].call()}}function e(e,n){if(e.resizedAttached){if(e.resizedAttached)return void e.resizedAttached.add(n)}else e.resizedAttached=new a,e.resizedAttached.add(n);e.resizeSensor=document.createElement("div"),e.resizeSensor.className="resize-sensor";var _="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden; opacity: 0;",g="position: absolute; left: 0; top: 0; transition: 0s;";e.resizeSensor.style.cssText=_,e.resizeSensor.innerHTML='<div class="resize-sensor-expand" style="'+_+'"><div style="'+g+'"></div></div><div class="resize-sensor-shrink" style="'+_+'"><div style="'+g+' width: 200%; height: 200%"></div></div>',e.appendChild(e.resizeSensor),"static"==function(a,b){return a.currentStyle?a.currentStyle[b]:window.getComputedStyle?window.getComputedStyle(a,null).getPropertyValue(b):a.style[b]}(e,"position")&&(e.style.position="relative");var r=e.resizeSensor.childNodes[0],i=r.childNodes[0],o=e.resizeSensor.childNodes[1],c=function(){i.style.width=1e5+"px",i.style.height=1e5+"px",r.scrollLeft=1e5,r.scrollTop=1e5,o.scrollLeft=1e5,o.scrollTop=1e5};c();var d=!1,l=function(){e.resizedAttached&&(d&&(e.resizedAttached.call(),d=!1),t(l))};t(l);var f,h,p,q,E=function(){((p=e.offsetWidth)!=f||(q=e.offsetHeight)!=h)&&(d=!0,f=p,h=q),c()},s=function(a,b,e){a.attachEvent?a.attachEvent("on"+b,e):a.addEventListener(b,e)};s(r,"scroll",E),s(o,"scroll",E)}var t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(a){return window.setTimeout(a,20)},n=function(a,b){var t=Object.prototype.toString.call(a),n=this._isCollectionTyped="[object Array]"===t||"[object NodeList]"===t||"[object HTMLCollection]"===t||"undefined"!=typeof jQuery&&a instanceof window.jQuery||"undefined"!=typeof Elements&&a instanceof window.Elements;if(this._element=a,n)for(var g=0,_=a.length;_>g;g++)e(a[g],b);else e(a,b)};return n.prototype.detach=function(){var b=this._isCollectionTyped,e=this._element;if(b)for(var t=0,_=e.length;_>t;t++)n.detach(e[t]);else n.detach(e)},n.detach=function(a){a.resizeSensor&&(a.removeChild(a.resizeSensor),delete a.resizeSensor,delete a.resizedAttached)},n}()}.apply(t,[]))||(e.exports=_)},401:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(process){var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(111),core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(50),core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(109),core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es6_set__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(397),core_js_modules_es6_set__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es6_set__WEBPACK_IMPORTED_MODULE_5__),axios__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(73),axios__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__),resize_sensor__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(400),resize_sensor__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(resize_sensor__WEBPACK_IMPORTED_MODULE_7__);function parseUrl(e){var t=e.match(/^(https?)\:\/\/(([^:\/?#]*)(?:\:([0-9]+))?)(\/[^?#]*)(\?[^#]*|)(#.*|)$/);return t&&{protocol:t[1],host:t[2],hostname:t[3],origin:"".concat(t[1],"://").concat(t[2]),port:t[4],pathname:t[5],search:t[6],hash:t[7]}}__webpack_exports__.default={name:"main-mixin",data:function(){return{essay:void 0}},computed:{html:function(){return this.$store.getters.html},baseUrl:function(){return this.$store.getters.baseUrl},navMenuItems:function(){return this.$store.getters.navigation},navPaths:function(){var e=new Set;return this.navMenuItems.forEach((function(t){return e.add(t.path)})),e},settingsLoaded:function(){return this.$store.getters.settingsLoaded}},methods:{getStaticPage:function(source){var e=this,t=0===source.indexOf("http")?source:"".concat(this.baseUrl,"/").concat(source);return console.log("getStaticPage",t),axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(t).then((function(t){return e.$marked(t.data)})).then((function(html){e.$store.dispatch("setHtml",html),e.$nextTick((function(){e.addStaticPageMetadata(),e.updateLinks()}))}))},addStaticPageMetadata:function(){var e=this;console.log("addStaticPageMetadata"),this.$refs[this.$options.name].querySelectorAll("var").forEach((function(t){t.title&&e.$store.dispatch("setTitle",t.title),t.dataset.banner&&e.$store.dispatch("setBanner",t.dataset.banner)}))},updateLinks:function(){var e=this;this.$refs[this.$options.name]&&(this.$refs[this.$options.name].querySelectorAll("a").forEach((function(link){if(link.href){var t=parseUrl(link.href);console.dir(t),console.log(e.baseUrl),0===e.baseUrl.indexOf(t.origin)&&(link.removeAttribute("href"),link.addEventListener("click",(function(n){e.$router.push(t.pathname)})))}})),this.$refs[this.$options.name].querySelectorAll("img").forEach((function(img){var t=parseUrl(img.src);0===t.pathname.indexOf("/images/")&&e.baseUrl.indexOf(0===t.origin)&&(img.src="".concat(e.baseUrl).concat(t.pathname))})))},getEssay:function(e){var t=this;window.data=void 0;var n="".concat("https://us-central1-visual-essay.cloudfunctions.net","/essay?src=").concat(encodeURIComponent(e),"&nocss");process.env.context&&(n+="&context=".concat(process.env.context)),axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(n).then((function(e){return t.essay=e.data})).then((function(e){return t.onLoaded()}))},onLoaded:function onLoaded(){var _this6=this,essayElem=document.getElementById("visual-essay");if(essayElem){var _this=this;if(new resize_sensor__WEBPACK_IMPORTED_MODULE_7___default.a(essayElem,(function(){var e=document.getElementById("essay-spacer");_this.$store.dispatch("setSpacerHeight",e?e.clientHeight:0)})),!window.data){var jsonld=essayElem.querySelectorAll('script[type="application/ld+json"]');jsonld.length>0&&jsonld.forEach((function(scr){eval(scr)}))}this.addEssayMetadata(),this.updateLinks()}else setTimeout((function(){_this6.onLoaded()}),1e3)},addEssayMetadata:function(){var e=this;window.data?window.data.forEach((function(t){"essay"===t.type&&(t.title&&e.$store.dispatch("setTitle",t.title),t.banner&&e.$store.dispatch("setBanner",t.banner))})):setTimeout((function(){e.addEssayMetadata()}),1e3)}}}}.call(this,__webpack_require__(145))},402:function(e,t,n){"use strict";n(146);var _=n(126);t.a=Object(_.a)("layout")},403:function(e,t,n){"use strict";n.r(t);var _={validate:function(e){e.params;return!0},name:"essay",mixins:[n(401).default],created:function(){console.log("essay.created"),this.$store.dispatch("setBanner",void 0)},mounted:function(){window.scrollTo(0,0),this.settingsLoaded&&this.getEssay("".concat(this.baseUrl,"/").concat(this.$route.params.pathMatch,".md"))},watch:{settingsLoaded:function(){this.getEssay("".concat(this.baseUrl,"/").concat(this.$route.params.pathMatch,".md"))}}},r=n(84),o=n(174),c=n.n(o),d=n(388),l=n(402),component=Object(r.a)(_,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-layout",[t("v-flex",[t("div",{ref:this.$options.name,domProps:{innerHTML:this._s(this.essay)}})])],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VFlex:d.a,VLayout:l.a})}}]);