import React from 'react';

//We can also pass destructuring to the parameter of the function which is cleaner
const Card = ({id, name, email}) => {
    // this is called destructuring: const {name, email} = props;
    return (
        <div className="whacky">
            <img alt='Robot' src ={`https://robohash.org/${id}`} height='220px' width='220px'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;