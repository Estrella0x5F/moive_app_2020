import React, { Component } from 'react';
import axios from 'axios';
import Movie from '../components/Movie'
import './Home.css'

class Home extends Component{

  state = {
    isLoading : true,
    movies : [],
  }
  getMovies = async () => {
    const {
      data : {
        data : { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating') 
    this.setState({ movies, isLoading : false })
  }
  componentDidMount() {
    this.getMovies()
  }

  render() {
    // 비구조화 할당으로 this.state에 있는 isLoading을 우선 얻으면 항상 this.state를 입력하지 않아도
    // 된다(state에서 매번 꺼내 쓰는 게 아닌 미리 꺼내뒀다가 필요할 때 쓰는 것임). 
    const { isLoading, movies } = this.state 

    // 삼항 연산자의 사용법은 이미 알고 있으므로 따로 더 알 필요는 없어보인다. 

    //id, title, year, summary, poster
    return (
      <section class = "container">
          {isLoading ? (
            <div class = "loader">
              <span class = "loader__text">loading...</span>
            </div>
            ) : (
              <div class = "movies">
                {movies.map(movie => (
                  <Movie 
                    key     = {movie.id}
                    id      = {movie.id} 
                    title   = {movie.title}
                    year    = {movie.year}
                    summary = {movie.summary}
                    poster  = {movie.medium_cover_image}
                    genres  = {movie.genres}
                  />
               ))}
             </div>
            )}  
      </section>
    )
  }
}

export default Home