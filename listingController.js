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
      $scope.detailedInfo = "";
      $sce.trustAsHtml($scope.detailedInfo);

      $scope.detailedInfo += "Code: "
      $scope.detailedInfo += $scope.listings[index].code + " ";
      $scope.detailedInfo += "Building Name: "
      $scope.detailedInfo += $scope.listings[index].name + " ";

      if($scope.listings[index].coordinates.latitude != undefined) {
      $scope.detailedInfo += "Latitude: "
      $scope.detailedInfo += $scope.listings[index].coordinates.latitude + " ";

      }
      
      if($scope.listings[index].coordinates.longitude != undefined){
      $scope.detailedInfo += "Longitude: "
      $scope.detailedInfo += $scope.listings[index].coordinates.longitude + " ";
      }


      if($scope.listings[index].address != undefined) {
      $scope.detailedInfo += "Address: "
      $scope.detailedInfo += $scope.listings[index].address;
      }

    };
  }
]);