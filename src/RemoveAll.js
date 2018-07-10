import React from "react";

class RemoveAll extends React.Component {
    render(){
    return (
        <button
        className='remove-button' 
        onClick={this.props.onClick}>CLEAR ALL</button>);
    }
}

export default RemoveAll;