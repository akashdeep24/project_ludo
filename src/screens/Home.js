import React, { useEffect, useContext } from 'react'
import TopBar from '../components/TopBar';
import BottomNav from '../components/BottomNav';
import AppContext from "../Context/AppContext";
import { useNavigate } from 'react-router-dom';
import ludoBoard from '../assets/images/ludo-board.jpg';

function Home() {
  const {userDetails} = useContext(AppContext)
  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate('/creategame')
  }
  return (
    <div style={{justifyContent:'center', alignItems:'center'}} >
        <TopBar/>
        <div onClick={handleClick} className="mx-auto mt-40 flex flex-col items-center justify-center">
          <span class="liveText" style={{fontSize:25, color:'white', fontWeight:500, textDecoration:'underline'}}><p>Live</p></span>
          <img src={ludoBoard} style={{width:'80%', height:'90%', borderWidth:2, borderColor:'black'}}/>
          <button onClick={handleClick} className="border-2 border-black my-10 group h-[3rem] w-[6rem] bg-gradient-to-r from-[#F9F295] from-10% via-[#E0AA3E] via-30% to-[#FAF398] via-75% via-[#B88A44] to-90% rounded">
              <span className="text-[#013D7D] text-sm font-bold">PLAY</span>
          <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
          </button>
        </div>
        <BottomNav/>
    </div>
  )
}

export default Home