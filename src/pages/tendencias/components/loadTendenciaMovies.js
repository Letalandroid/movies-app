import { React, useState } from 'react';
import { Fetching } from '../../../fetching';
import './loadTendenciaMovies.css';

export const TendenciaMovies = () => {

    const poster = 'https://image.tmdb.org/t/p/w500';
    const [url] = useState('https://api.themoviedb.org/3/movie');
    const estado = Fetching(url, 'top_rated', '3609da4de9b92b18dbe1cfe4b7359c32', 'es-PE', 1);
    const {cargando, data} = estado;
    cargando ? console.log('cargando...') : console.log(data.results);

    return (
        <>
            <div className='movies'>
                {
                cargando ? <h1>el que lo lea se le moja la canoa 🏳‍🌈...</h1> :

                data.results.map((elements) => {

                    return (

                        <div className="card">
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