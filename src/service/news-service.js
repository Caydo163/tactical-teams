class NewsService extends ApiService {
    static getNews() {
        const url = 'https://newsapi.org/v2/everything?qInTitle=esport&pageSize=20&language=fr';
        const api_key = 'a7678bb6461e404b8bbe95f7e7c8cd2b';
        const method = 'GET';
        return super.executeGetRequest(url, method, api_key).then((result) => {
            console.log('getNews => ',result.articles);
            return result.articles;
        });
    }
}
