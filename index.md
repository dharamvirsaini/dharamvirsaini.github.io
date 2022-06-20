<html>
  <head></head>
  <body>
    <div id='myPublisherDiv'></div>
    <div id='subscribersDiv'></div>
    <button onclick="startPublishing()">Start Publishing</button>
    <button onclick="disconnectSession()">disconnect session</button>
    <button onclick="publishAgain()">publish again</button>


    <script src='https://static.opentok.com/v2.22.4/js/opentok.js'></script>
    <script>

//OT.setLogLevel(OT.NONE);
      var publisher;
      var apiKey = '46269242';
      var sessionId = '1_MX40NjI2OTI0Mn5-MTY1NTI4OTY1NjE2OX5rcWhERUxjVmxHeFhiRUJSbDVwci9ockF-fg'; // add your OpenTok Session ID
      var token= 'T1==cGFydG5lcl9pZD00NjI2OTI0MiZzaWc9ZDVlODExMTNhNWQ3OGI1NGNjNzYzYTQ4Y2UwNjg4N2QzMzg0YzNiNTpzZXNzaW9uX2lkPTFfTVg0ME5qSTJPVEkwTW41LU1UWTFOVEk0T1RZMU5qRTJPWDVyY1doRVJVeGpWbXhIZUZoaVJVSlNiRFZ3Y2k5b2NrRi1mZyZjcmVhdGVfdGltZT0xNjU1Mjg5NjcyJm5vbmNlPTAuMzU3MjgzNzUzOTkzNTE2NzUmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTY1Nzg4MTY3MSZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ=='; // add your OpenTok token

      var pubOptions = {};
    //pubOptions.disableAudioProcessing = 'true';
    //pubOptions.enableDtx = true;
    //pubOptions.videoSource = null;
    //pubOptions.audioSource = audioSource;
//   const stream1 = OT.getUserMedia({
//   videoSource: null
// }, () => {
//   const [audioSource] = stream1.getAudioTracks();
//     pubOptions.audioSource = audioSource;
// });



  //   var audioInputDevices;
  //             var videoInputDevices;
  //
  //             OT.getDevices(function(error, devices) {
  //               audioInputDevices = devices.filter(function(element) {
  //                 return element.kind == "audioInput";
  //               });
  //               videoInputDevices = devices.filter(function(element) {
  //                 return element.kind == "videoInput";
  //               });
  //               for (var i = 0; i < audioInputDevices.length; i++) {
  //                 console.log("audio input device: ", audioInputDevices[i]);
  //               }
  //               for (i = 0; i < videoInputDevices.length; i++) {
  //                 console.log("video input device: ", videoInputDevices[i]);
  //               }
  //             });
  //
  // //pubOptions.videoContentHint = "detail";
  // pubOptions.audioSource = audioInputDevices[0];

      var subscriber;
      var frontDeviceId;
      var publisher;
      var stream;

// Replace replacementElementId with the ID of the DOM element to replace:

//OT.setLogLevel(OT.DEBUG);

//OT.setProxyUrl('http://localhost:3000/');
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
        //  event.preventDefault();
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

      session.on("signal", function(event) {
        console.log("data is " + event.data);

        if(event.data == "enable") {
          console.log("enable");
          publisher.publishAudio(true);
          publisher.publishVideo(true);
        } else if (event.data == "disable") {
          console.log("disable");
            publisher.publishAudio(false);
            publisher.publishVideo(false);

        }
      console.log("Signal sent from connection " + event.from.id);
      // Process the event.data property, if there is any data.
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
            subscriber.on("videoEnabled", function(event) {
              console.log("subscriber disabled. Reason: " + event.reason);
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
        //  alert(error.message);
        }
      }

      // function startPublishing()
      // {

        publisher = OT.initPublisher('myPublisherDiv', pubOptions, function (error) {
    if (error) {
    //  console.log("Failed to publish: ", error.code + "----" + error.name + "------" + error.message);
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
                  console.log("screensharing stopped " + event.reason);
    });

    publisher.on('streamCreated', function (event) {
        console.log('The publisher started streaming.');
    });
    //var publisher = OT.initPublisher({insertDefaultUI: false});
    publisher.on('videoElementCreated', function(event) {
      console.log("videoElementCreated called " + publisher);
      //document.getElementById('publisher-video-parent-id').appendChild(event.element);
    });

    session.on("signal", function(event) {

          console.log("Signal sent from connection " + event.data + "-- " + session.connection.id + "from--- " + event.from.connectionId);
          // Process the event.data property, if there is any data.
        });

     publisher.on("streamDestroyed", function (event) {
    //   event.preventDefault();
      console.log("Stream stopped. Reason: " + event.reason);
    });

    session.on("streamDestroyed", function (event) {
      console.log("session object Stream stopped. Reason: " + event.reason);
    });



      function publishAgain()
      {
        //publisher.setVideoContentHint("motion");
        session.publish(publisher, handleError);
//session.publish(publisher, handleError);
}

      function disconnectSession()
      {
        session.disconnect()
//publisher.publishVideo(true);
        //session.unpublish(publisher);
//console.log("device2221 id is ");
    /*  publisher.cycleVideo().then((obj) => {
    console.log(obj.deviceId);

       if(obj.deviceId == frontDeviceId) {
    console.log("front facing1 camera");
    if (!publisher.element.classList.contains('OT_mirrored')) {
      publisher.element.classList.add('OT_mirrored');
    }
  } else {
    publisher.element.classList.remove('OT_mirrored');
  }


});*/
/*
publisher.cycleVideo().then((obj) => {
 const constraints = { video: { deviceId: { exact: obj.deviceId } } }
 navigator.mediaDevices.enumerateDevices(constraints).then((device) => {
   console.log("facing mode is " + device.label);
   // do something based on direction
 });
});*/


      }
                                       </script>
                                       </html>
