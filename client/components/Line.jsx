import React from 'react';

const Line = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5, 
            width: '75%'
        }}
    />
);

export default Line;