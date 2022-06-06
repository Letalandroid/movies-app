
import { useEffect, useState } from 'react';

export const Fetching = (url, category, api_key, lang, pag) => {

      const [resultado, setResultado] = useState({cargando: true, data: null});

      useEffect(() => {

        getDatos(url, category, api_key, lang, pag);

      }, [url, category, api_key, lang, pag]);

      const getDatos = async (Url, Category, Api_key, Lang, Pag) => {

        setResultado({
          cargando: true,
          data: null
        });

        const res = await fetch(`${Url}/${Category}?api_key=${Api_key}&language=${Lang}&page=${Pag}`);
        const data =  await res.json();

        setResultado({cargando: false, data});

      }

      return resultado;

  }