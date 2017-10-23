var app = angular.module('preorderApp', []);
app.controller('preordersCtrl', function ($scope) {
    $scope.preorders = preorderData["preorders"];
    $scope.products = productData["products"];
    $scope.employees = employeeData["employees"];
    $scope.systems = systemData["systems"];

    console.log($scope.products);

    $scope.newPreOrder = {}; //placeholder for new preorder
    $scope.newEmployee = {}; //placeholder for new employee
    $scope.newProduct = {}; //placeholder for new product
    $scope.newSystem = {}; //placeholder for new system

    // Method for adding a new preorder data item to the application model 
    $scope.addPreOrder = function () {
            console.log($scope.newPreOrder); // Debug print
            $scope.preorders.push($scope.newPreOrder); // Add new preorder data item to preorderData
            $scope.newPreOrder = {}; // Reset the values -- empties form
        }
    // Method for adding a new employee data item to the application model 
    $scope.addNewEmployee = function () {
            console.log($scope.newEmployee); // Debug print
            $scope.employees.push($scope.newEmployee); // Add new employee data item to employeeData
            $scope.newEmployee = {}; // Reset the values -- empties form
        }
    // Method for adding a new product data item to the application model 
    $scope.addNewProduct = function () {
            console.log($scope.newProduct); // Debug print
            $scope.products.push($scope.newProduct); // Add new product data item to productData
            $scope.newProduct = {}; // Reset the values -- empties form
        }
    // Method for adding a new system data item to the application model 
    $scope.addNewSystem = function () {
        console.log($scope.newSystem); // Debug print
        $scope.systems.push($scope.newSystem); // Add new system data item to systemData
        $scope.newSystem = {}; // Reset the values -- empties form
    }

    // Removing an item from products list
    $scope.removeProduct = function (item) {
        var index = $scope.products.indexOf(item)
        $scope.products.splice(index, 1);
    }

    // Removing an item from employees list
    $scope.removeEmployee = function (item) {
        var index = $scope.employees.indexOf(item)
        $scope.employees.splice(index, 1);
    }

    // Removing an item from systems list
    $scope.removeSystem = function (item) {
        var index = $scope.systems.indexOf(item)
        $scope.systems.splice(index, 1);
    }

    // Removing an item from preorders list
    $scope.removePreorder = function (item) {
        var index = $scope.preorders.indexOf(item)
        $scope.preorders.splice(index, 1);
    }
});