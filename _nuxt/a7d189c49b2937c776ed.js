(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(t,e,n){"use strict";e.a={}},166:function(t,e,n){t.exports=n(167)},167:function(t,e,n){"use strict";n.r(e),function(t){n(57),n(87),n(62);var e=n(22),r=(n(90),n(65),n(23)),o=(n(93),n(124),n(44),n(9),n(95),n(11),n(127),n(176),n(184),n(186),n(3)),c=n(153),d=n(111),l=n(4),f=n(41),h=n(81);o.default.component(h.a.name,h.a),o.default.component("NLink",h.a),t.fetch||(t.fetch=c.a);var m,v,x=[],y=window.__NUXT__||{};Object.assign(o.default.config,{silent:!0,performance:!1});var w=o.default.config.errorHandler||console.error;function _(t,e,n){var r=function(component){var t=function(component,t){if(!component||!component.options||!component.options[t])return{};var option=component.options[t];if("function"==typeof option){for(var e=arguments.length,n=new Array(e>2?e-2:0),r=2;r<e;r++)n[r-2]=arguments[r];return option.apply(void 0,n)}return option}(component,"transition",e,n)||{};return"string"==typeof t?{name:t}:t};return t.map(function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);Object.keys(o).filter(function(t){return o[t]&&t.toLowerCase().includes("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function C(t,e,n){return k.apply(this,arguments)}function k(){return(k=Object(r.a)(regeneratorRuntime.mark(function t(e,n,r){var o,c,d,f,h=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!m.nuxt.err||n.path!==e.path,this._queryChanged=JSON.stringify(e.query)!==JSON.stringify(n.query),this._diffQuery=this._queryChanged?Object(l.g)(e.query,n.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),t.prev=4,t.next=7,Object(l.n)(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return h._diffQuery[t]})})&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),r(),t.next=23;break;case 12:if(t.prev=12,t.t0=t.catch(4),c=t.t0||{},d=c.statusCode||c.status||c.response&&c.response.status||500,f=c.message||"",!/^Loading( CSS)? chunk (\d)+ failed\./.test(f)){t.next=20;break}return window.location.reload(!0),t.abrupt("return");case 20:this.error({statusCode:d,message:f}),this.$nuxt.$emit("routeChanged",e,n,c),r();case 23:case"end":return t.stop()}},t,this,[[4,12]])}))).apply(this,arguments)}function O(t,e){return y.serverRendered&&e&&Object(l.a)(t,e),t._Ctor=t,t}function $(t){var path=Object(l.d)(t.options.base,t.options.mode);return Object(l.c)(t.match(path),function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e,n,r,o,c){var d;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return d=O(Object(l.o)(e),y.data?y.data[c]:null),r.components[o]=d,t.abrupt("return",d);case 7:case"end":return t.stop()}},t)}));return function(e,n,r,o,c){return t.apply(this,arguments)}}())}function j(t,e,n){var r=this,o=[],c=!1;if(void 0!==n&&(o=[],(n=Object(l.o)(n)).options.middleware&&(o=o.concat(n.options.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof d.a[t]&&(c=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),d.a[t])}),!c)return Object(l.k)(o,e)}function T(t,e,n){return R.apply(this,arguments)}function R(){return(R=Object(r.a)(regeneratorRuntime.mark(function t(e,n,r){var o,c,d,h,v,y,w,C,k,O,$,T,R,E,S,A,N=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return e===n?x=[]:(o=[],x=Object(l.e)(n,o).map(function(t,i){return Object(l.b)(n.matched[o[i]].path)(n.params)})),c=!1,d=function(path){n.path===path.path&&N.$loading.finish&&N.$loading.finish(),n.path!==path.path&&N.$loading.pause&&N.$loading.pause(),c||(c=!0,r(path))},t.next=7,Object(l.p)(m,{route:e,from:n,next:d.bind(this)});case 7:if(this._dateLastError=m.nuxt.dateErr,this._hadError=!!m.nuxt.err,h=[],(v=Object(l.e)(e,h)).length){t.next=25;break}return t.next=14,j.call(this,v,m.context);case 14:if(!c){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof f.a.layout?f.a.layout(m.context):f.a.layout);case 18:return y=t.sent,t.next=21,j.call(this,v,m.context,y);case 21:if(!c){t.next=23;break}return t.abrupt("return");case 23:return m.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 25:return v.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(_(v,e,n)),t.prev=27,t.next=30,j.call(this,v,m.context);case 30:if(!c){t.next=32;break}return t.abrupt("return");case 32:if(!m.context._errored){t.next=34;break}return t.abrupt("return",r());case 34:return"function"==typeof(w=v[0].options.layout)&&(w=w(m.context)),t.next=38,this.loadLayout(w);case 38:return w=t.sent,t.next=41,j.call(this,v,m.context,w);case 41:if(!c){t.next=43;break}return t.abrupt("return");case 43:if(!m.context._errored){t.next=45;break}return t.abrupt("return",r());case 45:C=!0,t.prev=46,k=!0,O=!1,$=void 0,t.prev=50,T=v[Symbol.iterator]();case 52:if(k=(R=T.next()).done){t.next=64;break}if("function"==typeof(E=R.value).options.validate){t.next=56;break}return t.abrupt("continue",61);case 56:return t.next=58,E.options.validate(m.context);case 58:if(C=t.sent){t.next=61;break}return t.abrupt("break",64);case 61:k=!0,t.next=52;break;case 64:t.next=70;break;case 66:t.prev=66,t.t0=t.catch(50),O=!0,$=t.t0;case 70:t.prev=70,t.prev=71,k||null==T.return||T.return();case 73:if(t.prev=73,!O){t.next=76;break}throw $;case 76:return t.finish(73);case 77:return t.finish(70);case 78:t.next=84;break;case 80:return t.prev=80,t.t1=t.catch(46),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",r());case 84:if(C){t.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 87:return t.next=89,Promise.all(v.map(function(t,i){if(t._path=Object(l.b)(e.matched[h[i]].path)(e.params),t._dataRefresh=!1,N._pathChanged&&N._queryChanged||t._path!==x[i])t._dataRefresh=!0;else if(!N._pathChanged&&N._queryChanged){var n=t.options.watchQuery;!0===n?t._dataRefresh=!0:Array.isArray(n)&&(t._dataRefresh=n.some(function(t){return N._diffQuery[t]}))}if(!N._hadError&&N._isMounted&&!t._dataRefresh)return Promise.resolve();var r=[],o=t.options.asyncData&&"function"==typeof t.options.asyncData,c=!!t.options.fetch,d=o&&c?30:45;if(o){var f=Object(l.m)(t.options.asyncData,m.context).then(function(e){Object(l.a)(t,e),N.$loading.increase&&N.$loading.increase(d)});r.push(f)}if(N.$loading.manual=!1===t.options.loading,c){var p=t.options.fetch(m.context);p&&(p instanceof Promise||"function"==typeof p.then)||(p=Promise.resolve(p)),p.then(function(t){N.$loading.increase&&N.$loading.increase(d)}),r.push(p)}return Promise.all(r)}));case 89:c||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),r()),t.next=106;break;case 92:if(t.prev=92,t.t2=t.catch(27),"ERR_REDIRECT"!==(S=t.t2||{}).message){t.next=97;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",e,n,S));case 97:return x=[],Object(l.i)(S),"function"==typeof(A=f.a.layout)&&(A=A(m.context)),t.next=103,this.loadLayout(A);case 103:this.error(S),this.$nuxt.$emit("routeChanged",e,n,S),r();case 106:case"end":return t.stop()}},t,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])}))).apply(this,arguments)}function E(t,n){Object(l.c)(t,function(t,n,r,c){return"object"!==Object(e.a)(t)||t.options||((t=o.default.extend(t))._Ctor=t,r.components[c]=t),t})}function S(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?f.a.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(m.context)),this.setLayout(e)}function A(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||o.default.nextTick(function(){var e=[],r=Object(l.f)(t,e),c=Object(l.e)(t,e);r.forEach(function(t,i){if(t&&t.constructor._dataRefresh&&c[i]===t.constructor&&!0!==t.$vnode.data.keepAlive&&"function"==typeof t.constructor.options.data){var e=t.constructor.options.data.call(t);for(var n in e)o.default.set(t.$data,n,e[n])}}),S.call(n,t)})}function N(t){window.onNuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),v.afterEach(function(e,n){o.default.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}function P(){return(P=Object(r.a)(regeneratorRuntime.mark(function t(e){var n,r,c,d,f;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return m=e.app,v=e.router,e.store,t.next=5,Promise.all($(v));case 5:return n=t.sent,r=new o.default(m),c=y.layout||"default",t.next=10,r.loadLayout(c);case 10:if(r.setLayout(c),d=function(){r.$mount("#__nuxt"),v.afterEach(E),v.afterEach(A.bind(r)),o.default.nextTick(function(){N(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(_(n,v.currentRoute)),x=v.currentRoute.matched.map(function(t){return Object(l.b)(t.path)(v.currentRoute.params)})),r.$loading={},y.error&&r.error(y.error),v.beforeEach(C.bind(r)),v.beforeEach(T.bind(r)),!y.serverRendered){t.next=21;break}return d(),t.abrupt("return");case 21:f=function(){E(v.currentRoute,v.currentRoute),S.call(r,v.currentRoute),d()},T.call(r,v.currentRoute,v.currentRoute,function(path){if(path){var t=v.afterEach(function(e,n){t(),f()});v.push(path,void 0,function(t){t&&w(t)})}else f()});case 23:case"end":return t.stop()}},t)}))).apply(this,arguments)}Object(f.b)().then(function(t){return P.apply(this,arguments)}).catch(function(t){var e=new Error(t);e.message="[nuxt] Error while mounting app: "+e.message,w(e)})}.call(this,n(36))},194:function(t,e,n){"use strict";var r=n(75);n.n(r).a},195:function(t,e,n){(t.exports=n(45)(!1)).push([t.i,".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""])},196:function(t,e,n){"use strict";var r=n(76);n.n(r).a},197:function(t,e,n){(t.exports=n(45)(!1)).push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#3b8070;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}",""])},202:function(t,e,n){"use strict";var r=n(77);n.n(r).a},203:function(t,e,n){(t.exports=n(45)(!1)).push([t.i,"html{font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}",""])},204:function(t,e,n){"use strict";n.r(e),n.d(e,"state",function(){return r}),n.d(e,"mutations",function(){return o}),n.d(e,"actions",function(){return c});var r=function(){return{activeCategory:1,activeTODO:0,isAddingTask:0,isAddingCategory:0,todoData:[]}},o={setTodoStatusFromStore:function(t,e){t.todoData[e.category_id].todos[e.todo_id].is_completed=!t.todoData[e.category_id].todos[e.todo_id].is_completed},setAcrtiveCategoryFromStore:function(t,e){t.activeCategory=e},setAcrtiveTaskFromStore:function(t,e){t.activeTODO=e},toggleTaskAddingMode:function(t){t.isAddingTask=!t.isAddingTask},toggleCategoryAddingMode:function(t){t.isAddingCategory=!t.isAddingCategory},addTodo:function(t,e){t.todoData[e.category].todos.push(e)},addCategory:function(t,e){e.category_id=t.todoData.length+1,t.todoData.push(e)},addComment:function(t,e){t.todoData[t.activeCategory-1].todos[t.activeTODO].comments.push(e)}},c={toggleTaskStatus:function(t,e){t.commit("setTodoStatusFromStore",e)},setActiveCategory:function(t,e){t.commit("setAcrtiveCategoryFromStore",e)},setActiveTask:function(t,e){t.commit("setAcrtiveTaskFromStore",e)},toggleTaskForm:function(t){t.commit("toggleTaskAddingMode")},toggleCategoryForm:function(t){t.commit("toggleCategoryAddingMode")},addTask:function(t,e){t.commit("addTodo",e)},addCategory:function(t,e){t.commit("addCategory",e)},addComment:function(t,e){t.commit("addComment",e)}}},4:function(t,e,n){"use strict";n.d(e,"i",function(){return f}),n.d(e,"j",function(){return h}),n.d(e,"a",function(){return m}),n.d(e,"o",function(){return v}),n.d(e,"e",function(){return x}),n.d(e,"f",function(){return y}),n.d(e,"c",function(){return w}),n.d(e,"n",function(){return _}),n.d(e,"h",function(){return C}),n.d(e,"p",function(){return O}),n.d(e,"k",function(){return j}),n.d(e,"m",function(){return T}),n.d(e,"d",function(){return R}),n.d(e,"b",function(){return E}),n.d(e,"g",function(){return S}),n.d(e,"l",function(){return A});var r=n(161),o=(n(21),n(187),n(188),n(22)),c=(n(26),n(27),n(52),n(137),n(13),n(90),n(23)),d=(n(57),n(44),n(9),n(95),n(11),n(0)),l=n(3);function f(t){l.default.config.errorHandler&&l.default.config.errorHandler(t)}function h(t){return t.then(function(t){return t.default||t})}function m(t,e){if(e||!t.options.__hasNuxtData){var n=t.options._originDataFn||t.options.data||function(){return{}};t.options._originDataFn=n,t.options.data=function(){var data=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),Object(d.a)({},data,e)},t.options.__hasNuxtData=!0,t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)}}function v(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=l.default.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function x(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function y(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))}function w(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).reduce(function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r},[])}))}function _(t){return Promise.all(w(t,function(){var t=Object(c.a)(regeneratorRuntime.mark(function t(e,n,r,o){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return r.components[o]=v(e),t.abrupt("return",r.components[o]);case 6:case"end":return t.stop()}},t)}));return function(e,n,r,o){return t.apply(this,arguments)}}()))}function C(t){return k.apply(this,arguments)}function k(){return(k=Object(c.a)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,_(e);case 4:return t.abrupt("return",Object(d.a)({},e,{meta:x(e).map(function(t,n){return Object(d.a)({},t.options.meta,(e.matched[n]||{}).meta)})}));case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}function O(t,e){return $.apply(this,arguments)}function $(){return($=Object(c.a)(regeneratorRuntime.mark(function t(e,n){var c,d,l,f;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,store:e.store,payload:n.payload,error:n.error,base:"/lightTODO/",env:{}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),n.ssrContext&&(e.context.ssrContext=n.ssrContext),e.context.redirect=function(t,path,n){if(t){e.context._redirected=!0;var r=Object(o.a)(path);if("number"==typeof t||"undefined"!==r&&"object"!==r||(n=path||{},path=t,r=Object(o.a)(path),t=302),"object"===r&&(path=e.router.resolve(path).route.fullPath),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))throw path=M(path,n),window.location.replace(path),new Error("ERR_REDIRECT");e.context.next({path:path,query:n,status:t})}},e.context.nuxtState=window.__NUXT__),t.next=3,Promise.all([C(n.route),C(n.from)]);case 3:c=t.sent,d=Object(r.a)(c,2),l=d[0],f=d[1],n.route&&(e.context.route=l),n.from&&(e.context.from=f),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{};case 15:case"end":return t.stop()}},t)}))).apply(this,arguments)}function j(t,e){return!t.length||e._redirected||e._errored?Promise.resolve():T(t[0],e).then(function(){return j(t.slice(1),e)})}function T(t,e){var n;return(n=2===t.length?new Promise(function(n){t(e,function(t,data){t&&e.error(t),n(data=data||{})})}):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function R(base,t){var path=decodeURI(window.location.pathname);return"hash"===t?window.location.hash.replace(/^#\//,""):(base&&0===path.indexOf(base)&&(path=path.slice(base.length)),(path||"/")+window.location.search+window.location.hash)}function E(t,e){return function(t){for(var e=new Array(t.length),i=0;i<t.length;i++)"object"===Object(o.a)(t[i])&&(e[i]=new RegExp("^(?:"+t[i].pattern+")$"));return function(n,r){for(var path="",data=n||{},o=r||{},c=o.pretty?P:encodeURIComponent,d=0;d<t.length;d++){var l=t[d];if("string"!=typeof l){var f=data[l.name||"pathMatch"],h=void 0;if(null==f){if(l.optional){l.partial&&(path+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(Array.isArray(f)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(0===f.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var m=0;m<f.length;m++){if(h=c(f[m]),!e[d].test(h))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(h)+"`");path+=(0===m?l.prefix:l.delimiter)+h}}else{if(h=l.asterisk?encodeURI(f).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):c(f),!e[d].test(h))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+h+'"');path+=l.prefix+h}}else path+=l}return path}}(function(t,e){var n,r=[],o=0,c=0,path="",d=e&&e.delimiter||"/";for(;null!=(n=N.exec(t));){var l=n[0],f=n[1],h=n.index;if(path+=t.slice(c,h),c=h+l.length,f)path+=f[1];else{var m=t[c],v=n[2],x=n[3],y=n[4],w=n[5],_=n[6],C=n[7];path&&(r.push(path),path="");var k=null!=v&&null!=m&&m!==v,O="+"===_||"*"===_,$="?"===_||"*"===_,j=n[2]||d,pattern=y||w;r.push({name:x||o++,prefix:v||"",delimiter:j,optional:$,repeat:O,partial:k,asterisk:!!C,pattern:pattern?L(pattern):C?".*":"[^"+D(j)+"]+?"})}}c<t.length&&(path+=t.substr(c));path&&r.push(path);return r}(t,e))}function S(t,e){var n={},r=Object(d.a)({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}function A(t){var e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e="[".concat(t.constructor.name,"]")}return Object(d.a)({},t,{message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500})}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var N=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function P(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function D(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function L(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function M(t,e){var n,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):t.startsWith("//")&&(t=t.substring(2));var o,c=t.split("/"),d=(n?n+"://":"//")+c.shift(),path=c.filter(Boolean).join("/");return 2===(c=path.split("#")).length&&(path=c[0],o=c[1]),d+=path?"/"+path:"",e&&"{}"!==JSON.stringify(e)&&(d+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),d+=o?"#"+o:""}},41:function(t,e,n){"use strict";n(9);var r=n(0),o=(n(90),n(23)),c=(n(11),n(3)),d=n(154),l=n.n(d),f=n(112),h=n(4),m=function(){return Object(h.j)(Promise.all([n.e(5),n.e(2)]).then(n.bind(null,384)))};c.default.use(f.a),"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual",window.addEventListener("beforeunload",function(){window.history.scrollRestoration="auto"}),window.addEventListener("load",function(){window.history.scrollRestoration="manual"}));var v=function(t,e,n){var r=!1;return t.matched.length<2&&t.matched.every(function(t){return!1!==t.components.default.options.scrollToTop})?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new Promise(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})};var x=n(155),y=n.n(x),w=Object(r.a)({},y.a,{name:"NoSsr"}),_={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render:function(t,e){var n=e.parent,data=e.data,r=e.props;data.nuxtChild=!0;for(var o=n,c=n.$nuxt.nuxt.transitions,d=n.$nuxt.nuxt.defaultTransition,l=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&l++,n=n.$parent;data.nuxtChildDepth=l;var f=c[l]||d,h={};C.forEach(function(t){void 0!==f[t]&&(h[t]=f[t])});var m={};k.forEach(function(t){"function"==typeof f[t]&&(m[t]=f[t].bind(o))});var v=m.beforeEnter;m.beforeEnter=function(t){if(window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")}),v)return v.call(o,t)};var x=[t("router-view",data)];return r.keepAlive&&(x=[t("keep-alive",{props:r.keepAliveProps},x)]),t("transition",{props:h,on:m},x)}},C=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],k=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],O={name:"NuxtError",props:{error:{type:Object,default:null}},head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}},$=(n(194),n(29)),j=Object($.a)(O,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?n("p",{staticClass:"description"},[n("NuxtLink",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null).exports,T=(n(87),n(62),n(44),{name:"Nuxt",components:{NuxtChild:_,NuxtError:j},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||Object(h.b)(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;if(t&&t.options){var e=t.options,n=e.key,r=e.watchQuery;if(n)return"function"==typeof n?n(this.$route):n;if(r){if(r.length){var o={},c=!0,d=!1,l=void 0;try{for(var f,m=r[Symbol.iterator]();!(c=(f=m.next()).done);c=!0){var v=f.value;o[v]=this.$route.query[v]}}catch(t){d=!0,l=t}finally{try{c||null==m.return||m.return()}finally{if(d)throw l}}return this.$router.resolve({path:this.$route.path,query:o}).href}return this.$route.fullPath}}return this.$route.path}},beforeCreate:function(){c.default.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render:function(t){return this.nuxt.err?t("NuxtError",{props:{error:this.nuxt.err}}):t("NuxtChild",{key:this.routerViewKey,props:this.$props})}}),R={name:"NuxtLoading",data:function(){return{percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}},computed:{left:function(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy:function(){this.clear()},methods:{clear:function(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start:function(){var t=this;return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(function(){return t.startTimer()},this.throttle):this.startTimer(),this},set:function(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get:function(){return this.percent},increase:function(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease:function(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause:function(){return clearInterval(this._timer),this},resume:function(){return this.startTimer(),this},finish:function(){return this.percent=this.reversed?0:100,this.hide(),this},hide:function(){var t=this;return this.clear(),setTimeout(function(){t.show=!1,t.$nextTick(function(){t.percent=0,t.reversed=!1})},500),this},fail:function(){return this.canSucceed=!1,this},startTimer:function(){var t=this;this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(function(){t.skipTimerCount>0?t.skipTimerCount--:(t.reversed?t.decrease(t._cut):t.increase(t._cut),t.continuous&&(t.percent>=100?(t.skipTimerCount=1,t.reversed=!t.reversed):t.percent<=0&&(t.skipTimerCount=1,t.reversed=!t.reversed)))},100)}},render:function(t){var e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}},E=(n(196),Object($.a)(R,void 0,void 0,!1,null,null,null).exports),S=(n(198),n(200),n(202),{_default:Object($.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nuxt")],1)},[],!1,null,null,null).exports}),A={head:{title:"light_todo",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"light todo app made with nuxt.js"}],link:[{rel:"icon",type:"image/x-icon",href:"/lightTODO/favicon.ico"},{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.6.1/css/all.css"}],style:[],script:[]},render:function(t,e){var n=t("NuxtLoading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),c=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter:function(t){window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")})}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,c])},data:function(){return{isOnline:!0,layout:null,layoutName:""}},beforeCreate:function(){c.default.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){c.default.prototype.$nuxt=this,window.$nuxt=this,this.refreshOnlineStatus(),window.addEventListener("online",this.refreshOnlineStatus),window.addEventListener("offline",this.refreshOnlineStatus),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},computed:{isOffline:function(){return!this.isOnline}},methods:{refreshOnlineStatus:function(){void 0===window.navigator.onLine?this.isOnline=!0:this.isOnline=window.navigator.onLine},errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&S["_"+t]||(t="default"),this.layoutName=t,this.layout=S["_"+t],this.layout},loadLayout:function(t){return t&&S["_"+t]||(t="default"),Promise.resolve(S["_"+t])}},components:{NuxtLoading:E}},N=(n(93),n(21),n(13),n(110));c.default.use(N.a);var P=console,D=["state","getters","actions","mutations"],L={};L.modules=L.modules||{},function(t,e){t=t.default||t;var n=e.replace(/\.(js|mjs|ts)$/,"").split("/"),r=n[n.length-1],o="store/".concat(e);if(t="state"===r?function(t,e){if("function"!=typeof t){P.warn("".concat(e," should export a method that returns an object"));var n=Object.assign({},t);return function(){return n}}return z(t,e)}(t,o):z(t,o),D.includes(r)){var c=r,d=F(L,n,{isProperty:!0});I(d,t,c)}else{"index"===r&&(n.pop(),r=n[n.length-1]);for(var l=F(L,n),f=0,h=D;f<h.length;f++){var m=h[f];I(l,t[m],m)}!1===t.namespaced&&delete l.namespaced}}(n(204),"todos.js");var M=L instanceof Function?L:function(){return new N.a.Store(Object.assign({strict:!1},L))};function z(t,e){if(t.state&&"function"!=typeof t.state){P.warn("'state' should be a method that returns an object in ".concat(e));var n=Object.assign({},t.state);t=Object.assign({},t,{state:function(){return n}})}return t}function F(t,e){var n=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).isProperty,r=void 0!==n&&n;if(!e.length||r&&1===e.length)return t;var o=e.shift();return t.modules[o]=t.modules[o]||{},t.modules[o].namespaced=!0,t.modules[o].modules=t.modules[o].modules||{},F(t.modules[o],e,{isProperty:r})}function I(t,e,n){e&&("state"===n?t.state=e||t.state:t[n]=Object.assign({},t[n],e))}var U=n(160);c.default.use(U.a,{});var B=n(162),H=function(t){var e=t.store;t.isHMR||window.onNuxtReady(function(t){Object(B.a)()(e)})},J={name:"addToggleButton",props:["size","color","target"],methods:{toggleForm:function(){this.$store.dispatch("todos/"+this.target)}}},K=Object($.a)(J,function(){var t=this.$createElement;return(this._self._c||t)("i",{staticClass:"fas fa-plus float-right",style:{fontSize:this.size+"em",color:this.color},on:{click:this.toggleForm}})},[],!1,null,null,null).exports;c.default.mixin({components:{AddToggleButton:K}}),n.d(e,"b",function(){return X}),n.d(e,"a",function(){return j}),c.default.component(w.name,w),c.default.component(_.name,_),c.default.component("NChild",_),c.default.component(T.name,T),c.default.use(l.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var Q={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function X(t){return V.apply(this,arguments)}function V(){return(V=Object(o.a)(regeneratorRuntime.mark(function t(e){var n,o,d,l,x,y,path,w;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new f.a({mode:"history",base:decodeURI("/lightTODO/"),linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:v,routes:[{path:"/",component:m,name:"index"}],fallback:!1});case 2:return n=t.sent,(o=M(e)).$router=n,d=o.registerModule,o.registerModule=function(path,t,e){return d.call(o,path,t,Object.assign({preserveState:!0},e))},l=Object(r.a)({router:n,store:o,nuxt:{defaultTransition:Q,transitions:[Q],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?Object.assign({},Q,{name:t}):Object.assign({},Q,t):Q}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,l.context._errored=!!t,t=t?Object(h.l)(t):null;var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},A),o.app=l,x=e?e.next:function(t){return l.router.push(t)},e?y=n.resolve(e.url).route:(path=Object(h.d)(n.options.base),y=n.resolve(path).route),t.next=13,Object(h.p)(l,{route:y,next:x,error:l.nuxt.error.bind(l),store:o,payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0,ssrContext:e});case 13:w=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error("inject(key, value) has no value provided");l[t="$"+t]=e,o[t]=l[t];var n="__nuxt_"+t+"_installed__";c.default[n]||(c.default[n]=!0,c.default.use(function(){c.default.prototype.hasOwnProperty(t)||Object.defineProperty(c.default.prototype,t,{get:function(){return this.$root.$options[t]}})}))},window.__NUXT__&&window.__NUXT__.state&&o.replaceState(window.__NUXT__.state),t.next=18;break;case 18:if("function"!=typeof H){t.next=21;break}return t.next=21,H(l.context,w);case 21:t.next=24;break;case 24:t.next=27;break;case 27:return t.abrupt("return",{app:l,store:o,router:n});case 28:case"end":return t.stop()}},t)}))).apply(this,arguments)}},75:function(t,e,n){var content=n(195);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("b675d82e",content,!0,{sourceMap:!1})},76:function(t,e,n){var content=n(197);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("17cfdfa9",content,!0,{sourceMap:!1})},77:function(t,e,n){var content=n(203);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("aab9a468",content,!0,{sourceMap:!1})},81:function(t,e,n){"use strict";n(87),n(62),n(44),n(93),n(124);var r=n(3),o=window.requestIdleCallback||function(t){var e=Date.now();return setTimeout(function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})},1)},c=window.IntersectionObserver&&new window.IntersectionObserver(function(t){t.forEach(function(t){var e=t.intersectionRatio,link=t.target;e<=0||link.__prefetch()})});e.a={name:"NuxtLink",extends:r.default.component("RouterLink"),props:{noPrefetch:{type:Boolean,default:!1}},mounted:function(){this.noPrefetch||o(this.observe,{timeout:2e3})},beforeDestroy:function(){this.__observed&&(c.unobserve(this.$el),delete this.$el.__prefetch)},methods:{observe:function(){c&&this.shouldPrefetch()&&(this.$el.__prefetch=this.prefetch.bind(this),c.observe(this.$el),this.__observed=!0)},shouldPrefetch:function(){return this.getPrefetchComponents().length>0},canPrefetch:function(){var t=navigator.connection;return!(this.$nuxt.isOffline||t&&((t.effectiveType||"").includes("2g")||t.saveData))},getPrefetchComponents:function(){return this.$router.resolve(this.to,this.$route,this.append).resolved.matched.map(function(t){return t.components.default}).filter(function(t){return"function"==typeof t&&!t.options&&!t.__prefetched})},prefetch:function(){if(this.canPrefetch()){c.unobserve(this.$el);var t=this.getPrefetchComponents(),e=!0,n=!1,r=void 0;try{for(var o,d=t[Symbol.iterator]();!(e=(o=d.next()).done);e=!0){var l=o.value;l().catch(function(){}),l.__prefetched=!0}}catch(t){n=!0,r=t}finally{try{e||null==d.return||d.return()}finally{if(n)throw r}}}}}}}},[[166,3,1,4]]]);