import React from 'react'
import Layout from '../../components/common/layout/Layout'
import FirstSec from './components/firstSec/FirstSec'
import Discover from './components/headParts/Discover'
import SecondSection from './components/secondSection/SecondSection'
import PopProducts from './components/headParts/PopProducts'
import LastSection from './components/lastSec/LastSection'
import ProductSection from './components/productSec/ProductSection'

const Home = () => {
  return (
    <Layout>
        <FirstSec/>
        <Discover />
        <SecondSection/>
        <PopProducts/>
        <ProductSection/>
        <LastSection/>
    </Layout>
  )
}

export default Home