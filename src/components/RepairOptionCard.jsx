import React from 'react'

export default function RepairOptionCard({ option, onFind }){
  return (
    <div style={{borderLeft:`4px solid #FF6B35`}} className="card">
      <div className="flex-between">
        <div>
          <h3>{option.title}</h3>
          <div className="muted small">{option.description}</div>
        </div>
        <div style={{textAlign:'right'}}>
          <div className="muted small">Dificultate: {'⭐'.repeat(option.difficulty)}</div>
          <div className="muted small">Timp: {option.time}</div>
          <div style={{fontWeight:700}}>{option.cost} RON (estimativ)</div>
        </div>
      </div>
      <div style={{marginTop:8}}>
        <button className="button" onClick={onFind}>Caută muncitor</button>
      </div>
    </div>
  )
}
