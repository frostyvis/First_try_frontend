let obj = {here:{is: "an"}, object: 2};

function deepEqual (obj1, obj2){
    if (obj1 === obj2)
    return true;

    if (typeof obj1 !== "object" || typeof obj2 !== "object")
    return false;

    let objA = Object.keys(obj1);
    let objB = Object.keys(obj2);

    let res = objB.map(function (key){
        if (!deepEqual(obj1[key],obj2[key]))
        return false;
    }).filter(x => x === false).length;
    return !res && objA.length === objB.length;
}

console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));