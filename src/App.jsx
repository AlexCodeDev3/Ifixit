import React, { useEffect, useState } from 'react'
import Layout from './components/Layout'
import Chat from './pages/Chat'
import FindWorker from './pages/FindWorker'
import Profile from './pages/Profile'
import BecomeWorker from './pages/BecomeWorker'
import Help from './pages/Help'
import { initDemoWorkers } from './entities/workers'
import i18n from './i18n'

export default function App() {
  const [tab, setTab] = useState('chat')
  const [lang, setLang] = useState('ro')
  const [searchHint, setSearchHint] = useState(null)

  useEffect(() => {
    initDemoWorkers()
  }, [])

  const pages = {
    chat: <Chat onSearchWorker={(hint) => { setSearchHint(hint); setTab('find') }} lang={lang} />,
    find: <FindWorker lang={lang} searchHint={searchHint} />,
    profile: <Profile lang={lang} />,
    become: <BecomeWorker onSaved={() => setTab('find')} lang={lang} />,
    help: <Help lang={lang} />
  }

  return (
    <Layout selected={tab} onSelect={setTab} lang={lang} setLang={setLang}>
      {pages[tab]}
    </Layout>
  )
}
