(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){"use strict";a.d(t,"c",function(){return n}),a.d(t,"g",function(){return r}),a.d(t,"e",function(){return o}),a.d(t,"a",function(){return c}),a.d(t,"d",function(){return i}),a.d(t,"h",function(){return l}),a.d(t,"f",function(){return s}),a.d(t,"b",function(){return u});var n="ON_PLAYLIST",r="ON_PROFILE",o="ON_PLAYLIST_SONGS",c="ON_LOGOUT",i="ON_PLAYLIST_ERROR",l="ON_PROFILE_ERROR",s="ON_PLAYLIST_SONGS_ERROR",u="ON_LOGOUT_ERROR"},287:function(e,t,a){e.exports=a(527)},323:function(e,t,a){e.exports=a(526)},335:function(e,t,a){},337:function(e,t,a){},526:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(93),c=a.n(o),i=a(278),l=(a(332),a(335),a(337),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function s(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var u=a(287),p=a.n(u),d=a(24),m=a.n(d),f=a(318),h=a(40),y=a(99),g=a(100),v=a(165),w=a(101),b=a(166),E=a(47),O=a(273),k=a(151),S=a(274),j=a(275),N=a(98),C=a(189),P=a(85),_=a(180),x=a(276),R=a(155),L=a(291),T=a.n(L),I=a(224),A=a(163),H=a(277),F=function(e){function t(){return Object(y.a)(this,t),Object(v.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.props,t=e.profile,a=e.logged,n=e.onClickLogout,o=t&&t.display_name,c=t&&t.images?t.images[0].url:null;return r.a.createElement(A.a,{inverted:!0},r.a.createElement(H.a,null,r.a.createElement(H.a.Event,{className:"menu-user"},r.a.createElement(H.a.Label,null,c&&r.a.createElement("img",{alt:o,src:c})),r.a.createElement(H.a.Content,null,r.a.createElement(H.a.Summary,null,r.a.createElement(H.a.User,null,o),a&&r.a.createElement(R.a,{circular:!0,icon:"log out",className:"logout",onClick:n}))))))}}]),t}(n.Component),U=a(317),B=a.n(U),W=function(e){function t(){return Object(y.a)(this,t),Object(v.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.props.song,t=(void 0===e?{}:e).track;return r.a.createElement("div",{className:"player"},t.preview_url&&r.a.createElement(B.a,{autoPlay:!0,src:t.preview_url}),t.preview_url&&r.a.createElement("div",{className:"playingSong"},"".concat(t.name," ").concat(t.artists[0].name)),!t.preview_url&&r.a.createElement("div",{className:"noPreview"},"Sorry, this song is not available."))}}]),t}(n.Component),Y=a(87),G=a.n(Y),z=function(){var e=Object(h.a)(m.a.mark(function e(){var t,a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(t=window.localStorage.getItem("access_token"))&&(G.a.defaults.headers.common.Authorization="Bearer ".concat(t)),e.next=4,G.a.get("https://api.spotify.com/v1/me");case 4:return a=e.sent,e.abrupt("return",a);case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(h.a)(m.a.mark(function e(t){var a,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(a=window.localStorage.getItem("access_token"))&&(G.a.defaults.headers.common.Authorization="Bearer ".concat(a)),e.next=4,G.a.get("https://api.spotify.com/v1/users/".concat(t,"/playlists"));case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(h.a)(m.a.mark(function e(t,a){var n,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(n=window.localStorage.getItem("access_token"))&&(G.a.defaults.headers.common.Authorization="Bearer ".concat(n)),e.next=4,G.a.get("https://api.spotify.com/v1/users/".concat(t,"/playlists/").concat(a,"/tracks"));case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),M=a(25),J=function(e){return{ON_PROFILE_ERROR:M.h,type:M.h,payload:e}},V=function(){return function(){var e=Object(h.a)(m.a.mark(function e(t){var a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z();case 2:if(200!==(a=e.sent).status){e.next=5;break}return e.abrupt("return",t((n=a.data,{type:M.g,payload:n})));case 5:return e.abrupt("return",t(J(a)));case 6:case"end":return e.stop()}var n},e)}));return function(t){return e.apply(this,arguments)}}()},q=function(e){return{type:M.d,payload:e}},$=function(e){return function(){var t=Object(h.a)(m.a.mark(function t(a){var n;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,K(e);case 2:if(200!==(n=t.sent).status){t.next=5;break}return t.abrupt("return",a((r=n.data,{type:M.c,payload:r})));case 5:return t.abrupt("return",a(q(n)));case 6:case"end":return t.stop()}var r},t)}));return function(e){return t.apply(this,arguments)}}()},Q=function(e){return{type:M.f,payload:e}},X=function(e,t){return function(){var a=Object(h.a)(m.a.mark(function a(n){var r;return m.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,D(e,t);case 2:if(200!==(r=a.sent).status){a.next=5;break}return a.abrupt("return",n((o=r.data,{type:M.e,payload:o})));case 5:return a.abrupt("return",n(Q(r)));case 6:case"end":return a.stop()}var o},a)}));return function(e){return a.apply(this,arguments)}}()},Z=function(){return function(e){try{return window.localStorage.clear(),window.location.href="/",e({type:M.a,payload:t})}catch(a){return e(function(e){return{type:M.b,payload:e}}(a))}var t}},ee=function(){for(var e,t={},a=/([^&;=]+)=?([^&;]*)/g,n=window.location.hash.substring(1);e=a.exec(n);)t[e[1]]=decodeURIComponent(e[2]);return t.access_token&&window.localStorage.setItem("access_token",t.access_token),!window.clientInformation||!!t.access_token},te=(a(524),function(e){function t(e){var a;return Object(y.a)(this,t),(a=Object(v.a)(this,Object(w.a)(t).call(this,e))).nextRequest=null,a.state={selectedPlaylist:null,selectedSong:null,playlistOptions:[{key:"PICK ONE",text:"PICK ONE",value:"PICK ONE"}],loading:!0},a}return Object(b.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){var e=Object(h.a)(m.a.mark(function e(){var t,a,n,r,o,c,i,l;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(ee()){e.next=4;break}return this.setState({loading:!1}),e.abrupt("return");case 4:return t=this.props.actions,e.next=7,t.getProfile();case 7:if(a=this.props.home,n=a.profile,r=a.automatedTest,!n||!n.id){e.next=20;break}return e.next=12,t.getPlaylist(n.id);case 12:this.checkError(),o=this.props.home,c=o.playlist,i=o.songs,l=Object(f.a)(this.state.playlistOptions),c.items.forEach(function(e){l.push({key:e.id,text:e.name,value:e.id})}),this.setState({playlistOptions:l,loading:!1}),r&&this.setState({selectedPlaylist:c.items[0],selectedSong:i.items[0]}),e.next=21;break;case 20:this.setState({loading:!1});case 21:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getSongsForPlaylist",value:function(e){var t=this,a=this.props,n=a.home,r=void 0===n?{}:n,o=a.actions,c=r.profile;this.setState({loading:!0},Object(h.a)(m.a.mark(function a(){return m.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.getPlaylistSongs(c.id,e.id);case 2:t.checkError(),t.setState({selectedPlaylist:e,loading:!1});case 4:case"end":return a.stop()}},a)})))}},{key:"checkError",value:function(){var e=this.props.home.error;e&&Object(I.toast)({title:"Oops!",description:e})}},{key:"logout",value:function(){this.props.actions.logoutAction()}},{key:"authSpotify",value:function(){!function(){var e="bfa95165905540d48f188f8a44e93502",t="https://cfontana0.github.io/spotify-client/callback";"localhost"!==window.location.hostname&&"127.0.0.1"!==window.location.hostname||(t="http://localhost:3000/callback",e="860725a4e08640199e5261d2a8a5d07c"),window.location.href="https://accounts.spotify.com/authorize?client_id=".concat(e,"&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=").concat(t)}()}},{key:"pickFromDropdown",value:function(e){var t=this.props.home,a=(void 0===t?{}:t).playlist,n=e.value;if("PICK ONE"!==n&&a&&a.items&&a.items.length>0){var r=a.items.find(function(e){return e.id===n});this.getSongsForPlaylist(r)}}},{key:"selectSong",value:function(e){this.setState({selectedSong:e})}},{key:"render",value:function(){var e=this,t=this.state,a=t.selectedPlaylist,n=t.selectedSong,o=t.playlistOptions,c=t.loading,i=this.props.home,l=i.profile,s=i.playlist,u=i.songs,p=(s&&s.items||[]).map(function(t){return r.a.createElement("p",{key:t.id,onClick:function(){return e.getSongsForPlaylist(t)}},t.name)}),d=(u&&u.items||[]).map(function(t){var a=t.track;return r.a.createElement(O.a.Row,{key:a.id,onClick:function(){return e.selectSong(t)}},r.a.createElement(O.a.Cell,null,r.a.createElement(k.a,{src:a.album.images[0].url,height:"30",className:"trackImg"})),r.a.createElement(O.a.Cell,null,a.name),r.a.createElement(O.a.Cell,null,a.artists[0].name),r.a.createElement(O.a.Cell,null,a.album.name),r.a.createElement(O.a.Cell,null,T.a.utc(a.duration_ms).format("mm:ss")))});return r.a.createElement(S.a,{fluid:!0,className:"home"},r.a.createElement(F,{profile:l,onClickLogout:function(){return e.logout()},logged:!!l}),l&&r.a.createElement(j.a,{as:"h4"},r.a.createElement(N.a,{name:"spotify"}),r.a.createElement(j.a.Content,null,"PLAYLIST:"," ",r.a.createElement(C.a,{inline:!0,header:"Adjust time span",options:o,defaultValue:o[0].value,onChange:function(t,a){return e.pickFromDropdown(a)}}))),r.a.createElement(P.a,{celled:!0},r.a.createElement(P.a.Row,{columns:10},(!c||s)&&r.a.createElement(P.a.Column,{width:3},r.a.createElement("p",{className:"titleText"},"PLAYLIST"),!l&&r.a.createElement("p",null,"Login to continue"),l&&null===s&&r.a.createElement("p",null,"There are no playlist"),p),c&&r.a.createElement(_.a,{active:!0},r.a.createElement(x.a,{indeterminate:!0},"Loading Playlist")),a&&r.a.createElement(P.a.Column,{width:13},r.a.createElement("div",{className:"playlistHead"},r.a.createElement("div",{className:"phLeft"},r.a.createElement(k.a,{src:a.images[0].url,height:"100"})),r.a.createElement("div",{className:"phRight"},r.a.createElement("div",{className:"phTitle"},a.name),r.a.createElement("div",{className:"phSub"},a.tracks.total," songs"))),r.a.createElement(O.a,{basic:"very",celled:!0,collapsing:!0},r.a.createElement(O.a.Header,null,r.a.createElement(O.a.Row,null,r.a.createElement(O.a.HeaderCell,null,"COVER"),r.a.createElement(O.a.HeaderCell,null,"SONG"),r.a.createElement(O.a.HeaderCell,null,"ARTIST"),r.a.createElement(O.a.HeaderCell,null,"ALBUM"),r.a.createElement(O.a.HeaderCell,null,"TIME"))),r.a.createElement(O.a.Body,null,d))),!c&&!a&&r.a.createElement(P.a.Column,{width:13},r.a.createElement("div",{className:"playlistHead"},r.a.createElement("div",{className:"phLeft"}),r.a.createElement("div",{className:"phRight"},r.a.createElement("div",{className:"phTitle"},l?"Playlist":"Hi there"),r.a.createElement("div",{className:"phSub"},l?"0 songs":"Please, login with Spotify to continue."))),!l&&r.a.createElement(R.a,{onClick:this.authSpotify,color:"teal"},r.a.createElement(N.a,{name:"spotify"})," Login with Spotify")))),n&&r.a.createElement(W,{song:n}),r.a.createElement(I.SemanticToastContainer,null))}}]),t}(n.Component)),ae=Object(i.b)(function(e){return{home:e.home}},function(e){return{actions:Object(E.b)({getProfile:V,getPlaylist:$,getPlaylistSongs:X,logoutAction:Z},e)}})(te),ne=p()();c.a.render(r.a.createElement(i.a,{store:ne},r.a.createElement(ae,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/spotify-client",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/spotify-client","/service-worker.js");l?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):s(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):s(t,e)})}}()},527:function(e,t,a){"use strict";a.r(t);var n=a(47),r=a(288),o=a(289),c=a(529),i=a(164),l=a(25),s={playlist:null,profile:null,songs:[],error:null,automatedTest:!1},u=Object(n.c)({routing:o.routerReducer,form:c.a,home:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.c:return Object(i.a)({},e,{playlist:t.payload});case l.g:return Object(i.a)({},e,{profile:t.payload});case l.e:return Object(i.a)({},e,{songs:t.payload});case l.a:return Object(i.a)({},e,{playlist:null,profile:null,songs:[]});case l.d:return Object(i.a)({},e,{error:"There was an error trying to get your playlist"});case l.h:return Object(i.a)({},e,{error:"There was an error trying to get your profile"});case l.f:return Object(i.a)({},e,{error:"There was an error trying to get your songs"});case l.b:return Object(i.a)({},e,{error:"There was an error trying to logout"});default:return e}}});a.d(t,"default",function(){return d});var p=Object(n.a)(r.a);function d(e){return Object(n.d)(u,e,p)}}},[[323,2,1]]]);
//# sourceMappingURL=main.5e132dd4.chunk.js.map