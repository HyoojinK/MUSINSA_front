// 메인 배너
let count = 0;
$(".slide-btn .prev-btn").on("click", function () {
  if (count > 0) {
    $("#section .box .depth1").animate({
      left: "+=100%",
    });
    count--;
  }
});

$(".slide-btn .next-btn").on("click", function () {
  if (count < 5) {
    $("#section .box .depth1").animate({
      left: "-=100%",
    });
    count++;
  }
});

$(".header").load("./header.html", function () {
  let getmyid = localStorage.getItem("userid");
  let getmypw = localStorage.getItem("userpw");

  if (getmyid && getmypw) {
    console.log("맞습니다.");
    $(".loginsp p").text("LOGOUT");
    $(".loginsp a").attr({
      href: "javascript:;",
    });
    $(".joinsp a").css({
      display: "none",
    });
    $(".mysp").addClass("on");
  }

  $(".loginsp a").on("click", function () {
    let text = $(this).find("p").text();
    // let text = $(this).text()
    if (text == "LOGOUT") {
      //   sessionStorage.clear();
      localStorage.removeItem("userid");
      localStorage.removeItem("userpw");
      $(this)
        .attr({
          href: "./login.html",
        })
        .text("LOGIN");
      $(this).next().removeClass("on");
    }
  });
});

$(".footer").load("./footer.html");
