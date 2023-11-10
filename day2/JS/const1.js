// 상수 (Constant Variable)

//변수 선언
let current_year = 2023;
current_year = 2022;

console.log(current_year);

//상수: 재할당 할 수 없음
const MONTH = 12;
// MONTH = 13;

console.log("1년은 " + MONTH + "달이 있습니다.");

//원의 넓이 계산하기
// circleArea = PI * radius * radius
const PI = 3.14;
let radius = 5;
let circleArea;

//연산
circleArea = PI * radius * radius;

//출력
// document.write("원의 넓이: " + circleArea);

//공의 속도를 변환하는 프로그램 작성
//km -> mile, 변환상수 = 1.609, 1mile = 1.609km
//mile = km / 1.609
let kph, mph;
const RATE_KPH_MPH = 1.609;

//입력
kph = prompt("공의 속도를 입력하세요(km/h)", "100");
kph = parseFloat(kph); // 문자를 실수로 변환
//연산
mph = kph / RATE_KPH_MPH;
// mph = mpg * 1.609;

//출력: 자리수 설정함수 - toFixed(자리수)
document.write(kph + "km는" +  mph.toFixed(2) + "mile 입니다.");