(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>{{title}}</h1><h2>{{hero}} details!</h2>'
    })
    .Class({
      constructor: function() {
        title = 'Tour of Heroes';
        hero = 'Windstorm';
      }
    });
})(window.app || (window.app = {}));
