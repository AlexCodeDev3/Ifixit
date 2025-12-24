export function generateRepairOptions(problem, lang='ro'){
  const p = (problem||'').toLowerCase()
  const suggestions = []

  if(p.includes('priz')||p.includes('priză')||p.includes('sârm')||p.includes('electric')){
    suggestions.push({
      title: lang==='ro' ? 'Verificare circuit & schimb priză' : 'Check circuit & replace socket',
      description: lang==='ro' ? 'O priză arsă poate necesita verificare siguranțe și înlocuirea prizei. Dacă există miros de ars, oprește curentul.' : 'Socket issues usually require checking breakers and replacing the socket.',
      difficulty:4,
      time:'30-90 min',
      cost:50
    })
    suggestions.push({
      title: lang==='ro' ? 'Diagnosticare cablaj' : 'Cabling diagnostic',
      description: lang==='ro' ? 'Verificarea firelor din perete și conexiunilor la tablou.' : 'Inspect wiring and connections at the panel.',
      difficulty:5,
      time:'1-3 h',
      cost:120
    })
  }

  if(p.includes('robinet')||p.includes('robinetul')||p.includes('curg')){
    suggestions.push({
      title: lang==='ro' ? 'Schimbare garnitură/robinet' : 'Replace gasket/faucet',
      description: lang==='ro' ? 'Adesea problema e o garnitură uzată; înlocuire rapidă.' : 'Often a worn gasket; fast replacement.',
      difficulty:2,
      time:'15-45 min',
      cost:30
    })
    suggestions.push({
      title: lang==='ro' ? 'Verificare instalație și presiune' : 'Check installation and pressure',
      description: lang==='ro' ? 'Dacă scurgerile persistă, poate fi nevoie de intervenție la țevi.' : 'Persistent leaks may require pipe work.',
      difficulty:4,
      time:'1-2 h',
      cost:80
    })
  }

  if(suggestions.length===0){
    // generic suggestions
    suggestions.push({title: lang==='ro' ? 'Evaluare rapidă' : 'Quick assessment', description: lang==='ro' ? 'Descrie problema mai detaliat pentru opțiuni precise.' : 'Describe the issue in more detail for specific options.', difficulty:2,time:'15-30 min',cost:20})
    suggestions.push({title: lang==='ro' ? 'Apel la specialist' : 'Call a specialist', description: lang==='ro' ? 'Caută un muncitor din apropiere pentru diagnosticare.' : 'Find a nearby worker for diagnosis.', difficulty:3,time:'30-60 min',cost:40})
  }

  // limit to 4
  return suggestions.slice(0,4)
}
