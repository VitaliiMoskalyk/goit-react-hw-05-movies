import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Overviev } from "../../views/filmOverview/filmOverview.styled";
import { Wrapper, FilmInfo, FilmItems } from "./filmCard.styled";
import DefaultImage from "../images/No-Image.png";

export default function FilmCard({
  title,
  src,
  overview,
  genres,
  popularity,
  vote,
}) {
  const location = useLocation();
  const fromPage = location.state;

  return (
    <Wrapper>
      <h3>{title}</h3>
      <img
        src={src ? `https://image.tmdb.org/t/p/w500/${src}` : DefaultImage}
        alt={title}
        width={500}
      />
      <FilmInfo>
        {genres &&
          genres.map((genre) => (
            <FilmItems key={genre.id}>{genre.name}</FilmItems>
          ))}

        <FilmItems>{popularity}</FilmItems>

        <FilmItems>{vote}</FilmItems>
      </FilmInfo>
      <Overviev>{overview}</Overviev>
      <NavLink to="cast" state={fromPage}>
        Cast
      </NavLink>
      <NavLink to="reviews" state={fromPage}>
        Rewiews
      </NavLink>
      <Outlet />
    </Wrapper>
  );
}
