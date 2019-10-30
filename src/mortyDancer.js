var MortyDancer = function(top, left, timeBetweenSteps) {


  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node.append('<img src ="img/morty.png" class = "morty" width = 50px height = 100px></img>');


};
MortyDancer.prototype = Object.create(Dancer.prototype);
MortyDancer.prototype.constructor = MortyDancer;

MortyDancer.prototype.step = function() {



  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  // this.$node.toggle();
};

