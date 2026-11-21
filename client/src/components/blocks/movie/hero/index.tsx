import { Button } from '@/components/ui/button'

interface MovieHeroProps {
	title: string
	subtitle?: string
	slogan?: string
	posterUrl: string
	logoUrl?: string
	description: string
	year?: number
	genres?: string
	countries?: string
	duration?: number
	ratingKinopoisk?: number
	ratingImdb?: number
	ageLimit?: string
}

export function MovieHero({
	title,
	subtitle,
	slogan,
	posterUrl,
	logoUrl,
	description,
	year,
	genres,
	countries,
	duration,
	ratingKinopoisk,
	ratingImdb,
	ageLimit,
}: MovieHeroProps) {
	return (
		<section className='relative h-screen w-full overflow-hidden text-white'>
			<img
				src={posterUrl}
				alt={title}
				className='absolute inset-0 w-full h-full object-cover'
			/>

			<div className='absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent' />
			<div className='absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent' />

			<div className='relative z-10 flex h-full flex-col justify-end pb-16 px-6 sm:px-12 lg:px-24 max-w-3xl'>
				<img
					src={logoUrl}
					alt={title}
					className='w-[320px] max-w-full mb-6 drop-shadow-lg'
				/>

				<div className='mb-4'>
						<h1 className='text-4xl sm:text-5xl font-bold tracking-tight drop-shadow-lg'>
							{title}
						</h1>
						{subtitle && subtitle !== title && (
							<p className='mt-1 text-lg text-white/60'>{subtitle}</p>
						)}
				</div>
				<ul className='flex flex-wrap items-center gap-x-2 gap-y-1 mb-4 text-sm text-white/85'>
					<li>{year}</li>
					<li className='text-white/50'>·</li>
					<li>{countries}</li>
					<li className='text-white/50'>·</li>
					<li>{genres}</li>
					<li className='text-white/50'>·</li>
					<li>{duration}</li>
					<li className='text-white/50'>·</li>
					<li className='border border-white/40 rounded px-1.5 py-0.5 text-xs'>
						{ageLimit }
					</li>
				</ul>

				<p className='mb-3 text-lg italic text-white/70'>
					{slogan}
				</p>

				<p className='mb-8 text-base text-white/90 leading-relaxed max-w-xl'>
					{description}
				</p>

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

				{/* Рейтинги — прижаты к низу слева, под кнопками */}
				<div className='flex gap-10 mt-10'>
					<div className='flex flex-col items-center'>
						<span className='text-3xl font-bold text-emerald-400'>{ratingKinopoisk}</span>
						<span className='text-xs text-white/60'>Кинопоиск</span>
					</div>
					<div className='flex flex-col items-center'>
						<span className='text-3xl font-bold text-emerald-400'>{ratingImdb}</span>
						<span className='text-xs text-white/60'>IMDb</span>
					</div>
				</div>
			</div>
		</section>
	)
}
