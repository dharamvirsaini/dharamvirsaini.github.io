/* global OT API_KEY TOKEN SESSION_ID SAMPLE_SERVER_BASE_URL */

let apiKey;
let sessionId;
let token;

function handleError(error) {
  if (error) {
    console.error(error);
  }

  OT.getDevices(function(error, devices) {
    audioInputDevices = devices.filter(function(element) {
      return element.kind == "audioInput";
    });
    videoInputDevices = devices.filter(function(element) {
      return element.kind == "videoInput";
    });
    for (var i = 0; i < audioInputDevices.length; i++) {
      console.log("audio input device: ", audioInputDevices[i].deviceId);
    }
    for (i = 0; i < videoInputDevices.length; i++) {
      console.log("video input device: ", videoInputDevices[i].deviceId);
    }
  });
  
}

var audioInputDevices;
var videoInputDevices;



function initializeSession() {
  const session = OT.initSession(apiKey, sessionId);



  // Subscribe to a newly created stream
  session.on('streamCreated', (event) => {
    const subscriberOptions = {
      insertMode: 'append',
      width: '100%',
      height: '100%'
    };
    session.subscribe(event.stream, 'subscriber', subscriberOptions, handleError);
  });

  session.on('sessionDisconnected', (event) => {
    console.log('You were disconnected from the session.', event.reason);
  });

  // initialize the publisher
  const publisherOptions = {
    audioSource: audioInputDevices[0].deviceId,
    insertMode: 'append',
    width: '100%',
    height: '100%'
  };
  const publisher = OT.initPublisher('publisher', publisherOptions, handleError);

  // Connect to the session
  session.connect(token, (error) => {
    if (error) {
      handleError(error);
    } else {
      // If the connection is successful, publish the publisher to the session
      session.publish(publisher, handleError);
    }
  });
}

// See the config.js file.
if (API_KEY && TOKEN && SESSION_ID) {
  apiKey = API_KEY;
  sessionId = SESSION_ID;
  token = TOKEN;
  initializeSession();
} else if (SAMPLE_SERVER_BASE_URL) {
  // Make a GET request to get the OpenTok API key, session ID, and token from the server
  fetch(SAMPLE_SERVER_BASE_URL + '/session')
  .then((response) => response.json())
  .then((json) => {
    apiKey = json.apiKey;
    sessionId = json.sessionId;
    token = json.token;
    // Initialize an OpenTok Session object
    initializeSession();
  }).catch((error) => {
    handleError(error);
    alert('Failed to get opentok sessionId and token. Make sure you have updated the config.js file.');
  });
}
