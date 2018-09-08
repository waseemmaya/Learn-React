import React, { Component } from 'react';


// const DEFAULT_QUERY = 'redux';
// const PATH_BASE = 'https://hn.algolia.com/api/v1';
// const PATH_SEARCH = '/search';
// const PARAM_SEARCH = 'query=';

// const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}`;
const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=aad1919ff1fc4ce1bbc390acabd07b88'

console.log(url)

class FetchApi extends Component {
    constructor() {
        super();
        this.state = {

        }
        // this.show = this.show.bind(this);
        // this.fetchData = this.fetchData.bind(this);
    }
    render(obj) {
        console.log(obj)
        return (
            <div>
               <h1>Hello</h1>
            {this.fetchData()}
            </div>
        );
    }


    fetchData() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
    }

}

export default FetchApi;