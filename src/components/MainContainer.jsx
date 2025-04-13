import { useSelector } from "react-redux";
import { VideoTitle } from "./VideoTitle";
import { VideoBackground } from "./VideoBackground";

const MainContainer = () => {

    const Movies = useSelector(store => store.movies?.nowPlayingMovies)

    if (Movies === null) return ; // it is early return because in next line we are accessing 1st element but initially it is null if we dont use it it throws error so we are saying if it is null just return without going further
    const mainMovie = Movies[0];
   
    const {original_title,overview,id} = mainMovie;
    return (
        <div className="">
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movieId={id}/>
        </div>
    );
}

export default MainContainer;