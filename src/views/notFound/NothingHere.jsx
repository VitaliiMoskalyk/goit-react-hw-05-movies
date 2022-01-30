import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Nothing() {
  return (
    <Fragment>
      <h2 style={{ marginTop: "150px" }}>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </Fragment>
  );
}
