<html>
  <head></head>
  <body>
    <div id='myPublisherDiv'></div>
    <div id='subscribersDiv'></div>



    <script src='https://static.opentok.com/v2.21.2/js/opentok.min.js'></script>
    <script>


      var publisher;
    var apiKey = '46269242';
    var sessionId = '1_MX40NjI2OTI0Mn5-MTYyNjY5NzkwNTkxMn5PVW9Jd2N0OFkrZ0RGR2kyQ0hOdTRzZmZ-fg';
//var token = 'T1==cGFydG5lcl9pZD00NTMwMjU4MiZzaWc9Mjk0ZWE5Y2IxOTFkYjk3ZTVhZTM1ODgxMjRhOWFjNmI4YmNlOTc1ZTpzZXNzaW9uX2lkPTFfTVg0ME5UTXdNalU0TW41LU1UUTVOemt5TkRRNU1EZzBObjUzYTNCNFpVOWFNSFpPZGtWa01tSkliRkJTVUc5bWRtZC1mZyZjcmVhdGVfdGltZT0xNDk4MDUzNDkwJm5vbmNlPTAuOTI3MjcyMDM2NjEzNTI1NCZyb2xlPXN1YnNjcmliZXImZXhwaXJlX3RpbWU9MTUwMDY0NTQ4OQ=='
    var token = 'T1==cGFydG5lcl9pZD00NjI2OTI0MiZzaWc9ZDY4ZTI0YjlkNWY0ZmY3Y2M1NzJjZmNhOGZkNjc5ZGQyNGM0Nzk4MTpzZXNzaW9uX2lkPTFfTVg0ME5qSTJPVEkwTW41LU1UWXlOalk1Tnprd05Ua3hNbjVQVlc5SmQyTjBPRmtyWjBSR1Iya3lRMGhPZFRSelptWi1mZyZjcmVhdGVfdGltZT0xNjM5NDgzNjAwJm5vbmNlPTAuNzg3NjUzNzY0NTg5MTMzNyZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNjQyMDc1NTk5JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9';



      var pubOptions = {};

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
          console.log("output devices" + OT.getAudioOutputDevices());

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
