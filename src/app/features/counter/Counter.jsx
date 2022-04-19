import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  increment, 
  decrement, 
  reset, 
  incrementByAmount, 
  selectCount 
} from './counterSlice';


const Counter = () => {

  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = React.useState(0);

  return (
    <section>

      <p>{count}</p>
        <div> 
            <button onClick={ () => dispatch(increment() )}>Increment</button>
            <button onClick={ () => dispatch(decrement() )}>Decrement</button>
        </div>

        <div>
        <input
          placeholder="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        </div>
    </section>
  )
}

export default Counter;