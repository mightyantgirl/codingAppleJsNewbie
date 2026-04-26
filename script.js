console.log("연결됨");

document.querySelector(".black-bg").addEventListener("click", function () {
  this.classList.remove("show-modal");
});

document.querySelector(".lorem").addEventListener("scroll", function () {
  const scrollPercent =
    (this.scrollTop / (this.scrollHeight - this.clientHeight)) * 100;

  if (scrollPercent >= 99) {
    alert("약관에 동의하시겠습니까?");
  }
});

window.addEventListener("scroll", function () {
  var nav = document.querySelector(".nav");
  if (window.scrollY >= 100) {
    nav.querySelector(".logo").classList.add("scrolled");
    nav.classList.add("opacity");
  } else {
    nav.querySelector(".logo").classList.remove("scrolled");
    nav.classList.remove("opacity");
  }
});

var 지금사진 = 1;

$(".next").on("click", function () {
  $(".slide-container").css("transform", "translateX(-" + 지금사진 + "00vw)");
  지금사진 += 1;
});

$(".prev").on("click", function () {
  $(".slide-container").css("transform", "translateX(-" + 지금사진 + "00vw)");
  지금사진 -= 2;
});

// 슬라이드 버튼 클릭 시 슬라이드 컨테이너의 위치를 변경하여 해당 슬라이드를 보여줌
$(".slide-1").on("click", function () {
  $(".slide-container").css("transform", "translateX(0)");
});
$(".slide-2").on("click", function () {
  $(".slide-container").css("transform", "translateX(-100vw)");
});
$(".slide-3").on("click", function () {
  $(".slide-container").css("transform", "translateX(-200vw)");
});

$(".login").on("click", function () {
  $(".black-bg").toggle();
  $(".white-bg").toggle();
  $(".login").toggle();
});
$("#close").on("click", function () {
  $(".black-bg").toggle();
  $(".white-bg").toggle();
  $(".login").toggle();
});

// 폼이 제출될 때 실행되는 이벤트 리스너
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const id = document.querySelector("#id").value;
  const password = document.querySelector("#password").value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /[A-Z]/;

  if (id === "") alert("아이디가 입력되지 않았습니다.");
  else if (!emailRegex.test(id)) alert("아이디는 이메일 형식이어야 합니다.");
  else if (password === "") alert("비밀번호가 입력되지 않았습니다.");
  else if (!passwordRegex.test(password))
    alert("비밀번호는 대문자를 포함해야 합니다.");
  else if (password.length < 8) alert("비밀번호는 8자 이상이어야 합니다.");
});

// 클릭할 때마다 count가 1씩 증가
var count = 0;
$(".badge").on("click", function () {
  count += 1;
  if (count % 2 == 0) {
    document.querySelector(".badge").innerHTML = "Dark 🔄";
  } else {
    document.querySelector(".badge").innerHTML = "Light 🔄";
  }
});

//지정한 시간 후 코드를 실행 함
//   setTimeout(function () {
//     document.querySelector(".alert").style.display = "none";
//     alert("5초가 지났습니다. 사은품 증정이 종료되었습니다.");
//   }, 5000);

//지정한 시간마다 코드를 실행 함
setInterval(function () {
  var sec = document.querySelector(".alert span").innerHTML;

  if (sec > 0) {
    sec -= 1;

    document.querySelector(".alert span").innerHTML = sec;
  } else {
    document.querySelector(".alert").style.display = "none";
  }
}, 1000);
