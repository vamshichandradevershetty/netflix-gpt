import  MovieCard  from "./MovieCard";
export const MovieList = ({title,movies}) =>{
   //console.log(movies)
   if (!movies || movies.length === 0) {
    return null; // or return a loading spinner/message
    } 
    return (
        <div className="px-6 text-white">
        <h1 className="text-2xl py-2">{title}</h1>
        <div className="flex overflow-x-scroll">
                <div className="flex">
                {
                    movies.map((movie)=><MovieCard key={movie.id} posterPath={movie.poster_path}/>
                )
                }
               </div>
        </div>
        </div>
    );
}