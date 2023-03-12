class ApiService {
    static async get() {
        try {
            const data = await NewsService.getNews();
            return JSON.parse(data);
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}