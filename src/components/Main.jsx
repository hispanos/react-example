import React from 'react';

//Componentes stateless = Retorno implícito
const Main = (props) => (
    <>
        <div className="main">
        <h1>{props.title}</h1>
        <ul className="card">
        {
            props.artist.map((album, index) => {
                return (
                    <>
                        <li className="cards_item">
                            <div className="card">
                                <div className="card_image">
                                    <img src={album.portada} />
                                </div>
                                <div className="card_content">
                                    <h2 className="card_title">{album.artista}</h2>
                                    <p className="card_text">{album.titulo}</p>
                                    <button className="btn card_btn">Leer más</button>
                                </div>
                            </div>
                        </li>
                    </>
                )
            })
        }
        </ul>
        </div>
    </>

)

export default Main;