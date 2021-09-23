import React from 'react'

export const Champion = ({champInfo}) => {
  console.log(champInfo.name)
  // console.log('hi');
  return (
    <div>
      
      <h1>{champInfo.name}</h1>
      <p>{champInfo.lore}</p>
      
    </div>
  )
}
