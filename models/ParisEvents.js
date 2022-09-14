export default class ParisEvents {

    constructor() {
        this.urlBase = 'https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-';
    }

    search(q, date, sort, adress) {
        // c'est ici qu'on code le fetch pour récupérer les données
        return fetch(`${this.urlBase}&q=${q}&facet=date_start&refine.date_start=${date}&sort=${sort}`)
            .then(response => response.json())
            .then((data) => data.records);
    }
}