let legend = document.querySelector('#legend')
legend.addEventListener('click', show => {
  setTimeout(function () {
    document.querySelector('#box_jp').classList.toggle('hide')
  }, 400)
  setTimeout(function () {
    document.querySelector('#box_rj').classList.toggle('hide')
  }, 600)
  setTimeout(function () {
    document.querySelector('#box_vi').classList.toggle('hide')
  }, 800)
})
