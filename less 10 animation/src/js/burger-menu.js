$(function () {
  $(".custom-select").on("click", function (e) {
    e.preventDefault();
    $(".custom-select").toggleClass("active");
  });
});
