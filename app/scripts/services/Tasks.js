(function() {
  function Tasks($firebaseArray) {
    var ref = firebase.database().ref().child("tasks");

    // download tasks into a synchronized array
    var tasks = $firebaseArray(ref);

    return {
      all: tasks,
      // remaining logic for tasks
      createTasks: function(content){
        tasks.$add({description: content});
      }
    };
  }

  angular
    .module('blocTime')
    .factory('Tasks', ['$firebaseArray', Tasks]);
})();
