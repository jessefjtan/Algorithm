//JS简化版HashTable实现
function HashTable() {
    var size = 0;
    var entry = new Object();

    // 增加键值对
    this.put = function(key, value) {
        // 已存在key则更新value，否则新增
        if (!this.containsKey(key)) {
            ++size;
        }
        entry[key] = value;
    };

    // 获取键对应的值
    this.get = function(key) {
        return (this.containsKey(key) ? entry[key] : null);
    };

    // 删除指定键对应的值
    this.remove = function(key) {
        if (this.containsKey(key) && (delete entry[key])) {
            --size;
        }
    };

    // 判断一个key是否存在
    this.containsKey = function(key) {
        return (key in entry);
    };

    // 判断一个value是否存在
    this.containsValue = function (value) {
        for (var key in entry) {
            if (entry[key] == value) {
                return true;
            }
        }
        return false;
    };

    // 返回哈希表的所有key
    this.getKeys = function() {
        var keys = new Array();
        for (var key in entry) {
            keys.push(key);
        }
        return keys;
    };

    // 返回哈希表的所有value
    this.getValues = function() {
        var values = new Array();
        for (var key in entry) {
            values.push(entry[key]);
        }
        return values;
    };

    // 返回哈希表键值对数量
    this.getSize = function() {
        return size;
    };

    // 清空哈希表
    this.clear = function() {
        size = 0;
        entry = new Object();
    };
}


/*--- 以下为测试数据 ---*/

// 初始化一个hashTable对象
var hashtable = new HashTable();

// 打印hashTable的所有key
console.log(hashtable.getKeys());

// 打印hashTable的所有key
hashtable.put("name", "Edward");
hashtable.put("age", 5);

// 获取键值对数量
console.log(hashtable.getSize());
// 打印hashTable的所有key
console.log(hashtable.getKeys());

// 获取指定key的值
console.log(hashtable.get("name"));
console.log(hashtable.get("email"));

hashtable.clear();
// 获取键值对数量
console.log(hashtable.getSize());
// 打印hashTable的所有key
console.log(hashtable.getKeys());
