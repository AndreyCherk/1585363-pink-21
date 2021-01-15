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

//Таблица price

(function () {
  const priceBlock = document.getElementById('price');
  let sliderButtons, priceTable;

  if (priceBlock) {
    const sliderControls = priceBlock.querySelector('.slider__toggles');
    priceTable = priceBlock.querySelector('.price__table');

    sliderButtons = Array.from(sliderControls.querySelectorAll('.slider__toggle'));

    if (sliderButtons) {
      sliderControls.addEventListener('click', clickSliderControls);
    }
  }

  function findCurrentButton(element) {
    return element.classList.contains('slider__toggle--current');
  }

  function clickSliderControls(evt) {
    let element = evt.target;

    if (element.classList.contains('slider__toggle')) {
      let indexCurrentButton = sliderButtons.indexOf(sliderButtons.find(findCurrentButton));
      let indexNextButton = sliderButtons.indexOf(element);

      sliderButtons[indexCurrentButton].classList.remove('slider__toggle--current');
      sliderButtons[indexNextButton].classList.add('slider__toggle--current');
      priceTable.style.left = `$(150 - indexNextButton * 100)%`;
    }
  }
})();

