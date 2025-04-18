import { useEffect } from "react";
import { api_options } from "../utils/Constants";
import { useDispatch } from "react-redux";
import {addNowPlayingMovies}  from "../utils/moviesSlice";


const useNowPlayingMovies = () => {

    const dispatch = useDispatch();
    useEffect(()=>{
        getnowPlayingMovies()
    },[]);

    const getnowPlayingMovies = async () => {

        try{
        const data  = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',api_options)
        const res = await data.json();
        console.log(res);
        dispatch(addNowPlayingMovies(res.results))
        }
        catch (err){
            console.error("fetch error",err);
        }
    }        
}

export default useNowPlayingMovies;