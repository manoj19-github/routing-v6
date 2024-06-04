import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Fragment>
      <h1>home page</h1>

      <Link to="/books">Booklist</Link>
      <Link to="/books/45">book 3</Link>
      <Link to="/books/new"> new book </Link>
    </Fragment>
  );
};

export default HomePage;
