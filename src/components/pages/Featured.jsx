import { InfoOutlined, PlayArrow } from '@mui/icons-material'
import React from 'react'

export default function Featured({type}) {
  return (
    <div className='featured'>
        {type && (
            <div className='category'>
                <span>{type === "movie" ? "Movies" : "Series" }</span>
                <select name='genre' id='genre'>
                    <option value="genre">Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">comedy</option>
                    <option value="crime">crime</option>
                    <option value="fantasy">fantasy</option>
                    <option value="historical">historical</option>
                    <option value="horror">horror</option>
                    <option value="romance">romance</option>
                    <option value="sci-fi">sci-fi</option>
                    <option value="thriller">thriller</option>
                    <option value="western">western</option>
                    <option value="drama">drama</option>
                    <option value="documentary">documentary</option>
                </select>
            </div>
        )}
        <img src='https://images.pexels.com/photos/275977/pexels-photo-275977.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
        <div className='info'>
            <img src='https://images.pexels.com/photos/590059/pexels-photo-590059.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
            <span className='desc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eos, sint blanditiis commodi quis reiciendis minima adipisci ducimus corporis, numquam expedita quo est obcaecati ab dolore cum, tenetur repellat ipsa.  
            </span>
            <div className='buttons'>
                <button className='play'>
                    <PlayArrow />
                </button>
                <button className='more'>
                    <InfoOutlined />
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}
