import React from 'react';
import MOCK_API from './MOCK_DATA.json';

export default class AutocompleteText extends React.Component {
    constructor(props){
        super(props);
        this.items = MOCK_API; 
        
        this.state = {
            suggestions: [],
        };
    }
    onTextChanged = e => {
        const value =  e.target.value;
        let suggestions = [];
        if(value.length > 0) {
            const regex = new RegExp(`^${value}`,'i');
            suggestions = this.items.sort().filter(v => regex.test(v));
        }
        this.setState(() => ({suggestions}));
    }
    renderSuggestions () {
        const {suggestions} = this.state;
        if (suggestions.length === 0) {
            return null;
        }
        return(
            <ul>
                {suggestions.map((item,key) => <li style={{backgroundColor:'white'}} key={key}> {item.first_name}</li>)}
            </ul>
        )
    }
    render(){
        return(
        <div style={{backgroundColor:'white'}}>
            <input onChange={this.onTextChanged} type="text"/>
            {this.renderSuggestions()}
        </div>
        )    
    }
    
}