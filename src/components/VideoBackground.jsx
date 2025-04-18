import { useSelector } from "react-redux";
import useMovieTrailer from "../customhooks/useMovieTrailer";


export const VideoBackground = ({movieId})=>{

    useMovieTrailer(movieId);
    const trailerVideo = useSelector((store) => store.movies?.TrailerVideo)
   

    return (
        <div className="w-screen">
            <iframe className="w-screen aspect-video"
            src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1"}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin"
             allowFullScreen></iframe>
        </div>
    )

}

