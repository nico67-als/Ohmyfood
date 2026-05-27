const likeButtons = document.querySelectorAll('.restaurants-card__like');

likeButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    button.classList.toggle('is-liked');
  });
});