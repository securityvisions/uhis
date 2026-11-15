"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7639],{1709:(e,t,r)=>{r.d(t,{u:()=>t2});var o,a,i,n,s,l,c,f,p,d,u,g,h,b=function(){return o||"undefined"!=typeof window&&(o=window.gsap)&&o.registerPlugin&&o},m=1,x=[],v=[],y=[],w=Date.now,z=function(e,t){return t},$=function(){var e=p.core,t=e.bridge||{},r=e._scrollers,o=e._proxies;r.push.apply(r,v),o.push.apply(o,y),v=r,y=o,z=function(e,r){return t[e](r)}},k=function(e,t){return~y.indexOf(e)&&y[y.indexOf(e)+1][t]},M=function(e){return!!~d.indexOf(e)},_=function(e,t,r,o,a){return e.addEventListener(t,r,{passive:!1!==o,capture:!!a})},W=function(e,t,r,o){return e.removeEventListener(t,r,!!o)},S="scrollLeft",R="scrollTop",C=function(){return u&&u.isPressed||v.cache++},H=function(e,t){var r=function r(o){if(o||0===o){m&&"manual"!==i.history.scrollRestoration&&(i.history.scrollRestoration="manual");var a=u&&u.isPressed;e(o=r.v=Math.round(o)||(u&&u.iOS?1:0)),r.cacheID=v.cache,a&&z("ss",o)}else(t||v.cache!==r.cacheID||z("ref"))&&(r.cacheID=v.cache,r.v=e());return r.v+r.offset};return r.offset=0,e&&r},X={s:S,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:H(function(e){return arguments.length?i.scrollTo(e,T.sc()):i.pageXOffset||n[S]||s[S]||l[S]||0})},T={s:R,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:X,sc:H(function(e){return arguments.length?i.scrollTo(X.sc(),e):i.pageYOffset||n[R]||s[R]||l[R]||0})},O=function(e,t){return(t&&t._ctx&&t._ctx.selector||o.utils.toArray)(e)[0]||("string"==typeof e&&!1!==o.config().nullTargetWarn?console.warn("Element not found:",e):null)},Y=function(e,t){for(var r=t.length;r--;)if(t[r]===e||t[r].contains(e))return!0;return!1},E=function(e,t){var r=t.s,a=t.sc;M(e)&&(e=n.scrollingElement||s);var i=v.indexOf(e),l=a===T.sc?1:2;~i||(i=v.push(e)-1),v[i+l]||_(e,"scroll",C);var c=v[i+l],f=c||(v[i+l]=H(k(e,r),!0)||(M(e)?a:H(function(t){return arguments.length?e[r]=t:e[r]})));return f.target=e,c||(f.smooth="smooth"===o.getProperty(e,"scrollBehavior")),f},F=function(e,t,r){var o=e,a=e,i=w(),n=i,s=t||50,l=Math.max(500,3*s),c=function(e,t){var l=w();t||l-i>s?(a=o,o=e,n=i,i=l):r?o+=e:o=a+(e-a)/(l-n)*(i-n)};return{update:c,reset:function(){a=o=r?0:o,n=i=0},getVelocity:function(e){var t=n,s=a,f=w();return(e||0===e)&&e!==o&&c(e),i===n||f-n>l?0:(o+(r?s:-s))/((r?f:i)-t)*1e3}}},A=function(e,t){return t&&!e._gsapAllow&&!1!==e.cancelable&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},P=function(e){var t=Math.max.apply(Math,e),r=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(r)?t:r},B=function(){(p=o.core.globals().ScrollTrigger)&&p.core&&$()},I=function(e){return o=e||b(),!a&&o&&"undefined"!=typeof document&&document.body&&(i=window,s=(n=document).documentElement,l=n.body,d=[i,n,s,l],o.utils.clamp,h=o.core.context||function(){},f="onpointerenter"in l?"pointer":"mouse",c=L.isTouch=i.matchMedia&&i.matchMedia("(hover: none), (pointer: coarse)").matches?1:2*("ontouchstart"in i||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0),g=L.eventTypes=("ontouchstart"in s?"touchstart,touchmove,touchcancel,touchend":!("onpointerdown"in s)?"mousedown,mousemove,mouseup,mouseup":"pointerdown,pointermove,pointercancel,pointerup").split(","),setTimeout(function(){return m=0},500),a=1),p||B(),a};X.op=T,v.cache=0;var L=function(){var e;function t(e){this.init(e)}return t.prototype.init=function(e){a||I(o)||console.warn("Please gsap.registerPlugin(Observer)"),p||B();var t=e.tolerance,r=e.dragMinimum,d=e.type,b=e.target,m=e.lineHeight,v=e.debounce,y=e.preventDefault,z=e.onStop,$=e.onStopDelay,k=e.ignore,S=e.wheelSpeed,R=e.event,H=e.onDragStart,L=e.onDragEnd,U=e.onDrag,N=e.onPress,D=e.onRelease,V=e.onRight,G=e.onLeft,q=e.onUp,j=e.onDown,Q=e.onChangeX,K=e.onChangeY,Z=e.onChange,J=e.onToggleX,ee=e.onToggleY,et=e.onHover,er=e.onHoverEnd,eo=e.onMove,ea=e.ignoreCheck,ei=e.isNormalizer,en=e.onGestureStart,es=e.onGestureEnd,el=e.onWheel,ec=e.onEnable,ef=e.onDisable,ep=e.onClick,ed=e.scrollSpeed,eu=e.capture,eg=e.allowClicks,eh=e.lockAxis,eb=e.onLockAxis;this.target=b=O(b)||s,this.vars=e,k&&(k=o.utils.toArray(k)),t=t||1e-9,r=r||0,S=S||1,ed=ed||1,d=d||"wheel,touch,pointer",v=!1!==v,m||(m=parseFloat(i.getComputedStyle(l).lineHeight)||22);var em,ex,ev,ey,ew,ez,e$,ek=this,eM=0,e_=0,eW=e.passive||!y&&!1!==e.passive,eS=E(b,X),eR=E(b,T),eC=eS(),eH=eR(),eX=~d.indexOf("touch")&&!~d.indexOf("pointer")&&"pointerdown"===g[0],eT=M(b),eO=b.ownerDocument||n,eY=[0,0,0],eE=[0,0,0],eF=0,eA=function(){return eF=w()},eP=function(e,t){return(ek.event=e)&&k&&Y(e.target,k)||t&&eX&&"touch"!==e.pointerType||ea&&ea(e,t)},eB=function(){var e=ek.deltaX=P(eY),r=ek.deltaY=P(eE),o=Math.abs(e)>=t,a=Math.abs(r)>=t;Z&&(o||a)&&Z(ek,e,r,eY,eE),o&&(V&&ek.deltaX>0&&V(ek),G&&ek.deltaX<0&&G(ek),Q&&Q(ek),J&&ek.deltaX<0!=eM<0&&J(ek),eM=ek.deltaX,eY[0]=eY[1]=eY[2]=0),a&&(j&&ek.deltaY>0&&j(ek),q&&ek.deltaY<0&&q(ek),K&&K(ek),ee&&ek.deltaY<0!=e_<0&&ee(ek),e_=ek.deltaY,eE[0]=eE[1]=eE[2]=0),(ey||ev)&&(eo&&eo(ek),ev&&(H&&1===ev&&H(ek),U&&U(ek),ev=0),ey=!1),ez&&(ez=!1,1)&&eb&&eb(ek),ew&&(el(ek),ew=!1),em=0},eI=function(e,t,r){eY[r]+=e,eE[r]+=t,ek._vx.update(e),ek._vy.update(t),v?em||(em=requestAnimationFrame(eB)):eB()},eL=function(e,t){eh&&!e$&&(ek.axis=e$=Math.abs(e)>Math.abs(t)?"x":"y",ez=!0),"y"!==e$&&(eY[2]+=e,ek._vx.update(e,!0)),"x"!==e$&&(eE[2]+=t,ek._vy.update(t,!0)),v?em||(em=requestAnimationFrame(eB)):eB()},eU=function(e){if(!eP(e,1)){var t=(e=A(e,y)).clientX,o=e.clientY,a=t-ek.x,i=o-ek.y,n=ek.isDragging;ek.x=t,ek.y=o,(n||(a||i)&&(Math.abs(ek.startX-t)>=r||Math.abs(ek.startY-o)>=r))&&(ev||(ev=n?2:1),n||(ek.isDragging=!0),eL(a,i))}},eN=ek.onPress=function(e){eP(e,1)||e&&e.button||(ek.axis=e$=null,ex.pause(),ek.isPressed=!0,e=A(e),eM=e_=0,ek.startX=ek.x=e.clientX,ek.startY=ek.y=e.clientY,ek._vx.reset(),ek._vy.reset(),_(ei?b:eO,g[1],eU,eW,!0),ek.deltaX=ek.deltaY=0,N&&N(ek))},eD=ek.onRelease=function(e){if(!eP(e,1)){W(ei?b:eO,g[1],eU,!0);var t=!isNaN(ek.y-ek.startY),r=ek.isDragging,a=r&&(Math.abs(ek.x-ek.startX)>3||Math.abs(ek.y-ek.startY)>3),n=A(e);!a&&t&&(ek._vx.reset(),ek._vy.reset(),y&&eg&&o.delayedCall(.08,function(){if(w()-eF>300&&!e.defaultPrevented){if(e.target.click)e.target.click();else if(eO.createEvent){var t=eO.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,i,1,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null),e.target.dispatchEvent(t)}}})),ek.isDragging=ek.isGesturing=ek.isPressed=!1,z&&r&&!ei&&ex.restart(!0),ev&&eB(),L&&r&&L(ek),D&&D(ek,a)}},eV=function(e){return e.touches&&e.touches.length>1&&(ek.isGesturing=!0)&&en(e,ek.isDragging)},eG=function(){return ek.isGesturing=!1,es(ek)},eq=function(e){if(!eP(e)){var t=eS(),r=eR();eI((t-eC)*ed,(r-eH)*ed,1),eC=t,eH=r,z&&ex.restart(!0)}},ej=function(e){if(!eP(e)){e=A(e,y),el&&(ew=!0);var t=(1===e.deltaMode?m:2===e.deltaMode?i.innerHeight:1)*S;eI(e.deltaX*t,e.deltaY*t,0),z&&!ei&&ex.restart(!0)}},eQ=function(e){if(!eP(e)){var t=e.clientX,r=e.clientY,o=t-ek.x,a=r-ek.y;ek.x=t,ek.y=r,ey=!0,z&&ex.restart(!0),(o||a)&&eL(o,a)}},eK=function(e){ek.event=e,et(ek)},eZ=function(e){ek.event=e,er(ek)},eJ=function(e){return eP(e)||A(e,y)&&ep(ek)};ex=ek._dc=o.delayedCall($||.25,function(){ek._vx.reset(),ek._vy.reset(),ex.pause(),z&&z(ek)}).pause(),ek.deltaX=ek.deltaY=0,ek._vx=F(0,50,!0),ek._vy=F(0,50,!0),ek.scrollX=eS,ek.scrollY=eR,ek.isDragging=ek.isGesturing=ek.isPressed=!1,h(this),ek.enable=function(e){return!ek.isEnabled&&(_(eT?eO:b,"scroll",C),d.indexOf("scroll")>=0&&_(eT?eO:b,"scroll",eq,eW,eu),d.indexOf("wheel")>=0&&_(b,"wheel",ej,eW,eu),(d.indexOf("touch")>=0&&c||d.indexOf("pointer")>=0)&&(_(b,g[0],eN,eW,eu),_(eO,g[2],eD),_(eO,g[3],eD),eg&&_(b,"click",eA,!0,!0),ep&&_(b,"click",eJ),en&&_(eO,"gesturestart",eV),es&&_(eO,"gestureend",eG),et&&_(b,f+"enter",eK),er&&_(b,f+"leave",eZ),eo&&_(b,f+"move",eQ)),ek.isEnabled=!0,ek.isDragging=ek.isGesturing=ek.isPressed=ey=ev=!1,ek._vx.reset(),ek._vy.reset(),eC=eS(),eH=eR(),e&&e.type&&eN(e),ec&&ec(ek)),ek},ek.disable=function(){ek.isEnabled&&(x.filter(function(e){return e!==ek&&M(e.target)}).length||W(eT?eO:b,"scroll",C),ek.isPressed&&(ek._vx.reset(),ek._vy.reset(),W(ei?b:eO,g[1],eU,!0)),W(eT?eO:b,"scroll",eq,eu),W(b,"wheel",ej,eu),W(b,g[0],eN,eu),W(eO,g[2],eD),W(eO,g[3],eD),W(b,"click",eA,!0),W(b,"click",eJ),W(eO,"gesturestart",eV),W(eO,"gestureend",eG),W(b,f+"enter",eK),W(b,f+"leave",eZ),W(b,f+"move",eQ),ek.isEnabled=ek.isPressed=ek.isDragging=!1,ef&&ef(ek))},ek.kill=ek.revert=function(){ek.disable();var e=x.indexOf(ek);e>=0&&x.splice(e,1),u===ek&&(u=0)},x.push(ek),ei&&M(b)&&(u=ek),ek.enable(R)},e=[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}],function(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(t.prototype,e),t}();L.version="3.15.1",L.create=function(e){return new L(e)},L.register=I,L.getAll=function(){return x.slice()},L.getById=function(e){return x.filter(function(t){return t.vars.id===e})[0]},b()&&o.registerPlugin(L);var U,N,D,V,G,q,j,Q,K,Z,J,ee,et,er,eo,ea,ei,en,es,el,ec,ef,ep,ed,eu,eg,eh,eb,em,ex,ev,ey,ew,ez,e$,ek,eM,e_,eW=1,eS=Date.now,eR=eS(),eC=0,eH=0,eX=function(e,t,r){var o=eV(e)&&("clamp("===e.substr(0,6)||e.indexOf("max")>-1);return r["_"+t+"Clamp"]=o,o?e.substr(6,e.length-7):e},eT=function(e,t){return t&&(!eV(e)||"clamp("!==e.substr(0,6))?"clamp("+e+")":e},eO=function(){return er=1},eY=function(){return er=0},eE=function(e){return e},eF=function(e){return Math.round(1e5*e)/1e5||0},eA=function(){return"undefined"!=typeof window},eP=function(){return U||eA()&&(U=window.gsap)&&U.registerPlugin&&U},eB=function(e){return!!~j.indexOf(e)},eI=function(e){return("Height"===e?ev:D["inner"+e])||G["client"+e]||q["client"+e]},eL=function(e){return k(e,"getBoundingClientRect")||(eB(e)?function(){return tj.width=D.innerWidth,tj.height=ev,tj}:function(){return ta(e)})},eU=function(e,t,r){var o=r.d,a=r.d2,i=r.a;return(i=k(e,"getBoundingClientRect"))?function(){return i()[o]}:function(){return(t?eI(a):e["client"+a])||0}},eN=function(e,t){var r=t.s,o=t.d2,a=t.d,i=t.a;return Math.max(0,(i=k(e,r="scroll"+o))?i()-eL(e)()[a]:eB(e)?(G[r]||q[r])-eI(o):e[r]-e["offset"+o])},eD=function(e,t){for(var r=0;r<es.length;r+=3)(!t||~t.indexOf(es[r+1]))&&e(es[r],es[r+1],es[r+2])},eV=function(e){return"string"==typeof e},eG=function(e){return"function"==typeof e},eq=function(e){return"number"==typeof e},ej=function(e){return"object"==typeof e},eQ=function(e,t,r){return e&&e.progress(+!t)&&r&&e.pause()},eK=function(e,t,r){if(e.enabled){var o=e._ctx?e._ctx.add(function(){return t(e,r)}):t(e,r);o&&o.totalTime&&(e.callbackAnimation=o)}},eZ=Math.abs,eJ="left",e0="right",e1="bottom",e2="width",e5="height",e3="Right",e4="Left",e8="Bottom",e6="padding",e7="margin",e9="Width",te="Height",tt=function(e){return D.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},tr=function(e){var t=tt(e).position;e.style.position="absolute"===t||"fixed"===t?t:"relative"},to=function(e,t){for(var r in t)r in e||(e[r]=t[r]);return e},ta=function(e,t){var r=t&&"matrix(1, 0, 0, 1, 0, 0)"!==tt(e)[eo]&&U.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),o=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return r&&r.progress(0).kill(),o},ti=function(e,t){var r=t.d2;return e["offset"+r]||e["client"+r]||0},tn=function(e){var t,r=[],o=e.labels,a=e.duration();for(t in o)r.push(o[t]/a);return r},ts=function(e){var t=U.utils.snap(e),r=Array.isArray(e)&&e.slice(0).sort(function(e,t){return e-t});return r?function(e,o,a){var i;if(void 0===a&&(a=.001),!o)return t(e);if(o>0){for(e-=a,i=0;i<r.length;i++)if(r[i]>=e)return r[i];return r[i-1]}for(i=r.length,e+=a;i--;)if(r[i]<=e)return r[i];return r[0]}:function(r,o,a){void 0===a&&(a=.001);var i=t(r);return!o||Math.abs(i-r)<a||i-r<0==o<0?i:t(o<0?r-e:r+e)}},tl=function(e,t,r,o){return r.split(",").forEach(function(r){return e(t,r,o)})},tc=function(e,t,r,o,a){return e.addEventListener(t,r,{passive:!o,capture:!!a})},tf=function(e,t,r,o){return e.removeEventListener(t,r,!!o)},tp=function(e,t,r){(r=r&&r.wheelHandler)&&(e(t,"wheel",r),e(t,"touchmove",r))},td={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},tu={toggleActions:"play",anticipatePin:0},tg={top:0,left:0,center:.5,bottom:1,right:1},th=function(e,t){if(eV(e)){var r=e.indexOf("="),o=~r?(e.charAt(r-1)+1)*parseFloat(e.substr(r+1)):0;~r&&(e.indexOf("%")>r&&(o*=t/100),e=e.substr(0,r-1)),e=o+(e in tg?tg[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},tb=function(e,t,r,o,a,i,n,s){var l=a.startColor,c=a.endColor,f=a.fontSize,p=a.indent,d=a.fontWeight,u=V.createElement("div"),g=eB(r)||"fixed"===k(r,"pinType"),h=-1!==e.indexOf("scroller"),b=g?q:"IFRAME"===r.tagName?r.contentDocument.body:r,m=-1!==e.indexOf("start"),x=m?l:c,v="border-color:"+x+";font-size:"+f+";color:"+x+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((h||s)&&g?"fixed;":"absolute;"),(h||s||!g)&&(v+=(o===T?e0:e1)+":"+(i+parseFloat(p))+"px;"),n&&(v+="box-sizing:border-box;text-align:left;width:"+n.offsetWidth+"px;"),u._isStart=m,u.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),u.style.cssText=v,u.innerText=t||0===t?e+"-"+t:e,b.children[0]?b.insertBefore(u,b.children[0]):b.appendChild(u),u._offset=u["offset"+o.op.d2],tm(u,0,o,m),u},tm=function(e,t,r,o){var a={display:"block"},i=r[o?"os2":"p2"],n=r[o?"p2":"os2"];e._isFlipped=o,a[r.a+"Percent"]=o?-100:0,a[r.a]=o?"1px":0,a["border"+i+e9]=1,a["border"+n+e9]=0,a[r.p]=t+"px",U.set(e,a)},tx=[],tv={},ty=function(){return eS()-eC>34&&(e$||(e$=requestAnimationFrame(tB)))},tw=function(){ep&&ep.isPressed&&!(ep.startX>q.clientWidth)||(v.cache++,ep?e$||(e$=requestAnimationFrame(tB)):tB(),eC||tW("scrollStart"),eC=eS())},tz=function(){eg=D.innerWidth,eu=D.innerHeight},t$=function(e){v.cache++,(!0===e||!et&&!ef&&!V.fullscreenElement&&!V.webkitFullscreenElement&&(!ed||eg!==D.innerWidth||Math.abs(D.innerHeight-eu)>.25*D.innerHeight))&&Q.restart(!0)},tk={},tM=[],t_=function e(){return tf(t2,"scrollEnd",e)||tF(!0)},tW=function(e){return tk[e]&&tk[e].map(function(e){return e()})||tM},tS=[],tR=function(e){for(var t=0;t<tS.length;t+=5)(!e||tS[t+4]&&tS[t+4].query===e)&&(tS[t].style.cssText=tS[t+1],tS[t].getBBox&&tS[t].setAttribute("transform",tS[t+2]||""),tS[t+3].uncache=1)},tC=function(){v.cache++,v.forEach(function(e){return eG(e)&&(e.rec=e())})},tH=function(e,t){var r;for(ea=0;ea<tx.length;ea++)(r=tx[ea])&&(!t||r._ctx===t)&&(e?r.kill(1):r.revert(!0,!0));ey=!0,t&&tR(t),t||tW("revert")},tX=function(e,t){v.cache++,(t||!ek)&&v.forEach(function(e){return eG(e)&&e.cacheID++&&(e.rec=0)}),eV(e)&&(em=e,D.history.scrollRestoration!==e&&(D.history.scrollRestoration=e))},tT=0,tO=function(){if(eM!==tT){var e=eM=tT;requestAnimationFrame(function(){return e===tT&&tF(!0)})}},tY=function(){q.appendChild(ex),ev=!ep&&ex.offsetHeight||D.innerHeight,q.removeChild(ex)},tE=function(e){return K(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},tF=function(e,t){if(G=V.documentElement,q=V.body,j=[D,V,G,q],eC&&!e&&!ey)return void tc(t2,"scrollEnd",t_);tY(),ek=t2.isRefreshing=!0,ey||tC();var r=tW("refreshInit");el&&t2.sort(),t||tH(),v.forEach(function(e){eG(e)&&(e.smooth&&(e.target.style.scrollBehavior="auto"),e(0))}),tx.slice(0).forEach(function(e){return e.refresh()}),ey=!1,tx.forEach(function(e){if(e._subPinOffset&&e.pin){var t=e.vars.horizontal?"offsetWidth":"offsetHeight",r=e.pin[t];e.revert(!0,1),e.adjustPinSpacing(e.pin[t]-r),e.refresh()}}),ew=1,tE(!0),tx.forEach(function(e){var t=eN(e.scroller,e._dir),r="max"===e.vars.end||e._endClamp&&e.end>t,o=e._startClamp&&e.start>=t;(r||o)&&e.setPositions(o?t-1:e.start,r?Math.max(o?t:e.start+1,t):e.end,!0)}),tE(!1),ew=0,r.forEach(function(e){return e&&e.render&&e.render(-1)}),v.forEach(function(e){eG(e)&&(e.smooth&&requestAnimationFrame(function(){return e.target.style.scrollBehavior="smooth"}),e.rec&&e(e.rec))}),tX(em,1),Q.pause(),tT++,ek=2,tB(2),tx.forEach(function(e){return eG(e.vars.onRefresh)&&e.vars.onRefresh(e)}),ek=t2.isRefreshing=!1,tW("refresh")},tA=0,tP=1,tB=function(e){if(2===e||!ek&&!ey){t2.isUpdating=!0,e_&&e_.update(0);var t=tx.length,r=eS(),o=r-eR>=50,a=t&&tx[0].scroll();if(tP=tA>a?-1:1,ek||(tA=a),o&&(eC&&!er&&r-eC>200&&(eC=0,tW("scrollEnd")),J=eR,eR=r),tP<0){for(ea=t;ea-- >0;)tx[ea]&&tx[ea].update(0,o);tP=1}else for(ea=0;ea<t;ea++)tx[ea]&&tx[ea].update(0,o);t2.isUpdating=!1}e$=0},tI=[eJ,"top",e1,e0,e7+e8,e7+e3,e7+"Top",e7+e4,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],tL=tI.concat([e2,e5,"boxSizing","max"+e9,"max"+te,"position",e7,e6,e6+"Top",e6+e3,e6+e8,e6+e4]),tU=function(e,t,r){tV(r);var o=e._gsap;if(o.spacerIsNative)tV(o.spacerState);else if(e._gsap.swappedIn){var a=t.parentNode;a&&(a.insertBefore(e,t),a.removeChild(t))}e._gsap.swappedIn=!1},tN=function(e,t,r,o){if(!e._gsap.swappedIn){for(var a,i=tI.length,n=t.style,s=e.style;i--;)n[a=tI[i]]=r[a];n.position="absolute"===r.position?"absolute":"relative","inline"===r.display&&(n.display="inline-block"),s[e1]=s[e0]="auto",n.flexBasis=r.flexBasis||"auto",n.overflow="visible",n.boxSizing="border-box",n[e2]=ti(e,X)+"px",n[e5]=ti(e,T)+"px",n[e6]=s[e7]=s.top=s[eJ]="0",tV(o),s[e2]=s["max"+e9]=r[e2],s[e5]=s["max"+te]=r[e5],s[e6]=r[e6],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},tD=/([A-Z])/g,tV=function(e){if(e){var t,r,o=e.t.style,a=e.length,i=0;for((e.t._gsap||U.core.getCache(e.t)).uncache=1;i<a;i+=2)r=e[i+1],t=e[i],r?o[t]=r:o[t]&&o.removeProperty(t.replace(tD,"-$1").toLowerCase())}},tG=function(e){for(var t=tL.length,r=e.style,o=[],a=0;a<t;a++)o.push(tL[a],r[tL[a]]);return o.t=e,o},tq=function(e,t,r){for(var o,a=[],i=e.length,n=8*!!r;n<i;n+=2)o=e[n],a.push(o,o in t?t[o]:e[n+1]);return a.t=e.t,a},tj={left:0,top:0},tQ=function(e,t,r,o,a,i,n,s,l,c,f,p,d,u){eG(e)&&(e=e(s)),eV(e)&&"max"===e.substr(0,3)&&(e=p+("="===e.charAt(4)?th("0"+e.substr(3),r):0));var g,h,b,m=d?d.time():0;if(d&&d.seek(0),isNaN(e)||(e*=1),eq(e))d&&(e=U.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,p,e)),n&&tm(n,r,o,!0);else{eG(t)&&(t=t(s));var x,v,y,w,z=(e||"0").split(" ");(x=ta(b=O(t,s)||q)||{}).left||x.top||"none"!==tt(b).display||(w=b.style.display,b.style.display="block",x=ta(b),w?b.style.display=w:b.style.removeProperty("display")),v=th(z[0],x[o.d]),y=th(z[1]||"0",r),e=x[o.p]-l[o.p]-c+v+a-y,n&&tm(n,y,o,r-y<20||n._isStart&&y>20),r-=r-y}if(u&&(s[u]=e||-.001,e<0&&(e=0)),i){var $=e+r,k=i._isStart;g="scroll"+o.d2,tm(i,$,o,k&&$>20||!k&&(f?Math.max(q[g],G[g]):i.parentNode[g])<=$+1),f&&(l=ta(n),f&&(i.style[o.op.p]=l[o.op.p]-o.op.m-i._offset+"px"))}return d&&b&&(g=ta(b),d.seek(p),h=ta(b),d._caScrollDist=g[o.p]-h[o.p],e=e/d._caScrollDist*p),d&&d.seek(m),d?e:Math.round(e)},tK=/(webkit|moz|length|cssText|inset)/i,tZ=function(e,t,r,o){if(e.parentNode!==t){var a,i,n=e.style;if(t===q){for(a in e._stOrig=n.cssText,i=tt(e))+a||tK.test(a)||!i[a]||"string"!=typeof n[a]||"0"===a||(n[a]=i[a]);n.top=r,n.left=o}else n.cssText=e._stOrig;U.core.getCache(e).uncache=1,t.appendChild(e)}},tJ=function(e,t,r){var o=t,a=o;return function(t){var i=Math.round(e());return i!==o&&i!==a&&Math.abs(i-o)>3&&Math.abs(i-a)>3&&(t=i,r&&r()),a=o,o=Math.round(t)}},t0=function(e,t,r){var o={};o[t.p]="+="+r,U.set(e,o)},t1=function(e,t){var r=E(e,t),o="_scroll"+t.p2,a=function t(a,i,n,s,l){var c=t.tween,f=i.onComplete,p={};n=n||r();var d=tJ(r,n,function(){c.kill(),t.tween=0});return l=s&&l||0,s=s||a-n,c&&c.kill(),i[o]=a,i.inherit=!1,i.modifiers=p,p[o]=function(){return d(n+s*c.ratio+l*c.ratio*c.ratio)},i.onUpdate=function(){v.cache++,t.tween&&tB()},i.onComplete=function(){t.tween=0,f&&f.call(c)},c=t.tween=U.to(e,i)};return e[o]=r,r.wheelHandler=function(){return a.tween&&a.tween.kill()&&(a.tween=0)},tc(e,"wheel",r.wheelHandler),t2.isTouch&&tc(e,"touchmove",r.wheelHandler),a},t2=function(){function e(t,r){N||e.register(U)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),eb(this),this.init(t,r)}return e.prototype.init=function(t,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!eH){this.update=this.refresh=this.kill=eE;return}var o,a,i,n,s,l,c,f,p,d,u,g,h,b,m,x,w,z,$,M,_,W,S,R,C,H,Y,F,A,P,B,I,L,N,j,Q,ee,eo,ei,en,es,ef=t=to(eV(t)||eq(t)||t.nodeType?{trigger:t}:t,tu),ep=ef.onUpdate,ed=ef.toggleClass,eu=ef.id,eg=ef.onToggle,eh=ef.onRefresh,eb=ef.scrub,em=ef.trigger,ex=ef.pin,ev=ef.pinSpacing,e$=ef.invalidateOnRefresh,eM=ef.anticipatePin,eR=ef.onScrubComplete,eO=ef.onSnapComplete,eY=ef.once,eA=ef.snap,eP=ef.pinReparent,eI=ef.pinSpacer,eD=ef.containerAnimation,eJ=ef.fastScrollEnd,e0=ef.preventOverlaps,e1=t.horizontal||t.containerAnimation&&!1!==t.horizontal?X:T,tl=!eb&&0!==eb,tp=O(t.scroller||D),tg=U.core.getCache(tp),tm=eB(tp),ty=("pinType"in t?t.pinType:k(tp,"pinType")||tm&&"fixed")==="fixed",tz=[t.onEnter,t.onLeave,t.onEnterBack,t.onLeaveBack],tk=tl&&t.toggleActions.split(" "),tM="markers"in t?t.markers:tu.markers,tW=tm?0:parseFloat(tt(tp)["border"+e1.p2+e9])||0,tS=this,tR=t.onRefreshInit&&function(){return t.onRefreshInit(tS)},tC=eU(tp,tm,e1),tH=!tm||~y.indexOf(tp)?eL(tp):function(){return tj},tX=0,tT=0,tY=0,tE=E(tp,e1);if(tS._startClamp=tS._endClamp=!1,tS._dir=e1,eM*=45,tS.scroller=tp,tS.scroll=eD?eD.time.bind(eD):tE,l=tE(),ey&&null==tE.rec&&(tE.rec=l),tS.vars=t,r=r||t.animation,"refreshPriority"in t&&(el=1,-9999===t.refreshPriority&&(e_=tS)),tg.tweenScroll=tg.tweenScroll||{top:t1(tp,T),left:t1(tp,X)},tS.tweenTo=i=tg.tweenScroll[e1.p],tS.scrubDuration=function(e){(j=eq(e)&&e)?N?N.duration(e):N=U.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:j,paused:!0,onComplete:function(){return eR&&eR(tS)}}):(N&&N.progress(1).kill(),N=0)},r&&(r.vars.lazy=!1,r._initted&&!tS.isReverted||!1!==r.vars.immediateRender&&!1!==t.immediateRender&&r.duration()&&r.render(0,!0,!0),tS.animation=r.pause(),r.scrollTrigger=tS,tS.scrubDuration(eb),I=0,eu||(eu=r.vars.id)),eA&&((!ej(eA)||eA.push)&&(eA={snapTo:eA}),"scrollBehavior"in q.style&&U.set(tm?[q,G]:tp,{scrollBehavior:"auto"}),v.forEach(function(e){return eG(e)&&e.target===(tm?V.scrollingElement||G:tp)&&(e.smooth=!1)}),s=eG(eA.snapTo)?eA.snapTo:"labels"===eA.snapTo?(o=r,function(e){return U.utils.snap(tn(o),e)}):"labelsDirectional"===eA.snapTo?(a=r,function(e,t){return ts(tn(a))(e,t.direction)}):!1!==eA.directional?function(e,t){return ts(eA.snapTo)(e,eS()-tT<500?0:t.direction)}:U.utils.snap(eA.snapTo),Q=ej(Q=eA.duration||{min:.1,max:2})?Z(Q.min,Q.max):Z(Q,Q),ee=U.delayedCall(eA.delay||j/2||.1,function(){var e=tE(),t=eS()-tT<500,o=i.tween;if((t||10>Math.abs(tS.getVelocity()))&&!o&&!er&&tX!==e){var a,n,l=(e-f)/x,c=r&&!tl?r.totalProgress():l,d=t?0:(c-L)/(eS()-J)*1e3||0,u=U.utils.clamp(-l,1-l,eZ(d/2)*d/.185),g=l+(!1===eA.inertia?0:u),h=eA,b=h.onStart,m=h.onInterrupt,v=h.onComplete;if(eq(a=s(g,tS))||(a=g),n=Math.max(0,Math.round(f+a*x)),e<=p&&e>=f&&n!==e){if(o&&!o._initted&&o.data<=eZ(n-e))return;!1===eA.inertia&&(u=a-l),i(n,{duration:Q(eZ(.185*Math.max(eZ(g-c),eZ(a-c))/d/.05||0)),ease:eA.ease||"power3",data:eZ(n-e),onInterrupt:function(){return ee.restart(!0)&&m&&eK(tS,m)},onComplete:function(){tS.update(),tX=tE(),r&&!tl&&(N?N.resetTo("totalProgress",a,r._tTime/r._tDur):r.progress(a)),I=L=r&&!tl?r.totalProgress():tS.progress,eO&&eO(tS),v&&eK(tS,v)}},e,u*x,n-e-u*x),b&&eK(tS,b,i.tween)}}else tS.isActive&&tX!==e&&ee.restart(!0)}).pause()),eu&&(tv[eu]=tS),(es=(em=tS.trigger=O(em||!0!==ex&&ex))&&em._gsap&&em._gsap.stRevert)&&(es=es(tS)),ex=!0===ex?em:O(ex),eV(ed)&&(ed={targets:em,className:ed}),ex&&(!1===ev||ev===e7||(ev=(!!ev||!ex.parentNode||!ex.parentNode.style||"flex"!==tt(ex.parentNode).display)&&e6),tS.pin=ex,(n=U.core.getCache(ex)).spacer?w=n.pinState:(eI&&((eI=O(eI))&&!eI.nodeType&&(eI=eI.current||eI.nativeElement),n.spacerIsNative=!!eI,eI&&(n.spacerState=tG(eI))),n.spacer=M=eI||V.createElement("div"),M.classList.add("pin-spacer"),eu&&M.classList.add("pin-spacer-"+eu),n.pinState=w=tG(ex)),!1!==t.force3D&&U.set(ex,{force3D:!0}),tS.spacer=M=n.spacer,H=(B=tt(ex))[ev+e1.os2],W=U.getProperty(ex),S=U.quickSetter(ex,e1.a,"px"),tN(ex,M,B),$=tG(ex)),tM){b=ej(tM)?to(tM,td):td,g=tb("scroller-start",eu,tp,e1,b,0),h=tb("scroller-end",eu,tp,e1,b,0,g),_=g["offset"+e1.op.d2];var tF=O(k(tp,"content")||tp);d=this.markerStart=tb("start",eu,tF,e1,b,_,0,eD),u=this.markerEnd=tb("end",eu,tF,e1,b,_,0,eD),eD&&(en=U.quickSetter([d,u],e1.a,"px")),ty||y.length&&!0===k(tp,"fixedMarkers")||(tr(tm?q:tp),U.set([g,h],{force3D:!0}),F=U.quickSetter(g,e1.a,"px"),P=U.quickSetter(h,e1.a,"px"))}if(eD){var tA=eD.vars.onUpdate,tB=eD.vars.onUpdateParams;eD.eventCallback("onUpdate",function(){tS.update(0,0,1),tA&&tA.apply(eD,tB||[])})}if(tS.previous=function(){return tx[tx.indexOf(tS)-1]},tS.next=function(){return tx[tx.indexOf(tS)+1]},tS.revert=function(e,t){if(!t)return tS.kill(!0);var o=!1!==e||!tS.enabled,a=et;o!==tS.isReverted&&(o&&(eo=Math.max(tE(),tS.scroll.rec||0),tY=tS.progress,ei=r&&r.progress()),d&&[d,u,g,h].forEach(function(e){return e.style.display=o?"none":"block"}),o&&(et=tS,tS.update(o)),!ex||eP&&tS.isActive||(o?tU(ex,M,w):tN(ex,M,tt(ex),Y)),o||tS.update(o),et=a,tS.isReverted=o)},tS.refresh=function(o,a,n,s){if(!et&&tS.enabled||a){if(ex&&o&&eC)return void tc(e,"scrollEnd",t_);!ek&&tR&&tR(tS),et=tS,i.tween&&!n&&(i.tween.kill(),i.tween=0),N&&N.pause(),e$&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(e){return e.vars.immediateRender&&e.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),tS.isReverted||tS.revert(!0,!0),tS._subPinOffset=!1;var b,v,y,k,_,S,H,F,P,B,I,L,D,j=tC(),Q=tH(),K=eD?eD.duration():eN(tp,e1),Z=x<=.01||!x,J=0,er=s||0,ea=ej(n)?n.end:t.end,en=t.endTrigger||em,es=ej(n)?n.start:t.start||(0!==t.start&&em?ex?"0 0":"0 100%":0),el=tS.pinnedContainer=t.pinnedContainer&&O(t.pinnedContainer,tS),ef=em&&Math.max(0,tx.indexOf(tS))||0,ep=ef;for(tM&&ej(n)&&(L=U.getProperty(g,e1.p),D=U.getProperty(h,e1.p));ep-- >0;)(S=tx[ep]).end||S.refresh(0,1)||(et=tS),(H=S.pin)&&(H===em||H===ex||H===el)&&!S.isReverted&&(B||(B=[]),B.unshift(S),S.revert(!0,!0)),S!==tx[ep]&&(ef--,ep--);for(eG(es)&&(es=es(tS)),f=tQ(es=eX(es,"start",tS),em,j,e1,tE(),d,g,tS,Q,tW,ty,K,eD,tS._startClamp&&"_startClamp")||(ex?-.001:0),eG(ea)&&(ea=ea(tS)),eV(ea)&&!ea.indexOf("+=")&&(~ea.indexOf(" ")?ea=(eV(es)?es.split(" ")[0]:"")+ea:(J=th(ea.substr(2),j),ea=eV(es)?es:(eD?U.utils.mapRange(0,eD.duration(),eD.scrollTrigger.start,eD.scrollTrigger.end,f):f)+J,en=em)),ea=eX(ea,"end",tS),p=Math.max(f,tQ(ea||(en?"100% 0":K),en,j,e1,tE()+J,u,h,tS,Q,tW,ty,K,eD,tS._endClamp&&"_endClamp"))||-.001,J=0,ep=ef;ep--;)(H=(S=tx[ep]||{}).pin)&&S.start-S._pinPush<=f&&!eD&&S.end>0&&(b=S.end-(tS._startClamp?Math.max(0,S.start):S.start),(H===em&&S.start-S._pinPush<f||H===el)&&isNaN(es)&&(J+=b*(1-S.progress)),H===ex&&(er+=b));if(f+=J,p+=J,tS._startClamp&&(tS._startClamp+=J),tS._endClamp&&!ek&&(tS._endClamp=p||-.001,p=Math.min(p,eN(tp,e1))),x=p-f||(f-=.01)&&.001,Z&&(tY=U.utils.clamp(0,1,U.utils.normalize(f,p,eo))),tS._pinPush=er,d&&J&&((b={})[e1.a]="+="+J,el&&(b[e1.p]="-="+tE()),U.set([d,u],b)),ex&&!(ew&&tS.end>=eN(tp,e1)))b=tt(ex),k=e1===T,y=tE(),R=parseFloat(W(e1.a))+er,!K&&p>1&&(I={style:I=(tm?V.scrollingElement||G:tp).style,value:I["overflow"+e1.a.toUpperCase()]},tm&&"scroll"!==tt(q)["overflow"+e1.a.toUpperCase()]&&(I.style["overflow"+e1.a.toUpperCase()]="scroll")),tN(ex,M,b),$=tG(ex),v=ta(ex,!0),F=ty&&E(tp,k?X:T)(),ev?((Y=[ev+e1.os2,x+er+"px"]).t=M,(ep=ev===e6?ti(ex,e1)+x+er:0)&&(Y.push(e1.d,ep+"px"),"auto"!==M.style.flexBasis&&(M.style.flexBasis=ep+"px")),tV(Y),el&&tx.forEach(function(e){e.pin===el&&!1!==e.vars.pinSpacing&&(e._subPinOffset=!0)}),ty&&tE(eo)):(ep=ti(ex,e1))&&"auto"!==M.style.flexBasis&&(M.style.flexBasis=ep+"px"),ty&&((_={top:v.top+(k?y-f:F)+"px",left:v.left+(k?F:y-f)+"px",boxSizing:"border-box",position:"fixed"})[e2]=_["max"+e9]=Math.ceil(v.width)+"px",_[e5]=_["max"+te]=Math.ceil(v.height)+"px",_[e7]=_[e7+"Top"]=_[e7+e3]=_[e7+e8]=_[e7+e4]="0",_[e6]=b[e6],_[e6+"Top"]=b[e6+"Top"],_[e6+e3]=b[e6+e3],_[e6+e8]=b[e6+e8],_[e6+e4]=b[e6+e4],z=tq(w,_,eP),ek&&tE(0)),r?(P=r._initted,ec(1),r.render(r.duration(),!0,!0),C=W(e1.a)-R+x+er,A=Math.abs(x-C)>1,ty&&A&&z.splice(z.length-2,2),r.render(0,!0,!0),P||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),ec(0)):C=x,I&&(I.value?I.style["overflow"+e1.a.toUpperCase()]=I.value:I.style.removeProperty("overflow-"+e1.a));else if(em&&tE()&&!eD)for(v=em.parentNode;v&&v!==q;)v._pinOffset&&(f-=v._pinOffset,p-=v._pinOffset),v=v.parentNode;B&&B.forEach(function(e){return e.revert(!1,!0)}),tS.start=f,tS.end=p,l=c=ek?eo:tE(),eD||ek||ey||(l<eo&&tE(eo),tS.scroll.rec=0),tS.revert(!1,!0),tT=eS(),ee&&(tX=-1,ee.restart(!0)),et=0,r&&tl&&(r._initted||ei)&&r.progress()!==ei&&r.progress(ei||0,!0).render(r.time(),!0,!0),(Z||tY!==tS.progress||eD||e$||r&&!r._initted)&&(r&&!tl&&(r._initted||tY||!1!==r.vars.immediateRender)&&r.totalProgress(eD&&f<-.001&&!tY?U.utils.normalize(f,p,0):tY,!0),tS.progress=Z||(l-f)/x===tY?0:tY),ex&&ev&&(M._pinOffset=Math.round(tS.progress*C)),N&&N.invalidate(),isNaN(L)||(L-=U.getProperty(g,e1.p),D-=U.getProperty(h,e1.p),t0(g,e1,L),t0(d,e1,L-(s||0)),t0(h,e1,D),t0(u,e1,D-(s||0))),Z&&!ek&&tS.update(),!eh||ek||m||(m=!0,eh(tS),m=!1)}},tS.getVelocity=function(){return(tE()-c)/(eS()-J)*1e3||0},tS.endAnimation=function(){eQ(tS.callbackAnimation),r&&(N?N.progress(1):r.paused()?tl||eQ(r,tS.direction<0,1):eQ(r,r.reversed()))},tS.labelToScroll=function(e){return r&&r.labels&&(f||tS.refresh()||f)+r.labels[e]/r.duration()*x||0},tS.getTrailing=function(e){var t=tx.indexOf(tS),r=tS.direction>0?tx.slice(0,t).reverse():tx.slice(t+1);return(eV(e)?r.filter(function(t){return t.vars.preventOverlaps===e}):r).filter(function(e){return tS.direction>0?e.end<=f:e.start>=p})},tS.update=function(e,t,o){if(!eD||o||e){var a,n,s,d,u,h,b,m=!0===ek?eo:tS.scroll(),v=e?0:(m-f)/x,y=v<0?0:v>1?1:v||0,w=tS.progress;if(t&&(c=l,l=eD?tE():m,eA&&(L=I,I=r&&!tl?r.totalProgress():y)),eM&&ex&&!et&&!eW&&eC&&(!y&&f<m+(m-c)/(eS()-J)*eM?y=1e-4:1===y&&p>m+(m-c)/(eS()-J)*eM&&(y=.9999)),y!==w&&tS.enabled){if(d=(u=(a=tS.isActive=!!y&&y<1)!=(!!w&&w<1))||!!y!=!!w,tS.direction=y>w?1:-1,tS.progress=y,d&&!et&&(n=y&&!w?0:1===y?1:1===w?2:3,tl&&(s=!u&&"none"!==tk[n+1]&&tk[n+1]||tk[n],b=r&&("complete"===s||"reset"===s||s in r))),e0&&(u||b)&&(b||eb||!r)&&(eG(e0)?e0(tS):tS.getTrailing(e0).forEach(function(e){return e.endAnimation()})),!tl&&(!N||et||eW?r&&r.totalProgress(y,!!(et&&(tT||e))):(N._dp._time-N._start!==N._time&&N.render(N._dp._time-N._start),N.resetTo?N.resetTo("totalProgress",y,r._tTime/r._tDur):(N.vars.totalProgress=y,N.invalidate().restart()))),ex)if(e&&ev&&(M.style[ev+e1.os2]=H),ty){if(d){if(h=!e&&y>w&&p+1>m&&m+1>=eN(tp,e1),eP)if(!e&&(a||h)){var k=ta(ex,!0),_=m-f;tZ(ex,q,k.top+(e1===T?_:0)+"px",k.left+(e1===T?0:_)+"px")}else tZ(ex,M);tV(a||h?z:$),A&&y<1&&a||S(R+(1!==y||h?0:C))}}else S(eF(R+C*y));!eA||i.tween||et||eW||ee.restart(!0),ed&&(u||eY&&y&&(y<1||!ez))&&K(ed.targets).forEach(function(e){return e.classList[a||eY?"add":"remove"](ed.className)}),!ep||tl||e||ep(tS),d&&!et?(tl&&(b&&("complete"===s?r.pause().totalProgress(1):"reset"===s?r.restart(!0).pause():"restart"===s?r.restart(!0):r[s]()),ep&&ep(tS)),(u||!ez)&&(eg&&u&&eK(tS,eg),tz[n]&&eK(tS,tz[n]),eY&&(1===y?tS.kill(!1,1):tz[n]=0),!u&&tz[n=1===y?1:3]&&eK(tS,tz[n])),eJ&&!a&&Math.abs(tS.getVelocity())>(eq(eJ)?eJ:2500)&&(eQ(tS.callbackAnimation),N?N.progress(1):eQ(r,"reverse"===s?1:!y,1))):tl&&ep&&!et&&ep(tS)}if(P){var W=eD?m/eD.duration()*(eD._caScrollDist||0):m;F(W+ +!!g._isFlipped),P(W)}en&&en(-m/eD.duration()*(eD._caScrollDist||0))}},tS.enable=function(t,r){tS.enabled||(tS.enabled=!0,tc(tp,"resize",t$),tm||tc(tp,"scroll",tw),tR&&tc(e,"refreshInit",tR),!1!==t&&(tS.progress=tY=0,l=c=tX=tE()),!1!==r&&tS.refresh())},tS.getTween=function(e){return e&&i?i.tween:N},tS.setPositions=function(e,t,r,o){if(eD){var a=eD.scrollTrigger,i=eD.duration(),n=a.end-a.start;e=a.start+n*e/i,t=a.start+n*t/i}tS.refresh(!1,!1,{start:eT(e,r&&!!tS._startClamp),end:eT(t,r&&!!tS._endClamp)},o),tS.update()},tS.adjustPinSpacing=function(e){if(Y&&e){var t=Y.indexOf(e1.d)+1;Y[t]=parseFloat(Y[t])+e+"px",Y[1]=parseFloat(Y[1])+e+"px",tV(Y)}},tS.disable=function(t,r){if(!1!==t&&tS.revert(!0,!0),tS.enabled&&(tS.enabled=tS.isActive=!1,r||N&&N.pause(),eo=0,n&&(n.uncache=1),tR&&tf(e,"refreshInit",tR),ee&&(ee.pause(),i.tween&&i.tween.kill()&&(i.tween=0)),!tm)){for(var o=tx.length;o--;)if(tx[o].scroller===tp&&tx[o]!==tS)return;tf(tp,"resize",t$),tm||tf(tp,"scroll",tw)}},tS.kill=function(e,o){tS.disable(e,o),N&&!o&&N.kill(),eu&&delete tv[eu];var a=tx.indexOf(tS);a>=0&&tx.splice(a,1),a===ea&&tP>0&&ea--,a=0,tx.forEach(function(e){return e.scroller===tS.scroller&&(a=1)}),a||ek||ey||(tS.scroll.rec=0),r&&(r.scrollTrigger=null,e&&r.revert({kill:!1}),o||r.kill()),d&&[d,u,g,h].forEach(function(e){return e.parentNode&&e.parentNode.removeChild(e)}),e_===tS&&(e_=0),ex&&(n&&(n.uncache=1),a=0,tx.forEach(function(e){return e.pin===ex&&a++}),a||(n.spacer=0)),t.onKill&&t.onKill(tS)},tx.push(tS),tS.enable(!1,!1),es&&es(tS),r&&r.add&&!x){var tI=tS.update;tS.update=function(){tS.update=tI,v.cache++,f||p||tS.refresh()},U.delayedCall(.01,tS.update),x=.01,f=p=0}else tS.refresh();ex&&tO()},e.register=function(t){return N||(U=t||eP(),eA()&&window.document&&e.enable(),N=eH),N},e.defaults=function(e){if(e)for(var t in e)tu[t]=e[t];return tu},e.disable=function(e,t){eH=0,tx.forEach(function(r){return r[t?"kill":"disable"](e)}),tf(D,"wheel",tw),tf(V,"scroll",tw),clearInterval(ee),tf(V,"touchcancel",eE),tf(q,"touchstart",eE),tl(tf,V,"pointerdown,touchstart,mousedown",eO),tl(tf,V,"pointerup,touchend,mouseup",eY),Q.kill(),eD(tf);for(var r=0;r<v.length;r+=3)tp(tf,v[r],v[r+1]),tp(tf,v[r],v[r+2])},e.enable=function(){if(D=window,G=(V=document).documentElement,q=V.body,U)if(K=U.utils.toArray,Z=U.utils.clamp,eb=U.core.context||eE,ec=U.core.suppressOverwrites||eE,em=D.history.scrollRestoration||"auto",tA=D.pageYOffset||0,U.core.globals("ScrollTrigger",e),q){eH=1,(ex=document.createElement("div")).style.height="100vh",ex.style.position="absolute",tY(),function e(){return eH&&requestAnimationFrame(e)}(),L.register(U),e.isTouch=L.isTouch,eh=L.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),ed=1===L.isTouch,tc(D,"wheel",tw),j=[D,V,G,q],U.matchMedia?(e.matchMedia=function(e){var t,r=U.matchMedia();for(t in e)r.add(t,e[t]);return r},U.addEventListener("matchMediaInit",function(){tC(),tH()}),U.addEventListener("matchMediaRevert",function(){return tR()}),U.addEventListener("matchMedia",function(){tF(0,1),tW("matchMedia")}),U.matchMedia().add("(orientation: portrait)",function(){return tz(),tz})):console.warn("Requires GSAP 3.11.0 or later"),tz(),tc(V,"scroll",tw);var t,r,o=q.hasAttribute("style"),a=q.style,i=a.borderTopStyle,n=U.core.Animation.prototype;for(n.revert||Object.defineProperty(n,"revert",{value:function(){return this.time(-.01,!0)}}),a.borderTopStyle="solid",T.m=Math.round((t=ta(q)).top+T.sc())||0,X.m=Math.round(t.left+X.sc())||0,i?a.borderTopStyle=i:a.removeProperty("border-top-style"),o||(q.setAttribute("style",""),q.removeAttribute("style")),ee=setInterval(ty,250),U.delayedCall(.5,function(){return eW=0}),tc(V,"touchcancel",eE),tc(q,"touchstart",eE),tl(tc,V,"pointerdown,touchstart,mousedown",eO),tl(tc,V,"pointerup,touchend,mouseup",eY),eo=U.utils.checkPrefix("transform"),tL.push(eo),N=eS(),Q=U.delayedCall(.2,tF).pause(),es=[V,"visibilitychange",function(){var e=D.innerWidth,t=D.innerHeight;V.hidden?(ei=e,en=t):(ei!==e||en!==t)&&t$()},V,"DOMContentLoaded",tF,D,"load",tF,D,"resize",t$],eD(tc),tx.forEach(function(e){return e.enable(0,1)}),r=0;r<v.length;r+=3)tp(tf,v[r],v[r+1]),tp(tf,v[r],v[r+2])}else V&&V.addEventListener("DOMContentLoaded",function t(){e.enable(),V.removeEventListener("DOMContentLoaded",t)})},e.config=function(t){"limitCallbacks"in t&&(ez=!!t.limitCallbacks);var r=t.syncInterval;r&&clearInterval(ee)||(ee=r)&&setInterval(ty,r),"ignoreMobileResize"in t&&(ed=1===e.isTouch&&t.ignoreMobileResize),"autoRefreshEvents"in t&&(eD(tf)||eD(tc,t.autoRefreshEvents||"none"),ef=-1===(t.autoRefreshEvents+"").indexOf("resize"))},e.scrollerProxy=function(e,t){var r=O(e),o=v.indexOf(r),a=eB(r);~o&&v.splice(o,a?6:2),t&&(a?y.unshift(D,t,q,t,G,t):y.unshift(r,t))},e.clearMatchMedia=function(e){tx.forEach(function(t){return t._ctx&&t._ctx.query===e&&t._ctx.kill(!0,!0)})},e.isInViewport=function(e,t,r){var o=(eV(e)?O(e):e).getBoundingClientRect(),a=o[r?e2:e5]*t||0;return r?o.right-a>0&&o.left+a<D.innerWidth:o.bottom-a>0&&o.top+a<D.innerHeight},e.positionInViewport=function(e,t,r){eV(e)&&(e=O(e));var o=e.getBoundingClientRect(),a=o[r?e2:e5],i=null==t?a/2:t in tg?tg[t]*a:~t.indexOf("%")?parseFloat(t)*a/100:parseFloat(t)||0;return r?(o.left+i)/D.innerWidth:(o.top+i)/D.innerHeight},e.killAll=function(e){if(tx.slice(0).forEach(function(e){return"ScrollSmoother"!==e.vars.id&&e.kill()}),!0!==e){var t=tk.killAll||[];tk={},t.forEach(function(e){return e()})}},e}();t2.version="3.15.1",t2.saveStyles=function(e){return e?K(e).forEach(function(e){if(e&&e.style){var t=tS.indexOf(e);t>=0&&tS.splice(t,5),tS.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),U.core.getCache(e),eb())}}):tS},t2.revert=function(e,t){return tH(!e,t)},t2.create=function(e,t){return new t2(e,t)},t2.refresh=function(e){return e?t$(!0):(N||t2.register())&&tF(!0)},t2.update=function(e){return++v.cache&&tB(2*(!0===e))},t2.clearScrollMemory=tX,t2.maxScroll=function(e,t){return eN(e,t?X:T)},t2.getScrollFunc=function(e,t){return E(O(e),t?X:T)},t2.getById=function(e){return tv[e]},t2.getAll=function(){return tx.filter(function(e){return"ScrollSmoother"!==e.vars.id})},t2.isScrolling=function(){return!!eC},t2.snapDirectional=ts,t2.addEventListener=function(e,t){var r=tk[e]||(tk[e]=[]);~r.indexOf(t)||r.push(t)},t2.removeEventListener=function(e,t){var r=tk[e],o=r&&r.indexOf(t);o>=0&&r.splice(o,1)},t2.batch=function(e,t){var r,o=[],a={},i=t.interval||.016,n=t.batchMax||1e9,s=function(e,t){var r=[],o=[],a=U.delayedCall(i,function(){t(r,o),r=[],o=[]}).pause();return function(e){r.length||a.restart(!0),r.push(e.trigger),o.push(e),n<=r.length&&a.progress(1)}};for(r in t)a[r]="on"===r.substr(0,2)&&eG(t[r])&&"onRefreshInit"!==r?s(r,t[r]):t[r];return eG(n)&&(n=n(),tc(t2,"refresh",function(){return n=t.batchMax()})),K(e).forEach(function(e){var t={};for(r in a)t[r]=a[r];t.trigger=e,o.push(t2.create(t))}),o};var t5,t3=function(e,t,r,o){return t>o?e(o):t<0&&e(0),r>o?(o-t)/(r-t):r<0?t/(t-r):1},t4=function e(t,r){!0===r?t.style.removeProperty("touch-action"):t.style.touchAction=!0===r?"auto":r?"pan-"+r+(L.isTouch?" pinch-zoom":""):"none",t===G&&e(q,r)},t8={auto:1,scroll:1},t6=function(e){var t,r=e.event,o=e.target,a=e.axis,i=(r.changedTouches?r.changedTouches[0]:r).target,n=i._gsap||U.core.getCache(i),s=eS();if(!n._isScrollT||s-n._isScrollT>2e3){for(;i&&i!==q&&(i.scrollHeight<=i.clientHeight&&i.scrollWidth<=i.clientWidth||!(t8[(t=tt(i)).overflowY]||t8[t.overflowX]));)i=i.parentNode;n._isScroll=i&&i!==o&&!eB(i)&&(t8[(t=tt(i)).overflowY]||t8[t.overflowX]),n._isScrollT=s}(n._isScroll||"x"===a)&&(r.stopPropagation(),r._gsapAllow=!0)},t7=function(e,t,r,o){return L.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:o=o&&t6,onPress:o,onDrag:o,onScroll:o,onEnable:function(){return r&&tc(V,L.eventTypes[0],re,!1,!0)},onDisable:function(){return tf(V,L.eventTypes[0],re,!0)}})},t9=/(input|label|select|textarea)/i,re=function(e){var t=t9.test(e.target.tagName);(t||t5)&&(e._gsapAllow=!0,t5=t)},rt=function(e){ej(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t,r,o,a,i,n,s,l,c=e,f=c.normalizeScrollX,p=c.momentum,d=c.allowNestedScroll,u=c.onRelease,g=O(e.target)||G,h=U.core.globals().ScrollSmoother,b=h&&h.get(),m=eh&&(e.content&&O(e.content)||b&&!1!==e.content&&!b.smooth()&&b.content()),x=E(g,T),y=E(g,X),w=1,z=(L.isTouch&&D.visualViewport?D.visualViewport.scale*D.visualViewport.width:D.outerWidth)/D.innerWidth,$=0,k=eG(p)?function(){return p(t)}:function(){return p||2.8},M=t7(g,e.type,!0,d),_=function(){return a=!1},W=eE,S=eE,R=function(){r=eN(g,T),S=Z(+!!eh,r),f&&(W=Z(0,eN(g,X))),o=tT},C=function(){m._gsap.y=eF(parseFloat(m._gsap.y)+x.offset)+"px",m.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(m._gsap.y)+", 0, 1)",x.offset=x.cacheID=0},H=function(){if(a){requestAnimationFrame(_);var e=eF(t.deltaY/2),r=S(x.v-e);if(m&&r!==x.v+x.offset){x.offset=r-x.v;var o=eF((parseFloat(m&&m._gsap.y)||0)-x.offset);m.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+o+", 0, 1)",m._gsap.y=o+"px",x.cacheID=v.cache,tB()}return!0}x.offset&&C(),a=!0},Y=function(){R(),i.isActive()&&i.vars.scrollY>r&&(x()>r?i.progress(1)&&x(r):i.resetTo("scrollY",r))};return m&&U.set(m,{y:"+=0"}),e.ignoreCheck=function(e){return eh&&"touchmove"===e.type&&H(e)||w>1.05&&"touchstart"!==e.type||t.isGesturing||e.touches&&e.touches.length>1},e.onPress=function(){a=!1;var e=w;w=eF((D.visualViewport&&D.visualViewport.scale||1)/z),i.pause(),e!==w&&t4(g,w>1.01||!f&&"x"),n=y(),s=x(),R(),o=tT},e.onRelease=e.onGestureStart=function(e,t){if(x.offset&&C(),t){v.cache++;var o,a,n=k();f&&(a=(o=y())+-(.05*n*e.velocityX)/.227,n*=t3(y,o,a,eN(g,X)),i.vars.scrollX=W(a)),a=(o=x())+-(.05*n*e.velocityY)/.227,n*=t3(x,o,a,eN(g,T)),i.vars.scrollY=S(a),i.invalidate().duration(n).play(.01),(eh&&i.vars.scrollY>=r||o>=r-1)&&U.to({},{onUpdate:Y,duration:n})}else l.restart(!0);u&&u(e)},e.onWheel=function(){i._ts&&i.pause(),eS()-$>1e3&&(o=0,$=eS())},e.onChange=function(e,t,r,a,i){if(tT!==o&&R(),t&&f&&y(W(a[2]===t?n+(e.startX-e.x):y()+t-a[1])),r){x.offset&&C();var l=i[2]===r,c=l?s+e.startY-e.y:x()+r-i[1],p=S(c);l&&c!==p&&(s+=p-c),x(p)}(r||t)&&tB()},e.onEnable=function(){t4(g,!f&&"x"),t2.addEventListener("refresh",Y),tc(D,"resize",Y),x.smooth&&(x.target.style.scrollBehavior="auto",x.smooth=y.smooth=!1),M.enable()},e.onDisable=function(){t4(g,!0),tf(D,"resize",Y),t2.removeEventListener("refresh",Y),M.kill()},e.lockAxis=!1!==e.lockAxis,(t=new L(e)).iOS=eh,eh&&!x()&&x(1),eh&&U.ticker.add(eE),l=t._dc,i=U.to(t,{ease:"power4",paused:!0,inherit:!1,scrollX:f?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:tJ(x,x(),function(){return i.pause()})},onUpdate:tB,onComplete:l.vars.onComplete}),t};t2.sort=function(e){if(eG(e))return tx.sort(e);var t=D.pageYOffset||0;return t2.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+D.innerHeight}),tx.sort(e||function(e,t){return -1e6*(e.vars.refreshPriority||0)+(e.vars.containerAnimation?1e6:e._sortY)-((t.vars.containerAnimation?1e6:t._sortY)+-1e6*(t.vars.refreshPriority||0))})},t2.observe=function(e){return new L(e)},t2.normalizeScroll=function(e){if(void 0===e)return ep;if(!0===e&&ep)return ep.enable();if(!1===e){ep&&ep.kill(),ep=e;return}var t=e instanceof L?e:rt(e);return ep&&ep.target===t.target&&ep.kill(),eB(t.target)&&(ep=t),t},t2.core={_getVelocityProp:F,_inputObserver:t7,_scrollers:v,_proxies:y,bridge:{ss:function(){eC||tW("scrollStart"),eC=eS()},ref:function(){return et}}},eP()&&U.registerPlugin(t2)},6748:(e,t,r)=>{r.d(t,{Ab:()=>O});var o=r(1724),a=r(1920);let i={sm:{borderRadius:32,borderWidth:1,width:70,height:36},md:{borderRadius:16,borderWidth:1},line:{borderRadius:16,borderWidth:1},"pulse-outside":{borderRadius:16,borderWidth:1},"pulse-inner":{borderRadius:16,borderWidth:1}},n={sm:{dark:{strokeOpacity:.46,innerOpacity:.24,bloomOpacity:.38,innerShadow:"rgba(255, 255, 255, 0.3)",saturation:1.2},light:{strokeOpacity:.12,innerOpacity:.3,bloomOpacity:.16,innerShadow:"rgba(0, 0, 0, 0.14)",saturation:1.8}},md:{dark:{strokeOpacity:.26,innerOpacity:.42,bloomOpacity:.24,innerShadow:"rgba(255, 255, 255, 0.27)",saturation:1.2},light:{strokeOpacity:.12,innerOpacity:.26,bloomOpacity:.34,innerShadow:"rgba(0, 0, 0, 0.14)",saturation:1.5}},line:{dark:{strokeOpacity:1.14,innerOpacity:.7,bloomOpacity:.8,innerShadow:"rgba(255, 255, 255, 0.1)",saturation:1.2},light:{strokeOpacity:.16,innerOpacity:.32,bloomOpacity:.3,innerShadow:"rgba(0, 0, 0, 0.14)",saturation:1.95}},"pulse-outside":{dark:{strokeOpacity:.94,innerOpacity:.34,bloomOpacity:.3,innerShadow:"transparent",saturation:1.2,brightness:1.9,hairlineOpacity:0},light:{strokeOpacity:1.96,innerOpacity:1.04,bloomOpacity:.42,innerShadow:"transparent",saturation:.6,brightness:1.7,hairlineOpacity:0}},"pulse-inner":{dark:{strokeOpacity:1.54,innerOpacity:.44,bloomOpacity:.66,innerShadow:"transparent",saturation:1.2,brightness:.75},light:{strokeOpacity:.32,innerOpacity:.4,bloomOpacity:.8,innerShadow:"transparent",saturation:.75,brightness:1.3}}},s=(n.md.dark,n.md.light,{colorful:{border:[{color:"rgb(255, 50, 100)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(40, 140, 255)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(50, 200, 80)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(30, 185, 170)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(100, 70, 255)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(40, 140, 255)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(255, 120, 40)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(240, 50, 180)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(180, 40, 240)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(255, 60, 80)",secondary:"rgba(40, 190, 180, 0.98)"},spikeLt:{primary:"rgb(200, 30, 60)",secondary:"rgb(20, 150, 140)"}},mono:{border:[{color:"rgb(180, 180, 180)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(140, 140, 140)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(160, 160, 160)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(130, 130, 130)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(170, 170, 170)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(150, 150, 150)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(190, 190, 190)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(145, 145, 145)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(165, 165, 165)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(200, 200, 200)",secondary:"rgb(170, 170, 170)"},spikeLt:{primary:"rgb(80, 80, 80)",secondary:"rgb(120, 120, 120)"}},ocean:{border:[{color:"rgb(100, 80, 220)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(60, 120, 255)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(80, 100, 200)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(50, 140, 220)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(120, 80, 255)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(70, 130, 255)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(140, 100, 240)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(90, 110, 230)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(130, 70, 255)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(100, 120, 255)",secondary:"rgba(130, 100, 220, 0.98)"},spikeLt:{primary:"rgb(60, 60, 180)",secondary:"rgb(80, 100, 200)"}},sunset:{border:[{color:"rgb(255, 80, 50)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(255, 160, 40)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(255, 120, 60)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(255, 200, 50)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(255, 100, 80)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(255, 180, 60)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(255, 60, 60)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(255, 140, 50)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(255, 90, 70)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(255, 140, 80)",secondary:"rgba(255, 100, 60, 0.98)"},spikeLt:{primary:"rgb(200, 80, 40)",secondary:"rgb(220, 120, 30)"}},forest:{border:[{color:"rgb(46, 160, 90)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(30, 190, 120)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(70, 180, 70)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(20, 150, 130)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(90, 200, 80)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(40, 170, 110)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(120, 210, 70)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(35, 145, 100)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(60, 195, 140)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(46, 160, 90)",secondary:"rgba(30, 190, 120,, 0.98)"},spikeLt:{primary:"rgb(33, 115, 65)",secondary:"rgb(22, 137, 86)"}},candy:{border:[{color:"rgb(240, 70, 170)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(255, 90, 140)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(215, 60, 200)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(255, 110, 180)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(200, 80, 240)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(250, 60, 150)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(230, 120, 220)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(245, 85, 165)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(210, 70, 230)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(240, 70, 170)",secondary:"rgba(255, 90, 140,, 0.98)"},spikeLt:{primary:"rgb(173, 50, 122)",secondary:"rgb(184, 65, 101)"}},ice:{border:[{color:"rgb(90, 200, 240)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(60, 175, 230)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(130, 220, 250)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(70, 190, 215)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(110, 210, 255)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(50, 165, 220)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(150, 230, 250)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(85, 195, 235)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(65, 180, 245)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(90, 200, 240)",secondary:"rgba(60, 175, 230,, 0.98)"},spikeLt:{primary:"rgb(65, 144, 173)",secondary:"rgb(43, 126, 166)"}},gold:{border:[{color:"rgb(240, 190, 60)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(255, 210, 90)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(225, 165, 40)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(250, 200, 70)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(255, 225, 120)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(230, 175, 50)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(245, 205, 85)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(215, 155, 35)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(255, 215, 100)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(240, 190, 60)",secondary:"rgba(255, 210, 90,, 0.98)"},spikeLt:{primary:"rgb(173, 137, 43)",secondary:"rgb(184, 151, 65)"}}}),l={colorful:{border:[{color:"rgb(50, 200, 80)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(30, 185, 170)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(255, 120, 40)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(100, 70, 255)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(240, 50, 180)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(180, 40, 240)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(40, 140, 255)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(255, 50, 100)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(50, 200, 80, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(30, 185, 170, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(255, 120, 40, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(100, 70, 255, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(240, 50, 180, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(180, 40, 240, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(40, 140, 255, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(255, 50, 100, 0.3)",pos:"100% 27%",size:"11px 12px"}]},mono:{border:[{color:"rgb(160, 160, 160)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(140, 140, 140)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(180, 180, 180)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(150, 150, 150)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(170, 170, 170)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(155, 155, 155)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(145, 145, 145)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(165, 165, 165)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(160, 160, 160, 0.25)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(140, 140, 140, 0.22)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(180, 180, 180, 0.17)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(150, 150, 150, 0.17)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(170, 170, 170, 0.15)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(155, 155, 155, 0.20)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(145, 145, 145, 0.15)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(165, 165, 165, 0.15)",pos:"100% 27%",size:"11px 12px"}]},ocean:{border:[{color:"rgb(60, 140, 200)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(50, 120, 180)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(100, 80, 220)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(80, 100, 255)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(120, 70, 240)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(90, 80, 220)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(70, 110, 255)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(110, 90, 230)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(60, 140, 200, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(50, 120, 180, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(100, 80, 220, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(80, 100, 255, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(120, 70, 240, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(90, 80, 220, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(70, 110, 255, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(110, 90, 230, 0.3)",pos:"100% 27%",size:"11px 12px"}]},sunset:{border:[{color:"rgb(255, 180, 50)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(255, 150, 40)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(255, 80, 60)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(255, 100, 80)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(255, 60, 80)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(255, 120, 60)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(255, 200, 50)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(255, 90, 70)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(255, 180, 50, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(255, 150, 40, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(255, 80, 60, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(255, 100, 80, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(255, 60, 80, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(255, 120, 60, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(255, 200, 50, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(255, 90, 70, 0.3)",pos:"100% 27%",size:"11px 12px"}]},forest:{border:[{color:"rgb(46, 160, 90)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(30, 190, 120)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(70, 180, 70)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(20, 150, 130)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(90, 200, 80)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(40, 170, 110)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(120, 210, 70)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(35, 145, 100)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(60, 195, 140,, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(46, 160, 90,, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(30, 190, 120,, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(70, 180, 70,, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(20, 150, 130,, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(90, 200, 80,, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(40, 170, 110,, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(120, 210, 70,, 0.3)",pos:"100% 27%",size:"11px 12px"}]},candy:{border:[{color:"rgb(240, 70, 170)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(255, 90, 140)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(215, 60, 200)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(255, 110, 180)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(200, 80, 240)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(250, 60, 150)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(230, 120, 220)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(245, 85, 165)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(210, 70, 230,, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(240, 70, 170,, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(255, 90, 140,, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(215, 60, 200,, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(255, 110, 180,, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(200, 80, 240,, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(250, 60, 150,, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(230, 120, 220,, 0.3)",pos:"100% 27%",size:"11px 12px"}]},ice:{border:[{color:"rgb(90, 200, 240)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(60, 175, 230)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(130, 220, 250)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(70, 190, 215)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(110, 210, 255)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(50, 165, 220)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(150, 230, 250)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(85, 195, 235)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(65, 180, 245,, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(90, 200, 240,, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(60, 175, 230,, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(130, 220, 250,, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(70, 190, 215,, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(110, 210, 255,, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(50, 165, 220,, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(150, 230, 250,, 0.3)",pos:"100% 27%",size:"11px 12px"}]},gold:{border:[{color:"rgb(240, 190, 60)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(255, 210, 90)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(225, 165, 40)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(250, 200, 70)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(255, 225, 120)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(230, 175, 50)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(245, 205, 85)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(215, 155, 35)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(255, 215, 100,, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(240, 190, 60,, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(255, 210, 90,, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(225, 165, 40,, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(250, 200, 70,, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(255, 225, 120,, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(230, 175, 50,, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(245, 205, 85,, 0.3)",pos:"100% 27%",size:"11px 12px"}]}},c={colorful:{dark:[{color:"rgb(255, 50, 100)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(40, 180, 220)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(50, 200, 80)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(180, 40, 240)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(255, 160, 30)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(100, 70, 255)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(40, 140, 255)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(240, 50, 180)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(30, 185, 170)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(255, 50, 100)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(40, 140, 255)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(50, 200, 80)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(180, 40, 240)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(30, 185, 170)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(100, 70, 255)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(40, 140, 255)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(255, 120, 40)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(240, 50, 180)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},mono:{dark:[{color:"rgb(200, 200, 200)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(170, 170, 170)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(155, 155, 155)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(185, 185, 185)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(165, 165, 165)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(180, 180, 180)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(160, 160, 160)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(175, 175, 175)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(190, 190, 190)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(100, 100, 100)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(80, 80, 80)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(90, 90, 90)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(70, 70, 70)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(85, 85, 85)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(95, 95, 95)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(75, 75, 75)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(105, 105, 105)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(65, 65, 65)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},ocean:{dark:[{color:"rgb(100, 80, 220)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(60, 120, 255)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(80, 100, 200)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(130, 70, 255)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(70, 130, 255)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(120, 80, 255)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(90, 110, 230)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(110, 90, 240)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(140, 100, 255)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(80, 60, 200)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(50, 100, 220)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(70, 90, 190)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(110, 60, 220)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(60, 110, 230)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(100, 70, 240)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(80, 100, 210)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(90, 80, 225)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(120, 90, 245)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},sunset:{dark:[{color:"rgb(255, 100, 60)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(255, 180, 50)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(255, 140, 70)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(255, 80, 80)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(255, 200, 60)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(255, 120, 50)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(255, 160, 80)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(255, 90, 60)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(255, 70, 70)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(220, 80, 40)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(230, 150, 30)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(210, 110, 50)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(200, 60, 60)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(220, 170, 40)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(210, 100, 30)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(230, 130, 60)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(190, 70, 50)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(180, 50, 50)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},forest:{dark:[{color:"rgb(46, 160, 90)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(30, 190, 120)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(70, 180, 70)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(20, 150, 130)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(90, 200, 80)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(40, 170, 110)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(120, 210, 70)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(35, 145, 100)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(60, 195, 140)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(33, 115, 65)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(22, 137, 86)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(50, 130, 50)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(14, 108, 94)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(65, 144, 58)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(29, 122, 79)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(86, 151, 50)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(25, 104, 72)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(43, 140, 101)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},candy:{dark:[{color:"rgb(240, 70, 170)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(255, 90, 140)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(215, 60, 200)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(255, 110, 180)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(200, 80, 240)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(250, 60, 150)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(230, 120, 220)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(245, 85, 165)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(210, 70, 230)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(173, 50, 122)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(184, 65, 101)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(155, 43, 144)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(184, 79, 130)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(144, 58, 173)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(180, 43, 108)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(166, 86, 158)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(176, 61, 119)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(151, 50, 166)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},ice:{dark:[{color:"rgb(90, 200, 240)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(60, 175, 230)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(130, 220, 250)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(70, 190, 215)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(110, 210, 255)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(50, 165, 220)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(150, 230, 250)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(85, 195, 235)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(65, 180, 245)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(65, 144, 173)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(43, 126, 166)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(94, 158, 180)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(50, 137, 155)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(79, 151, 184)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(36, 119, 158)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(108, 166, 180)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(61, 140, 169)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(47, 130, 176)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},gold:{dark:[{color:"rgb(240, 190, 60)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(255, 210, 90)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(225, 165, 40)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(250, 200, 70)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(255, 225, 120)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(230, 175, 50)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(245, 205, 85)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(215, 155, 35)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(255, 215, 100)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(173, 137, 43)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(184, 151, 65)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(162, 119, 29)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(180, 144, 50)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(184, 162, 86)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(166, 126, 36)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(176, 148, 61)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(155, 112, 25)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(184, 155, 72)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]}},f={colorful:[{color:"rgba(255, 50, 100, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(40, 180, 220, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(50, 200, 80, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(180, 40, 240, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(255, 160, 30, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(100, 70, 255, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(40, 140, 255, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(240, 50, 180, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(30, 185, 170, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],mono:[{color:"rgba(200, 200, 200, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(170, 170, 170, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(155, 155, 155, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(185, 185, 185, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(165, 165, 165, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(180, 180, 180, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(160, 160, 160, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(175, 175, 175, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(190, 190, 190, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],ocean:[{color:"rgba(100, 80, 220, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(60, 120, 255, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(80, 100, 200, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(130, 70, 255, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(70, 130, 255, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(120, 80, 255, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(90, 110, 230, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(110, 90, 240, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(140, 100, 255, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],sunset:[{color:"rgba(255, 100, 60, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(255, 180, 50, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(255, 140, 70, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(255, 80, 80, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(255, 200, 60, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(255, 120, 50, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(255, 160, 80, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(255, 90, 60, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(255, 70, 70, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],forest:[{color:"rgba(46, 160, 90,, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(30, 190, 120,, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(70, 180, 70,, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(20, 150, 130,, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(90, 200, 80,, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(40, 170, 110,, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(120, 210, 70,, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(35, 145, 100,, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(60, 195, 140,, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],candy:[{color:"rgba(240, 70, 170,, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(255, 90, 140,, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(215, 60, 200,, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(255, 110, 180,, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(200, 80, 240,, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(250, 60, 150,, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(230, 120, 220,, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(245, 85, 165,, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(210, 70, 230,, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],ice:[{color:"rgba(90, 200, 240,, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(60, 175, 230,, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(130, 220, 250,, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(70, 190, 215,, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(110, 210, 255,, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(50, 165, 220,, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(150, 230, 250,, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(85, 195, 235,, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(65, 180, 245,, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],gold:[{color:"rgba(240, 190, 60,, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(255, 210, 90,, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(225, 165, 40,, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(250, 200, 70,, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(255, 225, 120,, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(230, 175, 50,, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(245, 205, 85,, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(215, 155, 35,, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(255, 215, 100,, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}]},p={colorful:{dark:{spikes:[{color1:"rgb(100, 70, 255)",color2:"rgba(100, 70, 255, 1)"},{color1:"rgba(255, 170, 40, 0.59)",color2:"rgba(255, 170, 40, 0.29)"},{color1:"rgb(50, 200, 100)",color2:"rgba(50, 200, 100, 1)"},{color1:"rgba(200, 50, 240, 0.91)",color2:"rgba(200, 50, 240, 0.45)"},{color1:"rgb(40, 140, 255)",color2:"rgba(40, 140, 255, 1)"}]},light:{spikes:[{color1:"rgb(80, 50, 200)",color2:"rgba(80, 50, 200, 0.8)"},{color1:"rgba(210, 130, 0, 0.7)",color2:"rgba(210, 130, 0, 0.46)"},{color1:"rgb(30, 160, 70)",color2:"rgba(30, 160, 70, 0.82)"},{color1:"rgb(160, 30, 190)",color2:"rgba(160, 30, 190, 0.7)"},{color1:"rgb(30, 100, 200)",color2:"rgba(30, 100, 200, 0.78)"}]}},mono:{dark:{spikes:[{color1:"rgb(200, 200, 200)",color2:"rgba(200, 200, 200, 1)"},{color1:"rgba(180, 180, 180, 0.59)",color2:"rgba(180, 180, 180, 0.29)"},{color1:"rgb(190, 190, 190)",color2:"rgba(190, 190, 190, 1)"},{color1:"rgba(170, 170, 170, 0.91)",color2:"rgba(170, 170, 170, 0.45)"},{color1:"rgb(185, 185, 185)",color2:"rgba(185, 185, 185, 1)"}]},light:{spikes:[{color1:"rgb(80, 80, 80)",color2:"rgba(80, 80, 80, 0.8)"},{color1:"rgba(100, 100, 100, 0.7)",color2:"rgba(100, 100, 100, 0.46)"},{color1:"rgb(70, 70, 70)",color2:"rgba(70, 70, 70, 0.82)"},{color1:"rgb(90, 90, 90)",color2:"rgba(90, 90, 90, 0.7)"},{color1:"rgb(85, 85, 85)",color2:"rgba(85, 85, 85, 0.78)"}]}},ocean:{dark:{spikes:[{color1:"rgb(100, 80, 255)",color2:"rgb(100, 80, 255)"},{color1:"rgba(80, 130, 220, 0.59)",color2:"rgba(80, 130, 220, 0.29)"},{color1:"rgb(60, 100, 255)",color2:"rgb(60, 100, 255)"},{color1:"rgba(90, 120, 200, 0.91)",color2:"rgba(90, 120, 200, 0.45)"},{color1:"rgb(120, 90, 255)",color2:"rgb(120, 90, 255)"}]},light:{spikes:[{color1:"rgb(50, 40, 180)",color2:"rgba(50, 40, 180, 0.8)"},{color1:"rgba(40, 80, 200, 0.7)",color2:"rgba(40, 80, 200, 0.46)"},{color1:"rgb(30, 50, 190)",color2:"rgba(30, 50, 190, 0.82)"},{color1:"rgb(60, 90, 180)",color2:"rgba(60, 90, 180, 0.7)"},{color1:"rgb(70, 60, 200)",color2:"rgba(70, 60, 200, 0.78)"}]}},sunset:{dark:{spikes:[{color1:"rgb(255, 100, 80)",color2:"rgb(255, 100, 80)"},{color1:"rgba(255, 150, 80, 0.59)",color2:"rgba(255, 150, 80, 0.29)"},{color1:"rgb(255, 80, 60)",color2:"rgb(255, 80, 60)"},{color1:"rgba(255, 120, 50, 0.91)",color2:"rgba(255, 120, 50, 0.45)"},{color1:"rgb(255, 140, 70)",color2:"rgb(255, 140, 70)"}]},light:{spikes:[{color1:"rgb(200, 60, 30)",color2:"rgba(200, 60, 30, 0.8)"},{color1:"rgba(220, 100, 20, 0.7)",color2:"rgba(220, 100, 20, 0.46)"},{color1:"rgb(180, 40, 20)",color2:"rgba(180, 40, 20, 0.82)"},{color1:"rgb(210, 80, 10)",color2:"rgba(210, 80, 10, 0.7)"},{color1:"rgb(190, 70, 30)",color2:"rgba(190, 70, 30, 0.78)"}]}},forest:{dark:{spikes:[{color1:"rgb(46, 160, 90)",color2:"rgb(30, 190, 120)"},{color1:"rgba(70, 180, 70,, 0.59)",color2:"rgba(20, 150, 130,, 0.29)"},{color1:"rgb(90, 200, 80)",color2:"rgb(40, 170, 110)"},{color1:"rgba(120, 210, 70,, 0.91)",color2:"rgba(35, 145, 100,, 0.45)"},{color1:"rgb(60, 195, 140)",color2:"rgb(46, 160, 90)"}]},light:{spikes:[{color1:"rgb(33, 115, 65)",color2:"rgba(22, 137, 86,, 0.8)"},{color1:"rgba(50, 130, 50,, 0.7)",color2:"rgba(14, 108, 94,, 0.46)"},{color1:"rgb(65, 144, 58)",color2:"rgba(29, 122, 79,, 0.82)"},{color1:"rgb(86, 151, 50)",color2:"rgba(25, 104, 72,, 0.7)"},{color1:"rgb(43, 140, 101)",color2:"rgba(33, 115, 65,, 0.78)"}]}},candy:{dark:{spikes:[{color1:"rgb(240, 70, 170)",color2:"rgb(255, 90, 140)"},{color1:"rgba(215, 60, 200,, 0.59)",color2:"rgba(255, 110, 180,, 0.29)"},{color1:"rgb(200, 80, 240)",color2:"rgb(250, 60, 150)"},{color1:"rgba(230, 120, 220,, 0.91)",color2:"rgba(245, 85, 165,, 0.45)"},{color1:"rgb(210, 70, 230)",color2:"rgb(240, 70, 170)"}]},light:{spikes:[{color1:"rgb(173, 50, 122)",color2:"rgba(184, 65, 101,, 0.8)"},{color1:"rgba(155, 43, 144,, 0.7)",color2:"rgba(184, 79, 130,, 0.46)"},{color1:"rgb(144, 58, 173)",color2:"rgba(180, 43, 108,, 0.82)"},{color1:"rgb(166, 86, 158)",color2:"rgba(176, 61, 119,, 0.7)"},{color1:"rgb(151, 50, 166)",color2:"rgba(173, 50, 122,, 0.78)"}]}},ice:{dark:{spikes:[{color1:"rgb(90, 200, 240)",color2:"rgb(60, 175, 230)"},{color1:"rgba(130, 220, 250,, 0.59)",color2:"rgba(70, 190, 215,, 0.29)"},{color1:"rgb(110, 210, 255)",color2:"rgb(50, 165, 220)"},{color1:"rgba(150, 230, 250,, 0.91)",color2:"rgba(85, 195, 235,, 0.45)"},{color1:"rgb(65, 180, 245)",color2:"rgb(90, 200, 240)"}]},light:{spikes:[{color1:"rgb(65, 144, 173)",color2:"rgba(43, 126, 166,, 0.8)"},{color1:"rgba(94, 158, 180,, 0.7)",color2:"rgba(50, 137, 155,, 0.46)"},{color1:"rgb(79, 151, 184)",color2:"rgba(36, 119, 158,, 0.82)"},{color1:"rgb(108, 166, 180)",color2:"rgba(61, 140, 169,, 0.7)"},{color1:"rgb(47, 130, 176)",color2:"rgba(65, 144, 173,, 0.78)"}]}},gold:{dark:{spikes:[{color1:"rgb(240, 190, 60)",color2:"rgb(255, 210, 90)"},{color1:"rgba(225, 165, 40,, 0.59)",color2:"rgba(250, 200, 70,, 0.29)"},{color1:"rgb(255, 225, 120)",color2:"rgb(230, 175, 50)"},{color1:"rgba(245, 205, 85,, 0.91)",color2:"rgba(215, 155, 35,, 0.45)"},{color1:"rgb(255, 215, 100)",color2:"rgb(240, 190, 60)"}]},light:{spikes:[{color1:"rgb(173, 137, 43)",color2:"rgba(184, 151, 65,, 0.8)"},{color1:"rgba(162, 119, 29,, 0.7)",color2:"rgba(180, 144, 50,, 0.46)"},{color1:"rgb(184, 162, 86)",color2:"rgba(166, 126, 36,, 0.82)"},{color1:"rgb(176, 148, 61)",color2:"rgba(155, 112, 25,, 0.7)"},{color1:"rgb(184, 155, 72)",color2:"rgba(173, 137, 43,, 0.78)"}]}}};function d(e,t){let r=e.match(/^rgba\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*[\d.]+\s*\)$/);if(r)return`rgba(${r[1]}, ${r[2]}, ${r[3]}, ${t})`;let o=e.match(/^rgb\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);return o?`rgba(${o[1]}, ${o[2]}, ${o[3]}, ${t})`:e}function u(e,t){let r=e.match(/^rgba\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);if(r)return`rgba(${r[1]}, ${r[2]}, ${r[3]}, ${(parseFloat(r[4])*t).toFixed(2)})`;let o=e.match(/^rgb\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);return o?`rgba(${o[1]}, ${o[2]}, ${o[3]}, ${t.toFixed(2)})`:e}let g=[{region:1,quad:"tl"},{region:2,quad:"tl"},{region:3,quad:"bl"},{region:1,quad:"bl"},{region:2,quad:"br"},{region:3,quad:"br"},{region:1,quad:"tr"},{region:2,quad:"tr"},{region:3,quad:"tr"}],h=[[65,35],[55,30],[35,65],[15,30],[173,28],[80,22],[69,28],[22,38],[47,44]],b=[{ci:0,region:1,quad:"tl",w:84,h:48},{ci:1,region:2,quad:"tl",w:72,h:42},{ci:2,region:3,quad:"bl",w:48,h:84},{ci:4,region:2,quad:"br",w:216,h:38},{ci:5,region:3,quad:"br",w:102,h:31},{ci:6,region:1,quad:"tr",w:89,h:38},{ci:8,region:3,quad:"tr",w:62,h:58}],m=[{ci:0,region:1,quad:"tl",w:80,h:19,x:"27%",y:"0%"},{ci:6,region:2,quad:"tr",w:74,h:11,x:"73%",y:"-1%"},{ci:7,region:3,quad:"tr",w:15,h:44,x:"100%",y:"33%"},{ci:8,region:1,quad:"br",w:19,h:38,x:"101%",y:"72%"},{ci:4,region:2,quad:"br",w:84,h:13,x:"67%",y:"100%"},{ci:1,region:3,quad:"bl",w:60,h:21,x:"24%",y:"101%"},{ci:2,region:1,quad:"bl",w:17,h:40,x:"0%",y:"60%"},{ci:3,region:2,quad:"tl",w:13,h:32,x:"-1%",y:"28%"}],x=[{ci:0,region:1,quad:"tl",w:110,h:30,x:"27%",y:"3%"},{ci:6,region:2,quad:"tr",w:100,h:20,x:"73%",y:"1%"},{ci:7,region:3,quad:"tr",w:26,h:62,x:"100%",y:"33%"},{ci:8,region:1,quad:"br",w:30,h:56,x:"101%",y:"72%"},{ci:4,region:2,quad:"br",w:120,h:22,x:"67%",y:"99%"},{ci:1,region:3,quad:"bl",w:88,h:32,x:"24%",y:"99%"},{ci:2,region:1,quad:"bl",w:28,h:58,x:"0%",y:"60%"}];function v(e,t,r,o,a,i,n,s){return`radial-gradient(ellipse calc(${t}px * var(--bw${o}-${s}) * var(--pulse-glow-sx, 1) * var(--pulse-glow-boost, 1)) calc(${r}px * var(--bh${o}-${s}) * var(--bgh-${s}) * var(--pulse-glow-sy, 1) * var(--pulse-glow-boost, 1)) at calc(${i} + var(--bx${o}-${s})) calc(${n} + var(--by${o}-${s})), ${function(e,t,r){let o=e.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);return`rgba(${o?`${o[1]}, ${o[2]}, ${o[3]}`:"255, 255, 255"}, var(--bop-${t}-${r}))`}(e,a,s)}, transparent)`}function y(e,t,r){let o=s[t].border;return e.map(e=>{let t=o[e.ci],[a,i]=t.pos.split(" ");return v(t.color,e.w,e.h,e.region,e.quad,e.x??a,e.y??i,r)}).join(`,
    `)}function w(e,t,r){let o=s[t].border,a=+r.toFixed(3);return e.map(e=>{let t=o[e.ci],[r,i]=t.pos.split(" "),n=e.x??r,s=e.y??i,l=t.color.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/),c=l?`${l[1]}, ${l[2]}, ${l[3]}`:"255, 255, 255";return`radial-gradient(ellipse calc(${e.w}px * var(--pulse-glow-sx, 1) * var(--pulse-glow-boost, 1)) calc(${e.h}px * var(--pulse-glow-sy, 1) * var(--pulse-glow-boost, 1)) at ${n} ${s}, rgba(${c}, ${a}), transparent)`}).join(`,
    `)}function z(e){return`
[data-beam="${e}"][data-paused],
[data-beam="${e}"][data-paused]::after,
[data-beam="${e}"][data-paused]::before,
[data-beam="${e}"][data-paused] [data-beam-bloom] {
  animation-play-state: paused !important;
}`}function $(e){let t=["bw1","bh1","bw2","bh2","bw3","bh3","bgh","bop-tl","bop-tr","bop-bl","bop-br"].map(t=>`@property --${t}-${e} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}`).join(`

`),r=["bx1","by1","bx2","by2","bx3","by3"].map(t=>`@property --${t}-${e} {
  syntax: "<length>";
  initial-value: 0px;
  inherits: true;
}`).join(`

`);return`${t}

${r}

@property --beam-opacity-${e} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

@property --beam-hue-${e} {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: true;
}`}function k(e,t,r){let o="dark"===t,a=r/2.3;return"pulse-inner"===e?{sp:.28,dr:o?33:40,op:o?.48:.45,gh:o?.34:.22,bs:(o?1.9:2.6)*a,ss:(o?2.6:4.6)*a,ghs:(o?2.4:5.5)*a,huePeriod:16}:{sp:o?.28:.36,dr:o?14:19,op:.46*!!o,gh:o?.16:.58,bs:(o?2.3:3.7)*a,ss:(o?6.4:4.6)*a,ghs:(o?2.4:3.8)*a,huePeriod:14}}function M(e,t,r){return`  animation: ${t}-${e} ${r}s ease forwards;`}function _(e,t=1){return Math.max(.5,Math.round(e*t*100)/100)}let W=new Set,S=null,R=0,C=1e3/30-2,H=2*Math.PI;function X(e){return(1-Math.cos(H*e))/2}function T(e){if(S=requestAnimationFrame(T),e-R<C)return;R=e;let t=e/1e3;W.forEach(({el:e,config:r})=>{for(let o of r.oscillators){let r=(t-o.delay)/o.period,a=o.a+(o.b-o.a)*X(r);e.style.setProperty(o.prop,"px"===o.unit?`${a.toFixed(2)}px`:a.toFixed(4))}if(r.hue){let{prop:o,range:a,period:i,continuous:n}=r.hue,s=n?t/i%1*a:-a+2*a*X(t/i);e.style.setProperty(o,`${s.toFixed(2)}deg`)}})}let O=(0,a.forwardRef)(function({children:e,size:t="md",colorVariant:r="colorful",theme:C="dark",staticColors:H=!1,duration:X,active:O=!0,borderRadius:Y,brightness:E,saturation:F,hueRange:A=30,glowSize:P=1,strength:B=1,className:I,style:L,css:U,onActivate:N,onDeactivate:D,onAnimationEnd:V,...G},q){let j=(0,a.useId)().replace(/:/g,"-"),Q=function(){let[e,t]=(0,a.useState)(()=>typeof window>"u"||window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");return(0,a.useEffect)(()=>{if(typeof window>"u")return;let e=window.matchMedia("(prefers-color-scheme: dark)"),r=e=>{t(e.matches?"dark":"light")};return e.addEventListener("change",r),()=>e.removeEventListener("change",r)},[]),e}(),K=(0,a.useRef)(null),[Z,J]=(0,a.useState)(O),[ee,et]=(0,a.useState)(!1),[er,eo]=(0,a.useState)(!0),[ea,ei]=(0,a.useState)(null),[en,es]=(0,a.useState)({x:1,y:1});(0,a.useEffect)(()=>{if(null!=Y)return;let e=K.current;if(!e)return;let t=()=>{let t=e.firstElementChild;if(!t)return;let r=parseFloat(getComputedStyle(t).borderTopLeftRadius);!isNaN(r)&&r>0&&ei(r)};t();let r=new MutationObserver(t);return r.observe(e,{childList:!0,subtree:!1}),()=>r.disconnect()},[Y,e]),(0,a.useEffect)(()=>{!O||Z||ee?O||!Z||ee||et(!0):J(!0)},[O,Z,ee]),(0,a.useEffect)(()=>{let e=K.current;if(!e||typeof IntersectionObserver>"u")return;let t=new IntersectionObserver(e=>{for(let t of e)eo(t.isIntersecting)},{rootMargin:"256px"});return t.observe(e),()=>t.disconnect()},[]),(0,a.useEffect)(()=>{if("pulse-outside"!==t)return void es({x:1,y:1});let e=K.current;if(!e)return;let r=e=>Math.max(.35,Math.min(4,e)),o=()=>{let t=e.firstElementChild;if(!t)return;let o=t.getBoundingClientRect();if(!o.width||!o.height)return;let a=+r(o.width/350).toFixed(3),i=+r(o.height/140).toFixed(3);es(e=>e.x===a&&e.y===i?e:{x:a,y:i})};if(o(),typeof ResizeObserver>"u")return;let a=e.firstElementChild;if(!a)return;let i=new ResizeObserver(o);return i.observe(a),()=>i.disconnect()},[t,e]);let el=(0,a.useCallback)(e=>{let t=e.animationName;t.includes("fade-out")?(J(!1),et(!1),null==D||D()):t.includes("fade-in")&&(null==N||N()),null==V||V(e)},[N,D,V]),ec="auto"===C?Q:C,ef=n[t][ec],ep=i[t],ed="pulse-inner"===t||"pulse-outside"===t,eu=Y??ea??ep.borderRadius,eg=X??("line"===t?3.1:ed?2.3:1.96),eh=F??ef.saturation,eb=E??ef.brightness??1.3,em="line"===t?Math.min(A,13):A,ex="mono"===r||H,ev=(0,a.useMemo)(()=>(function(e){let{size:t}=e;return"line"===t?function(e){let{id:t,borderRadius:r,borderWidth:o,duration:a,strokeOpacity:i,innerOpacity:n,bloomOpacity:l,innerShadow:g,colorVariant:h,staticColors:b,brightness:m,saturation:x,hueRange:v,theme:y,glowSize:w=1}=e,$=Math.max(0,r-o),k="dark"===y,M=b?"":`animation: beam-hue-shift-${t} 12s ease-in-out infinite;`,W=b?"":`animation: beam-hue-shift-bloom-${t} 8s ease-in-out infinite;`,S=b?"":`
@keyframes beam-hue-shift-${t} {
  0% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${v}deg)) brightness(${m.toFixed(2)}) saturate(${x.toFixed(2)}); }
  50% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + ${v}deg)) brightness(${m.toFixed(2)}) saturate(${x.toFixed(2)}); }
  100% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${v}deg)) brightness(${m.toFixed(2)}) saturate(${x.toFixed(2)}); }
}

@keyframes beam-hue-shift-bloom-${t} {
  0% { filter: blur(${_(8,w)}px) hue-rotate(calc(var(--beam-hue-base, 0deg) - ${v+10}deg)) brightness(${m.toFixed(2)}) saturate(${x.toFixed(2)}); }
  50% { filter: blur(${_(8,w)}px) hue-rotate(calc(var(--beam-hue-base, 0deg) + ${v+10}deg)) brightness(${m.toFixed(2)}) saturate(${x.toFixed(2)}); }
  100% { filter: blur(${_(8,w)}px) hue-rotate(calc(var(--beam-hue-base, 0deg) - ${v+10}deg)) brightness(${m.toFixed(2)}) saturate(${x.toFixed(2)}); }
}`,R=k?`radial-gradient(
        ellipse calc(24px * var(--beam-w-${t})) calc(28px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%) calc(100% + 2px),
        rgba(255, 255, 255, 0.38) 0%,
        rgba(255, 255, 255, 0.12) 30%,
        transparent 65%
      )`:`radial-gradient(
        ellipse calc(35px * var(--beam-w-${t})) calc(28px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%) calc(100% + 2px),
        rgba(0, 0, 0, 0.6) 0%,
        rgba(0, 0, 0, 0.25) 35%,
        transparent 70%
      )`,C=c[h][k?"dark":"light"].map(e=>{let r=0===e.offsetX?"":e.offsetX>0?` + ${e.offsetX}px`:` - ${Math.abs(e.offsetX)}px`,o=0===e.offsetY?"":e.offsetY>0?` + ${e.offsetY}px`:` - ${Math.abs(e.offsetY)}px`;return`radial-gradient(ellipse calc(${e.sizeW}px * var(--beam-w-${t})) calc(${e.sizeH}px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%${r}) calc(100%${o}), ${e.color}, transparent)`}).join(`,
       `),H=f[h].map(e=>{let r=0===e.offsetX?"":e.offsetX>0?` + ${e.offsetX}px`:` - ${Math.abs(e.offsetX)}px`,o=0===e.offsetY?"":` - ${Math.abs(e.offsetY)}px`;return`radial-gradient(ellipse calc(${e.sizeW}px * var(--beam-w-${t})) calc(${e.sizeH}px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%${r}) calc(100%${o}), ${e.color}, transparent)`}).join(`,
    `),X=function(e,t,r){let o=function(e,t){let r=s[e];return t?r.spike:r.spikeLt}(e,t),a=p[e][t?"dark":"light"],i="mono"===e,n=i?.14:1,l=i?u(o.primary,.14):o.primary,c=i?u(o.primary,.09):o.primary,f=i?u(o.secondary,.12):o.secondary,g=i?d(o.secondary,.06):d(o.secondary,.49),h=a.spikes.map(e=>i?{color1:u(e.color1,n),color2:u(e.color2,.7*n)}:e),b=i?"12px":"0.8px",m=i?"14px":"2px",x=i?"12px":"1.2px",v=i?"42px":"92px",y=i?"38px":"72px",w=i?"40px":"85px",z=i?"32px":"60px";if(t)return`radial-gradient(ellipse calc(${b} * var(--beam-spike-${r}) * var(--beam-spike-mul, 1)) calc(${v} * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 8% calc(100% - 2px), ${l}, ${c} 30%, transparent 88%),
       radial-gradient(ellipse calc(10px * var(--beam-spike2-${r}) * var(--beam-spike-mul, 1)) calc(35px * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 22% calc(100% - 4px), ${f}, ${g} 50%, transparent 95%),
       radial-gradient(ellipse calc(${m} * (2 - var(--beam-spike-${r})) * var(--beam-spike-mul, 1)) calc(${y} * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 36% calc(100% - 3px), ${h[0].color1}, ${h[0].color2} 40%, transparent 90%),
       radial-gradient(ellipse calc(14px * var(--beam-spike2-${r}) * var(--beam-spike-mul, 1)) calc(28px * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 50% calc(100% - 2px), ${h[1].color1}, ${h[1].color2} 55%, transparent 96%),
       radial-gradient(ellipse calc(${x} * (2 - var(--beam-spike2-${r})) * var(--beam-spike-mul, 1)) calc(${w} * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 64% calc(100% - 4px), ${h[2].color1}, ${h[2].color2} 35%, transparent 89%),
       radial-gradient(ellipse calc(7px * var(--beam-spike-${r}) * var(--beam-spike-mul, 1)) calc(45px * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 78% calc(100% - 2px), ${h[3].color1}, ${h[3].color2} 48%, transparent 94%),
       radial-gradient(ellipse calc(${i?"10px":"0.6px"} * (2 - var(--beam-spike-${r})) * var(--beam-spike-mul, 1)) calc(${z} * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 92% calc(100% - 3px), ${h[4].color1}, ${h[4].color2} 42%, transparent 91%),
       radial-gradient(ellipse calc(21px * var(--beam-spike-${r})) calc(15px * var(--beam-spike2-${r})) at calc(var(--beam-x-${r}) * 100%) calc(100% + 1px), ${i?"rgba(255, 255, 255, 0.5)":"rgba(255, 255, 255, 1)"} 0%, ${i?"rgba(255, 255, 255, 0.45)":"rgba(255, 255, 255, 0.9)"} 20%, ${i?"rgba(255, 255, 255, 0.25)":"rgba(255, 255, 255, 0.5)"} 50%, transparent 100%),
       radial-gradient(ellipse calc(42px * var(--beam-w-${r})) calc(40px * var(--beam-h-${r})) at calc(var(--beam-x-${r}) * 100%) 100%, ${i?"rgba(255, 255, 255, 0.15)":"rgba(255, 255, 255, 0.3)"} 0%, ${i?"rgba(255, 255, 255, 0.06)":"rgba(255, 255, 255, 0.12)"} 25%, ${i?"rgba(255, 255, 255, 0.015)":"rgba(255, 255, 255, 0.03)"} 55%, transparent 80%)`;{let e=i?u(o.primary,.11):d(o.primary,.85),t=i?u(o.secondary,.09):d(o.secondary,.7);return`radial-gradient(ellipse calc(${b} * var(--beam-spike-${r}) * var(--beam-spike-mul, 1)) calc(${v} * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 8% calc(100% - 2px), ${l}, ${e} 30%, transparent 88%),
       radial-gradient(ellipse calc(10px * var(--beam-spike2-${r}) * var(--beam-spike-mul, 1)) calc(35px * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 22% calc(100% - 4px), ${f}, ${t} 50%, transparent 95%),
       radial-gradient(ellipse calc(${m} * (2 - var(--beam-spike-${r})) * var(--beam-spike-mul, 1)) calc(${y} * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 36% calc(100% - 3px), ${h[0].color1}, ${h[0].color2} 40%, transparent 90%),
       radial-gradient(ellipse calc(14px * var(--beam-spike2-${r}) * var(--beam-spike-mul, 1)) calc(28px * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 50% calc(100% - 2px), ${h[1].color1}, ${h[1].color2} 55%, transparent 96%),
       radial-gradient(ellipse calc(${x} * (2 - var(--beam-spike2-${r})) * var(--beam-spike-mul, 1)) calc(${w} * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 64% calc(100% - 4px), ${h[2].color1}, ${h[2].color2} 35%, transparent 89%),
       radial-gradient(ellipse calc(7px * var(--beam-spike-${r}) * var(--beam-spike-mul, 1)) calc(45px * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 78% calc(100% - 2px), ${h[3].color1}, ${h[3].color2} 48%, transparent 94%),
       radial-gradient(ellipse calc(${i?"12px":"1px"} * (2 - var(--beam-spike-${r})) * var(--beam-spike-mul, 1)) calc(${z} * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 92% calc(100% - 3px), ${h[4].color1}, ${h[4].color2} 42%, transparent 91%),
       radial-gradient(ellipse calc(50px * var(--beam-w-${r})) calc(32px * var(--beam-h-${r})) at calc(var(--beam-x-${r}) * 100%) calc(100%), rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.18) 30%, rgba(0, 0, 0, 0.03) 60%, transparent 85%)`}}(h,k,t),T="mono"===h?"filter: blur(6px);":"";return`
@property --beam-x-${t} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

@property --beam-w-${t} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-h-${t} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-spike-${t} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-spike2-${t} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-edge-${t} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-opacity-${t} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-beam="${t}"] {
  position: relative;
  border-radius: ${r}px;
  overflow: hidden;
}

[data-beam="${t}"][data-active] {
  animation:
    beam-travel-${t} ${a}s linear infinite,
    beam-edge-fade-${t} ${a}s linear infinite,
    beam-breathe-${t} ${(1.3*a).toFixed(1)}s ease-in-out infinite,
    beam-spike-${t} ${(1.33*a).toFixed(1)}s ease-in-out infinite,
    beam-spike2-${t} ${(1.7*a).toFixed(1)}s ease-in-out infinite,
    beam-fade-in-${t} 0.6s ease forwards;
}

[data-beam="${t}"][data-fading] {
  animation:
    beam-travel-${t} ${a}s linear infinite,
    beam-edge-fade-${t} ${a}s linear infinite,
    beam-breathe-${t} ${(1.3*a).toFixed(1)}s ease-in-out infinite,
    beam-spike-${t} ${(1.33*a).toFixed(1)}s ease-in-out infinite,
    beam-spike2-${t} ${(1.7*a).toFixed(1)}s ease-in-out infinite,
    beam-fade-out-${t} 0.5s ease forwards;
}

[data-beam="${t}"][data-active]::after,
[data-beam="${t}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${$}px;
  padding: ${o}px;
  clip-path: inset(0 round ${r}px);
  background: ${R}, ${C};
  -webkit-mask:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${t})) calc(60px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${t})) calc(60px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  z-index: 2;
  opacity: calc(var(--beam-opacity-${t}) * var(--beam-edge-${t}) * ${i.toFixed(2)} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${M}
}

[data-beam="${t}"][data-active]::before,
[data-beam="${t}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${r}px;
  background: ${H};
  box-shadow: inset 0 0 9px 1px ${g};
  -webkit-mask-image:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${t})) calc(60px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  -webkit-mask-composite: source-in, source-over;
  mask-image:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${t})) calc(60px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  mask-composite: intersect, add;
  pointer-events: none;
  z-index: 1;
  opacity: calc(var(--beam-opacity-${t}) * var(--beam-edge-${t}) * ${n.toFixed(2)} * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  clip-path: inset(0 round ${r}px);
  ${M}
}

[data-beam="${t}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${$}px;
  clip-path: inset(0 round ${r}px);
  padding: 0;
  -webkit-mask: radial-gradient(
    ellipse calc(84px * var(--beam-w-${t})) calc(110px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%) 100%,
    white 0%, rgba(255, 255, 255, 0.5) 35%, transparent 100%
  );
  -webkit-mask-composite: source-over;
  mask: radial-gradient(
    ellipse calc(84px * var(--beam-w-${t})) calc(110px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%) 100%,
    white 0%, rgba(255, 255, 255, 0.5) 35%, transparent 100%
  );
  mask-composite: add;
  background: ${X};
  ${T}
  pointer-events: none;
  z-index: 3;
  opacity: 0;
}

[data-beam="${t}"][data-active] [data-beam-bloom],
[data-beam="${t}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${t}) * var(--beam-edge-${t}) * ${l.toFixed(2)} * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
  ${W}
}

@keyframes beam-travel-${t} {
  0%   { --beam-x-${t}: 0.06;  --beam-w-${t}: 0.5; }
  10%  { --beam-x-${t}: 0.15;  --beam-w-${t}: 0.8; }
  20%  { --beam-x-${t}: 0.25;  --beam-w-${t}: 1.1; }
  30%  { --beam-x-${t}: 0.35;  --beam-w-${t}: 1.3; }
  40%  { --beam-x-${t}: 0.44;  --beam-w-${t}: 1.45; }
  50%  { --beam-x-${t}: 0.5;   --beam-w-${t}: 1.5; }
  60%  { --beam-x-${t}: 0.56;  --beam-w-${t}: 1.45; }
  70%  { --beam-x-${t}: 0.65;  --beam-w-${t}: 1.3; }
  80%  { --beam-x-${t}: 0.75;  --beam-w-${t}: 1.1; }
  90%  { --beam-x-${t}: 0.85;  --beam-w-${t}: 0.8; }
  100% { --beam-x-${t}: 0.94;  --beam-w-${t}: 0.5; }
}

@keyframes beam-edge-fade-${t} {
  0%    { --beam-edge-${t}: 0; }
  12.5% { --beam-edge-${t}: 0; }
  32.5% { --beam-edge-${t}: 1; }
  67.5% { --beam-edge-${t}: 1; }
  87.5% { --beam-edge-${t}: 0; }
  100%  { --beam-edge-${t}: 0; }
}

@keyframes beam-breathe-${t} {
  0%, 100% { --beam-h-${t}: 0.8; }
  25%      { --beam-h-${t}: 1.25; }
  55%      { --beam-h-${t}: 0.85; }
  80%      { --beam-h-${t}: 1.3; }
}

@keyframes beam-spike-${t} {
  0%   { --beam-spike-${t}: 0.8; }
  25%  { --beam-spike-${t}: 1.3; }
  50%  { --beam-spike-${t}: 0.9; }
  75%  { --beam-spike-${t}: 1.4; }
  100% { --beam-spike-${t}: 0.8; }
}

@keyframes beam-spike2-${t} {
  0%   { --beam-spike2-${t}: 1.2; }
  25%  { --beam-spike2-${t}: 0.7; }
  50%  { --beam-spike2-${t}: 1.4; }
  75%  { --beam-spike2-${t}: 0.8; }
  100% { --beam-spike2-${t}: 1.2; }
}

@keyframes beam-fade-in-${t} {
  to { --beam-opacity-${t}: 1; }
}

@keyframes beam-fade-out-${t} {
  from { --beam-opacity-${t}: 1; }
  to { --beam-opacity-${t}: 0; }
}
${S}
${z(t)}
`}(e):"sm"===t?function(e){let{id:t,borderRadius:r,borderWidth:o,duration:a,strokeOpacity:i,innerOpacity:n,bloomOpacity:s,innerShadow:c,colorVariant:f,staticColors:p,brightness:d,saturation:u,hueRange:g,theme:h,glowSize:b=1}=e,m=Math.max(0,r-o),x="mono"===f?.5:1,v=p?"":`animation: beam-hue-shift-${t} 12s ease-in-out infinite;`,y=p?"":`
@keyframes beam-hue-shift-${t} {
  0% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${g}deg)) brightness(${d.toFixed(2)}) saturate(${u.toFixed(2)}); }
  50% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + ${g}deg)) brightness(${d.toFixed(2)}) saturate(${u.toFixed(2)}); }
  100% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${g}deg)) brightness(${d.toFixed(2)}) saturate(${u.toFixed(2)}); }
}`,w="dark"===h,$=w?`conic-gradient(
        from var(--beam-angle-${t}),
        transparent 0%, transparent 54%,
        rgba(255, 255, 255, 0.1) 57%,
        rgba(255, 255, 255, 0.3) 60%,
        rgba(255, 255, 255, 0.6) 63%,
        rgba(255, 255, 255, 0.75) 66%,
        rgba(255, 255, 255, 0.6) 69%,
        rgba(255, 255, 255, 0.3) 72%,
        rgba(255, 255, 255, 0.1) 75%,
        transparent 78%, transparent 100%
      )`:`conic-gradient(
        from var(--beam-angle-${t}),
        transparent 0%, transparent 54%,
        rgba(0, 0, 0, 0.08) 57%,
        rgba(0, 0, 0, 0.2) 60%,
        rgba(0, 0, 0, 0.4) 63%,
        rgba(0, 0, 0, 0.55) 66%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.2) 72%,
        rgba(0, 0, 0, 0.08) 75%,
        transparent 78%, transparent 100%
      )`,k=l[f].border.map(e=>`radial-gradient(ellipse ${e.size} at ${e.pos}, ${e.color}, transparent)`).join(`,
    `),M=l[f].inner.map(e=>`radial-gradient(ellipse ${e.size} at ${e.pos}, ${e.color}, transparent)`).join(`,
    `),W=w?`conic-gradient(
        from var(--beam-angle-${t}),
        transparent 0%, transparent 58%,
        rgba(255, 255, 255, 0.03) 62%,
        rgba(255, 255, 255, 0.08) 65%,
        rgba(255, 255, 255, 0.2) 67%,
        rgba(255, 255, 255, 0.45) 69%,
        rgba(255, 255, 255, 0.85) 70%,
        rgba(255, 255, 255, 0.85) 70.5%,
        rgba(255, 255, 255, 0.45) 71.5%,
        rgba(255, 255, 255, 0.2) 73%,
        rgba(255, 255, 255, 0.08) 75%,
        rgba(255, 255, 255, 0.03) 78%,
        transparent 82%
      )`:`conic-gradient(
        from var(--beam-angle-${t}),
        transparent 0%, transparent 58%,
        rgba(0, 0, 0, 0.02) 62%,
        rgba(0, 0, 0, 0.08) 65%,
        rgba(0, 0, 0, 0.2) 67%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.6) 70%,
        rgba(0, 0, 0, 0.6) 70.5%,
        rgba(0, 0, 0, 0.4) 71.5%,
        rgba(0, 0, 0, 0.2) 73%,
        rgba(0, 0, 0, 0.08) 75%,
        rgba(0, 0, 0, 0.02) 78%,
        transparent 82%
      )`,S=`conic-gradient(
    from var(--beam-angle-${t}),
    transparent 0%, transparent 22%,
    rgba(255, 255, 255, 0.12) 28%, rgba(255, 255, 255, 0.4) 36%,
    white 46%, white 82%,
    rgba(255, 255, 255, 0.4) 88%, rgba(255, 255, 255, 0.12) 94%,
    transparent 97%, transparent 100%
  )`;return`
@property --beam-angle-${t} {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: true;
}

@property --beam-opacity-${t} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-beam="${t}"] {
  position: relative;
  border-radius: ${r}px;
  overflow: hidden;
}

[data-beam="${t}"][data-active] {
  animation:
    beam-spin-${t} ${a}s linear infinite,
    beam-fade-in-${t} 0.6s ease forwards;
}

[data-beam="${t}"][data-fading] {
  animation:
    beam-spin-${t} ${a}s linear infinite,
    beam-fade-out-${t} 0.5s ease forwards;
}

[data-beam="${t}"][data-active]::after,
[data-beam="${t}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${m}px;
  padding: ${o}px;
  clip-path: inset(0 round ${r}px);
  background: ${$},${k};
  -webkit-mask:
    conic-gradient(
      from var(--beam-angle-${t}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    conic-gradient(
      from var(--beam-angle-${t}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  z-index: 2;
  opacity: calc(var(--beam-opacity-${t}) * ${(i*x).toFixed(2)} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${v}
}

[data-beam="${t}"][data-active]::before,
[data-beam="${t}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${r}px;
  clip-path: inset(0 round ${r}px);
  background: ${M};
  box-shadow: inset 0 0 5px 1px ${c};
  -webkit-mask-image: ${S};
  -webkit-mask-composite: source-over;
  mask-image: ${S};
  mask-composite: add;
  pointer-events: none;
  z-index: 1;
  opacity: calc(var(--beam-opacity-${t}) * ${(n*x).toFixed(2)} * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  ${v}
}

[data-beam="${t}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${m}px;
  clip-path: inset(0 round ${r}px);
  background: ${W};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: ${o}px;
  filter: blur(${_(8,b)}px) brightness(${d.toFixed(2)}) saturate(${u.toFixed(2)});
  pointer-events: none;
  z-index: 3;
  opacity: 0;
}

[data-beam="${t}"][data-active] [data-beam-bloom],
[data-beam="${t}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${t}) * ${(s*x).toFixed(2)} * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
}

@keyframes beam-spin-${t} {
  to { --beam-angle-${t}: 360deg; }
}

@keyframes beam-fade-in-${t} {
  to { --beam-opacity-${t}: 1; }
}

@keyframes beam-fade-out-${t} {
  from { --beam-opacity-${t}: 1; }
  to { --beam-opacity-${t}: 0; }
}
${y}
${z(t)}
`}(e):"pulse-inner"===t?function(e){let{id:t,borderRadius:r,borderWidth:o,duration:a,strokeOpacity:i,innerOpacity:n,bloomOpacity:l,colorVariant:c,staticColors:f,brightness:p,saturation:d,hueRange:u,theme:m,glowSize:x=1}=e,y="mono"===c?.5:1,W=(i*y).toFixed(2),S=(n*y).toFixed(2),R=(l*y).toFixed(2),{op:C}=k("pulse-inner",m,a),H=_(8,x),X=p.toFixed(2),T=d.toFixed(2),O=f?`filter: brightness(${X}) saturate(${T});`:`filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${t}))) brightness(${X}) saturate(${T});`,Y=f?`filter: blur(${H}px) brightness(${X}) saturate(${T});`:`filter: blur(${H}px) hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${t}))) brightness(${X}) saturate(${T});`,E=s[c].border.map((e,r)=>{let{region:o,quad:a}=g[r],[i,n]=e.pos.split(" "),[s,l]=e.size.split(" ").map(parseFloat);return v(e.color,s,l,o,a,i,n,t)}).join(`,
    `),F=function(e,t,r){let o=s[e].border.map((e,r)=>{let{region:o,quad:a}=g[r],[i,n]=e.pos.split(" "),[s,l]=h[r];return v(e.color,s,l,o,a,i,n,t)}),a=r?"255, 255, 255":"0, 0, 0",i=r?.18:.08;return[...o,...[["0%","0%","tl"],["100%","0%","tr"],["0%","100%","bl"],["100%","100%","br"]].map(([e,r,o])=>`radial-gradient(ellipse 60px 60px at ${e} ${r}, rgba(${a}, calc(${i} * var(--bop-${o}-${t}))), transparent 70%)`)].join(`,
    `)}(c,t,"dark"===m),A=w(b,c,1-.5*C);return`
${$(t)}

[data-beam="${t}"] {
  position: relative;
  border-radius: ${r}px;
  overflow: hidden;
  isolation: isolate;
}

[data-beam="${t}"][data-active] {
${M(t,"beam-fade-in",.6)}
}

[data-beam="${t}"][data-fading] {
${M(t,"beam-fade-out",.5)}
}

[data-beam="${t}"][data-active]::after,
[data-beam="${t}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${r}px;
  padding: ${o}px;
  clip-path: inset(0 round ${r}px);
  background: ${E};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
  z-index: 2;
  will-change: opacity, filter;
  opacity: calc(var(--beam-opacity-${t}) * ${W} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${O}
}

[data-beam="${t}"][data-active]::before,
[data-beam="${t}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${r}px;
  clip-path: inset(0 round ${r}px);
  background: ${F};
  -webkit-mask-image:
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  -webkit-mask-composite: source-over;
  mask-image:
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  mask-composite: add;
  pointer-events: none;
  z-index: 1;
  will-change: opacity, filter;
  opacity: calc(var(--beam-opacity-${t}) * ${S} * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  ${O}
}

[data-beam="${t}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${r}px;
  clip-path: inset(0 round ${r}px);
  background: ${A};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: ${o}px;
  pointer-events: none;
  z-index: 3;
  will-change: opacity;
  opacity: 0;
}

[data-beam="${t}"][data-active] [data-beam-bloom],
[data-beam="${t}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${t}) * ${R} * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
  ${Y}
}

@keyframes beam-fade-in-${t} { to { --beam-opacity-${t}: 1; } }
@keyframes beam-fade-out-${t} { from { --beam-opacity-${t}: 1; } to { --beam-opacity-${t}: 0; } }
${z(t)}

@media (prefers-reduced-motion: reduce) {
  [data-beam="${t}"][data-active],
  [data-beam="${t}"][data-fading],
  [data-beam="${t}"][data-active]::after,
  [data-beam="${t}"][data-fading]::after,
  [data-beam="${t}"][data-active]::before,
  [data-beam="${t}"][data-fading]::before,
  [data-beam="${t}"][data-active] [data-beam-bloom],
  [data-beam="${t}"][data-fading] [data-beam-bloom] {
    animation: none !important;
  }
}
`}(e):"pulse-outside"===t?function(e){let{id:t,borderRadius:r,duration:o,strokeOpacity:a,innerOpacity:i,bloomOpacity:n,colorVariant:s,staticColors:l,brightness:c,saturation:f,hueRange:p,theme:d,hairlineOpacity:u=0,glowSize:g=1}=e,h="dark"===d,b="mono"===s?.5:1,v=(a*b).toFixed(2),W=(i*b).toFixed(2),S=(n*b).toFixed(2),R=h?"70, 70, 70":"0, 0, 0",C=u.toFixed(2),H=`linear-gradient(rgba(${R}, ${C}), rgba(${R}, ${C}))`,{op:X}=k("pulse-outside",d,o),T=_(h?3:6,g),O=_(h?22.5:15,g),Y=c.toFixed(2),E=f.toFixed(2),F=l?`filter: brightness(${Y}) saturate(${E});`:`filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${t}))) brightness(${Y}) saturate(${E});`,A=`brightness(var(--beam-glow-brightness, ${Y})) saturate(var(--beam-glow-saturate, ${E}))`,P=l?`filter: blur(var(--beam-core-blur, ${T}px)) ${A};`:`filter: blur(var(--beam-core-blur, ${T}px)) hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${t}))) ${A};`,B=l?`filter: blur(var(--beam-bloom-blur, ${O}px)) ${A};`:`filter: blur(var(--beam-bloom-blur, ${O}px)) hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${t}))) ${A};`,I=y(m,s,t),L=y(m,s,t),U=w(x,s,1-.5*X),N=u>0?`${I},
    ${H}`:I;return`
${$(t)}

[data-beam="${t}"] {
  position: relative;
  border-radius: ${r}px;
  overflow: visible;
  isolation: isolate;
}

[data-beam="${t}"][data-active] {
${M(t,"beam-fade-in",.6)}
}

[data-beam="${t}"][data-fading] {
${M(t,"beam-fade-out",.5)}
}
${u>0?`
/* Idle hairline — painted above the (opaque) child in the inner 1px edge ring so
   it overlaps a standard inset component border exactly. */
[data-beam="${t}"]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${r}px;
  padding: 1px;
  clip-path: inset(0 round ${r}px);
  background: ${H};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
  z-index: 2;
}
`:""}
[data-beam="${t}"][data-active]::after,
[data-beam="${t}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${r}px;
  padding: 1px;
  clip-path: inset(0 round ${r}px);
  background: ${N};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
  z-index: 2;
  will-change: opacity, filter;
  opacity: calc(var(--beam-opacity-${t}) * ${v} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${F}
}

[data-beam="${t}"][data-active]::before,
[data-beam="${t}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: -10px;
  z-index: -1;
  border-radius: ${r+10}px;
  background: ${L};
  transform: scale(0.95, 0.9);
  pointer-events: none;
  will-change: opacity, filter;
  opacity: calc(var(--beam-opacity-${t}) * ${W} * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  ${P}
}

[data-beam="${t}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: -30px;
  z-index: -1;
  border-radius: ${r+30}px;
  background: ${U};
  transform: scale(0.95, 0.9);
  pointer-events: none;
  will-change: transform;
  opacity: 0;
}

[data-beam="${t}"][data-active] [data-beam-bloom],
[data-beam="${t}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${t}) * ${S} * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
  ${B}
}

@keyframes beam-fade-in-${t} { to { --beam-opacity-${t}: 1; } }
@keyframes beam-fade-out-${t} { from { --beam-opacity-${t}: 1; } to { --beam-opacity-${t}: 0; } }
${z(t)}

@media (prefers-reduced-motion: reduce) {
  [data-beam="${t}"][data-active],
  [data-beam="${t}"][data-fading],
  [data-beam="${t}"][data-active]::after,
  [data-beam="${t}"][data-fading]::after,
  [data-beam="${t}"][data-active]::before,
  [data-beam="${t}"][data-fading]::before,
  [data-beam="${t}"][data-active] [data-beam-bloom],
  [data-beam="${t}"][data-fading] [data-beam-bloom] {
    animation: none !important;
  }
}
`}(e):function(e){let{id:t,borderRadius:r,borderWidth:o,duration:a,strokeOpacity:i,innerOpacity:n,bloomOpacity:l,innerShadow:c,colorVariant:f,staticColors:p,brightness:d,saturation:u,hueRange:g,theme:h,glowSize:b=1}=e,m=Math.max(0,r-o),x="mono"===f?.5:1,v=p?"":`animation: beam-hue-shift-${t} 12s ease-in-out infinite;`,y=p?"":`
@keyframes beam-hue-shift-${t} {
  0% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${g}deg)) brightness(${d.toFixed(2)}) saturate(${u.toFixed(2)}); }
  50% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + ${g}deg)) brightness(${d.toFixed(2)}) saturate(${u.toFixed(2)}); }
  100% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${g}deg)) brightness(${d.toFixed(2)}) saturate(${u.toFixed(2)}); }
}`,w="dark"===h,$=w?`conic-gradient(
        from var(--beam-angle-${t}),
        transparent 0%, transparent 54%,
        rgba(255, 255, 255, 0.1) 57%,
        rgba(255, 255, 255, 0.3) 60%,
        rgba(255, 255, 255, 0.6) 63%,
        rgba(255, 255, 255, 0.75) 66%,
        rgba(255, 255, 255, 0.6) 69%,
        rgba(255, 255, 255, 0.3) 72%,
        rgba(255, 255, 255, 0.1) 75%,
        transparent 78%, transparent 100%
      )`:`conic-gradient(
        from var(--beam-angle-${t}),
        transparent 0%, transparent 54%,
        rgba(0, 0, 0, 0.08) 57%,
        rgba(0, 0, 0, 0.2) 60%,
        rgba(0, 0, 0, 0.4) 63%,
        rgba(0, 0, 0, 0.55) 66%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.2) 72%,
        rgba(0, 0, 0, 0.08) 75%,
        transparent 78%, transparent 100%
      )`,k=s[f].border.map(e=>`radial-gradient(ellipse ${e.size} at ${e.pos}, ${e.color}, transparent)`).join(`,
    `),M=function(e){let t=s[e],r="mono"===e?.225:.45;return t.border.map(e=>{let t=e.color.replace("rgb(","rgba(").replace(")",`, ${r})`);return`radial-gradient(ellipse ${e.size.split(" ").map(e=>{let t=parseInt(e);return`${Math.round(.9*t)}px`}).join(" ")} at ${e.pos}, ${t}, transparent)`}).join(`,
    `)}(f),W=w?`conic-gradient(
        from var(--beam-angle-${t}),
        transparent 0%, transparent 58%,
        rgba(255, 255, 255, 0.03) 62%,
        rgba(255, 255, 255, 0.08) 65%,
        rgba(255, 255, 255, 0.2) 67%,
        rgba(255, 255, 255, 0.45) 69%,
        rgba(255, 255, 255, 0.85) 70%,
        rgba(255, 255, 255, 0.85) 70.5%,
        rgba(255, 255, 255, 0.45) 71.5%,
        rgba(255, 255, 255, 0.2) 73%,
        rgba(255, 255, 255, 0.08) 75%,
        rgba(255, 255, 255, 0.03) 78%,
        transparent 82%
      )`:`conic-gradient(
        from var(--beam-angle-${t}),
        transparent 0%, transparent 58%,
        rgba(0, 0, 0, 0.02) 62%,
        rgba(0, 0, 0, 0.08) 65%,
        rgba(0, 0, 0, 0.2) 67%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.6) 70%,
        rgba(0, 0, 0, 0.6) 70.5%,
        rgba(0, 0, 0, 0.4) 71.5%,
        rgba(0, 0, 0, 0.2) 73%,
        rgba(0, 0, 0, 0.08) 75%,
        rgba(0, 0, 0, 0.02) 78%,
        transparent 82%
      )`;return`
@property --beam-angle-${t} {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: true;
}

@property --beam-opacity-${t} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-beam="${t}"] {
  position: relative;
  border-radius: ${r}px;
  overflow: hidden;
}

[data-beam="${t}"][data-active] {
  animation:
    beam-spin-${t} ${a}s linear infinite,
    beam-fade-in-${t} 0.6s ease forwards;
}

[data-beam="${t}"][data-fading] {
  animation:
    beam-spin-${t} ${a}s linear infinite,
    beam-fade-out-${t} 0.5s ease forwards;
}

[data-beam="${t}"][data-active]::after,
[data-beam="${t}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${m}px;
  padding: ${o}px;
  clip-path: inset(0 round ${r}px);
  background: ${$},${k};
  -webkit-mask:
    conic-gradient(
      from var(--beam-angle-${t}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    conic-gradient(
      from var(--beam-angle-${t}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  z-index: 2;
  opacity: calc(var(--beam-opacity-${t}) * ${(i*x).toFixed(2)} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${v}
}

[data-beam="${t}"][data-active]::before,
[data-beam="${t}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${r}px;
  background: ${M};
  box-shadow: inset 0 0 9px 1px ${c};
  -webkit-mask-image:
    conic-gradient(
      from var(--beam-angle-${t}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  -webkit-mask-composite: source-in, source-over;
  mask-image:
    conic-gradient(
      from var(--beam-angle-${t}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  mask-composite: intersect, add;
  pointer-events: none;
  z-index: 1;
  opacity: calc(var(--beam-opacity-${t}) * ${(n*x).toFixed(2)} * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  clip-path: inset(0 round ${r}px);
  ${v}
}

[data-beam="${t}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${m}px;
  clip-path: inset(0 round ${r}px);
  background: ${W};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: ${o}px;
  filter: blur(${_(8,b)}px) brightness(${d.toFixed(2)}) saturate(${u.toFixed(2)});
  pointer-events: none;
  z-index: 3;
  opacity: 0;
}

[data-beam="${t}"][data-active] [data-beam-bloom],
[data-beam="${t}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${t}) * ${(l*x).toFixed(2)} * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
}

@keyframes beam-spin-${t} {
  to { --beam-angle-${t}: 360deg; }
}

@keyframes beam-fade-in-${t} {
  to { --beam-opacity-${t}: 1; }
}

@keyframes beam-fade-out-${t} {
  from { --beam-opacity-${t}: 1; }
  to { --beam-opacity-${t}: 0; }
}
${y}
${z(t)}
`}(e)})({id:j,borderRadius:eu,borderWidth:ep.borderWidth,duration:eg,strokeOpacity:ef.strokeOpacity,innerOpacity:ef.innerOpacity,bloomOpacity:ef.bloomOpacity,innerShadow:ef.innerShadow,size:t,colorVariant:r,staticColors:ex,brightness:eb,saturation:eh,hueRange:em,theme:ec,hairlineOpacity:ef.hairlineOpacity,glowSize:P}),[j,eu,ep.borderWidth,eg,ef.strokeOpacity,ef.innerOpacity,ef.bloomOpacity,ef.innerShadow,ef.hairlineOpacity,t,r,ex,eb,eh,em,P,ec]),ey=(0,a.useMemo)(()=>ed?function(e,t,r,o,a,i){if("pulse-inner"!==e&&"pulse-outside"!==e)return null;let n=k(e,t,r);return{oscillators:function(e,t){let{sp:r,dr:o,op:a,gh:i,bs:n,ss:s,ghs:l}=t;return[{prop:`--bw1-${e}`,a:1-r,b:1+1.1*r,period:.9*s,delay:0,unit:""},{prop:`--bh1-${e}`,a:1+.9*r,b:1-.85*r,period:1.26*s,delay:0,unit:""},{prop:`--bx1-${e}`,a:-o,b:.9*o,period:1.6*n,delay:0,unit:"px"},{prop:`--by1-${e}`,a:.55*o,b:-(.7*o),period:1.6*n,delay:0,unit:"px"},{prop:`--bw2-${e}`,a:1+r,b:1-.85*r,period:1.1*s,delay:0,unit:""},{prop:`--bh2-${e}`,a:1-.8*r,b:1+1.05*r,period:.81*s,delay:0,unit:""},{prop:`--bx2-${e}`,a:.8*o,b:-(.9*o),period:1.88*n,delay:0,unit:"px"},{prop:`--by2-${e}`,a:-o,b:.65*o,period:1.88*n,delay:0,unit:"px"},{prop:`--bw3-${e}`,a:1-.6*r,b:1+1.15*r,period:.98*s,delay:0,unit:""},{prop:`--bh3-${e}`,a:1+.75*r,b:1-r,period:1.4*s,delay:0,unit:""},{prop:`--bx3-${e}`,a:-(.6*o),b:o,period:1.45*n,delay:0,unit:"px"},{prop:`--by3-${e}`,a:-(.85*o),b:.45*o,period:1.45*n,delay:0,unit:"px"},{prop:`--bgh-${e}`,a:1-i,b:1+i,period:l,delay:0,unit:""},{prop:`--bop-tl-${e}`,a:1-a,b:1,period:n,delay:0,unit:""},{prop:`--bop-tr-${e}`,a:1-a,b:1,period:1.32*n,delay:.28*n,unit:""},{prop:`--bop-bl-${e}`,a:1-a,b:1,period:.84*n,delay:.55*n,unit:""},{prop:`--bop-br-${e}`,a:1-a,b:1,period:1.58*n,delay:.83*n,unit:""}]}(i,n),hue:a?null:{prop:`--beam-hue-${i}`,range:360,period:n.huePeriod,continuous:!0}}}(t,ec,eg,0,ex,j):null,[ed,t,ec,eg,em,ex,j]);(0,a.useEffect)(()=>{var e;if(!ey||!(Z||ee)||!er)return;let t=K.current;if(t&&!("u">typeof window&&null!=(e=window.matchMedia)&&e.call(window,"(prefers-reduced-motion: reduce)").matches)){let e={el:t,config:ey};return W.add(e),null==S&&(R=0,S=requestAnimationFrame(T)),()=>{W.delete(e),0===W.size&&null!=S&&(cancelAnimationFrame(S),S=null)}}},[ey,Z,ee,er]);let ew=(0,a.useCallback)(e=>{K.current=e,"function"==typeof q?q(e):q&&(q.current=e)},[q]),ez={...L??{},"--beam-strength":Math.max(0,Math.min(1,B)),..."pulse-outside"===t?{"--pulse-glow-sx":en.x,"--pulse-glow-sy":en.y}:{}};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{children:U?`${ev}
${U.split("{id}").join(j)}`:ev}),(0,o.jsxs)("div",{...G,ref:ew,"data-beam":j,"data-active":Z&&!ee?"":void 0,"data-fading":ee?"":void 0,"data-paused":!Z||ee||er?void 0:"",className:I,style:ez,onAnimationEnd:el,children:[e,(0,o.jsx)("div",{"data-beam-bloom":!0})]})]})})},7952:(e,t,r)=>{r.d(t,{YM:()=>tF});var o=r(1724),a=r(1920);function i(e){let t=e.replace("#","");(3===t.length||4===t.length)&&(t=t.split("").map(e=>e+e).join(""));let r=t.length>=8?parseInt(t.slice(6,8),16)/255:1;return[parseInt(t.slice(0,2),16)/255,parseInt(t.slice(2,4),16)/255,parseInt(t.slice(4,6),16)/255,r]}function n(e,t,r){e/=255;let o=Math.max(e,t/=255,r/=255),a=o-Math.min(e,t,r),i=0;return 0!==a&&(i=(o===e?((t-r)/a+6)%6:o===t?(r-e)/a+2:(e-t)/a+4)/6),[i,0===o?0:a/o,o]}function s(e,t,r){let o=Math.floor(6*e),a=6*e-o,i=r*(1-t),n=r*(1-a*t),s=r*(1-(1-a)*t),l=0,c=0,f=0;switch(o%6){case 0:l=r,c=s,f=i;break;case 1:l=n,c=r,f=i;break;case 2:l=i,c=r,f=s;break;case 3:l=i,c=n,f=r;break;case 4:l=s,c=i,f=r;break;case 5:l=r,c=i,f=n}return[Math.round(255*l),Math.round(255*c),Math.round(255*f)]}let l={colorBack:"#00000000",speed:1,repetition:1.5,softness:.05,shiftRed:.3,shiftBlue:.3,distortion:.1,contour:.4,angle:90,shape:0,scale:1,rotation:0,offsetX:0,offsetY:0,originX:.5,originY:.5,worldWidth:0,worldHeight:0,fit:1},c={name:"chromatic",modes:{dark:{...l,colorTint:"#88ccff2e",shiftRed:.75,shiftBlue:.75,repetition:2,softness:.09,shaderOpacity:1},light:{...l,colorTint:"#66b0ff99",shiftRed:.6,shiftBlue:.6,shaderOpacity:1}}},f={chromatic:c,silver:{name:"silver",modes:{dark:{...l,colorTint:"#ffffff66",shaderOpacity:.88},light:{...l,colorTint:"#ffffff40",shaderOpacity:1}}},gold:{name:"gold",modes:{dark:{...l,colorTint:"#ffcc55cc",speed:.85,shaderOpacity:.92},light:{...l,colorTint:"#f7d488aa",shaderOpacity:1}}}},p=`
#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846
`,d=`
vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}
`,u=`
  color += 1. / 256. * (fract(sin(dot(.014 * gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453123) - .5);
`,g=`
vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
    -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy),
      dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}
`,h=`#version 300 es
precision mediump float;

uniform sampler2D u_image;
uniform float u_imageAspectRatio;

uniform vec2 u_resolution;
uniform float u_time;

uniform vec4 u_colorBack;
uniform vec4 u_colorTint;

uniform float u_softness;
uniform float u_repetition;
uniform float u_shiftRed;
uniform float u_shiftBlue;
uniform float u_distortion;
uniform float u_contour;
uniform float u_angle;

uniform float u_shape;
uniform bool u_isImage;

in vec2 v_objectUV;
in vec2 v_responsiveUV;
in vec2 v_responsiveBoxGivenSize;
in vec2 v_imageUV;

out vec4 fragColor;

${p}
${d}
${g}

float getColorChanges(float c1, float c2, float stripe_p, vec3 w, float blur, float bump, float tint) {

  float ch = mix(c2, c1, smoothstep(.0, 2. * blur, stripe_p));

  float border = w[0];
  ch = mix(ch, c2, smoothstep(border, border + 2. * blur, stripe_p));

  if (u_isImage == true) {
    bump = smoothstep(.2, .8, bump);
  }
  border = w[0] + .4 * (1. - bump) * w[1];
  ch = mix(ch, c1, smoothstep(border, border + 2. * blur, stripe_p));

  border = w[0] + .5 * (1. - bump) * w[1];
  ch = mix(ch, c2, smoothstep(border, border + 2. * blur, stripe_p));

  border = w[0] + w[1];
  ch = mix(ch, c1, smoothstep(border, border + 2. * blur, stripe_p));

  float gradient_t = (stripe_p - w[0] - w[1]) / w[2];
  float gradient = mix(c1, c2, smoothstep(0., 1., gradient_t));
  ch = mix(ch, gradient, smoothstep(border, border + .5 * blur, stripe_p));

  // Tint color is applied with color burn blending
  ch = mix(ch, 1. - min(1., (1. - ch) / max(tint, 0.0001)), u_colorTint.a);
  return ch;
}

float getImgFrame(vec2 uv, float th) {
  float frame = 1.;
  frame *= smoothstep(0., th, uv.y);
  frame *= 1.0 - smoothstep(1. - th, 1., uv.y);
  frame *= smoothstep(0., th, uv.x);
  frame *= 1.0 - smoothstep(1. - th, 1., uv.x);
  return frame;
}

float blurEdge3x3(sampler2D tex, vec2 uv, vec2 dudx, vec2 dudy, float radius, float centerSample) {
  vec2 texel = 1.0 / vec2(textureSize(tex, 0));
  vec2 r = radius * texel;

  float w1 = 1.0, w2 = 2.0, w4 = 4.0;
  float norm = 16.0;
  float sum = w4 * centerSample;

  sum += w2 * textureGrad(tex, uv + vec2(0.0, -r.y), dudx, dudy).r;
  sum += w2 * textureGrad(tex, uv + vec2(0.0, r.y), dudx, dudy).r;
  sum += w2 * textureGrad(tex, uv + vec2(-r.x, 0.0), dudx, dudy).r;
  sum += w2 * textureGrad(tex, uv + vec2(r.x, 0.0), dudx, dudy).r;

  sum += w1 * textureGrad(tex, uv + vec2(-r.x, -r.y), dudx, dudy).r;
  sum += w1 * textureGrad(tex, uv + vec2(r.x, -r.y), dudx, dudy).r;
  sum += w1 * textureGrad(tex, uv + vec2(-r.x, r.y), dudx, dudy).r;
  sum += w1 * textureGrad(tex, uv + vec2(r.x, r.y), dudx, dudy).r;

  return sum / norm;
}

float lst(float edge0, float edge1, float x) {
  return clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
}

void main() {

  const float firstFrameOffset = 2.8;
  float t = .3 * (u_time + firstFrameOffset);

  vec2 uv = v_imageUV;
  vec2 dudx = dFdx(v_imageUV);
  vec2 dudy = dFdy(v_imageUV);
  vec4 img = textureGrad(u_image, uv, dudx, dudy);

  if (u_isImage == false) {
    uv = v_objectUV + .5;
    uv.y = 1. - uv.y;
  }

  float cycleWidth = u_repetition;
  float edge = 0.;
  float contOffset = 1.;

  vec2 rotatedUV = uv - vec2(.5);
  float angle = (-u_angle + 70.) * PI / 180.;
  float cosA = cos(angle);
  float sinA = sin(angle);
  rotatedUV = vec2(
  rotatedUV.x * cosA - rotatedUV.y * sinA,
  rotatedUV.x * sinA + rotatedUV.y * cosA
  ) + vec2(.5);

  if (u_isImage == true) {
    float edgeRaw = img.r;
    edge = blurEdge3x3(u_image, uv, dudx, dudy, 6., edgeRaw);
    edge = pow(edge, 1.6);
    edge *= mix(0.0, 1.0, smoothstep(0.0, 0.4, u_contour));
  } else {
    if (u_shape < 1.) {
      // full-fill on canvas
      vec2 borderUV = v_responsiveUV + .5;
      float ratio = v_responsiveBoxGivenSize.x / v_responsiveBoxGivenSize.y;
      vec2 mask = min(borderUV, 1. - borderUV);
      vec2 pixel_thickness = min(250. / v_responsiveBoxGivenSize, vec2(.5));
      float maskX = smoothstep(0.0, pixel_thickness.x, mask.x);
      float maskY = smoothstep(0.0, pixel_thickness.y, mask.y);
      maskX = pow(maskX, .25);
      maskY = pow(maskY, .25);
      edge = clamp(1. - maskX * maskY, 0., 1.);

      uv = v_responsiveUV;
      if (ratio > 1.) {
        uv.y /= ratio;
      } else {
        uv.x *= ratio;
      }
      uv += .5;
      uv.y = 1. - uv.y;

      cycleWidth *= 2.;
      contOffset = 1.5;

    } else if (u_shape < 2.) {
      // circle
      vec2 shapeUV = uv - .5;
      shapeUV *= .67;
      edge = pow(clamp(3. * length(shapeUV), 0., 1.), 18.);
    } else if (u_shape < 3.) {
      // daisy
      vec2 shapeUV = uv - .5;
      shapeUV *= 1.68;

      float r = length(shapeUV) * 2.;
      float a = atan(shapeUV.y, shapeUV.x) + .2;
      r *= (1. + .05 * sin(3. * a + 2. * t));
      float f = abs(cos(a * 3.));
      edge = smoothstep(f, f + .7, r);
      edge *= edge;

      uv *= .8;
      cycleWidth *= 1.6;

    } else if (u_shape < 4.) {
      // diamond
      vec2 shapeUV = uv - .5;
      shapeUV = rotate(shapeUV, .25 * PI);
      shapeUV *= 1.42;
      shapeUV += .5;
      vec2 mask = min(shapeUV, 1. - shapeUV);
      vec2 pixel_thickness = vec2(.15);
      float maskX = smoothstep(0.0, pixel_thickness.x, mask.x);
      float maskY = smoothstep(0.0, pixel_thickness.y, mask.y);
      maskX = pow(maskX, .25);
      maskY = pow(maskY, .25);
      edge = clamp(1. - maskX * maskY, 0., 1.);
    } else if (u_shape < 5.) {
      // metaballs
      vec2 shapeUV = uv - .5;
      shapeUV *= 1.3;
      edge = 0.;
      for (int i = 0; i < 5; i++) {
        float fi = float(i);
        float speed = 1.5 + 2./3. * sin(fi * 12.345);
        float angle = -fi * 1.5;
        vec2 dir1 = vec2(cos(angle), sin(angle));
        vec2 dir2 = vec2(cos(angle + 1.57), sin(angle + 1.));
        vec2 traj = .4 * (dir1 * sin(t * speed + fi * 1.23) + dir2 * cos(t * (speed * 0.7) + fi * 2.17));
        float d = length(shapeUV + traj);
        edge += pow(1.0 - clamp(d, 0.0, 1.0), 4.0);
      }
      edge = 1. - smoothstep(.65, .9, edge);
      edge = pow(edge, 4.);
    }

    edge = mix(smoothstep(.9 - 2. * fwidth(edge), .9, edge), edge, smoothstep(0.0, 0.4, u_contour));

  }

  float opacity = 0.;
  if (u_isImage == true) {
    opacity = img.g;
    float frame = getImgFrame(v_imageUV, 0.);
    opacity *= frame;
  } else {
    opacity = 1. - smoothstep(.9 - 2. * fwidth(edge), .9, edge);
    if (u_shape < 2.) {
      edge = 1.2 * edge;
    } else if (u_shape < 5.) {
      edge = 1.8 * pow(edge, 1.5);
    }
  }

  float diagBLtoTR = rotatedUV.x - rotatedUV.y;
  float diagTLtoBR = rotatedUV.x + rotatedUV.y;

  vec3 color = vec3(0.);
  vec3 color1 = vec3(.98, 0.98, 1.);
  vec3 color2 = vec3(.1, .1, .1 + .1 * smoothstep(.7, 1.3, diagTLtoBR));

  vec2 grad_uv = uv - .5;

  float dist = length(grad_uv + vec2(0., .2 * diagBLtoTR));
  grad_uv = rotate(grad_uv, (.25 - .2 * diagBLtoTR) * PI);
  float direction = grad_uv.x;

  float bump = pow(1.8 * dist, 1.2);
  bump = 1. - bump;
  bump *= pow(uv.y, .3);


  float thin_strip_1_ratio = .12 / cycleWidth * (1. - .4 * bump);
  float thin_strip_2_ratio = .07 / cycleWidth * (1. + .4 * bump);
  float wide_strip_ratio = (1. - thin_strip_1_ratio - thin_strip_2_ratio);

  float thin_strip_1_width = cycleWidth * thin_strip_1_ratio;
  float thin_strip_2_width = cycleWidth * thin_strip_2_ratio;

  float noise = snoise(uv - t);

  edge += (1. - edge) * u_distortion * noise;

  direction += diagBLtoTR;
  float contour = 0.;
  direction -= 2. * noise * diagBLtoTR * (smoothstep(0., 1., edge) * (1.0 - smoothstep(0., 1., edge)));
  direction *= mix(1., 1. - edge, smoothstep(.5, 1., u_contour));
  direction -= 1.7 * edge * smoothstep(.5, 1., u_contour);
  direction += .2 * pow(u_contour, 4.) * (1.0 - smoothstep(0., 1., edge));

  bump *= clamp(pow(uv.y, .1), .3, 1.);
  direction *= (.1 + (1.1 - edge) * bump);

  direction *= (.4 + .6 * (1.0 - smoothstep(.5, 1., edge)));
  direction += .18 * (smoothstep(.1, .2, uv.y) * (1.0 - smoothstep(.2, .4, uv.y)));
  direction += .03 * (smoothstep(.1, .2, 1. - uv.y) * (1.0 - smoothstep(.2, .4, 1. - uv.y)));

  direction *= (.5 + .5 * pow(uv.y, 2.));
  direction *= cycleWidth;
  direction -= t;


  float colorDispersion = (1. - bump);
  colorDispersion = clamp(colorDispersion, 0., 1.);
  float dispersionRed = colorDispersion;
  dispersionRed += .03 * bump * noise;
  dispersionRed += 5. * (smoothstep(-.1, .2, uv.y) * (1.0 - smoothstep(.1, .5, uv.y))) * (smoothstep(.4, .6, bump) * (1.0 - smoothstep(.4, 1., bump)));
  dispersionRed -= diagBLtoTR;

  float dispersionBlue = colorDispersion;
  dispersionBlue *= 1.3;
  dispersionBlue += (smoothstep(0., .4, uv.y) * (1.0 - smoothstep(.1, .8, uv.y))) * (smoothstep(.4, .6, bump) * (1.0 - smoothstep(.4, .8, bump)));
  dispersionBlue -= .2 * edge;

  dispersionRed *= (u_shiftRed / 20.);
  dispersionBlue *= (u_shiftBlue / 20.);

  float blur = 0.;
  float rExtraBlur = 0.;
  float gExtraBlur = 0.;
  if (u_isImage == true) {
    float softness = 0.05 * u_softness;
    blur = softness + .5 * smoothstep(1., 10., u_repetition) * smoothstep(.0, 1., edge);
    float smallCanvasT = 1.0 - smoothstep(100., 500., min(u_resolution.x, u_resolution.y));
    blur += smallCanvasT * smoothstep(.0, 1., edge);
    rExtraBlur = softness * (0.05 + .1 * (u_shiftRed / 20.) * bump);
    gExtraBlur = softness * 0.05 / max(0.001, abs(1. - diagBLtoTR));
  } else {
    blur = u_softness / 15. + .3 * contour;
  }

  vec3 w = vec3(thin_strip_1_width, thin_strip_2_width, wide_strip_ratio);
  w[1] -= .02 * smoothstep(.0, 1., edge + bump);
  float stripe_r = fract(direction + dispersionRed);
  float r = getColorChanges(color1.r, color2.r, stripe_r, w, blur + fwidth(stripe_r) + rExtraBlur, bump, u_colorTint.r);
  float stripe_g = fract(direction);
  float g = getColorChanges(color1.g, color2.g, stripe_g, w, blur + fwidth(stripe_g) + gExtraBlur, bump, u_colorTint.g);
  float stripe_b = fract(direction - dispersionBlue);
  float b = getColorChanges(color1.b, color2.b, stripe_b, w, blur + fwidth(stripe_b), bump, u_colorTint.b);

  color = vec3(r, g, b);
  color *= opacity;

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  color = color + bgColor * (1. - opacity);
  opacity = opacity + u_colorBack.a * (1. - opacity);

  ${u}

  fragColor = vec4(color, opacity);
}
`,b=`#version 300 es
precision mediump float;

layout(location = 0) in vec4 a_position;

uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_imageAspectRatio;
uniform float u_originX;
uniform float u_originY;
uniform float u_worldWidth;
uniform float u_worldHeight;
uniform float u_fit;
uniform float u_scale;
uniform float u_rotation;
uniform float u_offsetX;
uniform float u_offsetY;

out vec2 v_objectUV;
out vec2 v_objectBoxSize;
out vec2 v_responsiveUV;
out vec2 v_responsiveBoxGivenSize;
out vec2 v_patternUV;
out vec2 v_patternBoxSize;
out vec2 v_imageUV;

vec3 getBoxSize(float boxRatio, vec2 givenBoxSize) {
  vec2 box = vec2(0.);
  // fit = none
  box.x = boxRatio * min(givenBoxSize.x / boxRatio, givenBoxSize.y);
  float noFitBoxWidth = box.x;
  if (u_fit == 1.) { // fit = contain
    box.x = boxRatio * min(u_resolution.x / boxRatio, u_resolution.y);
  } else if (u_fit == 2.) { // fit = cover
    box.x = boxRatio * max(u_resolution.x / boxRatio, u_resolution.y);
  }
  box.y = box.x / boxRatio;
  return vec3(box, noFitBoxWidth);
}

void main() {
  gl_Position = a_position;

  vec2 uv = gl_Position.xy * .5;
  vec2 boxOrigin = vec2(.5 - u_originX, u_originY - .5);
  vec2 givenBoxSize = vec2(u_worldWidth, u_worldHeight);
  givenBoxSize = max(givenBoxSize, vec2(1.)) * u_pixelRatio;
  float r = u_rotation * 3.14159265358979323846 / 180.;
  mat2 graphicRotation = mat2(cos(r), sin(r), -sin(r), cos(r));
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);


  // ===================================================

  float fixedRatio = 1.;
  vec2 fixedRatioBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );

  v_objectBoxSize = getBoxSize(fixedRatio, fixedRatioBoxGivenSize).xy;
  vec2 objectWorldScale = u_resolution.xy / v_objectBoxSize;

  v_objectUV = uv;
  v_objectUV *= objectWorldScale;
  v_objectUV += boxOrigin * (objectWorldScale - 1.);
  v_objectUV += graphicOffset;
  v_objectUV /= u_scale;
  v_objectUV = graphicRotation * v_objectUV;

  // ===================================================

  v_responsiveBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  float responsiveRatio = v_responsiveBoxGivenSize.x / v_responsiveBoxGivenSize.y;
  vec2 responsiveBoxSize = getBoxSize(responsiveRatio, v_responsiveBoxGivenSize).xy;
  vec2 responsiveBoxScale = u_resolution.xy / responsiveBoxSize;

  v_responsiveUV = uv;
  v_responsiveUV *= responsiveBoxScale;
  v_responsiveUV += boxOrigin * (responsiveBoxScale - 1.);
  v_responsiveUV += graphicOffset;
  v_responsiveUV /= u_scale;
  v_responsiveUV.x *= responsiveRatio;
  v_responsiveUV = graphicRotation * v_responsiveUV;
  v_responsiveUV.x /= responsiveRatio;

  // ===================================================

  float patternBoxRatio = givenBoxSize.x / givenBoxSize.y;
  vec2 patternBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  patternBoxRatio = patternBoxGivenSize.x / patternBoxGivenSize.y;

  vec3 boxSizeData = getBoxSize(patternBoxRatio, patternBoxGivenSize);
  v_patternBoxSize = boxSizeData.xy;
  float patternBoxNoFitBoxWidth = boxSizeData.z;
  vec2 patternBoxScale = u_resolution.xy / v_patternBoxSize;

  v_patternUV = uv;
  v_patternUV += graphicOffset / patternBoxScale;
  v_patternUV += boxOrigin;
  v_patternUV -= boxOrigin / patternBoxScale;
  v_patternUV *= u_resolution.xy;
  v_patternUV /= u_pixelRatio;
  if (u_fit > 0.) {
    v_patternUV *= (patternBoxNoFitBoxWidth / v_patternBoxSize.x);
  }
  v_patternUV /= u_scale;
  v_patternUV = graphicRotation * v_patternUV;
  v_patternUV += boxOrigin / patternBoxScale;
  v_patternUV -= boxOrigin;
  // x100 is a default multiplier between vertex and fragmant shaders
  // we use it to avoid UV presision issues
  v_patternUV *= .01;

  // ===================================================

  vec2 imageBoxSize;
  if (u_fit == 1.) { // contain
    imageBoxSize.x = min(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else if (u_fit == 2.) { // cover
    imageBoxSize.x = max(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else {
    imageBoxSize.x = min(10.0, 10.0 / u_imageAspectRatio * u_imageAspectRatio);
  }
  imageBoxSize.y = imageBoxSize.x / u_imageAspectRatio;
  vec2 imageBoxScale = u_resolution.xy / imageBoxSize;

  v_imageUV = uv;
  v_imageUV *= imageBoxScale;
  v_imageUV += boxOrigin * (imageBoxScale - 1.);
  v_imageUV += graphicOffset;
  v_imageUV /= u_scale;
  v_imageUV.x *= u_imageAspectRatio;
  v_imageUV = graphicRotation * v_imageUV;
  v_imageUV.x /= u_imageAspectRatio;

  v_imageUV += .5;
  v_imageUV.y = 1. - v_imageUV.y;
}`;function m(e,t,r){let o=e.createShader(t);if(!o)throw Error("metal-fx: gl.createShader returned null");if(e.shaderSource(o,r),e.compileShader(o),!e.getShaderParameter(o,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(o);throw e.deleteShader(o),Error(`metal-fx: shader compile failed: ${t??"(no info log)"}`)}return o}let x=null,v=null,y=null,w=["u_resolution","u_time","u_pixelRatio","u_colorBack","u_colorTint","u_repetition","u_softness","u_shiftRed","u_shiftBlue","u_distortion","u_contour","u_angle","u_shape","u_isImage","u_image","u_originX","u_originY","u_worldWidth","u_worldHeight","u_fit","u_scale","u_rotation","u_offsetX","u_offsetY","u_imageAspectRatio"];function z(e){e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA);let t=m(e,e.VERTEX_SHADER,b),r=m(e,e.FRAGMENT_SHADER,h),o=function(e,t,r){let o=e.createProgram();if(!o)throw Error("metal-fx: gl.createProgram returned null");if(e.attachShader(o,t),e.attachShader(o,r),e.linkProgram(o),!e.getProgramParameter(o,e.LINK_STATUS)){let t=e.getProgramInfoLog(o);throw e.deleteProgram(o),Error(`metal-fx: program link failed: ${t??"(no info log)"}`)}return o}(e,t,r);e.useProgram(o);let a=e.createBuffer();if(!a)throw Error("metal-fx: gl.createBuffer returned null");e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW);let i=e.getAttribLocation(o,"a_position");e.enableVertexAttribArray(i),e.vertexAttribPointer(i,2,e.FLOAT,!1,0,0);let n={};for(let t of w)n[t]=e.getUniformLocation(o,t);let s=e.createTexture();return s&&(e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,s),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,255])),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),n.u_image&&e.uniform1i(n.u_image,0)),{program:o,buffer:a,uniforms:n,dummyTexture:s}}function $(){let e,t;if(x)return x;let r=Math.min(2,"u">typeof window&&window.devicePixelRatio||1),o=Math.round(96*r),a="u">typeof OffscreenCanvas;if(a)t=(e=new OffscreenCanvas(o,o)).getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1});else{let r=document.createElement("canvas");r.width=o,r.height=o,t=r.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,preserveDrawingBuffer:!0}),e=r}if(!t)throw Error("metal-fx: WebGL2 not supported");let{program:i,buffer:n,uniforms:s,dummyTexture:l}=z(t);return e.addEventListener("webglcontextlost",e=>{e.preventDefault(),x&&(x.contextLost=!0)},!1),e.addEventListener("webglcontextrestored",()=>{if(!x)return;let e=z(x.gl);x.program=e.program,x.buffer=e.buffer,x.uniforms=e.uniforms,x.dummyTexture=e.dummyTexture,x.presetDirty=!0,x.contextLost=!1,null==y||y()},!1),x={glCanvas:e,gl:t,program:i,buffer:n,uniforms:s,dummyTexture:l,preset:f.chromatic.modes.dark,presetDirty:!0,contextLost:!1,useOffscreen:a,frameBitmap:null,startMs:performance.now(),pausedMs:0,pausedAtMs:null,rafId:0,dpr:r,instances:new Set,frameCount:0,glowQueue:[],glowIdx:0,glowSkip:0,glowPixels:new Uint8Array(o*o*4),glowPixelsW:o,glowPixelsH:o}}let k=0,M={bx:0,by:0};function _(e,t,r){if(!x)return M.bx=0,M.by=0,M;let{glCanvas:o}=x,a=o.width,i=o.height,n=e.dpr,s=e.cssWidth*n,l=e.cssHeight*n,c=a/(140*n)*s/e.shaderScale,f=i/(40*n)*l/e.shaderScale;c>a&&(c=a),f>i&&(f=i);let p=(i-f)/2,d=(a-c)/2+t/e.cssWidth*c,u=p+r/e.cssHeight*f;return M.bx=Math.round(d),M.by=Math.round(i-1-u),M}let W={r:0,g:0,b:0,lum:0,count:0};function S(e,t,r,o,a,i){let n=Math.max(1,0|i),s=Math.max(0,o-n),l=Math.min(t,o+n+1),c=Math.max(0,a-n),f=Math.min(r,a+n+1);W.r=0,W.g=0,W.b=0,W.lum=0,W.count=0;for(let r=c;r<f;r++){let o=r*t;for(let t=s;t<l;t++){let r=(o+t)*4;W.r+=e[r],W.g+=e[r+1],W.b+=e[r+2],W.lum+=(.2126*e[r]+.7152*e[r+1]+.0722*e[r+2])/255,W.count++}}return W}let R={r:255,g:255,b:255};function C(e,t,r,o){if(!x)return 0;let a=_(e,t,r),i=S(x.glowPixels,x.glowPixelsW,x.glowPixelsH,a.bx,a.by,o);return i.count>0?i.lum/i.count:0}function H(e,t,r,o){if(!x)return R.r=255,R.g=255,R.b=255,R;let a=_(e,t,r),i=S(x.glowPixels,x.glowPixelsW,x.glowPixelsH,a.bx,a.by,o);return 0===i.count?(R.r=255,R.g=255,R.b=255):(R.r=i.r/i.count,R.g=i.g/i.count,R.b=i.b/i.count),R}let X={x:0,y:0};function T(e=512){return{xy:new Float32Array(2*e),n:0}}function O(e,t,r,o,a,i,n=T()){a=Math.max(0,Math.min(a,Math.min(r,o)/2));let s=60+Math.ceil(2*(r+o)/1.5)+8;n.xy.length<2*s&&(n.xy=new Float32Array(2*s));let l=n.xy,c=0,f=(e,t)=>{i?(i(e,t,X),l[2*c]=X.x,l[2*c+1]=X.y):(l[2*c]=e,l[2*c+1]=t),c++},p=(e,t,r,o)=>{let a=Math.max(1,Math.ceil(Math.hypot(r-e,o-t)/1.5));for(let i=0;i<a;i++){let n=i/a;f(e+(r-e)*n,t+(o-t)*n)}},d=(e,t,r,o)=>{for(let i=0;i<=14;i++){let n=r+i/14*(o-r);f(e+a*Math.cos(n),t+a*Math.sin(n))}};return p(e+a,t,e+r-a,t),d(e+r-a,t+a,-Math.PI/2,0),p(e+r,t+a,e+r,t+o-a),d(e+r-a,t+o-a,0,Math.PI/2),p(e+r-a,t+o,e+a,t+o),d(e+a,t+o-a,Math.PI/2,Math.PI),p(e,t+o-a,e,t+a),d(e+a,t+a,Math.PI,1.5*Math.PI),n.n=c,n}function Y(e,t){let r=!1;void 0!==t.mask&&(e.mask=t.mask),void 0!==t.cssWidth&&t.cssWidth!==e.cssWidth&&(e.cssWidth=t.cssWidth,r=!0),void 0!==t.cssHeight&&t.cssHeight!==e.cssHeight&&(e.cssHeight=t.cssHeight,r=!0),void 0!==t.cornerRadius&&(e.cornerRadius=t.cornerRadius),void 0!==t.scale&&(e.scale=t.scale),void 0!==t.kind&&t.kind!==e.kind&&(e.kind=t.kind,void 0===t.shaderScale&&(e.shaderScale=("circle"===t.kind?1.3:1.6)*e.scale),void 0===t.ringCssPx&&(e.ringCssPx=("circle"===t.kind?2:1)*e.scale)),void 0!==t.shaderScale&&(e.shaderScale=t.shaderScale),void 0!==t.ringCssPx&&(e.ringCssPx=t.ringCssPx),void 0!==t.opacityMul&&(e.opacityMul=t.opacityMul),void 0!==t.glowGain&&(e.glowGain=t.glowGain),void 0!==t.paused&&t.paused!==e.paused&&(e.paused=t.paused,t.paused?I(e):e.frozen=null,t.paused||!x||0!==x.rafId||null!==x.pausedAtMs||x.contextLost||D()),r&&A(e)}y=()=>{x&&x.instances.size>0&&null===x.pausedAtMs&&D()},"u">typeof document&&document.addEventListener("visibilitychange",()=>{!x||null!==x.pausedAtMs||x.contextLost||(document.hidden?V():x.instances.size>0&&D())});let E=null;function F(e,t){E&&x&&e.visible&&!e.paused&&x.glowQueue.includes(e)&&(e.glowFast=!!E(e,t))}function A(e){e.dpr="u">typeof window&&window.devicePixelRatio||1;let t=e.overscan,r=Math.max(1,Math.round((e.cssWidth+2*t)*e.dpr)),o=Math.max(1,Math.round((e.cssHeight+2*t)*e.dpr));e.canvas.width!==r&&(e.canvas.width=r),e.canvas.height!==o&&(e.canvas.height=o);let a=e.canvas.style;t>0?(a.left=`${-t}px`,a.top=`${-t}px`,a.width=`calc(100% + ${2*t}px)`,a.height=`calc(100% + ${2*t}px)`,a.borderRadius="0"):""!==a.left&&(a.left="",a.top="",a.width="100%",a.height="100%",a.borderRadius="")}let P=T();function B(e,t,r,o,a,i,n,s){let{xy:l,n:c}=O(t,r,o,a,i,n,P);e.beginPath();for(let t=0;t<c;t++)0===t?e.moveTo(l[0]*s,l[1]*s):e.lineTo(l[2*t]*s,l[2*t+1]*s);e.closePath()}function I(e){if(!x)return null;let t=x.frameBitmap??x.glCanvas,r=x.glCanvas.width,o=x.glCanvas.height;if(r<1||o<1)return null;let a=e.frozen;a||(e.frozen=a=document.createElement("canvas")),(a.width!==r||a.height!==o)&&(a.width=r,a.height=o);let i=a.getContext("2d");return i?(i.clearRect(0,0,r,o),i.drawImage(t,0,0),a):(e.frozen=null,null)}function L(e){var t,r;if(!x)return;let o=(e.paused?e.frozen??I(e):null)??x.frameBitmap??x.glCanvas,a=e.dpr,i=e.canvas.width,n=e.canvas.height;if(i<1||n<1)return;let s=Math.max(1,Math.round(e.cssWidth*a)),l=Math.max(1,Math.round(e.cssHeight*a)),c=e.overscan*a,f=o.width,p=o.height,d=140*a,u=40*a,g=f/d*s/e.shaderScale,h=p/u*l/e.shaderScale;g>f&&(g=f),h>p&&(h=p);let b=Math.max(0,(f-g)/2),m=Math.max(0,(p-h)/2),v=e.opacityMul*x.preset.shaderOpacity,y=e.ctx;y.clearRect(0,0,i,n);let w=e.deform;if(e.mask){if(v<1&&(y.globalAlpha=v),y.drawImage(o,b,m,g,h,0,0,i,n),v<1&&(y.globalAlpha=1),e.wantRaw){let t=e.rawCanvas;t||(e.rawCanvas=t=document.createElement("canvas")),(t.width!==i||t.height!==n)&&(t.width=i,t.height=n);let r=t.getContext("2d");r&&(r.clearRect(0,0,i,n),r.drawImage(e.canvas,0,0))}y.save(),y.globalCompositeOperation="destination-in",y.fillStyle="#000",e.mask(y,i,n,a),y.restore(),y.globalCompositeOperation="source-over"}else if(w){let t=e.cssWidth,r=e.cssHeight,d=e.cornerRadius,u=e.ringCssPx,b=e.deformLayers;y.save(),y.translate(c,c);let m=s/g,x=l/h,z=Math.min(f,g*(s+2*c)/s),$=Math.min(p,h*(l+2*c)/l),k=Math.max(0,(f-z)/2),M=Math.max(0,(p-$)/2),_=z*m,W=$*x;if(v<1&&(y.globalAlpha=v),y.drawImage(o,k,M,z,$,s/2-_/2,l/2-W/2,_,W),v<1&&(y.globalAlpha=1),y.globalCompositeOperation="destination-in",B(y,0,0,t,r,d,w,a),y.fillStyle="#000",y.fill(),y.globalCompositeOperation="destination-out",B(y,u,u,t-2*u,r-2*u,Math.max(0,d-u),w,a),y.fill(),e.wantRing){let f=e.ringCanvas;f||(e.ringCanvas=f=document.createElement("canvas")),(f.width!==i||f.height!==n)&&(f.width=i,f.height=n);let p=f.getContext("2d");p&&(p.setTransform(1,0,0,1,0,0),p.globalCompositeOperation="source-over",p.clearRect(0,0,i,n),p.translate(c,c),v<1&&(p.globalAlpha=v),p.drawImage(o,k,M,z,$,s/2-_/2,l/2-W/2,_,W),p.globalAlpha=1,p.globalCompositeOperation="destination-out",B(p,u,u,t-2*u,r-2*u,Math.max(0,d-u),w,a),p.fillStyle="#000",p.fill(),p.globalCompositeOperation="source-over",p.setTransform(1,0,0,1,0,0))}if(null!=b&&b.hairline){let e=b.hairline;y.globalCompositeOperation="destination-over",B(y,e.inset,e.inset,t-2*e.inset,r-2*e.inset,Math.max(0,d-e.inset),w,a),y.lineWidth=e.width*a,y.strokeStyle=e.color,y.stroke()}if(null!=b&&b.fill&&(y.globalCompositeOperation="destination-over",B(y,0,0,t,r,d,w,a),y.fillStyle=b.fill,y.fill()),null!=b&&b.rim){let e=b.rim;y.globalCompositeOperation="source-over",y.save(),B(y,0,0,t,r,d,w,a),y.clip();let o=e.inset+e.width/2;B(y,o,o,t-2*o,r-2*o,Math.max(0,d-o),w,a),y.lineWidth=e.width*a,y.strokeStyle=e.color,y.stroke(),y.restore()}y.restore(),y.globalCompositeOperation="source-over"}else v<1&&(y.globalAlpha=v),y.drawImage(o,b,m,g,h,0,0,i,n),v<1&&(y.globalAlpha=1),function(e){let{ctx:t,dpr:r,canvas:o}=e,a=e.ringCssPx*r,i=o.width,n=o.height,s=Math.max(0,(e.cornerRadius-e.ringCssPx)*r);t.save(),t.globalCompositeOperation="destination-out",t.fillStyle="#000",t.beginPath(),t.roundRect(a,a,i-2*a,n-2*a,s),t.fill(),t.restore()}(e);if(null==(t=e.onComposite)||t.call(e),e.onFirstCopy){let t=e.onFirstCopy;e.onFirstCopy=void 0,t()}null==(r=e.onAfterFrame)||r.call(e)}let U=0;function N(e){var t;if(!x)return;if(x.contextLost){x.rafId=0;return}let r=!1;for(let e of x.instances)if(e.visible&&(!e.paused||!e.everCopied)){r=!0;break}if(!r){x.rafId=0;return}if(x.rafId=requestAnimationFrame(N),e-U<66){if(E)for(let t of x.glowQueue)t.glowFast&&t.visible&&!t.paused&&(t.glowFast=!!E(t,e));return}for(let r of(U=e,function(e){if(!x)return;let{gl:t,uniforms:r,preset:o,glCanvas:a}=x,n=(e-x.startMs-x.pausedMs)/1e3*o.speed;t.viewport(0,0,a.width,a.height),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),x.presetDirty&&function(){if(!x)return;let{gl:e,uniforms:t,preset:r,glCanvas:o,dpr:a}=x;t.u_resolution&&e.uniform2f(t.u_resolution,o.width,o.height),t.u_pixelRatio&&e.uniform1f(t.u_pixelRatio,a),t.u_colorBack&&e.uniform4fv(t.u_colorBack,i(r.colorBack)),t.u_colorTint&&e.uniform4fv(t.u_colorTint,i(r.colorTint)),t.u_repetition&&e.uniform1f(t.u_repetition,r.repetition),t.u_softness&&e.uniform1f(t.u_softness,r.softness),t.u_shiftRed&&e.uniform1f(t.u_shiftRed,r.shiftRed),t.u_shiftBlue&&e.uniform1f(t.u_shiftBlue,r.shiftBlue),t.u_distortion&&e.uniform1f(t.u_distortion,r.distortion),t.u_contour&&e.uniform1f(t.u_contour,r.contour),t.u_angle&&e.uniform1f(t.u_angle,r.angle),t.u_shape&&e.uniform1f(t.u_shape,r.shape),t.u_isImage&&e.uniform1i(t.u_isImage,0),t.u_imageAspectRatio&&e.uniform1f(t.u_imageAspectRatio,1),t.u_originX&&e.uniform1f(t.u_originX,r.originX),t.u_originY&&e.uniform1f(t.u_originY,r.originY),t.u_worldWidth&&e.uniform1f(t.u_worldWidth,r.worldWidth),t.u_worldHeight&&e.uniform1f(t.u_worldHeight,r.worldHeight),t.u_fit&&e.uniform1f(t.u_fit,r.fit),t.u_scale&&e.uniform1f(t.u_scale,r.scale),t.u_rotation&&e.uniform1f(t.u_rotation,r.rotation),t.u_offsetX&&e.uniform1f(t.u_offsetX,r.offsetX),t.u_offsetY&&e.uniform1f(t.u_offsetY,r.offsetY),x.presetDirty=!1}(),r.u_time&&t.uniform1f(r.u_time,n),t.drawArrays(t.TRIANGLES,0,6),x.frameCount++}(e),function(){if(!x)return;let e=performance.now();if(e-k<1500)return;k=e;let{gl:t,glCanvas:r}=x,o=r.width,a=r.height;(x.glowPixelsW!==o||x.glowPixelsH!==a)&&(x.glowPixelsW=o,x.glowPixelsH=a,x.glowPixels=new Uint8Array(o*a*4)),t.readPixels(0,0,o,a,t.RGBA,t.UNSIGNED_BYTE,x.glowPixels)}(),x.useOffscreen&&(null==(t=x.frameBitmap)||t.close(),x.frameBitmap=x.glCanvas.transferToImageBitmap()),x.instances))r.visible&&(r.paused&&r.everCopied||(L(r),r.everCopied=!0));if(E&&x.glowQueue.length>0&&++x.glowSkip%1==0)for(let t of x.glowQueue)t.visible&&!t.paused&&(t.glowFast=!!E(t,e))}function D(){x&&0===x.rafId&&(x.rafId=requestAnimationFrame(N))}function V(){x&&(0!==x.rafId&&cancelAnimationFrame(x.rafId),x.rafId=0)}let G={linear:e=>e,smoothstep:e=>e*e*(3-2*e)};function q(e,t,r,o=G.linear){return{from:e,to:t,dur:r,ease:o,startMs:-1,val:e,done:!1}}function j(e,t){e.startMs=t,e.val=e.from,e.done=!1}function Q(e,t){if(e.done||e.startMs<0)return e.val;let r=Math.min(1,(t-e.startMs)/e.dur);return e.val=e.from+(e.to-e.from)*e.ease(r),r>=1&&(e.done=!0),e.val}let K={...Object.freeze({haloOpMul:2,extraIntensity:3.51,peakOp:.85,baseOp:.34,inset:1.5,extraOutward:1,wanderRange:15,wanderLerp:.0075,fadeRate:.00875,lumLo:.08,lumHi:.32,minDwellMs:1500,relocFadeMs:300,relocFadeOutMs:450,pointGain:2.5,haloHalfLen:7.8,extraHalfLen:9.13952/3,haloStrokeXl:26.4,haloStrokeLg:15.6,haloStrokeMd:7.2,haloStrokeSm:3,haloBlurXl:8.4,haloBlurLg:4.8,haloBlurMd:2.1,haloBlurSm:.9,haloOpXl:.385,haloOpLg:.595,haloOpMd:.7,haloOpSm:.7,extraStrokeOuter:4/3,extraStrokeCore:2/3,extraBlurOuter:2/3,extraBlurCore:.45,extraFadeR:13/3,extraOpOuter:.85})},Z=new Set,J={...Object.freeze({enabled:!0,reach:56,fadeMs:200,cursor:!0,cursorDistance:186,cursorStrength:3.35,cursorDiffuse:1.4,cursorFalloff:37,cursorDepth:.4,cursorEdge:0,cursorReach:11.5,cursorBlur:.5,cursorZoom:3,spill:!1,spillRadius:48,spillStrength:.55,spillOffset:.35,spillLumGain:.7,spillSaturation:1.3,spillInside:.5,spillBlur:0,catchLight:!1,catchFollow:.25,catchGain:1})},ee=!1,et=0,er=0,eo=0,ea=!1,ei=0,en=0,es=NaN,el=NaN,ec=0,ef=0,ep=0,ed=0,eu=null,eg={d:0,nx:0,ny:0,k:1,left:0,top:0},eh={x:0,y:0},eb={r:255,g:255,b:255},em=null,ex="",ev=-1,ey=-1,ew=!1;function ez(){return ee||performance.now(),!1}let e$=!0,ek=!1;function eM(e){e$="mouse"===e.pointerType||""===e.pointerType,ek=!1,es=ec=e.clientX,el=ef=e.clientY,eC&&eR&&(e$&&eP(es,el)||eI()),eS()}function e_(){ek=!0,eI()}function eW(){es=el=NaN,eS()}function eS(){ea&&0===ei&&(en=performance.now(),ei=requestAnimationFrame(eU))}let eR=null,eC=!1,eH=!1,eX="",eT=null,eO="",eY=/^(INPUT|TEXTAREA|SELECT)$/,eE=new WeakMap,eF=0,eA=null;function eP(e,t,r=!1){let o=performance.now();if(!r&&eH&&o-eF<12)return!0;eF=o;let a=document.elementFromPoint(e,t);if(!a)return eB(),!1;if(a===eA&&eH)return!0;eA=a;let i=eE.get(a);if(void 0===i){if(i=!function(e){let t=e;for(;t&&t!==document.body;){if(eY.test(t.tagName)||t.isContentEditable)return!0;t=t.parentElement}return!1}(a)){let e=getComputedStyle(a).cursor;i="auto"===e||"default"===e||"none"===e}eE.set(a,i)}if(!i)return eB(),!1;if(!eH){let e=document.documentElement;eX=e.style.cursor,e.style.cursor="none",eH=!0}return a!==eT&&(eT&&(eT.style.cursor=eO,eT=null,eO=""),"none"!==getComputedStyle(a).cursor&&(eT=a,eO=a.style.cursor,a.style.cursor="none")),!0}function eB(){eT&&(eT.isConnected&&(eT.style.cursor=eO),eT=null,eO=""),eH&&(document.documentElement.style.cursor=eX,eH=!1,eX=""),eA=null,eE=new WeakMap}function eI(){eB(),eR&&eC&&(eR.style.display="none",eC=!1)}function eL(){em&&ew&&(em.style.display="none",em.style.opacity="0",ew=!1)}function eU(e){if(ei=0,!ea)return;let t=performance.now();try{!function(e){let t=Math.min(.05,Math.max(.001,(e-en)/1e3));en=e;let r=null,o=0,a=0;if(J.enabled&&x&&!Number.isNaN(es)){let e=1/0,t=Math.max(1,J.reach),i=J.cursor&&ez()?Math.max(1,J.cursorDistance):0,n=Math.max(t,i);for(let t of x.instances){if(!t.visible||!t.canvas.isConnected)continue;let o=t.canvas.getBoundingClientRect();if(o.width<=0)continue;let a=t.overscan,i=o.width/(t.cssWidth+2*a),s=o.left+a*i,l=o.top+a*i,c=n*i;if(es<s-c||es>s+t.cssWidth*i+c||el<l-c||el>l+t.cssHeight*i+c)continue;let f=function(e,t,r,o,a,i,n){let s="circle"===i?Math.min(r,o)/2:Math.max(0,Math.min(a,Math.min(r,o)/2)),l=r/2,c=o/2,f=Math.max(0,r/2-s),p=Math.max(0,o/2-s),d=Math.max(-f,Math.min(f,e-l)),u=Math.max(-p,Math.min(p,t-c)),g=e-l-d,h=t-c-u,b=Math.hypot(g,h);if(b>1e-6)return n.x=l+d+g/b*s,n.y=c+u+h/b*s,b-s;let m=r-e,x=o-t,v=Math.min(e,m,t,x);return v===e?(n.x=0,n.y=t):v===m?(n.x=r,n.y=t):v===t?(n.x=e,n.y=0):(n.x=e,n.y=o),-v}((es-s)/i,(el-l)/i,t.cssWidth,t.cssHeight,t.cornerRadius,t.kind,eh),p=Math.abs(f);p<=n&&p<e&&(e=p,r=t,eg.d=f,eg.nx=eh.x,eg.ny=eh.y,eg.k=i,eg.left=s,eg.top=l)}if(r){if(e<=t){let r=1-e/t;o=r*r*(3-2*r)}e<=i&&(a=Math.min(1,(1-e/i)*3)),r.mask&&(eg.nx=r.cssWidth/2,eg.ny=r.cssHeight/2,r.wantRaw=!0)}}let i=1-Math.exp(-(1e3*t)/(Math.max(1,J.fadeMs)/3));if(ep+=(o-ep)*i,ed+=(a-ed)*i,r&&r!==eu&&(eu&&(eu.cursorLight=null,F(eu,e)),eu=r),!r&&ep<.002&&ed<.002){ep=0,ed=0,eu&&(eu.cursorLight=null,F(eu,e),eu=null),eL(),eI();return}if(eu){if(J.catchLight){let e=eu.cursorLight??(eu.cursorLight={x:0,y:0,w:0});e.x=eg.nx,e.y=eg.ny,e.w=ep}else eu.cursorLight&&(eu.cursorLight=null);if(F(eu,e),J.cursor&&ed>.002&&e$&&!ek&&!Number.isNaN(es)&&ez()&&function(){if(eR)return!0;let e=document.createElement("div");e.className="metal-fx-cursor",e.setAttribute("aria-hidden","true"),e.style.cssText="position:fixed;left:0;top:0;pointer-events:none;z-index:2147483001;will-change:transform;transform-origin:0 0;display:none";let t=document.createElement("canvas");t.style.display="block",e.appendChild(t),document.body.appendChild(e);let r=t.getContext("2d"),o=document.createElement("canvas"),a=o.getContext("2d");return r&&a?(eR=e,!0):(e.remove(),!1)}()&&eP(es,el)||eI(),J.spill){let e=function(){if(em)return em;let e=document.createElement("div");return e.className="metal-fx-cursor-spill",e.setAttribute("aria-hidden","true"),e.style.cssText="position:fixed;left:0;top:0;pointer-events:none;z-index:2147483000;border-radius:50%;mix-blend-mode:plus-lighter;will-change:transform,opacity;opacity:0;display:none",document.body.appendChild(e),em=e,e}(),t=H(eu,eg.nx,eg.ny,2),r=C(eu,eg.nx,eg.ny,3),o=Math.max(t.r,t.g,t.b)||1,a=n(255*t.r/o,255*t.g/o,255*t.b/o),[i,l,c]=s(a[0],Math.min(1,a[1]*J.spillSaturation),1);eb.r+=(i-eb.r)*.15,eb.g+=(l-eb.g)*.15,eb.b+=(c-eb.b)*.15;let f=6*Math.round(eb.r/6),p=6*Math.round(eb.g/6),d=6*Math.round(eb.b/6),u=`radial-gradient(closest-side, rgba(${f},${p},${d},1) 0%, rgba(${f},${p},${d},0.35) 45%, rgba(${f},${p},${d},0) 100%)`;u!==ex&&(ex=u,e.style.background=u);let g=Math.max(1,J.spillRadius*eg.k);g!==ev&&(ev=g,e.style.width=`${(2*g).toFixed(1)}px`,e.style.height=`${(2*g).toFixed(1)}px`),J.spillBlur!==ey&&(ey=J.spillBlur,e.style.filter=J.spillBlur>0?`blur(${J.spillBlur}px)`:"");let h=eg.left+eg.nx*eg.k,b=eg.top+eg.ny*eg.k,m=ec+(h-ec)*J.spillOffset,x=ef+(b-ef)*J.spillOffset;e.style.transform=`translate3d(${(m-g).toFixed(2)}px,${(x-g).toFixed(2)}px,0)`;let v=Math.min(1,Math.max(0,r/.3)),y=1-J.spillLumGain+J.spillLumGain*v,w=eg.d<0?J.spillInside:1,z=Math.max(0,Math.min(1,J.spillStrength*ep*y*w));ew||(e.style.display="",ew=!0),e.style.opacity=z.toFixed(3)}else eL();ei=requestAnimationFrame(eU)}}(e)}catch(e){ee=!0,eI(),eL(),eu&&(eu.cursorLight=null,eu=null),"u">typeof console&&console.warn("metal-fx: cursor light disabled after error",e);return}performance.now()-t>6?++er>=20&&(er=0,et=performance.now()+5e3,eI()):er>0&&er--}let eN=new Map;function eD(e,t,r,o){if(o<=.05)return e;let a=new Float32Array(e.length);for(let i of function(e,t){let r=Math.floor(Math.sqrt(12*e*e/3+1));r%2==0&&r--;let o=r+2,a=Math.round((12*e*e-3*r*r-4*t*r-3*t)/(-4*r-4)),i=[];for(let e=0;e<t;e++)i.push(e<a?r:o);return i}(o,3)){let o=(i-1)/2;(function(e,t,r,o,a){let i=1/(a+a+1);for(let n=0;n<o;n++){let o=n*r,s=0;for(let t=-a;t<=a;t++)s+=e[o+Math.min(r-1,Math.max(0,t))];for(let n=0;n<r;n++){t[o+n]=s*i;let l=o+Math.max(0,n-a);s+=e[o+Math.min(r-1,n+a+1)]-e[l]}}})(e,a,t,r,o),function(e,t,r,o,a){let i=1/(a+a+1);for(let n=0;n<r;n++){let s=0;for(let t=-a;t<=a;t++)s+=e[Math.min(o-1,Math.max(0,t))*r+n];for(let l=0;l<o;l++){t[l*r+n]=s*i;let c=Math.max(0,l-a)*r+n;s+=e[Math.min(o-1,l+a+1)*r+n]-e[c]}}}(a,e,t,r,o)}return e}function eV(e,t,r,o,a){let i=0;for(let t of e)i=Math.max(i,(t.stroke/2+3*t.blur)*r);let n=Math.ceil(i)+1,s=2*t+2*n,l=2*n,c=Math.ceil(s*o),f=Math.ceil(l*o),p=new Float32Array(c*f);for(let a of e){let e=function(e,t,r,o,a,i,n){let s=document.createElement("canvas");s.width=r,s.height=o;let l=s.getContext("2d",{willReadFrequently:!0}),c=new Float32Array(r*o);if(!l)return c;l.scale(a,a),l.strokeStyle="#fff",l.lineCap="round",l.lineJoin="round",l.lineWidth=t,l.beginPath(),l.moveTo(i-e,n),l.lineTo(i+e,n),l.stroke();let f=l.getImageData(0,0,r,o).data;for(let e=0,t=3;e<c.length;e++,t+=4)c[e]=f[t]/255;return c}(t,a.stroke*r,c,f,o,n,n);e=eD(e,c,f,a.blur*r*o);let i=a.opacity;for(let t=0;t<p.length;t++){let r=e[t]*i;p[t]=p[t]+r*(1-p[t])}}if(a>0){let e=n*o,t=n*o,i=a*r*o;for(let r=0;r<f;r++)for(let o=0;o<c;o++){let a,n=Math.hypot(o+.5-e,r+.5-t)/i;a=n<=.3?1:n<=.65?1-(n-.3)/.35*.75:n<1?.25*(1-(n-.65)/.35):0,p[r*c+o]*=a}}let d=document.createElement("canvas");d.width=c,d.height=f;let u=d.getContext("2d"),g=new Uint8ClampedArray(c*f);for(let e=0;e<p.length;e++)g[e]=Math.round(255*Math.min(1,p[e]));if(u){let e=u.createImageData(c,f),t=e.data;for(let e=0,r=0;e<p.length;e++,r+=4)t[r]=255,t[r+1]=255,t[r+2]=255,t[r+3]=g[e];u.putImageData(e,0,0)}return{canvas:d,alpha:g,w:s,h:l,ax:n,ay:n}}function eG(){return[K.haloStrokeXl,K.haloStrokeLg,K.haloStrokeMd,K.haloStrokeSm,K.haloBlurXl,K.haloBlurLg,K.haloBlurMd,K.haloBlurSm,K.haloOpXl,K.haloOpLg,K.haloOpMd,K.haloOpSm,K.extraStrokeOuter,K.extraStrokeCore,K.extraBlurOuter,K.extraBlurCore,K.extraFadeR,K.extraOpOuter].join(",")}function eq(e,t,r,o,a){var i;let n=t<<16|r<<8|o;if(a.canvas&&a.tint===n&&a.src===e)return a.canvas;let s=a.canvas,l=a.img;s&&l&&a.src===e||((s=document.createElement("canvas")).width=e.canvas.width,s.height=e.canvas.height,l=(null==(i=s.getContext("2d"))?void 0:i.createImageData(s.width,s.height))??null);let c=s.getContext("2d");if(c&&l){let a=l.data,i=e.alpha;for(let e=0,n=0;e<i.length;e++,n+=4)a[n]=t,a[n+1]=r,a[n+2]=o,a[n+3]=i[e];c.putImageData(l,0,0)}return a.canvas=s,a.img=l,a.tint=n,a.src=e,s}function ej(e,t,r){let o=Math.max(0,Math.min(r,Math.min(e,t)/2));return 2*Math.max(0,e-2*o)+2*Math.max(0,t-2*o)+2*Math.PI*o}function eQ(e,t,r,o){return"circle"===o?2*Math.PI*Math.max(0,Math.min(r,Math.min(e,t)/2)):ej(e,t,r)}function eK(e,t,r,o,a,i,n,s){let l=s||{x:0,y:0},c=Math.max(0,Math.min(o,Math.min(t,r)/2));if("circle"===n){let o=2*Math.PI*c;if(o<=1e-4)return l.x=.5*t,l.y=.5*r,l;let n=-Math.PI/2+(e=(e%o+o)%o)/o*Math.PI*2,s=Math.max(0,c-a+i);return l.x=.5*t+s*Math.cos(n),l.y=.5*r+s*Math.sin(n),l}let f=Math.max(0,t-2*c),p=Math.max(0,r-2*c),d=Math.PI*c/2,u=2*(f+p)+4*d,g=Math.max(0,c-a+i),h=e=(e%u+u)%u;if(h<f)return l.x=c+h,l.y=a-i,l;if((h-=f)<d){let e=-Math.PI/2+Math.PI/2*(d>0?h/d:0);return l.x=t-c+g*Math.cos(e),l.y=c+g*Math.sin(e),l}if((h-=d)<p)return l.x=t-a+i,l.y=c+h,l;if((h-=p)<d){let e=Math.PI/2*(d>0?h/d:0);return l.x=t-c+g*Math.cos(e),l.y=r-c+g*Math.sin(e),l}if((h-=d)<f)return l.x=t-c-h,l.y=r-a+i,l;if((h-=f)<d){let e=Math.PI/2+Math.PI/2*(d>0?h/d:0);return l.x=c+g*Math.cos(e),l.y=r-c+g*Math.sin(e),l}if((h-=d)<p)return l.x=a-i,l.y=r-c-h,l;h-=p;let b=Math.PI+Math.PI/2*(d>0?h/d:0);return l.x=c+g*Math.cos(b),l.y=c+g*Math.sin(b),l}let eZ={x:0,y:0},eJ={x:0,y:0};function e0(e,t,r){if(e===t)return r<e?0:1;let o=Math.max(0,Math.min(1,(r-e)/(t-e)));return o*o*(3-2*o)}let e1=1e3/15*120,e2=1e3/15,e5={x:0,y:0};function e3(e,t){let{width:r,height:o}=t,a=t.scale??1,i=Math.min(3,"u">typeof window&&window.devicePixelRatio||1),n=eQ(r,o,t.cornerRadius,t.kind)/ej(140,40,20),s=Math.max(1,K.haloHalfLen*n),l=Math.max(.6,K.extraHalfLen*n),c=function(e,t,r){let o=`h|${e.toFixed(2)}|${t}|${r}|${eG()}`,a=eN.get(o);return a||(a=eV([{stroke:K.haloStrokeXl,blur:K.haloBlurXl,opacity:K.haloOpXl},{stroke:K.haloStrokeLg,blur:K.haloBlurLg,opacity:K.haloOpLg},{stroke:K.haloStrokeMd,blur:K.haloBlurMd,opacity:K.haloOpMd},{stroke:K.haloStrokeSm,blur:K.haloBlurSm,opacity:K.haloOpSm}],e,t,r,0),eN.set(o,a)),a}(s,a,i),f=function(e,t,r){let o=`e|${e.toFixed(2)}|${t}|${r}|${eG()}`,a=eN.get(o);return a||(a=eV([{stroke:K.extraStrokeOuter,blur:K.extraBlurOuter,opacity:K.extraOpOuter},{stroke:K.extraStrokeCore,blur:K.extraBlurCore,opacity:1}],e,t,r,K.extraFadeR),eN.set(o,a)),a}(l,a,i),p=Math.ceil(Math.max(c.ay,f.ay)+K.extraOutward*n*a+2),d=document.createElement("div");d.className="metal-fx-glow-svg",d.setAttribute("aria-hidden","true");let u=document.createElement("div");u.className="metal-fx-glow-env",u.style.cssText="position:absolute;inset:0;pointer-events:none;opacity:0";let g=document.createElement("canvas");g.className="metal-fx-glow-canvas";let h=r+2*p,b=o+2*p;g.width=Math.ceil(h*i),g.height=Math.ceil(b*i),g.style.cssText=`position:absolute;left:${-p}px;top:${-p}px;width:${h}px;height:${b}px;pointer-events:none`,u.appendChild(g),d.appendChild(u),e.appendChild(d);let m=g.getContext("2d",{willReadFrequently:!!t.maskDataUrl});if(!m)throw Error("metal-fx: glow canvas 2D context unavailable");let x={wrap:d,env:u,canvas:g,ctx:m,surroundPath:null,bandPath:null,maskAlpha:null,maskReady:!1,margin:p,dpr:i,halo:c,extra:f,haloTint:{canvas:null,img:null,tint:-1,src:null},extraTint:{canvas:null,img:null,tint:-1,src:null},mO:T(),mI:T(),maskSum:NaN,maskDeformed:!1,deform:null,width:r,height:o,cornerRadius:t.cornerRadius,kind:t.kind,scale:a,perim:function(e){if(e.samplePoints&&e.samplePoints.length>0)return e.samplePoints.map((e,t)=>({x:e.x,y:e.y,arc:t}));let t=eQ(e.width,e.height,e.cornerRadius,e.kind),r=K.inset*(e.scale??1),o=[];for(let a=0;a<16;a++){let i=a/16*t,n=eK(i,e.width,e.height,e.cornerRadius,r,0,e.kind);o.push({x:n.x,y:n.y,arc:i})}return o}(t),pointMode:!!(t.samplePoints&&t.samplePoints.length>0),currentIdx:0,appearedAt:0,glowOpacity:0,relocTween:null,relocNextIdx:-1,relocMul:0,envClock:0,cursorMode:!1,cursorArc:0,cursorTargetArc:0,lastTickMs:0,wanderS:0,wanderTargetS:0,wanderFrames:0,tintFrom:{r:255,g:255,b:255},tintTarget:{r:255,g:255,b:255},tintTween:null,tintHoldUntil:0,dX:NaN,dY:NaN,dAng:NaN,dEX:NaN,dEY:NaN,dHOp:NaN,dEOp:NaN,dHaloTint:"",dExtraTint:"",dirty:!0,dEnv:-1};if(t.maskDataUrl){let e=new Image;e.onload=()=>{let t=document.createElement("canvas");t.width=g.width,t.height=g.height;let a=t.getContext("2d",{willReadFrequently:!0});if(!a)return;a.scale(i,i),a.drawImage(e,p,p,r,o);let n=a.getImageData(0,0,t.width,t.height).data,s=t.width*t.height,l=new Float32Array(s);for(let e=0,t=3;e<s;e++,t+=4)l[e]=n[t]/255;let c=eD(Float32Array.from(l),t.width,t.height,3.5*i),f=0;for(let e=0;e<s;e++)c[e]>f&&(f=c[e]);let d=f>0?.5/f:0,u=new Uint8ClampedArray(s);for(let e=0;e<s;e++)u[e]=Math.round(255*Math.max(l[e],c[e]*d));x.maskAlpha=u,x.maskReady=!0,x.dirty=!0},e.src=t.maskDataUrl}else e4(x,null);return x}function e4(e,t){if(e.pointMode)return;let{margin:r,width:o,height:a,cornerRadius:i}=e,n="circle"===e.kind?2:1;O(0,0,o,a,i,t,e.mO),O(n,n,o-2*n,a-2*n,Math.max(0,i-n),t,e.mI);let s=new Path2D;e8(s,e.mO,r);let l=new Path2D;e8(l,e.mO,r),e8(l,e.mI,r);let c=new Path2D;c.rect(0,0,o+2*r,a+2*r),c.addPath(s),e.surroundPath=c,e.bandPath=l,e.maskReady=!0}function e8(e,t,r){let o=t.xy;for(let a=0;a<t.n;a++){let t=o[2*a]+r,i=o[2*a+1]+r;0===a?e.moveTo(t,i):e.lineTo(t,i)}e.closePath()}let e6=[255,255,255];function e7(e){if("#"===e[0])return e6[0]=parseInt(e.slice(1,3),16),e6[1]=parseInt(e.slice(3,5),16),e6[2]=parseInt(e.slice(5,7),16),e6;let t=4,r=0,o=0;for(;t<e.length&&o<3;){let a=e.charCodeAt(t++);a>=48&&a<=57?r=10*r+(a-48):(44===a||41===a)&&(e6[o++]=r,r=0)}return e6}let e9=Object.freeze({offsetY:1,blur:.5,alpha:.9,color:"#ffffff"});function te(e,t,r){let o=t.xy;for(let a=0;a<t.n;a++){let t=o[2*a]+r,i=o[2*a+1]+r;0===a?e.moveTo(t,i):e.lineTo(t,i)}e.closePath()}function tt(e,t,r=!1){let{width:o,height:a,cornerRadius:i,ring:n,margin:s,dpr:l}=e;O(0,0,o,a,i,t,e.mO),O(n,n,o-2*n,a-2*n,Math.max(0,i-n),t,e.mI);let c=0,f=e.mO.xy;for(let t=0;t<e.mO.n;t+=4)c+=1.37*f[2*t]+f[2*t+1];if(!r&&c===e.sum)return;e.sum=c;let{sctx:p,scratch:d,ctx:u,canvas:g,opts:h}=e,b=d.width,m=d.height;p.setTransform(1,0,0,1,0,0),p.clearRect(0,0,b,m),p.scale(l,l),p.fillStyle="#fff",p.beginPath(),te(p,e.mO,s),te(p,e.mI,s),p.fill("evenodd");let x=p.getImageData(0,0,b,m).data,v=b*m,y=new Float32Array(v);for(let e=0,t=3;e<v;e++,t+=4)y[e]=x[t]/255;let w=Math.round(h.offsetY*l)*b,z=new Float32Array(v);if(w>=0)for(let e=0;e<v;e++)z[e]=Math.max(0,y[e]-(e>=w?y[e-w]:0));else for(let e=0;e<v;e++)z[e]=Math.max(0,y[e]-(e-w<v?y[e-w]:0));let $=eD(z,b,m,h.blur*l),k=parseInt(h.color.slice(1,3),16),M=parseInt(h.color.slice(3,5),16),_=parseInt(h.color.slice(5,7),16),W=u.createImageData(b,m),S=W.data;for(let e=0,t=0;e<v;e++,t+=4)S[t]=k,S[t+1]=M,S[t+2]=_,S[t+3]=Math.round(255*Math.min(1,$[e]*y[e]*h.alpha));u.setTransform(1,0,0,1,0,0),u.putImageData(W,0,0)}function tr(e){e&&e.canvas.remove()}let to=new Set(["INPUT","TEXTAREA","SELECT","OPTION"]);function ta(e,t,r,o,a,i){let n=Math.max(0,Math.min(i,.5*o,.5*a)),s=e.roundRect;if("function"==typeof s)return void s.call(e,t,r,o,a,n);e.moveTo(t+n,r),e.lineTo(t+o-n,r),e.quadraticCurveTo(t+o,r,t+o,r+n),e.lineTo(t+o,r+a-n),e.quadraticCurveTo(t+o,r+a,t+o-n,r+a),e.lineTo(t+n,r+a),e.quadraticCurveTo(t,r+a,t,r+a-n),e.lineTo(t,r+n),e.quadraticCurveTo(t,r,t+n,r)}function ti(e,t,r,o,a){if(!a.flipX&&!a.flipY)return void e.drawImage(t,a.sx??0,a.sy??0,r,o,a.x,a.y,a.w,a.h);e.save(),a.flipX&&(e.translate(a.x+a.w,0),e.scale(-1,1)),a.flipY&&(e.translate(0,a.y+a.h),e.scale(1,-1)),e.drawImage(t,a.sx??0,a.sy??0,r,o,a.flipX?0:a.x,a.flipY?0:a.y,a.w,a.h),e.restore()}function tn(e,t,r,o,a,i,n){let s=0|n;if(s<1||o<=2*s||a<=2*s){e.beginPath(),ta(e,t,r,o,a,i),e.clip();return}e.beginPath(),ta(e,t,r,o,a,i),ta(e,t+s,r+s,o-2*s,a-2*s,Math.max(0,i-s)),e.clip("evenodd")}function ts(e){let t=getComputedStyle(e),r=[parseFloat(t.borderTopLeftRadius)||0,parseFloat(t.borderTopRightRadius)||0,parseFloat(t.borderBottomRightRadius)||0,parseFloat(t.borderBottomLeftRadius)||0].filter(e=>e>0);return r.length?Math.min.apply(null,r):0}function tl(e){let t=getComputedStyle(e),r=Math.max(parseFloat(t.borderTopWidth)||0,parseFloat(t.borderRightWidth)||0,parseFloat(t.borderBottomWidth)||0,parseFloat(t.borderLeftWidth)||0),o=0,a=0,i=t.boxShadow;if(i&&"none"!==i){let e=i.replace(/rgba?\([^)]*\)/g,e=>e.replace(/,/g,"\0")).split(/,\s*/),t=1/0,r=1/0;for(let o of e){let e=o.match(/-?\d+(?:\.\d+)?px/g);if(!e||e.length<4)continue;let a=parseFloat(e[3]);a>0&&(/\binset\b/.test(o)?a<t&&(t=a):a<r&&(r=a))}Number.isFinite(t)&&(o=t),Number.isFinite(r)&&(a=r)}let n=Math.max(r,a);return{width:Math.max(r,o,a)||1,outerCssPx:n}}function tc(e){e.cornerRadius=ts(e.el);let t=tl(e.el);e.hairlineWidth=t.width,e.hairlineOuterCssPx=t.outerCssPx}let tf=new Set,tp={...Object.freeze({enabled:!0,radius:11.5,strength:.57,penumbra:.55,falloff:.21,edgeFade:.7,softness:.24,repaintMs:36})},td=null,tu=0,tg=0,th=!1;function tb(){0!==tu||typeof requestAnimationFrame>"u"||(tu=requestAnimationFrame(e=>{if(tu=0,e-tg<tp.repaintMs)return void tb();tg=e,tM()}))}let tm=!1;function tx(e){if(td={x:e.clientX,y:e.clientY},!tp.enabled)return;let t=function(e,t){let r=tp.radius;for(let o of tf){let a=o.anchorEl.getBoundingClientRect(),i=o.el.getBoundingClientRect(),n=Math.min(a.left,i.left)-r,s=Math.max(a.right,i.right)+r,l=Math.min(a.top,i.top)-r,c=Math.max(a.bottom,i.bottom)+r;if(e>=n&&e<=s&&t>=l&&t<=c)return!0}return!1}(e.clientX,e.clientY);(t||tm)&&tb(),tm=t}function tv(){td=null,tm&&tb(),tm=!1}function ty(e){typeof document>"u"||e===th||(th=e,e?(document.addEventListener("pointermove",tx,{passive:!0}),document.addEventListener("pointerleave",tv),window.addEventListener("blur",tv)):(document.removeEventListener("pointermove",tx),document.removeEventListener("pointerleave",tv),window.removeEventListener("blur",tv),td=null))}let tw=null,tz=null,t$=null,tk=null;function tM(){if(0===tf.size)return;let e="u">typeof window&&window.devicePixelRatio||1,t=new Map;for(let a of tf){var r,o;let i=a.el.getBoundingClientRect(),n=t.get(a.anchorEl);if(n||(n=a.anchorEl.getBoundingClientRect(),t.set(a.anchorEl,n)),i.width<1||i.height<1||n.width<1||n.height<1)continue;let s=a.el.hasAttribute("data-metal-fx-text");if(s&&!a.glyphStyled&&(a.canvas.style.filter="blur(0.4px) saturate(1.35) brightness(1.2)",a.glyphStyled=!0),(Math.min((r=n).bottom,i.bottom)-Math.max(r.top,i.top)<1||Math.max(r.left-i.right,i.left-r.right,0)>32)&&!(!(Math.min((o=n).right,i.right)-Math.max(o.left,i.left)<1)&&32>=Math.max(o.top-i.bottom,i.top-o.bottom,0))){1!==a.canvas.width&&(a.canvas.width=1,a.canvas.height=1),1!==a.strokeCanvas.width&&(a.strokeCanvas.width=1,a.strokeCanvas.height=1);continue}let l=s&&!!a.anchor.mask;l&&!a.anchor.wantRaw&&(a.anchor.wantRaw=!0),a.anchor.wantRing||(a.anchor.wantRing=!0);let c=!!a.anchor.deform&&!!a.anchor.ringCanvas,f=l&&a.anchor.rawCanvas?a.anchor.rawCanvas:c?a.anchor.ringCanvas:a.anchor.canvas,p=Math.round(a.anchor.overscan*e),d=p,u=p,g=(0|f.width)-2*p,h=(0|f.height)-2*p;if(a.anchor.mask&&!l){let e=function(e,t,r,o,a){if(o<1||a<1)return null;let i=e.getContext("2d");if(!i)return null;let n=i.getImageData(t,r,o,a).data,s=o,l=a,c=-1,f=-1;for(let e=0;e<a;e++){let t=e*o;for(let r=0;r<o;r++)n[(t+r)*4+3]>8&&(r<s&&(s=r),r>c&&(c=r),e<l&&(l=e),e>f&&(f=e))}return c<0?null:{x:t+s,y:r+l,w:c-s+1,h:f-l+1}}(f,d,u,g,h);e&&(d=e.x,u=e.y,g=e.w,h=e.h)}if(g<4||h<4)continue;let b=(n.left+n.right)*.5,m=(n.top+n.bottom)*.5,x=(i.left+i.right)*.5,v=(i.top+i.bottom)*.5,y=b-x,w=m-v,z=Math.max(n.left-i.right,i.left-n.right,0)>=Math.max(n.top-i.bottom,i.top-n.bottom,0),$=1-Math.min(1,function(e,t){let r=Math.max(e.left-t.right,t.left-e.right,0),o=Math.max(e.top-t.bottom,t.top-e.bottom,0);return Math.sqrt(r*r+o*o)}(n,i)/12),k=Math.min(3.6,(.55+.44999999999999996*($=$*$*(3-2*$)))*1.3*.7)*a.strength,M=n.left>=i.left&&n.right<=i.right&&n.top>=i.top&&n.bottom<=i.bottom?[!0,!1]:[z],_=a.anchor.scale??1,W=Math.max(1,Math.round(Math.max(+_,a.hairlineWidth)*e)),S=Math.max(1,Math.round(Math.max(+_,a.hairlineWidth)*e)),R=a.hairlineOuterCssPx;a.wrap.style.inset=`${-R}px`,a.wrap.style.borderRadius=`${Math.max(0,a.cornerRadius)}px`;let C=Math.max(1,Math.round((i.width+2*R)*e)),H=Math.max(1,Math.round((i.height+2*R)*e));a.canvas.width!==C&&(a.canvas.width=C),a.canvas.height!==H&&(a.canvas.height=H),a.strokeCanvas.width!==C&&(a.strokeCanvas.width=C),a.strokeCanvas.height!==H&&(a.strokeCanvas.height=H);let X=a.ctx;X.setTransform(1,0,0,1,0,0),X.clearRect(0,0,C,H);let T=a.strokeCtx;for(let[t,r]of(T.setTransform(1,0,0,1,0,0),T.clearRect(0,0,C,H),M.entries())){let o,l,c,p,b=t>0&&(tw||(tw=document.createElement("canvas"),tz=document.createElement("canvas"),t$=tw.getContext("2d",{alpha:!0}),tk=tz.getContext("2d",{alpha:!0})),!!t$&&!!tk&&!!tw&&!!tz&&(tw.width!==C&&(tw.width=C,tz.width=C),tw.height!==H&&(tw.height=H,tz.height=H),t$.setTransform(1,0,0,1,0,0),tk.setTransform(1,0,0,1,0,0),t$.globalCompositeOperation="source-over",tk.globalCompositeOperation="source-over",t$.clearRect(0,0,C,H),tk.clearRect(0,0,C,H),!0)),m=b?t$:X,x=b?tk:T,v=Math.min((s?18:12)*e,Math.max(C,H));r?(o=y>0?C:0,c=y>0?C-v:v,l=.5*H,p=.5*H):(l=w>0?H:0,p=w>0?H-v:v,o=.5*C,c=.5*C);let z=X.createLinearGradient(o,l,c,p);z.addColorStop(0,"rgba(0,0,0,1)"),z.addColorStop(.5,"rgba(0,0,0,0.85)"),z.addColorStop(1,"rgba(0,0,0,0)");let $=g/e,M=s?Math.max(1,Math.min(r?C:H,Math.round(r?g:h))):Math.max(1,Math.round(235*Math.max(.1,$/140)*e)),_,O,Y,E,F=!1,A=!1;if(r){let t=Math.max(n.top,i.top),r=Math.min(n.bottom,i.bottom);F=!0,_=y>0?C-M:0,O=Math.round((t-i.top+R)*e),Y=M,E=Math.max(1,Math.round((r-t)*e))}else{let t=Math.max(n.left,i.left),r=Math.min(n.right,i.right);A=!0,_=Math.round((t-i.left+R)*e),O=w>0?H-M:0,Y=Math.max(1,Math.round((r-t)*e)),E=M}let P={x:_,y:O,w:Y,h:E,flipX:F,flipY:A,sx:d,sy:u},B={x:0,y:0,w:C,h:H,r:Math.max(0,a.cornerRadius*e)};(function(e,t,r,o,a,i,n,s,l,c,f,p){let d=p??Math.max(1,Math.round(24*f)),u=Math.max(0,n),g=!0;for(let n=0;n<3&&u>1e-4;n++){let n=Math.min(1,u);e.save(),function(e,t,r,o,a,i,n){if(o<=2*n||a<=2*n){e.beginPath(),ta(e,t,r,o,a,i),e.clip();return}e.beginPath(),ta(e,t,r,o,a,i),ta(e,t+n,r+n,o-2*n,a-2*n,Math.max(0,i-n)),e.clip("evenodd")}(e,c.x,c.y,c.w,c.h,c.r,d),e.globalCompositeOperation=g?"source-over":"lighter",g=!1,e.globalAlpha=n,ti(e,t,r,o,l),e.globalAlpha=1,e.globalCompositeOperation="destination-in",e.fillStyle=s,e.fillRect(0,0,a,i),e.restore(),u-=n}})(m,f,g,h,C,H,s?Math.min(1,.7*k):Math.min(3.6,2.535*k*.35),z,P,B,e,s?Math.max(C,H):void 0),s||(function(e,t,r,o,a,i,n,s,l,c,f,p){let d=.52*s,u=!0;for(let s=0;s<3&&d>1e-4;s++){let s=Math.min(1,d);e.save(),tn(e,n.x,n.y,n.w,n.h,n.r,l),e.globalCompositeOperation=u?"source-over":"lighter",u=!1,e.globalAlpha=s,ti(e,t,r,o,p),e.globalAlpha=1,e.globalCompositeOperation="destination-in",e.fillStyle=c,e.fillRect(0,0,a,i),e.restore(),d-=s}}(x,f,g,h,C,H,B,k,W,z,0,P),function(e,t,r,o,a,i,n,s){let l=e.createLinearGradient(o,a,i,n);l.addColorStop(0,`rgba(255,255,255,${s.toFixed(3)})`),l.addColorStop(.5,`rgba(255,255,255,${(.45*s).toFixed(3)})`),l.addColorStop(1,"rgba(255,255,255,0)"),e.save(),tn(e,t.x,t.y,t.w,t.h,t.r,r),e.globalCompositeOperation="lighter",e.lineWidth=2*r,e.strokeStyle=l,e.beginPath(),ta(e,t.x,t.y,t.w,t.h,t.r),e.stroke(),e.restore()}(x,B,S,o,l,c,p,Math.min(.85,.044*k))),b&&(X.globalCompositeOperation="lighter",X.drawImage(tw,0,0),T.globalCompositeOperation="lighter",T.drawImage(tz,0,0))}for(let t of M)!function(e,t,r,o,a,i,n,s,l){let c,f,p,d,u,g;if(!td||!tp.enabled||tp.strength<=0)return;let h=tp.radius;if(a){let e=r.left>=o.right;c=e?o.right:r.right,f=e?r.left:o.left,p=td.x,d=td.y,u=Math.max(r.top,o.top),g=Math.min(r.bottom,o.bottom)}else{let e=r.top>=o.bottom;c=e?o.bottom:r.bottom,f=e?r.top:o.top,p=td.y,d=td.x,u=Math.max(r.left,o.left),g=Math.min(r.right,o.right)}let b=Math.min(c,f),m=Math.max(c,f),x=Math.max(1,m-b);if(p<b-h||p>m+h||d<u-h||d>g+h)return;let v=Math.max(0,Math.min(1,Math.abs(p-c)/x)),y=Math.max(.5,h*tp.edgeFade),w=Math.min(1,Math.min(p-(b-h),m+h-p)/y),z=Math.min(1,Math.min(d-(u-h),g+h-d)/y),$=tp.strength*(1-tp.falloff*v)*w*z;if($<=.001)return;let k=h*l*(1+tp.penumbra*v),M=a?(d-o.top+s)*l:(d-o.left+s)*l,_=Math.max(.001,.5-Math.max(0,Math.min(.5,(1-tp.softness)*.5))),W=Math.max(0,Math.floor(M-k)),S=Math.min(a?n:i,Math.ceil(M+k));if(S<=W)return;let R=new Float32Array(S-W);for(let e=W;e<S;e++){let t=(e+.5-(M-k))/(2*k),r=t<_?t/_:t>1-_?(1-t)/_:1;R[e-W]=1-$*Math.max(0,Math.min(1,r))}for(let r of[e,t]){let e=a?0:W,t=a?W:0,o=a?i:S-W,s=a?S-W:n,l=r.getImageData(e,t,o,s),c=l.data;if(a)for(let e=0;e<s;e++){let t=R[e];if(!(t>=.999))for(let r=e*o*4+3,a=(e+1)*o*4;r<a;r+=4)c[r]=c[r]*t}else for(let e=0;e<s;e++)for(let t=0;t<o;t++){let r=R[t];if(r>=.999)continue;let a=(e*o+t)*4+3;c[a]=c[a]*r}r.putImageData(l,e,t)}}(X,T,n,i,t,C,H,R,e);X.globalCompositeOperation="source-over",T.globalCompositeOperation="source-over"}}let t_=!1,tW=0;function tS(){t_||(t_=!0,typeof requestAnimationFrame>"u"||requestAnimationFrame(e=>{t_=!1,e-tW<66||(tW=e,tM())}))}let tR="metal-fx-styles",tC=`
.metal-fx-root {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  isolation: isolate;
  overflow: visible;
  background: #272727;
  color: #f8f8f8;
}
.metal-fx-root[data-theme='light'] {
  background: #ffffff;
  color: #1d1d1d;
}

.metal-fx-root::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  z-index: 2;
  box-shadow: inset 0 0 50px 0 rgba(255, 255, 255, 0.02);
}
.metal-fx-root[data-theme='light']::before {
  box-shadow: inset 0 0 50px 0 rgba(0, 0, 0, 0.02);
}

.metal-fx-root::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  z-index: 4;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
}
.metal-fx-root[data-theme='light']::after {
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.06);
}
/* Circle variant gets a thicker outer rim than the button variant. */
.metal-fx-root[data-variant='circle']::after {
  box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.1);
}
.metal-fx-root[data-theme='light'][data-variant='circle']::after {
  box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.06);
}

.metal-fx-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  z-index: 0;
  pointer-events: none;
  border-radius: inherit;
}

/* The inner spacer — defines the inset geometry where the metal ring meets
   the interior (3 px for Button, 1-2 px for Circle) and carries the Circle dark
   hairline ('box-shadow: inset' rules below). Intentionally transparent so
   the wrapper's background propagates through to the punched shader centre,
   giving consumers a single surface tone to override. See "Single-surface
   background" in the file header for the rationale. */
.metal-fx-inner {
  position: absolute;
  inset: 3px;
  border-radius: inherit;
  z-index: 1;
  pointer-events: none;
}

.metal-fx-root[data-variant='button'][data-shape='pill'] .metal-fx-inner {
  border-radius: calc(var(--mfx-radius, 20px) - 3px);
}
.metal-fx-root[data-variant='button'][data-shape='circle'] .metal-fx-inner {
  border-radius: calc(var(--mfx-radius, 16px) - 3px);
}
.metal-fx-root[data-variant='circle'][data-shape='pill'] .metal-fx-inner {
  inset: 0;
  border-radius: var(--mfx-radius, 20px);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.45);
}
.metal-fx-root[data-variant='circle'][data-shape='circle'] .metal-fx-inner {
  inset: 0;
  border-radius: var(--mfx-radius, 16px);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.45);
}
/* Circle-variant hairline alpha — light mode.
   Source-of-truth: index.html L2261-2267. The 0.45-alpha black inset that
   reads as a single-pixel frame against the dark interior is too heavy
   on a #ffffff inner: it ends up looking like a hard 2-px black ring
   against the iridescent shader. Suppressed entirely (alpha 0) — the
   shader's own iridescent rim already defines the silhouette in light
   mode, so an extra dark hairline only competes with it. The rule is
   kept (rather than deleted) as a tunable hook in case a future variant
   wants to re-introduce a soft edge. NOTE: we keep the dark-mode inset
   and border-radius values because — unlike index.html — our renderer
   does NOT overscan the canvas in light mode, so there is no 1-px gap
   between inner element and shader to compensate for. */
.metal-fx-root[data-theme='light'][data-variant='circle'][data-shape='pill'] .metal-fx-inner,
.metal-fx-root[data-theme='light'][data-variant='circle'][data-shape='circle'] .metal-fx-inner {
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0);
}

/* ─── Combined glow SVG (z=3) ──────────────────────────────────────────────
   Single SVG per instance that holds BOTH the wide-halo group
   (#mfx_haloTravel) and the catch-light group (#mfx_extraTravel), exactly
   mirroring canonical's _buildGlowSvgInner (index.html L8078). One
   mix-blend-mode: screen lifts the combined composite onto the shader
   ring; per-frame opacity attributes on each inner group still drive the
   independent fade-in / fade-out cycles for the halo and the catch-light.

   Why a single SVG: the circle variant anchors halo + catch-light at the same
   perimeter point, so they overlap in the bright zone. Two separately-
   screened SVGs would double-screen the overlap (A + B + C - AB - AC -
   BC + ABC instead of A + B + C - AB - AC once both groups composite
   in source-over inside one SVG and then screen against the host once).
   That overlap looked muted versus canonical specifically on the circle
   variant where both layers travel together.

   Source-of-truth opacity: #btnGlowSvg drops to 0.7 in dark and 0.2746 in
   light (index.html L632/L643). */
.metal-fx-glow-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  z-index: 3;
  pointer-events: none;
  opacity: 0.7;
}
.metal-fx-root[data-theme='light'] .metal-fx-glow-svg {
  /* Light-mode 1-px overscan mirrors .btn-glow-svg in metal.html so the
     halo stays glued to the visible silhouette (the shader ring there sits
     1 px outside the host's padding box). */
  inset: -1px;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  mix-blend-mode: multiply;
  /* Source-of-truth: html[data-theme="light"] #btnGlowSvg { opacity: 0.2746 }
     → −35 % from 0.4225 from the original 0.7 dark-mode opacity. */
  opacity: 0.2746;
  filter: saturate(5.355) brightness(0.78);
}
/* Circle light-mode small variants (e.g. 36\xd736 send button): the geometrically
   shrunk halo loses density when multiplied against #ffffff. Mirror the
   canonical override at index.html L2316 — bump saturation + drop brightness
   so the small glow holds together visually. */
.metal-fx-root[data-variant='circle'][data-shape='circle'][data-theme='light'] .metal-fx-glow-svg {
  filter: saturate(7.5) brightness(0.6);
}

/* The wrapped child — hoisted into z=5 so it sits above every overlay, with
   normalized chrome so consumer button styles don't fight the metal frame. */
.metal-fx-content {
  position: relative;
  z-index: 5;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  pointer-events: none;
}
.metal-fx-content > * {
  pointer-events: auto;
}
.metal-fx-root[data-normalize='true'] .metal-fx-content > * {
  background: transparent !important;
  border: 0 !important;
  outline: 0 !important;
  box-shadow: none !important;
  /* Sizing: we deliberately DO NOT force \`width: 100%; height: 100%\` on the
     child here. That used to be the contract ("the wrapper is the visible
     button surface; the child stretches to fill it"), but it created a cyclic
     percentage dependency: the wrapper is \`inline-flex\` with no intrinsic
     size, .metal-fx-content is \`width/height: 100%\` of the wrapper, and the
     child was \`100%\` of .metal-fx-content. With nothing breaking the cycle,
     icon-only / class-sized children collapsed.

     The new contract: the child sizes itself (intrinsic content, CSS class,
     or inline style — all work), and the wrapper's \`inline-flex\` wraps it
     tightly. Consumers who want a metal frame BIGGER than the child (e.g.
     padding around an icon) size <MetalFx style={{ width, height }}> AND
     explicitly set width/height on the child to fill (or accept that the
     child renders at its intrinsic size, centered).

     Typography is intentionally NOT touched. We used to apply
     \`color: inherit; font: inherit;\` here to "match" the wrapper, but
     \`font: inherit\` is a shorthand that overrides font-family, font-size,
     font-weight, AND line-height on the child — which (a) shrank the
     button height (line-height changes propagate through the flex
     content box) and (b) scaled em-based icons / font-icons inside the
     child to whatever the wrapper inherited. The wrapper now stays out
     of the child's typography entirely; consumers who want typographic
     normalization can apply it themselves on the child element. */
}

[data-metal-fx-reflection] {
  position: absolute;
  inset: 0;
  pointer-events: none;
  border-radius: inherit;
  overflow: hidden;
  z-index: 0;
  isolation: isolate;
}
.metal-fx-reflection-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  filter: blur(4px) saturate(1.2) brightness(1.58);
}
.metal-fx-reflection-stroke-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  filter: saturate(1.35) brightness(1.75);
}
/* Hosts that participate as reflection targets need positioning + isolation
   so the wrap composites only against the host (not the parent stack). The
   wrap injects these inline as well, but stating them here keeps reflections
   working on hosts that already have other inline styles applied. */
[data-metal-fx-reflect-host] {
  isolation: isolate;
}
`,tH=!1;!function(){if(tH||typeof document>"u")return;if(document.getElementById(tR)){tH=!0;return}let e=document.createElement("style");e.id=tR,e.textContent=tC,document.head.appendChild(e),tH=!0}();let tX={position:"absolute",inset:0,width:"100%",height:"100%"},tT={position:"absolute",inset:3},tO={position:"absolute",inset:0,pointerEvents:"none",zIndex:3,borderRadius:"inherit"},tY={position:"absolute",inset:0,pointerEvents:"none",zIndex:4},tE=new Map;E=(e,t)=>{let r=tE.get(e);return!!r&&function(e,t,r,o,a="dark"){var i,l;let c,f,p,d,u,g,h,b,{width:m,height:v,cornerRadius:y,perim:w}=e;if(0===w.length)return!1;let z=-1,$=e.currentIdx,k=0;for(let r=0;r<w.length;r++){let o=w[r],a=C(t,o.x,o.y,2);a>z&&(z=a,$=r),r===e.currentIdx&&(k=a)}let M=e.appearedAt>0&&r-e.appearedAt<K.minDwellMs,W=K.baseOp+(K.peakOp-K.baseOp)*e0(K.lumLo,K.lumHi,k),S=!M&&z-k>.05,X=t.cursorLight,T=J.enabled&&J.catchLight&&!e.pointMode&&!!X&&X.w>.02,O=eQ(m,v,y,e.kind);T&&(e.cursorTargetArc=function(e,t,r,o,a,i){let n=Math.max(0,Math.min(a,Math.min(r,o)/2));if("circle"===i){let a=2*Math.PI*n;return a<=1e-4?0:((Math.atan2(t-o/2,e-r/2)+Math.PI/2)/(2*Math.PI)*a%a+a)%a}let s=Math.max(0,r-2*n),l=Math.max(0,o-2*n),c=Math.PI*n/2,f=Math.PI/2,p=s+c,d=p+l,u=d+c,g=u+s,h=g+c,b=e>=n&&e<=r-n,m=t>=n&&t<=o-n;if(b&&m){let a=r-e,i=o-t,s=Math.min(e,a,t,i);return s===t?e-n:s===a?p+(t-n):s===i?u+(r-n-e):h+(o-n-t)}return b?t<o/2?e-n:u+(r-n-e):m?e>r/2?p+(t-n):h+(o-n-t):e>r/2&&t<o/2?s+(Math.atan2(t-n,e-(r-n))+f)/f*c:e>r/2?d+Math.atan2(t-(o-n),e-(r-n))/f*c:t>o/2?g+(Math.atan2(t-(o-n),e-n)-f)/f*c:h+l+(Math.atan2(t-n,e-n)+Math.PI)/f*c}(X.x,X.y,m,v,y,e.kind));let Y=T?Math.min(1,K.peakOp*J.catchGain*X.w):0,E=e.lastTickMs>0?Math.min(200,Math.max(.5,r-e.lastTickMs)):e2;e.lastTickMs=r,e.envClock+=Math.min(E,34);let F=e=>1-Math.pow(1-e,E/e2),A=Math.max(1,K.relocFadeMs),P=Math.max(1,K.relocFadeOutMs),B=()=>{e.appearedAt=r,e.wanderS=0,e.wanderTargetS=0,e.wanderFrames=0,e.relocTween=q(0,1,A,G.smoothstep),j(e.relocTween,e.envClock)},I=t=>{e.relocNextIdx=t,e.relocTween=q(1,0,P,G.smoothstep),j(e.relocTween,e.envClock)};if(null!=(i=e.relocTween)&&i.done&&0===e.relocTween.to){let r=e.relocNextIdx;if(-2!==r||T||(r=-3),-3===r)e.cursorMode=!1,e.appearedAt=0,e.relocTween=null;else if(-2===r)e.cursorMode=!0,e.cursorArc=e.cursorTargetArc,e.glowOpacity=Y,B();else{e.currentIdx=r;let o=w[e.currentIdx],a=C(t,o.x,o.y,2);e.glowOpacity=K.baseOp+(K.peakOp-K.baseOp)*e0(K.lumLo,K.lumHi,a),B()}}if((!e.relocTween||e.relocTween.done)&&(0===e.appearedAt?(T?(e.cursorMode=!0,e.cursorArc=e.cursorTargetArc,e.glowOpacity=Y):(e.cursorMode=!1,e.currentIdx=$,e.glowOpacity=W),B()):T!==e.cursorMode?I(T?-2:-3):!e.cursorMode&&S&&I($)),e.cursorMode){T&&(e.glowOpacity=Y);let t=1-Math.pow(1-Math.max(.01,Math.min(1,J.catchFollow)),E/(1e3/60)),r=e.cursorTargetArc-e.cursorArc;r=(r%O+1.5*O)%O-O/2,e.cursorArc+=r*t}else e.glowOpacity+=(W-e.glowOpacity)*F(K.fadeRate);e.glowOpacity=Math.max(0,Math.min(1,e.glowOpacity)),e.relocMul=e.relocTween?Q(e.relocTween,e.envClock):1;let L=eQ(m,v,y,e.kind)/ej(140,40,20),U=K.wanderRange*L;if(e.wanderFrames+=E,e.wanderFrames>=e1&&(e.wanderTargetS=(2*Math.random()-1)*U,e.wanderFrames=0),e.wanderS+=(e.wanderTargetS-e.wanderS)*F(K.wanderLerp),e.pointMode){let t=w[e.currentIdx];c=t.x+e.wanderS,f=t.y,p=0,d=c,u=f}else{let t=e.cursorMode?e.cursorArc:w[e.currentIdx].arc+e.wanderS,r=K.inset*e.scale;eK(t,m,v,y,r,0,e.kind,e5),c=e5.x,f=e5.y,eK(t-.1,m,v,y,r,0,l=e.kind,eZ),eK(t+.1,m,v,y,r,0,l,eJ),p=Math.atan2(eJ.y-eZ.y,eJ.x-eZ.x),eK(t,m,v,y,r,K.extraOutward*L*e.scale,e.kind,e5),d=e5.x,u=e5.y}e.deform&&(e.deform(c,f,e5),c=e5.x,f=e5.y,e.deform(d,u,e5),d=e5.x,u=e5.y);let N="light"===a,D=N?function(e,t,r,o){if(!x)return R.r=255,R.g=255,R.b=255,R;let a=_(e,t,r),{glowPixels:i,glowPixelsW:n,glowPixelsH:s}=x,l=Math.max(0,a.bx-2),c=Math.min(n,a.bx+2+1),f=Math.max(0,a.by-2),p=Math.min(s,a.by+2+1),d=-1;R.r=255,R.g=255,R.b=255;for(let e=f;e<p;e++){let t=e*n;for(let e=l;e<c;e++){let r=(t+e)*4,o=i[r],a=i[r+1],n=i[r+2],s=Math.max(o,a,n),l=Math.min(o,a,n),c=(s>0?(s-l)/s:0)*(.35+s/255*.65);c>d&&(d=c,R.r=o,R.g=a,R.b=n)}}return R}(t,c,f,0):H(t,c,f,2);e.tintTween?e.tintTween.done&&(N?(e.tintFrom={r:e.tintFrom.r+(e.tintTarget.r-e.tintFrom.r)*e.tintTween.val,g:e.tintFrom.g+(e.tintTarget.g-e.tintFrom.g)*e.tintTween.val,b:e.tintFrom.b+(e.tintTarget.b-e.tintFrom.b)*e.tintTween.val},e.tintTarget={...D},e.tintTween=q(0,1,400),j(e.tintTween,r)):r>=e.tintHoldUntil&&(e.tintFrom={...e.tintTarget},e.tintTarget={...D},e.tintTween=q(0,1,400),j(e.tintTween,r),e.tintHoldUntil=r+2e3)):(e.tintFrom={...D},e.tintTarget={...D},e.tintTween=q(0,1,400),j(e.tintTween,r),e.tintHoldUntil=N?0:r+2e3),Q(e.tintTween,r);let V=e.tintTween.val;if(N)g=Math.round(e.tintFrom.r+(e.tintTarget.r-e.tintFrom.r)*V),h=Math.round(e.tintFrom.g+(e.tintTarget.g-e.tintFrom.g)*V),b=Math.round(e.tintFrom.b+(e.tintTarget.b-e.tintFrom.b)*V);else{let t=e.tintFrom.r+(e.tintTarget.r-e.tintFrom.r)*V,r=e.tintFrom.g+(e.tintTarget.g-e.tintFrom.g)*V,o=e.tintFrom.b+(e.tintTarget.b-e.tintFrom.b)*V,a=Math.max(t,r,o)||1;g=Math.round(t/a*255),h=Math.round(r/a*255),b=Math.round(o/a*255)}let Z=`rgb(${g},${h},${b})`,ee="#ffffff";if(N){let e=n(g,h,b),[t,r,o]=s(e[0],Math.min(1,2.625*e[1]),Math.max(.31,1.008*e[2]));ee=`rgb(${t},${r},${o})`}let et=Math.max(0,Math.min(1,o))*(e.pointMode?K.pointGain:1),er=Math.min(1,e.glowOpacity*K.haloOpMul*et),eo=Math.min(1,e.glowOpacity*K.extraIntensity*et);if(Math.abs(e.relocMul-e.dEnv)>.002){let t=e.relocMul>=.998&&e.dEnv<.998;e.dEnv=e.relocMul,e.env.style.opacity=e.relocMul.toFixed(3),t&&(e.dirty=!0)}let ea=!!(e.relocTween&&!e.relocTween.done)||e.cursorMode,ei=!(.25>Math.abs(c-e.dX)&&.25>Math.abs(f-e.dY)&&.01>Math.abs(p-e.dAng)&&.25>Math.abs(d-e.dEX)&&.25>Math.abs(u-e.dEY)),en=!(.004>Math.abs(er-e.dHOp)&&.004>Math.abs(eo-e.dEOp)),es=Z!==e.dHaloTint||ee!==e.dExtraTint;return(e.dirty||ei||en||es)&&(e.dX=c,e.dY=f,e.dAng=p,e.dEX=d,e.dEY=u,e.dHOp=er,e.dEOp=eo,e.dHaloTint=Z,e.dExtraTint=ee,e.dirty=!1,function(e,t,r,o,a,i,n,s,l,c){let{ctx:f,canvas:p,dpr:d,margin:u}=e;if(f.setTransform(1,0,0,1,0,0),f.globalCompositeOperation="source-over",f.globalAlpha=1,f.clearRect(0,0,p.width,p.height),n<=.002&&s<=.002||!e.maskReady)return;let g=n>.002?eq(e.halo,...e7(l),e.haloTint):null,h=s>.002?"#ffffff"===c?e.extra.canvas:eq(e.extra,...e7(c),e.extraTint):null,b=l=>{g&&(f.save(),f.translate(t+u,r+u),f.rotate(o),f.globalAlpha=n*l,f.drawImage(g,-e.halo.ax,-e.halo.ay,e.halo.w,e.halo.h),f.restore()),h&&(f.save(),f.translate(a+u,i+u),f.rotate(o),f.globalAlpha=s*l,f.drawImage(h,-e.extra.ax,-e.extra.ay,e.extra.w,e.extra.h),f.restore())};if(!e.pointMode&&e.surroundPath&&e.bandPath){f.save(),f.scale(d,d),f.clip(e.surroundPath,"evenodd"),b(.5),f.restore(),f.save(),f.scale(d,d),f.clip(e.bandPath,"evenodd"),b(1),f.restore();return}f.save(),f.scale(d,d),b(1),f.restore();let m=e.maskAlpha;if(!m)return;let x=f.getImageData(0,0,p.width,p.height),v=x.data;for(let e=0,t=3;e<m.length;e++,t+=4){let r=m[e];if(255!==r){if(0===r){v[t]=0;continue}v[t]=(v[t]*r+127)/255}}f.putImageData(x,0,0)}(e,c,f,p,d,u,er,eo,Z,ee)),ea}(r.handles,e,t,e.opacityMul*e.glowGain,r.themeRef.current)};let tF=(0,a.forwardRef)(function({children:e,variant:t="button",preset:r="chromatic",theme:i="auto",strength:n=1,glowGain:s=1,paused:l=!1,borderRadius:c,normalizeHostStyles:p=!0,reflectionTargets:d,disableGlow:u=!1,innerShadow:g,shaderScale:h,ringCssPx:b,scale:m=1,mask:y,glowMode:w="mask",className:z,style:k,...M},_){let W=(0,a.useRef)(null),S=(0,a.useRef)(null),R=(0,a.useRef)(null),C=(0,a.useRef)(null),H=(0,a.useRef)(null),X=(0,a.useRef)(null),E=(0,a.useRef)(null),F=(0,a.useRef)(null),P=(0,a.useRef)("dark"),B=(0,a.useRef)(0),[I,U]=(0,a.useState)(!1),N=function(e){let[t,r]=(0,a.useState)(()=>"auto"!==e?e:typeof window>"u"||!window.matchMedia||window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");return(0,a.useEffect)(()=>{if("auto"!==e)return void r(e);if(typeof window>"u"||!window.matchMedia)return;let t=window.matchMedia("(prefers-color-scheme: dark)"),o=()=>r(t.matches?"dark":"light");return o(),t.addEventListener("change",o),()=>t.removeEventListener("change",o)},[e]),t}(i),G=(0,a.useMemo)(()=>(function(){var e;if(null!==v)return v;if(typeof document>"u")return v=!1;try{let t=document.createElement("canvas").getContext("webgl2");v=!!t,null==(e=null==t?void 0:t.getExtension("WEBGL_lose_context"))||e.loseContext()}catch{v=!1}return v})(),[]);P.current=N;let q="circle"===t?"circle":"pill";(0,a.useImperativeHandle)(_,()=>W.current,[]);let j=(e,t)=>"circle"===q?Math.min(e,t)/2:Math.min("number"==typeof c?c:(()=>{var e;let t=null==(e=X.current)?void 0:e.firstElementChild;if(t){let e=parseFloat(getComputedStyle(t).borderTopLeftRadius);if(Number.isFinite(e)&&e>0)return e}return B.current})(),Math.min(e,t)/2);(0,a.useEffect)(()=>{G&&function(e,t){let r=$();r.preset=f[e].modes[t],r.presetDirty=!0}(r,N)},[r,N,G]),(0,a.useEffect)(()=>{let e=E.current;e&&Y(e,{mask:y??null})},[y]),(0,a.useEffect)(()=>{let e=E.current;e&&Y(e,{paused:l})},[l]),(0,a.useEffect)(()=>{let e=E.current;if(!e)return;let t={};void 0!==h&&(t.shaderScale=h),void 0!==b&&(t.ringCssPx=b),void 0!==m&&(t.scale=m),Object.keys(t).length>0&&Y(e,t)},[h,b,m]),(0,a.useLayoutEffect)(()=>{var e,t;let r,o=S.current,a=W.current,i=R.current;if(!o||!a||!G)return;{let e=parseFloat(getComputedStyle(a).borderTopLeftRadius);B.current=Number.isFinite(e)?e:0}let n=()=>{let e=a.getBoundingClientRect(),t=Math.max(1,Math.round(e.width)),r=Math.max(1,Math.round(e.height));return{cssWidth:t,cssHeight:r,cornerRadius:j(t,r)}},s=n();E.current=function(e){let t=$(),r=e.hostCanvas.getContext("2d",{alpha:!0});if(!r)throw Error("metal-fx: canvas 2D context unavailable");let o=e.scale??1,a={canvas:e.hostCanvas,ctx:r,cssWidth:e.cssWidth,cssHeight:e.cssHeight,cornerRadius:e.cornerRadius,kind:e.kind,ringCssPx:e.ringCssPx??("circle"===e.kind?2:1)*o,shaderScale:e.shaderScale??("circle"===e.kind?1.3:1.6)*o,opacityMul:e.opacityMul??1,glowGain:e.glowGain??1,visible:!0,paused:e.paused??!1,everCopied:!1,frozen:null,dpr:"u">typeof window&&window.devicePixelRatio||1,scale:o,onAfterFrame:e.onAfterFrame,onComposite:e.onComposite,onFirstCopy:e.onFirstCopy,mask:e.mask??null,deform:null,deformLayers:null,overscan:0,cursorLight:null,glowFast:!1,rawCanvas:null,wantRaw:!1,ringCanvas:null,wantRing:!1};return A(a),t.instances.add(a),0===t.rafId&&null===t.pausedAtMs&&D(),a}({onComposite:()=>{let e=E.current,t=F.current;e&&t&&function(e,t){if(e.deform=t,!e.pointMode)if(t){let r=function(e,t){if(!e)return 0;O(0,0,t.width,t.height,t.cornerRadius,e,t.mO);let r=0,o=t.mO.xy;for(let e=0;e<t.mO.n;e+=4)r+=1.37*o[2*e]+o[2*e+1];return r}(t,e);r!==e.maskSum&&(e.maskSum=r,e4(e,t),e.maskDeformed=!0,e.dirty=!0)}else e.maskDeformed&&(e.maskSum=NaN,e4(e,null),e.maskDeformed=!1,e.dirty=!0)}(t,e.deform);let r=H.current;e&&r&&tt(r,e.deform)},hostCanvas:o,cssWidth:s.cssWidth,cssHeight:s.cssHeight,cornerRadius:s.cornerRadius,kind:q,paused:l,shaderScale:h,ringCssPx:b,scale:m,mask:y??null,onFirstCopy:()=>U(!0)}),a.style.setProperty("--mfx-radius",`${s.cornerRadius}px`),a.style.borderRadius=`${s.cornerRadius}px`;let c=(e,t)=>{if(!y||"ring"===w)return{};let r=window.devicePixelRatio||1,o=document.createElement("canvas");o.width=Math.max(1,Math.round(e*r)),o.height=Math.max(1,Math.round(t*r));let a=o.getContext("2d");if(!a)return{};a.fillStyle="#fff",y(a,o.width,o.height,r);let i=a.getImageData(0,0,o.width,o.height).data,n=[],s=Math.max(1,Math.round(2*r));for(let e=s>>1;e<o.height;e+=s)for(let t=s>>1;t<o.width;t+=s)i[(e*o.width+t)*4+3]>128&&n.push({x:t/r,y:e/r});return{samplePoints:n,maskDataUrl:o.toDataURL("image/png")}};i&&(F.current=e3(i,{width:s.cssWidth,height:s.cssHeight,cornerRadius:s.cornerRadius,kind:q,scale:m,...c(s.cssWidth,s.cssHeight)}));let f=e=>{var t;if(!i)return;let r=F.current;i.innerHTML="",F.current=e3(i,{width:e.cssWidth,height:e.cssHeight,cornerRadius:e.cornerRadius,kind:q,scale:m,...c(e.cssWidth,e.cssHeight)}),r&&(t=F.current,r.pointMode===t.pointMode&&(t.currentIdx=Math.min(r.currentIdx,Math.max(0,t.perim.length-1)),t.appearedAt=r.appearedAt,t.glowOpacity=r.glowOpacity,t.relocTween=r.relocTween,t.relocNextIdx=r.relocNextIdx,t.relocMul=r.relocMul,t.envClock=r.envClock,t.cursorMode=r.cursorMode,t.cursorArc=r.cursorArc,t.cursorTargetArc=r.cursorTargetArc,t.lastTickMs=r.lastTickMs,t.wanderS=r.wanderS,t.wanderTargetS=r.wanderTargetS,t.wanderFrames=r.wanderFrames,t.tintFrom=r.tintFrom,t.tintTarget=r.tintTarget,t.tintTween=r.tintTween,t.tintHoldUntil=r.tintHoldUntil,t.dEnv=r.relocMul,t.env.style.opacity=r.relocMul.toFixed(3)));let o=E.current;o&&F.current&&tE.set(o,{handles:F.current,themeRef:P})},p=e=>{let t=C.current,r=E.current;tr(H.current),H.current=null;let o=g?!0===g?e9:{...e9,...g}:null;t&&r&&o&&(H.current=function(e,t,r){let o=Math.min(3,"u">typeof window&&window.devicePixelRatio||1),a=Math.ceil(3*r.blur+Math.abs(r.offsetY)+1),i=t.width+2*a,n=t.height+2*a,s=document.createElement("canvas");s.className="metal-fx-rim-canvas",s.setAttribute("aria-hidden","true"),s.width=Math.ceil(i*o),s.height=Math.ceil(n*o),s.style.cssText=`position:absolute;left:${-a}px;top:${-a}px;width:${i}px;height:${n}px;pointer-events:none`;let l=s.getContext("2d"),c=document.createElement("canvas");c.width=s.width,c.height=s.height;let f=c.getContext("2d",{willReadFrequently:!0});if(!l||!f)return null;e.appendChild(s);let p={canvas:s,ctx:l,scratch:c,sctx:f,width:t.width,height:t.height,cornerRadius:t.cornerRadius,kind:t.kind,ring:t.ring,margin:a,dpr:o,opts:r,mO:T(),mI:T(),sum:NaN};return tt(p,null,!0),p}(t,{width:e.cssWidth,height:e.cssHeight,cornerRadius:e.cornerRadius,kind:q,ring:r.ringCssPx},o))};p(s);let d=0,u=s.cssWidth,v=s.cssHeight,z=s.cornerRadius,k=new ResizeObserver(()=>{0===d&&(d=requestAnimationFrame(()=>{d=0;let e=n(),t=E.current;!t||.5>Math.abs(e.cssWidth-u)&&.5>Math.abs(e.cssHeight-v)&&.5>Math.abs(e.cornerRadius-z)||(u=e.cssWidth,v=e.cssHeight,z=e.cornerRadius,Y(t,{cssWidth:e.cssWidth,cssHeight:e.cssHeight,cornerRadius:e.cornerRadius}),a.style.setProperty("--mfx-radius",`${e.cornerRadius}px`),a.style.borderRadius=`${e.cornerRadius}px`,f(e),p(e))}))});k.observe(a);let M=null,_=()=>{let e=E.current;if(e&&("u">typeof window&&window.devicePixelRatio||1)!==e.dpr&&(A(e),L(e),1)){let e=n();f(e),p(e)}X()},X=()=>{null==M||M.removeEventListener("change",_),null==(M="function"==typeof window.matchMedia?window.matchMedia(`(resolution: ${window.devicePixelRatio||1}dppx)`):null)||M.addEventListener("change",_)};X();let I=(e=e=>{e&&E.current&&f(n())},Z.add(e),()=>{Z.delete(e)}),N=null;return"u">typeof IntersectionObserver&&(N=new IntersectionObserver(e=>{let t=E.current;if(t)for(let o of e){var r;t.visible=r=o.isIntersecting,r&&x&&0===x.rafId&&null===x.pausedAtMs&&!x.contextLost&&D()}},{rootMargin:"64px"})).observe(a),E.current&&F.current&&(tE.set(E.current,{handles:F.current,themeRef:P}),t=E.current,x&&(x.glowQueue.includes(t)||x.glowQueue.push(t))),eo++,ea||0===eo||typeof document>"u"||(r="(pointer: fine)","function"==typeof window.matchMedia&&window.matchMedia(r).matches&&(ea=!0,document.addEventListener("pointermove",eM,{passive:!0}),document.addEventListener("pointerleave",eW),document.addEventListener("pointercancel",eW),document.addEventListener("keydown",e_,{passive:!0}),document.addEventListener("visibilitychange",eW),window.addEventListener("blur",eW))),function(){let e=globalThis;e.__MFX_DEBUG__&&(e.__mfxGlow=tE)}(),()=>{0===(eo=Math.max(0,eo-1))&&ea&&(ea=!1,document.removeEventListener("pointermove",eM),document.removeEventListener("pointerleave",eW),document.removeEventListener("pointercancel",eW),document.removeEventListener("keydown",e_),document.removeEventListener("visibilitychange",eW),window.removeEventListener("blur",eW),0!==ei&&(cancelAnimationFrame(ei),ei=0),eu&&(eu.cursorLight=null,eu=null),ep=0,ed=0,em&&(em.remove(),em=null,ex="",ev=-1,ey=-1,ew=!1),eI(),eR&&(eR.remove(),eR=null)),tr(H.current),H.current=null,k.disconnect(),null==M||M.removeEventListener("change",_),null==N||N.disconnect(),I(),0!==d&&cancelAnimationFrame(d);let e=E.current;e&&(tE.delete(e),function(e){if(!x)return;let t=x.glowQueue.indexOf(e);-1!==t&&x.glowQueue.splice(t,1)}(e),function(e){if(!x)return;x.instances.delete(e);let t=x.glowQueue.indexOf(e);-1!==t&&x.glowQueue.splice(t,1),0===x.instances.size&&(V(),function(){var e;if(!x)return;let{gl:t,program:r,buffer:o,frameBitmap:a,dummyTexture:i}=x;try{null==a||a.close(),t.deleteBuffer(o),t.deleteProgram(r),i&&t.deleteTexture(i),null==(e=t.getExtension("WEBGL_lose_context"))||e.loseContext()}catch{}x=null}())}(e)),E.current=null,F.current=null,i&&(i.innerHTML="")}},[q]),(0,a.useEffect)(()=>{let e=E.current;e&&Y(e,{opacityMul:Math.max(0,Math.min(1,n)),glowGain:Math.max(0,s)})},[n,s,t]),(0,a.useEffect)(()=>{let e=E.current,t=W.current;if(!e||!t||!d||"dark"!==N)return;e.onAfterFrame=tS;let r=d.flatMap(e=>{let t="current"in e?e:e.ref,r="current"in e?1:e.strength??1;return t.current?[{el:t.current,strength:r}]:[]});for(let{el:o,strength:a}of r)!function(e,t,r,o=1){if(typeof document>"u"||to.has(e.tagName))return;for(let t of tf)if(t.el===e)return t.strength=o,t;let a=document.createElement("div");a.setAttribute("data-metal-fx-reflection",""),a.setAttribute("aria-hidden","true");let i=document.createElement("canvas");i.className="metal-fx-reflection-canvas";let n=i.getContext("2d",{alpha:!0,willReadFrequently:!0});if(!n)return;let s=document.createElement("canvas");s.className="metal-fx-reflection-stroke-canvas";let l=s.getContext("2d",{alpha:!0,willReadFrequently:!0});if(!l)return;a.appendChild(i),a.appendChild(s);let c=getComputedStyle(e),f=!1;"static"===c.position&&(e.style.position="relative",f=!0);let p=!1;"isolate"!==c.isolation&&(e.style.isolation="isolate",p=!0),e.setAttribute("data-metal-fx-reflect-host",""),e.insertBefore(a,e.firstChild);let d=tl(e),u={el:e,anchor:t,anchorEl:r,strength:o,wrap:a,canvas:i,ctx:n,strokeCanvas:s,strokeCtx:l,cornerRadius:ts(e),hairlineWidth:d.width,hairlineOuterCssPx:d.outerCssPx,appliedPositionRelative:f,appliedIsolation:p,resizeObserver:null,mutationObserver:null};"u">typeof ResizeObserver&&(u.resizeObserver=new ResizeObserver(()=>tc(u)),u.resizeObserver.observe(u.el)),"u">typeof MutationObserver&&(u.mutationObserver=new MutationObserver(()=>tc(u)),u.mutationObserver.observe(u.el,{attributes:!0,attributeFilter:["style","class"]})),tf.add(u),ty(!0)}(o,e,t,a);return()=>{for(let{el:t}of(e.onAfterFrame=void 0,r))!function(e){for(let t of tf)if(t.el===e){(function(e){var t,r;null==(t=e.resizeObserver)||t.disconnect(),e.resizeObserver=null,null==(r=e.mutationObserver)||r.disconnect(),e.mutationObserver=null})(t),t.canvas.width=0,t.canvas.height=0,t.strokeCanvas.width=0,t.strokeCanvas.height=0,t.wrap.parentNode===t.el&&t.el.removeChild(t.wrap),t.el.removeAttribute("data-metal-fx-reflect-host"),t.appliedPositionRelative&&(t.el.style.position=""),t.appliedIsolation&&(t.el.style.isolation=""),tf.delete(t),0===tf.size&&ty(!1);return}}(t)}},[d,N]),(0,a.useEffect)(()=>{let e=W.current,t=E.current;if(!e||!t)return;let r=j(t.cssWidth,t.cssHeight);Y(t,{cornerRadius:r}),e.style.setProperty("--mfx-radius",`${r}px`),e.style.borderRadius=`${r}px`},[c,N,t,q]);let Q=(0,a.useMemo)(()=>({...k,"--mfx-strength":String(Math.min(1,Math.max(0,n))),opacity:+!!I,visibility:I?"visible":"hidden",transition:I?"opacity 0.15s ease-out":"none"}),[k,n,I]);return G?(0,o.jsxs)("div",{...M,ref:W,className:z?`metal-fx-root ${z}`:"metal-fx-root","data-variant":t,"data-shape":q,"data-theme":N,"data-paused":l?"true":void 0,"data-normalize":p?"true":"false",style:Q,children:[(0,o.jsx)("canvas",{ref:S,className:"metal-fx-canvas",style:tX}),(0,o.jsx)("div",{className:"metal-fx-inner","aria-hidden":"true",style:tT}),(0,o.jsx)("div",{ref:R,"aria-hidden":"true",style:{...tO,display:u?"none":void 0}}),g?(0,o.jsx)("div",{ref:C,"aria-hidden":"true",style:tY}):null,(0,o.jsx)("div",{ref:X,className:"metal-fx-content",children:e})]}):(0,o.jsx)("div",{...M,ref:W,className:z?`metal-fx-fallback ${z}`:"metal-fx-fallback","data-metal-fx-unsupported":"",style:{display:"inline-flex",...k},children:e})});tF.displayName="MetalFx",Object.freeze({metalOpacity:.62,shaderScale:2.8,glowGain:2.5,innerShadow:{offsetY:1,blur:.5,alpha:.9}}),Object.freeze({metalOpacity:.8,shaderScale:1.6,core:Object.freeze({r:46,blur:100,a:.94,size:49}),gradient:0,glow:.41}),Object.freeze({enabled:!0,applyTo:"ring",strength:.74,fadeInMs:200,fadeOutMs:350,smoothMs:140,reach:36,blob:13,liquidBlob:10,maxDisp:9,gain:.6,pressGain:.55,pullGain:.49,press:5,liquid:7.5,liquidReach:8,liquidStiffness:53,liquidDamping:9,stiffness:260,damping:13,mass:1,follow:.32,mapRes:2,smooth:.25})}}]);