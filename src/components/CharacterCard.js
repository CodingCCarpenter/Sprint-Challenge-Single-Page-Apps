import React from "react";
import { Card, CardImg, CardText, CardTitle } from 'reactstrap';

import { Link } from "react-router-dom";


export default function CharacterCard({ character }) {
  return (
    <Card>
    <div key={character.id}>
      <Link to={`/characters/${character.id}`} key={character.id}>
        <CardImg src={character.image} alt={character.name} />
        <h1>{character.name}</h1>
        <CardText>Species: {character.species}</CardText>
        <CardText>Gender: {character.gender}</CardText>
        <CardText>Status: {character.status}</CardText>
      </Link>
    </div>
    </Card>
  );
}