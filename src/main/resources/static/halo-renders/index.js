!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.HaloJs=t():n.HaloJs=t()}(this,(()=>(()=>{"use strict";var n={d:(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},o:(n,t)=>Object.prototype.hasOwnProperty.call(n,t)},t={};n.d(t,{default:()=>m});var e="halo-render halo-render-wrapper",o={Java:"#b07219",JavaScript:"#f1e05a",TypeScript:"#3178c6",Go:"#00ADD8",Shell:"#89e051",C:"#555555","C++":"#f34b7d","C#":"#178600",Python:"#3572A5",Rust:"#3572A5",MATLAB:"#e16737",Lua:"#000080",Default:"#333333"},c="v1.1.0-2",a=function(){function n(){}return n.prototype.check=function(n){return n.startsWith("tips")},n.prototype.process=function(n,t){var o=t.split("\n"),c="";return c='<div class="'.concat(e," tips ").concat(n.replace(":","-"),'">'),o.forEach((function(n){n&&(c+="<div>".concat(n,"</div>"))})),c+="</div>"},n}(),r={},i={github:function(n){return t=this,e=void 0,c=function(){var t,e;return function(n,t){var e,o,c,a,r={label:0,sent:function(){if(1&c[0])throw c[1];return c[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(i){return function(s){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a&&(a=0,i[0]&&(r=0)),r;)try{if(e=1,o&&(c=2&i[0]?o.return:i[0]?o.throw||((c=o.return)&&c.call(o),0):o.next)&&!(c=c.call(o,i[1])).done)return c;switch(o=0,c&&(i=[2&i[0],c.value]),i[0]){case 0:case 1:c=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,o=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(!((c=(c=r.trys).length>0&&c[c.length-1])||6!==i[0]&&2!==i[0])){r=0;continue}if(3===i[0]&&(!c||i[1]>c[0]&&i[1]<c[3])){r.label=i[1];break}if(6===i[0]&&r.label<c[1]){r.label=c[1],c=i;break}if(c&&r.label<c[2]){r.label=c[2],r.ops.push(i);break}c[2]&&r.ops.pop(),r.trys.pop();continue}i=t.call(n,r)}catch(n){i=[6,n],o=0}finally{e=c=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}(this,(function(o){switch(o.label){case 0:return[4,fetch("https://api.github.com/repos/".concat(n.owner,"/").concat(n.repo))];case 1:return[4,(t=o.sent()).json()];case 2:return e=o.sent(),200!==t.status?[2,new Promise((function(n,o){o({code:t.status,msg:e.message})}))]:[2,{platform:"github",url:e.html_url,owner:e.owner.login,name:e.name,stars:e.stargazers_count,watchers:e.watchers_count,language:e.language,description:e.description,openIssues:e.open_issues,lastPush:e.pushed_at,forks:e.forks,topic:e.topics}]}}))},new((o=void 0)||(o=Promise))((function(n,a){function r(n){try{s(c.next(n))}catch(n){a(n)}}function i(n){try{s(c.throw(n))}catch(n){a(n)}}function s(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(n){n(e)}))).then(r,i)}s((c=c.apply(t,e||[])).next())}));var t,e,o,c},gitee:function(n){return t=this,e=void 0,c=function(){var t,e,o;return function(n,t){var e,o,c,a,r={label:0,sent:function(){if(1&c[0])throw c[1];return c[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(i){return function(s){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a&&(a=0,i[0]&&(r=0)),r;)try{if(e=1,o&&(c=2&i[0]?o.return:i[0]?o.throw||((c=o.return)&&c.call(o),0):o.next)&&!(c=c.call(o,i[1])).done)return c;switch(o=0,c&&(i=[2&i[0],c.value]),i[0]){case 0:case 1:c=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,o=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(!((c=(c=r.trys).length>0&&c[c.length-1])||6!==i[0]&&2!==i[0])){r=0;continue}if(3===i[0]&&(!c||i[1]>c[0]&&i[1]<c[3])){r.label=i[1];break}if(6===i[0]&&r.label<c[1]){r.label=c[1],c=i;break}if(c&&r.label<c[2]){r.label=c[2],r.ops.push(i);break}c[2]&&r.ops.pop(),r.trys.pop();continue}i=t.call(n,r)}catch(n){i=[6,n],o=0}finally{e=c=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}(this,(function(c){switch(c.label){case 0:return[4,fetch("https://gitee.com/api/v5/repos/".concat(n.owner,"/").concat(n.repo))];case 1:return[4,(t=c.sent()).json()];case 2:return e=c.sent(),console.log(t),200!==t.status?[2,new Promise((function(n,o){o({code:t.status,msg:e.message})}))]:(o=[],e.project_labels.forEach((function(n){o.push(n.name)})),[2,{platform:"gitee",url:e.html_url,owner:e.owner.login,name:e.name,stars:e.stargazers_count,watchers:e.watchers_count,language:e.language,description:e.description,openIssues:e.open_issues_count,lastPush:e.pushed_at,forks:e.forks_count,topic:o}])}}))},new((o=void 0)||(o=Promise))((function(n,a){function r(n){try{s(c.next(n))}catch(n){a(n)}}function i(n){try{s(c.throw(n))}catch(n){a(n)}}function s(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(n){n(e)}))).then(r,i)}s((c=c.apply(t,e||[])).next())}));var t,e,o,c}},s={gitlab:"&#xe881;",github:"&#xe885;",gitee:"&#xe7d5;",gitea:"&#xeba0;"};function l(n,t){var e,c,a=o[t.language||"Default"]||"#333333",r='<span class="language" style="color: '.concat(a,'">')+'<span class="dot" style="background-color: '.concat(a,';"></span>').concat(t.language,"</span>"),i='<div class="count">'+'<span class="count-item"><span class="icon">&#xe7df;</span>'.concat(t.stars||0,"</span>")+'<span class="count-item"><span class="icon">&#xe641;</span>'.concat(t.forks||0,"</span>")+'<span class="count-item"><span class="icon">&#xe764;</span>'.concat(t.openIssues||0,"</span>")+"</div>",l='<div class="topics">';return null===(e=t.topic)||void 0===e||e.forEach((function(n){l+="<span class='topic'>".concat(n,"</span>")})),l+="</div>",'<span class="icon">'.concat(s[t.platform||"github"],"</span>")+'<div class="information"><div class="repo-name"><a href="'.concat(t.url,'">').concat(t.owner,"/").concat(t.name,"</a></div>")+'<div class="description">'.concat(t.description,"</div>")+'<div class="info">'.concat(r," ").concat((null===(c=t.topic)||void 0===c?void 0:c.length)?l:""," ").concat(i,"</div>")+"</div>"}var u=function(){function n(){}return n.prototype.check=function(n){return n.startsWith("git")},n.prototype.process=function(n,t){var o=n.split(":")[1];if(!o||!o.endsWith("]"))return"<div class='".concat(e," git'><div class='error'>Git: Syntax Error</div></div>");var a=(o=o.replace("[","").replace("]","")).split("/"),s=a[0],u=a[1],f=a[2],p=s.split("@"),d=(p[0],p[1]),v=function(n,t,e){if(!i[t])return"<div class='error'>Unknown Platform</div>";if(-1===r[n])return null;if(r[n])return l(0,r[n]);var o=localStorage.getItem("git_cache:".concat(n));if(o){var a=JSON.parse(o);if(a.version===c&&new Date<new Date(a.expireTime||0))return l(0,a);localStorage.removeItem("git_cache:".concat(n))}return r[n]=-1,i[t](e).then((function(t){r[n]=t,t.version=c,t.expireTime=(new Date).setTime((new Date).getTime()+18e5),localStorage.setItem("git_cache:".concat(n),JSON.stringify(t)),l(0,t),document.querySelectorAll("."+n).forEach((function(n){n.innerHTML=l(0,t)}))})).catch((function(t){document.querySelectorAll("."+n).forEach((function(n){n.innerHTML="<div class='error'>Error Fetch: "+t.code+"(".concat(t.msg,")</div>")})),delete r[n]})),null}("git-".concat(u,"-").concat(f),d.toLowerCase(),{owner:u,repo:f});return v?"<div class='".concat(e," git git-").concat(u,"-").concat(f,"'>").concat(v,"</div>"):"<div class='".concat(e," git git-").concat(u,"-").concat(f,"'>Waiting</div>")},n}(),f={baidu:{icon:"/icons/drive/baidu.svg",name:"百度网盘"},ali:{icon:"/icons/drive/ali.png",name:"阿里云盘"}},p=function(){function n(){}return n.prototype.check=function(n){return n.startsWith("drive")},n.prototype.process=function(n,t,o){var c=this.parseContent(n,t);if(c instanceof Object){var a='<div class="'.concat(e,' drive">'),r='<div class="platform">'+'<img class="drive-icon" src="'.concat(o.cdn).concat(f[c.platform].icon,'"  alt="').concat(c.platform,'"/>')+"<span>".concat(f[c.platform].name,"</span>")+"</div>";return a+='<div class="drive-info"> '.concat(r,' <div class="drive-title">').concat(c.name,"</div></div>"),a+='<div class="download-info"><a class="btn" href="'.concat(c.link,'" target="_blank"><span class="iconfont">&#xeb2c;</span>下载资源</a>'),c.password&&(a+='<div class="drive-password">提取码: '.concat(c.password,"</div>")),(a+="</div>")+"</div>"}return'<div class="'.concat(e,' drive error">语法错误(').concat(c,")</div>")},n.prototype.parseContent=function(n,t){var e=n.split(":"),o=(e[0],e[1]);if(!f[o])return"不支持的平台: ".concat(o);var c={link:"",name:"",password:"",platform:o};return t.split("\n").forEach((function(n){console.log(n.indexOf(":"));var t=n.slice(n.indexOf(":")+1).trim(),e=n.slice(0,n.indexOf(":"))||"";Object.keys(c).includes(e)&&(c[e]=t)})),c},n}(),d=function(){function n(){}return n.prototype.check=function(n){return n.startsWith("gallery")},n.prototype.process=function(n,t,o){var c=t.split("\n"),a=n.match(/gallery:([a-zA-Z]+)(?:\[(.*?))?$/),r=a[1],i=a[2],s=void 0===i?"":i;console.log(r);var l='<div class="'.concat(e," gallery ").concat(r,'">');return l+='<div class="title"><span class="iconfont">&#xe61a;</span>'.concat(s.replace("]","")||"图集","</div>"),l+='<div class="image-list">',c.forEach((function(n){if(n){var t=n.match(/\[(.*)]\((.*)\)/),e=t[1],o=t[2];l+='<div class="vditor--gallery-container"><img class="img" src="'.concat(o,'" alt="').concat(e,'" /></div>')}})),(l+="</div>")+"</div>"},n}(),v=[new a,new u,new p,new d],h=function(){function n(n){this.providers=n}return n.prototype.process=function(n,t,o){void 0===o&&(o={cdn:"."});var c="<div class='".concat(e," invalid-type'>Invalid Type</div>");return this.providers.forEach((function(e){e.check(n)&&(c=e.process(n,t,o))})),c},n.getFactory=function(){return this.manager||(this.manager=new n(v)),this.manager},n.manager=null,n}(),g=function(){function n(){}return n.renderHalo=function(n,t){void 0===t&&(t=null);var e=document.getElementById("halo-render-font-face");e||((e=document.createElement("style")).id="halo-render-font-face",e.innerHTML="@font-face {\n font-family: 'iconfont';\n src: url('".concat(t||".","/fonts/iconfont.woff2?t=1703484934750') format('woff2'),\n url('").concat(t||".","/fonts/iconfont.woff?t=1703484934750') format('woff'),\n url('").concat(t||".","/fonts/iconfont.ttf?t=1703484934750') format('truetype');\n}\n"),document.getElementsByTagName("head")[0].append(e));var o=(n=n.trim()).split("\n"),c=o[0];o.splice(0,1);var a=o.join("\n");return h.getFactory().process(c,a,{cdn:t||"."})},n}();const m=g;return t.default})()));