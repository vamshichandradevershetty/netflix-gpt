import { Header } from "./header";
import { useNowPlayingMovies } from "../customhooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";

export const Browse = () =>{


    useNowPlayingMovies();

    return (
     <div>
        <Header/>
        <MainContainer/>
        <SecondContainer/>
     </div>   
    )
}