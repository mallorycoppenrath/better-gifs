app.tag = {
  all: [],
  new: (function() {
    var counter = 0
    var tag = function Tag(description) {
      this.description = description;
      this.view = false

      var that = this;
      this.gifs = function(){
        return app.gif.findBy({tag: this})
      }


      function initialize() {
        counter++
        that.id = counter;
        app.tag.all.push(that);
      }
      initialize();
    }
    return tag;
  }()),
  findBy: function findBy(attrHash) {
    var key = Object.keys(attrHash)[0];
    var value = attrHash[key];
    return $.grep(app.tag.all, function(tag){
      return tag[key] == value;
    });
  },
}
