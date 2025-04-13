import { useEffect } from "react";
import { api_options } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {

    const dispatch = useDispatch();
    useEffect(()=>{
        getTopRatedMovies()
    },[]);

    const getTopRatedMovies = async () => {

        try{
        const data  = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',api_options)
        const res = await data.json();
        console.log(res);
        dispatch(addTopRatedMovies(res.results))
        }
        catch (err){
            console.error("fetch error",err);
        }
    }        
}

export default useTopRatedMovies;