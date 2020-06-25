import React from 'react'
import HomePage from './master/HomePage'
import {JobOfferList} from './master/logged/components/JobOffers'


// Bypass User layer deep:1
const App = () => {
  return (
    <div>
      <JobOfferList />
    </div>
  )
}

export default App;
