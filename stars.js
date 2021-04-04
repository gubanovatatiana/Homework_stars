function one() {
    var res = "";
    for (var i = 0; i < 7; i++) {
        for (var j = 0; j < 7; j++) {
            res += "* ";
        }
        res += "\n";
    }
    return res;
}

console.log(one());


function two() {
  var res = "";
  for (var i = 0; i < 7; i++) {
    for (var j = 0; j < 7; j++) {
      if (i === 0 || i === 6) {
        res += "*";
      } else if (j === 0 || j === 6) {
        res += "*";
      } else {
        res += " ";
      }
    }
    res += "\n";
  }
  return res;
}

console.log(two());


function three() {
  var res = "";
  for (var i = 0; i < 7; i++) {
    for (var j = 0; j < 7; j++) {
      if (i === 0){
        res += "*";
      } else if (j === 0) {
        res += "*";
      } else if (j === 6 - i) {
        res += "*";
      } else {
        res += " ";
      }
    }
    res += "\n";
  }
  return res;
}

console.log(three());


function four() {
  var res = "";
  for (var i = 0; i < 7; i++) {
    for (var j = 0; j < 7; j++) {
      if (i === 6){
        res += "*";
      } else if (i === 0 + j) {
        res += "*";
      } else if (j === 0) {
        res += "*";
      } else {
        res += " ";
      }
    }
    res += "\n";
  }
  return res;
}

console.log(four());


function five() {
  var res = "";
  for (var i = 0; i < 7; i++) {
    for (var j = 0; j < 7; j++) {
      if (i === 6){
        res += "*";
      } else if (j === 6) {
        res += "*";
      } else if (j === 6 - i) {
        res += "*";
      } else {
        res += " ";
      }
    }
    res += "\n";
  }
  return res;
}

console.log(five());


function six() {
  var res = "";
  for (var i = 0; i < 7; i++) {
    for (var j = 0; j < 7; j++) {
      if (i === 0){
        res += "*";
      } else if (i === 0 + j) {
        res += "*";
      } else if (j === 6) {
        res += "*";
      }  else {
        res += " ";
      }
    }
    res += "\n";
  }
  return res;
}

console.log(six());


function seven() {
  var res = "";
  for (var i = 0; i < 7; i++) {
    for (var j = 0; j < 7; j++) {
      if (i === j){
        res += "*";
      } else if (j === 6 - i) {
        res += "*";
      }  else {
        res += " ";
      }
    }
    res += "\n";
  }
  return res;
}

console.log(seven());


function eight() {
  var res = "";
  for (var i = 0; i < 7; i++) {
    for (var j = 0; j < 7; j++) {
      if (i === 0){
        res += "*";
      } else if (j === i && i < 4) {
        res += "*";
      } else if (j === 6 - i && i < 4) {
        res += "*";
      }  else {
        res += " ";
      }
    }
    res += "\n";
  }
  return res;
}

console.log(eight());


function nine() {
  var res = "";
  for (var i = 0; i < 7; i++) {
    for (var j = 0; j < 7; j++) {
      if (i === 6){
        res += "*";
      } else if (j === i && i > 2) {
        res += "*";
      } else if (j === 6 - i && i > 2) {
        res += "*";
      }  else {
        res += " ";
      }
    }
    res += "\n";
  }
  return res;
}

console.log(nine());
