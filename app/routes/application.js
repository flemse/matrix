import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var height = 10, i = 0, u = 0;
    var width = 100;
    var ret = [];

    var rowData = {};
    for(i = 0; i < height; i++ ) {
      rowData = {
        name: 'r' + i,
        data: []
      };
      for(u = 0; u < width; u++) {
        rowData.data.push({
          name: 'col' + u
        });
      }
      ret.push(rowData);
    }

    return ret;
  }
});
