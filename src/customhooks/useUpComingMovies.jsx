import { useEffect } from "react";
import { api_options } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../utils/moviesSlice";

const useUpComingMovies = () => {

    const dispatch = useDispatch();
    useEffect(()=>{
        getUpComingMovies()
    },[]);

    const getUpComingMovies = async () => {

        try{
        const data  = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',api_options)
        const res = await data.json();
        console.log(res);
        dispatch(addUpComingMovies(res.results))
        }
        catch (err){
            console.error("fetch error",err);
        }
    }        
}

export default useUpComingMovies;