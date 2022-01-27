import { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import { Wrapper, Button } from "./moviesPage.styled";

const APIkey = "497db919393f11a553a342853c0aad01";

export default function MoviesPage() {
  const [movies, setMovies] = useState("");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  let query = searchParams.get("query") || "";

  useEffect(() => {
    if (query === "") return;
    else {
      setIsLoaded(true);
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${APIkey}&language=en-US&page=1&include_adult=false&query=${query}`
      )
        .then((res) => res.json())
        .then(
          (data) => {
            setMovies(data);
            setIsLoaded(false);
          },
          (error) => {
            setError(error);
            setIsLoaded(false);
          }
        );
    }
  }, [query]);

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
      {error && <p>Error- {error.message}</p>}

      {isLoaded && <p>Loading...</p>}

      {movies &&
        movies.results.map(({ title, id, poster_path }) => (
          <NavLink key={id} to={`/movies/${id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt=""
              width={110}
            />
            <p>{title}</p>
          </NavLink>
        ))}
    </Wrapper>
  );
}
