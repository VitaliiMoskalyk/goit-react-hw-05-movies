import { useSearchParams } from "react-router-dom";
import { Wrapper, Form } from "./moviesPage.styled";
import { Button } from "../../components/button/Button.styled";
import { useState } from "react";
import api from "../../fetchAPI/Fetch";
import FilmList from "../../components/filmList/FilmList";

export default function MoviesPage() {
  const [value, setValue] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  let query = searchParams.get("query") || "";

  const [filmInfo, isLoaded, error] = api.useFetchData("search", null, query);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") return;
    setSearchParams({ query: value.trim() });
    setValue("");
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <label>
          <input
            value={value}
            type="search"
            name="search"
            autoComplete="off"
            onChange={(e) => setValue(e.currentTarget.value.toLowerCase())}
          />
        </label>
        <Button type="submit">Search</Button>
      </Form>
      {error && <p>Error- {error.message}</p>}

      {isLoaded && <p>Loading...</p>}

      {filmInfo && <FilmList movies={filmInfo.results} />}
    </Wrapper>
  );
}
