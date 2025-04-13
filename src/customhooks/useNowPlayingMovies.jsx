import { useEffect } from "react";
import { api_options } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

export const useNowPlayingMovies = () => {

    const dispatch = useDispatch();
    const getnowPlayingMovies = async () => {

        const data  = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', api_options);
        const res = await data.json();
        dispatch(addNowPlayingMovies(res.results))



    }
    useEffect(()=>{
        getnowPlayingMovies()
    },[])
}