class RestService {

  constructor($http) {
    this.$http = $http;
    this.host = "https://s.ziax.dk/api/"
  }


  authorize (uid, lastname) {
    // console.log('authorize', uid, lastname);
    return this.$http.post( this.host + 'appauth', { uid: uid, lastname: lastname });
  };

  search () {
      console.log('searching...');
  }
}
export { RestService }