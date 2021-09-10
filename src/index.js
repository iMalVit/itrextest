import {getData} from "./components/api";
import Table from "./components/Table";
import {sortTable} from "./components/sortTable";
import "./styles/styles.css"


const root = document.querySelector('.root');
const selectInput = document.createElement('select');
const mainInput = document.createElement('input');
let data;
let isTrue = true;





getData().then( requestData => {
    data = requestData;

    const table = new Table(data, root, selectInput, mainInput);

    table.create();

    document.querySelector('table').addEventListener('click', eventStatistics);
})






function eventStatistics(event) {

    if (event.target.tagName === 'TH') {
        const inverse = event.target.classList.contains('inverse-sort');
        if (event.target.id.slice(0, 7) === 'numbers') {
            document.getElementById(event.target.id).classList.toggle('inverse-sort');
            const index = event.target.cellIndex;
            sortTable(index, inverse, 'num', data)
        } else {
            document.getElementById(event.target.id).classList.toggle('inverse-sort');
            const index = event.target.cellIndex;
            sortTable(index, inverse, 'text', data)
        }
        const headers = document.querySelectorAll('th');
        Array.from(headers).forEach((item) => {
            item.classList.remove('inverse-sort-click');
            if (item.id !== event.target.id) {
                item.classList.remove('inverse-sort');
            }
        });
        document.getElementById(event.target.id).classList.add('inverse-sort-click');

    }

    else if(event.target.closest('tr')) {



        if(isTrue) {
            const infoTable = document.createElement('div');
            infoTable.classList.add('infoTable')
            root.append(infoTable);


            const TITLE = document.createElement('p');
            TITLE.innerHTML = 'Profile Info:';
            infoTable.append(TITLE);

            const SELECTED_PROFILE = document.createElement('p');
            SELECTED_PROFILE.innerHTML = `Selected profile: ${event.target.closest('tr').children[1].innerHTML} ${event.target.closest('tr').children[2].innerHTML}`;
            SELECTED_PROFILE.id = 'SELECTED_PROFILE'
            infoTable.append(SELECTED_PROFILE);

            const DESCRIPTION = document.createElement('p');
            DESCRIPTION.innerHTML =  `Description: ${data[+event.target.closest('tr').id.slice(2)].description}`;
            DESCRIPTION.id = 'DESCRIPTION';
            infoTable.append(DESCRIPTION)

            const ADDRESS = document.createElement('p');
            ADDRESS.innerHTML = `Address: ${data[+event.target.closest('tr').id.slice(2)].adress.streetAddress}`;
            ADDRESS.id = 'ADDRESS';
            infoTable.append(ADDRESS);

            const CITY = document.createElement('p');
            CITY.innerHTML = `City: ${data[+event.target.closest('tr').id.slice(2)].adress.city}`
            CITY.id = 'CITY';
            infoTable.append(CITY);

            const STATE = document.createElement('p');
            STATE.innerHTML = `State: ${data[+event.target.closest('tr').id.slice(2)].adress.state}`;
            STATE.id = 'STATE';
            infoTable.append(STATE);

            const INDEX = document.createElement('p');
            INDEX.innerHTML = `Index: ${data[+event.target.closest('tr').id.slice(2)].adress.zip}`;
            INDEX.id = 'INDEX';
            infoTable.append(INDEX);

            isTrue = false;


        }
        else {
            document.querySelector('#SELECTED_PROFILE').innerHTML = `Selected profile: ${event.target.closest('tr').children[1].innerHTML} ${event.target.closest('tr').children[2].innerHTML}`;
            document.querySelector('#DESCRIPTION').innerHTML = `Description: ${data[+event.target.closest('tr').id.slice(2)].description}`;
            document.querySelector('#ADDRESS').innerHTML = `Address: ${data[+event.target.closest('tr').id.slice(2)].adress.streetAddress}`;
            document.querySelector('#CITY').innerHTML = `City: ${data[+event.target.closest('tr').id.slice(2)].adress.city}`;
            document.querySelector('#STATE').innerHTML = `State: ${data[+event.target.closest('tr').id.slice(2)].adress.state}`;
            document.querySelector('#INDEX').innerHTML = `Index: ${data[+event.target.closest('tr').id.slice(2)].adress.zip}`;
        }
    }
    return isTrue;
}
