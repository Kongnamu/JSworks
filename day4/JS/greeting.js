//2초 간격으로 인사말 변경
//콜백(반복) 함수 기능 사용 : 자기가 부르는 재귀적 용법
//배열의 인덱스가 1증가하면 인사말 변경됨
window.onload = function(){
let message = ["오늘도 좋은 하루!!", "행운을 빌어요", "잘 지내니?"]
let msgIdx = 0;

myGreeting();

function myGreeting(){
let msg = document.getElementById("demo")
msg.innerHTML = message[msgIdx];
msg.style.color="blue";

msgIdx++; // 1증가
if(msgIdx == message.length){ //인덱스 번호 제한
  msgIdx = 0;
}
setTimeout(myGreeting, 2000) // 자기자신(myGreeting()) 호출
}
}