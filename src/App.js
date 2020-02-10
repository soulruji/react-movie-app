import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    dailyBoxOfficeList: []
  };
  getMovies = async () => {
    const { 
      data: { 
        boxOfficeResult: { dailyBoxOfficeList }
      }
    } = await axios.get("https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=1943b60fca7f60c201b5702f56747fc8&targetDt=20200201");
    // console.log(movies.data.dailyBoxOfficeListResult.dailyBoxOfficeList)
    this.setState( { dailyBoxOfficeList, isLoading: false} )
  }

  componentDidMount() {
    this.getMovies();
  }

  render(){
    const { isLoading, dailyBoxOfficeList } = this.state;
    return <section className="container"> 
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">loading</span>
        </div>
       ) : ( 
        <div className="movieLists">
            {dailyBoxOfficeList.map(movie => (
              <Movie
                key         = {movie.movieCd}
                rank        = {movie.rank}
                id          = {movie.movieCd}
                title       = {movie.movieNm}
                openDate    = {movie.openDt}
                audiCount   = {movie.audiAcc}
              />
            ))}
        </div>
      )}
      </section>;
  }
}


export default App;
