import React, { useEffect, useState } from 'react'
import Logo from '../components/logo';
import axios from 'axios';
import API_BASE_URL from '../apiConfig';
import { useNavigate } from 'react-router-dom';

const FormButton = props => (
<div style={{alignSelf:'center', marginTop:10, borderRadius: '25px', width: '80%', height: '40px', fontSize: '1.3rem', color: 'whitesmoke', fontWeight: '700', background: 'linear-gradient(#013D7D, #0369D6, black)', border: '0px', display:'flex', justifyContent:'center', marginBottom:10}}>
  <button onClick={props.onClick}>{props.title}</button>
</div>
);

function LoginScreen() {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [phone_number, setPhoneNuber] = useState('');
  const navigate = useNavigate()
  const onClick = async () =>{
    if(phone.trim().length===10){
      const response = await axios.post(`${API_BASE_URL}user_auth/login-signup/`,{
        number:phone
      })
      console.log(response.data.phone_number)
      setPhoneNuber(response.data.phone_number)
    }
    else{
      alert('Enter Valid Phone Number')
    }
  }
  const onVerify = async()=>{
    if(otp.trim().length===4){
      const response = await axios.put(`${API_BASE_URL}user_auth/verify-otp/${phone_number}/`,{
        phone_number: phone_number, otp:otp
      })
      console.log(response.data)
      localStorage.setItem('userDetails',JSON.stringify({phone_number:response.data.phone_number, validation_token:"XgmdafeLdxvWMc8xNIUkGs9NJ6b79TL8"}))
      navigate('/home')
    }
    else{
      alert('Enter Valid OTP')
    }
  }
  return (
    <div className="mx-auto my-0 flex flex-col items-center justify-center">
    <div className="mx-auto my-10">
    <Logo height={"10rem"} width={"11rem"}/>
    </div>
      <div className="mx-auto my-0 flex items-start justify-center">
        <div id="loginform">
        <div>
            <div class="login_input">
              <label>Phone Number</label>
              <input value={phone} type="text" maxLength={10} onChange={e=>{setPhone(e.target.value)}} placeholder="Phone Number"/>
              <FormButton title="Submit" onClick={onClick}/>
            </div>  

            <div class="login_input">
              <label>OTP</label>
              <input value={otp} onChange={e=>{setOtp(e.target.value)}} type="text" maxLength={4} placeholder="One Time Password"/>
              <FormButton title="Log In / Sign Up" onClick={onVerify}/>
            </div> 
          </div>
        </div>
      </div>
    </div>

  )
}

export default LoginScreen