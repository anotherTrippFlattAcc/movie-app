import { type Movie, type MoviesResponse } from "@/types/movie"
import { request } from "./request"

export const movie = {
  getAll: (page: number = 1) => request<MoviesResponse>(`/movies?page=${page}`),
  getById: (id: number) => request<Movie>(`/movies/${id}`)
}