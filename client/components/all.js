// import
import React from 'react'
import SingleAgg from './single-agg'

// component
const All = () => {
  const boba = {
    name: 'oolong',
    price: 5,
    description: 'best boba ever',
    image: 'https://media.giphy.com/media/kBHfPMfonjJmM9fpfx/giphy.gif'
  }
  return <SingleAgg boba={boba} />
}
// export
export default All
