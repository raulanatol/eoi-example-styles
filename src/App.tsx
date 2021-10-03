import React from 'react';
import './App.css';
import { NumberPicker as NPClass } from './className/NumberPicker';
import { NumberPicker as NPModules } from './modules/NumberPicker';
import { NumberPicker as NPStyle } from './style/NumberPicker';

const App = () => <div>
    <NPClass/>
    <NPStyle/>
    <NPModules/>
</div>;

export default App;
