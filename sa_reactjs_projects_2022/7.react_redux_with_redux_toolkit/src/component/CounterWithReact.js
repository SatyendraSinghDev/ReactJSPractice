import '../App.css';
import { useState } from "react";

function CounterWithReact() {
    const [count, setCount] = useState(0); // Initial value conut ki zero hai
    return (
      <div className='counter-wrapper'>
        <h3>Counter With React</h3>
        <button className='button' aria-label='Increment Value' onClick={() => { setCount(count + 1)}}> + </button>
        <span className='value'>Count: {count}</span>
        <button className='button' aria-label='Decrement Value' onClick={() => { setCount(count - 1)}}> - </button>
      </div>
    );
}

export default CounterWithReact