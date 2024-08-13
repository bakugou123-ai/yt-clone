import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch,useAppSelector } from '../hooks/useApp'
import {getVideoDetails} from '../reducers/getVideoDetails';
import {getRecommendedVideo} from '../reducers/getRecommendedVideo';
import Navbar from './Navbar';

export default function Watch(){

    const {id} =useParams();
    const currentPlaying = useAppSelector((state)=>state.youtubeApp.currentPlaying);
   
    console.log(currentPlaying);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const recommendedVideo= useAppSelector((state)=> state.youtubeApp.recommendedVideo);
    

    useEffect(()=>{
        if(id){
            dispatch(getVideoDetails(id));
        }else{
            navigate("/")
        }
    },[dispatch,id,navigate])

    useEffect(()=>{
        if(id && recommendedVideo){
            dispatch(getRecommendedVideo(id))
        }
    },[dispatch,id,recommendedVideo])

    return (
        <>
          {currentPlaying && currentPlaying?.videoId === id && (
            <div className="max-h-screen overflow-hidden">
              <div >
                <Navbar />
              </div>
              <div className='flex flex-col'>
                
                    <div className='p-8'>
                      <iframe src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                      frameBorder="0"
                      width="800"
                      height="502"
                      allowFullScreen
                      title="Youtube Player">
                      </iframe>
                    </div>
                   
                  </div>
                
            </div>
          )}
        </>
      );
    }