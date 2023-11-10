//나이 계산 프로그램

function calcAge(){
//조건 : 현재 년도는 상수로 선언할 것
// 나이 = 현재 년도 -
const CURRENT_YEAR = 2023;
    let age ,bYear;
    bYear = prompt("태어난 년도를 입력하세요(YYYY)", "1992");

      if(bYear == null){
       document.getElementById("print").innerHTML = "입력이 취소되었습니다.";
      }else if(isNaN (bYear)){ //문자를 입력했을 경우
       document.getElementById("print").innerHTML = "숫자를 입력해주세요";
      }else{
        bYear = parseInt(bYear);
        // 계산
        age = CURRENT_YEAR - bYear
      document.getElementById("print").innerHTML = CURRENT_YEAR + " 현재" + "<br>" + bYear + 
                        "에 태어난 사람의 나이는" + age + " 입니다.";
      }
    }
  
      
    




    // //입력
    // if(bYear == null){
    //   document.write("입력이 취소되었습니다.")
    // }else if(isNaN (bYear)){ // 문자를 입력했을 경우
    //   document.write("숫자를 입력해주세요");
    // }else{
    //   bYear = parseInt(bYear); // 문자를 숫자로 바꿈

    //   //계산
    //   age = CURRENT_YEAR - bYear
    //   document.write(CURRENT_YEAR + " 현재" + "<br>" + bYear + "에 태어난 사람의 나이는" 
    //           + age + " 입니다.");
    // }
  