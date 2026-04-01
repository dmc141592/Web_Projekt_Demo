$(document).ready(function () {

  // Button anzeigen/verstecken beim Scrollen
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $("#scrollTopBtn").fadeIn();
    } else {
      $("#scrollTopBtn").fadeOut();
    }
  });

  // Klick → nach oben scrollen
  $("#scrollTopBtn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
  });

  $(".faq-question").click(function () {
    $(this).next(".faq-answer").slideToggle();
  });

  $(".filter-btn").click(function () {
    $(".filter-btn").removeClass("active");
    $(this).addClass("active");

    const filter = $(this).data("filter");

    if (filter === "all") {
      $(".project-card").show();
    } else {
      $(".project-card").hide();
      $('.project-card[data-category="' + filter + '"]').show();
    }
  });

  $("#contactForm").submit(function (e) {
    e.preventDefault();

    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const message = $("#message").val().trim();

    if (name === "" || email === "" || message === "") {
      $("#formMessage").text("Bitte alle Felder ausfüllen.");
      $("#formMessage").css("color", "red");
      return;
    }

    $("#formMessage").text("Nachricht erfolgreich gesendet.");
    $("#formMessage").css("color", "green");

    $("#contactForm")[0].reset();
  });
});