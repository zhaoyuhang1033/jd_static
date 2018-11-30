//倒计时功能
var cdHour = document.getElementsByClassName('cd_hour')[0];
var cdMin = document.getElementsByClassName('cd_min')[0];
var cdSec = document.getElementsByClassName('cd_sec')[0];
function countTime() {
  var date = new Date();
  var now = date.getTime();
  var endtime = new Date('2018-6-10 23:23:23');
  var end = endtime.getTime();
  var leftTime = end - now;

if (leftTime > 0) {
  h = Math.floor(leftTime / 1000 / 60 / 60 % 24),
  m = Math.floor(leftTime / 1000 / 60 % 60),
  s = Math.floor(leftTime / 1000 % 60);
  if(h < 10) {
    h = '0' + h;
  }
  if(m < 10) {
    m = '0' + m;
  }
  if(s < 10) {
    s = '0' + s;
  }
}
cdHour.innerHTML = h;
cdMin.innerHTML = m;
cdSec.innerHTML = s;
setTimeout(countTime,1000);   
}
countTime();