import React from 'react';
import useCustome from '../../hooks/useCustome';
import Food from '../Food/Food';

const Lunch = () => {
    const [foods] = useCustome()

    const lunch = foods.slice(6, 12)

    return (
        <div>
            <h2 className='my-5'>Lunch item : {lunch.length}</h2>
            <div className='food-container'>
                {
                    lunch.map(food => <Food
                        food={food}
                        key={food.id}
                    ></Food>)
                }
            </div>
        </div>
    );
};

export default Lunch;