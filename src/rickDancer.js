var RickDancer = function(top, left, timeBetweenSteps) {

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<img src ="img/rick.png" class = "rick" width = 75px height = 150px></img>');
  $(".rick").hover(function(){
    $(this).css("background-color", "yellow");
  });
};
RickDancer.prototype = Object.create(Dancer.prototype);
RickDancer.prototype.constructor = RickDancer;

RickDancer.prototype.step = function() {

  // Dancer.prototype.step.call(this);


  this.$node.toggle();

};

