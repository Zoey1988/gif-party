import React,{Component} from "react";
import './css/Search.css';
class Search extends Component{
    
    constructor(props){
        super(props);
        this.state={
            input: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({input:e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        const searchTerm = e.target.elements.search.value.trim();
        if(searchTerm){
            this.props.onSubmit(searchTerm);
            this.setState({input:''});
        }
        
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                  type='search'
                  name='search'
                  placeholder='search something'
                  value={this.state.input} 
                  onChange={this.handleChange}/>

                <button type='submit' className="search-button">Search</button>
            </form>
        );
    }
}
export default Search;