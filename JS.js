/*function addcomment(number) {
    comment=prompt('Kommentar','');
    //document.location = 'index.php?path=toplist&top='+number+'&comment='+comment+'';
}*/

function kommentar() {
  // get data
  let username = document.forms["awesomeform"]["Benutzername"].value;
  let title = document.forms["awesomeform"]["titel"].value;
  let msg = document.forms["awesomeform"]["nachricht"].value;

  // set data
  let text_element = document.getElementById("somefancyid");
  text_element.innerHTML =
    "<p>" +
    username +
    " " +
    " " +
    title +
    " " +
    msg +
    "</p>" +
    text_element.innerHTML;
  return false;
}
