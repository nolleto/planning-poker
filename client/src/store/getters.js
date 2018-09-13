export default {
  isUserSignedIn: state => state.user && !!state.user.username,
  username: state => state.user.username,

  getErrorByName: ({ errors }) => name => {
    return errors && errors[name] && errors[name][0]
  }
}
