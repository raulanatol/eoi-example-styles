import React, { FC, useState } from 'react';
import styles from './NumberPicker.module.css';

export const NumberPicker: FC = () => {
    const [value, setValue] = useState<number>(0);

    const increase = () => setValue(current => current + 1);
    const decrease = () => setValue(current => current - 1);

    return <div className={styles.container}>
        <button className={styles.buttons} onClick={decrease}>-</button>
        <p className={styles.label}>{value}</p>
        <button className={styles.buttons} onClick={increase}>+</button>
    </div>
};
