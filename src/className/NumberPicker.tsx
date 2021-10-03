import React, { FC, useState } from 'react';


export const NumberPicker: FC = () => {
    const [value, setValue] = useState<number>(0);

    const increase = () => setValue(current => current + 1);
    const decrease = () => setValue(current => current - 1);

    return <div className="number-picker">
        <button className="number-picker-buttons" onClick={decrease}>-</button>
        <p className="number-picker-label">{value}</p>
        <button className="number-picker-buttons" onClick={increase}>+</button>
    </div>
};
