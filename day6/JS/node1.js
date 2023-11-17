
function myFunction(){
  //p태그 생성
  //<li>Milk</li>
  //부모요소.appenChild(자식요소)
  let newLi = document.createElement("li");
  let newText = document.createTextNode("Tea");
  newLi.appendChild(newText);

  //ul에 연결
  let ul = document.getElementById("myList");
  ul.appendChild(newLi);
}