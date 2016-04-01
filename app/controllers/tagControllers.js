app.tag.controller = {}

app.tag.controller.create = {
  initialize: function(event){
    event.preventDefault();

    var tagInput = $('#tag_input').val();
    var tagObj = new app.tag.new(tagInput);

    var promise = app.tag.adapter.getBy(tagInput).then(function(giphy){
      giphy.tag = tagObj
      app.tag.controller.create.render(giphy)
    })
    },
    render: function(giphy) {
      $('.giphy').append('<img src ="'+ giphy.url +'">')
    }

}

app.tag.adapter = {}

app.tag.adapter = {

  getBy: function(input) {
    return $.ajax({
      method: 'GET',
      url: "http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=dc6zaTOxFJmzC",
    }).then(function(data) {
        var gif;
        var newGif;
        gif = data.data[0];
        newGif = new app.gif.new(gif.images.downsized_medium.url);
        return newGif
    })
  }

}
