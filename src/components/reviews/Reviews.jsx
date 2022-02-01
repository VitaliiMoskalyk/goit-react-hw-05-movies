import { useParams } from "react-router-dom";
import api from "../../fetchAPI";
import { Wrapper } from "./rewievs.styled";
import NoInfo from "../images/NoInfo.png";

export default function Reviews() {
  const params = useParams();
  const movie = params.filmId;

  const [filmInfo, isLoaded, error] = api.useFetchData("review", movie);

  return (
    <>
      {error && <p>Error- {error.message}</p>}

      {isLoaded && <p>Loading...</p>}

      {filmInfo && (
        <Wrapper>
          {error ? (
            <img src={NoInfo} alt="no info" />
          ) : (
            filmInfo.results.map(({ author, content, id }) => (
              <li key={id}>
                <p>{author}</p>
                <p>{content}</p>
              </li>
            ))
          )}
        </Wrapper>
      )}
    </>
  );
}
