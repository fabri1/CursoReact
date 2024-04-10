import PropTypes from 'prop-types';
import { useState } from 'react';

export const CounterApp = ({value}) => {
    
    const [ counter, setCounter ] = useState(value);

    const handleAdd = (event) => { 
        // console.log(event) 
        // setCounter(counter + 1);
        setCounter((c) => c + 1 )
    }
    
    const handleMinus = (event) => {
        setCounter((c) => c-1)
    }

    const handleReset = (event) => {
        setCounter((c) => value)
    }

    return (
      <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>

        <button onClick = { handleAdd }> +1 </button>
        <button onClick = { handleMinus }> -1 </button>
        <button aria-label='btn-reset' onClick = { handleReset }> Reset </button>
      </>
    );
}


CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}

