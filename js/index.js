$(document).ready(function () {

  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $("#scrollTopBtn").fadeIn();
    } else {
      $("#scrollTopBtn").fadeOut();
    }
  });

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

  $("#contactForm").submit(async function (e) {
    e.preventDefault();

    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const message = $("#message").val().trim();

    if (name === "" || email === "" || message === "") {
      $("#formMessage").text("Bitte alle Felder ausfüllen.");
      $("#formMessage").css("color", "red");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message
        })
      });

      const data = await response.json();

      if (data.success) {
        $("#formMessage").text("Nachricht erfolgreich gespeichert.");
        $("#formMessage").css("color", "green");
        $("#contactForm")[0].reset();
      } else {
        $("#formMessage").text(data.error || "Fehler beim Senden.");
        $("#formMessage").css("color", "red");
      }
    } catch (error) {
      $("#formMessage").text("Backend nicht erreichbar.");
      $("#formMessage").css("color", "red");
    }
  });
});