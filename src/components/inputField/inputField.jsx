import React, { Component } from 'react';

class InputField extends Component {
    state = {  }
    
    onFieldChange(e) {
        console.log('onFieldChange----'+e.target.name+'-------'+e.target.value)
        this.props.handleChange(e.target.name, e.target.value);
    }
    
    render() { 
        const {displayName,inputType,inputHolder,inputName, valueChanged} = this.props;
        return ( <form>
            <label htmlFor="psw"><b>{displayName}</b></label>
            <input type={inputType} placeholder={inputHolder} name={inputName} onChange={(e)=> this.onFieldChange(e)} value={valueChanged}  required/>
        </form> );
    }
}
 
export default InputField;