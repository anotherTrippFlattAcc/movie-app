import { useParams } from "react-router"

function MovieDetails() {
    const { id } = useParams<{ id: string }>();

    return (
        <div>
            {id}
        </div>
    )
}

export default MovieDetails