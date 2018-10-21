import React from 'react';
import Card from './Card';

// These are called pure components or dumb components
// props does not change
// To change according to the search criteria we should use @STATE
const CardList = ({robots}) => {
    const cardsArray = robots.map((user, i) => {
        return <Card
        key = {i}  
        id={robots[i].id} 
        name={robots[i].name} 
        email={robots[i].email}/>
    }) 
    return (
        <div>
            {cardsArray}
        </div>
    );

}

export default CardList;