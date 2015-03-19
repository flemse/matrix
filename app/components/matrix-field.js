import Ember from 'ember';
import layout from '../templates/components/matrix-field';

export default Ember.Component.extend({
  tagName: 'span',
  layout: layout,
  classNames: 'matrix-field'
});
