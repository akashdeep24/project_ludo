import React from 'react'
import ChallengeCard from '../components/challengeCard'
import Logo from '../components/logo'
import OpenChallenges from '../components/OpenChallenges'
// function Bet(){
//   const bets_list = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500]
//   return(
//     <div>
      
//     </div>
//   )
// }

function CreateGame() {

  return (
    <div className="left-0 z-50 w-full h-full">
        <ChallengeCard/>
        <OpenChallenges/>
    </div>
  )
}

export default CreateGame