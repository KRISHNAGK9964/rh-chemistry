import React from 'react'
import Ad from './Ad'
import Header from './Header'
import Hero from './Hero'

type Props = {
  handleContactBtnClick: () => void;
}

const Section1 = ({handleContactBtnClick}: Props) => {
  return (
    <div className='bg-[#F6EAFF] rounded-b-[40px] md:rounded-b-[60px] lg:rounded-b-[100px]'>
        <Ad />
        <Header handleContactBtnClick={handleContactBtnClick}/>
        <Hero />
    </div>
  )
}

export default Section1