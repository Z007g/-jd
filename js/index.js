// banner图
var box = document.querySelector('.banner-top');
var ul = document.querySelector('.banner-img');
var img = document.querySelector('.banner-img img');
var btns = document.querySelectorAll('.banner-btn');
var dot = document.querySelector('.dots');
var dots = document.querySelectorAll('.dots i');
var imgWidth = img.offsetWidth;
var count = dots.length;
var index = 0;
var isAnimation;

// 移动图片
function move(item) {
    if(!item) {
        return;
    }
    var tar = ul.offsetLeft + item;
    function go() {
        var cur = ul.offsetLeft;
        if(cur != tar) {
            isAnimation = true;
            ul.style.left = tar + 'px';
            setTimeout(go, 30);
        }else {
            isAnimation = false;
            if(cur < -imgWidth*(count-1)) {
                ul.style.left = 0 + 'px';
            }else if(cur > 0) {
                ul.style.left = -imgWidth*(count-1) + 'px';
            }
        }
    }
    go();
}

// 圆点切换,点击圆点切换图片
function changeDots() {
    for(var i = 0; i < count; i++) {
        if(dots[i].className) {
            dots[i].className = '';
        }
        dots[index].className = 'active';
    }
}
function clickDots() {
    dot.onclick = function(event) {
        var event = event || window.event;
        if(event.target.tagName === 'I') {
            if(isAnimation) {
                return;
            }
            var n = event.target.getAttribute('index') - index;
            index = event.target.getAttribute('index');
            changeDots();
            move(-n * imgWidth);
        }
    }
}
clickDots();

btns[0].onclick = function() {
    if(isAnimation) {
        return;
    }
    index--;
    if(index == -1) {
        index = count - 1;
    }
    changeDots();
    move(imgWidth);
}
btns[1].onclick = function() {
    if(isAnimation) {
        return;
    }
    index++;
    if(index == count) {
        index = 0;
    }
    changeDots();
    move(-imgWidth);
}
function play() {
    timer = setInterval(function() {
        btns[1].onclick();
    }, 3000);
}
function stop() {
    clearInterval(timer);
}
box.onmouseover = stop;
box.onmouseout = play;
play();

// 右侧
var lis = document.querySelectorAll('.lis');
var details = document.querySelectorAll('.guild-mid div');
for(var i = 0; i < lis.length; i++) {
	lis[i].index = i;
	lis[i].onmouseover = function() {
		for(var j = 0; j < lis.length; j++) {
			lis[j].className = '';
			details[j].className = '';
		}
		this.className = 'lis-active';
		details[this.index].className = 'show'
	}
}

var guildLists = document.querySelectorAll('.list-one li');
var guildBot = document.querySelector('.guild-bot');
var guildNone = document.querySelector('.guild-none');
for(var k = 0; k < guildLists.length; k++) {
	guildLists[k].onmouseover = function() {
		guildBot.style.display = 'none';
		guildNone.style.display = 'block';
	}
}

var oLis = document.querySelectorAll('.list2 a');
var oLists = document.querySelectorAll('.list-one-con');
for(var m = 0; m < oLis.length; m++) {
    oLis[m].index = m;
    oLis[m].onmouseover = function() {
        for(var n = 0; n < oLis.length; n++) {
            oLis[n].className = ''; 
            oLists[n].className = 'list-one-con';
        }
        this.className = 'aHover'; 
        oLists[this.index].className = 'list-one-con-block';
    }
}

var as = document.querySelectorAll('.list-one-con-title a');
var oDivs = document.querySelectorAll('.lists');
for(var x = 0; x < as.length; x++) {
    as[x].index = x;
    as[x].onmouseover = function() {
        for(var y = 0; y < as.length; y++) {
            as[y].className = ''; 
            oDivs[y].className = 'lists';
        }
        this.className = 'isActive';
        oDivs[this.index].className = 'isSelection';  
    }
}

// 秒杀倒计时
var hour = document.querySelector('.hour');
var minute = document.querySelector('.minute');
var second = document.querySelector('.second');
var end = document.querySelector('.count-down');
function fn(){
    var timeNow = new Date();
    var timeFuture = new Date('2017/11/11 00:00:00');
    var timeSum = timeFuture.getTime() - timeNow.getTime();
    if (timeSum > 0){
        var h = parseInt(timeSum/1000/60/60%24);
        var m = parseInt(timeSum/1000/60%60);
        var s = parseInt(timeSum/1000%60);
        h = h < 10 ? '0' + h : h;
        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;
        hour.innerHTML = h;
        minute.innerHTML = m;
        second.innerHTML = s;
    }else {
        end.innerHTML = '结束啦';
    }
}
fn();
setInterval(fn,1000);

// 秒杀轮播
var sbtns = document.querySelectorAll('.seckill-btn');
var sul = document.querySelector('.seckill');
var sLis = document.querySelectorAll('.seckill-con');
var scount = 3;
var isanimat;

function smove(sitem) {
    if(!sitem) {
        return;
    }
    var star = sul.offsetLeft + sitem; 
    var speed = sitem/9;
    function sgo() {
        var scur = sul.offsetLeft;
        if(scur != star) {
            isanimat = true;
            sul.style.left = sul.offsetLeft + speed + 'px';
            setTimeout(sgo, 30);
        }else {
            isanimat = false;
            if(scur < -999 * scount) {
                sul.style.left = -999 + 'px';
            }else if(scur > -999) {
                sul.style.left = -999 * scount + 'px';
            }
        }
    }
    sgo();
}
sbtns[0].onclick = function() {
    if(isanimat) {
        return;
    }
    smove(999);
}
sbtns[1].onclick = function() {
    if(isanimat) {
        return;
    }
    smove(-999);
}
// 秒杀右侧
var plis = document.querySelectorAll('.merries');
var pdots = document.querySelectorAll('.p-dots i');

function ptag(item) {
    for(var p = 0; p < plis.length; p++) {
        plis[p].className = 'merries';
        pdots[p].className = '';
    }
    plis[item].className = 'isblock';
    pdots[item].className = 'p-active';
}
for(var p = 0; p < plis.length; p++) {
    pdots[p].index = p;
    pdots[p].onmouseover = function() {
        ptag(this.index);
    }
}

// 右侧导航
// var ems = document.querySelectorAll('.subnav em');
// var divs = document.querySelectorAll('.subnav div');
// timer = null;
// function leftMove(tar) {
//     var speed = 0;
//     timer = setInterval(function() {
//         for(var r = 0; r < ems.length; r++) {
//             var x = ems[r].offsetLeft;
//             speed = (tar - x) / 10;
//             speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
//             if(x == tar) {
//                 clearInterval(timer);
//             }else {
//                 ems[r].style.left = x + speed + 'px';
//             }
//         }
//     },100)
// }
// for(var r = 0; r < ems.length; r++) {
//     divs[r].onmouseover = function() {
//         leftMove(-60);
//     }
// }