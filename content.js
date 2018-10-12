var text = '';
function getText(e) {
    // get the selection of text
    text = (document.all) ? document.selection.createRange().text : document.getSelection().toString();
    // if we selected any text
    if (text.length > 0) {
      // make an API request to our ngrok
      var xhr = new XMLHttpRequest();
      // prepare the POST data
      var params = 'text='+text;
      // specify the type of request
      xhr.open("POST", "https://be32458d.ngrok.io", true);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      // when a result comes in from the API
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          // alert the result
          alert(xhr.responseText);
        }
      }
      xhr.send(params);
    }
}
document.onmouseup = getText;  // whenever we unclick our mouse, run the function getText
