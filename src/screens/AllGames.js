import React from 'react'
import ChallengeCard from '../components/challengeCard'

function AllGames() {
  let gameList = ['Akash', 'ak', 'as']
  let games = gameList.map(function(game){
    return <ChallengeCard/>})
  return (
    <div className="left-0 z-50 w-full h-16 bg-white border-t border-gray-200">
        {games}
    </div>
  )
}

export default AllGames