import React from "react";
import { Link } from "react-router-dom";
import "../MainFilm.css"
const MovieHeader = () => {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <div className="logo_text">
            <h1>
              <a>Movies</a>
            </h1>
           
          </div>

          <div className="menubar">
            <ul className="menu">
              <li className="selected">
                <Link to="/mainfilm">Главная</Link>
              </li>
              <li className="selected">
                <Link
                  to={{
                    pathname: "/films",
                    state: {
                      fromLocation: true,
                    },
                  }}
                >
                  Фильмы
                </Link>
               
                
              </li>

              <li className="selected"> <Link to = {`/`}>Return to Blog</Link></li>
             
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieHeader;
