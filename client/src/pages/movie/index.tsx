import { MovieHero } from '@/components/blocks/movie/hero'
import { MOVIES_SERVICE } from '@/services/movie'
import type { MovieResponse } from '@/types/movie'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export function MoviePage() {
	const [movie, setMovie] = useState<MovieResponse | null>(null)
	const { id } = useParams()

	useEffect(() => {
		async function getMovie() {
			const data = await MOVIES_SERVICE.getById(Number(id))
			setMovie(data)
		}

		getMovie()
	}, [id])

	return (
		<div>
			<MovieHero movie={movie} />
		</div>
	)
}
