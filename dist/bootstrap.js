/*
  file: bootstrap.js
  author: andrewjkerr // @andrewuf
  summary: allows for the page_action icon to be displayed when the current tab is twitter
*/

// Called when the url of a tab changes.
function checkForValidUrl(tabId, changeInfo, tab) {

  // Check to see whether tab is actually twitter or not
  // I believe Twitter removes the www, so this *should* work for everyone
  if(tab.url.indexOf('https://twitter.com') == 0 || tab.url.indexOf('http://twitter.com') == 0) {
    chrome.pageAction.show(tabId);
  }
};

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);