var quicksort = function(a,left,right){
    if(left>right){ //一定要有这个判断，因为有递归left和i-1，若没有这个判断条件，该函数会进入无限死错位递归
        return;
    }
    var tmp;
    var i=left,
        j=right,
        standard=a[left]; //基准总是取序列开头的元素

    while(i!=j){ //该while的功能为每一趟进行的多次比较和交换最终找到位置k。当i==j时意味着找到k位置了
        while(a[j]>=standard&&i<j){j--} //只要大于等于基准数，j指针向左移动直到小于基准数才不进入该while。i<j的限制条件也是很重要，不然一直在i!=j这个循环里，j也会越界
        while(a[i]<=standard&&i<j){i++} //只要小于等于基准数，i指针向右移动直到大于基准数才不进入该while。等于条件也是必要的，举例[4,7,6,4,3]验证一下是两个4交换
        if(i<j){  //如果i==j跳出外层while
            tmp=a[i];
            a[i]=a[j];
            a[j]=tmp;
        }
    }

    a[left]=a[i];//交换基准数和k位置上的数
    a[i]=standard;

    quicksort(a,left,i-1);
    quicksort(a,i+1,right);
};

var array = getRandomArray(1, 100, 50);
console.time("快排1");
quicksort(array,0,array.length-1);
console.log(array);
console.timeEnd("快排1");

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
