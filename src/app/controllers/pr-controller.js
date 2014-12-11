'use strict';

angular.module('activ8')

/**
*Personal Bests controller
*/
.controller('prController', function(Auth, $firebase, CONFIG){

  var self = this;

  Auth.onAuth(function(user){
    self.user = user;
  });
})
