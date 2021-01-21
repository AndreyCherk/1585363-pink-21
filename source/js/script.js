//Nav

var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');

  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });

// reviews-slider
(function () {
  const reviewsSlider = document.getElementById('reviews');
  let sliderButtons, sliderNavButtons, slides;

  if (reviewsSlider) {
    const sliderControls = reviewsSlider.querySelector('.reviews-toggles');
    const sliderNav = reviewsSlider.querySelector('.slider-buttons');

    sliderButtons = Array.from(sliderControls.querySelectorAll('.reviews-toggles__toggle'));
    sliderNavButtons = Array.from(sliderNav.querySelectorAll('.slider-buttons__button'));
    slides = Array.from(reviewsSlider.querySelectorAll('.reviews__list'));

    if (slides && sliderButtons) {
      sliderControls.addEventListener('click', clickSliderControls);
      sliderNav.addEventListener('click', clickSliderNav);
    }
  }

  function findCurrentButton(element) {
    return element.classList.contains('reviews-toggles__toggle--current');
  }

  function findCurrentSlide(element) {
    return element.classList.contains('reviews__list--current');
  }

  function changeSlides(indexCurrentSlide, indexNextSlide) {
    slides[indexCurrentSlide].classList.remove('reviews__list--current');
    slides[indexNextSlide].classList.add('reviews__list--current');
  }

  function clickSliderControls(evt) {
    let element = evt.target;

    if (element.classList.contains('reviews-toggles__toggle')) {
      evt.preventDefault();

      let indexCurrentButton = sliderButtons.indexOf(sliderButtons.find(findCurrentButton));
      let indexNextButton = sliderButtons.indexOf(element);

      sliderButtons[indexCurrentButton].classList.remove('reviews-toggles__toggle--current');
      sliderButtons[indexNextButton].classList.add('reviews-toggles__toggle--current');

      let indexCurrentSlide = slides.indexOf(slides.find(findCurrentSlide));
      let indexNextSlide = indexNextButton;

      changeSlides(indexCurrentSlide, indexNextSlide);
    }
  }

  function clickSliderNav(evt) {
    let element = evt.target;

    if (element.classList.contains('slider-buttons__button')) {
      evt.preventDefault();

      let indexButton = sliderNavButtons.indexOf(element);
      let indexCurrentSlide = slides.indexOf(slides.find(findCurrentSlide));
      let indexNextSlide = indexCurrentSlide;

      switch (indexButton) {
        case 0:
          indexNextSlide -= 1;
          if (indexNextSlide < 0) {
            indexNextSlide = slides.length - 1;
          }
          break;

        case 1:
          indexNextSlide += 1;
          if (indexNextSlide >= slides.length) {
            indexNextSlide = 0;
          }
          break;

        default:
          break;
      }

      changeSlides(indexCurrentSlide, indexNextSlide);
    }
  }
})();
