<html>
  <head></head>
  <body>
    <div id='myPublisherDiv'></div>
    <div id='subscribersDiv'></div>


    <script src='https://static.opentok.com/v2/js/opentok.min.js'></script>
    <script>
var apiKey = '46269242';
var sessionId = '2_MX40NjI2OTI0Mn5-MTc0Mzc0Njk3MTI5OH5mOHZSVW5LM3hDVGpySys0NjF1QzBUWVV-fn4';
//var token = 'T1==cGFydG5lcl9pZD00NTMwMjU4MiZzaWc9Mjk0ZWE5Y2IxOTFkYjk3ZTVhZTM1ODgxMjRhOWFjNmI4YmNlOTc1ZTpzZXNzaW9uX2lkPTFfTVg0ME5UTXdNalU0TW41LU1UUTVOemt5TkRRNU1EZzBObjUzYTNCNFpVOWFNSFpPZGtWa01tSkliRkJTVUc5bWRtZC1mZyZjcmVhdGVfdGltZT0xNDk4MDUzNDkwJm5vbmNlPTAuOTI3MjcyMDM2NjEzNTI1NCZyb2xlPXN1YnNjcmliZXImZXhwaXJlX3RpbWU9MTUwMDY0NTQ4OQ=='
var token = 'T1==cGFydG5lcl9pZD00NjI2OTI0MiZzaWc9Mjc0MDQ0ZmNmZDVkYjJkZjBmMTI1NGQwMDdhZDJkYjI1ZmY0M2M4MzpzZXNzaW9uX2lkPTJfTVg0ME5qSTJPVEkwTW41LU1UYzBNemMwTmprM01USTVPSDVtT0haU1ZXNUxNM2hEVkdweVN5czBOakYxUXpCVVdWVi1mbjQmY3JlYXRlX3RpbWU9MTc0Mzc0NzAwNyZub25jZT0wLjExMTE3MzM2MzI2MjcxMTQzJnJvbGU9bW9kZXJhdG9yJmV4cGlyZV90aW1lPTE3NDYzMzkwMDYzNjMmaW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0=';


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

 /* publisher.on("videoElementCreated", (event) => {

    //let m = event.element.captureStream();
   // console.log(m)
    setTimeout(() =>{
      publisher.publishVideo(false);
    }, 10000)
    setTimeout(() =>{
      publisher.publishVideo(true);
    }, 20000)

  })*/


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
