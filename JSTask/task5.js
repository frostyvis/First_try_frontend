let array = ["a", "b", "c"],
  arrayValue = [1, 2, 3, 4, 5];

function reverseArray() {
  array.reverse();
}

reverseArray();

function reverseArrayInPlace() {
 var arr = [];
  for (var i = arrayValue.length; i--;) {
    arr.push (arrayValue [i]);
  };
  arrayValue = arr;
}

reverseArrayInPlace();

console.log(array);
console.log(arrayValue);
