import React from 'react';
import styles from '../../css/style.css';

export default class SearchBox extends React.Component{
    render(){
        return(
            <div className='searhboxWrapper'>
                <input type={this.props.type} className={this.props.class} placeholder={this.props.placeholder}></input>
            </div>
        );
    }
}
