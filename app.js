/* global OT API_KEY TOKEN SESSION_ID SAMPLE_SERVER_BASE_URL */

let apiKey;
let sessionId;
let token;

function handleError(error) {
  if (error) {
    console.error(error);
  }

  
}
function initializeSession() {
  const session = OT.initSession(apiKey, sessionId);

  OT.getDevices(function (error, devices) {
    if (error) {
      handleError(error);
      return;
    }

    const audioInputDevices = devices.filter(device => device.kind === "audioInput");
    const videoInputDevices = devices.filter(device => device.kind === "videoInput");

    audioInputDevices.forEach(device => console.log("audio input device: ", device.deviceId));
    videoInputDevices.forEach(device => console.log("video input device: ", device.deviceId));

    // Initialize the publisher only after devices are fetched
    const publisherOptions = {
      audioSource: '050283a2-3eb3-4405-8808-a80252ead373',
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
        session.publish(publisher, handleError);
      }
    });
  });

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
}

// See the config.js file.
if (API_KEY && TOKEN && SESSION_ID) {
  apiKey = API_KEY;
  sessionId = SESSION_ID;
  token = TOKEN;
  initializeSession();
} else if (SAMPLE_SERVER_BASE_URL) {
  fetch(SAMPLE_SERVER_BASE_URL + '/session')
    .then(response => response.json())
    .then(json => {
      apiKey = json.apiKey;
      sessionId = json.sessionId;
      token = json.token;
      initializeSession();
    })
    .catch(error => {
      handleError(error);
      alert('Failed to get OpenTok sessionId and token. Make sure you have updated the config.js file.');
    });
}

