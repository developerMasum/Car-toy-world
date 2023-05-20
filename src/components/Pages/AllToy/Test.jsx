import React from 'react';

const Test = ({toy}) => {
    console.log(toy);
    return (
        <div>
            <ul>
                <li>{toy.name}</li>
            </ul>
        </div>
    );
};

export default Test;