import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Link } from "react-router"

interface MovieCardProps {
  id: number | undefined
  title: string | undefined,
  description: string | undefined,
  posterUrlPreview: string | undefined
  ratingKinopoisk: number | undefined | null
}

export const MovieCard = ({ title, description, posterUrlPreview , ratingKinopoisk, id}: MovieCardProps) => {
  return (
    <Link
      to={`/movie/${id}`}
      className="block"
    >
      <Card className="relative w-70 pt-0 hover:shadow-lg transition-all hover:scale-103 cursor-pointer">
        <img
          src={posterUrlPreview}
          alt="Event cover"
          className="relative w-full h-90 aspect-video object-cover"
        />
        <CardHeader>
          {ratingKinopoisk && (
            <CardAction>
              <Badge variant="secondary">{ratingKinopoisk}</Badge>
            </CardAction>
          )}
          <CardTitle className="truncate">{title}</CardTitle>
          <CardDescription className="truncate">
            {description}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link> 
  )
}
