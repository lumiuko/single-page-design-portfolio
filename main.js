const showcaseItems = document.querySelectorAll('#showcase > img')
const prevBtn = document.getElementById('prev-btn')
const nextBtn = document.getElementById('next-btn')

const gap = -32
const minPos = -2
const maxPos = 2
let currentPos = 0

function calculateTransform() {
  const transform = `translateX(calc(${-100 * currentPos}% + ${gap * currentPos}px))`

  showcaseItems.forEach(item => {
    item.style.transform = transform
  })
}

function goBack() {
  currentPos--
  if (currentPos < minPos) {
    currentPos = maxPos
  }
  calculateTransform()
}

function goNext() {
  currentPos++
  if (currentPos > maxPos) {
    currentPos = minPos
  }
  calculateTransform()
}

prevBtn.addEventListener('click', goBack)
nextBtn.addEventListener('click', goNext)
