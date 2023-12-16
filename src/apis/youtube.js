import axios from 'axios';
const KEY = 'AIzaSyCPUXcXjgQ_7IChvGcc3wGxkUSJV8DpT0E'; 

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})