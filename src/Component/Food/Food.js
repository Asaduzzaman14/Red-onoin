import React from 'react';
import './Food.css'

const Food = ({ food }) => {
    console.log(food);
    const { img, name } = food
    return (
        <div>

            <h3>name:{name}</h3>
            <img className='img' src={img} alt="" />
        </div>
    );
};

export default Food;








/* 

















*/