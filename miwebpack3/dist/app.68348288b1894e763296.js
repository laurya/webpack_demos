!function(e){function t(t){for(var n,l,a=t[0],c=t[1],i=t[2],d=0,s=[];d<a.length;d++)l=a[d],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&s.push(o[l][0]),o[l]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(f&&f(t);s.length;)s.shift()();return u.push.apply(u,i||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,a=1;a<r.length;a++){var c=r[a];0!==o[c]&&(n=!1)}n&&(u.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},o={1:0},u=[];function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var i=0;i<a.length;i++)t(a[i]);var f=c;u.push([3,0]),r()}([,,function(e,t,r){"use strict";function n(e){return e.reduce((function(e,t){return e+t}))}Object.defineProperty(t,"__esModule",{value:!0}),t.getTotalScore=n,t.getAvg=function(e){return n(e)/e.length},console.log("We are in: ".concat("production"))},function(e,t,r){r(4),e.exports=r(5)},,function(e,t,r){"use strict";(function(e){var t=l(r(0)),n=l(r(8)),o=r(12),u=r(14);function l(e){return e&&e.__esModule?e:{default:e}}var a=r(16);e("body").css("background-color","lightSkyBlue");var c=document.createElement("img");c.src=a,document.getElementById("imgContainer").appendChild(c),n.default.render(t.default.createElement("div",null,t.default.createElement("h1",null,"Hello from React DOM"),t.default.createElement(o.AverageComponent,null),t.default.createElement(u.TotalScoreComponent,null)),document.getElementById("root"))}).call(this,r(6))},,,,,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AverageComponent=void 0;var n,o=(n=r(0))&&n.__esModule?n:{default:n},u=r(2);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,o=!1,u=void 0;try{for(var l,a=e[Symbol.iterator]();!(n=(l=a.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){o=!0,u=e}finally{try{n||null==a.return||a.return()}finally{if(o)throw u}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var a=r(13);t.AverageComponent=function(){var e=l(o.default.useState(0),2),t=e[0],r=e[1];return o.default.useEffect((function(){r((0,u.getAvg)([90,75,60,99,94,30]))}),[]),o.default.createElement("div",null,o.default.createElement("span",{className:a.resultBackground},"Students average: ",t),o.default.createElement("div",{className:"jumbotron ".concat(a.resultBackground)},o.default.createElement("h1",null,"Jumbotron students average: ",t)))}},function(e,t,r){e.exports={"result-background":"averageComponentStyles__result-background__Z3Vf0",resultBackground:"averageComponentStyles__result-background__Z3Vf0"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TotalScoreComponent=void 0;var n,o=(n=r(0))&&n.__esModule?n:{default:n},u=r(2);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,o=!1,u=void 0;try{for(var l,a=e[Symbol.iterator]();!(n=(l=a.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){o=!0,u=e}finally{try{n||null==a.return||a.return()}finally{if(o)throw u}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var a=r(15);t.TotalScoreComponent=function(){var e=l(o.default.useState(0),2),t=e[0],r=e[1];return o.default.useEffect((function(){r((0,u.getTotalScore)([10,20,30,40,50]))}),[]),o.default.createElement("div",null,o.default.createElement("span",{className:a.resultBackground},"Students total score: ",t))}},function(e,t,r){e.exports={"result-background":"totalScoreComponentStyles__result-background__3eH-g",resultBackground:"totalScoreComponentStyles__result-background__3eH-g"}},function(e,t,r){e.exports=r.p+"911fdc0e463694e3161fa716801097d8.png"}]);