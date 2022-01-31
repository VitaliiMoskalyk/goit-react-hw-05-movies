import DefaultImage from "../images/No-Image.png";
import { Wrapper } from "./filmItem.styled";

export default function FilmItem({ src, title }) {
  return (
    <Wrapper>
      <img
        src={src ? `https://image.tmdb.org/t/p/w500/${src}` : DefaultImage}
        alt={title ? title : "no-description"}
        width={210}
      />
      <p>{title ? title : "No title"}</p>
    </Wrapper>
  );
}
