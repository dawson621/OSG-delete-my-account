var heart = document.querySelector('.heart');
var audio = document.getElementById('myAudio');

heart.addEventListener('mouseenter', function() {
  audio.play();
});
