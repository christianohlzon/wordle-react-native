import { View } from 'react-native';

import { GuessRow } from './GuessRow';
import { PreviousGuessRow } from './PreviousGuessRow';
import { RemainingGuessRow } from './RemainingGuessRow';

export function Board({
    previousGuesses,
    currentGuess,
    answer,
    isGameOver,
    noWordGuesses,
}) {
    const remainingGuesses = 5 - previousGuesses.length;

    const RemainingGuesses = () => {
        if (remainingGuesses === 0) return;
        const currentGuessOffset =
            isGameOver && previousGuesses.length < 5 ? 0 : 1;
        const unusedGuesses = [
            ...Array(remainingGuesses - currentGuessOffset).keys(),
        ];
        return unusedGuesses.map((row) => {
            return <RemainingGuessRow key={row} />;
        });
    };

    return (
        <View>
            {previousGuesses.map((previousGuess, index) => {
                return (
                    <PreviousGuessRow
                        key={index}
                        previousGuess={previousGuess}
                        answer={answer}
                    />
                );
            })}
            {!isGameOver && (
                <GuessRow
                    currentGuess={currentGuess}
                    noWordGuesses={noWordGuesses}
                />
            )}
            <RemainingGuesses />
        </View>
    );
}
