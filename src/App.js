import React from 'react';
import './css/App.css'
import Search from './Search.js';
import Gifs from './Gifs.js';
import RemoveAll from './RemoveAll';


class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            term:'',
            gifs:[]
        };
        this.newSearch = this.newSearch.bind(this);
        this.gifSearch = this.gifSearch.bind(this);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    gifSearch(term){
        const url = 'https://api.giphy.com/v1/gifs/search?q=';
        const searchTerm = term;
        const apiKey = '&api_key=dc6zaTOxFJmzC';
        const endpoint = `${url}${searchTerm}${apiKey}`;
        fetch(endpoint)
        .then(
            response => {
                if(response.ok){
                    return response.json(); 
                }
                throw new Error('Request Failed');                         
            }, networkError => console.log(networkError.message)
        ).then(results =>{
            const resultsLength = results.data.length;
            console.log(resultsLength);
            if(resultsLength > 0){
                const random = Math.floor(Math.random()*resultsLength);
                let gifId = results.data[random].id;
                let gifUrl = results.data[random].images.fixed_height_still.url;
                let gifData = [gifId,gifUrl];

                let gifs = this.state.gifs.slice();
                gifs.push(gifData);
                this.setState({gifs});
            }else{
            alert('no results');
            }
        });
    }

    newSearch(term){
        this.setState({term:term});
        this.gifSearch(term);
    }
    
    handleRemoveAll(){
        const gifs= this.state.gifs.slice(0,1);
        this.setState({gifs});
    }
    componentDidMount(){
        this.gifSearch('random');
    }

    render(){
        return(
            <div className="main">
                <h1>GIPHY PARTY</h1>
                <Search onSubmit={this.newSearch}/>
                <RemoveAll onClick={this.handleRemoveAll}/>
                <Gifs gifs={this.state.gifs}/>
            </div>
            
        );
    }
}
export default App;