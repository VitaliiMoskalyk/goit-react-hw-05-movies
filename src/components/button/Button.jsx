import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "./Button.styled";
import propTypes from "prop-types";

export default function ButtonNav({ title }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Button type="button" onClick={() => navigate(location.state.from)}>
      {title}
    </Button>
  );
}

ButtonNav.propTypes = {
  title: propTypes.string,
};
