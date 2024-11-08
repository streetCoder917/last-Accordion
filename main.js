const Buttons = document.querySelectorAll('button');

for(let Button of Buttons) {
    Button.addEventListener('click', function() {
        this.classList.toggle('down')
        this.nextElementSibling.classList.toggle('active')
    })
}