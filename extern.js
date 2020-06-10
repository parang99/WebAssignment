// order0.html
var fruit1 = new Array("fruit11", "fruit12", "fruit13", "fruit14", "fruit15", "fruit16", "fruit17", "fruit18");
var fruit2 = new Array("fruit21", "fruit22", "fruit23", "fruit24", "fruit25", "fruit26", "fruit27", "fruit28");
var fruit3 = new Array("fruit31", "fruit32", "fruit33", "fruit34", "fruit35", "fruit36", "fruit37");
var fruit4 = new Array("fruit41", "fruit42", "fruit43", "fruit44", "fruit45", "fruit46", "fruit47", "fruit48", "fruit49");

var price1 = new Array(9480, 12000, 12000, 9900, 28900, 7980, 12900, 15000);
var price2 = new Array(30000, 2890, 7980, 10000, 15900, 8980, 12900, 5480);
var price3 = new Array(2300, 4900, 7980, 5800, 5900, 1750, 3500);
var price4 = new Array(6480, 5480, 4180, 1990, 6780, 11900, 8800, 29000, 10000);

var shipping = [3000, 2500, 2500, 4000];

// order1.html
function order1Function(){
  var sum = 0;
  var n;
  for(i = 0;i < 8;i++){
    n = document.getElementById(fruit1[i]).value;
    sum = sum + price1[i] * n;
  }
  sum += shipping[0];
  alert("[눈송과수원] 총 " + sum + "원(배송비 포함)의 주문이 완료되었습니다");
}
// order2.html
function order2Function(){
  var sum = 0;
  var n;
  for(i = 0;i < 8;i++){
    n = document.getElementById(fruit2[i]).value;
    sum = sum + price2[i] * n;
  }
  sum += shipping[1];
  alert("[동네과일트럭] 총 " + sum + "원(배송비 포함)의 주문이 완료되었습니다");
}
// order3.html
function order3Function(){
  var sum = 0;
  var n;
  for(i = 0;i < 7;i++){
    n = document.getElementById(fruit3[i]).value;
    sum = sum + price3[i] * n;
  }
  sum += shipping[2];
  alert("[숙명건조공장] 총 " + sum + "원(배송비 포함)의 주문이 완료되었습니다");
}
// order4.html
function order4Function(){
  var sum = 0;
  var n;
  for(i = 0;i < 9;i++){
    n = document.getElementById(fruit4[i]).value;
    sum = sum + price4[i] * n;
  }
  sum += shipping[3];
  alert("[세계과일수입] 총 " + sum + "원(배송비 포함)의 주문이 완료되었습니다");
}
