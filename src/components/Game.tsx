import React, { useState } from "react";
import styled from "styled-components";
import Word from "./Word";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Game = () => {
  const [word, setWord] = useState("NOODLE");
  const [allowedAttempts, setAllowedAttempts] = useState(7);
  const [currentAttempt, setCurrentAttempt] = useState(0);

  const Rows = [];

  for (let i = 0; i < allowedAttempts; i++) {
    Rows.push(
      <Word
        key={i}
        index={i}
        answer={word}
        currentAttempt={currentAttempt}
        setCurrentAttempt={setCurrentAttempt}
      />
    );
  }

  return (
    <Wrapper>
      <h1>Hello wordle</h1>
      {Rows}
    </Wrapper>
  );
};

export default Game;
