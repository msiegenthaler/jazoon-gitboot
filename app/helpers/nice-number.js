import Ember from 'ember';

export function niceNumber(params/*, hash*/) {
  const number = params[0];
  if (number < 1000) {
    return number;
  } else {
    return Math.round(number / 100)/10.0 + "K";
  }
}

export default Ember.Helper.helper(niceNumber);
