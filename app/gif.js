app.gif = {
  all: [],
  new: (function() {
    var counter = 0
    var gif = function Gif(url, tag) {
      this.url = url
      this.tag = tag    
      var that = this;
      function initialize() {
        counter++
        that.id = counter;
        app.gif.all.push(that);
      }
      initialize();
    }
    return gif;
  }()),
  findBy: function findBy(attrHash) {
    var key = Object.keys(attrHash)[0];
    var value = attrHash[key];
    return $.grep(app.gif.all, function(gif){
      return gif[key] == value;
    });
    },
  }
