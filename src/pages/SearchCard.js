import React from 'react'
import { Link } from 'react-router-dom'
export const SearchCard = ({data}) => {
return(
    <div className='flex gap-3'>
        <div className='relative'>
            
            <span className=' absolute bottom-3 right-3 text-white bg-gray-700 px-2 py-0.5 z-10 rounded-md' >{data.videoDuration}</span>
            <Link to={`/watch/${data.videoId}`}>
            <img className='p-2' src={data.videoThumbnail} alt="video-thumbnail"/></Link>
            
        </div>
        <div className='flex gap-1 flex-col'>
        <h2 className='text-lg'>
                <a href='#' className='line-clamp-2'>
                    {data.videoTitle}
                </a>
            </h2>

            <div className='flex gap-4'>
                <span  className="after:contents-['•'] after:mx-1">{data.videoViews} views</span>
                <span>{data.videoAge} ago</span>
            </div>
            <div className='flex gap-2 text-sm py-2'>
                <img className='w-5 h-5 rounded-full' src={data.channelInfo.image}/>
                <span>{data.channelInfo.name}</span>
            </div>
            <div className='text-sm max-w-2xl'>
                {data.videoDescription}
            </div>
            
            
        </div>

    </div>
)
}