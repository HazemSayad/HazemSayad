function loadFileContent(filePath) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status == 200) {
    result = xmlhttp.responseText;
  }
  return result;
}

function loadHTMLContent(elementId, filePath) {
  var element = document.getElementById(elementId);
  var dataArray = loadFileContent(filePath);
  var innerHtmlData = "";

  if (dataArray == null) {
    return;
  }

  dataArray = dataArray.split("\n");
  for (var i = 0; i < dataArray.length; i++) {
    innerHtmlData +=
      '<li><a target="_blank" href="' +
      dataArray[i] +
      '">' +
      dataArray[i] +
      "</a></li>\n";
  }
  element.innerHTML = innerHtmlData;
}

$(document).ready(function () {
  let location = window.location.pathname;
  let images = "./img/";
  let nav_bar_ids = ["home", "roadmap", "useful", "showcase", "contact"];
  let drop_menu_ids = ["github", "linkedin", "email"];

  if (location === "/index.html") {
    console.log("location: " + location + ", images folder is: " + images);
  } else {
    images = "../img/";
    console.log("location: " + location + ", images folder is: " + images);
  }

  if (location === "/site/showcase.html") {
    $(".gallery img").on("click", function (event) {
      var image_src = $(event.target).attr("src");
      var image_caption = $(event.target).attr("alt");
      $("#modal-image").attr("src", image_src);
      $("modal-caption").text(image_caption);
      $("#modal").css("display", "block");

      $(".close").on("click", function () {
        $("#modal").css("display", "none");
      });
      console.log("clicked");
    });
  }

  for (let i = 0; i < nav_bar_ids.length; i++) {
    let id = "#nav-" + nav_bar_ids[i];
    $(id)
      .mouseenter(function () {
        $(this).attr("src", images + nav_bar_ids[i] + "_hov.png");
      })
      .mouseleave(function () {
        $(this).attr("src", images + nav_bar_ids[i] + ".png");
      });
  }

  for (let i = 0; i < drop_menu_ids.length; i++) {
    let id = "#nav-" + drop_menu_ids[i];
    $(id)
      .parent()
      .mouseenter(function () {
        $(id).attr("src", images + drop_menu_ids[i] + "_hov.png");
      })
      .mouseleave(function () {
        $(id).attr("src", images + drop_menu_ids[i] + ".png");
      });
  }

  // if (location === "/site/roadmap.html") {
  //   $("#2014")
  //     .mouseenter(function () {
  //       $("#timeline")
  //         .css("display", "block")
  //         .css("position", "absolute")
  //         .css("top", "10vh")
  //         .css("left", "25vw");
  //     })
  //     .mouseleave(function () {});
  // }
});
