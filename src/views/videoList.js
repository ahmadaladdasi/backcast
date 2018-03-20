var VideoListView = Backbone.View.extend({


  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    this.$el.children().append(this.collection.map(video => new VideoListEntryView({model: video}).render().el))

    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
