app.tag.controller = {}

app.tag.controller.create = {
  initialize: function(event){
    event.preventDefault();
    $('.giphy').empty()

    var tagInput = $('#tag_input').val();
    $('#tag_input').val("");

    if(!app.tag.findBy({description: tagInput}).length){
      var tagObj = new app.tag.new(tagInput) }
    else{
      var tag = app.tag.findBy({description: tagInput});
      var tagObj = tag[0]
    }

    var promise = app.tag.adapter.getBy(tagObj).then(function(giphy){
      giphy.tag = tagObj
      app.tag.controller.create.render(giphy)
    })
    },
    render: function(giphy) {
      $('.giphy').append('<img src ="'+ giphy.url +'">')
      if(giphy.tag.view === false) {
        $('.tag_button ul').append('<button type="button" id="'+ giphy.tag.id +'">'+ giphy.tag.description +'</button>')
        giphy.tag.view = true
      }
    }

}

app.tag.controller.show = {
  initialize: function(idInput){
    $('.giphy').empty()
    var tag = app.tag.findBy({id: idInput})
    app.tag.controller.show.render(tag[0])
  },
  render: function(tag){
    tag.gifs().forEach(function(gif){
      $('.giphy').append('<img src ="'+ gif.url +'">')
    })
  }
}

app.tag.adapter = {}

app.tag.adapter = {

  getBy: function(input) {
    return $.ajax({
      method: 'GET',
      url: "http://api.giphy.com/v1/gifs/search?q=" + input.description + "&api_key=dc6zaTOxFJmzC",
    }).then(function(data) {
        var gif;
        var newGif;
        gif = data.data[randomize()];
        newGif = new app.gif.new(gif.images.downsized_medium.url);
        return newGif
    })
  }
}

function randomize(){
  return Math.floor(Math.random() * 25)

}
