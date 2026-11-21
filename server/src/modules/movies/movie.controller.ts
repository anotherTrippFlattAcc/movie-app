import { NextFunction, Request, Response } from 'express'
import { parsePage } from '../../validators/parsePage'
import { MovieService } from './movie.service'

export class MovieController {
	constructor(private readonly movieService: MovieService) {}

	getMovies = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

		try {
			const page = parsePage(req.query.page)
			const movies = await this.movieService.getMovies(page)

			res.status(200).json(movies)
		} catch (error: unknown) {
			next(error)
		}
	}

	getMovieById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const rawId = req.params.id

			if (typeof rawId !== 'string') {
				throw new Error('Id not string') 
			}
			const id = parseInt(rawId, 10)

			const movie = await this.movieService.getMovieById(id)
			
			res.status(200).json(movie)
		}catch (error: unknown){
			next(error)
		}
	}
}
