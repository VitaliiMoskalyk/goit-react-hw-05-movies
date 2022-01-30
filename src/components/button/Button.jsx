import { useNavigate } from "react-router-dom";
import { Button } from "./Button.styled";
import propTypes from "prop-types";

export default function ButtonNav({ title }) {
  const navigate = useNavigate();
  return (
    <Button type="button" onClick={() => navigate(-1)}>
      {title}
    </Button>
  );
}

ButtonNav.propTypes = {
  title: propTypes.string,
};
