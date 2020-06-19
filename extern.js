// join.html
function idDuplicateVerify(){
  var temp = prompt("회원가입 할 아이디를 입력해주세요");
  alert("사용가능한 아이디 입니다. ");
  document.getElementById("user_id_temp").value = temp;
}

// font - order0.html
var orderFont = 0;
function orderFontLarge(button){
  var tab = document.getElementById("mytable")
  var btn = document.getElementById(button);
  if (orderFont == 0){
    tab.style.fontSize = "20pt";
    btn.value = "글씨 원래대로";
    orderFont = 1;
  }
  else {
    tab.style.fontSize = "12pt";
    btn.value = "글씨 크게";
    orderFont = 0;
  }
}

// calculate - order0.html
var fruit = new Array("fruit11", "fruit12", "fruit13", "fruit14", "fruit15", "fruit16", "fruit17", "fruit18"
                      , "fruit21", "fruit22", "fruit23", "fruit24", "fruit25", "fruit26", "fruit27", "fruit28"
                      , "fruit31", "fruit32", "fruit33", "fruit34", "fruit35", "fruit36", "fruit37"
                      , "fruit41", "fruit42", "fruit43", "fruit44", "fruit45", "fruit46", "fruit47", "fruit48", "fruit49");

var price = new Array(9480, 12000, 12000, 9900, 28900, 7980, 12900, 15000
                      , 30000, 2890, 7980, 10000, 15900, 8980, 12900, 5480
                      , 2300, 4900, 7980, 5800, 5900, 1750, 3500
                      , 6480, 5480, 4180, 1990, 6780, 11900, 8800, 29000, 10000);

var shipping = [3000, 2500, 2500, 4000];

function orderFunction(num, start, ship, name){
  var sum = 0;
  var n;
  for(i = start;i < start + num;i++){
    n = document.getElementById(fruit[i]).value;
    sum = sum + price[i] * n;
  }
  sum += shipping[ship];
  alert("[" + name + "] 총 " + sum + "원(배송비 포함)의 주문이 완료되었습니다");
}
