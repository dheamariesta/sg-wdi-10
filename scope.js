var counter = 0;

var MyObj = function() {

  var items = [1,2,3,4,5];

  this.print = function(element){
    console.log(element);
  }

  items.forEach(function(element, index){
    this.print(element);
    return;
  }, this); //pass the scope into the function
}

var myObj = new MyObj();
var myObj1 = new MyObj();
