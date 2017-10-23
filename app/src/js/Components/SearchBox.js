import React from 'react';
import ListItems from './ListItems';

const countryData = [
    { 'countryName':'India', 'countryValue':'0' },
    { 'countryName':'Japan', 'countryValue':'1' },
    { 'countryName':'China', 'countryValue':'2' },
    { 'countryName':'Thailand', 'countryValue':'3' }
];

export default class SearchBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputData : '',
            filteredCountries: [],
            itemSelected: ''
        };
        this.getInputData = this.getInputData.bind(this);
        this.changeInputVal = this.changeInputVal.bind(this);
        this.fetchData = this.fetchData.bind(this);
        this.updateOnItemSelect = this.updateOnItemSelect.bind(this);
    }
    fetchData(inData){
        let resultData = [];
        resultData = countryData.filter((a, b) => {
            if(a && a !== "")
                return (a.countryName.toLowerCase().indexOf(inData.toLowerCase()) > -1);
            else
                return false;
        });
        if(resultData && resultData.length > 0){
            this.setState({filteredCountries: resultData}, () => {
                //console.log("Selected Countries", this.state.filteredCountries);
            });
        }
    }
    getInputData(e){
        this.setState({inputData: e.currentTarget.value}, (a, b) => {
            if(this.state.inputData !== "")
                this.fetchData(this.state.inputData);
            else{
                this.setState({
                    filteredCountries : []
                });
            }
        });
 
    }
    changeInputVal(e){
        this.setState({
            itemSelected: e.target.value
        })
    }
    updateOnItemSelect(data){
        this.setState({
            itemSelected: data,
            filteredCountries: []
        });
    }
    render(){
        return(
            <div className='searhboxWrapper'>
                <input 
                value={this.state.itemSelected} 
                type={this.props.type} 
                onKeyUp={this.getInputData.bind(this)} 
                onChange={this.changeInputVal}
                className={this.props.class} 
                placeholder={this.props.placeholder}>
                </input>
                <ListItems updateItem={this.updateOnItemSelect} items={this.state.filteredCountries}></ListItems>
            </div>
        );
    }
}
