// var myObj = new Object(); //this myObj is a variable
// //when declaring new object, always use capital for object words eg: Car, Object
// console.log(myObj);

// var newObj = {};
// console.log(newObj);

var Car = function(color, engine){
  //Private
  var engine = engine;
  /*engine can only be seen inside the car
  therefore will not be printed when called from outside*/
  var fuel = 0;
  var useFuel = function(){
    fuel--;
  }

  //Public
  this.color = color;
  //this points to the car object
  //this always refers to the object it is part of
  //dont try to change the value of this
  //can delete public property

  this.addFuel = function(x){
    fuel += x;
  }

  this.start = function(){
    useFuel();
    if(fuel > 0){
      console.log("Vroom Vroom");
    } else{
      console.log("Fuel empty");
    }

  }
}
var mySecondCar = Object.create(Car)
var newCar = new Car("red", "Super engine");
newCar.addFuel(2);
newCar.start();
newCar.start();
newCar.start();
newCar.color = "black";;
console.log(newCar.color);
