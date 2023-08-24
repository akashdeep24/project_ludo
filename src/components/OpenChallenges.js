import React, { useState } from 'react';
import rupee from '../assets/images/rupee.png'

function generateRandomSixDigitNumber() {
    const min = 10000000; 
    const max = 99999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const randomSixDigitNumber = generateRandomSixDigitNumber();
  

function GameCode({code}){
    return(
            <div className="bg-white w-64 h-16 mx-auto my-2 border-2 border-black rounded flex items-center justify-around">
                <span style={{fontSize:20, flexDirection:'row'}}>{code}</span>
                <button style={{borderRadius: 10, height:35,width:70, color: 'whitesmoke', fontWeight: '500', background: 'linear-gradient(#013D7D, #0369D6, black)', border: '0px', display:'flex', alignItems:'center',justifyContent:'center'}}>
                    <p style={{fontSize:10}}>Add Money</p>
                </button>
            
            </div>
    )
}

function ChallengElement({game}){
    const [showCode, setShowCode] = useState();
    const code = generateRandomSixDigitNumber();
    const handleClick=()=>{
        setShowCode(!showCode)
    }
    return(
    <div key={game.id} className="border-b-4 border-black flex flex-col h-full w-full px-[1rem] bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200 rounded">
            <div className="flex h-8 w-full top-0 items-center justify-between border-b border-b-[#013D7D]">
                <span className="text-white font-semibold">Challenge From: {game.name}</span>
            </div>
            <div className="flex flex-row w-full my-4 items-center justify-between px-[0.3rem]">
                <div className="flex flex-row ">
                    <div className="w-[5rem]">
                        <span className="text-white text-sm">Entry Fee</span><br/>
                        <div className="flex flex-row justify-start">
                            <img src={rupee} className="h-3.8 w-5 flex-shrink-0 rounded-full" />
                            <span className="text-white text-sm mx-2">{game.bot}</span>
                        </div>
                    </div>
                    <div className="w-[5rem]">
                        <span className="text-white text-sm">Prize Fee</span><br/>
                        <div className="flex flex-row justify-start">
                            <img src={rupee} className="h-3.8 w-5 flex-shrink-0 rounded-full" />
                            <span className="text-white text-sm mx-2">{game.prize}</span>
                        </div>
                    </div>
                </div>
                <button onClick={handleClick} className="group h-[2.5rem] w-[5rem] bg-gradient-to-r from-[#F9F295] from-10% via-[#E0AA3E] via-30% to-[#FAF398] via-75% via-[#B88A44] to-90% border-1.5 border-white rounded">
                    <span className="text-[#013D7D] text italic font-bold">Join</span>
                </button>
            </div>
            {showCode&&
                <GameCode code={code}/>
            }
        </div>
    )
}
function OpenChallenges() {

    const games = [
        {name: 'utkarsh', id: 1, bot: 1000, prize: 1500},
        {name: 'alexis', id: 2, bot: 800, prize: 1200},
        {name: 'samantha', id: 3, bot: 1200, prize: 1800},
        {name: 'david', id: 4, bot: 950, prize: 1400},
        {name: 'emma', id: 5, bot: 1100, prize: 1600},
        {name: 'liam', id: 6, bot: 850, prize: 1300},
        {name: 'olivia', id: 7, bot: 900, prize: 1700},
        {name: 'noah', id: 8, bot: 1050, prize: 1550},
        {name: 'ava', id: 9, bot: 950, prize: 1450}
      ]
          
  return (
    <div className="mx-auto my-32 flex items-center justify-center">
    <div className="w-full mx-4 shadow-2xl rounded-md bg-gradient-to-r from-[#F9F295] from-10% via-[#E0AA3E] via-30% to-[#FAF398] via-75% via-[#B88A44] to-90% p-1">
        {games.map((item, index)=>{
            return(
                <ChallengElement game={item}/>
            )
        })}
    </div>
</div>
  )
}

export default OpenChallenges