class ApiService {
    static executeGetRequest(url, api_key) {
        let myHeaders = new Headers();
        myHeaders.append('Authorization', api_key);
        let request = {
            method : 'GET',
            headers : myHeaders,
        }

        return fetch(url, request).then((response) => {
            console.log('response -> ', response);
            return response.json();
        }).then((json) => {
            console.log('json -> ',json);
            return json;
        }).catch((error) => {
            console.error(error);
        });
    }
}
