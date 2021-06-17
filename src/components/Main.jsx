import React from 'react';
import Albums from './Albums';

//Componentes stateless = Retorno implícito
const Main = (props) => (
    <>
        <div className="main">
        <h1>{props.title}</h1>
        <ul className="card">
        {
            props.albums.map((album, index) => {
                return (
                    <Albums albums={album} key={index} />
                )
            })
        }
        </ul>
        </div>
    </>

)

export default Main;