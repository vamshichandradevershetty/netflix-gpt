import { useEffect } from "react";
import { api_options } from "../utils/Constants";
import { useDispatch } from "react-redux";
import {addPopularMovies} from "../utils/moviesSlice";

const usePopularMovies = () => {

    const dispatch = useDispatch();
    useEffect(()=>{
        getPopularMovies()
    },[]);

    const getPopularMovies = async () => {

        try{
        const data  = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',api_options)
        const res = await data.json();
        console.log(res);
        dispatch(addPopularMovies(res.results))
        }
        catch (err){
            console.error("fetch error",err);
        }
    }        
}

export default usePopularMovies;