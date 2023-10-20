import { ArrowBackOutlined } from '@mui/icons-material'
import React from 'react'

export default function Watch() {
  return (
    <div className='watch'>
        <div className='back'>
            <ArrowBackOutlined />
            Home
        </div>
        <video autoPlay progress controls src='https://player.vimeo.com/external/573119467.sd.mp4?s=a00c26910e9e22bfdaadebf5de981e71e7619d11&profile_id=164&oauth2_token_id=57447761' />
    </div>
  )
}
