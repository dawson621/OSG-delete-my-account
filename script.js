var heart = document.querySelector('.heart');
var audio = document.getElementById('myAudio');

heart.addEventListener('mouseenter', function() {
  audio.play();
});
<script>
var heart = document.querySelector('.heart');

function toggleAnimation() {
  heart.classList.toggle('clicked');
}

heart.addEventListener('mouseover', toggleAnimation);
heart.addEventListener('click', toggleAnimation);
</script>

