import React from 'react';
import Pokemon from './Pokemon';

function PokeList(props) {
    return(
        <ul className="pokeList">
            {props.pokeListData.map(pokeListData => {
                return <li className="Pokemon">
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


export default PokeList;