import React from 'react'
import Imagen from './Imagen'
import Paginacion from './Paginacion'
const Resultado = (props) => {

  const mostrarImagenes = () => {
    const imagenes = props.imagenes
    if(!imagenes) return null

    return(
        <React.Fragment>
            <div className="col-12 p-5 row">
                {props.imagenes.imagenes.map(imagen=>
                <Imagen imagen={imagen} key={imagen.id}/>)}
            </div> 
            <Paginacion
                paginaAnterior={props.paginaAnterior}
                paginaSiguiente={props.paginaSiguiente}
            />
        </React.Fragment>
    )
  }


  return(
      <React.Fragment>
          {mostrarImagenes()}
      </React.Fragment>
  )

}

export default Resultado