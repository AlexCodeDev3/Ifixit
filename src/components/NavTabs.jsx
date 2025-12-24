import React from 'react'

export default function NavTabs({ selected, onSelect }){
  const tabs = [
    {id:'chat',label:'Chat'},
    {id:'find',label:'Find Worker'},
    {id:'profile',label:'Profile'}
  ]

  return (
    <div className="tabs">
      {tabs.map(t=> (
        <div key={t.id} className={`tab ${selected===t.id? 'active':''}`} onClick={()=>onSelect(t.id)}>
          {t.label}
        </div>
      ))}
      <div style={{width:8}} />
    </div>
  )
}
