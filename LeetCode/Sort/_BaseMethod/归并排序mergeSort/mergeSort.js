function mergeSort(arr) {
    var len = arr.length;
    if(len > 1) {
        var index = Math.floor(len / 2);
        var left = arr.slice(0,index); //得到下标从0~index-1的数组
        var right = arr.slice(index);  //得到下标从index开始到末尾的数组
        return merge(mergeSort(left) , mergeSort(right));  //里面采用递归
    }else {
        return arr;
    }
}

function merge(left , right) {   //该函数与快排类似，但是仔细发现，每次left或者right都是要shift掉第一个元素，表示left或者right是会变化的，最后arr.concat，因为不知道left或者right其中一个哪个剩下元素，所以要将剩下的元素给加上
    var arr = [];
    while(left.length && right.length) {
        if(left[0] < right[0]) {
            arr.push(left.shift());
        }else {
            arr.push(right.shift())
        }
    }
    return arr.concat(left , right);
}

//迭代实现：解决栈溢出
function mergeSort2(a) {
    if (a.length === 1) {
        return a;
    }

    var work = [];
    for (var i = 0, len = a.length; i < len; i++)
        work.push([a[i]]);

    work.push([]); // 如果数组长度为奇数

    for ( var lim = len; lim > 1; lim = ~~((lim + 1) / 2) ) {
        for ( var j = 0, k = 0; k < lim; j++, k += 2 ) {
            work[j] = merge(work[k], work[k + 1]);
        }
        work[j] = []; // 如果数组长度为奇数
    }

    return work[0];
}

console.log( mergeSort([34,5,23,12,11,4,2,7]) );
// console.log( mergeSort2([34,5,23,12,11,4,2,7]) );


