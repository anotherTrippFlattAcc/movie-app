import { MOVIES_SERVICE } from '@/services/movie'
import type { Movie } from '@/types/movie'
import { useEffect, useState } from 'react'
import { MovieCard } from '@/components/blocks/movie/card'
import { MoviesPagination } from '@/components/blocks/movie/pagination'

export function HomePage() {
	const [movies, setMovies] = useState<Movie[]>([])
	const [currentPage, setCurrentPage] = useState<number>(1)
	const [totalPages, setTotalPages] = useState<number>(1)

	useEffect(() => {
		async function getMovies() {
			const data = await MOVIES_SERVICE.getAll(currentPage)
			setMovies(data.items)
			setTotalPages(data.totalPages)
		}

		getMovies()
	}, [currentPage])

	const handlePageChange = (page: number) => {
		setCurrentPage(page)
		// window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<div>
			<ul className='flex flex-wrap gap-5 mt-10'>
				{movies.map(movie => (
					<li key={movie.kinopoiskId}>
						<MovieCard
							id={movie.kinopoiskId}
							title={movie.nameOriginal! || movie.nameRu!}
							description={movie.description!}
							posterUrlPreview={movie.posterUrlPreview}
							ratingKinopoisk={movie.ratingKinopoisk}
						/>
					</li>
				))}
			</ul>
			<div className='mt-10'>
				<MoviesPagination
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={handlePageChange}
				/>
			</div>
		</div>
	)
}
