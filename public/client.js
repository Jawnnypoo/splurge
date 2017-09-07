window['__onGCastApiAvailable'] = function(loaded, errorInfo) {
    if (loaded) {
        var applicationID = chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID;
        var sessionRequest = new chrome.cast.SessionRequest(applicationID);
        var apiConfig = new chrome.cast.ApiConfig(sessionRequest, function() {}, function() {});
        chrome.cast.initialize(apiConfig, onSuccess, onError);
    }
}

function cast() {
  console.log("casting...")
  var url = "http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio1xtra_mf_p"
  chrome.cast.requestSession(function(session) {
      var mediaInfo = new chrome.cast.media.MediaInfo(url);
      mediaInfo.contentType = 'audio/mpeg';
      var request = new chrome.cast.media.LoadRequest(mediaInfo);
      request.autoplay = true;
      session.loadMedia(request, function() {}, onError);
  }, onError);
}

function onError() {
  console.log("Some error occurred")
}

function onSuccess() {
  console.log("Success initializing!")
}