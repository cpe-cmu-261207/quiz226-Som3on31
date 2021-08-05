const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

// define more constants and variables here

let clickcount = 0

btn_toggle.onclick = () => {
  clickcount++
  if (clickcount % 2 === 0) {
    author.innerHTML = ''
    calculation.innerHTML = 630610767 + length.value
    btn_toggle.innerHTML = 'Show Author'
  } else {
    author.innerHTML = ''
    calculation.innerHTML = 630610767 + length.value
    btn_toggle.innerHTML = 'Show Calculation'
  }
}

// more codes for Search and Reset buttons here

const context = document.getElementById('text')



