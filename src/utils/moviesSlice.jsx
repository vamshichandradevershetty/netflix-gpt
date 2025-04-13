import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState: {
        nowPlayingMovies:null,
        TrailerVideo:null,

    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload; //whatever actions are done will be put in nowPlayingMovies

        },
        addTrailerVideo:(state,action)=>{
            state.TrailerVideo = action.payload;
        }
    }
})
export const {addNowPlayingMovies,addTrailerVideo} = movieSlice.actions;
export default movieSlice.reducer;