// return이 있는 함수

//제곱수를 계산하는 함수
//어떤수를 입력받아 제곱하는 함수
/* //매개변수 1개
function square(x){
  let num = x * x;
  return num; // 변수 리턴
} */

let square = function(x){
  return x * x;
}

// //매개변수 2개
// function add(x,y){
//   return x + y; // 구문 리턴
// }

let add = function(x, y){
  return x + y;
}

let result = add(10,11);
console.log(result);

console.log(square(5));
console.log(add(4, 5));
