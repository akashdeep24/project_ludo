import React from 'react'
import Logo from './logo'
import rupee from '../assets/images/rupee.png'


function TopBar(props) {
  const wallet_amount = "5000"
  return (
    <div className="mx-auto sticky top-0 py-3 px-5 flex flex-col">
        <div className="mb-2 flex items-center justify-between">
          <Logo height={"3rem"} width={"3.2rem"}/>
            <div className="flex flex-col bg-white border-2 border-white rounded items-center justify-center w-24">
                <span className="text-xs h-4"><p>Sunil</p></span>
                <span className="w-full text-xs border-t border-black flex">
                  <img src={rupee} alt="" className="mx-3 mt-1 h-3 w-4 flex-shrink-0 rounded-full"/>
                    <p className='mt-0.5'>₹ {wallet_amount}</p>
                </span>
            </div>
        </div>
        <div className="sticky bottom-0 bg-gradient-to-r from-[#F9F295] from-10% via-[#E0AA3E] via-30% to-[#FAF398] via-75% via-[#B88A44] to-90% w-full h-0.5"></div>
    </div>
  )
}

export default TopBar