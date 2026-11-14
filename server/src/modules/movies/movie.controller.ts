import { Request, Response } from 'express'
import { parsePage } from '../../validators/parsePage'
import { MovieService } from './movie.service'

export class MovieController {
	constructor(private readonly movieService: MovieService) {}

	getMovies = async (req: Request, res: Response): Promise<void> => {
		try {
			const page = parsePage(req.query.page)
			const movies = await this.movieService.getMovies(page)

			res.status(200).json(movies)
		} catch (error: unknown) {
			res.status(500).json('error') // TODO: заменить на ErrorHandler
		}
	}
}
