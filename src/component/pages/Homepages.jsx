import React from 'react'

import Hero from '../Hero'
import Homecards from '../Homecards'
import JobListenings from '../JobListenings'
import VeiwAlljobs from '../VeiwAlljobs'

const Homepages = () => {
  return (
    <>
    <Hero />
    <Homecards />
    <JobListenings isHome={true} />
    <VeiwAlljobs />
    </>
  )
}

export default Homepages