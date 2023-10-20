import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material'
import React, { useState } from 'react'

export default function ListItem({index}) {
  const [isHovererd, setIsHovered] = useState(false);
  const trailer ="https://player.vimeo.com/external/573966579.sd.mp4?s=737ec3a7189c9efdea3d61824971c377e6fcf2a9&profile_id=164&oauth2_token_id=57447761";
  return (
    <div className='listItem' 
      style={{left: isHovererd && index * 225 -50 + index * 2.5}}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}>
      <img src='https://images.pexels.com/photos/8717523/pexels-photo-8717523.jpeg?auto=compress&cs=tinysrgb&w=600'  alt='listItem'/>
        {isHovererd && ( 
      <>
        
      <video src={trailer} autoPlay={true} loop controls />
      <div className='itemInfo'>
        <div className='icons'>
          <PlayArrow className='icon'/>
          <Add className='icon'/>
          <ThumbUpAltOutlined className='icon'/>
          <ThumbDownAltOutlined className='icon'/>
        </div>
        <div className='itemInfoTop'>
          <span>1hr 14mins </span>
          <span className='limit'>+16 </span>
          <span>1999 </span>
        </div>
        <div className='desc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eos, sint blanditiis commodi quis reiciendis minima adipisci ducimus corporis, numquam expedita quo est obcaecati ab dolore cum, tenetur repellat ipsa.         
        </div>
        <div className='genre'>Action</div>
      </div>
      </>

      )};
    </div>
  )
}
