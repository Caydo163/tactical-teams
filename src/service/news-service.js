class NewsService {
    static getNews() {
        // let request = new XMLHttpRequest();
        // request.open('GET', 'https://newsapi.org/v2/everything?qInTitle=esport');
        // request.requestType = 'json';
        // request.setRequestHeader('Authorization', API_KEY);
        // // request.setRequestHeader('Access-Control-Allow-Headers', 'Accept');
        // request.send();
        // let result;
        // request.onload = function() {
        //     // console.log('rep'+request.response);
        //      // console.log('news -> '+JSON.parse(request.response));
        //     result = JSON.parse(request.response);
        //     console.log('a'+result);
        // }
        // console.log('b'+result);
        // return result;  

        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open('GET', 'https://newsapi.org/v2/everything?qInTitle=esport');
            request.requestType = 'json';
            request.setRequestHeader('Authorization', API_KEY);
            request.onload = function() {
                if (request.status === 200) {
                    resolve(JSON.parse(request.response));
                } else {
                    reject(new Error('Erreur lors de la récupération des nouvelles'));
                }
            }
            request.onerror = function() {
                reject(new Error('Erreur lors de la récupération des nouvelles'));
            }
            request.send();
        });
    }
}
