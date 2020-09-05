import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
    console.log(request);
    // Edit request config
    return request;
}, error => { // internet connectivity drop off like 
    console.log(error);
    return Promise.reject(error); //it return to
    // each individual api call error handling block
});

axios.interceptors.response.use(response => {
    console.log(response);
    // Edit request config
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

// var myInterceptor = axios.interceptors.request.use( () {/*...*/});
// axios.interceptors.request.eject(myInterceptor);

// You learned how to add an interceptor, getting rid of one is also easy.
// Simply store the reference to the interceptor in a variable and call eject
// with that reference as an argument, to remove it 

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
