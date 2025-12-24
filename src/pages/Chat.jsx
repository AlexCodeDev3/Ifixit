import React, { useState } from 'react'
import { generateRepairOptions } from '../entities/ai'
import RepairOptionCard from '../components/RepairOptionCard'

export default function Chat({ onSearchWorker, lang='ro' }){
  const [input, setInput] = useState('')
  const [conversation, setConversation] = useState([])

  function send(){
    if(!input.trim())return
    const userMsg = {from:'user', text:input}
    const options = generateRepairOptions(input, lang)
    const aiMsg = {from:'ai', text:`Am găsit ${options.length} opțiuni`, options}
    setConversation([userMsg, aiMsg, ...conversation].slice(0,40))
    setInput('')
  }

  return (
    <div>
      <div className="card">
        <div className="row">
          <input className="input col" placeholder="Descrie problema (ex: Priză arsă, Robinet curge)" value={input} onChange={e=>setInput(e.target.value)} />
          <button className="button" onClick={send} style={{marginLeft:8}}>Trimite</button>
        </div>
      </div>

      <div className="content">
        {conversation.map((c,idx)=> (
          <div key={idx} className="card">
            <h3>{c.from==='user' ? 'Tu' : 'FixIt Assistant'}</h3>
            <p className="muted">{c.text}</p>
            {c.options && c.options.map((o,i)=> (
              <RepairOptionCard key={i} option={o} onFind={() => onSearchWorker(o.title)} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
