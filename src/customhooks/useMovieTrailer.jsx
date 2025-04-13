import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { api_options } from "../utils/Constants";
import { addTrailerVideo } from "../utils/moviesSlice";
const useMovieTrailer = (movieId)=>{

    const dispatch = useDispatch();
     const getMovieVideo = async()=>{

        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', api_options);
        const json = await data.json();

        const filtereddata = json.results.filter(video => video.type === "Trailer");
        const trailer = filtereddata.length ? filtereddata[0]: json.results[0];
        dispatch(addTrailerVideo(trailer));
    } 

    useEffect(()=>{
        getMovieVideo();
    },[])

}

export default useMovieTrailer;