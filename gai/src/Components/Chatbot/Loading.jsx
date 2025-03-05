import React from 'react'
import Lottie from "react-lottie-player";
import loader from '../../assets/load.json'

const Loading = () => {
  return (
    <>
    <div className="w-full h-screen flex-1 items-center justify-center">
    <Lottie loop animationData={loader} play className="w-80 h-80" />
    </div>
    </>
  )
}

export default Loading