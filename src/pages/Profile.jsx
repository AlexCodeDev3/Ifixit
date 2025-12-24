import React from 'react'

export default function Profile({ lang='ro' }){
  return (
    <div>
      <div className="card">
        <h3>Profil utilizator</h3>
        <p className="muted">Numele și detaliile contului demo nu sunt stocate în acest demo.</p>
      </div>

      <div className="card">
        <h3>Linkuri</h3>
        <div style={{display:'flex',gap:8}}>
          <a className="button" href="#" onClick={(e)=>{e.preventDefault();window.appNavigate && window.appNavigate('become')}}>Become Worker</a>
          <a className="button ghost" href="#" onClick={(e)=>{e.preventDefault();window.appNavigate && window.appNavigate('help')}}>Help</a>
        </div>
      </div>
    </div>
  )
}
