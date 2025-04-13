import { Header } from "./header";
import  useNowPlayingMovies  from "../customhooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import usePopularMovies from "../customhooks/usePopularMovies";
import useTopRatedMovies from "../customhooks/useTopRatedMovies";
import useUpComingMovies from "../customhooks/useUpComingMovies";

export const Browse = () =>{


    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpComingMovies();

    return (
     <div className="">
        <Header/>
        <MainContainer/>
        <SecondContainer/>
     </div>   
    )
}