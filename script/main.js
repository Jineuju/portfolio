// gnb

const gnb_lis = document.querySelectorAll("#gnb>li");

gnb_lis.forEach((el) => {
  el.addEventListener("mouseenter", (e) => {
    const sub = e.currentTarget.querySelector(".sub");
    let isBlock = window.getComputedStyle(sub).getPropertyValue("display");
    sub.style.height = "0";
    if (isBlock == "none") {
      sub.style.display = "block";
      let subHeight = sub.scrollHeight;
      sub.style.height = subHeight + "px";
    }
  });
});

gnb_lis.forEach((el) => {
  el.addEventListener("mouseleave", (e) => {
    const sub = e.currentTarget.querySelector(".sub");
    let isBlock = window.getComputedStyle(sub).getPropertyValue("display");
    sub.style.height = "0";
    if (isBlock == "block") {
      sub.style.height = "0";
      sub.addEventListener("transitionend", function end() {
        sub.removeEventListener("transitionend", end);
        sub.style.display = "none";
      });
    }
  });
});

// slide

$("#slide .frame li").eq(0).siblings().hide();
var slideIndex = 0;
setInterval(function () {
  if (slideIndex < 3) {
    slideIndex++;
  } else {
    slideIndex = 0;
  }

  $("#slide .frame li").eq(slideIndex).siblings().fadeOut(500);
  $("#slide .frame li").eq(slideIndex).fadeIn(500);
}, 3000);

// prev, next 버튼
var frame = document.querySelector("#banner2 .baro2");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");


prev.addEventListener("click", () => {
  frame.prepend(frame.lastElementChild);
  // prev.classList.add("on");
  // setTimeout(() => {
    // prev.classList.remove("on");
  // });
});
next.addEventListener("click", () => {
  frame.append(frame.firstElementChild);
  // next.classList.add("on");
  // setTimeout(() => {
    // next.classList.remove("on");
  // });
});

// tab메뉴
$(".tab>li").on("click", function () {
  $(".tab>li").removeClass("on");
  $(".content>div").removeClass("on");
  $(this).addClass("on");

  var conId = $(this).children("a").attr("href");
  $(conId).addClass("on");
});
