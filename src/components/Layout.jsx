import React from 'react'
import NavTabs from './NavTabs'

export default function Layout({ children, selected, onSelect, lang, setLang }){
  // expose simple global navigate helper for quick internal links
  window.appNavigate = (tab) => onSelect(tab)

  return (
    <div className="app-shell">
      <div className="topbar">
        <div className="logo">
          <div className="dot">Fi</div>
          <h1>FixIt</h1>
        </div>
        <div className="row">
          <select value={lang} onChange={e=>setLang(e.target.value)} className="input" style={{maxWidth:120}}>
            <option value="ro">RO</option>
            <option value="en">EN</option>
            <option value="de">DE</option>
            <option value="es">ES</option>
            <option value="fr">FR</option>
          </select>
        </div>
      </div>

      <div className="content">{children}</div>

      <NavTabs selected={selected} onSelect={onSelect} />
    </div>
  )
}
