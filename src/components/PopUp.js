import React, { useState } from 'react'
import popImg from '../assets/images/lods.jpeg';

function PopUp({showHidePopUp}) {
  const [file, setFile] = useState();
  function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div style={{width:'80%', height:'25rem', background:'white', position:'fixed', borderColor:'black', borderWidth:2,}}>
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <img src={file} className="w-[20rem]"/>
            <input type="file" className="w-[20rem] mt-2" onChange={handleChange} />
            <button style={{marginTop:5, borderRadius: '25px', width: '50%', height: 30, fontSize: '1rem', color: 'whitesmoke', fontWeight: '500', background: 'linear-gradient(#013D7D, #0369D6, black)', border: '0px', display:'flex', justifyContent:'center'}}><p style={{marginTop:2}}>Change</p></button>
        </div>
        <button onClick={showHidePopUp} style={{background:'#C2D3E2', width:'100%', height:40, marginTop:10}}>
            <p style={{fontSize:18, fontWeight:500}}>Go Back</p>
        </button>
    </div>
  )
}

export default PopUp