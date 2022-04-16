import useCustome from '../../hooks/useCustome';
import Food from '../Food/Food';
import './Breakfast.css'

const Breakfast = () => {
    const [foods] = useCustome()
    const breakfast = foods.slice(0, 6)

    return (
        <>
            <h2 className='my-5'>Breakfast item :{breakfast.length}</h2>

            <div className='food-container'>


                {
                    breakfast.map(food => <Food
                        food={food}
                        key={food.id}
                    ></Food>)
                }
            </div>
        </ >
    );

};

export default Breakfast;