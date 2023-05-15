import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Letter from "./Letter";

const Container = styled.div`
  display: flex;
`;

type WordProps = {
  answer: string;
  index: number;
  currentAttempt: number;
  setCurrentAttempt: React.Dispatch<
    React.SetStateAction<number>
  >;
};

const Word = ({
  answer,
  setCurrentAttempt,
  index,
  currentAttempt,
}: WordProps) => {
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (index !== currentAttempt) {
        return;
      }

      if (event.key === "Backspace") {
        setInput((prevInput) => prevInput.slice(0, -1));
      } else if (event.key === "Enter") {
        // Check answer
        setSubmitted(true);
        setCurrentAttempt(
          (prevCurrentAttempt) => prevCurrentAttempt + 1
        );
      } else if (/^[a-zA-Z]$/.test(event.key)) {
        setInput((prevInput) =>
          (prevInput + event.key)
            .slice(0, answer.length)
            .toUpperCase()
        );
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () =>
      window.removeEventListener("keydown", handleKeyPress);
  }, [submitted, currentAttempt]);

  const inputLetters = input.split("");

  const answerLetters = answer.split("");

  return (
    <Container>
      {answerLetters.map((answerLetter, index) => (
        <Letter
          key={index}
          inputLetter={inputLetters[index]}
          answerLetter={answerLetter}
          submitted={submitted}
        />
      ))}
    </Container>
  );
};

export default Word;
