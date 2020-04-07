import React from 'react';

function Pokemon(props) {
    return(
        <div className="pokeContainer">
            <img className="pokeImg" alt="Pokemon" src={props.pokeImg}/>
            <h2 className="pokeName">{props.pokeName}</h2>
            <ul className="pokeTypes">
                {props.pokeTypesArray.map((pokeType, index) => <li className="pokeType" key={index}>{pokeType}</li>)}
            </ul>
        </div>
    );
}

export default Pokemon;