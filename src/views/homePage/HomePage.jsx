import api from "../../fetchAPI";
import { Wrapper } from "./trendMovies.styled";
import FilmList from "../../components/filmList/FilmList";
import { NavLink } from "react-router-dom";

export default function HomePage() {
  const [trendMovies, isLoaded, error] = api.useFetchData("trending");

  return (
    <Wrapper>
      <h2>Trending today!</h2>
      {error && <p>Error- {error.message}</p>}

      {isLoaded && <p>Loading...</p>}

      {trendMovies &&
        trendMovies.results.map(({ id, title, poster_path }) => (
          <NavLink to={`/movies/${id}`} key={id}>
            <FilmList title={title} src={poster_path} />
          </NavLink>
        ))}
    </Wrapper>
  );
}
