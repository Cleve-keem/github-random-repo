import { useState } from 'react'
import './App.css';

const initialCandies = [
  { name: "Chocolate Bar", flavor: "chocolate", price: 1.5 },
  { name: "Gummy Bears", flavor: "fruity", price: 0.99 },
  { name: "Lollipop", flavor: "cherry", price: 0.5 },
  { name: "Jelly Beans", flavor: "mixed", price: 1.2 },
  { name: "Candy Cane", flavor: "peppermint", price: 0.75 },
  { name: "Sour Worms", flavor: "sour", price: 1.0 },
  { name: "Toffee", flavor: "caramel", price: 1.3 },
  { name: "Marshmallow", flavor: "vanilla", price: 0.9 },
  { name: "Gum Ball", flavor: "bubblegum", price: 0.25 },
  { name: "Hard Candy", flavor: "mint", price: 0.3 }
];

function App() {
  const [candies, setCandies ] = useState(initialCandies);

  function dispense(candy){
    const leftCandies = candies.filter((c) => c.name !== candy.name)
    setCandies(leftCandies);
    console.log("i am rendered!")
  }

  return (
    <>
      <div>
        <h2>Candie Dispenser</h2>
        <div>
          <h3>Available Candies</h3>
          {candies.length === 0 ? (
            <button onClick={() => setCandies(initialCandies)}>Refill Candies</button>
          ) : (
            <ul>
              {candies.map((candy) => (
                <li key={candy.name}>
                  <button onClick={() => {
                    dispense(candy)
                  }}>grab</button>
                  <span>{candy.name} {candy.flavor} ${candy.price}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  )
}

export default App
