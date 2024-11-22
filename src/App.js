import ImagesFor from './Components/ImagesFor';
import KnownFor from './Components/KnownFor';
import { useEffect, useState } from 'react';
import Person from './Components/Person';
import './App.css';

function App() {
  const [persons, setPersons] = useState([]);
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/search/person?query=spielberg&api_key=9b7b63dc32674b6a775fbc61bf528ccb")
    .then(res => res.json())
    .then(data => setPersons(data.results));
  },   
  []);
  
  function NextPerson(){
    setIndex((prevIndex) => {
      if (prevIndex >= 19) { return 19; } 
      return prevIndex + 1;
    });
  }

  function PreviousPerson(){
    setIndex((prevIndex) => {
      if (prevIndex <= 0 ) { return 0; }
      return prevIndex - 1;
    });
  }
  
  return (
    <div>
      { persons.length > 0 && <Person person={persons[index]}/> }
      { persons.length > 0 && <KnownFor known_for={persons[index].known_for}/> }
      { persons.length > 0 && <ImagesFor id={persons[index].id}/> }
      <div className="button-container">
        <button onClick={PreviousPerson}>Previous person</button> 
        <button onClick={NextPerson}>Next person</button>      
      </div>
    </div>
  );
}

export default App;
