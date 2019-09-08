;(function () {
    //测试数据
    var barrageArray = [
        {
            url: '用户头像',
            text: '秋天爱美丽',
            level: 10
        },
        {
            url: '用户头像',
            text: '今天很开心啊',
            level: 10
        },
        {
            url: '用户头像',
            text: 'winter has come',
            level: 10
        },
        {
            url: '',
            text: '土耳其现在形势',
            level: 10
        },
        {
            url: '',
            text: '没事早点回家吃饭啊',
            level: 10
        },
        {
            url: '',
            text: '这主角真实醉了，不会回啊',
            level: 10
        },
        {
            url: '',
            text: '背景音乐真好听啊',
            level: 10
        },
        {
            url: '',
            text: '背景音乐是***',
            level: 10
        },
        {
            url: '',
            text: '经费在燃烧啊',
            level: 10

        },
        {
            url: '',
            text: '国产良心剧',
            level: 10
        }
    ];

    var barrageColorArray = [
        '#0099CC', '#85637d', '#009966', '#FFFF66', '#9933FF', '#FFFF99', '#CCCCFF', '#CC9933', '#FFFF66'
    ];

    var barrageTipWidth = 50; //提示语的长度

    var barrageBoxWrap = document.querySelector('.barrage-container-wrap');

    var barrageBox = document.querySelector('.barrage-container');

    var inputBox = document.querySelector('.input');

    var sendBtn = document.querySelector('.send-btn');


    //容器的宽高度
    var barrageWidth = ~~window.getComputedStyle(barrageBoxWrap).width.replace('px', '');
    var barrageHeight = ~~window.getComputedStyle(barrageBoxWrap).height.replace('px', '');

    //发送

    function sendMsg() {
        var inputValue = inputBox.value;
        inputValue.replace(/\ +/g, "");
        if (inputValue.length <= 0) {
            alert('请输入');
            return false;
        }
        //生成弹幕
        createBarrage(inputValue, true);
        inputBox.value = '';
    }


    //创建弹幕

    function createBarrage(msg, isSendMsg) {

        var divNode = document.createElement('div');
        var spanNode = document.createElement('span');

        divNode.innerHTML = msg;
        divNode.classList.add('barrage-item');
        barrageBox.appendChild(divNode);

        spanNode.innerHTML = '举报';
        spanNode.classList.add('barrage-tip');
        divNode.appendChild(spanNode);

        barrageOffsetLeft = getRandom(barrageWidth, barrageWidth * 2);

        barrageOffsetLeft = isSendMsg ? barrageWidth : barrageOffsetLeft

        barrageOffsetTop = getRandom(10, barrageHeight - 10);

        barrageColor = barrageColorArray[Math.floor(Math.random() * (barrageColorArray.length))];


        //执行初始化滚动
        initBarrage.call(divNode, {
            left: barrageOffsetLeft,
            top: barrageOffsetTop,
            color: barrageColor
        });

    }


    //初始化弹幕移动(速度，延迟)

    function initBarrage(obj) {
        //初始化

        obj.top = obj.top || 0;

        obj.class = obj.color || '#fff';

        this.style.left = obj.left + 'px';

        this.style.top = obj.top + 'px';

        this.style.color = obj.color;

        //添加属性
        this.distance = 0;
        this.width = ~~window.getComputedStyle(this).width.replace('px', '');
        this.offsetLeft = obj.left;
        this.timer = null;

        //弹幕子节点
        var barrageChileNode = this.children[0];
        barrageChileNode.style.left = (this.width - barrageTipWidth) / 2 + 'px';

        //运动
        barrageAnimate(this);

        //停止
        this.onmouseenter = function () {

            barrageChileNode.style.display = 'block';

            cancelAnimationFrame(this.timer);

        };


        this.onmouseleave = function () {

            barrageChileNode.style.display = 'none';

            barrageAnimate(this);

        };

        //举报
        barrageChileNode.onclick = function () {
            alert('举报成功');
        }

    }


    //弹幕动画

    function barrageAnimate(obj) {

        move(obj);


        if (Math.abs(obj.distance) < obj.width + obj.offsetLeft) {

            obj.timer = requestAnimationFrame(function () {

                barrageAnimate(obj);

            });

        } else {
            cancelAnimationFrame(obj.timer);
            //删除节点
            obj.parentNode.removeChild(obj);

        }

    }


    //移动

    function move(obj) {

        obj.distance--;

        obj.style.transform = 'translateX(' + obj.distance + 'px)';

        obj.style.webkitTransform = 'translateX(' + obj.distance + 'px)';

    }


    //随机获取高度

    function getRandom(start, end) {

        return start + (Math.random() * (end - start));

    }


    /*******初始化事件**********/

    //系统数据

    barrageArray.forEach(function (item, index) {

        createBarrage(item.text, false);

    });


    //点击发送
    sendBtn.onclick = sendMsg;   //点击发送

    //回车
    inputBox.onkeydown = function (e) {
        e = e || window.event;
        if (e.keyCode == 13) {
            send();
        }
    }


})()



//兼容写法

(function () {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];

    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {

        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];

        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||    // Webkit中此取消方法的名字变了
            window[vendors[x] + 'CancelRequestAnimationFrame'];
    }


    if (!window.requestAnimationFrame) {

        window.requestAnimationFrame = function (callback, element) {

            var currTime = new Date().getTime();

            var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));

            var id = window.setTimeout(function () {

                callback(currTime + timeToCall);

            }, timeToCall);

            lastTime = currTime + timeToCall;

            return id;

        };

    }

    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
    }

}());