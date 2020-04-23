'use strict'

const db = require('../server/db')
const {User, Boba, Order, OrderBoba} = require('../server/db/models')

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
    }),
    User.create({
      firstName: 'Leslie',
      lastName: 'Knope',
      email: 'leslieknope@email.com',
      password: '123',
      isAdmin: true
    }),
    User.create({
      firstName: 'Ron',
      lastName: 'Swanson',
      email: 'ronswanson@email.com',
      password: '123',
      isAdmin: true
    }),
    User.create({
      firstName: 'April',
      lastName: 'Ludgate',
      email: 'aprilludgate@email.com',
      password: '123'
    }),
    User.create({
      firstName: 'Ann',
      lastName: 'Perkins',
      email: 'annperkins@email.com',
      password: '123'
    }),
    User.create({
      firstName: 'Andy',
      lastName: 'Dwyer',
      email: 'andydwyer@email.com',
      password: '123'
    }),
    User.create({
      firstName: 'Ben',
      lastName: 'Wyatt',
      email: 'benwyatt@email.com',
      password: '123'
    }),
    User.create({
      firstName: 'Tom',
      lastName: 'Haverford',
      email: 'tomhaverford@email.com',
      password: '123'
    })
  ])

  const allBoba = await Promise.all([
    Boba.create({
      name: 'Almond Milk Tea',
      price: 450,
      description: 'Full of nutty goodness',
      imageUrl:
        'https://www.thespruceeats.com/thmb/E0yRcfGDLVmYEFfx4QTVy5sIxt8=/3819x3819/smart/filters:no_upscale()/bubble-tea-recipe-694162-hero-02-e428d92163814642903b12c5ac14de24.jpg'
    }),
    Boba.create({
      name: 'Brown Sugar Milk Tea',
      price: 450,
      description: 'Classic milk tea meets brown sugar syrup',
      imageUrl:
        'https://chloejohnston.com/wp-content/uploads/2019/07/bubble-milk-tea-768x1152.png'
    }),
    Boba.create({
      name: 'Classic Milk Tea',
      price: 450,
      description: 'Black tea blend with milk',
      imageUrl:
        'https://raster-static.postmates.com/?url=com.postmates.img.prod.s3.amazonaws.com%2F6c08ded2-e631-406d-8233-282237558765%2Forig.jpg&quality=85&w=500&h=0&mode=auto&format=webp&v=4'
    }),
    Boba.create({
      name: 'Chocolate Milk Tea',
      price: 450,
      description: 'Milk tea swirled in cocoa-browns',
      imageUrl:
        'https://i.pinimg.com/736x/0f/d1/e2/0fd1e2e751babda79d8acd3561daaa2e.jpg'
    }),
    Boba.create({
      name: 'Coffee Milk Tea',
      price: 450,
      description: 'Cold-brewed coffee blend with milk',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Classic_bubble_tea.jpg/220px-Classic_bubble_tea.jpg'
    }),
    Boba.create({
      name: 'Honeydew Milk Tea',
      price: 450,
      description: 'Staple flavor of many Asian households',
      imageUrl:
        'https://chloejohnston.com/wp-content/uploads/2019/07/green-bubble-tea-fruit-e1562873692463.png'
    }),
    Boba.create({
      name: 'Jasmine Milk Tea',
      price: 450,
      description: 'Flowery, herbal, and mildly sweet',
      imageUrl:
        'https://chloejohnston.com/wp-content/uploads/2019/07/jasmine-768x509.png'
    }),
    Boba.create({
      name: 'Kiwi Milk Tea',
      price: 450,
      description: 'Delicate, tart, sweet, and complex in flavor',
      imageUrl:
        'https://previews.123rf.com/images/foodandmore/foodandmore1206/foodandmore120600166/14168001-kiwi-boba-bubble-tea-with-fruits-and-crushed-ice-.jpg'
    }),
    Boba.create({
      name: 'Lavender Milk Tea',
      price: 450,
      description: 'Floral with hints of mint and rosemary',
      imageUrl:
        'https://i1.wp.com/www.talkdisney.com/news/wp-content/uploads/2019/01/Lavender-Milk-Tea.jpg?fit=1600%2C1200&ssl=1'
    }),
    Boba.create({
      name: 'Mango Milk Tea',
      price: 450,
      description: 'Sinfully sweet and tantalizingly tropical',
      imageUrl:
        'https://chloejohnston.com/wp-content/uploads/2019/07/mango-slush-bubble.png'
    }),
    Boba.create({
      name: 'Matcha Milk Tea',
      price: 450,
      description: 'Hand-whisked organic Japanese green tea with milk',
      imageUrl:
        'https://www.ohhowcivilized.com/wp-content/uploads/2019/05/0519-matcha-bubble-tea-9.jpg'
    }),
    Boba.create({
      name: 'Mocha Milk Tea',
      price: 450,
      description: 'Fantastic drink for coffee lovers and chocolate lovers',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/1161/4842/products/cafe_mocha_grande.jpg?v=1525922763'
    }),
    Boba.create({
      name: 'Peach Milk Tea',
      price: 450,
      description: 'Milk infused with natural peach flavor',
      imageUrl:
        'https://previews.123rf.com/images/foodandmore/foodandmore1206/foodandmore120600170/14168011-peach-boba-bubble-tea-with-fruits-and-crushed-ice.jpg'
    }),
    Boba.create({
      name: 'Strawberry Milk Tea',
      price: 450,
      description: 'Slightly tangy but oh so sweet',
      imageUrl:
        'https://chloejohnston.com/wp-content/uploads/2019/07/strawberry-bubble-tea.png'
    }),
    Boba.create({
      name: 'Thai Milk Tea',
      price: 450,
      description: 'Sweet, creamy & rich, with organic condensed milk',
      imageUrl:
        'https://theforkedspoon.com/wp-content/uploads/2018/06/Thai-Tea-Recipe-5-700x1050.jpg'
    }),
    Boba.create({
      name: 'Taro Milk Tea',
      price: 450,
      description: 'Nutty, earthy, vanilla-esque flavor',
      imageUrl:
        'https://chloejohnston.com/wp-content/uploads/2019/07/purple-tea.png'
    }),
    Boba.create({
      name: 'Wintermelon Milk Tea',
      price: 450,
      description: 'Distinct sweet caramel flavor',
      imageUrl:
        'https://i.pinimg.com/originals/22/c3/33/22c333494f173c4424cdbb4b44816bd5.jpg'
    }),
    Boba.create({
      name: 'Lemon Tea',
      price: 400,
      description: 'Iced tea infused with real lemons',
      imageUrl:
        'https://popmenucloud.com/cdn-cgi/image/width=1200,height=1200,fit=scale-down,format=auto/eqruvkhi/3c3f39fc-4540-4f69-b131-11cca53ab36c'
    }),
    Boba.create({
      name: 'Passion Fruit Tea',
      price: 400,
      description: 'Iced tea infused with real passion fruits',
      imageUrl:
        'https://i.pinimg.com/originals/45/2f/9a/452f9af167d7b6be0f7555a1491b2fa1.jpg'
    }),
    Boba.create({
      name: 'Peach Tea',
      price: 400,
      description: 'Iced tea infused with real peaches',
      imageUrl:
        'https://i.pinimg.com/originals/40/dc/77/40dc775bda8be282c787ed34bbe35bb3.jpg'
    }),
    Boba.create({
      name: 'Strawberry Tea',
      price: 400,
      description: 'Iced tea infused with real strawberries',
      imageUrl:
        'https://i.pinimg.com/474x/9e/46/7c/9e467c057792429c9faac96e8ce1c2f4.jpg'
    }),
    Boba.create({
      name: 'Honeydew Slush',
      price: 500,
      description: 'Frozen blend of honeydew and milk',
      imageUrl:
        'https://tapiocaexpress.weebly.com/uploads/5/0/0/9/50094743/s140656462996705697_p5_i1_w590.jpeg'
    }),
    Boba.create({
      name: 'Lemon Slush',
      price: 500,
      description: 'Frozen blend of lemon and milk',
      imageUrl:
        'https://honestandtasty.com/wp-content/uploads/2016/07/Frozen-Sparkling-Lemonade-16.jpg'
    }),
    Boba.create({
      name: 'Mango Slush',
      price: 500,
      description: 'Frozen blend of mango and milk',
      imageUrl:
        'https://i.pinimg.com/originals/3b/86/3d/3b863dc4fde5d8577cf8a3a0e1773dd6.jpg'
    }),
    Boba.create({
      name: 'Matcha Slush',
      price: 500,
      description: 'Frozen blend of matcha and milk',
      imageUrl:
        'https://www.tan-cha.net/wp-content/uploads/2019/07/Tan_Cha_Match_Mock.png'
    }),
    Boba.create({
      name: 'Strawberry Slush',
      price: 500,
      description: 'Frozen blend of strawberry and milk',
      imageUrl:
        'https://i.pinimg.com/236x/69/9c/1e/699c1e6eee16dbcbc8a151f8cb9d126b--boba-smoothie-tea-cafe.jpg'
    }),
    Boba.create({
      name: 'Taro Slush',
      price: 500,
      description: 'Frozen blend of taro and milk',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/1476/7310/products/Taro_slush_large.jpg?v=1478847669'
    })
  ])

  const orders = await Promise.all([
    Order.create({
      userId: 1,
      purchased: false
    }),
    Order.create({
      userId: 1,
      purchased: false
    }),
    Order.create({
      userId: 2,
      purchased: true
    }),
    Order.create({
      userId: 3,
      purchased: false
    }),
    Order.create({
      userId: 3,
      purchased: false
    }),
    Order.create({
      userId: 4,
      purchased: true
    }),
    Order.create({
      userId: 5,
      purchased: true
    }),
    Order.create({
      purchased: false
    }),
    Order.create({
      purchased: true
    })
  ])

  const orderBobas = await Promise.all([
    OrderBoba.create({
      orderId: 1,
      bobaId: 1,
      quantity: 2,
      price: 5
    }),
    OrderBoba.create({
      orderId: 1,
      bobaId: 2,
      quantity: 5,
      price: 3
    }),
    OrderBoba.create({
      orderId: 2,
      bobaId: 3,
      quantity: 6,
      price: 2
    }),
    OrderBoba.create({
      orderId: 2,
      bobaId: 4,
      quantity: 2,
      price: 3
    }),
    OrderBoba.create({
      orderId: 3,
      bobaId: 1,
      quantity: 1,
      price: 2
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${allBoba.length} boba`)
  console.log(`seeded ${orders.length} orders`)
  console.log(`seeded ${orderBobas.length} historials`)
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
