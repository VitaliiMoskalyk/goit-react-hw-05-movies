import { useParams } from "react-router-dom";
import api from "../../API_services/FetchAPI";
import { Wrapper } from "./rewievs.styled";

const APIkey = "497db919393f11a553a342853c0aad01";
export default function Reviews() {
  const params = useParams();
  const movie = params.filmId;
  const APIadress = `https://api.themoviedb.org/3/movie/${movie}/reviews?api_key=${APIkey}&language=en-US&page=1`;
  const [filmInfo, isLoaded, error] = api.useFetchData(APIadress);

  return (
    <>
      {error && <p>Error- {error.message}</p>}

      {isLoaded && <p>Loading...</p>}

      {filmInfo && (
        <Wrapper>
          {filmInfo.results.map(({ author, content, id }) => (
            <li key={id}>
              <p>{author}</p>
              <p>{content}</p>
            </li>
          ))}
        </Wrapper>
      )}
    </>
  );
}
