import React from 'react'
import Navbar from '../Componenets/Navbar'
import Card from '../Componenets/Card'
import Footer from '../Componenets/Footer'
import Carouseal from '../Componenets/Carouseal'


const Home = () => {
  return (
    <>
      <div><Navbar /></div>
      <div><Carouseal /> </div>
      <br />
      <div className='m-3'>
        <Card />
        <Card />
        <Card />
        <Card /></div>
      <div> <Footer /> </div>
    </>

  )
}


export default Home