/*Independent Monkey Exercise (20 minutes)

Create a monkey object, which has the following properties:
-name
-species
-foodsEaten

And the following methods:
-eatSomething(thingAsString)
introduce: producers a string introducing itself, including its name, species, and what it's eaten
Create 3 monkeys total. Make sure all 3 monkeys have all properties and using their methods.

Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes for retrieving properties (dot notation and brackets)
*/

var Monkey = function(name, species, food){
  this.name = name;
  this.species = species;
  this.foodsEaten = food;

  this.eatSomething = function(){
    console.log("My name is " + this.name + " and I am a " + this.species + " and I eat " + this.foodsEaten);
  }
}

var monkeyOne = new Monkey("bobo", "Asian monkey", "banana, fruit, nuts");
var monkeyTwo = new Monkey("boo boo", "Australian Monkey", "drinks, cocoa");
var monkeyThree = new Monkey("lala", "street monkey", "coconut");

monkeyOne.eatSomething();
monkeyTwo.eatSomething();
monkeyThree.eatSomething();

monkeyOne.name;
