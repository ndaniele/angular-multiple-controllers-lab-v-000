function StaffController(){
  this.name = "Ladydog";
  this.email= "ladydog@cute.com";
  this.phone = "i don't have a phone";

}

angular 
  .module('app')
  .controller('StaffController', StaffController);