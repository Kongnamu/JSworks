//시계 생성

setInterval(myWatch, 1000);

function myWatch(){
  const now = new Date(); //날짜와 시간 함께 생성
  let time = now.toLocaleTimeString();
  console.log(time);

  let watch = document.getElementById("show")
  // watch.innerHTML = time;
  if(now.getHours() <= 12){
    watch.innerHTML = time.r
  }
  watch.style.color = "blue";
}

