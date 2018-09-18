import React from 'react';

let WassupInputForm = (props) => {
    return <form onSubmit={ (event) => {
        event.preventDefault();
        props.addWassup(props.newWassup);
    }}>
        <input 
            type='text'
            value={props.newWassup}
            onChange={  (event) => {
                let value = event.target.value;
                props.updateWassup(value);
            }}
        />
        <input type='submit' value='Post'/>
    </form>
};

export default WassupInputForm;