var SearchView = Backbone.View.extend({

  // initialize: function() {
  //   this.listenTo(this, 'click btn', function() {
  //     var searchData = $('.form-control').val();
  //     console.log(searchData)
  //     this.search(searchData);
  //   })
  // },
  
  events: {
    'click button': 'videoSearch',
    'keydown': 'videoSearch',
  },
  
  videoSearch: function(e) {
    if (e.which === 13 || e.which === 1){
      var searchData = $('.form-control').val();
      this.collection.search(searchData);
    }
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
