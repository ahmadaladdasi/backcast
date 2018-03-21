var VideoPlayerView = Backbone.View.extend({
  
  initialize: function() {
    this.listenTo(this.collection, 'change select', function(event) {
      
      this.render(event);
    });
  },

  render: function(event) {
    // this.$el.html('<div class="loading">Please wait...</div>');
    if (event) {
      this.$el.html(this.template(event.attributes));
    } else {
      this.$el.html(this.template(this.collection.at(0).attributes));
    }

    return this;
  },
  
  template: templateURL('src/templates/videoPlayer.html')

});
