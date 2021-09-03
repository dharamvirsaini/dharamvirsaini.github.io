<html>
  <head></head>
  <body>
    <div id='myPublisherDiv'></div>
    <div id='subscribersDiv'></div>
    <button onclick="shareScreen()">Share screen</button>
    <button onclick="unmuteAudio()">Unmute Audio</button>


    <script src='https://static.opentok.com/v2/js/opentok.min.js'></script>
    <script>


      var publisher;
      var apiKey = '46269242';
    var sessionId = '1_MX40NjI2OTI0Mn5-MTYyNjY5NzkwNTkxMn5PVW9Jd2N0OFkrZ0RGR2kyQ0hOdTRzZmZ-fg';
//var token = 'T1==cGFydG5lcl9pZD00NTMwMjU4MiZzaWc9Mjk0ZWE5Y2IxOTFkYjk3ZTVhZTM1ODgxMjRhOWFjNmI4YmNlOTc1ZTpzZXNzaW9uX2lkPTFfTVg0ME5UTXdNalU0TW41LU1UUTVOemt5TkRRNU1EZzBObjUzYTNCNFpVOWFNSFpPZGtWa01tSkliRkJTVUc5bWRtZC1mZyZjcmVhdGVfdGltZT0xNDk4MDUzNDkwJm5vbmNlPTAuOTI3MjcyMDM2NjEzNTI1NCZyb2xlPXN1YnNjcmliZXImZXhwaXJlX3RpbWU9MTUwMDY0NTQ4OQ=='
    var token = 'T1==cGFydG5lcl9pZD00NjI2OTI0MiZzaWc9ZGFjNzY1OTJlMjg2NDU1MzYyYmExY2M1ZmNmYTYyMDc2NmVjOWI0YjpzZXNzaW9uX2lkPTFfTVg0ME5qSTJPVEkwTW41LU1UWXlOalk1Tnprd05Ua3hNbjVQVlc5SmQyTjBPRmtyWjBSR1Iya3lRMGhPZFRSelptWi1mZyZjcmVhdGVfdGltZT0xNjI5MzA0NzgzJm5vbmNlPTAuOTM5ODAyMzUyMjg0NTU5MyZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNjMxODk2NzgzJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9';

      var pubOptions = {mirror: true};
    //  pubOptions.videoSource = 'screen';

      var subscriber;
      var frontDeviceId;
      var publisher;
      var stream;

// Replace replacementElementId with the ID of the DOM element to replace:

      var session = OT.initSession(apiKey, sessionId);








      session.on({
          sessionReconnecting: function(event) {
          console.log("sessionReconnecting called");
          }
      });

      session.on({
        sessionReconnected: function(event) {
        console.log("sessionReconnected called");
        }
      });
      session.on({
        sessionDisconnected: function(event) {
        console.log("sessionDisconnected called");
        }
      });

      session.on({
        connectionCreated: function(event) {
          if (event.connection.connectionId != session.connection.connectionId) {
        console.log("connectionCreated called");
      }
        }
      });

      OT.on({
        exception: function(exception) {
        console.log("Opentok exception occurred " + exception.title + exception.message);
        }
      });

      session.on({
        connectionDestroyed: function(event) {
        console.log("connectionDestroyed called");
        }
      });

    /*  publisher.on({
        accessAllowed: function (event) {
          console.log("accessAllowed called");
        },
        accessDenied: function accessDeniedHandler(event) {
          console.log("accessDenied called");
        }
      });*/

      session.on({
          streamCreated: function(event) {
          subscriber =  session.subscribe(event.stream, 'subscribersDiv');

          subscriber.on({
            disconnected: function() {
              console.log("subscriber disconnected. Reason: " + event.reason);
            }
          });

            subscriber.on({
              connected: function() {
                console.log("subscriber connected. Reason: " + event.reason);
              }
            });
            subscriber.on({
              disconnected: function() {
                console.log("subscriber disconnected. Reason: " + event.reason);
              }
            });

              subscriber.on({
                destroyed: function() {
                  console.log("subscriber destroyed. Reason: " + event.reason);
                }
              });



          }
      });


      function handleError(error) {
        if (error) {
          alert(error.message);
        }
      }

      function shareScreen()
      {

        publisher = OT.initPublisher('myPublisherDiv', pubOptions, function (error) {
    if (error) {
      console.log("Failed to publish: ", error.code + "----" + error.name + "------" + error.message);
      if (error.name === "OT_NOT_CONNECTED") {
        alert("You are not connected to the internet. Check your network connection.");
      }
    } else {
      console.log("Connected");
      frontDeviceId = publisher.getVideoSource().deviceId;
    }
  });

  session.connect(token, function(error) {
    if (error) {
      console.log("Failed connect" + error.code + error.message);
    } else {
      session.publish(publisher, handleError);
    }
  });
          //publisher.publishAudio(false);

          publisher.on('mediaStopped', function (event) {
                  console.log("screensharing stopped");
    });

     publisher.on("streamDestroyed", function (event) {
      console.log("Stream stopped. Reason: " + event.reason);
    });

    session.on("streamDestroyed", function (event) {
      console.log("subscriber Stream stopped. Reason: " + event.reason);
    });

      }
      function unmuteAudio()
      {

      publisher.cycleVideo();
      /*  publisher.cycleVideo().then((obj) => {
  console.log("device id is " + publisher.getVideoSource().deviceId);
  if(obj.deviceId == frontDeviceId) {
    console.log("front facing1 camera");
    if (!publisher.element.classList.contains('OT_mirrored')) {
      publisher.element.classList.add('OT_mirrored');
    }
  } else {
   // publisher.element.classList.remove('OT_mirrored');
  }
});*/


      }
                                       </script>
                                       </html>
