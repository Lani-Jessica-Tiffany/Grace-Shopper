const {expect} = require('chai')
const db = require('../index')
const OrderBoba = db.model('orderBoba')

describe('OrderBoba model', () => {
  beforeEach(() => {
    db.sync({force: true})
  })

  it('has `quantity` and `price` fields', async () => {
    const orderBoba = await OrderBoba.create({
      quantity: 2,
      price: 5
    })

    expect(orderBoba.quantity).to.be.equal(2)
    expect(orderBoba.price).to.be.equal(5)
  })
})
