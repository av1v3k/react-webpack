import React from 'react';


export default class SearchBox extends React.Component{
    render(){
        return(
            <div>
                <input className='searchbox' placeholder={this.props.placeholder}></input>
            </div>
        );
    }
}
