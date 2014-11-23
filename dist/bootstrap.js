/*
  file: bootstrap.js
  author: andrewjkerr // @andrewuf
  summary: allows for the page_action icon to be displayed when the current tab is twitter
*/


// Set auto_refresh to true when installed
chrome.runtime.onInstalled.addListener(function(details) {
  chrome.storage.sync.set({'auto_refresh': true}, function() {
    // Notify that we have successfully installed!
    console.log('Successful install!');
  });
});

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(function(id, info, tab){

  // Are we ready?
  if (tab.status !== "complete"){
    return;
  }

  // Is it Twitter?
  if (tab.url.toLowerCase().indexOf("twitter.com") === -1){
    return;
  }

  // If so, display the page_action!
  else
  {
    chrome.pageAction.show(tab.id);
  }

});
