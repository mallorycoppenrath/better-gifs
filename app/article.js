app.article = {
  all: [],
  new: (function(){
    var counter = 0
    var article = function Article(title){
        this.title = title
        var that = this
        function initialize(){
          counter++
          that.id = counter
          app.article.all.push(that);
        }
      initialize();
    }
    return article
  }()),
  findBy: function findBy(attrHash) {
    var key = Object.keys(attrHash)[0];
    var value = attrHash[key];
    return $.grep(app.article.all, function(gif){
      return gif[key] == value;
    });
    },
}
