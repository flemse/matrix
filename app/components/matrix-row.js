import Ember from 'ember';
import layout from '../templates/components/matrix-row';

export default Ember.Component.extend({
  layout: layout,
  classNames: 'matrix-row',
  fields: function() {
    var fields = this.get('row.data');
    return fields.slice(this.get('parentView.start'), this.get('parentView.end'));
  }.property('row.data', 'parentView.start', 'parentView.end')
});
