export interface MovieSource {
	getMovies(page: number): Promise<unknown>
	getMovie(id: number): Promise<unknown>
}
