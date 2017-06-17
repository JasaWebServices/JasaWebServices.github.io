!function(){window.__&&console.error("Another instance of lean detected")}();var __={env:{},load:function(e){var t=__.onReady(e);if(__.env.supportNative)document.addEventListener("deviceready",t,!1),__.env.loaded||__.dom.link("cordova.js","js");else{if("complete"===document.readyState)return t();window.addEventListener("load",t,!1)}__.env.loaded=1},onReady:function(e){return function(t){return 2===__.env.loaded?t():(e.push(t),function(){for(var t,n=0;t=e[n];n++)t();__.env.loaded=2,e.length=0})}}([]),dummyCB:function(){},dotchain:function e(t,n){if(!n||!n.length)return t;var o=t[n.shift()];return o?e(o,n):0},querystring:function(e){return Object.keys(e).reduce(function(t,n){return t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n])),t},[]).join("&")},ajax:function(e,t,n,o,r,i){if(r=r||function(e){e&&console.error(e)},!t)return r("url not defined");n=n||{},o=o||{};var a=new XMLHttpRequest,u="POST"===(e=e.toUpperCase()),c=n.charAt?1:n instanceof FormData?3:2;if(t=encodeURI(t),u)2===c&&(n=JSON.stringify(n));else if(t+=(-1===t.indexOf("?")?"?":"&")+"appVer="+__.env.appVer||0,n){switch(t+="&",c){case 1:t+=encodeURIComponent(n);break;case 2:t+=__.querystring(n);break;case 3:return r("FormData with GET method is not supported yet")}n=null}a.open(e,t,!o.sync,o.un,o.passwd),a.timeout=o.timeout||0,a.responseType=o.responseType||"",a.onreadystatechange=function(){if(1<a.readyState){var t,u=a.status;return u>=300&&u<400&&(t=a.getResponseHeader("location"))?__.ajax(e,t,n,o,r,i):(a.onerror=void 0,r(300>u||!u?null:{error:a.statusText,code:a.status},a.readyState,a.response,i))}},a.ontimeout=a.onerror=function(e){r({error:a.statusText,code:a.status,src:e,params:arguments},a.readyState,null,i)};var s="Content-Type",d=o.headers;if(u&&!d[s]&&n)switch(c){case 1:case 2:a.setRequestHeader(s,"text/plain");break;case 3:a.setRequestHeader(s,"multipart/form-data")}for(var l in d)a.setRequestHeader(l,d[l]);return a.send(n),a},createEvent:function(e,t,n,o){var r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n||!1,o||!1,t),r},detectEvent:function(e,t){var n=document.createElement(t||"div"),o=(e="on"+e)in n||e in window;return o||(n.setAttribute(e,""),o="function"==typeof n[e],n[e]=void 0,n.removeAttribute(e)),n=void 0,o}};!function(){var e=__.env,t=document.querySelector("meta[name=app-version]"),n="transitionend",o="webkitTransitionEnd";e.transitionEnd=__.detectEvent(n)?n:__.detectEvent(o.toLowerCase())?o:void 0,e.supportPassive=!1;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){e.supportPassive=!0}}))}catch(e){}if(e.appVer=t?t.getAttribute("content"):"0",e.loaded=0,e.supportNative=!1,-1===document.URL.indexOf("http://")&&-1===document.URL.indexOf("https://")){var r=document.querySelector("meta[name=app-support-native]");e.supportNative=!!r&&"1"===r.getAttribute("content")}}(),function(){function e(){__.device=__.dotchain(window,["device"])||function(e,t){for(var n,o,r=e.userAgent,i="",a=0;n=t[a];a++)if(~(o=r.indexOf(n))){i=r.substr(o+n.length+1).split(/[ ;]+/,1)[0];break}return{model:n||"",version:i,platform:"web",manufacturer:e.vendor||"",cordova:0,uuid:Math.random().toString(36).substr(2)+Date.now().toString(36),isVirtual:!1,serial:""}}(navigator,["Trident","Edge","Chromium","Chrome","Safari","Firefox","OPR","Opera"])}__.onReady(e)}(),function(){function e(){var e=__.dotchain(window,["navigator","notification"]);__.dialogs=e?{alert:function(t,n,o,r){e.alert(t,r||__.dummyCB,n,o)},confirm:function(t,n,o,r){e.confirm(t,r,n,o)},prompt:function(t,n,o,r,i){e.prompt(t,i,n,o,r)},beep:function(t){e.beep(t)}}:{alert:function(e,t,n,o){setTimeout(function(){alert(e),(o||__.dummyCB)()},0)},confirm:function(e,t,n,o){setTimeout(function(){o(confirm(e)?1:2)},0)},prompt:function(e,t,n,o,r){setTimeout(function(){var t=prompt(e,o);r({buttonIndex:t?1:2,input1:t})},0)},beep:function(){console.log("beep")}}}__.onReady(e)}(),function(){var e=document.head||document.getElementsByTagName("head")[0],t=["el","tagName","id","className","content"],n=function(e){if(e){if(e instanceof HTMLElement)return e;var t=e.el;return t?t.charAt&&(t=document.querySelector(t)):t=document.createElement(e.tagName||"div"),setId(t,e.id),setClasses(t.classList,e.className),setAttributes(t,e),setContent(t,e.content),t}},o=function(e,t,r){r>=t.length||(e.appendChild(n(t[r++])),o(e,t,r))};setId=function(e,t){t&&(e.id=t)},setClasses=function(e,t){t&&t.length&&e.add.apply(e,Array.isArray(t)?t:t.split(" "))},setAttributes=function(e,n){if(n)for(var o,r,i=0,a=Object.keys(n);o=a[i];i++)~t.indexOf(o)||null!=(r=n[o])&&e.setAttribute(o,r)},setContent=function(e,t){null!=t&&(t.charAt?e.innerHTML=t:o(e,t,0))},__.dom={link:function(t,n,o){var r;switch(n){case"js":return(r=document.createElement("script")).setAttribute("src",t),r.onload=o,r.onerror=o,void e.insertBefore(r,e.lastChild);case"css":return(r=document.createElement("link")).setAttribute("rel","stylesheet"),r.setAttribute("href",t),e.insertBefore(r,e.lastChild),setTimeout(o,0);default:return o()}},unlink:function(e,t){var n,o;switch(t){case"js":o=document.getElementsByTagName("script"),n="src";break;case"css":o=document.getElementsByTagName("link"),n="href";break;default:return}for(var r,a;r=o[i];i--)(a=r.getAttribute(n))&&~a.indexOf(e)&&r.parentNode.removeChild(r)},setId:setId,setClasses:setClasses,setAttributes:setAttributes,setContent:setContent,get:n,style:function(t,n){if(n&&n.length){var o=e.querySelector("#"+t);if(o)return o.dataset.rc=1+parseInt(o.dataset.rc);(o=document.createElement("style")).id=t,o.dataset.rc=1,o.appendChild(document.createTextNode(n)),e.appendChild(o)}},unstyle:function(t){var n=e.querySelector("#"+t);if(n){var o=n.dataset;o.rc=parseInt(o.rc-1),0==o.rc&&n.parentNode.removeChild(n)}}}}(),function(){if(!__.detectEvent("touchstart")){var e=!__.env.supportPassive||{capture:!0,passive:!0},t="mousedown",n="mouseup",o="mousemove",r="mouseout",i=function(e){var i;switch(e.type){case t:i="touchstart";break;case n:i="touchend";break;case o:i="touchmove";break;case r:i="touchcancel";break;default:return console.error("wrong event: "+e.type)}var a=e.target,u=[{pageX:e.pageX,pageY:e.pageY,target:a}],c=__.createEvent(i,null,e.bubbles,e.cancelable);c.pageX=e.pageX,c.pageY=e.pageY,c.touches=c.changedTouches=c.targetTouches=u,c.mouseToTouch=!0,a.dispatchEvent(c)},a=function(){document.removeEventListener(t,u),document.removeEventListener(o,c),document.removeEventListener(n,s),document.removeEventListener(r,d)},u=function(t){a(),document.addEventListener(o,c,e),document.addEventListener(n,s,e),document.addEventListener(r,d,e),i(t)},c=function(e){i(e)},s=function(n){a(),document.addEventListener(t,u,e),i(n)},d=function(n){a(),document.addEventListener(t,u,e),i(n)};document.addEventListener(t,u,e)}}(),function(){function e(){var e,t=__.dotchain(window,["sqlitePlugin"]),n=__.dotchain(window,["openDatabase"]),o=function(e){if(e)return console.error(e)},r={};t||n?(e=function(e){var n;(n=t?t.openDatabase({name:e,location:"default"}):openDatabase(e,"1.0","lean local storage emulator",52428800)).transaction(function(e){e.executeSql("CREATE TABLE IF NOT EXISTS kv (key TEXT UNIQUE NOT NULL, val TEXT);",null,null,function(e,t){console.error(t)})}),this.db=n}).prototype={key:function(e,t){this.db.readTransaction(function(n){n.executeSql("SELECT key FROM KV order by oid ASC;",null,function(n,o){var r=o.rows;if(r.length<=e)return t();t(null,r[e].key)},function(e,n){t(n)})})},getItem:function(e,t){this.db.readTransaction(function(n){n.executeSql("SELECT val FROM kv WHERE key=?;",[e],function(e,n){if(!n.rows.length)return t();t(null,n.rows[0].val)},function(e,n){t(n)})})},setItem:function(e,t,n){n=n||o,this.db.transaction(function(o){o.executeSql("INSERT OR REPLACE INTO kv (oid,key,val) VALUES ((SELECT oid FROM kv WHERE key=?), ?, ?);",[e,e,t],function(e,t){n(null,t.insertId)},function(e,t){n(t)})})},removeItem:function(e,t){t=t||o,this.db.transaction(function(n){n.executeSql("DELETE FROM kv WHERE key=?;",[e],function(e,n){t()},function(e,n){t(n)})})},clear:function(e){e=e||o,this.db.transaction(function(t){t.executeSql("DELETE FROM kv;",null,function(t,n){e()},function(t,n){e(n)})})},length:function(e){this.db.readTransaction(function(t){t.executeSql("SELECT count(*) AS len FROM KV;",null,function(t,n){e(null,n.rows[0].len)},function(t,n){e(n)})})}}:(e=function(e){this.prefix=e+"_",this.db=window.localStorage}).prototype={key:function(e,t){t(null,this.db.key(e))},getItem:function(e,t){t(null,this.db.getItem(this.prefix+e))},setItem:function(e,t,n){n=n||o;try{n(null,this.db.setItem(this.prefix+e,t))}catch(e){n(e)}},removeItem:function(e,t){(t=t||o)(null,this.db.removeItem(this.prefix+e))},clear:function(e){(e=e||o)(null,this.db.clear())},length:function(e){e(null,this.db.length)}},__.store=function(t){return t=t||"localstorage",r[t]=r[t]||new e(t)}}__.onReady(e)}(),function(){var e,t,n=!__.env.supportPassive||{capture:!0,passive:!0},o=!1,r=0,i=0,a=function(e){return[e.pageX,e.pageY]},u=function(e){o||(o=!0,e.target.dispatchEvent(__.createEvent("longTap",null,!0)))},c=function(n){o=!1,t=e=a(n.touches[0]),r=window.setTimeout(u,2e3,n)},s=function(e){if(window.clearTimeout(r),!o){var t=Date.now();t-i<300?(e.target.dispatchEvent(__.createEvent("taps",null,!0)),i=0):(e.target.dispatchEvent(__.createEvent("tap",null,!0)),i=t)}},d=function(n){var r=a(n.touches[0]);o?(r[0]>t[0]+9||r[1]>t[1]+9)&&n.target.dispatchEvent(__.createEvent("rub",[r[0]-t[0],r[1]-t[1]],!0)):(r[0]>e[0]+9||r[1]>e[1]+9)&&(o=!0),t=r},l=function(e){o=!0,window.clearTimeout(r)};document.addEventListener("touchstart",c,n),document.addEventListener("touchend",s,n),document.addEventListener("touchmove",d,n),document.addEventListener("touchcancel",l,n)}();
//# sourceMappingURL=bin/lean.min.js.map;
(function(e,r,t){var n,i,o=Date.now(),u=function(){},a=function(){arguments[arguments.length-1]()},s={run:u,inherit:u,reload:u,parse:u,define:u,import:u,export:u,env:u,ajax:u},c={},f={},l={},h={},p={},d=function(){return"undefined"==typeof requestAnimationFrame?function(e){return setTimeout(e,100)}:requestAnimationFrame}(),g=function(e){return e.substring(e.indexOf("{")+1,e.lastIndexOf("}"))},v=function(e){if(!e)return null;var r=e.lastIndexOf(".");return-1!==r&&-1===e.indexOf("/",r)?e.substr(r):null},y=function(e,r){if(!e.length)return r();m(e.shift(),function(t){if(t)return r(t);y(e,r)})},m=function(e,r){if(c[e])return r(null,c[e]);var t=e.indexOf("/"),i=~t?l[e.slice(0,t)]:0,o=i?e.slice(t+1):e;(i=i||l["~"]||"")instanceof Function?i(o,function(t,n){if(t)return r(t);c[e]=n,r(null,n)}):n("get",i+o+(v(e)?"":".js"),null,null,function(t,n,i){if(4===n)return t?r(t):void A(e,i,r)})},b=function(e){return Object.defineProperties(Function("return arguments.callee.__proto__.apply(this,arguments)"),{name:{value:e},i:{value:o}})},w=function(e){return"function"==typeof e&&o===e.i},k=function(e,r){return e&&e!==r?(w(e)&&(e.prototype=r.prototype),e.__proto__=r,e):r},S=function(e){return w(e)?e.__proto__:e},x=function(e,r){return e?O(e,this,r):this},O=function(e,r,t){var n=S(e),i=S(r),o=typeof n,u=typeof i;switch(o){case"function":var a=n,s=n.prototype;break;case"object":if(o===u)return n.__proto__=i,n;var a=function(){return i.apply(this,arguments)},s=n;break;default:return n}switch(Object.assign(a,i,S(t)),u){case"function":return(c=a.prototype=Object.assign(Object.create(i.prototype),s)).constructor=a,(n.__super__=i.prototype).constructor=i,a;case"object":var c=a.prototype=Object.assign(Object.create(i),s);return c.constructor=a,n.__super__=i,a;default:return n}},T=function(e,r){var t=c[e];return void 0===t?r?m(e,r):c[e]=b(e):(r&&setTimeout(r,0,null,t),t)},j=function(e,r,t,n){n=n||s;var i=e?'"use strict";\n'+r+(h.live?"":"//# sourceURL="+e):r,o=function(e){return c[e]||t.push(e),c[e]};try{var a=Function("exports","require","module","define","inherit","pico",i)}catch(r){return console.error(e,r.message)}return a.call({},{},o,{},u,o,n),a},D=function(e,r,t){var n=v(e)||".js",i=p[n];switch(i&&(r=i(e,r)),n){case".js":var o,u={exports:{}},a={},s=function(e){return o=T(e)},l=r.call(t?{}:a,u.exports,T,u,D,s,M)||u.exports;return o&&(l=O(l,o)),"function"==typeof l&&(l.extend=x),a.load&&a.load(l),a.update&&(f[e]=[a.update,l]),e?c[e]=k(c[e],l):l;case".json":try{return c[e]=JSON.parse(r)}catch(r){return console.error(e,r.message)}default:return c[e]=r}},A=function(e,r,t){if(t=t||u,c[e])return t(null,c[e]);if(".js"!==(v(e)||".js"))return t(null,D(e,r));var n=[],i=j(e,r,n);e&&(c[e]=b(e)),y(n,function(r){if(r)return t(r);t(null,D(e,i))})},E=function(e){d(E);for(var r,t=0,n=Object.keys(f);r=f[n[t]];t++)r[0](r[1],e)},M=e[r]={run:function(e,r){M.ajax=n=e.ajax||n,l=e.paths||l,h=e.env||h,p=e.preprocessors||p,i=e.importRule;var t;for(var o in c)(t=p[v(o)||".js"])&&(c[o]=t(o,c[o]));(e.onLoad||a)(function(){A(e.name||null,g(r.toString()),function(e,r){if(e)return console.error(e);r&&r(),d(E)})})},reload:function(e,r,t){"function"==typeof r&&(t=r),t=t||u;var n=function(r,n){if(r)return t(r);t(null,c[e]=k(c[e],n))};delete c[e],t===r?m(e,n):A(e,r,n)},parse:A,define:D,import:function(e){if(!Array.isArray(i)||-1!==i.indexOf(e))return t(e)},export:T,env:function(e){return h[e]}};D("pico/json",function(e,r,t,n,i,o){return{parse:function(e,r){return JSON.parse(e[0],function(t,n){switch(t[0]){case"$":if(r)return JSON.parse(e[n]);case"_":return e[n];default:return n}})},stringify:function(e,r){var t=[];return t.unshift(JSON.stringify(e,function(e,n){switch(e[0]){case"$":if(r)return t.push(JSON.stringify(n));case"_":return t.push(n);default:return n}})),t}}}),D("pico/obj",function(){var e=["object","function"];return{extend:function r(t,n,i){var o=e.indexOf(typeof t);if(-1===o)return n;var u=e.indexOf(typeof n);if(-1===u)return t;if(1===u&&u===o)return n.prototype=t,n;var a,s,c=(i=i||{}).tidy;if(1===u||void 0===n.length)for(a in n)void 0===(s=n[a])&&c||(t[a]=r(t[a],s,i));else if(i.mergeArr){var f,l,h={};for(f=0,l=t.length;f<l;f++)void 0===(s=t[f])&&c||(h[s]=s);for(f=0,l=n.length;f<l;f++)void 0===(s=n[f])&&c||(h[s]=s);t=[];for(a in h)t.push(h[a])}else t=n;return t},extends:function(e,r,t){for(var n,i=this.extend,o=0;n=r[o];o++)e=i(e,n,t);return e},parseInts:function(e,r){for(var t=0,n=e.length;t<n;t++)e[t]=parseInt(e[t],r);return e},pluck:function(e,r){var t=[];if(e.length){var n,i,o,u,a,s={};for(o=0,u=e.length;o<u;o++)(n=e[o])&&void 0!==(i=n[r])&&(s[i]=i);for(a in s)t.push(s[a])}return t},dotchain:function e(r,t,n){if(!t||!t.length)return r;var i=r[t.shift()];return i?e(i,t):n}}}),D("pico/str",function(){Math.ceil;var e=Math.random,r=function(e,r){var t=r[0];return"["+(t.getFunctionName()||t.getTypeName()+"."+t.getMethodName())+"@"+(t.isEval()?t.getEvalOrigin():t.getFileName())+":"+t.getLineNumber()+":"+t.getColumnNumber()+"]"},t=function(e){var r=e.search("[#:%]");switch(r){case-1:case 0:return e}return[e.substring(0,r),e.substr(r)]},n=function(e,r,i,o){var u=e.indexOf("/",r);if(-1===u)return i.push(t(e.substring(r))),o(null,i);i.push(t(e.substring(r,u))),n(e,u+1,i,o)},i=function(e,r,t){if(!e.length)return t(null,r);n(e.shift(),0,[],function(n,o){if(n)return t(n);r.push(o),i(e,r,t)})},o=function(e,r,t,n,i){switch(e[0]){default:return e===r;case"%":i[e.substr(1)]=parseFloat(r);break;case":":i[e.substr(1)]=r;break;case"#":i[e.substr(1)]=t.slice(n).join("/")}return!0},u=function(e,r,t){if(e.length<r.length)return!1;for(var n,i,u=0,a=r.length;u<a;u++)if(i=r[u],n=e[u],Array.isArray(i)){if(0!==n.indexOf(i[0]))return!1;if(!o(i[1],n.substr(i[0].length),e,u,t))return!1}else if(!o(i,n,e,u,t))return!1;return e.splice(0,a),!0};return{codec:function(e,r){for(var t,n=0,i="";t=r.charCodeAt(n);n++)i+=String.fromCharCode(t^e);return i},hash:function(e){for(var r,t=0,n=0;r=e.charCodeAt(t);t++)n=(n<<3)-n+r|0;return n},rand:function(){return e().toString(36).substr(2)},pad:function(e,r,t){return this.tab(e,r,t)+e},tab:function(e,r,t){var n=r-String(e).length+1;return Array(n>0?n:0).join(t||"0")},template:function(e){for(var r,t=/<%(.+?)%>/g,n=/(^( )?(var|if|for|else|switch|case|break|{|}|;))(.*)?/g,i="var r=[];\n",o=0,u=function(e,r){return i+=r?e.match(n)?e+"\n":"r.push("+e+");\n":""!=e?'r.push("'+e.replace(/"/g,'\\"')+'");\n':"",u};r=t.exec(e);)u(e.slice(o,r.index))(r[1],!0),o=r.index+r[0].length;return u(e.substr(o,e.length-o)),new Function("d",(i+'return r.join("");').replace(/[\r\t\n]/g," "))},compileRest:function(e,r){return r=r||[],-1===e.search("[|#:%]")?r:(i(e.split("|"),[e],function(e,t){if(e)throw e;r.push(t)}),r)},execRest:function(e,r,t){for(var n,i,o,a=e.split("/"),s=0;n=r[s];s++)if(u(a,n[1],t)){for(i=2;(o=n[i])&&u(a,o,t);i++);return n[0]}return null},log:function e(){var t=Error.prepareStackTrace,n=Error.stackTraceLimit;Error.prepareStackTrace=r,Error.stackTraceLimit=1;var i=new Error;Error.captureStackTrace(i,arguments[0]||e);var o=[(new Date).toISOString(),i.stack];console.log.apply(console,o.concat(Array.prototype.slice.call(arguments,1))),Error.prepareStackTrace=t,Error.stackTraceLimit=n},error:function e(){var r=Error.stackTraceLimit;Error.stackTraceLimit=4;var t=new Error;Error.captureStackTrace(t,arguments[0]||e);var n=[(new Date).toISOString()];(n=n.concat(Array.prototype.slice.call(arguments,1))).push("\n"),console.error.apply(console,n.concat(t.stack)),Error.stackTraceLimit=r}}}),D("pico/time",function(){var e=Math.max,r=Math.min,t=Math.floor,n=Math.ceil,i=function(e,r){return(e-r)/864e5},o=function(e,r,t){var u=r?1:0,a=new Date(e.getFullYear()+(t||0),0,1),s=(7-a.getDay())%7+u,c=i(e,a);return c>s?n((c-s)/7):o(e,r,-1)},u=function(e,r,t){var n=e.split("/"),i=n[0];if("*"===i)n[0]=r;else if((i=n[0]=parseInt(i))<r||i>t)return;return 1===n.length?n.push(0):n[1]=parseInt(n[1]),n},a=function(e,r,t){if("*"===e)return 0;var n=[];list=e.split(",");for(var i,o,a,s,c,f,l,h=0;i=list[h];h++){if(!(a=i.split("-")).length)return null;if(s=u(a[0],r,t),1!==a.length)if(c=u(a[1],r,t),o=s[0],f=c[0],l=c[1]||1,o>f){for(f=t;o<=f;o+=l)n.push(o);for(o=r,f=c[0];o<=f;o+=l)n.push(o)}else for(;o<=f;o+=l)n.push(o);else if(l=s[1])for(o=s[0];o<=t;o+=l)n.push(o);else n.push(s[0])}return n.sort(function(e,r){return e-r}),n},s=function(t,n,i){if(!n)return t;if(e.apply(Math,n.concat(t))===t)return t+(i-t)+r.apply(Math,n);for(var o=0,u=n.length;o<u;o++)if(n[o]>=t)return n[o];console.error("not suppose to be here",t,n,i)},c=function(e,r,n,i,o,u,a,f,l){if(r++>1)return l(0);var h=s(e.getMinutes(),n,60),p=s(e.getHours()+t(h/60),i,24),d=e.getDate(),g=e.getMonth(),v=e.getFullYear(),y=new Date(v,g,0).getDate();if(a){var m=e.getDay()+t(p/24);d+=s(m,a,7)-m}else d=s(d+t(p/24),o,y);if(g=s(g+1+t(d/y),u,12),e.getMonth()+1!==g)return c(new Date(v,g-1),r,n,i,o,u,a,f,l);if(v=s(v+t((g-1)/12),f,0),e.getFullYear()!==v)return c(new Date(v,g-1),r,n,i,o,u,a,f,l);var b=new Date(v,(g-1)%12).getTime();return b+=864e5*(d%y-1),b+=p%24*36e5,b+=h%60*6e4,l(b)};return{parse:function(e){var r=e.split(" ");if(r.length<6)return 0;var t=a(r[0],0,59);if(null==t)return 0;var n=a(r[1],0,23);if(null==n)return 0;var i=a(r[2],1,31);if(null==i)return 0;var o=a(r[3],1,12);if(null==o)return 0;var u=a(r[4],0,6);if(null==u)return 0;var s=a(r[5],1975,2075);return null==s?0:[t,n,i,o,u,s]},nearest:function(e,r,t,n,i,o){var u=new Date,a=s(u.getFullYear(),o,0),f=s(u.getMonth()+1,n,12)-1;if(u.getFullYear()!==a||u.getMonth()!==f)u=new Date(a,f);else{var l=u.getTime();u=new Date(l+6e4)}return c(u,0,e,r,t,n,i,o,function(e){return e})},daynum:i,weeknum:o,day:function(e,r){var t=new Date,n=new Date(t.getFullYear(),t.getMonth(),t.getDate(),12,0,0)-e;return n>=0&&n<=1296e5||n<=0&&n>-1296e5?t.getDate()===e.getDate()?"Today":t>e?"Yesterday":"Tomorrow":(r=r||"en-US",t.getFullYear()===e.getFullYear()&&o(t)===o(e)?e.toLocaleDateString(r,{weekday:"long"}):e.toLocaleDateString(r,{weekday:"short",month:"short",day:"numeric"}))}}}),D("pico/web",function(e,r,t,i,o,u){function a(e){if(!e.url)return console.error("url is not set");w(this,e),this.reqId=1+f(1e3*l()),this.inbox=[],this.outbox=[],this.uploads=[],this.callbacks={},this.acks=[],this.reqs=[],this.resEndPos=0,this.head=null,this.body=[],this.currPT=h,this.serverTime=0,this.serverTimeAtClient=0}var s=r("pico/json"),c=Math.abs,f=Math.floor,l=Math.random,h=1,p=!0,d=function(e){e&&console.error(e)},g=function(e,r,t){e.append(r,t)},v=function(e,r,t){e[r]=t},y=function(e,r){r=r||d,n("get",e.url,null,null,function(t,n,i){if(4===n){if(t)return r(t);var o=parseInt(i);if(isNaN(o))return r("invalid timesync response");e.serverTime=o,e.serverTimeAtClient=Date.now(),r()}})},m=function(e,r,t,n){switch(e&&4===r&&y(n),r){case 2:n.head=null,n.currPT=h,n.resEndPos=0}if(t){var i,o=n.resEndPos,u=-1,a=n.delimiter,f=a.length,l=n.body;try{for(;;){if(-1===(u=t.indexOf(a,o)))break;switch(n.currPT){case h:n.head=JSON.parse(t.substring(o,u)),l.length=0,n.currPT=2;break;case 2:l.push(t.substring(o,u))}if((i=n.head)&&i.len===l.length){if(n.currPT=h,i.resId&&n.request("ack",{resId:i.resId}),!i.reqId)return void console.error("incomplete response header: "+JSON.stringify(i));if(n.cullAge&&n.cullAge<c(n.getServerTime()-i.date))return void console.error("invalid server time: "+JSON.stringify(i)+" "+c(n.getServerTime()-i.date));if(n.secretKey&&l.length){for(var p=CryptoJS.algo.HMAC.create(CryptoJS.algo.MD5,n.secretKey+i.date),d=0,g=l.length;d<g;d++)p.update(l[d]);if(i.key!==p.finalize().toString(CryptoJS.enc.Base64))return void console.error("invalid server key: "+JSON.stringify(i))}i.len&&(i.data=s.parse(l,!0)),n.inbox.push(i),n.head=null}o=u+f}}catch(e){console.error(e)}n.resEndPos=4===r?0:o}},b=function(e,r,t,n,i){n=n||"",i=i||"";for(var o,u,a,s,c=e instanceof FormData?g:v,f=r.baseURI,l=0,h=r.elements;s=h[l];l++)if(s.hasAttribute("name"))if("FILE"===(o=s.hasAttribute("type")?s.getAttribute("type").toUpperCase():"TEXT"))for(u=0,a=s.files.length;u<a;c(e,n+s.name,s.files[u++]));else("RADIO"!==o&&"CHECKBOX"!==o||s.checked)&&c(e,n+s.name,s.value);if(t)for(var p in t)c(e,i+p,t[p]);return f=f.substring(0,f.lastIndexOf("/")+1),r.action.substr(f.length)},w=function(e,r){e.url=r.url||e.url,e.secretKey=r.secretKey||e.secretKey,e.cullAge=r.cullAge||e.cullAge||0,e.delimiter=r.delimiter?JSON.stringify(r.delimiter):e.delimiter||JSON.stringify(["&"])},k=function(e){e.resEndPos=e.outbox.length=e.acks.length=0,e.currPT=h};return a.prototype={beat:function(){if(this.inbox.length)for(var e,r,t,i=this.inbox,o=this.callbacks;t=i.pop();)(r=o[e=t.reqId])&&(delete o[e],r(t.error,t.data));if(p&&(this.uploads.length||this.outbox.length||this.acks.length)){var u=this.uploads,a=this.outbox,s=this.acks;if(u.length)n("post",this.url,u.shift(),null,m,this);else{var c=this.reqs=s.concat(a);s.length=a.length=0,n("post",this.url,c.join(this.delimiter)+this.delimiter,null,m,this)}}},reconnect:function(e,r){w(this,e),k(this),y(this,function(e){r(e,this)})},submit:function(e,r,t){if(!("undefined"!=typeof window&&e&&e instanceof HTMLFormElement))return console.error("No HTMLFormElement submitted");var n=0;t&&(n=this.reqId++,this.callbacks[n]=t);var i=new FormData;i.append("api",b(i,e,r,"data/","cred/")),i.append("reqId",n),this.uploads.push(i)},request:function(e,r,t,n){switch(arguments.length){case 2:r instanceof Function&&(n=r,r=t=void 0);break;case 3:t instanceof Function&&(n=t,t=void 0);break;case 4:break;default:return console.error("wrong request params!")}if("undefined"!=typeof window&&r instanceof HTMLFormElement){var i={};e=b(i,r),r=i}if(!e)return console.error("Missing api,  data["+JSON.stringify(r)+"]");var o=this.acks;if("ack"!==e&&(o=this.outbox).length){var u=o.shift();-1===u.indexOf(e)&&o.unshift(u)}var a=0;n&&(a=this.reqId++,this.callbacks[a]=n);var c=r?s.stringify(r,!0):[];if(c.unshift(JSON.stringify(t)),c.length&&this.secretKey){for(var f=this.getServerTime(),l=CryptoJS.algo.HMAC.create(CryptoJS.algo.MD5,this.secretKey+f),h=0,p=c.length;h<p;h++)l.update(c[h]);c.unshift(JSON.stringify({api:e,reqId:a,len:c.length,date:f,key:l.finalize().toString(CryptoJS.enc.Base64)}))}else c.unshift(JSON.stringify({api:e,reqId:a,len:c.length}));o.push(c.join(this.delimiter))},getServerTime:function(){return this.serverTime+(Date.now()-this.serverTimeAtClient)}},{create:function(e,r){var t=new a(e);y(t,function(e){r(e,t)})},ajax:n,online:function(){p=!0},offline:function(){p=!1}}})}).apply(null,"undefined"==typeof window?[module,"exports",require]:[window,"pico"]);
//# sourceMappingURL=bin/pico.min.js.map;
pico.define('po/Callback',function anonymous(exports,require,module,define,inherit,pico
/**/) {
"use strict";
var ALL='*'
var Callback=function(){
	this.slots={}
}
var off=function(slot, cb, ctx){
	if (!slot) return
	for(var i=0,s; s=slot[i]; ){
		if ((!cb || cb===s[0]) && (!ctx || ctx===s[1])) slot.splice(i,1)
		else i++
	}
}

Callback.prototype={
	on:function(key, cb, ctx){
		if (!cb) return
		var slot=this.slots[key] || []
		slot.push([cb,ctx])
		this.slots[key]=slot
	},
	off:function(key, cb, ctx){
		var slots=this.slots
		if (key){
			off(slots[key], cb, ctx)
		}else{
			for (key in slots){
				off(slots[key], cb, ctx)
			}
		}
	},
	trigger:function(key){
		var i,s
		var slot=this.slots[key]
		if (slot) for(i=0; s=slot[i]; i++) s[0].apply(s[1],arguments)
		slot=this.slots[ALL]
		if (slot) for(i=0; s=slot[i]; i++) s[0].apply(s[1],arguments)
	}
}

return Callback
//# sourceURL=po/Callback
})
pico.define('po/Module',function anonymous(exports,require,module,define,inherit,pico
/**/) {
"use strict";
var pStr=require('pico/str')
var Callback=require('po/Callback')
var INVALID_NAME=/[^a-zA-Z0-9 -]/g
var globalEvents={}
var onGlobalEvent=function(e, des){
	des=des||globalEvents
	var devts=des[e.type]
	if (!devts || !devts.length) return
	for(var i=0,d,target,query; d=devts[i]; i++){
		;(target=e.target) && target.closest && (query=d[2]) && (target=target.closest(query))
		target && d[1].call(d[0],e,target)
		if (e.cancelBubble) break
	}
}
var listen=function(self,el,des,onEvent,action,query,cb){
	var devts=des[action]=des[action]||[]
	devts.push([self,cb,query])
	el.addEventListener(action,onEvent)
}
var unlisten=function(self,el,des,onEvent){
	var keys=Object.keys(des)
	var list,i,l
	for(var j=0,k; k=keys[j]; j++){
		list=des[k]
		for(i=0; l=list[i];){
			if (self===l[0]) list.splice(i,1)
			else i++
		}
		if (!list.length){
			el.removeEventListener(k,onEvent)
			delete des[k]
		}
	}
}
var delegate=function(evts){
	var el=this.el
	evts=evts||this.events
	if (!el || !evts) return
	var des=this.domEvents
	var sidx,action
	for(var evt in evts){
		sidx=evt.indexOf(' ')
		if (-1===sidx) sidx=evt.length
		action=evt.substr(0,sidx)
		if (!action) continue
		if (97	<= action.charCodeAt())
			listen(this,el,des,this.onEvent,action,evt.substr(sidx+1),evts[evt])
		else
			listen(this,window,globalEvents,onGlobalEvent,action.toLowerCase(),evt.substr(sidx+1),evts[evt])
	}
}
var undelegate=function(){
	unlisten(this,this.el,this.domEvents,this.onEvent)
	unlisten(this,window,globalEvents,onGlobalEvent)
}
var start=function(opt,css){
	this._opt=opt
	this.style(css)
	this.el=this._el=__.dom.get(opt)
	delegate.call(this)
}
var stop=function(){
	this.callback.off()
	undelegate.call(this)
	var el=this._el
	// TODO really no need innerHTML=''?
	el && !this._opt.el && el.parentElement && el.parentElement.removeChild(el)
	this.unstyle()
}
var Module=function(name,opt,css){
	this.id='p'+pStr.rand()
	this.name=(name && name.toString().replace(INVALID_NAME,'-'))||this.id
	this.callback=new Callback
	var des=this.domEvents={}
	this.onEvent=function(e){
		onGlobalEvent(e, des)
	}
	opt && this.start(opt,css)
}

// options: el,id,className,tagName,attributes
Module.prototype={
	// to be overriden
	start:start,
	stop:stop,

	setElement:function(el){
		undelegate.call(this)
		this.el=el
		delegate.call(this)
	},

	style:function(css){ __.dom.style(this.name,css) },
	unstyle:function(){ __.dom.unstyle(this.name) },

	delegateEvents:function(evt){
		!evt && undelegate.call(this)
		delegate.call(this, evt)
	},
	undelegateEvents:undelegate
}

return Module
//# sourceURL=po/Module
})
pico.define('po/Model',function anonymous(exports,require,module,define,inherit,pico
/**/) {
"use strict";
var Callback=require('po/Callback')
var changes={
	has:function(obj, key){
		return key in obj
	},
	get:function(obj, key){
		return obj[key]
	},
	set:function(obj, key, value){
		if ('callback'===key) return false
		var ov=obj[key]
		if (value === ov) return false
		if (key in obj){
			obj.callback.trigger('field.update',key,value,ov)
		}else{
			obj.callback.trigger('field.add',key,value)
		}
		obj[key]=value
		return true
	},
	deleteProperty:function(obj, key){
		if ('callback'===key) return false
		if (key in obj){
			obj.callback.trigger('field.delete',key)
			delete obj[key]
		}
	},
	enumerate:function(obj){
		return obj.keys()
	},
	ownKeys:function(obj){
		obj.keys()
	},
	defineProperty:function(obj, key, desc){
		if (desc && desc.value){
			return changes.set(obj,key,desc.value)
		}
		return false
	},
	getOwnPropertyDescriptor:function(obj,key){
		var v=obj[key]
		return v ? {
			value: v,
			writable:true,
			enumerable:true,
			configurable:false
		} : void 0 
	}
}

return function(obj){
	if (obj.callback) return console.error('callback is an invalid model field')
	obj.callback=new Callback
	return new Proxy(obj, changes)
}
//# sourceURL=po/Model
})
pico.define('po/Collection',function anonymous(exports,require,module,define,inherit,pico
/**/) {
"use strict";
var C=require('po/Collection')
var Model=require('po/Model')
var Callback=require('po/Callback')
var storage=window.localStorage
var dcb=__.dummyCB
var Collection = function(models,routes,name){
	this.name=name
	routes=this.routes=routes||{}
	this.idAttr=routes.idAttr||'id'
	this.modelIndex=[]
	this.models={}
	this.callback=new Callback
	this.load(models)
	this.init()
}
var load=function(coll,models,idx,cb){
	if (models.length <= idx) return cb()
	coll.create(models[idx++],function(err){
		if (err) return cb(err)	
		load(coll,models,idx,cb)
	})
}
var set=function(coll,obj){
	if (!obj) return
	var id=obj[coll.idAttr]
	var model=coll.models[id]
	if (model){
		Object.assign(model,obj)
		model.callback.trigger('update',model,id)
		coll.callback.trigger('update',coll,id)
	}else{
		coll.modelIndex.push(id)
		coll.modelIndex.sort()
		coll.models[id]=Model(obj)
		coll.callback.trigger('add',coll,id)
	}
	storage.setItem(coll.name+':'+id, JSON.stringify(obj))
	return model
}
var get=function(coll,id){
	var model=coll.models[id]
	if (model) return model
	var json=storage.getItem(coll.name+':'+id)
	if (!json) return
	try{ model=Model(JSON.parse(json)) }
	catch(ex){return}
	coll.modelIndex.push(id)
	coll.modelIndex.sort()
	coll.models[id]=model
	return model
}
var remove=function(coll,id){
	if (coll.models[id]){
		var idx=coll.modelIndex.indexOf(id)
		if (~idx){
			var model=coll.models[id]
			model.callback.trigger('delete',model,id)
			coll.callback.trigger('delete',coll,id)
			coll.modelIndex.splice(idx,1)
		}
		delete coll.models[id]
	}

	storage.removeItem(coll.name+':'+id)
}
var clear=function(){
	this.modelIndex=[]
	this.models={}
	this.callback.trigger('clear')
	storage.clear()
}

Collection.ajax=function(method,route,params,cb){
	if (!route) return cb(null,params)
	pico.ajax(method,route,params,null,function(err,state,res){
		if (4!==state) return
		if (err) return cb(err)
		try{var obj=JSON.parse(res)}
		catch(ex){return cb(ex)}
		cb(null,res)
	})
}

Collection.prototype={
	// to be overriden
	init:function(){},
	fini:function(){},

	load:function(models,cb){
		cb=cb||dcb
		if (!models) return cb()
		load(this,models,0,cb)
	},
	create:function(model,cb){
		cb=cb||dcb
		var coll=this
		C.ajax('post',this.routes.create,model,function(err,res){
			if (err) return cb(err)
			cb(null,set(coll,res))
		})
	},
	get:function(id){
		return get(this,id)
	},
	read:function(id,cb){
		var coll=this
		var model=get(this,id)
		if (model) return cb(null,model)
		var params={}
		params[this.idAttr]=id
		C.ajax('get',this.routes.read,params,function(err,res){
			if (err) return cb(err)
			cb(null,set(coll,res))
		})
	},
	// list(1,100,cb)
	// list([1,4,89],cb)
	list:function(list,cb){
		var coll=this
		var remained=[]
		var models=[]
		var model
		if (3===arguments.length){
			for(var i=arguments[0],l=arguments[1]; i<=l; i++){
				model=get(this,i)
				if (model) models.push(model)
				else remained.push(i)
			}
		}else{
			for(var i=0,id; id=list[i]; i++){
				model=get(this,id)
				if (model) models.push(model)
				else remained.push(id)
			}
		}
		if (!remained.length) return cb(null,models)
		var params={}
		params[this.idAttr]=remained
		C.ajax('get',this.routes.list,params,function(err,res){
			if (err) return cb(err)
			if (!res || !res.length) return cb()
			for(var i=0,m; m=res[i]; i++){
				models.push(set(coll,m))
			}
			cb(null,models)
		})
	},
	update:function(model,cb){
		cb=cb||dcb
		var coll=this
		C.ajax('put',this.routes.update,model,function(err,res){
			if (err) return cb(err)
			cb(null,set(coll,res))
		})
	},
	remove:function(id,cb){
		cb=cb||dcb
		var coll=this
		var params={}
		params[this.idAttr]=id
		C.ajax('delete',this.routes.delete,params,function(err,res){
			if (err) return cb(err)
			cb(null,remove(coll,id))
		})
	},
	clear:clear
}

return Collection
//# sourceURL=po/Collection
})
pico.define('p/network',function anonymous(exports,require,module,define,inherit,pico
/**/) {
"use strict";
var
web=require('pico/web'),
pObj=require('pico/obj'),
Callback=require('po/Callback'),
Collection=require('po/Collection'),
channels = {}, directory={},
credential,count=30,
callback=null,
create = function(keys, domains, cb){
    if (!keys.length) return cb()

    var
    k=keys.pop(),
    c=domains[k]

    web.create({
        url: c.url,
        delimiter: c.delimiter || ['&']
    }, function(err, client){
        if (err) return cb(err)
        channels[k]=client
        create(keys, domains, cb)
    })
},
getKey=function(p){ 
    var i=p.indexOf('/')
    return -1===i ? p : p.substr(0, i)
}

this.update=function(){
	if (count--) return
	count=30
	for(var i=0,keys=Object.keys(channels),c; c=channels[keys[i]]; i++){
		c.beat()
	}
}

this.load=function(){
	Collection.ajax = function(method,route,params,cb){
		if (!route) return cb(null, params)
		var
		c = channels[getKey(route)],
		reqData = params || {},
		onReceive = function(err, data){
			if (err) {
				callback.trigger('network.error', err)
				return cb(err)
			}
			callback.trigger('network.recv', null, route, data)
			return cb(null,data)
		}

		if (!c) return cb(getKey(route)+' domain undefined')

		if (reqData.charAt){
			try {reqData=JSON.parse(reqData)}
			catch(e){return cb(err)}
		}

		if (reqData instanceof HTMLFormElement){
			route = reqData.action
			var hasFile = req.hasFile 
			for(var i=0,es=reqData.elements,e; e=es[i]; i++){
				if (e.hasAttribute('type') && 'FILE' === e.getAttribute('type').toUpperCase()){
					hasFile = true
					break
				}
			}
			if (hasFile){
				c.submit(reqData, credential, onReceive)
			}else{
				c.request(null, reqData, credential, onReceive)
			}
		}else{
			c.request(route, reqData, credential, onReceive)
		}
		callback.trigger('network.send', null, route)
	}
}

return{
	callback:null,
    create:function(domains,cb){
        if (!domains) return cb()
		this.callback=callback=new Callback
        directory=pObj.extend(directory, domains)
        create(Object.keys(domains), domains, cb)
    },
    credential:function(cred){ credential=cred },
	updateCredential:function(key,value){credential=credential||{},credential[key]=value},
    getCredential:function(){ return credential ? JSON.parse(JSON.stringify(credential)) : ''}, // caniuse Object.assign now?
    getDomain:function(url){ return directory[getKey(url)] || {} }
}
//# sourceURL=p/network
})
pico.define('p/Stream',function anonymous(exports,require,module,define,inherit,pico
/**/) {
"use strict";
// TODO:
// authentication(header or cookies) with withCredentials=true
// how to get sep["&"] from pico/web?
var
Callback=require('po/Callback'),
network=require('p/network'),
PJSON=require('pico/json'),
callbacks=function(self){
    return [
    function(e){
		self.dcCount=0
        self.callback.trigger(e.type)
    },
    function(e){
		self.dcCount++
        switch(e.target.readyState){
        case EventSource.CONNECTING: self.callback.trigger('connecting',self.dcCount); break
		case EventSource.OPEN:
			try{var d=JSON.parse(e.data)}
			catch(ex){console.error(ex)}
			self.callback.trigger('error',d);
			break
        case EventSource.CLOSED:
        default:
            self.callback.trigger('closed',self.dcCount);
            break
        }       
    },
	function(e){
        var data
        try{ data=PJSON.parse(e.data.split('["&"]'),true) }
        catch(exp){ data=e.data }
        self.callback.trigger(e.type, data, e.lastEventId)
    }
    ]
},
init=function(self, params, channel, path, events, withCredentials, autoconnect){
    self.channel=channel
	self.path=path
    self.events=events
	self.callback=new Callback
	self.withCredentials=withCredentials
    if (!autoconnect || !path) return

    var
    cbList=callbacks(self),
    s=new EventSource(
            encodeURI(-1===path.indexOf('//')?network.getDomain(channel).url+path:path)+
            (-1===path.lastIndexOf('?')?'?':'&')+
            __.querystring(Object.assign(params,network.getCredential())),
            {withCredentials:withCredentials})

    s.addEventListener('open', cbList[0], false)   
    s.addEventListener('error', cbList[1], false)   
    for(var i=0,e; e=events[i]; i++){
        s.addEventListener(e,cbList[2],false)
    }
	self.sse=s
} 

function Stream(opt){
	this.dcCount=0
    init(this, opt.params, opt.channel, opt.path, opt.events, opt.autoconnect, opt.withCredentials)
}           

Stream.prototype={
    reconnect:function(params, channel, path, events, withCredentials){
        var s=this.sse
        if (s) s.close()
		init(
			this,
			params,
			channel||this.channel,
			path||this.path,
			events||this.events,
			withCredentials||this.withCredentials,
			true)
    },
    close:function(){
        var s=this.sse
        if (!s) return
        s.close()
    }
}

return Stream
//# sourceURL=p/Stream
})
pico.define('p/Socket',function anonymous(exports,require,module,define,inherit,pico
/**/) {
"use strict";
var
Callback=require('po/Callback'),
network=require('p/network')

function Socket(opt){
    init(this, opt.channel, opt.path, opt.protocols, opt.auto)
}           
            
function init(self, channel, path, protocols, auto){
	self.callback=new Callback
    self.channel=channel
    self.path=path
    self.protocols=protocols
    if (!path || !auto) return

    var
	url=(-1===path.indexOf('://')?network.getDomain(channel).url+path:path).replace('http','ws'),
    s=new WebSocket(
            encodeURI(url)+'?'+__.querystring(network.getCredential()),
            protocols)

    s.addEventListener('open', function(e){
        self.callback.trigger(e.type)
    }, false)   
    s.addEventListener('error', function(e){
		self.callback.trigger(e.type, e)
    }, false)   
    s.addEventListener('close', function(e){
		self.callback.trigger(e.type, e)
    }, false)   
    s.addEventListener('message', function(e){
		var data
		try{ data=JSON.parse(e.data) }
		catch(exp){ data=e.data }
		self.callback.trigger(e.type, data)
    }, false)   
	self.ws=s
}       

Socket.prototype={
    reconnect:function(channel, path, protocols){
        var s=this.ws
        if (s){
            s.close()
            init(
                this,
                channel||this.channel,
                path||s.url||this.path,
                protocols||s.protocol||this.protocols,
				true)
        }else{
            init(
                this,
                channel||this.chanel,
                path||this.path,
                protocols||this.protocol,
				true)
        }
    },
	readyState:function(){
		return this.ws ? this.ws.readyState : 0
	},
	send:function(buff){
		if (1 !== this.readyState()) return false
		this.ws.send(buff)
		return true
	},
    close:function(code, reason){
        var s=this.ws
        if (!s) return
        s.close(code, reason)
    }
}

return Socket
//# sourceURL=p/Socket
})
pico.define('p/Worker',function anonymous(exports,require,module,define,inherit,pico
/**/) {
"use strict";
/*
 * TODO: worker and job declaration should be separated,
 * job should be together with UI and css, but execute in worker.
 * worker proxy should run multiple workers (define in spec), when job come
 * worker proxy use round robin way to choose worker to run job
 */
var
Callback=require('po/Callback'),
specMgr=require('p/specMgr'),
dummyCB=function(){},
funcBody=function(func){
    return func.substring(func.indexOf('{')+1,func.lastIndexOf('}'))
},
_start=function(worker,queue){
	if(!queue.length) return
	var job=queue[0] //shift at _continue message call

	worker.postMessage(['_start',job.url,job.script,job.deps])
},
bootstrap=function(self,importScripts,postMessage,close){
	var
	PARAMS=['deps','signals','importScripts','XMLHttpRequest'],
	actives={},
	suspended={},
	start=function(url,code,deps){
		if (actives[url] || suspended[url]) stop(url)

		var
		signals={},
		job=Function(...PARAMS,code)(deps,signals),
		defaults=job.deps,
		v

		for(var key in defaults){
			if (deps[key]) continue
			v=defaults[key]
			if (!Array.isArray(v)) return console.error('deps:',key,'not defined')
			deps[key] = v[1]
		}

		job.signals.forEach(function(evt){
			signals[evt]=function(){
				postMessage([evt,...arguments])
			}
		})

		job.create()

		actives[url]=job

		return true
	},
	stop=function(url){
		var job=actives[url]||suspended[url]
		if (!job) return false
		job.close()
		delete actives[url]
		delete suspended[url]
		return true
	},
	pause=function(url){
		var job=actives[url]
		if (!job) return false
		suspended[url]=job
		delete actives[url]
		return true
	},
	resume=function(url){
		var job=suspended[url]
		if (!job) return false
		actives[url]=job
		delete suspended[url]
		return true
	},
	state=function(url){
		return actives[url] ? 1 : suspended[url] ? -1 : 0
	},
	signal=function(evt,params){
		var job
		for(var key in actives){
			job=actives[key]
			if (!job.slots || !job.slots[evt]) continue
			job.slots[evt](...params)
		}
	}
	keys=function(){
		return Object.keys(actives).concat(Object.keys(suspended))
	},
	all=function(urls,evt,func){
		if (!urls.length) return
		var url=urls.shift()
		postMessage([evt,url,func(url)])
		all(urls,evt,func)
	}

	onmessage=function(e){
		var 
		params=e.data,
		evt=params.shift()

		switch(evt){
		case '_start':
			postMessage(['_started',params[0],start(params[0],params[1],params[2])])
			return postMessage(['_continue'])
		case '_stop':
			return all(params.length?params[0]:keys(),'_stopped',stop)
		case '_pause':
			return all(params.length?params[0]:keys(),'_paused',pause)
		case '_resume':
			return all(params.length?params[0]:keys(),'_resumed',resume)
		case '_state':
			return all(params.length?params[0]:keys(),'_state',state)
		case '_close':
			all(keys(),'_stopped',stop)
			return close()
		default:
			return signal(evt,params)
		}
	}

	postMessage(['_init'])
},
workerCBs=function(self){
	return [
	function(e){
		var params=e.data
		if (!Array.isArray(params)) return self.callback.trigger(params)
		switch(params[0]){
		case '_continue':
			self.queue.shift()
			/* through */
		case '_init':
			return _start(self.worker,self.queue)
		default:
			self.callback.trigger.apply(self.callback.trigger,params)
		}
	},
	function(e){
		//e.preventDefault()
		console.error('WebWorker Error',e.filename,':',e.lineno,':',e.message)
		self.callback.trigger('error',e.message,e.filename,e.lineno)
	}]
}

function WorkerProxy(spec){
	if (!window.Worker) return console.error('Web Worker is not supported')
	this.callback=new Callback
	this.queue=specMgr.findAllByType('job',spec)

	var
	dataurl= URL.createObjectURL(new Blob([funcBody(bootstrap.toString())], {type: 'application/javascript'})),
	w=this.worker = new Worker(dataurl),
	cbs=workerCBs(this)

	URL.revokeObjectURL(dataurl)
	w.addEventListener('message',cbs[0])
	w.addEventListener('error',cbs[1])
}           

WorkerProxy.prototype={
	run:function(jobs){
		if (!jobs || !Array.isArray(jobs)) return
		var q=this.queue
		if (q.length) return q.push.apply(q, jobs) // loading in progress
		this.queue=jobs
		_start(this.worker,jobs)
	},
	// TODO: a more elegant way to stop 1 url, a list or url and all
	// TODO: a more elegant way to get callback from worker
	stop:function(urls){
		this.worker.postMessage(['_stop',urls])
	},
	pause:function(urls){
		this.worker.postMessage(['_pause',urls])
	},
	resume:function(urls){
		this.worker.postMessage(['_resume',urls])
	},
	state:function(urls){
		this.worker.postMessage(['_state',urls])
	},
	postMessage:function(){
		this.worker.postMessage(Array.prototype.slice.call(arguments))
	},
	close:function(){
		var
		w=this.worker,
		f=function(){clearTimeout(t),w.terminate()},
		t=setTimeout(f,5000)

		this.worker.postMessage(['_close'])
	}
}

function Job(url,script,spec){
	this.url=url
	this.script=script
	this.deps=specMgr.spec2Obj(spec)
}

return {
	Proxy:WorkerProxy,
	Job:Job
}
//# sourceURL=p/Worker
})
pico.define('p/Service',function anonymous(exports,require,module,define,inherit,pico
/**/) {
"use strict";
var
Callback=require('po/Callback'),
specMgr=require('p/specMgr'),
dummyCB=function(){},
onStateChange=function(e){
	switch(e.target.state){
	case 'installing':
	case 'installed':
	case 'activating':
	case 'activated':
	case 'redundant':
		break
	}
},
onMessage=function(self){
	return function(evt){
		console.log('received msg from sw',arguments)
		var msg=evt.data
		switch(msg[0]){
		case 'pushed':
			self.callback.trigger(['pushed'])
			break
		}
	}
},
postMessage=function(evt,msg,cb){
	var ctrl=navigator.serviceWorker.controller
	if (!ctrl) return console.warn('failed to postMessage',evt,msg)

	if (cb){
		var channel= new MessageChannel()
		channel.port1.onmessage = function(evt) { cb(evt.data.error,evt.data) }
		ctrl.postMessage([evt,msg], [channel.port2])
	}else{
		ctrl.postMessage([evt,msg])
	}
}

function ServiceProxy(url,spec){
	if (!window.navigator || !navigator.serviceWorker) return console.warn('Service Worker is not supported')

	var
	self=this,
	sw=navigator.serviceWorker

	self.callback=new Callback

	sw.addEventListener('message',onMessage(this))
	sw.register(url).then(function(reg){
		console.log('ServiceWorker registered', reg)
		// wait for service installation and activation, sw.controller could be null at this stage
		// var ctrl=sw.controller||reg.installing||reg.waiting||reg.active
		// ctrl.addEventListener('statechange', onStateChange)
		// ctrl.addEventListener('error', console.error)
		return sw.ready
	}).then(function(reg){
		// TODO should have a delay here, it fails on first time due to service worker on yet activated
		var deps=specMgr.spec2Obj(spec)
		self.deps=deps
		if (deps.enablePushMgr){
			reg.pushManager.subscribe({
				userVisibleOnly: true
			}).then(function(sub) {
				console.log('endpoint:', sub.endpoint)
				self.callback.trigger(['endpoint',sub.endpoint])
			})
		}
	}).catch(function(err) {
		console.error('ServiceWorker registration error', err)
	})
} 

ServiceProxy.prototype={
	postMessage:postMessage,
	showNotification:function(title,body,icon,tag){
		postMessage('showNoti',{
			title:title,
			body:body,
			icon:icon,
			tag:tag
		})
	}
}

return ServiceProxy
//# sourceURL=p/Service
})
pico.define('p/specMgr',function anonymous(exports,require,module,define,inherit,pico
/**/) {
"use strict";
var
pObj=require('pico/obj'),
Collection= require('po/Collection'),
Stream= require('p/Stream'),
Socket= require('p/Socket'),
Worker= require('p/Worker'),
Service= require('p/Service'),
ID=0,TYPE=1,VALUE=2,EXTRA=3,
ERR1='ref of REF not found',ERR2='record RECORD of ref of REF not found',
extOpt={mergeArr:1},
create = function(id, type, value){ return [id, type, value] },
getId = function(spec){return spec[ID]},
getType = function(spec){return spec[TYPE]},
getValue = function(spec){return spec[VALUE]},
getExtra = function(spec,idx){return spec[EXTRA+(idx||0)]},
find = function(id, list, all){ for(var i=0,o; o=list[i]; i++){ if (id === o[ID]) return all?o:o[VALUE] } },
findAll = function(cond, list, by, all){
    var arr = []
    for(var i=0,o; o=list[i]; i++){ if (cond === o[by]) arr.push(all?o:o[VALUE]) }
    return arr
},
spec2Obj=function(spec){
	var obj={}
	for(var i=0,s;s=spec[i];i++){ obj[s[ID]]=s[VALUE] }
	return obj
},
loadDeps = function(links, idx, klass, cb){
    if (!links || links.length <= idx) return cb(null, klass)
    if (links.charAt) return require(links, cb)
    require(links[idx++], function(err, mod){
        if (err) return cb(err)
        loadDeps(links, idx, pObj.extend(klass, mod, extOpt), cb)
    })
},
load = function(ctx, params, spec, idx, deps, cb, userData){
    if (spec.length <= idx) return cb(null, deps, userData)

    var
    s = spec[idx++],
    t = s[TYPE],
    f

    switch(t){
    case 'ref': //ID[id] TYPE[ref] VALUE[orgId]
        f = find(s[VALUE], ctx, true)
		if (!f) return cb(ERR1.replace('REF', s[VALUE]), deps, userData)
        deps.push(create(s[ID], f[TYPE], f[VALUE]))
        break
    case 'refs': // ID[id] TYPE[refs] VALUE[orgType]
        Array.prototype.push.apply(deps, findAll(s[VALUE], ctx, TYPE, 1))
        break
    case 'model': // ID[id] TYPE[model] VALUE[models] EXTRA[paramIdx]
        f = find(s[VALUE], ctx, true)
		if (!f) return cb(ERR1.replace('REF', s[VALUE]), deps, userData)
		var m = f[VALUE].get(params[s[EXTRA]])
		if (!m) return cb(ERR2.replace('REF', s[VALUE]).replace('RECORD',params[s[EXTRA]]), deps, userData)
		deps.push(create(s[ID], t, m)) 
		break
    case 'models': // ID[id] TYPE[models] VALUE[options] EXTRA[default value]
		if (Array.isArray(s[ID])){
			f=s[ID].shift()
			return loadDeps(s[ID],0,{},function(err,klass){
				deps.push(create(f, t, new (Collection.extend(pObj.extends({},[klass])))(s[EXTRA], s[VALUE], s[ID])))
				load(ctx, params, spec, idx, deps, cb, userData)
			})
		}else{
			deps.push(create(s[ID], t, new Collection(s[EXTRA], s[VALUE], s[ID])))
		}
        break
	case 'field': // ID[id] TYPE[field] VALUE[models] EXTRA[filter] EXTRA1[field name]
        f = find(s[VALUE], ctx, true)
		if (!f) return cb(ERR1.replace('REF', s[VALUE]), deps, userData)
		var m = isFinite(s[EXTRA])?f[VALUE].at(s[EXTRA]):f[VALUE].findWhere(s[EXTRA])
		if (!m) return cb(ERR2.replace('REF', s[VALUE]).replace('RECORD',s[EXTRA]), deps, userData)
		deps.push(create(s[ID], t, s[EXTRA+1]?m[s[EXTRA+1]]:m.toJSON()))
		break
	case 'fields': // ID[id] TYPE[fields] VALUE[models] EXTRA[filter] EXTRA1[field name]
        f = find(s[VALUE], ctx, true)
		if (!f) return cb(ERR1.replace('REF', s[VALUE]), deps, userData)
		var m = s[EXTRA] ? new Collection(f[VALUE].where(s[EXTRA])) : f[VALUE]
		// TODO: implement pluck
		if (!m || !m.pluck) return cb(ERR2.replace('REF', s[VALUE]).replace('RECORD',s[EXTRA]), deps, userData)
		deps.push(create(s[ID], t, s[EXTRA+1]?m.pluck(s[EXTRA+1]):m.toJSON()))
		break
    case 'ctrl':
    case 'view': // ID[id/path] TYPE[ctrl/view] VALUE[spec] EXTRA[path/path+mixins]
        return loadDeps(s[EXTRA]||s[ID], 0, {}, function(err, klass){
            if (err) return cb(err, deps, userData)
            f=s[ID]
            deps.push(create(f, t, {name:f, type:t, spec:s[VALUE], Class:klass}))
            load(ctx, params, spec, idx, deps, cb, userData)
        })
    case 'file': // ID[id] TYPE[file] VALUE[path]
        return require(s[VALUE], function(err, mod){
            if (err) return cb(err, deps, userData)
            deps.push(create(s[ID], t, mod))
            load(ctx, params, spec, idx, deps, cb, userData)
        })
    case 'stream': // ID[id] TYPE[stream] VALUE[config]
        deps.push(create(s[ID], t, new Stream(s[VALUE])))
        break
    case 'socket': // ID[id] TYPE[socket] VALUE[config]
        deps.push(create(s[ID], t, new Socket(s[VALUE])))
        break
    case 'worker': // ID[id] TYPE[worker] VALUE[spec]
		return load(deps, params, s[VALUE], 0, [], function(err, config){
            if (err) return cb(err, deps, userData)
			deps.push(create(s[ID], t, new Worker.Proxy(config)))
			load(ctx, params, spec, idx, deps, cb, userData)
		})
    case 'job': // ID[id] TYPE[job] VALUE[spec]
        return require(s[ID], function(err, mod){
			load(deps, params, s[VALUE], 0, [], function(err, config){
				if (err) return cb(err, deps, userData)
				deps.push(create(s[ID], t, new Worker.Job(s[ID],mod,config)))
				load(ctx, params, spec, idx, deps, cb, userData)
			})
		})
    case 'service': // ID[id] TYPE[service] VALUE[spec]
		return load(deps, params, s[VALUE], 0, [], function(err, config){
            if (err) return cb(err, deps, userData)
			deps.push(create(s[ID], t, new Service(s[ID],config)))
			load(ctx, params, spec, idx, deps, cb, userData)
		})
    case 'param': // ID[id] TYPE[param] VALUE[index]
        deps.push(create(s[ID], t, params[s[VALUE]]))
        break
    case 'time':
    case 'date':
    case 'datetime': // ID[id] TYPE[date/datetime] VALUE[unixtime/time in string]
        deps.push(create(s[ID], t, new Date(s[VALUE])))
        break
	case 'int': // ID[id] TYPE[int] VALUE[number or number in string]
		deps.push(create(s[ID], t, parseInt(s[VALUE])))
		break
    default:
        deps.push(create(s[ID], t, s[VALUE]))
        break
    }
    load(ctx, params, spec, idx, deps, cb, userData)
},
// need to get original spec, the one before spec.load, no way to diff ref and models
unload = function(rawSpec, spec){
    if (!spec || !spec.length) return
    var j,s
    for(var i=0,r; r=rawSpec[i]; i++){
        switch(r[TYPE]){
        case 'models':
        case 'stream':
            for(j=0; s=spec[j]; j++){
                if (r[ID] === s[ID]) {
                    switch(s[TYPE]){
                    case 'models': s[VALUE].reset(); break
                    case 'stream': s[VALUE].close(); break
                    }
                }
            }
            break
        }
    }
    for(j=0; s=spec[j]; j++){
		switch(s[TYPE]){
		case 'worker': s[VALUE].close(); break
		}
        delete s[VALUE]
    }
    spec.length = 0
}

return {
    load:function(host, params, spec, cb, userData){
        if (!spec) return cb(null, [], userData)
        setTimeout(load,0,host?host.spec||[]:[], params, spec, 0, [], cb, userData)
    },
    unload:unload,
	find:find,
    findAllById: function(cond, list, all){ return findAll(cond, list, ID, all) },
    findAllByType:function(cond, list, all){ return findAll(cond, list, TYPE, all) },
	spec2Obj:spec2Obj,
    create:create,
    getId:getId,
    getType:getType,
    getValue:getValue,
    getExtra:getExtra,
	getViewOptions:function(spec){
		var opt=find('options',spec)
		if (!opt || !opt.els) return opt
		var paneId=find('paneId',spec)||0
		opt.el=opt.els[paneId]
		return opt
	}
}
//# sourceURL=p/specMgr
})
pico.define('p/sigslot',function anonymous(exports,require,module,define,inherit,pico
/**/) {
"use strict";
var
specMgr=require('p/specMgr'),
evts=[],
middlewares=[],
addMW=function(arr){
	for(var i=0,a; a=arr[i]; i++){
		middlewares.push(specMgr.getValue(a))
	}
},
applyMW=function(mws,evt,args,cb){
	if (!mws.length) return cb(evt,args)
	var
	mw=mws.shift(),
	next=function(evt,args){ 
		if (!evt) return cb(evt,args)
		applyMW(mws,evt,args,cb)
	}
	if (mw instanceof Function) mw(evt,args,next)
	else if (mw.run) mw.run(evt,args,next)
	else applyMW(mws,evt,args,cb)
},
sigslot = function(self, def){
    var signals = {}
    
    ;(self.signals||[]).concat(def||[]).forEach(function(evt){
        var sender = this
        signals[evt] = function(){
            return {
                args: Array.prototype.slice.call(arguments),
                sender: sender,
                evt: evt,
				mws:[],
                queue: false,
				run:run,
                send: proc,
                sendNow: procNow
            }
        }
    }, self)

    self.callback.on('*', recv, self)
        
    return signals
},
run = function(mw){
	if (mw instanceof Function)this.mws.push(mw)
	else if (mw.length) Array.prototype.push.apply(this.mws,mw)
	return this
},
proc = function(a){
	var self=this
	applyMW(this.mws.concat(middlewares),this.evt,this.args,function(evt,args){
		if (!evt) return console.warn(self.evt,'signal aborted',args)
		self.evt=evt
		self.args=args
		send.call(self,a)
	})
},
procNow = function(a){
	var self=this
	applyMW(this.mws.concat(middlewares),this.evt,this.args,function(evt,args){
		if (!evt) return console.warn(self.evt,'signal aborted',args)
		self.evt=evt
		self.args=args
		dispatch.call(self,a)
	})
},
send = function(a, from){
    this.queue=true
    evts.push([this, a, from||this.sender])
},      
recv = function(evt, from, params){
    var 
    func = this.slots[evt],
    forward = true 
                
    if (func) forward = func.apply(this, [from, params.sender].concat(params.args))
	if (from===this) return // prevent trigger twice from extra 'from'
    if (forward) (params.queue?send:dispatch).call(params, [from,this], this)
},
dispatch = function(a, from){
    from=from||this.sender

    var isArr=Array.isArray(a)
    if (!isArr && a) return a.callback.trigger(this.evt, from, this)

    var
    host = from.host,
    modules = from.modules.concat(host ? [host,from] : [from]) //extra 'from' for mixin

    if (isArr){
        for(var i=0,m; m=modules[i]; i++) if (-1 === a.indexOf(m)) m.callback.trigger(this.evt, from, this);
    }else{
        for(var i=0,m; m=modules[i]; i++) m.callback.trigger(this.evt, from, this);
    }
}

this.update= function(){
	for(var i=0,l=evts.length,e; i<l; i++){
        e=evts.shift()
        dispatch.call(e[0], e[1], e[2])
    }
}

return {
	create:sigslot,
	addMiddleware:addMW
}
//# sourceURL=p/sigslot
})
pico.define('p/Ctrl',function anonymous(exports,require,module,define,inherit,pico
/**/) {
"use strict";
var
ID=0,TYPE=1,VALUE=2,EXTRA=3,
REFS='refs',
STD_SIGNALS=['moduleAdded'],
Module=inherit('po/Module'),
specMgr = require('p/specMgr'),
sigslot= require('p/sigslot'),
dummyCB=function(){},
refs=function(id,spec,rawSpec){
    var
    ret={},
    i,s,t
    for(i=0; s=rawSpec[i]; i++){
        if(REFS===s[TYPE] && id===s[ID]){
            t=s[VALUE]
            break
        }
    }
    if (!t) return ret
    for(i=0; s=spec[i]; i++){
        if(t===s[TYPE]){ ret[s[EXTRA]||s[ID]]=s[VALUE] }
    }
    return ret
},
specLoaded = function(err, spec, userData){
    var
    self=userData[0],
    chains=userData[1]

    if (self._removed) return self.remove()
    if (err){
		__.dialogs.alert(err.error, 'Load Error')
        return console.warn(err)
    }

    self.spec = spec

    var
    d = {},
    deps = self.deps || {}

    for(var i=0,keys=Object.keys(deps),s,k,v; k=keys[i]; i++){
        v=deps[k]
        v=Array.isArray(v) ? v : [v]
        switch(v[0]){
        case REFS:
            d[k]=refs(k,spec,self._rawSpec)
            break
        default:
            s=specMgr.findAllById(k, spec)
            if (1 === s.length){ d[k]=s[0] }
            else if (!s.length){ d[k]=v[1] }
            else{ d[k] = s }
            break
        }
    }

    self.deps = d
    self.initialize(d,self.params)

    var h=self.host
    self.signals.moduleAdded().send(h)

    if (h){
        if (self._show && self.show) h.show(self, self._show[0], self._show[1])
        if (chains){
            var m=chains.shift()
            if (1===chains.length){
				chains.length=0
                if(m) m.call(h, null, self)
                return
            }
            h.spawn(m, self.params, chains[chains.length-1], !self._show, chains)
        }
    }
}

function Ctrl(prop, rawSpec, params, host, show, chains){
	Module.call(this, prop.name)
	this.super=Ctrl.prototype
    this.host = host
    this.modules = []
    this.params = params
    this._rawSpec = rawSpec
    this._removed = false 
    this._show=show?[host.el,false]:null // view in chains migh need to show

    this.signals = sigslot.create(this, STD_SIGNALS)
    specMgr.load(host, params || [], rawSpec, specLoaded, [this,chains])
}

Ctrl.prototype = {
	initialize: function(){
		this.create.apply(this,arguments);
	},
    create: function(deps, params, hidden, cb){
        var
		el=this.el,
		spec = this.spec

		if(el){ // ctrl has no el
			if (deps.html) el.innerHTML=deps.html
			else for(var i=0,s; s=spec[i]; i++) if('html'===s[ID]){ el.innerHTML=s[VALUE]; break }
		}
        this.spawnAsync(spec, params, null, hidden, cb || dummyCB)
    },
    addSpec: function(rawSpec, cb){
        this._rawSpec=(this._rawSpec||[]).concat(rawSpec)
        specMgr.load(this.host, [], rawSpec, function(err, spec, self){
            if (err) return cb(err)
            self.spec=(self.spec||[]).concat(spec)
            cb(null, spec)
        }, this)
    },
    remove: function(){
        this._removed = true 
        this.dumpAll()
        specMgr.unload(this._rawSpec, this.spec)
        this.stop()
    },
    // ctrl can't spawn view
    spawn: function(Mod, params, spec, hidden, chains){
        if (!Mod || !Mod.spec) return

        var m = new (Ctrl.extend(Mod.Class))(
			Mod,
			spec && spec.length ? Mod.spec.concat(spec) : Mod.spec,
			params,
			this,
            !hidden,
			chains instanceof Function ? [chains, spec] : chains)

        this.modules.push(m)

        return m
    },
    spawnAsync: function(Mods, params, spec, hidden, cb){
        var list=[]
        for(var i=0,m; m=Mods[i]; i++){
            switch(m[TYPE]){
            case 'ctrl': 
            case 'view': list.push(m[VALUE]); break
            }
        }
        if (!list.length) {
			if (cb) cb()
			return
		}
        list.push(cb,spec)
        return this.spawn(list.shift(), params, spec, hidden, list)
    },
    dump: function(mod){
        if (!mod) return -1
        var i = this.modules.indexOf(mod)
        mod.remove()
        this.modules.splice(i, 1)
        return i
    },
    dumpAll:function(){
        var ms=this.modules
        while(ms.length){
            this.dump(ms[0])
        }
    },
    slots:{}
}

return Ctrl
//# sourceURL=p/Ctrl
})
pico.define('p/View',function anonymous(exports,require,module,define,inherit,pico
/**/) {
"use strict";
var
Ctrl=inherit('p/Ctrl'),
specMgr = require('p/specMgr'),
// dun remove mod here, mod may be removed
hideByIndex= function(self, i, host){
    host = host || self.el

    var oldEl = self._elements[i]

    if (oldEl && host.contains(oldEl)){
        host.removeChild(oldEl)
    }
    return oldEl
}

function View(prop, spec){
	Ctrl.apply(this, arguments)
	this.super=View.prototype
	this._elements = []
	this.start(specMgr.getViewOptions(spec)||{})
}

View.prototype={
	initialize: function(){
		this.style(specMgr.findAllById('css',this.spec))
		Ctrl.prototype.initialize.apply(this,arguments)
	},
    // view can spawn ctrl and view
    spawn: function(Mod, params, spec, hidden, chains){
        if (!Mod || !Mod.spec) return

        if ('ctrl'===Mod.type) return Ctrl.prototype.spawn.call(this, Mod, params, spec, hidden, chains)

        try{
			var
			s=spec && spec.length ? Mod.spec.concat(spec) : Mod.spec,
			m=new (View.extend(Mod.Class))(
				Mod,
				s,
				params,
				this,
				!hidden,
				chains instanceof Function ? [chains,spec]:chains)
		}catch(exp){
			return console.error(Mod.name,'failed to spawn:',exp)
		}
        this.modules.push(m)
        return m
    },
    dump: function(mod){
        var i=Ctrl.prototype.dump.call(this,mod)
        if (i<0) return i
        hideByIndex(this, i)
        this._elements.splice(i, 1)
        return i
    },
    show: function(mod, host, first){
        if (!mod) return
        host = host || this.el
        mod._show=[host, first]

        if (!mod.spec) return mod.el

        var
        i = this.modules.indexOf(mod),
        oldEl = this._elements[i],
        el = mod.render(),
		_el=mod._el

		if (!_el) return el

        if (_el.contains(host)){
			hideByIndex(this,i,host)
			delete this._elements[i]
		}else{
            _el.dataset.viewName=mod.name
            if (host.contains(oldEl)){
                host.replaceChild(_el, oldEl)
            }else{
                if (first) host.insertBefore(_el, host.firstChild)
                else host.appendChild(_el)
            }
            this._elements[i] = _el
			mod.rendered()
        }
        return el
    },
    hide: function(mod, host){
        mod._show=null
        return hideByIndex(this,this.modules.indexOf(mod),host)
    },
    render: function(){
        return this.el
    },
	rendered: function(){
    }
}

return View
//# sourceURL=p/View
})
pico.define('po/router',function anonymous(exports,require,module,define,inherit,pico
/**/) {
"use strict";
var pStr=require('pico/str')
var Callback=require('po/Callback')
var callback
var h=window.history
var _path=''
var _started=false
var routeMap={}
var compiledRoutes=[]
var trigger=function(path){
	_path=path
	var params={}
	var state=routeMap[path]
	if (!state) state=routeMap[pStr.execRest(path,compiledRoutes,params)]
	callback.trigger('change',state,params)
}
var hashchanged=function(){
	trigger(location.hash.slice(1))
}
var popstate=function(){
	trigger(location.search.slice(3))
}
var goHash=function(hash){
	location.hash=hash
}
var router={
	start:function(routes){
		this.routes(routes)
		_started=true
		popstate()
		return this
	},
	routes:function(routes){
		if (!routes) return this
		Object.assign(routeMap,routes)
		var keys=Object.keys(routes)
		for (var i=0,k; k=keys[i]; i++){
			pStr.compileRest(k,compiledRoutes)
		}
		return this
	},
	reset:function(routes){
		routeMap={}
		_started=false
		return this.routes(routes)
	},
	on:function(key,cb,ctx){
		callback.on(key,cb,ctx)
		return this
	},
	off:function(key,cb,ctx){
		callback.off(key,cb,ctx)
		return this
	},
	back:function(steps){
		if (steps) return h.go(-steps)
		h.back()
		return this
	},
	forward:function(steps){
		if (steps) return h.go(steps)
		h.forward()
		return this
	},
	go:function(path, replace){
		path=path||''
		if (path===_path) return this
		;(replace?h.replaceState:h.pushState).call(h, null, null, '?_='+path)
		popstate()
		return this
	},
	depth:function(){
		return h.length
	},
	path: function(){return _path},
	started: function(){return _started}
}

this.load=function(){
	callback=new Callback
	if (h.pushState){
		window.addEventListener('popstate',popstate,false)
	}else{
		router.go=goHash
		popstate=hashchanged
		window.addEventListener('hashchange',popstate,false)
	}
}

return router
//# sourceURL=po/router
})
pico.define('p/Frame',function anonymous(exports,require,module,define,inherit,pico
/**/) {
"use strict";
var
DEPS=0,STYLE=1,MIDDLEWARES=2,SPEC=3,PAGES=4,FLYERS=5,
ID=0,TYPE=1,VALUE=2,EXTRA=3,
EVT_RESIZE='frameresize',
EVT_RESIZE_LEN=EVT_RESIZE.length,
Floor=Math.floor,Random=Math.random,
View=inherit('p/View'),
router = require('po/router'),
specMgr= require('p/specMgr'),
network = require('p/network'),
sigslot= require('p/sigslot'),
includeAll= function(urls, func, type, cb){
    if (!urls || !urls.length) return cb()
    func(urls.shift(), type, function(){ includeAll(urls, func, type, cb) })
},
resized=function(self, paneCount){
    if (paneCount === self.paneCount) return
    self.paneCount=paneCount
    if (router.started() && self.currPaths) changeRoute.call(self, 'change', self.currPaths, self.currParams)
	self.signals.paneCount(paneCount).send()
},
parseFlyers=function(list, cb){
	var flyers={}

	for(var i=0,f,k; f=list[i]; i++){
		k=f.shift()
		flyers[k]=f
	}
	cb(flyers)
},
changeRoute = function(evt, paths, params){
    if (!paths) {
        console.warn('invalid changeRoute',paths,params)
        return router.go()
    }

    var
    pages=this.pages,
    pc=this.paneCount || 1,
    i=paths.length <= pc ? 0 : paths.length-pc

    for(var j=0,p; j<pc; i++,j++){
        p=paths[i]||''
        this.signals.paneUpdate(j, p, pages[p], params).sendNow()
    }

    this.currPaths=paths
    this.currParams=params
},
netstat=function(self){
	window.addEventListener('online',function(){
		self.signals.online().send()
	})
	window.addEventListener('offline',function(){
		self.signals.offline().send()
	})
}

function Frame(project,env){
	this.paneCount=1

	var self=this
	network.create(env.domains, function(err){
		if (err) return __.dialogs.alert('Code['+err.code+'] msg['+err.error+'], restart?','Network Error','ok',function(){
			location.reload(false)
		})
	
		self.pages= project[PAGES]
		parseFlyers(project[FLYERS],function(flyers){
			router.routes(flyers).on('change', changeRoute, self)
		})

		document.addEventListener('animationstart', function(e){
			console.log(e.animationName)
			if (-1 === e.animationName.indexOf(EVT_RESIZE)) return
			resized(self, parseInt(e.animationName.substr(EVT_RESIZE_LEN)))
		})

		includeAll(project[STYLE], __.dom.link, 'css', function(){
			includeAll(project[DEPS], __.dom.link, 'js', function(){
				specMgr.load(self.host, self.params, project[MIDDLEWARES], function(err, config){
					if (err) return console.error('middleware err:',err)
					sigslot.addMiddleware(config)
					View.call(self, {name:'Frame'}, 
						project[SPEC].concat([
							['env','map',env]
						]))
				})
			})
		})
	})

	netstat(this)
}

Frame.prototype={
    signals:['online','offline','frameAdded','paneAdded','paneUpdate','paneCount'],
    deps:{
        html:   ['file','']
    },

    create: function(deps, params){
        var self=this
		View.prototype.create.call(this, deps, params, false, function(){
			self.signals.frameAdded().send()
		})
    },

    slots: {
        paneAdd: function(from, sender, paneId){
            this.signals.paneAdded(paneId).send()
        },
        frameResized:resized,
        modelReady: function(from, sender){
            if (!router.started()){
                router.start()
                return true //  continue propagation
            }
            return false
        }
    }
}

return Frame
//# sourceURL=p/Frame
})
pico.define('cfg/proj.json','[[],[],[],[["options","map",{"el":".__"}],["css","file","main.css"],["css","file","frame.css"],["NavigationBar","view",[["options","map",{"className":"w-nav navigation-bar"}],["html","file","NavigationBar.html"],["css","file","NavigationBar.css"],["brand","list",["Jasa","Jasa Web Services"]],["navLinks","map",{"Home":"home","Contact":"contact"}],["collapse","text","medium"],["animation","text","over-right"],["duration","int",300],["contain","bool",1]]],[["p/Pane","Content"],"view",[["options","map",{"id":"Content"}],["paneId","int",0],["allmodels","refs","models"],["allint","refs","int"],["alltext","refs","text"]]],["Footer","view",[["options","map",{"className":"w-section footer center"}],["html","file","Footer.html"],["css","file","Footer.css"]]],["NoSession","ctrl",[]]],{"home":[["HeroSection","view",[["options","map",{"className":"w-section hero-section centered"}],["html","file","HeroSection.html"],["css","file","Section.css"],["css","file","HeroSection.css"]]],["p/View","view",[["options","map",{"className":"w-section section"}],["html","file","Section1.html"],["css","file","Section.css"]]],["p/View","view",[["options","map",{"className":"w-section section accent"}],["html","file","Section2.html"],["css","file","Section.css"]]],["p/View","view",[["options","map",{"className":"w-section section"}],["html","file","Section3.html"],["css","file","Section.css"]]]],"contact":[["Map","view",[["options","map",{"className":"w-widget w-widget-map"}],["latlng","list",[1.3431,103.739795]],["style","text","roadmap"],["zoom","int",13],["disableScroll","bool",1],["tooltip","text","Jasa WS"]]],["Form","view",[["options","map",{"className":"w-section section"}],["html","file","Contact.html"]]]]},[["#action","home"],["contact","contact"]]]')
pico.define('cfg/env.json','{"domains":{}}')

var pStr=pico.export('pico/str')
pico.run({
    name: 'main',
    ajax: __.ajax,
    onLoad: __.load,
    env:{
        live:false,
		dataset:(function(el){ if (el) return el.dataset })(document.getElementById('picoEnv'))
    },
    preprocessors:{
        '.asp':function(url,asp){ return pStr.template(asp) }
    },
    paths:{
        '~': './mod/',
        root: './',
        cfg: './cfg/',
		p: './lib/pico/',
		po: './lib/pojs/'
    }
},function(){
    var
    Frame= require('p/Frame'),
    project = require('cfg/proj.json'),
    env = require('cfg/env.json')

    return function(){
        new Frame(project, env)
    }
})

pico.define('main.css','html {\n    font-family: sans-serif;\n    -ms-text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%\n}\n\nbody {\n    margin: 0\n}\n\narticle,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary {\n    display: block\n}\n\naudio,canvas,progress,video {\n    display: inline-block;\n    vertical-align: baseline\n}\n\naudio:not([controls]) {\n    display: none;\n    height: 0\n}\n\n[hidden],template {\n    display: none !important\n}\n\na {\n    background-color: transparent\n}\n\na:active,a:hover {\n    outline: 0\n}\n\nabbr[title] {\n    border-bottom: 1px dotted\n}\n\nb,strong {\n    font-weight: bold\n}\n\ndfn {\n    font-style: italic\n}\n\nh1 {\n    font-size: 2em;\n    margin: .67em 0\n}\n\nmark {\n    background: #ff0;\n    color: #000\n}\n\nsmall {\n    font-size: 80%\n}\n\nsub,sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline\n}\n\nsup {\n    top: -0.5em\n}\n\nsub {\n    bottom: -0.25em\n}\n\nimg {\n    border: 0\n}\n\nsvg:not(:root) {\n    overflow: hidden\n}\n\nfigure {\n    margin: 1em 40px\n}\n\nhr {\n    box-sizing: content-box;\n    height: 0\n}\n\npre {\n    overflow: auto\n}\n\ncode,kbd,pre,samp {\n    font-family: monospace,monospace;\n    font-size: 1em\n}\n\nbutton,input,optgroup,select,textarea {\n    color: inherit;\n    font: inherit;\n    margin: 0\n}\n\nbutton {\n    overflow: visible\n}\n\nbutton,select {\n    text-transform: none\n}\n\nbutton,html input[type="button"],input[type="reset"] {\n    -webkit-appearance: button;\n    cursor: pointer\n}\n\nbutton[disabled],html input[disabled] {\n    cursor: default\n}\n\nbutton::-moz-focus-inner,input::-moz-focus-inner {\n    border: 0;\n    padding: 0\n}\n\ninput {\n    line-height: normal\n}\n\ninput[type="checkbox"],input[type="radio"] {\n    box-sizing: border-box;\n    padding: 0\n}\n\ninput[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button {\n    height: auto\n}\n\ninput[type="search"] {\n    -webkit-appearance: textfield;\n    box-sizing: content-box\n}\n\ninput[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none\n}\n\nfieldset {\n    border: 1px solid #c0c0c0;\n    margin: 0 2px;\n    padding: .35em .625em .75em\n}\n\nlegend {\n    border: 0;\n    padding: 0\n}\n\ntextarea {\n    overflow: auto\n}\n\noptgroup {\n    font-weight: bold\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0\n}\n\ntd,th {\n    padding: 0\n}\n\n@font-face {\n    font-family: &#039;webflow-icons&#039;;\n    src: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg6SAy0AAAC8AAAAYGNtYXAaVcxaAAABHAAAAExnYXNwAAAAEAAAAWgAAAAIZ2x5ZgscV1gAAAFwAAABhGhlYWQCkFKvAAAC9AAAADZoaGVhB0MDyQAAAywAAAAkaG10eBIAA10AAANQAAAAIGxvY2EBMADyAAADcAAAABJtYXhwAAwATQAAA4QAAAAgbmFtZWTuiIAAAAOkAAABe3Bvc3QAAwAAAAAFIAAAACAAAwQAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADmAwPA/8D/wAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAACAAAAAwAAABQAAwABAAAAFAAEADgAAAAKAAgAAgACAAEAIOYD//3//wAAAAAAIOYA//3//wAB/+MaBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQEgAAADIAOAAAUAAAkBBwkBFwMg/kBAAYD+gEABwAHAQP6A/oBAAAEA4AAAAuADgAAFAAATARcJAQfgAcBA/oABgEABwAHAQP6A/oBAAAADAMAA4ANAAsAAGAAxAEoAAAEhIg4CHQEUHgIzITI+Aj0BNC4CIxUhIg4CHQEUHgIzITI+Aj0BNC4CIxUhIg4CHQEUHgIzITI+Aj0BNC4CIwMg/cAHCwkFBQkLBwJABwsJBQUJCwf9wAcLCQUFCQsHAkAHCwkFBQkLB/3ABwsJBQUJCwcCQAcLCQUFCQsHAsAFCQsHIAcLCQUFCQsHIAcLCQXABQkLByAHCwkFBQkLByAHCwkFwAUJCwcgBwsJBQUJCwcgBwsJBQAAAAABAJ0AtAOBApUABQAACQIHCQEDJP7r/upcAXEBcgKU/usBFFv+egGGAAAAAAEAAAABAADSLAJOXw889QALBAAAAAAAz/iHGQAAAADP+IcZAAAAAAOBA4AAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAAA4EAAQAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAACAAAABAABIAQAAOAEAADABAAAnQAAAAAACgAUAB4AMgBGAKwAwgAAAAEAAAAIAEsAAwAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAaAAAAAQAAAAAAAgAOAHEAAQAAAAAAAwAaADAAAQAAAAAABAAaAH8AAQAAAAAABQAWABoAAQAAAAAABgANAEoAAQAAAAAACgA0AJkAAwABBAkAAQAaAAAAAwABBAkAAgAOAHEAAwABBAkAAwAaADAAAwABBAkABAAaAH8AAwABBAkABQAWABoAAwABBAkABgAaAFcAAwABBAkACgA0AJkAdwBlAGIAZgBsAG8AdwAtAGkAYwBvAG4AcwBWAGUAcgBzAGkAbwBuACAAMQAuADAAdwBlAGIAZgBsAG8AdwAtAGkAYwBvAG4Ac3dlYmZsb3ctaWNvbnMAdwBlAGIAZgBsAG8AdwAtAGkAYwBvAG4AcwBSAGUAZwB1AGwAYQByAHcAZQBiAGYAbABvAHcALQBpAGMAbwBuAHMARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA) format(&#039;truetype&#039;),url(data:application/font-woff;charset=utf-8;base64,d09GRk9UVE8AAAVcAAoAAAAABRQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABDRkYgAAAA9AAAAZMAAAGTuzUomU9TLzIAAAKIAAAAYAAAAGAOkgMtY21hcAAAAugAAABMAAAATBpVzFpnYXNwAAADNAAAAAgAAAAIAAAAEGhlYWQAAAM8AAAANgAAADYCkFKvaGhlYQAAA3QAAAAkAAAAJAdDA8lobXR4AAADmAAAACAAAAAgEgADXW1heHAAAAO4AAAABgAAAAYACFAAbmFtZQAAA8AAAAF7AAABe2TuiIBwb3N0AAAFPAAAACAAAAAgAAMAAAEABAQAAQEBDndlYmZsb3ctaWNvbnMAAQIAAQA6+BwC+BsD+BgEHgoACXf/i4seCgAJd/+LiwwHi0v6lPpUBR0AAACaDx0AAACfER0AAAAJHQAAAYoSAAkBAQ4bHR8iJywxNndlYmZsb3ctaWNvbnN3ZWJmbG93LWljb25zdTB1MXUyMHVFNjAwdUU2MDF1RTYwMnVFNjAzAAACAYkABgAIAQEEBwoNJDvH4P6UDv6UDv6UDvyUDvm0+FQV/FT4VEtL+BT8FPwU/BTLSwUO93T4VBX4VPhUy0v8FPwU+BT8FEtLBQ75tPlUFfzUiwV5i319i3kIi2sFi3mZfZ2LCPjUiwWdi5mZi50Ii6sFi519mXmLCIv7VBX81IsFeYt9fYt5CItrBYt5mX2diwj41IsFnYuZmYudCIurBYudfZl5iwiL+1QV/NSLBXmLfX2LeQiLawWLeZl9nYsI+NSLBZ2LmZmLnQiLqwWLnX2ZeYsIDvm4+SkV+6n7qvuq96ovLvgG/Bj4BvgYBQ76lBT6lBWLDAoAAAMEAAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA5gMDwP/A/8ADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAgAAAAMAAAAUAAMAAQAAABQABAA4AAAACgAIAAIAAgABACDmA//9//8AAAAAACDmAP/9//8AAf/jGgQAAwABAAAAAAAAAAAAAAABAAH//wAPAAEAAAABAAC1pQTjXw889QALBAAAAAAAz/iHGQAAAADP+IcZAAAAAAOBA4AAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAAA4EAAQAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAACAAAABAABIAQAAOAEAADABAAAnQAAUAAACAAAAAAADgCuAAEAAAAAAAEAGgAAAAEAAAAAAAIADgBxAAEAAAAAAAMAGgAwAAEAAAAAAAQAGgB/AAEAAAAAAAUAFgAaAAEAAAAAAAYADQBKAAEAAAAAAAoANACZAAMAAQQJAAEAGgAAAAMAAQQJAAIADgBxAAMAAQQJAAMAGgAwAAMAAQQJAAQAGgB/AAMAAQQJAAUAFgAaAAMAAQQJAAYAGgBXAAMAAQQJAAoANACZAHcAZQBiAGYAbABvAHcALQBpAGMAbwBuAHMAVgBlAHIAcwBpAG8AbgAgADEALgAwAHcAZQBiAGYAbABvAHcALQBpAGMAbwBuAHN3ZWJmbG93LWljb25zAHcAZQBiAGYAbABvAHcALQBpAGMAbwBuAHMAUgBlAGcAdQBsAGEAcgB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format(&#039;woff&#039;);\n    font-weight: normal;\n    font-style: normal\n}\n\n[class^="w-icon-"],[class*=" w-icon-"] {\n    font-family: &#039;webflow-icons&#039;;\n    speak: none;\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-transform: none;\n    line-height: 1;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale\n}\n\n.w-icon-slider-right:before {\n    content: "\e600"\n}\n\n.w-icon-slider-left:before {\n    content: "\e601"\n}\n\n.w-icon-nav-menu:before {\n    content: "\e602"\n}\n\n.w-icon-arrow-down:before,.w-icon-dropdown-toggle:before {\n    content: "\e603"\n}\n\n* {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box\n}\n\nhtml {\n    height: 100%\n}\n\nbody {\n    margin: 0;\n    min-height: 100%;\n    background-color: #fff;\n    font-family: Arial,sans-serif;\n    font-size: 14px;\n    line-height: 20px;\n    color: #333\n}\n\nimg {\n    max-width: 100%;\n    vertical-align: middle;\n    display: inline-block\n}\n\nhtml.w-mod-touch * {\n    background-attachment: scroll!important\n}\n\n.w-block {\n    display: block\n}\n\n.w-inline-block {\n    max-width: 100%;\n    display: inline-block\n}\n\n.w-clearfix:before,.w-clearfix:after {\n    content: " ";\n    display: table\n}\n\n.w-clearfix:after {\n    clear: both\n}\n\n.w-hidden {\n    display: none\n}\n\n.w-button {\n    display: inline-block;\n    padding: 9px 15px;\n    background-color: #3898ec;\n    color: white;\n    border: 0;\n    line-height: inherit;\n    text-decoration: none;\n    cursor: pointer;\n    border-radius: 0\n}\n\ninput.w-button {\n    -webkit-appearance: button\n}\n\nhtml[data-w-dynpage] [data-w-cloak] {\n    color: transparent!important\n}\n\nh1,h2,h3,h4,h5,h6 {\n    font-weight: bold;\n    margin-bottom: 10px\n}\n\nh1 {\n    font-size: 38px;\n    line-height: 44px;\n    margin-top: 20px\n}\n\nh2 {\n    font-size: 32px;\n    line-height: 36px;\n    margin-top: 20px\n}\n\nh3 {\n    font-size: 24px;\n    line-height: 30px;\n    margin-top: 20px\n}\n\nh4 {\n    font-size: 18px;\n    line-height: 24px;\n    margin-top: 10px\n}\n\nh5 {\n    font-size: 14px;\n    line-height: 20px;\n    margin-top: 10px\n}\n\nh6 {\n    font-size: 12px;\n    line-height: 18px;\n    margin-top: 10px\n}\n\np {\n    margin-top: 0;\n    margin-bottom: 10px\n}\n\na:focus {\n    outline: 0\n}\n\nblockquote {\n    margin: 0 0 10px 0;\n    padding: 10px 20px;\n    border-left: 5px solid #e2e2e2;\n    font-size: 18px;\n    line-height: 22px\n}\n\nfigure {\n    margin: 0;\n    margin-bottom: 10px\n}\n\nfigcaption {\n    margin-top: 5px;\n    text-align: center\n}\n\nul,ol {\n    margin-top: 0;\n    margin-bottom: 10px;\n    padding-left: 40px\n}\n\n.w-list-unstyled {\n    padding-left: 0;\n    list-style: none\n}\n\n.w-embed:before,.w-embed:after {\n    content: " ";\n    display: table\n}\n\n.w-embed:after {\n    clear: both\n}\n\n.w-video {\n    width: 100%;\n    position: relative;\n    padding: 0\n}\n\n.w-video iframe,.w-video object,.w-video embed {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%\n}\n\nfieldset {\n    padding: 0;\n    margin: 0;\n    border: 0\n}\n\nbutton,html input[type="button"],input[type="reset"] {\n    border: 0;\n    cursor: pointer;\n    -webkit-appearance: button\n}\n\n.w-form {\n    margin: 0 0 15px\n}\n\n.w-form-done {\n    display: none;\n    padding: 20px;\n    text-align: center;\n    background-color: #ddd\n}\n\n.w-form-fail {\n    display: none;\n    margin-top: 10px;\n    padding: 10px;\n    background-color: #ffdede\n}\n\nlabel {\n    display: block;\n    margin-bottom: 5px;\n    font-weight: bold\n}\n\n.w-input,.w-select {\n    display: block;\n    width: 100%;\n    height: 38px;\n    padding: 8px 12px;\n    margin-bottom: 10px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #333;\n    vertical-align: middle;\n    background-color: #fff;\n    border: 1px solid #ccc\n}\n\n.w-input:-moz-placeholder,.w-select:-moz-placeholder {\n    color: #999\n}\n\n.w-input::-moz-placeholder,.w-select::-moz-placeholder {\n    color: #999;\n    opacity: 1\n}\n\n.w-input:-ms-input-placeholder,.w-select:-ms-input-placeholder {\n    color: #999\n}\n\n.w-input::-webkit-input-placeholder,.w-select::-webkit-input-placeholder {\n    color: #999\n}\n\n.w-input:focus,.w-select:focus {\n    border-color: #3898ec;\n    outline: 0\n}\n\n.w-input[disabled],.w-select[disabled],.w-input[readonly],.w-select[readonly],fieldset[disabled] .w-input,fieldset[disabled] .w-select {\n    cursor: not-allowed;\n    background-color: #eee\n}\n\ntextarea.w-input,textarea.w-select {\n    height: auto\n}\n\n.w-select {\n    background-image: -webkit-linear-gradient(white 0,#f3f3f3 100%);\n    background-image: linear-gradient(white 0,#f3f3f3 100%)\n}\n\n.w-select[multiple] {\n    height: auto\n}\n\n.w-form-label {\n    display: inline-block;\n    cursor: pointer;\n    font-weight: normal;\n    margin-bottom: 0\n}\n\n.w-checkbox,.w-radio {\n    display: block;\n    margin-bottom: 5px;\n    padding-left: 20px\n}\n\n.w-checkbox:before,.w-radio:before,.w-checkbox:after,.w-radio:after {\n    content: " ";\n    display: table\n}\n\n.w-checkbox:after,.w-radio:after {\n    clear: both\n}\n\n.w-checkbox-input,.w-radio-input {\n    margin: 4px 0 0;\n    margin-top: 1px \9;\n    line-height: normal;\n    float: left;\n    margin-left: -20px\n}\n\n.w-radio-input {\n    margin-top: 3px\n}\n\n.w-container {\n    margin-left: auto;\n    margin-right: auto;\n    max-width: 940px\n}\n\n.w-container:before,.w-container:after {\n    content: " ";\n    display: table\n}\n\n.w-container:after {\n    clear: both\n}\n\n.w-container .w-row {\n    margin-left: -10px;\n    margin-right: -10px\n}\n\n.w-row:before,.w-row:after {\n    content: " ";\n    display: table\n}\n\n.w-row:after {\n    clear: both\n}\n\n.w-row .w-row {\n    margin-left: 0;\n    margin-right: 0\n}\n\n.w-col {\n    position: relative;\n    float: left;\n    width: 100%;\n    min-height: 1px;\n    padding-left: 10px;\n    padding-right: 10px\n}\n\n.w-col .w-col {\n    padding-left: 0;\n    padding-right: 0\n}\n\n.w-col-1 {\n    width: 8.33333333%\n}\n\n.w-col-2 {\n    width: 16.66666667%\n}\n\n.w-col-3 {\n    width: 25%\n}\n\n.w-col-4 {\n    width: 33.33333333%\n}\n\n.w-col-5 {\n    width: 41.66666667%\n}\n\n.w-col-6 {\n    width: 50%\n}\n\n.w-col-7 {\n    width: 58.33333333%\n}\n\n.w-col-8 {\n    width: 66.66666667%\n}\n\n.w-col-9 {\n    width: 75%\n}\n\n.w-col-10 {\n    width: 83.33333333%\n}\n\n.w-col-11 {\n    width: 91.66666667%\n}\n\n.w-col-12 {\n    width: 100%\n}\n\n.w-col-push-1 {\n    left: 8.33333333%\n}\n\n.w-col-push-2 {\n    left: 16.66666667%\n}\n\n.w-col-push-3 {\n    left: 25%\n}\n\n.w-col-push-4 {\n    left: 33.33333333%\n}\n\n.w-col-push-5 {\n    left: 41.66666667%\n}\n\n.w-col-push-6 {\n    left: 50%\n}\n\n.w-col-push-7 {\n    left: 58.33333333%\n}\n\n.w-col-push-8 {\n    left: 66.66666667%\n}\n\n.w-col-push-9 {\n    left: 75%\n}\n\n.w-col-push-10 {\n    left: 83.33333333%\n}\n\n.w-col-push-11 {\n    left: 91.66666667%\n}\n\n.w-col-pull-1 {\n    right: 8.33333333%\n}\n\n.w-col-pull-2 {\n    right: 16.66666667%\n}\n\n.w-col-pull-3 {\n    right: 25%\n}\n\n.w-col-pull-4 {\n    right: 33.33333333%\n}\n\n.w-col-pull-5 {\n    right: 41.66666667%\n}\n\n.w-col-pull-6 {\n    right: 50%\n}\n\n.w-col-pull-7 {\n    right: 58.33333333%\n}\n\n.w-col-pull-8 {\n    right: 66.66666667%\n}\n\n.w-col-pull-9 {\n    right: 75%\n}\n\n.w-col-pull-10 {\n    right: 83.33333333%\n}\n\n.w-col-pull-11 {\n    right: 91.66666667%\n}\n\n.w-col-offset-1 {\n    margin-left: 8.33333333%\n}\n\n.w-col-offset-2 {\n    margin-left: 16.66666667%\n}\n\n.w-col-offset-3 {\n    margin-left: 25%\n}\n\n.w-col-offset-4 {\n    margin-left: 33.33333333%\n}\n\n.w-col-offset-5 {\n    margin-left: 41.66666667%\n}\n\n.w-col-offset-6 {\n    margin-left: 50%\n}\n\n.w-col-offset-7 {\n    margin-left: 58.33333333%\n}\n\n.w-col-offset-8 {\n    margin-left: 66.66666667%\n}\n\n.w-col-offset-9 {\n    margin-left: 75%\n}\n\n.w-col-offset-10 {\n    margin-left: 83.33333333%\n}\n\n.w-col-offset-11 {\n    margin-left: 91.66666667%\n}\n\n.w-hidden-main {\n    display: none!important\n}\n\n@media screen and (max-width: 991px) {\n    .w-container {\n        max-width:728px\n    }\n\n    .w-hidden-main {\n        display: inherit!important\n    }\n\n    .w-hidden-medium {\n        display: none!important\n    }\n\n    .w-col-medium-1 {\n        width: 8.33333333%\n    }\n\n    .w-col-medium-2 {\n        width: 16.66666667%\n    }\n\n    .w-col-medium-3 {\n        width: 25%\n    }\n\n    .w-col-medium-4 {\n        width: 33.33333333%\n    }\n\n    .w-col-medium-5 {\n        width: 41.66666667%\n    }\n\n    .w-col-medium-6 {\n        width: 50%\n    }\n\n    .w-col-medium-7 {\n        width: 58.33333333%\n    }\n\n    .w-col-medium-8 {\n        width: 66.66666667%\n    }\n\n    .w-col-medium-9 {\n        width: 75%\n    }\n\n    .w-col-medium-10 {\n        width: 83.33333333%\n    }\n\n    .w-col-medium-11 {\n        width: 91.66666667%\n    }\n\n    .w-col-medium-12 {\n        width: 100%\n    }\n\n    .w-col-medium-push-1 {\n        left: 8.33333333%\n    }\n\n    .w-col-medium-push-2 {\n        left: 16.66666667%\n    }\n\n    .w-col-medium-push-3 {\n        left: 25%\n    }\n\n    .w-col-medium-push-4 {\n        left: 33.33333333%\n    }\n\n    .w-col-medium-push-5 {\n        left: 41.66666667%\n    }\n\n    .w-col-medium-push-6 {\n        left: 50%\n    }\n\n    .w-col-medium-push-7 {\n        left: 58.33333333%\n    }\n\n    .w-col-medium-push-8 {\n        left: 66.66666667%\n    }\n\n    .w-col-medium-push-9 {\n        left: 75%\n    }\n\n    .w-col-medium-push-10 {\n        left: 83.33333333%\n    }\n\n    .w-col-medium-push-11 {\n        left: 91.66666667%\n    }\n\n    .w-col-medium-pull-1 {\n        right: 8.33333333%\n    }\n\n    .w-col-medium-pull-2 {\n        right: 16.66666667%\n    }\n\n    .w-col-medium-pull-3 {\n        right: 25%\n    }\n\n    .w-col-medium-pull-4 {\n        right: 33.33333333%\n    }\n\n    .w-col-medium-pull-5 {\n        right: 41.66666667%\n    }\n\n    .w-col-medium-pull-6 {\n        right: 50%\n    }\n\n    .w-col-medium-pull-7 {\n        right: 58.33333333%\n    }\n\n    .w-col-medium-pull-8 {\n        right: 66.66666667%\n    }\n\n    .w-col-medium-pull-9 {\n        right: 75%\n    }\n\n    .w-col-medium-pull-10 {\n        right: 83.33333333%\n    }\n\n    .w-col-medium-pull-11 {\n        right: 91.66666667%\n    }\n\n    .w-col-medium-offset-1 {\n        margin-left: 8.33333333%\n    }\n\n    .w-col-medium-offset-2 {\n        margin-left: 16.66666667%\n    }\n\n    .w-col-medium-offset-3 {\n        margin-left: 25%\n    }\n\n    .w-col-medium-offset-4 {\n        margin-left: 33.33333333%\n    }\n\n    .w-col-medium-offset-5 {\n        margin-left: 41.66666667%\n    }\n\n    .w-col-medium-offset-6 {\n        margin-left: 50%\n    }\n\n    .w-col-medium-offset-7 {\n        margin-left: 58.33333333%\n    }\n\n    .w-col-medium-offset-8 {\n        margin-left: 66.66666667%\n    }\n\n    .w-col-medium-offset-9 {\n        margin-left: 75%\n    }\n\n    .w-col-medium-offset-10 {\n        margin-left: 83.33333333%\n    }\n\n    .w-col-medium-offset-11 {\n        margin-left: 91.66666667%\n    }\n\n    .w-col-stack {\n        width: 100%;\n        left: auto;\n        right: auto\n    }\n}\n\n@media screen and (max-width: 767px) {\n    .w-hidden-main {\n        display:inherit!important\n    }\n\n    .w-hidden-medium {\n        display: inherit!important\n    }\n\n    .w-hidden-small {\n        display: none!important\n    }\n\n    .w-row,.w-container .w-row {\n        margin-left: 0;\n        margin-right: 0\n    }\n\n    .w-col {\n        width: 100%;\n        left: auto;\n        right: auto\n    }\n\n    .w-col-small-1 {\n        width: 8.33333333%\n    }\n\n    .w-col-small-2 {\n        width: 16.66666667%\n    }\n\n    .w-col-small-3 {\n        width: 25%\n    }\n\n    .w-col-small-4 {\n        width: 33.33333333%\n    }\n\n    .w-col-small-5 {\n        width: 41.66666667%\n    }\n\n    .w-col-small-6 {\n        width: 50%\n    }\n\n    .w-col-small-7 {\n        width: 58.33333333%\n    }\n\n    .w-col-small-8 {\n        width: 66.66666667%\n    }\n\n    .w-col-small-9 {\n        width: 75%\n    }\n\n    .w-col-small-10 {\n        width: 83.33333333%\n    }\n\n    .w-col-small-11 {\n        width: 91.66666667%\n    }\n\n    .w-col-small-12 {\n        width: 100%\n    }\n\n    .w-col-small-push-1 {\n        left: 8.33333333%\n    }\n\n    .w-col-small-push-2 {\n        left: 16.66666667%\n    }\n\n    .w-col-small-push-3 {\n        left: 25%\n    }\n\n    .w-col-small-push-4 {\n        left: 33.33333333%\n    }\n\n    .w-col-small-push-5 {\n        left: 41.66666667%\n    }\n\n    .w-col-small-push-6 {\n        left: 50%\n    }\n\n    .w-col-small-push-7 {\n        left: 58.33333333%\n    }\n\n    .w-col-small-push-8 {\n        left: 66.66666667%\n    }\n\n    .w-col-small-push-9 {\n        left: 75%\n    }\n\n    .w-col-small-push-10 {\n        left: 83.33333333%\n    }\n\n    .w-col-small-push-11 {\n        left: 91.66666667%\n    }\n\n    .w-col-small-pull-1 {\n        right: 8.33333333%\n    }\n\n    .w-col-small-pull-2 {\n        right: 16.66666667%\n    }\n\n    .w-col-small-pull-3 {\n        right: 25%\n    }\n\n    .w-col-small-pull-4 {\n        right: 33.33333333%\n    }\n\n    .w-col-small-pull-5 {\n        right: 41.66666667%\n    }\n\n    .w-col-small-pull-6 {\n        right: 50%\n    }\n\n    .w-col-small-pull-7 {\n        right: 58.33333333%\n    }\n\n    .w-col-small-pull-8 {\n        right: 66.66666667%\n    }\n\n    .w-col-small-pull-9 {\n        right: 75%\n    }\n\n    .w-col-small-pull-10 {\n        right: 83.33333333%\n    }\n\n    .w-col-small-pull-11 {\n        right: 91.66666667%\n    }\n\n    .w-col-small-offset-1 {\n        margin-left: 8.33333333%\n    }\n\n    .w-col-small-offset-2 {\n        margin-left: 16.66666667%\n    }\n\n    .w-col-small-offset-3 {\n        margin-left: 25%\n    }\n\n    .w-col-small-offset-4 {\n        margin-left: 33.33333333%\n    }\n\n    .w-col-small-offset-5 {\n        margin-left: 41.66666667%\n    }\n\n    .w-col-small-offset-6 {\n        margin-left: 50%\n    }\n\n    .w-col-small-offset-7 {\n        margin-left: 58.33333333%\n    }\n\n    .w-col-small-offset-8 {\n        margin-left: 66.66666667%\n    }\n\n    .w-col-small-offset-9 {\n        margin-left: 75%\n    }\n\n    .w-col-small-offset-10 {\n        margin-left: 83.33333333%\n    }\n\n    .w-col-small-offset-11 {\n        margin-left: 91.66666667%\n    }\n}\n\n@media screen and (max-width: 479px) {\n    .w-container {\n        max-width:none\n    }\n\n    .w-hidden-main {\n        display: inherit!important\n    }\n\n    .w-hidden-medium {\n        display: inherit!important\n    }\n\n    .w-hidden-small {\n        display: inherit!important\n    }\n\n    .w-hidden-tiny {\n        display: none!important\n    }\n\n    .w-col {\n        width: 100%\n    }\n\n    .w-col-tiny-1 {\n        width: 8.33333333%\n    }\n\n    .w-col-tiny-2 {\n        width: 16.66666667%\n    }\n\n    .w-col-tiny-3 {\n        width: 25%\n    }\n\n    .w-col-tiny-4 {\n        width: 33.33333333%\n    }\n\n    .w-col-tiny-5 {\n        width: 41.66666667%\n    }\n\n    .w-col-tiny-6 {\n        width: 50%\n    }\n\n    .w-col-tiny-7 {\n        width: 58.33333333%\n    }\n\n    .w-col-tiny-8 {\n        width: 66.66666667%\n    }\n\n    .w-col-tiny-9 {\n        width: 75%\n    }\n\n    .w-col-tiny-10 {\n        width: 83.33333333%\n    }\n\n    .w-col-tiny-11 {\n        width: 91.66666667%\n    }\n\n    .w-col-tiny-12 {\n        width: 100%\n    }\n\n    .w-col-tiny-push-1 {\n        left: 8.33333333%\n    }\n\n    .w-col-tiny-push-2 {\n        left: 16.66666667%\n    }\n\n    .w-col-tiny-push-3 {\n        left: 25%\n    }\n\n    .w-col-tiny-push-4 {\n        left: 33.33333333%\n    }\n\n    .w-col-tiny-push-5 {\n        left: 41.66666667%\n    }\n\n    .w-col-tiny-push-6 {\n        left: 50%\n    }\n\n    .w-col-tiny-push-7 {\n        left: 58.33333333%\n    }\n\n    .w-col-tiny-push-8 {\n        left: 66.66666667%\n    }\n\n    .w-col-tiny-push-9 {\n        left: 75%\n    }\n\n    .w-col-tiny-push-10 {\n        left: 83.33333333%\n    }\n\n    .w-col-tiny-push-11 {\n        left: 91.66666667%\n    }\n\n    .w-col-tiny-pull-1 {\n        right: 8.33333333%\n    }\n\n    .w-col-tiny-pull-2 {\n        right: 16.66666667%\n    }\n\n    .w-col-tiny-pull-3 {\n        right: 25%\n    }\n\n    .w-col-tiny-pull-4 {\n        right: 33.33333333%\n    }\n\n    .w-col-tiny-pull-5 {\n        right: 41.66666667%\n    }\n\n    .w-col-tiny-pull-6 {\n        right: 50%\n    }\n\n    .w-col-tiny-pull-7 {\n        right: 58.33333333%\n    }\n\n    .w-col-tiny-pull-8 {\n        right: 66.66666667%\n    }\n\n    .w-col-tiny-pull-9 {\n        right: 75%\n    }\n\n    .w-col-tiny-pull-10 {\n        right: 83.33333333%\n    }\n\n    .w-col-tiny-pull-11 {\n        right: 91.66666667%\n    }\n\n    .w-col-tiny-offset-1 {\n        margin-left: 8.33333333%\n    }\n\n    .w-col-tiny-offset-2 {\n        margin-left: 16.66666667%\n    }\n\n    .w-col-tiny-offset-3 {\n        margin-left: 25%\n    }\n\n    .w-col-tiny-offset-4 {\n        margin-left: 33.33333333%\n    }\n\n    .w-col-tiny-offset-5 {\n        margin-left: 41.66666667%\n    }\n\n    .w-col-tiny-offset-6 {\n        margin-left: 50%\n    }\n\n    .w-col-tiny-offset-7 {\n        margin-left: 58.33333333%\n    }\n\n    .w-col-tiny-offset-8 {\n        margin-left: 66.66666667%\n    }\n\n    .w-col-tiny-offset-9 {\n        margin-left: 75%\n    }\n\n    .w-col-tiny-offset-10 {\n        margin-left: 83.33333333%\n    }\n\n    .w-col-tiny-offset-11 {\n        margin-left: 91.66666667%\n    }\n}\n\n.w-widget {\n    position: relative\n}\n\n.w-widget-map {\n    width: 100%;\n    height: 400px\n}\n\n.w-widget-map label {\n    width: auto;\n    display: inline\n}\n\n.w-widget-map img {\n    max-width: inherit\n}\n\n.w-widget-map .gm-style-iw {\n    width: 90%!important;\n    height: auto!important;\n    top: 7px!important;\n    left: 6%!important;\n    display: inline;\n    text-align: center;\n    overflow: hidden\n}\n\n.w-widget-map .gm-style-iw+div {\n    display: none\n}\n\n.w-widget-twitter {\n    overflow: hidden\n}\n\n.w-widget-gplus {\n    overflow: hidden\n}\n\n.w-slider {\n    position: relative;\n    height: 300px;\n    text-align: center;\n    background: #ddd;\n    clear: both;\n    -webkit-tap-highlight-color: rgba(0,0,0,0);\n    tap-highlight-color: rgba(0,0,0,0)\n}\n\n.w-slider-mask {\n    position: relative;\n    display: block;\n    overflow: hidden;\n    z-index: 1;\n    left: 0;\n    right: 0;\n    height: 100%;\n    white-space: nowrap\n}\n\n.w-slide {\n    position: relative;\n    display: inline-block;\n    vertical-align: top;\n    width: 100%;\n    height: 100%;\n    white-space: normal;\n    text-align: left\n}\n\n.w-slider-nav {\n    position: absolute;\n    z-index: 2;\n    top: auto;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    margin: auto;\n    padding-top: 10px;\n    height: 40px;\n    text-align: center;\n    -webkit-tap-highlight-color: rgba(0,0,0,0);\n    tap-highlight-color: rgba(0,0,0,0)\n}\n\n.w-slider-nav.w-round>div {\n    -webkit-border-radius: 100%;\n    -webkit-background-clip: padding-box;\n    -moz-border-radius: 100%;\n    -moz-background-clip: padding;\n    border-radius: 100%;\n    background-clip: padding-box\n}\n\n.w-slider-nav.w-num>div {\n    width: auto;\n    height: auto;\n    padding: .2em .5em;\n    font-size: inherit;\n    line-height: inherit\n}\n\n.w-slider-nav.w-shadow>div {\n    -webkit-box-shadow: 0 0 3px rgba(51,51,51,0.4);\n    -moz-box-shadow: 0 0 3px rgba(51,51,51,0.4);\n    box-shadow: 0 0 3px rgba(51,51,51,0.4)\n}\n\n.w-slider-nav-invert {\n    color: #fff\n}\n\n.w-slider-nav-invert>div {\n    background-color: rgba(34,34,34,0.4)\n}\n\n.w-slider-nav-invert>div.w-active {\n    background-color: #222\n}\n\n.w-slider-dot {\n    position: relative;\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    background-color: rgba(255,255,255,0.4);\n    cursor: pointer;\n    margin: 0 3px .5em;\n    -webkit-transition: background-color 100ms,color 100ms;\n    -moz-transition: background-color 100ms,color 100ms;\n    -o-transition: background-color 100ms,color 100ms;\n    transition: background-color 100ms,color 100ms\n}\n\n.w-slider-dot.w-active {\n    background-color: #fff\n}\n\n.w-slider-arrow-left,.w-slider-arrow-right {\n    position: absolute;\n    width: 80px;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    margin: auto;\n    cursor: pointer;\n    overflow: hidden;\n    color: white;\n    font-size: 40px;\n    -webkit-tap-highlight-color: rgba(0,0,0,0);\n    tap-highlight-color: rgba(0,0,0,0);\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none\n}\n\n.w-slider-arrow-left [class^="w-icon-"],.w-slider-arrow-right [class^="w-icon-"],.w-slider-arrow-left [class*=" w-icon-"],.w-slider-arrow-right [class*=" w-icon-"] {\n    position: absolute\n}\n\n.w-slider-arrow-left {\n    z-index: 3;\n    right: auto\n}\n\n.w-slider-arrow-right {\n    z-index: 4;\n    left: auto\n}\n\n.w-icon-slider-left,.w-icon-slider-right {\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    margin: auto;\n    width: 1em;\n    height: 1em\n}\n\n.w-dropdown {\n    display: inline-block;\n    position: relative;\n    text-align: left;\n    margin-left: auto;\n    margin-right: auto;\n    z-index: 900\n}\n\n.w-dropdown-btn,.w-dropdown-toggle,.w-dropdown-link {\n    position: relative;\n    vertical-align: top;\n    text-decoration: none;\n    color: #222;\n    padding: 20px;\n    text-align: left;\n    margin-left: auto;\n    margin-right: auto;\n    white-space: nowrap\n}\n\n.w-dropdown-toggle {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    display: inline-block;\n    cursor: pointer;\n    padding-right: 40px\n}\n\n.w-dropdown-toggle:focus {\n    outline: 0\n}\n\n.w-icon-dropdown-toggle {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto;\n    margin-right: 20px;\n    width: 1em;\n    height: 1em\n}\n\n.w-dropdown-list {\n    position: absolute;\n    background: #ddd;\n    display: none;\n    min-width: 100%\n}\n\n.w-dropdown-list.w--open {\n    display: block\n}\n\n.w-dropdown-link {\n    padding: 10px 20px;\n    display: block;\n    color: #222\n}\n\n.w-dropdown-link.w--current {\n    color: #0082f3\n}\n\n.w-nav[data-collapse="all"] .w-dropdown,.w-nav[data-collapse="all"] .w-dropdown-toggle {\n    display: block\n}\n\n.w-nav[data-collapse="all"] .w-dropdown-list {\n    position: static\n}\n\n@media screen and (max-width: 991px) {\n    .w-nav[data-collapse="medium"] .w-dropdown,.w-nav[data-collapse="medium"] .w-dropdown-toggle {\n        display:block\n    }\n\n    .w-nav[data-collapse="medium"] .w-dropdown-list {\n        position: static\n    }\n}\n\n@media screen and (max-width: 767px) {\n    .w-nav[data-collapse="small"] .w-dropdown,.w-nav[data-collapse="small"] .w-dropdown-toggle {\n        display:block\n    }\n\n    .w-nav[data-collapse="small"] .w-dropdown-list {\n        position: static\n    }\n\n    .w-nav-brand {\n        padding-left: 10px\n    }\n}\n\n@media screen and (max-width: 479px) {\n    .w-nav[data-collapse="tiny"] .w-dropdown,.w-nav[data-collapse="tiny"] .w-dropdown-toggle {\n        display:block\n    }\n\n    .w-nav[data-collapse="tiny"] .w-dropdown-list {\n        position: static\n    }\n}\n\n.w-lightbox-backdrop {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    color: #fff;\n    font-family: "Helvetica Neue",Helvetica,Ubuntu,"Segoe UI",Verdana,sans-serif;\n    font-size: 17px;\n    font-weight: 300;\n    text-align: center;\n    background: rgba(0,0,0,0.9);\n    z-index: 2000;\n    outline: 0;\n    opacity: 0;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    -webkit-tap-highlight-color: transparent;\n    -webkit-transform: translate(0,0)\n}\n\n.w-lightbox-backdrop,.w-lightbox-container {\n    height: 100%;\n    overflow: auto;\n    -webkit-overflow-scrolling: touch\n}\n\n.w-lightbox-content {\n    position: relative;\n    height: 100vh;\n    overflow: hidden\n}\n\n.w-lightbox-view {\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    opacity: 0\n}\n\n.w-lightbox-view:before {\n    content: "";\n    height: 100vh\n}\n\n.w-lightbox-group,.w-lightbox-group .w-lightbox-view,.w-lightbox-group .w-lightbox-view:before {\n    height: 86vh\n}\n\n.w-lightbox-frame,.w-lightbox-view:before {\n    display: inline-block;\n    vertical-align: middle\n}\n\n.w-lightbox-figure {\n    position: relative;\n    margin: 0\n}\n\n.w-lightbox-group .w-lightbox-figure {\n    cursor: pointer\n}\n\n.w-lightbox-img {\n    width: auto;\n    height: auto;\n    max-width: none\n}\n\n.w-lightbox-image {\n    display: block;\n    max-width: 100vw;\n    max-height: 100vh\n}\n\n.w-lightbox-group .w-lightbox-image {\n    max-height: 86vh\n}\n\n.w-lightbox-caption {\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    padding: .5em 1em;\n    background: rgba(0,0,0,0.4);\n    text-align: left;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden\n}\n\n.w-lightbox-embed {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%\n}\n\n.w-lightbox-control {\n    position: absolute;\n    top: 0;\n    width: 4em;\n    background-size: 24px;\n    background-repeat: no-repeat;\n    background-position: center;\n    cursor: pointer;\n    -webkit-transition: all .3s;\n    transition: all .3s\n}\n\n.w-lightbox-left {\n    display: none;\n    bottom: 0;\n    left: 0;\n    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yMCAwIDI0IDQwIiB3aWR0aD0iMjQiIGhlaWdodD0iNDAiPjxnIHRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0ibTAgMGg1djIzaDIzdjVoLTI4eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDN2MjNoMjN2M2gtMjZ6IiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==")\n}\n\n.w-lightbox-right {\n    display: none;\n    right: 0;\n    bottom: 0;\n    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMjQgNDAiIHdpZHRoPSIyNCIgaGVpZ2h0PSI0MCI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMC0waDI4djI4aC01di0yM2gtMjN6IiBvcGFjaXR5PSIuNCIvPjxwYXRoIGQ9Im0xIDFoMjZ2MjZoLTN2LTIzaC0yM3oiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+")\n}\n\n.w-lightbox-close {\n    right: 0;\n    height: 2.6em;\n    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMTggMTciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNyI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMCAwaDd2LTdoNXY3aDd2NWgtN3Y3aC01di03aC03eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDd2LTdoM3Y3aDd2M2gtN3Y3aC0zdi03aC03eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=");\n    background-size: 18px\n}\n\n.w-lightbox-strip {\n    padding: 0 1vh;\n    line-height: 0;\n    white-space: nowrap;\n    overflow-x: auto;\n    overflow-y: hidden\n}\n\n.w-lightbox-item {\n    display: inline-block;\n    width: 10vh;\n    padding: 2vh 1vh;\n    box-sizing: content-box;\n    cursor: pointer;\n    -webkit-transform: translate3d(0,0,0)\n}\n\n.w-lightbox-active {\n    opacity: .3\n}\n\n.w-lightbox-thumbnail {\n    position: relative;\n    height: 10vh;\n    background: #222;\n    overflow: hidden\n}\n\n.w-lightbox-thumbnail-image {\n    position: absolute;\n    top: 0;\n    left: 0\n}\n\n.w-lightbox-thumbnail .w-lightbox-tall {\n    top: 50%;\n    width: 100%;\n    -webkit-transform: translate(0,-50%);\n    -ms-transform: translate(0,-50%);\n    transform: translate(0,-50%)\n}\n\n.w-lightbox-thumbnail .w-lightbox-wide {\n    left: 50%;\n    height: 100%;\n    -webkit-transform: translate(-50%,0);\n    -ms-transform: translate(-50%,0);\n    transform: translate(-50%,0)\n}\n\n.w-lightbox-spinner {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    box-sizing: border-box;\n    width: 40px;\n    height: 40px;\n    margin-top: -20px;\n    margin-left: -20px;\n    border: 5px solid rgba(0,0,0,0.4);\n    border-radius: 50%;\n    -webkit-animation: spin .8s infinite linear;\n    animation: spin .8s infinite linear\n}\n\n.w-lightbox-spinner:after {\n    content: "";\n    position: absolute;\n    top: -4px;\n    right: -4px;\n    bottom: -4px;\n    left: -4px;\n    border: 3px solid transparent;\n    border-bottom-color: #fff;\n    border-radius: 50%\n}\n\n.w-lightbox-hide {\n    display: none\n}\n\n.w-lightbox-noscroll {\n    overflow: hidden\n}\n\n@media (min-width: 768px) {\n    .w-lightbox-content {\n        height:96vh;\n        margin-top: 2vh\n    }\n\n    .w-lightbox-view,.w-lightbox-view:before {\n        height: 96vh\n    }\n\n    .w-lightbox-group,.w-lightbox-group .w-lightbox-view,.w-lightbox-group .w-lightbox-view:before {\n        height: 84vh\n    }\n\n    .w-lightbox-image {\n        max-width: 96vw;\n        max-height: 96vh\n    }\n\n    .w-lightbox-group .w-lightbox-image {\n        max-width: 82.3vw;\n        max-height: 84vh\n    }\n\n    .w-lightbox-left,.w-lightbox-right {\n        display: block;\n        opacity: .5\n    }\n\n    .w-lightbox-close {\n        opacity: .8\n    }\n\n    .w-lightbox-control:hover {\n        opacity: 1\n    }\n}\n\n.w-lightbox-inactive,.w-lightbox-inactive:hover {\n    opacity: 0\n}\n\n.w-richtext:before,.w-richtext:after {\n    content: " ";\n    display: table\n}\n\n.w-richtext:after {\n    clear: both\n}\n\n.w-richtext ol,.w-richtext ul {\n    overflow: hidden\n}\n\n.w-richtext .w-richtext-figure-selected[data-rt-type="video"] div:before {\n    outline: 2px solid #2895f7\n}\n\n.w-richtext .w-richtext-figure-selected[data-rt-type="image"] div {\n    outline: 2px solid #2895f7\n}\n\n.w-richtext figure[data-rt-type="video"]>div:before {\n    content: &#039;&#039;;\n    position: absolute;\n    display: none;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 1\n}\n\n.w-richtext figure {\n    position: relative;\n    max-width: 60%\n}\n\n.w-richtext figure>div:before,.w-richtext figure img {\n    cursor: default!important\n}\n\n.w-richtext figure img {\n    width: 100%\n}\n\n.w-richtext figure figcaption.w-richtext-figcaption-placeholder {\n    opacity: .6\n}\n\n.w-richtext figure div {\n    font-size: 0;\n    color: transparent\n}\n\n.w-richtext figure[data-rt-type="image"] {\n    display: table\n}\n\n.w-richtext figure[data-rt-type="image"]>div {\n    display: inline-block\n}\n\n.w-richtext figure[data-rt-type="image"]>figcaption {\n    display: table-caption;\n    caption-side: bottom\n}\n\n.w-richtext figure[data-rt-type="video"] {\n    width: 60%;\n    height: 0\n}\n\n.w-richtext figure[data-rt-type="video"] iframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%\n}\n\n.w-richtext figure[data-rt-type="video"]>div {\n    width: 100%\n}\n\n.w-richtext figure.w-richtext-align-center {\n    margin-right: auto;\n    margin-left: auto;\n    clear: both\n}\n\n.w-richtext figure.w-richtext-align-center[data-rt-type="image"]>div {\n    max-width: 100%\n}\n\n.w-richtext figure.w-richtext-align-normal {\n    clear: both\n}\n\n.w-richtext figure.w-richtext-align-fullwidth {\n    width: 100%;\n    text-align: center;\n    clear: both;\n    display: block\n}\n\n.w-richtext figure.w-richtext-align-fullwidth>div {\n    display: inline-block\n}\n\n.w-richtext figure.w-richtext-align-fullwidth>figcaption {\n    display: block\n}\n\n.w-richtext figure.w-richtext-align-floatleft {\n    float: left;\n    margin-right: 15px;\n    clear: none\n}\n\n.w-richtext figure.w-richtext-align-floatright {\n    float: right;\n    margin-left: 15px;\n    clear: none\n}\n\n.wf-design-mode figure[data-rt-type="video"]>div:before,.w-editor-mount .w-dyn-list figure[data-rt-type="video"]>div:before,.w-editor-mount .w-editable figure[data-rt-type="video"]>div:before {\n    display: block\n}\n\n.w-nav {\n    position: relative;\n    background: #ddd;\n    z-index: 1000\n}\n\n.w-nav:before,.w-nav:after {\n    content: " ";\n    display: table\n}\n\n.w-nav:after {\n    clear: both\n}\n\n.w-nav-brand {\n    position: relative;\n    float: left;\n    text-decoration: none;\n    color: #333\n}\n\n.w-nav-link {\n    position: relative;\n    display: inline-block;\n    vertical-align: top;\n    text-decoration: none;\n    color: #222;\n    padding: 20px;\n    text-align: left;\n    margin-left: auto;\n    margin-right: auto\n}\n\n.w-nav-link.w--current {\n    color: #0082f3\n}\n\n.w-nav-menu {\n    position: relative;\n    float: right\n}\n\n.w--nav-menu-open {\n    display: block!important;\n    position: absolute;\n    top: 100%;\n    left: 0;\n    right: 0;\n    background: #c8c8c8;\n    text-align: center;\n    overflow: visible;\n    min-width: 200px\n}\n\n.w--nav-link-open {\n    display: block;\n    position: relative\n}\n\n.w-nav-overlay {\n    position: absolute;\n    overflow: hidden;\n    display: none;\n    top: 100%;\n    left: 0;\n    right: 0;\n    width: 100%\n}\n\n.w-nav-overlay .w--nav-menu-open {\n    top: 0\n}\n\n.w-nav[data-animation="over-left"] .w-nav-overlay {\n    width: auto\n}\n\n.w-nav[data-animation="over-left"] .w-nav-overlay,.w-nav[data-animation="over-left"] .w--nav-menu-open {\n    right: auto;\n    z-index: 1;\n    top: 0\n}\n\n.w-nav[data-animation="over-right"] .w-nav-overlay {\n    width: auto\n}\n\n.w-nav[data-animation="over-right"] .w-nav-overlay,.w-nav[data-animation="over-right"] .w--nav-menu-open {\n    left: auto;\n    z-index: 1;\n    top: 0\n}\n\n.w-nav-button {\n    position: relative;\n    float: right;\n    padding: 18px;\n    font-size: 24px;\n    display: none;\n    cursor: pointer;\n    -webkit-tap-highlight-color: rgba(0,0,0,0);\n    tap-highlight-color: rgba(0,0,0,0);\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none\n}\n\n.w-nav-button.w--open {\n    background-color: #c8c8c8;\n    color: white\n}\n\n.w-nav[data-collapse="all"] .w-nav-menu {\n    display: none\n}\n\n.w-nav[data-collapse="all"] .w-nav-button {\n    display: block\n}\n\n@media screen and (max-width: 991px) {\n    .w-nav[data-collapse="medium"] .w-nav-menu {\n        display:none\n    }\n\n    .w-nav[data-collapse="medium"] .w-nav-button {\n        display: block\n    }\n}\n\n@media screen and (max-width: 767px) {\n    .w-nav[data-collapse="small"] .w-nav-menu {\n        display:none\n    }\n\n    .w-nav[data-collapse="small"] .w-nav-button {\n        display: block\n    }\n\n    .w-nav-brand {\n        padding-left: 10px\n    }\n}\n\n@media screen and (max-width: 479px) {\n    .w-nav[data-collapse="tiny"] .w-nav-menu {\n        display:none\n    }\n\n    .w-nav[data-collapse="tiny"] .w-nav-button {\n        display: block\n    }\n}\n\n.w-tabs {\n    position: relative\n}\n\n.w-tabs:before,.w-tabs:after {\n    content: " ";\n    display: table\n}\n\n.w-tabs:after {\n    clear: both\n}\n\n.w-tab-menu {\n    position: relative\n}\n\n.w-tab-link {\n    position: relative;\n    display: inline-block;\n    vertical-align: top;\n    text-decoration: none;\n    padding: 9px 30px;\n    text-align: left;\n    cursor: pointer;\n    color: #222;\n    background-color: #ddd\n}\n\n.w-tab-link.w--current {\n    background-color: #c8c8c8\n}\n\n.w-tab-content {\n    position: relative;\n    display: block;\n    overflow: hidden\n}\n\n.w-tab-pane {\n    position: relative;\n    display: none\n}\n\n.w--tab-active {\n    display: block\n}\n\n@media screen and (max-width: 479px) {\n    .w-tab-link {\n        display:block\n    }\n}\n\n.w-ix-emptyfix:after {\n    content: ""\n}\n\n@-webkit-keyframes spin {\n    0% {\n        -webkit-transform: rotate(0deg)\n    }\n\n    100% {\n        -webkit-transform: rotate(360deg)\n    }\n}\n\n@keyframes spin {\n    0% {\n        transform: rotate(0deg)\n    }\n\n    100% {\n        transform: rotate(360deg)\n    }\n}\n\n.w-dyn-empty {\n    padding: 10px;\n    background-color: #ddd\n}\n\nbody {\n    background-color: #edeff2;\n    font-family: &#039;Open Sans&#039;,sans-serif;\n    color: #6a859c;\n    font-size: 16px;\n    line-height: 20px;\n}\n\nh1 {\n    margin-top: 0px;\n    margin-bottom: 10px;\n    font-size: 38px;\n    line-height: 44px;\n    font-weight: 700;\n    text-align: center;\n}\n\nh2 {\n    margin-top: 0px;\n    margin-bottom: 10px;\n    color: #676770;\n    font-size: 32px;\n    line-height: 36px;\n    font-weight: 300;\n    text-align: center;\n}\n\nh3 {\n    margin-top: 0px;\n    margin-bottom: 0px;\n    color: #676770;\n    font-size: 20px;\n    line-height: 30px;\n    font-weight: 300;\n    letter-spacing: 7px;\n    text-transform: uppercase;\n}\n\nh4 {\n    margin-top: 0px;\n    margin-bottom: 10px;\n    font-size: 18px;\n    line-height: 24px;\n    font-weight: 700;\n}\n\nh5 {\n    margin-top: 0px;\n    margin-bottom: 20px;\n    color: #676770;\n    font-size: 18px;\n    line-height: 20px;\n    font-weight: 300;\n    letter-spacing: 4px;\n    text-transform: uppercase;\n}\n\nh6 {\n    margin-top: 0px;\n    margin-bottom: 10px;\n    font-size: 12px;\n    line-height: 18px;\n    font-weight: 700;\n}\n\np {\n    margin-top: 10px;\n    margin-bottom: 10px;\n    font-size: 14px;\n    line-height: 25px;\n    font-weight: 300;\n}\n\n.button {\n    display: inline-block;\n    margin-right: 10px;\n    margin-left: 10px;\n    padding: 12px 30px;\n    border-radius: 4px;\n    background-color: #69b9ff;\n    -webkit-transition: background-color 300ms ease;\n    transition: background-color 300ms ease;\n    color: white;\n    font-size: 16px;\n    line-height: 21px;\n    font-weight: 300;\n    text-align: center;\n    letter-spacing: 2px;\n    text-decoration: none;\n    text-transform: uppercase;\n}\n\n.button:hover {\n    background-color: #2e9dff;\n}\n\n.button.w--current {\n    background-color: #2e80b6;\n}\n\n.button.full-width {\n    display: block;\n    width: 100%;\n    margin-right: 0px;\n    margin-left: 0px;\n}\n\n.button.tab {\n    margin-right: 8px;\n    margin-left: 8px;\n    background-color: #92a0ad;\n}\n\n.button.tab:hover {\n    background-color: #2e80b6;\n}\n\n.button.tab.w--current {\n    background-color: #2e80b6;\n}\n\n.white-box {\n    padding: 15px;\n    border: 1px solid #dcebf7;\n    border-radius: 5px;\n    background-color: white;\n    text-align: center;\n}\n\n.white-box.transparent {\n    border-style: none;\n    background-color: transparent;\n}\n\n.hollow-button {\n    display: inline-block;\n    margin-right: 10px;\n    margin-left: 10px;\n    padding: 10px 30px;\n    border: 1px solid white;\n    border-radius: 4px;\n    background-color: transparent;\n    -webkit-transition: background-color 300ms ease,border 300ms ease,color 300ms ease;\n    transition: background-color 300ms ease,border 300ms ease,color 300ms ease;\n    color: white;\n    line-height: 21px;\n    font-weight: 300;\n    letter-spacing: 2px;\n    text-decoration: none;\n    text-transform: uppercase;\n}\n\n.hollow-button:hover {\n    border-color: #2e9dff;\n    color: #2e9dff;\n}\n\n.hollow-button.all-caps {\n    background-color: transparent;\n    text-transform: uppercase;\n}\n\n.form-field {\n    height: 45px;\n    margin-bottom: 17px;\n    border: 0px solid black;\n    border-radius: 3px;\n    box-shadow: rgba(64,64,71,0.29) 0px 0px 0px 1px;\n}\n\n.form-field.text-area {\n    height: 110px;\n}\n\n.grid-image {\n    display: block;\n    width: 35%;\n    margin: 20px auto;\n    padding: 20px;\n    border: 10px solid white;\n    border-radius: 50%;\n    background-color: #69b9ff;\n    box-shadow: #2e9dff 0px 0px 0px 1px;\n}\n\n.info-icon {\n    float: left;\n}\n\n.tab-menu {\n    margin-bottom: 40px;\n    text-align: center;\n}\n\n.tabs-wrapper {\n    text-align: center;\n}\n\n.fullwidth-image {\n    width: 100%;\n    margin-bottom: 20px;\n}\n\n.white-text {\n    margin-bottom: 20px;\n    color: white;\n}\n\n.form {\n    margin-top: 40px;\n}\n\n.contact_header {\n    padding-bottom: 20px;\n    font-weight: 700;\n}\n\n.contact_content {\n    font-weight: 300;\n}\n\n.contact_header_text {\n    font-weight: 600;\n}\n\n.hollow-button2 {\n    border: 1px solid #6a859c;\n    border-radius: 4px;\n    background-color: transparent;\n    color: #6a859c;\n}\n\n.hollow-button2:hover {\n    color: black;\n}\n\n.unordered-list {\n    padding-bottom: 15px;\n    font-size: 14px;\n    line-height: 28px;\n    font-weight: 300;\n    text-align: left;\n}\n\n.subsection-header {\n    font-weight: 300;\n    text-align: left;\n}\n\n.subsection {\n    padding: 30px 10px;\n    background-color: white;\n}\n\n.paragraph-left {\n    text-align: left;\n}\n\n.listitem-header {\n    font-weight: 400;\n    text-align: center;\n}\n\n.column-space {\n    margin-bottom: 25px;\n}\n\nhtml.w-mod-js *[data-ix="fade-in-bottom-page-loads"] {\n    opacity: 0;\n    -webkit-transform: translate(0px,50px);\n    -ms-transform: translate(0px,50px);\n    transform: translate(0px,50px);\n}\n\nhtml.w-mod-js *[data-ix="fade-in-left-scroll-in"] {\n    opacity: 0;\n    -webkit-transform: translate(-50px,0px);\n    -ms-transform: translate(-50px,0px);\n    transform: translate(-50px,0px);\n}\n\nhtml.w-mod-js *[data-ix="fade-in-right-scroll-in"] {\n    opacity: 0;\n    -webkit-transform: translate(50px,0px);\n    -ms-transform: translate(50px,0px);\n    transform: translate(50px,0px);\n}\n\nhtml.w-mod-js *[data-ix="fade-in-top-scroll-in"] {\n    opacity: 0;\n    -webkit-transform: translate(0px,-50px);\n    -ms-transform: translate(0px,-50px);\n    transform: translate(0px,-50px);\n}\n\nhtml.w-mod-js *[data-ix="fade-in-bottom-scroll-in"] {\n    opacity: 0;\n    -webkit-transform: translate(0px,50px);\n    -ms-transform: translate(0px,50px);\n    transform: translate(0px,50px);\n}\n\nhtml.w-mod-js *[data-ix="bounce-in-scroll-in"] {\n    opacity: 0;\n    -webkit-transform: scale(0.6000000000000001);\n    -ms-transform: scale(0.6000000000000001);\n    transform: scale(0.6000000000000001);\n}\n\nhtml.w-mod-js *[data-ix="scale-on-scroll"] {\n    opacity: 0;\n    -webkit-transform: scale(0.01);\n    -ms-transform: scale(0.01);\n    transform: scale(0.01);\n}\n\n@media (max-width: 991px) {\n    .hero-section.centered {\n        padding-top: 144px;\n        padding-bottom: 144px;\n    }\n\n    .grid-image {\n        width: 50%;\n        padding: 15px;\n    }\n}\n\n@media (max-width: 767px) {\n    .button.full-width {\n        margin-right:auto;\n        margin-left: auto;\n    }\n\n    .button.tab {\n        font-size: 12px;\n    }\n\n    .white-box {\n        margin-bottom: 30px;\n    }\n\n    .hero-section.centered {\n        padding-top: 119px;\n        padding-bottom: 119px;\n    }\n\n    .hero-heading {\n        margin-bottom: 15px;\n        font-size: 50px;\n    }\n\n    .hero-subheading {\n        font-size: 18px;\n    }\n\n    .form-field.text-area {\n        display: block;\n    }\n\n    .grid-image {\n        width: 20%;\n        padding: 20px;\n    }\n\n    .spc {\n        margin-bottom: 30px;\n    }\n}\n\n@media (max-width: 479px) {\n    .button {\n        margin-bottom:25px;\n    }\n\n    .hero-section.centered {\n        padding-top: 60px;\n        padding-bottom: 60px;\n    }\n\n    .section-subheading.center {\n        line-height: 30px;\n    }\n\n    .grid-image {\n        width: 35%;\n    }\n}\n')
pico.define('frame.css','.__{\n	display:flex;\n	flex-direction:column;\n}\n')
pico.define('NavigationBar',function anonymous(exports,require,module,define,inherit,pico
/**/) {
"use strict";
var
router=require('po/router'),
toggleMenu=function(btn,menu,bar,overlay){
	var cl=btn.classList
	menu.parentElement.removeChild(menu)
	cl.toggle('w--open')
	if(cl.contains('w--open')){
		overlay.setAttribute('style','display: block; height: 2573px; width: 200px;')
		menu.classList.add('w--nav-menu-open')
		overlay.appendChild(menu)
		menu.setAttribute('style','transform: translateX(0px) translateY(0px); height: 2573px; transition: transform 400ms;')
	}else{
		overlay.setAttribute('style','display: none;')
		menu.classList.remove('w--nav-menu-open')
		bar.appendChild(menu)
		menu.setAttribute('style','transform: translateX(0px) translateY(0px);')
	}
}

return {
	deps:{
		brand:'list', // short, full
		collapse:['text','medium'], // all,medium,small,tiny
		animation:['text','over-right'], // over-left,over-right
		duration:['int',300], 
		contain:['bool',1], 
		navLinks:'map' // Name, url
	},
	create:function(deps,params){
		this.super.create.call(this,deps,params)

		var
		el=this.el,
		ds=el.dataset,
		dom=__.dom,
		container=el.querySelector('.w-container'),
		overlay=el.querySelector('.w-nav-overlay'),
		brand=container.querySelector('.brand-link'),
		content=[]

		ds.collapse=deps.collapse
		ds.animation=deps.animation
		ds.duration=deps.duration
		ds.contain=deps.contain

		dom.get({
			el:brand,
			content:[
				{
					tagName:'h1',
					className:'w-hidden-main w-hidden-medium w-hidden-small brand-text',
					content:deps.brand[0]
				},
				{
					tagName:'h1',
					className:'w-hidden-tiny brand-text',
					content:deps.brand[1]||deps.brand[0]
				}
			]
		})

		for(var link in deps.navLinks){
			content.push({
				tagName:'a',
				className:'w-nav-link navigation-link',
				style:'max-width: 940px;',
				content:link
			})
		}

		container.appendChild(dom.get({
			tagName:'nav',
			className:'w-nav-menu navigation-menu',
			role:'navigation',
			content:content
		}))
	},
	events:{
		'click .brand-link':function(e, target){
			router.go()
		},
		'click .navigation-link':function(e, target){
			router.go(this.deps.navLinks[target.textContent])
			var el=this.el
			var nmenu=el.querySelector('.navigation-menu')
			nmenu.querySelectorAll('.navigation-link').forEach(link=>{
				link.classList.remove('w--current')
			})
			target.classList.add('w--current')

			if (!target.closest('.w-nav-overlay')) return
			
			toggleMenu(
				el.querySelector('.hamburger-button'),
				nmenu,
				el.querySelector('.w-container'),
				el.querySelector('.w-nav-overlay'))
		},
		'click .hamburger-button':function(e, target){
			var el=this.el
			
			toggleMenu(
				target,
				el.querySelector('.navigation-menu'),
				el.querySelector('.w-container'),
				el.querySelector('.w-nav-overlay'))
		},
		'click .navigation-bar':function(e){
			e.stopPropagation()
		},
		'CLICK html':function(e, target){
			var
			el=this.el,
			btn=el.querySelector('.hamburger-button'),
			cl=btn.classList
			
			cl.contains('w--open') && toggleMenu(
				el.querySelector('.hamburger-button'),
				el.querySelector('.navigation-menu'),
				el.querySelector('.w-container'),
				el.querySelector('.w-nav-overlay'))
		}
	}
}
//# sourceURL=NavigationBar
})
pico.define('NavigationBar.html','<div class="w-container">\n	<a class="w-nav-brand brand-link"></a>\n	<div class="w-nav-button hamburger-button">\n		<div class="w-icon-nav-menu"></div>\n	</div>\n</div>\n<div class="w-nav-overlay"></div>\n')
pico.define('NavigationBar.css','.navigation-link {\n    position: relative;\n    display: inline-block;\n    padding: 20px;\n    -webkit-transition: all 300ms ease-in-out;\n    transition: all 300ms ease-in-out;\n    color: #676770;\n    text-align: left;\n    text-decoration: none;\n}\n\n.navigation-link:hover {\n    color: #2e9dff;\n}\n\n.navigation-bar {\n    background-color: white;\n}\n\n.navigation-menu {\n    position: relative;\n    float: right;\n}\n.brand-text {\n    margin-top: 0px;\n    margin-bottom: 0px;\n    font-family: &#039;Open Sans&#039;,sans-serif;\n    color: #69b9ff;\n    font-size: 25px;\n    line-height: 25px;\n    font-weight: 300;\n    letter-spacing: 4px;\n    text-transform: uppercase;\n}\n\n.brand-link {\n    padding-top: 16px;\n    padding-bottom: 16px;\n}\n\n@media (max-width: 991px) {\n    .navigation-link {\n        display:block;\n        color: rgba(255,255,255,0.52);\n    }\n\n    .navigation-link.w--current {\n        color: white;\n    }\n\n    .hamburger-button.w--open {\n        background-color: #3b99d9;\n    }\n\n    .navigation-menu {\n        position: absolute;\n        display: block;\n        float: none;\n        background-color: #3b99d9;\n    }\n}\n\n')
pico.define('p/Pane',function anonymous(exports,require,module,define,inherit,pico
/**/) {
"use strict";
var
removeOldPage=function(from, sender, paneId){
    if (paneId !== this.deps.paneId) return
    if (this.oldPage) this.dump(this.oldPage)
    this.oldPage = void 0 
}

return {
    signals:['paneAdd','pageAdd','moduleAdded'],
    deps:{
        html:   ['file',''],
        paneId: 'int'
    },
    create: function(deps, params){
        var self=this
		this.super.create.call(this, deps, params, false, function(){
			self.signals.paneAdd(deps.paneId).send()
		})
		this.paneIdSpec=[['paneId','int',deps.paneId]]
    },

    slots: {
        paneUpdate: function(from, sender, paneId, name, pageSpec, params){
            if (this.deps.paneId !== paneId) return

			if (name === this.pageName && JSON.stringify(this.pageParams)===JSON.stringify(params)) return
            this.pageName=name
            this.pageParams=params

            if (this.oldPage) removeOldPage.call(this, from, sender, paneId)
            this.oldPage = this.currPage
            this.currPage = this.spawn({
                name:name+'_'+paneId,
                spec:pageSpec,
                Class:{},
                }, params, this.paneIdSpec, false)

            this.el.style.cssText = ''
            this.signals.pageAdd(paneId, this.currPage.render()).send()
        },
        pageAdded:removeOldPage,
		moduleAdded:function(from, sender){
			if (-1===this.modules.indexOf(from)) return // not child
			this.signals.moduleAdded(this.deps.paneId).send(this.host) // repropagate with paneId
		}
    }
}
//# sourceURL=p/Pane
})
pico.define('Content',function anonymous(exports,require,module,define,inherit,pico
/**/) {
"use strict";
return {
	signals:['pageAdded'],
	slots:{
		pageAdd:function(from,sender,paneId){
			this.signals.pageAdded(paneId).send(sender)
		}
	}
}
//# sourceURL=Content
})
pico.define('Footer',function anonymous(exports,require,module,define,inherit,pico
/**/) {
"use strict";
return {
}
//# sourceURL=Footer
})
pico.define('Footer.html','<div class="w-container">\n	<div class="footer-text">Copyright Jasa WS.</div>\n</div>\n')
pico.define('Footer.css','.footer {\n    padding-top: 35px;\n    padding-bottom: 35px;\n}\n\n.footer.center {\n    border-top: 1px solid #dbdbdb;\n    background-color: #383838;\n    text-align: center;\n}\n\n.footer-text {\n    margin-top: 5px;\n    margin-bottom: 5px;\n    color: #9e9e9e;\n    font-size: 16px;\n}\n\n.footer-link {\n    display: block;\n    margin-bottom: 6px;\n    padding-bottom: 10px;\n    border-bottom: 1px solid #d5d5e0;\n    color: #668cad;\n    font-size: 14px;\n    font-weight: 300;\n    text-decoration: none;\n}\n\n.footer-link:hover {\n    color: rgba(0,140,255,0.84);\n}\n\n.footer-link.with-icon {\n    margin-left: 30px;\n}\n')
pico.define('NoSession',function anonymous(exports,require,module,define,inherit,pico
/**/) {
"use strict";
return{
    signals: ['modelReady'],
    create: function(deps){
    },
    slots:{
        frameAdded:function(){
            this.signals.modelReady().send()
        }
    }
}
//# sourceURL=NoSession
})
pico.define('HeroSection',function anonymous(exports,require,module,define,inherit,pico
/**/) {
"use strict";
return {
}
//# sourceURL=HeroSection
})
pico.define('HeroSection.html','<div class="w-container" data-ix="new-interaction">\n	<h1 class="hero-heading" data-ix="fade-in-bottom-page-loads" style="opacity: 1; transform: translateX(0px) translateY(0px); transition: opacity 1000ms, transform 1000ms;">Service is our business</h1>\n	<div class="hero-subheading" data-ix="fade-in-bottom-page-loads" style="opacity: 1; transform: translateX(0px) translateY(0px); transition: opacity 1000ms, transform 1000ms;">we build complex things out of simple words</div>\n	<div data-ix="fade-in-bottom-page-loads" style="opacity: 1; transform: translateX(0px) translateY(0px); transition: opacity 1000ms, transform 1000ms;">\n		<a class="button" href="index.html#">contact</a>\n		<a class="hollow-button all-caps" href="index.html#">Learn more</a>\n	</div>\n</div>\n')
pico.define('Section.css','.section {\n    position: relative;\n    padding: 80px 10px;\n    border-top: 1px none silver;\n    background-color: white;\n    text-align: center;\n}\n\n.section.accent {\n    background-color: #192024;\n}\n\n.section-heading {\n    margin-top: 0px;\n    margin-bottom: 16px;\n}\n\n.section-heading.centered {\n    margin-top: 0px;\n    color: #676770;\n    font-size: 30px;\n    font-weight: 300;\n    text-align: center;\n    letter-spacing: 5px;\n    text-transform: uppercase;\n}\n\n.section-heading.centered.white {\n    color: white;\n}\n\n.section-subheading.center {\n    color: #8e8e9c;\n    font-size: 18px;\n    font-weight: 300;\n    text-align: center;\n    letter-spacing: 3px;\n    text-transform: uppercase;\n}\n\n.section-subheading.center.off-white {\n    padding-bottom: 0px;\n    color: #e8e8e8;\n}\n\n.section-title-group {\n    margin-bottom: 60px;\n}\n')
pico.define('HeroSection.css','.hero-section {\n    padding-top: 242px;\n    padding-bottom: 242px;\n}\n\n.hero-section.centered {\n    padding-top: 195px;\n    padding-bottom: 195px;\n    border-bottom: 4px solid #69b9ff;\n    background-image: -webkit-linear-gradient(rgba(46,157,255,0.49),rgba(46,157,255,0.49)),url(dat/hero.jpg);\n    background-image: linear-gradient(rgba(46,157,255,0.49),rgba(46,157,255,0.49)),url(dat/hero.jpg);\n    background-position: 0px 0px,50% 50%;\n    background-size: auto,cover;\n    background-repeat: repeat,no-repeat;\n    background-attachment: scroll,fixed;\n    text-align: center;\n}\n\n.hero-content {\n    color: #c2d2df;\n    font-weight: 300;\n    text-align: center;\n}\n\n.hero-heading {\n    display: block;\n    margin-bottom: 30px;\n    color: white;\n    font-size: 60px;\n    line-height: 60px;\n    font-weight: 300;\n    text-align: center;\n    letter-spacing: 4px;\n    text-transform: uppercase;\n}\n\n.hero-subheading {\n    margin-bottom: 40px;\n    color: #c7e5ff;\n    font-size: 25px;\n    line-height: 25px;\n    font-weight: 300;\n    text-align: center;\n    letter-spacing: 3px;\n    text-transform: uppercase;\n}\n')
pico.define('Section1.html','<div class="w-container">\n  <div class="section-title-group">\n	 <h2 class="section-heading centered">what we do</h2>\n	 <div class="section-subheading center">We plan, we create,&nbsp;we care</div>\n  </div>\n  <div class="w-row">\n	 <div class="w-col w-col-4">\n		<div class="white-box">\n		   <img class="grid-image" src="dat/cloud-computing.svg">\n		   <h3>cloud based</h3>\n		   <p>We design and development software as a service (saas) systems</p>\n		</div>\n	 </div>\n	 <div class="w-col w-col-4">\n		<div class="white-box">\n		   <img class="grid-image" src="dat/wifi-with-cloud-symbol.svg">\n		   <h3>Web dev</h3>\n		   <p>We build responsive single page web applications</p>\n		</div>\n	 </div>\n	 <div class="w-col w-col-4">\n		<div class="white-box">\n		   <img class="grid-image" src="dat/smartphone.svg">\n		   <h3>mobile dev</h3>\n		   <p>We create crossed platform mobile applications</p>\n		</div>\n	 </div>\n  </div>\n</div>\n')
pico.define('Section2.html','<div class="w-container">\n	<div class="section-title-group">\n		<h2 class="section-heading centered white">technologies</h2>\n		<div class="section-subheading center off-white">Over here in Jasa we not only use open source technologies we have developed our own tech and return back to community, there are the technologies that developed by as so far</div>\n	</div>\n	<div class="w-row">\n		<div class="w-col w-col-6">\n			<div class="white-box transparent">\n				<img class="fullwidth-image" src="dat/staircase.jpg">\n				<h3 class="white-text">pico operating system</h3>\n				<p class="white-text">A non web centric app server architecture,&nbsp;It treated all other resources equally, like an OS</p>\n				<a class="hollow-button" href="index.html#">Learn more</a>\n			</div>\n		</div>\n		<div class="w-col w-col-6">\n			<div class="white-box transparent">\n				<img class="fullwidth-image" src="dat/structure.jpg">\n				<h3 class="white-text">pico app framework</h3>\n				<p class="white-text">entity-component based web client framework, based on pico amd, underscore and backbone</p>\n				<a class="hollow-button all-caps" href="index.html#">Learn more</a>\n			</div>\n		</div>\n	</div>\n</div>\n')
pico.define('Section3.html','<div class="w-container">\n  <div class="section-title-group">\n	 <h2 class="section-heading centered">about us</h2>\n	 <div class="section-subheading center">just a bunch of programming geeks</div>\n  </div>\n  <div class="w-tabs tabs-wrapper" data-duration-in="300" data-duration-out="100">\n	 <div class="w-tab-content">\n		<div class="w-tab-pane w--tab-active" data-w-tab="Tab 1">\n		   <div>\n			  <img class="fullwidth-image" src="dat/type-away-numero-dos.jpg">\n			  <p>Jasa Web Services (JWS) provides web technologies for web and mobile applications. We believe in less is more, a lean and mean design and implementation provides best performance and maintainability</p>\n		   </div>\n		</div>\n		<div class="w-tab-pane" data-w-tab="Tab 2">\n		   <div>\n			  <img class="fullwidth-image" src="dat/type-away-numero-dos.jpg">\n			  <h2>Heading</h2>\n			  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. <br>Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.<br>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>\n		   </div>\n		</div>\n		<div class="w-tab-pane" data-w-tab="Tab 3">\n		   <div>\n			  <img class="fullwidth-image" src="dat/type-away-numero-dos.jpg">\n			  <h2>Heading</h2>\n		   </div>\n		   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. <br>Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. <br>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>\n		</div>\n	 </div>\n  </div>\n</div>\n')
pico.define('Map',function anonymous(exports,require,module,define,inherit,pico
/**/) {
"use strict";
var
GOOGLE_MAPS_API='https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&callback=_wf_maps_loaded&key=KEY',
dummyCB=function(){},
getState=function(self){
	var deps=self.deps

	// Marker
	var marker= new google.maps.Marker({
	  draggable: false
	})

	// Tooltip infowindow
	var infowindow= new google.maps.InfoWindow({
	  disableAutoPan: true
	})

  // LatLng center point
  var coords = deps.latlng
  var latlngObj = new google.maps.LatLng(coords[0], coords[1]);

  // Map instance
  var map = new google.maps.Map(self.el, {
	center: latlngObj,
	zoom: deps.zoom,
	maxZoom: 18,
	mapTypeControl: false,
	panControl: false,
	streetViewControl: false,
	scrollwheel: !deps.disableScroll,
	draggable: !deps.disableTouch, // TODO: touch device detection in lean?
	zoomControl: true,
	zoomControlOptions: {
	  style: google.maps.ZoomControlStyle.SMALL
	},
	mapTypeId: deps.style
  });
  self.map=map
  marker.setMap(map);

  // Fix position after first tiles have loaded
  google.maps.event.addListener(map, 'tilesloaded', function() {
	google.maps.event.clearListeners(map, 'tilesloaded');
	setMapPosition(self,latlngObj);
  });

  // Set initial position
  setMapPosition(self,latlngObj);
  marker.setPosition(latlngObj);
  infowindow.setPosition(latlngObj);

  // Draw tooltip
  var tooltip = deps.widgetTooltip;
  if (tooltip) {
	infowindow.setContent(tooltip);
	if (!self.infowindowOpen) {
	  infowindow.open(map, marker);
	  self.infowindowOpen = true;
	}
  }

  // Map style - options.style
  var style = deps.widgetStyle;
  if (style) {
	map.setMapTypeId(style);
  }

  // Zoom - options.zoom
  var zoom = deps.widgetZoom;
  if (zoom != null) {
	zoom = zoom;
	map.setZoom(Number(zoom));
  }

  // Click marker to open in google maps
  google.maps.event.addListener(marker, 'click', function() {
	window.open('https://maps.google.com/?z=' + zoom + '&daddr=' + coords.join(','));
  });
},
setMapPosition=function(self,latlngObj) {
	var map=self.map
	var el=self.el
	map.setCenter(latlngObj);
	var offsetX = 0;
	var offsetY = 0;
	var style=window.getComputedStyle(el)
	offsetX -= parseInt(style['paddingLeft'], 10);
	offsetX += parseInt(style['paddingRight'], 10);
	offsetY -= parseInt(style['paddingTop'], 10);
	offsetY += parseInt(style['paddingBottom'], 10);
	if (offsetX || offsetY) {
		map.panBy(offsetX, offsetY);
	}
	el.style.position='' // Remove injected position
}

return {
	deps:{
		latlng:['list',[1.3431,103.739795]],
		style:['text','roadmap'],
		zoom:['int',12],
		disableScroll:['bool',1],
		tooltip:['text',''],
    	googleMapsApiKey:['text','']
	},
	create:function(deps,params){
		var self=this
		this.super.create.call(this,deps,params)

		this.google=window.google

		var mapsLoaded=function(){
			window._wf_maps_loaded = dummyCB
			self.google = window.google
			getState(self)
		}

		if (this.google){
			mapsLoaded()
		}else{
			__.dom.link(GOOGLE_MAPS_API.replace('KEY',deps.googleMapsApiKey),'js',dummyCB)
			window._wf_maps_loaded=mapsLoaded
		}
	},
	rendered:function(){
		if (!window.google) return
		this.google.maps.event.trigger(this.map, 'resize')
	},
	events:{
		'RESIZE window':function(e, target){
			this.google.maps.event.trigger(this.map, 'resize')
			var coords = this.deps.latlng
			setMapPosition(this,new google.maps.LatLng(coords[0], coords[1]))
		}
	},
}
//# sourceURL=Map
})
pico.define('Form',function anonymous(exports,require,module,define,inherit,pico
/**/) {
"use strict";
var loc = window.location;
var retro = window.XDomainRequest && !window.atob;
var namespace = '.w-form';
var emailField = /e(-)?mail/i;
var emailValue = /^\S+@\S+$/;
var chimpRegex = /list-manage[1-9]?.com/i;

var disconnected = function() {
  __.dialogs.alert('Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.');
}

// Reset data common to all submit handlers
function reset(self) {
  var btn = self.btn = self.el.querySelector('[type="submit"]');
  self.success = false;
  btn.disabled=false
  self.label && (btn.textContent=self.label)
}

// Disable submit button
function disableBtn(self) {
  var btn = self.btn;
  btn.disabled=true
  // Show wait text and store previous label
  var wait = self.deps.wait
  if (wait) {
	self.label = btn.textContent;
	btn.textContent=wait;
  }
}

// Find form fields, validate, and set value pairs
function findFields(form, result) {
  var status = null;
  result = result || {};

  // The ":input" selector is a jQuery shortcut to select all inputs, selects, textareas
  form.querySelectorAll('select,textarea,button:not([type="submit"]),input:not([type="submit"])').forEach(function(field, i) {
	var name = field.dataset.name || field.name || ('Field ' + (i + 1));
	var value = field.value;

	switch(field.type){
	case 'checkbox':
		value=field.isChecked
		break
	case 'radio':
	  // Radio group value already processed
	  if (result[name] === null || typeof result[name] === 'string') {
		return;
	  }

	  value = form.querySelector('input[name="' + field.name + '"]:checked').val() || null;
	  break
	}

	if (typeof value === 'string') value = value.trim()
	result[name] = value;
	status = status || getStatus(field, field.type, name, value);
  });

  return status;
}

function getStatus(field, type, name, value) {
  var status = null;

  if (type === 'password') {
	status = 'Passwords cannot be submitted.';
  } else if (field.required) {
	if (!value) {
	  status = 'Please fill out the required field: ' + name;
	} else if (emailField.test(name) || emailField.test(type)) {
	  if (!emailValue.test(value)) status = 'Please enter a valid email address for: ' + name;
	}
  }

  return status;
}

// Submit form to Custom site
function submitCustom() {
	reset(this);

	preventDefault(this);

	var payload={}
  var status = findFields(this.form, payload);
  if (status) return __.dialogs.alert(status);

	// Disable submit button
	disableBtn(this);
var self=this
	// {'Content-Type':'application/x-www-form-urlencoded'}
	__.ajax('POST',this.form.action,__.querystring(payload),{headers:{'Content-Type':'application/x-www-form-urlencoded'}}, function(err,code){
		if (4 !== code) return
		self.success=!err
		afterSubmit(self)
	})
}

// Submit form to Webflow
function submitWebflow() {
  reset(this);

  var form = this.form;
  var payload = {
	name: form.dataset.name || form.name || 'Untitled Form',
	source: loc.href,
	fields: {},
	dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(form.html())
  };

  preventDefault(this);

  // Find & populate all fields
  var status = findFields(form, payload.fields);
  if (status) return __.dialogs.alert(status);

  // Disable submit button
  disableBtn(this);

  // Read site ID
  // NOTE: If this site is exported, the HTML tag must retain the data-wf-site attribute for forms to work
  if (!this.deps.siteId) { afterSubmit(this); return; }
  var url = "https://webflow.com" + '/api/v1/form/' + this.deps.siteId;

  // Work around same-protocol IE XDR limitation - without this IE9 and below forms won't submit
  if (retro && url.indexOf("https://webflow.com") >= 0) {
	url = url.replace("https://webflow.com", "http://formdata.webflow.com");
  }
var self=this
	__.ajax('POST',url,payload,{'data-type':'application/json'}, function(err,code){
		if (4 !== code) return
		self.success=!err
		afterSubmit(self)
	})
}

// Submit form to MailChimp
function submitMailChimp() {
  reset(this);

  var form = this.form;
  var payload = {};

  // Skip Ajax submission if http/s mismatch, fallback to POST instead
  if (/^https/.test(loc.href) && !/^https/.test(this.action)) {
	form.attr('method', 'post');
	return;
  }

  preventDefault(this);

  // Find & populate all fields
  var status = findFields(form, payload);
  if (status) return alert(status);

  // Disable submit button
  disableBtn(this);

  // Use special format for MailChimp params
  var fullName;
  _.each(payload, function(value, key) {
	if (emailField.test(key)) payload.EMAIL = value;
	if (/^((full[ _-]?)?name)$/i.test(key)) fullName = value;
	if (/^(first[ _-]?name)$/i.test(key)) payload.FNAME = value;
	if (/^(last[ _-]?name)$/i.test(key)) payload.LNAME = value;
  });

  if (fullName && !payload.FNAME) {
	fullName = fullName.split(' ');
	payload.FNAME = fullName[0];
	payload.LNAME = payload.LNAME || fullName[1];
  }

  // Use the (undocumented) MailChimp jsonp api
  var url = this.form.action.replace('/post?', '/post-json?') + '&c=?';
  // Add special param to prevent bot signups
  var userId = url.indexOf('u=') + 2;
  userId = url.substring(userId, url.indexOf('&', userId));
  var listId = url.indexOf('id=') + 3;
  listId = url.substring(listId, url.indexOf('&', listId));
  payload['b_' + userId + '_' + listId] = '';
var self=this
	__.ajax('POST',url,payload,{'data-type':'application/json'}, function(err,code,json){
		if (4 !== code) return
		if (!err){
			try{var resp=JSON.parse(json)}
			catch(ex){}
		}
		self.success = !err && (resp.result === 'success' || /already/.test(resp.msg));
		if (!self.success) console.info('MailChimp error: ' + resp.msg);
		afterSubmit(self);
	})
}

function showhide(el,show){
	if (show) return el.style.display='block'
	el.style.display='none'
}

// Common callback which runs after all Ajax submissions
function afterSubmit(self) {
  var redirect = self.redirect;
  var success = self.success;

  // Redirect to a success url if defined
  if (success && redirect) {
	Webflow.location(redirect);
	return;
  }

  // Show or hide status divs
  showhide(self.done,success)
  showhide(self.fail,!success)

  // Hide form on success
  showhide(self.form,!success)

  // Reset data and enable submit button
  reset(self);
}

function preventDefault(self) {
  self.evt && self.evt.preventDefault();
  self.evt = null;
}

return {
	deps:{
		siteId:'text',
		redirect:'text',
		wait:['text','Please wait...']
	},
	create(deps,params){
		this.super.create.call(this, deps, params)

		reset(this)
		var wrap = this.el.querySelector('div.w-form');
		this.form = wrap.querySelector('.form');
		this.done = wrap.querySelector('.w-form-done');
		this.fail = wrap.querySelector('.w-form-fail');

		var action = this.action = this.form.getAttribute('action');
		this.handler = null;
		this.redirect = deps.redirect

		// MailChimp form
		if (chimpRegex.test(action)) return this.handler = submitMailChimp

		// Custom form action
		if (action) return this.handler = submitCustom

		// Webflow form
		if (deps.siteId) return this.handler = submitWebflow

		// Alert for disconnected Webflow forms
		disconnected();
	},
	events:{
		'submit form':function(e, target){
			if (this.handler){
				this.evt=e
				this.handler()
			}
		}
	}
}
//# sourceURL=Form
})
pico.define('Contact.html','<div class="w-container">\n  <div class="section-title-group">\n	 <h2 class="section-heading centered">Contact Us Today</h2>\n	 <div class="section-subheading center">Make thing happen!</div>\n  </div>\n  <p>No one can do everything, but everyone can do something\n	 <br>\n	 <br>Contact us and tell us more about your story and ideas\n  </p>\n  <div class="w-form form-wrapper">\n	 <form class="form" id="email-form" name="email-form" data-name="Email Form" action="https://docs.google.com/forms/d/e/1FAIpQLSfo2BpBeAU-omjOQx2ODb74vnEVKsz0wmkdu-tbVbWacTQCrA/formResponse" method="POST">\n		<input class="w-input form-field" id="Name" type="text" placeholder="Enter your name..." name="entry.1362670975" required >\n		<input class="w-input form-field" id="Email" type="email" placeholder="Enter your email..." name="entry.1234867474" required >\n		<textarea class="w-input form-field text-area" id="field-2" placeholder="Message" name="entry.1030800866" ></textarea>\n		<input class="w-button button full-width" type="submit" value="Send Carrier Pigeon" data-wait="Please wait...">\n	 </form>\n	 <div class="w-form-done">\n		<p>Thank you! Your submission has been received!</p>\n	 </div>\n	 <div class="w-form-fail">\n		<p>Oops! Something went wrong while submitting the form :(</p>\n	 </div>\n  </div>\n</div>\n')
