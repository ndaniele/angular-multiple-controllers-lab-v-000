function ContactController(){
  this.name = 'Nicholas';
  this.email = 'n.daniele@gmail.com';
  this.phone = 6464077874;

  var vm = this;

  this.changeName = function() {
    vm.name = 'Something Else!';
  }

}



angular
  .module('app')
  .controller('ContactController', ContactController);