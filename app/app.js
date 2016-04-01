$(function(){
  $('input:submit').click(app.tag.controller.create.initialize)
  $('body').on('click', 'button', function(){
    var tagId = $(this).attr("id");
    app.tag.controller.show.initialize(tagId)

  })

})


var app = {}
