<html>
  <head>
    <meta charset="utf-8">
    <title>Publish from a Video Element</title>
    <button onclick="playVideo()">Play Video</button>

    <script src="https://static.opentok.com/v2/js/opentok.min.js"></script>
    <style media="screen">
      html, body {
        font-family: Helvetica, Arial, sans-serif;
        background: #fff;
        margin: 0px;
      }
      div.wrapper label {
        display: block;
        width: 100%;
        text-align: center;
        font-weight: bold;
        font-size: 20px;
      }
      div.wrapper {
        width: 320px;
        float: left;
        margin: 20px;
      }
    </style>
  </head>
  <body>
    <div class="wrapper">
      <label>Video</label>
      <video id="video" src="mp3_audio.mp3" width="320" height="240" controls></video>
    </div>
    <div class="wrapper">
      <label>Publisher</label>
      <div id="publisher"></div>
    </div>

    <script src="app.js" charset="utf-8"></script>
  </body>
</html>
