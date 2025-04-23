import { Header } from "./header";
import  useNowPlayingMovies  from "../customhooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import usePopularMovies from "../customhooks/usePopularMovies";
import useTopRatedMovies from "../customhooks/useTopRatedMovies";
import useUpComingMovies from "../customhooks/useUpComingMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

export const Browse = () =>{


    const showGPTSearch = useSelector((store)=> store.gpt.showGPTSearch)


    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpComingMovies();

    return (
     <div className="">
        <Header/>
        {
        showGPTSearch ? (<GPTSearch/>) :
        ( 
            <> 
                <MainContainer/>
                <SecondContainer/>           
            </>
        )}
     </div>   
    )
}