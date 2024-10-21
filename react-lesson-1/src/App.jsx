import './App.module.css'
import Button from './components/Button/Button'
import Heading from './components/Heading/Heading'

function App() {

  function isClick(){
    console.log([1, 2, 4, 5, 9])
  }

  return (
    <div>
      <Heading />
      <Button 
        text = "Click Me"
        handleClick = {isClick}
      />
      <Button 
        text = "Don't Click Me"
      />
      <Button />
    </div>
  )
}

export default App
