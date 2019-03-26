import React, { Component } from 'react';
class RadioButton extends Component {
    
    
    render() { 
        const { radioName , displayName, selected} = this.props;
        return ( 
            <div className="space-between-radio">
                <input type="radio"  className="radio-spacing" onChange={() => this.props.paymentType(displayName)} name={radioName} checked={radioName == selected} />
                <label  >{displayName}</label>
            </div>
         );
    }
}
 
export default RadioButton;