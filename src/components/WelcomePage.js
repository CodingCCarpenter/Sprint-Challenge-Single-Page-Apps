import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.header`
  text-align: center;
  background-color: black;
  color: white;
  padding-top: 20px;
  height: 500px;
`;

const Img = styled.img`
  width: 100%;
`;

const Span = styled.span`
  background-color: white;
  padding: 10px;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Header>
        <Img
          className="main-img"
          src="https://wallpaperscute.com/wp-content/uploads/2018/04/Desktop-Wallpaper-Rick-and-Morty-Art.jpg"
          alt="Rick and Morty Get Swifty"
        />
        <br />
        <br />
        <br />
        <Link to="/characters">
          <Span>Click Here for a List of Characters</Span>
        </Link>
        <br />
        <br />
        <br />
        <Link to="/locations">
          <Span>Click Here for a List of Locations</Span>
        </Link>
        <br />
        <br />
        <br />
        <Link to="/episodes">
          <Span>Click Here for a List of Episodes</Span>
        </Link>
      </Header>
    </section>
  );
}