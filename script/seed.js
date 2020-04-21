'use strict'

const db = require('../server/db')
const {User} = require('../server/db/models')
const {Boba} = require('../server/db/models')
const {Order} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@email.com',
      password: '123'
    }),
    User.create({
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'janedoe@email.com',
      password: 'abc'
    }),
    User.create({
      firstName: 'Sally',
      lastName: 'Mae',
      email: 'sallymae@email.com',
      isAdmin: true,
      password: 'abc'
    })
  ])

  const allBoba = await Promise.all([
    Boba.create({
      name: 'Classic Milk Tea',
      price: 4.5,
      description: 'Black tea blend with milk',
      imageUrl:
        'https://raster-static.postmates.com/?url=com.postmates.img.prod.s3.amazonaws.com%2F6c08ded2-e631-406d-8233-282237558765%2Forig.jpg&quality=85&w=500&h=0&mode=auto&format=webp&v=4',
      quantity: 1
    }),
    Boba.create({
      name: 'Thai Tea',
      price: 4.75,
      description: 'Sweet, creamy & rich, with organic condensed milk',
      imageUrl:
        'https://theforkedspoon.com/wp-content/uploads/2018/06/Thai-Tea-Recipe-5-700x1050.jpg',
      quantity: 3
    }),
    Boba.create({
      name: 'Matcha Bubble Tea',
      price: 5.75,
      description: 'Hand-whisked organic Japanese green tea',
      imageUrl:
        'https://www.ohhowcivilized.com/wp-content/uploads/2019/05/0519-matcha-bubble-tea-9.jpg',
      quantity: 2
    })
  ])

  const orders = await Promise.all([
    Order.create({
      userId: 1,
      bobaId: 2,
      purchased: false
    }),
    Order.create({
      userId: 2,
      bobaId: 3,
      purchased: true
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${allBoba.length} boba`)
  console.log(`seeded ${orders.length} orders`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
