var Videos = Backbone.Collection.extend({

  model: Video,
  
  url: 'https://www.googleapis.com/youtube/v3/search',
  
  search: function (searchValue){
    this.fetch({
      data : {'q': searchValue, 
      'maxResults': 5,
      'part': 'snippet',
      'key': window.YOUTUBE_API_KEY,
      'embedded': true
      }
    });
      
  },
  
  // fetch: function(search){
  //   var context = this;
  //   $.ajax({

  //     url: 'https://www.googleapis.com/youtube/v3/search',
  //     type: 'GET',
  //     data: {'q': search, 
  //     'maxResults': 5,
  //     'part': 'snippet',
  //     'key': window.YOUTUBE_API_KEY,
  //     'embedded': true
  //       },
  //     contentType: 'application/json',
  //     success: function (data) {
  //       context.set(context.models, context.parse(data));
  //       // console.log(context.models)
  //       console.log('data retrieved', data);
        
  //     },
  //     error: function (data) {

  //       console.error('Failed to get data', data);
  //     }
  //   });
  // },
  
  parse: function(videosObject) {
    // console.log(this.models);
    return videosObject.items;
  }
  

});
