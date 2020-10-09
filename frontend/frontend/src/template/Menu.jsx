import React from 'react'


export default props => (
    <nav className="navbar navbar-dark navbar-expand bg-dark rounded">
        <div className='container'>
                {/* eslint-disable-next-line */}
                <a className='navbar-brand' href="#">
                    <i className='fa fa-calendar-check-o'></i> Todo App
                </a>
            
            <div id='navbar' className='collapse navbar-collapse '>
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link" href="#/Todos">Tarefas</a></li>
                    <li className="nav-item"><a className="nav-link" href="#/About">Sobre</a></li>
                </ul>

            </div>
        </div>
    </nav>
)