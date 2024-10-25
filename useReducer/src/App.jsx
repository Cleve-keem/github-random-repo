import { useReducer } from 'react';
import './App.css';

const initialState  = {
  count: 0,
  error: null, 
}

function reducer(state, action){
  switch(action.type){
    case 'increment': {
      const newCount = state.count + 1;
      const limit = newCount > 5;

      return {...state, 
        count: limit ? state.count : newCount, 
        error: limit ? 'Maximum count reached ' : null,
      }
    }
    case 'decrement': {
      const newCount = state.count - 1;
      const limit = newCount < 0;

      return {...state, 
        count: limit ? state.count : newCount, 
        error: limit ? 'Minimum count reached ' : null,
      }
    }
    default:
      return initialState;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>
        <h2>Count: {state.count}</h2>
        {state.error && <div>{state.error}</div>}
        <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
        <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
      </div>
    </>
  )
}

export default App
