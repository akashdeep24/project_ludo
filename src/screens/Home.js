import React, { useEffect, useContext } from 'react'
import CreateGame from './CreateGame';
import TopBar from '../components/TopBar';
import BottomNav from '../components/BottomNav';
import AppContext from "../Context/AppContext";
import { useNavigate } from 'react-router-dom';

function Home() {
  const {userDetails } = useContext(AppContext)
  const navigate = useNavigate()
  return (
    <div>
        <TopBar/>
        <CreateGame/>
        <BottomNav/>
    </div>
  )
}

export default Home