app.tag.controller = {}

app.tag.controller.create = {
  initialize: function(event){
    event.preventDefault()

    var tag = $('#tag_input').val();
    var tag = new app.tag.new(description);

    app.tag.controller.create.render(tag)
  },
  // render: function(gif) {
  //   var 
  // }
}