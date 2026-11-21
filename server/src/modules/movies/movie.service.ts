import { MovieSource } from './movie-source'

export class MovieService {
	constructor(private readonly movieSource: MovieSource) {}

	async getMovies(page: number): Promise<unknown> {
		return this.movieSource.getMovies(page)
	}

	async getMovie(id: number): Promise<unknown> {
		return this.movieSource.getMovie(id)
	}
}
