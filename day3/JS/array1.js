// 배열 사용
let animal = []; //빈 배열 생성
console.log(animal);
console.log(animal.length + "개");

//입력(저장)
animal[0] = 'cow';
animal[1] = 'pig';
animal[2] = 'horse';
animal[3] = 'cat';
console.log(animal);

//특정 요소(값)를 조회(검색)
console.log(animal[1]);

//수정
animal[2] = 'dog';

//삭제
delete animal[1];

//전체 요소(값) 조회(목록)
//0번 인덱스부터 시작하고 배열이 길이 미만일 것
for(i = 0; i < animal.length; i++){
  document.write(animal[i] + " ");
}

document.write("<br");

//for in 문
for(let i in animal){
  document.write(animal[i]);
}
 

//Array 객체를 사용한 배열
let num = new Array(); //빈 배열 생성
console.log(animal);
console.log(animal.length + "개");
