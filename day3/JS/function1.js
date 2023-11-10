// function1.js
// 함수 정의
// 매개 변수가 없는 함수
function sayHello(){
  document.write("안녕하세요~<br>");
}

//매개 변수가 있는 함수(매개변수에 자료형이 생략됨)
function sayHello2(name){
  document.write("안녕하세요~" + name + "<br>");
}

//구구단을 출력하는 함수를 정의
function gugudan(dan){
  for(i = 1; i <= 9; i++){
    document.write(dan + "*" + i + "=" + (dan*i) + "<br>");
  }
}

// 함수 사용 - 호출
sayHello();
sayHello2("소희");
sayHello2("정수");
sayHello2("Ziny");

// 구구단 호출
gugudan(4);