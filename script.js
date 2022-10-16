
const display = document.getElementById('display')

const buttons = Array.from(document.querySelectorAll('.button'))

buttons.map((button) => {
    button.addEventListener('click', (event) => {
        switch (event.target.innerText) {
            case 'C':
                display.innerText = ''
                break;
            case 'DEL':
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

