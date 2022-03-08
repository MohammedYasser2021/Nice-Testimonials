// select items
let image = document.getElementById('person-img')
let author = document.getElementById('auther')
let job = document.getElementById('job')
let info = document.getElementById('info')

// select buttons
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

// set starting item
let currentItem = 0

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  showItem()
})

// next item on click on next-btn
nextBtn.addEventListener('click', function () {
  currentItem++
  if (currentItem >= reviews.length) {
    currentItem = 0
  }
  showItem()
})

// prev item on click on prev-btn
prevBtn.addEventListener('click', function () {
  currentItem--
  if (currentItem < 0) {
    currentItem = reviews.length - 1
  }
  showItem()
})

// random item on click on randomBtn
randomBtn.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * reviews.length)
  showItem()
})

// function show item on screen
function showItem() {
  const item = reviews[currentItem]
  image.src = item.img
  author.textContent = item.name
  job.textContent = item.job
  info.textContent = item.text
}
