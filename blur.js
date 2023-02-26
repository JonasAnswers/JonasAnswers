const circle = document.querySelector('.circle');
const blur = document.querySelector('#blur');

document.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;

  const circleWidth = circle.offsetWidth;
  const circleHeight = circle.offsetHeight;
  const circleX = x - circleWidth / 2;
  const circleY = y - circleHeight / 2;

  circle.style.left = `${circleX}px`;
  circle.style.top = `${circleY}px`;
});

document.addEventListener('mouseover', () => {
  circle.style.display = 'block';
  blur.style.display = 'block';
});

document.addEventListener('mouseout', () => {
  circle.style.display = 'none';
  blur.style.display = 'none';
});
