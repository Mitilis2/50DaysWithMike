const panels = document.querySelectorAll('.panel')
const panelOne = document.querySelectorAll('.one')
const panelTwo = document.querySelectorAll('.two')
const panelThree = document.querySelectorAll('.three')
const panelFour = document.querySelectorAll('.four')
const panelFive = document.querySelectorAll('.five')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

function changeBackground(color) {
    document.body.style.background = color
}
