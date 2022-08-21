const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.container')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length    // коллекцию дивов, чтобы получить именно число пишем .length

let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`  // -1 т.к по умолчанию есть один слайд

upBtn.addEventListener('click', () => {
  changeSlide('up')
})

downBtn.addEventListener('click', () => {
  changeSlide('down')
})

function changeSlide(direction) {
  if (direction === 'up') {
    activeSlideIndex++                      // ++ прибавить единицу
    if (activeSlideIndex === slidesCount)
    {
      activeSlideIndex = 0
    }
  } else if (direction === 'down') {        // -- отнять единицу
    activeSlideIndex--
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1
    }
  }

  const height = container.clientHeight  // высота контента

  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
}