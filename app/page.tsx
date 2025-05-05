import React from 'react'
import Hero from '@/components/main/Hero'
import Skills from '@/components/main/Skills'
import Encryption from '@/components/main/Encryption'
import Projects from '@/components/main/Projects'
import Footer from '@/components/main/Footer'
import About from '@/components/main/About'
import Contact from '@/components/main/Contact'
const Home = () => {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col gap-20'>
        <Hero/>
        <Skills/>
        <Encryption/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </main>
  )
}

export default Home