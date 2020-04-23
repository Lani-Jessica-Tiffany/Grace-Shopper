const {expect} = require('chai')
const db = require('../index')
const Boba = db.model('boba')

describe('Boba model', () => {
  beforeEach(() => {
    db.sync({force: true})
  })

  it('has a `name`, `price`, `description`, `imageUrl`', async () => {
    const boba = await Boba.create({
      name: 'Jasmine Tea',
      price: 5,
      description: 'Best boba ever',
      imageUrl: 'https://phoenix.org/wp-content/uploads/2018/07/Boba-Tea.jpg'
    })
    expect(boba.name).to.be.equal('Jasmine Tea')
    expect(boba.price).to.be.equal(5)
    expect(boba.description).to.be.equal('Best boba ever')
    expect(boba.imageUrl).to.be.equal(
      'https://phoenix.org/wp-content/uploads/2018/07/Boba-Tea.jpg'
    )
  })

  it('`imageUrl` has a default value', async () => {
    const boba = await Boba.create({name: 'Jasmine Tea'})
    expect(boba.imageUrl).to.be.equal(
      'https://phoenix.org/wp-content/uploads/2018/07/Boba-Tea.jpg'
    )
  })
})
