function onInit(){
  document.getElementById('flapImage').addEventListener('mousedown', function(){
    window.gameInstance.SendMessage("Bird", "DoFlap");
  });
}