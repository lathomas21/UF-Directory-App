angular.module('listings').controller('ListingsController', ['$scope', '$sce', 'Listings', 
  function($scope, $sce, Listings) {

    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.search_results = {};



    $scope.addListing = function(code, name, latitude, longitude, address) {
      var new_entry = {
        "code": code,
        "name": name,
        "coordinates": {
          "latitude": latitude,
          "longitude": longitude
        },
        "address": address
      }; 

      $scope.listings.push(new_entry);
    };
    
    $scope.deleteListing = function(index) {
      $scope.listings.splice(index,1);
    };
    $scope.showDetails = function(index) {
      $scope.detailedInfo = {};

      $scope.detailedInfo.code = $scope.listings[index].code;
      $scope.detailedInfo.building = $scope.listings[index].name;
      console.log($scope.listings[index].address)

      
      if($scope.listings[index].coordinates != undefined) { 
        $scope.detailedInfo.latitude = $scope.listings[index].coordinates.latitude;
        $scope.detailedInfo.longitude = $scope.listings[index].coordinates.longitude;
      }
      else {
        $scope.detailedInfo.latitude = "Unavailable";
        $scope.detailedInfo.longitude = "Unavailable";

      }


      if($scope.listings[index].address != undefined) {
        $scope.detailedInfo.address = $scope.listings[index].address;
      }
      else {
        console.log("made it");
      $scope.detailedInfo.address = "Unavailable";}

      };
    }
    ]);