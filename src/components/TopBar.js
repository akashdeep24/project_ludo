import React from 'react'
import Logo from './logo'
function TopBar(props) {
    const wallet_amount = "Rs 50"
  return (
    <div class="mx-auto sticky top-0 py-3 px-5 flex flex-col">
        <div class="flex justify-between">
            <Logo height={"3rem"} width={"3.2rem"}/>
            <div class="bg-[#5277B8] border-2 border-grey items-center justify-center h-10 w-20">
                <span>Cash</span>
                <span>{wallet_amount}</span>
            </div>
        </div>
        <div class="sticky bottom-0 bg-gradient-to-r from-[#F9F295] from-10% via-[#E0AA3E] via-30% to-[#FAF398] via-75% via-[#B88A44] to-90% w-full h-0.5"></div>
    </div>
  )
}

export default TopBar