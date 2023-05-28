import React from "react";
import axios from "axios"
import Movie from "../Movie/Movie";
import MovieHeader from "../MovieHeader/MovieHeader";

class HomeMovie extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts.mx/api/v2/list_movies.json"
    );
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
      const { isLoading, movies } = this.state;
    return (
      
      <div >
        <MovieHeader/>
        <h1 className='main_title' >Новые фильмы</h1>
        <div key={movies.id} className='content2'>
        {isLoading ? "Loading..." : movies.map((movie)=>(
         <Movie  key = {movie.id} id = {movie.id} poster={movie.medium_cover_image} />
    ))}</div>
    </div>
    );
  }
}

export default HomeMovie;
