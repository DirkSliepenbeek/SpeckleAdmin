(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3dbf6713"],{"1a15":function(t,e,r){"use strict";var s=r("9df1"),a=r.n(s);a.a},"1a72":function(t,e,r){"use strict";var s=r("a953"),a=r.n(s);a.a},"2f25":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=r("44d8"),a=(0,s.twitterEmbedComponent)({embedComponent:function(t){for(var e,r=arguments.length,s=new Array(r>1?r-1:0),a=1;a<r;a++)s[a-1]=arguments[a];return(e=t.widgets).createMoment.apply(e,s)},props:{errorMessage:{type:String,default:"Whoops! We couldn't access this Moment."},errorMessageClass:{type:String,required:!1},widgetClass:{type:String,required:!1}}}),i=a;e.default=i},"44d8":function(t,e,r){"use strict";var s=0;function a(t){if(!s){var e=document.createElement("script");e.setAttribute("src",t),document.body.appendChild(e),s=new Promise(function(t,r){e.onload=function(){t(window.twttr)}})}return s}var i={id:{type:String,requred:!0},sourceType:{type:String},options:Object},n=function(t){return{data:function(){return{isLoaded:!1,isAvailable:!1}},props:Object.assign({},i,t.props),mounted:function(){var e=this,r=this.sourceType?{sourceType:this.sourceType,screenName:this.id}:this.id;Promise.resolve(window.twttr?window.twttr:a("//platform.twitter.com/widgets.js")).then(function(s){return t.embedComponent(s,r,e.$el,e.options)}).then(function(t){e.isAvailable=void 0!==t,e.isLoaded=!0})},render:function(t){if(this.isLoaded&&this.isAvailable)return t("div",{class:this.$props.widgetClass});if(this.isLoaded&&!this.isAvailable&&this.$props.errorMessage){var e=t("div",{class:this.$props.errorMessageClass},this.$props.errorMessage);return t("div",[e])}return t("div",{class:this.$props.widgetClass},this.$slots.default)}}};t.exports={addPlatformScript:a,twitterEmbedComponent:n}},7277:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{"grid-list-xl":""}},[r("v-layout",{attrs:{row:"",wrap:""}},[0!==t.streams.length||0!==t.projects.length?r("v-flex",{staticClass:"headline font-weight-light",attrs:{xs12:"","py-5":""}},[t._v("\n      👋 Hi "+t._s(t.$store.state.user.name)+"! You have "),r("router-link",{attrs:{to:"/streams"}},[r("strong",[t._v(t._s(t.streams.length))]),t._v(" streams")]),t._v(" and "),r("router-link",{attrs:{to:"/projects"}},[r("strong",[t._v(t._s(t.projects.length))]),t._v(" projects")]),t._v(" in total.\n    ")],1):t._e(),0===t.streams.length&&0===t.projects.length?r("v-flex",{attrs:{xs12:"","py-5":""}},[r("div",{staticClass:"headline font-weight-light mb-4"},[t._v("\n        👋 Hello "+t._s(t.$store.state.user.name)+"! You seem short on "),r("i",[t._v("data")]),t._v(" - maybe it's your first time here. If so, why don't you check out the "),r("a",{attrs:{href:"https://www.speckle.works/log/speckle-guide",target:"_blank"}},[t._v("guide for dynamo and grasshopper")]),t._v("?\n      ")]),r("v-divider"),r("div",{staticClass:"mt-4 subheading"},[t._v("\n        You can also get in touch with the rest of the speckle community via:\n        "),r("ul",[r("li",[r("a",{attrs:{href:"https://discourse.speckle.works",target:"_blank"}},[t._v("Discourse")])]),r("li",[r("a",{attrs:{href:"https://slacker.speckle.works",target:"_blank"}},[t._v("Slack")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/speckle_works",target:"_blank"}},[t._v("Twitter")])])])])],1):t._e(),0!==t.streams.length||0!==t.projects.length?r("v-flex",{attrs:{xs12:""}},[r("search-everything")],1):t._e(),0!==t.streams.length||0!==t.projects.length?r("v-flex",{attrs:{xs12:"",md6:""}},[r("v-card",{staticClass:"elevation-1"},[r("v-card-title",[r("v-icon",{attrs:{left:""}},[t._v("\n            import_export\n          ")]),r("span",{staticClass:"title font-weight-light"},[t._v("Latest Streams")])],1),r("v-divider"),r("v-card-text",[r("v-list",{attrs:{"two-line":""}},t._l(t.latestStreams,function(e){return r("v-list-tile",{key:e.streamId,attrs:{to:"/streams/"+e.streamId}},[r("v-list-tile-content",[r("v-list-tile-title",[r("span",{staticClass:"caption"},[r("v-icon",{attrs:{small:""}},[t._v("fingerprint")]),t._v(" "+t._s(e.streamId)+"\n                     "),r("v-icon",{attrs:{small:""}},[t._v(t._s(e.private?"lock":"lock_open"))])],1),t._v(" \n                  "),r("span",{staticClass:"text-capitalize"},[t._v(t._s(e.name))])]),r("v-list-tile-sub-title",{staticClass:"xxx-font-weight-thin caption"},[t._v("\n                  last changed "),r("timeago",{attrs:{datetime:e.updatedAt}}),t._v(", created on "+t._s(new Date(e.createdAt).toLocaleString())+"\n                ")],1)],1)],1)}),1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{to:"/streams/"}},[t._v("See all your "+t._s(t.streams.length)+" streams")])],1)],1)],1):t._e(),0!==t.streams.length||0!==t.projects.length?r("v-flex",{attrs:{xs12:"",md6:""}},[r("v-card",{staticClass:"elevation-1"},[r("v-card-title",[r("v-icon",{attrs:{left:""}},[t._v("\n            business\n          ")]),r("span",{staticClass:"title font-weight-light"},[t._v("Latest Projects")])],1),r("v-divider"),r("v-card-text",[r("v-list",{attrs:{"two-line":""}},t._l(t.latestProjects,function(e){return r("v-list-tile",{key:e._id,attrs:{to:"/projects/"+e._id}},[r("v-list-tile-content",[r("v-list-tile-title",[r("v-icon",{attrs:{small:""}},[t._v("person")]),r("span",{staticClass:"caption"},[t._v(t._s(e.canRead.length))]),r("v-icon",{attrs:{small:""}},[t._v("import_export")]),r("span",{staticClass:"caption"},[t._v(t._s(e.streams.length))]),t._v("\n                  "+t._s(e.name)+"\n                ")],1),r("v-list-tile-sub-title",{staticClass:"xxx-font-weight-thin caption"},[t._v("\n                  last changed "),r("timeago",{attrs:{datetime:e.updatedAt}}),t._v(", created on "+t._s(new Date(e.createdAt).toLocaleString())+"\n                ")],1)],1)],1)}),1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{to:"/projects/"}},[t._v("See all your "+t._s(this.$store.state.projects.length)+" projects")])],1)],1)],1):t._e(),r("v-flex",{attrs:{xs12:"",md4:"","my-5":""}},[r("v-toolbar",{staticClass:" ",attrs:{dense:""}},[r("v-icon",{attrs:{left:""}},[t._v("\n          fiber_new\n        ")]),r("span",{staticClass:"title font-weight-light"},[t._v("\n          Speckle News\n        ")]),r("v-spacer")],1),r("v-card",{staticStyle:{"max-height":"840px","overflow-y":"auto"}},[r("Timeline",{attrs:{id:"speckle_works",sourceType:"profile",options:{theme:t.$store.state.dark?"dark":"",tweetLimit:10}}})],1),r("v-btn",{attrs:{block:"",large:"",color:"primary",href:"https://twitter.com/speckle_works",target:"_blank"}},[t._v("Follow Speckle For More!")])],1)],1)],1)},a=[],i=(r("55dd"),r("7397")),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{staticClass:"mb-5",attrs:{row:"",wrap:"","justify-left":""}},[r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{solo:"",clearable:"",label:"Search for a stream or project","prepend-inner-icon":"search","append-icon":"refresh",spellcheck:"false",loading:t.isLoading},on:{input:t.updateSearch,"click:append":function(e){return t.refreshResources()}},model:{value:t.filterText,callback:function(e){t.filterText=e},expression:"filterText"}})],1),t.filterText?r("v-flex",{staticStyle:{position:"relative",top:"-30px"},attrs:{xs12:""}},[r("V-card",{staticClass:"xxxtransparent elevation-10"},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",md6:"","pa-3":""}},[r("div",{staticClass:"title font-weight-light mb-3 pl-3"},[t._v("Streams ("+t._s(t.filteredStreams.length)+")")]),t.filteredStreams.length>0?r("v-list",{staticStyle:{"max-height":"210px","overflow-y":"auto","overflow-x":"hidden"},attrs:{"two-line":""}},t._l(t.filteredStreams,function(e){return r("v-list-tile",{key:e.streamId,attrs:{to:"/streams/"+e.streamId}},[r("v-list-tile-content",[r("v-list-tile-title",[t._v("\n                  "+t._s(e.name)+"\n                ")]),r("v-list-tile-sub-title",{staticClass:"caption"},[r("v-icon",{attrs:{small:""}},[t._v("fingerprint")]),r("span",{staticClass:"caption",staticStyle:{"user-select":"all"}},[t._v(t._s(e.streamId))]),t._v(" "),r("v-icon",{attrs:{small:""}},[t._v("edit")]),r("timeago",{attrs:{datetime:e.updatedAt}})],1)],1)],1)}),1):r("span",{staticClass:"caption pl-3"},[t._v("No streams with that name found.")])],1),r("v-flex",{attrs:{xs12:"",md6:"","pa-3":""}},[r("div",{staticClass:"title font-weight-light mb-3 pl-3"},[t._v("Projects ("+t._s(t.filteredProjects.length)+")")]),t.filteredProjects.length>0?r("v-list",{staticStyle:{"max-height":"210px","overflow-y":"auto","overflow-x":"hidden"},attrs:{"two-line":""}},t._l(t.filteredProjects,function(e){return r("v-list-tile",{key:e._id,attrs:{to:"/projects/"+e._id}},[r("v-list-tile-content",[r("v-list-tile-title",[t._v("\n                  "+t._s(e.name)+"\n                ")]),r("v-list-tile-sub-title",{staticClass:"caption"},[r("v-icon",{attrs:{small:""}},[t._v("fingerprint")]),r("span",{staticClass:"caption",staticStyle:{"user-select":"all"}},[t._v(t._s(e._id))]),t._v(" "),r("v-icon",{attrs:{small:""}},[t._v("edit")]),r("timeago",{attrs:{datetime:e.updatedAt}})],1)],1)],1)}),1):r("span",{staticClass:"caption pl-3"},[t._v("No projects with that name found.")])],1)],1)],1)],1):t._e()],1)},o=[],l=(r("6762"),r("2fdb"),r("7f7f"),r("f7fe")),c=r.n(l),u={name:"SearchEverything",props:{},watch:{filterText:function(t){this.isLoading=""!==t&&null!==t}},computed:{projects:function(){return this.$store.state.projects.filter(function(t){return!1===t.deleted})},streams:function(){return this.$store.state.streams.filter(function(t){return null===t.parent&&!1===t.deleted}).sort(function(t,e){return new Date(e.updatedAt)-new Date(t.updatedAt)})},filteredStreams:function(){var t=this;return this.actualSearchFilter&&""!==this.actualSearchFilter?this.streams.filter(function(e){return!e.name||e.name.toLowerCase().includes(t.actualSearchFilter.toLowerCase())}).sort(function(t,e){return t.updatedAt>e.updatedAt}):[]},filteredProjects:function(){var t=this;return this.actualSearchFilter&&""!==this.actualSearchFilter?this.projects.filter(function(e){return!e.name||e.name.toLowerCase().includes(t.actualSearchFilter.toLowerCase())}).sort(function(t,e){return t.updatedAt>e.updatedAt}):[]}},data:function(){return{actualSearchFilter:"",filterText:"",isLoading:!1}},methods:{updateSearch:c()(function(t){this.isLoading=!1,this.actualSearchFilter=t},1e3),refreshResources:function(){this.$store.dispatch("getStreams","omit=objects,layers&isComputedResult=false&sort=updatedAt"),this.$store.dispatch("getProjects")}}},d=u,f=(r("1a72"),r("2877")),p=Object(f["a"])(d,n,o,!1,null,"d651fd34",null);p.options.__file="SearchEverything.vue";var v=p.exports,h={name:"HomeView",components:{SearchEverything:v,Timeline:i["Timeline"]},computed:{latestStreams:function(){return this.streams.slice(0,7)},latestProjects:function(){return this.projects.slice(0,7)},projects:function(){return this.$store.state.projects.filter(function(t){return!1===t.deleted})},streams:function(){return this.$store.state.streams.filter(function(t){return null==t.parent&&!1===t.deleted}).sort(function(t,e){return new Date(e.updatedAt)-new Date(t.updatedAt)})},currentCatFact:function(){return this.facts[this.currentFact].fact}},methods:{getAFact:function(){var t=0,e=this.facts.length-1;this.currentFact=Math.floor(Math.random()*(e-t+1))+t}},data:function(){return{}}},m=h,g=(r("1a15"),Object(f["a"])(m,s,a,!1,null,"98f2e2e8",null));g.options.__file="Dashboard.vue";e["default"]=g.exports},7397:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Tweet",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(e,"Moment",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(e,"Timeline",{enumerable:!0,get:function(){return i.default}});var s=n(r("8fea")),a=n(r("2f25")),i=n(r("f088"));function n(t){return t&&t.__esModule?t:{default:t}}},"8fea":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=r("44d8"),a=(0,s.twitterEmbedComponent)({embedComponent:function(t){for(var e,r=arguments.length,s=new Array(r>1?r-1:0),a=1;a<r;a++)s[a-1]=arguments[a];return(e=t.widgets).createTweetEmbed.apply(e,s)},props:{errorMessage:{type:String,default:"Whoops! We couldn't access this Tweet."},errorMessageClass:{type:String,required:!1},widgetClass:{type:String,required:!1}}}),i=a;e.default=i},"9df1":function(t,e,r){},a953:function(t,e,r){},f088:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=r("44d8"),a=(0,s.twitterEmbedComponent)({embedComponent:function(t){for(var e,r=arguments.length,s=new Array(r>1?r-1:0),a=1;a<r;a++)s[a-1]=arguments[a];return(e=t.widgets).createTimeline.apply(e,s)},props:{errorMessage:{type:String,default:"Whoops! We couldn't access this Timeline."},errorMessageClass:{type:String,required:!1},widgetClass:{type:String,required:!1}}}),i=a;e.default=i},f7fe:function(t,e,r){(function(e){var r="Expected a function",s=NaN,a="[object Symbol]",i=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,f=u||d||Function("return this")(),p=Object.prototype,v=p.toString,h=Math.max,m=Math.min,g=function(){return f.Date.now()};function _(t,e,s){var a,i,n,o,l,c,u=0,d=!1,f=!1,p=!0;if("function"!=typeof t)throw new TypeError(r);function v(e){var r=a,s=i;return a=i=void 0,u=e,o=t.apply(s,r),o}function _(t){return u=t,l=setTimeout(j,e),d?v(t):o}function y(t){var r=t-c,s=t-u,a=e-r;return f?m(a,n-s):a}function b(t){var r=t-c,s=t-u;return void 0===c||r>=e||r<0||f&&s>=n}function j(){var t=g();if(b(t))return S(t);l=setTimeout(j,y(t))}function S(t){return l=void 0,p&&a?v(t):(a=i=void 0,o)}function C(){void 0!==l&&clearTimeout(l),u=0,a=c=i=l=void 0}function k(){return void 0===l?o:S(g())}function T(){var t=g(),r=b(t);if(a=arguments,i=this,c=t,r){if(void 0===l)return _(c);if(f)return l=setTimeout(j,e),v(c)}return void 0===l&&(l=setTimeout(j,e)),o}return e=x(e)||0,w(s)&&(d=!!s.leading,f="maxWait"in s,n=f?h(x(s.maxWait)||0,e):n,p="trailing"in s?!!s.trailing:p),T.cancel=C,T.flush=k,T}function w(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){return!!t&&"object"==typeof t}function b(t){return"symbol"==typeof t||y(t)&&v.call(t)==a}function x(t){if("number"==typeof t)return t;if(b(t))return s;if(w(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=w(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=o.test(t);return r||l.test(t)?c(t.slice(2),r?2:8):n.test(t)?s:+t}t.exports=_}).call(this,r("c8ba"))}}]);
//# sourceMappingURL=chunk-3dbf6713.08738c7e.js.map