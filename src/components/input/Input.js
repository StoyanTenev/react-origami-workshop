import React from 'react'
import Label from '../label/Label'

const Input = ({ id, type, value, label, onChange }) => {
    return (
        <div>
            <Label htmlFor={id} labelText={label} >
                {label}:
        </Label>
            <input id={id} type={type} value={value} onChange={onChange} />
        </div>
    )
}

export default Input