import React from 'react'
import Ad from './Ad'
import Header from './Header'
import Hero from './Hero'

type Props = {}

const Section1 = (props: Props) => {
  return (
    <div className='bg-[#F6EAFF] rounded-b-[100px]'>
        <Ad />
        <Header />
        <Hero />
    </div>
  )
}

export default Section1