import React from 'react';
import MOCK_API from './MOCK_DATA.json';

export default class AutocompleteText extends React.Component {
    constructor(props){
        super(props);
        this.items = MOCK_API; 
        // this.items = [
        //     'Python',
        //     'Java',
        //     'NodeJS',
        //     'C#'
        // ];
        
        this.state = {
            suggestions: [],
        };
    }
    onTextChanged = e => {
        const value =  e.target.value;
        if(value.length === 0) {
            this.setState(() =>({suggestions: []}));
        } else{
            
            // this.items.sort().filter(v => regex.test(v));
            const suggestions = this.items.filter(item => item.first_name.toLowerCase().includes(value));
            this.setState(() => ({suggestions}))
            console.log(suggestions)
        }        
        
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
            <input onChange={this.onTextChanged}  type="text"/>
            {this.renderSuggestions()}
            <div>
                {/* {this.items.map((item) => <p key={item.id}>{item.first_name}</p>)} */}
            </div>
        </div>
        )    
    }
    
}