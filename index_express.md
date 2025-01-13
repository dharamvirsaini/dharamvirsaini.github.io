<<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>

  <script src="https://static.opentok.com/v1/js/video-express.js"></script>
  <body>
    <button onclick="joinRoom()">Start Publishing</button>
    <div id="previewContainer"></div>
<div id="roomContainer"></div>

<script type="text/javascript">
 const room = new VideoExpress.Room({
   apiKey: '47763931', // add your OpenTok API key
   sessionId: '1_MX40Nzc2MzkzMX5-MTcwNjc5ODE4MjU1MX5LY1F0eXU0OHJoM3krR2R3TWJURWF6VE5-fn4', // add your OpenTok Session ID
   token: 'T1==cGFydG5lcl9pZD00Nzc2MzkzMSZzaWc9MjJkYzExZTUyMmU2MjdhMmY1NWIxNjYzZjE3ZTQyOGJkYWI3MDhjYjpzZXNzaW9uX2lkPTFfTVg0ME56YzJNemt6TVg1LU1UY3dOamM1T0RFNE1qVTFNWDVMWTFGMGVYVTBPSEpvTTNrclIyUjNUV0pVUldGNlZFNS1mbjQmY3JlYXRlX3RpbWU9MTcyMDExNTE2NCZub25jZT0wLjQzMjYxNDAxMDMyMTcwNDQzJnJvbGU9bW9kZXJhdG9yJmV4cGlyZV90aW1lPTE3MjI3MDcxNjQmaW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0=', // add your OpenTok token
   participantName: 'video_express_name',
 });

 const previewPublisher = new VideoExpress.PreviewPublisher('previewContainer');

//  previewPublisher.previewMedia({
//   targetElement: 'previewContainer',
//   publisherProperties: {
//     resolution: '1280x720',
//
//     // frameRate: 15,
//     videoFilter: {
//       type: 'backgroundBlur',
//       blurStrength: 'high'
//     }
//   },
// });
//previewPublisher.disableVideo();
//var pubOptions = {videoSource: "screen"};
 /*publisherOptionsRef.current = Object.assign({}, publisherOptions, {
           name: "userName",
           videoSource: "screen",
           showControls: true
         });*/
/* screenshare code
 room.join({ publisherProperties: pubOptions }).then((value) => {
  console.log('3rd then, after calling test: ' + value);

  //room.startScreensharing();
});
*/

//var pubOptions = {style: { nameDisplayMode: "off" }};

//BG replacement
// var pubOptions = {"videoFilter": {
//   "type": "backgroundReplacement",
//   "backgroundImgUrl": "https://picsum.photos/200/300.jpg"
// }};

//BG backgroundBlur
// var pubOptions = {"videoFilter": {
//   "type": "backgroundBlur"
// }};



//  room.join({ publisherProperties: pubOptions }).then((value) => {
// });

async function joinRoom(){
  room.join().then((value) => {
   console.log('3rd then, after calling test: ' + value);
   // room.camera.setVideoFilter({
   //   type: 'backgroundBlur',
   //   blurStrength: 'high'
   // });
   //room.camera.disableVideo();

   //room.startScreensharing();
  });

  var participants;
  room.on('participantJoined', (participant) => {
    participants = participant;
    console.log('participant joined: ', participant);

    participant.on('cameraCreated', (cameraSubscriber) => {
      // connectionData is a JSON string from some your server
      console.log('cameraCreated joined with id: ', cameraSubscriber.id);
    });

  });
}



 //room.startScreensharing();

 //room.join();
</script>


  </body>
</html>
