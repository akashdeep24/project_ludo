import React from 'react'
import man from '../assets/images/man.png';
import rightArrow from '../assets/images/rightarrow.png';
import TopBar from '../components/TopBar';
import BottomNav from '../components/BottomNav';

const phone_number = "+919999999999"
const wallet_amount = "5000"
const name = "Sunil Saran"

const AddAmountButton = props => (
  <button style={{display:'flex',justifyContent:'center',background: 'linear-gradient(#013D7D,#0369D6,black)', borderRadius:'25px', width:'50%', fontSize:'1.3rem', color: 'whitesmoke', fontWeight: 700, marginTop:25, height:40}}>
    <p style={{alignSelf:'center'}}>Pay</p>
  </button>
  );

const recommended_amounts = [50,100, 200, 500, 1000, 2000]
function Wallet() {
  return (
    <div>
      <TopBar/>
    <div className="mx-auto mt-20 flex flex-col items-center justify-center">
      <div className="flex items-center justify-self-start">
        <img src={man} style={{width:40, height:40, marginTop:5, marginRight:10}}/>
        <div className='flex flex-col'>
        <p className="text-lg text-white mt-2">{phone_number}</p>
        <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#F9F295] from-10% via-[#E0AA3E] via-30% to-[#FAF398] via-75% via-[#B88A44] to-90% cursor-pointer">
          {name} 
        </p>
        </div>
      </div>

      <div style={{background:'white', width:'90%', height:'20rem', borderRadius:5, display:'flex',flexDirection:'column', alignItems:'center', marginTop:20}}>

        <div style={{height:'auto',width:'95%', marginLeft:2,paddingLeft:10, borderWidth:1, borderColor:'#013D7D', borderRadius:5, marginTop:20}}>
          <p style={{marginTop:-8, paddingLeft:5, marginLeft:5,fontSize:10, background:'white', width:50, color:'#013D7D'}}>Balance</p>
          <p style={{color:wallet_amount > 0 ?'green':'red' , fontSize:25, fontWeight:600,}}>₹ {wallet_amount}</p>
        </div>

        <p style={{alignSelf:'flex-start', marginLeft:15, marginTop:20, fontWeight:600}}>Add Amount</p>
        <div style={{height:'auto',width:'95%',fontSize:25, marginLeft:2, borderWidth:1, borderColor:'#013D7D', borderRadius:5, marginTop:10}}>
          <p style={{marginTop:-8, paddingLeft:5, marginLeft:5,fontSize:10, background:'white', width:80, color:'#013D7D'}}>Enter Amount</p>
          <div style={{display:'flex', marginLeft:3, marginTop:2}}>
            <p style={{marginLeft:3,marginTop:-4}}>₹</p>
            <input type='number' placeholder="Enter Amount" style={{background:'transparent',marginTop:-10, marginLeft:3, width:'97%', height:'3rem',paddingLeft:10, borderRadius:5}}/>
          </div>
        </div>
        <p style={{alignSelf:'flex-start', marginLeft:15, marginTop:20, fontWeight:200}}>Recommended</p>
        <div style={{display:'flex', flexDirection:'row', marginTop:5, width:'100%'}}>
          {recommended_amounts.map((amount)=><span style={{borderWidth:1, borderColor:'#013D7D', borderRadius:5, width:40, display:'flex', justifyContent:'center', alignItems:'center',marginLeft:10}}>
            <p style={{fontSize:12}}>{amount}</p>
          </span>)}
        </div>
        <AddAmountButton/>
      </div>
      <div style={{background:'white', padding:10, width:'90%', height:'3rem', borderRadius:5, display:'flex',flexDirection:'row', justifyContent:'space-between',alignItems:'center', marginTop:20}}>
        <p style={{fontWeight:400}}>Payment History</p>
        <img src={rightArrow} style={{objectFit:'contain', height:20, width:20}}/>
      </div>
    </div>
    <BottomNav/>
    </div>
  )
}

export default Wallet