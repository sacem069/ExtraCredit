

const fig1 = document.getElementById('fig-1')
const fig2 = document.getElementById('fig-2')
const btn = document.getElementById('toggle-btn')

let current = 1

btn.addEventListener('click', function() {

    if (current === 1){
        fig1.style.display = 'none'
        fig2.style.display = 'block'
    btn.textContent = '← Back'
    current = 2
    } else {
         fig2.style.display = 'none'
    fig1.style.display = 'block'
    btn.textContent = 'Next →'
    current = 1
    }
})