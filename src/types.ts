export type GameStatus = "playing" | "won" | "lost";

export interface WordleGame {
  readonly wordToGuess: string;
  readonly maxAttempts: number;
  readonly previousGuesses: readonly string[];
  readonly gameStatus: GameStatus;
}

export interface GuessedWord {
  word: string;
  letterMatches: number;
  letterPositions: number;
}

export interface GuessResult {
  guessedWord: GuessedWord;
  game: WordleGame;
}
