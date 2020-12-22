$().ready(function () {
  $("#form").validate({
    rules: {
      firstName: {
        required: true,
      },
      lastName: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      textArea: {
        required: true,
      },
    },
    messages: {
      firstName: "Inserisci il nome",
      lastName: "Inserisci il cognome",
      textArea: "Inserisci il messaggio",
      email: "Inserisci la tua email",
    },
  });
  $('button[type="submit"]').click(function (e) {
    e.preventDefault();
    if ($("#form").valid()) {
      $.ajax({
        type: "POST",
        url: "/backend/formEmail.php",
        data: {
          firstName: $("input[name=firstName]").val(),
          lastName: $("input[name=lastName]").val(),
          email: $("input[name=email]").val(),
          textArea: $("textarea[name=textArea]").val(),
          captcha: grecaptcha.getResponse(),
        },
        success: function (data) {
          // parse response to a js object
          switch (data) {
            case "-1":
              alert("captcha non cliccato");
              break;
            case "1":
              alert("Form Inviato");
              break;
            case "2":
              alert("form non inviato");
              break;
            case "0":
              alert("contattare l'amministrazione");
              break;
          }
        },
      });
    } else {
      alert("completa il form");
    }
  });
});
