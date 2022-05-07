import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/search/photos',
    headers:{
        Authorization: 'Client-ID mC7jWzLtkUMt1-MyJYeKKAbxdqLVNx2L8cIwY_MQkyE'
    }
});