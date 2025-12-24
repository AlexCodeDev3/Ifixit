import React, { useEffect, useMemo, useState } from 'react'
import { getWorkers, getProfessions } from '../entities/workers'
import WorkerCard from '../components/WorkerCard'

export default function FindWorker({ lang='ro', searchHint=null }){
  const [workers,setWorkers] = useState([])
  const [profession, setProfession] = useState('')
  const [location, setLocation] = useState('')

  useEffect(()=>{
    setWorkers(getWorkers())
  },[])

  useEffect(()=>{
    if(searchHint){
      const hint = searchHint.toLowerCase()
      if(hint.includes('elect')||hint.includes('priz')) setProfession('Electrician')
      if(hint.includes('robinet')||hint.includes('plumb')) setProfession('Plumber')
    }
  },[searchHint])

  const professions = useMemo(()=>getProfessions(),[workers])

  const filtered = workers.filter(w=>{
    return (!profession || w.profession===profession) && (!location || w.location.toLowerCase().includes(location.toLowerCase()))
  })

  return (
    <div>
      <div className="card row">
        <select className="input" value={profession} onChange={e=>setProfession(e.target.value)} style={{maxWidth:180}}>
          <option value="">Toate profesiile</option>
          {professions.map(p=> <option key={p} value={p}>{p}</option>)}
        </select>
        <input className="input" placeholder="Locație (ex: București)" value={location} onChange={e=>setLocation(e.target.value)} />
      </div>

      <div className="worker-list">
        {filtered.map(w=> <WorkerCard key={w.id} worker={w} />)}
        {filtered.length===0 && <div className="card muted">Nu s-au găsit muncitori. Încearcă alt filtru.</div>}
      </div>
    </div>
  )
}
