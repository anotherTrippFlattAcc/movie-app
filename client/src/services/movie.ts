import type { MovieResponse, MoviesResponse } from '@/types/movie'
import { request } from './request'

export const MOVIES_SERVICE = {
	getAll: (page: number = 1) => request<MoviesResponse>(`/movies?page=${page}`),
	getById: (id: number = 1) => request<MovieResponse>(`/movies/${id}`),
}
