let arr = [],
  a = 1,
  b = 10,
  value = 0;

function range(a, b) {
  while (a <= b) {
    arr.push(a);
    a++;
  }
}

range(a, b);

function sum(arr) {
  for (let array of arr) {
    value = value + array;
  }
}

sum(arr);

console.log(arr);
console.log(value);

