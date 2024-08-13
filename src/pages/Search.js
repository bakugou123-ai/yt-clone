import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { useAppDispatch,useAppSelector } from '../hooks/useApp'

import { Spinner } from './Spinner';
import { Card } from './Card';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import { getSearchPage } from '../reducers/getSearchPage';
import { clearVideos } from '../features/counter/youtubeSlice';
import { SearchCard } from './SearchCard';




export default function Search() {
  
  const navigate= useNavigate();
  const searchTerm = useAppSelector((state)=>state.youtubeApp.searchTerm);
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state)=> state.youtubeApp.videos);

  useEffect(()=>{
    dispatch(clearVideos());
    if(searchTerm==="")navigate("/");
    else(
        dispatch(getSearchPage(false))
    )
  },[dispatch,navigate,searchTerm])


  return (
    <div className='max-h-screen overflow-hidden'>
      <div style={{height:"7.5vh"}}>
      <Navbar/>
      </div>
      <div className='flex' style={{height:"92.5vh"}}>
      <Sidebar/>
      {
        videos.length ? (
          <div className='w-full'>
          <InfiniteScroll 
          dataLength={videos.length} 
          next={()=> dispatch(getSearchPage(true))}
          hasMore={videos.length<500}
          loader={<Spinner/>}
          height={650}
          >
              <div className='grid-rows-2 p-8 gap-y-18 gap-x-8'>
                {videos.map((item) => {
                  return <SearchCard data={item} key={item.videoId}/>
                })}
              </div>
          </InfiniteScroll>
          </div>
        ):(
          <Spinner/>
        )
      }
      </div>
    </div>
  )
}


