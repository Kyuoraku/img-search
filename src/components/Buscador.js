import React, {useRef} from 'react'

const Buscador = (props) => {

    let textInput = useRef()

    const handler = e =>{
        e.preventDefault() 
        props.datosBusqueda(textInput.current.value)
    }

    return(
    <form onSubmit={handler}>
        <div className="row">
            <div className="form-group col-md-8">
                <input ref={textInput} placeholder="Busca tu imagen.." className="form-control form-control-lg"/>
            </div>
            <div className="form-group col-md-4">
                <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar"/>
            </div>
        </div>
    </form>
    )
}



export default Buscador