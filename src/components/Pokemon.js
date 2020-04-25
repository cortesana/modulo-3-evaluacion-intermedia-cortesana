import React from 'react';

function Pokemon(props) {
    return(
        <div className="pokeContainer">
            <img className="pokeImg" alt={props.pokeName} src={props.pokeImg}/>
            <h2 className="pokeName">{props.pokeName}</h2>
            <ul className="pokeTypes">
                {props.pokeTypesArray.map((pokeType, index) => <li className="pokeType" key={index}>{pokeType}</li>)}
            </ul>
        </div>
    );
}

Pokemon.propTypes = {
    pokeImg: PropTypes.string,
    pokeName: PropTypes.string,
    pokeType: PropTypes.string
}

export default Pokemon;