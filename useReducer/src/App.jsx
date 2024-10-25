import { useReducer } from 'react';
import './App.css';

const initialstate  = {
  count: 0,
  error: string | null, 
}

// const Action = {
//   type: 'increment' | 'decrement'
// }

function reducer(state, action){
  switch(action.type){
    case 'increment': {
      const newCount = count + 1;
      const hasError = newCount > 5;

      return {...state, count: hasError ? state.count : newCount, 
        error: hasError ? 'Maximum count reached ' : null,
      }
    }
    case 'decrement': {
      const newCount = count - 1;
      const hasError = newCount < 0;

      return {...state, count: hasError ? state.count : newCount, 
        error: hasError ? 'Minimum count reached ' : null,
      }
    }
    default:
      return initialstate;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialstate);


  return (
    <>
      
    </>
  )
}

export default App
