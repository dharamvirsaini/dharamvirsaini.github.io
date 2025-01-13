<html>
  <head></head>
  <body>
    <div id='myPublisherDiv'></div>
    <div id='subscribersDiv'></div>


    <script src='https://static.opentok.com/v2/js/opentok.min.js'></script>
    <script>
var apiKey = '47763931';
var sessionId = '2_MX40Nzc2MzkzMX5-MTczNjc3MjE0NDAzOH53cXJaZG16c3JkWGZVWFFpQnppVkRxazJ-fn4';
//var token = 'T1==cGFydG5lcl9pZD00NTMwMjU4MiZzaWc9Mjk0ZWE5Y2IxOTFkYjk3ZTVhZTM1ODgxMjRhOWFjNmI4YmNlOTc1ZTpzZXNzaW9uX2lkPTFfTVg0ME5UTXdNalU0TW41LU1UUTVOemt5TkRRNU1EZzBObjUzYTNCNFpVOWFNSFpPZGtWa01tSkliRkJTVUc5bWRtZC1mZyZjcmVhdGVfdGltZT0xNDk4MDUzNDkwJm5vbmNlPTAuOTI3MjcyMDM2NjEzNTI1NCZyb2xlPXN1YnNjcmliZXImZXhwaXJlX3RpbWU9MTUwMDY0NTQ4OQ=='
var token = 'T1==cGFydG5lcl9pZD00Nzc2MzkzMSZzaWc9ZmE5MjUwOWM0YTUwMTQwNTk5ZGE5NWI0NmE3MWNlYTdjMzA4NjkwMzpzZXNzaW9uX2lkPTJfTVg0ME56YzJNemt6TVg1LU1UY3pOamMzTWpFME5EQXpPSDUzY1hKYVpHMTZjM0prV0daVldGRnBRbnBwVmtSeGF6Si1mbjQmY3JlYXRlX3RpbWU9MTczNjc3MjIxNSZub25jZT0wLjMwNjQyNDcwMTk3ODYxODYmcm9sZT1tb2RlcmF0b3ImZXhwaXJlX3RpbWU9MTczNjc3NDAxMzczNCZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==';


initializeSession();

      function handleError(error) {
  if (error) {
    console.error(error);
  }
}

function initializeSession() {
  var session = OT.initSession(apiKey, sessionId);

  // Subscribe to a newly created stream
  session.on('streamCreated', function streamCreated(event) {
    var subscriberOptions = {
      insertMode: 'append',
      width: '100%',
      height: '100%'
    };
    session.subscribe(event.stream, 'subscriber', subscriberOptions, handleError);
  });

  session.on('sessionDisconnected', function sessionDisconnected(event) {
    console.log('You were disconnected from the session.', event.reason);
  });

  // initialize the publisher
  var publisherOptions = {
    insertMode: 'append'
  };
  var publisher = OT.initPublisher('publisher', publisherOptions, handleError);

  publisher.on("videoElementCreated", (event) => {

    //let m = event.element.captureStream();
   // console.log(m)
    setTimeout(() =>{
      publisher.publishVideo(false);
    }, 10000)
    setTimeout(() =>{
      publisher.publishVideo(true);
    }, 20000)

  })


  // Connect to the session
  session.connect(token, function callback(error) {
    if (error) {
      handleError(error);
    } else {
      // If the connection is successful, publish the publisher to the session
      session.publish(publisher, handleError);
    }
  });
}
                                       </script>
                                       </html>
