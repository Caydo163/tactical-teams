class ResultService extends ApiService {
    static postResult() {
        const url = 'http://www.post-result.com/';
        const api_key = '';
        const method = 'POST';
        return super.executeGetRequest(url, method, api_key).then((result) => {
            console.log('post => ',result);
            return result;
        });
    }
}
