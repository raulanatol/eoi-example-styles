import React, { CSSProperties, FC, useState } from 'react';

const numberPickerStyle: CSSProperties = {
    alignContent: 'center',
    alignItems: 'center',
    display: 'flex',
    gap: '20px',
    margin: '20px'
};

const numberPickerButtonsStyle: CSSProperties = {
    backgroundColor: '#397ab0',
    borderRadius: '50%',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    fontSize: '1.5rem',
    height: '30px',
    lineHeight: '1.5rem',
    textAlign: 'center',
    textDecoration: 'none',
    width: '30px'
};

const numberPickerLabelStyle: CSSProperties = {
    outline: 'none',
    textAlign: 'center',
    width: '80px'
};

export const NumberPicker: FC = () => {
    const [value, setValue] = useState<number>(0);

    const increase = () => setValue(current => current + 1);
    const decrease = () => setValue(current => current - 1);

    return <div style={numberPickerStyle}>
        <button style={numberPickerButtonsStyle} onClick={decrease}>-</button>
        <p style={numberPickerLabelStyle}>{value}</p>
        <button style={numberPickerButtonsStyle} onClick={increase}>+</button>
    </div>
};
