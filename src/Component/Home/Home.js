import Items from '../Items/Items';
import './Home.css'

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
            <Items></Items>
        </>
    );
};

export default Home;