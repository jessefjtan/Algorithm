//插入排序
function insertionSort(array) {
    for (var i = 1; i < array.length; i++) {
        var key = array[i];
        var j = i - 1;
        while ( array[j] > key) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
    }
    return array;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(insertionSort(arr));

//二分法插入排序
function binaryInsertionSort(array) {
    for (var i = 1; i < array.length; i++) {
        var key = array[i], left = 0, right = i - 1;
        while (left <= right) {
            var middle = parseInt((left + right) / 2);
            if (key < array[middle]) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        }
        for (var j = i - 1; j >= left; j--) {
            array[j + 1] = array[j];
        }
        array[left] = key;
    }
    return array;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(binaryInsertionSort(arr));
