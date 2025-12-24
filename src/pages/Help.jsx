import React from 'react'

export default function Help(){
  return (
    <div>
      <div className="card">
        <h3>FixIt — Beta / Demo</h3>
        <p className="muted">Aceasta este o versiune demo. FixIt nu oferă servicii direct și nu gestionează plăți.</p>
      </div>

      <div className="card">
        <h3>Legal Disclaimers</h3>
        <p className="help-note">Informațiile oferite sunt orientative. Pentru lucrări electrice sau care implică risc, oprește alimentarea și apelează un profesionist autorizat.</p>
      </div>

      <div className="card">
        <h3>Sfaturi de siguranță</h3>
        <ul>
          <li>Oprește curentul înainte de a lucra la instalații electrice.</li>
          <li>Folosește echipament de protecție.</li>
          <li>Dacă nu ești sigur, solicită ajutor profesionist.</li>
        </ul>
      </div>
    </div>
  )
}
