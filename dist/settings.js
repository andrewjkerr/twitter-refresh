/*
  file: settings.js
  author: andrewjkerr // @andrewuf
  summary: listens for changes on the popup and saves them to storage
*/

document.addEventListener('DOMContentLoaded', function(){

    var input = document.getElementById('auto-refresh');

    // set the initial state of the checkbox
    var is_refreshing = localStorage["auto_refresh"];
    if(is_refreshing == "true") {
        input.checked = true;
    } else {
        input.checked = false;
    }

    input.addEventListener("change", function(){
        chrome.storage.sync.set({'auto_refresh': input.checked}, function() {
          // Notify that we saved.
          console.log('Settings saved');
        });
    });


});