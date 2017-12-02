chrome.browserAction.onClicked.addListener(function(tab) {
  let currentTab;
  let bkg = chrome.extension.getBackgroundPage();

  chrome.tabs.query(
    { active: true, windowType: "normal", currentWindow: true },
    function(tabArray) {
      bkg.console.log("Curr Tab Pos", tabArray[0].index);
      currentTab = tabArray[0];
    }
  );

  chrome.tabs.query({ currentWindow: true }, function(tabs) {
    tabs.forEach(function(tabArray) {
      bkg.console.log("Tab POS: ", tabArray.index);
      if (tabArray.index < currentTab.index) {
        chrome.tabs.remove(tabArray.id, function() {});
      }
    });
  });
});
