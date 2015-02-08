class LoginController {

  constructor($scope) {
    this.scope = $scope;
    this.scope.f = {};
    // $scope.f = {};
    // $scope.submitForm = function() {
    //   if ($scope.theForm.$invalid) return;
    //   console.log('submit', $scope.f);
    // };

  }

  submitForm () {
    console.log('submitForm');
  }


}
export { LoginController }