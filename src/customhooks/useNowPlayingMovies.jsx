import { useEffect } from "react";
import { api_options } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import {addNowPlayingMovies}  from "../utils/moviesSlice";


const useNowPlayingMovies = () => {

    const dispatch = useDispatch();
   
   const nowPlayingMovies = useSelector(store=>store.movies.nowPlayingMovies);

    useEffect(()=>{
        if(!nowPlayingMovies) getnowPlayingMovies()
    },[]);

    const getnowPlayingMovies = async () => {

        try{
        const data  = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',api_options)
        const res = await data.json();
        //console.log(res);
        dispatch(addNowPlayingMovies(res.results))
        }
        catch (err){
            console.error("fetch error",err);
        }
    }        
}

export default useNowPlayingMovies;