const display = document.getElementById('display')

const buttons = Array.from(document.querySelectorAll('.button'))

buttons.map((button) => {
    button.addEventListener('click', (event) => {
        switch (event.target.innerText) {
            case 'C':
                display.innerText = ''
                break;
            case '←':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1)               }
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText)
                } catch (error) {
                    display.innerText = 'Error!'
                }
                break;
        
            default:
                display.innerText += event.target.innerText
                break;
        }
        
    })
})



// Toggle Theme!!

const dark = document.querySelector('.dark')
const light = document.querySelector('.light')
const purple = document.querySelector('.purple')


const darkTheme = () => {
    let currentTheme = document.documentElement.getAttribute('data-theme')
    document.documentElement.setAttribute('data-theme', currentTheme === 'light' || currentTheme === 'purple' ? 'dark' : 'dark')
}

const lightTheme = () => {
    let currentTheme = document.documentElement.getAttribute('data-theme')
    document.documentElement.setAttribute('data-theme', currentTheme === 'dark' || currentTheme === 'purple' ? 'light' : 'light')
}

const purpleTheme = () => {
    let currentTheme = document.documentElement.getAttribute('data-theme')
    document.documentElement.setAttribute('data-theme', currentTheme === 'dark' || currentTheme === 'light' ? 'purple' : 'purple')
}

dark.addEventListener('click', darkTheme)
light.addEventListener('click', lightTheme)
purple.addEventListener('click', purpleTheme)