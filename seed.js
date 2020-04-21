const {db, User, Boba} = require('./server/db')
// const User = require('./server/db/models/user');
// const Boba = require('./server/db/models/boba');

const users = [
  {
    // firstName: 'John',
    // lastName: 'Doe',
    email: 'johndoe@email.com',
    password: '123'
  },
  {
    // firstName: 'Jane',
    // lastName: 'Doe',
    email: 'janedoe@email.com',
    password: 'abc'
  }
]

const allBoba = [
  {
    name: 'Classic Milk Tea',
    price: 4.5,
    description: 'Black tea blend with milk',
    imageUrl:
      'https://raster-static.postmates.com/?url=com.postmates.img.prod.s3.amazonaws.com%2F6c08ded2-e631-406d-8233-282237558765%2Forig.jpg&quality=85&w=500&h=0&mode=auto&format=webp&v=4',
    quantity: 1
  },
  {
    name: 'Thai Tea',
    price: 4.75,
    description: 'Sweet, creamy & rich, with organic condensed milk',
    imageUrl:
      'https://theforkedspoon.com/wp-content/uploads/2018/06/Thai-Tea-Recipe-5-700x1050.jpg',
    quantity: 3
  },
  {
    name: 'Matcha Bubble Tea',
    price: 5.75,
    description: 'Hand-whisked organic Japanese green tea',
    imageUrl:
      'https://www.ohhowcivilized.com/wp-content/uploads/2019/05/0519-matcha-bubble-tea-9.jpg',
    quantity: 2
  }
]

const seed = async () => {
  try {
    await db.sync({force: true})

    await Promise.all(
      users.map(user => {
        return User.create(user)
      })
    )

    await Promise.all(
      allBoba.map(boba => {
        return Boba.create(boba)
      })
    )

    console.log(green('Seeding success!'))
    db.close()
  } catch (err) {
    console.error(red('Seeding error! Something went wrong.'))
    console.error(err)
    db.close()
  }
}

seed()
