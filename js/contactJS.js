$().ready(function () {
  var iconStyle = new ol.style.Style({
    image: new ol.style.Icon({
      anchor: [0, 0],
      src: "/media/img/LogoIcona_PNG_Negativo(1).png",
      scale: 0.1,
    }),
  });

  var iconFeature = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([8.9117385, 45.6078168])),
    name: "Makuda Office",
  });
  iconFeature.setStyle(iconStyle);

  var vectorSource = new ol.source.Vector({
    features: [iconFeature],
  });

  var vectorLayer = new ol.layer.Vector({
    source: vectorSource,
  });

  var rasterLayer = new ol.layer.Tile({
    source: new ol.source.OSM(),
  });

  var map = new ol.Map({
    target: "map",
    layers: [rasterLayer, vectorLayer],
    view: new ol.View({
      center: ol.proj.fromLonLat([8.9117385, 45.6078168]),
      zoom: 3,
    }),
  });
  var element = document.getElementById("popup");

  var popup = new ol.Overlay({
    element: element,
    positioning: "bottom-center",
    stopEvent: false,
    offset: [0, -50],
  });
  map.addOverlay(popup);

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
