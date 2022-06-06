import { React, useState } from 'react';
import './poster.css';
import { Fetching } from '../../../fetching';

document.body.style.backgroundColor = '#212529';

export const Poster = () => {

    const [url] = useState('https://api.themoviedb.org/3/movie');
    const estado = Fetching(url, 'popular', process.env.REACT_APP_API_KEY, 'es-PE', 1);
    const {cargando, data} = estado;
    cargando ? console.log('cargando...') : console.log('Datos cargados correctamente!');

    return (
        <>
            {
                cargando ? <h1>Un momento por favor...</h1> :

                <div div className = "w-100 mb-0" >
                    <div className="tarjeta card-img-overlay">
                        <h5 className="card-title display-2 text">{ data.results[0].original_title }</h5>
                        <p className="card-text h4 mb-3 text">{ data.results[0].overview }</p>
                        <button type="button" class="btn btn-light">Ver Ahora</button>
                    </div>
                </div>
            }
        </>
    );

}