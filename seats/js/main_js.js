//main_js.js
//입장객 수에 따른 행과 열, 줄수 계산
let customer, colNum, rowNum;

customer = 21; // 입장객 수
colNum = 5; // 행 수

//나머지의 유무에 따른 조건문
if(customer % colNum == 0){ // 나머지가 없는경우
  rowNum = customer / colNum; // 몫
}else{ //나머지가 있는 경우
  rowNum = parseInt(customer / colNum) + 1;
}

//좌석 번호 배치
document.write("<table>")
for(let i = 0; i < rowNum; i++){ //행(줄) 수
  document.write("<tr>")
  for(let j = 1; j <= colNum; j++){
    let seatNum = colNum * i + j;
    //좌석번호가 교객수보다 크면 break
    if(seatNum > customer)
      break;
    document.write("<td>좌석" + seatNum + "</td>");
  }
  document.write("</tr>");
}
document.write("</table>")
