import React from 'react'
import './loadingSpinnner.styles.css'

export const LoadingSpinner = () => {
  return (
    <div className = 'outer-wrapper flex-column'>
      <div className = 'spinner'>
        <span className = 'no-delay'>L</span>
        <span className = 'delay'>O</span>
        <span className = 'three'>A</span>
        <span className = 'four'>D</span>
        <span className = 'five'>I</span>
        <span className = 'six'>N</span>
        <span className = 'seven'>G</span>
        <span className = 'eight'>.</span>
        <span className = 'nine'>.</span>
        <span className = 'ten'>.</span>
      </div>
    </div>
  )
}
