/* global OT */

(function closure() {
  const video = document.querySelector('#video');
  if (!video.captureStream) {
    alert('This browser does not support VideoElement.captureStream(). You must use Google Chrome.');
    return;
  }
  const stream = video.captureStream();
  let publisher;
  
    var apiKey = '46269242';
  var sessionId = '1_MX40NjI2OTI0Mn5-MTYxMjg3NzUxOTM5OX5hckl3dTRJZ2JXQ0R0a2xZQnBURmpnS1d-fg';
  //var token = 'T1==cGFydG5lcl9pZD00NTMwMjU4MiZzaWc9Mjk0ZWE5Y2IxOTFkYjk3ZTVhZTM1ODgxMjRhOWFjNmI4YmNlOTc1ZTpzZXNzaW9uX2lkPTFfTVg0ME5UTXdNalU0TW41LU1UUTVOemt5TkRRNU1EZzBObjUzYTNCNFpVOWFNSFpPZGtWa01tSkliRkJTVUc5bWRtZC1mZyZjcmVhdGVfdGltZT0xNDk4MDUzNDkwJm5vbmNlPTAuOTI3MjcyMDM2NjEzNTI1NCZyb2xlPXN1YnNjcmliZXImZXhwaXJlX3RpbWU9MTUwMDY0NTQ4OQ=='
  var token = 'T1==cGFydG5lcl9pZD00NjI2OTI0MiZzaWc9NmRkYmNhNjYzYWUzOWQ1ZjUxMDA3M2NjZTRhN2RjOWUzNWM5ZmRhMzpzZXNzaW9uX2lkPTFfTVg0ME5qSTJPVEkwTW41LU1UWXhNamczTnpVeE9UTTVPWDVoY2tsM2RUUkpaMkpYUTBSMGEyeFpRbkJVUm1wblMxZC1mZyZjcmVhdGVfdGltZT0xNjE3MjgwMjEzJm5vbmNlPTAuNjUzMjEyODc3NTQ4NjA5NSZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNjE5ODcyMjEyJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9';

  let session = OT.initSession(apiKey, sessionId);
  
  function handleError(error) {
        if (error) {
          alert(error.message);
        }
      }
  
  function playVideo() {
      //  publisher = OT.initPublisher('myPublisherDiv', publishOptions);
        //publisher.publishVideo(true);
    video.play();
      }
  
  const publish = () => {
    const videoTracks = stream.getVideoTracks();
    const audioTracks = stream.getAudioTracks();
    if (!publisher && audioTracks.length > 0) {
      stream.removeEventListener('addtrack', publish);
      publisher = OT.initPublisher('publisher', {
        videoSource: videoTracks[0],
        audioSource: audioTracks[0],
        fitMode: 'contain',
        width: 320,
        height: 240
      }, (err) => {
        if (err) {
          video.pause();
          alert(err.message);
        } else {
        // video.play();
        }
      });
      
      
      publisher.on('destroyed', () => {
        video.pause();
      });
    }
  };
  stream.addEventListener('addtrack', publish);
  publish();
  
  session.connect(token, function(error) {
        if (error) {
          console.log(error.message);
        } else {

          session.publish(publisher, handleError);

        }
      });



  
  
})();

