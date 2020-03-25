import React from 'react';
import PropTypes from 'prop-types';

function PasswordInput({className, id, value, onChange, onEnter}){
    return <input
        className={className}
        id={id}
        type="password"
        name="password"
        value={value}
        onChange={e=>onChange(e.target.value)}
        onKeyDown={e=>{
            if (e.key === 'Enter') {
                onEnter();
            }
        }}
    />
}

PasswordInput.defaultProps = {
    value: "",
    onChange: ()=>{},
    onEnter: ()=>{},
};

PasswordInput.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onEnter: PropTypes.func,
};

export default PasswordInput;
