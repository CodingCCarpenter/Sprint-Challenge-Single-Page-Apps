import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CharacterCard from "./CharacterCard.js";

export default function CharacterList({ characters }) {
  const Section = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background-color: black;
    color: white;
  `;

  return (
    <Section className="character-list">
      {characters.map((index) => (
        <CharacterCard character={index} />
      ))}
    </Section>
  );
}