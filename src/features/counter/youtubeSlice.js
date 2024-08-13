import {createSlice} from '@reduxjs/toolkit';
import { getHomePageVideos } from '../../reducers/getHomePageVideos';
import { getSearchPage } from '../../reducers/getSearchPage';
import { getRecommendedVideo } from '../../reducers/getRecommendedVideo';
import { getVideoDetails } from '../../reducers/getVideoDetails';
const initialState={
    videos:[],
    currentPlaying :null,
    searchTerm :"",
    searchResults:[],
    nextPageToken:null,
    recommendedVideo:[],

};

const youtubeSlice= createSlice({
    name:"youtubeApp",
    initialState,
    reducers:{
        clearVideos:(state)=> {
        state.videos=[];
        state.nextPageToken=null;

        },
        changeSearchTerm:(state,action)=>{
            state.searchTerm= action.payload;
        },
        clearSearch:(state)=>{
            state.searchTerm=""
    }
    },
    extraReducers:(builder)=>{
        builder.addCase(getHomePageVideos.fulfilled,(state,action) => {
            if(action.payload && action.payload.parsedData) {
                
              state.videos = action.payload.parsedData;
              state.nextPageToken = action.payload.nextPageToken;
              
            }
            })
            builder.addCase(getSearchPage.fulfilled,(state,action) => {
                if(action.payload && action.payload.parsedData) {
                    state.videos = action.payload.parsedData;
                    state.nextPageToken = action.payload.nextPageToken;
                 
                  
                }
                })
                builder.addCase(getRecommendedVideo.fulfilled,(state,action) => {
                    
                      state.recommendedVideo = action.payload.parsedData;
                      
                      
                      
                    
                    })
                    builder.addCase(getVideoDetails.fulfilled,(state,action) => {
                          state.currentPlaying= action.payload;
                          
                          
                    
                        })
    }
})
export const {clearVideos, changeSearchTerm, clearSearch} = youtubeSlice.actions;
export default youtubeSlice.reducer;