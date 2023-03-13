class NewsService extends ApiService {
    static getNews() {
        const url = 'https://newsapi.org/v2/everything?qInTitle=esport';
        const api_key = 'a7678bb6461e404b8bbe95f7e7c8cd2b';
        return super.executeGetRequest(url, api_key).then((result) => {
            console.log('getNews = ',result.articles);
            return result.articles;
        });
    }
}
