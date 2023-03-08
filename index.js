function fahunction(...cow) {
    if (!cow.every((ant) => Number.isNumber(ant)))
      throw "All arguments must be numbers.";
    return cow.reduce((ant, bear) => ant + bear);
  }
  
  fn(1, 2, 3); //> 6
  fn(10, "Bear", 20); //> error All arguments must be numbers.