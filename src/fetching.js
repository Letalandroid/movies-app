
import { useEffect, useState } from 'react';

export const Fetching = (url, category, api_key, lang, pag) => {

      const [resultado, setResultado] = useState({cargando: true, data: null});

      useEffect(() => {

        getDatos(url, category, api_key, lang, pag);

      }, [url, category, api_key, lang, pag]);

      const getDatos = async (url, category, api_key, lang, pag) => {

        setResultado({
          cargando: true,
          data: null
        });

        const res = await fetch(`${url}/${category}?api_key=${api_key}&language=${lang}&page=${pag}`);
        const data =  await res.json();

        setResultado({cargando: false, data});

      }

      return resultado;

  }