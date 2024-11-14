import { useState } from 'react'
// import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import TopAgency from './components/TopAgency'
import FreeProposal from './components/FreeProposal'
import ClientFeedback from './components/ClientFeedback'
import WorkPost from './components/WorkPost'
import NewsletterFooter from './components/NewsLetterFooter'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Navbar />
    <Hero />
    <Services/>
    <TopAgency/>
    <FreeProposal/>
    <ClientFeedback/>
    <WorkPost/>
    <NewsletterFooter/>
   </div>
  )
}

export default App
