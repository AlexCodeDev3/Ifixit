import React from 'react'

export default function StarRating({ value=0 }){
  const full = Math.round(value)
  return <div className="stars">{Array.from({length:full}).map((_,i)=> '⭐')}</div>
}
