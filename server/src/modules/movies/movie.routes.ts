import { Router } from 'express'
import type { MovieController } from './movie.controller'

export function createMovieRouter(controller: MovieController): Router {
	const router = Router()

	router.get('/', controller.getMovies)
	router.get('/:id', controller.getMovie)

	return router
}
