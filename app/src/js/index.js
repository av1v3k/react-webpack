import React from 'react';
import ReactDOM from 'react-dom';
import SearchBox from './Components/SearchBox';

class Appwrapper extends React.Component{
    render(){
        return(
        <div className='innerWrapper'>
            <h3 className={this.props.class}>{this.props.title}</h3>
            <SearchBox placeholder='Search Country'></SearchBox>
        </div>
        );
    }
}

ReactDOM.render(
    <Appwrapper class='app-wrapper' title="Search Countries and Select to Load it's Map using Google Maps API"></Appwrapper>,
    document.getElementById('my-app')
);