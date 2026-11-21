import { MovieHero } from "@/components/blocks/movie/hero";
import { movie as movieService} from "../services/movie"
import { useEffect, useState } from "react";
import { useParams } from "react-router"
import type { Movie } from "@/types/movie";

function MovieDetails() {
    const { id } = useParams<{ id: string }>();
	const [movie, setMovie] = useState<Movie>()

    useEffect(() => {
        async function getMoiveById(id: number) {
            const data = await movieService.getById(id)
            setMovie(data)
        }
        
        getMoiveById(Number(id))
    }, [id])

    if (!movie) {
		return <div className='p-10 text-white'>Загрузка...</div>
	}

    return (
        <div>
            <MovieHero 
                title={movie.nameRu || movie.nameOriginal || movie.nameEn || "Без названия"}
                subtitle={movie.nameOriginal || movie.nameEn || undefined}
                slogan={movie.slogan || undefined}
                posterUrl={movie.coverUrl || movie.posterUrl}
                logoUrl={movie.logoUrl || undefined}
                description={movie.description || movie.shortDescription || "Описание отсутствует"}
                year={movie.year ?? undefined}
                genres={movie.genres?.map((g) => g.genre).join(", ") || ""}
                countries={movie.countries?.map((c) => c.country).join(", ") || ""}
                duration={movie.filmLength ?? 0}
                ratingKinopoisk={movie.ratingKinopoisk ?? 0}
                ratingImdb={movie.ratingImdb ?? 0}
                ageLimit={movie.ratingAgeLimits ?? "0"}
                />
        </div>
    )
}

export default MovieDetails