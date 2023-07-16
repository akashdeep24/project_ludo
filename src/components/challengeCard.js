import React from 'react'
import man from '../assets/images/man.png'
import Select from '../components/select'


function ChallengeCard() {
  return (
    <div class="mx-auto my-10 flex items-center justify-center">
        <div class="h-32 w-full mx-4 shadow-2xl rounded-md bg-gradient-to-r from-[#F9F295] from-10% via-[#E0AA3E] via-30% to-[#FAF398] via-75% via-[#B88A44] to-90% p-1">
            <div class="flex h-full w-full items-center justify-between px-[1rem] bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200 rounded">
                <div >
                  <img src={man} class="w-[3rem]"/>
                </div>
                <div class="item-center -mt-16">
                  <Select/>
                </div>
                <button className="group h-[3rem] w-[6rem] bg-gradient-to-r from-[#F9F295] from-10% via-[#E0AA3E] via-30% to-[#FAF398] via-75% via-[#B88A44] to-90% rounded">
                    <span class="text-[#013D7D] text-sm italic font-bold">Create Game</span>
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
                </button>
            </div>
        </div>
    </div>
  )
}

export default ChallengeCard

// #F9F295, #E0AA3E, #FAF398, #B88A44
