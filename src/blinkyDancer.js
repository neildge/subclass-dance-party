var BlinkyDancer = function(top, left, timeBetweenSteps) {

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  Dancer.call(this, top, left, timeBetweenSteps);
  // debugger;
  // this.oldStep = Dancer.prototype.step.bind(this);

  // console.log(this.oldStep);

  // var oldStep = BlinkyDancer.step;
  // this.step();
  // this.oldStep = this.step();
  // setTimeout(this.step, timeBetweenSteps);
};
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // console.log(this);
  Dancer.prototype.step.call(this);
  // console.log('b4', this.$node);
  // console.log(this);

  // this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  // BlinkyDancer.$node.toggle(slow, swing, oldStep());

  this.$node.toggle();
  // console.log('af', this.$node);
};

