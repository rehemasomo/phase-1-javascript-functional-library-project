const myEach = (collection, callback) => {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      const keys = Object.keys(collection);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        callback(collection[key], key, collection);
      }
    }
  };
  
  const myMap = (collection, callback) => {
    const result = [];
    myEach(collection, (element, index, collection) => {
      result.push(callback(element, index, collection));
    });
    return result;
  };
  
  const myReduce = (collection, callback, acc) => {
    let startIdx = 0;
    if (!acc) {
      acc = collection[0];
      startIdx = 1;
    }
    for (let i = startIdx; i < collection.length; i++) {
      acc = callback(acc, collection[i], collection);
    }
    return acc;
  };
  
  const myFind = (collection, predicate) => {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        return collection[i];
      }
    }
  };
  
  const myFilter = (collection, predicate) => {
    const result = [];
    myEach(collection, (element) => {
      if (predicate(element)) {
        result.push(element);
      }
    });
    return result;
  };
  
  const mySize = (collection) => {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  };
  
  const myKeys = (object) => Object.keys(object);
  
  const myValues = (object) => Object.values(object);
  
  module.exports = {
    myEach,
    myMap,
    myReduce,
    myFind,
    myFilter,
    mySize,
    myKeys,
    myValues
  };
  