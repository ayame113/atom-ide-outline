"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("atom");
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function t(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function s(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}l((r=r.apply(e,t||[])).next())}))}function n(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}var r=function(){function e(){this.element=document.createElement("div"),this.element.classList.add("outline-view")}return e.prototype.destroy=function(){this.element.remove()},e.prototype.getElement=function(){return this.element},e.prototype.getTitle=function(){return"Outline"},e.prototype.setOutline=function(e){var t=e.tree,n=e.editor,r=this.getElement();r.innerHTML="";var a=document.createElement("ul");!function e(t){var n=t.parent,r=t.entries,a=t.editor,l=t.level,u=void 0===l?0:l,c=a.getTabLength(),d=12*("number"==typeof c?c:4);atom.config.get("atom-ide-outline.sortEntries")&&r.sort((function(e,t){var n=e.startPosition.row-t.startPosition.row;return 0===n?e.startPosition.column-e.startPosition.column:n}));r.forEach((function(t){var r=document.createElement("li"),l=document.createElement("span");l.innerText=t.representativeName||t.plainText;var c=function(e,t){var n=document.createElement("span");n.classList.add("icon"),null==t&&null!=e&&(t=e);var r,o="";"string"==typeof t&&t.length>0&&(0===t.indexOf("type-")?(o=""+t,r=t.replace("type-","")):i.includes(t)?(o="type-"+t,r=t):o=t,n.classList.add(o));var a=r?r.substring(0,1):"•";return n.innerHTML="<span>"+a+"</span>",{iconElement:n,kindClass:o}}(null==t?void 0:t.icon,null==t?void 0:t.kind).iconElement;l.prepend(c),r.append(l);var p=o.get(t.startPosition.row);void 0!==p?(p.push(r),o.set(t.startPosition.row,p)):o.set(t.startPosition.row,[r]),r.addEventListener("click",(function(){var e=atom.workspace.paneForItem(a);e&&(e.activate(),a.getCursors()[0].setBufferPosition(t.startPosition,{autoscroll:!0}))}));var v=t.children&&!!t.children[0];if(l.style.paddingLeft=v?0!==u?d*u-s+"px":"0px":0!==u?d*u+"px":s+"px",v){var f=document.createElement("ul");f.addEventListener("click",(function(e){return e.stopPropagation()})),r.append(f);var m=function(e){var t=document.createElement("button");return t.classList.add("fold","expanded"),t.addEventListener("click",(function(n){e.hidden=!e.hidden,e.hidden?(t.classList.remove("expanded"),t.classList.add("collapsed")):(t.classList.remove("collapsed"),t.classList.add("expanded")),n.stopPropagation()})),t}(f);l.prepend(m),e({parent:f,entries:t.children,editor:a,level:u+1})}n.append(r)}))}({parent:a,entries:t,editor:n}),r.append(a)},e.prototype.clearOutline=function(){this.getElement().innerHTML=""},e.prototype.presentStatus=function(e){this.clearOutline();var t=e&&function(e){var t=document.createElement("div");t.className="status";var n=e.title,r=void 0===n?"":n,o=e.description,i=void 0===o?"":o;return t.innerHTML="<h1>"+r+"</h1>\n  <span>"+i+"</span>",t}(e);t&&this.getElement().append(t)},e}();var o=new Map;var i=["array","boolean","class","constant","constructor","enum","field","file","function","interface","method","module","namespace","number","package","property","string","variable"];var a,s=20;var l,u,c,d,p=function(){function t(){this.providers=[]}return t.prototype.addProvider=function(t){var n=this;return this.providers.push(t),new e.Disposable((function(){return n.removeProvider(t)}))},t.prototype.removeProvider=function(e){var t=this.providers.indexOf(e);-1!==t&&this.providers.splice(t,1)},t.prototype.getProvider=function(e){var t=e.getGrammar().scopeName;return this.providers.find((function(e){return e.grammarScopes.includes(t)}))},t}(),v={noEditor:{title:"Outline is unavailable.",description:"Open a text editor."},noProvider:{title:"Provider is unavailable",description:"Looks like a provider for this type of file is not available. Check if a relevant IDE language package is installed and has outline support, or try adding one from Atom's package registry (e.g.: ide-typescript, ide-rust, ide-css, ide-json)."}},f=new p;function m(){var e=atom.workspace.paneForItem(u);if(e)e.destroyItem(u);else{var t=atom.workspace.getRightDock(),n=t.getPanes()[0];n.addItem(u),n.activateItem(u),t.show()}}function h(e){return t(this,void 0,void 0,(function(){var t,r,o,i;return n(this,(function(n){switch(n.label){case 0:return(t=e||atom.workspace.getActiveTextEditor())?(r=f.getProvider(t))?(o=t.getFileName(),null==c||c.add("Outline: "+o),[4,r.getOutline(t)]):[2,g("noProvider")]:[2,g("noEditor")];case 1:return i=n.sent(),u.setOutline({tree:i&&i.outlineTrees||[],editor:t}),null==c||c.clear(),[2]}}))}))}function g(e){var t=v[e];u.presentStatus(t)}exports.activate=function(){var i;l=new e.CompositeDisposable,u=new r,i=atom.commands.add("atom-workspace","outline:toggle",(function(){return m()})),l.add(i),function(){var r=this;d=new e.CompositeDisposable;var i=atom.workspace.observeActiveTextEditor((function(e){return t(r,void 0,void 0,(function(){var t;return n(this,(function(n){switch(n.label){case 0:return e?(null===(t=null==d?void 0:d.dispose)||void 0===t||t.call(d),[4,h(e)]):[2];case 1:return n.sent(),d.add(e.onDidStopChanging((function(){return h(e)})),e.onDidChangeCursorPosition((function(e){return function(e){var t=e.newBufferPosition;if(void 0!==a)for(var n=0,r=a;n<r.length;n++){(u=r[n]).toggleAttribute("cursorOn",!1)}var i=t.row;if(void 0!==(a=o.get(i)))for(var s=0,l=a;s<l.length;s++){var u;(u=l[s]).toggleAttribute("cursorOn",!0),u.scrollIntoView()}}(e)})),e.onDidDestroy((function(){g("noEditor")}))),[2]}}))}))}));l.add(i)}(),atom.config.get("atom-ide-outline.initialDisplay")&&m()},exports.config={initialDisplay:{title:"Initial Outline Display",description:"Show outline initially aftern atom loads",type:"boolean",default:!0},sortEntries:{title:"Sort entries based on the line number",description:"This option sorts the entries based on where they appear in the code.",type:"boolean",default:!0}},exports.consumeOutlineProvider=function(e){return t(this,void 0,void 0,(function(){var t;return n(this,(function(n){switch(n.label){case 0:return t=f.addProvider(e),l.add(t),[4,h()];case 1:return n.sent(),[2]}}))}))},exports.consumeSignal=function(e){c=e.create(),l.add(c)},exports.deactivate=function(){var e;null===(e=null==d?void 0:d.dispose)||void 0===e||e.call(d),l.dispose(),u.destroy()},exports.getOutline=h,exports.outlineProviderRegistry=f,exports.setStatus=g,exports.statuses=v,exports.toggleOutlineView=m;
//# sourceMappingURL=main.js.map
