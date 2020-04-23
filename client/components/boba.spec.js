/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AllAgg from './all-agg'
import {SingleBasic} from './single-info'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('AllAgg', () => {
  let allAgg,
    bobas = [
      {
        name: 'Strawberry Milk Tea',
        price: 450,
        description: 'Slightly tangy but oh so sweet',
        imageUrl:
          'https://chloejohnston.com/wp-content/uploads/2019/07/strawberry-bubble-tea.png'
      },
      {
        name: 'Thai Milk Tea',
        price: 450,
        description: 'Sweet, creamy & rich, with organic condensed milk',
        imageUrl:
          'https://theforkedspoon.com/wp-content/uploads/2018/06/Thai-Tea-Recipe-5-700x1050.jpg'
      }
    ]

  beforeEach(() => {
    allAgg = shallow(<AllAgg bobas={bobas} />)
  })

  it('renders two <Single Basic /> components', () => {
    expect(allAgg.find(SingleBasic).length).to.be.equal(2)
  })
})
