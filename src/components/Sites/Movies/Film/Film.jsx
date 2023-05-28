import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import s from './Film.module.css';
function Film({ id, poster , title ,description}) {

  return (
    
    <Link
    >
      <div className="info_film">
        <div className={s.inf_title}>{title}</div>
        <img className={s.inf_img} src={poster}></img>
        {description}
      </div>
    </Link>
  );
}

Film.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Film;
