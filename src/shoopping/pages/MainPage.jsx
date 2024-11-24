import React  from 'react'
import Bestelectronics from '../components/Bestelectronics'
import Offer from '../components/Offer'
import Head from '../components/Head'
import Toys from '../components/Toys'
import Winter from '../components/Winter'
import {eimages,wimages} from '../imagedata'
import { useState } from 'react'
import Boys from '../components/Boys'
import Footer from '../components/Footer'

const MainPage = () => {
  const [electronics, setElectronics]=useState(eimages)
  const [womanimages,setWomanimages]=useState(wimages)
  return (
    <div>
     <Head/>
     <Offer/>
     <Boys/>
     <Bestelectronics electronics={electronics} />
     <Winter/>
     <Toys womanimages={womanimages} />
     <Footer/>
     
    </div>
  )
}

export default MainPage