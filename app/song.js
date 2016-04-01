app.song = {
  all: [],
  new: (function() {
    var counter = 0
    var song = function Song(title) {
      this.title = title;
      var that = this;
      function initialize() {
        counter++
        that.id = counter;
        app.song.all.push(that);
      }
      initialize();
    }
    return song;
  }()),
  // findBy: function findBy(attrHash)

}
