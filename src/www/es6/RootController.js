class RootController {

  constructor($scope, $state, $ionicModal) {
    this.scope = $scope;
    this.state = $state;

    $ionicModal.fromTemplateUrl('htmls/login.html', {
      scope: $scope,
      animation: 'slide-in-up',
      backdropClickToClose: false
    }).then(function(modal) {
      console.log(modal);
      $scope.modal = modal;
      $scope.modal.show();
    });
    $scope.openModal = function() {
      $scope.modal.show();
    };
    $scope.closeModal = function() {
      $scope.modal.hide();
    };
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    $scope.$on('modal.hidden', function() {
    });
    $scope.$on('modal.removed', function() {
    });

  // submitForm () {
  //   console.log('submitForm');
  //   // this.RestService.authorize(this.scope.f.email ,this.scope.f.password)
  //   //   .then(() => {
  //   //     console.log('ok');
  //   //     this.state.go('main');
  //   //   });
  // }
    // this.RestService.authorize(this.scope.f.email ,this.scope.f.password)
    //   .then(() => {
    //     console.log('ok');
    //     this.state.go('main');
    //   });


    this.scope.$on('authenticate_ok', (evt, arg) => {
      console.log('authenticate_ok', arg);
      this.scope.closeModal();
      this.state.go('main');

    });

  }

}
export { RootController }


