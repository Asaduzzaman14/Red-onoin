import React from 'react';
import useCustome from '../../hooks/useCustome';
import Food from '../Food/Food';

const Dinner = () => {
    const [foods] = useCustome()
    const dinner = foods.slice(12, 18)


    return (
        <div>
            <h2 className='my-5'>Dinner item {dinner.length}</h2>
            <div className='food-container'>
                {
                    dinner.map(food => <Food
                        food={food}
                        key={food.id}
                    ></Food>)
                }
            </div>
        </div>
    );
};

export default Dinner;