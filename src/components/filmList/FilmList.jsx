import { NavLink, useLocation } from "react-router-dom";
import FilmItem from "../filmItem";
import propTypes from "prop-types";
import { object } from "prop-types";

export default function FilmList({ movies }) {
  const location = useLocation();
  return movies.map(({ title, id, poster_path }) => {
    return (
      <NavLink to={`/movies/${id}`} key={id} state={{ from: location }}>
        <FilmItem title={title} src={poster_path} />
      </NavLink>
    );
  });
}
FilmList.propTypes = {
  movies: propTypes.arrayOf(object).isRequired,
};
