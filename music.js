chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var newURL = "https://www.youtube.com/watch?v=QFs3PIZb3js";
    chrome.tabs.create({ url: newURL });
});