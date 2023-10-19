import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material'
import React from 'react'

export default function ListItem() {
  return (
    <div className='listItem'>
      <img src='https://images.pexels.com/photos/8717523/pexels-photo-8717523.jpeg?auto=compress&cs=tinysrgb&w=600'  alt='listItem'/>
      <div className='itemInfo'>
        <div className='icons'>
          <PlayArrow />
          <Add />
          <ThumbUpAltOutlined />
          <ThumbDownAltOutlined />
        </div>
        <div className='itemInfoTop'>
          <span>1hr 14mins </span>
          <span className='limit'>+16 </span>
          <span>1999 </span>
        </div>
        <div className='desc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eos, sint blanditiis commodi quis reiciendis minima adipisci ducimus corporis, numquam expedita quo est obcaecati ab dolore cum, tenetur repellat ipsa.         
        </div>
      </div>
    </div>
  )
}
