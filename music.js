chrome.browserAction.onClicked.addListener(function(activeTab)
{
    // var newURL = "https://www.youtube.com/watch?v=QFs3PIZb3js";
    // chrome.tabs.create({ url: newURL });

    var audio = new Audio();        // create the audio object
    audio.src = "RomeoSantos.mp3"; // assign the audio file to it
    // audio.play();


    if (audio.paused()) {
        audio.play();
    }else{
        audio.pause();
    }
});