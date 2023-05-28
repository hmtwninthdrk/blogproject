import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../MainFilm.css";

function Movie({ id, poster}) {
  return (
    <div className="movie">
      <Link>
        <div className="films_block">
          <img className="img_style" src={poster}></img>
        </div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
