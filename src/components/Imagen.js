import React from 'react'
import './css/style.css'
const Imagen = (props) => {

    const {largeImageURL, likes, previewURL, tags, views} = props.imagen

  return(
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
        <div className="card">
            <img src={previewURL} alt={tags} className="card-img-top imgs"/>
            <div className="card-body">
                <p className="card-text">
                    {likes} me gusta
                </p>
                <p className="card-text">
                    {views} veces visto
                </p>
                <a href={largeImageURL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block">
                    Ver imagen
                </a>
            </div>
        </div>
    </div>
  )
}

export default Imagen;