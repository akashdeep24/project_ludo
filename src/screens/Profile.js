import React, { useState } from 'react'
import Logo from '../components/logo'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'
import man from '../assets/images/man.png';
import PopUp from '../components/PopUp';

const phone_number = "+919999999999"
const wallet_amount = "5000"
const name = "Sunil Saran"
const aadhar = "34946016966"
const pan =  "FZAPS5268Z"

function Profile() {
  const [showPopUp, setShowPopUp] = useState(false);
  const showHidePopUp =()=>{
    setShowPopUp(!showPopUp)
  }
  return (
    <div>
    <TopBar/>
    <div className="mx-auto mt-20 flex flex-col items-center justify-center">
      <div className="mx-auto flex flex-col items-center justify-center">
        <img src={man} className="w-[6rem]"/>
        <p className="text-lg text-white mt-2">{phone_number}</p>
        <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#F9F295] from-10% via-[#E0AA3E] via-30% to-[#FAF398] via-75% via-[#B88A44] to-90% cursor-pointer">
          {name} 
        </p>
      </div>
      {showPopUp?<PopUp showHidePopUp={showHidePopUp}/>:null}
      <div style={{background:'white', width:'90%', height:'20rem', borderRadius:5, display:'flex',flexDirection:'column', alignItems:'center', marginTop:20}}>
        <div style={{height:'auto',width:'95%', marginLeft:2,paddingLeft:10, borderWidth:1, borderColor:'#013D7D', borderRadius:5, marginTop:20}}>
          <p style={{marginTop:-8, paddingLeft:5, marginLeft:5,fontSize:10, background:'white', width:40, color:'#013D7D'}}>Name</p>
          <div style={{display:'flex', justifyContent:'space-between'}}>
            <p style={{fontSize:20, fontWeight:400,}}>{name}</p>
            <button style={{background:'#C2D3E2',fontSize:15, marginTop:-7,paddingTop:6,borderTopRightRadius:5, borderBottomRightRadius:5, width:70, display:'flex', justifyContent:'center'}}><p style={{color:'#013D7D'}}>Change</p>
            </button>
          </div>
        </div>
        <div style={{height:'auto',width:'95%', marginLeft:2,paddingLeft:10, borderWidth:1, borderColor:'#013D7D', borderRadius:5, marginTop:20}}>
          <p style={{marginTop:-8, paddingLeft:5, marginLeft:5,fontSize:10, background:'white', width:80, color:'#013D7D'}}>Phone Number</p>
          <div style={{display:'flex', justifyContent:'space-between'}}>
            <p style={{fontSize:20, fontWeight:400,}}>{phone_number}</p>
            <button style={{background:'#C2D3E2',fontSize:15, marginTop:-7,paddingTop:6,borderTopRightRadius:5, borderBottomRightRadius:5, width:70, display:'flex', justifyContent:'center'}}><p style={{color:'#013D7D'}}>Change</p>
              </button>
          </div>
        </div>
        <div style={{height:'auto',width:'95%', marginLeft:2,paddingLeft:10, borderWidth:1, borderColor:'#013D7D', borderRadius:5, marginTop:20}}>
          <p style={{marginTop:-8, paddingLeft:5, marginLeft:5,fontSize:10, background:'white', width:45, color:'#013D7D'}}>Adhaar</p>
          <p style={{fontSize:20, fontWeight:400,}}>{aadhar}</p>
        </div>
        <div style={{height:'auto',width:'95%', height:40, marginLeft:2,paddingLeft:10, borderWidth:1, borderColor:'#013D7D', borderRadius:5, marginTop:20}}>
          <p style={{marginTop:-8, paddingLeft:5, marginLeft:5,fontSize:10, background:'white', width:65, color:'#013D7D'}}>Documents</p>
            <button onClick={showHidePopUp} style={{alignSelf:'center',background:'#A4CF6B',height:30, width:70, borderColor:'#5B9214', borderWidth:1, borderRadius:3, fontSize:12, display:'flex', justifyContent:'center'}}>
              <p>Aadhar</p>
            </button>
        </div>
      </div>
    </div>
    <BottomNav/>
  </div>
  )
}

export default Profile