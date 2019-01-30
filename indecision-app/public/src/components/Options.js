import React from 'react';
import Option from './Option';
const Options = (props)=>
    (
        <div>
            <div className="widget-header">
                <h3>Your options</h3>
                <button 
                className="button--link"
                onClick={props.handleRemoveAllOptions}>Remove all</button>
            </div>
            {props.options.length ===0 && <p>Please add an option to get started</p>}
            {
                props.options.map((option)=>(
                    <Option 
                    key={option}
                    optionText = {option}
                    handleRemoveOption = {props.handleRemoveOption}
                    />
                    ))
                }
        </div>
            
    );


export default Options;

