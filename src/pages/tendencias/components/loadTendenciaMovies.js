import { React, useState } from 'react';
import { Fetching } from '../../../fetching';
import './loadTendenciaMovies.css';

export const TendenciaMovies = () => {

    const poster = 'https://image.tmdb.org/t/p/w500';
    const [url] = useState('https://api.themoviedb.org/3/movie');
    const estado = Fetching(url, 'top_rated', process.env.REACT_APP_API_KEY, 'es-PE', 1);
    const {cargando, data} = estado;
    cargando ? console.log('cargando...') : console.log('Datos cargados correctamente!');

    return (
        <>
            <div className='movies'>
                {
                cargando ? <h1>Un momento por favor...</h1> :

                data.results.map((elements) => {

                    return (

                        <div className="card mh">
                            <img src={ `${poster}${elements.backdrop_path}` } className="card-img-top" alt='' />
                            <div className="card-body">
                                <h3 className="card-text">{ elements.original_title }</h3>
                                <p className="card-text">{ elements.overview }</p>
                            </div>
                        </div>

                    );

                })

            }
            </div>
        </>
    );

}