import Ember from 'ember';
import layout from '../templates/components/matrix-container';

export default Ember.Component.extend({
  layout: layout,
  classNames: 'matrix-container',
  leftWidth: function() {
    return "transform: translate3d(" + this.get('start') * 10 + "px,0,0);";
  }.property('start'),
  scrollEndPercentage: 0,
  start: 0,
  end: 20
});
