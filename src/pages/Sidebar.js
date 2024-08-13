import React from 'react'
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { GrChannel } from "react-icons/gr";
import { MdHistory } from "react-icons/md";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { LiaFileVideoSolid } from "react-icons/lia";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiLike } from "react-icons/bi";


const Sidebar = () => {

    const mainLinks=[
        {
            icon: <MdHomeFilled className='text-xl'/>,
            name: 'Home'
        },
        {
            icon: <SiYoutubeshorts className='text-xl'/>,
            name: 'Shorts'
        },
        {
            icon: <MdSubscriptions className='text-xl'/>,
            name: 'Subscriptions'
        },
    ];

    const otherLinks=[
        {
            icon: <GrChannel className='text-xl'/>,
            name: 'Your Channel'
        },
        {
            icon: <MdHistory className='text-xl'/>,
            name: 'History'
        },
        {
            icon: <MdOutlinePlaylistPlay className='text-xl'/>,
            name: 'Playlist'
        },
      
        {
            icon: <LiaFileVideoSolid className='text-xl'/>,
            name: 'Your Videos'
        },
        {
            icon: <MdOutlineWatchLater className='text-xl'/>,
            name: 'Watch Later'
        },
        {
            icon: <BiLike className='text-xl'/>,
            name: 'Liked Videos'
        },
    ]
    return(

        <div className='w-4/12 pr-5 overflow-auto pb-8 sidebar pt-5'>
            <ul className='flex flex-col border-b-2 '>
                {
               mainLinks.map(
                ({icon,name})=>{
                    return(
                    <li key={name} className={`pl-6 py-3 hover:bg-zinc-300 ${name==="Home" ? "bg-zinc-200" : " " } rounded-xl `}>
                        <a href='#' className='flex items-center gap-5'>
                        {icon}
                    <span className='text-sm tracking-wider'>{name}</span>
                    </a>
                    </li>
                    )
                }
               )
               
                }
            </ul>
            <ul className='flex flex-col border-b-2 '>
                {
               otherLinks.map(
                ({icon,name})=>{
                    return(
                    <li key={name} className={`pl-6 py-3 hover:bg-zinc-300 ${name==="Home" ? "bg-zinc-200" : " " } rounded-xl `}>
                        <a href='#' className='flex items-center gap-5'>
                        {icon}
                    <span className='text-sm tracking-wider'>{name}</span>
                    </a>
                    </li>
                    )
                }
               )
               
                }
            </ul>

        </div>
    )
  
}

export default Sidebar