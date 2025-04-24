import { useSelector } from "react-redux";
import { MovieList } from "./MovieList";


const SecondContainer = () =>{

    const Movies = useSelector((store)=>store.movies)
    //console.log(Movies);
    return Movies && (
        <div className=" bg-black">
            <div className="mt-0 md:-mt-40 pl-2 md:pl-6 relative z-20">
            <MovieList title={"Now Playing"} movies={Movies.nowPlayingMovies}></MovieList>
            <MovieList title={"Popular"} movies={Movies.popularMovies}></MovieList>
            <MovieList title={"Top Rated"} movies={Movies.topRatedMovies}></MovieList>
            <MovieList title={"UpComing Movies"} movies={Movies.upComingMovies}></MovieList>

            </div>

        </div>
    );

}

export default SecondContainer;