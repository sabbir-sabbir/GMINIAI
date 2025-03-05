import React from 'react'
import Lottie from "lottie-react";
import loader from '../../assets/load.json'

const Loading = () => {
  return (
    <>
    <div className="w-full h-screen flex-1 items-center justify-center">
    <Lottie animationData={loader} className="w-80 h-80" />
    </div>
    </>
  )
}

export default Loading