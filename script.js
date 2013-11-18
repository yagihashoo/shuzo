$(function() {
  shortcut.add("Meta+Alt+L", function() {
    var path_to_mp3 = chrome.extension.getURL("./mp3.html")
    var mp3_window = window.open(path_to_mp3, "mp3", "width=1,height=1,left=0,top=0,menubar=no,toolbar=no,location=no,status=no,resizable=no,scrollbars=no");
  });
});
