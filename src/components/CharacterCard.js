import React, { useState, useEffect } from "react";


// import CharacterList from '.CharacterList.js';

export default function CharacterCard ({name, status, species, image, gender, location}){
  return(
    <div className = 'character-card'>
      <h2>{name}</h2>
      <div className = "species">
        Species: <em>{species}</em>
      </div>
      <div className = 'gender'>Gender: {gender}
      </div>
      <div className = 'location'>
        Location: {location}
      </div>
      <div className = 'status'>
        Status: <strong>{status}</strong>
      </div>
      <img src='{image}' alt='character image' />
    </div>
  )}
