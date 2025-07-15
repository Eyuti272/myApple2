let title = $(".footer-links-wrapper h3");
title.click(function () {
  if (window.innerWidth <= 768) {
    $(this).toggleClass("expanded");
    $(this).next().slideToggle(500);
  }
});
$(window).on("resize", () => {
  if (window.innerWidth > 768) {
    location.reload();
  }
});