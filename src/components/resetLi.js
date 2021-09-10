export function resetLi() {
    document.querySelectorAll('li').forEach((element) => {
        element.classList.remove('active')
    })
}
