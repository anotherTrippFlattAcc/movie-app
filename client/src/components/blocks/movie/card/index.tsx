import { Badge } from '@/components/ui/badge'
import {
	Card,
	CardAction,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import MovieDetails from '@/pages/movieDeatails'
import { Link } from 'react-router'

interface MovieCardProps {
  id: number | undefined
	title: string | undefined
	description: string | undefined
	posterUrlPreview: string | undefined
	ratingKinopoisk: number | undefined | null
}

export const MovieCard = ({
  id,
	title,
	description,
	posterUrlPreview,
	ratingKinopoisk,
}: MovieCardProps) => {
	return (
    <Link to={`/movie/${id}`}>
      <Card className='relative hover:shadow-lg transition-all hover:scale-102 w-70 pt-0 cursor-pointer'>
        <img
          src={posterUrlPreview}
          alt='Event cover'
          className='relative w-full h-90 aspect-video object-cover'
        />
        <CardHeader>
          {ratingKinopoisk && (
            <CardAction>
              <Badge variant='secondary'>{ratingKinopoisk}</Badge>
            </CardAction>
          )}
          <CardTitle className='truncate'>{title}</CardTitle>
          <CardDescription className='truncate'>{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
	)
}
