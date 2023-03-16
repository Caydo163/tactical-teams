class ApiService {
    static executeGetRequest(url, method, api_key) {
        let headers = {
            method : method,
            headers : { Authorization: api_key },
        }

        return fetch(url, headers).then(response => {
            console.log('response -> ', response);
            if(!response.ok) {
                throw new Error('Erreur sur l\'appel HTTP pour l\'API');
            }
            return response.json();
        }).then((json) => {
            console.log('json -> ',json);
            return json;
        }).catch((error) => {
            console.error('Error : ',error);
        });
    }
}
