(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{19:function(e,a,t){e.exports=t(45)},24:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),o=t(12),c=t.n(o),s=(t(24),t(2)),r=t.n(s),l=t(13),m=t(14),u=t(17),d=t(15),f=t(18),v=t(16),p=t.n(v);t(43);var h=function(e){var a=e.id,t=e.rank,n=e.title,o=e.openDate,c=e.audiCount;return i.a.createElement("div",{className:"movie"},i.a.createElement("span",{className:"movie_id"},a),i.a.createElement("span",{className:"movie_rank"},t),i.a.createElement("div",{className:"movie_data"},i.a.createElement("h1",{className:"movie__title"},n),i.a.createElement("span",{className:"movie__opendate"},o)," | ",i.a.createElement("span",{className:"movie_audicount"},c,"\uba85")))},k=(t(44),function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(i)))).state={isLoading:!0,dailyBoxOfficeList:[]},t.getMovies=function(){var e,a;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.a.awrap(p.a.get("http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=1943b60fca7f60c201b5702f56747fc8&targetDt=20200201"));case 2:e=n.sent,a=e.data.boxOfficeResult.dailyBoxOfficeList,t.setState({dailyBoxOfficeList:a,isLoading:!1});case 5:case"end":return n.stop()}}))},t}return Object(f.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.dailyBoxOfficeList;return i.a.createElement("section",{className:"container"},a?i.a.createElement("div",{className:"loader"},i.a.createElement("span",{className:"loader__text"},"loading")):i.a.createElement("div",{className:"movieLists"},t.map((function(e){return i.a.createElement(h,{key:e.movieCd,rank:e.rank,id:e.movieCd,title:e.movieNm,openDate:e.openDt,audiCount:e.audiAcc})}))))}}]),a}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.dc6ef519.chunk.js.map