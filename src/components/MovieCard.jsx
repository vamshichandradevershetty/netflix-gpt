import { img_cdn_url } from "../utils/Constants";
const MovieCard = ({posterPath}) => {
    return (    
    <div className="w-36 md:w-48 pr-4">
        <img src={img_cdn_url+posterPath} alt="movie card" />
    </div>
    )
}
export default MovieCard;