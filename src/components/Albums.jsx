import React from 'react';

const Albums = (props) => {

    return (
        <li className="cards_item">
            <div className="card">
                <div className="card_image">
                    <img src={props.albums.portada} />
                </div>
                <div className="card_content">
                    <h2 className="card_title">{props.albums.artista}</h2>
                    <p className="card_text">{props.albums.titulo}</p>
                    <button className="btn card_btn">{props.albums.agrupacion}</button>
                </div>
            </div>
        </li>
    )

}

export default Albums;