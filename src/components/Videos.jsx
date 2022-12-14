import React from 'react'
// import { Box, Stack } from '@mui/material'
import {VideoCard, ChannelCard} from './index'

const Videos = ({videos}) => {
    if(!videos?.length) return 'Loading...'

  return (
    <div className=' flex flex-wrap gap-3 justify-center '>
        {videos.map((item, idx) => (
            <div className='' key={idx}>
                {item.id.videoId && <VideoCard video={item} /> }
                {item.id.channelId && <ChannelCard channelDetail={item} /> }
            </div>
        ))}
    </div>
  )
}

export default Videos