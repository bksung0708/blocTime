(function() {
  function Tasks($firebaseArray) {
    var ref = firebase.database().ref().child("tasks");

    // download tasks into a synchronized array
    var tasks = $firebaseArray(ref);

    return {
      all: tasks,
      createTasks: function(content, count){
        tasks.$add({description: content, order: count});
      }
    };
  }

  angular
    .module('blocTime')
    .factory('Tasks', ['$firebaseArray', Tasks]);
})();
