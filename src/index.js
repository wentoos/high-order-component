import React from 'react';
import ReactDOM from 'react-dom';
import Usual from './Usual';
// import { WithHeaderDemo } from './demo';
import eruda from 'eruda'
// eruda.add(erudaFps);
eruda.init()
console.log(eruda)
ReactDOM.render(<Usual></Usual>, document.getElementById('root'));