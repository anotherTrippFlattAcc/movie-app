export interface MovieSource {
	getMovies(page: number): Promise<unknown>
}
