import User from '../models/User'

const simulateServerResponse = response => new Promise(resolve => {
  setTimeout(() => {
    resolve(response)
  }, 500)
})

export const loadInfo = () =>
  simulateServerResponse(
    {
      status: 'success',
      user: {
        email: 'foo@bar.com',
        _id: 'xxkkd',
        id: 'xxx',
        org: {
          id: 'yyy',
          title: 'The Barn Org',
          created: new Date(Date.now - 2233445),
        },
        admin: true,
        color: 'pink',
        roles: [
          { id: 'asdf' },
          { id: 'wwww' },
          { id: 'wasd' },
        ],
        lastLoginDate: new Date('2/3/2017'),
        hasPendingInvite: false,
        eatsVegetables: true,
        foo: {},
        favoriteNumber: 999,
      },
    }
  ).then(resp => {
    // I don't want to return the raw server response.  I just want the "meat",
    // so I clean it up a bit here.
    return resp.user
  })
  // The server has its idea of what a user is, but I don't need all that.
  .then(user => new User(user))
