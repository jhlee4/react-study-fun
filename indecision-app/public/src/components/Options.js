import React from 'react';
import Option from './Option';
const Options = (props)=>{
    return (
        <div>
        <button onClick={props.handleRemoveAllOptions}>Remove all</button>
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
}

export default Options;
