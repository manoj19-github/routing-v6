import React, { Fragment, Suspense, lazy } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Routes,
  Route,
  Link,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
  isRouteErrorResponse,
  useRouteError,
} from "react-router-dom";
import HomePage from "./pages/Home";
import NewBook from "./pages/Books/NewBook";
import Book from "./pages/Books/Book";
import BooksLayout from "./pages/Books/BooksLayout";
import { log } from "console";

function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error) && error.status === 401) {
    // the response json is automatically parsed to
    // error.data, you also have access to the status
    return (
      <div>
        <h1>{error.status}</h1>
        <h2>{error.data.sorry}</h2>
        <p>
          Go ahead and email {error.data.hrEmail} if you feel like this is a
          mistake.
        </p>
      </div>
    );
  }

  // rethrow to let the parent error boundary handle it
  // when it's not a special case for this route
  throw error;
}
const SuspenceLayout = () => (
  <Suspense fallback={<h1> suspence fallback</h1>}>
    <Outlet />
  </Suspense>
);

const BookList = lazy(() => import("./pages/Books/BookList"));
const delayedFunction = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay));
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<SuspenceLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route>
          <Route path="/books" element={<BooksLayout />}>
            <Route
              index
              element={<BookList />}
              errorElement={<ErrorBoundary />}
            />
            <Route path=":id" element={<Book />} />
          </Route>
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
