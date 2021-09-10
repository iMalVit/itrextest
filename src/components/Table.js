import {mainInputChange} from "./mainInputChange";
import {selectInputChange} from "./selectInputChange";
import {show} from "./pagination";

export default class Table {

    constructor(data, root, selectInput, mainInput) {

        this.data = data;
        this.root = root;
        this.index = 0;
        this.selectInput = selectInput;
        this.mainInput = mainInput;

        this.notesOnPage = 20;
        this.countOfPages = Math.ceil(data.length / this.notesOnPage);
    }

    create() {
        const inputWrapper = document.createElement('div');
        inputWrapper.classList.add('inputWrapper');
        this.root.prepend(inputWrapper);
        const labelInput = document.createElement('label');

        let set = new Set();
        for (let i = 0; i < this.data.length; i++) {
            set.add(this.data[i].adress.state)
        }
        this.selectInput.name = 'state'
        inputWrapper.append(this.selectInput)
        const optionStart = document.createElement('option');
        optionStart.innerHTML = '--Please choose an state--';
        optionStart.value = '';
        this.selectInput.append(optionStart)
        this.selectInput.classList.add('selectInput')

        for (let i = 0; i < set.size; i++) {
            const option = document.createElement('option');
            option.innerHTML = Array.from(set)[i];
            option.value = Array.from(set)[i];
            this.selectInput.append(option)

        }
        labelInput.for = 'search';
        labelInput.innerHTML = 'Search by name';
        inputWrapper.append(labelInput);
        this.mainInput.type = 'text';
        this.mainInput.id = 'search';
        inputWrapper.append(this.mainInput)
        this.mainInput.oninput = mainInputChange.bind(null, this.selectInput, this.data);
        this.selectInput.oninput = selectInputChange.bind(null, this.mainInput, this.data);
        const table = document.createElement('table');
        const tableHead = document.createElement('thead');
        const tableBody = document.createElement('tbody');
        const tableHead__tr = document.createElement('tr');
        const tableHead__th1 = document.createElement('th');
        const tableHead__th2 = document.createElement('th');
        const tableHead__th3 = document.createElement('th');
        const tableHead__th4 = document.createElement('th');
        const tableHead__th5 = document.createElement('th');
        const tableHead__th6 = document.createElement('th');

        const footer = document.createElement('footer');
        footer.innerHTML = 'Created by Vitali Malyshkin for ITRex Group in 2021, Minsk BY'

        this.root.append(table);
        table.append(tableHead);
        table.append(tableBody)
        tableHead.append(tableHead__tr);
        tableHead__tr.append(tableHead__th1);
        tableHead__tr.append(tableHead__th2);
        tableHead__tr.append(tableHead__th3);
        tableHead__tr.append(tableHead__th4);
        tableHead__tr.append(tableHead__th5);
        tableHead__tr.append(tableHead__th6);
        tableHead__th1.textContent = 'id';
        tableHead__th2.textContent = 'First name';
        tableHead__th3.textContent = 'Last name';
        tableHead__th4.textContent = 'Email';
        tableHead__th5.textContent = 'Phone';
        tableHead__th6.textContent = 'State';
        tableHead__th1.classList.add('tableHeader')
        tableHead__th2.classList.add('tableHeader')
        tableHead__th3.classList.add('tableHeader')
        tableHead__th4.classList.add('tableHeader')
        tableHead__th5.classList.add('tableHeader')
        tableHead__th6.classList.add('tableHeader')
        tableHead__th1.id = 'numbers1';
        tableHead__th2.id = 'letters1';
        tableHead__th3.id = 'letters2';
        tableHead__th4.id = 'letters3';
        tableHead__th5.id = 'letters4';
        tableHead__th6.id = 'letters5';



        const creatDataRow = (data) => {
            const tr = document.createElement('tr');
            tr.id = `id${this.index++}`;
            tr.classList.add('rows')
            const td1 = document.createElement('td');
            const td2 = document.createElement('td');
            const td3 = document.createElement('td');
            const td4 = document.createElement('td');
            const td5 = document.createElement('td');
            const td6 = document.createElement('td');
            tableBody.append(tr);
            tr.append(td1);
            tr.append(td2);
            tr.append(td3);
            tr.append(td4);
            tr.append(td5);
            tr.append(td6);
            td1.textContent = data.id;
            td2.textContent = data.firstName;
            td3.textContent = data.lastName;
            td4.textContent = data.email;
            td5.textContent = data.phone;
            td6.textContent = data.adress.state;
            td1.classList.add('tableCell')
            td2.classList.add('tableCell')
            td3.classList.add('tableCell')
            td4.classList.add('tableCell')
            td5.classList.add('tableCell')
            td6.classList.add('tableCell')
        }


        for (let i = 0; i < this.data.length; i++) {
            creatDataRow(this.data[i])
        }


        const pageWrapper = document.createElement('div');
        this.root.append(pageWrapper);
        pageWrapper.classList.add('pageWrapper')
        let items = [];
        for (let i = 1; i <= this.countOfPages; i++) {
            const li = document.createElement('li');
            li.innerHTML = `${i}`;
            pageWrapper.append(li);
            li.classList.add('pageButton');
            items.push(li);
        }


        for (let i = 0; i < items.length; i++) {
            items[i].addEventListener('click', () => {
                document.querySelectorAll('.rows').forEach(row => {
                    row.classList.remove('invalidSearch')
                })

                show(i + 1, this.data)
            })
        }

        show(1, this.data);
        this.root.append(footer)

    }


}
