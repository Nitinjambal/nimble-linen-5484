import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import {Fade,Zoom,Slide} from 'react-slideshow-image'





const divStyle={
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  height:"290px",
  backgroundSize:'cover'
}

function ImageSlider(props) {
  const {url,id}=props
  return (
    <div>
         <Slide>
          {
            props?.details?.map((image,index)=>(
              <div key={image.id}>
                 <div style={{...divStyle,backgroundImage:`url(${image.url})`}}></div>
              </div>
            ))
          }
         </Slide>
    </div>
  )
}

export default ImageSlider