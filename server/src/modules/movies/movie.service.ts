import { MovieSource } from './movie-source'

export class MovieService {
	constructor(private readonly movieSource: MovieSource) {}

	async getMovies(page: number): Promise<unknown> {
		return this.movieSource.getMovies(page)
	}

	async  getMovieById(id: number) {
		return this.movieSource.getMovieById(id)
	}
}
