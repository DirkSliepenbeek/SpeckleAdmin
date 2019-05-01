(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55d2d67e"],{1928:function(t,e,s){},"192b":function(t,e,s){"use strict";var r=s("e88e"),a=s.n(r);a.a},"196b":function(t,e,s){"use strict";var r=s("da74"),a=s.n(r);a.a},"2d18":function(t,e,s){},"55a8":function(t,e,s){"use strict";var r=s("c9e9"),a=s.n(r);a.a},"5f9d":function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{staticClass:"elevation-0 pt-4"},[s("v-toolbar",{staticClass:"elevation-0 transparent title font-weight-light",attrs:{dense:""}},[s("v-icon",{attrs:{small:"",left:""}},[t._v("cloud_upload")]),t._v(" \n    "),s("span",{staticClass:"title font-weight-light"},[t._v("Source")])],1),s("v-divider"),s("v-card-text",[t._l(t.senders,function(t){return s("client-card",{key:t._id,attrs:{client:t}})}),0===t.senders.length?s("p",[t._v("There seem to be no source clients for this stream.")]):t._e()],2),s("v-toolbar",{staticClass:"elevation-0 transparent title font-weight-light mt-4",attrs:{dense:""}},[s("v-icon",{attrs:{small:"",left:""}},[t._v("cloud_download")]),t._v(" \n    "),s("span",{staticClass:"title font-weight-light"},[t._v("Receivers")])],1),s("v-divider"),s("v-card-text",[t._l(t.receivers,function(t){return s("client-card",{key:t._id,attrs:{client:t}})}),0===t.receivers.length?s("p",[t._v("There seem to be no stream receivers.")]):t._e()],2)],1)},a=[],n=(s("f7fe"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-layout",{staticClass:"text-xs-left",attrs:{row:"",wrap:"","justfiy-space-between":""}},[s("v-flex",{staticClass:"caption"},[s("strong",[t._v(t._s(t.client.documentType))]),t._v(" "),t.client.documentName?s("span",[t._v("doc name: "+t._s(t.client.documentName))]):t._e()]),s("v-flex",{staticClass:"caption",attrs:{xs3:""}},[t._v("\n    last seen: "),s("strong",[s("timeago",{attrs:{datetime:t.client.updatedAt}})],1)]),s("v-flex",{staticClass:"caption",attrs:{xs4:""}},[t.owner?s("span",[t._v("Client Owner: "),s("strong",[t._v(t._s(t.owner.name)+" "+t._s(t.owner.surname))])]):t._e()])],1)}),i=[],o=(s("7514"),{name:"ClientCard",props:{client:Object},computed:{owner:function(){var t=this,e=this.$store.state.users.find(function(e){return e._id===t.client.owner});return e||this.$store.dispatch("getUser",{_id:this.client.owner}),e},icon:function(){return"sender"===this.client.role.toLowerCase()?"cloud_upload":"receiver"===this.client.role.toLowerCase()?"cloud_download":"hearing"}},data:function(){return{}},methods:{}}),c=o,u=(s("196b"),s("2877")),l=Object(u["a"])(c,n,i,!1,null,"3b98aacb",null);l.options.__file="ClientCard.vue";var d=l.exports,m={name:"StreamDetailNetwork",components:{ClientCard:d},props:{stream:Object},watch:{stream:function(t,e){this.fetchData()}},computed:{canEdit:function(){return!!this.isOwner||-1!==this.stream.canWrite.indexOf(this.$store.state.user._id)},isOwner:function(){return this.stream.owner===this.$store.state.user._id},senders:function(){return this.stream.onlineEditable?[{role:"sender",documentType:"",documentName:"Web UI",updatedAt:this.stream.updatedAt,owner:this.stream.owner}]:this.$store.getters.streamClients(this.stream.streamId).filter(function(t){return"sender"===t.role.toLowerCase()})},receivers:function(){return this.$store.getters.streamClients(this.stream.streamId).filter(function(t){return"receiver"===t.role.toLowerCase()})},clients:function(){return this.$store.getters.streamClients(this.stream.streamId)}},methods:{fetchData:function(){this.$store.dispatch("getStreamClients",{streamId:this.stream.streamId})}},created:function(){this.fetchData()}},v=m,h=(s("a182"),Object(u["a"])(v,r,a,!1,null,"58b933d2",null));h.options.__file="StreamDetailNetwork.vue";e["a"]=h.exports},"6ec6":function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-layout",{attrs:{"align-center":"",row:"",wrap:""}},[s("v-flex",{staticClass:"pb-0",attrs:{xs12:""}},[s("v-text-field",{attrs:{box:"",label:"search for users",clearable:"",flat:"",loading:t.searchInProgress,"prepend-inner-icon":"search"},on:{input:t.startSearchUsers},model:{value:t.userSearch,callback:function(e){t.userSearch=e},expression:"userSearch"}})],1),null!==t.userSearch&&t.foundUsers.length>0?s("v-flex",{staticClass:"mb-5",staticStyle:{"margin-top":"-30px"},attrs:{xs12:""}},[s("v-card",{staticClass:"elevation-10"},[t.userSearch?s("v-card-title",{staticClass:"subheading"},[t._v("Search results ("+t._s(t.foundUsers.length)+" users)")]):t._e(),s("v-divider"),t.foundUsers.length>0?s("v-card-text",{staticStyle:{"max-height":"410px","overflow-y":"auto","overflow-x":"hidden"}},[s("v-list",{attrs:{"two-line":"","xxxv-if":"filters.length > 0"}},t._l(t.foundUsers,function(e){return s("v-list-tile",{key:e._id},[s("v-list-tile-content",[s("v-list-tile-title",[t._v("\n                "+t._s(e.name)+" "+t._s(e.surname)+"\n              ")]),s("v-list-tile-sub-title",{staticClass:"caption"},[s("span",{staticClass:"caption"},[t._v(t._s(e.company))])])],1),s("v-list-tile-action",[s("v-btn",{attrs:{fab:"",small:"",depressed:""},nativeOn:{click:function(s){return t.selectUser(e._id)}}},[s("v-icon",[t._v("add")])],1)],1)],1)}),1)],1):t._e()],1)],1):t._e()],1)},a=[],n=(s("20d6"),s("f7fe")),i=s.n(n),o=s("bc3a"),c=s.n(o),u={name:"UserSearch",props:{msg:String},data:function(){return{userSearch:"",foundUsers:[],searchInProgress:!1}},watch:{userSearch:function(t,e){""===t&&(this.foundUsers=[],this.searchInProgress=!1)}},methods:{selectUser:function(t){this.$emit("selected-user",t);var e=this.foundUsers.findIndex(function(e){return e._id===t});this.foundUsers.splice(e,1)},startSearchUsers:function(){this.searchInProgress=!0,this.searchUsers(this.userSearch)},searchUsers:i()(function(t){var e=this;if(""===t||null===t)return this.foundUsers=[],void(this.searchInProgress=!1);t.length<3||c.a.post("/accounts/search",{searchString:t}).then(function(t){console.log(t),e.foundUsers=t.data.resources,t.data.resources.length>0&&e.$store.commit("ADD_USERS",t.data.resources),e.searchInProgress=!1}).catch(function(t){e.foundUsers=[],e.searchInProgress=!1})},1500)}},l=u,d=(s("c5de"),s("2877")),m=Object(d["a"])(l,r,a,!1,null,"9b372448",null);m.options.__file="UserSearch.vue";e["a"]=m.exports},7057:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.stream?s("v-container",{attrs:{"xxx-grid-list-xl":""}},[t.stream.deleted?s("v-toolbar",{attrs:{absolute:""}},[s("span",[t._v("This stream is in your trashbin. ")]),s("v-spacer"),t.canEdit?s("v-btn",{attrs:{color:"primary"},nativeOn:{click:function(e){return t.restore(e)}}},[t._v(" Restore? ")]):t._e()],1):t._e(),s("v-layout",{staticClass:"mb-3",attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("stream-detail-title",{attrs:{stream:t.stream}})],1),s("v-flex",{attrs:{xs12:""}},[s("v-tabs",{staticClass:"pa-0 ma-0",attrs:{grow:"","slider-color":"primary"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[s("v-tab",{key:"Overview",attrs:{ripple:"",to:{name:"stream overview"}}},[t._v("\n          Overview\n        ")]),s("v-tab",{key:"Sharing",attrs:{ripple:"",to:{name:"stream sharing"}}},[t._v("\n          Sharing\n        ")]),s("v-tab",{key:"History",attrs:{ripple:"",to:{name:"stream history"}}},[t._v("\n          History\n        ")]),s("v-tab",{key:"Data",attrs:{ripple:"",to:{name:"stream data"}}},[t._v("\n          Data\n        ")])],1)],1)],1),s("router-view")],1):t._e()},a=[],n=(s("6762"),s("2fdb"),s("ac6a"),s("28a5"),s("7514"),s("f7fe"),s("13bb")),i=s.n(n),o=s("bdd8"),c=s("8450"),u=s("fa20"),l=s("5f9d"),d=s("a41d"),m={name:"StreamDetailView",components:{StreamDetailTitle:o["a"],DetailDescription:c["a"],StreamDetailUserPerms:u["a"],StreamDetailNetwork:l["a"],StreamDetailComments:d["a"]},watch:{stream:function(){this.fetchData()}},computed:{stream:function(){var t=this,e=this.$store.state.streams.find(function(e){return e.streamId===t.$route.params.streamId});return null===e&&console.log("null fukcing stream"),e},canEdit:function(){return!!this.isOwner||-1!==this.stream.canWrite.indexOf(this.$store.state.user._id)},isOwner:function(){return this.stream.owner===this.$store.state.user._id}},data:function(){return{error:"",editDescription:!1,active:null}},methods:{getEndRoute:function(){var t=this.$route.path.split("/").reverse()[0];return t===this.$route.params.streamId||""===t?"overview":t},restore:function(){this.$store.dispatch("updateStream",{streamId:this.stream.streamId,deleted:!1})},fetchData:function(){var t=this,e=this.$store.state.streams.find(function(e){return e.streamId===t.$route.params.streamId});e?(this.$store.dispatch("getUser",{_id:e.owner}),i()(e.canRead,e.canWrite).forEach(function(e){return t.$store.dispatch("getUser",{_id:e})})):this.$store.dispatch("getStream",{streamId:this.$route.params.streamId}).then(function(e){t.$store.dispatch("getUser",{_id:e.data.resource.owner}),i()(e.data.resource.canRead,e.data.resource.canWrite).forEach(function(e){return t.$store.dispatch("getUser",{_id:e})})}).catch(function(e){e.message.includes("404")&&(t.error="Stream ".concat(t.$route.params.streamId," was not found.")),e.message.includes("401")&&(t.error="Stream ".concat(t.$route.params.streamId," is not accessible to you due to its protection level."))})}},mounted:function(){this.fetchData()}},v=m,h=(s("ba3e"),s("2877")),f=Object(h["a"])(v,r,a,!1,null,"3adda9c1",null);f.options.__file="Stream.vue";e["default"]=f.exports},8450:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.resource?s("v-card",{staticClass:"elevation-0"},[s("v-toolbar",{staticClass:"elevation-0 transparent"},[s("v-icon",{attrs:{left:"",small:""}},[t._v("book")]),s("span",{staticClass:"title font-weight-light"},[t._v(t._s(t.isStream?"Stream":"Project")+" Description")]),s("v-spacer"),s("v-toolbar-items",[!1===t.editDescription&&t.canEdit?s("v-btn",{attrs:{flat:"",color:"primary"},nativeOn:{click:function(e){t.editDescription=!0}}},[t._v("Edit")]):t._e(),!0===t.editDescription?s("v-btn",{attrs:{flat:"",color:"primary"},nativeOn:{click:function(e){return t.updateDescription(e)}}},[t._v("Done")]):t._e()],1)],1),s("v-divider"),s("v-card-text",[s("v-layout",{directives:[{name:"show",rawName:"v-show",value:!t.editDescription,expression:"!editDescription"}]},[s("v-flex",{attrs:{xs12:""},domProps:{innerHTML:t._s(t.compiledDescription)}})],1),s("v-layout",{directives:[{name:"show",rawName:"v-show",value:t.editDescription,expression:"editDescription"}],attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"caption",attrs:{xs12:""}},[t._v("\n        Supports "),s("a",{attrs:{target:"_blank",href:"https://en.wikipedia.org/wiki/Markdown#Example"}},[t._v("markdown:")]),s("strong",[t._v(" ** bold **")]),t._v(", "),s("i",[t._v("* italic *")]),t._v(", "),s("code",[t._v("# Heading 1")]),t._v(", "),s("code",[t._v("## Heading 2")]),t._v(", "),s("code",[t._v("[links](http://example.com)")]),t._v(", etc.\n      ")]),s("v-flex",{attrs:{xs12:""}},[s("v-textarea",{attrs:{box:"",rows:"15"},model:{value:t.resource.description,callback:function(e){t.$set(t.resource,"description",e)},expression:"resource.description"}})],1)],1)],1),t.isStream?s("v-toolbar",{staticClass:"elevation-0 transparent",attrs:{transparent:"",dense:""}},[s("v-icon",{attrs:{left:"",small:""}},[t._v("power_input")]),s("span",{staticClass:"title font-weight-light"},[t._v("Units")])],1):t._e(),s("v-divider"),t.resource.baseProperties?s("v-card-text",{staticClass:"md-caption"},[s("span",[s("strong",[t._v("Units:")]),t._v(" "+t._s(t.resource.baseProperties.units))]),t._v(";\n    "),s("span",[s("strong",[t._v("Tolerance:")]),t._v(" "+t._s(t.resource.baseProperties.tolerance))]),t._v(".\n  ")]):t._e()],1):t._e()},a=[],n=(s("f7fe"),s("0e54")),i=s.n(n),o={name:"DetailDescription",props:{resource:Object},computed:{compiledDescription:function(){return i()(this.resource.description,{sanitize:!0})},canEdit:function(){return!!this.isOwner||-1!==this.resource.canWrite.indexOf(this.$store.state.user._id)},isOwner:function(){return this.resource.owner===this.$store.state.user._id},isStream:function(){return this.resource.hasOwnProperty("streamId")}},data:function(){return{editDescription:!1}},methods:{updateDescription:function(){this.editDescription=!1,this.isStream?this.$store.dispatch("updateStream",{streamId:this.resource.streamId,description:this.resource.description}):this.$store.dispatch("updateProject",{_id:this.resource._id,description:this.resource.description})}}},c=o,u=(s("9385"),s("2877")),l=Object(u["a"])(c,r,a,!1,null,"7a6c454c",null);l.options.__file="DetailDescription.vue";e["a"]=l.exports},"85f2":function(t,e,s){t.exports=s("ec5b")},9385:function(t,e,s){"use strict";var r=s("1928"),a=s.n(r);a.a},a182:function(t,e,s){"use strict";var r=s("ab55"),a=s.n(r);a.a},a41d:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("md-card",{staticClass:"md-elevation-3"},[s("md-card-content",[s("div",{staticClass:"md-title"},[t._v("Comments")]),s("md-divider",{attrs:{"md-inset":""}}),s("p",[t._v("TODO")])],1)],1)},a=[],n=(s("f7fe"),{name:"StreamDetailUserComments",props:{stream:Object},computed:{canEdit:function(){return!!this.isOwner||-1!==this.stream.canWrite.indexOf(this.$store.state.user._id)},isOwner:function(){return this.stream.owner===this.$store.state.user._id}},methods:{}}),i=n,o=(s("e84e"),s("2877")),c=Object(o["a"])(i,r,a,!1,null,"43af536a",null);c.options.__file="StreamDetailComments.vue";e["a"]=c.exports},ab55:function(t,e,s){},ba3e:function(t,e,s){"use strict";var r=s("c78b"),a=s.n(r);a.a},bdd8:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{staticClass:"elevation-0 pa-3"},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"display-1 font-weight-light text-capitalize my-5",attrs:{xs12:""}},[s("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){return t.$router.push("/view/"+t.stream.streamId)}}},[s("v-icon",[t._v("360")])],1),t.canEdit?s("editable-span",{attrs:{text:t.stream.name},on:{update:t.updateName}}):s("span",[t._v(t._s(t.stream.name))])],1),s("v-flex",{staticClass:"caption",staticStyle:{"line-height":"32px"},attrs:{xs12:""}},[s("v-icon",{attrs:{small:""}},[t._v("fingerprint")]),t._v(" "),s("strong",{staticStyle:{"user-select":"all"}},[t._v(t._s(t.stream.streamId))]),t._v(" \n      "),s("v-icon",{attrs:{small:""}},[t._v("edit")]),t._v(" "),s("timeago",{attrs:{datetime:t.stream.updatedAt}}),t._v(" \n      "),s("v-icon",{attrs:{small:""}},[t._v("access_time")]),t._v("  "+t._s(t.createdAt)+" \n      "),s("v-icon",{attrs:{small:""}},[t._v(t._s(t.stream.private?"lock":"lock_open"))]),t._v(" link sharing "+t._s(t.stream.private?"off":"on")+"  \n      "),s("v-icon",{attrs:{small:""}},[t._v("person_outline")]),t._v(" "+t._s(t.allUsers.length)+"  \n      "),s("v-icon",{attrs:{small:""}},[t._v("history")]),t._v(" "+t._s(t.stream.children.length)+"  \n      "),s("span",{staticClass:"caption font-weight-light text-uppercase"},[t._v("Owned by "),s("strong",[t._v(t._s(t.owner))])])],1),s("v-flex",{staticClass:"ma-0 pa-0 mb-2",attrs:{xs12:""}},[s("v-combobox",{attrs:{"menu-props":{maxHeight:0,zIndex:"0"},"md-disabled":"!canEdit",items:t.stream.tags,hint:"add or remove tags",solo:"","persistent-hint":"","small-chips":"","deletable-chips":"",multiple:"",tags:""},on:{input:t.updateTags},scopedSlots:t._u([{key:"no-data",fn:function(){return[t._v("stream has no tags.")]},proxy:!0}]),model:{value:t.stream.tags,callback:function(e){t.$set(t.stream,"tags",e)},expression:"stream.tags"}})],1)],1)],1)},a=[],n=s("85f2"),i=s.n(n);function o(t,e,s){return e in t?i()(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}s("7f7f"),s("6762"),s("2fdb"),s("7514");var c,u=s("f7fe"),l=s.n(u),d=s("13bb"),m=s.n(d),v={name:"StreamDetailTitle",props:{stream:Object},computed:(c={canEdit:function(){return!!this.isOwner||-1!==this.stream.canWrite.indexOf(this.$store.state.user._id)},isOwner:function(){return this.stream.owner===this.$store.state.user._id},streamProjects:function(){var t=this;return this.$store.state.projects.filter(function(e){return-1!==e.streams.indexOf(t.stream.streamId)})},viewLink:function(){var t=new URL(this.$store.state.server);return t.origin+"/view?streams=".concat(this.stream.streamId)}},o(c,"isOwner",function(){return this.stream.owner===this.$store.state.user._id}),o(c,"allUsers",function(){return m()(this.stream.canRead,this.stream.canWrite)}),o(c,"owner",function(){var t=this,e=this.$store.state.users.find(function(e){return e._id===t.stream.owner});return e||this.$store.dispatch("getUser",{_id:this.stream.owner}),e?e.surname.includes("is you")?"you":"".concat(e.name," ").concat(e.surname):"Loading"}),o(c,"createdAt",function(){var t=new Date(this.stream.createdAt);return t.toLocaleString("en",{year:"numeric",month:"long",day:"numeric"})}),c),data:function(){return{tag:null}},methods:{updateTags:l()(function(t){this.$store.dispatch("updateStream",{streamId:this.stream.streamId,tags:this.stream.tags})},1e3),updateName:function(t){this.$store.dispatch("updateStream",{streamId:this.stream.streamId,name:t.text})}},mounted:function(){}},h=v,f=(s("c871"),s("2877")),p=Object(f["a"])(h,r,a,!1,null,"4ea30cf0",null);p.options.__file="StreamDetailTitle.vue";e["a"]=p.exports},c5de:function(t,e,s){"use strict";var r=s("fc99"),a=s.n(r);a.a},c78b:function(t,e,s){},c871:function(t,e,s){"use strict";var r=s("dd13"),a=s.n(r);a.a},c9e9:function(t,e,s){},da74:function(t,e,s){},dd13:function(t,e,s){},e341:function(t,e,s){var r=s("d13f");r(r.S+r.F*!s("7d95"),"Object",{defineProperty:s("3adc").f})},e84e:function(t,e,s){"use strict";var r=s("2d18"),a=s.n(r);a.a},e88e:function(t,e,s){},ec5b:function(t,e,s){s("e341");var r=s("a7d3").Object;t.exports=function(t,e,s){return r.defineProperty(t,e,s)}},fa20:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{staticClass:"elevation-0"},[s("v-toolbar",{staticClass:"elevation-0 transparent"},[s("v-icon",{attrs:{small:"",left:""}},[t._v("share")]),t._v(" \n    "),s("span",{staticClass:"title font-weight-light"},[t._v("Link Sharing")]),t._v("  \n  ")],1),s("v-divider"),s("v-card-text",{staticClass:"mx-2"},[s("v-btn",{attrs:{depressed:"",color:"primary",disabled:!t.canEdit},nativeOn:{click:function(e){return t.changeLinkSharing(e)}}},[t._v(t._s(t.stream.private?"OFF":"ON"))]),t._v("\n    "+t._s(t.stream.private?"Private resource. Only people with read or write persmissions can access it.":"Public resource. Anyone with the id can access it.")+"\n    "),t.isOwner?s("span",{},[t._v("\n      You are the "),s("strong",[t._v("owner")]),t._v(" of this stream.\n    ")]):s("span",{},[t._v("\n      This stream was shared with you by "),s("strong",[t._v(t._s(t.streamOwner)+".")])])],1),s("v-toolbar",{staticClass:"elevation-0 transparent title font-weight-light"},[s("v-icon",{attrs:{small:"",left:""}},[t._v("supervisor_account")]),t._v(" \n    "),s("span",{staticClass:"title font-weight-light"},[t._v("User Permissions")]),t._v("  \n  ")],1),t.streamProjects.length>0?s("v-card-text",{staticClass:"mx-2"},[s("span",[t._v("Some users might be disabled as their permissions are set through the following projects: "),t._l(t.streamProjects,function(e,r){return s("router-link",{key:e._id,attrs:{to:"/projects/"+e._id}},[t._v(t._s(e.name)),r<t.streamProjects.length-1?s("span",[t._v(", ")]):t._e()])})],2)]):t._e(),t.canEdit?t._e():s("v-card-text",{staticClass:"mx-2"},[t._v("\n    You cannot edit the permissions of this stream.\n  ")]),s("v-divider"),t.canEdit?s("v-card-text",{},[s("user-search",{on:{"selected-user":t.addUserToWrite}}),s("permission-table",{attrs:{resource:t.stream,"disabled-users":t.usersFromProjects,"global-disabled":!t.canEdit},on:{"update-table":t.updatePerms}})],1):t._e()],1)},a=[],n=s("b6d0"),i=s.n(n),o=s("75fc"),c=(s("7514"),s("7f7f"),s("f7fe"),s("c36e")),u=s.n(c),l=(s("bc3a"),s("6ec6")),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.allUsersPop.length>0?s("v-container",{staticClass:"pa-0 ma-0",attrs:{"grid-list-xl":""}},[s("v-layout",{attrs:{row:"",wrap:""}},t._l(t.allUsersPop,function(e){return e?s("v-flex",{key:e._id,attrs:{xs12:"",sm6:"",lg4:""}},[s("v-card",{staticClass:"pa-3 elevation-1",attrs:{tile:""}},[s("v-layout",{attrs:{row:"",wrap:"","align-center":"","justify-space-between":""}},[s("v-flex",{attrs:{xs8:""}},[s("v-avatar",{attrs:{size:"21",dark:"",color:t.getHexFromString(e.name)}},[t._v("\n              "+t._s(e.name.substring(0,1).toUpperCase())+"\n            ")]),t._v(" \n            "),s("span",[t._v(t._s(e.name)+" "+t._s(e.surname))]),t._v(" \n            "),s("span",{staticClass:"caption"},[t._v(t._s(e.company))])],1),s("v-flex",{staticClass:"text-xs-right",attrs:{xs4:""}},[s("v-btn",{attrs:{depressed:"",color:t.hasWritePermission(e._id)?"primary":"",disabled:e.surname.includes("(that is you!)")||t.globalDisabled||t.isDisabled(e._id)},nativeOn:{click:function(s){return t.changePermission(e._id)}}},[t._v(t._s(t.hasWritePermission(e._id)?"write":"read"))]),s("v-btn",{attrs:{depressed:"",disabled:e.surname.includes("(that is you!)")||t.globalDisabled||t.isDisabled(e._id)},nativeOn:{click:function(s){return t.removeUser(e._id)}}},[s("v-icon",[t._v("close")])],1)],1)],1)],1)],1):t._e()}),1)],1):t._e()},m=[],v=(s("55dd"),s("13bb")),h=s.n(v),f={name:"PermissionTable",props:{resource:Object,globalDisabled:{type:Boolean,default:!1},disabledUsers:{type:Array,default:function(){return[]}}},computed:{canRead:function(){return[].concat(Object(o["a"])(this.resource.canRead),[this.resource.owner])},canWrite:function(){return[].concat(Object(o["a"])(this.resource.canWrite),[,this.resource.owner])},allUsers:function(){return h()(this.canRead,this.canWrite,[this.resource.owner])},allUsersPop:function(){var t=this;return 0===this.allUsers.length?[]:this.allUsers.map(function(e){if(e){var s=t.$store.state.users.find(function(t){return t._id===e});return s||t.$store.dispatch("getUser",{_id:e}),s&&(s.isOwner=s._id===t.resource.owner),s}}).sort(function(t,e){return t.name>e.name?1:-1})}},data:function(){return{}},methods:{isDisabled:function(t){return this.disabledUsers.indexOf(t)>-1},hasWritePermission:function(t){return this.canWrite.indexOf(t)>-1},changePermission:function(t){var e=[],s=[],r=this.canWrite.indexOf(t);r>-1?(e=this.canWrite.filter(function(e){return e!==t}),s=u()([].concat(Object(o["a"])(this.canRead),[t]))):(s=this.canRead.filter(function(e){return e!==t}),e=u()([].concat(Object(o["a"])(this.canWrite),[t]))),this.$emit("update-table",{canRead:s,canWrite:e})},removeUser:function(t){var e=this.canWrite.filter(function(e){return e!==t}),s=this.canRead.filter(function(e){return e!==t});this.$emit("remove-user",{userId:t}),this.$emit("update-table",{canRead:s,canWrite:e})}},mounted:function(){}},p=f,_=(s("192b"),s("2877")),b=Object(_["a"])(p,d,m,!1,null,"61b55ec2",null);b.options.__file="PermissionTable.vue";var g=b.exports,w={name:"StreamDetailUserPerms",components:{UserSearch:l["a"],PermissionTable:g},props:{stream:Object},computed:{streamOwner:function(){var t=this;if(this.isOwner)return"".concat(this.$store.state.user.name," ").concat(this.$store.state.user.surname);var e=this.$store.state.users.find(function(e){return e._id===t.stream.owner});return e?"".concat(e.name," ").concat(e.surname," ").concat(e.company?"("+e.company+")":""):"(loading)"},canEdit:function(){return!!this.isOwner||-1!==this.stream.canWrite.indexOf(this.$store.state.user._id)},isOwner:function(){return this.stream.owner===this.$store.state.user._id},usersFromProjects:function(){var t,e,s=this,r=this.$store.state.projects.filter(function(t){return-1!==t.streams.indexOf(s.stream.streamId)}),a=(t=Array.prototype).concat.apply(t,Object(o["a"])(r.map(function(t){return t.permissions.canRead}))),n=(e=Array.prototype).concat.apply(e,Object(o["a"])(r.map(function(t){return t.permissions.canWrite})));return Object(o["a"])(new i.a([].concat(Object(o["a"])(n),Object(o["a"])(a))))},streamProjects:function(){var t=this;return this.$store.state.projects.filter(function(e){return-1!==e.streams.indexOf(t.stream.streamId)})}},data:function(){return{userSearch:"",foundUsers:[],searchInProgress:!1}},methods:{changeLinkSharing:function(){this.$store.dispatch("updateStream",{streamId:this.stream.streamId,private:!this.stream.private})},addUserToWrite:function(t){var e=u()([].concat(Object(o["a"])(this.stream.canWrite),[t]));this.$store.dispatch("updateStream",{streamId:this.stream.streamId,canWrite:e})},updatePerms:function(t){var e=t.canRead,s=t.canWrite;this.$store.dispatch("updateStream",{streamId:this.stream.streamId,canRead:e,canWrite:s})}}},x=w,O=(s("55a8"),Object(_["a"])(x,r,a,!1,null,"01fba017",null));O.options.__file="StreamDetailUserPerms.vue";e["a"]=O.exports},fc99:function(t,e,s){}}]);
//# sourceMappingURL=chunk-55d2d67e.66eb3f3c.js.map