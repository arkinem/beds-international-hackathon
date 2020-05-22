const authentication = {
  isAuthenticated: false,
  authenticate(cb) {
    authentication.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    authentication.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

export default authentication;
