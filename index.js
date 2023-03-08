
function fn(...cat) {
    if (!cat.every((apple) => Number.isNumber(apple)))
      throw "All arguments must be numbers.";
    return cat.reduce((apple, banana) => apple + banana);
  }
  
  fn(1, 2, 3); //> 6
  fn(10, "Bear", 20); //> error All arguments must be numbers.
  console.log('test')