<html>
  <head></head>
  <body>
    <div id='myPublisherDiv'></div>
    <div id='subscribersDiv'></div>



    <script src='https://static.opentok.com/v2/js/opentok.min.js'></script>
    <script>


      var publisher;
var apiKey = '46303142';
    var sessionId = '1_MX40NjMwMzE0Mn5-MTYzNTI1Mjk3MDQ4N34ybm1ONG82S2V5TUxvbStDWW0wNGhVYTJ-fg';
//var token = 'T1==cGFydG5lcl9pZD00NTMwMjU4MiZzaWc9Mjk0ZWE5Y2IxOTFkYjk3ZTVhZTM1ODgxMjRhOWFjNmI4YmNlOTc1ZTpzZXNzaW9uX2lkPTFfTVg0ME5UTXdNalU0TW41LU1UUTVOemt5TkRRNU1EZzBObjUzYTNCNFpVOWFNSFpPZGtWa01tSkliRkJTVUc5bWRtZC1mZyZjcmVhdGVfdGltZT0xNDk4MDUzNDkwJm5vbmNlPTAuOTI3MjcyMDM2NjEzNTI1NCZyb2xlPXN1YnNjcmliZXImZXhwaXJlX3RpbWU9MTUwMDY0NTQ4OQ=='
    var token = 'T1==cGFydG5lcl9pZD00NjMwMzE0MiZzaWc9NTViN2I3YjA5NjhiZWU0ZmY5Njg5YjcxOTI2MzNkMmIwNTMwMzc0MzpzZXNzaW9uX2lkPTFfTVg0ME5qTXdNekUwTW41LU1UWXpOVEkxTWprM01EUTROMzR5Ym0xT05HODJTMlY1VFV4dmJTdERXVzB3TkdoVllUSi1mZyZjcmVhdGVfdGltZT0xNjM1MjUyOTk0Jm5vbmNlPTAuMzU4NzYyODE1NDAwMzAzOTcmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTYzNzg0NDk5MyZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==';

      var pubOptions = {publishAudio:true, publishVideo:true};

      var subscriber;
      var publisher;
      var stream;

// Replace replacementElementId with the ID of the DOM element to replace:

      var session = OT.initSession(apiKey, sessionId);

      publisher = OT.initPublisher('myPublisherDiv', pubOptions);
      
     // publisher.publishVideo(false);

      session.connect(token, function(error) {
        if (error) {
          console.log(error.message);
        } else {

          session.publish(publisher, handleError);

        }
      });

      session.on({
          streamCreated: function(event) {
          subscriber =  session.subscribe(event.stream, 'subscribersDiv');
          }
      });

      function handleError(error) {
        if (error) {
          alert(error.message);
        }
      }


                                       </script>
                                       </html>
