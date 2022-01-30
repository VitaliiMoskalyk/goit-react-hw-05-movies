import { useSearchParams } from "react-router-dom";
import { Wrapper } from "./moviesPage.styled";
import MoviesList from "../searchMoviesList/MoviesList";
import { Button } from "../../components/button/Button.styled";

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  let query = searchParams.get("query") || "";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const query = form.search.value;
    setSearchParams({ query: query });
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            defaultValue={query ?? undefined}
            type="search"
            name="search"
            autoComplete="off"
          />
        </label>
        <Button type="submit">Search</Button>
      </form>
      {query !== "" && <MoviesList query={query} />}
    </Wrapper>
  );
}
