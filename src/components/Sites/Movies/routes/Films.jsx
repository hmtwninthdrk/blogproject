import React from "react";
import axios from "axios";
import Film from "../Film/Film";
import MovieHeader from "../MovieHeader/MovieHeader";
import MovieFooter from "../MovieFooter/MovieFooter";

class Films extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts.mx/api/v2/list_movies.json");
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        <MovieHeader/>
        <h1 className="main_title">Новые фильмы</h1>
        <div key={movies.id} className="content">
          
          {isLoading
            ? "Loading..."
            : movies.map((movie) => (
              
               <>
               
                <Film
                  key={movie.id}
                  id={movie.id}
                  title = {movie.title}
                  poster={movie.medium_cover_image}
                  description = {movie.summary
                  }
                />
               </>
                
              ))}
        </div>
        <MovieFooter/>
      </div>
    );
  }
}

export default Films;
