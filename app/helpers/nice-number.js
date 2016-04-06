import Ember from 'ember';

export function niceNumber(params/*, hash*/) {
  if (!params || !params.length) {
    return '';
  }
  let [val] = params;
  if (val > 1000) {
    return new Ember.Handlebars.SafeString(`${Math.round(val * 0.01)/10 }K`);
  } else {
    return new Ember.Handlebars.SafeString(val);
  }
}

export default Ember.Helper.helper(niceNumber);
