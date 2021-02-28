import React from 'react';

const Country = (props) => {
    const { name, population, region, flag } = props.country
    return (
        <div>
            {/* <h4>Country Name: {props.name}</h4> */}
            <h4>Country Name: {name}</h4>
            <p>Population: {population} </p>
            <p><small>Region: {region}</small></p>
            <img style={{ height: '50px' }} src={flag} alt="" />

        </div>
    );
};

export default Country;