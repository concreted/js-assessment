if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
          return i;
        }
      }
      return -1;
    },

    sum : function(arr) {
      return arr.reduce(function(acc, item) {
        return acc + item;
      });
    },

    remove : function(arr, item) {
      var result = [];
      arr.map(function(current) {
        if (current !== item) {
          result.push(current);
        }
      });
      return result;
    },

    removeWithoutCopy : function(arr, item) {
      var index = this.indexOf(arr, item);
      while (index >= 0) {
        arr.splice(index, 1);
        index = this.indexOf(arr, item);
      }
      return arr;
    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.pop();
      return arr;
    },

    prepend : function(arr, item) {
      arr.unshift(item);
      return arr;
    },

    curtail : function(arr) {

    },

    concat : function(arr1, arr2) {

    },

    insert : function(arr, item, index) {

    },

    count : function(arr, item) {

    },

    duplicates : function(arr) {

    },

    square : function(arr) {

    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
