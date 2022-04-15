import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Food from '../Food/Food';
import './Home.css'

const Home = () => {

    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])



    return (

        <>
            <div className='display'>
                <div className='display-info'>
                    <div >
                        <h1 className='title'>Best food waiting for you belly</h1>
                        <div class="input-group mt-5 w-100 d-flex ">
                            <input type="text" class="search mx-auto form-control" placeholder="search food item" aria-label="Recipient's username" />
                            <button class="btn " type="button" >Search</button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
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

        </>
    );
};

export default Home;