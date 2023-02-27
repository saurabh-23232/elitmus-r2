

//Event Listener and listens for updates
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    //Page is Google homepage and completely loaded
    changeInfo.status == "complete" &&
    tab.url === "https://www.google.com/"
  ) {
    //Nmber of tabs running at particular instance
    let tabsNum = 0;
    chrome.tabs.query({}, function (tabs) {
      tabsNum = tabs.length;
      chrome.tabs.sendMessage(tabId, {
        type: "PageLoaded",
        len: tabsNum,
      });
    });
  }
});


