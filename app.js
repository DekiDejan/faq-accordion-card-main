const h2s = document.querySelectorAll('section')

for (let h2 of h2s) {
    h2.addEventListener('click', (e) => {
        e.target.classList.toggle('bold')
        e.target.parentElement.nextElementSibling.classList.toggle('show')
        e.target.nextElementSibling.classList.toggle('rotate')
    })
}