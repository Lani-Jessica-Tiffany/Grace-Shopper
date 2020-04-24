const {expect} = require('chai')
const db = require('../index')
const Order = db.model('order')

describe('Order model', () => {
  beforeEach(() => {
    db.sync({force: true})
  })

  it('`status` has a default value set to false', async () => {
    const order = await Order.create({
      purchased: false
    })

    expect(order.purchased).to.be.equal(false)
  })
})
