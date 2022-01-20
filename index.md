<html>
<body>

<div id="otEmbedContainer" style="width:800px; height:640px"></div>
<script src="https://tokbox.com/embed/embed/ot-embed.js?embedId=65d01f1f-1daa-4cee-80b1-4de0e4fa7c8b&room=DEFAULT_ROOM">
  
  let subscriberCount = setInterval(myTimer, 2000);

function myTimer() {
  if(OT.subscribers.length == 0) {
  console.log("no subscribers");
  } else {
  console.log("subscriber has joined");
  clearInterval(subscriberCount);
  
  }
}
</script>

</body>
</html>
