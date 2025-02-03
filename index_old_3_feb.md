<html>
  <head></head>
  <body>
    <div id='myPublisherDiv'></div>
    <div id='subscribersDiv';"></div>



    <script src='https://static.opentok.com/v2/js/opentok.min.js'></script>
    <script>


      var publisher;
    var apiKey = '47763931';
var sessionId = '2_MX40Nzc2MzkzMX5-MTczNjc3MjE0NDAzOH53cXJaZG16c3JkWGZVWFFpQnppVkRxazJ-fn4';
//var token = 'T1==cGFydG5lcl9pZD00NTMwMjU4MiZzaWc9Mjk0ZWE5Y2IxOTFkYjk3ZTVhZTM1ODgxMjRhOWFjNmI4YmNlOTc1ZTpzZXNzaW9uX2lkPTFfTVg0ME5UTXdNalU0TW41LU1UUTVOemt5TkRRNU1EZzBObjUzYTNCNFpVOWFNSFpPZGtWa01tSkliRkJTVUc5bWRtZC1mZyZjcmVhdGVfdGltZT0xNDk4MDUzNDkwJm5vbmNlPTAuOTI3MjcyMDM2NjEzNTI1NCZyb2xlPXN1YnNjcmliZXImZXhwaXJlX3RpbWU9MTUwMDY0NTQ4OQ=='
var token = 'T1==cGFydG5lcl9pZD00Nzc2MzkzMSZzaWc9ZmE5MjUwOWM0YTUwMTQwNTk5ZGE5NWI0NmE3MWNlYTdjMzA4NjkwMzpzZXNzaW9uX2lkPTJfTVg0ME56YzJNemt6TVg1LU1UY3pOamMzTWpFME5EQXpPSDUzY1hKYVpHMTZjM0prV0daVldGRnBRbnBwVmtSeGF6Si1mbjQmY3JlYXRlX3RpbWU9MTczNjc3MjIxNSZub25jZT0wLjMwNjQyNDcwMTk3ODYxODYmcm9sZT1tb2RlcmF0b3ImZXhwaXJlX3RpbWU9MTczNjc3NDAxMzczNCZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==';




      var pubOptions = {};
      pubOptions.disableAudioProcessing = 'true';

      var subscriber;
      var publisher;
      var stream;

// Replace replacementElementId with the ID of the DOM element to replace:

      var session = OT.initSession(apiKey, sessionId);

     // publisher = OT.initPublisher('myPublisherDiv', pubOptions);
      
     // publisher.publishVideo(false);

      session.connect(token, function(error) {
        if (error) {
          console.log(error.message);
        } else {

         // session.publish(publisher, handleError);
          console.log("output devices" + OT.getAudioOutputDevices());

        }
      });

      session.on({
          streamCreated: function(event) {

          const options = {width: 1920, height: 1080, insertMode: 'append'}
const subscriber = session.subscribe(event.stream, 'subscribersDiv', options);
         // subscriber =  session.subscribe(event.stream, 'subscribersDiv');
          }
      });

      function handleError(error) {
        if (error) {
          alert(error.message);
        }
      }


                                       </script>
                                       </html>
