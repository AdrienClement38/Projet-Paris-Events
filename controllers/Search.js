import app from "../app/app.js";
import ParisEvents from "../models/ParisEvents.js";
export default class Search {
    constructor() {
        this.view = 'search.html';
    }

    executeHttpRequest() {
        document.querySelector('#formSearch button[type="submit"]').addEventListener('click', (event) => {
            event.preventDefault();
            const parisEvents = new ParisEvents();
            let keyword = document.querySelector('#q').value;
            let dateStart = document.querySelector('#dateStart').value;
            let sortBy = document.querySelector('#sortBy').value;
            parisEvents.search(keyword, dateStart, sortBy).then(app.dom.renderEvents);
        });
    }
}