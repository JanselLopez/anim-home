const observer = new IntersectionObserver (entries => {
  entries.forEach (entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add ('show');
    } else {
      entry.target.classList.remove ('show');
    }
  });
});

window.onscroll = function () {
  blurToBack ();
};

var timer = null;
window.addEventListener (
  'scroll',
  function () {
    const wallpaper = document.querySelector ('.wall');
    if (timer !== null) {
      wallpaper.classList.add ('blur');
      clearTimeout (timer);
    }
    timer = setTimeout (function () {
      wallpaper.classList.remove ('blur');
    }, 150);
  },
  false
);

const hiddenElements = document.querySelectorAll ('.hidden');
hiddenElements.forEach (element => observer.observe (element));
