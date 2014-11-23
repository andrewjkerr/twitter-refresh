/*
  file: settings.js
  author: andrewjkerr // @andrewuf
  summary: listens for changes on the popup and saves them to storage
*/

document.addEventListener('DOMContentLoaded', function(){

  var input = document.getElementById('auto-refresh');

  var bool;

  chrome.storage.sync.get("auto_refresh", function(val) {
    bool = val["auto_refresh"];

    // set the initial state of the checkbox
    if(bool == true) {
        input.checked = true;
    } else {
        input.checked = false;
    }
  });

  input.addEventListener("change", function(){
    chrome.storage.sync.set({'auto_refresh': input.checked}, function() {
      // Notify that we saved.
      console.log('Settings saved');
    });
  });
});