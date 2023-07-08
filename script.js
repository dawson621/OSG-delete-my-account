<script>
var heart = document.querySelector('.heart');
var audio = document.getElementById('myAudio');

function toggleAnimation() {
  heart.classList.toggle('clicked');
}

heart.addEventListener('mouseover', toggleAnimation);
heart.addEventListener('click', toggleAnimation);
heart.addEventListener('mouseenter', function() {
  audio.play();
});
</script>
