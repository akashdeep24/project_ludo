import React from 'react'

function ChallengeCard() {
  return (
    <div class="mx-auto my-10 flex items-center justify-center">
        <div class="h-32 w-2/3 shadow-2xl bg-gradient-to-r from-indigo-500 rounded-md via-purple-500 to-pink-500 p-1">
            <div class="flex h-full w-full items-center justify-center bg-white rounded">
                <button className="group h-10 w-24 bg-black rounded">
                    <span class="text-white text">Join Game</span>
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
                </button>

            </div>
        </div>
    </div>

  )
}

export default ChallengeCard