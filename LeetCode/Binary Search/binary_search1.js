// 非递归实现的js代码
function binary_search(arr, key) {
    var low = 0,
        high = arr.length - 1;

    while(low <= high) {
        var mid = parseInt(low + (high - low) /2 );
        if(key == arr[mid]) {
            return mid;
        } else if(key > arr[mid]) {
            low = mid + 1;
        } else {
            high = mid -1;
        }
    }
    return -1
}

// 递归实现的js代码
function binary_search2(arr, key, low, high) {
    if(undefined === low) {
        low = 0;
    }
    if(undefined === high) {
        high = arr.length - 1;
    }

    if(low > high) {
        return -1;
    }
    var mid = parseInt(low + (high - low) /2 );
    if(arr[mid] === key) {
        return mid;
    } else if(arr[mid] > key) {
        high = mid -1;
        return binary_search2(arr, key, low, high);
    } else if(arr[mid] < key) {
        low = mid + 1;
        return binary_search2(arr, key, low, high);
    }
}


var arr = [1,2,3,4,5,6,7,8,9,10,11,23,44,86,100,101,109,289];
var result = binary_search(arr, 86);
var result2 = binary_search2(arr, 86);
console.log(result, result2);
