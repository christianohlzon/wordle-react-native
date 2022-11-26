import { View } from 'react-native';

import { Square } from './Square';

export function PreviousGuessRow({ previousGuess, answer }) {
    return (
        <View className="flex flex-row justify-between">
            {previousGuess.map((letter, index) => {
                const isCorrect = letter === answer[index];
                const isInWord = answer.find((l) => l === letter);
                return (
                    <Square
                        key={index}
                        letter={letter}
                        isCorrect={isCorrect}
                        isInWord={isInWord}
                        isFocused={false}
                    />
                );
            })}
        </View>
    );
}
