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
