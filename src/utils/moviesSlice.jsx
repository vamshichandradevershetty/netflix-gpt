import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState: {
        nowPlayingMovies:null,
        TrailerVideo:null,
        popularMovies:null,
        topRatedMovies:null,
        upComingMovies:null,

    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload; //whatever actions are done will be put in nowPlayingMovies

        },
        addPopularMovies:(state,action)=>{
            state.popularMovies = action.payload; //whatever actions are done will be put in nowPlayingMovies

        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies = action.payload; //whatever actions are done will be put in nowPlayingMovies

        },
        addUpComingMovies:(state,action)=>{
            state.upComingMovies = action.payload; //whatever actions are done will be put in nowPlayingMovies

        },
        addTrailerVideo:(state,action)=>{
            state.TrailerVideo = action.payload;
        }
    }
})
export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRatedMovies,addUpComingMovies} = movieSlice.actions;
export const moviesReducer =  movieSlice.reducer;