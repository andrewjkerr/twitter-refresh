/*
  file: bootstrap.js
  author: andrewjkerr // @andrewuf
  summary: allows for the page_action icon to be displayed when the current tab is twitter
*/


// Set auto_refresh to true when installed
chrome.runtime.onInstalled.addListener(function(details) {

  // Default installation to true
  chrome.storage.sync.set({'auto_refresh': true}, function() {
    console.log('Install of Twitter AutoRefresh completed!');
  });
});

// Listen for any changes to the URL of any tab
chrome.tabs.onUpdated.addListener(function(id, info, tab){

  // Check if page is ready
  if (tab.status !== "complete") {
    return;
  }

  // Check if page is Twitter
  if (tab.url.toLowerCase().indexOf("twitter.com") === -1) {
    return;
  } else {
    chrome.pageAction.show(tab.id);

    // Set tab icon
    chrome.storage.sync.get("auto_refresh", function(val) {
      var current_value = val["auto_refresh"];

      updateIcon(tab, current_value);
    });
  }

});

chrome.pageAction.onClicked.addListener(function(tab){

  var new_value;

  chrome.storage.sync.get("auto_refresh", function(val) {
    var current_value = val["auto_refresh"];

    new_value = !current_value;

    chrome.storage.sync.set({'auto_refresh': new_value}, function() {
      updateIcon(tab, new_value);
    });
  });
});

var updateIcon = function(tab, refresh) {
  if (refresh) {
    chrome.pageAction.setIcon({tabId: tab.id, path: 'icons/icon38.png'});
  } else {
    chrome.pageAction.setIcon({tabId: tab.id, path: 'icons/icon38-disabled.png'});
  }
}