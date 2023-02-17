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
  if (currentPos <= minPos) return
  currentPos--
  calculateTransform()
}

function goNext() {
  if (currentPos >= maxPos) return
  currentPos++
  calculateTransform()
}

prevBtn.addEventListener('click', goBack)
nextBtn.addEventListener('click', goNext)
