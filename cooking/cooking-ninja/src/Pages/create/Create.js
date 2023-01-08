import { useRef, useState } from 'react';

// styles
import './Create.css'

export default function Create() {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [newIngredient, setNewIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const ingredienInput = useRef(null);


  const handleSubmit = (ev) => {
    ev.preventDefault();

    console.log(title, cookingTime, method, ingredients);
  }

  const handleAdd = (event) => {
    event.preventDefault();
    const ing = newIngredient.trim();

    if (ing && !ingredients.includes(ing)) {
      setIngredients(prevIng => [...prevIng, ing]);
    }

    setNewIngredient('');
    ingredienInput.current.focus();
  }

  return (
    <div className='create'>
      <h2 className='page-title'>Add a new recipe</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title:</span>
          <input
            type='text'
            onChange={ (e) => setTitle(e.target.value) }
            value={title}
            required
          />
        </label>

        <label>
          <span>Recipe ingredients</span>
          <div className='ingredients'>
            <input
              type='text'
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredienInput}
            />
            <button
              className='btn'
              onClick={handleAdd}>Add</button>
          </div>
        </label>
        <p>Current ingredients: { ingredients.map(i => <em key={i}>{i}, </em>) }</p>

        <label>
          <span>Recipe method:</span>
          <textarea
            onChange={ (e) => setMethod(e.target.value) }
            value={method}
            required
          />
        </label>

        <label>
          <span>Cooking Time (minutes):</span>
          <input
            type='number'
            onChange={ (e) => setCookingTime(e.target.value) }
            value={cookingTime}
            required
          />
        </label>

        <button className='btn'>Submit</button>

      </form>
    </div>
  )
}
