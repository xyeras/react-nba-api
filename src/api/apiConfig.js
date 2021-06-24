import axios from 'axios';

const instance = axios.create({
    baseURL: "https://www.balldontlie.io/api/v1",
    headers: {
        "Content-type": "application/json",
    }
});

export default instance;