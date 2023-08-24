import React from 'react'
import ChallengeCard from '../components/challengeCard'
import Logo from '../components/logo'
import OpenChallenges from '../components/OpenChallenges'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

function CreateGame() {

  return (
    <div>
      <TopBar/>
      <div className="left-0 z-50 w-full h-full">
          <ChallengeCard/>
          <OpenChallenges/>
      </div>
      <BottomNav/>
    </div>
  )
}

export default CreateGame