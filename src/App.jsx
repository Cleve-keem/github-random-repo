import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [ isOnline, setIsOnline ] = useState(true);

  useEffect(() => {
    function handleOnline(){
      setIsOnline(true);
    }
  
    function handleOffline(){
      setIsOnline(false);
    }

    // Add event listeners
  window.addEventListener('online', handleOnline);
  window.addEventListener('offline', handleOffline);

  // Cleanup event listeners on unmount
  return () => {
    window.removeEventListener('online', handleOnline);
    window.removeEventListener('offline', handleOffline);
  }
  
  }, []);

  console.log("I am running now ", window)
 
  function handleSaveButton(){
    console.log("Progress Saved!");
  }

  return (
    <>
      <div className="card">
        <button disabled={!isOnline} onClick={handleSaveButton}>
          {isOnline ? 'Save Progress' : 'Reconnection...' }
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
