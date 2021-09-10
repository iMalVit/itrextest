import {show} from "./pagination";
import {resetLi} from "./resetLi";
import {resetSelectInput} from "./resetSelectInput";

export function mainInputChange(selectInput, data, event) {

    resetLi();
    resetSelectInput();
    let arr = [];
    const regex = new RegExp(`${event.target.value}`, 'gmi');

    if (event.target.value !== '') {
        for (let a = 0; a < data.length; a++) {
            if (regex.test(data[a].firstName) || regex.test(data[a].lastName)) {
                arr.push(a);
            } else {
                document.querySelectorAll('.rows').forEach(row => {
                    if (arr.includes(+row.id.slice(2))) {
                        row.classList.remove('invalidSearch')
                    } else row.classList.add('invalidSearch')
                })

            }
        }
    } else {
        document.querySelectorAll('tr').forEach(row => {
            row.classList.remove('invalidSearch')
        })

        show(1, data);
    }


}
