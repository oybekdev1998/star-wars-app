import React, { useEffect, useRef } from 'react'

const UiVideo = ({
  src,
  classes,
  playbackRate=1.0
}) => {

  const videoRef = useRef(null)

  useEffect(() => {
    videoRef.current.playbackRate = playbackRate
  }, [])

  return (
    <video 
      loop
      autoPlay
      muted
      ref={videoRef}
      className={classes}
    >
      <source src={src} />
    </video>
  )
}

export default UiVideo