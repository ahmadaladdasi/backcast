var VideoPlayerView = Backbone.View.extend({
  
  // events: {
  //   'click .video-list-entry' : 'select'
  // },
  
  initialize: function() {
    this.listenTo(this.collection, 'change select', function(event) {
      
      this.render(event);
    })
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
  
  // select: function(selection) {
  //   console.log('test')
  //   this.render(selection);
  // },

  template: templateURL('src/templates/videoPlayer.html')

});
