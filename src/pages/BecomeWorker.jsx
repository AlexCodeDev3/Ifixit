import React, { useState } from 'react'
import { addWorker } from '../entities/workers'

export default function BecomeWorker({ onSaved, lang='ro' }){
  const [form, setForm] = useState({name:'',profession:'',services:[],location:'',from:'08:00',to:'17:00',price:40,availability:'available',description:''})

  function update(field, value){
    setForm({...form,[field]:value})
  }

  function submit(e){
    e.preventDefault()
    addWorker(form)
    if(onSaved) onSaved()
    alert('Profil muncitor salvat (demo)')
  }

  return (
    <form className="card" onSubmit={submit}>
      <h3>Become Worker (demo)</h3>
      <input className="input" placeholder="Nume" value={form.name} onChange={e=>update('name',e.target.value)} />
      <input className="input" placeholder="Profesie (ex: Electrician)" value={form.profession} onChange={e=>update('profession',e.target.value)} />
      <input className="input" placeholder="Servicii (ex: montaj, reparații)" value={form.description} onChange={e=>update('description',e.target.value)} />
      <input className="input" placeholder="Locație" value={form.location} onChange={e=>update('location',e.target.value)} />
      <div className="row">
        <input className="input" value={form.from} onChange={e=>update('from',e.target.value)} />
        <input className="input" value={form.to} onChange={e=>update('to',e.target.value)} />
      </div>
      <input className="input" type="number" value={form.price} onChange={e=>update('price',Number(e.target.value))} />
      <div style={{marginTop:8}}>
        <button className="button" type="submit">Salvează</button>
      </div>
    </form>
  )
}
