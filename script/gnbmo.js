//햄버거버튼동작을 위한 변수
let btnCall = document.querySelector(".btnCall");
//모바일 메뉴가 동작하기 위한 변수
let menuMo = document.querySelector(".menuMo");

btnCall.onclick = function (e) {
  e.preventDefault();
  btnCall.classList.toggle("on");
  menuMo.classList.toggle("on");
};