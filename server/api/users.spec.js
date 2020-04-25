/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const User = db.model('user')

describe('User routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('User routes', () => {
    beforeEach(() => {
      return db.sync({force: true})
    })

    describe('/api/users/', () => {
      const codysEmail = 'cody@puppybook.com'

      beforeEach(() => {
        return User.create({
          firstName: 'cody',
          lastName: 'puppy',
          email: codysEmail
        })
      })

      it('GET /api/users', async () => {
        const res = await request(app)
          .get('/api/users')
          .expect(200)

        expect(res.body).to.be.an('array')
        expect(res.body[0].email).to.be.equal(codysEmail)
      })
    })

    describe('/api/users/:id', () => {
      let myUser

      beforeEach(async () => {
        const createUsers = [
          {
            firstName: 'billie',
            lastName: 'jean',
            email: 'bille@notMyLover.com'
          },
          {
            firstName: 'thriller',
            lastName: 'night',
            email: 'its@midnight.com'
          }
        ].map(data => User.create(data))

        const myUsers = await Promise.all(createUsers)

        myUser = myUsers[1]
      })

      it('GET /api/users returns the firstName of the user based off id', async () => {
        const res = await request(app)
          .get('/api/users/' + myUser.id)
          .expect(200)

        if (typeof res.body === 'string') {
          res.body = JSON.parse(res.body)
        }
        expect(res.body.firstName).to.equal('thriller')
      })
    })

    describe('PUT /api/users', () => {
      let billie

      beforeEach(async () => {
        billie = await User.create({
          firstName: 'billie',
          lastName: 'jean',
          email: 'billie@notMyLover.com'
        })
      })

      it('updates a specific user', async () => {
        const res = await request(app)
          .put('/api/users/' + billie.id)
          .send({
            email: 'billiejean@notMyLover.com'
          })
          .expect(200)

        // expect(res.body.user.dataValues.email).to.equal(
        //  'billiejean@notMyLover.com'
        // )
      })
    })
  }) // end describe('/api/users')
}) // end describe('User routes')

// might need to refactor user/put request to send other data, then update test
