export default class ParisEvents {

    constructor() {
        this.urlBase = 'https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-';
    }

    getAll(keyword = '', dateStart = new Date().getFullYear(), sort = '', rows = 9, start) {
        return fetch(`${this.urlBase}&rows=${rows}&q=${keyword}&refine.date_start=${dateStart}&sort=${sort}&start=${start}`)
            .then(response => response.json())
            .then((data) => {
                // En utilisant array.map trier les résultats pour retouner uniqument les infos nécessaires
                return {
                    nhits: data.nhits,
                    records: data.records.map((element) => {
                        return {
                            name: element.fields.title,
                            address: {
                                name: element.fields.address_name,
                                street: element.fields.address_street,
                                zipcode: element.fields.address_zipcode,
                                city: element.fields.address_city
                            },
                            image: {
                                url: element.fields.cover_url,
                                alt: element.fields.cover_alt
                            },
                            date: element.fields.date_description
                        }
                    })
                }
            });
    }

}