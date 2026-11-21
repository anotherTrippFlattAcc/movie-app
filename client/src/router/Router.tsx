import { BrowserRouter, Routes, Route } from "react-router";
import App from "../App";
import MovieDetails from "../pages/movieDeatails";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
