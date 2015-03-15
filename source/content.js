(function () {

  function saveToClipboard(str) {
      var textArea = document.createElement("textarea");
      textArea.style.cssText = "position:absolute;left:-100%";

      document.body.appendChild(textArea);

      textArea.value = str;
      textArea.select();
      document.execCommand("copy");

      document.body.removeChild(textArea);
  }

  function getClipboardString(){
    var result = "";
    var textArea = document.createElement("textarea");
    textArea.style.cssText = "position:absolute;left:-100%";

    document.body.appendChild(textArea);

    textArea.select();
    if(document.execCommand("paste")) {
      result = textArea.value;
    }

    document.body.removeChild(textArea);
    return result;
  }

  //現在のClipboardと開いてるURLが一致したときだけ書き換える
  var currentClipboard = getClipboardString();
  if(currentClipboard !== location.href) return;

  var imageUrl = document.getElementById("gyazo_img").getAttribute("src");
  console.log(imageUrl);
  saveToClipboard(imageUrl);

})()
