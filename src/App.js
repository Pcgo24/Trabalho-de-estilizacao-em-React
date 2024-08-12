import React, { useEffect, useState } from 'react';

function App(){
  const [nutri, setNutri] = useState([]);
  
  useEffect(()=>{
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

    fetch(url)
    .then((r) => r.json())
    .then((json) =>{
        setNutri(json);
    })
  }, []);

  return(
    <div>
      <div className='Header'>
        <header>
          <strong>React Nutri</strong>
        </header>
      </div>

      {nutri.map((item)=>{
        return(
          <article key={item.id}>
            <div className='Strong'>
              <strong>{item.titulo}</strong>
            </div>
            <div className="imagem">
              <img  src={item.capa} alt={item.titulo}/>
            </div>
            <div className='paragrafo'>
              <p>{item.subtitulo}</p>
            </div>
            <div className='Span'>
              <span>{item.categoria}:</span>
            </div>
          </article>
        );
      })
      }
    </div>
  );
}

export default App;