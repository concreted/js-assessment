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
      arr.shift();
      return arr;
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count : function(arr, item) {
      return arr.reduce(function(counter, current) {
        return current === item ? counter + 1 : counter;
      }, 0);
    },

    duplicates : function(arr) {
      var counts = _.reduce(arr, function(d, current) {
        d[current] = d[current] ? d[current] + 1 : 1;
        return d;
      }, {});
      var results = [];
      _.each(counts, function(value, key) {
        if (value > 1) {
          results.push(key);
        }
      });
      return results;
    },

    square : function(arr) {
      return arr.map(function(value) {
        return value * value;
      });
    },

    findAllOccurrences : function(arr, target) {
      return arr.reduce(function(occurrences, value, index) {
        if (value === target) {
          occurrences.push(index);
        }
        return occurrences;
      }, [])
    }
  };
});
