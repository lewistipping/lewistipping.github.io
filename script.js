$( document ).ready(function() {
    LogWithoutTimestamp("Hello!<br/> Welcome to my site");
  
});



function getCurrentTime() {
  var date = new Date();
  var hours = (date.getHours() < 10 ? "0" : "") + date.getHours();
  var minutes = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
  var seconds = (date.getSeconds() < 10 ? "0" : "") + date.getSeconds();
  var time = "[" + hours + ":" + minutes + ":" + seconds + "]";
  return time;
}

setInterval(function() {
  $(".current-timestamp").text(getCurrentTime());
  //$("#cmdline").focus();
}, 500);

$(document).on("keypress", function(e) {
  if (e.which == 13) {
    CommandEntered($("#cmdline").text());
    $("#cmdline").text("");
    $("#cmdline").focus();
  }
  /*if(e.which == 38) 
    {
      $('#cmdline').text(lastcommand);
    }*/
  //Add previous command functionality
});

function LogWithoutTimestamp(ToBeLogged)
{
  $(".previous-messages").append("<div class='d-block'><div class='timestamp d-inline-block'>" +
      "</div>" +
      "<div class='spacer d-inline-block'>></div><div class='command d-inline-block'>" +
      ToBeLogged +
      "</div></div>")
}
function LogWithTimestamp(ToBeLogged) {
  $(".previous-messages").append(
    "<div class='d-block'><div class='timestamp d-inline-block'>" +
      getCurrentTime() +
      "</div>" +
      "<div class='spacer d-inline-block'>></div><div class='command d-inline-block'>" +
      ToBeLogged +
      "</div></div>"
  );
}
function CommandEntered(command) {
  command = command.toLowerCase();
  switch (command) {
    case "help":
      LogWithTimestamp("help - Display Commands");
      LogWithTimestamp("clear - Clear messages from previous commands");
      LogWithTimestamp("soundbites - Display a collection of soundbites");
      break;
    case "clear":
      $(".previous-messages").empty();
      //$(".message").remove();
      break;
    case "about":
      LogWithTimestamp("This site was created by Lewis Tipping");
      break;
    case "wilson":
      break;
      case "wilson":
          $(".audio")[1].play();
      LogWithTimestamp("Just Right");
          break;
    case "meh":
      var win = window.open("https://youtu.be/yZt6eP7cmHM", "_blank");
      if (win) {
        //Browser has allowed it to be opened
        win.focus();
      } else {
        //Browser has blocked it
        alert("Please allow popups for this website");
      }
      break;
      case "quail":
      $(".audio").loop = true;
      $(".audio")[0].play();
      LogWithTimestamp("Just Right");
      break;
    default:
      LogWithTimestamp(command + " is not recognized as a command");
      break;
  }
}
