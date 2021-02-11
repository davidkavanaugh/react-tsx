import './App.css';
import {useState} from 'react';

interface Recipe {
  title: string;
  description: string;
  steps: Array<string>;
}

const App = () => {
  const mashedPotatoesRecipe: Recipe = {
    title: "Mashed Potatoes",
    description: "Delicious garlic mashed red potatoes",
    steps: [
      'Cut',
      'Mash',
      'Season to taste'
    ]
  }
  const [recipe, setRecipe] = useState<Recipe>({
    title: "",
    description: "",
    steps: []
  });
  const {title, description, steps} = recipe;

  const handleClick = () => {
    setRecipe({ ...mashedPotatoesRecipe })
  }
  if(!title) return (<button onClick={() => handleClick()}>Get Recipe</button>);

  return(
    <>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Steps:</p>
      <ol>
        {steps.map((step, idx) => {
          return <li key={idx}>{step}</li>
        })}
      </ol>
    </>
  )
}

export default App;
