import React from 'react';
import Pokemon from './Pokemon';

function PokeList(props) {
    return(
        <ul className="pokeList">
            {props.pokeListData.map(pokeListData => {
                return <li className="Pokemon" key={pokeListData.id}>
                    <Pokemon
                        pokeImg = {pokeListData.url}
                        pokeName = {pokeListData.name}
                        pokeTypesArray = {pokeListData.types}
                        />

                </li>
            })}
        </ul>
    );
}

Pokemon.propTypes = {
    id: PropTypes.string,
    url: PropTypes.string,
    name: PropTypes.string,
    types: PropTypes.string
}

export default PokeList;