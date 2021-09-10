import {show} from "./pagination";

export function sortTable(index, inverse, type, data) {


    if (document.querySelector('#search').value === '' && (document.querySelector('.selectInput').value === '' && document.querySelector('.selectInput').firstChild.innerHTML === '--Please choose a state--')) {
        document.querySelectorAll('.rows').forEach((row) => {
            row.classList.remove('invalidSearch')
        })


    }

    const table = document.querySelector('table')
    const tbody = table.querySelector('tbody')

    function compare(RowA, RowB) {
        const rowDataA = RowA.cells[index].innerHTML;
        const rowDataB = RowB.cells[index].innerHTML;

        switch (type) {
            case 'num':
                return rowDataA - rowDataB;
            case 'text':
                if (rowDataA < rowDataB) return -1;
                else if (rowDataA > rowDataB) return 1;
                return 0;
        }

    }

    function compareInverse(RowA, RowB) {
        const rowDataA = RowA.cells[index].innerHTML;
        const rowDataB = RowB.cells[index].innerHTML;
        switch (type) {
            case 'num':
                return rowDataB - rowDataA;
            case 'text':
                if (rowDataA > rowDataB) return -1;
                else if (rowDataA < rowDataB) return 1;
                return 0;


        }

    }

    let rows = [].slice.call(tbody.rows)


    if (!inverse) {
        rows.sort(compare);

    } else {
        rows.sort(compareInverse);

    }

    table.removeChild(tbody);

    for (let i = 0; i < rows.length; i++) {
        tbody.appendChild(rows[i]);
    }


    table.appendChild(tbody);

    if (document.querySelector('#search').value === '' && (document.querySelector('.selectInput').value === '' && document.querySelector('.selectInput').firstChild.innerHTML === '--Please choose a state--')) {
        show(1, data);

    }
}
