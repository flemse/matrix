import Ember from 'ember';
import inViewport from '../mixins/in-viewport';
import layout from '../templates/components/load-trigger';

export default Ember.Component.extend(inViewport, {
  layout: layout
});
