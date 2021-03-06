import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../template/Custom.css'

import React from 'react';
import Routes from './Routes';
import Menu from '../template/Menu';

export default (props) => (
    <div className='container'>
        <Menu />
        <Routes />
    </div>
)