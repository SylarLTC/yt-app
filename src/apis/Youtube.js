import axios from 'axios';

const KEY = 'AIzaSyCnyoOTzaPqHuux9fR2c0xOT6M-V8fOjCo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
});