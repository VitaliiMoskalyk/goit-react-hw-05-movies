import { useParams } from "react-router-dom";
import api from "../../fetchAPI";
import { Wrapper } from "./filmCard.styled";
import FilmCard from "../../components/filmCard";
import Button from "../../components/button";

export default function FilmOverview() {
  const params = useParams();
  const movie = params.filmId;
  const [filmInfo, isLoaded, error] = api.useFetchData("card", movie);

  return (
    <>
      {error && <p>Error- {error.message}</p>}

      {isLoaded && <p>Loading...</p>}

      {filmInfo && (
        <Wrapper>
          <Button title="Go back" />
          <FilmCard
            title={filmInfo.title}
            src={filmInfo.poster_path}
            overview={filmInfo.overview}
            genres={filmInfo.genres}
            popularity={filmInfo.popularity}
            vote={filmInfo.vote_average}
          />
        </Wrapper>
      )}
    </>
  );
}
