import React from 'react'
import StarRating from './StarRating'
import Badge from './Badge'

export default function WorkerCard({ worker }){
  return (
    <div className="card">
      <div className="row">
        <div className="col">
          <h3>{worker.name}</h3>
          <div className="muted small">{worker.profession} • {worker.location}</div>
          <div style={{marginTop:6}} className="muted small">{worker.description}</div>
        </div>
        <div style={{textAlign:'right'}}>
          <div style={{fontWeight:700}}>{worker.price} RON/h</div>
          <StarRating value={worker.rating} />
          <div style={{marginTop:8}}>
            <Badge status={worker.availability} />
          </div>
        </div>
      </div>
      <div style={{display:'flex',gap:8,marginTop:10}}>
        <a className="button" href={`tel:+4${Math.floor(700000000 + Math.random()*10000000)}`}>Sună</a>
        <a className="button ghost" href={`mailto:fixit.demo@example.com?subject=Contact ${encodeURIComponent(worker.name)}`}>Email</a>
      </div>
    </div>
  )
}
