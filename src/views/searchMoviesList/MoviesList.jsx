import api from "../../fetchAPI";
import propTypes from "prop-types";
import FilmList from "../../components/filmList";
import { NavLink } from "react-router-dom";

export default function MoviesList({ query }) {
  const [filmInfo, isLoaded, error] = api.useFetchData("search", null, query);
  console.log(filmInfo);
  return (
    <>
      {error && <p>Error- {error.message}</p>}

      {isLoaded && <p>Loading...</p>}

      {filmInfo &&
        filmInfo.results.map(({ title, id, poster_path }) => (
          <NavLink to={`/movies/${id}`} key={id}>
            <FilmList title={title} src={poster_path} />
          </NavLink>
        ))}
    </>
  );
}

MoviesList.prototype = {
  query: propTypes.string.isRequired,
};
