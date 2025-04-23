import { useEffect } from "react";
import { api_options } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import {addPopularMovies} from "../utils/moviesSlice";

const usePopularMovies = () => {

    const popularMovies = useSelector(store=>store.movies.popularMovies);

    const dispatch = useDispatch();
    useEffect(()=>{
        if(!popularMovies) getPopularMovies()
    },[]);

    const getPopularMovies = async () => {

        try{
        const data  = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',api_options)
        const res = await data.json();
        //console.log(res);
        dispatch(addPopularMovies(res.results))
        }
        catch (err){
            console.error("fetch error",err);
        }
    }        
}

export default usePopularMovies;