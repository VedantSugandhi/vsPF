import{i as ke,t as ne}from"../chunks/projects.b048f02a.js";import{s as he,e as se,i as B,d as h,f as w,a as M,l as G,g as E,h as C,c as N,m as H,j as b,K as g,L as S,x as oe,p as X,u as me,O as z,I as te,n as J,M as ee}from"../chunks/scheduler.7a274a43.js";import{S as ge,i as ve,a as j,g as Q,t as D,c as W,b as O,d as U,m as A,e as L}from"../chunks/index.28409b7f.js";import{U as Y,g as Z,e as F}from"../chunks/UIcon.dad4679b.js";import{b as ae}from"../chunks/paths.50bdce81.js";import{C as ye}from"../chunks/CardLogo.ffd18bf4.js";import{M as we}from"../chunks/app.a2dc871f.js";import{B as Ee,M as je}from"../chunks/Banner.7cd393ba.js";import{T as Ie}from"../chunks/TabTitle.638a84a3.js";import{C as $e}from"../chunks/Chip.beb9330e.js";import{C as be}from"../chunks/CardDivider.09b854d8.js";function Ce({params:n}){if(n.slug)return{project:ke.find(l=>l.slug===n.slug)}}const rt=Object.freeze(Object.defineProperty({__proto__:null,load:Ce},Symbol.toStringTag,{value:"Module"}));function ie(n){var V;let e,l,t,r,s,a,o,i,d,p,k=((V=n[0])==null?void 0:V.label)+"",f,m,P,y;return s=new Y({props:{icon:"i-carbon-close"}}),{c(){e=w("div"),l=w("div"),t=w("div"),r=w("button"),O(s.$$.fragment),a=M(),o=w("div"),d=M(),p=w("p"),f=G(k),this.h()},l(c){e=E(c,"DIV",{class:!0});var q=C(e);l=E(q,"DIV",{class:!0});var T=C(l);t=E(T,"DIV",{class:!0});var $=C(t);r=E($,"BUTTON",{class:!0});var I=C(r);U(s.$$.fragment,I),I.forEach(h),$.forEach(h),a=N(T),o=E(T,"DIV",{class:!0,style:!0}),C(o).forEach(h),d=N(T),p=E(T,"P",{class:!0});var u=C(p);f=H(u,k),u.forEach(h),T.forEach(h),q.forEach(h),this.h()},h(){var c;b(r,"class","cursor-pointer aspect-square rounded-full border-[var(--border)] border-1px bg-[transparent] border-solid hover:border-[var(--border-hover)]"),b(t,"class","self-end"),b(o,"class","aspect-video col bg-contain w-100% rounded-xl bg-no-repeat bg-contains bg-center"),b(o,"style",i=`background-image: url(${(c=n[0])==null?void 0:c.src});`),b(p,"class","font-italic m-t-auto m-x-auto bg-[var(--main-60)] border-solid border-1px border-[var(--border)] p-x-5 p-2 rounded-xl"),b(l,"class","w-full w-100% md:w-80% lg:w-70% col text-center gap-5 bg-[var(--main)] border-solid border-1px border-[var(--border)] p-5 rounded-xl"),b(e,"class","fixed inset-0px top-51px bg-[#000000dd] col-center p-50px")},m(c,q){B(c,e,q),g(e,l),g(l,t),g(t,r),A(s,r,null),g(l,a),g(l,o),g(l,d),g(l,p),g(p,f),m=!0,P||(y=[S(r,"click",function(){oe(n[1])&&n[1].apply(this,arguments)}),S(r,"keydown",n[11]),S(r,"keypress",n[12]),S(r,"keyup",n[13]),S(l,"click",Ve),S(l,"keydown",n[7]),S(l,"keypress",n[8]),S(l,"keyup",n[9]),S(l,"keyup",n[10]),S(e,"click",function(){oe(n[1])&&n[1].apply(this,arguments)}),S(e,"click",Pe),S(e,"keydown",n[3]),S(e,"keypress",n[4]),S(e,"keyup",n[5]),S(e,"keyup",n[6])],P=!0)},p(c,q){var T,$;n=c,(!m||q&1&&i!==(i=`background-image: url(${(T=n[0])==null?void 0:T.src});`))&&b(o,"style",i),(!m||q&1)&&k!==(k=(($=n[0])==null?void 0:$.label)+"")&&X(f,k)},i(c){m||(j(s.$$.fragment,c),m=!0)},o(c){D(s.$$.fragment,c),m=!1},d(c){c&&h(e),L(s),P=!1,me(y)}}}function De(n){let e,l,t=n[2]&&ie(n);return{c(){t&&t.c(),e=se()},l(r){t&&t.l(r),e=se()},m(r,s){t&&t.m(r,s),B(r,e,s),l=!0},p(r,[s]){r[2]?t?(t.p(r,s),s&4&&j(t,1)):(t=ie(r),t.c(),j(t,1),t.m(e.parentNode,e)):t&&(Q(),D(t,1,1,()=>{t=null}),W())},i(r){l||(j(t),l=!0)},o(r){D(t),l=!1},d(r){r&&h(e),t&&t.d(r)}}}const Ve=n=>n.stopPropagation(),Pe=n=>n.stopPropagation();function xe(n,e,l){let t,{screenshot:r=void 0}=e,{onClose:s=()=>{l(0,r=void 0)}}=e;function a(c){z.call(this,n,c)}function o(c){z.call(this,n,c)}function i(c){z.call(this,n,c)}function d(c){z.call(this,n,c)}function p(c){z.call(this,n,c)}function k(c){z.call(this,n,c)}function f(c){z.call(this,n,c)}function m(c){z.call(this,n,c)}function P(c){z.call(this,n,c)}function y(c){z.call(this,n,c)}function V(c){z.call(this,n,c)}return n.$$set=c=>{"screenshot"in c&&l(0,r=c.screenshot),"onClose"in c&&l(1,s=c.onClose)},n.$$.update=()=>{n.$$.dirty&1&&l(2,t=typeof r<"u")},[r,s,t,a,o,i,d,p,k,f,m,P,y,V]}class Te extends ge{constructor(e){super(),ve(this,e,xe,De,he,{screenshot:0,onClose:1})}}function ce(n,e,l){const t=n.slice();return t[11]=e[l],t[13]=l,t}function fe(n,e,l){const t=n.slice();return t[11]=e[l],t}function ue(n,e,l){const t=n.slice();return t[11]=e[l],t}function Se(n){let e,l,t,r,s,a,o,i,d,p,k,f,m,P;l=new Ee({props:{img:Z(n[0].project.logo),$$slots:{default:[Oe]},$$scope:{ctx:n}}});const y=[Ae,Ue],V=[];function c(I,u){return I[0].project.description?0:1}a=c(n),o=V[a]=y[a](n),p=new be({});const q=[qe,Le],T=[];function $(I,u){return I[4].length>0?0:1}return f=$(n),m=T[f]=q[f](n),{c(){e=w("div"),O(l.$$.fragment),t=M(),r=w("div"),s=w("div"),o.c(),i=M(),d=w("div"),O(p.$$.fragment),k=M(),m.c(),this.h()},l(I){e=E(I,"DIV",{class:!0});var u=C(e);U(l.$$.fragment,u),t=N(u),r=E(u,"DIV",{class:!0});var _=C(r);s=E(_,"DIV",{class:!0});var x=C(s);o.l(x),x.forEach(h),i=N(_),d=E(_,"DIV",{class:!0});var v=C(d);U(p.$$.fragment,v),v.forEach(h),k=N(_),m.l(_),_.forEach(h),u.forEach(h),this.h()},h(){b(s,"class","px-10px m-y-5"),b(d,"class","w-100% m-t-8"),b(r,"class","pt-3 pb-1 overflow-x-hidden w-full"),b(e,"class","flex flex-col items-center overflow-x-hidden")},m(I,u){B(I,e,u),A(l,e,null),g(e,t),g(e,r),g(r,s),V[a].m(s,null),g(r,i),g(r,d),A(p,d,null),g(r,k),T[f].m(r,null),P=!0},p(I,u){const _={};u&1&&(_.img=Z(I[0].project.logo)),u&262145&&(_.$$scope={dirty:u,ctx:I}),l.$set(_);let x=a;a=c(I),a===x?V[a].p(I,u):(Q(),D(V[x],1,1,()=>{V[x]=null}),W(),o=V[a],o?o.p(I,u):(o=V[a]=y[a](I),o.c()),j(o,1),o.m(s,null)),m.p(I,u)},i(I){P||(j(l.$$.fragment,I),j(o),j(p.$$.fragment,I),j(m),P=!0)},o(I){D(l.$$.fragment,I),D(o),D(p.$$.fragment,I),D(m),P=!1},d(I){I&&h(e),L(l),V[a].d(),L(p),T[f].d()}}}function Me(n){let e,l,t,r,s="Could not load project data...",a;return l=new Y({props:{icon:"i-carbon-cube",classes:"text-3.5em"}}),{c(){e=w("div"),O(l.$$.fragment),t=M(),r=w("p"),r.textContent=s,this.h()},l(o){e=E(o,"DIV",{class:!0});var i=C(e);U(l.$$.fragment,i),t=N(i),r=E(i,"P",{class:!0,["data-svelte-h"]:!0}),te(r)!=="svelte-18mwztv"&&(r.textContent=s),i.forEach(h),this.h()},h(){b(r,"class","font-300"),b(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]")},m(o,i){B(o,e,i),A(l,e,null),g(e,t),g(e,r),a=!0},p:J,i(o){a||(j(l.$$.fragment,o),a=!0)},o(o){D(l.$$.fragment,o),a=!1},d(o){o&&h(e),L(l)}}}function Ne(n){let e=n[0].project.name+"",l;return{c(){l=G(e)},l(t){l=H(t,e)},m(t,r){B(t,l,r)},p(t,r){r&1&&e!==(e=t[0].project.name+"")&&X(l,e)},d(t){t&&h(l)}}}function Be(n){let e,l,t,r,s=n[11].label+"",a,o,i;return l=new Y({props:{icon:"i-carbon-link"}}),{c(){e=w("div"),O(l.$$.fragment),t=M(),r=w("span"),a=G(s),o=M(),this.h()},l(d){e=E(d,"DIV",{class:!0});var p=C(e);U(l.$$.fragment,p),t=N(p),r=E(p,"SPAN",{});var k=C(r);a=H(k,s),k.forEach(h),p.forEach(h),o=N(d),this.h()},h(){b(e,"class","row-center gap-2")},m(d,p){B(d,e,p),A(l,e,null),g(e,t),g(e,r),g(r,a),B(d,o,p),i=!0},p(d,p){(!i||p&1)&&s!==(s=d[11].label+"")&&X(a,s)},i(d){i||(j(l.$$.fragment,d),i=!0)},o(d){D(l.$$.fragment,d),i=!1},d(d){d&&(h(e),h(o)),L(l)}}}function de(n){let e,l;return e=new $e({props:{href:n[11].to,$$slots:{default:[Be]},$$scope:{ctx:n}}}),{c(){O(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,r){A(e,t,r),l=!0},p(t,r){const s={};r&1&&(s.href=t[11].to),r&262145&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){l||(j(e.$$.fragment,t),l=!0)},o(t){D(e.$$.fragment,t),l=!1},d(t){L(e,t)}}}function ze(n){let e,l,t,r=n[11].name+"",s,a,o;return e=new ye({props:{src:Z(n[11].logo),alt:n[11].name,radius:"0px",size:15,classes:"mr-2"}}),{c(){O(e.$$.fragment),l=M(),t=w("span"),s=G(r),a=M(),this.h()},l(i){U(e.$$.fragment,i),l=N(i),t=E(i,"SPAN",{class:!0});var d=C(t);s=H(d,r),d.forEach(h),a=N(i),this.h()},h(){b(t,"class","text-[0.9em]")},m(i,d){A(e,i,d),B(i,l,d),B(i,t,d),g(t,s),B(i,a,d),o=!0},p(i,d){const p={};d&1&&(p.src=Z(i[11].logo)),d&1&&(p.alt=i[11].name),e.$set(p),(!o||d&1)&&r!==(r=i[11].name+"")&&X(s,r)},i(i){o||(j(e.$$.fragment,i),o=!0)},o(i){D(e.$$.fragment,i),o=!1},d(i){i&&(h(l),h(t),h(a)),L(e,i)}}}function pe(n){let e,l;return e=new $e({props:{classes:"inline-flex flex-row items-center justify-center",href:`${ae}/skills/${n[11].slug}`,$$slots:{default:[ze]},$$scope:{ctx:n}}}),{c(){O(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,r){A(e,t,r),l=!0},p(t,r){const s={};r&1&&(s.href=`${ae}/skills/${t[11].slug}`),r&262145&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){l||(j(e.$$.fragment,t),l=!0)},o(t){D(e.$$.fragment,t),l=!1},d(t){L(e,t)}}}function Oe(n){let e,l,t,r,s,a=n[0].project.type+"",o,i,d,p,k,f,m,P,y;t=new we({props:{$$slots:{default:[Ne]},$$scope:{ctx:n}}}),p=new be({});let V=F(n[0].project.links),c=[];for(let u=0;u<V.length;u+=1)c[u]=de(ue(n,V,u));const q=u=>D(c[u],1,1,()=>{c[u]=null});let T=F(n[0].project.skills),$=[];for(let u=0;u<T.length;u+=1)$[u]=pe(fe(n,T,u));const I=u=>D($[u],1,1,()=>{$[u]=null});return{c(){e=w("div"),l=w("div"),O(t.$$.fragment),r=M(),s=w("p"),o=G(a),i=M(),d=w("div"),O(p.$$.fragment),k=M(),f=w("div");for(let u=0;u<c.length;u+=1)c[u].c();m=M(),P=w("div");for(let u=0;u<$.length;u+=1)$[u].c();this.h()},l(u){e=E(u,"DIV",{class:!0});var _=C(e);l=E(_,"DIV",{class:!0});var x=C(l);U(t.$$.fragment,x),x.forEach(h),r=N(_),s=E(_,"P",{class:!0});var v=C(s);o=H(v,a),v.forEach(h),i=N(_),d=E(_,"DIV",{class:!0});var K=C(d);U(p.$$.fragment,K),K.forEach(h),k=N(_),f=E(_,"DIV",{class:!0});var re=C(f);for(let R=0;R<c.length;R+=1)c[R].l(re);re.forEach(h),m=N(_),P=E(_,"DIV",{class:!0});var le=C(P);for(let R=0;R<$.length;R+=1)$[R].l(le);le.forEach(h),_.forEach(h),this.h()},h(){b(l,"class","text-0.9em"),b(s,"class","font-300 text-center text-[var(--tertiary-text)] m-y-2"),b(d,"class","w-75%"),b(f,"class","row-center flex-wrap text-[0.9em] text-[var(--tertiary-text)] m-b-2"),b(P,"class","row-center flex-wrap m-b-2"),b(e,"class","col-center p-y-20")},m(u,_){B(u,e,_),g(e,l),A(t,l,null),g(e,r),g(e,s),g(s,o),g(e,i),g(e,d),A(p,d,null),g(e,k),g(e,f);for(let x=0;x<c.length;x+=1)c[x]&&c[x].m(f,null);g(e,m),g(e,P);for(let x=0;x<$.length;x+=1)$[x]&&$[x].m(P,null);y=!0},p(u,_){const x={};if(_&262145&&(x.$$scope={dirty:_,ctx:u}),t.$set(x),(!y||_&1)&&a!==(a=u[0].project.type+"")&&X(o,a),_&1){V=F(u[0].project.links);let v;for(v=0;v<V.length;v+=1){const K=ue(u,V,v);c[v]?(c[v].p(K,_),j(c[v],1)):(c[v]=de(K),c[v].c(),j(c[v],1),c[v].m(f,null))}for(Q(),v=V.length;v<c.length;v+=1)q(v);W()}if(_&1){T=F(u[0].project.skills);let v;for(v=0;v<T.length;v+=1){const K=fe(u,T,v);$[v]?($[v].p(K,_),j($[v],1)):($[v]=pe(K),$[v].c(),j($[v],1),$[v].m(P,null))}for(Q(),v=T.length;v<$.length;v+=1)I(v);W()}},i(u){if(!y){j(t.$$.fragment,u),j(p.$$.fragment,u);for(let _=0;_<V.length;_+=1)j(c[_]);for(let _=0;_<T.length;_+=1)j($[_]);y=!0}},o(u){D(t.$$.fragment,u),D(p.$$.fragment,u),c=c.filter(Boolean);for(let _=0;_<c.length;_+=1)D(c[_]);$=$.filter(Boolean);for(let _=0;_<$.length;_+=1)D($[_]);y=!1},d(u){u&&h(e),L(t),L(p),ee(c,u),ee($,u)}}}function Ue(n){let e,l,t,r,s="No description",a;return l=new Y({props:{icon:"i-carbon-text-font",classes:"text-3.5em"}}),{c(){e=w("div"),O(l.$$.fragment),t=M(),r=w("p"),r.textContent=s,this.h()},l(o){e=E(o,"DIV",{class:!0});var i=C(e);U(l.$$.fragment,i),t=N(i),r=E(i,"P",{class:!0,["data-svelte-h"]:!0}),te(r)!=="svelte-1ugej71"&&(r.textContent=s),i.forEach(h),this.h()},h(){b(r,"class","font-300"),b(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--border)]")},m(o,i){B(o,e,i),A(l,e,null),g(e,t),g(e,r),a=!0},p:J,i(o){a||(j(l.$$.fragment,o),a=!0)},o(o){D(l.$$.fragment,o),a=!1},d(o){o&&h(e),L(l)}}}function Ae(n){let e,l;return e=new je({props:{content:n[0].project.description}}),{c(){O(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,r){A(e,t,r),l=!0},p(t,r){const s={};r&1&&(s.content=t[0].project.description),e.$set(s)},i(t){l||(j(e.$$.fragment,t),l=!0)},o(t){D(e.$$.fragment,t),l=!1},d(t){L(e,t)}}}function Le(n){let e,l,t,r,s="No screenshots",a;return l=new Y({props:{icon:"i-carbon-image",classes:"text-3.5em"}}),{c(){e=w("div"),O(l.$$.fragment),t=M(),r=w("p"),r.textContent=s,this.h()},l(o){e=E(o,"DIV",{class:!0});var i=C(e);U(l.$$.fragment,i),t=N(i),r=E(i,"P",{class:!0,["data-svelte-h"]:!0}),te(r)!=="svelte-s36p3y"&&(r.textContent=s),i.forEach(h),this.h()},h(){b(r,"class","font-300"),b(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--border)]")},m(o,i){B(o,e,i),A(l,e,null),g(e,t),g(e,r),a=!0},p:J,i(o){a||(j(l.$$.fragment,o),a=!0)},o(o){D(l.$$.fragment,o),a=!1},d(o){o&&h(e),L(l)}}}function qe(n){let e,l=F(n[4]),t=[];for(let r=0;r<l.length;r+=1)t[r]=_e(ce(n,l,r));return{c(){e=w("div");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){e=E(r,"DIV",{class:!0});var s=C(e);for(let a=0;a<t.length;a+=1)t[a].l(s);s.forEach(h),this.h()},h(){b(e,"class","px-10px grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-t-10 ")},m(r,s){B(r,e,s);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(e,null)},p(r,s){if(s&18){l=F(r[4]);let a;for(a=0;a<l.length;a+=1){const o=ce(r,l,a);t[a]?t[a].p(o,s):(t[a]=_e(o),t[a].c(),t[a].m(e,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=l.length}},i:J,o:J,d(r){r&&h(e),ee(t,r)}}}function _e(n){let e,l,t,r,s=n[11].label+"",a,o,i,d;function p(){return n[9](n[13])}return{c(){e=w("div"),l=w("div"),t=M(),r=w("p"),a=G(s),o=M(),this.h()},l(k){e=E(k,"DIV",{class:!0});var f=C(e);l=E(f,"DIV",{class:!0,style:!0}),C(l).forEach(h),t=N(f),r=E(f,"P",{class:!0});var m=C(r);a=H(m,s),m.forEach(h),o=N(f),f.forEach(h),this.h()},h(){b(l,"class","screenshot aspect-video bg-contain w-100% cursor-pointer svelte-o4z7e5"),b(l,"style",`background-image: url(${n[11].src});`),b(r,"class","text-[var(--tertiary-text)] font-300"),b(e,"class","col-center gap-3 overflow-hidden w-100% h-100% rounded-10px")},m(k,f){B(k,e,f),g(e,l),g(e,t),g(e,r),g(r,a),g(e,o),i||(d=[S(e,"click",p),S(e,"keydown",n[5]),S(e,"keypress",n[6]),S(e,"keyup",n[7]),S(e,"keyup",n[8])],i=!0)},p(k,f){n=k},d(k){k&&h(e),i=!1,me(d)}}}function Ke(n){let e,l,t,r,s,a,o,i;e=new Ie({props:{title:n[2]}});const d=[Me,Se],p=[];function k(f,m){return f[0].project===void 0?0:1}return r=k(n),s=p[r]=d[r](n),o=new Te({props:{screenshot:n[3],onClose:n[10]}}),{c(){O(e.$$.fragment),l=M(),t=w("div"),s.c(),a=M(),O(o.$$.fragment),this.h()},l(f){U(e.$$.fragment,f),l=N(f),t=E(f,"DIV",{class:!0});var m=C(t);s.l(m),m.forEach(h),a=N(f),U(o.$$.fragment,f),this.h()},h(){b(t,"class","pb-10 overflow-x-hidden col flex-1")},m(f,m){A(e,f,m),B(f,l,m),B(f,t,m),p[r].m(t,null),B(f,a,m),A(o,f,m),i=!0},p(f,[m]){const P={};m&4&&(P.title=f[2]),e.$set(P);let y=r;r=k(f),r===y?p[r].p(f,m):(Q(),D(p[y],1,1,()=>{p[y]=null}),W(),s=p[r],s?s.p(f,m):(s=p[r]=d[r](f),s.c()),j(s,1),s.m(t,null));const V={};m&8&&(V.screenshot=f[3]),m&2&&(V.onClose=f[10]),o.$set(V)},i(f){i||(j(e.$$.fragment,f),j(s),j(o.$$.fragment,f),i=!0)},o(f){D(e.$$.fragment,f),D(s),D(o.$$.fragment,f),i=!1},d(f){f&&(h(l),h(t),h(a)),L(e,f),p[r].d(),L(o,f)}}}function Re(n,e,l){var P;let t,r,{data:s}=e;const a=((P=s.project)==null?void 0:P.screenshots)??[];let o;function i(y){z.call(this,n,y)}function d(y){z.call(this,n,y)}function p(y){z.call(this,n,y)}function k(y){z.call(this,n,y)}const f=y=>l(1,o=y),m=()=>l(1,o=void 0);return n.$$set=y=>{"data"in y&&l(0,s=y.data)},n.$$.update=()=>{n.$$.dirty&2&&l(3,t=typeof o<"u"&&a[o]?a[o]:void 0),n.$$.dirty&1&&l(2,r=s.project?`${s.project.name} - ${ne}`:ne)},[s,o,r,t,a,i,d,p,k,f,m]}class lt extends ge{constructor(e){super(),ve(this,e,Re,Ke,he,{data:0})}}export{lt as component,rt as universal};