import {show} from "./pagination";
import {resetLi} from "./resetLi";
import {resetMainInput} from "./resetMainInput";

export function selectInputChange(mainInput, data, event) {

    resetLi();
    resetMainInput();

    if (event.target.value !== '') {
        document.querySelectorAll('.rows').forEach(row => {
            if (row.lastChild.innerHTML !== event.target.value) {
                row.classList.add('invalidSearch')
            } else {
                row.classList.remove('invalidSearch')
            }
        })
    } else {
        document.querySelectorAll('tr').forEach(row => {
            row.classList.remove('invalidSearch')
        })

        show(1, data);
    }
}
