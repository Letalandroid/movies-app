import React from 'react';
import './header.css';

export const Header = () => {

    return (

        <header>
            <nav className = "navbar navbar-expand-lg navbar-dark bg-dark" >
                <div className="container-fluid">
                    <h2>Movies App</h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div div className = "collapse navbar-collapse justify-content-end"
                    id = "navbarNav" >
                    <ul className = "navbar-nav" >
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/movies-app">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/movies-app/popular">Populares</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/movies-app/tendencias">Top tendencias</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </header>

    )

}