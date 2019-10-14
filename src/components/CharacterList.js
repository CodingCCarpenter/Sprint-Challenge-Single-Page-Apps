import React, { useEffect, useState } from "react";



import axios from 'axios';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [ people, setPeople] = useState();

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getPeople = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        then(res => {
          setPeople(res.data);
          console.log(res.data.results)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getPeople();
  }, []);

  return (
    <div className="character-list">
      {people.map(person => (
        <PersonDetails />
      ))}
    </div>
  );
}

function PersonDetails = ({ person }) {
  return (
    <div>
      This
    </div>
  )
}
