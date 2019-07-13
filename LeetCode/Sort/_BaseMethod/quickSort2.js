var quickSort2 = function(arr) {
    if (arr.length <= 1) { return arr; }
    var index = Math.floor(arr.length / 2);
    var standard = arr.splice(index, 1)[0];
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < standard) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    // return quickSort2(left).concat([pivot], quickSort2(right));
    return [...quickSort2(left), standard, ...quickSort2(right)]
};

var array2 = getRandomArray(1, 100, 50);
console.log(array2);
console.time("快排2");
console.log(quickSort2(array2));
console.timeEnd("快排2");

function getRandom(min,max) {
    return Math.floor(min + (max - min +1 ) * Math.random());
}
function getRandomArray(min, max, count) {
    var aTmp = [];
    var k = count;
    while (k--) {
        aTmp.push(getRandom(min,max));
    }
    return aTmp;
}
