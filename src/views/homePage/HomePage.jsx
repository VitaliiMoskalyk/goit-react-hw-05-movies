import api from "../../fetchAPI";
import { Wrapper } from "./homePage.styled";
import FilmList from "../../components/filmList/FilmList";

export default function HomePage() {
  const [trendMovies, isLoaded, error] = api.useFetchData("trending");

  return (
    <Wrapper>
      <h2>Trending today!</h2>
      {error && <p>Error- {error.message}</p>}

      {isLoaded && <p>Loading...</p>}

      {trendMovies && <FilmList movies={trendMovies.results} />}
    </Wrapper>
  );
}
