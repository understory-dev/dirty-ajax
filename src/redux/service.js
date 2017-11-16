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
      },
    }
  ).then(resp => {
    // I don't want to return the raw server response.  I just want the "meat",
    // so I clean it up a bit here.

    return resp.user
  })
