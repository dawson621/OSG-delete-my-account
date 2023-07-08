<script>
var heart = document.querySelector('.heart');
var audio = document.getElementById('myAudio');
var isAnimating = false;

function toggleAnimation() {
  isAnimating = !isAnimating;
  heart.classList.toggle('clicked');
}

function startAnimation() {
  if (!isAnimating) {
    toggleAnimation();
  }
  audio.play();
}

function stopAnimation() {
  if (isAnimating) {
    toggleAnimation();
  }
  audio.pause();
  audio.currentTime = 0;
}

heart.addEventListener('mouseover', toggleAnimation);
heart.addEventListener('click', toggleAnimation);
heart.addEventListener('mouseenter', startAnimation);
heart.addEventListener('mouseleave', stopAnimation);
</script>
