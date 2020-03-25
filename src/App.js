import React, {useState} from 'react';
import Buscador from './components/Buscador'
function App() {
  //atributos(?)
  const [termino, setTermino] = useState()
  const [imagenes, setImagenes] = useState()

  //funciones

  const fetchApi = (palabraBusqueda) => {
    const url = `https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${palabraBusqueda}`
    fetch(url).then(respuesta => respuesta.json())
    .then(resultado => console.log(resultado.hits))
  }

  const datosBusqueda = termino => {
    setTermino(termino)
    fetchApi(termino)
  }

  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imagenes</p>
        <Buscador
          datosBusqueda={datosBusqueda}
        />
      </div>
    </div>
  )
}

export default App
