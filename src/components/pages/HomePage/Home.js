import React from 'react'
import HomeSection from '../../HomeSection'
import { homeObjOne ,homeObjTwo,homeObjThree,homeObjFour } from './Data'
import Pricing from '../Pricing'
import Footer from '../Footer/Footer'



const Home = () =>{
  return(
    <>
      <HomeSection  {...homeObjOne} />
      <HomeSection  {...homeObjThree} />
      <HomeSection  {...homeObjTwo} />
      <Pricing />
      <HomeSection  {...homeObjFour} />
      <Footer />
    </>
  )
}

export default Home