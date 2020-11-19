const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '19030370-3b0ac62398e7506ebf605c4ab'


export default class ApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
}

   async fetchImages() {
    
       const response = await fetch(`${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`);
       const data = await response.json();
       const cards = await data;
            
      this.incrementPage();
            
       
       return data.hits
    };

    incrementPage() {
        this.page += 1;
    }
    resetPage() {
        this.page = 1;
    }

    get query() {
      return this.searchQuery
    };

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}