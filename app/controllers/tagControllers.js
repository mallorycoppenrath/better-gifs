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

    var promiseArticle = app.tag.adapter1.getBy(tagInput).then(function(article){
      debugger
      })



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
        gif = data.data[randomize(25)];
        newGif = new app.gif.new(gif.images.downsized_medium.url);
        return newGif
    })
  }
}

app.tag.adapter1 = {}

app.tag.adapter1 = {

  getBy: function(input) {
    return $.ajax({
      method: 'GET',
      url: "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + input + "&api-key=84e7a889faef8484799ed24dc5821f78:4:65422799",
    }).then(function(data){
      var article;
      var newArticle

        article = data.response.docs[randomize(10)]
        newArticle = new app.article.new(article.headline.main)
        return newArticle
    })
  }
}

function randomize(num){
  return Math.floor(Math.random() * num)

}
