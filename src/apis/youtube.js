import axios from 'axios';

const KEY = 'AIzaSyBu0v3xyWWGWQ_6s2r-uCRcP31hfFmIxH0';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
});