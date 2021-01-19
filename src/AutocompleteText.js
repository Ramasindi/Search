import React from 'react';
<<<<<<< HEAD
import './AutocompleteText.css'
//import MOCK_API from './MOCK_DATA.json';

=======
import MOCK_API from './MOCK_DATA.json';
>>>>>>> 84214bc38cbb976b7fa6df8e6995a0d656767b80

export default class AutocompleteText extends React.Component {
    constructor(props){
        super(props);
<<<<<<< HEAD
        this.items = ["David","Damien","Sara","Jane","Thalu","Sandi"]; 
       
        this.state = {
            suggestions: [],
            text: '',
        };
    }
    onTextChanged = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if(value.length > 0){
            const regex = new RegExp(`^${value}`,'i');
            suggestions = this.items.sort().filter(v => regex.test(v));
        }
        this.setState(() => ({suggestions,text: value}));           
    }
    suggestionSelected (value) {
        this.setState(() => ({
            text: value,
            suggestions: [],
        }))
    }

    renderSuggestions () {
        const {suggestions} = this.state;
        if(suggestions.length === 0) {
=======
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
>>>>>>> 84214bc38cbb976b7fa6df8e6995a0d656767b80
            return null;
        }
        return(
            <ul>
<<<<<<< HEAD
                {suggestions.map((item,key) => <li onClick={() => this.suggestionSelected(item)} style={{color:'red'}} key={key}> {item}</li>)}
=======
                {suggestions.map((item,key) => <li style={{backgroundColor:'white'}} key={key}> {item.first_name}</li>)}
>>>>>>> 84214bc38cbb976b7fa6df8e6995a0d656767b80
            </ul>
        )
    }
    render(){
<<<<<<< HEAD
        const { text } = this.state;
        return(
        <div className="AutocompleteText">
            <input value={text} onChange={this.onTextChanged} type="text"/>
            {this.renderSuggestions()}
=======
        return(
        <div style={{backgroundColor:'white'}}>
            <input onChange={this.onTextChanged}  type="text"/>
            {this.renderSuggestions()}
            <div>
                {/* {this.items.map((item) => <p key={item.id}>{item.first_name}</p>)} */}
            </div>
>>>>>>> 84214bc38cbb976b7fa6df8e6995a0d656767b80
        </div>
        )    
    }
    
}