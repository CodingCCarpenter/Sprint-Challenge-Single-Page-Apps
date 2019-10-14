import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Route } from 'react-router-dom';

import CharacterCard from './CharacterCard.js';


export default function CharacterList(props) {
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
        .catch(err => {
          console.log('Server Error', err);
        });
    }
    
    getPeople();
  }, []);

  return (
    <div className="character-list">
      {people.map((person) => P
        <Link to )}
    </div>
  );
}

// function PersonDetails = ({ person }) {
//   return (
//     <div>
//       This
//     </div>
//   )
// }
