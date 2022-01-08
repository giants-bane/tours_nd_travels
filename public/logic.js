$(document).ready(function(){

    $('.menu').click(function(){
      $('.navbar').toggle();
      $('.menu .fa-bars').toggleClass('fa-times');
      $('section').toggleClass('nav-toggle');
    });
  
    $(window).on('load scroll',function(){
      $('.navbar').hide();
      $('.menu .fa-bars').removeClass('fa-times');
      $('section').removeClass('nav-toggle');
    });
  
  });
  var app=angular.module('myapp',[]);
  app.controller('ctrlfn',['$scope',function($scope)
  {
    $scope.baliclicked=function(){
      window.location="bali_129_148_374.html";
    }
    $scope.malclicked=function(){
      window.location="maldives_129_148_374.html";
    }
    $scope.rioclicked=function(){
      window.location="rio_129_148_374.html";
    }
    $scope.fn=/^[\p{L} ,.'-]+$/u;
    $scope.em=/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    $scope.p=/^[0-9]{10}/;
  }])