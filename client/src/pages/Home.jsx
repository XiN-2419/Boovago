import React from 'react'
import "./home.scss"
import Announcement from '../components/Announcement'
import Feature from '../components/Feature'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <Header/>
      <Announcement type={"Upper half"}/>
      <Feature/>
      <Announcement type={"Lower half"}/>
      <Footer/>
    </div>
  )
}

export default Home