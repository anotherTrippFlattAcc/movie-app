export interface MovieSource {
	getMovies(page: number): Promise<unknown>
	getMovieById(id: number): Promise<unknown>
}
