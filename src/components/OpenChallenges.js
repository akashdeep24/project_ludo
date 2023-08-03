import React from 'react';
import rupee from '../assets/images/rupee.png'

function OpenChallenges() {
  return (
    <div className="mx-auto my-32 flex items-center justify-center">
    <div className="h-32 w-full mx-4 shadow-2xl rounded-md bg-gradient-to-r from-[#F9F295] from-10% via-[#E0AA3E] via-30% to-[#FAF398] via-75% via-[#B88A44] to-90% p-1">
        <div className="flex flex-col h-full w-full px-[1rem] bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200 rounded">
            <div className="flex h-8 w-full top-0 items-center justify-between border-b border-b-[#013D7D]">
                <span className="text-white font-semibold">Challenge From: Uttarsh</span>
            </div>
            <div className="flex flex-row w-full my-4 items-center justify-between px-[0.3rem]">
                <div className="flex flex-row ">
                    <div className="w-[5rem]">
                        <span className="text-white text-sm">Entry Fee</span><br/>
                        <div className="flex flex-row justify-start">
                            <img src={rupee} className="h-3.8 w-5 flex-shrink-0 rounded-full" />
                            <span className="text-white text-sm mx-2">1000</span>
                        </div>
                    </div>
                    <div className="w-[5rem]">
                        <span className="text-white text-sm">Prize Fee</span><br/>
                        <div className="flex flex-row justify-start">
                            <img src={rupee} className="h-3.8 w-5 flex-shrink-0 rounded-full" />
                            <span className="text-white text-sm mx-2">1500</span>
                        </div>
                    </div>
                </div>
                <button className="group h-[2.5rem] w-[5rem] bg-gradient-to-r from-[#F9F295] from-10% via-[#E0AA3E] via-30% to-[#FAF398] via-75% via-[#B88A44] to-90% border-1.5 border-white rounded">
                    <span className="text-[#013D7D] text-sm italic font-bold">Play</span>
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
                </button>
            </div>
        </div>
    </div>
</div>
  )
}

export default OpenChallenges