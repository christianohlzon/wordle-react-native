import { View } from 'react-native';

import { Square } from './Square';

export function RemainingGuessRow() {
    const fiveAsArrary = [...Array(5)];
    return (
        <View className="flex flex-row justify-between">
            {fiveAsArrary.map((letter, index) => {
                return (
                    <Square
                        key={index}
                        letter={letter}
                        isCorrect={false}
                        isInWord={false}
                        isFocused={false}
                    />
                );
            })}
        </View>
    );
}
