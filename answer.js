// own solution
var number=function(array){
  var result = []
  if(array == []){
    result = []
  }
  else{
    var newArr =[]
    for(var i=0;i<array.length;i+=1){
      newArr.push(`${i+1}: ${array[i]}`)
      result = newArr
    }
    
  }
  return result
}

// other solution 1
var number = function(array) {
  return array.map(function (line, index) {
    return (index + 1) + ": " + line;
  });
}

// other solution 2
let number = (a) => a.map((v, i) => `${i + 1}: ${v}`)
