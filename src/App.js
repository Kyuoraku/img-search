import React, {useState} from 'react'; 
import Buscador from './components/Buscador' 
import Resultado from './components/Resultado'

function App() {
  //atributos(?)
  // eslint-disable-next-line no-unused-vars
  const [termino, setTermino] = useState()
  const [imagenes, setImagenes] = useState()
  const [pagina, setPagina] = useState(1)

  //funciones
  const fetchApi = (palabraBusqueda) => {
    const url = `https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${palabraBusqueda}&per_page=16&page=${pagina}`
    fetch(url).then(respuesta => respuesta.json())
    .then(resultado => {
      let res = resultado.hits
      //console.log(res)
      setImagenes({imagenes: res})
    })
  }

  const datosBusqueda = termino => {
    setTermino(termino)
    fetchApi(termino)
  }

  const paginaAnterior = () => {

    if (pagina === 1) return null

    setPagina(pagina-1)

    fetchApi(termino)

    scroll()
  }
  const paginaSiguiente = () => {

    setPagina(pagina+1)
    fetchApi(termino)
    scroll()
  }
  
 const scroll = () => {
   const elemento = document.querySelector('.jumbotron')
   elemento.scrollIntoView('smooth', 'start')
 }
 

  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imagenes</p>
        <Buscador
          datosBusqueda={datosBusqueda}
        />
      </div>
      <div className="row justify-content-center">
        <Resultado imagenes={imagenes}
                paginaAnterior={paginaAnterior}
                paginaSiguiente={paginaSiguiente}
        />
      </div>
    </div>
  )
}

export default App
