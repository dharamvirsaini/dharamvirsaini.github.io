<html>
  <head></head>
  <body>
    <div id='myPublisherDiv'></div>
    <div id='subscribersDiv'></div>



    <script src='https://static.opentok.com/v2/js/opentok.min.js'></script>
    <script>


      var publisher;
var apiKey = '47365881';
    var sessionId = '1_MX40NzM2NTg4MX5-MTYzNTMyMjY2MDE0N342Z2Q5MnA4RlpOVUo5RVdiQmg1RGJpN3h-fg';
//var token = 'T1==cGFydG5lcl9pZD00NTMwMjU4MiZzaWc9Mjk0ZWE5Y2IxOTFkYjk3ZTVhZTM1ODgxMjRhOWFjNmI4YmNlOTc1ZTpzZXNzaW9uX2lkPTFfTVg0ME5UTXdNalU0TW41LU1UUTVOemt5TkRRNU1EZzBObjUzYTNCNFpVOWFNSFpPZGtWa01tSkliRkJTVUc5bWRtZC1mZyZjcmVhdGVfdGltZT0xNDk4MDUzNDkwJm5vbmNlPTAuOTI3MjcyMDM2NjEzNTI1NCZyb2xlPXN1YnNjcmliZXImZXhwaXJlX3RpbWU9MTUwMDY0NTQ4OQ=='
    var token = 'T1==cGFydG5lcl9pZD00NzM2NTg4MSZzaWc9YTNmNDIzNTUwMTZiZmFlYTRmODM4ZmYzZjU5Nzc5ODlmMjY1YTcxYjpzZXNzaW9uX2lkPTFfTVg0ME56TTJOVGc0TVg1LU1UWXpOVE15TWpZMk1ERTBOMzQyWjJRNU1uQTRSbHBPVlVvNVJWZGlRbWcxUkdKcE4zaC1mZyZjcmVhdGVfdGltZT0xNjM1MzIyNjc1Jm5vbmNlPTAuNjYyMDM4NTk3MzQ5MDg5NyZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNjM3OTE0Njc0JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9';

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
