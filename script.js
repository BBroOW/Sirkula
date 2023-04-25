console.log(window.innerHeight)

const [red, green, blue] = [69, 111, 225]
const section1 = document.querySelector('#background')

window.addEventListener('scroll', () => {
  let y = 1 + (window.scrollY || window.pageYOffset) / 100
  y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
  const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
  section1.style.backgroundColor = `rgb(${r}, ${g}, ${b}) !important`
  console.log(r,g,b)
})

