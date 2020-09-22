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
   var sessionId = '1_MX40NjI2OTI0Mn5-MTU2NTkyNzIzMjU5Nn5SQ2k2QlJhTlhBNDd1cERxRkx3WHJ3dkN-fg';
 //var token = 'T1==cGFydG5lcl9pZD00NTMwMjU4MiZzaWc9Mjk0ZWE5Y2IxOTFkYjk3ZTVhZTM1ODgxMjRhOWFjNmI4YmNlOTc1ZTpzZXNzaW9uX2lkPTFfTVg0ME5UTXdNalU0TW41LU1UUTVOemt5TkRRNU1EZzBObjUzYTNCNFpVOWFNSFpPZGtWa01tSkliRkJTVUc5bWRtZC1mZyZjcmVhdGVfdGltZT0xNDk4MDUzNDkwJm5vbmNlPTAuOTI3MjcyMDM2NjEzNTI1NCZyb2xlPXN1YnNjcmliZXImZXhwaXJlX3RpbWU9MTUwMDY0NTQ4OQ=='
   var token = 'T1==cGFydG5lcl9pZD00NjI2OTI0MiZzaWc9MjdlMTlmMWYwN2Y2ZDU4OGRkNWFjN2MxMzdhNGE2YjdkNjk4YWQzYTpzZXNzaW9uX2lkPTFfTVg0ME5qSTJPVEkwTW41LU1UVTJOVGt5TnpJek1qVTVObjVTUTJrMlFsSmhUbGhCTkRkMWNFUnhSa3gzV0hKM2RrTi1mZyZjcmVhdGVfdGltZT0xNTk4MTc3NTIyJm5vbmNlPTAuNTM3NzgwNzk2OTI2MDc5OSZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNjAwNzY5NTIxJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9';

  let session = OT.initSession(apiKey, sessionId);
  
  function handleError(error) {
        if (error) {
          alert(error.message);
        }
      }
  
  const publish = () => {
    const videoTracks = stream.getVideoTracks();
    const audioTracks = stream.getAudioTracks();
    if (!publisher && videoTracks.length > 0 && audioTracks.length > 0) {
      stream.removeEventListener('addtrack', publish);
      publisher = OT.initPublisher('publisher', {
        videoSource: null,
        audioSource: audioTracks[0],
        fitMode: 'contain',
        width: 320,
        height: 240
      }, (err) => {
        if (err) {
          video.pause();
          alert(err.message);
        } else {
          //video.play();
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

