import React from 'react'
import imageDice from '../assets/images/dddd.png'
function MovingImage() {
  return (
<div class="image-container">
  <div class="image-scroll">
    <img class="image_style" src={imageDice} alt="Moving Image"/>
  </div>
  <div class="image-scroll">
    <img class="image_style" src={imageDice} alt="Moving Image"/>
  </div>  
  <div class="image-scroll">
    <img class="image_style" src={imageDice} alt="Moving Image"/>
  </div>  
  <div class="image-scroll">
    <img class="image_style" src={imageDice} alt="Moving Image"/>
  </div>  
  <div class="image-scroll">
    <img class="image_style" src={imageDice} alt="Moving Image"/>
  </div>  
  <div class="image-scroll">
    <img class="image_style" src={imageDice} alt="Moving Image"/>
  </div>  
  <div class="image-scroll">
    <img class="image_style" src={imageDice} alt="Moving Image"/>
  </div>
</div>


  )
}

export default MovingImage