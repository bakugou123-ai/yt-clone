import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { BsYoutube } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { AiFillAudio } from "react-icons/ai";
import { MdVideoCall } from "react-icons/md";
import { CiBellOn } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

import { useAppDispatch, useAppSelector } from '../hooks/useApp';
import {useLocation, useNavigate} from 'react-router-dom';
import { getSearchPage } from '../reducers/getSearchPage';
import { changeSearchTerm, clearVideos } from '../features/counter/youtubeSlice';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const searchTerm = useAppSelector((state)=>state.youtubeApp.searchTerm);
    const dispatcher = useAppDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const handleSearch=()=>{
        if(location.pathname!== '/search') navigate('/search');
        else{
            dispatcher(clearVideos);
            dispatcher(getSearchPage(false));
        }
    }

  return (
    <div className='flex justify-between font-poppins'>
        <div className='flex items-center px-8 h-8 gap-8 py-8 text-xl'>
            <div><GiHamburgerMenu/></div>
            <div className='flex gap-2 items-center justify-center'>
               <Link to="/"><div className='text-red-600'><BsYoutube/></div>
               </Link> 
              <Link to="/"> <span className='text-black-100 font-bold tracking-tight'>YouTube</span></Link>
           
            </div>
            </div>
            <div className='flex items-center justify-center gap-5 text-lg'>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    handleSearch();
                }}>
                    <div className='flex items-center justify-center gap-2 '>
                    <input type='text' placeholder='Search' className='rounded-full border-2 px-10 py-1'
                    value={searchTerm}
                    onChange={e=>dispatcher(changeSearchTerm(e.target.value))}

                    />
                    <div className='bg-slate-300 rounded-lg px-4 py-2'>
                        <button><CiSearch/></button></div>
                    </div>
                </form>
                <div className=' bg-slate-300 rounded-full px-2 py-2'>
                    <AiFillAudio/>
                </div>
            </div>
            <div className='flex items-center justify-center gap-5 text-3xl px-8'>
                <div ><MdVideoCall/></div>
                <div><CiBellOn/></div>
                <div><CgProfile/></div>
            </div>
        </div>
    
  )
}

export default Navbar