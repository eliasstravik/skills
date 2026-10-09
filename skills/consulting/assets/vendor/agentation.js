(()=>{var h1=Object.create;var Qf=Object.defineProperty;var p1=Object.getOwnPropertyDescriptor;var m1=Object.getOwnPropertyNames;var g1=Object.getPrototypeOf,y1=Object.prototype.hasOwnProperty;var x1=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(o){throw n=[o],o}};var xo=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var v1=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of m1(t))!y1.call(e,r)&&r!==n&&Qf(e,r,{get:()=>t[r],enumerable:!(o=p1(t,r))||o.enumerable});return e};var Le=(e,t,n)=>(n=e!=null?h1(g1(e)):{},v1(t||!e||!e.__esModule?Qf(n,"default",{value:e,enumerable:!0}):n,e));var rh=xo(je=>{"use strict";var fl=Symbol.for("react.element"),w1=Symbol.for("react.portal"),b1=Symbol.for("react.fragment"),k1=Symbol.for("react.strict_mode"),C1=Symbol.for("react.profiler"),S1=Symbol.for("react.provider"),M1=Symbol.for("react.context"),E1=Symbol.for("react.forward_ref"),L1=Symbol.for("react.suspense"),N1=Symbol.for("react.memo"),I1=Symbol.for("react.lazy"),Vf=Symbol.iterator;function R1(e){return e===null||typeof e!="object"?null:(e=Vf&&e[Vf]||e["@@iterator"],typeof e=="function"?e:null)}var qf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Kf=Object.assign,Jf={};function fi(e,t,n){this.props=e,this.context=t,this.refs=Jf,this.updater=n||qf}fi.prototype.isReactComponent={};fi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};fi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zf(){}Zf.prototype=fi.prototype;function sd(e,t,n){this.props=e,this.context=t,this.refs=Jf,this.updater=n||qf}var ad=sd.prototype=new Zf;ad.constructor=sd;Kf(ad,fi.prototype);ad.isPureReactComponent=!0;var Xf=Array.isArray,eh=Object.prototype.hasOwnProperty,cd={current:null},th={key:!0,ref:!0,__self:!0,__source:!0};function nh(e,t,n){var o,r={},i=null,l=null;if(t!=null)for(o in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)eh.call(t,o)&&!th.hasOwnProperty(o)&&(r[o]=t[o]);var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}if(e&&e.defaultProps)for(o in s=e.defaultProps,s)r[o]===void 0&&(r[o]=s[o]);return{$$typeof:fl,type:e,key:i,ref:l,props:r,_owner:cd.current}}function $1(e,t){return{$$typeof:fl,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function dd(e){return typeof e=="object"&&e!==null&&e.$$typeof===fl}function T1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Gf=/\/+/g;function ld(e,t){return typeof e=="object"&&e!==null&&e.key!=null?T1(""+e.key):t.toString(36)}function Fs(e,t,n,o,r){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case fl:case w1:l=!0}}if(l)return l=e,r=r(l),e=o===""?"."+ld(l,0):o,Xf(r)?(n="",e!=null&&(n=e.replace(Gf,"$&/")+"/"),Fs(r,t,n,"",function(u){return u})):r!=null&&(dd(r)&&(r=$1(r,n+(!r.key||l&&l.key===r.key?"":(""+r.key).replace(Gf,"$&/")+"/")+e)),t.push(r)),1;if(l=0,o=o===""?".":o+":",Xf(e))for(var s=0;s<e.length;s++){i=e[s];var a=o+ld(i,s);l+=Fs(i,t,n,a,r)}else if(a=R1(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=o+ld(i,s++),l+=Fs(i,t,n,a,r);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function As(e,t,n){if(e==null)return e;var o=[],r=0;return Fs(e,o,"","",function(i){return t.call(n,i,r++)}),o}function P1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var _n={current:null},Ws={transition:null},D1={ReactCurrentDispatcher:_n,ReactCurrentBatchConfig:Ws,ReactCurrentOwner:cd};function oh(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:As,forEach:function(e,t,n){As(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return As(e,function(){t++}),t},toArray:function(e){return As(e,function(t){return t})||[]},only:function(e){if(!dd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};je.Component=fi;je.Fragment=b1;je.Profiler=C1;je.PureComponent=sd;je.StrictMode=k1;je.Suspense=L1;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D1;je.act=oh;je.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=Kf({},e.props),r=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=cd.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)eh.call(t,a)&&!th.hasOwnProperty(a)&&(o[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}return{$$typeof:fl,type:e.type,key:r,ref:i,props:o,_owner:l}};je.createContext=function(e){return e={$$typeof:M1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:S1,_context:e},e.Consumer=e};je.createElement=nh;je.createFactory=function(e){var t=nh.bind(null,e);return t.type=e,t};je.createRef=function(){return{current:null}};je.forwardRef=function(e){return{$$typeof:E1,render:e}};je.isValidElement=dd;je.lazy=function(e){return{$$typeof:I1,_payload:{_status:-1,_result:e},_init:P1}};je.memo=function(e,t){return{$$typeof:N1,type:e,compare:t===void 0?null:t}};je.startTransition=function(e){var t=Ws.transition;Ws.transition={};try{e()}finally{Ws.transition=t}};je.unstable_act=oh;je.useCallback=function(e,t){return _n.current.useCallback(e,t)};je.useContext=function(e){return _n.current.useContext(e)};je.useDebugValue=function(){};je.useDeferredValue=function(e){return _n.current.useDeferredValue(e)};je.useEffect=function(e,t){return _n.current.useEffect(e,t)};je.useId=function(){return _n.current.useId()};je.useImperativeHandle=function(e,t,n){return _n.current.useImperativeHandle(e,t,n)};je.useInsertionEffect=function(e,t){return _n.current.useInsertionEffect(e,t)};je.useLayoutEffect=function(e,t){return _n.current.useLayoutEffect(e,t)};je.useMemo=function(e,t){return _n.current.useMemo(e,t)};je.useReducer=function(e,t,n){return _n.current.useReducer(e,t,n)};je.useRef=function(e){return _n.current.useRef(e)};je.useState=function(e){return _n.current.useState(e)};je.useSyncExternalStore=function(e,t,n){return _n.current.useSyncExternalStore(e,t,n)};je.useTransition=function(){return _n.current.useTransition()};je.version="18.3.1"});var Ct=xo((Iw,ih)=>{"use strict";ih.exports=rh()});var ph=xo(vt=>{"use strict";function hd(e,t){var n=e.length;e.push(t);e:for(;0<n;){var o=n-1>>>1,r=e[o];if(0<js(r,t))e[o]=t,e[n]=r,n=o;else break e}}function no(e){return e.length===0?null:e[0]}function Us(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var o=0,r=e.length,i=r>>>1;o<i;){var l=2*(o+1)-1,s=e[l],a=l+1,u=e[a];if(0>js(s,n))a<r&&0>js(u,s)?(e[o]=u,e[a]=n,o=a):(e[o]=s,e[l]=n,o=l);else if(a<r&&0>js(u,n))e[o]=u,e[a]=n,o=a;else break e}}return t}function js(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(lh=performance,vt.unstable_now=function(){return lh.now()}):(ud=Date,sh=ud.now(),vt.unstable_now=function(){return ud.now()-sh});var lh,ud,sh,vo=[],Jo=[],B1=1,Wn=null,rn=3,Ys=!1,zr=!1,pl=!1,dh=typeof setTimeout=="function"?setTimeout:null,uh=typeof clearTimeout=="function"?clearTimeout:null,ah=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function pd(e){for(var t=no(Jo);t!==null;){if(t.callback===null)Us(Jo);else if(t.startTime<=e)Us(Jo),t.sortIndex=t.expirationTime,hd(vo,t);else break;t=no(Jo)}}function md(e){if(pl=!1,pd(e),!zr)if(no(vo)!==null)zr=!0,yd(gd);else{var t=no(Jo);t!==null&&xd(md,t.startTime-e)}}function gd(e,t){zr=!1,pl&&(pl=!1,uh(ml),ml=-1),Ys=!0;var n=rn;try{for(pd(t),Wn=no(vo);Wn!==null&&(!(Wn.expirationTime>t)||e&&!hh());){var o=Wn.callback;if(typeof o=="function"){Wn.callback=null,rn=Wn.priorityLevel;var r=o(Wn.expirationTime<=t);t=vt.unstable_now(),typeof r=="function"?Wn.callback=r:Wn===no(vo)&&Us(vo),pd(t)}else Us(vo);Wn=no(vo)}if(Wn!==null)var i=!0;else{var l=no(Jo);l!==null&&xd(md,l.startTime-t),i=!1}return i}finally{Wn=null,rn=n,Ys=!1}}var Qs=!1,Hs=null,ml=-1,_h=5,fh=-1;function hh(){return!(vt.unstable_now()-fh<_h)}function _d(){if(Hs!==null){var e=vt.unstable_now();fh=e;var t=!0;try{t=Hs(!0,e)}finally{t?hl():(Qs=!1,Hs=null)}}else Qs=!1}var hl;typeof ah=="function"?hl=function(){ah(_d)}:typeof MessageChannel<"u"?(fd=new MessageChannel,ch=fd.port2,fd.port1.onmessage=_d,hl=function(){ch.postMessage(null)}):hl=function(){dh(_d,0)};var fd,ch;function yd(e){Hs=e,Qs||(Qs=!0,hl())}function xd(e,t){ml=dh(function(){e(vt.unstable_now())},t)}vt.unstable_IdlePriority=5;vt.unstable_ImmediatePriority=1;vt.unstable_LowPriority=4;vt.unstable_NormalPriority=3;vt.unstable_Profiling=null;vt.unstable_UserBlockingPriority=2;vt.unstable_cancelCallback=function(e){e.callback=null};vt.unstable_continueExecution=function(){zr||Ys||(zr=!0,yd(gd))};vt.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_h=0<e?Math.floor(1e3/e):5};vt.unstable_getCurrentPriorityLevel=function(){return rn};vt.unstable_getFirstCallbackNode=function(){return no(vo)};vt.unstable_next=function(e){switch(rn){case 1:case 2:case 3:var t=3;break;default:t=rn}var n=rn;rn=t;try{return e()}finally{rn=n}};vt.unstable_pauseExecution=function(){};vt.unstable_requestPaint=function(){};vt.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=rn;rn=e;try{return t()}finally{rn=n}};vt.unstable_scheduleCallback=function(e,t,n){var o=vt.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?o+n:o):n=o,e){case 1:var r=-1;break;case 2:r=250;break;case 5:r=1073741823;break;case 4:r=1e4;break;default:r=5e3}return r=n+r,e={id:B1++,callback:t,priorityLevel:e,startTime:n,expirationTime:r,sortIndex:-1},n>o?(e.sortIndex=n,hd(Jo,e),no(vo)===null&&e===no(Jo)&&(pl?(uh(ml),ml=-1):pl=!0,xd(md,n-o))):(e.sortIndex=r,hd(vo,e),zr||Ys||(zr=!0,yd(gd))),e};vt.unstable_shouldYield=hh;vt.unstable_wrapCallback=function(e){var t=rn;return function(){var n=rn;rn=t;try{return e.apply(this,arguments)}finally{rn=n}}}});var gh=xo(($w,mh)=>{"use strict";mh.exports=ph()});var w0=xo($n=>{"use strict";var z1=Ct(),In=gh();function Q(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cp=new Set,Ol={};function qr(e,t){Pi(e,t),Pi(e+"Capture",t)}function Pi(e,t){for(Ol[e]=t,e=0;e<t.length;e++)Cp.add(t[e])}var jo=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jd=Object.prototype.hasOwnProperty,O1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yh={},xh={};function A1(e){return jd.call(xh,e)?!0:jd.call(yh,e)?!1:O1.test(e)?xh[e]=!0:(yh[e]=!0,!1)}function F1(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function W1(e,t,n,o){if(t===null||typeof t>"u"||F1(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pn(e,t,n,o,r,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var Kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Kt[e]=new pn(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Kt[t]=new pn(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Kt[e]=new pn(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Kt[e]=new pn(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Kt[e]=new pn(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Kt[e]=new pn(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Kt[e]=new pn(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Kt[e]=new pn(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Kt[e]=new pn(e,5,!1,e.toLowerCase(),null,!1,!1)});var Pu=/[\-:]([a-z])/g;function Du(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Pu,Du);Kt[t]=new pn(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Pu,Du);Kt[t]=new pn(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Pu,Du);Kt[t]=new pn(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Kt[e]=new pn(e,1,!1,e.toLowerCase(),null,!1,!1)});Kt.xlinkHref=new pn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Kt[e]=new pn(e,1,!1,e.toLowerCase(),null,!0,!0)});function Bu(e,t,n,o){var r=Kt.hasOwnProperty(t)?Kt[t]:null;(r!==null?r.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(W1(t,n,r,o)&&(n=null),o||r===null?A1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=n===null?r.type===3?!1:"":n:(t=r.attributeName,o=r.attributeNamespace,n===null?e.removeAttribute(t):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var Qo=z1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vs=Symbol.for("react.element"),mi=Symbol.for("react.portal"),gi=Symbol.for("react.fragment"),zu=Symbol.for("react.strict_mode"),Hd=Symbol.for("react.profiler"),Sp=Symbol.for("react.provider"),Mp=Symbol.for("react.context"),Ou=Symbol.for("react.forward_ref"),Ud=Symbol.for("react.suspense"),Yd=Symbol.for("react.suspense_list"),Au=Symbol.for("react.memo"),er=Symbol.for("react.lazy"),Ep=Symbol.for("react.offscreen"),vh=Symbol.iterator;function gl(e){return e===null||typeof e!="object"?null:(e=vh&&e[vh]||e["@@iterator"],typeof e=="function"?e:null)}var It=Object.assign,vd;function Sl(e){if(vd===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);vd=t&&t[1]||""}return`
`+vd+e}var wd=!1;function bd(e,t){if(!e||wd)return"";wd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var o=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){o=u}e.call(t.prototype)}else{try{throw Error()}catch(u){o=u}e()}}catch(u){if(u&&o&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),i=o.stack.split(`
`),l=r.length-1,s=i.length-1;1<=l&&0<=s&&r[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(r[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||r[l]!==i[s]){var a=`
`+r[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{wd=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Sl(e):""}function j1(e){switch(e.tag){case 5:return Sl(e.type);case 16:return Sl("Lazy");case 13:return Sl("Suspense");case 19:return Sl("SuspenseList");case 0:case 2:case 15:return e=bd(e.type,!1),e;case 11:return e=bd(e.type.render,!1),e;case 1:return e=bd(e.type,!0),e;default:return""}}function Qd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case gi:return"Fragment";case mi:return"Portal";case Hd:return"Profiler";case zu:return"StrictMode";case Ud:return"Suspense";case Yd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Mp:return(e.displayName||"Context")+".Consumer";case Sp:return(e._context.displayName||"Context")+".Provider";case Ou:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Au:return t=e.displayName||null,t!==null?t:Qd(e.type)||"Memo";case er:t=e._payload,e=e._init;try{return Qd(e(t))}catch{}}return null}function H1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qd(t);case 8:return t===zu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function hr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Lp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function U1(e){var t=Lp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(l){o=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(l){o=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xs(e){e._valueTracker||(e._valueTracker=U1(e))}function Np(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=Lp(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function ba(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Vd(e,t){var n=t.checked;return It({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function wh(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=hr(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ip(e,t){t=t.checked,t!=null&&Bu(e,"checked",t,!1)}function Xd(e,t){Ip(e,t);var n=hr(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Gd(e,t.type,n):t.hasOwnProperty("defaultValue")&&Gd(e,t.type,hr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function bh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Gd(e,t,n){(t!=="number"||ba(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ml=Array.isArray;function Li(e,t,n,o){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&o&&(e[n].defaultSelected=!0)}else{for(n=""+hr(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,o&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function qd(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(Q(91));return It({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function kh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(Q(92));if(Ml(n)){if(1<n.length)throw Error(Q(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:hr(n)}}function Rp(e,t){var n=hr(t.value),o=hr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function Ch(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function $p(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kd(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?$p(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Gs,Tp=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,r){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,r)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Gs=Gs||document.createElement("div"),Gs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Gs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Al(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Nl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Y1=["Webkit","ms","Moz","O"];Object.keys(Nl).forEach(function(e){Y1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Nl[t]=Nl[e]})});function Pp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Nl.hasOwnProperty(e)&&Nl[e]?(""+t).trim():t+"px"}function Dp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,r=Pp(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,r):e[n]=r}}var Q1=It({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jd(e,t){if(t){if(Q1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(Q(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(Q(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(Q(61))}if(t.style!=null&&typeof t.style!="object")throw Error(Q(62))}}function Zd(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var eu=null;function Fu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var tu=null,Ni=null,Ii=null;function Sh(e){if(e=os(e)){if(typeof tu!="function")throw Error(Q(280));var t=e.stateNode;t&&(t=qa(t),tu(e.stateNode,e.type,t))}}function Bp(e){Ni?Ii?Ii.push(e):Ii=[e]:Ni=e}function zp(){if(Ni){var e=Ni,t=Ii;if(Ii=Ni=null,Sh(e),t)for(e=0;e<t.length;e++)Sh(t[e])}}function Op(e,t){return e(t)}function Ap(){}var kd=!1;function Fp(e,t,n){if(kd)return e(t,n);kd=!0;try{return Op(e,t,n)}finally{kd=!1,(Ni!==null||Ii!==null)&&(Ap(),zp())}}function Fl(e,t){var n=e.stateNode;if(n===null)return null;var o=qa(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Q(231,t,typeof n));return n}var nu=!1;if(jo)try{hi={},Object.defineProperty(hi,"passive",{get:function(){nu=!0}}),window.addEventListener("test",hi,hi),window.removeEventListener("test",hi,hi)}catch{nu=!1}var hi;function V1(e,t,n,o,r,i,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var Il=!1,ka=null,Ca=!1,ou=null,X1={onError:function(e){Il=!0,ka=e}};function G1(e,t,n,o,r,i,l,s,a){Il=!1,ka=null,V1.apply(X1,arguments)}function q1(e,t,n,o,r,i,l,s,a){if(G1.apply(this,arguments),Il){if(Il){var u=ka;Il=!1,ka=null}else throw Error(Q(198));Ca||(Ca=!0,ou=u)}}function Kr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Wp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Mh(e){if(Kr(e)!==e)throw Error(Q(188))}function K1(e){var t=e.alternate;if(!t){if(t=Kr(e),t===null)throw Error(Q(188));return t!==e?null:e}for(var n=e,o=t;;){var r=n.return;if(r===null)break;var i=r.alternate;if(i===null){if(o=r.return,o!==null){n=o;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===n)return Mh(r),e;if(i===o)return Mh(r),t;i=i.sibling}throw Error(Q(188))}if(n.return!==o.return)n=r,o=i;else{for(var l=!1,s=r.child;s;){if(s===n){l=!0,n=r,o=i;break}if(s===o){l=!0,o=r,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,o=r;break}if(s===o){l=!0,o=i,n=r;break}s=s.sibling}if(!l)throw Error(Q(189))}}if(n.alternate!==o)throw Error(Q(190))}if(n.tag!==3)throw Error(Q(188));return n.stateNode.current===n?e:t}function jp(e){return e=K1(e),e!==null?Hp(e):null}function Hp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Hp(e);if(t!==null)return t;e=e.sibling}return null}var Up=In.unstable_scheduleCallback,Eh=In.unstable_cancelCallback,J1=In.unstable_shouldYield,Z1=In.unstable_requestPaint,Dt=In.unstable_now,ey=In.unstable_getCurrentPriorityLevel,Wu=In.unstable_ImmediatePriority,Yp=In.unstable_UserBlockingPriority,Sa=In.unstable_NormalPriority,ty=In.unstable_LowPriority,Qp=In.unstable_IdlePriority,Qa=null,Co=null;function ny(e){if(Co&&typeof Co.onCommitFiberRoot=="function")try{Co.onCommitFiberRoot(Qa,e,void 0,(e.current.flags&128)===128)}catch{}}var so=Math.clz32?Math.clz32:iy,oy=Math.log,ry=Math.LN2;function iy(e){return e>>>=0,e===0?32:31-(oy(e)/ry|0)|0}var qs=64,Ks=4194304;function El(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ma(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,r=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~r;s!==0?o=El(s):(i&=l,i!==0&&(o=El(i)))}else l=n&~r,l!==0?o=El(l):i!==0&&(o=El(i));if(o===0)return 0;if(t!==0&&t!==o&&(t&r)===0&&(r=o&-o,i=t&-t,r>=i||r===16&&(i&4194240)!==0))return t;if((o&4)!==0&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-so(t),r=1<<n,o|=e[n],t&=~r;return o}function ly(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sy(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-so(i),s=1<<l,a=r[l];a===-1?((s&n)===0||(s&o)!==0)&&(r[l]=ly(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function ru(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Vp(){var e=qs;return qs<<=1,(qs&4194240)===0&&(qs=64),e}function Cd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ts(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-so(t),e[t]=n}function ay(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var r=31-so(n),i=1<<r;t[r]=0,o[r]=-1,e[r]=-1,n&=~i}}function ju(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-so(n),r=1<<o;r&t|e[o]&t&&(e[o]|=t),n&=~r}}var ut=0;function Xp(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Gp,Hu,qp,Kp,Jp,iu=!1,Js=[],lr=null,sr=null,ar=null,Wl=new Map,jl=new Map,nr=[],cy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lh(e,t){switch(e){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":Wl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":jl.delete(t.pointerId)}}function yl(e,t,n,o,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:i,targetContainers:[r]},t!==null&&(t=os(t),t!==null&&Hu(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function dy(e,t,n,o,r){switch(t){case"focusin":return lr=yl(lr,e,t,n,o,r),!0;case"dragenter":return sr=yl(sr,e,t,n,o,r),!0;case"mouseover":return ar=yl(ar,e,t,n,o,r),!0;case"pointerover":var i=r.pointerId;return Wl.set(i,yl(Wl.get(i)||null,e,t,n,o,r)),!0;case"gotpointercapture":return i=r.pointerId,jl.set(i,yl(jl.get(i)||null,e,t,n,o,r)),!0}return!1}function Zp(e){var t=Fr(e.target);if(t!==null){var n=Kr(t);if(n!==null){if(t=n.tag,t===13){if(t=Wp(n),t!==null){e.blockedOn=t,Jp(e.priority,function(){qp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _a(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=lu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);eu=o,n.target.dispatchEvent(o),eu=null}else return t=os(n),t!==null&&Hu(t),e.blockedOn=n,!1;t.shift()}return!0}function Nh(e,t,n){_a(e)&&n.delete(t)}function uy(){iu=!1,lr!==null&&_a(lr)&&(lr=null),sr!==null&&_a(sr)&&(sr=null),ar!==null&&_a(ar)&&(ar=null),Wl.forEach(Nh),jl.forEach(Nh)}function xl(e,t){e.blockedOn===t&&(e.blockedOn=null,iu||(iu=!0,In.unstable_scheduleCallback(In.unstable_NormalPriority,uy)))}function Hl(e){function t(r){return xl(r,e)}if(0<Js.length){xl(Js[0],e);for(var n=1;n<Js.length;n++){var o=Js[n];o.blockedOn===e&&(o.blockedOn=null)}}for(lr!==null&&xl(lr,e),sr!==null&&xl(sr,e),ar!==null&&xl(ar,e),Wl.forEach(t),jl.forEach(t),n=0;n<nr.length;n++)o=nr[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<nr.length&&(n=nr[0],n.blockedOn===null);)Zp(n),n.blockedOn===null&&nr.shift()}var Ri=Qo.ReactCurrentBatchConfig,Ea=!0;function _y(e,t,n,o){var r=ut,i=Ri.transition;Ri.transition=null;try{ut=1,Uu(e,t,n,o)}finally{ut=r,Ri.transition=i}}function fy(e,t,n,o){var r=ut,i=Ri.transition;Ri.transition=null;try{ut=4,Uu(e,t,n,o)}finally{ut=r,Ri.transition=i}}function Uu(e,t,n,o){if(Ea){var r=lu(e,t,n,o);if(r===null)Rd(e,t,o,La,n),Lh(e,o);else if(dy(r,e,t,n,o))o.stopPropagation();else if(Lh(e,o),t&4&&-1<cy.indexOf(e)){for(;r!==null;){var i=os(r);if(i!==null&&Gp(i),i=lu(e,t,n,o),i===null&&Rd(e,t,o,La,n),i===r)break;r=i}r!==null&&o.stopPropagation()}else Rd(e,t,o,null,n)}}var La=null;function lu(e,t,n,o){if(La=null,e=Fu(o),e=Fr(e),e!==null)if(t=Kr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Wp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return La=e,null}function em(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ey()){case Wu:return 1;case Yp:return 4;case Sa:case ty:return 16;case Qp:return 536870912;default:return 16}default:return 16}}var rr=null,Yu=null,fa=null;function tm(){if(fa)return fa;var e,t=Yu,n=t.length,o,r="value"in rr?rr.value:rr.textContent,i=r.length;for(e=0;e<n&&t[e]===r[e];e++);var l=n-e;for(o=1;o<=l&&t[n-o]===r[i-o];o++);return fa=r.slice(e,1<o?1-o:void 0)}function ha(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zs(){return!0}function Ih(){return!1}function Rn(e){function t(n,o,r,i,l){this._reactName=n,this._targetInst=r,this.type=o,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Zs:Ih,this.isPropagationStopped=Ih,this}return It(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zs)},persist:function(){},isPersistent:Zs}),t}var Wi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qu=Rn(Wi),ns=It({},Wi,{view:0,detail:0}),hy=Rn(ns),Sd,Md,vl,Va=It({},ns,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vl&&(vl&&e.type==="mousemove"?(Sd=e.screenX-vl.screenX,Md=e.screenY-vl.screenY):Md=Sd=0,vl=e),Sd)},movementY:function(e){return"movementY"in e?e.movementY:Md}}),Rh=Rn(Va),py=It({},Va,{dataTransfer:0}),my=Rn(py),gy=It({},ns,{relatedTarget:0}),Ed=Rn(gy),yy=It({},Wi,{animationName:0,elapsedTime:0,pseudoElement:0}),xy=Rn(yy),vy=It({},Wi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wy=Rn(vy),by=It({},Wi,{data:0}),$h=Rn(by),ky={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function My(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Sy[e])?!!t[e]:!1}function Vu(){return My}var Ey=It({},ns,{key:function(e){if(e.key){var t=ky[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ha(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vu,charCode:function(e){return e.type==="keypress"?ha(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ha(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ly=Rn(Ey),Ny=It({},Va,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Th=Rn(Ny),Iy=It({},ns,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vu}),Ry=Rn(Iy),$y=It({},Wi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ty=Rn($y),Py=It({},Va,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Dy=Rn(Py),By=[9,13,27,32],Xu=jo&&"CompositionEvent"in window,Rl=null;jo&&"documentMode"in document&&(Rl=document.documentMode);var zy=jo&&"TextEvent"in window&&!Rl,nm=jo&&(!Xu||Rl&&8<Rl&&11>=Rl),Ph=" ",Dh=!1;function om(e,t){switch(e){case"keyup":return By.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yi=!1;function Oy(e,t){switch(e){case"compositionend":return rm(t);case"keypress":return t.which!==32?null:(Dh=!0,Ph);case"textInput":return e=t.data,e===Ph&&Dh?null:e;default:return null}}function Ay(e,t){if(yi)return e==="compositionend"||!Xu&&om(e,t)?(e=tm(),fa=Yu=rr=null,yi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nm&&t.locale!=="ko"?null:t.data;default:return null}}var Fy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Fy[e.type]:t==="textarea"}function im(e,t,n,o){Bp(o),t=Na(t,"onChange"),0<t.length&&(n=new Qu("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var $l=null,Ul=null;function Wy(e){mm(e,0)}function Xa(e){var t=wi(e);if(Np(t))return e}function jy(e,t){if(e==="change")return t}var lm=!1;jo&&(jo?(ta="oninput"in document,ta||(Ld=document.createElement("div"),Ld.setAttribute("oninput","return;"),ta=typeof Ld.oninput=="function"),ea=ta):ea=!1,lm=ea&&(!document.documentMode||9<document.documentMode));var ea,ta,Ld;function zh(){$l&&($l.detachEvent("onpropertychange",sm),Ul=$l=null)}function sm(e){if(e.propertyName==="value"&&Xa(Ul)){var t=[];im(t,Ul,e,Fu(e)),Fp(Wy,t)}}function Hy(e,t,n){e==="focusin"?(zh(),$l=t,Ul=n,$l.attachEvent("onpropertychange",sm)):e==="focusout"&&zh()}function Uy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xa(Ul)}function Yy(e,t){if(e==="click")return Xa(t)}function Qy(e,t){if(e==="input"||e==="change")return Xa(t)}function Vy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var co=typeof Object.is=="function"?Object.is:Vy;function Yl(e,t){if(co(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var r=n[o];if(!jd.call(t,r)||!co(e[r],t[r]))return!1}return!0}function Oh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ah(e,t){var n=Oh(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Oh(n)}}function am(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?am(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function cm(){for(var e=window,t=ba();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ba(e.document)}return t}function Gu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Xy(e){var t=cm(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&am(n.ownerDocument.documentElement,n)){if(o!==null&&Gu(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=n.textContent.length,i=Math.min(o.start,r);o=o.end===void 0?i:Math.min(o.end,r),!e.extend&&i>o&&(r=o,o=i,i=r),r=Ah(n,i);var l=Ah(n,o);r&&l&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),i>o?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gy=jo&&"documentMode"in document&&11>=document.documentMode,xi=null,su=null,Tl=null,au=!1;function Fh(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;au||xi==null||xi!==ba(o)||(o=xi,"selectionStart"in o&&Gu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Tl&&Yl(Tl,o)||(Tl=o,o=Na(su,"onSelect"),0<o.length&&(t=new Qu("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=xi)))}function na(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var vi={animationend:na("Animation","AnimationEnd"),animationiteration:na("Animation","AnimationIteration"),animationstart:na("Animation","AnimationStart"),transitionend:na("Transition","TransitionEnd")},Nd={},dm={};jo&&(dm=document.createElement("div").style,"AnimationEvent"in window||(delete vi.animationend.animation,delete vi.animationiteration.animation,delete vi.animationstart.animation),"TransitionEvent"in window||delete vi.transitionend.transition);function Ga(e){if(Nd[e])return Nd[e];if(!vi[e])return e;var t=vi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in dm)return Nd[e]=t[n];return e}var um=Ga("animationend"),_m=Ga("animationiteration"),fm=Ga("animationstart"),hm=Ga("transitionend"),pm=new Map,Wh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mr(e,t){pm.set(e,t),qr(t,[e])}for(oa=0;oa<Wh.length;oa++)ra=Wh[oa],jh=ra.toLowerCase(),Hh=ra[0].toUpperCase()+ra.slice(1),mr(jh,"on"+Hh);var ra,jh,Hh,oa;mr(um,"onAnimationEnd");mr(_m,"onAnimationIteration");mr(fm,"onAnimationStart");mr("dblclick","onDoubleClick");mr("focusin","onFocus");mr("focusout","onBlur");mr(hm,"onTransitionEnd");Pi("onMouseEnter",["mouseout","mouseover"]);Pi("onMouseLeave",["mouseout","mouseover"]);Pi("onPointerEnter",["pointerout","pointerover"]);Pi("onPointerLeave",["pointerout","pointerover"]);qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ll="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ll));function Uh(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,q1(o,t,void 0,e),e.currentTarget=null}function mm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],r=o.event;o=o.listeners;e:{var i=void 0;if(t)for(var l=o.length-1;0<=l;l--){var s=o[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==i&&r.isPropagationStopped())break e;Uh(r,s,u),i=a}else for(l=0;l<o.length;l++){if(s=o[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==i&&r.isPropagationStopped())break e;Uh(r,s,u),i=a}}}if(Ca)throw e=ou,Ca=!1,ou=null,e}function St(e,t){var n=t[fu];n===void 0&&(n=t[fu]=new Set);var o=e+"__bubble";n.has(o)||(gm(t,e,2,!1),n.add(o))}function Id(e,t,n){var o=0;t&&(o|=4),gm(n,e,o,t)}var ia="_reactListening"+Math.random().toString(36).slice(2);function Ql(e){if(!e[ia]){e[ia]=!0,Cp.forEach(function(n){n!=="selectionchange"&&(qy.has(n)||Id(n,!1,e),Id(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ia]||(t[ia]=!0,Id("selectionchange",!1,t))}}function gm(e,t,n,o){switch(em(t)){case 1:var r=_y;break;case 4:r=fy;break;default:r=Uu}n=r.bind(null,t,n,e),r=void 0,!nu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),o?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function Rd(e,t,n,o,r){var i=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var s=o.stateNode.containerInfo;if(s===r||s.nodeType===8&&s.parentNode===r)break;if(l===4)for(l=o.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===r||a.nodeType===8&&a.parentNode===r))return;l=l.return}for(;s!==null;){if(l=Fr(s),l===null)return;if(a=l.tag,a===5||a===6){o=i=l;continue e}s=s.parentNode}}o=o.return}Fp(function(){var u=i,h=Fu(n),f=[];e:{var x=pm.get(e);if(x!==void 0){var S=Qu,b=e;switch(e){case"keypress":if(ha(n)===0)break e;case"keydown":case"keyup":S=Ly;break;case"focusin":b="focus",S=Ed;break;case"focusout":b="blur",S=Ed;break;case"beforeblur":case"afterblur":S=Ed;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Rh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=my;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Ry;break;case um:case _m:case fm:S=xy;break;case hm:S=Ty;break;case"scroll":S=hy;break;case"wheel":S=Dy;break;case"copy":case"cut":case"paste":S=wy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Th}var N=(t&4)!==0,E=!N&&e==="scroll",y=N?x!==null?x+"Capture":null:x;N=[];for(var v=u,p;v!==null;){p=v;var C=p.stateNode;if(p.tag===5&&C!==null&&(p=C,y!==null&&(C=Fl(v,y),C!=null&&N.push(Vl(v,C,p)))),E)break;v=v.return}0<N.length&&(x=new S(x,b,null,n,h),f.push({event:x,listeners:N}))}}if((t&7)===0){e:{if(x=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",x&&n!==eu&&(b=n.relatedTarget||n.fromElement)&&(Fr(b)||b[Ho]))break e;if((S||x)&&(x=h.window===h?h:(x=h.ownerDocument)?x.defaultView||x.parentWindow:window,S?(b=n.relatedTarget||n.toElement,S=u,b=b?Fr(b):null,b!==null&&(E=Kr(b),b!==E||b.tag!==5&&b.tag!==6)&&(b=null)):(S=null,b=u),S!==b)){if(N=Rh,C="onMouseLeave",y="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(N=Th,C="onPointerLeave",y="onPointerEnter",v="pointer"),E=S==null?x:wi(S),p=b==null?x:wi(b),x=new N(C,v+"leave",S,n,h),x.target=E,x.relatedTarget=p,C=null,Fr(h)===u&&(N=new N(y,v+"enter",b,n,h),N.target=p,N.relatedTarget=E,C=N),E=C,S&&b)t:{for(N=S,y=b,v=0,p=N;p;p=pi(p))v++;for(p=0,C=y;C;C=pi(C))p++;for(;0<v-p;)N=pi(N),v--;for(;0<p-v;)y=pi(y),p--;for(;v--;){if(N===y||y!==null&&N===y.alternate)break t;N=pi(N),y=pi(y)}N=null}else N=null;S!==null&&Yh(f,x,S,N,!1),b!==null&&E!==null&&Yh(f,E,b,N,!0)}}e:{if(x=u?wi(u):window,S=x.nodeName&&x.nodeName.toLowerCase(),S==="select"||S==="input"&&x.type==="file")var H=jy;else if(Bh(x))if(lm)H=Qy;else{H=Uy;var V=Hy}else(S=x.nodeName)&&S.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(H=Yy);if(H&&(H=H(e,u))){im(f,H,n,h);break e}V&&V(e,x,u),e==="focusout"&&(V=x._wrapperState)&&V.controlled&&x.type==="number"&&Gd(x,"number",x.value)}switch(V=u?wi(u):window,e){case"focusin":(Bh(V)||V.contentEditable==="true")&&(xi=V,su=u,Tl=null);break;case"focusout":Tl=su=xi=null;break;case"mousedown":au=!0;break;case"contextmenu":case"mouseup":case"dragend":au=!1,Fh(f,n,h);break;case"selectionchange":if(Gy)break;case"keydown":case"keyup":Fh(f,n,h)}var B;if(Xu)e:{switch(e){case"compositionstart":var q="onCompositionStart";break e;case"compositionend":q="onCompositionEnd";break e;case"compositionupdate":q="onCompositionUpdate";break e}q=void 0}else yi?om(e,n)&&(q="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(q="onCompositionStart");q&&(nm&&n.locale!=="ko"&&(yi||q!=="onCompositionStart"?q==="onCompositionEnd"&&yi&&(B=tm()):(rr=h,Yu="value"in rr?rr.value:rr.textContent,yi=!0)),V=Na(u,q),0<V.length&&(q=new $h(q,e,null,n,h),f.push({event:q,listeners:V}),B?q.data=B:(B=rm(n),B!==null&&(q.data=B)))),(B=zy?Oy(e,n):Ay(e,n))&&(u=Na(u,"onBeforeInput"),0<u.length&&(h=new $h("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:u}),h.data=B))}mm(f,t)})}function Vl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Na(e,t){for(var n=t+"Capture",o=[];e!==null;){var r=e,i=r.stateNode;r.tag===5&&i!==null&&(r=i,i=Fl(e,n),i!=null&&o.unshift(Vl(e,i,r)),i=Fl(e,t),i!=null&&o.push(Vl(e,i,r))),e=e.return}return o}function pi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Yh(e,t,n,o,r){for(var i=t._reactName,l=[];n!==null&&n!==o;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===o)break;s.tag===5&&u!==null&&(s=u,r?(a=Fl(n,i),a!=null&&l.unshift(Vl(n,a,s))):r||(a=Fl(n,i),a!=null&&l.push(Vl(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Ky=/\r\n?/g,Jy=/\u0000|\uFFFD/g;function Qh(e){return(typeof e=="string"?e:""+e).replace(Ky,`
`).replace(Jy,"")}function la(e,t,n){if(t=Qh(t),Qh(e)!==t&&n)throw Error(Q(425))}function Ia(){}var cu=null,du=null;function uu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _u=typeof setTimeout=="function"?setTimeout:void 0,Zy=typeof clearTimeout=="function"?clearTimeout:void 0,Vh=typeof Promise=="function"?Promise:void 0,e5=typeof queueMicrotask=="function"?queueMicrotask:typeof Vh<"u"?function(e){return Vh.resolve(null).then(e).catch(t5)}:_u;function t5(e){setTimeout(function(){throw e})}function $d(e,t){var n=t,o=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(o===0){e.removeChild(r),Hl(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=r}while(n);Hl(t)}function cr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Xh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ji=Math.random().toString(36).slice(2),ko="__reactFiber$"+ji,Xl="__reactProps$"+ji,Ho="__reactContainer$"+ji,fu="__reactEvents$"+ji,n5="__reactListeners$"+ji,o5="__reactHandles$"+ji;function Fr(e){var t=e[ko];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ho]||n[ko]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Xh(e);e!==null;){if(n=e[ko])return n;e=Xh(e)}return t}e=n,n=e.parentNode}return null}function os(e){return e=e[ko]||e[Ho],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function wi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(Q(33))}function qa(e){return e[Xl]||null}var hu=[],bi=-1;function gr(e){return{current:e}}function Mt(e){0>bi||(e.current=hu[bi],hu[bi]=null,bi--)}function wt(e,t){bi++,hu[bi]=e.current,e.current=t}var pr={},cn=gr(pr),bn=gr(!1),Yr=pr;function Di(e,t){var n=e.type.contextTypes;if(!n)return pr;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var r={},i;for(i in n)r[i]=t[i];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function kn(e){return e=e.childContextTypes,e!=null}function Ra(){Mt(bn),Mt(cn)}function Gh(e,t,n){if(cn.current!==pr)throw Error(Q(168));wt(cn,t),wt(bn,n)}function ym(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var r in o)if(!(r in t))throw Error(Q(108,H1(e)||"Unknown",r));return It({},n,o)}function $a(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pr,Yr=cn.current,wt(cn,e),wt(bn,bn.current),!0}function qh(e,t,n){var o=e.stateNode;if(!o)throw Error(Q(169));n?(e=ym(e,t,Yr),o.__reactInternalMemoizedMergedChildContext=e,Mt(bn),Mt(cn),wt(cn,e)):Mt(bn),wt(bn,n)}var Oo=null,Ka=!1,Td=!1;function xm(e){Oo===null?Oo=[e]:Oo.push(e)}function r5(e){Ka=!0,xm(e)}function yr(){if(!Td&&Oo!==null){Td=!0;var e=0,t=ut;try{var n=Oo;for(ut=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}Oo=null,Ka=!1}catch(r){throw Oo!==null&&(Oo=Oo.slice(e+1)),Up(Wu,yr),r}finally{ut=t,Td=!1}}return null}var ki=[],Ci=0,Ta=null,Pa=0,jn=[],Hn=0,Qr=null,Ao=1,Fo="";function Or(e,t){ki[Ci++]=Pa,ki[Ci++]=Ta,Ta=e,Pa=t}function vm(e,t,n){jn[Hn++]=Ao,jn[Hn++]=Fo,jn[Hn++]=Qr,Qr=e;var o=Ao;e=Fo;var r=32-so(o)-1;o&=~(1<<r),n+=1;var i=32-so(t)+r;if(30<i){var l=r-r%5;i=(o&(1<<l)-1).toString(32),o>>=l,r-=l,Ao=1<<32-so(t)+r|n<<r|o,Fo=i+e}else Ao=1<<i|n<<r|o,Fo=e}function qu(e){e.return!==null&&(Or(e,1),vm(e,1,0))}function Ku(e){for(;e===Ta;)Ta=ki[--Ci],ki[Ci]=null,Pa=ki[--Ci],ki[Ci]=null;for(;e===Qr;)Qr=jn[--Hn],jn[Hn]=null,Fo=jn[--Hn],jn[Hn]=null,Ao=jn[--Hn],jn[Hn]=null}var Nn=null,Ln=null,Et=!1,lo=null;function wm(e,t){var n=Un(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Kh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Nn=e,Ln=cr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Nn=e,Ln=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Qr!==null?{id:Ao,overflow:Fo}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Un(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Nn=e,Ln=null,!0):!1;default:return!1}}function pu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function mu(e){if(Et){var t=Ln;if(t){var n=t;if(!Kh(e,t)){if(pu(e))throw Error(Q(418));t=cr(n.nextSibling);var o=Nn;t&&Kh(e,t)?wm(o,n):(e.flags=e.flags&-4097|2,Et=!1,Nn=e)}}else{if(pu(e))throw Error(Q(418));e.flags=e.flags&-4097|2,Et=!1,Nn=e}}}function Jh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Nn=e}function sa(e){if(e!==Nn)return!1;if(!Et)return Jh(e),Et=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!uu(e.type,e.memoizedProps)),t&&(t=Ln)){if(pu(e))throw bm(),Error(Q(418));for(;t;)wm(e,t),t=cr(t.nextSibling)}if(Jh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Q(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ln=cr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ln=null}}else Ln=Nn?cr(e.stateNode.nextSibling):null;return!0}function bm(){for(var e=Ln;e;)e=cr(e.nextSibling)}function Bi(){Ln=Nn=null,Et=!1}function Ju(e){lo===null?lo=[e]:lo.push(e)}var i5=Qo.ReactCurrentBatchConfig;function wl(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Q(309));var o=n.stateNode}if(!o)throw Error(Q(147,e));var r=o,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=r.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(Q(284));if(!n._owner)throw Error(Q(290,e))}return e}function aa(e,t){throw e=Object.prototype.toString.call(t),Error(Q(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Zh(e){var t=e._init;return t(e._payload)}function km(e){function t(y,v){if(e){var p=y.deletions;p===null?(y.deletions=[v],y.flags|=16):p.push(v)}}function n(y,v){if(!e)return null;for(;v!==null;)t(y,v),v=v.sibling;return null}function o(y,v){for(y=new Map;v!==null;)v.key!==null?y.set(v.key,v):y.set(v.index,v),v=v.sibling;return y}function r(y,v){return y=fr(y,v),y.index=0,y.sibling=null,y}function i(y,v,p){return y.index=p,e?(p=y.alternate,p!==null?(p=p.index,p<v?(y.flags|=2,v):p):(y.flags|=2,v)):(y.flags|=1048576,v)}function l(y){return e&&y.alternate===null&&(y.flags|=2),y}function s(y,v,p,C){return v===null||v.tag!==6?(v=Fd(p,y.mode,C),v.return=y,v):(v=r(v,p),v.return=y,v)}function a(y,v,p,C){var H=p.type;return H===gi?h(y,v,p.props.children,C,p.key):v!==null&&(v.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===er&&Zh(H)===v.type)?(C=r(v,p.props),C.ref=wl(y,v,p),C.return=y,C):(C=wa(p.type,p.key,p.props,null,y.mode,C),C.ref=wl(y,v,p),C.return=y,C)}function u(y,v,p,C){return v===null||v.tag!==4||v.stateNode.containerInfo!==p.containerInfo||v.stateNode.implementation!==p.implementation?(v=Wd(p,y.mode,C),v.return=y,v):(v=r(v,p.children||[]),v.return=y,v)}function h(y,v,p,C,H){return v===null||v.tag!==7?(v=Ur(p,y.mode,C,H),v.return=y,v):(v=r(v,p),v.return=y,v)}function f(y,v,p){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Fd(""+v,y.mode,p),v.return=y,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Vs:return p=wa(v.type,v.key,v.props,null,y.mode,p),p.ref=wl(y,null,v),p.return=y,p;case mi:return v=Wd(v,y.mode,p),v.return=y,v;case er:var C=v._init;return f(y,C(v._payload),p)}if(Ml(v)||gl(v))return v=Ur(v,y.mode,p,null),v.return=y,v;aa(y,v)}return null}function x(y,v,p,C){var H=v!==null?v.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return H!==null?null:s(y,v,""+p,C);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Vs:return p.key===H?a(y,v,p,C):null;case mi:return p.key===H?u(y,v,p,C):null;case er:return H=p._init,x(y,v,H(p._payload),C)}if(Ml(p)||gl(p))return H!==null?null:h(y,v,p,C,null);aa(y,p)}return null}function S(y,v,p,C,H){if(typeof C=="string"&&C!==""||typeof C=="number")return y=y.get(p)||null,s(v,y,""+C,H);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Vs:return y=y.get(C.key===null?p:C.key)||null,a(v,y,C,H);case mi:return y=y.get(C.key===null?p:C.key)||null,u(v,y,C,H);case er:var V=C._init;return S(y,v,p,V(C._payload),H)}if(Ml(C)||gl(C))return y=y.get(p)||null,h(v,y,C,H,null);aa(v,C)}return null}function b(y,v,p,C){for(var H=null,V=null,B=v,q=v=0,F=null;B!==null&&q<p.length;q++){B.index>q?(F=B,B=null):F=B.sibling;var K=x(y,B,p[q],C);if(K===null){B===null&&(B=F);break}e&&B&&K.alternate===null&&t(y,B),v=i(K,v,q),V===null?H=K:V.sibling=K,V=K,B=F}if(q===p.length)return n(y,B),Et&&Or(y,q),H;if(B===null){for(;q<p.length;q++)B=f(y,p[q],C),B!==null&&(v=i(B,v,q),V===null?H=B:V.sibling=B,V=B);return Et&&Or(y,q),H}for(B=o(y,B);q<p.length;q++)F=S(B,y,q,p[q],C),F!==null&&(e&&F.alternate!==null&&B.delete(F.key===null?q:F.key),v=i(F,v,q),V===null?H=F:V.sibling=F,V=F);return e&&B.forEach(function(ae){return t(y,ae)}),Et&&Or(y,q),H}function N(y,v,p,C){var H=gl(p);if(typeof H!="function")throw Error(Q(150));if(p=H.call(p),p==null)throw Error(Q(151));for(var V=H=null,B=v,q=v=0,F=null,K=p.next();B!==null&&!K.done;q++,K=p.next()){B.index>q?(F=B,B=null):F=B.sibling;var ae=x(y,B,K.value,C);if(ae===null){B===null&&(B=F);break}e&&B&&ae.alternate===null&&t(y,B),v=i(ae,v,q),V===null?H=ae:V.sibling=ae,V=ae,B=F}if(K.done)return n(y,B),Et&&Or(y,q),H;if(B===null){for(;!K.done;q++,K=p.next())K=f(y,K.value,C),K!==null&&(v=i(K,v,q),V===null?H=K:V.sibling=K,V=K);return Et&&Or(y,q),H}for(B=o(y,B);!K.done;q++,K=p.next())K=S(B,y,q,K.value,C),K!==null&&(e&&K.alternate!==null&&B.delete(K.key===null?q:K.key),v=i(K,v,q),V===null?H=K:V.sibling=K,V=K);return e&&B.forEach(function(J){return t(y,J)}),Et&&Or(y,q),H}function E(y,v,p,C){if(typeof p=="object"&&p!==null&&p.type===gi&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Vs:e:{for(var H=p.key,V=v;V!==null;){if(V.key===H){if(H=p.type,H===gi){if(V.tag===7){n(y,V.sibling),v=r(V,p.props.children),v.return=y,y=v;break e}}else if(V.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===er&&Zh(H)===V.type){n(y,V.sibling),v=r(V,p.props),v.ref=wl(y,V,p),v.return=y,y=v;break e}n(y,V);break}else t(y,V);V=V.sibling}p.type===gi?(v=Ur(p.props.children,y.mode,C,p.key),v.return=y,y=v):(C=wa(p.type,p.key,p.props,null,y.mode,C),C.ref=wl(y,v,p),C.return=y,y=C)}return l(y);case mi:e:{for(V=p.key;v!==null;){if(v.key===V)if(v.tag===4&&v.stateNode.containerInfo===p.containerInfo&&v.stateNode.implementation===p.implementation){n(y,v.sibling),v=r(v,p.children||[]),v.return=y,y=v;break e}else{n(y,v);break}else t(y,v);v=v.sibling}v=Wd(p,y.mode,C),v.return=y,y=v}return l(y);case er:return V=p._init,E(y,v,V(p._payload),C)}if(Ml(p))return b(y,v,p,C);if(gl(p))return N(y,v,p,C);aa(y,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,v!==null&&v.tag===6?(n(y,v.sibling),v=r(v,p),v.return=y,y=v):(n(y,v),v=Fd(p,y.mode,C),v.return=y,y=v),l(y)):n(y,v)}return E}var zi=km(!0),Cm=km(!1),Da=gr(null),Ba=null,Si=null,Zu=null;function e_(){Zu=Si=Ba=null}function t_(e){var t=Da.current;Mt(Da),e._currentValue=t}function gu(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function $i(e,t){Ba=e,Zu=Si=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(wn=!0),e.firstContext=null)}function Qn(e){var t=e._currentValue;if(Zu!==e)if(e={context:e,memoizedValue:t,next:null},Si===null){if(Ba===null)throw Error(Q(308));Si=e,Ba.dependencies={lanes:0,firstContext:e}}else Si=Si.next=e;return t}var Wr=null;function n_(e){Wr===null?Wr=[e]:Wr.push(e)}function Sm(e,t,n,o){var r=t.interleaved;return r===null?(n.next=n,n_(t)):(n.next=r.next,r.next=n),t.interleaved=n,Uo(e,o)}function Uo(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var tr=!1;function o_(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Wo(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dr(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ge&2)!==0){var r=o.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),o.pending=t,Uo(e,n)}return r=o.interleaved,r===null?(t.next=t,n_(o)):(t.next=r.next,r.next=t),o.interleaved=t,Uo(e,n)}function pa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,ju(e,n)}}function ep(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var r=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?r=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?r=i=t:i=i.next=t}else r=i=t;n={baseState:o.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function za(e,t,n,o){var r=e.updateQueue;tr=!1;var i=r.firstBaseUpdate,l=r.lastBaseUpdate,s=r.shared.pending;if(s!==null){r.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?i=u:l.next=u,l=a;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==l&&(s===null?h.firstBaseUpdate=u:s.next=u,h.lastBaseUpdate=a))}if(i!==null){var f=r.baseState;l=0,h=u=a=null,s=i;do{var x=s.lane,S=s.eventTime;if((o&x)===x){h!==null&&(h=h.next={eventTime:S,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var b=e,N=s;switch(x=t,S=n,N.tag){case 1:if(b=N.payload,typeof b=="function"){f=b.call(S,f,x);break e}f=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=N.payload,x=typeof b=="function"?b.call(S,f,x):b,x==null)break e;f=It({},f,x);break e;case 2:tr=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,x=r.effects,x===null?r.effects=[s]:x.push(s))}else S={eventTime:S,lane:x,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(u=h=S,a=f):h=h.next=S,l|=x;if(s=s.next,s===null){if(s=r.shared.pending,s===null)break;x=s,s=x.next,x.next=null,r.lastBaseUpdate=x,r.shared.pending=null}}while(!0);if(h===null&&(a=f),r.baseState=a,r.firstBaseUpdate=u,r.lastBaseUpdate=h,t=r.shared.interleaved,t!==null){r=t;do l|=r.lane,r=r.next;while(r!==t)}else i===null&&(r.shared.lanes=0);Xr|=l,e.lanes=l,e.memoizedState=f}}function tp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],r=o.callback;if(r!==null){if(o.callback=null,o=n,typeof r!="function")throw Error(Q(191,r));r.call(o)}}}var rs={},So=gr(rs),Gl=gr(rs),ql=gr(rs);function jr(e){if(e===rs)throw Error(Q(174));return e}function r_(e,t){switch(wt(ql,t),wt(Gl,e),wt(So,rs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Kd(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Kd(t,e)}Mt(So),wt(So,t)}function Oi(){Mt(So),Mt(Gl),Mt(ql)}function Em(e){jr(ql.current);var t=jr(So.current),n=Kd(t,e.type);t!==n&&(wt(Gl,e),wt(So,n))}function i_(e){Gl.current===e&&(Mt(So),Mt(Gl))}var Lt=gr(0);function Oa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Pd=[];function l_(){for(var e=0;e<Pd.length;e++)Pd[e]._workInProgressVersionPrimary=null;Pd.length=0}var ma=Qo.ReactCurrentDispatcher,Dd=Qo.ReactCurrentBatchConfig,Vr=0,Nt=null,Wt=null,Ht=null,Aa=!1,Pl=!1,Kl=0,l5=0;function ln(){throw Error(Q(321))}function s_(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!co(e[n],t[n]))return!1;return!0}function a_(e,t,n,o,r,i){if(Vr=i,Nt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ma.current=e===null||e.memoizedState===null?d5:u5,e=n(o,r),Pl){i=0;do{if(Pl=!1,Kl=0,25<=i)throw Error(Q(301));i+=1,Ht=Wt=null,t.updateQueue=null,ma.current=_5,e=n(o,r)}while(Pl)}if(ma.current=Fa,t=Wt!==null&&Wt.next!==null,Vr=0,Ht=Wt=Nt=null,Aa=!1,t)throw Error(Q(300));return e}function c_(){var e=Kl!==0;return Kl=0,e}function bo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?Nt.memoizedState=Ht=e:Ht=Ht.next=e,Ht}function Vn(){if(Wt===null){var e=Nt.alternate;e=e!==null?e.memoizedState:null}else e=Wt.next;var t=Ht===null?Nt.memoizedState:Ht.next;if(t!==null)Ht=t,Wt=e;else{if(e===null)throw Error(Q(310));Wt=e,e={memoizedState:Wt.memoizedState,baseState:Wt.baseState,baseQueue:Wt.baseQueue,queue:Wt.queue,next:null},Ht===null?Nt.memoizedState=Ht=e:Ht=Ht.next=e}return Ht}function Jl(e,t){return typeof t=="function"?t(e):t}function Bd(e){var t=Vn(),n=t.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=e;var o=Wt,r=o.baseQueue,i=n.pending;if(i!==null){if(r!==null){var l=r.next;r.next=i.next,i.next=l}o.baseQueue=r=i,n.pending=null}if(r!==null){i=r.next,o=o.baseState;var s=l=null,a=null,u=i;do{var h=u.lane;if((Vr&h)===h)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),o=u.hasEagerState?u.eagerState:e(o,u.action);else{var f={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=f,l=o):a=a.next=f,Nt.lanes|=h,Xr|=h}u=u.next}while(u!==null&&u!==i);a===null?l=o:a.next=s,co(o,t.memoizedState)||(wn=!0),t.memoizedState=o,t.baseState=l,t.baseQueue=a,n.lastRenderedState=o}if(e=n.interleaved,e!==null){r=e;do i=r.lane,Nt.lanes|=i,Xr|=i,r=r.next;while(r!==e)}else r===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function zd(e){var t=Vn(),n=t.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=e;var o=n.dispatch,r=n.pending,i=t.memoizedState;if(r!==null){n.pending=null;var l=r=r.next;do i=e(i,l.action),l=l.next;while(l!==r);co(i,t.memoizedState)||(wn=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,o]}function Lm(){}function Nm(e,t){var n=Nt,o=Vn(),r=t(),i=!co(o.memoizedState,r);if(i&&(o.memoizedState=r,wn=!0),o=o.queue,d_($m.bind(null,n,o,e),[e]),o.getSnapshot!==t||i||Ht!==null&&Ht.memoizedState.tag&1){if(n.flags|=2048,Zl(9,Rm.bind(null,n,o,r,t),void 0,null),Ut===null)throw Error(Q(349));(Vr&30)!==0||Im(n,t,r)}return r}function Im(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Nt.updateQueue,t===null?(t={lastEffect:null,stores:null},Nt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Rm(e,t,n,o){t.value=n,t.getSnapshot=o,Tm(t)&&Pm(e)}function $m(e,t,n){return n(function(){Tm(t)&&Pm(e)})}function Tm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!co(e,n)}catch{return!0}}function Pm(e){var t=Uo(e,1);t!==null&&ao(t,e,1,-1)}function np(e){var t=bo();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jl,lastRenderedState:e},t.queue=e,e=e.dispatch=c5.bind(null,Nt,e),[t.memoizedState,e]}function Zl(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=Nt.updateQueue,t===null?(t={lastEffect:null,stores:null},Nt.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function Dm(){return Vn().memoizedState}function ga(e,t,n,o){var r=bo();Nt.flags|=e,r.memoizedState=Zl(1|t,n,void 0,o===void 0?null:o)}function Ja(e,t,n,o){var r=Vn();o=o===void 0?null:o;var i=void 0;if(Wt!==null){var l=Wt.memoizedState;if(i=l.destroy,o!==null&&s_(o,l.deps)){r.memoizedState=Zl(t,n,i,o);return}}Nt.flags|=e,r.memoizedState=Zl(1|t,n,i,o)}function op(e,t){return ga(8390656,8,e,t)}function d_(e,t){return Ja(2048,8,e,t)}function Bm(e,t){return Ja(4,2,e,t)}function zm(e,t){return Ja(4,4,e,t)}function Om(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Am(e,t,n){return n=n!=null?n.concat([e]):null,Ja(4,4,Om.bind(null,t,e),n)}function u_(){}function Fm(e,t){var n=Vn();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&s_(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function Wm(e,t){var n=Vn();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&s_(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function jm(e,t,n){return(Vr&21)===0?(e.baseState&&(e.baseState=!1,wn=!0),e.memoizedState=n):(co(n,t)||(n=Vp(),Nt.lanes|=n,Xr|=n,e.baseState=!0),t)}function s5(e,t){var n=ut;ut=n!==0&&4>n?n:4,e(!0);var o=Dd.transition;Dd.transition={};try{e(!1),t()}finally{ut=n,Dd.transition=o}}function Hm(){return Vn().memoizedState}function a5(e,t,n){var o=_r(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},Um(e))Ym(t,n);else if(n=Sm(e,t,n,o),n!==null){var r=hn();ao(n,e,o,r),Qm(n,t,o)}}function c5(e,t,n){var o=_r(e),r={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(Um(e))Ym(t,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(r.hasEagerState=!0,r.eagerState=s,co(s,l)){var a=t.interleaved;a===null?(r.next=r,n_(t)):(r.next=a.next,a.next=r),t.interleaved=r;return}}catch{}n=Sm(e,t,r,o),n!==null&&(r=hn(),ao(n,e,o,r),Qm(n,t,o))}}function Um(e){var t=e.alternate;return e===Nt||t!==null&&t===Nt}function Ym(e,t){Pl=Aa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Qm(e,t,n){if((n&4194240)!==0){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,ju(e,n)}}var Fa={readContext:Qn,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useInsertionEffect:ln,useLayoutEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useMutableSource:ln,useSyncExternalStore:ln,useId:ln,unstable_isNewReconciler:!1},d5={readContext:Qn,useCallback:function(e,t){return bo().memoizedState=[e,t===void 0?null:t],e},useContext:Qn,useEffect:op,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ga(4194308,4,Om.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ga(4194308,4,e,t)},useInsertionEffect:function(e,t){return ga(4,2,e,t)},useMemo:function(e,t){var n=bo();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=bo();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=a5.bind(null,Nt,e),[o.memoizedState,e]},useRef:function(e){var t=bo();return e={current:e},t.memoizedState=e},useState:np,useDebugValue:u_,useDeferredValue:function(e){return bo().memoizedState=e},useTransition:function(){var e=np(!1),t=e[0];return e=s5.bind(null,e[1]),bo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=Nt,r=bo();if(Et){if(n===void 0)throw Error(Q(407));n=n()}else{if(n=t(),Ut===null)throw Error(Q(349));(Vr&30)!==0||Im(o,t,n)}r.memoizedState=n;var i={value:n,getSnapshot:t};return r.queue=i,op($m.bind(null,o,i,e),[e]),o.flags|=2048,Zl(9,Rm.bind(null,o,i,n,t),void 0,null),n},useId:function(){var e=bo(),t=Ut.identifierPrefix;if(Et){var n=Fo,o=Ao;n=(o&~(1<<32-so(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=Kl++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=l5++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},u5={readContext:Qn,useCallback:Fm,useContext:Qn,useEffect:d_,useImperativeHandle:Am,useInsertionEffect:Bm,useLayoutEffect:zm,useMemo:Wm,useReducer:Bd,useRef:Dm,useState:function(){return Bd(Jl)},useDebugValue:u_,useDeferredValue:function(e){var t=Vn();return jm(t,Wt.memoizedState,e)},useTransition:function(){var e=Bd(Jl)[0],t=Vn().memoizedState;return[e,t]},useMutableSource:Lm,useSyncExternalStore:Nm,useId:Hm,unstable_isNewReconciler:!1},_5={readContext:Qn,useCallback:Fm,useContext:Qn,useEffect:d_,useImperativeHandle:Am,useInsertionEffect:Bm,useLayoutEffect:zm,useMemo:Wm,useReducer:zd,useRef:Dm,useState:function(){return zd(Jl)},useDebugValue:u_,useDeferredValue:function(e){var t=Vn();return Wt===null?t.memoizedState=e:jm(t,Wt.memoizedState,e)},useTransition:function(){var e=zd(Jl)[0],t=Vn().memoizedState;return[e,t]},useMutableSource:Lm,useSyncExternalStore:Nm,useId:Hm,unstable_isNewReconciler:!1};function ro(e,t){if(e&&e.defaultProps){t=It({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function yu(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:It({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Za={isMounted:function(e){return(e=e._reactInternals)?Kr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=hn(),r=_r(e),i=Wo(o,r);i.payload=t,n!=null&&(i.callback=n),t=dr(e,i,r),t!==null&&(ao(t,e,r,o),pa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=hn(),r=_r(e),i=Wo(o,r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=dr(e,i,r),t!==null&&(ao(t,e,r,o),pa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=hn(),o=_r(e),r=Wo(n,o);r.tag=2,t!=null&&(r.callback=t),t=dr(e,r,o),t!==null&&(ao(t,e,o,n),pa(t,e,o))}};function rp(e,t,n,o,r,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,i,l):t.prototype&&t.prototype.isPureReactComponent?!Yl(n,o)||!Yl(r,i):!0}function Vm(e,t,n){var o=!1,r=pr,i=t.contextType;return typeof i=="object"&&i!==null?i=Qn(i):(r=kn(t)?Yr:cn.current,o=t.contextTypes,i=(o=o!=null)?Di(e,r):pr),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Za,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),t}function ip(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&Za.enqueueReplaceState(t,t.state,null)}function xu(e,t,n,o){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs={},o_(e);var i=t.contextType;typeof i=="object"&&i!==null?r.context=Qn(i):(i=kn(t)?Yr:cn.current,r.context=Di(e,i)),r.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(yu(e,t,i,n),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&Za.enqueueReplaceState(r,r.state,null),za(e,n,r,o),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function Ai(e,t){try{var n="",o=t;do n+=j1(o),o=o.return;while(o);var r=n}catch(i){r=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:r,digest:null}}function Od(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function vu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var f5=typeof WeakMap=="function"?WeakMap:Map;function Xm(e,t,n){n=Wo(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){ja||(ja=!0,Iu=o),vu(e,t)},n}function Gm(e,t,n){n=Wo(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var r=t.value;n.payload=function(){return o(r)},n.callback=function(){vu(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){vu(e,t),typeof o!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function lp(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new f5;var r=new Set;o.set(t,r)}else r=o.get(t),r===void 0&&(r=new Set,o.set(t,r));r.has(n)||(r.add(n),e=E5.bind(null,e,t,n),t.then(e,e))}function sp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ap(e,t,n,o,r){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Wo(-1,1),t.tag=2,dr(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=r,e)}var h5=Qo.ReactCurrentOwner,wn=!1;function fn(e,t,n,o){t.child=e===null?Cm(t,null,n,o):zi(t,e.child,n,o)}function cp(e,t,n,o,r){n=n.render;var i=t.ref;return $i(t,r),o=a_(e,t,n,o,i,r),n=c_(),e!==null&&!wn?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Yo(e,t,r)):(Et&&n&&qu(t),t.flags|=1,fn(e,t,o,r),t.child)}function dp(e,t,n,o,r){if(e===null){var i=n.type;return typeof i=="function"&&!x_(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,qm(e,t,i,o,r)):(e=wa(n.type,null,o,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&r)===0){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Yl,n(l,o)&&e.ref===t.ref)return Yo(e,t,r)}return t.flags|=1,e=fr(i,o),e.ref=t.ref,e.return=t,t.child=e}function qm(e,t,n,o,r){if(e!==null){var i=e.memoizedProps;if(Yl(i,o)&&e.ref===t.ref)if(wn=!1,t.pendingProps=o=i,(e.lanes&r)!==0)(e.flags&131072)!==0&&(wn=!0);else return t.lanes=e.lanes,Yo(e,t,r)}return wu(e,t,n,o,r)}function Km(e,t,n){var o=t.pendingProps,r=o.children,i=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},wt(Ei,En),En|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,wt(Ei,En),En|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=i!==null?i.baseLanes:n,wt(Ei,En),En|=o}else i!==null?(o=i.baseLanes|n,t.memoizedState=null):o=n,wt(Ei,En),En|=o;return fn(e,t,r,n),t.child}function Jm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function wu(e,t,n,o,r){var i=kn(n)?Yr:cn.current;return i=Di(t,i),$i(t,r),n=a_(e,t,n,o,i,r),o=c_(),e!==null&&!wn?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Yo(e,t,r)):(Et&&o&&qu(t),t.flags|=1,fn(e,t,n,r),t.child)}function up(e,t,n,o,r){if(kn(n)){var i=!0;$a(t)}else i=!1;if($i(t,r),t.stateNode===null)ya(e,t),Vm(t,n,o),xu(t,n,o,r),o=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Qn(u):(u=kn(n)?Yr:cn.current,u=Di(t,u));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==o||a!==u)&&ip(t,l,o,u),tr=!1;var x=t.memoizedState;l.state=x,za(t,o,l,r),a=t.memoizedState,s!==o||x!==a||bn.current||tr?(typeof h=="function"&&(yu(t,n,h,o),a=t.memoizedState),(s=tr||rp(t,n,s,o,x,a,u))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=a),l.props=o,l.state=a,l.context=u,o=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{l=t.stateNode,Mm(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:ro(t.type,s),l.props=u,f=t.pendingProps,x=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=Qn(a):(a=kn(n)?Yr:cn.current,a=Di(t,a));var S=n.getDerivedStateFromProps;(h=typeof S=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==f||x!==a)&&ip(t,l,o,a),tr=!1,x=t.memoizedState,l.state=x,za(t,o,l,r);var b=t.memoizedState;s!==f||x!==b||bn.current||tr?(typeof S=="function"&&(yu(t,n,S,o),b=t.memoizedState),(u=tr||rp(t,n,u,o,x,b,a)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(o,b,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(o,b,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=b),l.props=o,l.state=b,l.context=a,o=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),o=!1)}return bu(e,t,n,o,i,r)}function bu(e,t,n,o,r,i){Jm(e,t);var l=(t.flags&128)!==0;if(!o&&!l)return r&&qh(t,n,!1),Yo(e,t,i);o=t.stateNode,h5.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&l?(t.child=zi(t,e.child,null,i),t.child=zi(t,null,s,i)):fn(e,t,s,i),t.memoizedState=o.state,r&&qh(t,n,!0),t.child}function Zm(e){var t=e.stateNode;t.pendingContext?Gh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Gh(e,t.context,!1),r_(e,t.containerInfo)}function _p(e,t,n,o,r){return Bi(),Ju(r),t.flags|=256,fn(e,t,n,o),t.child}var ku={dehydrated:null,treeContext:null,retryLane:0};function Cu(e){return{baseLanes:e,cachePool:null,transitions:null}}function e0(e,t,n){var o=t.pendingProps,r=Lt.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(r&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),wt(Lt,r&1),e===null)return mu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=o.children,e=o.fallback,i?(o=t.mode,i=t.child,l={mode:"hidden",children:l},(o&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=l):i=nc(l,o,0,null),e=Ur(e,o,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Cu(n),t.memoizedState=ku,e):__(t,l));if(r=e.memoizedState,r!==null&&(s=r.dehydrated,s!==null))return p5(e,t,l,o,s,r,n);if(i){i=o.fallback,l=t.mode,r=e.child,s=r.sibling;var a={mode:"hidden",children:o.children};return(l&1)===0&&t.child!==r?(o=t.child,o.childLanes=0,o.pendingProps=a,t.deletions=null):(o=fr(r,a),o.subtreeFlags=r.subtreeFlags&14680064),s!==null?i=fr(s,i):(i=Ur(i,l,n,null),i.flags|=2),i.return=t,o.return=t,o.sibling=i,t.child=o,o=i,i=t.child,l=e.child.memoizedState,l=l===null?Cu(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=ku,o}return i=e.child,e=i.sibling,o=fr(i,{mode:"visible",children:o.children}),(t.mode&1)===0&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function __(e,t){return t=nc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ca(e,t,n,o){return o!==null&&Ju(o),zi(t,e.child,null,n),e=__(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function p5(e,t,n,o,r,i,l){if(n)return t.flags&256?(t.flags&=-257,o=Od(Error(Q(422))),ca(e,t,l,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=o.fallback,r=t.mode,o=nc({mode:"visible",children:o.children},r,0,null),i=Ur(i,r,l,null),i.flags|=2,o.return=t,i.return=t,o.sibling=i,t.child=o,(t.mode&1)!==0&&zi(t,e.child,null,l),t.child.memoizedState=Cu(l),t.memoizedState=ku,i);if((t.mode&1)===0)return ca(e,t,l,null);if(r.data==="$!"){if(o=r.nextSibling&&r.nextSibling.dataset,o)var s=o.dgst;return o=s,i=Error(Q(419)),o=Od(i,o,void 0),ca(e,t,l,o)}if(s=(l&e.childLanes)!==0,wn||s){if(o=Ut,o!==null){switch(l&-l){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(o.suspendedLanes|l))!==0?0:r,r!==0&&r!==i.retryLane&&(i.retryLane=r,Uo(e,r),ao(o,e,r,-1))}return y_(),o=Od(Error(Q(421))),ca(e,t,l,o)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=L5.bind(null,e),r._reactRetry=t,null):(e=i.treeContext,Ln=cr(r.nextSibling),Nn=t,Et=!0,lo=null,e!==null&&(jn[Hn++]=Ao,jn[Hn++]=Fo,jn[Hn++]=Qr,Ao=e.id,Fo=e.overflow,Qr=t),t=__(t,o.children),t.flags|=4096,t)}function fp(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),gu(e.return,t,n)}function Ad(e,t,n,o,r){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:r}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=o,i.tail=n,i.tailMode=r)}function t0(e,t,n){var o=t.pendingProps,r=o.revealOrder,i=o.tail;if(fn(e,t,o.children,n),o=Lt.current,(o&2)!==0)o=o&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fp(e,n,t);else if(e.tag===19)fp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(wt(Lt,o),(t.mode&1)===0)t.memoizedState=null;else switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Oa(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Ad(t,!1,r,n,i);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Oa(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Ad(t,!0,n,null,i);break;case"together":Ad(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ya(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Yo(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Xr|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(Q(153));if(t.child!==null){for(e=t.child,n=fr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function m5(e,t,n){switch(t.tag){case 3:Zm(t),Bi();break;case 5:Em(t);break;case 1:kn(t.type)&&$a(t);break;case 4:r_(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,r=t.memoizedProps.value;wt(Da,o._currentValue),o._currentValue=r;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(wt(Lt,Lt.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?e0(e,t,n):(wt(Lt,Lt.current&1),e=Yo(e,t,n),e!==null?e.sibling:null);wt(Lt,Lt.current&1);break;case 19:if(o=(n&t.childLanes)!==0,(e.flags&128)!==0){if(o)return t0(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),wt(Lt,Lt.current),o)break;return null;case 22:case 23:return t.lanes=0,Km(e,t,n)}return Yo(e,t,n)}var n0,Su,o0,r0;n0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Su=function(){};o0=function(e,t,n,o){var r=e.memoizedProps;if(r!==o){e=t.stateNode,jr(So.current);var i=null;switch(n){case"input":r=Vd(e,r),o=Vd(e,o),i=[];break;case"select":r=It({},r,{value:void 0}),o=It({},o,{value:void 0}),i=[];break;case"textarea":r=qd(e,r),o=qd(e,o),i=[];break;default:typeof r.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Ia)}Jd(n,o);var l;n=null;for(u in r)if(!o.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var s=r[u];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ol.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in o){var a=o[u];if(s=r?.[u],o.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ol.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&St("scroll",e),i||s===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};r0=function(e,t,n,o){n!==o&&(t.flags|=4)};function bl(e,t){if(!Et)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function sn(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags&14680064,o|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags,o|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function g5(e,t,n){var o=t.pendingProps;switch(Ku(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return sn(t),null;case 1:return kn(t.type)&&Ra(),sn(t),null;case 3:return o=t.stateNode,Oi(),Mt(bn),Mt(cn),l_(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(sa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,lo!==null&&(Tu(lo),lo=null))),Su(e,t),sn(t),null;case 5:i_(t);var r=jr(ql.current);if(n=t.type,e!==null&&t.stateNode!=null)o0(e,t,n,o,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(Q(166));return sn(t),null}if(e=jr(So.current),sa(t)){o=t.stateNode,n=t.type;var i=t.memoizedProps;switch(o[ko]=t,o[Xl]=i,e=(t.mode&1)!==0,n){case"dialog":St("cancel",o),St("close",o);break;case"iframe":case"object":case"embed":St("load",o);break;case"video":case"audio":for(r=0;r<Ll.length;r++)St(Ll[r],o);break;case"source":St("error",o);break;case"img":case"image":case"link":St("error",o),St("load",o);break;case"details":St("toggle",o);break;case"input":wh(o,i),St("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!i.multiple},St("invalid",o);break;case"textarea":kh(o,i),St("invalid",o)}Jd(n,i),r=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?o.textContent!==s&&(i.suppressHydrationWarning!==!0&&la(o.textContent,s,e),r=["children",s]):typeof s=="number"&&o.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&la(o.textContent,s,e),r=["children",""+s]):Ol.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&St("scroll",o)}switch(n){case"input":Xs(o),bh(o,i,!0);break;case"textarea":Xs(o),Ch(o);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(o.onclick=Ia)}o=r,t.updateQueue=o,o!==null&&(t.flags|=4)}else{l=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=$p(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=l.createElement(n,{is:o.is}):(e=l.createElement(n),n==="select"&&(l=e,o.multiple?l.multiple=!0:o.size&&(l.size=o.size))):e=l.createElementNS(e,n),e[ko]=t,e[Xl]=o,n0(e,t,!1,!1),t.stateNode=e;e:{switch(l=Zd(n,o),n){case"dialog":St("cancel",e),St("close",e),r=o;break;case"iframe":case"object":case"embed":St("load",e),r=o;break;case"video":case"audio":for(r=0;r<Ll.length;r++)St(Ll[r],e);r=o;break;case"source":St("error",e),r=o;break;case"img":case"image":case"link":St("error",e),St("load",e),r=o;break;case"details":St("toggle",e),r=o;break;case"input":wh(e,o),r=Vd(e,o),St("invalid",e);break;case"option":r=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},r=It({},o,{value:void 0}),St("invalid",e);break;case"textarea":kh(e,o),r=qd(e,o),St("invalid",e);break;default:r=o}Jd(n,r),s=r;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?Dp(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Tp(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Al(e,a):typeof a=="number"&&Al(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ol.hasOwnProperty(i)?a!=null&&i==="onScroll"&&St("scroll",e):a!=null&&Bu(e,i,a,l))}switch(n){case"input":Xs(e),bh(e,o,!1);break;case"textarea":Xs(e),Ch(e);break;case"option":o.value!=null&&e.setAttribute("value",""+hr(o.value));break;case"select":e.multiple=!!o.multiple,i=o.value,i!=null?Li(e,!!o.multiple,i,!1):o.defaultValue!=null&&Li(e,!!o.multiple,o.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Ia)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return sn(t),null;case 6:if(e&&t.stateNode!=null)r0(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(Q(166));if(n=jr(ql.current),jr(So.current),sa(t)){if(o=t.stateNode,n=t.memoizedProps,o[ko]=t,(i=o.nodeValue!==n)&&(e=Nn,e!==null))switch(e.tag){case 3:la(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&la(o.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[ko]=t,t.stateNode=o}return sn(t),null;case 13:if(Mt(Lt),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Et&&Ln!==null&&(t.mode&1)!==0&&(t.flags&128)===0)bm(),Bi(),t.flags|=98560,i=!1;else if(i=sa(t),o!==null&&o.dehydrated!==null){if(e===null){if(!i)throw Error(Q(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(Q(317));i[ko]=t}else Bi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;sn(t),i=!1}else lo!==null&&(Tu(lo),lo=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Lt.current&1)!==0?jt===0&&(jt=3):y_())),t.updateQueue!==null&&(t.flags|=4),sn(t),null);case 4:return Oi(),Su(e,t),e===null&&Ql(t.stateNode.containerInfo),sn(t),null;case 10:return t_(t.type._context),sn(t),null;case 17:return kn(t.type)&&Ra(),sn(t),null;case 19:if(Mt(Lt),i=t.memoizedState,i===null)return sn(t),null;if(o=(t.flags&128)!==0,l=i.rendering,l===null)if(o)bl(i,!1);else{if(jt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=Oa(e),l!==null){for(t.flags|=128,bl(i,!1),o=l.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)i=n,e=o,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return wt(Lt,Lt.current&1|2),t.child}e=e.sibling}i.tail!==null&&Dt()>Fi&&(t.flags|=128,o=!0,bl(i,!1),t.lanes=4194304)}else{if(!o)if(e=Oa(l),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),bl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Et)return sn(t),null}else 2*Dt()-i.renderingStartTime>Fi&&n!==1073741824&&(t.flags|=128,o=!0,bl(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Dt(),t.sibling=null,n=Lt.current,wt(Lt,o?n&1|2:n&1),t):(sn(t),null);case 22:case 23:return g_(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&(t.mode&1)!==0?(En&1073741824)!==0&&(sn(t),t.subtreeFlags&6&&(t.flags|=8192)):sn(t),null;case 24:return null;case 25:return null}throw Error(Q(156,t.tag))}function y5(e,t){switch(Ku(t),t.tag){case 1:return kn(t.type)&&Ra(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Oi(),Mt(bn),Mt(cn),l_(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return i_(t),null;case 13:if(Mt(Lt),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Q(340));Bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Mt(Lt),null;case 4:return Oi(),null;case 10:return t_(t.type._context),null;case 22:case 23:return g_(),null;case 24:return null;default:return null}}var da=!1,an=!1,x5=typeof WeakSet=="function"?WeakSet:Set,ie=null;function Mi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){Tt(e,t,o)}else n.current=null}function Mu(e,t,n){try{n()}catch(o){Tt(e,t,o)}}var hp=!1;function v5(e,t){if(cu=Ea,e=cm(),Gu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var r=o.anchorOffset,i=o.focusNode;o=o.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,u=0,h=0,f=e,x=null;t:for(;;){for(var S;f!==n||r!==0&&f.nodeType!==3||(s=l+r),f!==i||o!==0&&f.nodeType!==3||(a=l+o),f.nodeType===3&&(l+=f.nodeValue.length),(S=f.firstChild)!==null;)x=f,f=S;for(;;){if(f===e)break t;if(x===n&&++u===r&&(s=l),x===i&&++h===o&&(a=l),(S=f.nextSibling)!==null)break;f=x,x=f.parentNode}f=S}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(du={focusedElem:e,selectionRange:n},Ea=!1,ie=t;ie!==null;)if(t=ie,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ie=e;else for(;ie!==null;){t=ie;try{var b=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var N=b.memoizedProps,E=b.memoizedState,y=t.stateNode,v=y.getSnapshotBeforeUpdate(t.elementType===t.type?N:ro(t.type,N),E);y.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Q(163))}}catch(C){Tt(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,ie=e;break}ie=t.return}return b=hp,hp=!1,b}function Dl(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var r=o=o.next;do{if((r.tag&e)===e){var i=r.destroy;r.destroy=void 0,i!==void 0&&Mu(t,n,i)}r=r.next}while(r!==o)}}function ec(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function Eu(e){var t=e.ref;if(t!==null){var n=e.stateNode;e.tag,e=n,typeof t=="function"?t(e):t.current=e}}function i0(e){var t=e.alternate;t!==null&&(e.alternate=null,i0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ko],delete t[Xl],delete t[fu],delete t[n5],delete t[o5])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function l0(e){return e.tag===5||e.tag===3||e.tag===4}function pp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||l0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lu(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ia));else if(o!==4&&(e=e.child,e!==null))for(Lu(e,t,n),e=e.sibling;e!==null;)Lu(e,t,n),e=e.sibling}function Nu(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Nu(e,t,n),e=e.sibling;e!==null;)Nu(e,t,n),e=e.sibling}var Gt=null,io=!1;function Zo(e,t,n){for(n=n.child;n!==null;)s0(e,t,n),n=n.sibling}function s0(e,t,n){if(Co&&typeof Co.onCommitFiberUnmount=="function")try{Co.onCommitFiberUnmount(Qa,n)}catch{}switch(n.tag){case 5:an||Mi(n,t);case 6:var o=Gt,r=io;Gt=null,Zo(e,t,n),Gt=o,io=r,Gt!==null&&(io?(e=Gt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Gt.removeChild(n.stateNode));break;case 18:Gt!==null&&(io?(e=Gt,n=n.stateNode,e.nodeType===8?$d(e.parentNode,n):e.nodeType===1&&$d(e,n),Hl(e)):$d(Gt,n.stateNode));break;case 4:o=Gt,r=io,Gt=n.stateNode.containerInfo,io=!0,Zo(e,t,n),Gt=o,io=r;break;case 0:case 11:case 14:case 15:if(!an&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){r=o=o.next;do{var i=r,l=i.destroy;i=i.tag,l!==void 0&&((i&2)!==0||(i&4)!==0)&&Mu(n,t,l),r=r.next}while(r!==o)}Zo(e,t,n);break;case 1:if(!an&&(Mi(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(s){Tt(n,t,s)}Zo(e,t,n);break;case 21:Zo(e,t,n);break;case 22:n.mode&1?(an=(o=an)||n.memoizedState!==null,Zo(e,t,n),an=o):Zo(e,t,n);break;default:Zo(e,t,n)}}function mp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new x5),t.forEach(function(o){var r=N5.bind(null,e,o);n.has(o)||(n.add(o),o.then(r,r))})}}function oo(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var r=n[o];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:Gt=s.stateNode,io=!1;break e;case 3:Gt=s.stateNode.containerInfo,io=!0;break e;case 4:Gt=s.stateNode.containerInfo,io=!0;break e}s=s.return}if(Gt===null)throw Error(Q(160));s0(i,l,r),Gt=null,io=!1;var a=r.alternate;a!==null&&(a.return=null),r.return=null}catch(u){Tt(r,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)a0(t,e),t=t.sibling}function a0(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(oo(t,e),wo(e),o&4){try{Dl(3,e,e.return),ec(3,e)}catch(N){Tt(e,e.return,N)}try{Dl(5,e,e.return)}catch(N){Tt(e,e.return,N)}}break;case 1:oo(t,e),wo(e),o&512&&n!==null&&Mi(n,n.return);break;case 5:if(oo(t,e),wo(e),o&512&&n!==null&&Mi(n,n.return),e.flags&32){var r=e.stateNode;try{Al(r,"")}catch(N){Tt(e,e.return,N)}}if(o&4&&(r=e.stateNode,r!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Ip(r,i),Zd(s,l);var u=Zd(s,i);for(l=0;l<a.length;l+=2){var h=a[l],f=a[l+1];h==="style"?Dp(r,f):h==="dangerouslySetInnerHTML"?Tp(r,f):h==="children"?Al(r,f):Bu(r,h,f,u)}switch(s){case"input":Xd(r,i);break;case"textarea":Rp(r,i);break;case"select":var x=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!i.multiple;var S=i.value;S!=null?Li(r,!!i.multiple,S,!1):x!==!!i.multiple&&(i.defaultValue!=null?Li(r,!!i.multiple,i.defaultValue,!0):Li(r,!!i.multiple,i.multiple?[]:"",!1))}r[Xl]=i}catch(N){Tt(e,e.return,N)}}break;case 6:if(oo(t,e),wo(e),o&4){if(e.stateNode===null)throw Error(Q(162));r=e.stateNode,i=e.memoizedProps;try{r.nodeValue=i}catch(N){Tt(e,e.return,N)}}break;case 3:if(oo(t,e),wo(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{Hl(t.containerInfo)}catch(N){Tt(e,e.return,N)}break;case 4:oo(t,e),wo(e);break;case 13:oo(t,e),wo(e),r=e.child,r.flags&8192&&(i=r.memoizedState!==null,r.stateNode.isHidden=i,!i||r.alternate!==null&&r.alternate.memoizedState!==null||(p_=Dt())),o&4&&mp(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(an=(u=an)||h,oo(t,e),an=u):oo(t,e),wo(e),o&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&(e.mode&1)!==0)for(ie=e,h=e.child;h!==null;){for(f=ie=h;ie!==null;){switch(x=ie,S=x.child,x.tag){case 0:case 11:case 14:case 15:Dl(4,x,x.return);break;case 1:Mi(x,x.return);var b=x.stateNode;if(typeof b.componentWillUnmount=="function"){o=x,n=x.return;try{t=o,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(N){Tt(o,n,N)}}break;case 5:Mi(x,x.return);break;case 22:if(x.memoizedState!==null){yp(f);continue}}S!==null?(S.return=x,ie=S):yp(f)}h=h.sibling}e:for(h=null,f=e;;){if(f.tag===5){if(h===null){h=f;try{r=f.stateNode,u?(i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=f.stateNode,a=f.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Pp("display",l))}catch(N){Tt(e,e.return,N)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(N){Tt(e,e.return,N)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:oo(t,e),wo(e),o&4&&mp(e);break;case 21:break;default:oo(t,e),wo(e)}}function wo(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(l0(n)){var o=n;break e}n=n.return}throw Error(Q(160))}switch(o.tag){case 5:var r=o.stateNode;o.flags&32&&(Al(r,""),o.flags&=-33);var i=pp(e);Nu(e,i,r);break;case 3:case 4:var l=o.stateNode.containerInfo,s=pp(e);Lu(e,s,l);break;default:throw Error(Q(161))}}catch(a){Tt(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function w5(e,t,n){ie=e,c0(e,t,n)}function c0(e,t,n){for(var o=(e.mode&1)!==0;ie!==null;){var r=ie,i=r.child;if(r.tag===22&&o){var l=r.memoizedState!==null||da;if(!l){var s=r.alternate,a=s!==null&&s.memoizedState!==null||an;s=da;var u=an;if(da=l,(an=a)&&!u)for(ie=r;ie!==null;)l=ie,a=l.child,l.tag===22&&l.memoizedState!==null?xp(r):a!==null?(a.return=l,ie=a):xp(r);for(;i!==null;)ie=i,c0(i,t,n),i=i.sibling;ie=r,da=s,an=u}gp(e,t,n)}else(r.subtreeFlags&8772)!==0&&i!==null?(i.return=r,ie=i):gp(e,t,n)}}function gp(e){for(;ie!==null;){var t=ie;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:an||ec(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!an)if(n===null)o.componentDidMount();else{var r=t.elementType===t.type?n.memoizedProps:ro(t.type,n.memoizedProps);o.componentDidUpdate(r,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&tp(t,i,o);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}tp(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Hl(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Q(163))}an||t.flags&512&&Eu(t)}catch(x){Tt(t,t.return,x)}}if(t===e){ie=null;break}if(n=t.sibling,n!==null){n.return=t.return,ie=n;break}ie=t.return}}function yp(e){for(;ie!==null;){var t=ie;if(t===e){ie=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ie=n;break}ie=t.return}}function xp(e){for(;ie!==null;){var t=ie;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ec(4,t)}catch(a){Tt(t,n,a)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var r=t.return;try{o.componentDidMount()}catch(a){Tt(t,r,a)}}var i=t.return;try{Eu(t)}catch(a){Tt(t,i,a)}break;case 5:var l=t.return;try{Eu(t)}catch(a){Tt(t,l,a)}}}catch(a){Tt(t,t.return,a)}if(t===e){ie=null;break}var s=t.sibling;if(s!==null){s.return=t.return,ie=s;break}ie=t.return}}var b5=Math.ceil,Wa=Qo.ReactCurrentDispatcher,f_=Qo.ReactCurrentOwner,Yn=Qo.ReactCurrentBatchConfig,Ge=0,Ut=null,zt=null,qt=0,En=0,Ei=gr(0),jt=0,es=null,Xr=0,tc=0,h_=0,Bl=null,vn=null,p_=0,Fi=1/0,zo=null,ja=!1,Iu=null,ur=null,ua=!1,ir=null,Ha=0,zl=0,Ru=null,xa=-1,va=0;function hn(){return(Ge&6)!==0?Dt():xa!==-1?xa:xa=Dt()}function _r(e){return(e.mode&1)===0?1:(Ge&2)!==0&&qt!==0?qt&-qt:i5.transition!==null?(va===0&&(va=Vp()),va):(e=ut,e!==0||(e=window.event,e=e===void 0?16:em(e.type)),e)}function ao(e,t,n,o){if(50<zl)throw zl=0,Ru=null,Error(Q(185));ts(e,n,o),((Ge&2)===0||e!==Ut)&&(e===Ut&&((Ge&2)===0&&(tc|=n),jt===4&&or(e,qt)),Cn(e,o),n===1&&Ge===0&&(t.mode&1)===0&&(Fi=Dt()+500,Ka&&yr()))}function Cn(e,t){var n=e.callbackNode;sy(e,t);var o=Ma(e,e===Ut?qt:0);if(o===0)n!==null&&Eh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&Eh(n),t===1)e.tag===0?r5(vp.bind(null,e)):xm(vp.bind(null,e)),e5(function(){(Ge&6)===0&&yr()}),n=null;else{switch(Xp(o)){case 1:n=Wu;break;case 4:n=Yp;break;case 16:n=Sa;break;case 536870912:n=Qp;break;default:n=Sa}n=g0(n,d0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function d0(e,t){if(xa=-1,va=0,(Ge&6)!==0)throw Error(Q(327));var n=e.callbackNode;if(Ti()&&e.callbackNode!==n)return null;var o=Ma(e,e===Ut?qt:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||t)t=Ua(e,o);else{t=o;var r=Ge;Ge|=2;var i=_0();(Ut!==e||qt!==t)&&(zo=null,Fi=Dt()+500,Hr(e,t));do try{S5();break}catch(s){u0(e,s)}while(!0);e_(),Wa.current=i,Ge=r,zt!==null?t=0:(Ut=null,qt=0,t=jt)}if(t!==0){if(t===2&&(r=ru(e),r!==0&&(o=r,t=$u(e,r))),t===1)throw n=es,Hr(e,0),or(e,o),Cn(e,Dt()),n;if(t===6)or(e,o);else{if(r=e.current.alternate,(o&30)===0&&!k5(r)&&(t=Ua(e,o),t===2&&(i=ru(e),i!==0&&(o=i,t=$u(e,i))),t===1))throw n=es,Hr(e,0),or(e,o),Cn(e,Dt()),n;switch(e.finishedWork=r,e.finishedLanes=o,t){case 0:case 1:throw Error(Q(345));case 2:Ar(e,vn,zo);break;case 3:if(or(e,o),(o&130023424)===o&&(t=p_+500-Dt(),10<t)){if(Ma(e,0)!==0)break;if(r=e.suspendedLanes,(r&o)!==o){hn(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=_u(Ar.bind(null,e,vn,zo),t);break}Ar(e,vn,zo);break;case 4:if(or(e,o),(o&4194240)===o)break;for(t=e.eventTimes,r=-1;0<o;){var l=31-so(o);i=1<<l,l=t[l],l>r&&(r=l),o&=~i}if(o=r,o=Dt()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*b5(o/1960))-o,10<o){e.timeoutHandle=_u(Ar.bind(null,e,vn,zo),o);break}Ar(e,vn,zo);break;case 5:Ar(e,vn,zo);break;default:throw Error(Q(329))}}}return Cn(e,Dt()),e.callbackNode===n?d0.bind(null,e):null}function $u(e,t){var n=Bl;return e.current.memoizedState.isDehydrated&&(Hr(e,t).flags|=256),e=Ua(e,t),e!==2&&(t=vn,vn=n,t!==null&&Tu(t)),e}function Tu(e){vn===null?vn=e:vn.push.apply(vn,e)}function k5(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var r=n[o],i=r.getSnapshot;r=r.value;try{if(!co(i(),r))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function or(e,t){for(t&=~h_,t&=~tc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-so(t),o=1<<n;e[n]=-1,t&=~o}}function vp(e){if((Ge&6)!==0)throw Error(Q(327));Ti();var t=Ma(e,0);if((t&1)===0)return Cn(e,Dt()),null;var n=Ua(e,t);if(e.tag!==0&&n===2){var o=ru(e);o!==0&&(t=o,n=$u(e,o))}if(n===1)throw n=es,Hr(e,0),or(e,t),Cn(e,Dt()),n;if(n===6)throw Error(Q(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ar(e,vn,zo),Cn(e,Dt()),null}function m_(e,t){var n=Ge;Ge|=1;try{return e(t)}finally{Ge=n,Ge===0&&(Fi=Dt()+500,Ka&&yr())}}function Gr(e){ir!==null&&ir.tag===0&&(Ge&6)===0&&Ti();var t=Ge;Ge|=1;var n=Yn.transition,o=ut;try{if(Yn.transition=null,ut=1,e)return e()}finally{ut=o,Yn.transition=n,Ge=t,(Ge&6)===0&&yr()}}function g_(){En=Ei.current,Mt(Ei)}function Hr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Zy(n)),zt!==null)for(n=zt.return;n!==null;){var o=n;switch(Ku(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Ra();break;case 3:Oi(),Mt(bn),Mt(cn),l_();break;case 5:i_(o);break;case 4:Oi();break;case 13:Mt(Lt);break;case 19:Mt(Lt);break;case 10:t_(o.type._context);break;case 22:case 23:g_()}n=n.return}if(Ut=e,zt=e=fr(e.current,null),qt=En=t,jt=0,es=null,h_=tc=Xr=0,vn=Bl=null,Wr!==null){for(t=0;t<Wr.length;t++)if(n=Wr[t],o=n.interleaved,o!==null){n.interleaved=null;var r=o.next,i=n.pending;if(i!==null){var l=i.next;i.next=r,o.next=l}n.pending=o}Wr=null}return e}function u0(e,t){do{var n=zt;try{if(e_(),ma.current=Fa,Aa){for(var o=Nt.memoizedState;o!==null;){var r=o.queue;r!==null&&(r.pending=null),o=o.next}Aa=!1}if(Vr=0,Ht=Wt=Nt=null,Pl=!1,Kl=0,f_.current=null,n===null||n.return===null){jt=1,es=t,zt=null;break}e:{var i=e,l=n.return,s=n,a=t;if(t=qt,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,h=s,f=h.tag;if((h.mode&1)===0&&(f===0||f===11||f===15)){var x=h.alternate;x?(h.updateQueue=x.updateQueue,h.memoizedState=x.memoizedState,h.lanes=x.lanes):(h.updateQueue=null,h.memoizedState=null)}var S=sp(l);if(S!==null){S.flags&=-257,ap(S,l,s,i,t),S.mode&1&&lp(i,u,t),t=S,a=u;var b=t.updateQueue;if(b===null){var N=new Set;N.add(a),t.updateQueue=N}else b.add(a);break e}else{if((t&1)===0){lp(i,u,t),y_();break e}a=Error(Q(426))}}else if(Et&&s.mode&1){var E=sp(l);if(E!==null){(E.flags&65536)===0&&(E.flags|=256),ap(E,l,s,i,t),Ju(Ai(a,s));break e}}i=a=Ai(a,s),jt!==4&&(jt=2),Bl===null?Bl=[i]:Bl.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var y=Xm(i,a,t);ep(i,y);break e;case 1:s=a;var v=i.type,p=i.stateNode;if((i.flags&128)===0&&(typeof v.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ur===null||!ur.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var C=Gm(i,s,t);ep(i,C);break e}}i=i.return}while(i!==null)}h0(n)}catch(H){t=H,zt===n&&n!==null&&(zt=n=n.return);continue}break}while(!0)}function _0(){var e=Wa.current;return Wa.current=Fa,e===null?Fa:e}function y_(){(jt===0||jt===3||jt===2)&&(jt=4),Ut===null||(Xr&268435455)===0&&(tc&268435455)===0||or(Ut,qt)}function Ua(e,t){var n=Ge;Ge|=2;var o=_0();(Ut!==e||qt!==t)&&(zo=null,Hr(e,t));do try{C5();break}catch(r){u0(e,r)}while(!0);if(e_(),Ge=n,Wa.current=o,zt!==null)throw Error(Q(261));return Ut=null,qt=0,jt}function C5(){for(;zt!==null;)f0(zt)}function S5(){for(;zt!==null&&!J1();)f0(zt)}function f0(e){var t=m0(e.alternate,e,En);e.memoizedProps=e.pendingProps,t===null?h0(e):zt=t,f_.current=null}function h0(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=g5(n,t,En),n!==null){zt=n;return}}else{if(n=y5(n,t),n!==null){n.flags&=32767,zt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{jt=6,zt=null;return}}if(t=t.sibling,t!==null){zt=t;return}zt=t=e}while(t!==null);jt===0&&(jt=5)}function Ar(e,t,n){var o=ut,r=Yn.transition;try{Yn.transition=null,ut=1,M5(e,t,n,o)}finally{Yn.transition=r,ut=o}return null}function M5(e,t,n,o){do Ti();while(ir!==null);if((Ge&6)!==0)throw Error(Q(327));n=e.finishedWork;var r=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(Q(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(ay(e,i),e===Ut&&(zt=Ut=null,qt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ua||(ua=!0,g0(Sa,function(){return Ti(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=Yn.transition,Yn.transition=null;var l=ut;ut=1;var s=Ge;Ge|=4,f_.current=null,v5(e,n),a0(n,e),Xy(du),Ea=!!cu,du=cu=null,e.current=n,w5(n,e,r),Z1(),Ge=s,ut=l,Yn.transition=i}else e.current=n;if(ua&&(ua=!1,ir=e,Ha=r),i=e.pendingLanes,i===0&&(ur=null),ny(n.stateNode,o),Cn(e,Dt()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)r=t[n],o(r.value,{componentStack:r.stack,digest:r.digest});if(ja)throw ja=!1,e=Iu,Iu=null,e;return(Ha&1)!==0&&e.tag!==0&&Ti(),i=e.pendingLanes,(i&1)!==0?e===Ru?zl++:(zl=0,Ru=e):zl=0,yr(),null}function Ti(){if(ir!==null){var e=Xp(Ha),t=Yn.transition,n=ut;try{if(Yn.transition=null,ut=16>e?16:e,ir===null)var o=!1;else{if(e=ir,ir=null,Ha=0,(Ge&6)!==0)throw Error(Q(331));var r=Ge;for(Ge|=4,ie=e.current;ie!==null;){var i=ie,l=i.child;if((ie.flags&16)!==0){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(ie=u;ie!==null;){var h=ie;switch(h.tag){case 0:case 11:case 15:Dl(8,h,i)}var f=h.child;if(f!==null)f.return=h,ie=f;else for(;ie!==null;){h=ie;var x=h.sibling,S=h.return;if(i0(h),h===u){ie=null;break}if(x!==null){x.return=S,ie=x;break}ie=S}}}var b=i.alternate;if(b!==null){var N=b.child;if(N!==null){b.child=null;do{var E=N.sibling;N.sibling=null,N=E}while(N!==null)}}ie=i}}if((i.subtreeFlags&2064)!==0&&l!==null)l.return=i,ie=l;else e:for(;ie!==null;){if(i=ie,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:Dl(9,i,i.return)}var y=i.sibling;if(y!==null){y.return=i.return,ie=y;break e}ie=i.return}}var v=e.current;for(ie=v;ie!==null;){l=ie;var p=l.child;if((l.subtreeFlags&2064)!==0&&p!==null)p.return=l,ie=p;else e:for(l=v;ie!==null;){if(s=ie,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:ec(9,s)}}catch(H){Tt(s,s.return,H)}if(s===l){ie=null;break e}var C=s.sibling;if(C!==null){C.return=s.return,ie=C;break e}ie=s.return}}if(Ge=r,yr(),Co&&typeof Co.onPostCommitFiberRoot=="function")try{Co.onPostCommitFiberRoot(Qa,e)}catch{}o=!0}return o}finally{ut=n,Yn.transition=t}}return!1}function wp(e,t,n){t=Ai(n,t),t=Xm(e,t,1),e=dr(e,t,1),t=hn(),e!==null&&(ts(e,1,t),Cn(e,t))}function Tt(e,t,n){if(e.tag===3)wp(e,e,n);else for(;t!==null;){if(t.tag===3){wp(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ur===null||!ur.has(o))){e=Ai(n,e),e=Gm(t,e,1),t=dr(t,e,1),e=hn(),t!==null&&(ts(t,1,e),Cn(t,e));break}}t=t.return}}function E5(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=hn(),e.pingedLanes|=e.suspendedLanes&n,Ut===e&&(qt&n)===n&&(jt===4||jt===3&&(qt&130023424)===qt&&500>Dt()-p_?Hr(e,0):h_|=n),Cn(e,t)}function p0(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ks,Ks<<=1,(Ks&130023424)===0&&(Ks=4194304)));var n=hn();e=Uo(e,t),e!==null&&(ts(e,t,n),Cn(e,n))}function L5(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),p0(e,n)}function N5(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(Q(314))}o!==null&&o.delete(t),p0(e,n)}var m0;m0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||bn.current)wn=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return wn=!1,m5(e,t,n);wn=(e.flags&131072)!==0}else wn=!1,Et&&(t.flags&1048576)!==0&&vm(t,Pa,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;ya(e,t),e=t.pendingProps;var r=Di(t,cn.current);$i(t,n),r=a_(null,t,o,e,r,n);var i=c_();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,kn(o)?(i=!0,$a(t)):i=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,o_(t),r.updater=Za,t.stateNode=r,r._reactInternals=t,xu(t,o,e,n),t=bu(null,t,o,!0,i,n)):(t.tag=0,Et&&i&&qu(t),fn(null,t,r,n),t=t.child),t;case 16:o=t.elementType;e:{switch(ya(e,t),e=t.pendingProps,r=o._init,o=r(o._payload),t.type=o,r=t.tag=R5(o),e=ro(o,e),r){case 0:t=wu(null,t,o,e,n);break e;case 1:t=up(null,t,o,e,n);break e;case 11:t=cp(null,t,o,e,n);break e;case 14:t=dp(null,t,o,ro(o.type,e),n);break e}throw Error(Q(306,o,""))}return t;case 0:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:ro(o,r),wu(e,t,o,r,n);case 1:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:ro(o,r),up(e,t,o,r,n);case 3:e:{if(Zm(t),e===null)throw Error(Q(387));o=t.pendingProps,i=t.memoizedState,r=i.element,Mm(e,t),za(t,o,null,n);var l=t.memoizedState;if(o=l.element,i.isDehydrated)if(i={element:o,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){r=Ai(Error(Q(423)),t),t=_p(e,t,o,n,r);break e}else if(o!==r){r=Ai(Error(Q(424)),t),t=_p(e,t,o,n,r);break e}else for(Ln=cr(t.stateNode.containerInfo.firstChild),Nn=t,Et=!0,lo=null,n=Cm(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bi(),o===r){t=Yo(e,t,n);break e}fn(e,t,o,n)}t=t.child}return t;case 5:return Em(t),e===null&&mu(t),o=t.type,r=t.pendingProps,i=e!==null?e.memoizedProps:null,l=r.children,uu(o,r)?l=null:i!==null&&uu(o,i)&&(t.flags|=32),Jm(e,t),fn(e,t,l,n),t.child;case 6:return e===null&&mu(t),null;case 13:return e0(e,t,n);case 4:return r_(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=zi(t,null,o,n):fn(e,t,o,n),t.child;case 11:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:ro(o,r),cp(e,t,o,r,n);case 7:return fn(e,t,t.pendingProps,n),t.child;case 8:return fn(e,t,t.pendingProps.children,n),t.child;case 12:return fn(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,r=t.pendingProps,i=t.memoizedProps,l=r.value,wt(Da,o._currentValue),o._currentValue=l,i!==null)if(co(i.value,l)){if(i.children===r.children&&!bn.current){t=Yo(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===o){if(i.tag===1){a=Wo(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?a.next=a:(a.next=h.next,h.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),gu(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(Q(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),gu(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}fn(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,o=t.pendingProps.children,$i(t,n),r=Qn(r),o=o(r),t.flags|=1,fn(e,t,o,n),t.child;case 14:return o=t.type,r=ro(o,t.pendingProps),r=ro(o.type,r),dp(e,t,o,r,n);case 15:return qm(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:ro(o,r),ya(e,t),t.tag=1,kn(o)?(e=!0,$a(t)):e=!1,$i(t,n),Vm(t,o,r),xu(t,o,r,n),bu(null,t,o,!0,e,n);case 19:return t0(e,t,n);case 22:return Km(e,t,n)}throw Error(Q(156,t.tag))};function g0(e,t){return Up(e,t)}function I5(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Un(e,t,n,o){return new I5(e,t,n,o)}function x_(e){return e=e.prototype,!(!e||!e.isReactComponent)}function R5(e){if(typeof e=="function")return x_(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ou)return 11;if(e===Au)return 14}return 2}function fr(e,t){var n=e.alternate;return n===null?(n=Un(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function wa(e,t,n,o,r,i){var l=2;if(o=e,typeof e=="function")x_(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case gi:return Ur(n.children,r,i,t);case zu:l=8,r|=8;break;case Hd:return e=Un(12,n,t,r|2),e.elementType=Hd,e.lanes=i,e;case Ud:return e=Un(13,n,t,r),e.elementType=Ud,e.lanes=i,e;case Yd:return e=Un(19,n,t,r),e.elementType=Yd,e.lanes=i,e;case Ep:return nc(n,r,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Sp:l=10;break e;case Mp:l=9;break e;case Ou:l=11;break e;case Au:l=14;break e;case er:l=16,o=null;break e}throw Error(Q(130,e==null?e:typeof e,""))}return t=Un(l,n,t,r),t.elementType=e,t.type=o,t.lanes=i,t}function Ur(e,t,n,o){return e=Un(7,e,o,t),e.lanes=n,e}function nc(e,t,n,o){return e=Un(22,e,o,t),e.elementType=Ep,e.lanes=n,e.stateNode={isHidden:!1},e}function Fd(e,t,n){return e=Un(6,e,null,t),e.lanes=n,e}function Wd(e,t,n){return t=Un(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function $5(e,t,n,o,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cd(0),this.expirationTimes=Cd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cd(0),this.identifierPrefix=o,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function v_(e,t,n,o,r,i,l,s,a){return e=new $5(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Un(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},o_(i),e}function T5(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mi,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function y0(e){if(!e)return pr;e=e._reactInternals;e:{if(Kr(e)!==e||e.tag!==1)throw Error(Q(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(kn(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(Q(171))}if(e.tag===1){var n=e.type;if(kn(n))return ym(e,n,t)}return t}function x0(e,t,n,o,r,i,l,s,a){return e=v_(n,o,!0,e,r,i,l,s,a),e.context=y0(null),n=e.current,o=hn(),r=_r(n),i=Wo(o,r),i.callback=t??null,dr(n,i,r),e.current.lanes=r,ts(e,r,o),Cn(e,o),e}function oc(e,t,n,o){var r=t.current,i=hn(),l=_r(r);return n=y0(n),t.context===null?t.context=n:t.pendingContext=n,t=Wo(i,l),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=dr(r,t,l),e!==null&&(ao(e,r,l,i),pa(e,r,l)),l}function Ya(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function bp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function w_(e,t){bp(e,t),(e=e.alternate)&&bp(e,t)}function P5(){return null}var v0=typeof reportError=="function"?reportError:function(e){console.error(e)};function b_(e){this._internalRoot=e}rc.prototype.render=b_.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Q(409));oc(e,t,null,null)};rc.prototype.unmount=b_.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Gr(function(){oc(null,e,null,null)}),t[Ho]=null}};function rc(e){this._internalRoot=e}rc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Kp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<nr.length&&t!==0&&t<nr[n].priority;n++);nr.splice(n,0,e),n===0&&Zp(e)}};function k_(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ic(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function kp(){}function D5(e,t,n,o,r){if(r){if(typeof o=="function"){var i=o;o=function(){var u=Ya(l);i.call(u)}}var l=x0(t,o,e,0,null,!1,!1,"",kp);return e._reactRootContainer=l,e[Ho]=l.current,Ql(e.nodeType===8?e.parentNode:e),Gr(),l}for(;r=e.lastChild;)e.removeChild(r);if(typeof o=="function"){var s=o;o=function(){var u=Ya(a);s.call(u)}}var a=v_(e,0,!1,null,null,!1,!1,"",kp);return e._reactRootContainer=a,e[Ho]=a.current,Ql(e.nodeType===8?e.parentNode:e),Gr(function(){oc(t,a,n,o)}),a}function lc(e,t,n,o,r){var i=n._reactRootContainer;if(i){var l=i;if(typeof r=="function"){var s=r;r=function(){var a=Ya(l);s.call(a)}}oc(t,l,e,r)}else l=D5(n,t,e,r,o);return Ya(l)}Gp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=El(t.pendingLanes);n!==0&&(ju(t,n|1),Cn(t,Dt()),(Ge&6)===0&&(Fi=Dt()+500,yr()))}break;case 13:Gr(function(){var o=Uo(e,1);if(o!==null){var r=hn();ao(o,e,1,r)}}),w_(e,1)}};Hu=function(e){if(e.tag===13){var t=Uo(e,134217728);if(t!==null){var n=hn();ao(t,e,134217728,n)}w_(e,134217728)}};qp=function(e){if(e.tag===13){var t=_r(e),n=Uo(e,t);if(n!==null){var o=hn();ao(n,e,t,o)}w_(e,t)}};Kp=function(){return ut};Jp=function(e,t){var n=ut;try{return ut=e,t()}finally{ut=n}};tu=function(e,t,n){switch(t){case"input":if(Xd(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var r=qa(o);if(!r)throw Error(Q(90));Np(o),Xd(o,r)}}}break;case"textarea":Rp(e,n);break;case"select":t=n.value,t!=null&&Li(e,!!n.multiple,t,!1)}};Op=m_;Ap=Gr;var B5={usingClientEntryPoint:!1,Events:[os,wi,qa,Bp,zp,m_]},kl={findFiberByHostInstance:Fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},z5={bundleType:kl.bundleType,version:kl.version,rendererPackageName:kl.rendererPackageName,rendererConfig:kl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qo.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=jp(e),e===null?null:e.stateNode},findFiberByHostInstance:kl.findFiberByHostInstance||P5,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Cl=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Cl.isDisabled&&Cl.supportsFiber))try{Qa=Cl.inject(z5),Co=Cl}catch{}var Cl;$n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B5;$n.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!k_(t))throw Error(Q(200));return T5(e,t,null,n)};$n.createRoot=function(e,t){if(!k_(e))throw Error(Q(299));var n=!1,o="",r=v0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=v_(e,1,!1,null,null,n,!1,o,r),e[Ho]=t.current,Ql(e.nodeType===8?e.parentNode:e),new b_(t)};$n.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Q(188)):(e=Object.keys(e).join(","),Error(Q(268,e)));return e=jp(t),e=e===null?null:e.stateNode,e};$n.flushSync=function(e){return Gr(e)};$n.hydrate=function(e,t,n){if(!ic(t))throw Error(Q(200));return lc(null,e,t,!0,n)};$n.hydrateRoot=function(e,t,n){if(!k_(e))throw Error(Q(405));var o=n!=null&&n.hydratedSources||null,r=!1,i="",l=v0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=x0(t,null,e,1,n??null,r,!1,i,l),e[Ho]=t.current,Ql(e),o)for(e=0;e<o.length;e++)n=o[e],r=n._getVersion,r=r(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,r]:t.mutableSourceEagerHydrationData.push(n,r);return new rc(t)};$n.render=function(e,t,n){if(!ic(t))throw Error(Q(200));return lc(null,e,t,!1,n)};$n.unmountComponentAtNode=function(e){if(!ic(e))throw Error(Q(40));return e._reactRootContainer?(Gr(function(){lc(null,null,e,!1,function(){e._reactRootContainer=null,e[Ho]=null})}),!0):!1};$n.unstable_batchedUpdates=m_;$n.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!ic(n))throw Error(Q(200));if(e==null||e._reactInternals===void 0)throw Error(Q(38));return lc(e,t,n,!1,o)};$n.version="18.3.1-next-f1338f8080-20240426"});var is=xo((Pw,k0)=>{"use strict";function b0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b0)}catch(e){console.error(e)}}b0(),k0.exports=w0()});var S0=xo(C_=>{"use strict";var C0=is();C_.createRoot=C0.createRoot,C_.hydrateRoot=C0.hydrateRoot;var Dw});var E0=xo(sc=>{"use strict";var O5=Ct(),A5=Symbol.for("react.element"),F5=Symbol.for("react.fragment"),W5=Object.prototype.hasOwnProperty,j5=O5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,H5={key:!0,ref:!0,__self:!0,__source:!0};function M0(e,t,n){var o,r={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(o in t)W5.call(t,o)&&!H5.hasOwnProperty(o)&&(r[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)r[o]===void 0&&(r[o]=t[o]);return{$$typeof:A5,type:e,key:i,ref:l,props:r,_owner:j5.current}}sc.Fragment=F5;sc.jsx=M0;sc.jsxs=M0});var Ot=xo((Ow,L0)=>{"use strict";L0.exports=E0()});function U5(){return typeof window>"u"?{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:t=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}:window[z_]??{frozen:!1,installed:!1,origSetTimeout:window.setTimeout.bind(window),origSetInterval:window.setInterval.bind(window),origRAF:window.requestAnimationFrame.bind(window),pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}}function cg(){if(typeof window>"u")return;let e=window;He=e[z_]??(e[z_]=He),!He.installed&&(window.setTimeout=(t,n,...o)=>typeof t=="string"?He.origSetTimeout(t,n):He.origSetTimeout((...r)=>{He.frozen?He.frozenTimeoutQueue.push(()=>t(...r)):t(...r)},n,...o),window.setInterval=(t,n,...o)=>typeof t=="string"?He.origSetInterval(t,n):He.origSetInterval((...r)=>{He.frozen||t(...r)},n,...o),window.requestAnimationFrame=t=>He.origRAF(n=>{He.frozen?He.frozenRAFQueue.push(t):t(n)}),He.installed=!0)}function Y5(e){return e?ag.some(t=>!!e.closest?.(`[${t}]`)):!1}function Q5(){if(typeof document>"u"||(cg(),He.frozen))return;He.frozen=!0,He.frozenTimeoutQueue=[],He.frozenRAFQueue=[];let e=document.getElementById(B_);e||(e=document.createElement("style"),e.id=B_),e.textContent=`
    *${S_},
    *${S_}::before,
    *${S_}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(e),He.pausedAnimations=[];try{document.getAnimations().forEach(t=>{if(t.playState!=="running")return;let n=t.effect?.target;Y5(n)||(t.pause(),He.pausedAnimations.push(t))})}catch{}document.querySelectorAll("video").forEach(t=>{t.paused||(t.dataset.wasPaused="false",t.pause())})}function N0(){if(typeof document>"u"||!He.frozen)return;He.frozen=!1;let e=He.frozenTimeoutQueue;He.frozenTimeoutQueue=[];for(let n of e)He.origSetTimeout(()=>{if(He.frozen){He.frozenTimeoutQueue.push(n);return}try{n()}catch(o){console.warn("[agentation] Error replaying queued timeout:",o)}},0);let t=He.frozenRAFQueue;He.frozenRAFQueue=[];for(let n of t)He.origRAF(o=>{if(He.frozen){He.frozenRAFQueue.push(n);return}n(o)});for(let n of He.pausedAnimations)try{n.play()}catch(o){console.warn("[agentation] Error resuming animation:",o)}He.pausedAnimations=[],document.getElementById(B_)?.remove(),document.querySelectorAll("video").forEach(n=>{n.dataset.wasPaused==="false"&&(n.play().catch(()=>{}),delete n.dataset.wasPaused)})}function I0(){let e=(0,Ec.useMemo)(()=>{let t=0,n=new Set,o=()=>(n.forEach(clearTimeout),n.clear(),++t),r=l=>l===t;return{start:o,isCurrent:r,schedule:(l,s,a)=>{if(!r(l))return;let u=ot(()=>{n.delete(u),r(l)&&s()},a);n.add(u)}}},[]);return(0,Ec.useEffect)(()=>()=>{e.start()},[e]),e}function V5(e,t,n,o){let r=u=>o.get(u.id)??u.id,i=new Map(e.map(u=>[r(u),u])),l=new Map(t.map(u=>[r(u),u])),s=new Set(n.map(u=>u.id)),a=[];for(let u of n){let h=i.get(u.id),f=l.get(u.id);if(h&&!f)continue;let x=f&&h&&f.comment!==h.comment;a.push(x?{...u,comment:f.comment}:u)}for(let[u,h]of l)!i.has(u)&&!s.has(u)&&a.push(h);return a}function xs(e){if(e.tagName!=="IFRAME")return null;try{return e.contentDocument}catch{return null}}function Tn(e,t=document){if(e===t)return null;try{return e.defaultView?.frameElement}catch{return null}}function V_(e){return e.nodeType===11&&"host"in e}function Gi(e){let t=e.getBoundingClientRect(),n=e.offsetWidth?t.width/e.offsetWidth:1,o=e.offsetHeight?t.height/e.offsetHeight:1,r=e.ownerDocument.defaultView?.getComputedStyle(e),i=h=>parseFloat(h||"0")||0,l=i(r?.paddingLeft),s=i(r?.paddingTop),a=e.clientWidth-l-i(r?.paddingRight),u=e.clientHeight-s-i(r?.paddingBottom);return{x:t.left+(e.clientLeft+l)*n,y:t.top+(e.clientTop+s)*o,sx:n,sy:o,width:a*n,height:u*o}}function R0(e){try{let t=new URL(e);return t.origin+t.pathname}catch{return e}}function X5(e,t,n,o=document){let r=Tn(e,o);for(;r;){let i=Gi(r);t=i.x+t*i.sx,n=i.y+n*i.sy,r=Tn(r.ownerDocument,o)}return{x:t,y:n}}function At(e,t=document){let n=e.getBoundingClientRect();return ug(e.ownerDocument,n,t)}function ug(e,t,n){if(!Tn(e,n))return t;let o=t.left,r=t.top,i=t.right,l=t.bottom,s=Tn(e,n);for(;s;){let a=Gi(s);o=Math.max(a.x,a.x+o*a.sx),r=Math.max(a.y,a.y+r*a.sy),i=Math.min(a.x+a.width,a.x+i*a.sx),l=Math.min(a.y+a.height,a.y+l*a.sy),s=Tn(s.ownerDocument,n)}return new DOMRect(o,r,Math.max(0,i-o),Math.max(0,l-r))}function Lc(e){let t=[];for(let n of e.querySelectorAll("*"))n.tagName==="IFRAME"&&t.push(n),n.shadowRoot&&n.tagName!=="AGENTATION-TOOLBAR"&&t.push(...Lc(n.shadowRoot));return t}function G5(e,t,n,o=document){let r=[];for(let f=Tn(e.ownerDocument,o);f;f=Tn(f.ownerDocument,o))r.unshift(f);if(!r.length)return;let i=r.map(f=>{let x=Gi(f);return t=(t-x.x)/x.sx,n=(n-x.y)/x.sy,{index:Lc(f.ownerDocument).indexOf(f),id:f.id||void 0,url:xs(f)?.URL??""}}),l=e.ownerDocument.defaultView,s=!1;for(let f=e;f;f=f.parentElement)if(["fixed","sticky"].includes(l.getComputedStyle(f).position)){s=!0;break}let a=s?0:l.scrollX,u=s?0:l.scrollY,h=e.getBoundingClientRect();return{path:i,x:t+a,y:n+u,fixed:s,boundingBox:{x:h.left+a,y:h.top+u,width:h.width,height:h.height}}}function q5(e=document){let t=new Map,n=o=>{let r=t.get(o);return r||(r=Lc(o),t.set(o,r)),r};return o=>K5(o,e,n)}function K5(e,t=document,n=Lc){let o=e.frame;if(!o)return e;let r=t;for(let S of o.path){let b=n(r),N=S.id?b.find(y=>y.id===S.id):b[S.index],E=N&&xs(N);if(!E||R0(E.URL)!==R0(S.url))return null;r=E}let i=r.defaultView,l=o.fixed?0:i.scrollX,s=o.fixed?0:i.scrollY,a=o.x-l,u=o.y-s;for(let S=r,b=Tn(r,t);b;b=Tn(S,t)){let N=S.defaultView;if(a<0||u<0||a>N.innerWidth||u>N.innerHeight)return null;let E=Gi(b);if(E.width<=0||E.height<=0)return null;a=E.x+a*E.sx,u=E.y+u*E.sy,S=b.ownerDocument}let h=o.boundingBox,f=ug(r,new DOMRect(h.x-l,h.y-s,h.width,h.height),t),x=t.defaultView;return{...e,x:a/x.innerWidth*100,y:u+(e.isFixed?0:x.scrollY),boundingBox:{x:f.x,y:f.y+(e.isFixed?0:x.scrollY),width:f.width,height:f.height}}}function J5(e,t,n){if(!("clientX"in e)||t===n)return e;let o=X5(t,e.clientX,e.clientY,n);return new Proxy(e,{get(r,i){if(i==="clientX")return o.x;if(i==="clientY")return o.y;let l=Reflect.get(r,i,r);return typeof l=="function"?l.bind(r):l}})}function Z5(e,t){let n=new Set([e]),o=new Set,r=[],i=new Set,l=!1,s=!1,a,u=(f,x)=>{let S=b=>f.listener(J5(b,x,e));f.handlers.set(x,S),x.addEventListener(f.type,S,f.options)},h=()=>{if(l=!1,!s)return;let f=new Set,x=new Set,S=[],b=N=>{S.push(N);for(let E of N.querySelectorAll("*"))if(!E.matches("agentation-toolbar, [data-agentation-portal]")&&(E.shadowRoot&&b(E.shadowRoot),E.tagName==="IFRAME")){x.add(E);let y=xs(E);y&&!f.has(y)&&(f.add(y),b(y))}};f.add(e),b(e);for(let N of n)if(!f.has(N)){for(let E of o){let y=E.handlers.get(N);y&&N.removeEventListener(E.type,y,E.options),E.handlers.delete(N)}n.delete(N)}for(let N of f)if(!n.has(N)){n.add(N);for(let E of o)u(E,N)}for(let N of i)x.has(N)||N.removeEventListener("load",h);for(let N of x)i.has(N)||N.addEventListener("load",h);i=x,a?.disconnect(),i.forEach(N=>a?.observe(N)),r.forEach(N=>N.disconnect()),r=S.map(N=>{let E=new MutationObserver(y=>{y.some(p=>[...p.addedNodes,...p.removedNodes].some(C=>C.nodeType===1&&!C.closest("agentation-toolbar, [data-agentation-portal]")&&(C.tagName==="IFRAME"||!!C.shadowRoot||!!C.querySelector("iframe"))))&&!l&&(l=!0,queueMicrotask(h))});return E.observe(N,{childList:!0,subtree:!0}),E}),t?.()};return{start(){s||(s=!0,typeof ResizeObserver=="function"&&(a=new ResizeObserver(()=>t?.())),h())},stop(){s=!1,a?.disconnect(),a=void 0,r.forEach(f=>f.disconnect()),r=[];for(let f of i)f.removeEventListener("load",h);i.clear();for(let f of o)for(let[x,S]of f.handlers)x.removeEventListener(f.type,S,f.options);o.clear(),n.clear(),n.add(e)},addEventListener(f,x,S){let b={type:f,listener:x,options:S,handlers:new Map};o.add(b);for(let N of n)u(b,N)},removeEventListener(f,x,S){for(let b of o)if(b.type===f&&b.listener===x){for(let[N,E]of b.handlers)N.removeEventListener(f,E,b.options);o.delete(b)}},querySelectorAll(f){return[...n].flatMap(x=>[...x.querySelectorAll(f)])}}}function _s(e,t=X_){let n={};for(let o of[...new Set(t)].slice(0,16)){if(!/^[a-zA-Z_][\w:.-]*$/.test(o))continue;let r=e.getAttribute(o);r!=null&&r.length<=500&&Object.defineProperty(n,o,{value:r,enumerable:!0})}return n}function e2(e,t=X_){return Object.entries(_s(e,t)).filter(([n,o])=>/^data-[a-z0-9_-]+$/.test(n)&&o.length<=120).slice(0,2).map(([n,o])=>`[${n}="${o.replace(/[\\"\n\r\f\0]/g,r=>r==="\\"||r==='"'?`\\${r}`:`\\${r.charCodeAt(0).toString(16)} `)}"]`).join("")}function Xi(e){if(e.parentElement)return e.parentElement;let t=e.getRootNode();return V_(t)?t.host:null}function Zt(e,t){let n=e;for(;n;){if(n.matches(t))return n;n=Xi(n)}return null}function _g(e,t=4,n){let o=[],r=e,i=0;for(;r&&i<t;){let s=r.tagName.toLowerCase();if(s==="html"||s==="body"){o.length===0&&o.push(s);break}let a=s;if(r.id)a=`#${r.id}`;else if(r.className&&typeof r.className=="string"){let h=r.className.split(/\s+/).find(f=>f.length>2&&!f.match(/^[a-z]{1,2}$/)&&!f.match(/[A-Z0-9]{5,}/));h&&(a=`.${h.split("_")[0]}`)}a+=e2(r,n);let u=Xi(r);!r.parentElement&&u&&(a=`\u27E8shadow\u27E9 ${a}`),o.unshift(a),r=u,i++}let l=Tn(e.ownerDocument);return(l?_g(l,2)+" > \u27E8iframe\u27E9 ":"")+o.join(" > ")}function t2(e){let t="";for(let n of e.childNodes)if(n.nodeType===Node.TEXT_NODE){let o=n.textContent?.trim();o&&(t+=(t?" ":"")+o)}return t}function Yi(e,t){let n=_g(e,4,t);if(e.dataset.element)return{name:e.dataset.element,path:n};let o=e.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(o)){let r=Zt(e,"svg");if(r){let i=Xi(r);if(i?.namespaceURI==="http://www.w3.org/1999/xhtml")return{name:`graphic in ${Yi(i).name}`,path:n}}return{name:"graphic element",path:n}}if(o==="svg"){let r=Xi(e);if(r?.tagName.toLowerCase()==="button"){let i=r.textContent?.trim();return{name:i?`icon in "${i}" button`:"button icon",path:n}}return{name:"icon",path:n}}if(o==="button"){let r=e.textContent?.trim(),i=e.getAttribute("aria-label");return i?{name:`button [${i}]`,path:n}:{name:r?`button "${r.slice(0,25)}"`:"button",path:n}}if(o==="a"){let r=e.textContent?.trim(),i=e.getAttribute("href");return r?{name:`link "${r.slice(0,25)}"`,path:n}:i?{name:`link to ${i.slice(0,30)}`,path:n}:{name:"link",path:n}}if(o==="input"){let r=e.getAttribute("type")||"text",i=e.getAttribute("placeholder"),l=e.getAttribute("name");return i?{name:`input "${i}"`,path:n}:l?{name:`input [${l}]`,path:n}:{name:`${r} input`,path:n}}if(["h1","h2","h3","h4","h5","h6"].includes(o)){let r=e.textContent?.trim();return{name:r?`${o} "${r.slice(0,35)}"`:o,path:n}}if(o==="p"){let r=e.textContent?.trim();return r?{name:`paragraph: "${r.slice(0,40)}${r.length>40?"...":""}"`,path:n}:{name:"paragraph",path:n}}if(o==="span"||o==="label"){let r=e.textContent?.trim();return r&&r.length<40?{name:`"${r}"`,path:n}:{name:o,path:n}}if(o==="li"){let r=e.textContent?.trim();return r&&r.length<40?{name:`list item: "${r.slice(0,35)}"`,path:n}:{name:"list item",path:n}}if(o==="blockquote")return{name:"blockquote",path:n};if(o==="code"){let r=e.textContent?.trim();return r&&r.length<30?{name:`code: \`${r}\``,path:n}:{name:"code",path:n}}if(o==="pre")return{name:"code block",path:n};if(o==="img"){let r=e.getAttribute("alt");return{name:r?`image "${r.slice(0,30)}"`:"image",path:n}}if(o==="video")return{name:"video",path:n};if(["div","section","article","nav","header","footer","aside","main"].includes(o)){let r=e.className,i=e.getAttribute("role"),l=e.getAttribute("aria-label");if(l)return{name:`${o} [${l}]`,path:n};if(i)return{name:`${i}`,path:n};let s=t2(e);if(s&&s.length<50)return{name:`"${s}"`,path:n};if(typeof r=="string"&&r){let a=r.split(/[\s_-]+/).map(u=>u.replace(/[A-Z0-9]{5,}.*$/,"")).filter(u=>u.length>2&&!/^[a-z]{1,2}$/.test(u)).slice(0,2);if(a.length>0)return{name:a.join(" "),path:n}}return{name:o==="div"?"container":o,path:n}}return{name:o,path:n}}function ls(e){let t=[],n=e.textContent?.trim();n&&n.length<100&&t.push(n);let o=e.previousElementSibling;if(o){let i=o.textContent?.trim();i&&i.length<50&&t.unshift(`[before: "${i.slice(0,40)}"]`)}let r=e.nextElementSibling;if(r){let i=r.textContent?.trim();i&&i.length<50&&t.push(`[after: "${i.slice(0,40)}"]`)}return t.join(" ")}function ac(e){let t=Xi(e);if(!t)return"";let n=e.getRootNode(),r=(V_(n)&&e.parentElement?Array.from(e.parentElement.children):Array.from(t.children)).filter(h=>h!==e&&h.namespaceURI==="http://www.w3.org/1999/xhtml");if(r.length===0)return"";let i=r.slice(0,4).map(h=>{let f=h.tagName.toLowerCase(),x=h.className,S="";if(typeof x=="string"&&x){let b=x.split(/\s+/).map(N=>N.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(N=>N.length>2&&!/^[a-z]{1,2}$/.test(N));b&&(S=`.${b}`)}if(f==="button"||f==="a"){let b=h.textContent?.trim().slice(0,15);if(b)return`${f}${S} "${b}"`}return`${f}${S}`}),s=t.tagName.toLowerCase();if(typeof t.className=="string"&&t.className){let h=t.className.split(/\s+/).map(f=>f.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(f=>f.length>2&&!/^[a-z]{1,2}$/.test(f));h&&(s=`.${h}`)}let a=t.children.length,u=a>i.length+1?` (${a} total in ${s})`:"";return i.join(", ")+u}function ss(e){let t=e.className;return typeof t!="string"||!t?"":t.split(/\s+/).filter(o=>o.length>0).map(o=>{let r=o.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return r?r[1]:o}).filter((o,r,i)=>i.indexOf(o)===r).join(", ")}function cc(e){if(typeof window>"u")return{};let t=(e.ownerDocument.defaultView??window).getComputedStyle(e),n={},o=e.tagName.toLowerCase(),r;n2.has(o)?r=["color","fontSize","fontWeight","fontFamily","lineHeight"]:o==="button"||o==="a"&&e.getAttribute("role")==="button"?r=["backgroundColor","color","padding","borderRadius","fontSize"]:o2.has(o)?r=["backgroundColor","color","padding","borderRadius","fontSize"]:r2.has(o)?r=["width","height","objectFit","borderRadius"]:i2.has(o)?r=["display","padding","margin","gap","backgroundColor"]:r=["color","fontSize","margin","padding","backgroundColor"];for(let i of r){let l=i.replace(/([A-Z])/g,"-$1").toLowerCase(),s=t.getPropertyValue(l);s&&!fg.has(s)&&(n[i]=s)}return n}function dc(e){if(typeof window>"u")return"";let t=(e.ownerDocument.defaultView??window).getComputedStyle(e),n=[];for(let o of l2){let r=o.replace(/([A-Z])/g,"-$1").toLowerCase(),i=t.getPropertyValue(r);i&&!fg.has(i)&&n.push(`${r}: ${i}`)}return n.join("; ")}function s2(e){if(!e)return;let t={},n=e.split(";").map(o=>o.trim()).filter(Boolean);for(let o of n){let r=o.indexOf(":");if(r>0){let i=o.slice(0,r).trim(),l=o.slice(r+1).trim();i&&l&&(t[i]=l)}}return Object.keys(t).length>0?t:void 0}function uc(e){let t=[],n=e.getAttribute("role"),o=e.getAttribute("aria-label"),r=e.getAttribute("aria-describedby"),i=e.getAttribute("tabindex"),l=e.getAttribute("aria-hidden");return n&&t.push(`role="${n}"`),o&&t.push(`aria-label="${o}"`),r&&t.push(`aria-describedby="${r}"`),i&&t.push(`tabindex=${i}`),l==="true"&&t.push("aria-hidden"),e.matches("a, button, input, select, textarea, [tabindex]")&&t.push("focusable"),t.join(", ")}function fs(e){let t=[],n=e;for(;n&&n.tagName.toLowerCase()!=="html";){let r=n.tagName.toLowerCase(),i=r;if(n.id)i=`${r}#${n.id}`;else if(n.className&&typeof n.className=="string"){let s=n.className.split(/\s+/).map(a=>a.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(a=>a.length>2);s&&(i=`${r}.${s}`)}let l=Xi(n);!n.parentElement&&l&&(i=`\u27E8shadow\u27E9 ${i}`),t.unshift(i),n=l}let o=Tn(e.ownerDocument);return(o?fs(o)+" > \u27E8iframe\u27E9 ":"")+t.join(" > ")}function kc(e,t){let n=document.elementFromPoint(e,t),o=new Set;for(;n&&!o.has(n);){o.add(n);let r=xs(n),i;if(r){let l=Gi(n);e=(e-l.x)/l.sx,t=(t-l.y)/l.sy,i=r.elementFromPoint?.(e,t)}else i=n.shadowRoot?.elementFromPoint?.(e,t);if(!i||i===n)break;n=i}return n}function c2(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!0,checkVisibilityCSS:!0});let t=getComputedStyle(e);if(t.visibility==="hidden"||t.visibility==="collapse")return!1;let n=e;for(;n;){let o=getComputedStyle(n);if(o.opacity==="0"||o.display==="none"||o.contentVisibility==="hidden")return!1;let r=n.getRootNode();n=n.parentElement||(V_(r)?r.host:null)}return!0}function pg(e,t){let n=[],o=new Set,r=(i,l,s)=>{for(let a of i){if(o.has(a))continue;if(o.add(a),a.shadowRoot){let h=a.shadowRoot,f=h.elementsFromPoint?.(l,s)??[];r(f.length?f:[h.elementFromPoint?.(l,s)].filter(Boolean),l,s)}let u=xs(a);if(u){let h=Gi(a),f=(l-h.x)/h.sx,x=(s-h.y)/h.sy;r(u.elementsFromPoint?.(f,x)??[u.elementFromPoint?.(f,x)].filter(Boolean),f,x)}a!==a.ownerDocument.body&&a!==a.ownerDocument.documentElement&&!Zt(a,hg)&&c2(a)&&n.push(a)}};return r(document.elementsFromPoint?.(e,t)??[document.elementFromPoint(e,t)].filter(Boolean),e,t),n}function _c(e,t,n){if(n.width<=0||n.height<=0)return null;let o=null,r=1/0;for(let i of pg(e,t)){let l=At(i),s=l.width/n.width,a=l.height/n.height;if(s<.5||s>2||a<.5||a>2)continue;let u=Math.abs(Math.log(s))+Math.abs(Math.log(a));u<r&&(o=i,r=u)}return o}function $0(e,t){let n=kc(e,t);if(!n||Zt(n,hg))return null;let o=pg(e,t);for(let l of o)if(!a2.has(l.tagName)&&!l.shadowRoot||Array.from(l.childNodes).some(s=>s.nodeType===Node.TEXT_NODE&&s.textContent?.trim()))return l;let r=null,i=1/0;for(let l of o){let s=At(l),a=s.width*s.height;a>0&&a<i&&(r=l,i=a)}return r}function d2(e){let t=(0,Nc.useCallback)(n=>e?(window.addEventListener("hashchange",n),window.addEventListener("popstate",n),()=>{window.removeEventListener("hashchange",n),window.removeEventListener("popstate",n)}):()=>{},[e]);return(0,Nc.useSyncExternalStore)(t,()=>window.location.pathname+(e?window.location.hash:""),()=>"/")}function u2(e,t){let n=(fc.get(e)??Promise.resolve()).then(t),o=n.then(()=>{},()=>{});return fc.set(e,o),o.then(()=>{fc.get(e)===o&&fc.delete(e)}),n}function _2(e,t,n){try{let o=new URL(e,n);return o.origin===n&&o.pathname+o.hash===t}catch{return!1}}function f2(e){let[t,n]=(0,qi.useState)(null);return T0(()=>{let o=document.createElement("div");return o.setAttribute("data-agentation-portal",""),o.style.display="contents",n(o),()=>o.remove()},[]),T0(()=>{if(!t)return;let o=e??document.body;if(o.ownerDocument!==document){console.warn("[Agentation] portalContainer belongs to another document; the toolbar will not render.");return}let r=document.activeElement;for(;r?.shadowRoot?.activeElement;)r=r.shadowRoot.activeElement;let i=r&&t.contains(document.activeElement)?r:null;typeof t.hidePopover=="function"&&t.matches(":popover-open")&&t.hidePopover(),o.appendChild(t),e&&typeof t.showPopover=="function"?(t.setAttribute("popover","manual"),t.style.cssText="position:fixed;inset:0 auto auto 0;margin:0;padding:0;border:0;background:transparent;width:0;height:0;overflow:visible;pointer-events:none",t.showPopover()):(t.removeAttribute("popover"),t.style.cssText="display:contents"),i?.focus({preventScroll:!0})},[t,e]),t}function G_(e,t,n){let o=(0,ps.useRef)(n);(0,ps.useLayoutEffect)(()=>{o.current=n},[n]),(0,ps.useLayoutEffect)(()=>{let r=e.current;if(!t||!r)return;let i=!1,l=r.getAnimations?.()??[];return Promise.allSettled(l.map(s=>s.finished)).then(()=>{i||o.current()}),()=>{i=!0}},[e,t])}function wg(e,t,n){if(!n||!e)return;let o=e.nodeType===9?e.head:e.nodeType===11?e:null;if(!o||typeof o.querySelector!="function"||o.querySelector(`style[${M_}~="toolbar"], style[${M_}~="${t}"]`))return;let i=(e.nodeType===9?e:e.ownerDocument).createElement("style");i.setAttribute(M_,t),i.textContent=n,o.appendChild(i)}function q_(e,t){return(0,vg.useCallback)(n=>{n&&wg(n.getRootNode(),e,t)},[e,t])}function P0(e){if(!e)return;let t=n=>n.stopImmediatePropagation();document.addEventListener("focusin",t,!0),document.addEventListener("focusout",t,!0);try{e.focus({preventScroll:!0})}finally{document.removeEventListener("focusin",t,!0),document.removeEventListener("focusout",t,!0)}}function $2({active:e}){return(0,ei.jsxs)("svg",{className:O.toggleGlyph,"data-active":e,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,ei.jsx)("path",{className:O.toggleTopLine,d:"M5.5 6.75H18.5"}),(0,ei.jsx)("path",{className:O.toggleMiddleLine,d:"M5.5 12H11.5"}),(0,ei.jsx)("path",{className:O.toggleBottomLine,d:"M5.5 17.25H9.25"}),(0,ei.jsx)("path",{className:O.toggleSparkle,d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z"})]})}function A({w:e,h:t=3,strong:n}){return(0,d.jsx)("div",{style:{width:typeof e=="number"?`${e}px`:e,height:t,borderRadius:2,background:n?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function _t({w:e,h:t,radius:n=3,style:o}){return(0,d.jsx)("div",{style:{width:typeof e=="number"?`${e}px`:e,height:typeof t=="number"?`${t}px`:t,borderRadius:n,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...o}})}function mn({size:e}){return(0,d.jsx)("div",{style:{width:e,height:e,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function T2({width:e,height:t}){let n=Math.max(8,t*.2);return(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${n}px`,gap:e*.02},children:[(0,d.jsx)(_t,{w:Math.max(20,t*.5),h:Math.max(12,t*.4),radius:2}),(0,d.jsxs)("div",{style:{flex:1,display:"flex",gap:e*.03,marginLeft:e*.04},children:[(0,d.jsx)(A,{w:e*.06}),(0,d.jsx)(A,{w:e*.07}),(0,d.jsx)(A,{w:e*.05}),(0,d.jsx)(A,{w:e*.06})]}),(0,d.jsx)(_t,{w:e*.1,h:Math.min(28,t*.5),radius:4})]})}function P2({width:e,height:t,text:n}){return(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:t*.05},children:[n?(0,d.jsx)("span",{style:{fontSize:Math.min(20,t*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:n}):(0,d.jsx)(A,{w:e*.5,h:Math.max(6,t*.04),strong:!0}),(0,d.jsx)(A,{w:e*.6}),(0,d.jsx)(A,{w:e*.4}),(0,d.jsx)(_t,{w:Math.min(140,e*.2),h:Math.min(36,t*.12),radius:6,style:{marginTop:t*.06}})]})}function D2({width:e,height:t}){let n=Math.max(3,Math.floor(t/36));return(0,d.jsxs)("div",{style:{padding:e*.08,display:"flex",flexDirection:"column",gap:t*.03},children:[(0,d.jsx)(A,{w:e*.6,h:4,strong:!0}),Array.from({length:n},(o,r)=>(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,d.jsx)(_t,{w:10,h:10,radius:2}),(0,d.jsx)(A,{w:e*(.4+r*17%30/100)})]},r))]})}function B2({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/160)));return(0,d.jsx)("div",{style:{display:"flex",padding:`${t*.12}px ${e*.03}px`,gap:e*.05},children:Array.from({length:n},(o,r)=>(0,d.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[(0,d.jsx)(A,{w:"60%",h:3,strong:!0}),(0,d.jsx)(A,{w:"80%",h:2}),(0,d.jsx)(A,{w:"70%",h:2}),(0,d.jsx)(A,{w:"60%",h:2})]},r))})}function z2({width:e,height:t}){return(0,d.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,d.jsxs)("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,d.jsx)(A,{w:e*.3,h:4,strong:!0}),(0,d.jsx)("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),(0,d.jsxs)("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[(0,d.jsx)(A,{w:"90%"}),(0,d.jsx)(A,{w:"70%"}),(0,d.jsx)(A,{w:"80%"})]}),(0,d.jsxs)("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[(0,d.jsx)(_t,{w:70,h:26,radius:4}),(0,d.jsx)(_t,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function O2({width:e,height:t}){return(0,d.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,d.jsx)("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),(0,d.jsxs)("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[(0,d.jsx)(A,{w:"70%",h:4,strong:!0}),(0,d.jsx)(A,{w:"95%",h:2}),(0,d.jsx)(A,{w:"85%",h:2}),(0,d.jsx)(A,{w:"50%",h:2})]})]})}function A2({width:e,height:t,text:n}){if(n)return(0,d.jsx)("div",{style:{padding:4,fontSize:Math.min(14,t*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:n});let o=Math.max(2,Math.floor(t/18));return(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[(0,d.jsx)(A,{w:e*.6,h:5,strong:!0}),Array.from({length:o},(r,i)=>(0,d.jsx)(A,{w:`${70+i*13%25}%`,h:2},i))]})}function F2({width:e,height:t}){return(0,d.jsx)("div",{style:{height:"100%",position:"relative"},children:(0,d.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,preserveAspectRatio:"none",fill:"none",children:[(0,d.jsx)("line",{x1:"0",y1:"0",x2:e,y2:t,stroke:"var(--agd-stroke)",strokeWidth:"1"}),(0,d.jsx)("line",{x1:e,y1:"0",x2:"0",y2:t,stroke:"var(--agd-stroke)",strokeWidth:"1"}),(0,d.jsx)("circle",{cx:e*.3,cy:t*.3,r:Math.min(e,t)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function W2({width:e,height:t}){let n=Math.max(2,Math.min(5,Math.floor(e/100))),o=Math.max(2,Math.min(6,Math.floor(t/32)));return(0,d.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,d.jsx)("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:n},(r,i)=>(0,d.jsx)("div",{style:{flex:1,padding:"0 8px"},children:(0,d.jsx)(A,{w:"70%",h:3,strong:!0})},i))}),Array.from({length:o},(r,i)=>(0,d.jsx)("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:n},(l,s)=>(0,d.jsx)("div",{style:{flex:1,padding:"0 8px"},children:(0,d.jsx)(A,{w:`${50+(i*7+s*13)%40}%`,h:2})},s))},i))]})}function j2({width:e,height:t}){let n=Math.max(2,Math.floor(t/28));return(0,d.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:n},(o,r)=>(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[(0,d.jsx)(mn,{size:8}),(0,d.jsx)(A,{w:`${55+r*17%35}%`,h:2})]},r))})}function H2({width:e,height:t,text:n}){return(0,d.jsx)("div",{style:{height:"100%",borderRadius:Math.min(8,t/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:n?(0,d.jsx)("span",{style:{fontSize:Math.min(13,t*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:n}):(0,d.jsx)(A,{w:Math.max(20,e*.5),h:3,strong:!0})})}function U2({width:e,height:t}){return(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[(0,d.jsx)(A,{w:Math.min(80,e*.3),h:2}),(0,d.jsx)("div",{style:{height:Math.min(36,t*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:(0,d.jsx)(A,{w:"40%",h:2})})]})}function Y2({width:e,height:t}){let n=Math.max(2,Math.min(5,Math.floor(t/56)));return(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:t*.04,padding:8},children:[Array.from({length:n},(o,r)=>(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[(0,d.jsx)(A,{w:60+r*17%30,h:2}),(0,d.jsx)(_t,{w:"100%",h:28,radius:4})]},r)),(0,d.jsx)(_t,{w:Math.min(120,e*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function Q2({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/120)));return(0,d.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,d.jsx)("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:n},(o,r)=>(0,d.jsx)("div",{style:{padding:"8px 12px",borderBottom:r===0?"2px solid var(--agd-bar-strong)":"none"},children:(0,d.jsx)(A,{w:60,h:3,strong:r===0})},r))}),(0,d.jsxs)("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[(0,d.jsx)(A,{w:"80%",h:2}),(0,d.jsx)(A,{w:"65%",h:2}),(0,d.jsx)(A,{w:"75%",h:2})]})]})}function V2({width:e,height:t}){let n=Math.min(e,t)/2;return(0,d.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[(0,d.jsx)("circle",{cx:e/2,cy:t/2,r:n-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),(0,d.jsx)("circle",{cx:e/2,cy:t*.38,r:n*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),(0,d.jsx)("path",{d:`M${e/2-n*.55} ${t*.78} C${e/2-n*.55} ${t*.55} ${e/2+n*.55} ${t*.55} ${e/2+n*.55} ${t*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function X2({width:e,height:t}){return(0,d.jsx)("div",{style:{height:"100%",borderRadius:t/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,d.jsx)(A,{w:Math.max(16,e*.5),h:2,strong:!0})})}function G2({width:e,height:t}){return(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:t*.08},children:[(0,d.jsx)(A,{w:e*.5,h:Math.max(5,t*.06),strong:!0}),(0,d.jsx)(A,{w:e*.35})]})}function q2({width:e,height:t}){return(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:t*.04,padding:e*.04},children:[(0,d.jsx)(A,{w:e*.3,h:4,strong:!0}),(0,d.jsx)(A,{w:e*.7}),(0,d.jsx)(A,{w:e*.5}),(0,d.jsxs)("div",{style:{flex:1,display:"flex",gap:e*.03,marginTop:t*.06},children:[(0,d.jsx)(_t,{w:"33%",h:"100%",radius:4}),(0,d.jsx)(_t,{w:"33%",h:"100%",radius:4}),(0,d.jsx)(_t,{w:"33%",h:"100%",radius:4})]})]})}function K2({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/140))),o=Math.max(1,Math.min(3,Math.floor(t/120)));return(0,d.jsx)("div",{style:{display:"grid",gridTemplateColumns:`repeat(${n}, 1fr)`,gridTemplateRows:`repeat(${o}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:n*o},(r,i)=>(0,d.jsx)(_t,{w:"100%",h:"100%",radius:4},i))})}function J2({width:e,height:t}){let n=Math.max(2,Math.floor((t-32)/28));return(0,d.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,d.jsx)("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:(0,d.jsx)(A,{w:e*.5,h:3,strong:!0})}),(0,d.jsx)("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:n},(o,r)=>(0,d.jsx)("div",{style:{padding:"4px 6px",borderRadius:3,background:r===0?"var(--agd-fill)":"transparent"},children:(0,d.jsx)(A,{w:`${50+r*17%35}%`,h:2,strong:r===0})},r))})]})}function Z2({width:e,height:t}){let n=Math.min(e,t)/2;return(0,d.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[(0,d.jsx)("rect",{x:"1",y:"1",width:e-2,height:t-2,rx:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),(0,d.jsx)("circle",{cx:e-n,cy:t/2,r:n*.7,fill:"var(--agd-bar)"})]})}function ex({width:e,height:t}){let n=Math.min(t/2,20);return(0,d.jsxs)("div",{style:{height:"100%",borderRadius:n,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.6}px`,gap:6},children:[(0,d.jsx)(mn,{size:Math.min(14,t*.4)}),(0,d.jsx)(A,{w:"50%",h:2})]})}function tx({width:e,height:t}){return(0,d.jsxs)("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[(0,d.jsx)(mn,{size:Math.min(20,t*.5)}),(0,d.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,d.jsx)(A,{w:"60%",h:3,strong:!0}),(0,d.jsx)(A,{w:"80%",h:2})]}),(0,d.jsx)("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function nx({width:e,height:t}){return(0,d.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[(0,d.jsx)("rect",{x:"0",y:"0",width:e,height:t,rx:t/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),(0,d.jsx)("rect",{x:"1",y:"1",width:e*.65,height:t-2,rx:(t-2)/2,fill:"var(--agd-bar)"})]})}function ox({width:e,height:t}){let n=Math.max(3,Math.min(7,Math.floor(e/50))),o=e/(n*2);return(0,d.jsx)("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:n},(r,i)=>{let l=30+(i*37+17)%55;return(0,d.jsx)(_t,{w:o,h:`${l}%`,radius:2},i)})})}function rx({width:e,height:t}){let n=Math.min(e,t)*.12;return(0,d.jsxs)("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,d.jsx)(_t,{w:"100%",h:"100%",radius:4}),(0,d.jsx)("div",{style:{position:"absolute",width:n*2,height:n*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,d.jsx)("div",{style:{width:0,height:0,borderLeft:`${n*.6}px solid var(--agd-bar-strong)`,borderTop:`${n*.4}px solid transparent`,borderBottom:`${n*.4}px solid transparent`,marginLeft:n*.15}})})]})}function ix({width:e,height:t}){return(0,d.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,d.jsx)("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,d.jsx)(A,{w:"60%",h:2})}),(0,d.jsx)("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function lx({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/80)));return(0,d.jsx)("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:n},(o,r)=>(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:4},children:[r>0&&(0,d.jsx)("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),(0,d.jsx)(A,{w:40+r*13%20,h:2,strong:r===n-1})]},r))})}function sx({width:e,height:t}){let n=Math.max(3,Math.min(5,Math.floor(e/40))),o=Math.min(28,t*.8);return(0,d.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:n},(r,i)=>(0,d.jsx)(_t,{w:o,h:o,radius:4,style:i===1?{background:"var(--agd-bar)"}:void 0},i))})}function ax({width:e}){return(0,d.jsx)("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:(0,d.jsx)("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function cx({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(t/40)));return(0,d.jsx)("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:n},(o,r)=>(0,d.jsxs)("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:r===0?2:1},children:[(0,d.jsx)(A,{w:`${40+r*17%25}%`,h:3,strong:!0}),(0,d.jsx)("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:r===0?"\u25BC":"\u25B6"})]},r))})}function dx({width:e,height:t}){return(0,d.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[(0,d.jsxs)("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[(0,d.jsx)("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"\u2039"}),(0,d.jsx)(_t,{w:"100%",h:"100%",radius:4}),(0,d.jsx)("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"\u203A"})]}),(0,d.jsxs)("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[(0,d.jsx)(mn,{size:5}),(0,d.jsx)(mn,{size:5}),(0,d.jsx)(mn,{size:5})]})]})}function ux({width:e,height:t}){return(0,d.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:t*.04},children:[(0,d.jsx)(A,{w:e*.4,h:3,strong:!0}),(0,d.jsx)(A,{w:e*.3,h:6,strong:!0}),(0,d.jsx)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(n,o)=>(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:4},children:[(0,d.jsx)(mn,{size:5}),(0,d.jsx)(A,{w:`${50+o*17%35}%`,h:2})]},o))}),(0,d.jsx)(_t,{w:e*.7,h:Math.min(32,t*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function _x({width:e,height:t}){return(0,d.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[(0,d.jsx)("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"\u201C"}),(0,d.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[(0,d.jsx)(A,{w:"90%",h:2}),(0,d.jsx)(A,{w:"75%",h:2}),(0,d.jsx)(A,{w:"60%",h:2})]}),(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,d.jsx)(mn,{size:20}),(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[(0,d.jsx)(A,{w:60,h:3,strong:!0}),(0,d.jsx)(A,{w:40,h:2})]})]})]})}function fx({width:e,height:t}){return(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:t*.08},children:[(0,d.jsx)(A,{w:e*.5,h:Math.max(4,t*.05),strong:!0}),(0,d.jsx)(A,{w:e*.35}),(0,d.jsx)(_t,{w:Math.min(140,e*.25),h:Math.min(32,t*.15),radius:6,style:{marginTop:t*.04,background:"var(--agd-bar)"}})]})}function hx({width:e,height:t}){return(0,d.jsxs)("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[(0,d.jsx)("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:(0,d.jsx)("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),(0,d.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,d.jsx)(A,{w:"40%",h:3,strong:!0}),(0,d.jsx)(A,{w:"70%",h:2})]})]})}function px({width:e,height:t}){return(0,d.jsxs)("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[(0,d.jsx)(A,{w:e*.4,h:3,strong:!0}),(0,d.jsx)(_t,{w:60,h:Math.min(24,t*.6),radius:4})]})}function mx({width:e,height:t}){return(0,d.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:t*.06},children:[(0,d.jsx)(A,{w:e*.5,h:2}),(0,d.jsx)(A,{w:e*.4,h:Math.max(8,t*.18),strong:!0}),(0,d.jsx)(A,{w:e*.3,h:2})]})}function gx({width:e,height:t}){let n=Math.max(3,Math.min(5,Math.floor(e/100))),o=Math.min(12,t*.35);return(0,d.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:n},(r,i)=>(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[(0,d.jsx)("div",{style:{width:o,height:o,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:i===0?"var(--agd-bar)":"transparent",flexShrink:0}}),i<n-1&&(0,d.jsx)("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},i))})}function yx({width:e,height:t}){return(0,d.jsxs)("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[(0,d.jsx)(A,{w:Math.max(16,e*.5),h:2,strong:!0}),(0,d.jsx)("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function xx({width:e,height:t}){let o=Math.min(t*.7,e/7.5);return(0,d.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:o*.2},children:Array.from({length:5},(r,i)=>(0,d.jsx)("svg",{width:o,height:o,viewBox:"0 0 16 16",fill:"none",children:(0,d.jsx)("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:i<3?"var(--agd-bar)":"none"})},i))})}function vx({width:e,height:t}){return(0,d.jsxs)("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[(0,d.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",style:{position:"absolute",inset:0},children:[(0,d.jsx)("line",{x1:0,y1:t*.3,x2:e,y2:t*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),(0,d.jsx)("line",{x1:0,y1:t*.6,x2:e,y2:t*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),(0,d.jsx)("line",{x1:e*.4,y1:0,x2:e*.6,y2:t,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),(0,d.jsx)("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:(0,d.jsxs)("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[(0,d.jsx)("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),(0,d.jsx)("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function wx({width:e,height:t}){let n=Math.max(3,Math.min(5,Math.floor(t/60)));return(0,d.jsxs)("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[(0,d.jsx)("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:n},(o,r)=>(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[(0,d.jsx)(mn,{size:8}),r<n-1&&(0,d.jsx)("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},r))}),(0,d.jsx)("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:n},(o,r)=>(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[(0,d.jsx)(A,{w:`${35+r*13%25}%`,h:3,strong:!0}),(0,d.jsx)(A,{w:`${50+r*17%30}%`,h:2})]},r))})]})}function bx({width:e,height:t}){return(0,d.jsxs)("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:t*.06},children:[(0,d.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,d.jsx)("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),(0,d.jsx)("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),(0,d.jsx)(A,{w:e*.4,h:2}),(0,d.jsx)(A,{w:e*.25,h:2})]})}function kx({width:e,height:t}){let n=Math.max(3,Math.min(8,Math.floor(t/20)));return(0,d.jsxs)("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[(0,d.jsxs)("div",{style:{display:"flex",gap:3,marginBottom:4},children:[(0,d.jsx)(mn,{size:6}),(0,d.jsx)(mn,{size:6}),(0,d.jsx)(mn,{size:6})]}),Array.from({length:n},(o,r)=>(0,d.jsx)("div",{style:{display:"flex",gap:6,paddingLeft:r>0&&r<n-1?12:0},children:(0,d.jsx)(A,{w:`${25+r*23%50}%`,h:2,strong:r===0})},r))]})}function Cx({width:e,height:t}){let r=Math.min((e-16)/7,(t-40)/6);return(0,d.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[(0,d.jsx)("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"\u2039"}),(0,d.jsx)(A,{w:e*.3,h:3,strong:!0}),(0,d.jsx)("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"\u203A"})]}),(0,d.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(i,l)=>(0,d.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:r*.6},children:(0,d.jsx)(A,{w:r*.5,h:2})},`h${l}`)),Array.from({length:35},(i,l)=>(0,d.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:r},children:(0,d.jsx)("div",{style:{width:r*.6,height:r*.6,borderRadius:"50%",background:l===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,d.jsx)("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:l===12?1:.3}})})},l))]})]})}function Sx({width:e,height:t}){return(0,d.jsxs)("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[(0,d.jsx)(mn,{size:Math.min(32,t*.55)}),(0,d.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,d.jsx)(A,{w:"50%",h:3,strong:!0}),(0,d.jsx)(A,{w:"75%",h:2})]}),(0,d.jsx)(A,{w:30,h:2})]})}function Mx({width:e,height:t}){return(0,d.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,d.jsx)("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),(0,d.jsxs)("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[(0,d.jsx)(A,{w:"65%",h:4,strong:!0}),(0,d.jsx)(A,{w:"40%",h:3}),(0,d.jsx)("div",{style:{flex:1}}),(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,d.jsx)(A,{w:"30%",h:5,strong:!0}),(0,d.jsx)(_t,{w:Math.min(70,e*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function Ex({width:e,height:t}){let n=Math.min(48,t*.3);return(0,d.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:t*.06},children:[(0,d.jsx)(mn,{size:n}),(0,d.jsx)(A,{w:e*.45,h:4,strong:!0}),(0,d.jsx)(A,{w:e*.3,h:2}),(0,d.jsxs)("div",{style:{display:"flex",gap:e*.08,marginTop:t*.04},children:[(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[(0,d.jsx)(A,{w:20,h:3,strong:!0}),(0,d.jsx)(A,{w:28,h:2})]}),(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[(0,d.jsx)(A,{w:20,h:3,strong:!0}),(0,d.jsx)(A,{w:28,h:2})]}),(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[(0,d.jsx)(A,{w:20,h:3,strong:!0}),(0,d.jsx)(A,{w:28,h:2})]})]})]})}function Lx({width:e,height:t}){let n=Math.max(e*.6,80),o=Math.max(3,Math.floor(t/40));return(0,d.jsxs)("div",{style:{height:"100%",display:"flex"},children:[(0,d.jsx)("div",{style:{width:e-n,background:"var(--agd-fill)",opacity:.3}}),(0,d.jsxs)("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:e*.04},children:[(0,d.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:t*.06},children:[(0,d.jsx)(A,{w:n*.4,h:4,strong:!0}),(0,d.jsx)("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:o},(r,i)=>(0,d.jsx)("div",{style:{padding:"6px 0"},children:(0,d.jsx)(A,{w:`${50+i*17%35}%`,h:2,strong:i===0})},i))]})]})}function Nx({width:e,height:t}){return(0,d.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,d.jsxs)("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[(0,d.jsx)(A,{w:"70%",h:3,strong:!0}),(0,d.jsx)(A,{w:"90%",h:2}),(0,d.jsx)(A,{w:"60%",h:2})]}),(0,d.jsx)("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function Ix({width:e,height:t}){let n=Math.min(t*.7,e*.3);return(0,d.jsxs)("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:e*.08},children:[(0,d.jsx)(_t,{w:n,h:n,radius:n*.25}),(0,d.jsx)(A,{w:e*.45,h:Math.max(4,t*.2),strong:!0})]})}function Rx({width:e,height:t}){let n=Math.max(2,Math.min(5,Math.floor(t/56)));return(0,d.jsx)("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:n},(o,r)=>(0,d.jsxs)("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:r===0?2:1},children:[(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,d.jsx)("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),(0,d.jsx)(A,{w:e*(.3+r*13%25/100),h:3,strong:!0})]}),(0,d.jsx)("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:r===0?"\u25BC":"\u25B6"})]},r))})}function $x({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/120))),o=Math.max(1,Math.min(3,Math.floor(t/120)));return(0,d.jsx)("div",{style:{display:"grid",gridTemplateColumns:`repeat(${n}, 1fr)`,gridTemplateRows:`repeat(${o}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:n*o},(r,i)=>(0,d.jsx)("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:(0,d.jsxs)("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[(0,d.jsx)("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),(0,d.jsx)("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},i))})}function Tx({width:e,height:t}){let n=Math.min(e,t);return(0,d.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[(0,d.jsx)("rect",{x:"1",y:(t-n+2)/2,width:n-2,height:n-2,rx:n*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),(0,d.jsx)("path",{d:`M${n*.25} ${t/2}l${n*.2} ${n*.2} ${n*.3}-${n*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function Px({width:e,height:t}){let n=Math.min(e,t)/2-1;return(0,d.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[(0,d.jsx)("circle",{cx:e/2,cy:t/2,r:n,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),(0,d.jsx)("circle",{cx:e/2,cy:t/2,r:n*.45,fill:"var(--agd-bar)"})]})}function Dx({width:e,height:t}){let n=Math.max(2,t*.12),o=Math.min(t*.35,10),r=e*.55;return(0,d.jsxs)("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[(0,d.jsx)("div",{style:{width:"100%",height:n,borderRadius:n/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:(0,d.jsx)("div",{style:{width:r,height:"100%",borderRadius:n/2,background:"var(--agd-bar)"}})}),(0,d.jsx)("div",{style:{position:"absolute",left:r-o,width:o*2,height:o*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function Bx({width:e,height:t}){let n=Math.min(36,t*.15),o=7,r=4,i=Math.min((e-16)/o,(t-n-40)/(r+1));return(0,d.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[(0,d.jsxs)("div",{style:{height:n,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[(0,d.jsx)(A,{w:"40%",h:2}),(0,d.jsxs)("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[(0,d.jsx)("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),(0,d.jsx)("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),(0,d.jsxs)("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[(0,d.jsx)("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"\u2039"}),(0,d.jsx)(A,{w:e*.25,h:2,strong:!0}),(0,d.jsx)("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"\u203A"})]}),(0,d.jsx)("div",{style:{display:"grid",gridTemplateColumns:`repeat(${o}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:o*r},(l,s)=>(0,d.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:i},children:(0,d.jsx)("div",{style:{width:i*.5,height:i*.5,borderRadius:"50%",background:s===10?"var(--agd-bar)":"transparent"},children:(0,d.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,d.jsx)("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:s===10?1:.25}})})})},s))})]})]})}function zx({width:e,height:t}){return(0,d.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:t*.08,padding:4},children:[(0,d.jsx)("div",{style:{width:"100%",height:t*.2,borderRadius:4,background:"var(--agd-fill)"}}),(0,d.jsx)("div",{style:{width:"70%",height:Math.max(6,t*.1),borderRadius:3,background:"var(--agd-fill)"}}),(0,d.jsx)("div",{style:{width:"90%",height:Math.max(4,t*.06),borderRadius:3,background:"var(--agd-fill)"}}),(0,d.jsx)("div",{style:{width:"50%",height:Math.max(4,t*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function Ox({width:e,height:t}){return(0,d.jsx)("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:(0,d.jsxs)("div",{style:{height:"100%",flex:1,borderRadius:t/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${t*.3}px`,gap:4},children:[(0,d.jsx)(A,{w:"60%",h:2,strong:!0}),(0,d.jsx)("div",{style:{width:Math.max(6,t*.3),height:Math.max(6,t*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function Ax({width:e,height:t}){let n=Math.min(e,t);return(0,d.jsx)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:(0,d.jsx)("path",{d:`M${e/2} ${(t-n)/2+n*.1}l${n*.12} ${n*.25} ${n*.28} ${n*.04}-${n*.2} ${n*.2} ${n*.05} ${n*.28}-${n*.25}-${n*.12}-${n*.25} ${n*.12} ${n*.05}-${n*.28}-${n*.2}-${n*.2} ${n*.28}-${n*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function Fx({width:e,height:t}){let n=Math.min(e,t)/2-2;return(0,d.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[(0,d.jsx)("circle",{cx:e/2,cy:t/2,r:n,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),(0,d.jsx)("path",{d:`M${e/2} ${t/2-n}a${n} ${n} 0 0 1 ${n} ${n}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function Wx({width:e,height:t}){let n=Math.min(36,t*.25,e*.12),o=Math.max(1,Math.min(3,Math.floor(t/80)));return(0,d.jsx)("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:o},(r,i)=>(0,d.jsxs)("div",{style:{display:"flex",gap:e*.04,alignItems:"flex-start"},children:[(0,d.jsx)(_t,{w:n,h:n,radius:n*.25}),(0,d.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[(0,d.jsx)(A,{w:`${40+i*13%20}%`,h:3,strong:!0}),(0,d.jsx)(A,{w:`${60+i*17%25}%`,h:2})]})]},i))})}function jx({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/120))),o=Math.min(36,t*.25);return(0,d.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:t*.06,padding:t*.06},children:[(0,d.jsx)(A,{w:e*.3,h:4,strong:!0}),(0,d.jsx)("div",{style:{display:"flex",gap:e*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:n},(r,i)=>(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[(0,d.jsx)(mn,{size:o}),(0,d.jsx)(A,{w:e*.12,h:3,strong:!0}),(0,d.jsx)(A,{w:e*.08,h:2})]},i))})]})}function Hx({width:e,height:t}){let n=Math.max(2,Math.min(3,Math.floor(t/80)));return(0,d.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:e*.06,gap:t*.04},children:[(0,d.jsx)(A,{w:e*.5,h:Math.max(5,t*.04),strong:!0}),(0,d.jsx)(A,{w:e*.35,h:2}),(0,d.jsx)("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:t*.03,marginTop:t*.04},children:Array.from({length:n},(o,r)=>(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[(0,d.jsx)(A,{w:Math.min(60,e*.2),h:2}),(0,d.jsx)(_t,{w:"100%",h:Math.min(32,t*.1),radius:4})]},r))}),(0,d.jsx)(_t,{w:"100%",h:Math.min(36,t*.12),radius:6,style:{marginTop:t*.03,background:"var(--agd-bar)"}}),(0,d.jsx)(A,{w:e*.4,h:2})]})}function Ux({width:e,height:t}){return(0,d.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:e*.04,gap:t*.03},children:[(0,d.jsx)(A,{w:e*.4,h:4,strong:!0}),(0,d.jsx)(A,{w:e*.6,h:2}),(0,d.jsxs)("div",{style:{display:"flex",gap:6,marginTop:t*.03},children:[(0,d.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,d.jsx)(A,{w:50,h:2}),(0,d.jsx)(_t,{w:"100%",h:Math.min(28,t*.1),radius:4})]}),(0,d.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,d.jsx)(A,{w:40,h:2}),(0,d.jsx)(_t,{w:"100%",h:Math.min(28,t*.1),radius:4})]})]}),(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[(0,d.jsx)(A,{w:50,h:2}),(0,d.jsx)(_t,{w:"100%",h:Math.min(28,t*.1),radius:4})]}),(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[(0,d.jsx)(A,{w:60,h:2}),(0,d.jsx)(_t,{w:"100%",h:"100%",radius:4})]}),(0,d.jsx)(_t,{w:Math.min(120,e*.3),h:Math.min(30,t*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function Qx({type:e,width:t,height:n,text:o}){let r=Yx[e];return r?(0,d.jsx)("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:(0,d.jsx)(r,{width:t,height:n,text:o})}):(0,d.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,d.jsx)("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:e})})}function B0(e,t,n,o,r){let i=1/0,l=1/0,s=e.x,a=e.x+e.width,u=e.x+e.width/2,h=e.y,f=e.y+e.height,x=e.y+e.height/2,S=!o,b=S?[s,a,u]:[...o.left?[s]:[],...o.right?[a]:[]],N=S?[h,f,x]:[...o.top?[h]:[],...o.bottom?[f]:[]],E=[];for(let ae of t)n.has(ae.id)||E.push(ae);r&&E.push(...r);for(let ae of E){let J=ae.x,fe=ae.x+ae.width,re=ae.x+ae.width/2,ce=ae.y,pe=ae.y+ae.height,bt=ae.y+ae.height/2;for(let ze of b)for(let Ke of[J,fe,re]){let Oe=Ke-ze;Math.abs(Oe)<hc&&Math.abs(Oe)<Math.abs(i)&&(i=Oe)}for(let ze of N)for(let Ke of[ce,pe,bt]){let Oe=Ke-ze;Math.abs(Oe)<hc&&Math.abs(Oe)<Math.abs(l)&&(l=Oe)}}let y=Math.abs(i)<hc?i:0,v=Math.abs(l)<hc?l:0,p=[],C=new Set,H=s+y,V=a+y,B=u+y,q=h+v,F=f+v,K=x+v;for(let ae of E){let J=ae.x,fe=ae.x+ae.width,re=ae.x+ae.width/2,ce=ae.y,pe=ae.y+ae.height,bt=ae.y+ae.height/2;for(let ze of[J,re,fe])for(let Ke of[H,B,V])if(Math.abs(Ke-ze)<.5){let Oe=`x:${Math.round(ze)}`;C.has(Oe)||(C.add(Oe),p.push({axis:"x",pos:ze}))}for(let ze of[ce,bt,pe])for(let Ke of[q,K,F])if(Math.abs(Ke-ze)<.5){let Oe=`y:${Math.round(ze)}`;C.has(Oe)||(C.add(Oe),p.push({axis:"y",pos:ze}))}}return{dx:y,dy:v,guides:p}}function z0(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function Xx({placements:e,onChange:t,activeComponent:n,onActiveComponentChange:o,isDarkMode:r,exiting:i,onInteractionChange:l,className:s,passthrough:a,extraSnapRects:u,onSelectionChange:h,deselectSignal:f,onDragMove:x,onDragEnd:S,clearingPlacements:b,wireframe:N}){let[E,y]=(0,rt.useState)(new Set),[v,p]=(0,rt.useState)(null),[C,H]=(0,rt.useState)(null),[V,B]=(0,rt.useState)(null),[q,F]=(0,rt.useState)([]),[K,ae]=(0,rt.useState)(null),[J,fe]=(0,rt.useState)(!1),re=(0,rt.useRef)(!1),[ce,pe]=(0,rt.useState)(new Set),bt=(0,rt.useRef)(new Map),ze=(0,rt.useRef)(null),Ke=(0,rt.useRef)(null),Oe=(0,rt.useRef)(e);Oe.current=e;let ft=(0,rt.useRef)(h);ft.current=h;let Vt=(0,rt.useRef)(x);Vt.current=x;let gn=(0,rt.useRef)(S);gn.current=S;let Re=(0,rt.useRef)(f);(0,rt.useEffect)(()=>{f!==Re.current&&(Re.current=f,y(new Set))},[f]),(0,rt.useEffect)(()=>{b?.length&&(y(G=>new Set([...G].filter(he=>!b.some(Ne=>Ne.id===he)))),Ke.current=null)},[b]),(0,rt.useEffect)(()=>{let G=he=>{let Ne=he.composedPath()[0]||he.target;if(!(Ne.tagName==="INPUT"||Ne.tagName==="TEXTAREA"||Ne.isContentEditable)){if((he.key==="Backspace"||he.key==="Delete")&&E.size>0){he.preventDefault();let we=new Set(E);pe(we),y(new Set),ot(()=>{t(Oe.current.filter(Je=>!we.has(Je.id))),pe(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(he.key)&&E.size>0){he.preventDefault();let we=he.shiftKey?20:1,Je=he.key==="ArrowLeft"?-we:he.key==="ArrowRight"?we:0,Fe=he.key==="ArrowUp"?-we:he.key==="ArrowDown"?we:0;t(e.map(Qe=>E.has(Qe.id)?{...Qe,x:Math.max(0,Qe.x+Je),y:Math.max(0,Qe.y+Fe)}:Qe));return}if(he.key==="Escape"){n?o(null):E.size>0&&y(new Set);return}}};return document.addEventListener("keydown",G),()=>document.removeEventListener("keydown",G)},[E,n,e,t,o]);let Gn=(0,rt.useCallback)(G=>{if(G.button!==0||a||G.target.closest(`.${D.placement}`))return;G.preventDefault(),G.stopPropagation();let Ne=window.scrollY,Se=G.clientX,we=G.clientY;if(n){Ke.current="place",l?.(!0);let Je=!1,Fe=Se,Qe=we,Ue=L=>{Fe=L.clientX,Qe=L.clientY;let R=Math.abs(Fe-Se),z=Math.abs(Qe-we);if((R>5||z>5)&&(Je=!0),Je){let W=Math.min(Se,Fe),Z=Math.min(we,Qe),ee=Math.abs(Fe-Se),Y=Math.abs(Qe-we);p({x:W,y:Z,w:ee,h:Y}),B({x:L.clientX+12,y:L.clientY+12,text:`${Math.round(ee)} \xD7 ${Math.round(Y)}`})}},j=L=>{window.removeEventListener("mousemove",Ue),window.removeEventListener("mouseup",j),p(null),B(null),Ke.current=null,l?.(!1);let R=ne[n],z,W,Z,ee;Je?(z=Math.min(Se,Fe),W=Math.min(we,Qe)+Ne,Z=Math.max(Hi,Math.abs(Fe-Se)),ee=Math.max(Hi,Math.abs(Qe-we))):(Z=R.width,ee=R.height,z=Se-Z/2,W=we+Ne-ee/2),z=Math.max(0,z),W=Math.max(0,W);let Y={id:z0(),type:n,x:z,y:W,width:Z,height:ee,scrollY:Ne,timestamp:Date.now()},de=[...e,Y];t(de),y(new Set([Y.id])),o(null)};window.addEventListener("mousemove",Ue),window.addEventListener("mouseup",j)}else{G.shiftKey||y(new Set),Ke.current="select";let Je=!1,Fe=Ue=>{let j=Math.abs(Ue.clientX-Se),L=Math.abs(Ue.clientY-we);if((j>4||L>4)&&(Je=!0),Je){let R=Math.min(Se,Ue.clientX),z=Math.min(we,Ue.clientY);H({x:R,y:z,w:Math.abs(Ue.clientX-Se),h:Math.abs(Ue.clientY-we)})}},Qe=Ue=>{if(window.removeEventListener("mousemove",Fe),window.removeEventListener("mouseup",Qe),Ke.current=null,Je){let j=Math.min(Se,Ue.clientX),L=Math.min(we,Ue.clientY)+Ne,R=Math.abs(Ue.clientX-Se),z=Math.abs(Ue.clientY-we),W=new Set(G.shiftKey?E:new Set);for(let Z of e){let ee=Z.y-Ne;Z.x+Z.width>j&&Z.x<j+R&&Z.y+Z.height>L&&Z.y<L+z&&W.add(Z.id)}y(W)}H(null)};window.addEventListener("mousemove",Fe),window.addEventListener("mouseup",Qe)}},[n,a,e,t,E]),Lo=(0,rt.useCallback)((G,he)=>{if(G.button!==0)return;let Ne=G.target;if(Ne.closest(`.${D.handle}`)||Ne.closest(`.${D.deleteButton}`))return;G.preventDefault(),G.stopPropagation();let Se;G.shiftKey?(Se=new Set(E),Se.has(he)?Se.delete(he):Se.add(he)):E.has(he)?Se=new Set(E):Se=new Set([he]),y(Se),(Se.size!==E.size||[...Se].some(de=>!E.has(de)))&&ft.current?.(Se,G.shiftKey);let Je=window.scrollY,Fe=G.clientX,Qe=G.clientY,Ue=new Map;for(let de of e)Se.has(de.id)&&Ue.set(de.id,{x:de.x,y:de.y});Ke.current="move",l?.(!0);let j=!1,L=!1,R=e,z=0,W=0,Z=new Map;for(let de of e)Ue.has(de.id)&&Z.set(de.id,{w:de.width,h:de.height});let ee=de=>{let be=de.clientX-Fe,Te=de.clientY-Qe;if((Math.abs(be)>2||Math.abs(Te)>2)&&(j=!0),!j)return;if(de.altKey&&!L){L=!0;let ht=[];for(let dt of e)Ue.has(dt.id)&&ht.push({...dt,id:z0(),timestamp:Date.now()});R=[...e,...ht]}let it=1/0,at=1/0,Ze=-1/0,We=-1/0;for(let[ht,dt]of Ue){let le=Z.get(ht);le&&(it=Math.min(it,dt.x+be),at=Math.min(at,dt.y+Te),Ze=Math.max(Ze,dt.x+be+le.w),We=Math.max(We,dt.y+Te+le.h))}let Ie={x:it,y:at,width:Ze-it,height:We-at},{dx:yt,dy:mt,guides:ct}=B0(Ie,R,new Set(Ue.keys()),void 0,u);F(ct);let Pe=be+yt,et=Te+mt;z=Pe,W=et,t(R.map(ht=>{let dt=Ue.get(ht.id);return dt?{...ht,x:Math.max(0,dt.x+Pe),y:Math.max(0,dt.y+et)}:ht})),Vt.current?.(Pe,et)},Y=()=>{window.removeEventListener("mousemove",ee),window.removeEventListener("mouseup",Y),Ke.current=null,l?.(!1),F([]),gn.current?.(z,W,j)};window.addEventListener("mousemove",ee),window.addEventListener("mouseup",Y)},[E,e,t,l]),Vo=(0,rt.useCallback)((G,he,Ne)=>{G.preventDefault(),G.stopPropagation();let Se=e.find(W=>W.id===he);if(!Se)return;y(new Set([he])),Ke.current="resize",l?.(!0);let we=G.clientX,Je=G.clientY,Fe=Se.width,Qe=Se.height,Ue=Se.x,j=Se.y,L={left:Ne.includes("w"),right:Ne.includes("e"),top:Ne.includes("n"),bottom:Ne.includes("s")},R=W=>{let Z=W.clientX-we,ee=W.clientY-Je,Y=Fe,de=Qe,be=Ue,Te=j;Ne.includes("e")&&(Y=Math.max(Hi,Fe+Z)),Ne.includes("w")&&(Y=Math.max(Hi,Fe-Z),be=Ue+Fe-Y),Ne.includes("s")&&(de=Math.max(Hi,Qe+ee)),Ne.includes("n")&&(de=Math.max(Hi,Qe-ee),Te=j+Qe-de);let it={x:be,y:Te,width:Y,height:de},{dx:at,dy:Ze,guides:We}=B0(it,Oe.current,new Set([he]),L,u);F(We),at!==0&&(L.right?Y+=at:L.left&&(be+=at,Y-=at)),Ze!==0&&(L.bottom?de+=Ze:L.top&&(Te+=Ze,de-=Ze)),t(Oe.current.map(Ie=>Ie.id===he?{...Ie,x:be,y:Te,width:Y,height:de}:Ie)),B({x:W.clientX+12,y:W.clientY+12,text:`${Math.round(Y)} \xD7 ${Math.round(de)}`})},z=()=>{window.removeEventListener("mousemove",R),window.removeEventListener("mouseup",z),B(null),Ke.current=null,l?.(!1),F([])};window.addEventListener("mousemove",R),window.addEventListener("mouseup",z)},[e,t,l]),Xo=(0,rt.useCallback)(G=>{Ke.current=null,pe(he=>{let Ne=new Set(he);return Ne.add(G),Ne}),y(he=>{let Ne=new Set(he);return Ne.delete(G),Ne}),ot(()=>{t(Oe.current.filter(he=>he.id!==G)),pe(he=>{let Ne=new Set(he);return Ne.delete(G),Ne})},180)},[t]),No=new Set(["text","hero","button","badge","cta","toast","modal","card","navigation","tabs","input","search","breadcrumb","pricing","testimonial","alert","banner","tag","notification","stat","productCard"]),Io={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},Ro=(0,rt.useCallback)(G=>{let he=e.find(Ne=>Ne.id===G);he&&(re.current=!!he.text,ae(G),fe(!1))},[e]),Pt=(0,rt.useCallback)(()=>{K&&(fe(!0),ot(()=>{ae(null),fe(!1)},150))},[K]);(0,rt.useEffect)(()=>{i&&K&&Pt()},[i]);let qn=(0,rt.useCallback)(G=>{K&&(t(e.map(he=>he.id===K?{...he,text:G.trim()||void 0}:he)),Pt())},[K,e,t,Pt]),_o=typeof window<"u"?window.scrollY:0,kr=["nw","ne","se","sw"],Pn=N?"#f97316":"#3c82f7",$o=[{dir:"n",cls:D.edgeN,arrow:(0,gt.jsx)("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:(0,gt.jsx)("path",{d:"M4 0.5L1 4.5h6z",fill:Pn})})},{dir:"e",cls:D.edgeE,arrow:(0,gt.jsx)("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:(0,gt.jsx)("path",{d:"M5.5 4L1.5 1v6z",fill:Pn})})},{dir:"s",cls:D.edgeS,arrow:(0,gt.jsx)("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:(0,gt.jsx)("path",{d:"M4 5.5L1 1.5h6z",fill:Pn})})},{dir:"w",cls:D.edgeW,arrow:(0,gt.jsx)("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:(0,gt.jsx)("path",{d:"M0.5 4L4.5 1v6z",fill:Pn})})}];return(0,gt.jsxs)(gt.Fragment,{children:[(0,gt.jsx)("div",{ref:ze,className:`${D.overlay} ${r?"":D.light} ${n?D.placing:""} ${a?D.passthrough:""} ${i?D.overlayExiting:""} ${N?D.wireframe:""}${s?` ${s}`:""}`,"data-feedback-toolbar":!0,onMouseDown:Gn,children:e.map(G=>{let he=E.has(G.id),Ne=uo[G.type]?.label||G.type,Se=G.y-_o;return(0,gt.jsxs)("div",{"data-design-placement":G.id,className:`${D.placement} ${he?D.selected:""} ${ce.has(G.id)||b?.includes(G)?D.exiting:""}`,style:{left:G.x,top:Se,width:G.width,height:G.height,position:"fixed"},onMouseDown:we=>Lo(we,G.id),onDoubleClick:()=>Ro(G.id),children:[(0,gt.jsx)("span",{className:D.placementLabel,children:Ne}),(0,gt.jsx)("span",{className:`${D.placementAnnotation} ${G.text?D.annotationVisible:""}`,children:(G.text&&bt.current.set(G.id,G.text),G.text||bt.current.get(G.id)||"")}),(0,gt.jsx)("div",{className:D.placementContent,children:(0,gt.jsx)(Qx,{type:G.type,width:G.width,height:G.height,text:G.text})}),(0,gt.jsx)("div",{className:D.deleteButton,onMouseDown:we=>we.stopPropagation(),onClick:()=>Xo(G.id),children:"\u2715"}),kr.map(we=>(0,gt.jsx)("div",{className:`${D.handle} ${D[`handle${we.charAt(0).toUpperCase()}${we.slice(1)}`]}`,onMouseDown:Je=>Vo(Je,G.id,we)},we)),$o.map(({dir:we,cls:Je,arrow:Fe})=>(0,gt.jsx)("div",{className:`${D.edgeHandle} ${Je}`,onMouseDown:Qe=>Vo(Qe,G.id,we),children:Fe},we))]},G.id)})}),K&&(()=>{let G=e.find(j=>j.id===K);if(!G)return null;let he=G.y-_o,Ne=G.x+G.width/2,Se=he-8,we=he+G.height+8,Je=Se>200,Fe=we<window.innerHeight-100,Qe=Math.max(160,Math.min(window.innerWidth-160,Ne)),Ue;return Je?Ue={left:Qe,bottom:window.innerHeight-Se}:Fe?Ue={left:Qe,top:we}:Ue={left:Qe,top:Math.max(80,window.innerHeight/2-80)},(0,gt.jsx)(K_,{element:uo[G.type]?.label||G.type,placeholder:Io[G.type]||"Label or content text",initialValue:G.text??"",submitLabel:re.current?"Save":"Set",onSubmit:qn,onCancel:Pt,onDelete:re.current?()=>{qn("")}:void 0,isExiting:J,lightMode:!r,style:Ue})})(),v&&(0,gt.jsx)("div",{className:D.drawBox,style:{left:v.x,top:v.y,width:v.w,height:v.h},"data-feedback-toolbar":!0}),C&&(0,gt.jsx)("div",{className:D.selectBox,style:{left:C.x,top:C.y,width:C.w,height:C.h},"data-feedback-toolbar":!0}),V&&(0,gt.jsx)("div",{className:D.sizeIndicator,style:{left:V.x,top:V.y},"data-feedback-toolbar":!0,children:V.text}),q.map((G,he)=>(0,gt.jsx)("div",{className:D.guideLine,style:G.axis==="x"?{position:"fixed",left:G.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:G.pos-_o,right:0,height:1},"data-feedback-toolbar":!0},`${G.axis}-${G.pos}-${he}`))]})}function Sg(e,{keepMounted:t=!1,onExited:n}={}){let[o,r]=(0,br.useState)(t||e),i=(0,br.useRef)(null),l=(0,br.useRef)(n);return e&&!o&&r(!0),(0,br.useLayoutEffect)(()=>{l.current=n},[n]),(0,br.useLayoutEffect)(()=>{let s=i.current;if(!s||s.dataset.panelOpen==="true"===e)return;getComputedStyle(s).opacity,s.dataset.panelPresent="true",s.dataset.panelOpen=String(e);let a=!1,u=s.getAnimations?.()??[];return Promise.allSettled(u.map(h=>h.finished)).then(()=>{a||e||(delete s.dataset.panelPresent,t||r(!1),l.current?.())}),()=>{a=!0}},[e,o,t]),{ref:i,mounted:o}}function Gx(e){if(!e)return"";let t=e.scrollTop>2,n=e.scrollTop+e.clientHeight<e.scrollHeight-2;return`${t?D.fadeTop:""} ${n?D.fadeBottom:""}`}function qx({type:e}){switch(e){case"navigation":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:g,opacity:".4"}),(0,c.jsx)("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:g,opacity:".25"})]});case"header":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:g,opacity:".35"}),(0,c.jsx)("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:g,opacity:".15"})]});case"hero":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:g,opacity:".35"}),(0,c.jsx)("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:g,opacity:".15"}),(0,c.jsx)("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:g,strokeWidth:P})]});case"section":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:g,opacity:".3"}),(0,c.jsx)("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:g,opacity:".15"}),(0,c.jsx)("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:g,opacity:".15"})]});case"sidebar":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:g,opacity:".3"}),(0,c.jsx)("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:g,opacity:".15"}),(0,c.jsx)("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:g,opacity:".15"})]});case"footer":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:g,opacity:".2"})]});case"modal":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:g,opacity:".3"}),(0,c.jsx)("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:g,opacity:".15"}),(0,c.jsx)("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:g,strokeWidth:P})]});case"divider":return(0,c.jsx)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:(0,c.jsx)("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:g,strokeWidth:"0.5",opacity:".3"})});case"card":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:g,opacity:".04"}),(0,c.jsx)("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:g,opacity:".12"})]});case"text":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:g,opacity:".3"}),(0,c.jsx)("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:g,opacity:".15"}),(0,c.jsx)("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:g,opacity:".15"}),(0,c.jsx)("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:g,opacity:".12"})]});case"image":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:g,strokeWidth:P}),(0,c.jsx)("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:g,strokeWidth:".3",opacity:".25"}),(0,c.jsx)("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:g,strokeWidth:".3",opacity:".25"})]});case"video":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:g,strokeWidth:P}),(0,c.jsx)("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:g,strokeWidth:P,fill:g,opacity:".15"})]});case"table":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:g,strokeWidth:P}),(0,c.jsx)("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:g,strokeWidth:".3",opacity:".25"}),(0,c.jsx)("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:g,strokeWidth:".3",opacity:".25"}),(0,c.jsx)("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:g,strokeWidth:".3",opacity:".25"}),(0,c.jsx)("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:g,strokeWidth:".3",opacity:".25"})]});case"grid":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:g,strokeWidth:P})]});case"list":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:g,opacity:".2"}),(0,c.jsx)("circle",{cx:"3.5",cy:"8",r:"1",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:g,opacity:".2"}),(0,c.jsx)("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:g,opacity:".2"})]});case"chart":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:g,opacity:".2"}),(0,c.jsx)("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:g,opacity:".3"}),(0,c.jsx)("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:g,opacity:".2"})]});case"accordion":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:g,strokeWidth:P})]});case"carousel":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:g,strokeWidth:P}),(0,c.jsx)("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:g,strokeWidth:P,opacity:".35"}),(0,c.jsx)("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:g,strokeWidth:P,opacity:".35"}),(0,c.jsx)("circle",{cx:"8.5",cy:"14",r:".6",fill:g,opacity:".35"}),(0,c.jsx)("circle",{cx:"10",cy:"14",r:".6",fill:g,opacity:".15"}),(0,c.jsx)("circle",{cx:"11.5",cy:"14",r:".6",fill:g,opacity:".15"})]});case"button":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:g,opacity:".25"})]});case"input":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:g,opacity:".12"})]});case"search":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:g,strokeWidth:P}),(0,c.jsx)("circle",{cx:"6",cy:"8",r:"2",stroke:g,strokeWidth:P,opacity:".3"}),(0,c.jsx)("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:g,strokeWidth:P,opacity:".3"}),(0,c.jsx)("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:g,opacity:".12"})]});case"form":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:g,strokeWidth:P})]});case"tabs":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:g,strokeWidth:P})]});case"dropdown":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:g,opacity:".2"}),(0,c.jsx)("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:g,strokeWidth:P,opacity:".3"}),(0,c.jsx)("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:g,strokeWidth:P,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:g,strokeWidth:P}),(0,c.jsx)("circle",{cx:"13",cy:"8",r:"2",fill:g,opacity:".3"})]});case"avatar":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("circle",{cx:"10",cy:"8",r:"6",stroke:g,strokeWidth:P}),(0,c.jsx)("circle",{cx:"10",cy:"6.5",r:"2",stroke:g,strokeWidth:P}),(0,c.jsx)("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:g,strokeWidth:P})]});case"badge":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:g,opacity:".25"})]});case"breadcrumb":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:g,opacity:".3"}),(0,c.jsx)("path",{d:"M6.5 7l1 1-1 1",stroke:g,strokeWidth:P,opacity:".2"}),(0,c.jsx)("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:g,opacity:".2"}),(0,c.jsx)("path",{d:"M14 7l1 1-1 1",stroke:g,strokeWidth:P,opacity:".2"}),(0,c.jsx)("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:g,opacity:".15"})]});case"pagination":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:g,opacity:".15",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:g,strokeWidth:P})]});case"progress":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:g,opacity:".2"})]});case"toast":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:g,strokeWidth:P}),(0,c.jsx)("circle",{cx:"5",cy:"8",r:"1.5",stroke:g,strokeWidth:P,opacity:".3"}),(0,c.jsx)("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:g,opacity:".12"})]});case"tooltip":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("path",{d:"M9 10l1 2.5 1-2.5",stroke:g,strokeWidth:P})]});case"pricing":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:g,opacity:".15"}),(0,c.jsx)("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:g,opacity:".1"}),(0,c.jsx)("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:g,opacity:".1"}),(0,c.jsx)("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:g,opacity:".2"})]});case"testimonial":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:g,strokeWidth:P}),(0,c.jsx)("text",{x:"4",y:"5.5",fontSize:"4",fill:g,opacity:".2",fontFamily:"serif",children:"\u201C"}),(0,c.jsx)("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:g,opacity:".15"}),(0,c.jsx)("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:g,opacity:".12"}),(0,c.jsx)("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:g,strokeWidth:P,opacity:".25"}),(0,c.jsx)("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:g,opacity:".15"})]});case"cta":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:g,opacity:".3"}),(0,c.jsx)("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:g,opacity:".15"}),(0,c.jsx)("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:g,strokeWidth:P})]});case"alert":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:g,strokeWidth:P}),(0,c.jsx)("circle",{cx:"6",cy:"8",r:"2",stroke:g,strokeWidth:P,opacity:".3"}),(0,c.jsx)("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:g,strokeWidth:"0.6",opacity:".5"}),(0,c.jsx)("circle",{cx:"6",cy:"9.3",r:".3",fill:g,opacity:".5"}),(0,c.jsx)("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:g,opacity:".2"})]});case"banner":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:g,strokeWidth:P})]});case"stat":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:g,opacity:".15"}),(0,c.jsx)("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:g,opacity:".3"}),(0,c.jsx)("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:g,opacity:".12"})]});case"stepper":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("circle",{cx:"4",cy:"8",r:"2",fill:g,opacity:".2",stroke:g,strokeWidth:P}),(0,c.jsx)("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:g,strokeWidth:".4",opacity:".3"}),(0,c.jsx)("circle",{cx:"10",cy:"8",r:"2",stroke:g,strokeWidth:P}),(0,c.jsx)("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:g,strokeWidth:".4",opacity:".3"}),(0,c.jsx)("circle",{cx:"16",cy:"8",r:"2",stroke:g,strokeWidth:P})]});case"tag":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:g,strokeWidth:P,opacity:".2"}),(0,c.jsx)("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:g,strokeWidth:P,opacity:".2"})]});case"rating":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:g,opacity:".25"}),(0,c.jsx)("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:g,opacity:".25"}),(0,c.jsx)("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:g,strokeWidth:P,opacity:".25"})]});case"map":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:g,strokeWidth:P}),(0,c.jsx)("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:g,strokeWidth:".3",opacity:".15"}),(0,c.jsx)("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:g,strokeWidth:".3",opacity:".15"}),(0,c.jsx)("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:g,opacity:".15",stroke:g,strokeWidth:P})]});case"timeline":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:g,strokeWidth:".4",opacity:".25"}),(0,c.jsx)("circle",{cx:"5",cy:"4",r:"1.5",fill:g,opacity:".2",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:g,opacity:".15"}),(0,c.jsx)("circle",{cx:"5",cy:"13",r:"1.5",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:g,opacity:".15"})]});case"fileUpload":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:g,strokeWidth:P,strokeDasharray:"2 1"}),(0,c.jsx)("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:g,strokeWidth:P,opacity:".3"}),(0,c.jsx)("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:g,opacity:".15"})]});case"codeBlock":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:g,strokeWidth:P}),(0,c.jsx)("circle",{cx:"4",cy:"4",r:".6",fill:g,opacity:".3"}),(0,c.jsx)("circle",{cx:"5.5",cy:"4",r:".6",fill:g,opacity:".3"}),(0,c.jsx)("circle",{cx:"7",cy:"4",r:".6",fill:g,opacity:".3"}),(0,c.jsx)("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:g,opacity:".2"}),(0,c.jsx)("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:g,opacity:".15"}),(0,c.jsx)("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:g,opacity:".12"})]});case"calendar":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:g,strokeWidth:P}),(0,c.jsx)("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:g,strokeWidth:".4",opacity:".25"}),(0,c.jsx)("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:g,opacity:".2"}),(0,c.jsx)("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:g,opacity:".2"}),(0,c.jsx)("circle",{cx:"7",cy:"9",r:".6",fill:g,opacity:".2"}),(0,c.jsx)("circle",{cx:"10",cy:"9",r:".6",fill:g,opacity:".2"}),(0,c.jsx)("circle",{cx:"13",cy:"9",r:".6",fill:g,opacity:".3"}),(0,c.jsx)("circle",{cx:"7",cy:"12",r:".6",fill:g,opacity:".2"}),(0,c.jsx)("circle",{cx:"10",cy:"12",r:".6",fill:g,opacity:".2"})]});case"notification":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:g,strokeWidth:P}),(0,c.jsx)("circle",{cx:"5.5",cy:"8",r:"2",stroke:g,strokeWidth:P,opacity:".25"}),(0,c.jsx)("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:g,opacity:".12"}),(0,c.jsx)("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:g,opacity:".25"})]});case"productCard":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:g,opacity:".04"}),(0,c.jsx)("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:g,opacity:".15"}),(0,c.jsx)("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:g,strokeWidth:P})]});case"profile":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("circle",{cx:"10",cy:"5",r:"3",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:g,opacity:".12"})]});case"drawer":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:g,opacity:".15"}),(0,c.jsx)("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:g,opacity:".15"}),(0,c.jsx)("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:g,strokeWidth:P,opacity:".15"})]});case"popover":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:g,opacity:".15"}),(0,c.jsx)("path",{d:"M9 11l1 2.5 1-2.5",stroke:g,strokeWidth:P})]});case"logo":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:g,strokeWidth:P}),(0,c.jsx)("path",{d:"M5 9.5l2-4 2 4",stroke:g,strokeWidth:P,opacity:".3"}),(0,c.jsx)("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:g,opacity:".2"}),(0,c.jsx)("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:g,opacity:".12"})]});case"faq":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("text",{x:"2.5",y:"5.5",fontSize:"4",fill:g,opacity:".3",fontWeight:"bold",children:"?"}),(0,c.jsx)("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:g,opacity:".12"}),(0,c.jsx)("text",{x:"2.5",y:"11.5",fontSize:"4",fill:g,opacity:".3",fontWeight:"bold",children:"?"}),(0,c.jsx)("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:g,opacity:".12"})]});case"gallery":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:g,strokeWidth:P})]});case"checkbox":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:g,strokeWidth:P}),(0,c.jsx)("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:g,strokeWidth:P,opacity:".35"})]});case"radio":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("circle",{cx:"10",cy:"8",r:"4",stroke:g,strokeWidth:P}),(0,c.jsx)("circle",{cx:"10",cy:"8",r:"2",fill:g,opacity:".3"})]});case"slider":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:g,opacity:".15"}),(0,c.jsx)("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("circle",{cx:"12",cy:"8",r:"2.5",stroke:g,strokeWidth:P})]});case"datePicker":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:g,opacity:".2"}),(0,c.jsx)("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:g,opacity:".12"}),(0,c.jsx)("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:g,strokeWidth:P,strokeDasharray:"2 1",opacity:".3"}),(0,c.jsx)("circle",{cx:"6",cy:"10",r:".6",fill:g,opacity:".2"}),(0,c.jsx)("circle",{cx:"10",cy:"10",r:".6",fill:g,opacity:".3"}),(0,c.jsx)("circle",{cx:"14",cy:"10",r:".6",fill:g,opacity:".2"}),(0,c.jsx)("circle",{cx:"6",cy:"13",r:".6",fill:g,opacity:".2"}),(0,c.jsx)("circle",{cx:"10",cy:"13",r:".6",fill:g,opacity:".2"})]});case"skeleton":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:g,opacity:".08"}),(0,c.jsx)("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:g,opacity:".08"}),(0,c.jsx)("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:g,opacity:".08"})]});case"chip":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:g,opacity:".08",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:g,strokeWidth:P,opacity:".2"}),(0,c.jsx)("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:g,strokeWidth:P,opacity:".2"}),(0,c.jsx)("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:g,strokeWidth:P,opacity:".25"})]});case"icon":return(0,c.jsx)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:(0,c.jsx)("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:g,strokeWidth:P,opacity:".3"})});case"spinner":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("circle",{cx:"10",cy:"8",r:"5",stroke:g,strokeWidth:P,opacity:".12"}),(0,c.jsx)("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:g,strokeWidth:P,opacity:".35",strokeLinecap:"round"})]});case"feature":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:g,strokeWidth:P}),(0,c.jsx)("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:g,strokeWidth:P,opacity:".25"}),(0,c.jsx)("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:g,opacity:".12"}),(0,c.jsx)("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:g,opacity:".12"})]});case"team":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("circle",{cx:"5",cy:"5",r:"2.5",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:g,opacity:".2"}),(0,c.jsx)("circle",{cx:"15",cy:"5",r:"2.5",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:g,opacity:".2"}),(0,c.jsx)("circle",{cx:"10",cy:"5",r:"2.5",stroke:g,strokeWidth:P,opacity:".5"}),(0,c.jsx)("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:g,opacity:".15"}),(0,c.jsx)("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:g,opacity:".1"})]});case"login":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:g,opacity:".2"})]});case"contact":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:g,opacity:".2"}),(0,c.jsx)("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:g,strokeWidth:P}),(0,c.jsx)("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:g,opacity:".2"})]});default:return null}}function Kx({activeType:e,onSelect:t,onDragStart:n,scrollRef:o,fadeClass:r,blankCanvas:i}){return(0,c.jsx)("div",{ref:o,className:`${D.placeScroll} ${r||""}`,children:Cg.map(l=>(0,c.jsxs)("div",{className:D.paletteSection,children:[(0,c.jsx)("div",{className:D.paletteSectionTitle,children:l.section}),l.items.map(s=>(0,c.jsxs)("button",{type:"button","aria-pressed":e===s.type,className:`${D.paletteItem} ${e===s.type?D.active:""} ${i?D.wireframe:""}`,onClick:()=>t(s.type),onMouseDown:a=>{a.button===0&&n(s.type,a)},children:[(0,c.jsx)("span",{className:D.paletteItemIcon,"aria-hidden":"true",children:(0,c.jsx)(qx,{type:s.type})}),(0,c.jsx)("span",{className:D.paletteItemLabel,children:s.label})]},s.type))]},l.section))})}function Jx({value:e,suffix:t}){let[n,o]=(0,Qt.useState)(null),[r,i]=(0,Qt.useState)(t),[l,s]=(0,Qt.useState)("up"),a=(0,Qt.useRef)(e),u=(0,Qt.useRef)(t),h=(0,Qt.useRef)(),f=n!==null&&r!==t;return(0,Qt.useEffect)(()=>{if(e!==a.current){if(e===0){a.current=e,u.current=t,o(null);return}s(e>a.current?"up":"down"),o(a.current),i(u.current),a.current=e,u.current=t,clearTimeout(h.current),h.current=ot(()=>o(null),250)}else u.current=t},[e,t]),n===null?(0,c.jsxs)(c.Fragment,{children:[e,t?` ${t}`:""]}):f?(0,c.jsxs)("span",{className:D.rollingWrap,children:[(0,c.jsxs)("span",{style:{visibility:"hidden"},children:[e," ",t]}),(0,c.jsxs)("span",{className:`${D.rollingNum} ${l==="up"?D.exitUp:D.exitDown}`,children:[n," ",r]},`o${n}-${e}`),(0,c.jsxs)("span",{className:`${D.rollingNum} ${l==="up"?D.enterUp:D.enterDown}`,children:[e," ",t]},`n${e}`)]}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("span",{className:D.rollingWrap,children:[(0,c.jsx)("span",{style:{visibility:"hidden"},children:e}),(0,c.jsx)("span",{className:`${D.rollingNum} ${l==="up"?D.exitUp:D.exitDown}`,children:n},`o${n}-${e}`),(0,c.jsx)("span",{className:`${D.rollingNum} ${l==="up"?D.enterUp:D.enterDown}`,children:e},`n${e}`)]}),t?` ${t}`:""]})}function Zx({activeType:e,onSelect:t,isDarkMode:n,sectionCount:o,onDetectSections:r,visible:i,onExited:l,placementCount:s,onClearPlacements:a,onDragStart:u,blankCanvas:h,onBlankCanvasChange:f,wireframePurpose:x,onWireframePurposeChange:S,Tooltip:b}){let{ref:N,mounted:E}=Sg(i,{onExited:l}),[y,v]=(0,Qt.useState)(!1),[p,C]=(0,Qt.useState)(!0),H=(0,Qt.useRef)(0),V=(0,Qt.useRef)(""),B=(0,Qt.useRef)(null),[q,F]=(0,Qt.useState)(""),K=s>0||o>0,ae=s+o;if(ae>0&&(H.current=ae,V.current=h?ae===1?"Component":"Components":ae===1?"Change":"Changes"),(0,Qt.useEffect)(()=>{if(K)y?C(!1):(C(!0),v(!0),Sc(()=>{Sc(()=>{C(!1)})}));else{C(!0);let fe=ot(()=>v(!1),300);return()=>clearTimeout(fe)}},[K]),(0,Qt.useEffect)(()=>{if(!i)return;let fe=B.current;if(!fe)return;let re=()=>F(Gx(fe));fe.addEventListener("scroll",re,{passive:!0});let ce=new ResizeObserver(re);return ce.observe(fe),()=>{fe.removeEventListener("scroll",re),ce.disconnect()}},[i]),!E)return null;let J=[];return s>0&&J.push("placed"),o>0&&J.push("captured"),(0,c.jsxs)("div",{className:`${D.palette} ${n?"":D.light}`,ref:fe=>{N.current=fe,fe?.toggleAttribute("inert",!i)},"aria-hidden":!i,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:fe=>fe.stopPropagation(),onMouseDown:fe=>fe.stopPropagation(),children:[(0,c.jsxs)("div",{className:D.paletteHeader,children:[(0,c.jsx)("div",{className:D.paletteHeaderTitle,children:"Layout Mode"}),(0,c.jsxs)("div",{className:D.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",(0,c.jsx)("a",{href:"https://agentation.com/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),(0,c.jsxs)("button",{type:"button","aria-pressed":h,className:`${D.canvasToggle} ${h?D.active:""}`,onClick:()=>f(!h),children:[(0,c.jsx)("span",{className:D.canvasToggleIcon,"aria-hidden":"true",children:(0,c.jsxs)("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),(0,c.jsx)("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,c.jsx)("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,c.jsx)("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,c.jsx)("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),(0,c.jsx)("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),(0,c.jsx)("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),(0,c.jsx)("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,c.jsx)("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,c.jsx)("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),(0,c.jsx)("span",{className:D.canvasToggleLabel,children:"Wireframe New Page"})]}),(0,c.jsx)("div",{className:`${D.wireframePurposeWrap} ${h?"":D.collapsed}`,"aria-hidden":!h,ref:fe=>{fe?.toggleAttribute("inert",!h)},children:(0,c.jsx)("div",{className:D.wireframePurposeInner,children:(0,c.jsx)("textarea",{className:D.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:x,onChange:fe=>S(fe.target.value),rows:2})})}),(0,c.jsx)(Kx,{activeType:e,onSelect:t,onDragStart:u,scrollRef:B,fadeClass:q,blankCanvas:h}),y&&(0,c.jsx)("div",{className:`${D.paletteFooterWrap} ${p?D.footerHidden:""}`,children:(0,c.jsx)("div",{className:D.paletteFooterInner,children:(0,c.jsx)("div",{className:D.paletteFooterInnerContent,children:(0,c.jsxs)("div",{className:D.paletteFooter,children:[(0,c.jsx)("span",{className:D.paletteFooterCount,children:(0,c.jsx)(Jx,{value:H.current,suffix:V.current})}),(0,c.jsx)("button",{className:D.paletteFooterClear,onClick:a,children:"Clear"})]})})})})]})}function Mg(e){let t=e;for(;t&&t!==document.body&&t!==document.documentElement;){let n=window.getComputedStyle(t).position;if(n==="fixed"||n==="sticky")return!0;t=t.parentElement}return!1}function ni(e){let t=e.tagName.toLowerCase();if(["nav","header","footer","main"].includes(t)&&document.querySelectorAll(t).length===1)return t;if(e.id)return`#${CSS.escape(e.id)}`;if(e.className&&typeof e.className=="string"){let r=e.className.split(/\s+/).filter(i=>i.length>0).find(i=>i.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(i)&&!/^[a-z]{1,2}$/.test(i));if(r){let i=`${t}.${CSS.escape(r)}`;if(document.querySelectorAll(i).length===1)return i}}let n=e.parentElement;if(n){let r=Array.from(n.children).indexOf(e)+1;return`${n===document.body?"body":ni(n)} > ${t}:nth-child(${r})`}return t}function Mc(e){let t=e.tagName.toLowerCase(),n=e.getAttribute("aria-label");if(n)return n;let o=e.getAttribute("role");if(o&&F_[o])return F_[o];if(O0[t])return O0[t];let r=e.querySelector("h1, h2, h3, h4, h5, h6");if(r){let l=r.textContent?.trim();if(l&&l.length<=50)return l;if(l)return l.slice(0,47)+"..."}let{name:i}=Yi(e);return i.charAt(0).toUpperCase()+i.slice(1)}function Eg(e){let t=e.className;return typeof t!="string"||!t?null:t.split(/\s+/).map(o=>o.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(o=>o.length>2&&!/^[a-z]{1,2}$/.test(o))||null}function Lg(e){let t=e.textContent?.trim();if(!t)return null;let n=t.replace(/\s+/g," ");return n.length<=30?n:n.slice(0,30)+"\u2026"}function ov(){let e=document.querySelector("main")||document.body,t=Array.from(e.children),n=t;e!==document.body&&t.length<3&&(n=Array.from(document.body.children));let o=[];return n.forEach((r,i)=>{if(!(r instanceof HTMLElement))return;let l=r.tagName.toLowerCase();if(tv.has(l)||r.hasAttribute("data-feedback-toolbar")||r.closest("[data-feedback-toolbar]"))return;let s=window.getComputedStyle(r);if(s.display==="none"||s.visibility==="hidden")return;let a=r.getBoundingClientRect();if(a.height<nv)return;let u=ev.has(l),h=r.getAttribute("role")&&F_[r.getAttribute("role")],f=l==="div"&&a.height>=60;if(!u&&!h&&!f)return;let x=window.scrollY,S=Mg(r),b={x:a.x,y:S?a.y:a.y+x,width:a.width,height:a.height};o.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Mc(r),tagName:l,selector:ni(r),role:r.getAttribute("role"),className:Eg(r),textSnippet:Lg(r),originalRect:b,currentRect:{...b},originalIndex:i,isFixed:S})}),o}function rv(e){let t=window.scrollY,n=e.getBoundingClientRect(),o=Mg(e),r={x:n.x,y:o?n.y:n.y+t,width:n.width,height:n.height},i=e.parentElement,l=0;return i&&(l=Array.from(i.children).indexOf(e)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Mc(e),tagName:e.tagName.toLowerCase(),selector:ni(e),role:e.getAttribute("role"),className:Eg(e),textSnippet:Lg(e),originalRect:r,currentRect:{...r},originalIndex:l,isFixed:o}}function j0(e,t,n,o){let r=1/0,i=1/0,l=e.x,s=e.x+e.width,a=e.x+e.width/2,u=e.y,h=e.y+e.height,f=e.y+e.height/2,x=[];for(let B of t)n.has(B.id)||x.push(B.currentRect);o&&x.push(...o);for(let B of x){let q=B.x,F=B.x+B.width,K=B.x+B.width/2,ae=B.y,J=B.y+B.height,fe=B.y+B.height/2;for(let re of[l,s,a])for(let ce of[q,F,K]){let pe=ce-re;Math.abs(pe)<mc&&Math.abs(pe)<Math.abs(r)&&(r=pe)}for(let re of[u,h,f])for(let ce of[ae,J,fe]){let pe=ce-re;Math.abs(pe)<mc&&Math.abs(pe)<Math.abs(i)&&(i=pe)}}let S=Math.abs(r)<mc?r:0,b=Math.abs(i)<mc?i:0,N=[],E=new Set,y=l+S,v=s+S,p=a+S,C=u+b,H=h+b,V=f+b;for(let B of x){let q=B.x,F=B.x+B.width,K=B.x+B.width/2,ae=B.y,J=B.y+B.height,fe=B.y+B.height/2;for(let re of[q,K,F])for(let ce of[y,p,v])if(Math.abs(ce-re)<.5){let pe=`x:${Math.round(re)}`;E.has(pe)||(E.add(pe),N.push({axis:"x",pos:re}))}for(let re of[ae,fe,J])for(let ce of[C,V,H])if(Math.abs(ce-re)<.5){let pe=`y:${Math.round(re)}`;E.has(pe)||(E.add(pe),N.push({axis:"y",pos:re}))}}return{dx:S,dy:b,guides:N}}function H0(e){let t=e;for(;t&&t!==document.body&&t!==document.documentElement;){if(t.closest("[data-feedback-toolbar]"))return null;if(iv.has(t.tagName.toLowerCase())){t=t.parentElement;continue}let n=t.getBoundingClientRect();if(n.width>=W0&&n.height>=W0)return t;t=t.parentElement}return null}function lv({rearrangeState:e,onChange:t,isDarkMode:n,exiting:o,className:r,blankCanvas:i,extraSnapRects:l,onSelectionChange:s,deselectSignal:a,onDragMove:u,onDragEnd:h,clearing:f}){let{sections:x}=e,S=(0,Ce.useRef)(e);S.current=e;let[b,N]=(0,Ce.useState)(new Set);(0,Ce.useEffect)(()=>{f&&N(new Set)},[f]);let E=(0,Ce.useRef)(a);(0,Ce.useEffect)(()=>{a!==E.current&&(E.current=a,N(new Set))},[a]);let[y,v]=(0,Ce.useState)(null),[p,C]=(0,Ce.useState)(!1),H=(0,Ce.useRef)(!1),V=(0,Ce.useCallback)(L=>{let R=x.find(z=>z.id===L);R&&(H.current=!!R.note,v(L),C(!1))},[x]),B=(0,Ce.useCallback)(()=>{y&&(C(!0),ot(()=>{v(null),C(!1)},150))},[y]),q=(0,Ce.useCallback)(L=>{y&&(t({...e,sections:x.map(R=>R.id===y?{...R,note:L.trim()||void 0}:R)}),B())},[y,x,e,t,B]);(0,Ce.useEffect)(()=>{o&&y&&B()},[o]);let[F,K]=(0,Ce.useState)(new Set),ae=(0,Ce.useRef)(new Map),[J,fe]=(0,Ce.useState)(null),[re,ce]=(0,Ce.useState)(null),[pe,bt]=(0,Ce.useState)([]),[ze,Ke]=(0,Ce.useState)(0),Oe=(0,Ce.useRef)(null),ft=(0,Ce.useRef)(new Set),Vt=(0,Ce.useRef)(new Map),[gn,Re]=(0,Ce.useState)(new Map),[Gn,Lo]=(0,Ce.useState)(new Map),Vo=(0,Ce.useRef)(new Set),Xo=(0,Ce.useRef)(new Map),No=(0,Ce.useRef)(s);No.current=s;let Io=(0,Ce.useRef)(u);Io.current=u;let Ro=(0,Ce.useRef)(h);Ro.current=h,(0,Ce.useEffect)(()=>{i&&N(new Set)},[i]);let[Pt,qn]=(0,Ce.useState)(()=>!e.sections.some(L=>{let R=L.originalRect,z=L.currentRect;return Math.abs(R.x-z.x)>1||Math.abs(R.y-z.y)>1||Math.abs(R.width-z.width)>1||Math.abs(R.height-z.height)>1}));(0,Ce.useEffect)(()=>{if(!Pt){let L=ot(()=>qn(!0),380);return()=>clearTimeout(L)}},[]);let _o=(0,Ce.useRef)(new Set);(0,Ce.useEffect)(()=>{_o.current=new Set(x.map(L=>L.selector))},[x]),(0,Ce.useEffect)(()=>{let L=()=>Ke(window.scrollY);return L(),window.addEventListener("scroll",L,{passive:!0}),window.addEventListener("resize",L,{passive:!0}),()=>{window.removeEventListener("scroll",L),window.removeEventListener("resize",L)}},[]),(0,Ce.useEffect)(()=>{let L=R=>{if(Oe.current){fe(null);return}let z=document.elementFromPoint(R.clientX,R.clientY);if(!z){fe(null);return}if(z.closest("[data-feedback-toolbar]")){fe(null);return}if(z.closest("[data-design-placement]")){fe(null);return}if(z.closest("[data-annotation-popup]")){fe(null);return}let W=H0(z);if(!W){fe(null);return}for(let ee of _o.current)try{let Y=document.querySelector(ee);if(Y&&(Y===W||W.contains(Y))){fe(null);return}}catch{}let Z=W.getBoundingClientRect();fe({x:Z.x,y:Z.y,w:Z.width,h:Z.height})};return document.addEventListener("mousemove",L,{passive:!0}),()=>document.removeEventListener("mousemove",L)},[x]),(0,Ce.useEffect)(()=>{let L=document.body.style.userSelect;return document.body.style.webkitUserSelect="none",document.body.style.userSelect="none",()=>{document.body.style.webkitUserSelect=L,document.body.style.userSelect=L}},[]),(0,Ce.useEffect)(()=>{let L=R=>{if(Oe.current||R.button!==0)return;let z=R.composedPath()[0]??R.target;if(!z||z.closest("[data-feedback-toolbar]")||z.closest("[data-design-placement]")||z.closest("[data-annotation-popup]"))return;let W=H0(z),Z=!1;if(W)for(let Y of _o.current)try{let de=document.querySelector(Y);if(de&&(de===W||W.contains(de))){Z=!0;break}}catch{}let ee=!!(R.shiftKey||R.metaKey||R.ctrlKey);if(W&&!Z){R.preventDefault(),R.stopPropagation();let Y=rv(W),de=[...x,Y],be=[...e.originalOrder,Y.id];t({...e,sections:de,originalOrder:be});let Te=new Set([Y.id]);N(Te),No.current?.(Te,ee),fe(null);let it=R.clientX,at=R.clientY,Ze={x:Y.currentRect.x,y:Y.currentRect.y},We=Y.originalRect,Ie=!1,yt=0,mt=0;Oe.current="move";let ct=et=>{let ht=et.clientX-it,dt=et.clientY-at;if(!Ie&&(Math.abs(ht)>2||Math.abs(dt)>2)&&(Ie=!0),!Ie)return;let le={x:Ze.x+ht,y:Ze.y+dt,width:Y.currentRect.width,height:Y.currentRect.height},Mn=j0(le,de,new Set([Y.id]),l);bt(Mn.guides);let yn=ht+Mn.dx,en=dt+Mn.dy;yt=yn,mt=en;let fo=j().querySelector(`[data-rearrange-section="${Y.id}"]`);fo&&(fo.style.transform=`translate(${yn}px, ${en}px)`),Re(new Map([[Y.id,{x:Ze.x+yn,y:Ze.y+en,width:Y.currentRect.width,height:Y.currentRect.height}]])),Io.current?.(yn,en)},Pe=()=>{window.removeEventListener("mousemove",ct),window.removeEventListener("mouseup",Pe),Oe.current=null,bt([]),Re(new Map);let et=j().querySelector(`[data-rearrange-section="${Y.id}"]`);et&&(et.style.transform=""),Ie&&t({...e,sections:de.map(ht=>ht.id===Y.id?{...ht,currentRect:{...ht.currentRect,x:Math.max(0,Ze.x+yt),y:Math.max(0,Ze.y+mt)}}:ht),originalOrder:be}),Ro.current?.(yt,mt,Ie)};window.addEventListener("mousemove",ct),window.addEventListener("mouseup",Pe)}else if(Z&&W){R.preventDefault();for(let Y of x)try{let de=document.querySelector(Y.selector);if(de&&de===W){let be=new Set([Y.id]);N(be),No.current?.(be,ee);return}}catch{}ee||(N(new Set),No.current?.(new Set,!1))}else ee||(N(new Set),No.current?.(new Set,!1))};return document.addEventListener("mousedown",L,!0),()=>document.removeEventListener("mousedown",L,!0)},[x,e,t]),(0,Ce.useEffect)(()=>{let L=R=>{let z=R.composedPath()[0]||R.target;if(!(z.tagName==="INPUT"||z.tagName==="TEXTAREA"||z.isContentEditable)){if((R.key==="Backspace"||R.key==="Delete")&&b.size>0){R.preventDefault();let W=new Set(b);K(Z=>{let ee=new Set(Z);for(let Y of W)ee.add(Y);return ee}),N(new Set),ot(()=>{let Z=S.current;t({...Z,sections:Z.sections.filter(ee=>!W.has(ee.id)),originalOrder:Z.originalOrder.filter(ee=>!W.has(ee))}),K(ee=>{let Y=new Set(ee);for(let de of W)Y.delete(de);return Y})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(R.key)&&b.size>0){R.preventDefault();let W=R.shiftKey?20:1,Z=R.key==="ArrowLeft"?-W:R.key==="ArrowRight"?W:0,ee=R.key==="ArrowUp"?-W:R.key==="ArrowDown"?W:0;t({...e,sections:x.map(Y=>b.has(Y.id)?{...Y,currentRect:{...Y.currentRect,x:Math.max(0,Y.currentRect.x+Z),y:Math.max(0,Y.currentRect.y+ee)}}:Y)});return}R.key==="Escape"&&b.size>0&&N(new Set)}};return document.addEventListener("keydown",L),()=>document.removeEventListener("keydown",L)},[b,x,e,t]);let kr=(0,Ce.useCallback)((L,R)=>{if(L.button!==0)return;let z=L.target;if(z.closest(`.${D.handle}`)||z.closest(`.${D.deleteButton}`))return;L.preventDefault(),L.stopPropagation();let W;L.shiftKey||L.metaKey||L.ctrlKey?(W=new Set(b),W.has(R)?W.delete(R):W.add(R)):b.has(R)?W=new Set(b):W=new Set([R]),N(W),(W.size!==b.size||[...W].some(Ie=>!b.has(Ie)))&&No.current?.(W,!!(L.shiftKey||L.metaKey||L.ctrlKey));let ee=L.clientX,Y=L.clientY,de=new Map;for(let Ie of x)W.has(Ie.id)&&de.set(Ie.id,{x:Ie.currentRect.x,y:Ie.currentRect.y});Oe.current="move";let be=!1,Te=0,it=0,at=new Map;for(let Ie of x)if(W.has(Ie.id)){let yt=j().querySelector(`[data-rearrange-section="${Ie.id}"]`);at.set(Ie.id,{outlineEl:yt,curW:Ie.currentRect.width,curH:Ie.currentRect.height})}let Ze=Ie=>{let yt=Ie.clientX-ee,mt=Ie.clientY-Y;if(yt===0&&mt===0)return;be=!0;let ct=1/0,Pe=1/0,et=-1/0,ht=-1/0;for(let[en,{curW:fo,curH:To}]of at){let Kn=de.get(en);if(!Kn)continue;let Dn=Kn.x+yt,Ji=Kn.y+mt;ct=Math.min(ct,Dn),Pe=Math.min(Pe,Ji),et=Math.max(et,Dn+fo),ht=Math.max(ht,Ji+To)}let dt=j0({x:ct,y:Pe,width:et-ct,height:ht-Pe},x,W,l),le=yt+dt.dx,Mn=mt+dt.dy;Te=le,it=Mn,bt(dt.guides);for(let[,{outlineEl:en}]of at)en&&(en.style.transform=`translate(${le}px, ${Mn}px)`);let yn=new Map;for(let[en,{curW:fo,curH:To}]of at){let Kn=de.get(en);if(Kn){let Dn={x:Math.max(0,Kn.x+le),y:Math.max(0,Kn.y+Mn),width:fo,height:To};yn.set(en,Dn)}}Re(yn),Io.current?.(le,Mn)},We=Ie=>{window.removeEventListener("mousemove",Ze),window.removeEventListener("mouseup",We),Oe.current=null,bt([]),Re(new Map);for(let[,{outlineEl:yt}]of at)yt&&(yt.style.transform="");if(be){let yt=Ie.clientX-ee,mt=Ie.clientY-Y;if(Math.abs(yt)<5&&Math.abs(mt)<5)t({...e,sections:x.map(ct=>{let Pe=de.get(ct.id);return Pe?{...ct,currentRect:{...ct.currentRect,x:Pe.x,y:Pe.y}}:ct})});else{t({...e,sections:x.map(ct=>{let Pe=de.get(ct.id);return Pe?{...ct,currentRect:{...ct.currentRect,x:Math.max(0,Pe.x+Te),y:Math.max(0,Pe.y+it)}}:ct})}),Ro.current?.(Te,it,!0);return}}Ro.current?.(0,0,!1)};window.addEventListener("mousemove",Ze),window.addEventListener("mouseup",We)},[b,x,e,t]),Pn=(0,Ce.useCallback)((L,R,z)=>{L.preventDefault(),L.stopPropagation();let W=x.find(We=>We.id===R);if(!W)return;N(new Set([R])),Oe.current="resize";let Z=L.clientX,ee=L.clientY,Y={...W.currentRect},de=W.originalRect,be=Y.width/Y.height,Te={...Y},it=j().querySelector(`[data-rearrange-section="${R}"]`),at=We=>{let Ie=We.clientX-Z,yt=We.clientY-ee,mt=Y.x,ct=Y.y,Pe=Y.width,et=Y.height;if(z.includes("e")&&(Pe=Math.max(pc,Y.width+Ie)),z.includes("w")&&(Pe=Math.max(pc,Y.width-Ie),mt=Y.x+Y.width-Pe),z.includes("s")&&(et=Math.max(pc,Y.height+yt)),z.includes("n")&&(et=Math.max(pc,Y.height-yt),ct=Y.y+Y.height-et),We.shiftKey)if(z.length===2){let dt=Math.abs(Pe-Y.width),le=Math.abs(et-Y.height);dt>le?et=Pe/be:Pe=et*be,z.includes("w")&&(mt=Y.x+Y.width-Pe),z.includes("n")&&(ct=Y.y+Y.height-et)}else z==="e"||z==="w"?et=Pe/be:Pe=et*be,z==="w"&&(mt=Y.x+Y.width-Pe),z==="n"&&(ct=Y.y+Y.height-et);Te={x:mt,y:ct,width:Pe,height:et},it&&(it.style.left=`${mt}px`,it.style.top=`${ct-ze}px`,it.style.width=`${Pe}px`,it.style.height=`${et}px`),ce({x:We.clientX+12,y:We.clientY+12,text:`${Math.round(Pe)} \xD7 ${Math.round(et)}`}),Re(new Map([[R,Te]]))},Ze=()=>{window.removeEventListener("mousemove",at),window.removeEventListener("mouseup",Ze),ce(null),Oe.current=null,Re(new Map),t({...e,sections:x.map(We=>We.id===R?{...We,currentRect:Te}:We)})};window.addEventListener("mousemove",at),window.addEventListener("mouseup",Ze)},[x,e,t,ze]),$o=(0,Ce.useCallback)(L=>{K(R=>{let z=new Set(R);return z.add(L),z}),N(R=>{let z=new Set(R);return z.delete(L),z}),ot(()=>{let R=S.current;t({...R,sections:R.sections.filter(z=>z.id!==L),originalOrder:R.originalOrder.filter(z=>z!==L)}),K(z=>{let W=new Set(z);return W.delete(L),W})},180)},[t]),G=L=>{let R=L.originalRect,z=L.currentRect;return Math.abs(R.x-z.x)>1||Math.abs(R.y-z.y)>1||Math.abs(R.width-z.width)>1||Math.abs(R.height-z.height)>1},he=L=>{let R=L.originalRect,z=L.currentRect;return Math.abs(R.x-z.x)>1||Math.abs(R.y-z.y)>1},Ne=L=>{let R=L.originalRect,z=L.currentRect;return Math.abs(R.width-z.width)>1||Math.abs(R.height-z.height)>1};for(let L of x)Vt.current.has(L.id)||(he(L)?Vt.current.set(L.id,"move"):Ne(L)&&Vt.current.set(L.id,"resize"));for(let L of Vt.current.keys())x.some(R=>R.id===L)||Vt.current.delete(L);let Se=x.filter(L=>{try{if(F.has(L.id)||b.has(L.id))return!0;let R=document.querySelector(L.selector);if(!R)return!1;let z=R.getBoundingClientRect(),W=L.originalRect;return Math.abs(z.width-W.width)+Math.abs(z.height-W.height)<200}catch{return!1}}),we=Se.filter(L=>G(L)),Je=Se.filter(L=>!G(L)),Fe=new Set(we.map(L=>L.id));for(let L of ft.current)Fe.has(L)||ft.current.delete(L);let Qe=[...Fe].sort().join(",");for(let L of we)Xo.current.set(L.id,{currentRect:L.currentRect,originalRect:L.originalRect,isFixed:L.isFixed});(0,Ce.useEffect)(()=>{let L=Vo.current;Vo.current=Fe;let R=new Map;for(let z of L)if(!Fe.has(z)){if(!x.some(Z=>Z.id===z))continue;let W=Xo.current.get(z);W&&(R.set(z,{orig:W.originalRect,target:W.currentRect,isFixed:W.isFixed}),Xo.current.delete(z))}if(R.size>0){Lo(W=>{let Z=new Map(W);for(let[ee,Y]of R)Z.set(ee,Y);return Z});let z=ot(()=>{Lo(W=>{let Z=new Map(W);for(let ee of R.keys())Z.delete(ee);return Z})},250);return()=>clearTimeout(z)}},[Qe,x]);let Ue=(0,Ce.useRef)(null),j=()=>Ue.current?.getRootNode()??document;return(0,Ye.jsxs)(Ye.Fragment,{children:[(0,Ye.jsxs)("div",{ref:Ue,className:`${D.rearrangeOverlay} ${n?"":D.light} ${o?D.overlayExiting:""}${r?` ${r}`:""}`,"data-feedback-toolbar":!0,children:[J&&(0,Ye.jsx)("div",{className:D.hoverHighlight,style:{left:J.x,top:J.y,width:J.w,height:J.h}}),Je.map(L=>{let R=L.currentRect,z=L.isFixed?R.y:R.y-ze,W=A0,Z=b.has(L.id);return(0,Ye.jsxs)("div",{"data-rearrange-section":L.id,className:`${D.sectionOutline} ${Z?D.selected:""} ${f||o||F.has(L.id)?D.exiting:""}`,style:{left:R.x,top:z,width:R.width,height:R.height,borderColor:W.border,backgroundColor:W.bg,...Pt?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:ee=>kr(ee,L.id),onDoubleClick:()=>V(L.id),children:[(0,Ye.jsx)("span",{className:D.sectionLabel,style:{backgroundColor:W.pill},children:L.label}),(0,Ye.jsx)("span",{className:`${D.sectionAnnotation} ${L.note?D.annotationVisible:""}`,children:(L.note&&ae.current.set(L.id,L.note),L.note||ae.current.get(L.id)||"")}),(0,Ye.jsxs)("span",{className:D.sectionDimensions,children:[Math.round(R.width)," \xD7 ",Math.round(R.height)]}),(0,Ye.jsx)("div",{className:D.deleteButton,onMouseDown:ee=>ee.stopPropagation(),onClick:()=>$o(L.id),children:"\u2715"}),F0.map(ee=>(0,Ye.jsx)("div",{className:`${D.handle} ${D[`handle${ee.charAt(0).toUpperCase()}${ee.slice(1)}`]}`,onMouseDown:Y=>Pn(Y,L.id,ee)},ee))]},L.id)}),we.map(L=>{let R=L.currentRect,z=L.isFixed?R.y:R.y-ze,W=b.has(L.id),Z=he(L),ee=Ne(L);if(i&&!W)return null;let de=!ft.current.has(L.id);return de&&ft.current.add(L.id),(0,Ye.jsxs)("div",{"data-rearrange-section":L.id,className:`${D.ghostOutline} ${W?D.selected:""} ${f||o||F.has(L.id)?D.exiting:""}`,style:{left:R.x,top:z,width:R.width,height:R.height,...Pt?{}:{opacity:0,animation:"none",transition:"none"},...de?{}:{animation:"none"}},onMouseDown:be=>kr(be,L.id),onDoubleClick:()=>V(L.id),children:[(0,Ye.jsx)("span",{className:D.sectionLabel,style:{backgroundColor:A0.pill},children:L.label}),(0,Ye.jsx)("span",{className:`${D.sectionAnnotation} ${L.note?D.annotationVisible:""}`,children:(L.note&&ae.current.set(L.id,L.note),L.note||ae.current.get(L.id)||"")}),(0,Ye.jsxs)("span",{className:D.sectionDimensions,children:[Math.round(R.width)," \xD7 ",Math.round(R.height)]}),(0,Ye.jsx)("div",{className:D.deleteButton,onMouseDown:be=>be.stopPropagation(),onClick:()=>$o(L.id),children:"\u2715"}),F0.map(be=>(0,Ye.jsx)("div",{className:`${D.handle} ${D[`handle${be.charAt(0).toUpperCase()}${be.slice(1)}`]}`,onMouseDown:Te=>Pn(Te,L.id,be)},be)),(0,Ye.jsx)("span",{className:D.ghostBadge,children:(()=>{let be=Vt.current.get(L.id);if(Z&&ee){let[Te,it]=be==="resize"?["Resize","Move"]:["Move","Resize"];return(0,Ye.jsxs)(Ye.Fragment,{children:["Suggested ",Te," ",(0,Ye.jsxs)("span",{className:D.ghostBadgeExtra,children:["& ",it]})]})}return`Suggested ${ee?"Resize":"Move"}`})()})]},L.id)})]}),!i&&(()=>{let L=[];for(let R of we){let z=gn.get(R.id);L.push({id:R.id,orig:R.originalRect,target:z||R.currentRect,isFixed:R.isFixed,isSelected:b.has(R.id),isExiting:F.has(R.id)})}for(let[R,z]of gn)if(!L.some(W=>W.id===R)){let W=x.find(Z=>Z.id===R);W&&L.push({id:R,orig:W.originalRect,target:z,isFixed:W.isFixed,isSelected:b.has(R)})}for(let[R,z]of Gn)L.some(W=>W.id===R)||L.push({id:R,orig:z.orig,target:z.target,isFixed:z.isFixed,isSelected:!1,isExiting:!0});return L.length===0?null:(0,Ye.jsxs)("svg",{className:`${D.connectorSvg} ${f||o?D.connectorExiting:""}`,children:[L.map(({id:R,orig:z,target:W,isFixed:Z,isSelected:ee,isExiting:Y})=>{let de=z.x+z.width/2,be=(Z?z.y:z.y-ze)+z.height/2,Te=W.x+W.width/2,it=(Z?W.y:W.y-ze)+W.height/2,at=Te-de,Ze=it-be,We=Math.sqrt(at*at+Ze*Ze);if(We<2)return null;let Ie=Math.min(1,We/40),yt=Math.min(We*.3,60),mt=We>0?-Ze/We:0,ct=We>0?at/We:0,Pe=(de+Te)/2+mt*yt,et=(be+it)/2+ct*yt,ht=gn.has(R),dt=ht||ee?1:.4,le=ht||ee?1:.5;return(0,Ye.jsxs)("g",{className:Y?D.connectorExiting:"",children:[(0,Ye.jsx)("path",{className:D.connectorLine,d:`M ${de} ${be} Q ${Pe} ${et} ${Te} ${it}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:dt*Ie}),(0,Ye.jsx)("circle",{className:D.connectorDot,cx:de,cy:be,r:4*Ie,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:le*Ie,filter:"url(#connDotShadow)"}),(0,Ye.jsx)("circle",{className:D.connectorDot,cx:Te,cy:it,r:4*Ie,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:le*Ie,filter:"url(#connDotShadow)"})]},`conn-${R}`)}),(0,Ye.jsx)("defs",{children:(0,Ye.jsx)("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:(0,Ye.jsx)("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),y&&(()=>{let L=x.find(it=>it.id===y);if(!L)return null;let R=L.currentRect,z=L.isFixed?R.y:R.y-ze,W=R.x+R.width/2,Z=z-8,ee=z+R.height+8,Y=Z>200,de=ee<window.innerHeight-100,be=Math.max(160,Math.min(window.innerWidth-160,W)),Te;return Y?Te={left:be,bottom:window.innerHeight-Z}:de?Te={left:be,top:ee}:Te={left:be,top:Math.max(80,window.innerHeight/2-80)},(0,Ye.jsx)(K_,{element:L.label,placeholder:"Add a note about this section",initialValue:L.note??"",submitLabel:H.current?"Save":"Set",onSubmit:q,onCancel:B,onDelete:H.current?()=>{q("")}:void 0,isExiting:p,lightMode:!n,style:Te})})(),re&&(0,Ye.jsx)("div",{className:D.sizeIndicator,style:{left:re.x,top:re.y},"data-feedback-toolbar":!0,children:re.text}),pe.map((L,R)=>(0,Ye.jsx)("div",{className:D.guideLine,style:L.axis==="x"?{position:"fixed",left:L.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:L.pos-ze,width:"100vw",height:1}},`${L.axis}-${L.pos}-${R}`))]})}function sv(){let e=document.querySelector("main")||document.body,t=[],n=Array.from(e.children),o=e!==document.body&&n.length<3?Array.from(document.body.children):n;for(let r of o){if(!(r instanceof HTMLElement)||W_.has(r.tagName.toLowerCase())||r.hasAttribute("data-feedback-toolbar"))continue;let i=window.getComputedStyle(r);if(i.display==="none"||i.visibility==="hidden")continue;let l=r.getBoundingClientRect();if(!(l.height<10||l.width<10)){t.push({label:Mc(r),selector:ni(r),top:l.top,bottom:l.bottom,left:l.left,right:l.right,area:l.width*l.height});for(let s of Array.from(r.children)){if(!(s instanceof HTMLElement)||W_.has(s.tagName.toLowerCase())||s.hasAttribute("data-feedback-toolbar"))continue;let a=window.getComputedStyle(s);if(a.display==="none"||a.visibility==="hidden")continue;let u=s.getBoundingClientRect();u.height<10||u.width<10||t.push({label:Mc(s),selector:ni(s),top:u.top,bottom:u.bottom,left:u.left,right:u.right,area:u.width*u.height})}}}return t}function av(e){let t=window.scrollY;return e.map(({label:n,selector:o,rect:r})=>{let i=r.y-t;return{label:n,selector:o,top:i,bottom:i+r.height,left:r.x,right:r.x+r.width,area:r.width*r.height}})}function cv(e){let t=window.scrollY,n=e.y-t,o=e.x;return{top:n,bottom:n+e.height,left:o,right:o+e.width,area:e.width*e.height}}function j_(e,t){let n=t?av(t):sv(),o=cv(e),r=null,i=null,l=null,s=null,a=null;for(let b of n){if(Math.abs(b.left-o.left)<2&&Math.abs(b.top-o.top)<2&&Math.abs(b.right-b.left-e.width)<2&&Math.abs(b.bottom-b.top-e.height)<2)continue;b.left<=o.left+2&&b.right>=o.right-2&&b.top<=o.top+2&&b.bottom>=o.bottom-2&&b.area>o.area*1.5&&(!a||b.area<a._area)&&(a={label:b.label,selector:b.selector,_area:b.area});let N=o.right>b.left+5&&o.left<b.right-5,E=o.bottom>b.top+5&&o.top<b.bottom-5;if(N&&b.bottom<=o.top+5){let y=Math.round(o.top-b.bottom);(!r||y<r._dist)&&(r={label:b.label,selector:b.selector,gap:Math.max(0,y),_dist:y})}if(N&&b.top>=o.bottom-5){let y=Math.round(b.top-o.bottom);(!i||y<i._dist)&&(i={label:b.label,selector:b.selector,gap:Math.max(0,y),_dist:y})}if(E&&b.right<=o.left+5){let y=Math.round(o.left-b.right);(!l||y<l._dist)&&(l={label:b.label,selector:b.selector,gap:Math.max(0,y),_dist:y})}if(E&&b.left>=o.right-5){let y=Math.round(b.left-o.right);(!s||y<s._dist)&&(s={label:b.label,selector:b.selector,gap:Math.max(0,y),_dist:y})}}let u=window.innerWidth,h=window.innerHeight,f=uv(e,u),x=b=>b?{label:b.label,selector:b.selector,gap:b.gap}:null,S=dv(o,e,u,h,a?{label:a.label,selector:a.selector,_area:a._area}:null,n);return{above:x(r),below:x(i),left:x(l),right:x(s),alignment:f,containedIn:a?{label:a.label,selector:a.selector}:null,outOfBounds:S}}function dv(e,t,n,o,r,i){let l={},s=!1,a=[];if(e.left<-2&&a.push("left"),e.right>n+2&&a.push("right"),e.top<-2&&a.push("top"),e.bottom>o+2&&a.push("bottom"),a.length>0&&(l.viewport=a,s=!0),r){let u=i.find(h=>h.label===r.label&&h.selector===r.selector&&Math.abs(h.area-r._area)<10);if(u){let h=[];e.left<u.left-2&&h.push("left"),e.right>u.right+2&&h.push("right"),e.top<u.top-2&&h.push("top"),e.bottom>u.bottom+2&&h.push("bottom"),h.length>0&&(l.container={label:r.label,edges:h},s=!0)}}return s?l:null}function uv(e,t){if(e.width/t>.85)return"full-width";let o=e.x+e.width/2,r=t/2,i=o-r,l=t*.08;return Math.abs(i)<l?"center":i<0?"left":"right"}function Ng(e){switch(e){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function Ig(e,t={}){let n=[];e.above&&n.push(`Below \`${e.above.label}\`${e.above.gap>0?` (${e.above.gap}px gap)`:""}`),e.below&&n.push(`Above \`${e.below.label}\`${e.below.gap>0?` (${e.below.gap}px gap)`:""}`),t.includeLeftRight&&(e.left&&n.push(`Right of \`${e.left.label}\`${e.left.gap>0?` (${e.left.gap}px gap)`:""}`),e.right&&n.push(`Left of \`${e.right.label}\`${e.right.gap>0?` (${e.right.gap}px gap)`:""}`));let o=Ng(e.alignment);return e.containedIn?n.push(`${o.charAt(0).toUpperCase()+o.slice(1)} in \`${e.containedIn.label}\``):n.push(`${o.charAt(0).toUpperCase()+o.slice(1)} in page`),t.includePixelRef&&t.pixelRef&&n.push(`Pixel ref: \`${t.pixelRef}\``),e.outOfBounds&&(e.outOfBounds.viewport&&n.push(`**Outside viewport** (${e.outOfBounds.viewport.join(", ")} edge${e.outOfBounds.viewport.length>1?"s":""})`),e.outOfBounds.container&&n.push(`**Outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(", ")} edge${e.outOfBounds.container.edges.length>1?"s":""})`)),n}function _v(e,t,n){let o=[];e.above&&o.push(`below \`${e.above.label}\``),e.below&&o.push(`above \`${e.below.label}\``),e.left&&o.push(`right of \`${e.left.label}\``),e.right&&o.push(`left of \`${e.right.label}\``),e.containedIn&&o.push(`inside \`${e.containedIn.label}\``),o.push(Ng(e.alignment)),e.outOfBounds?.viewport&&o.push(`**outside viewport** (${e.outOfBounds.viewport.join(", ")})`),e.outOfBounds?.container&&o.push(`**outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(", ")})`);let r=n?`, ${Math.round(n.width)}\xD7${Math.round(n.height)}px`:"";return`at (${Math.round(t.x)}, ${Math.round(t.y)})${r}: ${o.join(", ")}`}function Y0(e){if(e.length<2)return[];let t=[],n=new Set;for(let o=0;o<e.length;o++){if(n.has(o))continue;let r=[o];for(let i=o+1;i<e.length;i++)n.has(i)||Math.abs(e[o].rect.y-e[i].rect.y)<U0&&r.push(i);if(r.length>=2){let i=r.map(a=>e[a]);i.sort((a,u)=>a.rect.x-u.rect.x);let l=[];for(let a=0;a<i.length-1;a++)l.push(Math.round(i[a+1].rect.x-(i[a].rect.x+i[a].rect.width)));let s=Math.round(i.reduce((a,u)=>a+u.rect.y,0)/i.length);t.push({labels:i.map(a=>a.label),type:"row",sharedEdge:s,gaps:l,avgGap:l.length?Math.round(l.reduce((a,u)=>a+u,0)/l.length):0}),r.forEach(a=>n.add(a))}}for(let o=0;o<e.length;o++){if(n.has(o))continue;let r=[o];for(let i=o+1;i<e.length;i++)n.has(i)||Math.abs(e[o].rect.x-e[i].rect.x)<U0&&r.push(i);if(r.length>=2){let i=r.map(a=>e[a]);i.sort((a,u)=>a.rect.y-u.rect.y);let l=[];for(let a=0;a<i.length-1;a++)l.push(Math.round(i[a+1].rect.y-(i[a].rect.y+i[a].rect.height)));let s=Math.round(i.reduce((a,u)=>a+u.rect.x,0)/i.length);t.push({labels:i.map(a=>a.label),type:"column",sharedEdge:s,gaps:l,avgGap:l.length?Math.round(l.reduce((a,u)=>a+u,0)/l.length):0}),r.forEach(a=>n.add(a))}}return t}function fv(e){if(e.length<2)return[];let t=Y0(e.map(l=>({label:l.label,rect:l.originalRect}))),n=Y0(e.map(l=>({label:l.label,rect:l.currentRect}))),o=[],r=new Set;for(let l of t){let s=new Set(l.labels),a=null,u=0;for(let h of n){let f=h.labels.filter(x=>s.has(x)).length;f>=2&&f>u&&(a=h,u=f)}if(a){let h=a.labels.filter(x=>s.has(x)),f=h.join(", ");if(a.type!==l.type){let x=l.type==="row"?"y":"x",S=a.type==="row"?"y":"x";o.push(`**${f}**: ${l.type} (${x}\u2248${l.sharedEdge}, ${l.avgGap}px gaps) \u2192 ${a.type} (${S}\u2248${a.sharedEdge}, ${a.avgGap}px gaps)`)}else if(Math.abs(l.sharedEdge-a.sharedEdge)>20||Math.abs(l.avgGap-a.avgGap)>5){let x=l.type==="row"?"y":"x",S=Math.abs(l.sharedEdge-a.sharedEdge)>20?` ${x}: ${l.sharedEdge} \u2192 ${a.sharedEdge}`:"",b=Math.abs(l.avgGap-a.avgGap)>5?` gaps: ${l.avgGap}px \u2192 ${a.avgGap}px`:"";o.push(`**${f}**: ${l.type} shifted \u2014${S}${b}`)}h.forEach(x=>r.add(x))}else{let h=l.labels.join(", "),f=l.type==="row"?"y":"x";o.push(`**${h}**: ${l.type} (${f}\u2248${l.sharedEdge}) dissolved`),l.labels.forEach(x=>r.add(x))}}for(let l of n){if(l.labels.every(u=>r.has(u))||l.labels.filter(u=>!r.has(u)).length<2)continue;if(!t.some(u=>u.labels.filter(f=>l.labels.includes(f)).length>=2)){let u=l.type==="row"?"y":"x";o.push(`**${l.labels.join(", ")}**: new ${l.type} (${u}\u2248${l.sharedEdge}, ${l.avgGap}px gaps)`),l.labels.forEach(h=>r.add(h))}}let i=e.filter(l=>!r.has(l.label));if(i.length>=2){let l={};for(let s of i){let a=Math.round(s.currentRect.x/5)*5;(l[a]??(l[a]=[])).push(s.label)}for(let[s,a]of Object.entries(l))a.length>=2&&o.push(`**${a.join(", ")}**: shared left edge at x\u2248${s}`)}return o}function Rg(e){if(typeof document>"u")return{viewport:e,contentArea:null};let t=[],n=new Set,o=s=>{n.has(s)||s instanceof HTMLElement&&(s.hasAttribute("data-feedback-toolbar")||W_.has(s.tagName.toLowerCase())||(n.add(s),t.push(s)))},r=document.querySelector("main");r&&o(r);let i=document.querySelector("[role='main']");i&&o(i);for(let s of Array.from(document.body.children))if(o(s),s.children){for(let a of Array.from(s.children))if(o(a),a.children)for(let u of Array.from(a.children))o(u)}let l=null;for(let s of t){let a=s.getBoundingClientRect();if(a.height<50)continue;let u=getComputedStyle(s);if(u.maxWidth&&u.maxWidth!=="none"&&u.maxWidth!=="0px"){(!l||a.width<l.rect.width)&&(l={el:s,rect:a});continue}!l&&a.width<e.width-20&&a.width>100&&(l={el:s,rect:a})}if(l){let{el:s,rect:a}=l;return{viewport:e,contentArea:{width:Math.round(a.width),left:Math.round(a.left),right:Math.round(a.right),centerX:Math.round(a.left+a.width/2),selector:ni(s)}}}return{viewport:e,contentArea:null}}function hv(e){if(typeof document>"u")return null;let t=document.querySelector(e);if(!t?.parentElement)return null;let n=getComputedStyle(t.parentElement),o={parentDisplay:n.display,parentSelector:ni(t.parentElement)};return n.display.includes("flex")&&(o.flexDirection=n.flexDirection),n.display.includes("grid")&&n.gridTemplateColumns!=="none"&&(o.gridCols=n.gridTemplateColumns),n.gap&&n.gap!=="normal"&&n.gap!=="0px"&&(o.gap=n.gap),o}function $g(e,t){let n=t.contentArea,o=n?n.width:t.viewport.width,r=n?n.left:0,i=n?n.centerX:Math.round(t.viewport.width/2),l=Math.round(e.x-r),s=Math.round(r+o-(e.x+e.width)),a=(e.width/o*100).toFixed(1),u=e.x+e.width/2,h=Math.abs(u-i)<20,f=e.width/o>.95,x=[];return f?x.push("`width: 100%` of container"):x.push(`left \`${l}px\` in container, right \`${s}px\`, width \`${a}%\` (\`${Math.round(e.width)}px\`)`),h&&!f&&x.push("centered \u2014 `margin-inline: auto`"),x.join(" \u2014 ")}function Tg(e){let{viewport:t,contentArea:n}=e,o=`### Reference Frame
`;if(o+=`- Viewport: \`${t.width}\xD7${t.height}px\`
`,n){let r=n;o+=`- Content area: \`${r.width}px\` wide, left edge at \`x=${r.left}\`, right at \`x=${r.right}\` (\`${r.selector}\`)
`,o+=`- Pixel \u2192 CSS translation:
`,o+=`  - **Horizontal position in container**: \`element.x - ${r.left}\` \u2192 use as \`margin-left\` or \`left\`
`,o+=`  - **Width as % of container**: \`element.width / ${r.width} \xD7 100\` \u2192 use as \`width: X%\`
`,o+="  - **Vertical gap between elements**: `nextElement.y - (prevElement.y + prevElement.height)` \u2192 use as `margin-top` or `gap`\n",o+=`  - **Centered**: if \`|element.centerX - ${r.centerX}| < 20px\` \u2192 use \`margin-inline: auto\`
`}else o+=`- No distinct content container \u2014 elements positioned relative to full viewport
`,o+=`- Pixel \u2192 CSS translation:
`,o+=`  - **Width as % of viewport**: \`element.width / ${t.width} \xD7 100\` \u2192 use as \`width: X%\`
`,o+=`  - **Centered**: if \`|(element.x + element.width/2) - ${Math.round(t.width/2)}| < 20px\` \u2192 use \`margin-inline: auto\`
`;return o+=`
`,o}function pv(e){let t=hv(e);if(!t)return null;let n=`\`${t.parentDisplay}\``;return t.flexDirection&&(n+=`, flex-direction: \`${t.flexDirection}\``),t.gridCols&&(n+=`, grid-template-columns: \`${t.gridCols}\``),t.gap&&(n+=`, gap: \`${t.gap}\``),`Parent: ${n} (\`${t.parentSelector}\`)`}function Q0(e,t,n,o="standard"){if(e.length===0)return"";let r=[...e].sort((E,y)=>Math.abs(E.y-y.y)<20?E.x-y.x:E.y-y.y),i="";if(n?.blankCanvas?(i+=`## Wireframe: New Page

`,n.wireframePurpose&&(i+=`> **Purpose:** ${n.wireframePurpose}
>
`),i+=`> ${e.length} component${e.length!==1?"s":""} placed \u2014 this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):i+=`## Design Layout

> ${e.length} component${e.length!==1?"s":""} placed

`,o==="compact")return i+=`### Components
`,r.forEach((E,y)=>{let v=uo[E.type]?.label||E.type;i+=`${y+1}. **${v}** \u2014 \`${Math.round(E.width)}\xD7${Math.round(E.height)}px\` at \`(${Math.round(E.x)}, ${Math.round(E.y)})\`
`,E.text&&(i+=`   - Note: "${E.text}"
`)}),i;let l=Rg(t);i+=Tg(l),i+=`### Components
`,r.forEach((E,y)=>{let v=uo[E.type]?.label||E.type,p={x:E.x,y:E.y,width:E.width,height:E.height};i+=`${y+1}. **${v}** \u2014 \`${Math.round(E.width)}\xD7${Math.round(E.height)}px\` at \`(${Math.round(E.x)}, ${Math.round(E.y)})\`
`,E.text&&(i+=`   - Note: "${E.text}"
`);let C=j_(p),V=Ig(C,{includeLeftRight:o==="detailed"||o==="forensic"});for(let q of V)i+=`   - ${q}
`;let B=$g(p,l);B&&(i+=`   - CSS: ${B}
`)}),i+=`
### Layout Analysis
`;let s=[];for(let E of r){let y=s.find(v=>Math.abs(v.y-E.y)<30);y?y.items.push(E):s.push({y:E.y,items:[E]})}if(s.sort((E,y)=>E.y-y.y),s.forEach((E,y)=>{E.items.sort((p,C)=>p.x-C.x);let v=E.items.map(p=>uo[p.type]?.label||p.type);if(E.items.length===1){let C=E.items[0].width>t.width*.8;i+=`- Row ${y+1} (y\u2248${Math.round(E.y)}): ${v[0]}${C?" \u2014 full width":""}
`}else i+=`- Row ${y+1} (y\u2248${Math.round(E.y)}): ${v.join(" | ")} \u2014 ${E.items.length} items side by side
`}),o==="detailed"||o==="forensic"){i+=`
### Spacing & Gaps
`;for(let E=0;E<r.length-1;E++){let y=r[E],v=r[E+1],p=uo[y.type]?.label||y.type,C=uo[v.type]?.label||v.type,H=Math.round(v.y-(y.y+y.height)),V=Math.round(v.x-(y.x+y.width));Math.abs(y.y-v.y)<30?i+=`- ${p} \u2192 ${C}: \`${V}px\` horizontal gap
`:i+=`- ${p} \u2192 ${C}: \`${H}px\` vertical gap
`}if(o==="forensic"&&r.length>2){i+=`
### All Pairwise Gaps
`;for(let E=0;E<r.length;E++)for(let y=E+1;y<r.length;y++){let v=r[E],p=r[y],C=uo[v.type]?.label||v.type,H=uo[p.type]?.label||p.type,V=Math.round(p.y-(v.y+v.height)),B=Math.round(p.x-(v.x+v.width));i+=`- ${C} \u2194 ${H}: h=\`${B}px\` v=\`${V}px\`
`}}o==="forensic"&&(i+=`
### Z-Order (placement order)
`,e.forEach((E,y)=>{let v=uo[E.type]?.label||E.type;i+=`${y}. ${v} at \`(${Math.round(E.x)}, ${Math.round(E.y)})\`
`}))}i+=`
### Suggested Implementation
`;let a=r.some(E=>E.type==="navigation"),u=r.some(E=>E.type==="hero"),h=r.some(E=>E.type==="sidebar"),f=r.some(E=>E.type==="footer"),x=r.filter(E=>E.type==="card"),S=r.filter(E=>E.type==="form"),b=r.filter(E=>E.type==="table"),N=r.filter(E=>E.type==="modal");if(a&&(i+=`- Top navigation bar with logo + nav links + CTA
`),u&&(i+=`- Hero section with heading, subtext, and call-to-action
`),h&&(i+=`- Sidebar layout \u2014 use CSS Grid with sidebar + main content area
`),x.length>1?i+=`- ${x.length}-column card grid \u2014 use CSS Grid or Flexbox
`:x.length===1&&(i+=`- Card component with image + content area
`),S.length>0&&(i+=`- ${S.length} form${S.length>1?"s":""} \u2014 add proper labels, validation, and submit handling
`),b.length>0&&(i+=`- Data table \u2014 consider sortable columns and pagination
`),N.length>0&&(i+=`- Modal dialog \u2014 add overlay backdrop and focus trapping
`),f&&(i+=`- Multi-column footer with links
`),o==="detailed"||o==="forensic"){if(i+=`
### CSS Suggestions
`,h){let E=r.find(y=>y.type==="sidebar");i+=`- \`display: grid; grid-template-columns: ${Math.round(E.width)}px 1fr;\`
`}if(x.length>1){let E=Math.round(x[0].width);i+=`- \`display: grid; grid-template-columns: repeat(${x.length}, ${E}px); gap: 16px;\`
`}a&&(i+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return i}function V0(e,t="standard",n){let{sections:o}=e,r=[];for(let h of o){let f=h.originalRect,x=h.currentRect,S=Math.abs(f.x-x.x)>1||Math.abs(f.y-x.y)>1,b=Math.abs(f.width-x.width)>1||Math.abs(f.height-x.height)>1,N=!!h.note;if(!S&&!b&&!N){t==="forensic"&&r.push({section:h,posMoved:!1,sizeChanged:!1});continue}r.push({section:h,posMoved:S,sizeChanged:b})}if(r.length===0||t!=="forensic"&&r.every(h=>!h.posMoved&&!h.sizeChanged&&!h.section.note))return"";let i=`## Suggested Layout Changes

`,l=n?n.width:typeof window<"u"?window.innerWidth:0,s=n?n.height:typeof window<"u"?window.innerHeight:0,a=Rg({width:l,height:s});t!=="compact"&&(i+=Tg(a)),t==="forensic"&&(i+=`> Detected at: \`${new Date(e.detectedAt).toISOString()}\`
`,i+=`> Total sections: ${o.length}

`);let u=h=>o.map(f=>({label:f.label,selector:f.selector,rect:h==="original"?f.originalRect:f.currentRect}));i+=`**Changes:**
`;for(let{section:h,posMoved:f,sizeChanged:x}of r){let S=h.originalRect,b=h.currentRect;if(!f&&!x){h.note?(i+=`- **${h.label}** \u2014 note only
`,i+=`  - Note: "${h.note}"
`):i+=`- ${h.label} \u2014 unchanged at (${Math.round(b.x)}, ${Math.round(b.y)}) ${Math.round(b.width)}\xD7${Math.round(b.height)}px
`;continue}if(t==="compact"){f&&x?i+=`- Suggested: move **${h.label}** to (${Math.round(b.x)}, ${Math.round(b.y)}) ${Math.round(b.width)}\xD7${Math.round(b.height)}px
`:f?i+=`- Suggested: move **${h.label}** to (${Math.round(b.x)}, ${Math.round(b.y)})
`:i+=`- Suggested: resize **${h.label}** to ${Math.round(b.width)}\xD7${Math.round(b.height)}px
`,h.note&&(i+=`  - Note: "${h.note}"
`);continue}if(f&&x?i+=`- Suggested: move and resize **${h.label}**
`:f?i+=`- Suggested: move **${h.label}**
`:i+=`- Suggested: resize **${h.label}** from ${Math.round(S.width)}\xD7${Math.round(S.height)}px to ${Math.round(b.width)}\xD7${Math.round(b.height)}px
`,h.note&&(i+=`  - Note: "${h.note}"
`),f){let E=j_(S,u("original")),y=j_(b,u("current")),v=x?{width:S.width,height:S.height}:void 0;i+=`  - Currently ${_v(E,{x:S.x,y:S.y},v)}
`;let p=x?{width:b.width,height:b.height}:void 0,C=`at (${Math.round(b.x)}, ${Math.round(b.y)})`,H=p?`, ${Math.round(p.width)}\xD7${Math.round(p.height)}px`:"",B=Ig(y,{includeLeftRight:t==="detailed"||t==="forensic"});if(B.length>0){i+=`  - Suggested position ${C}${H}: ${B[0]}
`;for(let F=1;F<B.length;F++)i+=`    ${B[F]}
`}else i+=`  - Suggested position ${C}${H}
`;let q=$g(b,a);q&&(i+=`  - CSS: ${q}
`)}let N=pv(h.selector);if(N&&(i+=`  - ${N}
`),i+=`  - Selector: \`${h.selector}\`
`,t==="detailed"||t==="forensic"){let E=h.className?`${h.tagName}.${h.className.split(" ")[0]}`:h.tagName;E!==h.selector&&(i+=`  - Element: \`${E}\`
`),h.role&&(i+=`  - Role: \`${h.role}\`
`),t==="forensic"&&h.textSnippet&&(i+=`  - Text: "${h.textSnippet}"
`)}t==="forensic"&&(i+=`  - Original rect: \`{ x: ${Math.round(S.x)}, y: ${Math.round(S.y)}, w: ${Math.round(S.width)}, h: ${Math.round(S.height)} }\`
`,i+=`  - Current rect: \`{ x: ${Math.round(b.x)}, y: ${Math.round(b.y)}, w: ${Math.round(b.width)}, h: ${Math.round(b.height)} }\`
`)}if(t!=="compact"){let h=r.filter(x=>x.posMoved).map(x=>({label:x.section.label,originalRect:x.section.originalRect,currentRect:x.section.currentRect})),f=fv(h);if(f.length>0){i+=`
### Layout Summary
`;for(let x of f)i+=`- ${x}
`}}if(t!=="compact"&&o.length>1){i+=`
### All Sections (current positions)
`;let h=[...o].sort((f,x)=>Math.abs(f.currentRect.y-x.currentRect.y)<20?f.currentRect.x-x.currentRect.x:f.currentRect.y-x.currentRect.y);for(let f of h){let x=f.currentRect,S=Math.abs(x.x-f.originalRect.x)>1||Math.abs(x.y-f.originalRect.y)>1||Math.abs(x.width-f.originalRect.width)>1||Math.abs(x.height-f.originalRect.height)>1;i+=`- ${f.label}: \`${Math.round(x.width)}\xD7${Math.round(x.height)}px\` at \`(${Math.round(x.x)}, ${Math.round(x.y)})\`${S?" \u2190 suggested":""}
`}}return i}function J_(e){return`${H_}${e}`}function xr(e){if(typeof window>"u")return[];try{let t=localStorage.getItem(J_(e));if(!t)return[];let n=JSON.parse(t),o=Date.now()-Pg*24*60*60*1e3;return n.filter(r=>!r.timestamp||r.timestamp>o)}catch{return[]}}function Dg(e,t){if(!(typeof window>"u"))try{localStorage.setItem(J_(e),JSON.stringify(t))}catch{}}function mv(){let e=new Map;if(typeof window>"u")return e;try{let t=Date.now()-Pg*24*60*60*1e3;for(let n=0;n<localStorage.length;n++){let o=localStorage.key(n);if(o?.startsWith(H_)){let r=o.slice(H_.length),i=localStorage.getItem(o);if(i){let s=JSON.parse(i).filter(a=>!a.timestamp||a.timestamp>t);s.length>0&&e.set(r,s)}}}}catch{}return e}function E_(e,t,n){let o=t.map(r=>({...r,_syncedTo:n}));Dg(e,o)}function gv(e){if(typeof window>"u")return[];try{let t=localStorage.getItem(`${Z_}${e}`);return t?JSON.parse(t):[]}catch{return[]}}function yv(e,t){if(!(typeof window>"u"))try{localStorage.setItem(`${Z_}${e}`,JSON.stringify(t))}catch{}}function xv(e){if(!(typeof window>"u"))try{localStorage.removeItem(`${Z_}${e}`)}catch{}}function vv(e){if(typeof window>"u")return null;try{let t=localStorage.getItem(`${ef}${e}`);return t?JSON.parse(t):null}catch{return null}}function wv(e,t){if(!(typeof window>"u"))try{localStorage.setItem(`${ef}${e}`,JSON.stringify(t))}catch{}}function bv(e){if(!(typeof window>"u"))try{localStorage.removeItem(`${ef}${e}`)}catch{}}function kv(e){if(typeof window>"u")return null;try{let t=localStorage.getItem(`${tf}${e}`);return t?JSON.parse(t):null}catch{return null}}function X0(e,t){if(!(typeof window>"u"))try{localStorage.setItem(`${tf}${e}`,JSON.stringify(t))}catch{}}function gc(e){if(!(typeof window>"u"))try{localStorage.removeItem(`${tf}${e}`)}catch{}}function nf(e){return`${Bg}${e}`}function Cv(e){if(typeof window>"u")return null;try{return localStorage.getItem(nf(e))}catch{return null}}function L_(e,t){if(!(typeof window>"u"))try{localStorage.setItem(nf(e),t)}catch{}}function Sv(e){if(!(typeof window>"u"))try{localStorage.removeItem(nf(e))}catch{}}function Mv(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(U_)==="1"}catch{return!1}}function Ev(e){if(!(typeof window>"u"))try{e?sessionStorage.setItem(U_,"1"):sessionStorage.removeItem(U_)}catch{}}async function N_(e,t){let n=await fetch(`${e}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:t})});if(!n.ok)throw new Error(`Failed to create session: ${n.status}`);return n.json()}async function G0(e,t){let n=await fetch(`${e}/sessions/${t}`);if(!n.ok)throw new Error(`Failed to get session: ${n.status}`);return n.json()}async function q0(e,t,n){!n.elementPath&&(n.element==="body"||n.element==="html")&&(n={...n,elementPath:n.element});let o=await fetch(`${e}/sessions/${t}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!o.ok)throw new Error(`Failed to sync annotation: ${o.status}`);return o.json()}async function I_(e,t,n){let o=await fetch(`${e}/annotations/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!o.ok)throw new Error(`Failed to update annotation: ${o.status}`);return o.json()}async function yc(e,t){let n=await fetch(`${e}/annotations/${t}`,{method:"DELETE"});if(!n.ok)throw new Error(`Failed to delete annotation: ${n.status}`)}function Nv(e){let t=e?.mode??"filtered",n=K0;if(e?.skipExact){let o=e.skipExact instanceof Set?e.skipExact:new Set(e.skipExact);n=new Set([...K0,...o])}return{maxComponents:e?.maxComponents??6,maxDepth:e?.maxDepth??30,mode:t,skipExact:n,skipPatterns:e?.skipPatterns?[...J0,...e.skipPatterns]:J0,userPatterns:e?.userPatterns??Lv,filter:e?.filter}}function Iv(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function Rv(e,t=10){let n=new Set,o=e,r=0;for(;o&&r<t;)o.className&&typeof o.className=="string"&&o.className.split(/\s+/).forEach(i=>{if(i.length>1){let l=i.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();l.length>1&&n.add(l)}}),o=o.parentElement,r++;return n}function $v(e,t){let n=Iv(e);for(let o of t){if(o===n)return!0;let r=n.split("-").filter(l=>l.length>2),i=o.split("-").filter(l=>l.length>2);for(let l of r)for(let s of i)if(l===s||l.includes(s)||s.includes(l))return!0}return!1}function Tv(e,t,n,o){if(n.filter)return n.filter(e,t);switch(n.mode){case"all":return!0;case"filtered":return!(n.skipExact.has(e)||n.skipPatterns.some(r=>r.test(e)));case"smart":return n.skipExact.has(e)||n.skipPatterns.some(r=>r.test(e))?!1:!!(o&&$v(e,o)||n.userPatterns.some(r=>r.test(e)));default:return!0}}function R_(e){return Object.keys(e).some(t=>t.startsWith("__reactFiber$")||t.startsWith("__reactInternalInstance$")||t.startsWith("__reactProps$"))}function Dv(){if(Ui!==null)return Ui;if(typeof document>"u")return!1;if(document.body&&R_(document.body))return Ui=!0,!0;let e=["#root","#app","#__next","[data-reactroot]"];for(let t of e){let n=document.querySelector(t);if(n&&R_(n))return Ui=!0,!0}if(document.body){for(let t of document.body.children)if(R_(t))return Ui=!0,!0}return Ui=!1,!1}function Bv(e){return Object.keys(e).find(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$"))||null}function zv(e){let t=Bv(e);return t?e[t]:null}function Jr(e){return e?e.displayName?e.displayName:e.name?e.name:null:null}function Ov(e){let{tag:t,type:n,elementType:o}=e;if(t===st.HostComponent||t===st.HostText||t===st.HostHoistable||t===st.HostSingleton||t===st.Fragment||t===st.Mode||t===st.Profiler||t===st.DehydratedFragment||t===st.HostRoot||t===st.HostPortal||t===st.ScopeComponent||t===st.OffscreenComponent||t===st.LegacyHiddenComponent||t===st.CacheComponent||t===st.TracingMarkerComponent||t===st.Throw||t===st.ViewTransitionComponent||t===st.ActivityComponent)return null;if(t===st.ForwardRef){let r=o;if(r?.render){let i=Jr(r.render);if(i)return i}return r?.displayName?r.displayName:Jr(n)}if(t===st.MemoComponent||t===st.SimpleMemoComponent){let r=o;if(r?.type){let i=Jr(r.type);if(i)return i}return r?.displayName?r.displayName:Jr(n)}if(t===st.ContextProvider){let r=n;return r?._context?.displayName?`${r._context.displayName}.Provider`:null}if(t===st.ContextConsumer){let r=n;return r?.displayName?`${r.displayName}.Consumer`:null}if(t===st.LazyComponent){let r=o;return r?._status===1&&r._result?Jr(r._result):null}return t===st.SuspenseComponent||t===st.SuspenseListComponent?null:t===st.IncompleteClassComponent||t===st.IncompleteFunctionComponent||t===st.FunctionComponent||t===st.ClassComponent||t===st.IndeterminateComponent?Jr(n):null}function Av(e){return e.length<=2||e.length<=3&&e===e.toLowerCase()}function Fv(e,t){let n=Nv(t),o=n.mode==="all";if(o){let a=as.map.get(e);if(a!==void 0)return a}if(!Dv()){let a={path:null,components:[]};return o&&as.map.set(e,a),a}let r=n.mode==="smart"?Rv(e):void 0,i=[];try{let a=zv(e),u=0;for(;a&&u<n.maxDepth&&i.length<n.maxComponents;){let h=Ov(a);h&&!Av(h)&&Tv(h,u,n,r)&&i.push(h),a=a.return,u++}}catch{let a={path:null,components:[]};return o&&as.map.set(e,a),a}if(i.length===0){let a={path:null,components:[]};return o&&as.map.set(e,a),a}let s={path:i.slice().reverse().map(a=>`<${a}>`).join(" "),components:i};return o&&as.map.set(e,s),s}function jv(e){if(!e||typeof e!="object")return null;let t=Object.keys(e),n=t.find(i=>i.startsWith("__reactFiber$"));if(n)return e[n]||null;let o=t.find(i=>i.startsWith("__reactInternalInstance$"));if(o)return e[o]||null;let r=t.find(i=>{if(!i.startsWith("__react"))return!1;let l=e[i];return l&&typeof l=="object"&&"_debugSource"in l});return r&&e[r]||null}function ms(e){if(!e.type||typeof e.type=="string")return null;if(typeof e.type=="object"||typeof e.type=="function"){let t=e.type;if(t.displayName)return t.displayName;if(t.name)return t.name}return null}function Hv(e,t=50){let n=e,o=0;for(;n&&o<t;){if(n._debugSource)return{source:n._debugSource,componentName:ms(n)};if(n._debugOwner?._debugSource)return{source:n._debugOwner._debugSource,componentName:ms(n._debugOwner)};n=n.return,o++}return null}function Uv(e){let t=e,n=0,o=50;for(;t&&n<o;){let r=t,i=["_debugSource","__source","_source","debugSource"];for(let l of i){let s=r[l];if(s&&typeof s=="object"&&"fileName"in s)return{source:s,componentName:ms(t)}}if(t.memoizedProps){let l=t.memoizedProps;if(l.__source&&typeof l.__source=="object"){let s=l.__source;if(s.fileName&&s.lineNumber)return{source:{fileName:s.fileName,lineNumber:s.lineNumber,columnNumber:s.columnNumber},componentName:ms(t)}}}t=t.return,n++}return null}function Yv(e){let t=e.tag,n=e.type,o=e.elementType;if(typeof n=="string"||n==null||typeof n=="function"&&n.prototype?.isReactComponent)return null;if((t===cs.FunctionComponent||t===cs.IndeterminateComponent)&&typeof n=="function")return n;if(t===cs.ForwardRef&&o){let r=o.render;if(typeof r=="function")return r}if((t===cs.MemoComponent||t===cs.SimpleMemoComponent)&&o){let r=o.type;if(typeof r=="function")return r}return typeof n=="function"?n:null}function Qv(){let e=Wv,t=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(t&&"H"in t)return{get:()=>t.H,set:o=>{t.H=o}};let n=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(n){let o=n.ReactCurrentDispatcher;if(o&&"current"in o)return{get:()=>o.current,set:r=>{o.current=r}}}return null}function Vv(e,t){let n=e.split(`
`),o=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/\/_next\/static\/chunks\//,/\/\.vite\/deps\//,/\/_astro\//,/\/assets\/[^\s/]+[-.][\w-]{8,}\.m?js(?:[?:]|$)/,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],r=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,i=/^[^@]*@(.+?):(\d+):(\d+)$/;for(let l of n){let s=l.trim();if(!s||o.some(u=>u.test(s)))continue;if(t){let u=t.replace(/^bound /,"").replace(/[.*+?^${}()|[\]\\]/g,"\\$&");if(!new RegExp(`(?:at (?:Object\\.)?|^)${u}(?: \\(|@| \\[)`).test(s))continue}let a=r.exec(s)||i.exec(s);if(a)return{fileName:a[1],line:parseInt(a[2],10),column:parseInt(a[3],10)}}return null}function Xv(e){let t=e;return t=t.replace(/[?#].*$/,""),t=t.replace(/^turbopack:\/\/\/\[project\]\//,""),t=t.replace(/^webpack-internal:\/\/\/\.\//,""),t=t.replace(/^webpack-internal:\/\/\//,""),t=t.replace(/^webpack:\/\/\/\.\//,""),t=t.replace(/^webpack:\/\/\//,""),t=t.replace(/^turbopack:\/\/\//,""),t=t.replace(/^https?:\/\/[^/]+\//,""),t=t.replace(/^file:\/\/\//,"/"),t=t.replace(/^\([^)]+\)\/\.\//,""),t=t.replace(/^\.\//,""),t}function Gv(e){let t=Yv(e);if(!t)return null;if(xc.has(t))return xc.get(t);let n=Qv();if(!n)return xc.set(t,null),null;let o=n.get(),r=null;try{let i=new Proxy({},{get(){throw new Error("probe")}});n.set(i);try{t({})}catch(l){if(l instanceof Error&&l.message==="probe"&&l.stack){let s=Vv(l.stack,t.name);s&&(r={fileName:Xv(s.fileName),lineNumber:s.line,columnNumber:s.column,componentName:ms(e)||void 0})}}}finally{n.set(o)}return xc.set(t,r),r}function qv(e,t=15){let n=e,o=0;for(;n&&o<t;){let r=Gv(n);if(r)return r;n=n.return,o++}return null}function Y_(e){let t=jv(e);if(!t)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let n=Hv(t);if(n||(n=Uv(t)),n?.source)return{found:!0,source:{fileName:n.source.fileName,lineNumber:n.source.lineNumber,columnNumber:n.source.columnNumber,componentName:n.componentName||void 0},isReactApp:!0,isProduction:!1};let o=qv(t);return o?{found:!0,source:o,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function Kv(e,t="path"){let{fileName:n,lineNumber:o,columnNumber:r}=e,i=`${n}:${o}`;return r!==void 0&&(i+=`:${r}`),t==="vscode"?`vscode://file${n.startsWith("/")?"":"/"}${i}`:i}function Jv(e,t=10){let n=e,o=0;for(;n&&o<t;){let r=Y_(n);if(r.found)return r;n=n.parentElement,o++}return Y_(e)}function Cc(e,t){let n=`## Page Feedback: ${e}
`,o=t?.replace(/[\r\n\t]+/g," ").trim();return o&&(n+=`**App:** ${o.replace(/[\\`*_\[\]<>]/g,"\\$&")}
`),n}function Z0(e,t,n="standard",o={}){if(e.length===0)return"";let r=typeof window<"u"?`${window.innerWidth}\xD7${window.innerHeight}`:"unknown",i=Cc(t,o.appName);return n==="forensic"?(i+=`
**Environment:**
`,i+=`- Viewport: ${r}
`,typeof window<"u"&&(i+=`- URL: ${window.location.href}
`,i+=`- User Agent: ${navigator.userAgent}
`,i+=`- Timestamp: ${new Date().toISOString()}
`,i+=`- Device Pixel Ratio: ${window.devicePixelRatio}
`),i+=`
---
`):n!=="compact"&&(i+=`**Viewport:** ${r}
`),i+=`
`,e.forEach((l,s)=>{n==="compact"?(i+=`${s+1}. **${l.element}**${l.sourceFile?` (${l.sourceFile})`:""}: ${l.comment}`,l.selectedText&&(i+=` (re: "${l.selectedText.slice(0,30)}${l.selectedText.length>30?"...":""}")`),i+=`
`):n==="forensic"?(i+=`### ${s+1}. ${l.element}
`,l.isMultiSelect&&l.fullPath&&(i+=`*Forensic data shown for first element of selection*
`),l.fullPath&&(i+=`**Full DOM Path:** ${l.fullPath}
`),l.cssClasses&&(i+=`**CSS Classes:** ${l.cssClasses}
`),l.boundingBox&&(i+=`**Position:** x:${Math.round(l.boundingBox.x)}, y:${Math.round(l.boundingBox.y)} (${Math.round(l.boundingBox.width)}\xD7${Math.round(l.boundingBox.height)}px)
`),i+=`**Annotation at:** ${l.x.toFixed(1)}% from left, ${Math.round(l.y)}px from top
`,l.selectedText&&(i+=`**Selected text:** "${l.selectedText}"
`),l.nearbyText&&!l.selectedText&&(i+=`**Context:** ${l.nearbyText.slice(0,100)}
`),l.computedStyles&&(i+=`**Computed Styles:** ${l.computedStyles}
`),l.accessibility&&(i+=`**Accessibility:** ${l.accessibility}
`),l.nearbyElements&&(i+=`**Nearby Elements:** ${l.nearbyElements}
`),l.sourceFile&&(i+=`**Source:** ${l.sourceFile}
`),l.reactComponents&&(i+=`**React:** ${l.reactComponents}
`),i+=`**Feedback:** ${l.comment}

`):(i+=`### ${s+1}. ${l.element}
`,i+=`**Location:** ${l.elementPath}
`,l.sourceFile&&(i+=`**Source:** ${l.sourceFile}
`),l.reactComponents&&(i+=`**React:** ${l.reactComponents}
`),n==="detailed"&&(l.cssClasses&&(i+=`**Classes:** ${l.cssClasses}
`),l.boundingBox&&(i+=`**Position:** ${Math.round(l.boundingBox.x)}px, ${Math.round(l.boundingBox.y)}px (${Math.round(l.boundingBox.width)}\xD7${Math.round(l.boundingBox.height)}px)
`)),l.selectedText&&(i+=`**Selected text:** "${l.selectedText}"
`),n==="detailed"&&l.nearbyText&&!l.selectedText&&(i+=`**Context:** ${l.nearbyText.slice(0,100)}
`),i+=`**Feedback:** ${l.comment}

`)}),i.trim()}function eg(e,t,n="markdown"){return n==="markdown"?t:[...new Set(e.map(o=>n==="source"?o.sourceFile:n==="classes"?o.cssClasses:o.attributes?.[n.attribute]).filter(o=>typeof o=="string"&&o.length>0))].join(`
`)}async function Zv(e){if(typeof window>"u")return!1;try{if(navigator.clipboard?.writeText)return await navigator.clipboard.writeText(e),!0}catch{}return ew(e)}function ew(e){let t=document.createElement("textarea"),n=document.activeElement;for(;n?.shadowRoot?.activeElement;)n=n.shadowRoot.activeElement;let o=n instanceof HTMLInputElement||n instanceof HTMLTextAreaElement?n:null,r=o&&o.selectionStart!==null?{start:o.selectionStart,end:o.selectionEnd,direction:o.selectionDirection}:null,i=document.getSelection(),l=i?Array.from({length:i.rangeCount},(s,a)=>i.getRangeAt(a).cloneRange()):[];try{return t.value=e,t.setAttribute("readonly",""),t.style.cssText="position:fixed;left:-9999px;top:0;opacity:0;pointer-events:none;",document.body.appendChild(t),t.focus({preventScroll:!0}),t.select(),t.setSelectionRange(0,e.length),document.execCommand("copy")}catch{return!1}finally{if(t.remove(),n instanceof HTMLElement&&n.isConnected&&(n.focus({preventScroll:!0}),o&&r&&o.setSelectionRange(r.start,r.end,r.direction)),i){i.removeAllRanges();for(let s of l)i.addRange(s)}}}function tg(e){if(!e)return e;try{let t=new URL(e,"http://agentation.invalid");return t.pathname+t.search+t.hash}catch{return e}}function ng(e,t,n=[]){let o=new Map,r=new Map(n.map(s=>[s.id,s])),i=!1;async function l(s,a){if(i||a.running||a.timer)return;let u=a.desired,h=t.get(s);if(!u&&!h){o.delete(s),t.delete(s);return}let f=u?JSON.stringify(u):void 0;if(!(u&&h&&a.synced===f)){a.running=!0;try{if(!u)await e.remove(h),t.delete(s),a.synced=void 0;else if(h)await e.update(h,u),a.synced=f;else{t.set(s,"");let x=await e.create(u);t.set(s,x.id),a.synced=f}a.retries=0,a.running=!1,!i&&o.get(s)===a&&l(s,a)}catch(x){if(a.running=!1,!i&&o.get(s)===a&&(console.warn("[Agentation] Failed to sync layout feedback:",x),t.get(s)&&a.retries<3)){let S=500*2**a.retries++;a.timer=ot(()=>{a.timer=void 0,l(s,a)},S)}}}}return{replace(s){let a=new Map(s.map(u=>[u.id,u]));for(let[u,h]of a){let f=o.get(u);if(!f){f={running:!1,retries:0},o.set(u,f);let x=[...r.values()].find(S=>S.kind===h.kind&&tg(S.url)===tg(h.url)&&(h.kind==="placement"?S.timestamp===h.timestamp&&S.element===h.element:S.element===h.element));x&&(t.set(u,x.id),r.delete(x.id))}JSON.stringify(f.desired)!==JSON.stringify(h)&&(f.retries=0,f.timer&&clearTimeout(f.timer),f.timer=void 0),f.desired=h}for(let[u,h]of o)a.has(u)||(h.desired=void 0),l(u,h)},forget(s){let a=o.get(s);a?.timer&&clearTimeout(a.timer),o.delete(s),t.delete(s)},dispose(){i=!0;for(let s of o.values())s.timer&&clearTimeout(s.timer)}}}function tw(e,t,n,o){let r=!1,i,l,s=1e3,a,u=S=>{!r&&(S?.status==="resolved"||S?.status==="dismissed")&&o(S)},h=async()=>{if(r||a||!n())return;let S=new AbortController;a=S;let b=ot(()=>S.abort(),5e3);try{let N=await fetch(`${e}/sessions/${t}`,{signal:S.signal});if(!N.ok)return;let E=await N.json();!r&&!S.signal.aborted&&Array.isArray(E.annotations)&&E.annotations.forEach(u)}catch{}finally{clearTimeout(b),a===S&&(a=void 0)}},f=()=>{if(r)return;let S=new EventSource(`${e}/sessions/${t}/events`),b=()=>{s=1e3,h()},N=y=>{try{u(JSON.parse(y.data).payload)}catch{}},E=()=>{S.readyState!==EventSource.CLOSED||r||l!==void 0||(i?.(),l=ot(()=>{l=void 0,f()},s),s=Math.min(s*2,1e4))};S.addEventListener("open",b),S.addEventListener("annotation.updated",N),S.addEventListener("error",E),i=()=>{S.removeEventListener("open",b),S.removeEventListener("annotation.updated",N),S.removeEventListener("error",E),S.close()}};f();let x=dg(()=>{h()},1e4);return()=>{r=!0,i?.(),l!==void 0&&clearTimeout(l),clearInterval(x),a?.abort()}}function _w({x:e,y:t,elementName:n,reactComponents:o}){let r=(0,Rc.useRef)(null);return(0,Rc.useLayoutEffect)(()=>{let i=r.current;if(!i)return;let l=()=>{let s=i.offsetWidth,a=i.offsetHeight;i.style.left=`${Math.max(8,Math.min(e,window.innerWidth-s-8))}px`;let u=t-a-8;i.style.top=`${Math.max(8,Math.min(u,window.innerHeight-a-8))}px`};return l(),window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)},[e,t,n,o]),(0,ys.jsxs)("div",{ref:r,className:`${O.hoverTooltip} ${O.enter}`,children:[o&&(0,ys.jsx)("div",{className:O.hoverReactPath,children:o}),(0,ys.jsx)("div",{className:O.hoverElementName,children:n})]})}function wc(e,t="filtered",n){let{name:o,path:r}=Yi(e,n);if(t==="off")return{name:o,elementName:o,path:r,reactComponents:null};let i=Fv(e,{mode:t});return{name:i.path?`${i.path} ${o}`:o,elementName:o,path:r,reactComponents:i.path}}function D_(e){let t=e;for(let o=Tn(t.ownerDocument);o;o=Tn(t.ownerDocument))t=o;let n=t;for(;n&&n!==document.body;){let r=window.getComputedStyle(n).position;if(r==="fixed"||r==="sticky")return!0;n=n.parentElement}return!1}function us(e){return e.kind!=="placement"&&e.kind!=="rearrange"&&e.status!=="resolved"&&e.status!=="dismissed"}function bc(e){let t=Y_(e),n=t.found?t:Jv(e);if(n.found&&n.source)return Kv(n.source,"path")}function Ag(e={}){let t=d2(e.useHashLocation??!1),n=(0,k.useState)(!1),o=f2(e.portalContainer);return o?(0,mg.createPortal)((0,Og.createElement)(gw,{...e,key:e.useHashLocation?t:void 0,pathname:t,activeState:n,portalHost:o}),o):null}function gw({pathname:e,activeState:t,portalHost:n,useHashLocation:o=!1,appName:r,enableKeyboardShortcuts:i=!0,identifyingAttributes:l=X_,copyFormat:s="markdown",onOpenSource:a,portalContainer:u,demoAnnotations:h,demoDelay:f=1e3,enableDemoMode:x=!1,onAnnotationAdd:S,onAnnotationDelete:b,onAnnotationUpdate:N,onAnnotationsClear:E,onCopy:y,onSubmit:v,copyToClipboard:p=!0,endpoint:C,sessionId:H,onSessionCreated:V,webhookUrl:B,className:q}){let[F,K]=t,[,ae]=(0,k.useState)(0),[J]=(0,k.useState)(()=>Z5(document,()=>ae(_=>_+1)));(0,k.useEffect)(()=>(J.start(),()=>J.stop()),[J]);let fe=typeof s=="object"?s.attribute:void 0,re=(0,k.useMemo)(()=>fe?[...l,fe]:l,[l,fe]),ce=(0,k.useRef)(!0);(0,k.useLayoutEffect)(()=>(ce.current=!0,()=>{ce.current=!1}),[]);let pe=(0,k.useCallback)(_=>o?u2(JSON.stringify([C,e]),_):_(),[C,e,o]),bt=(0,k.useRef)(new Map),ze=(0,k.useRef)(new Set),Ke=_=>us(_)&&!ze.current.has(_.id),Oe=async(..._)=>{let m=await q0(..._),w=_[2],M=w.id;if(M&&(bt.current.set(M,m.id),ze.current.has(M)&&ze.current.add(m.id)),!o){let $=new URL(w.url||window.location.href).pathname,I=xr($).find(T=>T.id===M);try{if(ze.current.has(M))await yc(_[0],m.id);else if(I&&I.comment!==w.comment)return await I_(_[0],m.id,{comment:I.comment}),{...m,comment:I.comment}}catch(T){console.warn("[Agentation] Failed to apply changes made during sync:",T)}}return m},ft=_=>o?{..._,annotations:_.annotations.filter(m=>!ze.current.has(m.id)&&_2(m.url||_.url,e,window.location.origin))}:_,Vt=(0,k.useRef)(e);Vt.current=e;let gn=(_,m,w,M=e)=>{let $=V5(_,xr(M),m,bt.current).filter(Ke);M===Vt.current&&ce.current&&Gn($),E_(M,$,w)},[Re,Gn]=(0,k.useState)([]),[Lo,Vo]=(0,k.useState)(!0),[Xo,No]=(0,k.useState)(()=>Mv()),[Io,Ro]=(0,k.useState)(!1);(0,k.useLayoutEffect)(()=>{cg()},[]);let Pt=(0,k.useRef)(null),qn=(0,k.useRef)(null),_o=(0,k.useRef)(null),kr=(0,k.useRef)(null),Pn=(0,k.useRef)(!1),$o=(0,k.useRef)(!1),G=(0,k.useRef)(!1);(0,k.useLayoutEffect)(()=>{F&&Pn.current?(Pn.current=!1,_o.current?.querySelector("button:not(:disabled)")?.focus()):!F&&$o.current&&($o.current=!1,qn.current?.focus())},[F]),(0,k.useEffect)(()=>{let _=w=>{let M=Pt.current;M&&w.composedPath().includes(M)&&w.stopPropagation()},m=["mousedown","click","pointerdown"];return m.forEach(w=>n.addEventListener(w,_)),()=>{m.forEach(w=>n.removeEventListener(w,_))}},[n]);let[he,Ne]=(0,k.useState)(!1),[Se,we]=(0,k.useState)(!1),[Je,Fe]=(0,k.useState)(null),[Qe,Ue]=(0,k.useState)({x:0,y:0}),[j,L]=(0,k.useState)(null),[R,z]=(0,k.useState)(!1),W=I0(),Z=I0(),[ee,Y]=(0,k.useState)("idle"),[de,be]=(0,k.useState)(!1),Te=(0,k.useRef)(new Set),it=(0,k.useRef)(new Set),at=(0,k.useRef)(),Ze=(0,k.useCallback)(()=>{!Te.current.size&&!at.current&&be(!1)},[]);(0,k.useEffect)(()=>()=>clearTimeout(at.current),[]);let[We,Ie]=(0,k.useState)(null),[yt,mt]=(0,k.useState)(null),[ct,Pe]=(0,k.useState)([]),[et,ht]=(0,k.useState)(null),dt=(0,k.useRef)(null);(0,k.useEffect)(()=>()=>{dt.current&&clearTimeout(dt.current)},[]);let[le,Mn]=(0,k.useState)(null),yn=(0,k.useRef)(null),en=(0,k.useRef)(!1),[fo,To]=(0,k.useState)(!1);(0,k.useLayoutEffect)(()=>{if(le||!yn.current)return;let _=yn.current;if(yn.current=null,j)return;(F&&_.isConnected&&!_.disabled?_:qn.current)?.focus({preventScroll:!0})},[le,F,j]);let[Kn,Dn]=(0,k.useState)(null),[Ji,Zi]=(0,k.useState)([]),[Cr,of]=(0,k.useState)(0),[rf,lf]=(0,k.useState)(!1),[lt,Hg]=(0,k.useState)(!1),[Bn,sf]=(0,k.useState)(!1),[tn,Sr]=(0,k.useState)(!1),[Ug,af]=(0,k.useState)("main"),[cf,$c]=(0,k.useState)(!1),[Ve,Tc]=(0,k.useState)(!1),[Mr,el]=(0,k.useState)(!1),[Be,Po]=(0,k.useState)([]),[oi,Er]=(0,k.useState)(null),Pc=(0,k.useRef)(!1),[xt,df]=(0,k.useState)(!1),[uf,Dc]=(0,k.useState)(!1),[_f,Yg]=(0,k.useState)(1),[ff,xw]=(0,k.useState)("new-page"),[nn,vs]=(0,k.useState)(""),[Qg,Vg]=(0,k.useState)(!1),[me,ho]=(0,k.useState)(null),Bc=(0,k.useRef)(!1),zc=(0,k.useRef)({rearrange:null,placements:[]}),Lr=(0,k.useRef)({rearrange:null,placements:[]}),[Xg,hf]=(0,k.useState)(0),[Gg,qg]=(0,k.useState)(0),[ri,pf]=(0,k.useState)([]),[ii,mf]=(0,k.useState)(null),gf=(0,k.useRef)({designPlacements:Be,rearrangeState:me,blankCanvas:xt,wireframePurpose:nn});gf.current={designPlacements:Be,rearrangeState:me,blankCanvas:xt,wireframePurpose:nn};let li=(0,k.useRef)({placements:ri,rearrange:ii}),tl=(0,k.useRef)(new Set),ws=(0,k.useRef)(new Set),Jn=(0,k.useRef)(null),si=(0,k.useRef)(),yf=Ve&&F&&!Mr&&xt;(0,k.useEffect)(()=>{if(yf){Dc(!1);let _=Sc(()=>{Dc(!0)});return()=>cancelAnimationFrame(_)}else Dc(!1)},[yf]);let Oc=(0,k.useRef)(new Map),Ac=(0,k.useRef)([]),Fc=(0,k.useRef)(new Map),Nr=(0,k.useRef)(null),[zn,Wc]=(0,k.useState)(!1),[Zn,Kg]=(0,k.useState)([]),jc=(0,k.useRef)(Zn);jc.current=Zn;let[xf,vw]=(0,k.useState)(null),Hc=(0,k.useRef)(null),ww=(0,k.useRef)(!1),bw=(0,k.useRef)([]),kw=(0,k.useRef)(0),Cw=(0,k.useRef)(null),Sw=(0,k.useRef)(null),Mw=(0,k.useRef)(1),[Uc,vf]=(0,k.useState)(!1),ai=(0,k.useRef)(null),[xn,Go]=(0,k.useState)([]),nl=(0,k.useRef)(!1),on=()=>{$c(!0)},Jg=()=>{$c(!1)},wf=()=>{Uc||(ai.current=ot(()=>vf(!0),850))},bf=()=>{ai.current&&(clearTimeout(ai.current),ai.current=null),vf(!1),Jg()};(0,k.useEffect)(()=>()=>{ai.current&&clearTimeout(ai.current)},[]);let[tt,Zg]=(0,k.useState)(()=>{try{let _=JSON.parse(localStorage.getItem("feedback-toolbar-settings")??"");return{...P_,..._,annotationColorId:hs.find(m=>m.id===_.annotationColorId)?_.annotationColorId:P_.annotationColorId}}catch{return P_}}),[po,kf]=(0,k.useState)(!0),[Cf,Sf]=(0,k.useState)(!1),e1=(0,k.useCallback)(_=>{Zg(m=>({...m,..._}))},[]),t1=(0,k.useCallback)(()=>{Pt.current?.classList.add(O.disableTransitions),kf(_=>!_),Sc(()=>{Pt.current?.classList.remove(O.disableTransitions)})},[]),Mf=!1,Do=Mf&&tt.reactEnabled?pw[tt.outputDetail]:"off",[Ft,Yc]=(0,k.useState)(o?null:H??null),Ef=(0,k.useRef)(!1),[Ir,Rr]=(0,k.useState)(C?"connecting":"disconnected"),[Rt,Qc]=(0,k.useState)(null),[bs,Lf]=(0,k.useState)(!1),ol=(0,k.useRef)(null),ks=(0,k.useRef)(!1),$r=(0,k.useRef)(new Set),Cs=(0,k.useRef)(new Map),Nf=(0,k.useCallback)(_=>{$r.current.add(_),eo.current===_&&(eo.current=null)},[]),[qo,Ss]=(0,k.useState)(new Set),[On,rl]=(0,k.useState)(!1),[Tr,ci]=(0,k.useState)(!1),[Bo,Vc]=(0,k.useState)(!1),Pr=(0,k.useRef)(null),An=(0,k.useRef)(null),il=(0,k.useRef)(null),di=(0,k.useRef)(null),ll=(0,k.useRef)(!1),If=(0,k.useRef)(0),eo=(0,k.useRef)(null),Rf=(0,k.useRef)(null),Xc=8,n1=50,Gc=(0,k.useRef)(null),Ms=(0,k.useRef)(null),sl=(0,k.useRef)(null),o1=(0,k.useCallback)(()=>af("main"),[]);(0,k.useEffect)(()=>{tn||$c(!1)},[tn]),(0,k.useLayoutEffect)(()=>{tn&&G.current&&(G.current=!1,Pt.current?.querySelector("[data-agentation-settings-panel] button")?.focus())},[tn]);let Es=F&&Lo&&!Ve;(0,k.useEffect)(()=>{if(Es)we(!1),Ne(!0),$r.current.clear();else if(he){we(!0);let _=ot(()=>{Ne(!1),we(!1)},250);return()=>clearTimeout(_)}},[Es]),(0,k.useEffect)(()=>{Hg(!0),of(window.scrollY);let _=xr(e);Gn(_.filter(us)),lg||(Sf(!0),lg=!0,ot(()=>Sf(!1),750));try{let m=localStorage.getItem("feedback-toolbar-theme");m!==null&&kf(m==="dark")}catch{}try{let m=localStorage.getItem("feedback-toolbar-position");if(m){let w=JSON.parse(m);typeof w.x=="number"&&typeof w.y=="number"&&Qc(w)}}catch{}},[e]),(0,k.useEffect)(()=>{lt&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(tt))},[tt,lt]),(0,k.useEffect)(()=>{lt&&localStorage.setItem("feedback-toolbar-theme",po?"dark":"light")},[po,lt]);let $f=(0,k.useRef)(!1);(0,k.useEffect)(()=>{let _=$f.current;$f.current=bs,_&&!bs&&Rt&&lt&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(Rt))},[bs,Rt,lt]),(0,k.useEffect)(()=>{if(!C||!lt||Ef.current)return;Ef.current=!0,Rr("connecting");let _=window.location.href;pe(async()=>{try{let w=Cv(e),M=H||w,$=!1;if(M)try{let I=xr(e),T=ft(await G0(C,M));Ac.current=T.annotations.filter(ge=>ge.kind==="placement"||ge.kind==="rearrange"),ce.current&&(Yc(T.id),Rr("connected")),L_(e,T.id),$=!0;let X=xr(e).filter(us),_e=new Set(T.annotations.map(ge=>ge.id)),ye=X.filter(ge=>!_e.has(ge.id));if(ye.length>0){let xe=`${typeof window<"u"?window.location.origin:""}${e}`,Ae=(await Promise.allSettled(ye.map(ve=>Oe(C,T.id,{...ve,sessionId:T.id,url:xe})))).map((ve,Me)=>ve.status==="fulfilled"?ve.value:(console.warn("[Agentation] Failed to sync annotation:",ve.reason),ye[Me])),ue=[...T.annotations,...Ae];gn(I,ue,T.id)}else gn(I,T.annotations,T.id)}catch(I){console.warn("[Agentation] Could not join session, creating new:",I),Sv(e)}if(!$){let I=await N_(C,_);L_(e,I.id),ce.current&&(Yc(I.id),Rr("connected"),V?.(I.id));let T=o?new Map([[e,xr(e)]]):mv(),X=typeof window<"u"?window.location.origin:"",_e=[];for(let[ye,ge]of T){let xe=ge.filter(ue=>us(ue)&&!ue._syncedTo);if(xe.length===0)continue;let $e=`${X}${ye}`,Ae=ye===e;_e.push((async()=>{try{let ue=Ae?I:await N_(C,$e),Me=(await Promise.allSettled(xe.map(Xe=>Oe(C,ue.id,{...Xe,sessionId:ue.id,url:$e})))).map((Xe,kt)=>Xe.status==="fulfilled"?Xe.value:(console.warn("[Agentation] Failed to sync annotation:",Xe.reason),xe[kt]));gn(xe,Me,ue.id,ye)}catch(ue){console.warn(`[Agentation] Failed to sync annotations for ${ye}:`,ue)}})())}await Promise.allSettled(_e)}}catch(w){ce.current&&Rr("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",w)}})},[C,H,lt,V,e,pe]),(0,k.useEffect)(()=>{if(!C||!lt)return;let _=async()=>{try{(await fetch(`${C}/health`)).ok?Rr("connected"):Rr("disconnected")}catch{Rr("disconnected")}};_();let m=dg(_,1e4);return()=>clearInterval(m)},[C,lt]);let Ls=(0,k.useRef)(Re),Tf=(0,k.useRef)(!1);(0,k.useLayoutEffect)(()=>{Ls.current=Re,Tf.current=Re.length>0||Be.length>0||(me?.sections.length??0)>0},[Re,Be.length,me?.sections.length]);let qc=(0,k.useCallback)(_=>{let m=Te.current.has(_);if(m&&(it.current.delete(_),it.current.size))return;let w=m?new Set(Te.current):new Set([_]);m&&(Te.current.clear(),Ze());for(let I of w)Cs.current.delete(I),$r.current.delete(I);Gn(I=>I.filter(T=>!w.has(T.id))),Ss(I=>new Set([...I].filter(T=>!w.has(T))));let M=m?[]:Ls.current.filter(I=>I.kind!=="placement"&&I.kind!=="rearrange"),$=M.findIndex(I=>I.id===_);$>=0&&$<M.length-1&&(ht(I=>I===null?$:Math.min(I,$)),dt.current&&clearTimeout(dt.current),dt.current=ot(()=>ht(null),200))},[Ze]);(0,k.useEffect)(()=>!C||!lt||!Ft?void 0:tw(C,Ft,()=>Tf.current,w=>{let{id:M,kind:$}=w;if($==="placement"){for(let[I,T]of Oc.current)if(T===M){Nr.current?.placements.forget(I),Po(X=>X.filter(_e=>_e.id!==I));break}}else if($==="rearrange"){for(let[I,T]of Fc.current)if(T===M){Nr.current?.rearrange.forget(I),ho(X=>{if(!X)return null;let _e=X.sections.filter(ye=>ye.id!==I);return _e.length===0?null:{...X,sections:_e}});break}}else{if(!Ls.current.some(I=>I.id===M))return;Ss(I=>new Set(I).add(M))}}),[C,lt,Ft]),(0,k.useEffect)(()=>{if(!C||!lt)return;let _=Rf.current==="disconnected",m=Ir==="connected";Rf.current=Ir,_&&m&&pe(async()=>{try{let M=xr(e).filter(us);if(M.length===0)return;let I=`${typeof window<"u"?window.location.origin:""}${e}`,T=Ft,X=[];if(T)try{X=ft(await G0(C,T)).annotations}catch{T=null}T||(T=(await N_(C,I)).id,ce.current&&Yc(T),L_(e,T));let _e=new Set(X.map(ge=>ge.id)),ye=M.filter(ge=>!_e.has(ge.id));if(ye.length>0){let xe=(await Promise.allSettled(ye.map(Ae=>Oe(C,T,{...Ae,sessionId:T,url:I})))).map((Ae,ue)=>Ae.status==="fulfilled"?Ae.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",Ae.reason),ye[ue])),$e=[...X,...xe];gn(M,$e,T)}}catch(M){console.warn("[Agentation] Failed to sync on reconnect:",M)}})},[Ir,C,lt,Ft,e,pe]);let r1=(0,k.useCallback)(()=>{Io||(Ro(!0),Sr(!1),K(!1),ot(()=>{Ev(!0),No(!0),Ro(!1)},400))},[Io]);(0,k.useEffect)(()=>{if(!x||!lt||!h||h.length===0||Re.length>0)return;let _=[];return _.push(ot(()=>{K(!0)},f-200)),h.forEach((m,w)=>{let M=f+w*300;_.push(ot(()=>{let $=document.querySelector(m.selector);if(!$)return;let I=At($),{name:T,path:X}=Yi($),_e={id:`demo-${Date.now()}-${w}`,x:(I.left+I.width/2)/window.innerWidth*100,y:I.top+I.height/2+window.scrollY,comment:m.comment,element:T,elementPath:X,timestamp:Date.now(),selectedText:m.selectedText,boundingBox:{x:I.left,y:I.top+window.scrollY,width:I.width,height:I.height},nearbyText:ls($),cssClasses:ss($)};Gn(ye=>[...ye,_e])},M))}),()=>{_.forEach(clearTimeout)}},[x,lt,h,f]),(0,k.useEffect)(()=>{let _=()=>{of(window.scrollY),ae(m=>m+1),lf(!0),sl.current&&clearTimeout(sl.current),sl.current=ot(()=>{lf(!1)},150)};return J.addEventListener("scroll",_,{passive:!0,capture:!0}),()=>{J.removeEventListener("scroll",_,!0),sl.current&&clearTimeout(sl.current)}},[J]),(0,k.useEffect)(()=>{if(!lt)return;let _=Re.filter(m=>!qo.has(m.id));_.length>0?Ft?E_(e,_,Ft):Dg(e,_):localStorage.removeItem(J_(e))},[Re,e,lt,Ft,de,qo]),(0,k.useEffect)(()=>{if(lt&&!Pc.current){Pc.current=!0;let _=gv(e);_.length>0&&Po(_)}},[lt,e]),(0,k.useEffect)(()=>{if(lt&&Pc.current&&!xt){let _=Be.filter(m=>!ri.includes(m));_.length>0?yv(e,_):xv(e)}},[Be,e,lt,xt,ri]),(0,k.useEffect)(()=>{if(lt&&!Bc.current){Bc.current=!0;let _=vv(e);if(_){let m={..._,sections:_.sections.map(w=>({...w,currentRect:w.currentRect??{...w.originalRect}}))};ho(m)}}},[lt,e]),(0,k.useEffect)(()=>{lt&&Bc.current&&!xt&&(me&&me!==ii?wv(e,me):bv(e))},[me,e,lt,xt,ii]);let Kc=(0,k.useRef)(!1);(0,k.useEffect)(()=>{if(lt&&!Kc.current){Kc.current=!0;let _=kv(e);_&&(Lr.current={rearrange:_.rearrange,placements:_.placements||[]},_.purpose&&vs(_.purpose))}},[lt,e]),(0,k.useEffect)(()=>{if(!lt||!Kc.current||de)return;let _=Lr.current;xt?(me?.sections?.length??0)>0||Be.length>0||nn?X0(e,{rearrange:me,placements:Be,purpose:nn}):gc(e):(_.rearrange?.sections?.length??0)>0||_.placements.length>0||nn?X0(e,{rearrange:_.rearrange,placements:_.placements,purpose:nn}):gc(e)},[me,Be,nn,xt,e,lt,de]),(0,k.useEffect)(()=>{Ve&&!me&&ho({sections:[],originalOrder:[],detectedAt:Date.now()})},[Ve,me]),(0,k.useEffect)(()=>{if(!C||!Ft)return;let _={create:w=>pe(()=>q0(C,Ft,w)),update:(w,M)=>pe(()=>I_(C,w,M)),remove:w=>pe(()=>yc(C,w))};Oc.current=new Map,Fc.current=new Map;let m={placements:ng(_,Oc.current,Ac.current.filter(w=>w.kind==="placement")),rearrange:ng(_,Fc.current,Ac.current.filter(w=>w.kind==="rearrange"))};return Nr.current=m,()=>{m.placements.dispose(),m.rearrange.dispose(),Nr.current===m&&(Nr.current=null)}},[C,Ft,e,pe]),(0,k.useEffect)(()=>{let _=window.location.pathname+window.location.search+window.location.hash;Nr.current?.placements.replace(Be.filter(m=>!ri.includes(m)).map(m=>({id:m.id,x:m.x/window.innerWidth*100,y:m.y,comment:`Place ${m.type} at (${Math.round(m.x)}, ${Math.round(m.y)}), ${m.width}\xD7${m.height}px${m.text?` \u2014 "${m.text}"`:""}`,element:`[design:${m.type}]`,elementPath:"[placement]",timestamp:m.timestamp,url:_,intent:"change",severity:"important",kind:"placement",placement:{componentType:m.type,width:m.width,height:m.height,scrollY:m.scrollY,text:m.text}})))},[Be,C,Ft,e,ri]),(0,k.useEffect)(()=>{let _=Nr.current;if(!_)return;if(me===ii){_.rearrange.replace([]);return}let m=ot(()=>{let w=window.location.pathname+window.location.search+window.location.hash,M=[];for(let $ of me?.sections??[]){let I=$.originalRect,T=$.currentRect,X=Math.abs(I.x-T.x)>1||Math.abs(I.y-T.y)>1||Math.abs(I.width-T.width)>1||Math.abs(I.height-T.height)>1;if(!X&&!$.note)continue;let _e=$.note?` \u2014 "${$.note}"`:"";M.push({id:$.id,x:T.x/window.innerWidth*100,y:T.y,comment:X?`Move ${$.label} section (${$.tagName}) \u2014 from (${Math.round(I.x)},${Math.round(I.y)}) ${Math.round(I.width)}\xD7${Math.round(I.height)} to (${Math.round(T.x)},${Math.round(T.y)}) ${Math.round(T.width)}\xD7${Math.round(T.height)}${_e}`:`Note on ${$.label} section (${$.tagName})${_e}`,element:$.selector,elementPath:"[rearrange]",timestamp:me.detectedAt,url:w,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:$.selector,label:$.label,tagName:$.tagName,originalRect:I,currentRect:T}})}_.rearrange.replace(M)},300);return()=>clearTimeout(m)},[me,C,Ft,e,ii]);let Jc=(0,k.useCallback)(()=>{clearTimeout(si.current),el(!1),Tc(!0)},[]);(0,k.useEffect)(()=>()=>clearTimeout(si.current),[]);let al=(0,k.useCallback)(()=>{el(!0),Tc(!1),Er(null),clearTimeout(si.current),si.current=ot(()=>{el(!1)},300)},[]),Ns=(0,k.useCallback)(()=>{let _=qn.current?.getRootNode();$o.current=!!_?.activeElement&&!!Pt.current?.contains(_.activeElement),$o.current&&_?.activeElement?.blur(),Sr(!1),Ve&&(el(!0),Tc(!1),Er(null),clearTimeout(si.current),si.current=ot(()=>{el(!1)},300)),K(!1)},[Ve]),Pf=(0,k.useCallback)(()=>{Bn||(Q5(),sf(!0))},[Bn]),Is=(0,k.useCallback)(()=>{Bn&&(N0(),sf(!1))},[Bn]),Zc=(0,k.useCallback)(()=>{Bn?Is():Pf()},[Bn,Pf,Is]),cl=(0,k.useCallback)((_=xn)=>{let m=_.filter(T=>T.element.isConnected);if(m.length===0){Go([]);return}let w=m[0],M=w.element,$=m.length>1,I=m.map(T=>At(T.element));if($){let T={left:Math.min(...I.map(Me=>Me.left)),top:Math.min(...I.map(Me=>Me.top)),right:Math.max(...I.map(Me=>Me.right)),bottom:Math.max(...I.map(Me=>Me.bottom))},X=m.slice(0,5).map(Me=>Me.name).join(", "),_e=m.length>5?` +${m.length-5} more`:"",ye=I.map(Me=>({x:Me.left,y:Me.top+window.scrollY,width:Me.width,height:Me.height})),xe=m[m.length-1].element,$e=I[I.length-1],Ae=$e.left+$e.width/2,ue=$e.top+$e.height/2,ve=D_(xe);L({id:Date.now().toString(),x:Ae/window.innerWidth*100,y:ve?ue:ue+window.scrollY,clientY:ue,element:`${m.length} elements: ${X}${_e}`,elementPath:"multi-select",boundingBox:{x:T.left,y:T.top+window.scrollY,width:T.right-T.left,height:T.bottom-T.top},isMultiSelect:!0,isFixed:ve,elementBoundingBoxes:ye,multiSelectElements:m.map(Me=>Me.element),targetElement:xe,fullPath:fs(M),accessibility:uc(M),computedStyles:dc(M),computedStylesObj:cc(M),nearbyElements:ac(M),cssClasses:ss(M),nearbyText:ls(M),sourceFile:bc(M),attributes:_s(M,re)})}else{let T=I[0],X=D_(M);L({id:Date.now().toString(),x:T.left/window.innerWidth*100,y:X?T.top:T.top+window.scrollY,clientY:T.top,element:w.name,elementPath:w.path,boundingBox:{x:T.left,y:X?T.top:T.top+window.scrollY,width:T.width,height:T.height},isFixed:X,fullPath:fs(M),accessibility:uc(M),computedStyles:dc(M),computedStylesObj:cc(M),nearbyElements:ac(M),cssClasses:ss(M),nearbyText:ls(M),reactComponents:w.reactComponents,targetElement:M,sourceFile:bc(M),attributes:_s(M,re)})}Go([]),Fe(null)},[xn,re]);(0,k.useEffect)(()=>{F||(L(null),Mn(null),Dn(null),Zi([]),Fe(null),Sr(!1),Go([]),nl.current=!1,Bn&&Is())},[F,Bn,Is]),(0,k.useEffect)(()=>()=>{N0()},[]),(0,k.useEffect)(()=>{if(!F)return;let _=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),m=document.createElement("style");return m.id="agentation-cursor",m.textContent=`
      body { cursor: crosshair !important; }
      body :is(${_}) { cursor: text !important; }
    `,document.head.appendChild(m),()=>{let w=document.getElementById("agentation-cursor");w&&w.remove()}},[F]),(0,k.useEffect)(()=>{if(xf!==null&&F)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[xf,F]),(0,k.useEffect)(()=>{if(!F||j||le||zn||Ve)return;let _=null,m=(I,T,X)=>{let _e=kc(I,T),ye=X?$0(I,T):_e;if(!ye||Zt(ye,"[data-feedback-toolbar], [data-annotation-popup], [data-annotation-marker]")){Fe(null);return}let{name:ge,elementName:xe,path:$e,reactComponents:Ae}=wc(ye,Do,re);Fe({element:ge,elementName:xe,elementPath:$e,rect:At(ye),reactComponents:Ae,isPiercing:X&&ye!==_e}),Ue({x:I,y:T})},w=I=>{let T=I.composedPath()[0]||I.target;if(Zt(T,"[data-feedback-toolbar], [data-annotation-popup], [data-annotation-marker]")){_=null,Fe(null);return}_={x:I.clientX,y:I.clientY},m(I.clientX,I.clientY,vr(I))},M=I=>{(I.key==="Meta"||I.key==="Control")&&_&&m(_.x,_.y,vr(I))},$=()=>{_=null,Fe(null)};return J.addEventListener("mousemove",w),J.addEventListener("keydown",M),J.addEventListener("keyup",M),J.addEventListener("mouseleave",$),window.addEventListener("blur",$),()=>{J.removeEventListener("mousemove",w),J.removeEventListener("keydown",M),J.removeEventListener("keyup",M),J.removeEventListener("mouseleave",$),window.removeEventListener("blur",$)}},[F,j,le,zn,Ve,Do,re]);let Rs=(0,k.useCallback)((_,m)=>{if(le&&!Tr){Ms.current?.shake();return}if(j&&!On){if(Pt.current?.querySelector("[data-annotation-popup]:not([data-annotation-card]) textarea")?.value.trim()){Gc.current?.shake();return}rl(!0)}if(yn.current=m??null,en.current=m?.matches(":focus-visible")??!1,To(!1),ci(!1),Mn(_),Ie(null),mt(null),Pe([]),_.elementBoundingBoxes?.length){let w=[];for(let M of _.elementBoundingBoxes){let $=M.x+M.width/2,I=M.y+M.height/2-window.scrollY,T=_c($,I,M);T&&w.push(T)}Zi(w),Dn(null)}else if(_.boundingBox){let w=_.boundingBox,M=w.x+w.width/2,$=_.isFixed?w.y+w.height/2:w.y+w.height/2-window.scrollY,I=_c(M,$,w);if(I){let T=At(I),X=T.width/w.width,_e=T.height/w.height;X<.5||_e<.5?Dn(null):Dn(I)}else Dn(null);Zi([])}else Dn(null),Zi([])},[j,On,le,Tr]);(0,k.useEffect)(()=>{if(!F||zn||Ve)return;let _=m=>{if(ll.current){ll.current=!1,m.preventDefault(),m.stopPropagation();return}let w=m.composedPath()[0]||m.target;if(Zt(w,"[data-feedback-toolbar]")||Zt(w,"[data-annotation-popup]")||Zt(w,"[data-annotation-marker]"))return;if(vr(m)&&!j&&!le){m.preventDefault(),m.stopPropagation(),nl.current=m.shiftKey;let Me=$0(m.clientX,m.clientY);if(!Me)return;let Xe=At(Me),{name:kt,path:un,reactComponents:Ee}=wc(Me,Do,re),ke=xn.findIndex(nt=>nt.element===Me);ke>=0?Go(nt=>nt.filter(($t,yo)=>yo!==ke)):Go(nt=>[...nt,{element:Me,rect:Xe,name:kt,path:un,reactComponents:Ee??void 0}]);return}let M=Zt(w,"button, a, input, select, textarea, [role='button'], [onclick]");if(tt.blockInteractions&&(m.preventDefault(),m.stopPropagation()),j&&!On){if(M&&!tt.blockInteractions)return;m.preventDefault(),Gc.current?.shake();return}if(le&&!Tr){if(M&&!tt.blockInteractions)return;m.preventDefault(),Ms.current?.shake();return}m.preventDefault();let $=kc(m.clientX,m.clientY);if(!$)return;let{name:I,path:T,reactComponents:X}=wc($,Do,re),_e=At($),ye=m.clientX/window.innerWidth*100,ge=D_($),xe=ge?m.clientY:m.clientY+window.scrollY,$e=$.ownerDocument.defaultView?.getSelection(),Ae;$e&&$e.toString().trim().length>0&&(Ae=$e.toString().trim().slice(0,500));let ue=cc($),ve=dc($);rl(!1),L({id:Date.now().toString(),x:ye,y:xe,clientY:m.clientY,element:I,elementPath:T,selectedText:Ae,boundingBox:{x:_e.left,y:ge?_e.top:_e.top+window.scrollY,width:_e.width,height:_e.height},nearbyText:ls($),cssClasses:ss($),isFixed:ge,fullPath:fs($),accessibility:uc($),computedStyles:ve,computedStylesObj:ue,nearbyElements:ac($),reactComponents:X??void 0,sourceFile:bc($),attributes:_s($,re),frame:G5($,m.clientX,m.clientY),targetElement:$}),Fe(null)};return J.addEventListener("click",_,!0),()=>J.removeEventListener("click",_,!0)},[F,zn,Ve,j,On,le,Tr,tt.blockInteractions,Do,re,xn]),(0,k.useEffect)(()=>{if(!F)return;let _=w=>{let M=(w.key==="Meta"||w.key==="Control")&&!vr(w),$=w.key==="Shift"&&nl.current;(M||$)&&!An.current&&xn.length>0&&cl()},m=()=>{nl.current=!1,Go([]),Fe(null),Pr.current=null,An.current=null,Vc(!1),di.current?.replaceChildren()};return J.addEventListener("keyup",_),window.addEventListener("blur",m),()=>{J.removeEventListener("keyup",_),window.removeEventListener("blur",m)}},[F,xn,cl]),(0,k.useEffect)(()=>{if(!F||j||zn||Ve)return;let _=m=>{if(m.button!==0)return;ll.current=!1;let w=m.composedPath()[0]||m.target;if(Zt(w,"[data-feedback-toolbar]")||Zt(w,"[data-annotation-marker]")||Zt(w,"[data-annotation-popup]"))return;let M=new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]);!vr(m)&&(M.has(w.tagName)||w.isContentEditable)||(m.preventDefault(),Pr.current={x:m.clientX,y:m.clientY})};return J.addEventListener("mousedown",_),()=>J.removeEventListener("mousedown",_)},[F,j,zn,Ve]),(0,k.useEffect)(()=>{if(!F||j)return;let _=m=>{if(!Pr.current)return;let w=m.clientX-Pr.current.x,M=m.clientY-Pr.current.y,$=w*w+M*M,I=Xc*Xc;if(!Bo&&$>=I&&(An.current=Pr.current,Vc(!0),m.preventDefault()),(Bo||$>=I)&&An.current){if(il.current){let Ee=Math.min(An.current.x,m.clientX),ke=Math.min(An.current.y,m.clientY),nt=Math.abs(m.clientX-An.current.x),$t=Math.abs(m.clientY-An.current.y);il.current.style.transform=`translate(${Ee}px, ${ke}px)`,il.current.style.width=`${nt}px`,il.current.style.height=`${$t}px`}let T=Date.now();if(T-If.current<n1)return;If.current=T;let X=An.current.x,_e=An.current.y,ye=Math.min(X,m.clientX),ge=Math.min(_e,m.clientY),xe=Math.max(X,m.clientX),$e=Math.max(_e,m.clientY),Ae=(ye+xe)/2,ue=(ge+$e)/2,ve=new Set,Me=[[ye,ge],[xe,ge],[ye,$e],[xe,$e],[Ae,ue],[Ae,ge],[Ae,$e],[ye,ue],[xe,ue]];for(let[Ee,ke]of Me){let nt=document.elementsFromPoint(Ee,ke);for(let $t of nt)$t instanceof HTMLElement&&ve.add($t)}let Xe=J.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(let Ee of Xe)if(Ee instanceof HTMLElement){let ke=At(Ee),nt=ke.left+ke.width/2,$t=ke.top+ke.height/2,yo=nt>=ye&&nt<=xe&&$t>=ge&&$t<=$e,to=Math.min(ke.right,xe)-Math.max(ke.left,ye),ul=Math.min(ke.bottom,$e)-Math.max(ke.top,ge),zs=to>0&&ul>0?to*ul:0,Xt=ke.width*ke.height,_l=Xt>0?zs/Xt:0;(yo||_l>.5)&&ve.add(Ee)}let kt=[],un=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(let Ee of ve){if(Zt(Ee,"[data-feedback-toolbar]")||Zt(Ee,"[data-annotation-marker]"))continue;let ke=At(Ee);if(!(ke.width>window.innerWidth*.8&&ke.height>window.innerHeight*.5)&&!(ke.width<10||ke.height<10)&&ke.left<xe&&ke.right>ye&&ke.top<$e&&ke.bottom>ge){let nt=Ee.tagName,$t=un.has(nt);if(!$t&&(nt==="DIV"||nt==="SPAN")){let yo=Ee.textContent&&Ee.textContent.trim().length>0,to=Ee.onclick!==null||Ee.getAttribute("role")==="button"||Ee.getAttribute("role")==="link"||Ee.classList.contains("clickable")||Ee.hasAttribute("data-clickable");(yo||to)&&!Ee.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&($t=!0)}if($t){let yo=!1;for(let to of kt)if(to.left<=ke.left&&to.right>=ke.right&&to.top<=ke.top&&to.bottom>=ke.bottom){yo=!0;break}yo||kt.push(ke)}}}if(di.current){let Ee=di.current;for(;Ee.children.length>kt.length;)Ee.removeChild(Ee.lastChild);kt.forEach((ke,nt)=>{let $t=Ee.children[nt];$t||($t=document.createElement("div"),$t.className=O.selectedElementHighlight,Ee.appendChild($t)),$t.style.transform=`translate(${ke.left}px, ${ke.top}px)`,$t.style.width=`${ke.width}px`,$t.style.height=`${ke.height}px`})}}};return J.addEventListener("mousemove",_,{passive:!0}),()=>J.removeEventListener("mousemove",_)},[F,j,Bo,Xc]),(0,k.useEffect)(()=>{if(!F)return;let _=m=>{let w=Bo,M=An.current;if(Bo&&M){ll.current=!0;let $=Math.min(M.x,m.clientX),I=Math.min(M.y,m.clientY),T=Math.max(M.x,m.clientX),X=Math.max(M.y,m.clientY),_e=[];J.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(ue=>{if(!(ue instanceof HTMLElement)||Zt(ue,"[data-feedback-toolbar]")||Zt(ue,"[data-annotation-marker]"))return;let ve=At(ue);ve.width>window.innerWidth*.8&&ve.height>window.innerHeight*.5||ve.width<10||ve.height<10||ve.left<T&&ve.right>$&&ve.top<X&&ve.bottom>I&&_e.push({element:ue,rect:ve})});let ge=_e.filter(({element:ue})=>!_e.some(({element:ve})=>ve!==ue&&ue.contains(ve))),xe=m.clientX/window.innerWidth*100,$e=m.clientY+window.scrollY,Ae=(vr(m)||xn.length>0)&&!j&&!le;if(ge.length>0)if(Ae){let ue=[...xn];for(let{element:ve,rect:Me}of ge){if(ue.some(Ee=>Ee.element===ve))continue;let{name:Xe,path:kt,reactComponents:un}=wc(ve,Do,re);ue.push({element:ve,rect:Me,name:Xe,path:kt,reactComponents:un??void 0})}nl.current=m.shiftKey,vr(m)?Go(ue):cl(ue)}else{let ue=ge.reduce((Ee,{rect:ke})=>({left:Math.min(Ee.left,ke.left),top:Math.min(Ee.top,ke.top),right:Math.max(Ee.right,ke.right),bottom:Math.max(Ee.bottom,ke.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),ve=ge.slice(0,5).map(({element:Ee})=>Yi(Ee).name).join(", "),Me=ge.length>5?` +${ge.length-5} more`:"",Xe=ge[0].element,kt=cc(Xe),un=dc(Xe);L({id:Date.now().toString(),x:xe,y:$e,clientY:m.clientY,element:`${ge.length} elements: ${ve}${Me}`,elementPath:"multi-select",boundingBox:{x:ue.left,y:ue.top+window.scrollY,width:ue.right-ue.left,height:ue.bottom-ue.top},isMultiSelect:!0,fullPath:fs(Xe),accessibility:uc(Xe),computedStyles:un,computedStylesObj:kt,nearbyElements:ac(Xe),cssClasses:ss(Xe),nearbyText:ls(Xe),sourceFile:bc(Xe),attributes:_s(Xe,re)})}else if(Ae&&!vr(m))cl();else if(!Ae){let ue=Math.abs(T-$),ve=Math.abs(X-I);ue>20&&ve>20&&L({id:Date.now().toString(),x:xe,y:$e,clientY:m.clientY,element:"Area selection",elementPath:`region at (${Math.round($)}, ${Math.round(I)})`,boundingBox:{x:$,y:I+window.scrollY,width:ue,height:ve},isMultiSelect:!0})}Fe(null)}else w&&(ll.current=!0);Pr.current=null,An.current=null,Vc(!1),di.current&&(di.current.innerHTML="")};return J.addEventListener("mouseup",_),()=>J.removeEventListener("mouseup",_)},[F,Bo,j,le,Do,re,xn,cl]);let mo=(0,k.useCallback)(async(_,m,w)=>{let M=tt.webhookUrl||B;if(!M||!tt.webhooksEnabled&&!w)return!1;try{return(await fetch(M,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:_,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...m})})).ok}catch($){return console.warn("[Agentation] Webhook failed:",$),!1}},[B,tt.webhookUrl,tt.webhooksEnabled]),i1=(0,k.useCallback)(_=>{if(!j||j.isSubmitted)return;let m={id:j.id,x:j.x,y:j.y,comment:_,element:j.element,elementPath:j.elementPath,timestamp:Date.now(),selectedText:j.selectedText,boundingBox:j.boundingBox,nearbyText:j.nearbyText,cssClasses:j.cssClasses,isMultiSelect:j.isMultiSelect,isFixed:j.isFixed,fullPath:j.fullPath,accessibility:j.accessibility,computedStyles:j.computedStyles,nearbyElements:j.nearbyElements,reactComponents:j.reactComponents,sourceFile:j.sourceFile,attributes:j.attributes,frame:j.frame,elementBoundingBoxes:j.elementBoundingBoxes,...C&&Ft?{sessionId:Ft,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};Gn(w=>[...w,m]),L({...j,isSubmitted:!0}),eo.current=m.id,S?.(m),mo("annotation.add",{annotation:m}),rl(!0),window.getSelection()?.removeAllRanges(),C&&Ft&&pe(async()=>{let w=await Oe(C,Ft,m);if(o){let M=xr(e);E_(e,M.map($=>$.id===m.id?{...$,id:w.id}:$),Ft)}!ce.current||ze.current.has(m.id)||w.id!==m.id&&(Cs.current.set(w.id,m.id),eo.current===m.id&&(eo.current=w.id),Gn(M=>M.map($=>$.id===m.id?{...$,id:w.id}:$)),$r.current.delete(m.id)&&$r.current.add(w.id))}).catch(w=>{console.warn("[Agentation] Failed to sync annotation:",w)})},[j,S,mo,C,Ft,pe,e,o]),ed=(0,k.useCallback)(()=>{rl(!0)},[]),td=(0,k.useCallback)(()=>{L(null),rl(!1)},[]),nd=(0,k.useCallback)(_=>{if(ze.current.has(_))return;ze.current.add(_);let m=Re.find(w=>w.id===_);le?.id===_&&(To(!1),ci(!0)),Ss(w=>new Set(w).add(_)),m&&(b?.(m),mo("annotation.delete",{annotation:m})),C&&pe(()=>yc(C,bt.current.get(_)??_)).catch(w=>{console.warn("[Agentation] Failed to delete annotation from server:",w)})},[Re,le,b,mo,C,pe]),$s=(0,k.useCallback)(_=>{if(!_){Ie(null),mt(null),Pe([]);return}if(Ie(_.id),_.elementBoundingBoxes?.length){let m=[];for(let w of _.elementBoundingBoxes){let M=w.x+w.width/2,$=w.y+w.height/2-window.scrollY,I=_c(M,$,w);I&&m.push(I)}Pe(m),mt(null)}else if(_.boundingBox){let m=_.boundingBox,w=m.x+m.width/2,M=_.isFixed?m.y+m.height/2:m.y+m.height/2-window.scrollY,$=_c(w,M,m);if($){let I=At($),T=I.width/m.width,X=I.height/m.height;T<.5||X<.5?mt(null):mt($)}else mt(null);Pe([])}else mt(null),Pe([])},[]),l1=(0,k.useCallback)(_=>{if(!le)return;let m={...le,comment:_};Mn(m),Gn(w=>w.map(M=>M.id===le.id?m:M)),N?.(m),mo("annotation.update",{annotation:m}),C&&pe(()=>I_(C,bt.current.get(le.id)??le.id,{comment:_})).catch(w=>{console.warn("[Agentation] Failed to update annotation on server:",w)}),To(en.current||!!yn.current?.matches(":hover")),ci(!0)},[le,N,mo,C,pe]),s1=(0,k.useCallback)(()=>{To(en.current||!!yn.current?.matches(":hover")),ci(!0)},[]),a1=(0,k.useCallback)(()=>{fo&&le&&!j&&Ie(le.id),Mn(null),Dn(null),Zi([]),ci(!1)},[fo,le,j]),Ts=(0,k.useCallback)((_,m)=>{if(!_.length&&!m)return;be(!0);let w={placements:[...li.current.placements,..._],rearrange:m??li.current.rearrange};li.current=w,pf(w.placements),mf(w.rearrange),clearTimeout(at.current),at.current=ot(()=>{Po(M=>M.filter($=>!w.placements.includes($))),ho(M=>M===w.rearrange?null:M),li.current={placements:[],rearrange:null},pf([]),mf(null),at.current=void 0,Ze()},200)},[Ze]),Dr=(0,k.useCallback)(()=>{if(!ce.current)return;let _=new Map(Ls.current.map(X=>[X.id,X])),m=[];for(let X of Re){let _e=_.get(bt.current.get(X.id)??X.id)??_.get(X.id);_e&&_e.comment===X.comment&&!ze.current.has(_e.id)&&!m.includes(_e)&&m.push(_e)}let w=m.length,M=gf.current,$=Be.filter(X=>M.designPlacements.includes(X)&&!li.current.placements.includes(X)),I=me===M.rearrangeState&&me!==li.current.rearrange?me:null,T=Zn.filter(X=>jc.current.includes(X));if(!(w===0&&T.length===0&&$.length===0&&!I)){for(let X of m)ze.current.add(X.id),Te.current.add(X.id),it.current.add(X.id);if(Ss(X=>new Set([...X,...m.map(_e=>_e.id)])),E?.(m),mo("annotations.clear",{annotations:m}),C&&Promise.all(m.map(X=>pe(()=>yc(C,bt.current.get(X.id)??X.id)).catch(_e=>{console.warn("[Agentation] Failed to delete annotation from server:",_e)}))),be(!0),Kg(X=>X.filter(_e=>!T.includes(_e))),T.length>0&&T.length===jc.current.length){let X=Hc.current;X?.getContext("2d")?.clearRect(0,0,X.width,X.height)}Ts($,I),xt===M.blankCanvas&&nn===M.wireframePurpose&&Be===M.designPlacements&&me===M.rearrangeState&&(xt&&df(!1),nn&&vs(""),Lr.current={rearrange:null,placements:[]},gc(e)),Ze()}},[e,Re,Zn,Be,me,xt,nn,E,mo,C,pe,Ze,Ts]),od=(0,k.useCallback)(async()=>{let _=W.start(),m=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:e,w=Ve&&xt,M;if(w){if(Be.length===0&&!me&&!nn)return;M=r?Cc(m,r):""}else{if(M=Z0(Re,m,tt.outputDetail,{appName:r}),!M&&Zn.length===0&&Be.length===0&&!me)return;M||(M=Cc(m,r))}if(!w&&Zn.length>0){let I=new Set;for(let ye of Re)ye.drawingIndex!=null&&I.add(ye.drawingIndex);let T=Hc.current;T&&(T.style.visibility="hidden");let X=[],_e=window.scrollY;for(let ye=0;ye<Zn.length;ye++){if(I.has(ye))continue;let ge=Zn[ye];if(ge.points.length<2)continue;let xe=ge.fixed?ge.points:ge.points.map(Bt=>({x:Bt.x,y:Bt.y-_e})),$e=1/0,Ae=1/0,ue=-1/0,ve=-1/0;for(let Bt of xe)$e=Math.min($e,Bt.x),Ae=Math.min(Ae,Bt.y),ue=Math.max(ue,Bt.x),ve=Math.max(ve,Bt.y);let Me=ue-$e,Xe=ve-Ae,kt=Math.hypot(Me,Xe),un=xe[0],Ee=xe[xe.length-1],ke=Math.hypot(Ee.x-un.x,Ee.y-un.y),nt,$t=ke<kt*.35,yo=Me/Math.max(Xe,1);if($t&&kt>20){let Bt=Math.max(Me,Xe)*.15,Ko=0;for(let Br of xe){let d1=Br.x-$e<Bt,u1=ue-Br.x<Bt,_1=Br.y-Ae<Bt,f1=ve-Br.y<Bt;(d1||u1)&&(_1||f1)&&Ko++}nt=Ko>xe.length*.15?"box":"circle"}else yo>3&&Xe<40?nt="underline":ke>kt*.5?nt="arrow":nt="drawing";let to=Math.min(10,xe.length),ul=Math.max(1,Math.floor(xe.length/to)),zs=new Set,Xt=[],_l=[un];for(let Bt=ul;Bt<xe.length-1;Bt+=ul)_l.push(xe[Bt]);_l.push(Ee);for(let Bt of _l){let Ko=kc(Bt.x,Bt.y);if(!Ko||zs.has(Ko)||Zt(Ko,"[data-feedback-toolbar]"))continue;zs.add(Ko);let{name:Br}=Yi(Ko);Xt.includes(Br)||Xt.push(Br)}let Os=`${Math.round($e)},${Math.round(Ae)} \u2192 ${Math.round(ue)},${Math.round(ve)}`,_i;(nt==="circle"||nt==="box")&&Xt.length>0?_i=`${nt==="box"?"Boxed":"Circled"} **${Xt[0]}**${Xt.length>1?` (and ${Xt.slice(1).join(", ")})`:""} (region: ${Os})`:nt==="underline"&&Xt.length>0?_i=`Underlined **${Xt[0]}** (${Os})`:nt==="arrow"&&Xt.length>=2?_i=`Arrow from **${Xt[0]}** to **${Xt[Xt.length-1]}** (${Math.round(un.x)},${Math.round(un.y)} \u2192 ${Math.round(Ee.x)},${Math.round(Ee.y)})`:Xt.length>0?_i=`${nt==="arrow"?"Arrow":"Drawing"} near **${Xt.join("**, **")}** (region: ${Os})`:_i=`Drawing at ${Os}`,X.push(_i)}T&&(T.style.visibility=""),X.length>0&&(M+=`
**Drawings:**
`,X.forEach((ye,ge)=>{M+=`${ge+1}. ${ye}
`}))}if((Be.length>0||w&&nn)&&(M+=`
`+Q0(Be,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:xt,wireframePurpose:nn||void 0},tt.outputDetail)),me){let I=V0(me,tt.outputDetail,{width:window.innerWidth,height:window.innerHeight});I&&(M+=`
`+I)}if(M=eg(Re,M,s),!M){z(!1);return}let $=!p||await Zv(M);y?.(M),W.isCurrent(_)&&(z($),$&&(W.schedule(_,()=>z(!1),2e3),tt.autoClearAfterCopy&&W.schedule(_,Dr,500)))},[Re,Zn,Be,me,xt,Ve,ff,nn,e,tt.outputDetail,Do,re,tt.autoClearAfterCopy,Dr,W,p,s,r,y]),rd=sg(tt.webhookUrl)||sg(B||""),go=v!=null||rd&&!tt.webhooksEnabled,Ps=F?go?337:297:44,id=(0,k.useCallback)(async()=>{let _=Z.start(),m=typeof window<"u"?window.location.href:e,w=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:e,M=Z0(Re,w,tt.outputDetail,{appName:r});if(!M&&Be.length===0&&!me)return;if(M||(M=Cc(w,r)),Be.length>0&&(M+=`
`+Q0(Be,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:xt,wireframePurpose:nn||void 0},tt.outputDetail)),me){let X=V0(me,tt.outputDetail,{width:window.innerWidth,height:window.innerHeight});X&&(M+=`
`+X)}Y("sending");let $=!0;try{await v?.(M,Re)}catch(X){console.warn("[Agentation] Submit callback failed:",X),$=!1}if(!Z.isCurrent(_))return;let I=rd?await mo("submit",{output:M,annotations:Re,url:m},!0):!0,T=$&&I&&go;Z.isCurrent(_)&&(Y(T?"sent":"failed"),Z.schedule(_,()=>Y("idle"),2500),T&&tt.autoClearAfterCopy&&Z.schedule(_,Dr,500))},[v,r,mo,Re,Be,me,xt,ff,e,tt.outputDetail,Do,re,tt.autoClearAfterCopy,Dr,rd,go,Z]);(0,k.useEffect)(()=>{let m=(I=!1)=>{ol.current?.dragging&&(ks.current=I,Lf(!1)),ol.current=null},w=I=>{let T=ol.current;if(!T)return;if((I.buttons&1)===0){m();return}let X=I.clientX-T.x,_e=I.clientY-T.y,ye=Math.sqrt(X*X+_e*_e);if(!T.dragging&&ye>10&&(T.dragging=!0,Lf(!0)),T.dragging){let ge=T.toolbarX+X,xe=T.toolbarY+_e,$e=20,Ae=337,ue=44,Me=Ae-Ps,Xe=$e-Me,kt=window.innerWidth-$e-Ae;ge=Math.max(Xe,Math.min(kt,ge)),xe=Math.max($e,Math.min(window.innerHeight-ue-$e,xe)),Qc({x:ge,y:xe})}},M=()=>m(!0),$=()=>m();return J.addEventListener("mousemove",w),J.addEventListener("mouseup",M,!0),window.addEventListener("blur",$),()=>{J.removeEventListener("mousemove",w),J.removeEventListener("mouseup",M,!0),window.removeEventListener("blur",$)}},[Ps]);let c1=(0,k.useCallback)(_=>{if(ks.current=!1,ol.current=null,_.button!==0||_.target.closest("button")&&(_.target.closest("button")!==qn.current||F)||_.target.closest("[data-agentation-settings-panel]"))return;let m=_.currentTarget.parentElement;if(!m)return;let w=At(m);ol.current={x:_.clientX,y:_.clientY,toolbarX:w.left,toolbarY:w.top,dragging:!1}},[F]);(0,k.useLayoutEffect)(()=>{if(!Rt)return;let _=()=>{let $=Rt.x,I=Rt.y,_e=20-(337-Ps),ye=window.innerWidth-20-337;$=Math.max(_e,Math.min(ye,$)),I=Math.max(20,Math.min(window.innerHeight-44-20,I)),($!==Rt.x||I!==Rt.y)&&Qc({x:$,y:I})};return _(),window.addEventListener("resize",_),()=>window.removeEventListener("resize",_)},[Rt,Ps]),(0,k.useEffect)(()=>{if(!i)return;let _=w=>{if(w.defaultPrevented||w.isComposing||w.altKey)return;let M=w.composedPath()[0]||w.target,$=M.tagName==="INPUT"||M.tagName==="TEXTAREA"||M.tagName==="SELECT"||M.isContentEditable;if(w.key==="Escape"){if(u&&!j&&!le&&(F||tn||Ve||zn||xn.length)&&(w.preventDefault(),w.stopPropagation()),tn){w.preventDefault(),Sr(!1),kr.current?.focus();return}if(Ve){oi?Er(null):al();return}if(zn){Wc(!1);return}if(xn.length>0){Go([]);return}j||le||F&&(on(),Ns())}if((w.metaKey||w.ctrlKey)&&w.shiftKey&&(w.key==="f"||w.key==="F")){w.preventDefault(),on(),F?Ns():(qn.current?.blur(),Pn.current=!0,K(!0));return}!F||$||w.metaKey||w.ctrlKey||w.repeat||((w.key==="p"||w.key==="P")&&(w.preventDefault(),on(),Zc()),(w.key==="l"||w.key==="L")&&(w.preventDefault(),on(),zn&&Wc(!1),tn&&Sr(!1),j&&ed(),Ve?al():Jc()),(w.key==="h"||w.key==="H")&&Re.length>0&&(w.preventDefault(),on(),Vo(I=>!I)),(w.key==="c"||w.key==="C")&&(Re.length>0||Be.length>0||me)&&(w.preventDefault(),on(),od()),(w.key==="x"||w.key==="X")&&(Re.length>0||Be.length>0||me)&&(w.preventDefault(),on(),Dr(),Be.length>0&&Po([]),me&&ho(null)),(w.key==="s"||w.key==="S")&&Re.length>0&&go&&ee==="idle"&&(w.preventDefault(),on(),id()))},m=!!u;return J.addEventListener("keydown",_,m),()=>J.removeEventListener("keydown",_,m)},[i,u,le,F,zn,Ve,oi,Be,me,j,Re.length,go,ee,id,Zc,od,Dr,xn,tn,Ns,Jc,al]);let dl=Re.length>0,Ds=q5(),Bs=Re.filter(_=>_.kind!=="placement"&&_.kind!=="rearrange"),Df=Bs.flatMap((_,m)=>{let w=Ds(_);return w?[{annotation:w,index:m}]:[]}),Bf=j&&!j.isSubmitted?Ds({...j,comment:"",timestamp:0}):null,zf=[...he?Df.map(_=>({..._,pending:!1})):[],...Bf?[{annotation:Bf,index:Bs.length,pending:!0}]:[]];(0,k.useEffect)(()=>{let _=new Set(he&&!Xo?Df.map(({annotation:m})=>m.id):[]);eo.current&&!_.has(eo.current)&&(eo.current=null);for(let m of qo)_.has(m)||qc(m)}),(0,k.useEffect)(()=>{le&&qo.has(le.id)&&(To(!1),ci(!0))},[le,qo]);let Of=(0,k.useCallback)(_=>{!Se&&_.id!==eo.current&&$s(_)},[Se,$s]),Af=(0,k.useCallback)(_=>{We===_&&$s(null)},[We,$s]),Ff=(0,k.useCallback)((_,m)=>{if(le&&!Tr){Ms.current?.shake();return}On&&td(),tt.markerClickBehavior==="delete"?nd(_.id):Rs(_,m)},[tt.markerClickBehavior,nd,Rs,On,td,le,Tr]),Fn=le??(Es&&!j&&!de?Re.find(_=>_.id===We&&!qo.has(_.id)):null),Wf=Bn?"Resume animations":"Pause animations",jf=Ve?"Exit layout mode":"Layout mode",Hf=Lo?"Hide markers":"Show markers",Uf=s!=="markdown"&&!eg(Re,"",s),Yf=typeof s=="object"?`Copy ${s.attribute}`:s==="source"?"Copy source paths":s==="classes"?"Copy classes":Ve&&xt?"Copy layout":"Copy feedback",ui=F?0:-1;return!lt||Xo?null:(0,U.jsxs)(h2,{host:"agentation-toolbar",className:q,children:[(0,U.jsxs)("style",{"data-agentation-styles":"toolbar",children:[hw,mw]}),(0,U.jsxs)("div",{ref:Pt,className:O.positionContext,style:{display:"contents"},"data-agentation-theme":po?"dark":"light","data-agentation-accent":tt.annotationColorId,"data-agentation-root":"",children:[(0,U.jsx)("div",{className:O.toolbar,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,"data-dragging":bs||void 0,style:Rt?{left:Rt.x,top:Rt.y,right:"auto",bottom:"auto"}:void 0,children:(0,U.jsxs)("div",{className:`${O.toolbarContainer} ${F?O.expanded:O.collapsed} ${Cf?O.entrance:""} ${Io?O.hiding:""} ${go?O.serverConnected:""}`,onMouseDown:c1,children:[(0,U.jsxs)("div",{className:`${O.controlsContent} ${F?O.visible:O.hidden} ${Rt&&Rt.y<100?O.tooltipBelow:""} ${cf||tn?O.tooltipsHidden:""} ${Uc?O.tooltipsInSession:""}`,ref:_=>{_o.current=_,_?.toggleAttribute("inert",!F)},role:"group","aria-label":"Feedback controls","aria-hidden":!F,onMouseEnter:wf,onMouseLeave:bf,children:[(0,U.jsxs)("div",{className:`${O.buttonWrapper} ${Rt&&Rt.x<120?O.buttonWrapperAlignLeft:""}`,children:[(0,U.jsx)("button",{className:O.controlButton,onClick:_=>{_.stopPropagation(),on(),Zc()},"data-active":Bn,"aria-label":Wf,"aria-pressed":Bn,tabIndex:ui,children:(0,U.jsx)(v2,{size:24,isPaused:Bn})}),(0,U.jsxs)("span",{className:O.buttonTooltip,children:[Wf,i&&(0,U.jsx)("span",{className:O.shortcut,children:"P"})]})]}),(0,U.jsxs)("div",{className:O.buttonWrapper,children:[(0,U.jsx)("button",{className:`${O.controlButton} ${po?"":O.light}`,onClick:_=>{_.stopPropagation(),on(),zn&&Wc(!1),tn&&Sr(!1),j&&ed(),Ve?al():Jc()},"data-active":Ve,"aria-label":jf,"aria-pressed":Ve,tabIndex:ui,style:Ve&&xt?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:(0,U.jsx)(L2,{size:21})}),(0,U.jsxs)("span",{className:O.buttonTooltip,children:[jf,i&&(0,U.jsx)("span",{className:O.shortcut,children:"L"})]})]}),(0,U.jsxs)("div",{className:O.buttonWrapper,children:[(0,U.jsx)("button",{className:O.controlButton,onClick:_=>{_.stopPropagation(),on(),Vo(!Lo)},disabled:!dl||Ve,"aria-label":Hf,tabIndex:ui,children:(0,U.jsx)(x2,{size:24,isOpen:Lo})}),(0,U.jsxs)("span",{className:O.buttonTooltip,children:[Hf,i&&(0,U.jsx)("span",{className:O.shortcut,children:"H"})]})]}),(0,U.jsxs)("div",{className:O.buttonWrapper,children:[(0,U.jsx)("button",{className:`${O.controlButton} ${R?O.statusShowing:""}`,onClick:_=>{_.stopPropagation(),on(),od()},disabled:Uf||(Ve&&xt?Be.length===0&&!me?.sections?.length:!dl&&Zn.length===0&&Be.length===0&&!me?.sections?.length),"data-active":R,"aria-label":Yf,tabIndex:ui,children:(0,U.jsx)(g2,{size:24,copied:R,tint:Ve&&xt&&(Be.length>0||me?.sections?.length)?"#f97316":void 0})}),(0,U.jsxs)("span",{className:O.buttonTooltip,children:[Uf?"No matching metadata":Yf,i&&(0,U.jsx)("span",{className:O.shortcut,children:"C"})]})]}),(0,U.jsxs)("div",{className:`${O.buttonWrapper} ${O.sendButtonWrapper} ${F&&go?O.sendButtonVisible:""}`,children:[(0,U.jsxs)("button",{className:`${O.controlButton} ${ee==="sent"||ee==="failed"?O.statusShowing:""}`,onClick:_=>{_.stopPropagation(),on(),id()},disabled:!dl||!go||ee==="sending","data-no-hover":ee==="sent"||ee==="failed",tabIndex:F&&go?0:-1,"aria-label":"Send Annotations","aria-hidden":!go,children:[(0,U.jsx)(y2,{size:24,state:ee}),dl&&ee==="idle"&&(0,U.jsx)("span",{className:O.buttonBadge,children:Re.length})]}),(0,U.jsxs)("span",{className:O.buttonTooltip,children:["Send Annotations",i&&(0,U.jsx)("span",{className:O.shortcut,children:"S"})]})]}),(0,U.jsxs)("div",{className:O.buttonWrapper,children:[(0,U.jsx)("button",{className:O.controlButton,onClick:_=>{_.stopPropagation(),on(),Dr()},disabled:!dl&&Zn.length===0&&Be.length===0&&!me?.sections?.length,"data-danger":!0,"aria-label":"Clear all",tabIndex:ui,children:(0,U.jsx)(b2,{size:24})}),(0,U.jsxs)("span",{className:O.buttonTooltip,children:["Clear all",i&&(0,U.jsx)("span",{className:O.shortcut,children:"X"})]})]}),(0,U.jsxs)("div",{className:O.buttonWrapper,children:[(0,U.jsx)("button",{ref:kr,"aria-label":"Settings","aria-expanded":tn,tabIndex:ui,className:O.controlButton,onClick:_=>{_.stopPropagation(),on(),Ve&&al(),G.current=!tn&&_.detail===0,Sr(!tn)},children:(0,U.jsx)(w2,{size:24})}),C&&Ir!=="disconnected"&&(0,U.jsx)("span",{className:`${O.mcpIndicator} ${O[Ir]} ${tn?O.hidden:""}`,title:Ir==="connected"?"MCP Connected":"MCP Connecting..."}),(0,U.jsx)("span",{className:O.buttonTooltip,children:"Settings"})]}),(0,U.jsx)("div",{className:O.divider}),(0,U.jsx)("div",{className:O.togglePlaceholder,"aria-hidden":"true"})]}),(0,U.jsxs)("div",{className:`${O.buttonWrapper} ${O.toggleWrapper} ${Rt&&Rt.y<100?O.tooltipBelow:""} ${!F||cf||tn?O.tooltipsHidden:""} ${Uc?O.tooltipsInSession:""} ${Rt&&typeof window<"u"&&Rt.x>window.innerWidth-120?O.buttonWrapperAlignRight:""}`,onMouseEnter:wf,onMouseLeave:bf,children:[(0,U.jsx)("button",{ref:qn,type:"button",className:`${O.toggleContent} ${F?O.expandedToggle:""}`,"aria-label":F?"Exit":"Start feedback mode","aria-expanded":F,"aria-keyshortcuts":i?"Meta+Shift+F Control+Shift+F":void 0,title:F?void 0:i?"Start feedback mode (\u2318\u21E7F / Ctrl+Shift+F)":"Start feedback mode",onClick:_=>{if(ks.current){ks.current=!1,_.preventDefault();return}_.stopPropagation(),F?(on(),Ns()):(_.currentTarget.blur(),Pn.current=_.detail===0,K(!0))},children:(0,U.jsxs)("span",{className:O.toggleIcon,children:[(0,U.jsx)($2,{active:F}),Bs.length>0&&(0,U.jsx)("span",{className:`${O.badge} ${F?O.fadeOut:""} ${Cf?O.entrance:""}`,children:Bs.length})]})}),(0,U.jsxs)("span",{className:O.buttonTooltip,"aria-hidden":!F,children:["Exit",i&&(0,U.jsx)("span",{className:O.shortcut,children:"Esc"})]})]}),(0,U.jsx)(Zx,{visible:Ve&&F,activeType:oi,onSelect:_=>{Er(oi===_?null:_)},isDarkMode:po,sectionCount:me?.sections.length??0,onDetectSections:()=>{let _=ov(),m=me?.sections??[],w=new Set(m.map(T=>T.selector)),M=_.filter(T=>!w.has(T.selector)),$=[...m,...M],I=[...me?.originalOrder??[],...M.map(T=>T.id)];ho({sections:$,originalOrder:I,detectedAt:Date.now()})},placementCount:Be.length,onClearPlacements:()=>{Ts(Be,me)},blankCanvas:xt,onBlankCanvasChange:_=>{let m={sections:[],originalOrder:[],detectedAt:Date.now()};_?(zc.current={rearrange:me,placements:Be},ho(Lr.current.rearrange||m),Po(Lr.current.placements),Er(null)):(Lr.current={rearrange:me,placements:Be},ho(zc.current.rearrange||m),Po(zc.current.placements)),df(_)},wireframePurpose:nn,onWireframePurposeChange:vs,Tooltip:Zr,onDragStart:(_,m)=>{m.preventDefault();let w=ne[_],M=null,$=!1,I=m.clientX,T=m.clientY,_e=m.target.closest("[data-feedback-toolbar]")?.getBoundingClientRect().top??window.innerHeight,ye=xe=>{let $e=xe.clientX-I,Ae=xe.clientY-T;if(!$&&(Math.abs($e)>4||Math.abs(Ae)>4)&&($=!0,M=document.createElement("div"),M.className=`${D.dragPreview}${xt?` ${D.dragPreviewWireframe}`:""}`,Pt.current?.appendChild(M)),!M)return;let ue=Math.max(0,_e-xe.clientY),ve=Math.min(1,ue/180),Me=1-Math.pow(1-ve,2),Xe=28,kt=20,un=Math.min(140,w.width*.18),Ee=Math.min(90,w.height*.18),ke=Xe+(un-Xe)*Me,nt=kt+(Ee-kt)*Me;M.style.width=`${ke}px`,M.style.height=`${nt}px`,M.style.left=`${xe.clientX-ke/2}px`,M.style.top=`${xe.clientY-nt/2}px`,M.style.opacity=`${.5+.5*Me}`,M.textContent=Me>.25?_:""},ge=xe=>{if(window.removeEventListener("mousemove",ye),window.removeEventListener("mouseup",ge),M&&M.remove(),$){let $e=w.width,Ae=w.height,ue=window.scrollY,ve=Math.max(0,xe.clientX-$e/2),Me=Math.max(0,xe.clientY+ue-Ae/2),Xe={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:_,x:ve,y:Me,width:$e,height:Ae,scrollY:ue,timestamp:Date.now()};Po(kt=>[...kt,Xe]),Er(null),tl.current=new Set,hf(kt=>kt+1)}};window.addEventListener("mousemove",ye),window.addEventListener("mouseup",ge)}}),(0,U.jsx)(uw,{settings:tt,onSettingsChange:e1,isDarkMode:po,onToggleTheme:t1,isDevMode:Mf,connectionStatus:Ir,endpoint:C,onExited:o1,isOpen:F&&tn,toolbarNearBottom:!!Rt&&Rt.y<230,settingsPage:Ug,onSettingsPageChange:af,onHideToolbar:r1})]})}),(Ve||Mr)&&(0,U.jsx)("div",{className:`${D.blankCanvas} ${uf?D.visible:""} ${Qg?D.gridActive:""}`,style:{"--canvas-opacity":_f},"data-feedback-toolbar":!0}),Ve&&xt&&uf&&(0,U.jsxs)("div",{className:D.wireframeNotice,"data-feedback-toolbar":!0,children:[(0,U.jsxs)("div",{className:D.wireframeOpacityRow,children:[(0,U.jsx)("span",{className:D.wireframeOpacityLabel,children:"Toggle Opacity"}),(0,U.jsx)("input",{type:"range",className:D.wireframeOpacitySlider,min:0,max:1,step:.01,value:_f,onChange:_=>Yg(Number(_.target.value))})]}),(0,U.jsxs)("div",{className:D.wireframeNoticeTitleRow,children:[(0,U.jsx)("span",{className:D.wireframeNoticeTitle,children:"Wireframe Mode"}),(0,U.jsx)("span",{className:D.wireframeNoticeDivider}),(0,U.jsx)("button",{className:D.wireframeStartOver,onClick:()=>{Ts(Be,me),Lr.current={rearrange:null,placements:[]},vs(""),gc(e)},children:"Start Over"})]}),"Drag components onto the canvas.",(0,U.jsx)("br",{}),"Copied output will only include the wireframed layout."]}),(Ve||Mr)&&(0,U.jsx)(Xx,{placements:Be,onChange:Po,activeComponent:Mr?null:oi,onActiveComponentChange:Er,isDarkMode:po,exiting:Mr,onInteractionChange:Vg,passthrough:!oi,extraSnapRects:me?.sections.map(_=>_.currentRect),deselectSignal:Xg,clearingPlacements:ri,wireframe:xt,onSelectionChange:(_,m)=>{tl.current=_,m||(ws.current=new Set,qg(w=>w+1))},onDragMove:(_,m)=>{let w=ws.current;if(!(!w.size||!me)){if(!Jn.current){Jn.current=new Map;for(let M of me.sections)w.has(M.id)&&Jn.current.set(M.id,{x:M.currentRect.x,y:M.currentRect.y})}for(let M of me.sections){if(!w.has(M.id)||!Jn.current.get(M.id))continue;let I=Pt.current?.querySelector(`[data-rearrange-section="${M.id}"]`);I&&(I.style.transform=`translate(${_}px, ${m}px)`)}}},onDragEnd:(_,m,w)=>{let M=ws.current,$=Jn.current;if(Jn.current=null,!(!M.size||!me||!$)){for(let I of M){let T=Pt.current?.querySelector(`[data-rearrange-section="${I}"]`);T&&(T.style.transform="")}w&&ho(I=>I&&{...I,sections:I.sections.map(T=>{let X=$.get(T.id);return X?{...T,currentRect:{...T.currentRect,x:Math.max(0,X.x+_),y:Math.max(0,X.y+m)}}:T})})}}}),(Ve||Mr)&&me&&(0,U.jsx)(lv,{rearrangeState:me,onChange:ho,isDarkMode:po,exiting:Mr,blankCanvas:xt,extraSnapRects:Be.map(_=>({x:_.x,y:_.y,width:_.width,height:_.height})),clearing:me===ii,deselectSignal:Gg,onSelectionChange:(_,m)=>{ws.current=_,m||(tl.current=new Set,hf(w=>w+1))},onDragMove:(_,m)=>{let w=tl.current;if(w.size){if(!Jn.current){Jn.current=new Map;for(let M of Be)w.has(M.id)&&Jn.current.set(M.id,{x:M.x,y:M.y})}for(let M of w){let $=Pt.current?.querySelector(`[data-design-placement="${M}"]`);$&&($.style.transform=`translate(${_}px, ${m}px)`)}}},onDragEnd:(_,m,w)=>{let M=tl.current,$=Jn.current;if(Jn.current=null,!(!M.size||!$)){for(let I of M){let T=Pt.current?.querySelector(`[data-design-placement="${I}"]`);T&&(T.style.transform="")}w&&Po(I=>I.map(T=>{let X=$.get(T.id);return X?{...T,x:Math.max(0,X.x+_),y:Math.max(0,X.y+m)}:T}))}}}),(0,U.jsx)("canvas",{ref:Hc,className:`${O.drawCanvas} ${zn?O.active:""}`,"aria-hidden":"true",style:{opacity:Es?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),(0,U.jsx)("div",{className:O.markersLayer,"data-feedback-toolbar":!0,children:zf.filter(({annotation:_})=>!_.isFixed).map(({annotation:_,index:m,pending:w},M,$)=>(0,U.jsx)(og,{annotation:_,pending:w,globalIndex:m,layerIndex:M,layerSize:$.length,isExiting:w?On:Se,isClearing:Te.current.has(_.id),isAnimated:$r.current.has(_.id),isNew:eo.current===_.id,onEnterComplete:Nf,isHovered:!Se&&We===_.id,isRemoving:qo.has(_.id),onRemoveComplete:qc,isEditingAny:!!le,renumberFrom:et,markerClickBehavior:tt.markerClickBehavior,onHoverEnter:Of,onHoverLeave:Af,onClick:Ff,onContextMenu:Rs},Cs.current.get(_.id)??_.id))}),(0,U.jsx)("div",{className:O.fixedMarkersLayer,"data-feedback-toolbar":!0,children:zf.filter(({annotation:_})=>_.isFixed).map(({annotation:_,index:m,pending:w},M,$)=>(0,U.jsx)(og,{annotation:_,pending:w,globalIndex:m,layerIndex:M,layerSize:$.length,isExiting:w?On:Se,isClearing:Te.current.has(_.id),isAnimated:$r.current.has(_.id),isNew:eo.current===_.id,onEnterComplete:Nf,isHovered:!Se&&We===_.id,isRemoving:qo.has(_.id),onRemoveComplete:qc,isEditingAny:!!le,renumberFrom:et,markerClickBehavior:tt.markerClickBehavior,onHoverEnter:Of,onHoverLeave:Af,onClick:Ff,onContextMenu:Rs},Cs.current.get(_.id)??_.id))}),F&&Je&&!j&&!le&&!rf&&!Bo&&(0,U.jsx)(_w,{x:Qe.x,y:Qe.y,elementName:Je.elementName,reactComponents:Je.reactComponents}),F&&(0,U.jsxs)("div",{className:O.overlay,"data-feedback-toolbar":!0,style:j||le?{zIndex:"inherit"}:void 0,children:[Je?.rect&&!j&&!rf&&!Bo&&(0,U.jsx)("div",{className:`${O.hoverHighlight} ${O.enter}`,style:{left:Je.rect.left,top:Je.rect.top,width:Je.rect.width,height:Je.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)",...Je.isPiercing?{borderStyle:"dashed"}:{}}}),xn.filter(_=>_.element.isConnected).map((_,m)=>{let w=At(_.element),M=xn.length>1;return(0,U.jsx)("div",{className:M?O.multiSelectOutline:O.singleSelectOutline,style:{position:"fixed",left:w.left,top:w.top,width:w.width,height:w.height,...M?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},m)}),We&&!j&&(()=>{let _=Re.find($=>$.id===We);if(!_?.boundingBox)return null;if(_.elementBoundingBoxes?.length)return ct.length>0?ct.filter($=>$.isConnected).map(($,I)=>{let T=At($);return(0,U.jsx)("div",{className:`${O.multiSelectOutline} ${O.enter}`,style:{left:T.left,top:T.top,width:T.width,height:T.height}},`hover-outline-live-${I}`)}):_.elementBoundingBoxes.map(($,I)=>(0,U.jsx)("div",{className:`${O.multiSelectOutline} ${O.enter}`,style:{left:$.x,top:$.y-Cr,width:$.width,height:$.height}},`hover-outline-${I}`));let m=yt&&yt.isConnected?At(yt):null,w=m?{x:m.left,y:m.top,width:m.width,height:m.height}:{x:_.boundingBox.x,y:_.isFixed?_.boundingBox.y:_.boundingBox.y-Cr,width:_.boundingBox.width,height:_.boundingBox.height},M=_.isMultiSelect;return(0,U.jsx)("div",{className:`${M?O.multiSelectOutline:O.singleSelectOutline} ${O.enter}`,style:{left:w.x,top:w.y,width:w.width,height:w.height,...M?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),j&&(0,U.jsxs)(U.Fragment,{children:[j.multiSelectElements?.length?j.multiSelectElements.filter(_=>_.isConnected).map((_,m)=>{let w=At(_);return(0,U.jsx)("div",{className:`${O.multiSelectOutline} ${On?O.exit:O.enter}`,style:{left:w.left,top:w.top,width:w.width,height:w.height}},`pending-multi-${m}`)}):j.targetElement&&j.targetElement.isConnected?(()=>{let _=At(j.targetElement);return(0,U.jsx)("div",{className:`${O.singleSelectOutline} ${On?O.exit:O.enter}`,style:{left:_.left,top:_.top,width:_.width,height:_.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():j.boundingBox&&(0,U.jsx)("div",{className:`${j.isMultiSelect?O.multiSelectOutline:O.singleSelectOutline} ${On?O.exit:O.enter}`,style:{left:j.boundingBox.x,top:j.boundingBox.y-Cr,width:j.boundingBox.width,height:j.boundingBox.height,...j.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{let _=Ds(j)??j,m=_.x,w=_.isFixed?_.y:_.y-Cr;return(0,U.jsx)(U.Fragment,{children:(0,U.jsx)(K_,{ref:Gc,element:j.element,selectedText:j.selectedText,allowEmpty:typeof s=="object"&&!!j.attributes?.[s.attribute],onOpenSource:a&&j.sourceFile?()=>a(j.sourceFile):void 0,computedStyles:j.computedStylesObj,placeholder:typeof s=="object"&&j.attributes?.[s.attribute]?"Add a note (optional)":j.element==="Area selection"?"What should change in this area?":j.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:i1,onExitComplete:td,onCancel:ed,isExiting:On,lightMode:!po,accentColor:j.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,m/100*window.innerWidth)),...w>window.innerHeight-290?{bottom:window.innerHeight-w+20}:{top:w+20}}},j.id)})})()]}),le&&(0,U.jsx)(U.Fragment,{children:le.elementBoundingBoxes?.length?Ji.length>0?Ji.filter(_=>_.isConnected).map((_,m)=>{let w=At(_);return(0,U.jsx)("div",{className:`${O.multiSelectOutline} ${O.enter}`,style:{left:w.left,top:w.top,width:w.width,height:w.height}},`edit-multi-live-${m}`)}):le.elementBoundingBoxes.map((_,m)=>(0,U.jsx)("div",{className:`${O.multiSelectOutline} ${O.enter}`,style:{left:_.x,top:_.y-Cr,width:_.width,height:_.height}},`edit-multi-${m}`)):(()=>{let _=Kn&&Kn.isConnected?At(Kn):null,m=_?{x:_.left,y:_.top,width:_.width,height:_.height}:le.boundingBox?{x:le.boundingBox.x,y:le.isFixed?le.boundingBox.y:le.boundingBox.y-Cr,width:le.boundingBox.width,height:le.boundingBox.height}:null;return m?(0,U.jsx)("div",{className:`${le.isMultiSelect?O.multiSelectOutline:O.singleSelectOutline} ${O.enter}`,style:{left:m.x,top:m.y,width:m.width,height:m.height,...le.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})()}),Bo&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)("div",{ref:il,className:O.dragSelection}),(0,U.jsx)("div",{ref:di,className:O.highlightsContainer})]})]}),(0,U.jsx)(rw,{ref:Ms,annotation:Fn?Ds(Fn)??le:null,editing:!!le,exiting:Tr,restorePreview:fo,scrollY:Cr,lightMode:!po,onExited:a1,editorProps:Fn?{element:Fn.element,selectedText:Fn.selectedText,allowEmpty:typeof s=="object"&&!!Fn.attributes?.[s.attribute],onOpenSource:a&&Fn.sourceFile?()=>a(Fn.sourceFile):void 0,computedStyles:s2(Fn.computedStyles),placeholder:"Edit your feedback...",initialValue:Fn.comment,submitLabel:"Save",onSubmit:l1,onCancel:s1,onDelete:()=>nd(Fn.id),accentColor:Fn.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)"}:void 0})]})]})}var Ec,k,Nc,mg,qi,Ki,gg,yg,Yt,ps,vg,dn,qe,O_,te,Eo,kg,ti,A_,ei,rt,d,gt,Qt,br,c,Ce,Ye,Wv,Sn,Q_,Xn,Mo,wr,gs,zg,Qi,Vi,oe,Rc,ys,U,Og,ag,S_,B_,z_,He,ot,dg,Sc,X_,fg,n2,o2,r2,i2,l2,hg,a2,fc,T0,h2,xg,De,M_,bg,K_,Ic,pt,p2,m2,g2,y2,x2,v2,w2,b2,k2,C2,S2,M2,E2,L2,N2,I2,D0,Zr,R2,O,ne,Cg,uo,Yx,Vx,D,Hi,hc,g,P,ev,F_,O0,tv,nv,A0,F0,pc,W0,mc,iv,W_,U0,H_,Pg,Z_,ef,tf,Bg,U_,st,K0,J0,Lv,Ui,Pv,as,cs,xc,ds,nw,ow,rw,iw,Jt,og,lw,$_,T_,sw,vc,aw,cw,rg,ig,dw,se,uw,fw,hw,lg,P_,sg,pw,vr,hs,mw,Fg=x1(()=>{"use client";Ec=Le(Ct(),1),k=Le(Ct(),1),Nc=Le(Ct(),1),mg=Le(is(),1),qi=Le(Ct(),1),Ki=Le(Ct(),1),gg=Le(is(),1),yg=Le(Ot(),1),Yt=Le(Ct(),1),ps=Le(Ct(),1),vg=Le(Ct(),1),dn=Le(Ct(),1),qe=Le(Ot(),1),O_=Le(Ot(),1),te=Le(Ot(),1),Eo=Le(Ct(),1),kg=Le(is(),1),ti=Le(Ot(),1),A_=Le(Ot(),1),ei=Le(Ot(),1),rt=Le(Ct(),1),d=Le(Ot(),1),gt=Le(Ot(),1),Qt=Le(Ct(),1),br=Le(Ct(),1),c=Le(Ot(),1),Ce=Le(Ct(),1),Ye=Le(Ot(),1),Wv=Le(Ct(),1),Sn=Le(Ct(),1),Q_=Le(Ot(),1),Xn=Le(Ct(),1),Mo=Le(Ot(),1),wr=Le(Ct(),1),gs=Le(Ot(),1),zg=Le(Ct(),1),Qi=Le(Ot(),1),Vi=Le(Ot(),1),oe=Le(Ot(),1),Rc=Le(Ct(),1),ys=Le(Ot(),1),U=Le(Ot(),1),Og=Le(Ct(),1),ag=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],S_=ag.flatMap(e=>[`:not([${e}])`,`:not([${e}] *)`]).join(""),B_="feedback-freeze-styles",z_="__agentation_freeze";He=U5();ot=He.origSetTimeout,dg=He.origSetInterval,Sc=He.origRAF;X_=["data-testid","data-test","data-qa","data-cy","data-component"];fg=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),n2=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),o2=new Set(["input","textarea","select"]),r2=new Set(["img","video","canvas","svg"]),i2=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);l2=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];hg="agentation-toolbar, [data-agentation-root], [data-feedback-toolbar], [data-annotation-popup], [data-annotation-marker]",a2=new Set(["DIV","SPAN","SECTION","ARTICLE","MAIN","ASIDE","HEADER","FOOTER","NAV"]);fc=new Map;T0=typeof window>"u"?qi.useEffect:qi.useLayoutEffect;h2=({mode:e="open",delegatesFocus:t,slotAssignment:n,host:o="div",children:r,className:i,...l})=>{let s=(0,Ki.useRef)(null),[a,u]=(0,Ki.useState)(null);return(0,Ki.useLayoutEffect)(()=>{let f=s.current;if(!f||f.shadowRoot)return;let x=f.attachShadow({mode:e,delegatesFocus:t,slotAssignment:n});u(x)},[]),(0,yg.jsx)(o,{ref:s,...l,...o.includes("-")?{class:i}:{className:i},children:a&&(0,gg.createPortal)(r,a)})};xg=`@charset "UTF-8";
.styles-module__popup___IhzrD svg[fill=none] {
  fill: none !important;
}
.styles-module__popup___IhzrD svg[fill=none] :not([fill]) {
  fill: none !important;
}

@keyframes styles-module__popupEnter___AuQDN {
  from {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
}
@keyframes styles-module__popupExit___JJKQX {
  from {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
}
@keyframes styles-module__shake___jdbWe {
  0%, 100% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(0);
  }
  20% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-3px);
  }
  40% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(3px);
  }
  60% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-2px);
  }
  80% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(2px);
  }
}
.styles-module__popup___IhzrD {
  position: fixed;
  transform: translateX(-50%);
  width: 280px;
  padding: 0.75rem 1rem;
  background: #1a1a1a;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  z-index: 100001;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  will-change: transform, opacity;
  opacity: 0;
}
.styles-module__popup___IhzrD.styles-module__enter___L7U7N {
  animation: styles-module__popupEnter___AuQDN 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w {
  opacity: 1;
  transform: translateX(-50%) scale(1) translateY(0);
}
.styles-module__popup___IhzrD.styles-module__exit___5eGjE {
  pointer-events: none;
  animation: styles-module__popupExit___JJKQX 0.15s ease-in forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w.styles-module__shake___jdbWe {
  animation: styles-module__shake___jdbWe 0.25s ease-out;
}

.styles-module__header___wWsSi {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5625rem;
}

.styles-module__element___fTV2z {
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}

.styles-module__headerToggle___WpW0b {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  flex: 1;
  min-width: 0;
  text-align: left;
}
.styles-module__headerToggle___WpW0b .styles-module__element___fTV2z {
  flex: 1;
}

.styles-module__chevron___ZZJlR {
  color: rgba(255, 255, 255, 0.5);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  flex-shrink: 0;
}
.styles-module__chevron___ZZJlR.styles-module__expanded___2Hxgv {
  transform: rotate(90deg);
}

.styles-module__stylesWrapper___pnHgy {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.styles-module__stylesWrapper___pnHgy.styles-module__expanded___2Hxgv {
  grid-template-rows: 1fr;
}

.styles-module__stylesInner___YYZe2 {
  overflow: hidden;
}

.styles-module__stylesBlock___VfQKn {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.375rem;
  padding: 0.5rem 0.625rem;
  margin-bottom: 0.5rem;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.6875rem;
  line-height: 1.5;
}

.styles-module__styleLine___1YQiD {
  color: rgba(255, 255, 255, 0.85);
  word-break: break-word;
}

.styles-module__styleProperty___84L1i {
  color: #c792ea;
}

.styles-module__styleValue___q51-h {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__timestamp___Dtpsv {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.35);
  font-variant-numeric: tabular-nums;
  margin-left: 0.5rem;
  flex-shrink: 0;
}

.styles-module__quote___mcMmQ {
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
  padding: 0.4rem 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.25rem;
  line-height: 1.45;
}

.styles-module__textarea___jrSae {
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem 0.625rem;
  font-size: 0.8125rem;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
}
.styles-module__textarea___jrSae:focus {
  border-color: var(--agentation-color-blue);
}
.styles-module__textarea___jrSae.styles-module__green___99l3h:focus {
  border-color: var(--agentation-color-green);
}
.styles-module__textarea___jrSae::placeholder {
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__textarea___jrSae::-webkit-scrollbar {
  width: 6px;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-track {
  background: transparent;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.styles-module__actions___D6x3f {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.375rem;
  margin-top: 0.75rem;
}

.styles-module__sourceAction___EabJb {
  display: block;
  max-width: 100%;
  margin: -2px 0 8px;
  padding: 2px 0;
  background: transparent;
  color: #fff;
  font: inherit;
  font-size: 11px;
  border: 0;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.15s ease;
}
.styles-module__sourceAction___EabJb:hover, .styles-module__sourceAction___EabJb:focus-visible {
  opacity: 1;
}
.styles-module__sourceAction___EabJb:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 3px;
}

.styles-module__light___6AaSQ .styles-module__sourceAction___EabJb {
  color: #111;
}

.styles-module__cancel___hRjnL,
.styles-module__submit___K-mIR,
.styles-module__deleteButton___4VuAE {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 1.875rem;
  padding: 0.375rem 0.875rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
}

.styles-module__cancel___hRjnL {
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__cancel___hRjnL:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}

.styles-module__submit___K-mIR {
  color: white;
}
.styles-module__submit___K-mIR:hover:not(:disabled) {
  filter: brightness(0.9);
}
.styles-module__submit___K-mIR:disabled {
  cursor: not-allowed;
}

.styles-module__deleteWrapper___oSjdo {
  display: flex;
  margin-right: auto;
}

.styles-module__deleteButton___4VuAE {
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease;
}
.styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__deleteButton___4VuAE:active {
  transform: scale(0.92);
}

.styles-module__light___6AaSQ.styles-module__popup___IhzrD {
  background: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.styles-module__light___6AaSQ .styles-module__element___fTV2z {
  color: rgba(0, 0, 0, 0.6);
}
.styles-module__light___6AaSQ .styles-module__timestamp___Dtpsv {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__chevron___ZZJlR {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__stylesBlock___VfQKn {
  background: rgba(0, 0, 0, 0.03);
}
.styles-module__light___6AaSQ .styles-module__styleLine___1YQiD {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__styleProperty___84L1i {
  color: #7c3aed;
}
.styles-module__light___6AaSQ .styles-module__styleValue___q51-h {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__quote___mcMmQ {
  color: rgba(0, 0, 0, 0.55);
  background: rgba(0, 0, 0, 0.04);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae {
  background: rgba(0, 0, 0, 0.03);
  color: #1a1a1a;
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::placeholder {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__popup___IhzrD.styles-module__enter___L7U7N, .styles-module__popup___IhzrD.styles-module__exit___5eGjE {
    animation-duration: 1ms;
    animation-delay: 0ms !important;
  }
}
.styles-module__sharedForm___8GvQl {
  --card-motion: 200ms cubic-bezier(0.2, 0.8, 0.2, 1);
  padding: 0.75rem 1rem;
  transition: padding var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__header___wWsSi {
  transition: margin-bottom var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__element___fTV2z {
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
}
.styles-module__sharedForm___8GvQl .styles-module__previewExcerpt___DCOIL {
  display: none;
}
.styles-module__sharedForm___8GvQl .styles-module__headerToggle___WpW0b .styles-module__chevron___ZZJlR {
  opacity: 1;
  margin-left: 0;
  transition: margin-left var(--card-motion), opacity 100ms ease-out, transform var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__sharedNote___OYVi5 {
  position: relative;
  height: var(--editor-field-height, 57px);
  border-radius: 8px;
  overflow: clip;
  transition: height var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__sharedNote___OYVi5::before {
  content: "";
  position: absolute;
  inset: 0;
  border: 1px solid var(--field-border, rgba(255, 255, 255, 0.15));
  border-radius: inherit;
  background: rgba(255, 255, 255, 0.05);
  pointer-events: none;
  transition: opacity var(--card-motion), border-color var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__sharedNoteContent___6q3KD {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: clip;
  transition: width var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__sharedNote___OYVi5[data-truncated]::after {
  content: "\u2026";
  position: absolute;
  right: 0;
  top: 0;
  color: #fff;
  font-size: 13px;
  line-height: 1.4;
  opacity: 0;
  pointer-events: none;
  transition: opacity 80ms ease-out;
}
.styles-module__sharedForm___8GvQl .styles-module__textarea___jrSae {
  display: block;
  width: calc(280px - 2rem);
  max-width: calc(100vw - 24px - 2rem);
  margin: 0;
  background: transparent !important;
  border-color: transparent !important;
  transform: translate(0, 0);
  transition: transform var(--card-motion), color var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__sharedExtra___RUBKC, .styles-module__sharedForm___8GvQl .styles-module__sharedActions___6Glpl {
  display: grid;
  grid-template-rows: 1fr;
  opacity: 1;
  transition: grid-template-rows var(--card-motion), opacity 80ms ease-out;
}
.styles-module__sharedForm___8GvQl .styles-module__sharedActions___6Glpl {
  transition-delay: 0ms, 120ms;
}
.styles-module__sharedForm___8GvQl .styles-module__sharedExtraInner___EuUh4 {
  min-height: 0;
  overflow: hidden;
}
.styles-module__sharedForm___8GvQl .styles-module__actions___D6x3f {
  min-height: 0;
  overflow: hidden;
  transition: margin-top var(--card-motion);
}
.styles-module__sharedForm___8GvQl[data-preview] {
  padding: 8px 12px;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__header___wWsSi {
  margin-bottom: 5px;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__previewExcerpt___DCOIL {
  display: inline;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__element___fTV2z {
  line-height: 1.4;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__chevron___ZZJlR {
  opacity: 0;
  margin-left: -18px;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedNote___OYVi5 {
  height: 20.2px;
  border-radius: 0;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedNote___OYVi5::before {
  opacity: 0;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__textarea___jrSae {
  transform: translate(-11px, calc(-9px + (1.4em - 1lh) / 2));
  color: #fff;
  overflow: hidden;
  cursor: default;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedExtra___RUBKC, .styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedActions___6Glpl {
  grid-template-rows: 0fr;
  opacity: 0;
  transition-delay: 0ms;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__actions___D6x3f {
  margin-top: 0;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__stylesWrapper___pnHgy {
  grid-template-rows: 0fr;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedNote___OYVi5[data-truncated] .styles-module__sharedNoteContent___6q3KD {
  width: calc(100% - 12px);
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedNote___OYVi5[data-truncated]::after {
  opacity: 1;
}

.styles-module__light___6AaSQ .styles-module__sharedForm___8GvQl .styles-module__sharedNote___OYVi5::before {
  border-color: var(--field-border, rgba(0, 0, 0, 0.12));
  background: rgba(0, 0, 0, 0.03);
}

.styles-module__light___6AaSQ .styles-module__sharedForm___8GvQl .styles-module__element___fTV2z {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__light___6AaSQ .styles-module__sharedForm___8GvQl[data-preview] .styles-module__textarea___jrSae, .styles-module__light___6AaSQ .styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedNote___OYVi5::after {
  color: rgba(0, 0, 0, 0.85);
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__sharedForm___8GvQl {
    --card-motion: 1ms linear;
  }
  .styles-module__sharedForm___8GvQl .styles-module__sharedActions___6Glpl, .styles-module__sharedForm___8GvQl .styles-module__headerToggle___WpW0b .styles-module__chevron___ZZJlR {
    transition: opacity 100ms ease-out;
    transition-delay: 0ms;
  }
}`,De={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",popupEnter:"styles-module__popupEnter___AuQDN",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",popupExit:"styles-module__popupExit___JJKQX",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",green:"styles-module__green___99l3h",actions:"styles-module__actions___D6x3f",sourceAction:"styles-module__sourceAction___EabJb",light:"styles-module__light___6AaSQ",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteButton:"styles-module__deleteButton___4VuAE",deleteWrapper:"styles-module__deleteWrapper___oSjdo",sharedForm:"styles-module__sharedForm___8GvQl",previewExcerpt:"styles-module__previewExcerpt___DCOIL",sharedNote:"styles-module__sharedNote___OYVi5",sharedNoteContent:"styles-module__sharedNoteContent___6q3KD",sharedExtra:"styles-module__sharedExtra___RUBKC",sharedActions:"styles-module__sharedActions___6Glpl",sharedExtraInner:"styles-module__sharedExtraInner___EuUh4"},M_="data-agentation-styles";bg=(0,dn.forwardRef)(function({element:t,timestamp:n,selectedText:o,placeholder:r="What should change?",initialValue:i="",submitLabel:l="Add",onSubmit:s,onCancel:a,onDelete:u,onOpenSource:h,allowEmpty:f=!1,accentColor:x="#3c82f7",computedStyles:S,disabled:b=!1,preview:N=!1,resetOnPreview:E=!0,variant:y="popup"},v){let p=y==="card",[C,H]=(0,dn.useState)(i),[V,B]=(0,dn.useState)(!1),[q,F]=(0,dn.useState)(!1),K=(0,dn.useRef)(null),ae=(0,dn.useRef)(null),J=o?` "${o.slice(0,30)}${o.length>30?"...":""}"`:"";(0,dn.useLayoutEffect)(()=>{let ce=ae.current,pe=K.current;if(!p||!ce||!pe)return;let bt=()=>{ce.style.setProperty("--editor-field-height",`${pe.offsetHeight}px`)};if(bt(),"CanvasRenderingContext2D"in window){let Ke=document.createElement("canvas").getContext("2d");if(Ke){let Oe=getComputedStyle(pe).fontFamily;Ke.font=`13px ${Oe}`;let ft=Ke.measureText(i.replace(/\s+/g," ")).width;Ke.font=`italic 12px ${Oe}`;let Vt=Ke.measureText(t+J).width,gn=Math.min(200,Math.max(120,Math.ceil(Math.max(ft,Vt))+24));ce.closest("[data-annotation-card]")?.style.setProperty("--preview-width",`${gn}px`);let Re=ce.querySelector("[data-shared-note]");Re&&Re.toggleAttribute("data-truncated",ft>gn-24)}}let ze=typeof ResizeObserver<"u"?new ResizeObserver(bt):null;return ze?.observe(pe),()=>ze?.disconnect()},[p,t,i,J]),(0,dn.useLayoutEffect)(()=>{N&&E&&(H(i),F(!1),K.current&&(K.current.scrollTop=0,K.current.scrollLeft=0))},[N,E,i]),(0,dn.useImperativeHandle)(v,()=>({focus(){let ce=K.current;P0(ce),ce&&(ce.selectionStart=ce.selectionEnd=ce.value.length,ce.scrollTop=p?0:ce.scrollHeight)}}),[p]);let fe=(0,dn.useCallback)(()=>{b||!C.trim()&&!f||s(C.trim())},[b,C,f,s]),re=ce=>{ce.stopPropagation(),!ce.nativeEvent.isComposing&&(ce.key==="Enter"&&!ce.shiftKey&&(ce.preventDefault(),fe()),ce.key==="Escape"&&a())};return(0,qe.jsxs)("div",{ref:ae,className:p?De.sharedForm:void 0,style:p?void 0:{display:"contents"},"data-annotation-editor":!0,"data-preview":N||void 0,children:[(0,qe.jsxs)("div",{className:De.header,"data-editor-heading":!0,children:[S&&Object.keys(S).length>0?(0,qe.jsxs)("button",{className:De.headerToggle,onClick:()=>{let ce=q;F(!q),ce&&ot(()=>P0(K.current),0)},type:"button",children:[(0,qe.jsx)("svg",{className:`${De.chevron} ${q?De.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qe.jsx)("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,qe.jsxs)("span",{className:De.element,children:[t,p&&J&&(0,qe.jsx)("span",{className:De.previewExcerpt,children:J})]})]}):(0,qe.jsxs)("span",{className:De.element,children:[t,p&&J&&(0,qe.jsx)("span",{className:De.previewExcerpt,children:J})]}),n&&(0,qe.jsx)("span",{className:De.timestamp,children:n})]}),h&&(0,qe.jsx)("div",{className:p?De.sharedExtra:void 0,style:p?void 0:{display:"contents"},children:(0,qe.jsx)("div",{className:p?De.sharedExtraInner:void 0,style:p?void 0:{display:"contents"},children:(0,qe.jsx)("button",{type:"button",className:De.sourceAction,onClick:h,children:"Open in editor"})})}),S&&Object.keys(S).length>0&&(0,qe.jsx)("div",{className:`${De.stylesWrapper} ${q?De.expanded:""}`,children:(0,qe.jsx)("div",{className:De.stylesInner,children:(0,qe.jsx)("div",{className:De.stylesBlock,children:Object.entries(S).map(([ce,pe])=>(0,qe.jsxs)("div",{className:De.styleLine,children:[(0,qe.jsx)("span",{className:De.styleProperty,children:ce.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",(0,qe.jsx)("span",{className:De.styleValue,children:pe}),";"]},ce))})})}),o&&(0,qe.jsx)("div",{className:p?De.sharedExtra:void 0,style:p?void 0:{display:"contents"},children:(0,qe.jsx)("div",{className:p?De.sharedExtraInner:void 0,style:p?void 0:{display:"contents"},children:(0,qe.jsxs)("div",{className:De.quote,children:["\u201C",o.slice(0,80),o.length>80?"...":"","\u201D"]})})}),(0,qe.jsx)("div",{"data-shared-note":!0,className:p?De.sharedNote:void 0,style:p?{"--field-border":V?x:void 0}:{display:"contents"},children:(0,qe.jsx)("div",{className:p?De.sharedNoteContent:void 0,style:p?void 0:{display:"contents"},children:(0,qe.jsx)("textarea",{ref:K,className:De.textarea,readOnly:N,"aria-hidden":N,style:p?void 0:{borderColor:V?x:void 0},placeholder:r,value:N?C.replace(/\s+/g," "):C,onChange:ce=>H(ce.target.value),onFocus:()=>B(!0),onBlur:()=>B(!1),rows:2,onKeyDown:re})})}),(0,qe.jsx)("div",{"data-editor-actions":!0,className:p?De.sharedActions:void 0,style:p?void 0:{display:"contents"},children:(0,qe.jsxs)("div",{className:De.actions,children:[u&&(0,qe.jsx)("div",{className:De.deleteWrapper,children:(0,qe.jsx)("button",{className:De.deleteButton,onClick:u,type:"button","aria-label":"Delete annotation",children:"Delete"})}),(0,qe.jsx)("button",{className:De.cancel,onClick:a,children:"Cancel"}),(0,qe.jsx)("button",{className:De.submit,style:{backgroundColor:x,opacity:C.trim()||f?1:.4},onClick:fe,disabled:b||!C.trim()&&!f,children:l})]})})]})}),K_=(0,Yt.forwardRef)(function({element:t,timestamp:n,selectedText:o,placeholder:r="What should change?",initialValue:i="",submitLabel:l="Add",onSubmit:s,onCancel:a,onDelete:u,onOpenSource:h,allowEmpty:f=!1,style:x,accentColor:S="#3c82f7",isExiting:b=!1,onExitComplete:N,lightMode:E=!1,computedStyles:y},v){let[p,C]=(0,Yt.useState)(!1),[H,V]=(0,Yt.useState)("initial"),B=(0,Yt.useRef)(null),q=(0,Yt.useRef)(null);(0,Yt.useEffect)(()=>{wg(q.current?.getRootNode(),"annotation-popup",xg)},[]);let F=(0,Yt.useRef)(null);(0,Yt.useEffect)(()=>{let re=ot(()=>{V(ce=>ce==="initial"?"enter":ce)},0);return()=>{clearTimeout(re),F.current&&clearTimeout(F.current)}},[]),(0,Yt.useEffect)(()=>{if(b)return;let re=ot(()=>B.current?.focus(),50);return()=>clearTimeout(re)},[b]);let K=(0,Yt.useCallback)(()=>{F.current&&clearTimeout(F.current),C(!0),F.current=ot(()=>{C(!1),B.current?.focus()},250)},[]);(0,Yt.useImperativeHandle)(v,()=>({shake:K}),[K]);let ae=(0,Yt.useCallback)(()=>{if(N){a();return}V("exit")},[a,N]),J=b?"exit":H;G_(q,J==="exit",()=>{b?N?.():a()});let fe=[De.popup,E?De.light:"",J==="enter"?De.enter:"",J==="entered"?De.entered:"",J==="exit"?De.exit:"",p&&J!=="exit"?De.shake:""].filter(Boolean).join(" ");return(0,O_.jsx)("div",{ref:q,className:fe,"data-annotation-popup":!0,style:x,onAnimationEnd:re=>{re.target===re.currentTarget&&re.animationName.includes("popupEnter")&&!b&&V("entered")},onKeyDownCapture:re=>{re.key!=="Escape"||re.nativeEvent.isComposing||(re.preventDefault(),re.stopPropagation(),ae())},onClick:re=>re.stopPropagation(),children:(0,O_.jsx)(bg,{ref:B,element:t,timestamp:n,selectedText:o,placeholder:r,initialValue:i,submitLabel:l,onSubmit:s,onCancel:ae,onDelete:u,onOpenSource:h,allowEmpty:f,accentColor:S,computedStyles:y,disabled:J==="exit"})})}),Ic=`.icon-transitions-module__iconState___uqK9J {
  transition: opacity 0.2s ease, transform 0.2s ease;
  transform-origin: center;
}

.icon-transitions-module__iconStateFast___HxlMm {
  transition: opacity 0.15s ease, transform 0.15s ease;
  transform-origin: center;
}

.icon-transitions-module__iconFade___nPwXg {
  transition: opacity 0.2s ease;
}

.icon-transitions-module__iconFadeFast___Ofb2t {
  transition: opacity 0.15s ease;
}

.icon-transitions-module__visible___PlHsU {
  opacity: 1 !important;
}

.icon-transitions-module__visibleScaled___8Qog- {
  opacity: 1 !important;
  transform: scale(1);
}

.icon-transitions-module__hidden___ETykt {
  opacity: 0 !important;
}

.icon-transitions-module__hiddenScaled___JXn-m {
  opacity: 0 !important;
  transform: scale(0.8);
}

.icon-transitions-module__sending___uaLN- {
  opacity: 0.5 !important;
  transform: scale(0.8);
}`,pt={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"},p2=({size:e=16})=>(0,te.jsx)("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",children:(0,te.jsx)("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),m2=({size:e=20,...t})=>(0,te.jsxs)("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:[(0,te.jsx)("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),(0,te.jsx)("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,te.jsx)("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),g2=({size:e=24,copied:t=!1,tint:n})=>(0,te.jsxs)("svg",{ref:q_("icon-transitions",Ic),width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:n?{color:n,transition:"color 0.3s ease"}:void 0,children:[(0,te.jsxs)("g",{className:`${pt.iconState} ${t?pt.hiddenScaled:pt.visibleScaled}`,children:[(0,te.jsx)("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),(0,te.jsx)("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),(0,te.jsxs)("g",{className:`${pt.iconState} ${t?pt.visibleScaled:pt.hiddenScaled}`,children:[(0,te.jsx)("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,te.jsx)("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),y2=({size:e=24,state:t="idle"})=>{let n=t==="idle",o=t==="sent",r=t==="failed",i=t==="sending";return(0,te.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[(0,te.jsx)("g",{className:`${pt.iconStateFast} ${n?pt.visibleScaled:i?pt.sending:pt.hiddenScaled}`,children:(0,te.jsx)("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,te.jsxs)("g",{className:`${pt.iconStateFast} ${o?pt.visibleScaled:pt.hiddenScaled}`,children:[(0,te.jsx)("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,te.jsx)("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,te.jsxs)("g",{className:`${pt.iconStateFast} ${r?pt.visibleScaled:pt.hiddenScaled}`,children:[(0,te.jsx)("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,te.jsx)("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),(0,te.jsx)("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},x2=({size:e=24,isOpen:t=!0})=>(0,te.jsxs)("svg",{ref:q_("icon-transitions",Ic),width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[(0,te.jsxs)("g",{className:`${pt.iconFade} ${t?pt.visible:pt.hidden}`,children:[(0,te.jsx)("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,te.jsx)("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,te.jsxs)("g",{className:`${pt.iconFade} ${t?pt.hidden:pt.visible}`,children:[(0,te.jsx)("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),(0,te.jsx)("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),v2=({size:e=24,isPaused:t=!1})=>(0,te.jsxs)("svg",{ref:q_("icon-transitions",Ic),width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[(0,te.jsxs)("g",{className:`${pt.iconFadeFast} ${t?pt.hidden:pt.visible}`,children:[(0,te.jsx)("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,te.jsx)("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),(0,te.jsx)("path",{className:`${pt.iconFadeFast} ${t?pt.visible:pt.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),w2=({size:e=16})=>(0,te.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[(0,te.jsx)("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,te.jsx)("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),b2=({size:e=16})=>(0,te.jsx)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:(0,te.jsx)("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),k2=({size:e=16})=>(0,te.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[(0,te.jsxs)("g",{clipPath:"url(#clip0_2_53)",children:[(0,te.jsx)("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,te.jsx)("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,te.jsx)("defs",{children:(0,te.jsx)("clipPath",{id:"clip0_2_53",children:(0,te.jsx)("rect",{width:"24",height:"24",fill:"white"})})})]}),C2=({size:e=16})=>(0,te.jsxs)("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",children:[(0,te.jsx)("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,te.jsx)("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,te.jsx)("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,te.jsx)("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,te.jsx)("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,te.jsx)("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,te.jsx)("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,te.jsx)("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,te.jsx)("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),S2=({size:e=16})=>(0,te.jsx)("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",children:(0,te.jsx)("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),M2=({size:e=16})=>(0,te.jsx)("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,te.jsx)("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),E2=({size:e=16})=>(0,te.jsx)("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,te.jsx)("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),L2=({size:e=24})=>(0,te.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[(0,te.jsx)("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),(0,te.jsx)("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),(0,te.jsx)("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),N2=({content:e,children:t,...n})=>{let[o,r]=(0,Eo.useState)(!1),[i,l]=(0,Eo.useState)(!1),[s,a]=(0,Eo.useState)({top:0,right:0}),u=(0,Eo.useRef)(null),h=(0,Eo.useRef)(null),f=(0,Eo.useRef)(null),x=()=>{if(u.current){let N=u.current.getBoundingClientRect();a({top:N.top+N.height/2,right:window.innerWidth-N.left+8})}},S=()=>{l(!0),f.current&&(clearTimeout(f.current),f.current=null),x(),h.current=ot(()=>{r(!0)},500)},b=()=>{h.current&&(clearTimeout(h.current),h.current=null),r(!1),f.current=ot(()=>{l(!1)},150)};return(0,Eo.useEffect)(()=>()=>{h.current&&clearTimeout(h.current),f.current&&clearTimeout(f.current)},[]),(0,ti.jsxs)(ti.Fragment,{children:[(0,ti.jsx)("span",{ref:u,onMouseEnter:S,onMouseLeave:b,...n,children:t}),i&&(0,kg.createPortal)((0,ti.jsx)("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:s.top,right:s.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:o?1:0,transition:"opacity 0.15s ease"},children:e}),document.body)]})},I2=`.styles-module__tooltip___mcXL2 {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: help;
}

.styles-module__tooltipIcon___Nq2nD {
  transform: translateY(0.5px);
  color: #fff;
  opacity: 0.2;
  transition: opacity 0.15s ease;
  will-change: transform;
}
.styles-module__tooltip___mcXL2:hover .styles-module__tooltipIcon___Nq2nD {
  opacity: 0.5;
}
[data-agentation-theme=light] .styles-module__tooltipIcon___Nq2nD {
  color: #000;
}`,D0={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"},Zr=({content:e})=>(0,A_.jsx)(N2,{className:D0.tooltip,content:e,children:(0,A_.jsx)(m2,{className:D0.tooltipIcon})}),R2=`.styles-module__toolbar___wNsdK svg[fill=none],
.styles-module__markersLayer___-25j1 svg[fill=none],
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] {
  fill: none !important;
}
.styles-module__toolbar___wNsdK svg[fill=none] :not([fill]),
.styles-module__markersLayer___-25j1 svg[fill=none] :not([fill]),
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] :not([fill]) {
  fill: none !important;
}

.styles-module__controlsContent___9GJWU :where(button, input, select, textarea, label) {
  background: unset;
  border: unset;
  border-radius: unset;
  padding: unset;
  margin: unset;
  color: unset;
  font-family: unset;
  font-weight: unset;
  font-style: unset;
  line-height: unset;
  letter-spacing: unset;
  text-transform: unset;
  text-decoration: unset;
  box-shadow: unset;
  outline: unset;
}

@keyframes styles-module__toolbarEnter___u8RRu {
  from {
    opacity: 0;
    transform: scale(0.5) rotate(90deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
@keyframes styles-module__toolbarHide___y8kaT {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.8);
  }
}
@keyframes styles-module__badgeEnter___mVQLj {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleIn___c-r1K {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleOut___Wctwz {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.85);
  }
}
@keyframes styles-module__slideUp___kgD36 {
  from {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes styles-module__slideDown___zcdje {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
}
@keyframes styles-module__fadeIn___b9qmf {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__fadeOut___6Ut6- {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__hoverHighlightIn___6WYHY {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__hoverTooltipIn___FYGQx {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
.styles-module__disableTransitions___EopxO :is(*, *::before, *::after) {
  transition: none !important;
}

:host {
  /* Set here rather than inline so a consumer className rule can still hide the toolbar. */
  display: contents;
  position: fixed;
  top: auto;
  left: auto;
  bottom: 1.25rem;
  right: 1.25rem;
  z-index: 100000;
}

.styles-module__positionContext___AZFHE,
.styles-module__toolbar___wNsdK {
  position: inherit;
  top: inherit;
  left: inherit;
  bottom: inherit;
  right: inherit;
  z-index: inherit;
}

.styles-module__toolbar___wNsdK {
  width: 337px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: none;
  transition: left 0.36s cubic-bezier(0.19, 1, 0.22, 1), top 0s, right 0s, bottom 0s;
}
.styles-module__toolbar___wNsdK[data-dragging=true] {
  transition: none;
}

.styles-module__toolbarContainer___dIhma {
  position: relative;
  -webkit-user-select: none;
  user-select: none;
  margin-left: auto;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  color: #fff;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
  transition: width 0.36s cubic-bezier(0.19, 1, 0.22, 1), transform 0.36s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toolbarContainer___dIhma.styles-module__entrance___sgHd8 {
  animation: styles-module__toolbarEnter___u8RRu 0.5s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
}
.styles-module__toolbarContainer___dIhma.styles-module__hiding___1td44 {
  animation: styles-module__toolbarHide___y8kaT 0.4s cubic-bezier(0.4, 0, 1, 1) forwards;
  pointer-events: none;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn {
  width: 44px;
  height: 44px;
  border-radius: 22px;
  padding: 0;
  cursor: pointer;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #2a2a2a;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:active {
  transform: scale(0.95);
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx {
  height: 44px;
  border-radius: 22px;
  padding: 5px;
  width: 297px;
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx.styles-module__serverConnected___Gfbou {
  width: 337px;
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__toolbar___wNsdK,
  .styles-module__toolbarContainer___dIhma {
    transition: none;
  }
}
.styles-module__buttonWrapper___rBcdv.styles-module__toggleWrapper___7N0-q {
  position: absolute;
  top: 0;
  right: 0;
  width: 44px;
  height: 44px;
}

.styles-module__togglePlaceholder___wnqrL {
  width: 34px;
  flex: 0 0 34px;
  height: 34px;
}

.styles-module__toggleContent___0yfyP {
  position: absolute;
  top: 0;
  right: 0;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 50%;
  padding: 0;
  margin: 0;
  background: transparent;
  color: #fff;
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__toggleContent___0yfyP::before {
  content: "";
  position: absolute;
  inset: 5px;
  border-radius: 50%;
  pointer-events: none;
  background: transparent;
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN {
  color: rgba(255, 255, 255, 0.85);
}
.styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:hover {
  color: #fff;
}
.styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:hover::before {
  background: rgba(255, 255, 255, 0.12);
}
.styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:active::before, .styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:active .styles-module__toggleGlyph___R7Oom {
  transform: scale(0.92);
}

.styles-module__toggleIcon___Jbtus {
  transform: translateY(-0.5px);
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.styles-module__expandedToggle___F7SRN .styles-module__toggleIcon___Jbtus {
  transform: none;
}

.styles-module__toggleGlyph___R7Oom {
  overflow: visible;
  transition: transform 0.1s ease;
}
.styles-module__toggleGlyph___R7Oom path {
  transform-box: fill-box;
  transform-origin: center;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.16s ease;
}

.styles-module__toggleTopLine___hQaCm,
.styles-module__toggleMiddleLine___sFFVe {
  vector-effect: non-scaling-stroke;
}

.styles-module__toggleBottomLine___V-jX3 {
  transform-origin: left center;
}

.styles-module__toggleGlyph___R7Oom[data-active=true] .styles-module__toggleTopLine___hQaCm {
  transform: translateY(5.25px) rotate(45deg) scaleX(1.1422494);
}
.styles-module__toggleGlyph___R7Oom[data-active=true] .styles-module__toggleMiddleLine___sFFVe {
  transform: translateX(3.5px) rotate(-45deg) scaleX(2.4748737);
}
.styles-module__toggleGlyph___R7Oom[data-active=true] .styles-module__toggleBottomLine___V-jX3 {
  transform: scaleX(0);
  opacity: 0;
}
.styles-module__toggleGlyph___R7Oom[data-active=true] .styles-module__toggleSparkle___eeF99 {
  transform: scale(0);
  opacity: 0;
}

.styles-module__toggleContent___0yfyP:focus-visible,
.styles-module__controlButton___8Q0jc:focus-visible {
  outline: 2px solid var(--agentation-color-accent);
  outline-offset: 3px;
}

.styles-module__controlsContent___9GJWU {
  display: flex;
  align-items: center;
  gap: 6px;
  transition: filter 0.14s ease-out, opacity 0.14s ease-out, transform 0.36s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW {
  transition: filter 0.3s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.24s ease-out, transform 0.42s cubic-bezier(0.19, 1, 0.22, 1);
  opacity: 1;
  filter: blur(0px);
  transform: scale(1);
  visibility: visible;
  pointer-events: auto;
}
.styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {
  pointer-events: none;
  opacity: 0;
  filter: blur(6px);
  transform: scale(0.4);
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__controlsContent___9GJWU,
  .styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW,
  .styles-module__toggleContent___0yfyP,
  .styles-module__toggleContent___0yfyP::before,
  .styles-module__toggleGlyph___R7Oom,
  .styles-module__toggleIcon___Jbtus,
  .styles-module__toggleGlyph___R7Oom path {
    transition: none;
  }
  .styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {
    filter: none;
    transform: none;
  }
}
.styles-module__badge___2XsgF {
  position: absolute;
  top: -13px;
  right: -13px;
  -webkit-user-select: none;
  user-select: none;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.04);
  opacity: 1;
  transition: transform 0.3s ease, opacity 0.2s ease;
  transform: scale(1);
}
.styles-module__badge___2XsgF.styles-module__fadeOut___6Ut6- {
  opacity: 0;
  transform: scale(0);
  pointer-events: none;
}
.styles-module__badge___2XsgF.styles-module__entrance___sgHd8 {
  animation: styles-module__badgeEnter___mVQLj 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) 0.4s both;
}

.styles-module__controlButton___8Q0jc {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease, opacity 0.2s ease;
}
.styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}
.styles-module__controlButton___8Q0jc:active:not(:disabled) {
  transform: scale(0.92);
}
.styles-module__controlButton___8Q0jc:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background-color: color-mix(in srgb, var(--agentation-color-blue) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__controlButton___8Q0jc[data-no-hover=true], .styles-module__controlButton___8Q0jc.styles-module__statusShowing___te6iu {
  cursor: default;
  pointer-events: none;
  background: transparent !important;
}
.styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
  cursor: default;
}
.styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}

.styles-module__buttonBadge___NeFWb {
  position: absolute;
  top: 0px;
  right: 0px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 8px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px #1a1a1a, 0 1px 3px rgba(0, 0, 0, 0.2);
  pointer-events: none;
}
[data-agentation-theme=light] .styles-module__buttonBadge___NeFWb {
  box-shadow: 0 0 0 2px #fff, 0 1px 3px rgba(0, 0, 0, 0.2);
}

@keyframes styles-module__mcpIndicatorPulseConnected___EDodZ {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpIndicatorPulseConnecting___cCYte {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-yellow) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-yellow) 0%, transparent);
  }
}
.styles-module__mcpIndicator___zGJeL {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  pointer-events: none;
  transition: background-color 0.3s ease, opacity 0.15s ease, transform 0.15s ease;
  opacity: 1;
  transform: scale(1);
}
.styles-module__mcpIndicator___zGJeL.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpIndicatorPulseConnected___EDodZ 2.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpIndicatorPulseConnecting___cCYte 1.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__hidden___Ae8H4 {
  opacity: 0;
  transform: scale(0);
  animation: none;
}

@keyframes styles-module__connectionPulse___-Zycw {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.9);
  }
}
.styles-module__connectionIndicatorWrapper___L-e-3 {
  width: 8px;
  height: 34px;
  margin-left: 6px;
  margin-right: 6px;
}

.styles-module__connectionIndicator___afk9p {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease, background-color 0.3s ease;
  cursor: default;
}

.styles-module__connectionIndicatorVisible___C-i5B {
  opacity: 1;
}

.styles-module__connectionIndicatorConnected___IY8pR {
  background-color: var(--agentation-color-green);
  animation: styles-module__connectionPulse___-Zycw 2.5s ease-in-out infinite;
}

.styles-module__connectionIndicatorDisconnected___kmpaZ {
  background-color: var(--agentation-color-red);
  animation: none;
}

.styles-module__connectionIndicatorConnecting___QmSLH {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__connectionPulse___-Zycw 1s ease-in-out infinite;
}

.styles-module__buttonWrapper___rBcdv {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) scale(1);
  transition-delay: 0.85s;
}
.styles-module__buttonWrapper___rBcdv:has(.styles-module__controlButton___8Q0jc:disabled):hover .styles-module__buttonTooltip___Burd9 {
  opacity: 0;
  visibility: hidden;
}

.styles-module__tooltipsInSession___-0lHH .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transition-delay: 0s;
}

.styles-module__sendButtonWrapper___UUxG6 {
  width: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  margin-left: -6px;
  transition: width 0.36s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.2s cubic-bezier(0.19, 1, 0.22, 1), margin 0.36s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6 .styles-module__controlButton___8Q0jc {
  transform: scale(0.8);
  transition: transform 0.36s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU {
  width: 34px;
  opacity: 1;
  overflow: visible;
  pointer-events: auto;
  margin-left: 0;
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU .styles-module__controlButton___8Q0jc {
  transform: scale(1);
}

.styles-module__buttonTooltip___Burd9 {
  position: absolute;
  bottom: calc(100% + 14px);
  left: 50%;
  transform: translateX(-50%) scale(0.95);
  padding: 6px 10px;
  background: #1a1a1a;
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 100001;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: opacity 0.135s ease, transform 0.135s ease, visibility 0.135s ease;
}
.styles-module__buttonTooltip___Burd9::after {
  content: "";
  position: absolute;
  top: calc(100% - 4px);
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 8px;
  height: 8px;
  background: #1a1a1a;
  border-radius: 0 0 2px 0;
}

.styles-module__shortcut___lEAQk {
  margin-left: 4px;
  opacity: 0.5;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9 {
  bottom: auto;
  top: calc(100% + 14px);
  transform: translateX(-50%) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9::after {
  top: -4px;
  bottom: auto;
  border-radius: 2px 0 0 0;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-50%) scale(1);
}

.styles-module__tooltipsHidden___VtLJG .styles-module__buttonTooltip___Burd9 {
  opacity: 0 !important;
  visibility: hidden !important;
  transition: none !important;
}

.styles-module__tooltipVisible___0jcCv,
.styles-module__tooltipsHidden___VtLJG .styles-module__tooltipVisible___0jcCv {
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateX(-50%) scale(1) !important;
  transition-delay: 0s !important;
}

.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(-12px) scale(0.95);
}
.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9::after {
  left: 16px;
}
.styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9::after {
  left: auto;
  right: 8px;
}
.styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__divider___c--s1 {
  width: 1px;
  height: 12px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 3px;
}

.styles-module__overlay___Q1O9y {
  position: fixed;
  inset: 0;
  z-index: 99997;
  pointer-events: none;
}
.styles-module__overlay___Q1O9y > * {
  pointer-events: auto;
}

.styles-module__hoverHighlight___ogakW {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-accent) 50%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-accent) 4%, transparent);
  pointer-events: none !important;
  box-sizing: border-box;
  will-change: opacity;
  contain: layout style;
}
.styles-module__hoverHighlight___ogakW.styles-module__enter___WFIki {
  animation: styles-module__hoverHighlightIn___6WYHY 0.12s ease-out forwards;
}

.styles-module__multiSelectOutline___cSJ-m {
  position: fixed;
  border: 2px dashed color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-green) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__singleSelectOutline___QhX-O {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-blue) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-blue) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__hoverTooltip___bvLk7 {
  position: fixed;
  z-index: 99999;
  font-size: 0.6875rem;
  font-weight: 500;
  color: #fff;
  background: rgba(0, 0, 0, 0.85);
  padding: 0.35rem 0.6rem;
  border-radius: 0.375rem;
  pointer-events: none !important;
  white-space: nowrap;
  max-width: min(280px, 100vw - 16px - 1.2rem);
  overflow: hidden;
  text-overflow: ellipsis;
}
.styles-module__hoverTooltip___bvLk7.styles-module__enter___WFIki {
  animation: styles-module__hoverTooltipIn___FYGQx 0.1s ease-out forwards;
}

.styles-module__hoverReactPath___gx1IJ {
  font-size: 0.625rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__hoverElementName___QMLMl {
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markersLayer___-25j1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__markersLayer___-25j1 > * {
  pointer-events: auto;
}

.styles-module__fixedMarkersLayer___ffyX6 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__fixedMarkersLayer___ffyX6 > * {
  pointer-events: auto;
}

.styles-module__marker___6sQrs {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  -webkit-user-select: none;
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___6sQrs:hover {
  z-index: 2;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___6sQrs.styles-module__enter___WFIki {
  animation: styles-module__markerIn___5FaAP 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___6sQrs.styles-module__exit___fyOJ0 {
  animation: styles-module__markerOut___GU5jX 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs.styles-module__clearing___FQ--7 {
  animation: styles-module__markerOut___GU5jX 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___6sQrs.styles-module__pending___2IHLC {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___6sQrs.styles-module__fixed___dBMHC {
  position: fixed;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz.styles-module__pending___2IHLC {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___6sQrs.styles-module__hovered___ZgXIy {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___nCTxD {
  display: block;
  animation: styles-module__renumberRoll___Wgbq3 0.2s ease-out;
}

@keyframes styles-module__renumberRoll___Wgbq3 {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__markerTooltip___aLJID {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___aLJID.styles-module__enter___WFIki {
  animation: styles-module__tooltipIn___0N31w 0.1s ease-out forwards;
}

.styles-module__markerQuote___FHmrz {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___QkrrS {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

.styles-module__markerHint___2iF-6 {
  display: block;
  font-size: 0.625rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.375rem;
  white-space: nowrap;
}

.styles-module__settingsPanel___OxX3Y {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 1rem;
  padding: 13px 0 16px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y::before, .styles-module__settingsPanel___OxX3Y::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___OxX3Y::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrandSlash___uTG18,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY,
.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz,
.styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa,
.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax,
.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr,
.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp,
.styles-module__settingsPanel___OxX3Y .styles-module__themeToggle___2rUjA {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__enter___WFIki {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__exit___fyOJ0 {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12 {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__settingsPanelContainer___Xksv8 {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 1rem;
}

.styles-module__settingsPage___6YfHH {
  min-width: 100%;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___6YfHH.styles-module__slideLeft___Ps01J {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 3px 1rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6.styles-module__slideIn___4-qXe {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsNavLink___wCzJt {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(255, 255, 255, 0.9);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(0, 0, 0, 0.8);
}
.styles-module__settingsNavLink___wCzJt svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___ZWwhj {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__mcpNavIndicator___cl9pO {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s ease-in-out infinite;
}

.styles-module__settingsBackButton___bIe2j {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 0 12px 0;
  margin: -6px 0 0.5rem 0;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 0;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(255, 255, 255, 0.07);
}
.styles-module__settingsBackButton___bIe2j:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___InP0r {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___InP0r {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___NKlmo {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___NKlmo {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___8xv-x {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___8xv-x:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendRow___UblX5 {
  display: flex;
  align-items: center;
  gap: 8px;
}

.styles-module__autoSendLabel___icDc2 {
  font-size: 0.6875rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: var(--agentation-color-blue);
}

.styles-module__webhookUrlInput___2375C {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__settingsHeader___pwDY9 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  margin-bottom: 0.5rem;
  padding-bottom: 9px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.styles-module__settingsBrand___0gJeM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___uTG18 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___TUcFq {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__settingsSection___m-YM2 + .styles-module__settingsSection___m-YM2 {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__settingsSection___m-YM2.styles-module__settingsSectionExtraPadding___jdhFV {
  padding-top: calc(0.5rem + 4px);
}

.styles-module__settingsSectionGrow___h-5HZ {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___3sdhc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___3sdhc.styles-module__settingsRowMarginTop___zA0Sp {
  margin-top: 8px;
}

.styles-module__dropdownContainer___BVnxe {
  position: relative;
}

.styles-module__dropdownButton___16NPz {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownButton___16NPz:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownButton___16NPz svg {
  opacity: 0.6;
}

.styles-module__cycleButton___FMKfw {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___FMKfw {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___FMKfw:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__settingsRowDisabled___EgS0V .styles-module__toggleSwitch___l4Ygm {
  opacity: 0.4;
  cursor: not-allowed;
}

@keyframes styles-module__cycleTextIn___Q6zJf {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__cycleButtonText___fD1LR {
  display: inline-block;
  animation: styles-module__cycleTextIn___Q6zJf 0.2s ease-out;
}

.styles-module__cycleDots___LWuoQ {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___nPgLY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__dropdownMenu___k73ER {
  position: absolute;
  right: 0;
  top: calc(100% + 0.25rem);
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 0.25rem;
  min-width: 120px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
  z-index: 10;
  animation: styles-module__scaleIn___c-r1K 0.15s ease-out;
}

.styles-module__dropdownItem___ylsLj {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.625rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  text-align: left;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownItem___ylsLj:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownItem___ylsLj.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-weight: 600;
}

.styles-module__settingsLabel___8UjfX {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  gap: 0.125rem;
}
[data-agentation-theme=light] .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__settingsLabelMarker___ewdtV {
  padding-top: 3px;
  margin-bottom: 10px;
}

.styles-module__settingsOptions___LyrBA {
  display: flex;
  gap: 0.25rem;
}

.styles-module__settingsOption___UNa12 {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.styles-module__settingsOption___UNa12:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
  color: var(--agentation-color-blue);
}

.styles-module__sliderContainer___ducXj {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.styles-module__slider___GLdxp {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}
.styles-module__slider___GLdxp::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp:hover::-webkit-slider-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}
.styles-module__slider___GLdxp:hover::-moz-range-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

.styles-module__sliderLabels___FhLDB {
  display: flex;
  justify-content: space-between;
}

.styles-module__sliderLabel___U8sPr {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__sliderLabel___U8sPr:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {
  color: rgba(255, 255, 255, 0.9);
}

.styles-module__colorOptions___iHCNX {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.375rem;
  margin-bottom: 1px;
}

.styles-module__colorOption___IodiY {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid transparent;
  background-color: var(--swatch);
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___IodiY {
    background-color: var(--swatch-p3);
  }
}
.styles-module__colorOption___IodiY:hover {
  transform: scale(1.15);
}
.styles-module__colorOption___IodiY.styles-module__selected___OwRqP {
  transform: scale(0.83);
}

.styles-module__colorOptionRing___U2xpo {
  display: flex;
  width: 24px;
  height: 24px;
  border: 2px solid transparent;
  border-radius: 50%;
  transition: border-color 0.3s ease;
}
.styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
  border-color: var(--swatch);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
    border-color: var(--swatch-p3);
  }
}

.styles-module__settingsToggle___fBrFn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}
.styles-module__settingsToggle___fBrFn + .styles-module__settingsToggle___fBrFn {
  margin-top: calc(0.5rem + 6px);
}
.styles-module__settingsToggle___fBrFn input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__settingsToggle___fBrFn.styles-module__settingsToggleMarginBottom___MZUyF {
  margin-bottom: calc(0.5rem + 6px);
}

@keyframes styles-module__mcpPulse___uNggr {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___fov9B {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
.styles-module__mcpStatusDot___ibgkc {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__disconnected___cHPxR {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___fov9B 2s infinite;
}

.styles-module__drawCanvas___7cG9U {
  position: fixed;
  inset: 0;
  z-index: 99996;
  pointer-events: none !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6 {
  pointer-events: auto !important;
  cursor: crosshair !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6[data-stroke-hover] {
  cursor: pointer !important;
}

.styles-module__dragSelection___kZLq2 {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-green) 8%, transparent);
  pointer-events: none;
  z-index: 99997;
  will-change: transform, width, height;
  contain: layout style;
}

.styles-module__dragCount___KM90j {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--agentation-color-green);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  min-width: 1.5rem;
  text-align: center;
}

.styles-module__highlightsContainer___-0xzG {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__selectedElementHighlight___fyVlI {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  border-radius: 4px;
  background: color-mix(in srgb, var(--agentation-color-green) 6%, transparent);
  pointer-events: none;
  will-change: transform, width, height;
  contain: layout style;
}

[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #f5f5f5;
}
[data-agentation-theme=light] .styles-module__toggleContent___0yfyP {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:hover {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:hover::before {
  background: rgba(0, 0, 0, 0.06);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9 {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9::after {
  background: #fff;
}
[data-agentation-theme=light] .styles-module__divider___c--s1 {
  background: rgba(0, 0, 0, 0.1);
}`,O={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",positionContext:"styles-module__positionContext___AZFHE",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",buttonWrapper:"styles-module__buttonWrapper___rBcdv",toggleWrapper:"styles-module__toggleWrapper___7N0-q",togglePlaceholder:"styles-module__togglePlaceholder___wnqrL",toggleContent:"styles-module__toggleContent___0yfyP",expandedToggle:"styles-module__expandedToggle___F7SRN",toggleGlyph:"styles-module__toggleGlyph___R7Oom",toggleIcon:"styles-module__toggleIcon___Jbtus",toggleTopLine:"styles-module__toggleTopLine___hQaCm",toggleMiddleLine:"styles-module__toggleMiddleLine___sFFVe",toggleBottomLine:"styles-module__toggleBottomLine___V-jX3",toggleSparkle:"styles-module__toggleSparkle___eeF99",controlButton:"styles-module__controlButton___8Q0jc",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};ne={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},Cg=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...ne.navigation},{type:"header",label:"Header",...ne.header},{type:"hero",label:"Hero",...ne.hero},{type:"section",label:"Section",...ne.section},{type:"sidebar",label:"Sidebar",...ne.sidebar},{type:"footer",label:"Footer",...ne.footer},{type:"modal",label:"Modal",...ne.modal},{type:"banner",label:"Banner",...ne.banner},{type:"drawer",label:"Drawer",...ne.drawer},{type:"popover",label:"Popover",...ne.popover},{type:"divider",label:"Divider",...ne.divider}]},{section:"Content",items:[{type:"card",label:"Card",...ne.card},{type:"text",label:"Text",...ne.text},{type:"image",label:"Image",...ne.image},{type:"video",label:"Video",...ne.video},{type:"table",label:"Table",...ne.table},{type:"grid",label:"Grid",...ne.grid},{type:"list",label:"List",...ne.list},{type:"chart",label:"Chart",...ne.chart},{type:"codeBlock",label:"Code Block",...ne.codeBlock},{type:"map",label:"Map",...ne.map},{type:"timeline",label:"Timeline",...ne.timeline},{type:"calendar",label:"Calendar",...ne.calendar},{type:"accordion",label:"Accordion",...ne.accordion},{type:"carousel",label:"Carousel",...ne.carousel},{type:"logo",label:"Logo",...ne.logo},{type:"faq",label:"FAQ",...ne.faq},{type:"gallery",label:"Gallery",...ne.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...ne.button},{type:"input",label:"Input",...ne.input},{type:"search",label:"Search",...ne.search},{type:"form",label:"Form",...ne.form},{type:"tabs",label:"Tabs",...ne.tabs},{type:"dropdown",label:"Dropdown",...ne.dropdown},{type:"toggle",label:"Toggle",...ne.toggle},{type:"stepper",label:"Stepper",...ne.stepper},{type:"rating",label:"Rating",...ne.rating},{type:"fileUpload",label:"File Upload",...ne.fileUpload},{type:"checkbox",label:"Checkbox",...ne.checkbox},{type:"radio",label:"Radio",...ne.radio},{type:"slider",label:"Slider",...ne.slider},{type:"datePicker",label:"Date Picker",...ne.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...ne.avatar},{type:"badge",label:"Badge",...ne.badge},{type:"tag",label:"Tag",...ne.tag},{type:"breadcrumb",label:"Breadcrumb",...ne.breadcrumb},{type:"pagination",label:"Pagination",...ne.pagination},{type:"progress",label:"Progress",...ne.progress},{type:"alert",label:"Alert",...ne.alert},{type:"toast",label:"Toast",...ne.toast},{type:"notification",label:"Notification",...ne.notification},{type:"tooltip",label:"Tooltip",...ne.tooltip},{type:"stat",label:"Stat",...ne.stat},{type:"skeleton",label:"Skeleton",...ne.skeleton},{type:"chip",label:"Chip",...ne.chip},{type:"icon",label:"Icon",...ne.icon},{type:"spinner",label:"Spinner",...ne.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...ne.pricing},{type:"testimonial",label:"Testimonial",...ne.testimonial},{type:"cta",label:"CTA",...ne.cta},{type:"productCard",label:"Product Card",...ne.productCard},{type:"profile",label:"Profile",...ne.profile},{type:"feature",label:"Feature",...ne.feature},{type:"team",label:"Team",...ne.team},{type:"login",label:"Login",...ne.login},{type:"contact",label:"Contact",...ne.contact}]}],uo={};for(let e of Cg)for(let t of e.items)uo[t.type]=t;Yx={navigation:T2,hero:P2,sidebar:D2,footer:B2,modal:z2,card:O2,text:A2,image:F2,table:W2,list:j2,button:H2,input:U2,form:Y2,tabs:Q2,avatar:V2,badge:X2,header:G2,section:q2,grid:K2,dropdown:J2,toggle:Z2,search:ex,toast:tx,progress:nx,chart:ox,video:rx,tooltip:ix,breadcrumb:lx,pagination:sx,divider:ax,accordion:cx,carousel:dx,pricing:ux,testimonial:_x,cta:fx,alert:hx,banner:px,stat:mx,stepper:gx,tag:yx,rating:xx,map:vx,timeline:wx,fileUpload:bx,codeBlock:kx,calendar:Cx,notification:Sx,productCard:Mx,profile:Ex,drawer:Lx,popover:Nx,logo:Ix,faq:Rx,gallery:$x,checkbox:Tx,radio:Px,slider:Dx,datePicker:Bx,skeleton:zx,chip:Ox,icon:Ax,spinner:Fx,feature:Wx,team:jx,login:Hx,contact:Ux};Vx=`.styles-module__overlay___aWh-q svg[fill=none],
.styles-module__rearrangeOverlay___-3R3t svg[fill=none] {
  fill: none !important;
}
.styles-module__overlay___aWh-q svg[fill=none] :not([fill]),
.styles-module__rearrangeOverlay___-3R3t svg[fill=none] :not([fill]) {
  fill: none !important;
}

.styles-module__overlayExiting___iEmYr {
  opacity: 0 !important;
  transition: opacity 0.25s ease !important;
  pointer-events: none !important;
}

.styles-module__overlay___aWh-q {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: auto;
  cursor: default;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
  --agd-stroke: rgba(59, 130, 246, 0.35);
  --agd-fill: rgba(59, 130, 246, 0.06);
  --agd-bar: rgba(59, 130, 246, 0.18);
  --agd-bar-strong: rgba(59, 130, 246, 0.28);
  --agd-text-3: rgba(255, 255, 255, 0.6);
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q.styles-module__light___ORIft {
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) {
  --agd-surface: #141414;
}
.styles-module__overlay___aWh-q.styles-module__wireframe___itvQU {
  --agd-stroke: rgba(249, 115, 22, 0.35);
  --agd-fill: rgba(249, 115, 22, 0.06);
  --agd-bar: rgba(249, 115, 22, 0.18);
  --agd-bar-strong: rgba(249, 115, 22, 0.28);
}
.styles-module__overlay___aWh-q.styles-module__placing___45yD8 {
  cursor: crosshair;
}
.styles-module__overlay___aWh-q.styles-module__passthrough___xaFeE {
  pointer-events: none;
}

.styles-module__blankCanvas___t2Eue {
  position: fixed;
  inset: 0;
  z-index: 99994;
  background: #fff;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__visible___OKKqX {
  opacity: var(--canvas-opacity, 1);
  pointer-events: auto;
}
.styles-module__blankCanvas___t2Eue::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.08) 1px, transparent 1px);
  background-size: 24px 24px;
  background-position: 12px 12px;
  pointer-events: none;
  transition: opacity 0.2s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__gridActive___OZ-cf::after {
  opacity: 1;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.22) 1px, transparent 1px);
}

.styles-module__paletteHeader___-Q5gQ {
  padding: 0 1rem 0.375rem;
}

.styles-module__paletteHeaderTitle___oHqZC {
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  letter-spacing: -0.0094em;
}
.styles-module__light___ORIft .styles-module__paletteHeaderTitle___oHqZC {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__paletteHeaderDesc___6i74T {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.45);
  margin-top: 2px;
  line-height: 14px;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T {
  color: rgba(0, 0, 0, 0.45);
}
.styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__paletteHeaderDesc___6i74T a:hover {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__wireframePurposeWrap___To-tS {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__wireframePurposeWrap___To-tS.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__wireframePurposeInner___Lrahs {
  overflow: hidden;
}

.styles-module__wireframePurposeInput___7EtBN {
  display: block;
  width: calc(100% - 2rem);
  margin: 0.25rem 1rem 0.375rem;
  padding: 0.375rem 0.5rem;
  font-size: 0.8125rem;
  font-family: inherit;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.375rem;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN {
  color: rgba(0, 0, 0, 0.7);
  background: rgba(0, 0, 0, 0.03);
  border-color: rgba(0, 0, 0, 0.1);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__canvasToggle___-QqSy {
  width: calc(100% - 2rem);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  margin: 0.25rem 1rem 0.25rem;
  padding: 0.375rem 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 1px dashed rgba(255, 255, 255, 0.1);
  background: transparent;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.styles-module__canvasToggle___-QqSy:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.15);
}
.styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy {
  border-color: rgba(0, 0, 0, 0.08);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy:hover {
  background: rgba(0, 0, 0, 0.02);
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}

.styles-module__canvasToggleIcon___7pJ82 {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}
.styles-module__light___ORIft .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(0, 0, 0, 0.25);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__canvasToggleLabel___OanpY {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: -0.0094em;
}
.styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__canvasToggleLabel___OanpY {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}

.styles-module__placement___zcxv8 {
  position: absolute;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.08);
  cursor: grab;
  transition: box-shadow 0.15s, border-color 0.15s, opacity 0.15s ease, transform 0.15s ease;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: auto;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  animation: styles-module__placementEnter___TdRhf 0.25s cubic-bezier(0.34, 1.2, 0.64, 1);
}
.styles-module__placement___zcxv8:active {
  cursor: grabbing;
}
.styles-module__placement___zcxv8:hover {
  border-color: rgba(59, 130, 246, 0.5);
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.12);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #3c82f7;
  border-style: solid;
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8 {
  border-color: rgba(249, 115, 22, 0.4);
  background: rgba(249, 115, 22, 0.08);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8:hover {
  border-color: rgba(249, 115, 22, 0.5);
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.12);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__placement___zcxv8.styles-module__dragging___le6KZ {
  opacity: 0.85;
  z-index: 50;
}
.styles-module__placement___zcxv8.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__placementContent___f64A4 {
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.styles-module__placementLabel___0KvWl {
  position: absolute;
  top: -18px;
  left: 0;
  font-size: 10px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.7);
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.8), 0 0 8px rgba(255, 255, 255, 0.5);
}
.styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__placementLabel___0KvWl {
  color: rgba(249, 115, 22, 0.7);
}
.styles-module__wireframe___itvQU .styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #f97316;
}

.styles-module__placementAnnotation___78pTr {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(0, 0, 0, 0.5);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__placementAnnotation___78pTr.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__sectionAnnotation___aUIs0 {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(59, 130, 246, 0.6);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__sectionAnnotation___aUIs0.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__handle___Ikbxm {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #fff;
  border: 1.5px solid #3c82f7;
  border-radius: 2px;
  z-index: 12;
  box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.12);
  opacity: 0;
  transform: scale(0.3);
  pointer-events: none;
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.styles-module__placement___zcxv8:hover .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:hover .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:hover .styles-module__handle___Ikbxm, .styles-module__placement___zcxv8:active .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:active .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:active .styles-module__handle___Ikbxm, .styles-module__selected___6yrp6 .styles-module__handle___Ikbxm {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__sectionOutline___s0hy- .styles-module__handle___Ikbxm {
  border-color: inherit;
}
.styles-module__wireframe___itvQU .styles-module__handle___Ikbxm {
  border-color: #f97316;
}

.styles-module__handleNw___4TMIj {
  top: -4px;
  left: -4px;
  cursor: nw-resize;
}

.styles-module__handleNe___mnsTh {
  top: -4px;
  right: -4px;
  cursor: ne-resize;
}

.styles-module__handleSe___oSFnk {
  bottom: -4px;
  right: -4px;
  cursor: se-resize;
}

.styles-module__handleSw___pi--Z {
  bottom: -4px;
  left: -4px;
  cursor: sw-resize;
}

.styles-module__handleN___aBA-Q,
.styles-module__handleE___0hM5u,
.styles-module__handleS___JjDRv,
.styles-module__handleW___ERWGQ {
  opacity: 0 !important;
  pointer-events: none !important;
}

.styles-module__edgeHandle___XxXdT {
  position: absolute;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__edgeHandle___XxXdT::after {
  content: "";
  position: absolute;
  border-radius: 4px;
  background: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__edgeHandle___XxXdT::after {
  background: #f97316;
}
.styles-module__edgeHandle___XxXdT::after {
  opacity: 0;
  transition: opacity 0.1s ease, transform 0.1s ease;
  transform: scale(0.8);
}
.styles-module__edgeHandle___XxXdT:hover::after {
  opacity: 0.85;
  transform: scale(1);
}
.styles-module__edgeHandle___XxXdT svg {
  position: relative;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.1s ease;
  filter: drop-shadow(0 0 2px var(--agd-surface));
}
.styles-module__edgeHandle___XxXdT:hover svg {
  opacity: 1;
}

.styles-module__edgeN___-JJDj,
.styles-module__edgeS___66lMX {
  left: 12px;
  right: 12px;
  height: 12px;
  cursor: n-resize;
}
.styles-module__edgeN___-JJDj::after,
.styles-module__edgeS___66lMX::after {
  width: 24px;
  height: 4px;
}

.styles-module__edgeN___-JJDj {
  top: -6px;
}

.styles-module__edgeS___66lMX {
  bottom: -6px;
  cursor: s-resize;
}

.styles-module__edgeE___1bGDa,
.styles-module__edgeW___lHQNo {
  top: 12px;
  bottom: 12px;
  width: 12px;
  cursor: e-resize;
}
.styles-module__edgeE___1bGDa::after,
.styles-module__edgeW___lHQNo::after {
  width: 4px;
  height: 24px;
}

.styles-module__edgeE___1bGDa {
  right: -6px;
}

.styles-module__edgeW___lHQNo {
  left: -6px;
  cursor: w-resize;
}

.styles-module__deleteButton___LkGCb {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  line-height: 1;
  z-index: 15;
  pointer-events: none;
  opacity: 0;
  transform: scale(0.8);
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.12s ease, color 0.12s ease, border-color 0.12s ease, box-shadow 0.12s ease;
}
.styles-module__placement___zcxv8:hover .styles-module__deleteButton___LkGCb, .styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-:hover .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO:hover .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
  box-shadow: 0 1px 4px rgba(239, 68, 68, 0.3);
  transform: scale(1.1);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb {
  background: rgba(40, 40, 40, 0.9);
  border-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
}

.styles-module__drawBox___BrVAa {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 2px solid #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.15);
}

.styles-module__selectBox___Iu8kB {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 1px dashed #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  border-radius: 2px;
}

.styles-module__sizeIndicator___7zJ4y {
  position: fixed;
  pointer-events: none;
  z-index: 100001;
  font-size: 10px;
  color: #fff;
  background: #3c82f7;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.styles-module__guideLine___DUQY2 {
  pointer-events: none;
  z-index: 100001;
  background: #f0f;
  opacity: 0.5;
}

.styles-module__dragPreview___onPbU {
  position: fixed;
  z-index: 100002;
  pointer-events: none;
  border: 1.5px dashed #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.1);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: 600;
  color: #3c82f7;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.15);
  transition: width 0.08s ease, height 0.08s ease, opacity 0.08s ease;
}

.styles-module__dragPreviewWireframe___jsg0G {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  color: #f97316;
  box-shadow: 0 4px 16px rgba(249, 115, 22, 0.15);
}

.styles-module__palette___C7iSH {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  width: 256px;
  overflow: hidden;
  background: #1c1c1c;
  border: none;
  border-radius: 1rem;
  padding: 13px 0 16px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  z-index: 100001;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  cursor: default;
  opacity: 0;
  filter: blur(5px);
}
.styles-module__palette___C7iSH .styles-module__paletteItem___6TlnA,
.styles-module__palette___C7iSH .styles-module__paletteItemLabel___6ncO4,
.styles-module__palette___C7iSH .styles-module__paletteSectionTitle___PqnjX,
.styles-module__palette___C7iSH .styles-module__paletteFooter___QYnAG {
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__palette___C7iSH {
  opacity: 0;
  transform: translateY(var(--panel-offset-y, 4px)) scale(0.98);
  transform-origin: var(--panel-origin, bottom right);
  filter: blur(2px);
  pointer-events: none;
  visibility: hidden;
  transition: opacity 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.styles-module__palette___C7iSH[data-panel-present=true] {
  visibility: visible;
}
.styles-module__palette___C7iSH[data-panel-open=true] {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
  pointer-events: auto;
  transition-duration: 160ms;
}
@media (prefers-reduced-motion: reduce) {
  .styles-module__palette___C7iSH {
    transition: none;
    transform: none;
    filter: none;
  }
}
.styles-module__palette___C7iSH.styles-module__light___ORIft {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}

.styles-module__paletteSection___V8DEA {
  padding: 0 1rem;
}
.styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteSectionTitle___PqnjX {
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  padding: 0 0 3px 3px;
}
.styles-module__light___ORIft .styles-module__paletteSectionTitle___PqnjX {
  color: rgba(0, 0, 0, 0.4);
}

.styles-module__paletteItem___6TlnA {
  width: 100%;
  text-align: left;
  background: transparent;
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.25rem;
  margin-bottom: 1px;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease;
  border: 1px solid transparent;
  -webkit-user-select: none;
  user-select: none;
  min-height: 24px;
}
.styles-module__paletteItem___6TlnA:hover {
  background: rgba(255, 255, 255, 0.1);
}
.styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}

.styles-module__paletteItemIcon___0NPQK {
  width: 20px;
  height: 16px;
  border-radius: 2px;
  border: 1px dashed rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.45);
}
.styles-module__paletteItemIcon___0NPQK svg {
  display: block;
  width: 20px;
  height: 16px;
}
.styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(0, 0, 0, 0.12);
  background: rgba(0, 0, 0, 0.02);
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__paletteItemLabel___6ncO4 {
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: -0.0094em;
  line-height: 1;
  min-width: 0;
}
.styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}
.styles-module__light___ORIft .styles-module__paletteItemLabel___6ncO4 {
  color: rgba(0, 0, 0, 0.7);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}

.styles-module__placeScroll___7sClM {
  max-height: 240px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 0.25rem;
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px);
}
.styles-module__placeScroll___7sClM.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar {
  width: 3px;
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 2px;
}
.styles-module__light___ORIft .styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
}

.styles-module__paletteFooterWrap___71-fI {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.25s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__paletteFooterWrap___71-fI.styles-module__footerHidden___fJUik {
  grid-template-rows: 0fr;
}

.styles-module__paletteFooterInnerContent___VC26h {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__footerHidden___fJUik .styles-module__paletteFooterInnerContent___VC26h {
  opacity: 0;
  transform: translateY(4px);
}

.styles-module__paletteFooterInner___dfylY {
  overflow: hidden;
}

.styles-module__paletteFooter___QYnAG {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  padding: 0 1rem;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteFooter___QYnAG {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteFooterCount___D3Fia {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterCount___D3Fia {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__paletteFooterClear___ybBoa {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  transition: color 0.15s ease;
}
.styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__paletteFooterActions___fLzv8 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.styles-module__rollingWrap___S75jM {
  display: inline-block;
  overflow: hidden;
  height: 1.15em;
  position: relative;
  vertical-align: bottom;
}

.styles-module__rollingNum___1RKDx {
  position: absolute;
  left: 0;
  top: 0;
}

.styles-module__exitUp___AFDRW {
  animation: styles-module__numExitUp___FRQqx 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterUp___CPlXb {
  animation: styles-module__numEnterUp___2Yd-w 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__exitDown___-1yAy {
  animation: styles-module__numExitDown___xm5by 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterDown___DDuFR {
  animation: styles-module__numEnterDown___hpxBk 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

@keyframes styles-module__numExitUp___FRQqx {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterUp___2Yd-w {
  from {
    transform: translateY(110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes styles-module__numExitDown___xm5by {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterDown___hpxBk {
  from {
    transform: translateY(-110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.styles-module__rearrangeOverlay___-3R3t {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: none;
  cursor: default;
  -webkit-user-select: none;
  user-select: none;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
}

.styles-module__hoverHighlight___8eT-v {
  position: fixed;
  pointer-events: none;
  z-index: 99994;
  border: 2px dashed rgba(59, 130, 246, 0.5);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.06);
  animation: styles-module__highlightFadeIn___Lg7KY 0.12s ease;
}

.styles-module__sectionOutline___s0hy- {
  position: fixed;
  border: 2px solid;
  border-radius: 4px;
  cursor: grab;
}
.styles-module__sectionOutline___s0hy-:active {
  cursor: grabbing;
}
.styles-module__sectionOutline___s0hy- {
  transition: box-shadow 0.15s, border-color 0.3s, background-color 0.3s, border-style 0s;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}
.styles-module__sectionOutline___s0hy-:hover {
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 4px 12px rgba(0, 0, 0, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 {
  border-style: solid;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) {
  border: 1.5px dashed rgba(150, 150, 150, 0.35);
  background-color: transparent !important;
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover {
  border-color: rgba(150, 150, 150, 0.6);
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionLabel___F80HQ {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionLabel___F80HQ {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__movedBadge___s8z-q,
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionDimensions___RcJSL {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionDimensions___RcJSL {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__sectionLabel___F80HQ {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 10px;
  font-weight: 600;
  color: #fff;
  padding: 2px 8px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  max-width: calc(100% - 8px);
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__movedBadge___s8z-q {
  position: absolute;
  bottom: 22px;
  right: 4px;
  font-size: 9px;
  font-weight: 700;
  color: #fff;
  background: #22c55e;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__movedBadge___s8z-q.styles-module__badgeVisible___npbdS {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.2s cubic-bezier(0.34, 1.2, 0.64, 1), transform 0.2s cubic-bezier(0.34, 1.2, 0.64, 1);
}

.styles-module__resizedBadge___u51V8 {
  background: #3c82f7;
  bottom: 40px;
}

.styles-module__sectionDimensions___RcJSL {
  position: absolute;
  bottom: 4px;
  right: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(0, 0, 0, 0.5);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
.styles-module__light___ORIft .styles-module__sectionDimensions___RcJSL {
  color: rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.7);
}

.styles-module__wireframeNotice___4GJyB {
  position: fixed;
  bottom: 16px;
  left: 24px;
  z-index: 99995;
  font-size: 9.5px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: auto;
  animation: styles-module__overlayFadeIn___aECVy 0.3s ease;
  line-height: 1.5;
  max-width: 280px;
}

.styles-module__wireframeOpacityRow___CJXzi {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.styles-module__wireframeOpacityLabel___afkfT {
  font-size: 9px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.32);
  letter-spacing: 0.02em;
  white-space: nowrap;
  -webkit-user-select: none;
  user-select: none;
}

.styles-module__wireframeOpacitySlider___YcoEs {
  -webkit-appearance: none;
  appearance: none;
  width: 56px;
  height: 4px;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs:hover {
  background: rgba(0, 0, 0, 0.13);
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  cursor: pointer;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb:hover {
  background: rgb(88.0082041185%, 37.39404381%, 2.2663056855%);
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-thumb {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  border: none;
  cursor: pointer;
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-track {
  background: rgba(0, 0, 0, 0.08);
  height: 4px;
  border-radius: 2px;
}

.styles-module__wireframeNoticeTitleRow___PJqyG {
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 2px;
}

.styles-module__wireframeNoticeTitle___okr08 {
  font-weight: 600;
  color: rgba(0, 0, 0, 0.55);
}

.styles-module__wireframeNoticeDivider___PNKQ6 {
  width: 1px;
  height: 8px;
  background: rgba(0, 0, 0, 0.12);
  margin: 0 8px;
  flex-shrink: 0;
}

.styles-module__wireframeStartOver___YFk-I {
  font-size: 9.5px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
  text-decoration: none;
  transition: color 0.12s ease;
  white-space: nowrap;
}
.styles-module__wireframeStartOver___YFk-I:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__ghostOutline___po-kO {
  position: fixed;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.04);
  cursor: grab;
  opacity: 0.5;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__ghostEnter___EC3Mb 0.25s ease;
  transition: box-shadow 0.15s, border-color 0.3s, opacity 0.25s;
}
.styles-module__ghostOutline___po-kO:active {
  cursor: grabbing;
}
.styles-module__ghostOutline___po-kO:hover {
  opacity: 0.7;
  box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.1), 0 4px 12px rgba(0, 0, 0, 0.08);
}
.styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 {
  opacity: 1;
  border-style: solid;
  border-width: 2px;
  border-color: #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__ghostOutline___po-kO.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__ghostBadge___tsQUK {
  position: absolute;
  bottom: calc(100% + 4px);
  left: -1px;
  font-size: 9px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.9);
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.2);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  letter-spacing: 0.02em;
  line-height: 1.2;
  animation: styles-module__badgeSlideIn___typJ7 0.2s ease both;
}

@keyframes styles-module__badgeSlideIn___typJ7 {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__ghostBadgeExtra___6CVoD {
  display: inline;
  animation: styles-module__badgeExtraIn___i4W8F 0.2s ease both;
}

@keyframes styles-module__badgeExtraIn___i4W8F {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.styles-module__originalOutline___Y6DD1 {
  position: fixed;
  border: 1.5px dashed rgba(150, 150, 150, 0.3);
  border-radius: 4px;
  background: transparent;
  pointer-events: none;
  -webkit-user-select: none;
  user-select: none;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}

.styles-module__originalLabel___HqI9g {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(150, 150, 150, 0.5);
  padding: 1px 6px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: rgba(150, 150, 150, 0.08);
}

.styles-module__connectorSvg___Lovld {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__connectorLine___XeWh- {
  transition: opacity 0.2s ease;
  animation: styles-module__connectorDraw___8sK5I 0.3s ease both;
}

.styles-module__connectorDot___yvf7C {
  transform-box: fill-box;
  transform-origin: center;
  animation: styles-module__connectorDotIn___NwTUq 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s both;
}

@keyframes styles-module__connectorDraw___8sK5I {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__connectorDotIn___NwTUq {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.styles-module__connectorExiting___2lLOs {
  animation: styles-module__connectorOut___5QoPl 0.2s ease forwards;
}
.styles-module__connectorExiting___2lLOs .styles-module__connectorDot___yvf7C {
  animation: styles-module__connectorDotOut___FEq7e 0.2s ease forwards;
}

@keyframes styles-module__connectorOut___5QoPl {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__connectorDotOut___FEq7e {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
}
@keyframes styles-module__placementEnter___TdRhf {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__sectionEnter___-8BXT {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__highlightFadeIn___Lg7KY {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__overlayFadeIn___aECVy {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__ghostEnter___EC3Mb {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 0.6;
    transform: scale(1);
  }
}
.styles-module__canvasToggle___-QqSy:focus-visible,
.styles-module__paletteItem___6TlnA:focus-visible {
  outline: 2px solid var(--agentation-color-accent);
  outline-offset: -2px;
}`,D={overlay:"styles-module__overlay___aWh-q",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",overlayExiting:"styles-module__overlayExiting___iEmYr",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"},Hi=24,hc=5;g="currentColor",P="0.5";ev=new Set(["nav","header","main","section","article","footer","aside"]),F_={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},O0={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},tv=new Set(["script","style","noscript","link","meta"]),nv=40;A0={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},F0=["nw","n","ne","e","se","s","sw","w"],pc=24,W0=16,mc=5;iv=new Set(["script","style","noscript","link","meta","br","hr"]);W_=new Set(["script","style","noscript","link","meta","br","hr"]);U0=15;H_="feedback-annotations-",Pg=7;Z_="agentation-design-";ef="agentation-rearrange-";tf="agentation-wireframe-";Bg="agentation-session-";U_=`${Bg}toolbar-hidden`;st={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},K0=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),J0=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],Lv=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];Ui=null,Pv=new WeakMap;as={map:Pv};cs={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16};xc=new Map;ds=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];nw=`.styles-module__surface___7qnpJ {
  padding: 0;
  width: var(--preview-width, 200px);
  max-width: calc(100vw - 24px);
  overflow: auto;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  border-radius: 12px;
  z-index: inherit;
  will-change: auto;
  transform: translateX(-50%);
  transition: left 200ms cubic-bezier(0.2, 0.8, 0.2, 1), top 200ms cubic-bezier(0.2, 0.8, 0.2, 1), transform 200ms cubic-bezier(0.2, 0.8, 0.2, 1), width 200ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 100ms ease-out, visibility 0s 200ms;
}
.styles-module__surface___7qnpJ[data-positioning] {
  transition: none;
}
.styles-module__surface___7qnpJ[data-direct-entry] *, .styles-module__surface___7qnpJ[data-direct-entry] *::before, .styles-module__surface___7qnpJ[data-direct-entry] *::after {
  transition: none !important;
}
.styles-module__surface___7qnpJ[data-state=preview], .styles-module__surface___7qnpJ[data-state=edit] {
  opacity: 1;
  visibility: visible;
  transition-delay: 0s;
}
.styles-module__surface___7qnpJ[data-state=edit], .styles-module__surface___7qnpJ[data-annotation-popup][data-state=hidden] {
  width: 280px;
  border-radius: 16px;
}
.styles-module__surface___7qnpJ[data-state=edit] {
  pointer-events: auto;
}
.styles-module__surface___7qnpJ[data-state=preview] {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__surface___7qnpJ[data-state=preview] {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__surface___7qnpJ {
    transition: opacity 100ms ease-out, visibility 0s 100ms;
  }
}`,ow={surface:"styles-module__surface___7qnpJ"},rw=(0,Sn.forwardRef)(function({annotation:t,editing:n,exiting:o,restorePreview:r,editorProps:i,lightMode:l,scrollY:s,onExited:a},u){let h=(0,Sn.useRef)({annotation:t,editorProps:i}),f=t??h.current.annotation,x=t?i:h.current.editorProps,S=(0,Sn.useRef)(null),b=(0,Sn.useRef)(null),N=(0,Sn.useRef)(),E=(0,Sn.useRef)(s),y=n&&!o?"edit":t&&(!n||r)?"preview":"hidden",v=y==="preview"||!n;return(0,Sn.useLayoutEffect)(()=>{t&&(h.current={annotation:t,editorProps:i})},[t,i]),(0,Sn.useLayoutEffect)(()=>{let p=S.current;if(!p||!f)return;let C=y==="edit"&&(N.current!==f.id||p.dataset.state==="hidden"&&getComputedStyle(p).opacity==="0");C&&(p.dataset.directEntry="true");let H=()=>{let q=f.x/100*window.innerWidth,F=f.isFixed?f.y:f.y-s,K=y==="preview"||!n,ae=parseFloat(p.style.getPropertyValue("--preview-width"))||200,J=Math.min(ae,window.innerWidth-24),fe=Math.max(12,Math.min(window.innerWidth-J-12,q-J/2)),re=K?J:Math.min(280,window.innerWidth-24),ce=Math.min(K?12:20,(window.innerWidth-re)/2),pe=F>window.innerHeight-(K?101:290);p.style.left=`${Math.max(ce,Math.min(window.innerWidth-re-ce,fe))}px`,p.style.right="auto",p.style.top=`${Math.max(12,Math.min(window.innerHeight-12,F+(pe?-21:21)))}px`,p.style.bottom="auto",p.style.transform=pe?"translateY(-100%)":"translateY(0)",p.style.maxHeight=`${Math.max(100,pe?F-33:window.innerHeight-F-33)}px`},V=N.current!==f.id||E.current!==s||p.dataset.state==="hidden";V&&(p.dataset.positioning="true"),H(),(V||C)&&p.getBoundingClientRect(),delete p.dataset.positioning,delete p.dataset.directEntry,p.dataset.state=y,p.inert=y!=="edit",N.current=f.id,E.current=s;let B=()=>{p.dataset.positioning="true",H(),p.getBoundingClientRect(),delete p.dataset.positioning};return window.addEventListener("resize",B),()=>window.removeEventListener("resize",B)},[f?.id,f?.x,f?.y,f?.isFixed,y,n,s,f?.comment]),(0,Sn.useLayoutEffect)(()=>{n&&!o&&b.current?.focus()},[n,o,f?.id]),G_(S,o,a),(0,Sn.useImperativeHandle)(u,()=>({shake(){S.current?.animate?.([{translate:"0px"},{translate:"-3px"},{translate:"3px"},{translate:"-2px"},{translate:"2px"},{translate:"0px"}],{duration:250}),b.current?.focus()}}),[]),!f||!x?null:(0,Q_.jsx)("div",{ref:S,className:`${De.popup} ${ow.surface} ${l?De.light:""}`,"data-feedback-toolbar":!0,"data-annotation-card":!0,"data-annotation-popup":n?"":void 0,"data-state":"hidden","aria-hidden":y==="hidden",onClick:p=>p.stopPropagation(),onKeyDownCapture:p=>{p.key!=="Escape"||p.nativeEvent.isComposing||!n||(p.preventDefault(),p.stopPropagation(),x.onCancel())},children:(0,Q_.jsx)(bg,{ref:b,...x,variant:"card",preview:v,resetOnPreview:!n,disabled:!n||o},f.id)})}),iw=`@keyframes styles-module__markerIn___x4G8D {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes styles-module__markerOut___6VhQN {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
}
@keyframes styles-module__renumberRoll___akV9B {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__marker___9CKF7 {
  padding: 0;
  border: 0;
  box-sizing: border-box;
  font-family: inherit;
  line-height: 1;
  text-align: center;
  appearance: none;
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  -webkit-user-select: none;
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___9CKF7 > * {
  pointer-events: none;
}
.styles-module__marker___9CKF7:focus-visible {
  outline: 2px solid var(--agentation-color-accent);
  outline-offset: 3px;
}
.styles-module__marker___9CKF7:hover, .styles-module__marker___9CKF7:focus-visible, .styles-module__marker___9CKF7.styles-module__previewVisible___imMag {
  z-index: 2;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):not(.styles-module__confirm___BtMvq) {
  transition: background-color 0.15s ease, transform 0.1s ease, z-index 0s 0.1s;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):not(.styles-module__confirm___BtMvq):hover, .styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):not(.styles-module__confirm___BtMvq):focus-visible, .styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):not(.styles-module__confirm___BtMvq).styles-module__previewVisible___imMag {
  transition-delay: 0s;
}
.styles-module__marker___9CKF7.styles-module__enter___8kI3q {
  animation: styles-module__markerIn___x4G8D 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___9CKF7.styles-module__confirm___BtMvq {
  animation: styles-module__markerConfirm___RT4Sk 220ms ease-out both;
}
.styles-module__marker___9CKF7.styles-module__exit___KBdR3 {
  animation: styles-module__markerOut___6VhQN 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7.styles-module__clearing___8rM7K {
  animation: styles-module__markerOut___6VhQN 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):not(.styles-module__confirm___BtMvq):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___9CKF7.styles-module__pending___BiY-U {
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___9CKF7.styles-module__pending___BiY-U.styles-module__exit___KBdR3 {
  animation-duration: 150ms;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC.styles-module__pending___BiY-U {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___9CKF7.styles-module__hovered___-mg2N {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___16lvD {
  display: block;
  animation: styles-module__renumberRoll___akV9B 0.2s ease-out;
}

@keyframes styles-module__markerConfirm___RT4Sk {
  0% {
    transform: translate(-50%, -50%) scale(1);
  }
  25% {
    transform: translate(-50%, -50%) scale(0.94);
  }
  65% {
    transform: translate(-50%, -50%) scale(1.06);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}
.styles-module__number___1JFu9 {
  display: block;
}

.styles-module__numberGlyph___qchdk {
  display: block;
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
  transition: opacity 140ms ease-out, transform 180ms cubic-bezier(0.22, 1, 0.36, 1), filter 140ms ease-out;
}

.styles-module__actionGlyph___AFRt0 {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  opacity: 0;
  transform: translateY(2px) scale(0.8) rotate(-12deg);
  filter: blur(1px);
  transition: opacity 120ms ease-out, transform 160ms cubic-bezier(0.22, 1, 0.36, 1), filter 120ms ease-out;
}

.styles-module__actionVisible___Kb--l .styles-module__numberGlyph___qchdk {
  opacity: 0;
  transform: translateY(-2px) scale(0.8);
  filter: blur(1px);
}
.styles-module__actionVisible___Kb--l .styles-module__actionGlyph___AFRt0 {
  opacity: 1;
  transform: translateY(0) scale(1) rotate(0);
  filter: blur(0);
}

.styles-module__plus___xslMP {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  opacity: 0;
  transform: rotate(-90deg) scale(0.6);
  filter: blur(1px);
  transition: opacity 100ms ease-out, transform 140ms ease-out, filter 100ms ease-out;
  pointer-events: none;
}

.styles-module__pending___BiY-U .styles-module__numberGlyph___qchdk {
  opacity: 0;
  transform: translateY(5px);
  filter: blur(2px);
}
.styles-module__pending___BiY-U .styles-module__plus___xslMP {
  opacity: 1;
  transform: rotate(0) scale(1);
  filter: blur(0);
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__marker___9CKF7.styles-module__enter___8kI3q, .styles-module__marker___9CKF7.styles-module__exit___KBdR3, .styles-module__marker___9CKF7.styles-module__clearing___8rM7K, .styles-module__marker___9CKF7.styles-module__confirm___BtMvq {
    animation-duration: 1ms;
    animation-delay: 0ms !important;
  }
  .styles-module__numberGlyph___qchdk, .styles-module__actionGlyph___AFRt0, .styles-module__plus___xslMP {
    transition: opacity 100ms ease-out;
    transform: none;
    filter: none;
  }
  .styles-module__pending___BiY-U .styles-module__numberGlyph___qchdk, .styles-module__pending___BiY-U .styles-module__plus___xslMP,
  .styles-module__actionVisible___Kb--l .styles-module__numberGlyph___qchdk, .styles-module__actionVisible___Kb--l .styles-module__actionGlyph___AFRt0 {
    transform: none;
    filter: none;
  }
}`,Jt={marker:"styles-module__marker___9CKF7",previewVisible:"styles-module__previewVisible___imMag",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",confirm:"styles-module__confirm___BtMvq",markerIn:"styles-module__markerIn___x4G8D",markerConfirm:"styles-module__markerConfirm___RT4Sk",markerOut:"styles-module__markerOut___6VhQN",pending:"styles-module__pending___BiY-U",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",renumberRoll:"styles-module__renumberRoll___akV9B",number:"styles-module__number___1JFu9",numberGlyph:"styles-module__numberGlyph___qchdk",actionGlyph:"styles-module__actionGlyph___AFRt0",actionVisible:"styles-module__actionVisible___Kb--l",plus:"styles-module__plus___xslMP"},og=(0,Xn.memo)(function({annotation:t,pending:n=!1,globalIndex:o,layerIndex:r,layerSize:i,isExiting:l,isClearing:s,isAnimated:a,isNew:u,isHovered:h,isRemoving:f,onRemoveComplete:x,isEditingAny:S,renumberFrom:b,markerClickBehavior:N,onHoverEnter:E,onEnterComplete:y,onHoverLeave:v,onClick:p,onContextMenu:C}){let[H,V]=(0,Xn.useState)(a),B=(0,Xn.useRef)(n),[q,F]=(0,Xn.useState)(!1),K=B.current&&!n&&H&&!q;(0,Xn.useLayoutEffect)(()=>{l&&V(!1)},[l]);let ae=(0,Xn.useRef)(null),J=(0,Xn.useRef)({action:!1,delete:!1}),fe=h&&!S,re=fe&&N==="delete";(0,Xn.useLayoutEffect)(()=>{f||(J.current={action:fe,delete:re})},[f,fe,re]);let ce=f?J.current.action:fe,pe=f?J.current.delete:re;G_(ae,f,()=>x(t.id));let bt=t.isMultiSelect,ze=bt?"var(--agentation-color-green)":"var(--agentation-color-accent)",Ke=s?Jt.clearing:l||f?Jt.exit:K?Jt.confirm:!a&&!H?Jt.enter:"",Oe=s?`${Math.min(r*20,120)}ms`:f||n||K?"0ms":l?`${(i-1-r)*20}ms`:`${u?0:r*20}ms`;return(0,Mo.jsxs)("button",{ref:ae,type:"button","aria-label":n?"Pending annotation":`${N==="delete"?"Delete":"Edit"} annotation ${o+1}: ${t.element}`,disabled:n||l||f||s,tabIndex:n||S?-1:0,className:`${Jt.marker} ${n?Jt.pending:""} ${bt?Jt.multiSelect:""} ${Ke} ${!n&&ce?Jt.actionVisible:""} ${pe?Jt.hovered:""} ${h&&!S&&!f?Jt.previewVisible:""}`,"data-annotation-marker":n?void 0:"","data-annotation-pending":n?"":void 0,style:{left:`${t.x}%`,top:t.y,backgroundColor:pe?void 0:ze,animationDelay:Oe},onAnimationEnd:ft=>{ft.target===ft.currentTarget&&(Ke===Jt.enter||Ke===Jt.confirm)&&(V(!0),n||F(!0),n||y(t.id))},onMouseOver:()=>{n||E(t)},onMouseOut:ft=>{let Vt=ft.relatedTarget;(!(Vt instanceof Node)||!ft.currentTarget.contains(Vt))&&v(t.id)},onFocus:ft=>{!n&&ft.currentTarget.matches(":focus-visible")&&E(t)},onBlur:()=>v(t.id),onClick:ft=>{ft.stopPropagation(),!n&&!l&&!f&&p(t,ft.currentTarget)},onContextMenu:C?ft=>{N==="delete"&&(ft.preventDefault(),ft.stopPropagation(),!n&&!l&&!f&&C(t,ft.currentTarget))}:void 0,children:[(0,Mo.jsx)("span",{className:`${Jt.number} ${b!==null&&o>=b?Jt.renumber:""}`,"aria-hidden":"true",children:(0,Mo.jsx)("span",{className:Jt.numberGlyph,children:o+1})},o),(0,Mo.jsx)("span",{className:Jt.actionGlyph,"aria-hidden":"true",children:N==="delete"?(0,Mo.jsx)(k2,{size:bt?18:16}):(0,Mo.jsx)(M2,{size:16})}),B.current&&(0,Mo.jsx)("span",{className:Jt.plus,"aria-hidden":"true",children:(0,Mo.jsx)(p2,{size:12})})]})}),lw=`.styles-module__switchContainer___Ka-AB {
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px;
  width: 24px;
  height: 16px;
  border-radius: 8px;
  background-color: #cdcdcd;
  transition: background-color 0.15s, opacity 0.15s;
}
[data-agentation-theme=dark] .styles-module__switchContainer___Ka-AB {
  background-color: #484848;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) {
  background-color: var(--agentation-color-blue);
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:disabled) {
  opacity: 0.3;
}

.styles-module__switchInput___kYDSD {
  position: absolute;
  z-index: 1;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}
.styles-module__switchInput___kYDSD:disabled {
  cursor: not-allowed;
}

.styles-module__switchThumb___4sCPH {
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: #fff;
  transition: transform 0.15s;
}
.styles-module__switchContainer___Ka-AB[data-checked] .styles-module__switchThumb___4sCPH {
  transform: translateX(8px);
}`,$_={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"},T_=({className:e="",checked:t,onChange:n,...o})=>(0,gs.jsxs)("div",{className:`${$_.switchContainer} ${e}`,"data-checked":t?"":void 0,children:[(0,gs.jsx)("input",{className:$_.switchInput,checked:t,onChange:n,type:"checkbox",...o}),(0,gs.jsx)("div",{className:$_.switchThumb})]}),sw=`.styles-module__checkboxContainer___joqZk {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid rgba(26, 26, 26, 0.2);
  border-radius: 4px;
  width: 14px;
  height: 14px;
  background-color: #fff;
  transition: background-color 0.2s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk {
  border-color: rgba(255, 255, 255, 0.2);
  background-color: #252525;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #1a1a1a;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #fff;
}

.styles-module__checkboxInput___ECzzO {
  position: absolute;
  z-index: 1;
  inset: -1px;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}

.styles-module__checkboxCheck___fUXpr {
  color: #fafafa;
}
[data-agentation-theme=dark] .styles-module__checkboxCheck___fUXpr {
  color: #1a1a1a;
}

.styles-module__checkboxCheckPath___cDyh8 {
  stroke-dasharray: 9.29px;
  stroke-dashoffset: 9.29px;
  color: #fafafa;
  transition: stroke-dashoffset 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxCheckPath___cDyh8 {
  color: #1a1a1a;
}
.styles-module__checkboxContainer___joqZk[data-checked] .styles-module__checkboxCheckPath___cDyh8 {
  transition-duration: 0.2s;
  stroke-dashoffset: 0;
}`,vc={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"},aw=({className:e="",checked:t,onChange:n,...o})=>(0,Qi.jsxs)("div",{className:`${vc.checkboxContainer} ${e}`,"data-checked":t?"":void 0,children:[(0,Qi.jsx)("input",{className:vc.checkboxInput,type:"checkbox",checked:t,onChange:n,...o}),(0,Qi.jsx)("svg",{className:vc.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:(0,Qi.jsx)("path",{className:vc.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),cw=`.styles-module__container___w8eAF {
  display: flex;
  align-items: center;
  height: 24px;
}

.styles-module__label___J5mxE {
  padding-inline: 8px 2px;
  line-height: 20px;
  font-size: 13px;
  letter-spacing: -0.15px;
  color: rgba(26, 26, 26, 0.5);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__label___J5mxE {
  color: rgba(255, 255, 255, 0.5);
}`,rg={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"},ig=({className:e="",label:t,tooltip:n,checked:o,onChange:r,...i})=>{let l=(0,zg.useId)();return(0,Vi.jsxs)("div",{className:`${rg.container} ${e}`,...i,children:[(0,Vi.jsx)(aw,{id:l,onChange:r,checked:o}),(0,Vi.jsx)("label",{className:rg.label,htmlFor:l,children:t}),n&&(0,Vi.jsx)(Zr,{content:n})]})},dw=`@keyframes styles-module__cycleTextIn___VBNTi {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes styles-module__scaleIn___QpQ8E {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__mcpPulse___5Q3Jj {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___VHxhx {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
@keyframes styles-module__themeIconIn___qUWMV {
  0% {
    opacity: 0;
    transform: scale(0.8) rotate(-30deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
.styles-module__settingsPanel___qNkn- :where(button, a, input, select, textarea):focus-visible {
  outline: 2px solid var(--agentation-color-accent);
  outline-offset: 2px;
}
.styles-module__settingsPanel___qNkn- {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 16px;
  padding: 12px 0;
  width: 253px;
  max-width: calc(100vw - 20px);
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___qNkn-::before, .styles-module__settingsPanel___qNkn-::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___qNkn-::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn-::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM,
.styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4,
.styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ,
.styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3,
.styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY,
.styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8,
.styles-module__settingsPanel___qNkn- .styles-module__sliderLabel___6K5v1,
.styles-module__settingsPanel___qNkn- .styles-module__slider___v5z-c,
.styles-module__settingsPanel___qNkn- .styles-module__themeToggle___3imlT {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___qNkn- {
  opacity: 0;
  transform: translateY(var(--panel-offset-y, 4px)) scale(0.98);
  transform-origin: var(--panel-origin, bottom right);
  filter: blur(2px);
  pointer-events: none;
  visibility: hidden;
  transition: opacity 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.styles-module__settingsPanel___qNkn-[data-panel-present=true] {
  visibility: visible;
}
.styles-module__settingsPanel___qNkn-[data-panel-open=true] {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
  pointer-events: auto;
  transition-duration: 160ms;
}
@media (prefers-reduced-motion: reduce) {
  .styles-module__settingsPanel___qNkn- {
    transition: none;
    transform: none;
    filter: none;
  }
}
.styles-module__settingsPanel___qNkn-.styles-module__below___Vpv-k {
  --panel-offset-y: -4px;
  --panel-origin: top right;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH- {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-.styles-module__selected___k1-Vq {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__settingsPanelContainer___5it-H {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 16px;
}

.styles-module__settingsPage___BMn-3 {
  min-width: 100%;
  flex-basis: 0;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___BMn-3.styles-module__slideLeft___qUvW4 {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 0 16px 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0.styles-module__slideIn___uXDSu {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsHeader___Fn1DP {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
}

.styles-module__settingsBrand___OoKlM {
  display: flex;
  align-items: center;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.0094em;
  color: #bbb;
  text-decoration: none;
}

.styles-module__settingsVersion___rXmL9 {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: 6px;
  letter-spacing: -0.0094em;
}

.styles-module__themeToggle___3imlT {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-left: auto;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease;
  cursor: pointer;
}
.styles-module__themeToggle___3imlT:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.7);
}

.styles-module__themeIconWrapper___pyaYa {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 20px;
  height: 20px;
}

.styles-module__themeIcon___w7lAm {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: styles-module__themeIconIn___qUWMV 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.styles-module__settingsSectionGrow___eZTRw {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___y-tDE {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___y-tDE.styles-module__settingsRowMarginTop___uLpGb {
  margin-top: 8px;
}

.styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.2);
}

.styles-module__settingsLabel___VCVOQ {
  display: flex;
  align-items: center;
  column-gap: 2px;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.15px;
  color: rgba(255, 255, 255, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__cycleButton___XMBx3 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___XMBx3:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__cycleButtonText___mbbnD {
  display: inline-block;
  animation: styles-module__cycleTextIn___VBNTi 0.2s ease-out;
}

.styles-module__cycleDots___ehp6i {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___zgSXY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__colorOptions___pbxZx {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
  height: 26px;
}

.styles-module__colorOption___Co955 {
  padding: 0;
  position: relative;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: #fff;
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__colorOption___Co955 {
  background-color: #1a1a1a;
}
.styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background-color: var(--swatch);
  transition: opacity 0.2s, transform 0.2s;
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
    --color: var(--swatch-p3);
  }
}
.styles-module__colorOption___Co955::after {
  z-index: -1;
  transform: scale(1.2);
  opacity: 0;
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::before {
  transform: scale(0.8);
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::after {
  opacity: 1;
}

.styles-module__settingsNavLink___uYIwM {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.15s ease;
  cursor: pointer;
}
.styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(255, 255, 255, 0.9);
}
.styles-module__settingsNavLink___uYIwM svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___uYIwM:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(0, 0, 0, 0.8);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___XBUzC {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__settingsBackButton___fflll {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 24px;
  border: none;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___fflll {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___Avra9 {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___Avra9 {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___vFTmJ {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___vFTmJ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___cG7OI {
  color: rgba(255, 255, 255, 0.8);
  text-decoration-line: underline;
  text-decoration-style: dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___cG7OI:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendContainer___VpkXk {
  display: flex;
  align-items: center;
}

.styles-module__autoSendLabel___ngNdC {
  padding-inline-end: 8px;
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s, opacity 0.15s;
  cursor: pointer;
}
.styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: var(--agentation-color-blue);
}
.styles-module__autoSendLabel___ngNdC.styles-module__disabled___9AZYS {
  opacity: 0.3;
  cursor: not-allowed;
}

.styles-module__mcpStatusDot___8AMxP {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__disconnected___mvmvQ {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___VHxhx 2s infinite;
}

.styles-module__mcpNavIndicator___auBHI {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s ease-in-out infinite;
}

.styles-module__webhookUrlInput___WDDDC {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::before {
  background: linear-gradient(to right, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::after {
  background: linear-gradient(to left, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM {
  color: #333;
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4 {
  border-top-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8:hover {
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__checkboxField___ZrSqv:not(:first-child) {
  margin-top: 8px;
}

.styles-module__divider___h6Yux {
  margin-block: 8px;
  width: 100%;
  height: 1px;
  background-color: rgba(26, 26, 26, 0.07);
}
[data-agentation-theme=dark] .styles-module__divider___h6Yux {
  background-color: rgba(255, 255, 255, 0.07);
}`,se={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",below:"styles-module__below___Vpv-k",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"},uw=(0,wr.memo)(function({settings:t,onSettingsChange:n,isDarkMode:o,onToggleTheme:r,isDevMode:i,connectionStatus:l,endpoint:s,onExited:a,isOpen:u,toolbarNearBottom:h,settingsPage:f,onSettingsPageChange:x,onHideToolbar:S}){let{ref:b}=Sg(u,{keepMounted:!0,onExited:a}),N=(0,wr.useRef)(null),E=(0,wr.useRef)(null),y=(0,wr.useRef)(!1);(0,wr.useLayoutEffect)(()=>{!u||!y.current||(y.current=!1,(f==="automations"?E:N).current?.focus())},[u,f]);let v=o?"Switch to light mode":"Switch to dark mode";return(0,oe.jsx)("div",{className:`${se.settingsPanel} ${h?se.below:""}`,style:h?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,ref:p=>{b.current=p,p?.toggleAttribute("inert",!u)},role:"group","aria-label":"Feedback settings","aria-hidden":!u,children:(0,oe.jsxs)("div",{className:se.settingsPanelContainer,children:[(0,oe.jsxs)("div",{className:`${se.settingsPage} ${f==="automations"?se.slideLeft:""}`,ref:p=>{p?.toggleAttribute("inert",f!=="main")},"aria-hidden":f!=="main",children:[(0,oe.jsxs)("div",{className:se.settingsHeader,children:[(0,oe.jsx)("a",{className:se.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Agentation",children:"Agentation"}),(0,oe.jsxs)("p",{className:se.settingsVersion,children:["v","3.1.2"]}),(0,oe.jsx)("button",{className:se.themeToggle,onClick:r,title:v,"aria-label":v,children:(0,oe.jsx)("span",{className:se.themeIconWrapper,children:(0,oe.jsx)("span",{className:se.themeIcon,children:o?(0,oe.jsx)(C2,{size:20}):(0,oe.jsx)(S2,{size:20})},o?"sun":"moon")})})]}),(0,oe.jsx)("div",{className:se.divider}),(0,oe.jsxs)("div",{className:se.settingsSection,children:[(0,oe.jsxs)("div",{className:se.settingsRow,children:[(0,oe.jsxs)("div",{className:se.settingsLabel,children:["Output Detail",(0,oe.jsx)(Zr,{content:"Controls how much detail is included in the copied output"})]}),(0,oe.jsxs)("button",{className:se.cycleButton,onClick:()=>{let C=(ds.findIndex(H=>H.value===t.outputDetail)+1)%ds.length;n({outputDetail:ds[C].value})},children:[(0,oe.jsx)("span",{className:se.cycleButtonText,children:ds.find(p=>p.value===t.outputDetail)?.label},t.outputDetail),(0,oe.jsx)("span",{className:se.cycleDots,children:ds.map(p=>(0,oe.jsx)("span",{className:`${se.cycleDot} ${t.outputDetail===p.value?se.active:""}`},p.value))})]})]}),(0,oe.jsxs)("div",{className:`${se.settingsRow} ${se.settingsRowMarginTop} ${i?"":se.settingsRowDisabled}`,children:[(0,oe.jsxs)("div",{className:se.settingsLabel,children:["React Components",(0,oe.jsx)(Zr,{content:i?"Include React component names in annotations":"Disabled \u2014 production builds minify component names, making detection unreliable. Use in development mode."})]}),(0,oe.jsx)(T_,{"aria-label":"React Components",checked:i&&t.reactEnabled,onChange:p=>n({reactEnabled:p.target.checked}),disabled:!i})]}),(0,oe.jsxs)("div",{className:`${se.settingsRow} ${se.settingsRowMarginTop}`,children:[(0,oe.jsxs)("div",{className:se.settingsLabel,children:["Hide Until Restart",(0,oe.jsx)(Zr,{content:"Hides the toolbar until you open a new tab"})]}),(0,oe.jsx)(T_,{"aria-label":"Hide Until Restart",checked:!1,onChange:p=>{p.target.checked&&S()}})]})]}),(0,oe.jsx)("div",{className:se.divider}),(0,oe.jsxs)("div",{className:se.settingsSection,children:[(0,oe.jsx)("div",{className:`${se.settingsLabel} ${se.settingsLabelMarker}`,children:"Marker Color"}),(0,oe.jsx)("div",{className:se.colorOptions,children:hs.map(p=>(0,oe.jsx)("button",{className:`${se.colorOption} ${t.annotationColorId===p.id?se.selected:""}`,style:{"--swatch":p.srgb,"--swatch-p3":p.p3},onClick:()=>n({annotationColorId:p.id}),title:p.label,"aria-label":p.label,type:"button"},p.id))})]}),(0,oe.jsx)("div",{className:se.divider}),(0,oe.jsxs)("div",{className:se.settingsSection,children:[(0,oe.jsx)(ig,{className:"checkbox-field",label:"Clear on copy/send",checked:t.autoClearAfterCopy,onChange:p=>n({autoClearAfterCopy:p.target.checked}),tooltip:"Automatically clear annotations after copying"}),(0,oe.jsx)(ig,{className:se.checkboxField,label:"Block page interactions",checked:t.blockInteractions,onChange:p=>n({blockInteractions:p.target.checked})})]}),(0,oe.jsx)("div",{className:se.divider}),(0,oe.jsxs)("button",{className:se.settingsNavLink,ref:N,onClick:p=>{y.current=p.detail===0,p.currentTarget.blur(),x("automations")},children:[(0,oe.jsx)("span",{children:"Manage MCP & Webhooks"}),(0,oe.jsxs)("span",{className:se.settingsNavLinkRight,children:[s&&l!=="disconnected"&&(0,oe.jsx)("span",{className:`${se.mcpNavIndicator} ${se[l]}`}),(0,oe.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,oe.jsx)("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),(0,oe.jsxs)("div",{className:`${se.settingsPage} ${se.automationsPage} ${f==="automations"?se.slideIn:""}`,ref:p=>{p?.toggleAttribute("inert",f!=="automations")},"aria-hidden":f!=="automations",children:[(0,oe.jsxs)("button",{className:se.settingsBackButton,ref:E,"aria-label":"Back to settings",onClick:p=>{y.current=p.detail===0,p.currentTarget.blur(),x("main")},children:[(0,oe.jsx)(E2,{size:16}),(0,oe.jsx)("span",{children:"Manage MCP & Webhooks"})]}),(0,oe.jsx)("div",{className:se.divider}),(0,oe.jsxs)("div",{className:se.settingsSection,children:[(0,oe.jsxs)("div",{className:se.settingsRow,children:[(0,oe.jsxs)("span",{className:se.automationHeader,children:["MCP Connection",(0,oe.jsx)(Zr,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),s&&(0,oe.jsx)("div",{className:`${se.mcpStatusDot} ${se[l]}`,title:l==="connected"?"Connected":l==="connecting"?"Connecting...":"Disconnected"})]}),(0,oe.jsxs)("p",{className:se.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",(0,oe.jsx)("a",{href:"https://agentation.com/mcp",target:"_blank",rel:"noopener noreferrer",className:se.learnMoreLink,children:"Learn more"})]})]}),(0,oe.jsx)("div",{className:se.divider}),(0,oe.jsxs)("div",{className:`${se.settingsSection} ${se.settingsSectionGrow}`,children:[(0,oe.jsxs)("div",{className:se.settingsRow,children:[(0,oe.jsxs)("span",{className:se.automationHeader,children:["Webhooks",(0,oe.jsx)(Zr,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),(0,oe.jsxs)("div",{className:se.autoSendContainer,children:[(0,oe.jsx)("label",{htmlFor:"agentation-auto-send",className:`${se.autoSendLabel} ${t.webhooksEnabled?se.active:""} ${t.webhookUrl?"":se.disabled}`,children:"Auto-Send"}),(0,oe.jsx)(T_,{id:"agentation-auto-send",checked:t.webhooksEnabled,onChange:p=>n({webhooksEnabled:p.target.checked}),disabled:!t.webhookUrl})]})]}),(0,oe.jsx)("p",{className:se.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),(0,oe.jsx)("textarea",{className:se.webhookUrlInput,placeholder:"Webhook URL","aria-label":"Webhook URL",value:t.webhookUrl,onKeyDown:p=>p.stopPropagation(),onChange:p=>n({webhookUrl:p.target.value})})]})]})]})})});fw=`@charset "UTF-8";
/* Reset box-model and set borders */
/* ============================================ */
*,
::before,
::after {
  border-width: 0;
  border-style: solid;
  box-sizing: border-box;
}

/* Document */
/* ============================================ */
/**
 * 1. Correct line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 * 3. Remove gray overlay on links for iOS.
 * 4. Render kerning consistently in all browsers.
 * 5. Correct font smoothing for macOS.
 */
:host {
  /* Inherited properties cross the shadow boundary, so a host page's
     text-transform, letter-spacing or font would otherwise restyle the UI. */
  font: 400 16px/1.5 system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-variant: normal;
  color: initial;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-align: start;
  text-indent: 0;
  text-shadow: none;
  white-space: normal;
  direction: ltr;
  writing-mode: horizontal-tb;
  hyphens: manual;
  word-break: normal;
  overflow-wrap: normal;
  tab-size: 8;
  list-style: none;
  quotes: initial;
  caret-color: auto;
  user-select: auto;
  -webkit-text-fill-color: initial;
  -webkit-text-stroke: 0;
  text-rendering: auto;
  -webkit-text-size-adjust: 100%; /* 2 */
  -webkit-tap-highlight-color: transparent; /* 3 */
  font-feature-settings: "kern"; /* 4 */
  -webkit-font-feature-settings: "kern"; /* 5 */
  -moz-font-feature-settings: "kern"; /* 5 */
  -webkit-font-smoothing: antialiased; /* 5 */
  -moz-osx-font-smoothing: grayscale; /* 5 */
}

/* Vertical rhythm */
/* ============================================ */
p,
table,
blockquote,
address,
pre,
iframe,
form,
figure,
dl {
  margin: 0;
}

/* Headings */
/* ============================================ */
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-size: inherit;
  font-weight: inherit;
}

/* Lists (enumeration) */
/* ============================================ */
ul,
ol,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Lists (definition) */
/* ============================================ */
dd {
  margin-left: 0;
}

/* Grouping content */
/* ============================================ */
/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */
hr {
  clear: both;
  margin: 0;
  border-top-width: 1px;
  height: 0; /* 1 */
  box-sizing: content-box; /* 1 */
  overflow: visible; /* 2 */
  color: inherit;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 * 3. Wrap lines by default instead of overflow.
 */
pre {
  font-family: inherit; /* 1 */
  font-size: inherit; /* 2 */
  white-space: pre-line; /* 3 */
}

address {
  font-style: inherit;
}

/* Text-level semantics */
/* ============================================ */
/**
 * Remove the gray background on active links in IE 10.
 */
a {
  background-color: transparent;
  text-decoration: none;
  color: inherit;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */
abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: none; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */
b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */
code,
kbd,
samp {
  font-family: "Menlo", "Monaco", "Consolas", "Courier New", monospace; /* 1 */
  font-size: inherit; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */
small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
 */
sub,
sup {
  position: relative;
  vertical-align: baseline;
  line-height: 0;
  font-size: 75%;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Replaced content */
/* ============================================ */
/**
 * Prevent vertical alignment issues.
 */
svg,
img,
embed,
object,
iframe {
  vertical-align: bottom;
}

/*
 * 1. Remove image default bottom space.
 * 2. Prevent image from overflowing the container.
 */
img {
  display: block;
  max-width: 100%;
}

/**
 * Prevent alignment issues on Safari.
 */
@supports (background: -webkit-named-image(i)) {
  svg {
    will-change: transform;
  }
}
/* Forms */
/* ============================================ */
/**
 * Reset form fields to make them styleable.
 * 1. Make form elements stylable across systems iOS especially.
 * 2. Inherit text-transform from parent.
 */
button,
input,
optgroup,
select,
textarea {
  -webkit-appearance: none; /* 1 */
  appearance: none;
  border-radius: 0;
  margin: 0;
  padding: 0;
  background: transparent;
  vertical-align: middle;
  text-align: inherit;
  text-transform: inherit; /* 2 */
  font: inherit;
  color: inherit;
}

/**
 * Correct cursors for clickable elements.
 */
button,
[type=button],
[type=reset],
[type=submit] {
  cursor: pointer;
}

button:disabled,
[type=button]:disabled,
[type=reset]:disabled,
[type=submit]:disabled {
  cursor: default;
}

/**
 * Clickable labels and selects.
 */
select,
label {
  cursor: pointer;
}

/**
 * Improve outlines for Firefox and unify style with input elements & buttons.
 */
:-moz-focusring {
  outline: auto;
}

select:disabled {
  opacity: inherit;
}

/**
 * 1. Remove padding.
 */
option {
  padding: 0; /* 1 */
}

/**
 * Reset to invisible
 */
fieldset {
  margin: 0;
  padding: 0;
  min-width: 0;
}

legend {
  display: contents;
  padding: 0;
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */
progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */
textarea {
  overflow: auto;
}

/**
 * Remove increment and decrement buttons in Chrome.
 */
[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

/**
 * Correct the outline style in Safari.
 */
[type=search] {
  outline-offset: -2px;
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */
[type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
 * Remove the \u2018X\u2019 from Chrome and Safari.
 */
[type=search]::-webkit-search-decoration,
[type=search]::-webkit-search-cancel-button,
[type=search]::-webkit-search-results-button,
[type=search]::-webkit-search-results-decoration {
  display: none;
}

/**
 * 1. Hide file input completely.
 * 2. Remove selected file text.
 * 3. Set cursor to pointer for all browsers.
 */
[type=file] {
  opacity: 0; /* 1 */
  font-size: 0; /* 2 */
  cursor: pointer; /* 3 */
}

/**
	* Fix appearance for Firefox
	*/
[type=number] {
  -moz-appearance: textfield;
}

/**
 * Set cursor to pointer for all browsers.
 */
[type=range] {
  cursor: pointer;
}

/**
 * Reset slider thumbs to make them styleable.
 */
[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
}

[type=range]::-moz-range-thumb {
  -moz-appearance: none;
  appearance: none;
  border-width: 0;
  border-radius: 0;
  background-color: transparent;
}

/* Interactive */
/* ============================================ */
/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */
details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */
summary {
  display: list-item;
}

/*
 * Remove outline for editable content.
 */
[contenteditable]:focus {
  outline: auto;
}

/* Tables */
/* ============================================ */
/**
1. Correct table border color inheritance in all Chrome and Safari.
*/
table {
  border-color: inherit; /* 1 */
  border-collapse: collapse;
}

caption {
  text-align: left;
}

td,
th {
  vertical-align: top;
  padding: 0;
}

th {
  text-align: left;
  font-weight: inherit;
}

/* Misc */
/* ============================================ */
/*
 * Make placeholder style consistent across all browsers.
 */
::placeholder {
  color: #999;
  opacity: 1;
}

/*
 * Hide focus outline but keep it visible for Windows High Contrast Mode.
 */
:focus {
  outline-style: solid;
  outline-color: transparent;
}

/*
 * Hide input arrow when used with datalist.
 */
::-webkit-calendar-picker-indicator {
  display: none !important;
}`,hw=[fw,R2,xg,sw,Vx,I2,Ic,iw,nw,cw,dw,lw].join(`
`);lg=!1,P_={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},sg=e=>{if(!e||!e.trim())return!1;try{let t=new URL(e.trim());return t.protocol==="http:"||t.protocol==="https:"}catch{return!1}},pw={compact:"off",standard:"filtered",detailed:"smart",forensic:"all"},vr=e=>e.metaKey||e.ctrlKey,hs=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],mw=[...hs.map(e=>`
    [data-agentation-accent="${e.id}"] {
      --agentation-color-accent: ${e.srgb};
    }
    @supports (color: color(display-p3 0 0 0)) {
      [data-agentation-accent="${e.id}"] {
        --agentation-color-accent: ${e.p3};
      }
    }
  `),`:host {
    ${hs.map(e=>`--agentation-color-${e.id}: ${e.srgb};`).join(`
`)}
  }`,`@supports (color: color(display-p3 0 0 0)) {
    :host {
      ${hs.map(e=>`--agentation-color-${e.id}: ${e.p3};`).join(`
`)}
    }
  }`].join("")});var yw=xo(()=>{var Wg=Le(Ct()),jg=Le(S0());Fg();window.mountAgentation=(e,t)=>{let n=(0,jg.createRoot)(e);return n.render(Wg.default.createElement(Ag,t)),n}});yw();})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
