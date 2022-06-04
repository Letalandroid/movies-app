import { React, useState } from 'react';
import './poster.css';
import { Fetching } from '../../../fetching';

export const Poster = () => {

    const poster = 'https://image.tmdb.org/t/p/w500';
    const [url] = useState('https://api.themoviedb.org/3/movie');
    const estado = Fetching(url, 'popular', '3609da4de9b92b18dbe1cfe4b7359c32', 'es-PE', 1);
    const {cargando, data} = estado;
    cargando ? console.log('cargando...') : console.log(data.results);

    return (
        <>
            {
                cargando ? <h1>el que lo lea se le moja la canoa 🏳‍🌈...</h1> :

                <div className='poster'>
                    <div className='poster-info'>
                        <h2>{ data.results[0].original_title }</h2>
                        <p>{ data.results[0].overview }</p>
                        <button>Ver Ahora</button>
                    </div>
                    <div className='poster-img'>
                        <img src={ `${poster}${data.results[0].backdrop_path}` } alt={ data.results[0].overview } />
                    </div>
                </div>
            }
        </>
    );

}