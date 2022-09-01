import React from 'react'
// import { Box, Stack } from '@mui/material'
import {VideoCard, ChannelCard} from './index'

const Videos = ({videos}) => {
    console.log(videos)

  return (
    <div className='gap-1 flex-wrap justify-center'>
        {videos.map((item, idx) => (
            <div key={idx}>
                {item.id.videoId && <VideoCard video={item} /> }
                {item.id.channelId && <ChannelCard channelDetail={item} /> }
            </div>
        ))}
    </div>
  )
}

export default Videos