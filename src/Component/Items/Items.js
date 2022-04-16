import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Food from '../Food/Food';
import './Items.css'

const Items = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    return (
        <>
            <div className='menu'>
                <Link to={''}>Breakfast</Link>
                <Link to={''}>Lunch</Link>
                <Link to={''}>Dinner</Link>
            </div>

            {
                foods.map(food => <Food
                    food={food}
                    key={food.id}

                ></Food>)

            }

        </ >
    );

};

export default Items;