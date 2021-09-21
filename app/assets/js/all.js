const navList = $("#nav-list");

const header = $("header");
let lastScroll = 0;

$("#nav-btn").on("click", () => {
  // console.log('click button')
  if (navList.hasClass("d-none")) {
    navList.removeClass("d-none");
  } else {
    navList.addClass("d-none");
  }
});

window.addEventListener("scroll", function () {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    header.removeClass("scroll--up");
    return;
  }

  if (currentScroll > lastScroll && !header.hasClass("scroll--down")) {
    header.removeClass("scroll--up");
    header.addClass("scroll--down");
  } else if (currentScroll < lastScroll && header.hasClass("scroll--down")) {
    header.removeClass("scroll--down");
    header.addClass("scroll--up");
  }
  lastScroll = currentScroll;
});

// const mainHeight = $("main");

// // console.log(mainHeight.height())
// $(window).on("resize", () => {
//   $("footer").css(
//     "margin-top",
//     mainHeight.height() - header.height()
//   );
// });
// $("footer").css(
//   "margin-top",
//   mainHeight.height() - header.height()
// );
