(()=>{var e={n:o=>{var r=o&&o.__esModule?()=>o.default:()=>o;return e.d(r,{a:r}),r},d:(o,r)=>{for(var t in r)e.o(r,t)&&!e.o(o,t)&&Object.defineProperty(o,t,{enumerable:!0,get:r[t]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},o={};(()=>{"use strict";e.r(o);const r=flarum.core.compat["forum/app"];var t=e.n(r);const n=flarum.core.compat["common/extend"],a=flarum.core.compat["forum/components/SessionDropdown"];var i=e.n(a);const c=flarum.core.compat["common/components/LinkButton"];var u=e.n(c);t().initializers.add("ianm/same-page-admin",(function(){(0,n.extend)(i().prototype,"items",(function(e){t().forum.attribute("adminUrl")&&e.replace("administration",m(u(),{icon:"fas fa-wrench",href:t().forum.attribute("adminUrl"),external:!0},t().translator.trans("core.forum.header.admin_button")),0)}))}))})(),module.exports=o})();
//# sourceMappingURL=forum.js.map