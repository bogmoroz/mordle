import styled from "styled-components";

type LetterProps = {
  inputLetter: string;
  answerLetter: string;
  submitted: boolean;
};

const Letter = ({
  inputLetter,
  answerLetter,
  submitted,
}: LetterProps) => {
  const Container = styled.div<{ correct: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border: 2px solid black;
    font-size: 24px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    margin: 10px;
    background-color: ${({ correct }) =>
      correct ? "green" : submitted ? "gray" : "white"};

    &:hover {
      transform: scale(1.2);
    }
  `;

  return (
    <Container
      correct={
        inputLetter === answerLetter && submitted === true
      }
    >
      {inputLetter}
    </Container>
  );
};

export default Letter;
