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

// When document is safe to modify
$(function () {
  let location = window.location.pathname;
  let images = "./img/";
  let nav_bar_ids = ["home", "roadmap", "useful", "showcase"];
  let drop_menu_ids = ["contact", "github", "linkedin", "email"];
  let regex_index = /\/index.html$/;

  if (location.match(regex_index)) {
    console.log("location: " + location + ", images folder is: " + images);
  } else {
    images = "../img/";
    console.log("location: " + location + ", images folder is: " + images);
  }

  // Modal function
  if (location === "/site/showcase.html") {
    $(".gallery img").on("click", function (event) {
      var image_src = $(event.target).attr("src");
      var image_caption = $(event.target).attr("alt");
      $("#modal-image").attr("src", image_src);
      $("#modal-caption").text(image_caption);
      $("#modal").css("display", "block");

      $(".close").on("click", function () {
        $("#modal").css("display", "none");
      });
      console.log("clicked");
    });
  }

  // When hovered over navigation bar, images are switched to hover variant with accent color
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

  // When hovered over  drop down menu content images are switched to the opposite variant
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

  // When orientation is changed mainly for mobile
  $(window).on("orientationchange", function (event) {
    console.log("orientation change triggered");
    let nav_ul = $("nav > ul");
    if (event.orientation === "portrait") {
      nav_ul.removeClass("flex-vertical");
    } else {
      nav_ul.addClass("flex-vertical");
    }
  });

  // manually trigger orientation change after DOM is loaded to detect orientation
  $(window).orientationchange();

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
