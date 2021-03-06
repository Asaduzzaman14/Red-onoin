import { Link } from 'react-router-dom';
import Items from '../Items/Breakfast';
import './Home.css'

import {
    Routes,
    Route,

    Outlet,
} from "react-router-dom";
import CustomerReview from '../CustomerReview/CustomerReview';
const Home = () => {
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
            <div className='menu'>
                <Link to={'/breakfast'}>Breakfast</Link>
                <Link to={'/lunch'}>Lunch</Link>
                <Link to={'/dinner'}>Dinner</Link>
            </div>

            <div>
                <Outlet></Outlet>
                <CustomerReview></CustomerReview>

            </div>
        </>
    );
};

export default Home;