import { Link } from "react-router-dom";
import api from "../../API_services/FetchAPI";
import propTypes from "prop-types";
import { Wrapper } from "./trendMovies.styled";

export default function TrendMovies({ url }) {
  const [trendMovies, isLoaded, error] = api.useFetchData(url);

  return (
    <Wrapper>
      <h2>Trending today!</h2>
      {error && <p>Error- {error.message}</p>}

      {isLoaded && <p>Loading...</p>}

      {trendMovies &&
        trendMovies.results.map(({ id, title, poster_path }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={title}
                width={100}
              />
              <p>{title}</p>
            </Link>
          </li>
        ))}
    </Wrapper>
  );
}

TrendMovies.prototype = {
  url: propTypes.string.isRequired,
};
