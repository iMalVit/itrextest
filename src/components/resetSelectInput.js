export function resetSelectInput() {
    document.querySelector('.selectInput').value = '';
    document.querySelector('.selectInput').firstChild.innerHTML = '--Please choose a state--'
}
