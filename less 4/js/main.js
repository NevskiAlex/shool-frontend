$(function () {
  $(".register-form label").on("click", function (e) {
    e.preventDefault();
    $(".form-row").toggleClass("active");
  });
});
