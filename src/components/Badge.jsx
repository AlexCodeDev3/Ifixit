import React from 'react'

export default function Badge({ status }){
  if(status==='available') return <div className="badge green">Disponibil</div>
  if(status==='limited') return <div className="badge yellow">Disponibil limitat</div>
  return <div className="badge gray">Indisponibil</div>
}
