import { React, useState } from 'react';
import './poster.css';
import { Fetching } from '../../../fetching';

export const Poster = () => {

    const poster = 'https://image.tmdb.org/t/p/w500';
    const [url] = useState('https://api.themoviedb.org/3/movie');
    const estado = Fetching(url, 'popular', process.env.REACT_APP_API_KEY, 'es-PE', 1);
    const {cargando, data} = estado;
    cargando ? console.log('cargando...') : console.log('Datos cargados correctamente!');

    return (
        <>
            {
                cargando ? <h1>Un momento por favor...</h1> :

                <div div class = "card bg-dark text-white w-100 mb-0" >
                    <img src={ `${ poster }${ data.results[0].backdrop_path }` } class="card-img opacity-25 w-100" alt='' />
                    <div class="card-img-overlay">
                        <h5 class="card-title display-2">{ data.results[0].original_title }</h5>
                        <p class="card-text h4 mb-3">{ data.results[0].overview }</p>
                        <button type="button" class="btn btn-light">Ver Ahora</button>
                    </div>
                </div>
            }
        </>
    );

}