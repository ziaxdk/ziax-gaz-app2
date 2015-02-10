class LoginController {

  constructor($scope, RestService) {
    this.scope = $scope;
    this.scope.f = {};
    this.RestService = RestService;
  }

  submitForm () {
    // this.scope.modal.closeModal();
    console.log(this.scope.$parent);
    this.RestService.authorize(this.scope.f.email ,this.scope.f.password)
      .then((arg) => {
        this.scope.$emit('authenticate_ok', arg.data);
      });
  }



}
export { LoginController }