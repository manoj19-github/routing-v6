import React from "react";
import { Link, Outlet } from "react-router-dom";

const BooksLayout = () => {
  return (
    <div>
      <h1>Books layout</h1>
      <br />
      <Link to="/books">Booklist</Link>
      <Link to="/books/45">book 3</Link>
      <Link to="/books/new"> new book </Link>
      <Outlet />
    </div>
  );
};

export default BooksLayout;
