// op.js
let num1 = 8, num2 = 5;
let result;

// result = num1 + num2;
// console.log(result);

// result = num1 - num2;
// console.log(result);

// result = num1 * num2;
// console.log(result);

// result = num1 / num2;
// console.log(result);

// result = num1 % num2;
// console.log(result);

//비교 연산
result = num1 > num2;
console.log(result);
console.log(typeof(result));

result = (num1 == num2);
console.log(result);

//논리 연산
// 논리 곱: and 둘다 참일때만 true

result = (num1 == num2) && (num1 >= num2);
console.log(result);

// 논리 합 : or
result = (num1 == num2) || (num1 >= num2);
console.log(result);

// 논리 부정
result = !(num1 == num2);
console.log(result);

//조건 연산자
result = (num1 < num2) ? 'T' : 'F';
console.log(result);

//짝수 홀수 판정
result = (num2 % 2 == 0) ? '짝수' : '홀수';
console.log(result);
// alert('판정 결과: 홀수')
// document.write('<h2>판정 결과: ' + result + '</h2>');
document.write("<span class = 'acess'>판정 결과: " 
        + result + '</span>');