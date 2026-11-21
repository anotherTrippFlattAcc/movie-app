import { Button } from '@/components/ui/button'
import type { MovieResponse } from '@/types/movie'

interface MovieHeroProps {
	movie: MovieResponse | null
}

export function MovieHero({ movie }: MovieHeroProps) {
	if (!movie) {
		return null
	}

	const countries = movie.countries?.map(({ country }) => country).join(', ')
	const genres = movie.genres?.map(({ genre }) => genre).join(', ')

	const formatDuration = (minutes?: number | null) => {
		if (!minutes) return null

		const hours = Math.floor(minutes / 60)
		const restMinutes = minutes % 60

		return `${hours} ч ${restMinutes} мин`
	}

	const duration = formatDuration(movie.filmLength)
	const ageLimit = movie.ratingAgeLimits?.replace('age', '')

	return (
		<section className='relative h-screen w-full overflow-hidden text-white'>
			<img
				src={movie.coverUrl ?? movie.posterUrl ?? ''}
				alt={movie.nameRu ?? movie.nameOriginal ?? 'Фильм'}
				className='absolute inset-0 w-full h-full object-cover'
			/>

			<div className='absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent' />
			<div className='absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent' />

			<div className='relative z-10 flex h-full flex-col justify-end pb-16 px-6 sm:px-12 lg:px-24 max-w-3xl'>
				{movie.logoUrl && (
					<img
						src={movie.logoUrl}
						alt={movie.nameOriginal ?? movie.nameRu ?? 'Логотип фильма'}
						className='w-[320px] max-w-full mb-6 drop-shadow-lg'
					/>
				)}

				<ul className='flex flex-wrap items-center gap-x-2 gap-y-1 mb-4 text-sm text-white/85'>
					{movie.year && <li>{movie.year}</li>}

					{countries && (
						<>
							<li className='text-white/50'>·</li>
							<li>{countries}</li>
						</>
					)}

					{genres && (
						<>
							<li className='text-white/50'>·</li>
							<li>{genres}</li>
						</>
					)}

					{duration && (
						<>
							<li className='text-white/50'>·</li>
							<li>{duration}</li>
						</>
					)}

					{ageLimit && (
						<>
							<li className='text-white/50'>·</li>
							<li className='border border-white/40 rounded px-1.5 py-0.5 text-xs'>
								{ageLimit}+
							</li>
						</>
					)}
				</ul>

				{movie.slogan && (
					<p className='mb-3 text-lg italic text-white/70'>«{movie.slogan}»</p>
				)}

				{movie.shortDescription && (
					<p className='mb-8 text-base text-white/90 leading-relaxed max-w-xl'>
						{movie.shortDescription}
					</p>
				)}

				<div className='flex items-center gap-3'>
					<Button className='px-10 py-6 text-base font-semibold bg-green-600 hover:bg-green-500 text-white'>
						Смотреть
					</Button>

					<Button
						variant='outline'
						size='icon'
						aria-label='Добавить в избранное'
						className='w-12 h-12 rounded-lg border-white/30 bg-white/10 text-xl hover:bg-white/20'
					>
						♡
					</Button>
				</div>

				<div className='flex gap-10 mt-10'>
					{movie.ratingKinopoisk != null && (
						<div className='flex flex-col items-center'>
							<span className='text-3xl font-bold text-emerald-400'>
								{movie.ratingKinopoisk}
							</span>
							<span className='text-xs text-white/60'>Кинопоиск</span>
						</div>
					)}

					{movie.ratingImdb != null && (
						<div className='flex flex-col items-center'>
							<span className='text-3xl font-bold text-emerald-400'>
								{movie.ratingImdb}
							</span>
							<span className='text-xs text-white/60'>IMDb</span>
						</div>
					)}
				</div>
			</div>
		</section>
	)
}
