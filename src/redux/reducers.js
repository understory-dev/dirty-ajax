const defaultState = {}

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'load':
      return {
        ...state,
        loading: true,
        user: null,
      }

    case 'load-success':
      return {
        ...state,
        loading: false,

        // I don't worry about _where_ this data came from.  All I know is there
        // is a `user` in the action.  Composing the user is not my concern.
        user: action.user,
      }

    default:
      return state
  }
}



const selectors = {
  getEmail (state) {
    const user = this.getUser(state)
    return user && user.email
  },
  getUser (state) {
    return state.user
  },
}

export { selectors }
