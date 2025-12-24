const STORAGE_KEY = 'fixit_workers_v1'

const demo = [
  {id:1,name:'Marius Pop',profession:'Electrician',rating:4.8,availability:'available',location:'București',price:50,description:'Reparații electrice mici, instalații, schimb prize',hours:{from:'08:00',to:'18:00'}},
  {id:2,name:'Ioana Marin',profession:'Plumber',rating:4.6,availability:'limited',location:'Cluj-Napoca',price:45,description:'Instalații sanitare, schimb robinet',hours:{from:'09:00',to:'17:00'}},
  {id:3,name:'Andrei Ionescu',profession:'Handyman',rating:4.4,availability:'available',location:'Iași',price:40,description:'Montaj mobilier, diverse reparații casnice',hours:{from:'10:00',to:'20:00'}},
  {id:4,name:'Alina Radu',profession:'Electrician',rating:4.2,availability:'unavailable',location:'București',price:55,description:'Sisteme electrice, panouri, diagnosticare',hours:{from:'08:00',to:'12:00'}},
  {id:5,name:'Cristi Vasile',profession:'Carpenter',rating:4.7,availability:'available',location:'Timișoara',price:48,description:'Mobilier și reparații din lemn',hours:{from:'08:00',to:'16:00'}},
  {id:6,name:'Sorin Pavel',profession:'Painter',rating:4.3,availability:'limited',location:'Cluj-Napoca',price:35,description:'Vopsitor, zugraveli interioare',hours:{from:'09:00',to:'15:00'}},
  {id:7,name:'Roxana Dima',profession:'Plumber',rating:4.5,availability:'available',location:'București',price:42,description:'Instalații, încălzire, țevi',hours:{from:'07:00',to:'14:00'}},
  {id:8,name:'Bogdan Sima',profession:'Handyman',rating:4.1,availability:'limited',location:'Iași',price:30,description:'Diverse sarcini și mentenanță',hours:{from:'10:00',to:'18:00'}}
]

export function initDemoWorkers(){
  const cur = localStorage.getItem(STORAGE_KEY)
  if(!cur){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(demo))
  }
}

export function getWorkers(){
  const raw = localStorage.getItem(STORAGE_KEY) || '[]'
  try{return JSON.parse(raw)}catch(e){return []}
}

export function saveWorkers(arr){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(arr))
}

export function addWorker(worker){
  const arr = getWorkers()
  worker.id = Date.now()
  arr.unshift(worker)
  saveWorkers(arr)
}

export function getProfessions(){
  const arr = getWorkers()
  const profs = Array.from(new Set(arr.map(w=>w.profession))).sort()
  return profs
}
