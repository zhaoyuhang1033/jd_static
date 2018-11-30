var key = document.getElementById('key');
var randomHotWorlds = ['京东超市每满199减100',
  '自动铅笔',
  '电风扇',
  '空调',
  '5折秒杀',
  '300减160',
];
var len = randomHotWorlds.length;
var randomIDX = Math.floor(Math.random()*len);
key.value = randomHotWorlds[randomIDX];
key.style.color = '#999';
setInterval(function (){
  var randomIDX = Math.floor(Math.random()*len);
  key.value = randomHotWorlds[randomIDX];
},5000)
key.onfocus = function (){
  if(randomHotWorlds.indexOf(this.value) != -1) {
    this.value = '';
  }else {

  }
};
key.onblur = function (){
  if(this.value == ''){
    randomIDX = Math.floor(Math.random()*len);
    this.value = randomHotWorlds[randomIDX];
  } else {

  }
};
  
