$(function(){
  $('input:submit').click(app.tag.controller.create.initialize)
  $('body').on('click', 'button', function(){
    app.gif.counter()

    var tagId = $(this).attr("id");
    app.tag.controller.show.initialize(tagId)

  })

})


var app = {}
