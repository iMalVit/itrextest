import {resetMainInput} from "./resetMainInput";
import {resetSelectInput} from "./resetSelectInput";
import {resetLi} from "./resetLi";


export const show = (page, data) => {

    resetLi();
    document.querySelectorAll('li')[page - 1].classList.add('active');

    resetMainInput();
    resetSelectInput();

    const tableBody = document.querySelector('tbody');

    switch (page) {
        case 1:
            for (let i = 20; i < data.length; i++) {

                tableBody.children[i].classList.add('invalidSearch');
            }
            break;

        case 2:
            for (let i = 0; i < 20; i++) {

                tableBody.children[i].classList.add('invalidSearch');
            }

            for (let i = 40; i < data.length; i++) {

                tableBody.children[i].classList.add('invalidSearch');
            }
            break;

        case 3:

            for (let i = 0; i < 40; i++) {

                tableBody.children[i].classList.add('invalidSearch');
            }

            for (let i = 60; i < data.length; i++) {

                tableBody.children[i].classList.add('invalidSearch');
            }
            break;

        case 4:
            for (let i = 0; i < 60; i++) {

                tableBody.children[i].classList.add('invalidSearch');
            }

            for (let i = 80; i < data.length; i++) {

                tableBody.children[i].classList.add('invalidSearch');
            }
            break;

        case 5:
            for (let i = 0; i < 80; i++) {

                tableBody.children[i].classList.add('invalidSearch');
            }

            for (let i = 100; i < data.length; i++) {

                tableBody.children[i].classList.add('invalidSearch');
            }
            break;
        case 6:

            for (let i = 0; i < 100; i++) {

                tableBody.children[i].classList.add('invalidSearch');
            }

            for (let i = 120; i < data.length; i++) {

                tableBody.children[i].classList.add('invalidSearch');
            }

    }

}
