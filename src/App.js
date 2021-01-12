import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState();
  const [text, setText] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Hello World');
  }

  return (
    <section className="section-center">
      <h3>Tired of boring lorem Ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor='amount'>
          Paragraphs: 
        </label>
        <input type="number" name="amount" id="amount" value={count} onChange={(e) => setCount(e.target.value) }/>
        <button type="submit">Add</button>
      </form>
    </section>
  
    )
}

export default App;
